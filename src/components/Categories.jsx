import { Button } from "@material-tailwind/react"
import { EcommerceCard } from "./PriceCard"


function Categories({name, itm}) {
  return (
    <div className="lg:flex overflow-hidden  lg:container mx-auto mt-6  justify-center  "> 
    <div className="flex flex-col">
          <div className="flex justify-between mt-4 mb-4">
          <h1 className="block font-sans text-xl lg:text-4xl  antialiased font-semibold leading-tight tracking-normal text-transparent bg-gradient-to-tr bg-[--main-color] bg-clip-text">   
      {name}
    </h1> <Button size="sm" className="bg-[--main-color] ">see more</Button>
    </div>
    <div className="flex justify-start
     gap-4 flex-wrap *: items-start mb-6">
        <EcommerceCard />
    <EcommerceCard nameg={itm} />
    <EcommerceCard />
    <EcommerceCard />

    

    </div>
      
    </div>
  
    

    </div>
  )
}

export default Categories
