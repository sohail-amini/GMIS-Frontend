import "./App.css";

function App() {
  return (
    <div
      className="flex items-center justify-center "
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      {/* Container */}
      <div className="flex flex-col md:flex-row items-center text-white ">
        {/* Text Section */}
        <div className="text-center md:text-left ">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 ">MIS GYM</h1>
          <p className="text-lg md:text-xl mb-4">
            We are getting ready to make you stronger!
          </p>
          <p className="text-gray-400">
            Our state-of-the-art gym is coming soon. Stay tuned for updates and
            special offers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
