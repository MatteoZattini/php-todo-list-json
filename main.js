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

        remove(i) {
            // this.toDoList.splice(indice, 1)

            const taskindice = {
                indice: i,
            }

            console.log(taskindice)

            axios.post("./delete.php", taskindice, this.postRequestConfig).then(results => {
                console.log("risultati post", results.data);
                this.toDoList = results.data;
            })
        },

        change(element) {
            // if(element.done == true) {
            //     element.done = false
            // } else {
            //     element.done = true
            // }

            const taskStatus = {
                done: true
            }

            axios.post("./updateTask.php", taskStatus, this.postRequestConfig).then(results => {
                console.log("risultati post", results.data);
                this.toDoList = results.data;
            })
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