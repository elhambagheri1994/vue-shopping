<template src="./header.html" />
<script>
import "./header.scss";
import logo from "/src/assets/logo.png";
import cart from "/src/assets/svg/cart.svg";
import EventBus from "@/common/event-bus";
import { getData } from "@/common/store.service";
import CartModal from "@/components/cartModal/CartModal";

export default {
  name: "Header",
  components: { CartModal },
  data() {
    return {
      logo,
      cart,
      showDetail: false,
      number: getData("products")?.length || 0,
      products: getData("products"),
    };
  },
  methods: {
    showDetailOnHover() {
      if (this.$route.name !== "cart") {
        this.showDetail = true;
      }
    },
  },
  mounted() {
    EventBus.$on("addToCartEvent", products => {
      this.number = products.length;
      this.products = products;
    });
  },
};
</script>
