
function StopWatch() {
    let startTime, endTime, running, duration = 0;

    this.start = () => {
        if (running) {
            throw new Error('StopWatch has already started.');
        }
        running = true;
        startTime = new Date();
    };

    this.stop = () => {
        if (!running) {
            throw new Error('StopWatch is not started.');
        }
        running = false;
        endTime = new Date();
        const secs = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += secs
    };

    this.reset = () => {
        duration = 0;
        startTime = null;
        endTime = null;
        running = false;
    };

    Object.defineProperty(this, 'duration', {
        get: () => duration
    });
}