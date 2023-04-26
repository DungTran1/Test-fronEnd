import styles from "./Home.module.css";
import LogoImg from "../assets/images/logoNCC1.png";
import TextContent from "../components/Home/TextContent/TextContent";
import ItemContent from "../components/Home/ItemContent/ItemContent";
const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <div>
        <header>
          <img src={LogoImg} alt="" />
        </header>
        <section>
          <div className={styles.textContent}>
            <p>Lorem ipsum dolor sit asmet?</p>
            <TextContent />
          </div>
        </section>

        <ItemContent />
      </div>
      <footer>
        <p>Copyright © 2021</p>
      </footer>
    </div>
  );
};

export default Home;
