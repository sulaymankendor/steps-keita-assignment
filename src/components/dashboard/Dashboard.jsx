import Product from "./Product";
import React, { useEffect, useState } from "react";
import ProductDetailModal from "./ProductDetailModal";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [showClickedProductDetail, setShowClickedProductDetail] = useState(0);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <div className="flex items-center flex-wrap justify-around mb-10">
      {showClickedProductDetail > 0 && (
        <>
          <ProductDetailModal
            showClickedProductDetail={showClickedProductDetail}
            products={products}
          />
          <div
            onClick={() => {
              setShowClickedProductDetail(0);
            }}
            className="bg-black fixed top-0 left-0 right-0 bottom-0 opacity-60 z-20"
          ></div>
        </>
      )}
      {products.map((product) => {
        return (
          <Product
            product={product}
            onClick={() => {
              setShowClickedProductDetail(product.id);
            }}
          />
        );
      })}
    </div>
  );
}

export default Dashboard;
