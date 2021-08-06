<template>
  <div class="original-table" id="oTable"></div>
</template>

<script>
import { relationList } from './mock.js'
export default {
  name: 'OriginalTable',
  components: {},
  props: {},
  data () {
    return {
      list: [],
      headList: ['部门', '应用', '层', '成员']
    }
  },
  watch: {},
  computed: {},
  mounted () {
    this.drawTable()
  },
  methods: {
    initData () {
      console.log('relationList', relationList);
      relationList.forEach(({ department, users, departmentId, children }) => {
        children.forEach(app => {
          app.children.forEach(tier => {
            tier.children.forEach(member => {
              this.list.push({
                departs: { department, departmentId, users },
                apps: { application: app.application, applicationId: app.applicationId, users: app.users },
                tiers: { tierManagement: tier.tierManagement, tierManagementId: tier.tierManagementId, users: tier.users },
                members: { ordinaryMember: member.ordinaryMember, ordinaryMemberId: member.ordinaryMemberId, users: member.users },
              })
            })
          })
        })
      })
    },
    setTD (item, key, num) {
      if (key === 'departs') {
        return `<td name="col_1" rowSpan="${num}" ><div class="item-title">${item['departs'].department}</div>${this.usersInit(item['departs'].users)}</td>`
      } else if (key === 'apps') {
        return `<td name="col_1" rowSpan="${num}" ><div class="item-title">${item['apps'].application}</div>${this.usersInit(item['apps'].users)}</td>`
      } else if (key === 'tiers') {
        return `<td name="col_1" rowSpan="${num}" ><div class="item-title">${item['tiers'].tierManagement}</div>${this.usersInit(item['tiers'].users)}</td>`
      } else if (key === 'members') {
        return `<td name="col_1" rowSpan="1" >${this.usersInit(item['members'].users)}</td>`
      }
    },
    usersInit (users) {
      let str = ''
      users.forEach(i => {
        str += `<div class="user-item"><span class="user-name">${i.name}</span><span class="user-code">(${i.code})</span></div>`
      })
      return str
    },
    drawTable () {
      this.initData()
      let dc = 1
      let ac = 1
      let tc = 1
      let ht = ''
      // 倒序循环,每次取当前条和上一条进行比较,根据条件判断进行合并和重置行数
      for (let i = this.list.length - 1; i > 0; i--) {
        let d = this.list[i]
        let p = this.list[i - 1]
        let col_1 = d.departs.departmentId === p.departs.departmentId ? '' : this.setTD(d, 'departs', dc)
        let col_2 = d.apps.applicationId === p.apps.applicationId ? '' : this.setTD(d, 'apps', ac)
        let col_3 = d.tiers.tierManagementId === p.tiers.tierManagementId ? '' : this.setTD(d, 'tiers', tc)
        ht = `<tr>${col_1}${col_2}${col_3}${this.setTD(d, 'members')}</tr>${ht}`
        if (d.departs.departmentId === p.departs.departmentId) {
          dc += 1
          if (d.apps.applicationId === p.apps.applicationId) {
            ac += 1
            tc = d.tiers.tierManagementId === p.tiers.tierManagementId ? tc + 1 : 1
          } else {
            ac = 1
            tc = 1
          }
        } else {
          dc = 1
          ac = 1
          tc = 1
        }
      }
      // 由于循环没有第一条，所以需要单独加上
      const fd = this.list[0]
      ht = `<tr>${this.setTD(fd, 'departs', dc)}${this.setTD(fd, 'apps', ac)}${this.setTD(fd, 'tiers', tc)}${this.setTD(fd, 'members')}</tr>${ht}`
      let head = `<table><thead><tr>`
      this.headList.forEach(i => {
        head += `<th>${i}</th>`
      })
      head += `</tr></thead>`
      ht = `${head}<tbody>${ht}</tbody></table>`
      const el = document.getElementById('oTable')
      el.innerHTML = ht
    },
  },
}
</script>

<style lang='less' scoped>
.original-table {
  padding: 24px;
  min-height: 100%;
  /deep/table {
    width: 100%;
    border-spacing: 0;
    border-bottom: 1px solid #d5d5d5;
    border-right: 1px solid #d5d5d5;
    thead {
      background: #eee;
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
}
/deep/.item-title {
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
}
/deep/.user-item {
  line-height: 18px;
}
</style>