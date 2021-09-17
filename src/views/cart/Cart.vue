<template src="./cart.html" />
<script>
import "./cart.scss";
import { getData } from "@/common/store.service";
import addSeprator from "@/common/utilsFunction";
import PageTitle from "@/components/pageTitle/PageTitle";

export default {
  name: "Cart",
  data() {
    return {
      products: [],
    };
  },
  components: {
    PageTitle,
  },
  methods: {
    addSeprator,
    getCartProduct() {
      this.products = getData("products");
    },
  },
  created() {
    this.getCartProduct();
  },
};
</script>
