<template>
  <div>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <p>Index page</p>
    <!-- <InputText id="text" v-model="text" /> -->
    <NuxtLink to="about">About</NuxtLink>
  </div>
</template>

<script setup lang="ts">
  const text = ref('')

  watch(
    () => text.value,
    textchange => {
      console.log(textchange);
    }
  )
</script>

<style lang="scss" scoped>

</style>