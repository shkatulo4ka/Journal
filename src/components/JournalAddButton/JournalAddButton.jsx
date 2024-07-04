import CardButton from "../CardButton/CardButtton";
import "./JournalAddButton.css";

function JournalAddButton() {
  return (
    <CardButton className="journal-add">
      <img src="./add.svg" alt="Добавить" />
      Новая заметка
    </CardButton>
  );
}

export default JournalAddButton;
