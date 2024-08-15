
import { ComplexNavbar } from '../components/Header';
import Marquee from 'react-fast-marquee';
import ShopData from '../components/ShopData';
import HeaderNav from '../components/HeaderNav';
import { Footer } from '../components/Footer';


function Shop() {

  return (
    <>
      <HeaderNav />
      <Marquee>
        <h1>I can be a React component, multiple React components, or just some text.</h1>
        <h1>I can be a React component, multiple React components, or just some text.</h1>
        <h1>I can be a React component, multiple React components, or just some text.</h1>
        <h1>I can be a React component, multiple React components, or just some text.</h1>
      </Marquee>
  <ShopData />
  <Footer />
      

     
    </>
  );
}

export default Shop;
