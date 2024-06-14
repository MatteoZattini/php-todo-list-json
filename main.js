const { createApp } = Vue

createApp({
    data() {
        return {
            toDoList: [],
            myInput: "",
            postRequestConfig: {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              }
        }
    },
    methods: {
        addTask() {
            console.log("aggiungi task", this.myInput)

            const newTask = {
                titolo: this.myInput,
                done: false
            };

            console.log(newTask)

            axios.post("./create.php", newTask, this.postRequestConfig).then(results => {
                console.log("risultati post", results.data);
                this.toDoList = results.data;
            })
            
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

        axios.get("./list.php").then(results => {
            console.log("Risultati: ", results);
            this.toDoList = results.data;
        });
    }
}).mount('#app')