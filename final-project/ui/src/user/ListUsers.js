import './ListUsers.css';
import ListItem from './ListItem';
import React, { useContext } from "react";
import authContext from "../auth/authContext";

const ListUsers = ({ 
  listItems 
}) => {

  const {authenticated,  setAuthenticated } = useContext(authContext);

  return (
    <div className="ListUsers">

      <span>{authenticated ? "You are logged in": "Please login to see more details...."}</span>

      {console.log(listItems)}
      {listItems.map(item => (
        <ListItem
          className="ListItem"
          id={item._id}
          name={item.name}
          age={item.age}
        />
      ))}
    </div>
  );
}

export default ListUsers;
