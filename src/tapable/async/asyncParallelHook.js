const { AsyncParallelHook } = require('tapable');

const asyncParallelHook = new AsyncParallelHook();
asyncParallelHook.tapPromise('1', () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(1);
            resolve();
        }, 100);
    });
});
asyncParallelHook.tapPromise('2', () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(2);
            resolve();
        }, 200);
    });
});

asyncParallelHook.callAsync(() => {
    console.log('执行结束');
});
