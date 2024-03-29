import React from "react";
import "../style/shoppingCart.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

const ShoppingCart = (
  { //propsの受信
    // 質問 props名はcartsVisibiltyでもいいのでは？
    visibilty,
    // 質問 props名はproductsInCartでもいいのでは？
    products,
    onProductRemove,
    onClose,
    onQuantityChange,
  }) => {
  return (
    <div
      className="modal"
      // 質問 外側の{}はJSX
      style={
        // 内側の{}はハッシュが入っているため?
        {
        display: visibilty
          ? "block"
          : "none",
        }
    }>
      <div className="shoppingCart">
        <div className="header">
          <h2>Shopping cart</h2>
          <button
            className="btn close-btn"
            onClick={onClose}>
            <AiFillCloseCircle
              size={30}
            />
          </button>
        </div>
        <div className="cart-products">
          {products.length === 0 && (
            <span className="empty-text">
              Your basket is currently empty
            </span>
          )}
          {/* 質問 ここも()にしている。 */}
          {products.map((product) => (
            <div
              className="cart-product"
              key={product.id}>
              <img
                src={product.image}
                alt={product.name}
              />
              <div className="product-info">
                <h3>
                  {product.name}
                </h3>
                <span className="product-price">
                  {product.price * product.count}$
                </span>
              </div>
              {/* 注文の数量を指定するためのinput */}
              <select
                className="count"
                value={product.count}
                onChange={(event) => {
                  onQuantityChange(
                    product.id,
                    event.target.value
                  );
                }}>
                {/* 個数をここで調整できる。 */}
                {[...Array(10).keys()].map((number) => {
                    {/* const num = number + 1; */}
                    const num = number;
                    return (
                      <option value={num} key={num}>
                        {num}
                      </option>
                    );
                  }
                )}
              </select>
              <button
                className="btn remove-btn"
                onClick={() => onProductRemove(product)}>
                <RiDeleteBin6Line size={20}/>
              </button>
            </div>
          ))}
          {products.length > 0 && (
            <button className="btn checkout-btn">
              Proceed to checkout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
