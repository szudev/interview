import { useEffect, useState } from "react";
import useFetchData from "../hooks/useFetchData";
import "./app.style.css";

const App = () => {
  const { fetchedData } = useFetchData();
  const [hideElementByIndex, setHideElementByIndex] = useState({});

  const handleClick = (index) => {
    setHideElementByIndex((prevState) => {
      return { ...prevState, [index]: !prevState[index] };
    });
  };

  return (
    <main className="main">
      {fetchedData ? (
        <>
          {fetchedData.map((item, index) => {
            return (
              <section className="section" key={item.title}>
                <div className="item_header">
                  <p>{item.title}</p>
                  <img
                    className="img"
                    src={item.image}
                    alt={item.description}
                  />
                </div>
                <div className="item_description">
                  <button onClick={() => handleClick(index)}>
                    Description
                  </button>
                  {hideElementByIndex[index] && <p>{item.description}</p>}
                </div>
              </section>
            );
          })}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};

export default App;
