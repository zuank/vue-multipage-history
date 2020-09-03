<template>
  <div id="app">
    <p>需要<input type="num" v-model="groupNum">组数据</p>
    <p>每组数据<input type="num" v-model="gronpLength">条</p>
    <p>完整数据区间<input type="num" v-model="fullMin">~<input type="num" v-model="fullMax"></p>
    <p>合格数据区间<input type="num" v-model="qualifiedMin">~<input type="num" v-model="qualifiedMax"></p>
    <p>合格率范围<input type="num" v-model="passRateMin">~<input type="text" v-model="passRateMax"></p>
    <p>保留小数<input type="num" v-model="toFixed">位</p>
    <p>
      <input type="button" value="生成数据" @click="getNumList">
      <input type="button" value="导出xlsx" @click="exportXlsx">
    </p>
    <table id="sjs-table" border="1" cellspacing="0" cellpadding="0" v-if="groupNumList.length">
      <thead>
      <tr>
        <td :colspan="gronpLength">数据</td>
        <td>合格率</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in groupNumList" :key="index">
        <td v-for="(_item,_index) in item.list" :key="_index">{{ _item }}</td>
        <td>{{ item.rate }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import XLSX from 'xlsx'

export default {
  name: 'app',
  data() {
    return {
      groupNum: 100,
      gronpLength: 10,
      fullMin: -10,
      fullMax: 20,
      qualifiedMin: 0,
      qualifiedMax: 10,
      passRateMin: 0.8,
      passRateMax: 1,
      groupNumList: [],
    }
  },
  methods: {
    getNumList() {
      // 确定合格率
      this.groupNumList = []
      const tempRate = (Number(this.passRateMax) - Number(this.passRateMin)) * 10 + 1
      for (let i = 0; i < Number(this.groupNum); i++) {
        const passRate = parseInt(Math.random() * tempRate + Number(this.passRateMin) * 10) / 10
        console.log("合格率" + passRate)
        this.groupNumList.push({
          list: this.getGroupNum(passRate),
          rate: passRate
        })
      }
      // console.log(this.groupNumList)
    },
    // 获取一组数据
    getGroupNum(passRate) {
      const arr = []
      for (let i = 0; i < passRate * Number(this.gronpLength); i++) {
        arr.push((Math.random() * (Number(this.qualifiedMax) - Number(this.qualifiedMin)) + Number(this.qualifiedMin)).toFixed(this.toFixed))
      }
      while (arr.length < this.gronpLength) {
        const num = parseFloat(Math.random() * (Number(this.fullMax) - Number(this.fullMin)) + Number(this.fullMin)).toFixed(this.toFixed)
        if (!(num >= Number(this.qualifiedMin) && num <= Number(this.qualifiedMax))) {
          arr.push(num)
        }
      }
      console.log(arr)
      // 进行乱序
      return arr.sort((a, b) => .5 - Math.random())
    },
    exportXlsx() {
      if (this.groupNumList.length === 0) return
      var wb = XLSX.utils.table_to_book(document.getElementById('sjs-table'));
      XLSX.writeFile(wb, "export.xlsx");
    }
  }
}
</script>

<style>
</style>
