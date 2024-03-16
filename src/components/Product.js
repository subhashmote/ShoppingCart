import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/slices/CartSlice'

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state) || { cart: [] }; // Ensure that cart is initialized as an array
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to cart");
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item Removed From Cart");
  }


  return (
    <div className='flex flex-col items-center justify-between hover:scale-110  shadotransition duration-300 ease-inw-lg rounded-xl gap-3 p-4 mt-10 ml-5 outline'>
      <div>
        <p className='text-grey-700 font-semibold text-lg truncate w-40 mt-1'>{post.title}</p>
      </div>

      <div>
        <p className='w-40 text-gray-400 font-normal text-[14px] text-left'>{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
      </div>

      <div className='h-[180px]'>
        <img src={post.image} className='h-full w-full'></img>
      </div>

      <div className='flex justify-between gap-12 items-center mt-5'>
        <div>
          <p className='text-green-600 font-semibold items-center  w-full'>${post.price}</p>
        </div>

        {cart && cart.some((p) => p.id === post.id) ? (
          <button 
          className='text-gray-700 border-2 border-gray-700 rounded-full uppercase  px-4 text-[12px] hover:bg-grey-700 hover:text-white transition duration-300 ease-in'
          onClick={removeFromCart}>Remove Item</button>
        ) : (
          <button
          className='text-gray-700 border-2 border-gray-700 rounded-full uppercase p-1 px-3 text-[12px]
          hover:bg-gray-700 hover:text-white transition duration-300 ease-in'
          onClick={addToCart}>Add To Cart</button>
        )}

      </div>

    </div>
  )
}

export default Product

