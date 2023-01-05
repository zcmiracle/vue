import { defineStore } from "pinia";

// 日期范围的处理
const startDate = new Date();
const endDate = new Date();
endDate.setDate(startDate.getDate() + 1);

const useMainStore = defineStore("main", {
  state: () => ({
    token: "",

    startDate: startDate,
    endDate: endDate,
  }),
});

export default useMainStore;
