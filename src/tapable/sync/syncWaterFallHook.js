const {SyncWaterfallHook} = require('tapable');

// 同步串行钩子，监听函数的返回值会作为参数传递给下一个监听函数
const syncWaterfallHook = new SyncWaterfallHook(['name', 'age']);
syncWaterfallHook.tap('1', (name, age) => {
    console.log(1, name, age);
    return {
        name: 'panda',
        age: 18
    };
});
syncWaterfallHook.tap('2', (data) => {
    console.log(2, data.name, data.age);
    return {
        name: 'monkey',
        age: 80
    };
});
syncWaterfallHook.tap('3', (data) => {
    console.log(3, data.name, data.age);
});
syncWaterfallHook.call('cat', 8);
// 执行结果：
// 1 cat 8
// 2 panda 18
// 3 monkey 80
