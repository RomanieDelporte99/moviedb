<template>
  <div
    id="app"
    class="flex flex-col md:flex-row"
  >
    <Navigation/>
    <div class="flex-1 w-screen max-w-full overflow-x-hidden">
      <div class="min-h-screen px-5 py-8">
        <slot/>
      </div>
    </div>
  </div>
</template>