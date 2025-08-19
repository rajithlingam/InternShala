import React, { useEffect, useState } from "react";
import axios from "axios";

function ApiCallUEff() {
  const [fetchThenData, setFetchThenData] = useState([]);
  const [fetchAsyncData, setFetchAsyncData] = useState([]);
  const [axiosThenData, setAxiosThenData] = useState([]);
  const [axiosAsyncData, setAxiosAsyncData] = useState([]);

  const API_URL = "https://jsonplaceholder.typicode.com/todos";

  //Fetch with then/catch
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetch with .then():", data);
        setFetchThenData(data.slice(0, 5));
      })
      .catch((err) => console.error("Fetch then error:", err));
  }, []);

  //Fetch with async/await
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        console.log("Fetch with async/await:", data);
        setFetchAsyncData(data.slice(0, 5));
      } catch (err) {
        console.error("Fetch async error:", err);
      }
    };
    fetchData();
  }, []);

  // Axios with then/catch
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log("Axios with .then():", res.data);
        setAxiosThenData(res.data.slice(0, 5));
      })
      .catch((err) => console.error("Axios then error:", err));
  }, []);

  // Axios with async/await
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(API_URL);
        console.log("Axios with async/await:", res.data);
        setAxiosAsyncData(res.data.slice(0, 5));
      } catch (err) {
        console.error("Axios async error:", err);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <h1>🧪 API Calls - 4 Ways</h1>

      <div>
        <h2>1. Fetch + then</h2>
        <ul>
          {fetchThenData.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>2. Fetch + async/await</h2>
        <ul>
          {fetchAsyncData.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>3. Axios + then</h2>
        <ul>
          {axiosThenData.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>4. Axios + async/await</h2>
        <ul>
          {axiosAsyncData.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ApiCallUEff;



