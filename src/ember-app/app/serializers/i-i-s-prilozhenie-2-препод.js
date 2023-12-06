import { Serializer as ПреподSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prilozhenie-2-препод';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПреподSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
