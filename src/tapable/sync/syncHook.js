const { SyncHook } = require('tapable');

class HooksApp {
    hooks = {
        onBeforeCreated: new SyncHook(),
        onCreated: new SyncHook(['name']),
        onBeforeDestroyed: new SyncHook(),
        onDestroyed: new SyncHook(),
    };

    created() {
        this.hooks.onBeforeCreated.call();

        // 创建需要一秒钟
        const now = new Date();
        while (new Date() - now < 1000);

        this.hooks.onCreated.call(1);
    }

    update() {
        console.log('我有一个update，我不提供钩子！');
    }

    destroy() {
        this.hooks.onBeforeDestroyed.call();

        // 销毁需要一秒钟
        const now = new Date();
        while (new Date() - now < 1000);

        this.hooks.onDestroyed.call();
    }
}

const hooksApp = new HooksApp();
hooksApp.hooks.onBeforeCreated.tap('onBeforeCreated', () => {
    console.log('onBeforeCreated');
});
hooksApp.hooks.onCreated.tap('onCreated', (a) => {
    console.log('onCreated', a);
});
hooksApp.hooks.onBeforeDestroyed.tap('onBeforeDestroyed', () => {
    console.log('onBeforeDestroyed');
});
hooksApp.hooks.onDestroyed.tap('onDestroyed', () => {
    console.log('onDestroyed');
});
hooksApp.created();
hooksApp.destroy();
