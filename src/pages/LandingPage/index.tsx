import Lottie from "react-lottie";
import AOS from "aos";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import { BsLockFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaGlobe, FaFacebookF, FaInstagram } from "react-icons/fa";
import { CgPhone } from "react-icons/cg";
import { IoLogoWhatsapp, IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import {
  Header,
  Container,
  Menu,
  Banner,
  InnerBanner,
  Main,
  AboutUs,
  Services,
  PlanOptions,
  Coverage,
  ContactUs,
  Whats,
  Animation,
  MainContainer,
  Footer,
} from "./style";
import {
  BASE_PLAN,
  PLUS_PLAN,
  EXTREME_PLAN,
  EXCLUSIVE_PLAN,
} from "../../utils/plans";
import animationData from "../../assets/lottie/contact-us.json";
import servicesImg from "../../assets/img/home-services.png";
import internetImg from "../../assets/img/home-services-internet.png";
import Logo from "../../components/Logo";
import CardPlan from "../../components/CardPlan";

const cards = [
  <CardPlan plan={BASE_PLAN} />,
  <CardPlan plan={PLUS_PLAN} />,
  <CardPlan plan={EXTREME_PLAN} />,
  <CardPlan plan={EXCLUSIVE_PLAN} />,
];

const responsive = {
  0: {
    items: 1,
  },
  579: {
    items: 2,
  },
  989: {
    items: 3,
  },
  1279: {
    items: 4,
  },
};

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toogleMenu = () => {
    setIsOpen(!isOpen);
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header>
        <Container>
          <Logo width="200" />
          <label htmlFor="menu" onClick={toogleMenu}>
            {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
          </label>
          <input
            type="checkbox"
            name="menu"
            id="menu"
            checked={isOpen}
            readOnly
          />
          <Menu>
            <ul>
              <li>
                <Scroll
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  activeClass="active"
                  onClick={toogleMenu}
                >
                  Sobre nós
                </Scroll>
              </li>
              <li>
                <Scroll
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  onClick={toogleMenu}
                >
                  Serviços
                </Scroll>
              </li>
              <li>
                <Scroll
                  to="plans"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  onClick={toogleMenu}
                >
                  Planos
                </Scroll>
              </li>
              <li>
                <Scroll
                  to="coverage"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  onClick={toogleMenu}
                >
                  Cobertura
                </Scroll>
              </li>
              <li>
                <Scroll
                  to="contact"
                  spy={true}
                  smooth={true}
                  onClick={toogleMenu}
                >
                  Fale conosco
                </Scroll>
              </li>
              <li>
                <Link to="/login">
                  <BsLockFill /> Acessar conta
                </Link>
              </li>
            </ul>
          </Menu>
        </Container>
      </Header>
      <Banner>
        <InnerBanner>
          <div>
            <p>Chegou em Joinville </p>
            <span>A internet que nem a chuva derruba</span>
          </div>
        </InnerBanner>
      </Banner>
      <Main>
        <MainContainer>
          <AboutUs id="about" data-aos="fade-right" data-aos-duration="1500">
            <h2>Sobre nós</h2>
            <p>
              Fundada em 2021, na cidade de Joinville, a Fibraville tem como
              objetivo oferecer aos clientes internet de alta qualidade, com
              equipamentos de ultima geração e atendimento personalizado para
              seus clientes.
            </p>
          </AboutUs>
          <Services id="services" data-aos="fade-left" data-aos-duration="1500">
            <h2>Serviços</h2>
            <section data-aos="fade-right" data-aos-duration="1500">
              <img src={servicesImg} alt="Mulher ao telefone" />
              <div>
                <h3>
                  <CgPhone /> Atendimento
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  pellentesque lorem id luctus sodales. Ut lobortis eget justo
                  nec gravida (100%fibra otica e banda larga ilimitada).
                </p>
              </div>
            </section>
            <section data-aos="fade-left" data-aos-duration="1500">
              <img src={internetImg} alt="Pessoa acessando a internet" />
              <div>
                <h3>
                  <FaGlobe /> Internet
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  pellentesque lorem id luctus sodales. Ut lobortis eget justo
                  nec gravida (100%fibra otica e banda larga ilimitada).
                </p>
              </div>
            </section>
          </Services>
          <PlanOptions id="plans" data-aos="fade-left" data-aos-duration="1500">
            <h2>Planos</h2>
            <AliceCarousel
              mouseTracking
              items={cards}
              responsive={responsive}
              disableButtonsControls
              controlsStrategy="responsive"
            />
          </PlanOptions>
          <Coverage
            id="coverage"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h2>Cobertura</h2>
            <div>
              <section>
                <span>Atual:</span>
                <ul>
                  <li>Profipo</li>
                </ul>
              </section>
              <section>
                <span>Em breve:</span>
                <ul>
                  <li>Boehmerwald</li>
                  <li>Santa Catarina</li>
                </ul>
              </section>
            </div>
          </Coverage>
        </MainContainer>
        <ContactUs id="contact">
          <section>
            <h2>Fale conosco</h2>
            <Whats
              target="_blank"
              rel="noreferrer"
              href="https://api.whatsapp.com/send/?phone=554733079192&text=Ol%C3%A1%21%0D+Gostaria+de+saber+mais.&app_absent=0"
            >
              <IoLogoWhatsapp />
            </Whats>
            <span>
              <CgPhone /> (47) 3307-9192
            </span>
            <div>
              <a
                href="https://www.facebook.com/fibraville"
                target="_blank"
                rel="noreferrer"
                title="Siga nosso Facebook!"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/fibraville/"
                target="_blank"
                rel="noreferrer"
                title="Siga nosso Instagram!"
              >
                <FaInstagram />
              </a>
            </div>
            <Animation>
              <Lottie options={defaultOptions} />
            </Animation>
          </section>
        </ContactUs>
      </Main>
      <Footer>
        <p>
          Fibraville Tecnologia LTDA CNPJ: 42.631.920/0001-58. Copyright 2021 ©
          Fibraville
          <br />
          Todos os direitos reservados.
        </p>
      </Footer>
    </>
  );
};

export default LandingPage;
