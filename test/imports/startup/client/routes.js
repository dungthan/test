import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { AccountsTemplates } from 'meteor/useraccounts:core';

import '../../ui/layouts/app-body.js';
import '../../ui/pages/root-redirector.js';
import '../../ui/pages/lists-show.js';

import '../../ui/accounts/accounts-templates.js'

FlowRouter.route('/', {
	name: 'App.home',
	action() {
		BlazeLayout.render('App_body', { main: 'app_rootRedirector' });
	}
});

FlowRouter.route('/lists/:_id', {
	name: 'Lists.show',
	action() {
		BlazeLayout.render('App_body', { main: 'Lists_show_page' });
	}
})

AccountsTemplates.configureRoute('signIn', {
	name: 'signin',
	path: '/signin',
	template: 'override-signin',
});

AccountsTemplates.configureRoute('signUp', {
	name: 'join',
	path: '/join',
	template: 'override-join',
});

AccountsTemplates.configureRoute('forgotPwd');

AccountsTemplates.configureRoute('resetPwd', {
	name: 'resetPwd',
	path: '/reset-password',
})

