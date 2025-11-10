import React from "react";
import NavBar from "../components/navBar";
import HeroBanner from "../components/HeroBanner";
import SectionGrid from "../components/HomeSections/SectionGrid";
import Food3 from "../assets/hd3.jpg";
import Food2 from "../assets/hd2.jpg";
import Food1 from "../assets/hd1.jpg";
import SectionList from "../components/HomeSections/SectionList";
import Footer from "../components/HomeSections/Footer";
import heroimg from "../assets/Hero main.jpg";
import Food4 from "../assets/pexels-elevate-1267320.jpg";
import Food5 from "../assets/pexels-jpgata-10560083.jpg";

function HomePage() {
  const dataForGrid = [
    {
      text: "Noodles",
      image: Food3,
      subtext:
        " Delicious, steaming noodles tossed with fresh vegetables and savory sauce, offering a comforting, flavorful dining experience.",
    },
    {
      text: "Coffee",
      image: Food2,
      subtext:
        "Freshly brewed aromatic coffee served hot, offering rich flavor, warmth, and a comforting café experience",
    },
    {
      text: "Egg",
      image: Food1,
      subtext:
        " Delicately cooked egg dish featuring rich texture, subtle seasoning, and elegant presentation for fine dining experience..",
    },
  ];

  const dataForList = [
    { text: "🍛 Breakfast Specials", title: "Continental breakfast with fresh juice and pastries" },
    { text: "🍝 Chef’s Signature Dishes", title: "Pasta Alfredo with garlic bread and salad" },
    { text: "🥗 Healthy Choices", title: "Grilled chicken with quinoa and steamed vegetables" },
    { text: "🍔 Snacks & Bites" , title: "Crispy fries with spicy mayo and cheese dip" },
    { text: "🍰 Desserts & Beverages", title: "Chocolate lava cake with cappuccino" },
  ];

  const dataForGallery = [
    {
      text: "Smoked Wild Mushroom Medley",
      image: Food4,
      subtext:
        "A light mist or smoke effect adds an artistic, molecular gastronomy touch, enhancing the visual appeal. The overall atmosphere conveys professional culinary craftsmanship, attention to detail, and a luxury dining experience.",
    },
    {
      text: "Roasted Bone Marrow with Toast",
      image: Food5,
      subtext:
        " Roasted bone marrow served with toasted bread, fresh herbs, and nuts — a rich gourmet delicacy.",
    },
  ];

  const head1 = "Menu";
  const head2 = "Special Menu";
  const heading = "Welcome To Our Palce";
  const title =
    "Ambrosia Restaurant is known for its diverse menu offering Indian, Thai, Chinese, and Continental dishes, delivering quality food, excellent service, and a memorable dining experience in an elegant setting.";

  return (
    <div>
      <NavBar />
      <HeroBanner
        show={true}
        heroimages={heroimg}
        heading={heading}
        title={title}
      />
      <SectionGrid data={dataForGrid} head={head1} />
      <SectionList data={dataForList} />
      <SectionGrid data={dataForGallery} head={head2} />
      <Footer />

    </div>
  );
}

export default HomePage;
