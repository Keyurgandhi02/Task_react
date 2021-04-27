import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Notes from "./Components/Notes/Notes";
import ViewData from "./Components/Notes/ViewNotes"
function App() {
  const [AddList, SetAddList] = useState([]);

  const AddListData = (Notes, Name, Date_no) => {
    SetAddList((prelist) => {
      return [
        ...prelist,
        {
          id: Math.random().toString(),
          notes: Notes,
          name: Name,
          date: Date_no,
        },
      ];

    });
  };

  const deleteHandler = (listid) => {
    SetAddList((prevlist) => {
      const updatedList = prevlist.filter((data) => data.id !== listid);
      return updatedList;
    });
  };

  return (
    <div className="App">
      <Notes adddetails={AddListData}></Notes>
      <ViewData items={AddList} onDeleteItem={deleteHandler} > </ViewData>
    </div>
  );
}

export default App;
