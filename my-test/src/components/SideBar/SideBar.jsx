import styles from "./SideBar.module.css";
const SideBar = () => {
  const sideBar = ["Home", "Services", "News", "Blog", "Contact"];
  return (
    <div className={styles.sideBarWrapper}>
      <ul>
        {sideBar.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default SideBar;
