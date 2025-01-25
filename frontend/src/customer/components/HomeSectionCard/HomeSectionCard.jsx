import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeSectionCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      className="shadow-md rounded-lg p-4 cursor-pointer hover:shadow-lg"
      onClick={handleClick}
    >
      <img
        src={product.imageUrl}
        alt={product.title} 
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="mt-2">
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-gray-600">{product.color}</p>
        <p className="font-bold text-green-600">₹{product.discountedPrice}</p>
        <p className="line-through text-gray-400">₹{product.price}</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
