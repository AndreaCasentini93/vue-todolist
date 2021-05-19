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
                let value = this.toDoList[objectIndex].completed;
                if (!value) {
                    value = true;
                } else {
                    value = false;
                }
                this.toDoList[objectIndex].completed = value;
            }
        }
    }
);