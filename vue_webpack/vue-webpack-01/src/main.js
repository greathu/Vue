//通过这种方式导入的是 完整版本
import Vue from "vue";

// 导入组件
import myComp from "./mycomp/myComp.vue";

// 导入组件
import App from "./App.vue";

// 导入js
import person1, {
    person2,
    person3
} from "./script/test-export.js"
console.log(person1.name, person1.age)

console.log(person2.name, person2.age)

console.log(person3.name, person3.age)


//需要编译器
var vm = new Vue({
    el: "#app",
    data: {
        msg: "vue+webpack子组件的使用"
    },
    methods: {},
    components: {
        myComp
    },
    render: c => c(App)
})