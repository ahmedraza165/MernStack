import { CarouselWithContent } from "../components/Slider"
import { ComplexNavbar } from "../components/Header"
import { MegaMenuDefault } from "../components/Item"
import { Footer } from "../components/Footer"
import Categories from "../components/Categories"
import HeaderNav from "../components/HeaderNav"
function Home() {
  return (
    <div>
       <div>
       <HeaderNav />
       </div>
       <CarouselWithContent />
    
        
        <Categories name="Mobile and accessories" itm={"Airpods"} /> 
        <Categories name="Home accessories" itm={"Airpods"} /> 
        <Categories name="Gaming accessories" itm={"Airpods"} /> 
        <Categories name="Shoes & clothing" itm={"Airpods"} /> 
        <Categories name="Books" itm={"Airpods"} /> 

        
        <Footer />
    </div>
  )
}

export default Home
