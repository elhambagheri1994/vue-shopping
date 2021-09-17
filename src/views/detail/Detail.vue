<template src="./detail.html"></template>

<script>
import "./detail.scss";
import ApiService from "@/common/api.service";
import addSeprator, { addItemToCart } from "@/common/utilsFunction";
import PageLoading from "@/components/pageLoading/PageLoading";
import CustomButton from "@/components/button/Button";

export default {
  name: "Detail",
  components: { PageLoading, CustomButton },
  data() {
    return {
      product: {
        images: {},
        price: {},
      },
      loading: Boolean,
    };
  },
  methods: {
    addSeprator,
    addItemToCart,
    async getProducts(id) {
      this.loading = true;
      const { data } = await ApiService.get(`product/${id}`);
      this.loading = false;
      this.product = data.data.product;
    },
  },
  created() {
    this.getProducts(this.$route.params.id);
  },
  beforeRouteUpdate(to, from, next) {
    this.getProducts(to.params.id);
    next();
  },
};
</script>
