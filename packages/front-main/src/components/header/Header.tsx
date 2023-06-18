import styles from './Header.module.scss'


const Header = (props: {message: string}) => {
    return (
        <div className={styles.main}>
            <h1>{props.message}</h1>
        </div>
    );
  };
  
  export default Header;