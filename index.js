import mapKeys from 'lodash/mapKeys';
import camelCase from 'lodash/camelCase';

const camelCaseObjectKeys = (o) => mapKeys(o, (v, k) => camelCase(k));

export default camelCaseObjectKeys;
