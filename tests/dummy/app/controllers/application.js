import Ember from 'ember';

export default Ember.Controller.extend({
  stream: Ember.inject.service(),

  application: Ember.inject.controller()
});
