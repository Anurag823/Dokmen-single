import { collection, limit, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import Content from "./Components/Content";
import Dokmenicons from "./Components/dokmen-icons";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import GetInTouch from "./Components/GetInTouch";
import ImageCarousel from "./Components/ImageCarousel";
import NavBar from "./Components/NavBar";
import NewsLetter from "./Components/NewsLetter";
import ShopButton from "./Components/ShopButton";
import WhatsappFloat from "./Components/WhatsappFloat";
import { db } from "./firebaseconfig";
function App() {
  const [productImg,setProductImg]=useState([]);


  useEffect(() => {
 
    fetchImages();
     }, []);
    
     const fetchImages= async ()=>{
      const productRef =await collection(db, "Products");
      const q = await query(productRef,limit(6));
      onSnapshot(q, (snapshot) => {
        const img =  snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductImg(img);
      });
     }
  return (
    <>
    <NavBar/>
    <ImageCarousel/>
    <Content/>
    <NewsLetter/>
    <Dokmenicons/>
    <Gallery productImg={productImg} fetchImages={fetchImages}/>
    <GetInTouch/>
    <Footer/>
    <WhatsappFloat/>
    <ShopButton/>
    </>
  );
}

export default App;
