import Ember from 'ember';
import strength from 'password-strength';

const { Controller, computed } = Ember;

export default Controller.extend({
  password: '',

  strength: computed('password', function () {
    return strength(this.get('password'));
  })
});
