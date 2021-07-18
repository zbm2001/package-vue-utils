module.exports = {
  emptyString: {
    type: String,
    default: ''
  },
  emptyObject: {
    type: Object,
    default: () => {
    }
  },
  emptyArray: {
    type: Array,
    default: () => []
  },
  noopFunction: {
    type: Function,
    default () {
    }
  },
  trueBoolean: {
    type: Boolean,
    default: true
  },
  falseBoolean: {
    type: Boolean,
    default: false
  }
}
