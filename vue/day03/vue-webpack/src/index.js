const Vue = require('../../vue');


const vm = new Vue({
    el: '#demo',
    data: {
        name: 'huahua',
        html: `<p>123456<b style="color:red">789</b>159753</p>`,
        bool: 1,
        arr: [{
                name: "huahua",
                age: 18,
                skill: ['ps', 'money', '游泳'],
                id: 1
            },
            {
                name: "baba",
                age: 28,
                skill: ['js', 'jq', 'vue'],
                id: 2
            },
            {
                name: "suan",
                age: 32,
                skill: ['css', 'sass', 'less'],
                id: 3
            }

        ],
        url: "https://pics5.baidu.com/feed/c995d143ad4bd113154178203aba890a4bfb052a.jpeg?token=0c6ca174dfb6339d4af7c90aec865d1a&s=A5A041B556207509438DDD43030050B3",
        isB: 0,
        isC: 1,
        classA: "classA",
        size: 50,
        message: "cloak",
        msg: '我是消息'
    },
    template: `
    <div>
    <p>{{name}}</p>
    <p v-text="name"></p>
    <p v-html="html"></p>
    <div v-show="0">显示或者隐藏</div>
    <hr/>
    <div v-if="bool>0">AAA</div>
     <div v-else>BBB</div>
    <div v-else-if="bool>0">CCC</div>
    <hr/>

    <ul>
      <li v-for="item in arr" v-if="item.name==='huahua'">
        <p v-text="item.name"></p>
        <p v-for="sk in item.skill" v-text="sk"></p>
      </li>
    </ul>

    <hr/>

    <button @click="test(6)">test</button>
    <button @click="test2(99)">test2</button>
    <input @keyup.13="onEnter">
    <hr/>

    <img src="https://pics5.baidu.com/feed/c995d143ad4bd113154178203aba890a4bfb052a.jpeg?token=0c6ca174dfb6339d4af7c90aec865d1a&s=A5A041B556207509438DDD43030050B3"/>

    <img  v-bind:src="url" v-bind:name="name"/>
    <p :class=[classA,{classB:isB,classC:isC}]>class指令</p>


    <p :style="{
        color:'red',
        fontWeight:800,
        fontSize:size+ 'px'
    }">style</p>
    <hr/>
    <input v-model="name" />

    <span v-pre>{{ this will not be compiled }}</span>

    <hr/>
    <div v-cloak>
  {{ message }}
</div>

<hr/>

<span v-once>This will never change: {{msg}}</span>

    </div>
    `,
    methods: {
        test(num) {
            vm.name = '我不变'
            console.log(num);
        },
        test2(num) {
            console.log(num);
        },
        onEnter() {
            console.log('input');
        }
    }
});