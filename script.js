new Vue({
	el: '#root',
    data: {
        cats:[
            {name:'kitkat'},
            {name:'fish'},
            {name:'henry'},
        ],
        newCat:''
    },
    methods:{
        addKitty:function(){
            this.cats.push({name:this.newCat});
            this.newCat = '';
        }
    }
});