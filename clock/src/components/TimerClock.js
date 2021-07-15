import React from 'react';

class TimerClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hr: this.props.data.hr,
      min: this.props.data.min,
      sec: this.props.data.sec,
    };
  }

  componentDidMount() {
    // eslint-disable-next-line no-unused-vars
    let timerInterval = setInterval(() => {
      this.setState((prevState) => {
        let newHr = prevState.hr;
        let newMin = prevState.min;
        let newSec = prevState.sec;

        if (newSec > 0) {
          newSec = newSec - 1;
          this.props.updateStateTimer(newHr, newMin, newSec);
        } else if (newSec < 1 && newMin > 0) {
          newMin = newMin - 1;
          newSec = 59;
          this.props.updateStateTimer(newHr, newMin, newSec);
        } else if (newSec < 1 && newMin < 1 && newHr > 1) {
          newHr = newHr - 1;
          newMin = 59;
          newSec = 59;
          this.props.updateStateTimer(newHr, newMin, newSec);
        } else if (newSec === 0 && newMin === 0 && newHr === 0) {
          this.props.timerCompleted();
          this.props.updateStateTimer(newHr, newMin, newSec);
        }
        console.log(newSec, newMin, newHr);
        return { hr: newHr, min: newMin, sec: newSec };
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }

  render() {
    return (
      <h2>
        {' '}
        {this.state.hr < 10 ? '0' + this.state.hr : this.state.hr}:{' '}
        {this.state.min < 10 ? '0' + this.state.min : this.state.min} :{' '}
        {this.state.sec < 10 ? '0' + this.state.sec : this.state.sec}
      </h2>
    );
  }
}

export default TimerClock;
