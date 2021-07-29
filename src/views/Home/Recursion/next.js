
export const initData = function(treeList) {
  let list = []
  treeList.forEach((i,index)=>{
    filterChild(i, list)
  })
  return list
}
const filterChild = function(i,list) {
  if (i.child) {
    const n = i.child[0]
    list.push(n.id)
    if(n.child) filterChild(n, list)
  }
}