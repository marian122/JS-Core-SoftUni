function sortedList() {
    let list = [];

    return {
        size: 0,

        add: function (element) {
            list.push(element);
            list.sort((a,b) => a-b);
            this.size++;

            return list;
        },

        remove: function (index) {
            if (index > -1 && index < list.length){
                list.splice(index, 1);

                this.size--;
            }

            return list;
        },
        
        get: function (index) {
            if (index > -1 && index < list.length){
                return list[index];
            }

        }
    }
}