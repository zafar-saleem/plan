/*global require:false */
/*global Backbone:false */
/*global _:false */
require(['views/app', 'collections/todos'], function (AppView, TodoCollections) {
    window.App = {
        Vent: _.extend({}, Backbone.Events)
    };

    new AppView({
        collection: new TodoCollections()
    });
});
