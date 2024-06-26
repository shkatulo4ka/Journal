import "./App.css";
import { useState } from "react";
import CardButton from "./components/CardButton/CardButtton";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton";
import JournalItem from "./components/JournalItem/JournalItem";
import JournalList from "./components/JournalList/JournalList";
import Body from "./components/layouts/Body/Body";
import LeftPanel from "./components/layouts/LeftPanel/LeftPanel";
import Header from "./components/Header/Header";
import JournalForm from "./components/JournalForm/JournalForm";

function App() {
  const initialData = [
    {
      id: 1,
      title: "Приэльбрусье-Узункол",
      text: "Спортивный поход 1 категории сложности",
      date: new Date(),
    },
    {
      id: 2,
      title: "Грузия",
      text: "Треккинг с восхождением",
      date: new Date(),
    },
  ];

  const [items, setItems] = useState(initialData);

  const addItem = (item) => {
    setItems((oldItems) => [
      ...oldItems,
      {
        text: item.text,
        title: item.title,
        date: new Date(item.date),
        id: oldItems.length > 0 ? Math.max(...oldItems.map((i) => i.id)) + 1 : 1,
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
export default App
