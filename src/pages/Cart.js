import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart } = useSelector((state) => state) || { cart: [] }; // Ensure that cart is initialized as an array
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (cart && cart.length > 0) {
      setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    } else {
      setTotalAmount(0);
    }
  }, [cart]);

  return (
    <div>
      <div>

        {
          cart && cart.length > 0 ?
            (
              <div className='flex max-w-[900px] mx-auto'>
                <div className='flex flex-col'>
                  {
                    cart.map((item, index) => {
                      return <CartItem key={item.id} item={item} itemIndex={index} />
                    })
                  }
                </div>

                <div className='flex flex-col justify-between ml-10 h-[550px]'>

                  <div className='mt-6'>
                    <div className='text-2xl uppercase text-green-700 font-bold'>Your Cart</div>
                    <div className='text-3xl uppercase text-green-800 font-bold'>Summary</div>
                    <p className='mt-6'>
                      <span className='font-semibold text-xl'>Total Items: {cart.length}</span>
                    </p>
                  </div>

                  <div>
                    <p className='font-bold text-xl text-green-600'>
                      Total Amount : ${totalAmount}
                    </p>
                    <button className='bg-green-500 text-white mt-6 px-6 py-2 rounded-md border-none'>
                      Checkout Now
                    </button>
                  </div>

                </div>

              </div>) :
            (
              <div className='flex justify-center items-center flex-col gap-4 h-screen'>
                <h1 className='text-3xl font-bold'>Cart Empty</h1>
                <Link to='/'>
                  <button className='font-bold bg-green-500 px-6 py-3 border-none rounded-md'>
                    Shop Now
                  </button>
                </Link>
              </div>
            )
        }
      </div>
    </div>
  )
}

export default Cart