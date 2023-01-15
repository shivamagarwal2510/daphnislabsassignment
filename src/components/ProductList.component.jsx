import React from 'react'
import { useEffect, useState, useContext } from 'react';
import getProducts from '../apis/getProducts';
import CardList from './CardList.component';
import { CategorySearchContext } from '../contexts/CategorySearch.context';
import { TitleSearchContext } from '../contexts/TitleSearch.context';
import Modal from './Modal.component';
const ProductList = ()=> {
    const [productsList, setProductsList] = useState([]);
    const [countMen, setCountMen] = useState(0);
    const [countWomen, setCountWomen] = useState(0);
    const [countElectronics, setCountElectronics] = useState(0);
    const [countJewelery, setCountJewelery] = useState(0);
    const [filteredProductsList, setFilteredProductsList] = useState([]);
    const {categorySearch} = useContext(CategorySearchContext);
    const {titleSearch} = useContext(TitleSearchContext);
    
    const [toggle, setToggle] = useState(false);
    useEffect(()=>{
        const productslist = getProducts();
        productslist.then((prod)=>{

            setProductsList(prod);
            prod.forEach((data)=>{
              if (data.category === "electronics") {
                setCountElectronics((prev) => prev + 1);
              } else if (data.category === "men's clothing") {
                setCountMen((prev) => prev + 1);
              } else if (data.category === "women's clothing") {
                setCountWomen((prev) => prev + 1);
              } else if (data.category === "jewelery") {
                setCountJewelery((prev) => prev + 1);
              }
              console.log("data", data);
            })
            
        })
        
    },[])
    useEffect(()=>{
      let filterList = productsList.filter((product)=>{
      return categorySearch === ""
        ? product.category.includes(categorySearch) &&
            product.title.toLowerCase().includes(titleSearch.toLowerCase())
        : product.category === categorySearch &&
            product.title.toLowerCase().includes(titleSearch.toLowerCase());
    })
    setFilteredProductsList(filterList);
    }, [categorySearch, titleSearch, productsList])
    
    const toggleModal = ()=>{
      setToggle(prev=>!prev);
    }
    console.log("toggle", toggle);
    
    console.log(productsList);
  return (
    <div>
      <CardList productsList={filteredProductsList} />
      <button onClick = {toggleModal} className="fixed bottom-[8vh] right-[8vw] border-none rounded text-xl hover:bg-blue-600 bg-blue-800 text-white p-4 border">
        ANALYSE
      </button>
      {toggle && <Modal setOpenModal={setToggle} jewelery={countJewelery} electronics={countElectronics} men={countMen} women = {countWomen} />}
    </div>
  );
}
export default ProductList;
