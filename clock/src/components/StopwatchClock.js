/* eslint-disable no-unused-vars */
import React from 'react';

class StopWatchClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hr: this.props.data.hr,
      min: this.props.data.min,
      sec: this.props.data.sec,
      ms: this.props.data.ms,
    };
  }

  componentDidMount() {
    let stopwatchTimer = setInterval(() => {
      //   console.log(this.state.hr, this.state.min, this.state.sec);
      this.setState((prevState) => {
        let newHr = prevState.hr;
        let newMin = prevState.min;
        let newSec = prevState.sec;
        let newMs = prevState.ms;
        if (newMs + 1 < 100) {
          newMs = newMs + 1;
          this.props.updateStateStopwatch(newHr, newMin, newSec, newMs);
        } else if (newMs + 1 >= 100 && newSec + 1 < 60) {
          newMs = 0;
          newSec = newSec + 1;
          this.props.updateStateStopwatch(newHr, newMin, newSec, newMs);
        } else if (newSec + 1 >= 60 && newMin + 1 < 60) {
          newMs = 0;
          newSec = 0;
          newMin = newMin + 1;
          this.props.updateStateStopwatch(newHr, newMin, newSec, newMs);
        } else if (newSec + 1 >= 60 && newMin + 1 >= 60) {
          newMs = 0;
          newSec = 0;
          newMin = 0;
          newHr = newHr + 1;
          this.props.updateStateStopwatch(newHr, newMin, newSec, newMs);
        }
        console.log(newSec, newMin, newHr);
        return {
          hr: newHr,
          min: newMin,
          sec: newSec,
          ms: newMs,
        };
      });
    }, 10);
  }

  componentWillUnmount() {
    clearInterval(this.stopwatchTimer);
  }
  render() {
    return (
      <h2>
        {this.state.hr < 10 ? '0' + this.state.hr : this.state.hr}:{' '}
        {this.state.min < 10 ? '0' + this.state.min : this.state.min} :{' '}
        {this.state.sec < 10 ? '0' + this.state.sec : this.state.sec}:{' '}
        {this.state.ms < 10 ? '0' + this.state.ms : this.state.ms}{' '}
      </h2>
    );
  }
}

export default StopWatchClock;
