/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <article className='card timer'>
        <svg
          onClick={(event) => {
            this.props.handleShow('timer');
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

        <h3>Timer</h3>
        <h5>Hours : Minutes : Seconds</h5>

        <span className='flex center timer__svg-div'>
          <a href='#'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-caret-up-fill'
              viewBox='0 0 16 16'
            >
              <path d='m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z' />
            </svg>
          </a>
          <a href='#'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-caret-up-fill'
              viewBox='0 0 16 16'
            >
              <path d='m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z' />
            </svg>
          </a>
          <a href='#'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-caret-up-fill'
              viewBox='0 0 16 16'
            >
              <path d='m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z' />
            </svg>
          </a>
        </span>

        <h2>
          {' '}
          {this.props.timer.hr < 10
            ? '0' + this.props.timer.hr
            : this.props.timer.hr}
          :{' '}
          {this.props.timer.min < 10
            ? '0' + this.props.timer.min
            : this.props.timer.min}{' '}
          :{' '}
          {this.props.timer.sec < 10
            ? '0' + this.props.timer.sec
            : this.props.timer.sec}
        </h2>

        <span className='flex center timer__svg-div'>
          <a href='#'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-caret-down-fill'
              viewBox='0 0 16 16'
            >
              <path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z' />
            </svg>
          </a>
          <a href='#'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-caret-down-fill'
              viewBox='0 0 16 16'
            >
              <path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z' />
            </svg>
          </a>
          <a href='#'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-caret-down-fill'
              viewBox='0 0 16 16'
            >
              <path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z' />
            </svg>
          </a>
        </span>

        {this.props.showButtonsInTimer()}
      </article>
    );
  }
}

export default Timer;
