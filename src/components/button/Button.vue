<template>
  <button
    :class="['custom-button', color]"
    :style="{ background: color }"
    @click="$emit('button-click', $event)"
  >
    {{ $t(title) }}
  </button>
</template>

<script>
import "./button.scss";

export default {
  name: "CustomButton",
  props: {
    title: String,
    color: String,
  },
};
</script>
