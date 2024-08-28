import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setmessage] = useState("");
  const [user, setuser] = useState([]);
  console.log("user", user);
  useEffect(() => {
    const getdata = async () => {
      const res = await axios.get(
        "https://render-demo-backend-jlp8.onrender.com/get-data"
      );
      if (res.status === 200) {
        setmessage(res.data.res);
      }
    };

    const getuserdata = async () => {
      const res = await axios.get(
        "https://render-demo-backend-jlp8.onrender.com/user/get-user"
      );
      console.log("res", res);
      if (res.status === 200) {
        setuser(res.data.userdata);
      }
    };
    getdata();
    getuserdata();
  }, []);

  return (
    <>
      <h1>{message}</h1>
      {user.map((item, index) => (
        <div key={index}>
          <p>email : {item.email}</p>
          <p>password : {item.password}</p>
        </div>
      ))}
    </>
  );
}

export default App;
