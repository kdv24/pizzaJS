var Pizza = {
    init: function(){
        this.type = [];
        this.size = [];
    },
    getPrice: function(){
        return 10 + (this.type * 2)
                  + (this.size * 2);
    }
};
