import React from "react";

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold">How It Works</h2>
        <p className="mt-4 text-lg text-gray-600">
          FocusTube removes all videos and distractions from your YouTube homepage so you can focus on what matters. It's simple, easy to use, and works instantly.
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="step">
            <h3 className="text-2xl font-semibold">1. Install the Extension</h3>
            <p className="text-gray-600">Click the button to add FocusTube to your browser.</p>
          </div>
          <div className="step">
            <h3 className="text-2xl font-semibold">2. Enable the Extension</h3>
            <p className="text-gray-600">Once installed, enable FocusTube to remove all distractions on your YouTube homepage.</p>
          </div>
          <div className="step">
            <h3 className="text-2xl font-semibold">3. Enjoy a Clean Homepage</h3>
            <p className="text-gray-600">Your YouTube homepage will now be completely clear of suggested videos, letting you stay focused!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
