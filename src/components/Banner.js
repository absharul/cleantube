import React from "react";

const Banner = ({ title, imageSrc, altText }) => {
  return (
    <section className="text-center py-16 bg-gray-100">
      <h2 className="text-3xl font-semibold">{title}</h2>
      <div className="mt-8">
        <img src={imageSrc} alt={altText} className="mx-auto" />
      </div>
    </section>
  );
};

export default Banner;
