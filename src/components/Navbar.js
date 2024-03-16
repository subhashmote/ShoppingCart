import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const { cart } = useSelector((state) => state) || { cart: [] }; // Ensure that cart is initialized as an array

  return (
    <div>
      <nav className='flex justify-between h-20 w-11/12 items-center'>
        <NavLink to='/'>
          <div className='ml-[150px]'>
            <img src='https://img.freepik.com/free-vector/gradient-instagram-shop-logo-template_23-2149704603.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708041600&semt=ais' height={80} width={80} className='rounded-full'/>
          </div>
        </NavLink>

        <div className='flex text-white gap-x-6 items-center justify-center font-medium mr-4'>
          <NavLink to='/'>
            <p>Home</p>
          </NavLink>

          <NavLink to='/cart'>
            <div className='relative'>
              <div className='absolute top-0 -right-1 h-4 w-4 text-sm flex justify-center items-center rounded-full bg-green-500 animate-bounce'>{cart.length}</div> 
              <FaShoppingCart className='text-2xl'/>
            </div>
          </NavLink>

        </div>
      </nav>
    </div>
  )
}

export default Navbar