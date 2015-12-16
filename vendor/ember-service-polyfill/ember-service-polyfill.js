
(function () {
  Ember.Service = Ember.Service || Ember.Object.extend({});
  Ember.inject = Ember.inject || {
    controller: function (name) {
      return Ember.computed(function (key) {
        Ember.assert("Attempting to lookup an injected property on an object " +
                     "without a container, ensure that the object was " +
                     "instantiated via a container.", this.container);

        return this.container.lookup('controller:' + (name || Ember.String.dasherize(key)));
      }).readOnly()
    },

    service: function (name) {
      return Ember.computed(function (key) {
        Ember.assert("Attempting to lookup an injected property on an object " +
                     "without a container, ensure that the object was " +
                     "instantiated via a container.", this.container);

        return this.container.lookup('service:' + (name || Ember.String.dasherize(key)));
      }).readOnly()
    }
  };
})();
