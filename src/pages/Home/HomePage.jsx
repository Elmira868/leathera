
import BestSelling from "../../components/Templates/Home/NewProducts/NewProducts.jsx";
import Features from "./Fragments/Features.jsx";
import HeroSlider from "./Fragments/HeroSlider.jsx";

const HomePage = () => {
 

  return (
    <div>
      <HeroSlider />
      <Features />
     <BestSelling/>
    </div>
  );
};

export default HomePage;