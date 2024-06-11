import styles from "./index.module.scss";
import greetings from "../../greetings.json";
import { useState } from "react";

const Greetings = () => {
  const [showGreetings, setShowGreetings] = useState(
    greetings.items.length > 0
  );
  const [index, setIndex] = useState(0);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const nameParam = urlParams.get("name");　//name={}
  const nameImg = greetings.items[index].imageName;
  const altText = nameParam ? `Picture of ${nameParam}` : 'Default picture';
    
  const imageUrl = nameParam && nameImg ? `/image/${nameParam}/${nameImg}` : '/image/default.png';
  
  const handleNext = () => {
    if (index < greetings.items.length - 1) {
      setIndex(index + 1);

    } else {
      setShowGreetings(false);
    }
  };

  return (
    showGreetings && (
      <div className={styles["overlay"]}>
        <div className={styles["box"]}>
          <div className={styles["content"]}>
            <h3 className={styles["greetings-text"]}>{greetings.items[index].text}</h3>
            <img
              src={imageUrl}
              alt={altText}
              className={styles["auto-fit-image"]}
            />
          </div>
          <button className={styles["button"]} onClick={handleNext}>Next</button>
        </div>
      </div>
    )
  );
};

export default Greetings;
