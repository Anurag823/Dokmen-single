import React from 'react';
import NavBar from './Components/NavBar';
import ImageCarousel from "./Components/ImageCarousel";
import Content from './Components/Content';
import NewsLetter from './Components/NewsLetter';
import DokmenIcons from './Components/dokmen-icons';
import Gallery from './Components/Gallery';
import GetInTouch from './Components/GetInTouch';
import Footer from './Components/Footer';
import ShopButton from './Components/ShopButton';
import WhatsappFloat from './Components/WhatsappFloat';





export const App = () => {
  return (
   <>
   <NavBar/>
   <ImageCarousel/>
   <Content/>
   <NewsLetter/>
   <DokmenIcons/>
   <Gallery/>
   <GetInTouch/>
   <Footer/>
   <WhatsappFloat/>
   <ShopButton/>
   </>
  )
}
