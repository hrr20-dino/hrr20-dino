import React from 'react';
import RoutineStore from '../../flux/stores/routine-store';
import RoutineActions from '../../flux/actions/routine-actions';

export default class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routines: RoutineStore.getRoutines()
    };
  }

  componentDidMount() {
    this.setState({
      routines: RoutineStore.getRoutines()
    });
    RoutineStore.addChangeListener(this.onChange.bind(this));
  }

  componentWillUnmount() {
    RoutineStore.removeChangeListener(this.onChange);
  }

  render() {
    return (
      <div id='application'>
        <ul>
          {this.state.routines.map((routine) => {
            return (
              <li>{routine.name}</li>
            );
          })}
        </ul>
        <button onClick={this.handleClick.bind(this)}>Add routine</button>
      </div>
    );
  }

  onChange() {
    this.setState({
      routines: RoutineStore.getRoutines()
    });
  }

  handleClick(e) {
    RoutineActions.routineAdd({
      name: 'Another routine',
      description: 'Just another routine to add tasks to',
      repeat: {
        days: ['monday', 'friday']
      },
      start_time: {
        hour: 13,
        minute: 0
      },
      end_time: {
        hour: 14,
        minute: 30
      },
      history: []
    });
  }
}
