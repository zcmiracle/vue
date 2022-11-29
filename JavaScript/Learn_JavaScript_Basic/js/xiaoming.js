
// esmodule -> import/export -> es5中立即执行函数
var xmModule = (function() {
    var xmModule = {}
    var message = "Hello XiaoMing"
    console.log(message);
    console.log(message.length);

    xmModule.message = message
    return xmModule
})()