import "./App.css";
import { useEffect, useState } from "react";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton";
import JournalList from "./components/JournalList/JournalList";
import Body from "./components/layouts/Body/Body";
import LeftPanel from "./components/layouts/LeftPanel/LeftPanel";
import Header from "./components/Header/Header";
import JournalForm from "./components/JournalForm/JournalForm";

function App() {
  // const initialData = [
  //   // {
  //   //   "id": 1,
  //   //   "title": "Приэльбрусье-Узункол",
  //   //   "text": "Спортивный поход 1 категории сложности",
  //   //   "date": new Date(),
  //   // },
  //   // {
  //   //   "id": 2,
  //   //   "title": "Грузия",
  //   //   "text": "Треккинг с восхождением",
  //   //   "date": new Date(),
  //   // },
  // ];

  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    if (data) {
      setItems(
        data.map((item) => ({
          ...item,
          date: new Date(item.date),
        })),
      );
    }
  }, []);

  useEffect(() => {
    console.log(items);
  }, [items]);

  const addItem = (item) => {
    console.log(item);
    setItems((oldItems) => [
      ...oldItems,
      {
        text: item.text,
        title: item.title,
        date: new Date(item.date),
        id:
          oldItems.length > 0 ? Math.max(...oldItems.map((i) => i.id)) + 1 : 1,
      },
    ]);
  };

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList items={items} />
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>
    </div>
  );
}
export default App;
