<template>
  <div>
    <MoviePaginator
      :first="1"
      :rows="20"
      :total-records="10000"
      @page="onHandleChangePage"
    />
  </div>
</template>

<script setup>
const currentPage = ref(1);
const emit = defineEmits(['changePage']);

const onHandleChangePage = (event) => {
  currentPage.value = event.page + 1;
  emit('changePage', currentPage.value);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>