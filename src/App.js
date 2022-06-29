import React, { useState, useEffect } from "react";
import CompButton from "./CompButton";
import MainJob from "./MainJob";

const url = "https://course-api.com/react-tabs-project";
function App() {
  const [mainData, setMainData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState(0);

  async function getData() {
    try {
      let response = await fetch(url);
      let data = await response.json();
      setMainData(data);
      setIsLoading(false);
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
        <h1>Loading...</h1>
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
        <CompButton mainData={mainData} setValue={setValue} value={value} />
        <article>
          <MainJob mainData={mainData} value={value} />
          <a target="_blank" href="https://cnn.com">
            {" "}
            <button className="btn">More Info</button>
          </a>
        </article>
      </div>
    </section>
  );
}

export default App;
