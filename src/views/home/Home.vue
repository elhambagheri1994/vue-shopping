<template src="./home.html"></template>

<script>
import ApiService from "@/common/api.service";
import Pagination from "@/components/pagination/Pagination";
import Products from "@/components/products/Products";
import PageLoading from "@/components/pageLoading/PageLoading";

export default {
  name: "home",
  components: { Pagination, Products, PageLoading },
  data() {
    return {
      products: Array,
      totalItem: Number,
      totalPages: Number,
      loading:Boolean,
    };
  },
  methods: {
    async getProducts(page = 1) {
      this.loading = true;
      const { data } = await ApiService.get(`search/?page=${page}&rows=25&`);
      this.loading = false;
      const { products, pager } = data.data;
      this.products = products;
      this.totalItem = pager.total_items;
      this.totalPages = pager.total_pages;
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
