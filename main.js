const { createApp } = Vue

createApp({
    data() {
        return {
            toDoList: [],
            myInput: "",
        }
    },
    methods: {
        addElement() {
            console.log(this.myInput)
            this.toDoList.push({"titolo":this.myInput, "done": false})
            this.myInput = ""
            console.log(this.toDoList)
        },

        remove(indice) {
            this.toDoList.splice(indice, 1)
        },

        change(element) {
            if(element.done == true) {
                element.done = false
            } else {
                element.done = true
            }
        }
    },
    mounted() {
        console.log("Recupero i dati dal server");

        axios.get("./server.php").then(results => {
            console.log("Risultati: ", results);
            this.toDoList = results.data;
        });
    }
}).mount('#app')