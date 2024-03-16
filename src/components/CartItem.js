import React from 'react'
import toast from 'react-hot-toast';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import {remove} from '../redux/slices/CartSlice'
const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = ()=>{
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }
  return (
    <div className='m-4'>
      <div className='h-[1px] bg-black mb-4'></div>
      <div className='flex '>

        <div className='h-[400px] w-[400px]'>
          <img src={item.image}></img>
        </div>

        <div className='flex flex-col gap-y-10 p-4 mt-4'>
          <h1 className='font-bold text-xl '>{item.title}</h1>
          <p className='font-semibold text-gray-500'>
            {item.description.split(" ").slice(0, 10).join(" ") + "..."}
          </p>
          <div className='flex justify-between'>
            <p className='font-bold text-green-500 text-xl'>${item.price}</p>
            <div className='h-8 w-8 bg-red-400 rounded-full flex justify-center items-center cursor-pointer'>
              <MdDelete onClick={removeFromCart}/>
            </div>

          </div>
        </div>

      </div>

      
    </div>
  )
}

export default CartItem