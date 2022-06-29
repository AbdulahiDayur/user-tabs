import React, { useState, useEffect } from "react";
// import { FaAngleDoubleRight } from "react-icons/fa";
import CompButton from "./CompButton";
import MainJob from "./MainJob";

const url = "https://course-api.com/react-tabs-project";
function App() {
  const [jobs, setJobs] = useState([]);
  const [mainData, setMainData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [companyNames, setCompanyNames] = useState([]);

  function filterNames(companyTitle) {
    let arr = jobs.filter((data) => data.company === companyTitle);
    setMainData(arr);
  }

  async function getData() {
    try {
      let response = await fetch(url);
      let data = await response.json();
      setIsLoading(false);
      setMainData(data);
      setJobs(data);

      let arr = data.map((comp) => comp.company);
      setCompanyNames(arr);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return (
      <section>
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>

      <div className="jobs-center">
        <CompButton companyNames={companyNames} filterNames={filterNames} />
        <article>
          <MainJob mainData={mainData} />
          <button className="btn">More Info</button>
        </article>
      </div>
    </section>
  );
}

export default App;
