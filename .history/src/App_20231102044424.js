import React from "react";
const api = {
  key: "aae71886c63e3353f55a2d87e4ab0d82",
  base: "https://api.openweathermap.org/data/2.5"
}
function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
          />
        </div>
        <div>
          <div className="location-box">
            <div className="location">New York City, US</div>
            <div className="date"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
