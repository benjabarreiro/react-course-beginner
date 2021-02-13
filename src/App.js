import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import tasks from './sample/task.json';

// Components
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Posts from './components/Posts'

class App extends Component {

  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({tasks: newTasks});
  }

  checkDone = id => {
    const newTasks = this.state.tasks.map(task => {
      if(task.id === id) {
        task.done = !task.done
      }
      return task;
    });
    this.setState({tasks: newTasks});
  }

  render() {
    return <div>
      <Router>

        <Link to="/">Home</Link>
        <br />
        <Link to="/posts">Posts</Link>

        <Route exact path='/' render={() => {
            return <div>
              <TaskForm addTask={this.addTask} />
              <Tasks
                tasks={this.state.tasks}
                deleteTask={this.deleteTask}
                checkDone={this.checkDone}
              />
          </div>
          }}>
        </Route>
        <Route path='/posts' component={Posts}>
          <Posts />
        </Route>
      </Router>
    </div>
  }
}

/*function Helloworld(props) {
  return (
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.mytext}
    </div>
  )
}

class Helloworld extends React.Component {

  state = {
    show: true
  }

  toggleShow = () => {
    this.setState({show: !this.state.show})
  }

  render() {
    if(this.state.show) {
      return(
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext}
          <button onClick={this.toggleShow} >Toggle Show</button>
        </div>
      )
    } else {
      return <h1>
        There is not an element
        <button onClick={this.toggleShow} >
          Toggle Show
        </button>
        </h1>
    }
  }
}

const App = () => <div>This is my component: <Helloworld /></div>

class App extends React.Component {
  render() {
    <div>This is my component: <Helloworld /></div>
  }
}

function App() {
  return (
    <div>
      This is my component: 
      <Helloworld mytext="Hello Fazt" subtitle="lorem ipsum" />
      <Helloworld mytext="Hello world" subtitle="asdasd" />
      <Helloworld mytext="Hello!" subtitle="componet 3" />
      </div>
  );
}*/

export default App;
