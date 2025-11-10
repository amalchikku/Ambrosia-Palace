import React from "react";
import NavBar from "../components/navBar";
import HeroBanner from "../components/HeroBanner";
import Footer from "../components/HomeSections/Footer";
import ParagraphArticle from "../components/ArticleSection/ParagraphArticle";
import SectionGrid from "../components/HomeSections/SectionGrid";
import Food2 from "../assets/Article Sec2.jpg";
import Food1 from "../assets/Article Sec1.jpg";
import Food3 from "../assets/art2.jpg";
import Food4 from "../assets/art1.jpg";
import Food5 from "../assets/art3.jpg";


import heroimg from "../assets/Article main .jpg";

function Article() {
  const dataForGallery = [{ image: Food1 }, { image: Food2 }];

  const dataForGrid = [ 
    {
      text: "Salad with Roasted Chicken",
      image: Food4,
      subtext:
        " Salad with roasted chicken offers tender chicken pieces on crisp greens, topped with fresh vegetables and spices",
    },
    {
      text: "Black Coffee with Cake",
      image: Food5,
      subtext:
        " Black coffee with cake is a classic pairing where the strong, bitter coffee perfectly balances the cake’s sweetness, creating a delightful taste contrast. This combination enhances flavors, offering a rich, aromatic experience ideal for a cozy break or dessert",
    },
    {
      text: "Bread With Chicken",
      image: Food3,
      subtext:
        " Bread with chicken in Malabar style is a savory dish where spiced chicken filling is combined with a batter made from bread and eggs, then cooked into a soft, flavorful cake. It blends tender chicken with mild spices inside a smooth bread-based batter, creating a unique snack or light meal popular in Kerala's Malabar region",
    },
  ];

    const heading ="Welcome To Our Palce";




  const title="A Kerala restaurant serves authentic dishes featuring spices, coconut,  and fresh seafood. Popular foods include Karimeen Pollichathu (grilled fish in banana leaf), Appam with stew, Puttu with Kadala Curry, and Malabar Biryani. The cuisine balances spicy, tangy, and creamy flavors, showcasing Kerala's rich culinary heritage";

  // "Malabar pot biriyani is a fragrant and flavorful dish from Kerala's Malabar region, prepared using the traditional dum (slow-cooking) method. It features marinated meat (chicken, mutton, or fish) layered with partially cooked kaima rice in a sealed pot, allowing spices like coconut oil, curry leaves, and garam masala to infuse deeply. Garnished with fried onions, nuts, and raisins, this biriyani combines tender meat, aromatic rice, and a unique coastal flavor, served hot often with raita and pappadams";
  
  const head= "Related articles or posts";

  

  return (
    <div>
      <NavBar  />
      <HeroBanner heading={heading} title={title} heroimages={heroimg} />
      <ParagraphArticle head={head}  />
      <SectionGrid data={dataForGallery} />
      <ParagraphArticle />
      <SectionGrid data={dataForGrid} head={head} />

      <Footer />
    </div>
  );
}

export default Article;
