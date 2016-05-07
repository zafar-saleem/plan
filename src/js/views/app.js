define(['backbone', './todos', 'text!../../templates/states.html'], function (Backbone, TodoView, StatesTemplate) {

    'use strict';

    var App = Backbone.View.extend({

        el: '#todoapp',

        templates: _.template(StatesTemplate),

        events: {
            'keypress #new-todo'     : 'validate',
            'click .btn-add-item'    : 'validate',
            'click #clear-completed' : 'clearCompleted',
            'click #toggle-all'      : 'toggleAllComplete'
        },

        initialize: function () {
            this.allCheckbox = this.$('#toggle-all')[0];
            this.$input   = this.$('#new-todo');
            this.$actions = this.$('.actions');
            this.$main    = this.$('#main');

            this.listenTo(this.collection, 'add', this.addOne);
            this.listenTo(this.collection, 'all', this.render);
            console.log(this.collection);
            this.collection.fetch();
        },

        render: function () {
            var completed = this.collection.completed().length,
                remaining = this.collection.remaining().length,
                total     = this.collection.length;

            this.$actions.html(this.templates({
                completed: completed,
                remaining: remaining,
                total: total
            }));

            this.allCheckbox.checked = !remaining;
        },

        addOne: function (todo) {
            var view = new TodoView({
                model: todo 
            });

            $('#todo-list').prepend(view.render().el);
        },

        createItem: function () {
            var attributes = {
                title: this.$input.val().trim(),
                completed: false
            };

            this.collection.create(attributes);
            this.$input.val('');
        },

        validate: function (e) {
            if ((e.which === 13 || $(e.target).hasClass('btn-add-item')) && this.$input.val().trim() === '') {
                this.shakeIput();
                return;
            }

            if (e.which === 13 || $(e.target).hasClass('btn-add-item')) {
                this.createItem(e);
            }
        },

        shakeIput: function () {
            var self = this;

            this.$input.addClass('invalid');

            setTimeout(function () {
                self.$input.removeClass('invalid');
                self.$input.focus();
            }, 1000);
        },

        clearCompleted: function () {
            _.invoke(this.collection.completed(), 'destroy');
            return false;
        },

        toggleAllComplete: function () {
            var completed = this.allCheckbox.checked;

            this.collection.each(function (todo) {
                todo.save({
                    'completed': completed
                });
            });
        }
    });
   
    return App; 
});
