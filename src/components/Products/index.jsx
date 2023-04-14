import ButtonDelete from "../ButtonDelete";
import Count from "../Count";
import "./style.scss";

const Products = ({
  product,
  deleteProducts,
  increase,
  decline,
  changeValue,
}) => {
  const { img, title, count, price, priceTotal, id } = product;
  const priceFormatter = new Intl.NumberFormat();
  return (
    <section className="product">
      <div className="product__img">
        <img src={`./img/products/${img}`} alt="Mac Pro" />
      </div>
      <div className="product__title">{title}</div>
      <div className="product__count">
        <Count
          count={count}
          increase={increase}
          decline={decline}
          changeValue={changeValue}
          id={id}
        />
      </div>
      <div className="product__price">
        {priceFormatter.format(priceTotal)}руб.
      </div>
      <div className="product__controls">
        <ButtonDelete deleteProducts={deleteProducts} id={id} />
      </div>
    </section>
  );
};

export default Products;
