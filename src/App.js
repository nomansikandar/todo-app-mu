import './App.css';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import ListComp from './ListComp';

function App() {

  const [item, setItem] = useState();
  const [newitem, setNewItem] = useState([]);

  const itemEvent = (e) => {
    setItem(e.target.value);
  }

  const listOfItems = () => {
    setNewItem((prevVal) => {
      return [...prevVal, item]
    });
    setItem("");
  }

  return (
    <div className="main_div">
      <div className='center_div'>
        <h1>ToDo List</h1>
        <input value={item} type="text" placeholder="Add an Item" onChange={itemEvent} />
        <Button className='newBtn' onClick={listOfItems}><AddIcon /></Button>
        <ol>{
          newitem.map((val, index) => {
            return <ListComp key={index} text={val} />
          })
        }
        </ol>
      </div>

    </div>
  );
}

export default App;
