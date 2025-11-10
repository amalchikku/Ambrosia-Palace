import NavBar from '../components/NavBar';
import Footer from '../components/HomeSections/Footer';
import SectionGrid from '../components/HomeSections/SectionGrid';
import Food3 from "../assets/hd3.jpg";
import Food2 from "../assets/hd2.jpg";
import Food1 from "../assets/hd1.jpg";
import Food6 from "../assets/art2.jpg";
import Food4 from "../assets/art1.jpg";
import Food5 from "../assets/art3.jpg";
import Food7 from "../assets/Article Sec2.jpg";
import Food8 from "../assets/Article Sec1.jpg";

function Gallery() {
  const dataForGallery = [
    { image: Food1 },
    { image: Food2 },
    { image: Food3 },
    { image: Food4 },
    { image: Food5 },
    { image: Food6 },
    { image: Food7 },
    { image: Food8 },
  ];

  return (
    <div>
      <NavBar />
      {/* Add responsive utility classes in SectionGrid, or wrap here */}
      <SectionGrid data={dataForGallery} />
      <Footer />
    </div>
  );
}

export default Gallery;
