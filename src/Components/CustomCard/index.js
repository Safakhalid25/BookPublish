import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomButton from "../CustomButton";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const CustomCard = (props) => {
  return (
    <>
      <div className="author__poduct">
        <div className="add_to_card"></div>
        <div className="position-relative d-flex justify-content-center">
          <img src={props?.image} className={props?.className}/>
          <div className="cart_overlay">
            <div className="cart__box">
              <div className="cart__icons">
                <a href="javascript:;" className="cart__icon">
                  <FontAwesomeIcon
                    icon={props?.icon1}
                    className="cart__icon-arrow"
                  />
                </a>
                <a href="javascript:;" className="cart__icon">
                  <FontAwesomeIcon icon={props?.icon2} />
                </a>
                <a href="#" className="cart__icon">
                  <FontAwesomeIcon icon={props?.icon3} />
                </a>
              </div>
              {/* <button className="addToCart__btn jost-font">{props?.text} </button> */}
              {/* <CustomButton props={props?.text} /> */}

                 <div className="text-center"><button className="new_home_addToCart_btn">Add To Cart</button></div>
            </div>
         
          </div>
        </div>
        <div className="product__titled-div">
          {/* <h3 className="author__poduct_title jost-font">{props?.title , slice(0 , 13)}</h3> */}
          <h3 className="author__product_title jost-font">{props.title && props.title.slice(0, 13)}</h3>

          <div class="product__icon">
            {/* <FontAwesomeIcon icon={props?.icon2} className="primaryColor" /> */}
            
            <img src={props?.iconimage} />
          </div>
        </div>
        <div className="product__price ">
          <span className="discount__price jost-font">${props?.price}</span>
          <span className="actual__price jost-font">
            ${props?.actual__price}
          </span>
        </div>
      </div>
 
    </>
  );
};
export default CustomCard;
