import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

function MainJob({ mainData }) {
  return (
    <>
      {mainData.map((aJob, index) => {
        if (index < 1) {
          const { id, title, dates, duties, company } = aJob;
          return (
            <div key={id} className="job-info">
              <h3>{title}</h3>
              <h4>{company}</h4>
              <p className="job-date">{dates}</p>

              {duties.map((para, id) => {
                return (
                  <div key={id} className="job-desc">
                    <FaAngleDoubleRight className="job-icon" />
                    <p>{para}</p>
                  </div>
                );
              })}
            </div>
          );
        }
      })}
    </>
  );
}

export default MainJob;
