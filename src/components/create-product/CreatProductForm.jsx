import { z } from "zod";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

function CreatProductForm() {
  const navigate = useNavigate();
  const [isCreatingProduct, setIsCreatingProduct] = useState(false);
  const createProductSchema = z.object({
    title: z.string().min(2, "title must have at least 2 characters"),
    price: z.string().min(1, "enter a price"),
    description: z
      .string()
      .min(4, "description must have at least 2 characters"),
    image: z.string().url().min(4, "password must have at least 1 characters"),
    category: z.string().min(4, "category must have at least 4 characters"),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: zodResolver(createProductSchema) });
  const onSubmit = (data) => {
    setIsCreatingProduct(true);
    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({ ...data, price: Number(data.price) }),
    })
      .then((res) => res.json())
      .then((json) => {
        setIsCreatingProduct(false);
        navigate("/dashboard");

        console.log(json);
      })
      .catch((error) => {
        setIsCreatingProduct(false);
        console.error(error.message);
      });
  };
  return (
    <div>
      <form
        className="w-[40%] flex flex-col mx-auto mt-[20vh]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          placeholder="Title..."
          {...register("title")}
          className="bg-transparent mb-8 w-full transition-all border-gray-500 focus:border-gray-200 outline-none border-[0.5px] pl-2 py-2 rounded-lg text-white"
        />
        {errors.title && (
          <p className="text-red-400 text-sm -mt-6 mb-8">
            {errors.title?.message}
          </p>
        )}
        <input
          placeholder="Price..."
          type="number"
          {...register("price")}
          className="bg-transparent mb-8 w-full transition-all border-gray-500 focus:border-gray-200 outline-none border-[0.5px] pl-2 py-2 rounded-lg text-white"
        />
        {errors.price && (
          <p className="text-red-400 text-sm -mt-6 mb-8">
            {errors.price?.message}
          </p>
        )}
        <input
          placeholder="Description..."
          {...register("description")}
          className="bg-transparent mb-8 w-full transition-all border-gray-500 focus:border-gray-200 outline-none border-[0.5px] pl-2 py-2 rounded-lg text-white"
        />
        {errors.description && (
          <p className="text-red-400 text-sm -mt-6 mb-8">
            {errors.description?.message}
          </p>
        )}
        <input
          placeholder="Image Url..."
          {...register("image")}
          className="bg-transparent mb-8 w-full transition-all border-gray-500 focus:border-gray-200 outline-none border-[0.5px] pl-2 py-2 rounded-lg text-white"
        />
        {errors.image && (
          <p className="text-red-400 text-sm -mt-6 mb-8">
            {errors.image?.message}
          </p>
        )}
        <input
          placeholder="Category..."
          {...register("category")}
          className="bg-transparent mb-8 w-full transition-all border-gray-500 focus:border-gray-200 outline-none border-[0.5px] pl-2 py-2 rounded-lg text-white"
        />
        {errors.category && (
          <p className="text-red-400 text-sm -mt-6 mb-8">
            {errors.category?.message}
          </p>
        )}
        <button className="mb-10 bg-sky-500 hover:bg-sky-400 transition-all text-white self-center px-12 py-2 rounded-md ">
          {isCreatingProduct ? (
            <p className="px-[15.5px]">...</p>
          ) : (
            <p>Log in</p>
          )}
        </button>
      </form>
    </div>
  );
}

export default CreatProductForm;
