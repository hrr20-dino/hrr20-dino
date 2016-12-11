import React from 'react';
import TaskStore from '../../flux/stores/task-store';
import UserActions from '../../flux/actions/user-actions';

TaskStore.useMockData();

export default class TestComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };
  }

  componentDidMount() {
    TaskStore
      .getTasks()
      .then((tasks) => {
        this.setState({
          tasks: tasks
        });
      });
  }

  render() {
    return (
      <div>
        <ul>
        {
          this.state.tasks.map((task) => {
            return (
              <li key={task.id}>{task.name}</li>
            );
          })
        }
        </ul>
      </div>
    );
  }
}