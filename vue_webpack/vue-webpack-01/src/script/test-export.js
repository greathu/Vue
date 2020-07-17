export default {
    name: "tom",
    age: 30
}

export var person2 = {
    name: "jack",
    age: 30
}

export var person3 = {
    name: "wenke",
    age: 30
}


/* 注意： export default 向外暴露的数据，可以用任意的变量接收 
在一个模块中 export default 只允许向外暴露一次
在一个模块中  export default 和export 可以同时向外传递数据
用 export 向外导出的数据，只能使用{}的形式来接收，成为按需导出
用 export 可以向外暴露多个成员，可以按需要 import
用 export 导出的成员 在import的时候，名称必须保持一样，或者添加别名
使用：  原名   as 别名
*/