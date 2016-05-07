define(['backbone', 'text!../../templates/item.html'], function (Backbone, ItemTemplate) {

    'use strict';

    var Todos = Backbone.View.extend({

        tagName: 'li',

        template: _.template(ItemTemplate),

        events: {
            'click .toggle'  : 'togglecompleted',
            'click .destroy' : 'clear'
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));

            this.$el.toggleClass('completed', this.model.get('completed'));

            return this;
        },

        togglecompleted: function () {
            this.model.toggle();
        },
        
        clear: function () {
            this.model.destroy();
        }

    });

    return Todos;
});
