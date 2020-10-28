import React from 'react';
import styles from '../styles/Home.module.css';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <>
        <h1 className={styles.title}>What time is it?</h1>
        <h1 className={styles.title}>It is {this.state.date.toLocaleTimeString()}</h1>
      </>
    );
  }
}

export default Clock;
