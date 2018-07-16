// Refactor using prototypes.
function StopWatch() {
    let startTime, endTime, running, duration = 0;

    Object.defineProperty(this, 'duration', {
        get: () => duration,
        set: (value) => duration = value
    });

    Object.defineProperty(this, 'startTime', {
        get: () => startTime
    });

    Object.defineProperty(this, 'endTime', {
        get: () => endTime
    });

    Object.defineProperty(this, 'running', {
        get: () => running
    });
}

StopWatch.prototype.start = () => {
    if (this.running) {
        throw new Error('StopWatch has already started.');
    }
    this.running = true;
    this.startTime = new Date();
};

StopWatch.prototype.stop = () => {
    if (!this.running) {
        throw new Error('StopWatch is not started.');
    }
    this.running = false;
    this.endTime = new Date();
    this.duration += (this.endTime.getTime() - this.startTime.getTime()) / 1000;
};

StopWatch.prototype.reset = () => {
    this.duration = 0;
    this.startTime = null;
    this.endTime = null;
    this.running = false;
};


// TODO - BY ADDING A SETTER TO DURATION WE BROKE OUR APP BECAUSE NOW USER CAN
// TODO - MODIFY THE DURATION WHICH LEADS TO FAULTY RESULTS.