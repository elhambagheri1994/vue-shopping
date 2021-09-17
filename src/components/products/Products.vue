<template src="./products.html"></template>

<script>
import "./products.scss";
import addSeprator, { addItemToCart } from "@/common/utilsFunction";
import CustomButton from "@/components/button/Button";

export default {
  name: "Products",
  props: {
    products: [],
  },
  components: {
    CustomButton,
  },
  methods: {
    addSeprator,
    addItemToCart,
    detail(item) {
      const { id } = item;
      this.$router.push({ path: `/detail/${id}` });
    },
  },
};
</script>
