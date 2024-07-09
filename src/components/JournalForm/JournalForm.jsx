import Button from "../Button/Button";
import styles from "./JournalForm.module.css";
import { useState } from "react";
import cn from "classnames";

function JournalForm({ onSubmit }) {
  const [formValidState, setFormValidState] = useState({
    title: true,
    post: true,
    date: true,
  });
  const addJournalItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
    let isFormValid = true;
    if (!formProps.title.trim().length) {
      setFormValidState((state) => ({ ...state, title: false }));
      isFormValid = false;
    } else {
      setFormValidState((state) => ({ ...state, title: true }));
    }
    if (!formProps.text.trim().length) {
      setFormValidState((state) => ({ ...state, post: false }));
      isFormValid = false;
    } else {
      setFormValidState((state) => ({ ...state, post: true }));
    }
    if (!formProps.date.trim().length) {
      setFormValidState((state) => ({ ...state, date: false }));
      isFormValid = false;
    } else {
      setFormValidState((state) => ({ ...state, date: true }));
    }
    if (!isFormValid) {
      return;
    }
    onSubmit(formProps);
  };

  return (
    <>
      <form className={styles["journal-form"]} onSubmit={addJournalItem}>
        <div>
          <input
            type="title"
            name="title"
            className={cn(styles["input-title"], {
              [styles["invalid"]]: !formValidState.title,
            })}
          />
        </div>
        <div className={styles["form-row"]}>
          <label htmlFor="date" className={styles["form-label"]}>
            <img src="/calendar.svg" alt="Иконка календарь" />
            <span> Дата:</span>
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className={cn(styles["input"], {
              [styles["invalid"]]: !formValidState.date,
            })}
          />
        </div>
        <div className={styles["form-row"]}>
          <label htmlFor="tag" className={styles["form-label"]}>
            <img src="/Folder.svg" alt="Иконка папки" />
            <span> Метки:</span>
          </label>
          <input type="text" id="tag" name="tag" className={styles["input"]} />
        </div>

        <textarea
          name="text"
          id=""
          cols="30"
          rows="10"
          className={cn(styles["input"], {
            [styles["invalid"]]: !formValidState.post,
          })}
        ></textarea>
        <Button text="Сохранить" />
      </form>
    </>
  );
}

export default JournalForm;
