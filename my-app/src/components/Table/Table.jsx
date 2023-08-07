import React, { useEffect, useState } from 'react';
import styles from './Table.css';


const APIExample = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://itgirlschool.justmakeit.ru/api/words')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.title}>Слово</th>
          <th className={styles.title}>Транскрипция</th>
          <th className={styles.title}>Перевод</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td className={styles.td} >{item.english}</td>
            <td className={styles.td}>{item.transcription}</td>
            <td className={styles.td}>{item.russian}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default APIExample;