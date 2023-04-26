import TextContent from "../TextContent/TextContent";
import styles from "./ItemContent.module.css";
import cssIcon from "../../../assets/images/css-icon1.png";
import htmlIcon from "../../../assets/images/html-icon1.png";
import urlIcon from "../../../assets/images/url-icon1.png";
const ItemContent = () => {
  const items = [cssIcon, htmlIcon, urlIcon];
  return (
    <div className={styles.wrapper}>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index}>
              <h3>Lorem ipsum dolor sit amet</h3>

              <div className={styles.content}>
                <img src={item} width={128} height={128} alt="" />
                <TextContent />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemContent;
