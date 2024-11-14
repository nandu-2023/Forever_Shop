import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RealtedProducts from '../components/RealtedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = () => {
    const foundProduct = products.find((item) => item._id === productId);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]);
    } else {
      setProductData(null); // Handle product not found
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  if (!productData) {
    return <div>Loading...</div>; // Better loading state
  }

  return (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex flex-col sm:flex-row gap-6'>
        <div className='flex sm:w-[30%] overflow-x-auto'> {/* Image thumbnails */}
          <div className='flex gap-3 sm:flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[60%] w-full'>
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                alt={productData.name}
                className='flex-shrink-0 w-[80%] cursor-pointer' // Prevent shrinking and maintain size
              />
            ))}
          </div>
        </div>

        <div className='flex flex-col sm:w-[70%]'>
          <div className='flex'>
            <img className='w-[60%] h-auto' src={image} alt={productData.name} />
            <div className='flex flex-col ml-5 w-[40%]'> {/* Data info on the right */}
              <h1 className='font-medium text-2xl'>{productData.name}</h1>
              <div className='flex items-center gap-1 mt-2'>
                {[...Array(4)].map((_, index) => (
                  <img src={assets.star_icon} alt="star" className="w-3" key={index} />
                ))}
                <img src={assets.star_dull_icon} alt="star" className="w-3" />
                <p className='pl-2'>(22)</p>
              </div>
              <p className='mt-5 text-3xl font-medium'>{currency} {productData.price}</p>
              <p className='mt-5 text-gray-500'>{productData.description}</p>
              <p className='mt-5'>Select Size</p>
              <div className='flex gap-2'>
                {productData.sizes.map((item) => (
                  <button
                    key={item}
                    onClick={() => setSize(item)}
                    className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <button onClick={() => addToCart(productData._id, size)}
                className='bg-black text-white px-8 py-3 mt-5 text-sm active:bg-gray-700'
                
              >
                ADD TO CART
              </button>
              <hr className="mt-8" />
              <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
                <p>100% Original product.</p>
                <p>Cash on delivery is available on this product</p>
                <p>Easy return and exchange policy within 7 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Descriptions and Reviews */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Descriptions</b>
          <p className='border px-5 py-3 text-sm cursor-pointer'>Review (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 text-sm text-gray-500'>
          <p>An e-commerce website is an online platform that facilitates buying and selling.</p>
          <p>E-commerce websites typically display products or services along with details.</p>
        </div>
      </div>
      <RealtedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>


  );
};

export default Product;
