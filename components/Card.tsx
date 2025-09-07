import React from "react";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  price?: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, price }) => {
  return (
    <div className="border rounded-xl shadow-md overflow-hidden hover:shadow-lg transition bg-white">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
        {price && <p className="text-blue-600 font-bold mt-2">{price}</p>}
        <div className="mt-3">
          <Button label="Book Now" />
        </div>
      </div>
    </div>
  );
};

export default Card;

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return <button>{label}</button>;
};
