import styles from '../styles/navbar.module.css';
const Navbar = () => {

  return (
    <nav className={styles.navbar}>
      <h1 className={`${styles.brand}`}>GST</h1>
      <div className={`${styles.linksContainer}`}>
        <ul>
          <li><a href="#offers">Offers</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar