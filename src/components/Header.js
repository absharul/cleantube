import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold">CleanTube</h1>
        <p className="mt-2 text-xl">Your Distraction-Free YouTube Experience</p>
        <a
          href="https://chrome.google.com/webstore"
          className="mt-4 inline-block bg-blue-800 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-700 transition"
        >
          Get the Extension
        </a>
      </div>
    </header>
  );
};

export default Header;
