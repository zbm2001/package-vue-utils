export const emptyString = {
  type: String,
  default: ''
}

export const emptyObject = {
  type: Object,
  default: () => {}
}

export const emptyArray = {
  type: Array,
  default: () => []
}

export const noopFunction = {
  type: Function,
  default () {}
}

export const trueBoolean = {
  type: Boolean,
  default: true
}

export const falseBoolean = {
  type: Boolean,
  default: false
}
