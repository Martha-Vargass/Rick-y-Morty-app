import styles from '../Card/Card.module.css';


export default function Card(props) {
   
   const {name, species, gender, image, onClose } = props;
   return (
      <div className={styles.container}>
         <div className={styles.button}>
            <button onClick={onClose}>X</button>
          </div>
         <h2>{name}</h2>
         <img className={styles.imagen} src={image} alt="img" />
         <div className={styles.data}>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         </div>
          
      </div>
   );
}
