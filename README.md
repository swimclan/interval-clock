Interval Clock
==============

A simple event based interval clock utility for time-based applications

* * *

This package provides an event driven JavaScript clock based on intervals.  It supports resolutions of seconds, minutes and hours.  It exports a single factory function that provides an EventEmitter that will emit on each *tick* of the clock at the specified interval.

### List of features

*   Usage of simple string-based interval specifier (ie '1s', '2m', '4h', etc)
*   Event driven clock emits js events for every tick of the clock
*   Simple factory function instantiation
*   ES5 implementation means use in older versions of Node

### Code Demo

```js
const IntervalClock = require('interval-clock');

const clock = IntervalClock('1m');
clock.on('tick', console.log);

// -> 2019-06-07T02:13:00.000Z
// -> 2019-06-07T02:14:00.000Z
// -> 2019-06-07T02:15:00.000Z
// -> 2019-06-07T02:16:00.000Z

```

### Download & Installation

```shell 
$ npm i interval-clock 
```

### Contributing

Send me PRs.  I like contribution.

### Authors or Acknowledgments

*   Matthew Herron

### License

This project is licensed under the ISC License