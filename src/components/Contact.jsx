import styles from '../styles/contact.module.css';
const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
        <h2>Contact</h2>
        <div className={styles.formContainer}>
            <div>
                
                <input type="email" placeholder='Enter your email here...'/>
                <select placeholder='Select Your option' id="">
                    <option>Reserve</option>
                    <option>Question</option>
                    <option>Report</option>
                </select>
            </div>
            <textarea maxLength={200}  placeholder='message goes here...' ></textarea>
            <button>Validate</button>
        </div>
        
    </section>
  )
}

export default Contact