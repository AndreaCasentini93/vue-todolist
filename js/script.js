const app = new Vue(
    {
        el: '#root',
        data: {
            toDoList: [
                {
                    text: "Portare il cane a passeggio",
                    completed: false,
                },
                {
                    text: "Andare a lavoro",
                    completed: false,
                },
                {
                    text: "Fare la spesa",
                    completed: false,
                },
                {
                    text: "Andare in palestra",
                    completed: false,
                },
                {
                    text: "Fare le pulizie di casa",
                    completed: false,
                }
            ],
            newToDo: '',
            errorText: ''
        },
        methods: {
            deleteToDo: function(deleteIndex) {
                // Nell'array "toDoList" rimuovere l'oggetto con indice "deleteIndex"
                this.toDoList.splice(deleteIndex, 1);
            },
            addToDo: function() {
                // Il nuovo testo "newToDo" non deve essere vuoto e non deve essere un numero
                if (this.newToDo.trim().length > 0 && isNaN(this.newToDo)) {
                    // Generare un nuovo testo "newToDo" minuscolo capitalizzato
                    this.newToDo = this.newToDo[0].toUpperCase() + this.newToDo.substring(1);
                    // Inserire nell'array "toDoList" il nuovo oggetto avente text "newToDo" e completed "false"
                    this.toDoList.push({text: this.newToDo, completed: false})
                    // Pulire l'input text
                    this.newToDo = '';
                    // Rimuovere il messaggio di errore
                    this.errorText = '';
                } else {
                    // Pulire l'input text
                    this.newToDo = '';
                    // Inserire il messaggio di errore
                    this.errorText = "Errore, inserisci le cose da fare!";
                }
            },
            addRemoveBar: function(objectIndex) {
                // Assegnare ad una varabile il valore del completed
                let value = this.toDoList[objectIndex].completed;
                // Se il valore è "false" diventerà "true" e viceversa
                if (!value) {
                    value = true;
                } else {
                    value = false;
                }
                // Restituisco al completed il valore della variabile
                this.toDoList[objectIndex].completed = value;
            }
        }
    }
);