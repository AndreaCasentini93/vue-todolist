/*
BONUS:
Al click sull'intero elemento della lista, si modifica il valore della proprietà completed da false a true, e viceversa in caso di successivi click (toggle).
Quando un elemento ha la proprietà "completed" settata a true, il testo corrispondente sarà mostrato barrato (esisterà una proprietà CSS per ottenere questo effetto???).
*/

const app = new Vue(
    {
        el: '#root',
        data: {
            toDoList: [
                {
                    text: "A",
                    completed: false,
                },
                {
                    text: "B",
                    completed: false,
                },
                {
                    text: "C",
                    completed: false,
                },
                {
                    text: "D",
                    completed: false,
                },
                {
                    text: "E",
                    completed: false,
                }
            ],
            newToDo: '',
            errorText: ''
        },
        methods: {
            deleteToDo: function(deleteIndex) {
                this.toDoList.splice(deleteIndex, 1);
            },
            addToDo: function() {
                if (this.newToDo.trim().length > 0 && isNaN(this.newToDo)) {
                    this.toDoList.push({text: this.newToDo, completed: false})
                    this.newToDo = '';
                    this.errorText = '';
                } else {
                    this.newToDo = '';
                    this.errorText = "Errore, inserisci le cose da fare!";
                }
            },
            addRemoveBar: function(objectIndex) {
                if (!this.toDoList[objectIndex].completed) {
                    this.toDoList[objectIndex].completed = true;
                } else {
                    this.toDoList[objectIndex].completed = false;
                }
            }
        }
    }
);