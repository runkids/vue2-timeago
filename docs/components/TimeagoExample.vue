<template>
  <h4>
    You opened this page
    <Timeago :locale="locale" long />
  </h4>
  <br />
  <div style="margin-bottom: 16px; display: flex; align-items: center">
    <div style="margin-right: 10px">
      Date: <input v-model="date" type="datetime-local" />
    </div>
    <div style="margin-right: 10px">
      Local:
      <select v-model="locale">
        <option
          v-for="option in localeOptions"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
    </div>
    <div>Long String: <input v-model="long" type="checkbox" /></div>
  </div>
  <Timeago :locale="locale" :long="long" :datetime="date" @update="update" />
</template>

<script setup>
import { ref } from 'vue'
import { Timeago } from 'vue2-timeago'
// import { Timeago } from '../../src/index.ts'

const date = ref(new Date())
const long = ref(true)
const locale = ref('en')
const localeOptions = [
  { value: 'en', label: 'English' },
  { value: 'zh_TW', label: '繁體中文' },
  { value: 'zh_CN', label: '简体中文' },
  { value: 'jp', label: '日本語' },
  { value: 'ko', label: 'Korean' },
  { value: 'pt_BR', label: 'Portugal' },
  { value: 'es', label: 'Spain' },
  { value: 'ar', label: 'Arabia' },
  { value: 'fr', label: 'French' },
  { value: 'tr', label: 'Turkish' },
  { value: 'pl', label: 'Polish' },
  { value: 'id', label: 'Indonesian' },
  { value: 'ro', label: 'Romanian' },
  { value: 'ru', label: 'Russian' },
  { value: 'de', label: 'Germany' },
  { value: 'uk', label: 'Ukrainian' },
  { value: 'bg', label: 'Bulgarian' },
  { value: 'se', label: 'Swedish' },
  { value: 'nl', label: 'Dutch / Netherlands' },
  { value: 'he', label: 'Hebrew' },
  { value: 'th', label: 'Thai' },
  { value: 'da', label: 'Danish' },
  { value: 'no', label: 'Norwegian' },
  { value: 'vi', label: 'Vietnamese' },
  { value: 'it', label: 'Italian' },
]

function update({ timeago, nowString, timestamp, seconds }) {
  console.log(timeago)
  console.log(nowString)
  console.log(timestamp)
  console.log(seconds)
}
</script>
