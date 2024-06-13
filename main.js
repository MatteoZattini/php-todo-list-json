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
            this.toDoList.push({"titolo":this.myInput, "done": true})
            this.myInput = ""
            console.log(this.toDoList)
        },
    },
    mounted() {
        console.log("Recupero i dati dal server");

        axios.get("./server.php").then(results => {
            console.log("Risultati: ", results);
            this.toDoList = results.data;
        });
    }
}).mount('#app')