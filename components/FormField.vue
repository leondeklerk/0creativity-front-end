<script setup lang="ts">
interface Props {
    label: string,
    modelValue: string,
    type: string
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function onInput(event: Event) {
    emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <div>
    <div>
      <label class="inline-block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
          {{props.label}}
      </label>
    </div>
    <div>
      <input
        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        @input="onInput"
        :value="props.modelValue"
        :type="props.type"
      />
    </div>
  </div>
</template>
