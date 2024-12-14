import { DetailedProduct } from "../../modules/homeModule/detailedProduct/DetailedProduct";
import { HeroBlock } from "../../modules/homeModule/heroBlock/HeroBlock";
import { ProductBlock } from "../../modules/homeModule/productBlock/ProductBlock";

export const HomePage = () => {
  return (
    <div>
      <HeroBlock />
      <ProductBlock />
      <DetailedProduct />
    </div>
  );
};