import React, { useEffect, useState } from "react";

function Dashbooard() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  console.log(products);
  return (
    <div className="flex items-center flex-wrap justify-between">
      {products.map((product) => {
        return (
          <div className=" w-[20vw]">
            <img src={product.image} alt={product.title} className="w-full" />
            <div className="flex items-center justify-between">
              <p className="text-white">{product.title}</p>
              <p className="text-white">{product.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Dashbooard;
