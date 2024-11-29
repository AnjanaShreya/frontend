import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

export default function Content() {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const url = "http://localhost:8080/";

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const response = await axios.get(url);
        setProducts(response.data);
    };

    const addProduct = async () => {
        await axios.post(url,{name,price});
        getProducts()
    };

    const deleteProduct = async (id) => {
        await axios.delete(url + id);
        console.log(url+id)
        getProducts()
    };

  return (
    <div>
      <hr></hr>
      <div className='content'>
      <h3>Product Page</h3>
      <input
        type="text"
        placeholder="Enter Product"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        type="number"
        placeholder="Enter Price"
        onChange={(e) => setPrice(e.target.value)}
      ></input>
      <button onClick={addProduct}>Add</button>
      <ul>
        {products &&
          products.map((value, index) => (
            <li key={index}>
              <b>{value.name}</b>-{value.price} - <button onClick={()=>deleteProduct(value._id)}>Delete</button>
            </li>
          ))}
      </ul>
      </div>
    </div>
  )
}
