import "./App.css";
import Button from "./components/Button/Button";
import CardButton from "./components/CardButton/CardButtton";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton";
import JournalItem from "./components/JournalItem/JournalItem";
import JournalList from "./components/JournalList/JournalList";
import Body from "./components/layouts/Body/Body";
import LeftPanel from "./components/layouts/LeftPanel/LeftPanel";
import Header from "./components/Header/Header";

function App() {
  const data = [
    {
      title: "Приэльбрусье-Узункол",
      text: "Спортивный поход 1 категории сложности",
      date: new Date(),
    },
    {
      title: "Грузия",
      text: "Треккинг с восхождением",
      date: new Date(),
    },
  ];
  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList>
          <CardButton>
            <JournalItem
              title={data[0].title}
              text={data[0].text}
              date={data[0].date}
            />
          </CardButton>
          <CardButton>
            <JournalItem
              title={data[1].title}
              text={data[1].text}
              date={data[1].date}
            />
          </CardButton>
        </JournalList>
      </LeftPanel>
      <Body></Body>
      <Button />
    </div>
  );
}

export default App;
