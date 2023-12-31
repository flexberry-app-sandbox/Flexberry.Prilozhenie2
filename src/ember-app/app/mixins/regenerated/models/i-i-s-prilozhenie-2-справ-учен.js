import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фИОУченика: DS.attr('string'),
  справКлас: DS.belongsTo('i-i-s-prilozhenie-2-справ-клас', { inverse: null, async: false }),
  справРод: DS.belongsTo('i-i-s-prilozhenie-2-справ-род', { inverse: null, async: false })
});

export let ValidationRules = {
  фИОУченика: {
    descriptionKey: 'models.i-i-s-prilozhenie-2-справ-учен.validations.фИОУченика.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  справКлас: {
    descriptionKey: 'models.i-i-s-prilozhenie-2-справ-учен.validations.справКлас.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  справРод: {
    descriptionKey: 'models.i-i-s-prilozhenie-2-справ-учен.validations.справРод.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СправУченE', 'i-i-s-prilozhenie-2-справ-учен', {
    фИОУченика: attr('Ф и о ученика', { index: 0 }),
    справКлас: belongsTo('i-i-s-prilozhenie-2-справ-клас', 'Справ клас', {
      классы: attr('Классы', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'классы' }),
    справРод: belongsTo('i-i-s-prilozhenie-2-справ-род', 'Справ род', {
      фИОРод: attr('Ф и о род', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'фИОРод' })
  });

  modelClass.defineProjection('СправУченL', 'i-i-s-prilozhenie-2-справ-учен', {
    фИОУченика: attr('Ф и о ученика', { index: 0 }),
    справКлас: belongsTo('i-i-s-prilozhenie-2-справ-клас', 'Классы', {
      классы: attr('Классы', { index: 1 })
    }, { index: -1, hidden: true }),
    справРод: belongsTo('i-i-s-prilozhenie-2-справ-род', 'Ф и о род', {
      фИОРод: attr('Ф и о род', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
