import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фИОПрепода: DS.attr('string')
});

export let ValidationRules = {
  фИОПрепода: {
    descriptionKey: 'models.i-i-s-prilozhenie-2-препод.validations.фИОПрепода.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПреподE', 'i-i-s-prilozhenie-2-препод', {
    фИОПрепода: attr('Препод', { index: 0 })
  });

  modelClass.defineProjection('ПреподL', 'i-i-s-prilozhenie-2-препод', {
    фИОПрепода: attr('Препод', { index: 0 })
  });
};
