import SelectUser from "../SelectUser/SelectUser";
import styles from "./Header.module.css";

function Header({ changedUser}) {
  const changeUser = (e) => {
    changedUser(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <img
        className={styles.logo}
        src="/Personal Journal.svg"
        alt="Логотип журнала"
      />
      <SelectUser chnageUser={changeUser}/>
    </>
  );
}

export default Header;
