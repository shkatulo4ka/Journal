import "./App.css";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton";
import JournalList from "./components/JournalList/JournalList";
import Body from "./components/layouts/Body/Body";
import LeftPanel from "./components/layouts/LeftPanel/LeftPanel";
import Header from "./components/Header/Header";
import JournalForm from "./components/JournalForm/JournalForm";
import { useLocalStorage } from "./components/hooks/use-localstorage.hook";
import { UserContext } from "./context/user.context";

function mapItems(items) {
  if (!items) {
    return [];
  }
  return items.map((i) => ({
    ...i,
    date: new Date(i.date),
  }));
}

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

  const [items, setItems] = useLocalStorage("data");

  const addItem = (item) => {
    console.log(item);
    setItems([
      ...mapItems(items),
      {
        text: item.text,
        title: item.title,
        date: new Date(item.date),
        id: items.length > 0 ? Math.max(...items.map((i) => i.id)) + 1 : 1,
      },
    ]);
  };

  return (
    <UserContext.Provider value={{ userId: 1 }}>
      <div className="app">
        <LeftPanel>
          <Header />
          <JournalAddButton />
          <JournalList items={mapItems(items)} />
        </LeftPanel>
        <Body>
          <JournalForm onSubmit={addItem} />
        </Body>
      </div>
    </UserContext.Provider>
  );
}
export default App;
