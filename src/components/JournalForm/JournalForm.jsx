import Button from "../Button/Button";
import styles from "./JournalForm.module.css";
import { useEffect, useReducer, useRef } from "react";
import cn from "classnames";
import { INITIAL_STATE, formReducer } from "./JournalForm.state";
import Input from "../Input/Input";
import { UserContext } from "../../context/user.context";

function JournalForm({ onSubmit }) {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const { isValid, isFormReadyToSubmit, values } = formState;
  const titleRef = useRef();
  const dateRef = useRef();
  const postRef = useRef();

  const focusError = (isValid) => {
    switch (true) {
      case !isValid.title:
        titleRef.current.focus();
        break;
      case !isValid.date:
        dateRef.current.focus();
        break;
      case !isValid.post:
        postRef.current.focus();
        break;
    }
  };

  useEffect(() => {
    let timerId;
    if (!isValid.date || !isValid.post || !isValid.title) {
      focusError(isValid);
      timerId = setTimeout(() => {
        dispatchForm({ type: "RESET_VALIDITY" });
      }, 2000);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [isValid]);

  useEffect(() => {
    if (isFormReadyToSubmit) {
      onSubmit(values);
      dispatchForm({ type: "CLEAR" });
    }
  }, [isFormReadyToSubmit, values, onSubmit]);

  const onChange = (e) => {
    dispatchForm({
      type: "SET_VALUES",
      payload: { [e.target.name]: e.target.value },
    });
  };

  const addJournalItem = (e) => {
    e.preventDefault();
    dispatchForm({ type: "SUBMIT" });
  };

  return (
    <UserContext.Consumer>
      {(context) => (
        <form className={styles["journal-form"]} onSubmit={addJournalItem}>
          {context.userId}
          <div>
            <Input
              type="text"
              ref={titleRef}
              onChange={onChange}
              value={values.title}
              name="title"
              appearence="title"
              isValid={isValid.title}
            />
          </div>
          <div className={styles["form-row"]}>
            <label htmlFor="date" className={styles["form-label"]}>
              <img src="/calendar.svg" alt="Иконка календарь" />
              <span> Дата:</span>
            </label>
            <Input
              type="date"
              ref={dateRef}
              onChange={onChange}
              value={values.date}
              name="date"
              id="date"
              isValid={isValid.date}
            />
          </div>
          <div className={styles["form-row"]}>
            <label htmlFor="tag" className={styles["form-label"]}>
              <img src="/Folder.svg" alt="Иконка папки" />
              <span> Метки:</span>
            </label>
            <Input
              type="text"
              onChange={onChange}
              value={values.tag}
              id="tag"
              name="tag"
            />
          </div>

          <textarea
            name="text"
            ref={postRef}
            id=""
            onChange={onChange}
            value={values.text}
            cols="30"
            rows="10"
            className={cn(styles["input"], {
              [styles["invalid"]]: !isValid.post,
            })}
          ></textarea>
          <Button text="Сохранить" />
        </form>
      )}
    </UserContext.Consumer>
  );
}

export default JournalForm;
