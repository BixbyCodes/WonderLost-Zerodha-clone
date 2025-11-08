import React, { useState, useEffect } from "react";

import "./TryAi.css";

function TryAi() {
  const [stock, setStock] = useState(null);
  const [price, setPrice] = useState(null);

  const stocks = [
    { symbol: "AAPL", name: "Apple Inc." },
    { symbol: "TSLA", name: "Tesla Motors" },
    { symbol: "NVDA", name: "NVIDIA" },
    { symbol: "AMZN", name: "Amazon" },
    { symbol: "MSFT", name: "Microsoft" },
    { symbol: "GOOGL", name: "Alphabet" },
    { symbol: "META", name: "Meta Platforms" },
    { symbol: "TATASTEEL", name: "Tata Steel" },
    { symbol: "RELIANCE", name: "Reliance Industries" },
    { symbol: "INFY", name: "Infosys" },
  ];


  const getRandomBasePrice = () => {
    return (Math.random() * (3500 - 100) + 100).toFixed(2);
  };


  const getStock = () => {
    const random = stocks[Math.floor(Math.random() * stocks.length)];
    setStock(random);
    setPrice(getRandomBasePrice());
  };


  useEffect(() => {
    if (!stock) return;
    const interval = setInterval(() => {
      setPrice((prev) => {
        if (!prev) return prev;
        let change = (Math.random() * 10 - 5).toFixed(2); 
        let newPrice = (parseFloat(prev) + parseFloat(change)).toFixed(2);
        if (newPrice < 0) newPrice = 1;
        return newPrice;
      });
    }, 2000); 
    return () => clearInterval(interval);
  }, [stock]);

  return (
    <div className="tryai-bg d-flex flex-column min-vh-100 text-light">
     
      <div className="container text-center flex-grow-1 d-flex flex-column justify-content-center align-items-center">
        <h1 className="display-4 fw-bold mb-3 text-gradient">
          AI Stock Advisor 
        </h1>
        <p className="lead text-light mb-4">
          Click below and let AI reveal today’s best stock for your portfolio!
        </p>

        <button
          className="btn btn-lg btn-glow px-5 py-3 mb-4"
          onClick={getStock}
        >
          Get Today’s Best Stock 🚀
        </button>

        {stock && (
          <div className="stock-result mt-4">
            <h2 className="fw-bold text-warning">
               Today’s AI Pick:{" "}
              <span className="text-light">
                {stock.symbol} ({stock.name})
              </span>
            </h2>
            <h3
              className={`mt-3 ${
                price && parseFloat(price) % 2 === 0 ? "text-success" : "text-danger"
              }`}
            >
              ₹ {price}
            </h3>
            <div className="text-secondary small">
              Simulated live price (AI-powered )
            </div>
          </div>
        )}

        <p className="mt-5 small text-secondary">
          *Please read all scheme related documents carefully": This is a warning advising potential investors to thoroughly review the offer documents, which contain crucial information such as investment objectives, strategies, risks, fees, and past performance, before making an investment decision .*
        </p>
      </div>
    </div>
  );
}

export default TryAi;
