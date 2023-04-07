const {SyncLoopHook} = require('tapable');

// 同步循环钩子，当监听函数返回值为true时，会重复执行监听函数
const syncLoopHook = new SyncLoopHook(['name', 'age']);
let count = 0;
syncLoopHook.tap('1', (name, age) => {
    console.log(1, name, age);
    return ++count === 3 ? undefined : '继续执行';
});
syncLoopHook.tap('2', (name, age) => {
    console.log(2, name, age);
});
syncLoopHook.call('panda', 18);
// 执行结果：
// 1 panda 18
// 1 panda 18
// 1 panda 18
// 2 panda 18
