import styles from '../styles/footer.module.css';
const date = new Date();
const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
        here the end designed by ibdev copyright &copy; {date.getFullYear()}/ {date.getFullYear() + 1} all right reserved.
    </footer>
)
}

export default Footer