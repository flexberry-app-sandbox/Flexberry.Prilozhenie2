import { Serializer as СправКласSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prilozhenie-2-справ-клас';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СправКласSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
