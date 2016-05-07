define(function(require) {

	'use strict';
   
	var Backbone = require('backbone');

    var Todo = Backbone.Model.extend({

		defaults: {
	        title: '',
	        completed: false
	    },
	    
	    toggle: function() {
	        this.save({
	            completed: !this.get('completed')
	        });
	    }

    });
   
    return Todo;
});
