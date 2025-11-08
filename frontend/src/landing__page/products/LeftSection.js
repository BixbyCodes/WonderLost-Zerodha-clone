import React from 'react';

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">
        {/* 📝 Text Section (Left Side) */}
        <div className="col-md-6 px-5 py-4">
          <h1 className="mb-3">{productName}</h1>
          <p className="mb-4">{productDescription}</p>

          <div className="mb-3">
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{ marginLeft: '40px' }}>
              Learn More
            </a>
          </div>

          <div>
            <a href={googlePlay}>
              <img src="images/googlePlayBadge.svg" alt="Google Play" />
            </a>
            <a href={appStore}>
              <img
                src="images/appstoreBadge.svg"
                alt="App Store"
                style={{ marginLeft: '40px' }}
              />
            </a>
          </div>
        </div>

        {/* 🖼️ Image Section (Right Side) */}
        <div className="col-md-6 text-center px-5 py-4">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
