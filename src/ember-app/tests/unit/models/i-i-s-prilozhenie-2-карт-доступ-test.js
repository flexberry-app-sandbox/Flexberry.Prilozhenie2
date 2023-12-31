import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-prilozhenie-2-карт-доступ', 'Unit | Model | i-i-s-prilozhenie-2-карт-доступ', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-prilozhenie-2-карт-доступ',
    'model:i-i-s-prilozhenie-2-препод',
    'model:i-i-s-prilozhenie-2-справ-дол',
    'model:i-i-s-prilozhenie-2-справ-клас',
    'model:i-i-s-prilozhenie-2-справ-род',
    'model:i-i-s-prilozhenie-2-справ-сотр',
    'model:i-i-s-prilozhenie-2-справ-учен',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
