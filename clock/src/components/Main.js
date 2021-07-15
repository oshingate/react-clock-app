import React from 'react';
import Stopwatch from './Stopwatch';
import Timer from './Timer';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: {
        stopwatch: false,
        timer: true,
      },
    };
  }

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

  render() {
    return (
      <main>
        <section className='main-sec sec-padding'>
          <div className='container flex center btn-div'>
            {/* show stopwatch component */}

            {this.state.show.stopwatch ? (
              <Stopwatch handleShow={this.handleShow} />
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
              <Timer handleShow={this.handleShow} />
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
