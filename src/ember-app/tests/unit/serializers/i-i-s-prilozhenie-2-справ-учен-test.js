import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-prilozhenie-2-справ-учен', 'Unit | Serializer | i-i-s-prilozhenie-2-справ-учен', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-prilozhenie-2-справ-учен',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
