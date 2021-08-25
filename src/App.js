import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [userArray, setUserArray] = useState([]);
  const addUserHandler = (newUser) => {
    setUserArray((prevState) => {
      return [
        ...prevState,
        newUser
      ]
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userArray} />
    </>
  );
}

export default App;
