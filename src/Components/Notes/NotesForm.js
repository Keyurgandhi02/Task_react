import React from "react";
import styles from "./Notes.module.css";
import Button from "../UI/Button";

const NotesForm = (props) => {
  return (
    <form onSubmit={props.onSubmitdata}>
      <h4 className={styles["text-warning text-center pt-5"]}>Remember It!!</h4>

      <label>
        <input
          type="text"
          className={styles.input}
          value={props.notes}
          onChange={props.OnNotes}
          placeholder="Enter Title Of Notes"
        />
        <div className={styles["line-box"]}>
          <div className={styles.line}></div>
        </div>
      </label>

      <label>
        <input
          type="text"
          className={styles.input}
          value={props.name}
          onChange={props.OnName}
          placeholder="Give Your Name"
        />

        <div className={styles["line-box"]}>
          <div className={styles.line}></div>
        </div>
      </label>

      <label>
        <input
          type="date"
          className={styles.input}
          value={props.date}
          onChange={props.OnDate}
          placeholder="Select Date"
        />

        <div className={styles["line-box"]}>
          <div className={styles.line}></div>
        </div>
      </label>
      <Button></Button>
    </form>
  );
};

export default NotesForm;
