import React,{useState} from 'react';
import { Element } from 'react-scroll';
import idly from "../../assets/idly.jpg";
import dosa from "../../assets/dosa.jpg";
import pongal from "../../assets/pongal.jpg";
import poori from "../../assets/poori.jpg";
import Adai from "../../assets/Adai.jpg";
import bajji from "../../assets/bajji.jpg";
import biriyani from "../../assets/biriyani.jpg";
import chappathi from "../../assets/chappathi.jpg";
import curd from "../../assets/curd.jpg";
import friedrice from "../../assets/friedrice.jpg";
import idiyappam from "../../assets/idiyappam.jpg";
import kichadi from "../../assets/kichadi.jpg";
import lemonrice from "../../assets/lemonrice.jpg";
import masalapoori from "../../assets/masalapoori.jpg";
import meals from "../../assets/meals.jpg";
import noodles from "../../assets/noodles.jpg";
import paanipoori from "../../assets/paanipoori.jpg";
import parotta from "../../assets/parotta.jpg";
import puffs from "../../assets/puffs.jpg";
import uthapam from "../../assets/uthapam.jpg";
import vadai from "../../assets/vadai.jpg";
import "./Menu.css";
import { Tab, Tabs } from '@material-ui/core';
import { MenuItem } from '../MenuItem/MenuItem';
import { MyCart } from '../MyCart/MyCart';




export const Menu = () => {
    const [activeTab,setActiveTab]=useState(0);
    const [cartItems, setCartItems] = useState([]);
    const generateUniqueId = () => {
      return Math.random().toString(36).substr(2, 9);
    };
    // const updateCart = (cartItems, newItem) => {
    //   const updatedCartItems = { ...cartItems };
    //   if (updatedCartItems[newItem.id]) {
    //     updatedCartItems[newItem.id].count += 1;
    //   } else {
    //     updatedCartItems[newItem.id] = { ...newItem, count: 1 };
    //   }
    //   return updatedCartItems;
    // };
    const handleTabChange = (event,newValue)=>
    {
        setActiveTab(newValue);
    ;}

    // const handleAddToCart = (itemName, price) => {
    //     const newItem = { itemName, price, count: 1 };
    //     setCartItems((prevItems) => [...prevItems, newItem]);
    //   };
    const handleAddToCart = (itemName, price) => {
      const existingItem = cartItems.find(item => item.itemName === itemName);
    
      if (existingItem) {
        // If the item exists in the cart, update its count
        const updatedCartItems = cartItems.map(item => {
          if (item.itemName === itemName) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        });
    
        setCartItems(updatedCartItems);
      } else {
        // If the item does not exist in the cart, add it with count = 1
        const newItem = { id: generateUniqueId(), itemName, price: parseInt(price), count: 1 };
        setCartItems(prevItems => [...prevItems, newItem]);
      }
    };
    
    // const cartItemsToMap = (cartItems) => {
    //   const cartItemsMap = {};
    //   cartItems.forEach((item) => {
    //     cartItemsMap[item.id] = item;
    //   });
    //   return cartItemsMap;
    // };


  return (

    <Element className="Menu">
        <Tabs 
        value={activeTab}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto">
            <Tab label="Breakfast"/>
            <Tab label="Lunch"/>
            <Tab label="Snacks"/>
        </Tabs>
        {activeTab===0 && (
        <div className='MenuItems1'>
          <MenuItem itemName="Idly" imageSrc={idly} altText="idly" price="Rs.10"  onAddToCart={handleAddToCart}/>
          <MenuItem itemName ="Dosa" imageSrc={dosa} altText="dosa" price="Rs.40"  onAddToCart={handleAddToCart}/>
          <MenuItem itemName ="Pongal" imageSrc={pongal} altText="pongal" price="Rs.35"  onAddToCart={handleAddToCart}/>
          <MenuItem itemName ="Poor"imageSrc={poori} altText="poori" price="Rs.25"  onAddToCart={handleAddToCart}/>
          <MenuItem itemName ="Chappathi" imageSrc={chappathi} altText="chappathi" price="Rs.20"  onAddToCart={handleAddToCart}/>
          <MenuItem itemName ="Uthapam" imageSrc={uthapam} altText="uthapam" price="Rs.40"  onAddToCart={handleAddToCart}/>
          <MenuItem itemName ="Kichadi" imageSrc={kichadi} altText="kichadi" price="Rs.25"  onAddToCart={handleAddToCart}/>
          <MenuItem itemName ="Idiyapam" imageSrc={idiyappam} altText="idiyapam" price="Rs.30"  onAddToCart={handleAddToCart}/>
          <MenuItem itemName ="Adai" imageSrc={Adai} altText="Adai" price="Rs.35"  onAddToCart={handleAddToCart}/>
          <MenuItem itemName ="Vadai" imageSrc={vadai} altText="vadai" price="Rs.10"  onAddToCart={handleAddToCart}/>
        </div>
        )}
        {activeTab===1 && (
        <div className='MenuItems2'>
          <MenuItem itemName="Meals" imageSrc={meals} altText="meals" price="Rs.80"  onAddToCart={handleAddToCart}/>
          <MenuItem itemName ="Parotta" imageSrc={parotta} altText="parotta" price="Rs.10"  onAddToCart={handleAddToCart}/>
          <MenuItem itemName ="Biriyani" imageSrc={biriyani} altText="biriyani" price="Rs.60"  onAddToCart={handleAddToCart}/>
          <MenuItem itemName ="Noodles" imageSrc={noodles} altText="noodles" price="Rs.55"  onAddToCart={handleAddToCart}/>
          <MenuItem itemName ="Curdrice" imageSrc={curd} altText="curdrice" price="Rs.35"  onAddToCart={handleAddToCart}/>
          <MenuItem itemName ="Friedrice" imageSrc={friedrice} altText="friedrice" price="Rs.45"  onAddToCart={handleAddToCart}/>
          <MenuItem itemName ="Lemonrice" imageSrc={lemonrice} altText="lemonrice" price="Rs.40"  onAddToCart={handleAddToCart}/>
        </div>
        )}
        {activeTab===2 && (
        <div className='MenuItems3'>
          
          <MenuItem itemName ="Masalapoori" imageSrc={masalapoori} altText="masalapoori" price="Rs.20"  onAddToCart={handleAddToCart}/>
          <MenuItem itemName ="Paanipoori"imageSrc={paanipoori} altText="paanipoori" price="Rs.25"  onAddToCart={handleAddToCart}/>
          <MenuItem itemName ="Vadai" imageSrc={vadai} altText="vadai" price="Rs.10"  onAddToCart={handleAddToCart}/>
          <MenuItem itemName ="Bajji" imageSrc={bajji} altText="bajji" price="Rs.12"  onAddToCart={handleAddToCart}/>
          <MenuItem itemName ="Puffs" imageSrc={puffs} altText="puffs" price="Rs.15"  onAddToCart={handleAddToCart}/>
        </div>
        )}
        <MyCart cartItems={cartItems} setCartItems={setCartItems}/>
    </Element>
  )
}



