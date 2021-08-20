<template>
  <div class="raodom-table" id="rTable">
    <el-button class="call-btn" type="primary" size="small" @click="callName">点名</el-button>
    <table>
      <thead>
        <tr>
          <th>座位表</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(i, row) in userList" :key="row">
          <td :class="setActive(row,col)" v-for="(n, col) in i" :key="col">
            <span :class="setClass(n)">{{n}}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Random',
  components: {},
  props: {},
  data () {
    return {
      userList: [
        ['      ', '杨荣锋', '范丽娜', '      ', '   ', '李康超', '于春永', '冯丽莹', '王俊杰'],
        ['梁帅克', '彭长欢', '王锦秀', '罗佳兴', '   ', '马庆波', '吴成云', '万鹏辉', '王瑞刚'],
        ['张继旺', '张国泰', '程立威', '李江林', '   ', '赖建明', '刘甲恒', '张浩斌', '康开赟'],
        ['余  鑫', '姚建强', '黄治钧', '张阳胜', '   ', '赵  超', '芮乐乐', '邵纪丹', '李  鹏'],
        ['雷金辉', '卓根德', '王伟超', '林  杰', '   ', '雷  旺', '刘  灿', '肖震昆', '章  腾'],
        ['韩  娇', '刘  奔', '何凤军', '杨吉祥', '   ', '沈国家', '兰  靖', '张  威', '曾耀荣'],
        ['陈达孚', '李  根', '李  桐', '钟鑫城', '   ', '廖旭承', '王丽军', '程  磊', '李长蒙'],
        ['周  锋', '杨静静', '张  丽', '陈赫凡', '   ', '刘  青', '黄家晖', '吴  洋', '罗星成'],
        ['卢  雨', '叶天阳', '刘佳灏', '柯伟达', '   ', '      ', '      ', '      ', '      '],
        ['卢海潮', '郑鹏辉', '      ', '陈广辉', '   ', '      ', '      ', '      ', '      ']
      ],
      groupLeader: ['范丽娜', '张国泰', '王伟超', '李  桐', '叶天阳', '冯丽莹', '张浩斌', '肖震昆', '程  磊'],
      activeTd: null,
    }
  },
  watch: {},
  computed: {},
  mounted () {
    // this.initTable()
  },
  methods: {
    callName () {
      this.activeTd = this.CreateIndex()
    },
    setClass (n) {
      return this.groupLeader.indexOf(n) > -1 ? 'leader' : 'menber'
    },
    setActive (row, col) {
      let className = ''
      if (this.activeTd) {
        const { rowIndex, colIndex } = this.activeTd
        className += rowIndex === row && colIndex === col ? 'active' : ''
      }
      return className
    },
    // 随机生成数组下标,包含最小值, 但不包含最大值
    randomCreate (max, min) {
      return Math.floor(Math.random() * (max - min)) + min
    },
    // 随机生成二维数组下标
    CreateIndex () {
      let colIndex = null
      let rowIndex = this.randomCreate(this.userList.length, 0)
      do {
        colIndex = this.randomCreate(this.userList[rowIndex].length, 0)
      } while (this.userList[rowIndex][colIndex].trim() === '');
      console.log(this.userList[rowIndex][colIndex], colIndex, rowIndex);
      return { rowIndex, colIndex, name: this.userList[rowIndex][colIndex] }
    },
    // initTable () {
    //   let html = '<table><thead><tr><th>座位表</th></tr></thead><tbody>'
    //   let html_ = this.userList.reduce((h, x) => {
    //     h += `<tr>`
    //     x.forEach(j => {
    //       if (this.groupLeader.indexOf(j)) {
    //         h += `<td><span class='leader'>${j}</span<></td>`
    //       } else {
    //         h += `<td><span class='member'>${j}</span<></td>`
    //       }
    //     })
    //     h += `</tr>`
    //     return h
    //   }, '')
    //   html += html_ + `</tbody></table>`
    //   console.log('html', html);
    //   const el = document.getElementById('rTable')
    //   el.innerHTML = html
    // },
  },
}
</script>

<style lang='less' scoped>
.raodom-table {
  padding: 24px;
}
/deep/table {
  width: 100%;
  border-spacing: 0;
  border-bottom: 1px solid #d5d5d5;
  border-right: 1px solid #d5d5d5;
  thead {
    background: #eee;
    display: table-caption;
  }
}
/deep/thead tr {
  display: flex;
  th {
    flex: 1;
  }
}
/deep/tr {
  th,
  td {
    // line-height: 32px;
    text-align: center;
    border-top: 1px solid #d5d5d5;
    border-left: 1px solid #d5d5d5;
  }
  th {
    line-height: 32px;
  }
  td {
    padding: 12px;
  }
}
.call-btn {
  margin-bottom: 16px;
  float: right;
}
.leader {
  color: #1f1f1f;
  font-weight: 600;
  font-size: 13px;
}
.menber {
  color: #2a2a2a;
}
.active {
  background: #409eff;
  span {
    color: #fff;
  }
}
</style>