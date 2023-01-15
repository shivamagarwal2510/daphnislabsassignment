import React from 'react'
const getProducts = async ()=> {
  try {
        var url = "https://fakestoreapi.com/products";
        const data = await (await fetch(url)).json();
        
        return data;
    } catch (error) {
        console.log(error);
    }
}
export default getProducts;