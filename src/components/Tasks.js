import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Task from './Task';

class Tasks extends Component {
    render() {
        return this.props.tasks.map(task => 
        <Task 
            task={task}
            key={task.id}
            deleteTask={this.props.deleteTask}
            checkDone={this.props.checkDone}
        />);
    }
}

Tasks.propTypes = {
    task: PropTypes.array.isRequired
}

export default Tasks;