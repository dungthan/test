import { Meteor } from 'meteor/meteor';
import { Lists } from '../lists.js';

Meteor.publish('lists.public', function listsPublic() {
	return Lists.find({
		userId: { $exists: false },
	}, {
		fields: Lists.publicFields,
	});
});