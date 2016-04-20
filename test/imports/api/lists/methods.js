import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Lists } from './lists.js';

export const insert = new ValidatedMethod({
  name: 'lists.insert',
  validate: new SimpleSchema({}).validator(),
  run() {
    return Lists.insert({});
  },
});