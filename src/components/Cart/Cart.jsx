import { useEffect, useState } from "react";
import CartFooter from "../CartFooter";
import CartHeader from "../CartHeader";
import data from "./../../data";
import Products from "./../Products/index";
const Cart = () => {
  const [cart, setCart] = useState(data);
  const [total, setTotal] = useState({
    price: cart.reduce((prev, curr) => {
      return prev + curr.priceTotal;
    }, 0),
    count: cart.reduce((prev, curr) => {
      return prev + curr.count;
    }, 0),
  });
  useEffect(() => {
    setTotal({
      price: cart.reduce((prev, curr) => {
        return prev + curr.priceTotal;
      }, 0),
      count: cart.reduce((prev, curr) => {
        return prev + curr.count;
      }, 0),
    });
  });
  const deleteProducts = (id) => {
    console.log(id);
    setCart((cart) => {
      return cart.filter((product) => {
        return id !== product.id;
      });
    });
  };
  const increase = (id) => {
    console.log(id);
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: ++product.count,
            priceTotal: product.count * product.price,
          };
        }
        return product;
      });
    });
  };
  const decline = (id) => {
    console.log(id);
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: product.count - 1 > 1 ? --product.count : 1,
            priceTotal:
              product.count - 1 > 1
                ? product.priceTotal - product.price
                : product.price,
          };
        }
        return product;
      });
    });
  };

  const changeValue = (id, value) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: value,
            priceTotal: value * product.price,
          };
        }
        return product;
      });
    });
  };
  const products = cart.map((product) => {
    return (
      <Products
        key={product.id}
        product={product}
        deleteProducts={deleteProducts}
        increase={increase}
        decline={decline}
        changeValue={changeValue}
      />
    );
  });

  return (
    <section className="cart">
      <CartHeader />
      {products}
      <CartFooter total={total} />
    </section>
  );
};
export default Cart;
