/**
 * 防抖函数
 * @param {*} fn
 * @param {*} ms
 */
 export const debounce = (fn, ms = 0) => {
  let timeOutId
  return function (...args) {
    clearTimeout(timeOutId)
    timeOutId = setTimeout(() => fn.apply(this, args), ms)
  }
}

/**
 * 节流函数
 */
export const throttle = (fn, wait) => {
  let updateTime = date.now()
  return (...args) => {
    const now = Date.now()
    if (now - updateTime > wait) {
      fn.apply(this, args)
      updateTime = now
    }
  }
}

/**
 * 深拷贝
 */
export const deepCopy = (data) => {
  let dataTmp
  if (data === null || !(typeof data === 'object')) {
    dataTmp = data
  } else {
    dataTmp = data.constructor.name === 'Array' ? [] : {}
    for (const key in data) {
      dataTmp[key] = deepCopy(data[key])
    }
  }
  return dataTmp
}

/**
 * 根据给定的条件找到指定集合元素
 */
export const findBy = (collectin = [], key, value) => {
  return collectin.find((v) => v[key] === value)
}
