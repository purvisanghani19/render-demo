import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setmessage] = useState("");
  useEffect(() => {
    const getdata = async () => {
      const res = await axios.get("http://localhost:4000/get-data");
      if (res.status === 200) {
        setmessage(res.data.res);
      }
    };
    getdata();
  }, []);

  return (
    <>
      <h1>{message}</h1>
    </>
  );
}

export default App;
