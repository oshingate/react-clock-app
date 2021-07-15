import React from 'react';
import StopWatchClock from './StopwatchClock';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showStopwatch: false,
      state: 'reset',
      hr: 0,
      min: 0,
      sec: 0,
      ms: 0,
    };
  }

  //start Stopwatch
  startStopwatch = () => {
    console.log('stopwatch started');
    this.setState({ showStopwatch: true, state: 'running' });
  };
  //resume Stopwatch
  resumeStopwatch = () => {
    console.log('stopwatch started');
    this.setState({ showStopwatch: true, state: 'running' });
  };

  // reset Stopwatch

  resetStopwatch = () => {
    console.log('stopwatch Stopped');
    this.setState({
      showStopwatch: false,
      state: 'reset',
      hr: 0,
      min: 0,
      sec: 0,
      ms: 0,
    });
  };

  //stop stopwatch

  stopStopwatch = () => {
    console.log('stopwatch Stopped');
    this.setState({ showStopwatch: false, state: 'stopped' });
  };

  showButtonsInStopwatch = () => {
    switch (this.state.state) {
      case 'reset':
        return (
          <button
            onClick={(event) => {
              this.startStopwatch();
            }}
            className='btn btn-sec'
          >
            Start
          </button>
        );

      case 'running':
        return (
          <button
            onClick={(event) => {
              this.stopStopwatch();
            }}
            className='btn btn-sec'
          >
            Stop
          </button>
        );

      case 'stopped':
        return (
          <>
            <button
              onClick={(event) => {
                this.resumeStopwatch();
              }}
              className='btn btn-sec'
            >
              Resume
            </button>
            <button
              onClick={(event) => {
                this.resetStopwatch();
              }}
              className='btn btn-sec'
            >
              Reset
            </button>
          </>
        );

      default:
        break;
    }
  };

  updateStateStopwatch = (newHr, newMin, newSec, newMs) => {
    // console.log('updateStateStopwatch');
    this.setState({
      hr: newHr,
      min: newMin,
      sec: newSec,
      ms: newMs,
    });
  };

  render() {
    return (
      <article className='card stopwatch'>
        <svg
          onClick={(event) => {
            this.props.handleShow('stopwatch');
          }}
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          className='bi bi-x-circle cross'
          viewBox='0 0 16 16'
        >
          <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
          <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
        </svg>

        <h3>Stopwatch</h3>

        {this.state.showStopwatch ? (
          <StopWatchClock
            data={this.state}
            updateStateStopwatch={this.updateStateStopwatch}
          />
        ) : (
          <h2>
            {' '}
            {this.state.hr < 10 ? '0' + this.state.hr : this.state.hr}:{' '}
            {this.state.min < 10 ? '0' + this.state.min : this.state.min} :{' '}
            {this.state.sec < 10 ? '0' + this.state.sec : this.state.sec}:{' '}
            {this.state.ms < 10 ? '0' + this.state.ms : this.state.ms}{' '}
          </h2>
        )}

        {/*  */}

        {this.showButtonsInStopwatch()}
      </article>
    );
  }
}

export default Stopwatch;
