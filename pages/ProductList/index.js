import React, { useEffect } from "react";
import ProductCard from "../../components/productCard/ProductCard";
import { addItemToCart } from "../../store/Cart/actions";
import { useDispatch } from "react-redux";
import { open } from "../../components/notification/Notification";

export const getStaticProps = async ({}) => {
  const res = await fetch(`https://fakestoreapi.com/products/`)
  const json = await res.json()
  return { props : {
    products : json
  }}
}

const ProductList = ({ products }) => {
  const dispatch = useDispatch();
  const handler = (item) => {
    open({
      slug: "Add Item To Cart",
      title: item.title,
      message: "Your Item Added Successfully To Shopping Cart",
    });
    dispatch(addItemToCart(item));
  };
  return (
    <div className="product-list-container">
      {products && (
        <div className="mt-2 d-flex flex-wrap justify-content-center">
          {products.map((item, id) => (
            <ProductCard
              key={`${id} id`}
              addToCart={() => handler(item)}
              product={item}
            />
          ))}
        </div>
      )}
    </div>
  );
};
// ProductDetails.getInitialProps = async ({query}) => {
//   const res = await allProductsRequest()
//   const json = await res.json()
//   return { productDetails : json }
// }

export default ProductList;

