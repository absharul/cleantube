import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold">Privacy Policy</h2>
        <p className="mt-4 text-lg text-gray-600">
          We value your privacy. FocusTube does not collect any personal data or track your activity. The extension only interacts with YouTube to remove video elements on the homepage.
        </p>
        <ul className="mt-8 text-lg text-gray-700">
          <li>We do not store any of your browsing history.</li>
          <li>All data interactions are local to your device and are not shared with third parties.</li>
          <li>The extension does not alter or track your use of YouTube.</li>
        </ul>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
