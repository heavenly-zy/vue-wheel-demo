<template>
  <div class="wrapper">
    <input
      :value="value"
      type="text"
      :disabled="disabled"
      :readonly="readonly"
      :class="{'error':error}"
      @change="$emit('change',$event.target.value)"
      @input="$emit('input',$event.target.value)"
      @focus="$emit('focus',$event.target.value)"
      @blur="$emit('blur',$event.target.value)"
    />
    <template v-if="error">
      <g-icon name="error" class="icon-error"></g-icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>

<script>
import Icon from "./icon";
export default {
  components: {
    "g-icon": Icon
  },
  name: "WheelInput", // name 其实是用来调试用的，便于区分
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 14px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #f1453d;
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  > :not(:last-child) {
    margin-right: 0.5em;
  }
  > input {
    height: 32px;
    border: 1px solid $border-color;
    border-radius: 4px;
    padding: 0 8px;
    font-size: inherit;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      outline: none;
      box-shadow: inset 0 1px 3px $box-shadow-color;
    }
    &[disabled],
    &[readonly] {
      border-color: #aaa;
      color: #bbb;
      cursor: not-allowed;
    }
    &.error {
      border-color: $red;
      &:focus {
      outline: none;
      box-shadow: inset 0 1px 3px $red;
    }
    }
  }
  .icon-error {
    fill: $red;
  }
  .errorMessage {
    color: $red;
  }
}
</style>