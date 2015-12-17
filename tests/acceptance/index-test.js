import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance');

test('visiting /', function(assert) {
  var container = this.container;

  visit('/');

  andThen(function() {
    var subject = container.lookup('controller:application');
    var stream = container.lookup('service:stream');

    assert.equal(currentURL(), '/');

    assert.equal(stream, subject.get('stream'));
    assert.equal(subject, subject.get('application'));
  });
});
