import React, { useState } from "react";

function CompButton({ companyNames, filterNames }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="btn-container">
      {companyNames.map((company) => {
        return (
          <button
            className={`job-btn ${isActive && "active-btn"}`}
            // className="job-btn"
            onClick={() => {
              setIsActive(!isActive);
              filterNames(company);
            }}
          >
            {company}
          </button>
        );
      })}
    </div>
  );
}

export default CompButton;
