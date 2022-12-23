import axios from "axios";
import React, { useState } from "react";

const FormUpdate = ({ product }) => {
  console.log(product)
  const [name, setName] = useState(product.name)
  const [price, setPrice] = useState(product.price)
  // const [cat, setcat] = useState(product.cat)
  const [quantity, setQuantity] = useState(product.quantity)
  const [os, setOs] = useState(product.ficheTech.os)
  const [display, setDisplay] = useState(product.ficheTech.display)
  const [cam, setCam] = useState(product.ficheTech.cam)
  const [battery, setBattery] = useState(product.ficheTech.battery)
  const [processor, setProcessor] = useState(product.ficheTech.processor)
  const [memory, setMemory] = useState(product.ficheTech.memory)
  const [image, setImage] = useState(product.image)

  // const handlePost = async() => {
  //     await axios.post(`http://localhost:8080/store-phone/Product?action=update`,null,{
  //       headers: {
  //         'Content-Type': 'multipart/mixed',
  //       },
  //       method : "POST",
  //       params : {
  //         image : image,
  //         os : os,
  //         display : display,
  //         cam : cam,
  //         battery : battery,
  //         processor : processor,
  //         memory : memory,
  //         id : product.proId,
  //         name : name,
  //         price : price,
  //         quantity : quantity,
  //       }
  //     }).then((res)=>{
  //       console.log(res)
  //     }).catch((err)=>{
  //       console.log(err)
  //     })
  // }
  return (
    <form  
    action="http://localhost:8080/store-phone/Product?action=update"
    method="POST"
    encType="multipart/form-data"
    >
      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Product Infos
      </h2>
      <input hidden value={product.id} name="id"/>
      <div class="relative z-0 mb-6 w-full group">
        <input
          type="file"
          name="image"
          id="floating_email"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder={product.image}
          
        />
        <label
          for="floating_email"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Image Of Product
        </label>
      </div>
      {/* name rate price cat image */}
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 mb-6 w-full group">
          <input
            value={name}
            onChange={(e)=>{
              setName(e.target.value)
            }}
            type="text"
            name="name"
            id="floating_first_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            
          />
          <label
            for="floating_first_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name Of Product
          </label>
        </div>
        {/*  */}
        <div class="relative z-0 mb-6 w-full group">
          <input
            value={price}
            onChange={(e)=>{
              setPrice(e.target.value)
            }}
            type="text"
            name="price"
            id="floating_last_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            
          />
          <label
            for="floating_last_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Price
          </label>
        </div>
      </div>

      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 mb-6 w-full group">
          {/* <input
            value={}
            onChange={(e)=>{

            }}
            type="text"
            name="cat"
            id="floating_first_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            
          />
          <label
            for="floating_first_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            category
          </label> */}
          {/* <label for="underline_select" class="sr-only">
            Category
          </label>
          <select
            name="cat"
            id="underline_select"
            class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            <option selected>Category</option>
            <option value="1">Smart phone</option>
            <option value="2">Smart Watche</option>
            <option value="3">Tablet</option>
            <option value="4">Dump Phone</option>
          </select> */}
        </div>
        {/*  */}
        <div class="relative z-0 mb-6 w-full group">
          <input
            value={quantity}
            onChange={(e)=>{
              setQuantity(e.target.value)
            }}
            type="text"
            name="quantity"
            id="floating_last_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            
          />
          <label
            for="floating_last_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Quantity
          </label>
        </div>
      </div>
      {/* end_1 */}
      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Details Of Product
      </h2>
      {/*  */}
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 mb-6 w-full group">
          <input
            value={os}
            onChange={(e)=>{
              setOs(e.target.value)
            }}
            type="text"
            name="os"
            id="floating_first_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            
          />
          <label
            for="floating_first_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Operating system
          </label>
        </div>

        <div class="relative z-0 mb-6 w-full group">
          <input
            value={display}
            onChange={(e)=>{
              setDisplay(e.target.value)
            }}
            type="text"
            name="display"
            id="floating_last_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            
          />
          <label
            for="floating_last_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Display
          </label>
        </div>
      </div>
      {/*  */}
      {/*  */}
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 mb-6 w-full group">
          <input
            value={cam}
            onChange={(e)=>{
              setCam(e.target.value)
            }}
            type="text"
            name="cam"
            id="floating_first_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            
          />
          <label
            for="floating_first_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Camera
          </label>
        </div>

        <div class="relative z-0 mb-6 w-full group">
          <input
            value={battery}
            onChange={(e)=>{
              setBattery(e.target.value)
            }}
            type="text"
            name="battery"
            id="floating_last_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            
          />
          <label
            for="floating_last_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Battery
          </label>
        </div>
      </div>
      {/*  */}
      {/*  */}
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 mb-6 w-full group">
          <input
            value={processor}
            onChange={(e)=>{
              setProcessor(e.target.value)
            }}
            type="text"
            name="processor"
            id="floating_first_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            
          />
          <label
            for="floating_first_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Processor
          </label>
        </div>

        <div class="relative z-0 mb-6 w-full group">
          <input
            value={memory}
            onChange={(e)=>{
              setMemory(e.target.value)
            }}
            type="text"
            name="memory"
            id="floating_last_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            
          />
          <label
            for="floating_last_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Memory
          </label>
        </div>
      </div>
      {/*  */}
      <button

        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default FormUpdate;
