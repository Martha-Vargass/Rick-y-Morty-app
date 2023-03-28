import styles from './SearchBar.module.css';

export default function SearchBar(props) {
   const onSearch= props;
   return (
      <div className={styles.search}>
          <input type='search' />
      <button onClick={onSearch}>Agregar</button> 
      </div>
   );
}
