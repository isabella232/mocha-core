import {curry} from 'lodash/fp';

const remove = curry(function remove (prop, obj) {
  delete obj[prop];
  return obj;
});

const Promise = global.Promise || require('core-js/library/fn/promise');
const Map = global.Map || require('core-js/library/fn/map');
const Set = global.Set || require('core-js/library/fn/set');
const WeakMap = global.WeakMap || require('core-js/library/fn/weak-map');
const WeakSet = global.WeakSet || require('core-js/library/fn/weak-set');
const from = Array.from || require('core-js/library/fn/array/from');
const immediate = global.setImmediate || process.nextTick || require('core-js/library/fn/set-immediate');

export {Promise, Map, Set, WeakMap, WeakSet, from, immediate, remove};
