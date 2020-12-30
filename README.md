# use-interval-with-timeout

> Custom setInterval with timeout.

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
