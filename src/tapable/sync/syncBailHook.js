const { SyncBailHook } = require('tapable');

// 同步熔断钩子，当某个监听函数返回值不为undefined时，后续的监听函数不再执行
const syncBailHook = new SyncBailHook();
syncBailHook.tap('1', () => {
    console.log(1);
});
syncBailHook.tap('2', () => {
    console.log(2);
    // 返回值非 undefined 时，后续的监听函数不再执行
    return 2;
});

syncBailHook.tap('3', () => {
    console.log('这个不会执行');
});
syncBailHook.call();
