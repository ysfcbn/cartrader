<script setup>
definePageMeta({
  layout: "custom",
  middleware: ["auth"],
});
</script>

<template>
  <div class="rounded shadow mt-20">
    <CarMessageCard />
    <CarMessageCard />
    <CarMessageCard />
    <CarMessageCard />
  </div>
</template>
