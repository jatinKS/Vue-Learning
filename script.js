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
    },
    filters:{
        capitalize:function(value){
            return value.toUpperCase();
        },
        kittify:function(value){
            return value+"y";
        }
    },
    computed:{
        kittifyName: function(){
            if(this.newCat.length>1)
                return this.newCat+" y";
        }
    }
});