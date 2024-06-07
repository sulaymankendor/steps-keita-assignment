import { useState } from "react";
import Star from "../../svg/Star";
import { truncateText } from "../../utilities/truncateText";

function Product({ product, onClick }) {
  const [showProductDescription, setShowProdcutDescription] = useState("");

  return (
    <div
      onMouseOver={() => {
        setShowProdcutDescription(product.id);
      }}
      onMouseLeave={() => {
        setShowProdcutDescription(false);
      }}
      key={product.id}
      className=" w-[15rem] bg-zinc-900 mb-4 mt-7 transition-all hover:scale-110 rounded-md relative cursor-pointer"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-[35vh] rounded-t-md"
      />
      <div className="flex items-center mt-2 pl-2">
        {[...Array(5)].map((_, index) => {
          return (
            <div>
              <Star
                key={index}
                width="w-[14px]"
                color={`${
                  index < product.rating.rate
                    ? "fill-yellow-500"
                    : "fill-gray-300"
                }`}
              />
            </div>
          );
        })}
        <p className="text-white text-sm">{product.rating.count}</p>
      </div>
      <div className="flex items-center justify-between pt-1 px-2">
        <p className="text-white text-sm">{truncateText(product.title, 13)}</p>
        <p className="text-white text-sm font-bold">{`$${product.price}`}</p>
      </div>
      {showProductDescription === product.id && (
        <>
          <p
            onClick={onClick}
            className="pl-2 absolute bottom-[25%] transition-all text-white z-10 capitalize text-[13px]"
          >
            {truncateText(product.description, 80)}
          </p>
          <div
            onClick={onClick}
            className=" bg-black absolute transition-all top-0 right-0 left-0 bottom-0 opacity-50"
          ></div>
        </>
      )}
    </div>
  );
}

export default Product;
