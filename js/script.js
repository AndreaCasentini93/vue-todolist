/*
Predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure cliccando su un pulsante, il testo digitato viene aggiunto alla lista (all'interno di un nuovo oggetto con proprietà "completed" settata a false).
*/
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
            newToDo: ''
        },
        methods: {
            deleteToDo: function(deleteIndex) {
                this.toDoList.splice(deleteIndex, 1);
            },
            addToDo: function() {
                if (this.newToDo.trim().length > 0 && isNaN(this.newToDo)) {
                    this.toDoList.push({text: this.newToDo, completed: false})
                    this.newToDo = '';
                }
            }
        }
    }
);