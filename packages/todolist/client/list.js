class todolist_list extends BlazeComponent {
    onCreated() {
        super.onCreated();
    }
    templateData(todo)
    {
        return  {todo};
    }
}
todolist_list.register('todolist_list');
TODOLIST.todolist_list=todolist_list;

class todolist_item extends BlazeComponent {
    onCreated() {
        super.onCreated();
    }

    events() {
        return [{
            'click .f_toggleStatus': this.toggleStatus
        }, {
            'click .f_remove': this.remove
        }, {
            'keydown .f_updateTitle': function (evt) {
                var title = this.data().todo.title;
                if (evt.keyCode == 8 && (!title || _.isEmpty(title))) {
                    this.remove();
                } else {
                    this.updateTitle(evt.target.value);
                }
            }
        }];
    }

    toggleStatus() {
        var todo = this.data().todo;
        UTILITIES.checkAndRun(todo, "toggleStatus");

    }

    updateTitle(newTitle) {
        var todo = this.data().todo;
        UTILITIES.checkAndRun(todo, "updateTitle", newTitle);
    }

    remove() {
        var todo = this.data().todo;
        UTILITIES.checkAndRun(todo, "remove");
    }
}

todolist_item.register('todolist_item');

TODOLIST.todolist_item=todolist_item;
