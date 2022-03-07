<script setup>
import Button from "./index.vue";
import { eventCallback, EventsAddon } from "@vitebook/vue/addons";
import { ControlsAddon } from "@vitebook/vue/addons";
import { ref } from "vue";
const disabled = ref(false);
</script>

<template>
  <Button :disabled="disabled" @click="eventCallback">OK</Button>
  <ControlsAddon>
    <label>Disabled <input type="checkbox" v-model="disabled" /></label>
  </ControlsAddon>
  <EventsAddon />
</template>
