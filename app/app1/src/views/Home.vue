<template>
  <div class="home">
    <h1>
      我是home组件
      {{ newData }}
    </h1>
  </div>
  <tslearn/>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import tslearn from './tslearn.vue'
interface News {
  title: string;
  description: string;
  count: number;
  content?: string;
}
let newData: News = {
  title: "这是个标题",
  description: "我是详细内容!!",
  count: 0,
};
export default defineComponent({
  name: "Home",
  components: {
    tslearn
  },
  setup() {
    let newsDATAS = ref(newData)
    const setTitle = (title: string): string => {

      return "测定数据!!!!";
    };

    return { newData };
  },
});
</script>
