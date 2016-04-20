import { AccountsTemplates } from 'meteor/useraccounts:core';

AccountsTemplates.configure({
	showForgotPasswordLink: true,
	texts: {
		errors: {
			loginForbidden: 'Incorrect username or password',
			pwdMismatch: 'Passwords don\'t match',
		},
		title: {
			signIn: 'Sign In',
			signUp: 'join',
		},
	},
	defaultTemplate: 'Auth_page',
	defaultLayout: 'App_body',
	defaultContentRegion: 'main',
	defaultLayoutRegions: {},
});