import React from "react";
import styles from "./Notes.module.css";
import DeleteNotes from "./DeleteNotes";
import styles1 from "./ViewNotes.module.css"

const ViewData = (props) => {
  return (
    <form className={styles.form}>
      <div className={styles1.users}>
        <ul>
          {props.items.map((data) => (
            <DeleteNotes
              key={data.id}
              id={data.id}
              onDelete={props.onDeleteItem}
            >
              {data.notes} {data.name} {data.date}
            </DeleteNotes>
          ))}
        </ul>
      </div>
    </form>
  );
};

export default ViewData;
