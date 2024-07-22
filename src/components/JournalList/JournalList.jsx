import "./JournalList.css";
import CardButton from "../CardButton/CardButtton";
import JournalItem from "../JournalItem/JournalItem";
import { UserContext } from "../../context/user.context";
import { useContext, useMemo } from "react";

function JournalList({ items, setItem }) {
  const { userId } = useContext(UserContext);
  const sortItems = (a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  };
  //Для примера. Используем useMemo, если JournalList принимает много параметров, чтобы сортировка не срабатывала каждый раз

  const filteredItems = useMemo(
    () => items.filter((el) => el.userId === userId).sort(sortItems),
    [items, userId],
  );

  if (items.length === 0) {
    return <p>Записей пока нет, добавьте первую</p>;
  }

  return (
    <>
      {" "}
      {filteredItems.map((el) => (
        <CardButton key={el.id} onClick={() => setItem(el)}>
          <JournalItem title={el.title} text={el.text} date={el.date} />
        </CardButton>
      ))}
    </>
  );
}

export default JournalList;
