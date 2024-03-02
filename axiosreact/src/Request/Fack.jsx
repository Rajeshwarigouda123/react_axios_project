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
      const response = await axios.get('https://fakestoreapi.com/products');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>

      <h2>Data Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>PRICE</th>
            <th>DESCRIPION</th>
            <th>IMAGE</th>
            <th>CATEGORY</th>

            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          {data.map(data=> (
            <tr key={data.index}>
              <td>{data.id}</td>
              <td>{data.title}</td>
              <td>{data.price}</td>
              <td>{data.description}</td>
              <td>{data.image}</td>
              <td>{data.category}</td>
              
              {/* Add more columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   
  );
}

export default DataTable;
