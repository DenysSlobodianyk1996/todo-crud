<template>
  <div class="h-full flex flex-col"> 
    <header class="sticky top-0 p-4 bg-white border-b border-solid border-slate-300">My App Header</header>

    <main class="flex-auto p-4">
      <slot />
    </main>

    <footer class="sticky bottom-0 p-4 bg-white border-t border-solid border-slate-300">Footer</footer>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>