import React, { useState } from "react";

function CompButton({ mainData, setValue, value }) {
  return (
    <div className="btn-container">
      {mainData.map((item, index) => {
        return (
          <button
            key={item.id}
            onClick={() => setValue(index)}
            className={`job-btn ${index === value && "active-btn"}`}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
}

export default CompButton;
