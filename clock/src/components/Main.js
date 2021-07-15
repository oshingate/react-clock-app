import React from 'react';
import Stopwatch from './Stopwatch';
import Timer from './Timer';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: {
        stopwatch: true,
        timer: true,
      },
      stopwatch: {
        hr: 0,
        min: 0,
        sec: 0,
        ms: 0,
        state: 'reset',
      },
      timer: {
        hr: 0,
        min: 0,
        sec: 0,
        state: 'reset',
      },
    };
  }

  //startStopwatch
  startStopwatch = () => {
    console.log('stopwatch started');
    var stopwatchTimer = setInterval(() => {
      this.setState((prevState) => {
        let newHr = prevState.stopwatch.hr;
        let newMin = prevState.stopwatch.min;
        let newSec = prevState.stopwatch.sec;
        let newMs = prevState.stopwatch.ms;
        if (newMs + 1 < 100) {
          newMs = newMs + 1;
        } else if (newMs + 1 >= 100 && newSec + 1 < 60) {
          newMs = 0;
          newSec = newSec + 1;
        } else if (newSec + 1 >= 60 && newMin + 1 < 60) {
          newMs = 0;
          newSec = 0;
          newMin = newMin + 1;
        } else if (newSec + 1 >= 60 && newMin + 1 >= 60) {
          newMs = 0;
          newSec = 0;
          newMin = 0;
          newHr = newHr + 1;
        }
        console.log(newSec, newMin, newHr);
        return {
          ...prevState,
          stopwatch: {
            hr: newHr,
            min: newMin,
            sec: newSec,
            ms: newMs,
            state: 'running',
          },
        };
      });
    }, 10);
  };

  //stop stopwatch

  stopStopwatch = () => {
    clearInterval(this.stopwatchTimer);
  };

  showButtonsInStopwatch = () => {
    switch (this.state.stopwatch.state) {
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
            <button className='btn btn-sec'>Resume</button>
            <button className='btn btn-sec'>Reset</button>
          </>
        );

      default:
        break;
    }
  };

  showButtonsInTimer = () => {
    switch (this.state.timer.state) {
      case 'reset':
        return <button className='btn btn-sec'>Start</button>;

      case 'running':
        return <button className='btn btn-sec'>Stop</button>;

      case 'stopped':
        return (
          <>
            <button className='btn btn-sec'>Resume</button>
            <button className='btn btn-sec'>Reset</button>
          </>
        );

      default:
        break;
    }
  };

  handleShow = (componentName) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        show: {
          ...prevState.show,
          [componentName]: !prevState.show[componentName],
        },
      };
    });
  };

  componentWillUnmount() {
    console.log('stopwatch unmounted');
    clearInterval(this.stopwatchTimer);
  }

  render() {
    return (
      <main>
        <section className='main-sec sec-padding'>
          <div className='container flex center btn-div'>
            {/* show stopwatch component */}

            {this.state.show.stopwatch ? (
              <Stopwatch
                handleShow={this.handleShow}
                stopwatch={this.state.stopwatch}
                showButtonsInStopwatch={this.showButtonsInStopwatch}
                startStopwatch={this.startStopwatch}
              />
            ) : (
              <button
                onClick={(event) => {
                  this.handleShow('stopwatch');
                }}
                className='btn btn-pri'
              >
                Show Stopwatch
              </button>
            )}

            {/* show timer component */}

            {this.state.show.timer ? (
              <Timer
                handleShow={this.handleShow}
                timer={this.state.timer}
                showButtonsInTimer={this.showButtonsInTimer}
              />
            ) : (
              <button
                onClick={(event) => {
                  this.handleShow('timer');
                }}
                className='btn btn-pri'
              >
                Show Timer
              </button>
            )}
          </div>
        </section>
      </main>
    );
  }
}

export default Main;
