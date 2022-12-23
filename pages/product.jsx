import React from "react";
import axios from "axios";
import { useState } from "react";
import { Modal, Button, Group } from "@mantine/core";
import FormUpdate from "../components/FormUpdate";
import CreateProduct from "../components/CreateProduct";

const product = ({ products }) => {
  const [opened, setOpened] = useState(false);
  const [opened_2, setOpened_2] = useState(false);
  const [opened_3, setOpened_3] = useState(false);
  const [selected, setSelected] = useState({});
  console.log(products)
  return (
    <>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
              Products
            </h2>
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Product name
              </th>
              <th scope="col" className="py-3 px-6">
                Quantity
              </th>
              <th scope="col" className="py-3 px-6">
                Category
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
              <th scope="col" className="py-3 px-6">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="w-full bg-gray-800 text-center">
              <th
                colSpan={5}
                className="text-2xl text-white font-bold"
                onClick={() => {
                  setOpened_2(true);
                }}
              >
                +
              </th>
            </tr>
            {products?.map((product, key) => {
              return (
                <tr
                  key={key}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {product.name}
                  </th>
                  <td className="py-4 px-6">{product.quantity}</td>
                  <td className="py-4 px-6">{product.catId}</td>
                  <td className="py-4 px-6">{`$ ${product.price}`}</td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => {
                        setSelected(product);
                        setOpened_3(true);
                      }}
                      className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => {
                        setSelected(product);
                        setOpened(true);
                      }}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Update Product"
        fullScreen
      >
        {/* Modal content */}
        <FormUpdate product={selected} />
      </Modal>
      <Modal
        opened={opened_2}
        onClose={() => setOpened_2(false)}
        title="Create Product"
        fullScreen
      >
        {/* Modal content */}
        <CreateProduct />
      </Modal>
      <Modal
        opened={opened_3}
        onClose={() => setOpened_3(false)}
        title="Introduce yourself!"
      >
        {/* Modal content */}
        <button
          onClick={async() => {
            await axios.post('http://localhost:8080/store-phone/Product?action=delete?id'+selected.id)
          }}
          className="font-medium text-red-600 dark:text-blue-500 hover:underline"
        >
          Delete
        </button>
        <button
          onClick={() => {
            setOpened_3(false);
          }}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </button>
      </Modal>
    </>
  );
};

export default product;

export const getServerSideProps = async () => {
  // Fetch data from external API
  let products = null;
  await axios
    .post(`http://localhost:8080/store-phone/Product?action=getProducts`)
    .then((data) => {
      products = data.data;
    });
  //   const res = await fetch(`http://localhost:8080/store-phone/Product?action=getProducts`)
  //   const data = await res.json()

  // Pass data to the page via props
  return { props: { products } };
};
