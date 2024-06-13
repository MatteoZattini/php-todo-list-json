const { createApp } = Vue

createApp({
  data() {
    return {
        toDoList: []
    }
  },
  methods: {

  },
  mounted() {
    console.log("Recupero i dati dal server");

    axios.get("./server.php").then(results => {
        console.log("Risultati: ", results);
        this.toDoList = results.data;
    });
  }
}).mount('#app')