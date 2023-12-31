import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерКарты: DS.attr('number'),
  справСотр: DS.belongsTo('i-i-s-prilozhenie-2-справ-сотр', { inverse: null, async: false }),
  справУчен: DS.belongsTo('i-i-s-prilozhenie-2-справ-учен', { inverse: null, async: false })
});

export let ValidationRules = {
  номерКарты: {
    descriptionKey: 'models.i-i-s-prilozhenie-2-карт-доступ.validations.номерКарты.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  справСотр: {
    descriptionKey: 'models.i-i-s-prilozhenie-2-карт-доступ.validations.справСотр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  справУчен: {
    descriptionKey: 'models.i-i-s-prilozhenie-2-карт-доступ.validations.справУчен.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КартДоступE', 'i-i-s-prilozhenie-2-карт-доступ', {
    номерКарты: attr('Номер карты', { index: 0 }),
    справУчен: belongsTo('i-i-s-prilozhenie-2-справ-учен', 'Справ учен', {
      фИОУченика: attr('Ф и о ученика', { index: 2 })
    }, { index: 1, displayMemberPath: 'фИОУченика' }),
    справСотр: belongsTo('i-i-s-prilozhenie-2-справ-сотр', 'СправСотр', {
      фИОСотр: attr('Ф и о сотр', { index: 4 })
    }, { index: 3, displayMemberPath: 'фИОСотр' })
  });

  modelClass.defineProjection('КартДоступL', 'i-i-s-prilozhenie-2-карт-доступ', {
    номерКарты: attr('Номер карты', { index: 0 }),
    справУчен: belongsTo('i-i-s-prilozhenie-2-справ-учен', 'Ф и о ученика', {
      фИОУченика: attr('Ф и о ученика', { index: 1 })
    }, { index: -1, hidden: true }),
    справСотр: belongsTo('i-i-s-prilozhenie-2-справ-сотр', 'Ответственный', {
      фИОСотр: attr('Ответственный', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
