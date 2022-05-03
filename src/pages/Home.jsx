import React, { useState, useEffect } from "react";
import Table from '../components/Table';
import AddItem from '../components/AddItem';

const Home = () => {
    const [data, setData] = useState([]);
    const [showAddItem, setShowAddItem] = useState(false);

    const getData = () => {
        fetch("db.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (myJson) {
            setData(myJson);
          });
      };
      useEffect(() => {
        getData();
      }, []);

      const addItem = (item) => {
        const id = Math.floor(Math.random() * 10000) + 1;
        const newItem = { id, ...item };
        setData([...data, newItem]);
        console.log(id);
      };
    
      const deleteItem = (el) => {
        setData(data.filter((item) => el !== item));
      };
    
    
  return (
    <> {showAddItem && <AddItem onAdd={addItem} />}
    <Table data={data} onDelete={deleteItem} onAdd={()=>setShowAddItem(!showAddItem)}/> </>
  )
}

export default Home