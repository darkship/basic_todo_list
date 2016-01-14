/*
 see https://atmospherejs.com/peerlibrary/blaze-components
 */

class todolist_input extends BlazeComponent {
    onCreated() {
        super.onCreated();
    }

    events() {
        return [{
            'submit': function (evt) {
                evt.preventDefault();
                let input = evt.target.elements.title;
                let title = input.value;
                let collection = this.data().collection;

                this.addTodo(title, collection);
                input.value = "";

            }
        }];
    }

    addTodo(title, collection) {
        if (!collection) {
            throw new Error("colllection in todolist_input is not defined");
        }
        UTILITIES.checkAndRun(collection, "insert", {
            title: title,
            createdAt: new Date()
        });

    }
}

todolist_input.register('todolist_input');

TODOLIST.todolist_input=todolist_input;