import React, { useState } from "react";
import styles from "./Notes.module.css";
import NotesForm from "./NotesForm";

const Notes = (props) => {
  const [enteredNotes, setEnteredNotes] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const OnchangeNotes = (e) => {
    setEnteredNotes(e.target.value);
  };

  const OnchangeName = (e) => {
    setEnteredName(e.target.value);
  };

  const OnchangeDate = (e) => {
    setEnteredDate(e.target.value);
  };

  const onAddNotesHandler = (e) => {
    e.preventDefault();

    props.adddetails(enteredNotes, enteredName, enteredDate);
    setEnteredNotes("");
    setEnteredName("");
    setEnteredDate("");
  };

  return (
    <div>
      <NotesForm
        notes={enteredNotes}
        name={enteredName}
        date={enteredDate}
        onSubmitdata={onAddNotesHandler}
        OnNotes={OnchangeNotes}
        OnName={OnchangeName}
        OnDate={OnchangeDate}
      ></NotesForm>
    </div>
  );
};

export default Notes;
