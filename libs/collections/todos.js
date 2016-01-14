Helpers = {};
Helpers.todos = function(doc, collection) {
  _.extend(doc, {
    updateTitle: function(newTitle, cb) {
      return collection.update(doc._id, {
        $set: {
          title: newTitle
        }
      }, cb);
    },
    toggleStatus: function(cb) {
      return collection.update(doc._id, {
        $set: {
          done: !doc.done
        }
      }, cb);
    },
    remove: function(cb) {
      return collection.remove(doc._id, cb);
    },

  });
  return doc;
};


Todos = new Mongo.Collection("Todos", {
  transform: function(doc) {
    return Helpers.todos(doc, Todos);
  }
});
