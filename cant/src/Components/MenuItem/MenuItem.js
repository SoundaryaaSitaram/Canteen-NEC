import React,{useState} from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./MenuItem.css";

export const MenuItem = ({ itemName,imageSrc, altText, price,onAddToCart }) => {
    // const handleAddToCart = () => {
    //     onAddToCart(itemName, price);
    //   };    
    const handleAddToCart = () => {
      const numericPrice = parseInt(price.replace("Rs.", ""));
      onAddToCart(itemName, numericPrice);
    };
    // const handleAddToCart = (itemName, price) => {
    //   const numericPrice = parseInt(price.replace("Rs.", ""));
    //   // Rest of the function remains the same
    // };    
    const [isHovered, setIsHovered] = useState(false);

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
            {/* <span className="price">{price}</span> */}
            <button className="add-to-cart" onClick={handleAddToCart}>
              <ShoppingCartIcon/> Add to Cart
            </button>
          </div>
        )}
      </div>
    );
}
