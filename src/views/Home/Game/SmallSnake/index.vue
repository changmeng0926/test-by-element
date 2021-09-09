<template>
  <div class="small-snake">
    <div class="container">
      <div ref="house" class="snake-home"></div>
      <div class="explain">
        <div class="scoreboard">当前分数{{score}}</div>
        <div class="btn">
          <el-button
            class="pause-game"
            @click="pauseGame"
            :disabled="status===0||status===3"
            type="primary"
          >{{(status===0||status===1||status===3)?'暂停':'继续'}}</el-button>
          <el-button
            class="start-game"
            :disabled="status===1||status===2"
            @click="startGame"
            type="success"
          >开始游戏</el-button>
          <el-button
            class="game-over"
            :disabled="status===0||status===3"
            @click="gameOver"
            type="warning"
          >结束游戏</el-button>
        </div>
        <!-- <div class="introduction">
          <div class="up">
            <i class="iconfont icon-shangjiantou"></i>
          </div>
          <div class="left-right">
            <div class="left">
              <i class="iconfont icon-zuo-jiantou"></i>
            </div>
            <div class="right">
              <i class="iconfont icon-youjiantou"></i>
            </div>
          </div>
          <div class="down">
            <i class="iconfont icon-xiajiantou"></i>
          </div>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SmallSnake',
  components: {},
  props: {},
  data () {
    return {
      score: 0, //  分数
      unit: 1,  //  每个食物的分值
      speed: 200, //  速度, 单位时间
      food: null, //  食物
      snake: [],  //  初始蛇数据
      snakeBody: [],  //  蛇dom
      direction: 'right', //  移动方向
      status: 0,  //  0初始状态, 1开始, 2暂停, 3结束
      joinList: [], //  用来储存吃掉的食物,尾巴通过时将会被消化掉
      timeId: null,
    }
  },
  watch: {},
  computed: {},
  mounted () {
    this.createGridlines()
    this.randomFood()
    this.init()
    this.createSnake(15, 15, this.$refs.house)
    // this.startGame()
  },
  methods: {

    init () {
      this.snake = [
        { x: 3, y: 2, background: 'red' },
        { x: 2, y: 2, background: 'gold' },
        { x: 1, y: 2, background: 'deepSkyBlue' },
      ]
    },
    randomFood () {
      this.createFood(15, 15, this.$refs.house, this.randomColor())
    },
    // Creating grid lines
    createGridlines () {
      let el = this.$refs.house
      let i = 0
      let html = ''
      for (i; i <= 900 / 15; i++) {
        let width = '1px'
        let height = '1px'
        let background = '#d5d5d5'
        let top = i * 15 + 'px'
        let left = i * 15 + 'px'
        if (i <= 600 / 15) {
          let cloStyle = `height:${height};top:${top};background:${background};width:900px`
          html += `<div class="line 1" style=${cloStyle}></div>`
        }
        let rowStyle = `width:${width};left:${left};background:${background};height:600px`
        html += `<div class="line 2" style=${rowStyle}></div>`
      }
      el.innerHTML = html
    },
    // Creating food Object
    createFood (width, height, map, bgc, left, top) {
      let div = document.createElement('div')
      div.status = 0
      div.style.width = width + 'px'
      div.style.height = height + 'px'
      div.style.position = 'absolute'
      // Random location
      const { offsetWidth, offsetHeight } = map
      let rowNum = offsetWidth / width
      let colNum = offsetHeight / height
      let x = Math.floor(Math.random() * rowNum)
      let y = Math.floor(Math.random() * colNum)
      div.style.left = left || x * width + 'px'
      div.style.top = top || y * height + 'px'
      div.style.background = bgc;
      div.style.zIndex = 1;
      map.appendChild(div)
      this.food = div
    },
    clearFood () {
      this.$refs.house.removeChild(this.food)
      this.food = null
    },
    // Creating snake Object
    createSnake (width, height, map) {
      this.snakeBody = this.snake.reduce((e, i) => {
        const { x, y, background } = i
        let div = document.createElement('div')
        div.style.width = width + 'px'
        div.style.height = height + 'px'
        div.style.position = 'absolute'
        div.style.background = background
        div.style.left = x * width + 'px'
        div.style.top = y * height + 'px'
        map.appendChild(div)
        e.push(div)
        return e
      }, [])
    },
    // Snake move
    snakeMove (unit) {
      // 倒序遍历蛇身,蛇头不用遍历,,后面一节向前一节
      for (var i = this.snakeBody.length - 1; i > 0; i--) {
        this.snakeBody[i].style.left = this.snakeBody[i - 1].style.left
        this.snakeBody[i].style.top = this.snakeBody[i - 1].style.top
      }
      const { offsetWidth, offsetHeight } = this.$refs.house
      const style = this.snakeBody[0].style
      switch (this.direction) {
        case 'right':
          if (parseInt(style.left) + unit === offsetWidth) {
            this.$message.warning('game over')
            this.gameOver()
            return
          }
          style.left = parseInt(style.left) + unit + 'px'
          break;
        case 'top':
          if (parseInt(style.top) - unit < 0) {
            this.$message.warning('game over')
            this.gameOver()
            return
          }
          style.top = parseInt(style.top) - unit + 'px'
          break;
        case 'left':
          if (parseInt(style.left) - unit < 0) {
            this.$message.warning('game over')
            this.gameOver()
            return
          }
          style.left = parseInt(style.left) - unit + 'px'
          break;
        case 'bottom':
          if (parseInt(style.top) + unit >= offsetHeight) {
            this.$message.warning('game over')
            this.gameOver()
            return
          }
          style.top = parseInt(style.top) + unit + 'px'
          break;
      }
      // 蛇头和食物坐标相同判定为开始吃食物
      // 尾巴离开食物时食物消化完成,将食物添加到蛇身上
      // 蛇开始吃食物时生成新的食物
      this.snakeEatting()
      this.eatting()
    },
    // Snake remove
    snakeRemove () {
      this.snakeBody.forEach(i => {
        this.$refs.house.removeChild(i)
      })
    },
    // Snake eatting
    snakeEatting () {
      const { left, top } = this.snakeBody[0].style
      if (this.food.style.left === left && this.food.style.top === top) {
        this.score += this.unit
        this.joinList.push(this.food)
        this.createFood(15, 15, this.$refs.house, this.randomColor())
        // 根据长度来控制速度变化
        const length = this.snakeBody.length
        if (length === 8 || length === 14 || length === 20 || length === 25 || length === 30) {
          this.speed -= 20
          this.unit += 1
          clearInterval(this.timeId)
          this.timeId = setInterval(() => {
            this.snakeMove(15)
          }, this.speed)
        } else if (length === 35 || length === 40 || length === 45 || length === 50 || length === 55) {
          this.unit += 1
          this.speed -= 10
          clearInterval(this.timeId)
          this.timeId = setInterval(() => {
            this.snakeMove(15)
          }, this.speed)
        }
      }
    },
    // 吃的过程
    eatting () {
      const length = this.snakeBody.length
      const { left, top } = this.snakeBody[length - 1].style
      this.joinList.forEach(i => {
        if (i.style.left === left && i.style.top === top) {
          i.status = 1
        } else {
          if (i.status === 1) {
            this.snakeBody.push(i)
            this.joinList.splice(0, 1)
          }
        }
      })
    },
    // Start game
    startGame () {
      if (this.status === 3) {
        this.snakeRemove()
        this.clearFood()
        this.randomFood()
        this.init()
        this.direction = 'right'
        this.createSnake(15, 15, this.$refs.house)
      }
      window.onkeydown = e => {
        if (this.status === 2) return
        if (e.keyCode !== 37 && e.keyCode !== 38 && e.keyCode !== 39 && e.keyCode !== 40) return
        switch (e.keyCode) {
          case 37:
            if (this.direction !== 'right') {
              this.direction = 'left'
            }
            break;
          case 38:
            if (this.direction !== 'bottom') {
              this.direction = 'top'
            }
            break;
          case 39:
            if (this.direction !== 'left') {
              this.direction = 'right'
            }
            break;
          case 40:
            if (this.direction !== 'top') {
              this.direction = 'bottom'
            }
            break;
        }
      }
      this.status = 1
      this.timeId = setInterval(() => {
        this.snakeMove(15)
      }, this.speed)
    },
    // Pause game
    pauseGame () {
      if (this.status === 2) {
        this.startGame()
        this.status = 1
      } else {
        clearInterval(this.timeId)
        this.timeId = null
        this.status = 2
      }
    },
    gameOver () {
      clearInterval(this.timeId)
      this.timeId = null
      this.status = 3
      this.speed = 200
      this.unit = 1
    },
    // Random color
    randomColor () {
      const r = this.random()
      const g = this.random()
      const b = this.random()
      return `rgb(${r},${g},${b})`
    },
    random () {
      return Math.floor(Math.random() * 256)
    },
  },
}
</script>

<style lang='less' scoped>
.small-snake {
  padding: 17px 32px;
  min-height: 100%;
}
.container {
  display: flex;
  min-height: 100%;
}
.explain {
  flex: 1;
  padding: 0 16px;
}
.snake-home {
  height: 600px;
  width: 900px;
  position: relative;
}
.vertical-line,
.across-line {
  position: absolute;
  background: #d5d5d5;
}
.vertical-line {
  height: 100%;
  width: 1px;
}
.across-line {
  height: 1px;
  width: 100%;
}
/deep/.line {
  position: absolute;
}
.btn {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.game-over,
.pause-game,
.start-game {
  width: 60%;
  margin: 0;
}
.el-button & + .el-button {
  margin-top: 16px;
}
.scoreboard {
  line-height: 48px;
  font-size: 24px;
  text-align: center;
}
</style>