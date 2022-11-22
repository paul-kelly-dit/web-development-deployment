import { useState, useEffect } from "react";
import "./App.css";
import ListUsers from "./user/ListUsers";
import AddUser from "./user/AddUser";
import SearchUser from "./user/SearchUser";
import MenuBar from "./user/MenuBar";
import authContext from "./auth/authContext";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [listItems, setListItems] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setListItems([]);
    fetch(`http://localhost:3001/user?name=${searchString}`)
      .then(
        res => res.json()
      ).then((result) => {
          setIsLoaded(true);
          setListItems(result);
        }
      )
  }, [searchString])

  const handleNewUser = (newData) => {
    console.log(newData);
    // setListItems([...listItems, {name: newData.name, age: Number(newData.age)}]);
  }

  
    // https://reactjs.org/docs/faq-ajax.html
    return (
      <authContext.Provider value={{ authenticated, setAuthenticated }}>
      <div className="App">
        <MenuBar/>
        
        <SearchUser
          setSearchString={setSearchString}
        />
        <AddUser
          handleNewUser={handleNewUser}
        />
        <ListUsers
          listItems={listItems}
        />
      </div>
      </authContext.Provider>
    );
}

export default App;
