import { useState } from "react";
import Star from "../../svg/Star";
import React, { useEffect } from "react";
import { useBodyScrollLock } from "../../utilities/lockscroll";

function ProductDetailModal({ showClickedProductDetail, products }) {
  useBodyScrollLock();
  const [productDetail, setProductDetail] = useState([]);
  useEffect(() => {
    setProductDetail(
      products.filter((product) => {
        return product.id === showClickedProductDetail;
      })
    );
  }, [showClickedProductDetail]);
  return (
    <div className="hide-scroll-bar pt-10 bg-white  h-[87vh] fixed top-[8vh] left-[25vw]  w-[50vw] rounded-xl py-3 px-8  z-30 overflow-scroll">
      <img
        src={productDetail[0]?.image}
        alt={productDetail[0]?.title}
        className="w-[30%] mx-auto"
      />
      <div className="flex justify-between items-center mt-5">
        <div className="flex flex-col">
          <div className="flex items-center">
            <p className="mr-2 font-bold">Average Rating:</p>
            {[...Array(5)].map((_, index) => {
              return (
                <Star
                  key={index}
                  width="w-[16px]"
                  color={`${
                    index < productDetail[0]?.rating.rate
                      ? "fill-yellow-400"
                      : "fill-gray-300"
                  }`}
                />
              );
            })}
          </div>
          <div className="flex items-center">
            <p className="mr-2 font-bold">Total Rating:</p>
            <p>{productDetail[0]?.rating.count}</p>
          </div>
          <div className="flex items-center">
            <p className="mr-2 font-bold">Category:</p>
            <p>{productDetail[0]?.category}</p>
          </div>
        </div>
        <p className="font-bold text-lg">${productDetail[0]?.price}</p>
      </div>
      <p className="text-center mt-4 font-bold">{productDetail[0]?.title}</p>
      <p className="mt-2">{productDetail[0]?.description}</p>
    </div>
  );
}

export default ProductDetailModal;
