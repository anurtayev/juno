Entries = new Mongo.Collection("entries");
Lists.schema = new SimpleSchema({
  date: {type: Date},
  project: {type: Number, defaultValue: 0},
  projectCode: {type: String}, 
  task: {type: String},
  hours: {type: Number, defaultValue: 0},
  description: {type: String},
  submited: {type: Boolean},
  invoiced: {type: Boolean},
  createdAt: {type: Date},
  username: {type: String}
});

Projects = new Mongo.Collection("projects");