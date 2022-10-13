import React, { useState, useEffect } from "react";
import 'reactjs-popup/dist/index.css';
import "./App.css";
import ElementsList from "./components/ElementsList";


const App = () => {
  const [isPending,setIsPending] = useState(true);
  const [elements, setElements] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [html, setHtml] = useState("");


  const togglePopup = (id) => {
      //in order to fetch dynamic urls pass in the id to the fetch input url.
      fetch('http://localhost:63342/elements-list-app/src/hello.html?_ijt=jch18nue6q0mfq7uvgi7q6o92k')
          .then(function (response) {
          // The API call was successful!
          return response.text();
      }).then(function (html) {

          setHtml(html);
          setIsOpen(!isOpen);

      }).catch(function (err) {
          // There was an error
          console.warn('Something went wrong.', err);
      });
  }

  useEffect(() => {
    // fetch data
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(data => {
          return data.json();
        })
        .then(elements => {
          setElements(elements);
          setIsPending(false);
        });
      // set state when the data received
  }, []);


  return (
    <div className="App">
      <div className="container">
        <h1>List of Titles</h1>
          {isPending && <h1>Loading your data...</h1>}
          {!isPending && <ElementsList
          elements={elements}
          togglePopup ={togglePopup}
          isOpen = {isOpen}
          html = {html}
        />}
      </div>
    </div>
  );
};

export default App;
