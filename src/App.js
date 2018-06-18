import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



var todos = [
 {
        todoTitle: 'Myfirst todo app',
        todoResponsible: 'Sebastian',
        todoDiscription: 'My first todo description',
        todoPriority: 'low'

    },

    {
        todoTitle: 'My second todo',
        todoResponsible: 'Sebastian',
        todoDiscription: 'My second todo description',
        todoPriority: 'Medium'

    },
    {

        todoTitle: 'My third todo',
        todoResponsible: 'Sebastian',
        todoDiscription: 'My third todo description',
        todoPriority: 'high'

    }

]
class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            todos
        };

        //bind the handleAddTodo to the array
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

//create a function o hundle the remove

    handleRemoveTodo(index) {
        //to modify the stete to remove the current to do item
        this.setState({
            todos: this.state.todos.filter(function(e, i) {
                return i !== index;
            } )
        })
         
    }

    //function for the handleAddTodo
    handleAddTodo(todo) {
        this.setState({todos: [...this.state.todos, todo]})
               
       }

    render(){
        return(
            <div className="container">
                
                {/*to call the todoinput componrnt */}

                <TodoInput onAddTodo={this.handleAddTodo} ></TodoInput>
                    <hr/>

                <h4>Todo Count: <span className="badge">{this.state.todos.length}</span> </h4>
                <h2>Marfo <span class="label label-default">{this.state.todos.todoDiscription}My React Development </span></h2>
                <ul className="list-group" >
                    {this.state.todos.map((todo, index) =>
                        <li className="list-group-item" key={index}>
                            <h4 className="list-group-item-heading">{todo.todoTitle}  <small><span className="label label-info" >{todo.todoPriority} </span> </small> </h4>

                            <p><span className="glyphicon glyphicon-user" >{todo.todoResponsible} </span> </p>
                            <p>{todo.todoDiscription} </p>

                            <button className="btn btn-danger btn-sm" onClick={this.handleRemoveTodo.bind(this,index)} ><span className="glyphicon glyphicon-trash" ></span>delete </button>

                        </li>
                 )}
                
                </ul>
        </div>
        );
    }
}

//create a new component to handl user input

class TodoInput extends Component{
//need a constructor
    constructor(props) {
        super(props);

        this.state = {
            todoTitle: '',
            todoResponsible: '',
            todoDiscription: '',
            todoPriority: 'Lowest'
        }

        //to bind it to theform
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //code to change the form to accept input
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }
    
    // handle the handleSubmit
    handleSubmit(event) {
        // prvent the default behaviour of html file
        event.preventDefault();

        //is object to all component (props) the onAddTodo event needs o add to the app component
        this.props.onAddTodo(this.state);
        this.setState({

            todoTitle: '',
            todoResponsible: '',
            todoDiscription: '',
            todoPriority: 'Lowest'
        })

    }    

        //the template code
        render() {
            
            return (
                <div>
                    <h4>Add new Todo</h4>
                    <form className="form-horizontal" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="inputTodoTitle" className="co-sm-2 control-label">Todo</label>
                            <div className="col-sm-10">
                                <input name="todoTitle"
                                    type="text" 
                                     className="form-control"
                                    id="inputTodoTitle"
                                    value={this.state.todoTitle}
                                    onChange={this.handleInputChange}
                                    placeholder="Title"></input>
                           </div>
                            </div>
                             <div className = "form-group" >
                                 <label htmlFor = "inputTodoResponsible" className ="co-sm-2 control-label">Responsible</label>
                                 <div className="col-sm-10">
                                    <input name="todoResponsible"
                                    type="text"
                                    className="form-control"
                                    id="inputTodoResponsible"
                                    value={this.state.todoResponsible}
                                    onChange={this.handleInputChange}
                                    placeholder="Responsible"></input>
                            </div> 
                            </div> 

                            {/* the third form group for description*/}
                            <div className="form-group" >
                                <label htmlFor="inputTodoDiscription" className="co-sm-2 control-label">Discription</label>
                                <div className="col-sm-10">
                                    <textarea name="todoDiscription"
                                        row="3"
                                        className="form-control"
                                        id="inputTodoDiscription"
                                        value={this.state.todoDiscription}
                                        onChange={this.handleInputChange}>
                                       </textarea>
                                </div>
                            </div>   

                           
                        
                            {/* the forth fom group for priority*/}

                            <div className="form-group" >
                                <label htmlFor="inputTodoPriority" className="co-sm-2 control-label">Priority</label>
                                <div className="col-sm-10">
                                    <select name="todoPriority"
                                        className="form-control"
                                        id="inputTodoPriority"
                                        value={this.state.todoPriority}
                                        onChange={this.handleInputChange}>
                                        <option>Lowest</option>
                                        <option>Low</option>
                                        <option>Medium</option>
                                        <option>High</option>
                                        <option>Highest</option>
                                    </select>
                                </div>
                        </div>
                        {/* for the button on submit*/}
                        <div className="form-group" >
                            <div className="col-sm-offset-2 col-sm-10" >
                              <button type="submit" className="btn btn-success" >Add Todo</button>
                            </div>
                        </div>                  
                        
                                        
                    </form>
                </div>
            )
        }
    }



export default App;