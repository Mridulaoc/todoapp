import React, {useEffect, useState} from 'react';
// import logo from './logo.svg';
// import './App.css';


let globalID= 0

function App() {


 
  const [task,setTask]= useState("");
  const [toDos, setToDos] = useState([]);


  function createTodo(event){
    event.preventDefault();
       
    setToDos(oldTodos => {
      setTask('')
      return [...oldTodos, {toDo: task , id: globalID++}]
       })
 
      }

      function deleteItem(itemID){
        setToDos(oldTodos => oldTodos.filter(item=>item.id!==itemID));

      }




  return (
   <>
   <h1>To Do App</h1>
   <form onSubmit={createTodo}>
   <input type='text' value={task} onChange={event=>{setTask(event.target.value)}}/>
   <button type='submit'>Create Todo</button>
   </form>
   <ul>
   {toDos.map((item,index)=>{
    return <div key={item.id}>
      <li>{item.toDo}</li>
    
      <button onClick={()=>deleteItem(item.id)}>Delete</button>
      </div>
   })}
   </ul>

   </>
  );
}


export default App;
