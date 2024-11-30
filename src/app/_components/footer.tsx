import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Subscription Box */}
        <div className="w-full md:col-span-1 mx-auto mt-8">
          <div className="bg-white pt-6 pb-6 pl-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              {/* Logo Symbol */}
              <div className="bg-white p-2 rounded-full flex items-center justify-center">
                <img
                  src="/assets/logo-symbol.png" // Referencing the logo from the public folder
                  alt="MapInsights Logo"
                  width={50} // Setting logo size to 32x32
                  height={50}
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold">MapInsights.co</h2>
                <p className="text-gray-600 pr-6">
                  Your weekly source for news, tutorials, and stories on GIS and
                  spatial data
                </p>
              </div>
            </div>
            <form
              action="https://formsubmit.co/fredrik@atlas.co"
              method="POST"
              className="flex w-full pr-6"
            >
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                required
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 pr-6 py-2 bg-gray-500 text-white font-semibold rounded-r-lg hover:bg-gray-800 focus:outline-none"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Bottom */}
        <div className="col-span-1 flex flex-col md:items-end mt-8 md:mt-0 justify-center">
          <div className="text-lg font-semibold mb-4">
            &copy; {new Date().getFullYear()} MapInsights.co
          </div>
          <div className="space-y-2">
            <a
              href="/privacy-policy"
              className="text-gray-500 hover:text-gray-800"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-gray-500 hover:text-gray-800 ml-4"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
