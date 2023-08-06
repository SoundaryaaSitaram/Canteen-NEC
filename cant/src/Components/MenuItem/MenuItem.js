import React,{useState} from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./MenuItem.css";

export const MenuItem = ({ itemName,imageSrc, altText, price,onAddToCart }) => {

    const [isDisabled, setIsDisabled] = useState(false);
    const handleAddToCart = () => {
      const numericPrice = parseInt(price.replace("Rs.", ""));
      onAddToCart(itemName, numericPrice);
      setIsAddedToCart(true);
      setIsDisabled(true);
    }; 
    const [isHovered, setIsHovered] = useState(false);
    const [isAddedToCart, setIsAddedToCart] = useState(false); 

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    return (
      <div
        className="menu-item"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={imageSrc} alt={altText} />
        {isHovered && (
          <div className="item-details">
            <span className='itemName-Price'>{itemName}-{price}</span>
            <button className="add-to-cart" onClick={handleAddToCart} disabled={isDisabled}>
            <ShoppingCartIcon /> {isAddedToCart ? "Added to Cart" : "Add to Cart" }
            </button>
          </div>
        )}
      </div>
    );
}
