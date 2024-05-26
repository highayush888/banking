
import React from 'react';

const sharedClasses = {
  container: 'container mx-auto px-4 py-8',
  card: 'p-4 bg-white rounded-lg shadow',
  flex: 'flex items-center space-x-2',
  text: 'text-zinc-600',
};

const Headerhelp = () => {
  return (
    <div className="bg-blue-900 text-white">
      <div className={sharedClasses.container}>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">NEPTUNE</h1>
            <p className="text-2xl">Helpdesk</p>
            <p className="text-sm opacity-75">Dashboard / Helpdesk</p>
          </div>
          <button className="bg-white text-blue-900 py-2 px-4 rounded">Contact Us</button>
        </div>
        <div className="mt-8">
          <div className="relative">
            <input type="text" placeholder="Search here" className="w-full p-4 rounded-lg" />
            <button className="absolute right-0 top-0 mt-2 mr-2 bg-blue-700 hover:bg-blue-800 text-white p-2 rounded-lg">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, description, imgUrl }) => {
  return (
    <div className={sharedClasses.card}>
      <div className={sharedClasses.flex}>
        <img src={imgUrl} alt={title} />
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <p className="mt-2 text-sm">{description}</p>
    </div>
  );
};

const MainContent = () => {
  return (
    <div className={sharedClasses.container}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Card
            title="Getting Started"
            description="Get started fast with installation"
            imgUrl="https://placehold.co/40x40"
          />
          <Card
            title="User Account"
            description="All the user related queries"
            imgUrl="https://placehold.co/40x40"
          />
          <Card
            title="Product Features"
            description="Have some issue with the product?"
            imgUrl="https://placehold.co/40x40"
          />
        </div>
        <div className="md:col-span-2">
          <div className={sharedClasses.card}>
            <h2 className="text-xl font-semibold">GETTING STARTED & WHAT IS NEXT</h2>
            <p className="mt-2 text-sm">
              Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
            <p className="mt-4 text-sm">
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const HelpdeskPage = () => {
  return (
    <>
      <Headerhelp />
      <MainContent />
    </>
  );
};

export default HelpdeskPage;
