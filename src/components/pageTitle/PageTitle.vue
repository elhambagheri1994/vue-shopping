<template>
  <div class="page-title">
    <span>
      {{ $t(title) }}
    </span>
  </div>
</template>

<script>
import "./pageTitle.scss";

export default {
  name: "PageTitle",
  props: {
    title: String,
  },
};
</script>
