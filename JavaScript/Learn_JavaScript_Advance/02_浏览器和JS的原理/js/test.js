console.log("test");
console.log("defer script");

var message = "test message"

debugger

// 总结：在 defer 代码中 DOM Tree已经构建完成
var boxEl = document.querySelector(".box")
console.log(boxEl);