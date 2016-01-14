class todolist_editable_input extends BlazeComponent {
    onCreated() {
        super.onCreated();

        this.currentValue = new ReactiveField(this.data().value);
        this.isFocused = new ReactiveField(false);

    }

    onRendered() {
        let isFocused = this.isFocused;
        let currentValue = this.currentValue;
        let data = this.data;
        this.autorun(function () {
            if (!isFocused() && data()) {
                currentValue(data().value);
            }
        });
    }

    events() {
        return super.events().concat({
            'blur': this.onBlur,
            'focus': this.onFocus
        });
    }

    onBlur() {
        this.isFocused(false);
    }

    onFocus() {
        this.isFocused(true);
    }
}

todolist_editable_input.register('todolist_editable_input');


TODOLIST.todolist_editable_input=todolist_editable_input;