const { EventEmitter } = require('events');

function IntervalClock(interval) {
  var clock = new EventEmitter();
  var now = new Date();
  var intervalInMS = getTimeInterval(interval);
  var next = nextInterval(now.getTime(), intervalInMS);
  nextTick(clock, intervalInMS, next);
  return clock;
}

function nextInterval(now, interval) {
  return now + interval - (now % interval);
}

function nextTick(clock, interval, next) {
  var currentTime;
  setTimeout(function() {
    currentTime = new Date();
    if (currentTime.getTime() >= next) {
      clock.emit('tick', currentTime);
    }
    nextTick(clock, interval, nextInterval(currentTime.getTime(), interval));
  }, 0);
}

function getTimeInterval(intervalStr) {
  const units = {
    s: 1000,
    m: 1000 * 60,
    h: 1000 * 60 * 60
  }
  const splitIntervalStr = intervalStr.split('');
  const intervalNumberSplit = [];
  let intervalUnit;
  let currentChar;
  while ( splitIntervalStr ) {
    currentChar = splitIntervalStr.shift();
    if (!isNaN(parseInt(currentChar))) {
      intervalNumberSplit.push(currentChar);
    } else {
      intervalUnit = currentChar;
      break;
    }
  }
  if (!intervalUnit || !(intervalUnit in units) || !intervalNumberSplit.length) {
    return 0;
  }
  return parseInt(intervalNumberSplit.join('')) * units[intervalUnit];
}

module.exports = IntervalClock;