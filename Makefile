IMAGE_DEV = fibraville-frontend-dev:latest
FILE_DEV = Dockerfile.dev
CONTAINER_DEV = fibraville-frontend-dev

IMAGE_PROD = fibraville-frontend-prod:latest
FILE_PROD = Dockerfile.prod
CONTAINER_PROD = fibraville-frontend-prod

MANAGECMD = docker exec -it $(CONTAINER_DEV)

all:
	@echo "Hello $(LOGNAME), nothing to do by default"
	@echo "Try 'make help'"

help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help

define build_image
	docker build --tag $(1) --file $(2) .
	docker stop $(3) || true && docker rm $(3) || true
	docker run -d --name $(3) --network=0.0.0.0 -p 3000:3000 $(1) /bin/bash
endef

dev: ## Build the container for development
	$(call build_image,$(IMAGE_DEV),$(FILE_DEV),$(CONTAINER_DEV))

build: ## Build the container for production
	$(call build_image,$(IMAGE_PROD),$(FILE_PROD),$(CONTAINER_PROD))

restart: ## Restart the container
	docker restart $(CONTAINER_DEV)

cmd: ## Access bash
	$(MANAGECMD) /bin/bash

up: ##
	docker restart $(CONTAINER_DEV)
	$(MANAGECMD) "yarn run"

down:
	docker stop $(CONTAINER_DEV)

remove:
	docker stop $(CONTAINER_DEV) || true && docker rm $(CONTAINER_DEV) || true
	docker rmi $(IMAGE_DEV)
