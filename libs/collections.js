import {Mongo} from 'meteor/mongo'

export default {
  Entries: new Mongo.Collection('entries'),
  Projects: new Mongo.Collection('projects')
}
