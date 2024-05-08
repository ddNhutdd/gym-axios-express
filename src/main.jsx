import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/users")
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(err => {
        throw err;
      });
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <h1>Users</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}> {user.name} </li>
          ))}
        </ul>
      </div>
    );
  }
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
