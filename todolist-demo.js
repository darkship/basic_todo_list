if (Meteor.isClient) {
  Template.registerHelper("todoCollection", function() {
    return Todos;
  });
  Template.registerHelper("todoItems", function() {
    return Todos.find({}, {
      sort: {
        createdAt: -1
      }
    });
  });
}
