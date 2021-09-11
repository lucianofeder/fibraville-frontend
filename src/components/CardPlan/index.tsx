import Button from "../Button";
import {
  Container,
  DescriptionArea,
  Header,
  HeaderInfo,
  PriceInfo,
  PriceDiv,
  HeaderPrice,
  PriceHighlight,
  DescriptionText,
  DescriptionTextBorder,
  ArrowDropdown,
  CheckCircle,
  TitlePlan,
} from "./style";

interface Plan {
  namePlan: string;
  price: number;
  download: number;
  upload: number;
  url: string;
}

interface Props {
  plan: Plan;
}

const CardPlan = ({ plan }: Props) => {
  const { namePlan, price, download, upload, url } = plan;

  let name = namePlan.toUpperCase();

  const color = {
    BASE: "#44750F",
    PLUS: "#F5B80E",
    EXTREME: "#385FF7",
    EXCLUSIVE: "#E83F6F ",
  };

  let price_arr = price.toFixed(2).toString().split(".");

  let bgColor = color[name];

  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <Container>
      <TitlePlan bgcolor={bgColor}>PLANO {name}</TitlePlan>
      <DescriptionArea>
        <Header bgcolor={bgColor}>
          <HeaderInfo>{download} MEGA</HeaderInfo>
          <PriceInfo>A PARTIR DE:</PriceInfo>
          <PriceDiv>
            <HeaderPrice>R$</HeaderPrice>
            <PriceHighlight>{price_arr[0]}</PriceHighlight>
            <HeaderPrice>,{price_arr[1]}</HeaderPrice>
          </PriceDiv>
          <ArrowDropdown bgcolor={bgColor} />
        </Header>

        <DescriptionTextBorder>
          <CheckCircle bgcolor={bgColor} /> Download {download} mega
        </DescriptionTextBorder>
        <DescriptionText>
          <CheckCircle bgcolor={bgColor} /> Upload {upload} mega
        </DescriptionText>

        <Button theme="plans" bgColor={bgColor} onClick={handleClick}>
          Contratar
        </Button>
      </DescriptionArea>
    </Container>
  );
};

export default CardPlan;
