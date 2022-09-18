import React from "react";
import styles from "./Create.module.css";

function Create({ onSubmit, item, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        className={styles.f_add}
        type="text"
        placeholder="Write to do"
        value={item}
        onChange={onChange}
      />
    </form>
  );
}

export default Create;
