import isObject from 'lodash/isObject';
import mapKeys from 'lodash/mapKeys';
import camelCase from 'lodash/camelCase';

function camelCaseObjectKeys(object) {
  const returnObject = {};

  if (!isObject(object)) {
    return returnObject;
  }

  return mapKeys(object, (v, k) => { return camelCase(k); });
}

export default camelCaseObjectKeys;
