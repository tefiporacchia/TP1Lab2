import React from 'react';
import {BrowserRouter as Router, Switch, Route, useParams} from "react-router-dom"
import ToDoForm from "./components/ToDoForm";
import {addTodo, getAllTodos,getTodoById} from "./components/Todos";
import InteractiveList from "./components/InteractiveList";


function App() {

  return (

      <Router>

        <Switch>
            <Route path='/todo/:id'>
                <ToDoForm title="Form" onSubmit={addTodo} getTodoById={getTodoById}/>
            </Route>
            <Route path='/home'>
                <InteractiveList getTodos={getAllTodos}/>
            </Route>

        </Switch>

      </Router>
  );
}

export default App;
