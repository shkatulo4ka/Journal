import CardButton from "../CardButton/CardButtton";
import "./JournalAddButton.css";

function JournalAddButton() {
  return (
    <CardButton className="journal-add">
      <img src="./add.svg" alt="Добавить" />
      Новый поход
    </CardButton>
  );
}

export default JournalAddButton;
