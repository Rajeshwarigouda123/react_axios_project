import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Style.css';

function DataTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>

      <h2>DataTable</h2>
      <table>
       
       <div className='Grid'>
          {data.map(item => (
            <div className='card'key={item.id}>
            <div className='a1'>{item.id}</div>
            <div className='a2'>{item.title}</div>
            <div className='a3'>{item.body}</div>

              
              {/* Add more columns as needed */}
            </div>
          ))}
        </div>
      </table>
    </div>
    
  );
}

export default DataTable;
