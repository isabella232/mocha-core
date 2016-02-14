'use strict';

import stampit from 'stampit';
import identity from 'lodash/identity';
import noop from 'lodash/noop';
import every from 'lodash/every';
import OptionMap from './index';

const Option = stampit({
  refs: {
    api: undefined
  },
  props: {
    default: undefined,
    name: undefined,
    summary: undefined,
    description: undefined,
    example: undefined,
    implies: [],
    alias: [],
    count: false,
    boolean: false,
    string: false,
    array: false,
    store: undefined,
    check: identity,
    choices: [],
    length: undefined,
    options: undefined,
    required: false,
    listeners: undefined,
    init: noop
  },
  init() {
    if (this.options) {
      this.options = OptionMap(this.options);
    }
    if (this.init) {
      this.init(this.api);
    }
  },
  methods: {
    validate(optionMap) {
      if (!this.name) {
        throw new Error('option requires a name');
      }
      if (this.implies) {
        const implies = [].concat(this.implies || []);
        if (!every(implies, optionName => optionMap.has(optionName))) {
          throw new Error(`option "${this.name}" requires options to be set: ${this.implies}`);
        }
      }
    }
  }
});

export default Option;
