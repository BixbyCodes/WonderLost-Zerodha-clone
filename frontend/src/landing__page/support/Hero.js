import React from 'react'

function Hero() {
  return (
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: "#e9f2df", width: "100%" }}
    >
      <div className="d-flex justify-content-between align-items-center px-5 mb-4">
        <h1 className="fw-bold text-primary m-0">Support Portal</h1>
        <button className="btn btn-outline-primary px-4 py-2">
          My Tickets
        </button>
      </div>

    
      <div className="d-flex justify-content-center">
        <div className="input-group w-75 w-md-50 shadow-sm">
          <span className="input-group-text bg-white border-end-0">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            type="text"
            className="form-control border-start-0"
            placeholder="Eg: How do I open my account, how do I activate F&O..."
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
