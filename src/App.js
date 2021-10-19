import List from "./List";
import toast, { Toaster } from "react-hot-toast";
import Hero from "./Hero";
import React, { useEffect, useState } from "react";
import Axios from "axios";
function App() {
  const notify = () => toast.success("Successfully fetched Orders");
  const [orders, setorders] = useState([]);
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetcher = async () => {
      const options = {
        url: "https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        data: { angular_test: "angular-developer" },
      };

      Axios(options)
        .then((response) => {
          setorders(response.data);
          notify();
        })
        .then((response) => {
          response.data.map((eachOrder) =>
            setCountries((orders) => [...orders, eachOrder.Country])
          );
        })
        .catch((error) => {
          toast.error("Something went wrong");
        });
    };

    fetcher();
  }, []);

  // removes duplicate countries from the array of countries
  var realCountries = [];
  var realCountries = countries.filter(function (elem, pos) {
    return countries.indexOf(elem) == pos;
  });
  console.log(realCountries);
  return (
    <div className="App">
      <Hero orders={orders} country={realCountries} />
      <List orders={orders} />
      <Toaster />
    </div>
  );
}

export default App;
