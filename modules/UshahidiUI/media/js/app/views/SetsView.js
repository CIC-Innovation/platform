define([ 'App', 'marionette', 'handlebars', 'text!templates/Sets.html', 'text!templates/partials/set-module.html'],
	function( App, Marionette, Handlebars, template, setModuleTemplate)
	{
		// Hacky - make sure we register partials before we call compile
		Handlebars.registerPartial('set-module', setModuleTemplate);
		return Marionette.ItemView.extend( {
			template: Handlebars.compile(template),
			initialize: function() {
			},
			events : {
				'click .js-create-set' : 'showCreateSet'
			},
			showCreateSet : function (e)
			{
				e.preventDefault();
				App.vent.trigger('set:create', this.model);
			}
		});
	});
