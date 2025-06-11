<template>
  <div id="app" class="container">
    <h2>Version 2.1.0</h2>
    <h2>
      You opened this page
      <time-ago :locale="locale" :long="longString" class="title" refresh />
    </h2>
    <div class="block">
      <span class="demonstration">Pick A Date </span>
      <el-date-picker
        v-model="value"
        :clearable="false"
        :picker-options="pickerOptions"
        type="datetime"
        placeholder="Choose A Date"
      />
      <div style="font-size: 15px; color: #aaa">Default refresh time: 60 seconds</div>
    </div>
    <div class="box">
      <el-switch v-model="longString" active-color="#47b784" active-text="Long String" inactive-text="Short String" />
      <br />
      <el-switch
        v-model="tooltip"
        active-color="#47b784"
        active-text="Show tooltip"
        inactive-text="Don't show tooltip"
      />
    </div>
    <div class="box">
      Locale
      <el-select v-model="locale" placeholder="Pick Locale">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      Current Locale Code: <span style="margin-left: 10px; color: blue">{{ locale }}</span>
    </div>
    <div class="timeago">
      <time-ago
        :datetime="value"
        :locale="locale"
        :tooltip="tooltip"
        :tooltip-options="tooltipOptions"
        :long="longString"
        refresh
        @update="timeRefresh"
        @click="handleClick"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: new Date(),
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        },
      },
      longString: false,
      tooltip: true,
      tooltipOptions: {
        placement: 'top',
      },
      locale: 'en',
      options: [
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
        { value: 'vi', label: 'Vietnam' },
        { value: 'it', label: 'Italian' },
      ],
    }
  },
  methods: {
    timeRefresh({ timeago, nowString, timestamp }) {
      console.log(timeago)
      console.log(nowString)
      console.log(timestamp)
    },
    handleClick() {
      console.log('timeago has been clicked!')
    },
  },
}
</script>

<style>
.container {
  font-family: 'Roboto Slab', serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 500px;
}
.title span {
  font-weight: 800;
  font-size: 20px;
}
.timeago {
  margin-top: 50px;
  border: 2px solid #47b784;
  padding: 10px;
}
.timeago span {
  font-size: 15px;
}
.box {
  margin: 20px;
}
</style>
