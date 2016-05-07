define(function (require) {

	'use strict';
   
	var Backbone = require('backbone'),
		TodoModel = require('../models/todo');

		require('localStorage');

    var Todos = Backbone.Collection.extend({

	    model: TodoModel,

	    localStorage: new Backbone.LocalStorage('todos'),

	    completed: function () {
	        return this.filter(function(todo) {
	            return todo.get('completed');
	        });
	    },

	    remaining: function () {
	        return this.without.apply(this, this.completed());
	    },

	    comparator: function (todo) {
	        return todo.get('order');
	    }
    });
   
    return Todos;
});
