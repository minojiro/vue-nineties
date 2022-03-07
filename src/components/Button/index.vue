<script setup>
import { ref, onMounted } from "vue";
const focused = ref(false);
const props = defineProps({
  disabled: {
    default: false,
    type: Boolean,
  },
  tag: {
    default: "button",
    type: String,
  },
});
const emit = defineEmits(["click"]);
</script>

<template>
  <component
    :is="props.tag"
    class="w-full block bg-sys-gray-500 border-t border-t-white border-l border-l-white border-b border-b-black border-r border-r-black"
    @focus="focused = true"
    @blur="focused = false"
    @click="(e) => emit('click')"
    :disabled="props.disabled"
  >
    <div
      class="border-t border-t-sys-gray-200 border-l border-l-sys-gray-200 border-b border-b-sys-gray-800 border-r border-r-sys-gray-800"
    >
      <div
        class="p-1 border border-dotted"
        :class="[
          focused && !props.disabled
            ? 'border-sys-gray-800'
            : 'border-transparent',
          props.disabled ? 'text-sys-gray-800' : 'text-black',
        ]"
      >
        <slot />
      </div>
    </div>
  </component>
</template>
