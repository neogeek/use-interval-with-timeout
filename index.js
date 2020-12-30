const useIntervalWithTimeout = (
    iterationCallback = interval => console.log(interval),
    completetionCallback = () => console.log('done'),
    iterationDelay = 1000,
    maxIterations = 30,
    ...args
) => {
    let iterationsRemaining = maxIterations;

    const interval = setInterval(() => {
        iterationsRemaining--;

        iterationCallback.call(this, iterationsRemaining, ...args);

        if (iterationsRemaining == 0) {
            completetionCallback.call(this, ...args);

            clearInterval(interval);
        }
    }, iterationDelay);

    return [() => iterationsRemaining, () => clearInterval(interval)];
};

module.exports = useIntervalWithTimeout;
