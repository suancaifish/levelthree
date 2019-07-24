const Vue = require('./vue');
require('./css/index.css');

const vm = new Vue({
    el: '#box',
    data: {
        list: ['新闻', '娱乐', '体育', '国际'],
        listbox: ['新闻ABC', '娱乐EFG', '体育HIJ', '国际KLM'],
        block: [true, false, false, false],
        // active: "active",
        touch: 0
    },
    template: `
                <div id="box">
                    <ul class="tablist">
                        <li v-for="(item,index) in list" v-text="item" @click="test(index)" 
                         ></li>
                        
                    </ul>

                    <ul class="tabsbox">
                        <li v-for="(item,index) in listbox" v-text="item" v-show="block[index]"></li>

                    </ul>

                </div>`,
    methods: {

        test(num) {
            console.log(num);
            vm.block = [false, false, false, false]
            vm.block[num] = true



        }
    }
})