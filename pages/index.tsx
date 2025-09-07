import React from "react";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, price }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <div className="flex items-center justify-between mt-4">
        <span className="text-xl font-bold">{price}</span>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Book Now
        </button>
      </div>
    </div>
  </div>
);

// Update the import path if Card is located elsewhere, for example:
// import Card from "../components/common/Card";
// Or create the Card component at ../components/common/Card.tsx if it does not exist.

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">ALX Listing App</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          title="Cozy Apartment"
          description="A beautiful apartment in the city center."
          imageUrl="/assets/house1.jpg"
          price="$120/night"
        />
        <Card
          title="Beach House"
          description="Enjoy the sea breeze and amazing views."
          imageUrl="/assets/house2.jpg"
          price="$250/night"
        />
        <Card
          title="Mountain Cabin"
          description="Perfect for a peaceful getaway."
          imageUrl="/assets/house3.jpg"
          price="$90/night"
        />
      </div>
    </main>
  );
}
