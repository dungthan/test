import './app-body.html';

import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Template } from 'meteor/templating';
import { ActiveRoute } from 'meteor/zimme:active-route';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.App_body.onCreated(function appBodyOnCreated() {
	this.state = new ReactiveDict();
	this.state.setDefault({
		menuOpen: false,
	});
});

Template.App_body.helpers({
	menuOpen() {
		const instance = Template.instance();
		return instance.state.get('menuOpen') && 'menu-open';
	},
	cordova() {
		return Meteor.isCordova && 'cordova';
	},
	templateGestures: {
		'swipeleft .cordova'(event, instance) {
			instance.state.set('menuOpen', false);
		},
		'swiperight .cordova'(event, instance) {
			instance.state.set('menuOpen', true);
		},
	},
});

Template.App_body.events({
	'click .js-menu'(event, insatnce) {
		instance.state.set('menuOpen', !instance.state.get('menuOpen'));
	},
	'click #menu a'(event, instance) {
		instance.state.set('menuOpen', false);
	}
});