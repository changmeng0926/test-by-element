<template>
  <!-- <div>Permission</div> -->
  <div class="phone">
    <!-- 自定义 -->
    <div class="calendar">
      <div class="calendar-title">
        <i class="el-icon-arrow-left" @click="upward"></i>
        <div>{{currentYear}}.{{currentMonth}}</div>
        <i class="el-icon-arrow-right" @click="downward"></i>
      </div>

      <div class="calendar-header">
        <span class="header-item" v-for="i in weekName" :key="i">{{i}}</span>
      </div>

      <div class="calendar-main">
        <div class="week" v-for="(item,index) in dateList" :key="index">
          <span
            class="day"
            @click="trgger(i)"
            :class="setClass(i)"
            v-for="i in item"
            :key="i.d"
          >{{i.d}}</span>
        </div>
      </div>

      <div class="expand" @click="expand">
        <i class="iconfont" :class="isExpand ? 'icon-spread-line1' : 'icon-spread-line'"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  data () {
    return {
      weekName: ['一', '二', '三', '四', '五', '六', '日'],
      dateList: [[]],
      currentYear: null,
      currentMonth: null,
      currentDay: null,
      currIndex: null,
      isExpand: false,
    }
  },
  watch: {},
  computed: {},
  created () { },
  mounted () {
    const now = new Date()
    this.currentYear = now.getFullYear()
    this.currentMonth = now.getMonth() + 1
    this.currentDay = now.getDate()
    this.calendar()
    setTimeout(() => {
      this.getCurrIndex()
    }, 0)
  },
  methods: {
    setClass ({ m, d }) {
      const arr = []
      if (m === this.currentMonth) {
        arr.push('current-mounth')
        if (d === this.currentDay) {
          arr.push('current-day')
        }
      } else {
        arr.push('no-current-mounth')
      }
      return arr
    },
    expand () {
      this.isExpand = !this.isExpand
      this.setVisiblety()
    },
    setVisiblety () {
      const list = document.getElementsByClassName('week')
      if (this.isExpand) {
        list.forEach(i => {
          i.style.height = '32px'
          i.style.visibility = 'initial'
          i.style['transition-delay'] = 'height'
          i.style['transition-duration'] = '0.35s'
        })
      } else {
        list.forEach((i, index) => {
          if (index === this.currIndex) {
            i.style.visibility = 'initial'
            i.style.height = '32px'
          } else {
            i.style.visibility = 'hidden'
            i.style.height = '0px'
          }
          i.style['transition-delay'] = 'height'
          i.style['transition-duration'] = '0.35s'
        })
      }
    },
    trgger ({ m, d }) {
      if (m < this.currentMonth) {
        this.upward()
      }
      if (m > this.currentMonth) {
        this.downward()
      }
      this.currentDay = d
      if (m === this.currentMonth) {
        setTimeout(() => {
          this.getCurrIndex()
        }, 0)
      }
    },
    upward () {
      if (this.currentMonth === 1) {
        this.currentMonth = 12
        this.currentYear--
      } else {
        this.currentMonth--
      }
      this.setCurrDay()
      this.calendar()
      setTimeout(() => {
        this.getCurrIndex()
      }, 0)
    },
    downward () {
      if (this.currentMonth === 12) {
        this.currentMonth = 1
        this.currentYear++
      } else {
        this.currentMonth++
      }
      this.setCurrDay()
      this.calendar()
      setTimeout(() => {
        this.getCurrIndex()
      }, 0)
    },
    setCurrDay () {
      const now = new Date()
      const cm = now.getMonth() + 1
      const cd = now.getDate()
      this.currentDay = cm === this.currentMonth ? cd : 1
    },
    getCurrIndex () {
      this.currIndex = this.dateList.reduce((a, b, i) => {
        const y = b.findIndex(({ m, d }) => { return m === this.currentMonth && d === this.currentDay }) !== -1
        if (y) a = i
        return a
      }, 0)
      this.setVisiblety()
    },
    calendar () {
      this.dateList = [[]]
      const year = this.currentYear
      const month = this.currentMonth
      //本月第一天是星期几
      const firstW = new Date(year, month - 1, 1).getDay()
      const firstDayWeek = firstW === 0 ? 7 : firstW;
      //本月有多少天(即最后一天的getDate()，但是最后一天不知道，我们可以用“上个月的0来表示本月的最后一天”)
      const cDays = new Date(year, month, 0).getDate();
      //本月最后一天是星期几
      const finallyW = new Date(year, month - 1, cDays).getDay()
      const finallyDayWeek = finallyW === 0 ? 7 : finallyW;
      // 上月天数
      const pDays = new Date(year, month - 1, 0).getDate();

      let numRow = 0;  //记录行的个数，到达7的时候获取新的一行数据
      // 将上月月添加进去
      for (let i = 0; i < firstDayWeek - 1; i++) {
        this.dateList[this.dateList.length - 1].unshift({ m: month - 1, d: pDays - i })
        numRow++;
      }
      // 将本月添加进去
      for (var j = 1; j <= cDays; j++) {
        let a = this.dateList[this.dateList.length - 1]
        a.push({ m: month, d: j })
        numRow++;
        if (numRow === 7 && a[6].d !== cDays) {  // 每一周是一个数组
          this.dateList.push([])
          numRow = 0;
        }
      }
      // 将下月添加进去
      for (let i = 1; i <= 7 - finallyDayWeek; i++) {
        this.dateList[this.dateList.length - 1].push({ m: month + 1, d: i })
      }
      if (this.dateList.length === 5) {
        this.dateList.push([])
        if (finallyDayWeek === 7) {
          for (let i = 1; i <= 7; i++) {
            this.dateList[this.dateList.length - 1].push({ m: month + 1, d: i })
          }
        } else {
          const item = this.dateList[4][6]
          for (let i = 1; i <= 7; i++) {
            this.dateList[this.dateList.length - 1].push({ m: item.m, d: item.d + i })
          }
        }
      }
    },
  }
}
</script>

<style lang='less' scope >
.phone {
  width: 375px;
  height: 667px;
  background: #eee;
  margin: 0 auto;
  padding: 24px;
}
.expand {
  height: 32px;
  line-height: 32px;
  text-align: center;
  cursor: pointer;
}

.calendar {
  .calendar-title {
    display: flex;
    justify-content: space-between;
    line-height: 28px;
    align-items: center;
    background: #78b3ed;
    i {
      width: 24px;
      text-align: center;
      cursor: pointer;
    }
  }
  .calendar-header {
    background: #e7f1fd;
    display: flex;
    justify-content: space-between;
    .header-item {
      width: 32px;
      line-height: 32px;
      text-align: center;
    }
  }
  .calendar-main {
    .week {
      display: flex;
      justify-content: space-between;
      overflow: hidden;
    }
    .day {
      width: 32px;
      text-align: center;
      line-height: 32px;
      font-family: "宋体";
      font-size: 12px;
      font-weight: bold;
      cursor: pointer;
    }
  }
}
.current-mounth {
  color: #000;
}
.no-current-mounth {
  color: #999;
}
.current-day {
  color: #fff;
  border-radius: 50%;
  background: #1989fa;
  transition-duration: 0.5s;
}
</style>