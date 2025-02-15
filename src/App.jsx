import { useState } from 'react'
import contactsJSON from './contacts.json'
import './App.css'

function App() {
  //FIXME: USE STATE 
  const [contacts, setContacts] = useState(contactsJSON.slice(0 ,6));
  const [remaining, setRemaining] = useState(contactsJSON.slice(6));
  const [count, setCount] = useState(0)



  const addRandomContact = () => {
    const random = Math.floor(Math.floor(Math.random() * remaining.length));
    const newContact = remaining.splice(random, 1)[0]

  setContacts([...contacts, newContact]);
  }

  function sortByName() {
    contacts.sort((a,b) => a.name.localeCompare(b.name))
    setCount(count + 1)
  }


  return (
    <div className="App">
      <h1> IronContacts </h1>
      <button onClick={addRandomContact}>Add a random contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <table id='talbe'>
        <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>
        </thead>
      <tbody>
        {contacts.map((celebrity) => {
            return (
              <tr key={celebrity.id} className="table">
                <td>
                  <img src={celebrity.pictureUrl} alt="" />
                </td>
                <td>{celebrity.name}</td>
                <td>{celebrity.popularity}</td>
                <td>{celebrity.wonOscar ? '🏆' : ''}</td>
                <td>{celebrity.wonEmmy ? '🏆' : ''}</td>
              </tr>
            )
          })}
        </tbody> 
    </table>
    </div>
  );
};

export default App
