import React, {useEffect,useState} from "react";
import Axios from "axios"
import Src from 'react-bootstrap/Src';
import Container from 'react-bootstrap/Container';
const App = () => {
    const [users,setUsers] = useState([]);
    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            setUsers(res.data)
        })
    })
    return(
        <Container>
            <Src striped bordered hover>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
       {users.map((user) => {
        return <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.username}</td>
        </tr>
       })}
      </tbody>
    </Src>
        </Container>
    )
}