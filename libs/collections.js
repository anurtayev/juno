import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'meteor/aldeed:simple-schema';

const Entries = new Mongo.Collection("entries");
Entries.schema = new SimpleSchema({
  date: { type: Date },
  projectTitle: { type: String },
  projectCode: { type: String }, 
  projectTask: { type: String },
  hours: { type: Number, defaultValue: 0, max: 24, min: -24, decimal: true },
  description: { type: String },
  submited: { type: Boolean },
  invoiced: { type: Boolean },
  createdAt: { type: Date },
  username: { type: String }
});

const Projects = new Mongo.Collection("projects");
Projects.schema = new SimpleSchema({
  code: { type: String, max: 5 },
  title: { type: String, max: 50 },
  task: { type: [ String ], minCount: 1, max: 50 }
});

export default {
  Entries: Entries,
  Projects: Projects
};