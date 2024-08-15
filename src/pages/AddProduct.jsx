import { useState } from "react";
import HeaderNav from "../components/HeaderNav";
import { Button } from "@material-tailwind/react";
import { Footer } from "../components/Footer";

function AddProduct() {
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProductImage(file);
  };

  return (
    <div className="mb-4">
      <HeaderNav />
      <div className=" lg:flex justify-evenly items-center pt-10  border-gray-300">
        <div className="h-full w-full">
          <div className="flex justify-center items-center">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Product Name</label>
                <input
                  type="text"
                  id="name"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="image">Product Image</label>
                <input
                  type="file"
                  id="image"
                  onChange={handleImageChange}
                  className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="category">Category</label>
                <input
                  type="text"
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                 <input type="checkbox" id="checkbox" className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-[--main-color]"/>
               <label htmlFor="checkbox">Are you Accept Our terms and policy conditions</label>
               
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-full">
          <h1 className="text-gray-900 text-center pr-4 text-[30px]">How your product looks on Our Website</h1>
          <div className="flex justify-center">
            <div className="flex flex-col gap-4">
              <div className="card bg-white p-4 rounded-lg shadow-lg">
                <img src={productImage ? URL.createObjectURL(productImage) : 'https://via.placeholder.com/150'} alt="product" className="w-96" />
                <div className="px-3 flex justify-between items-center">
                  <h1 className="text-xl font-bold mb-2">{productName || "Product Name"}</h1>
                  <p className="text-gray-700 mb-2 text-[22px] ">{price || "Price"}</p>
                 
                </div>
                 <p className="text-gray-700 text-[15px] mb-2 px-3 mt-[-20px]">{category || "Category"}</p>
                  <p className="text-gray-700 mb-2 px-3">{description || "Description"}</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className=" ml-24">
<Button className="px-52 ">Add Your Product
      
      </Button>
       <p>
        <span className="text-black text-3xl">*</span> Note: This is just a preview of how your product will look on our website.
       </p>
      </div>
      <Footer />
      
    </div>
  );
}

export default AddProduct;
