import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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

        <h2>
          {this.props.stopwatch.hr < 10
            ? '0' + this.props.stopwatch.hr
            : this.props.stopwatch.hr}
          :{' '}
          {this.props.stopwatch.min < 10
            ? '0' + this.props.stopwatch.min
            : this.props.stopwatch.min}{' '}
          :{' '}
          {this.props.stopwatch.sec < 10
            ? '0' + this.props.stopwatch.sec
            : this.props.stopwatch.sec}
          :{' '}
          {this.props.stopwatch.ms < 10
            ? '0' + this.props.stopwatch.ms
            : this.props.stopwatch.ms}{' '}
        </h2>

        {this.props.showButtonsInStopwatch()}
      </article>
    );
  }
}

export default Stopwatch;
