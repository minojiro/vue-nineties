<script setup>
import Button from "./index.vue";
import { eventCallback, EventsAddon } from "@vitebook/vue/addons";
import { ControlsAddon } from "@vitebook/vue/addons";
import { ref } from "vue";
const disabled = ref(false);
</script>

<template>
  <Variant name="Default" description="The default button.">
    <Button :disabled="disabled" @click="eventCallback">OK</Button>
  </Variant>
  <ControlsAddon>
    <label>Disabled <input type="checkbox" v-model="disabled" /></label>
  </ControlsAddon>
  <EventsAddon />
</template>
