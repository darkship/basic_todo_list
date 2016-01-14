Package.describe({
    name: 'todolist',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: '',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.1');
    //meteor packages
    api.use(['ecmascript', 'underscore']);

    //external packages
    api.use([
        'peerlibrary:blaze-components@=0.15.1',
        'peerlibrary:reactive-field@0.1.0'
    ], ['client']);

    //local files
    api.addFiles(["libs/utilities.js"]);

    api.addFiles([
        "client/input.html",
        "client/input.js",
        "client/list.html",
        "client/list.js",
        "client/editable_input.html",
        "client/editable_input.js"
    ], ['client']);

    api.use(["jshint"]);
    api.addFiles(".jshintrc");

    api.export("UTILITIES")
    api.export("TODOLIST") ;
});
