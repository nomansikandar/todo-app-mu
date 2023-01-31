import './App.css';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import ListComp from './ListComp';

function App() {

  const [item, setItem] = useState();
  const [newitem, setNewItem] = useState([]);

  const listOfItems = () => {
    if (item === "") {
      alert("cannot add empty todo")
    } else {
      setNewItem((prevVal) => {
        return [...prevVal, item]
      });
      setItem("");
    }

  }

  const itemEvent = (e) => {
    setItem(e.target.value);
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
