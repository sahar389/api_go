import "./App.css";
import { useState, useEffect } from "react";
import UserList from "./UserList";
import axios from "axios";

function App() {
  const [listOfUser, setListOfUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const getList = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(res.data);
      setIsLoading(false);
      setListOfUser(res.data);
    } catch (err) {
      setIsLoading(false);
      console.log("error: ", err.message);
      setError(err.message);
    }
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <div className="App">
      <UserList list={listOfUser} isLoading={isLoading} error={error} />
    </div>
  );
}

export default App;