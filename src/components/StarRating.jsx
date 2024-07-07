import React from 'react';

const StarRating = ({ label, rating, setRating }) => {
  return (
    <div className="my-2">
      <label className="block text-sm font-medium">{label}</label>
      <div className="flex space-x-1">
        {
          [...Array(5)].map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setRating(index + 1)}
            className={index < rating ? 'text-yellow-500' : 'text-gray-300'}
            style={{ fontSize: '30px' }}
          >
          ★
          </button>
        ))
        }
      </div>
    </div>
  );
};

export default StarRating;
