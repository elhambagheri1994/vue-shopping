<template src="./pagination.html"></template>

<script>
import "./pagination.scss";

export default {
  name: "Pagination",
  props: [
    'totalItem',
    'totalPages',
  ],
  data() {
    return {
      pages: [],
      currentPage: 1,
    };
  },
  methods: {
    setPages() {
      for (let index = 1; index <= this.totalPages; index++) {
        this.pages.push(index);
      }
    },
    scrollToTop() {
        window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
    },
    refetchList(type, pageNumber = null) {
      switch (type) {
        case "DECREASE": {
          this.currentPage--;
          break;
        }
        case "INCREASE": {
          this.currentPage++;
          break;
        }
        case "SELECT_PAGE": {
          this.currentPage = pageNumber;
          break;
        }
      }
            this.scrollToTop()
      this.$emit("refetch-list", this.currentPage);

    },
  },
  watch: {
    totalItem: function () {
      this.setPages();
    },
  },
};
</script>
