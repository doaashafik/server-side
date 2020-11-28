import React, { useEffect } from "react";
import ProductCard from "../../components/productCard/ProductCard";
import { addItemToCart } from "../../store/Cart/actions";
import { useSelector, useDispatch } from "react-redux";
import { open } from "../../components/notification/Notification";
import { initializeStore } from "../../store";
import { allProductsRequest } from "../../store/Product/actions";

export async function getStaticProps() {
  const store = initializeStore();
  await store.dispatch(allProductsRequest());
  return {
    props: {
      state: store.getState(),
    },
  };
}


const ProductList = () => {
  const products = useSelector((state) => state.products);
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
export default ProductList;
