# arrayAndString

### join

数组转字符串,可以传入连接符

```
let arr = [1, 2, 3]
arr.join('-') // 1-2-3
arr.join('') // 123
```

### concat

拼接,不会该改变原数组,返回新的数组

```
let arr = [1, 2, 3]
arr.concat(4,5); // [1, 2, 3, 4, 5]
arr.concat([4, 5]); // [1, 2, 3, 4, 5]
arr.concat(4,[5, [6, 7]]); // [1, 2, 3, 4, 5, [6, 7]]
```

### slice(start, end)

截取,不会改变原数组,返回新的数组, 第一个参数为开始截取位置,第二个为结束位置,截取含头不含尾

```
let arr = [1, 2, 3, 4]
arr.slice(1, 3) // [2, 3]
省略第二个参数表示从头截到尾
arr.slice(1) // [2, 3, 4]
支持传入负数,表示截取倒数几个
arr.slice(-2) // [3, 4]
```

### splice

删除/插入/替换,直接修改原数组,返回值为被删除元素  
`splice(start, count, value1, value2...)`  
`start 为删除开始位置`  
`count 为删除数量,后面参数为要替换或插入的元素`  

**删除** start 位置开始,包含 start

```
let arr = [1, 2, 3, 4, 5]
arr.splice(1,2) // [2, 3] arr = [1, 4, 5]
arr.splice(3,1) // [4] arr = [1, 2, 3, 5]
支持负数,代表删除倒数几个
arr.splice(-2) // [4, 5] arr = [1, 2, 3]
```

**插入** count 为 0 时,表示插入元素,插入的元素在 start 之前

```
arr.splice(3,0,11,12,13) // arr = [1, 2, 3, 11, 12, 13, 4, 5]
```

**替换** start 为替换元素开始位置,count 为替换元素个数,后面参数为替换替换元素

```
arr.splice(1, 2, 6, 7, 8) // arr = [1, 6, 7, 8, 4, 5]
```

### reverse

翻转数组,直接修改原数组, 默认按照数组元素第一位的 ASCII 码从小到大排列

```
let arr = [1, 2, 3, 4, 5]
arr.reverse() // [5, 4, 3, 2, 1]
```

### sort

数组排序,直接修改原数组  

```
let arr = [1, 3, 2, 4, 5]
arr.reverse() // [5, 4, 3, 2, 1]
arr.sort(function(a,b) {return a-b;}); 升序(只限数组中是数字或者数字字符串)。
arr.sort(function(a,b) {return b-a;}); 降序(只限数组中是数字或者数字字符串)。
arr.sort(function(){ return Math.random()>.5 ? 1 : -1 })随机打乱数组(数组中可以是任何数据类型)
```

### indexOf

在数组中查找元素, 并返回找到的第一个元素的位置, 未找到则返回-1

```
let arr = [1, 3, 2, 4, 5]
arr.indexOf(3) // 1
arr.indexOf(7) // -1
```

### map

对数组进行遍历,并返回一个新数组

```
map((item,index,arr) => {})
item 为遍历的每一项(必传),index 为索引(非必传),arr 为原数组(非必传)
let arr = [1, 2, 3, 4, 5]
let newArr = arr.map(i=> i+1) // [2, 3, 4, 5, 6]
```

### unshift

开头入栈,在数组的最开头插入元素,直接修改原数组,返回修改后数组的 length arr.unshift(value1, value2...)

### shift

开头出栈,从开头删除一项,直接修改原数组,返回删除项

### push

结尾入栈,修改原数组,返回修改后数组的 length arr.push(value1, value2...)

### pop

结尾出栈,从末尾删除一项,直接修改原数组,返回删除项

### every

用于检测数组所有元素是否都符合指定条件,全部符合返回 true,有一项不符合返回 false,不会对空数组进行检测,不会改变原数组

```
array.every(function(currentValue,index,arr), thisValue)
currentValue 为当前项
index 为索引
arr 为原数组
thisValue 对象作为该执行回调时使用,递给函数,用作 "this" 的值
[1,2,3,4,5].every(i => i > 0) // true
[1,2,3,4,5].every(i => i > 3) // false
```

### some

用于检测数组中是否有元素满足指定条件,有返回 true,没有返回 false

```
array.some(function(currentValue,index,arr), thisValue)
[1,2,3,4,5].some(i => i > 3) // true
[1,2,3,4,5].some(i => i > 10) // false
```

### filter

过滤,返回一个新数组

```
array.filter(function(currentValue,index,arr), thisValue)
[1,2,3,4,5].filter(i => i > 3) // [4, 5]
```

### reduce

`array.reduce(function(total, currentValue, currentIndex, arr), initialValue)`  
`total 必传,初始值, 或者计算结束后的返回值`  
`currentValue 必传, 当前元素 ` 
`currentIndex 可选, 当前元素索引`  
`arr 可选, 当前元素所属的数组对象`  
`initialValue 可选, 传递给函数的初始值 ` 

**场景 1** `累加`

```
[1,2,3,4,5].reduce((t, i)=> t + i) // 15
```

**场景 2**`数组处理`

```
let persons = [
  {name: 'jim', age: 19},
  {name: 'Alen', age: 17},
  {name: 'Lily', age: 20},
]
let names = persons.reduce((names, person) => {
  if(person.age>18) {
    names.push(person.name)
  }
  return names
}, []) //  ["jim", "Lily"]
```

**场景 3**`将数组转化为对象`

```
let persons = [
  {name: 'jim', id: 1},
  {name: 'Alen', id: 2},
  {name: 'Lily', id: 3},
]
let obj = persons.reduce((acc, current) => {
  return {...acc, [current.id]: current}
}, {})
{
  1: {name: 'jim', id: 1},
  2: {name: 'Alen', id: 2},
  3: {name: 'Lily', id: 3},
}

```

**场景 4**`将二维数组扁平化为一维数组`

```
let arr = [['大', '家', '好'], ['我', '是', '渣', '渣', '辉']]
let newArray = arr.reduce((acc, current) => {
return acc.concat(current)
}, [])  // ["大", "家", "好", "我", "是", "渣", "渣", "辉"]
```

**场景 5**`在一次遍历中进行多次计算`

```
const arr = [0.3, 1.2, 3.4, 0.2, 3.2, 5.5, 0.4]
const initMinMax = {
    minReading: Number.MAX_VALUE,
    maxReading: Number.MIN_VALUE,
}
const minMax = readings.reduce((acc, current) => {
    return {
        minReading: Math.min(acc.minReading, current),
        maxReading: Math.max(acc.maxReading, current)
    }
}, initMinMax)  //  {minReading: 0.2, maxReading: 5.5}
```

**场景 6**`获取数组中的最大值`

```
let arr = [22, 19, 50, 7, 15];
let max = arr.reduce((x, y) => {
  return x > y ? x : y;
}); // 50
```

### reduceRight

reduceRight() 的工作原理和 reduce() 一样, 不同的是它按照数组索引从高到低（从右到左）处理数组.

```
[2, 10, 60].reduceRight(function (x, y) {
  return x/y;
}); //  3: (60/10)/2
```

### find

找出第一个符合条件的数组成员,没找到返回 undefined

```
[1,2,3,4,5].find(i => i > 0) // 1
[1,2,3,4,5].find(i => i > 10) // undefined
```

### findIndex

找出第一个符合条件的数组成员的位置,没找到返回 -1

### includes

表示某个值是否在数组里，includes() 不接受函数参数
[1,2,3,4,5].includes(1) // true

### toLocaleString

将数组转换为本地化字符串. 它首先调用所有数组元素的 toLocaleString() 方法, 然后使用地区特定的分隔字符将结果字符串连接起来
[1,2,3,4,5]toLocaleString() // "1,2,3,4,5"
