import CardButton from "../CardButton/CardButtton";
import "./JournalAddButton.css";

function JournalAddButton({ clearForm }) {
  return (
    <CardButton className="journal-add" onClick={clearForm}>
      <img src="./add.svg" alt="Добавить" />
      Новая заметка
    </CardButton>
  );
}

export default JournalAddButton;
