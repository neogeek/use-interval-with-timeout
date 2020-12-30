# use-interval-with-timeout

> Custom setInterval with timeout.

[![NPM Version](http://img.shields.io/npm/v/use-interval-with-timeout.svg?style=flat)](https://www.npmjs.org/package/use-interval-with-timeout)

## Install

```bash
$ npm install use-interval-with-timeout
```

## Usage

```javascript
const useIntervalWithTimeout = require('use-interval-with-timeout');

const [currentIteration, cancelInterval] = useIntervalWithTimeout(
    countdown => console.log(`countdown ${countdown}`),
    () => console.log('done'),
    1000,
    30
);
```
