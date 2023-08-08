import styles from '../styles/offer_card.module.css'
const Card = ({name, details, price,photo}) => {
  return (
    <div className={styles.offerCardContainer}>
        <img src={photo} alt="photo" />
        <h2>{name}</h2>
        <p className={styles.details}>{details}</p>
        <p className={styles.prices}>Start From {price}$</p>
        
    </div>
  )
}

export default Card