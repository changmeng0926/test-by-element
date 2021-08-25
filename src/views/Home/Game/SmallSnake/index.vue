<template>
  <div class="small-snake">
    <div class="container">
      <div ref="house" class="snake-home"></div>
      <div class="explain">
        <el-button
          @click="pauseGame"
          :disabled="status===0||status===3"
          size="mini"
        >{{status===0||status===1?'暂停':'继续'}}</el-button>
        <el-button :disabled="status===1" @click="startGame" size="mini">开始游戏</el-button>
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
      food: null,
      snake: [],
      snakeBody: [],
      speed: 15,
      direction: 'right',
      status: 0,  //  0结束, 1开始, 2暂停, 3结束
      joinList: [],
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
      for (i; i <= 600 / 15; i++) {
        let width = '1px'
        let height = '1px'
        let background = '#d5d5d5'
        let top = i * 15 + 'px'
        let left = i * 15 + 'px'
        let cloStyle = `height:${height};top:${top};background:${background};width:600px`
        let rowStyle = `width:${width};left:${left};background:${background};height:600px`
        html += `<div class="line" style=${cloStyle}></div><div class="line" style=${rowStyle}></div>`
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
            this.gameOver()
            return
          }
          style.left = parseInt(style.left) + unit + 'px'
          break;
        case 'top':
          if (parseInt(style.top) - unit < 0) {
            this.gameOver()
            return
          }
          style.top = parseInt(style.top) - unit + 'px'
          break;
        case 'left':
          if (parseInt(style.left) - unit < 0) {
            this.gameOver()
            return
          }
          style.left = parseInt(style.left) - unit + 'px'
          break;
        case 'bottom':
          if (parseInt(style.top) + unit >= offsetHeight) {
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
        this.joinList.push(this.food)
        this.createFood(15, 15, this.$refs.house, this.randomColor())
      }
    },
    // 吃的过程
    eatting () {
      const { left, top } = this.snakeBody[this.snakeBody.length - 1].style
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
      if (this.status === 1) {
        this.$alert('确定要重新开始游戏吗', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${action}`
            });
          }
        });
      }
      window.onkeydown = e => {
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
      }, 200)
    },
    // Pause
    pauseGame () {
      clearInterval(this.timeId)
      this.timeId = null
      this.status = 0
    },
    gameOver () {
      this.$message.warning('game over')
      clearInterval(this.timeId)
      this.timeId = null
      this.status = 3
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
  // border: 1px solid #d5d5d5;
  display: flex;
  min-height: 100%;
}
.explain {
  flex: 1;
  // border-right: 1px solid #d5d5d5;
  padding: 0 16px;
}
.snake-home {
  height: 600px;
  width: 600px;
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
</style>