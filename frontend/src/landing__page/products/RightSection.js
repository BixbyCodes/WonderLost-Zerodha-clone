import React from 'react';

function RightSection({ imageURL, productName, productDescription, learnMore }) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center px-5 py-4">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>

      
        <div className="col-md-6 px-5 py-4">
          <h1 className="mb-3">{productName}</h1>
          <p className="mb-4">{productDescription}</p>

          <div>
            <a href={learnMore}>Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
