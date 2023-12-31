import {
  defineNamespace,
  defineProjections,
  Model as СправДолMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-2-справ-дол';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СправДолMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
