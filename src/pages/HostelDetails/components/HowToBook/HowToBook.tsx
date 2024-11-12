import styles from "./HowToBook.module.scss";

const HowToBook = ({ howToBookData }) => {
  return (
    <div className={styles.howToBookContainer}>
      {howToBookData.map((data) => (
        <div className={styles.dataWrapper}>
          <h2>{data.title}</h2>
          <p>{data.Description}</p>
        </div>
      ))}
    </div>
  );
};

export default HowToBook;
