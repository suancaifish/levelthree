const Vue = require('../../vue');

require('./style/eleme.css');


//组件
Vue.component('one-header', {
    props: ['title', 'addr', 'holder'],
    template: `
    <header @click="huan">
    <div class="tit">
        <div class="tit-left">{{title}}</div>
        <p>{{addr}}</p>
    </div>
    <input type="text" :placeholder="holder">
    </header >
    `,
    methods: {

        huan() {
            console.log(vm.tai);
            if (vm.tai[0]) {
                vm.tai[0] = 0
                vm.tai[1] = 1
            } else {
                vm.tai[0] = 1
                vm.tai[1] = 0
            }

            console.log(666);


        }
    }
})



const vm = new Vue({
    el: '#demo',
    data: {
        tai: [1, 0]
    },
    template: `
    <div>
        <one-header title="未能获取地址" holder="搜索饿了么商家，商品名称" v-show="tai[0]" >
        </one-header>

        <one-header title="<" addr="选择收货地址" holder="请输入地址" v-show="tai[1]" @click="huan()">
        </one-header>
    </div>
    `

})