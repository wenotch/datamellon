import List from "./List";
import toast, { Toaster } from "react-hot-toast";
import Hero from "./Hero";
import React, { useEffect, useState } from "react";
import Axios from "axios";
function App() {
  const notify = () => toast.success("Successfully fetched Orders");
  const [orders, setorders] = useState([]);

  useEffect(() => {
    const fetcher = () => {
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
        })
        .then((response) => {
          notify();
        })
        .catch((error) => {
          toast.error("Something went wrong" + error.message);
        });
    };

    fetcher();
  }, []);

  return (
    <div className="App">
      <Hero orders={orders} />
      <List orders={orders} />
      <Toaster />
    </div>
  );
}

export default App;
