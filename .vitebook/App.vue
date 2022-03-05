<script lang="ts">
import type { App, Component } from "vue";
import "../src/styles/style.css";

export async function configureApp(app: App) {
  //
}
</script>

<script setup lang="ts">
const { component } = defineProps<{
  component: Component;
}>();
</script>

<template>
  <div class="base">
    <component :is="component" />
  </div>
</template>
