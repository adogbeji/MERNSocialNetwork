import styles from './styles/index.module.scss';

const Home = () => {
  return (
    <div>
      <h1 className={styles.text}>Home Page</h1>
      <img src="/images/gal-1.jpeg" alt="Dummy Image"/>
    </div>
  );
};

export default Home;