import Button from "../Button/Button";
import "./JournalForm.css";

function JournalForm({ onSubmit }) {
  const addJournalItem = (e) => {
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    e.preventDefault();
    onSubmit(formProps);
  };

  return (
    <>
      <form className="journal-form" onSubmit={addJournalItem}>
        <input type="title" name="title" />
        <input type="date" name="date" />
        <input type="text" name="tag" />
        <textarea name="text" id="" cols="30" rows="10"></textarea>
        <Button text="Сохранить" />
      </form>
    </>
  );
}

export default JournalForm;
