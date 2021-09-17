<template src="./cartModal.html" />
<script>
import "./cartModal.scss";
export default {
  name: "CartModal",
  props: ['products','number'],
  methods:{
    detail(item){
      const {id} = item;
      this.$router.push({ path: `/detail/${id}`});
    }
  }
}
</script>