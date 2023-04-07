const { AsyncParallelBailHook } = require('tapable');

// 异步并行熔断钩子，当监听函数的返回值不为undefined时，后续的监听函数不再执行
const asyncParallelBailHook = new AsyncParallelBailHook(['name', 'age']);
asyncParallelBailHook.tapAsync('1', (name, age, callback) => {
    setTimeout(() => {
        console.log(1, name, age);
        callback();
    }, 1000);
});
asyncParallelBailHook.tapAsync('2', (name, age, callback) => {
    setTimeout(() => {
        console.log(2, name, age);
        callback(2);
    }, 2000);
});
asyncParallelBailHook.tapAsync('3', (name, age, callback) => {
    setTimeout(() => {
        console.log(3, name, age);
        callback();
    }, 3000);
});
asyncParallelBailHook.callAsync('panda', 18, () => {
    console.log('执行结束');
});

// 执行结果：
// 1 panda 18
// 2 panda 18
// 执行结束
// 3 panda 18
