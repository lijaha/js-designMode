// 发布/订阅者实现
function Pubsub() {
    this.handlers = {};
}
Pubsub.prototype = {
    // 订阅事件
    on: function(eventType, handler) {
        var self = this;
        if (!(eventType in self.handlers)) {
            self.handlers[eventType] = [];
        }
        self.handlers[eventType].push(handler);
        return self;
    },
    // 发布（触发）事件
    emit: function(eventType, handler) {
        var self = this;
        // 获取handler参数
        var handlerArgs = Array.prototype.slice.call(arguments, 1);
        for (var i = 0; i < self.handlers[eventType].length; i++) {
            // 当handler参数为数组时
            self.handlers[eventType][i].apply(self, handlerArgs);
        }
        return self;
    }
};

var pubsub = new Pubsub();

// 添加第一个业务回调函数
pubsub.on('A', function(data) {
    console.log(1 + data);
});

// 添加第二个业务回调函数
pubsub.on('A', function(data) {
    console.log(2 + data);
});

// 触发事件A
pubsub.emit('A', [1,2,3]);
