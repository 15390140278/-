// 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回
// function rebuild(font, mid) {
//   if (font.length == 0 || mid.length == 0) {
//     return null
//   }
//   //找到根节点
//   let root = font[0]
//   // 在中序中确定左右子树
//   let index = mid.indexOf(root)
//   let left = mid.slice(0, index)
//   let right = mid.slice(index + 1)
//   return {
//     root,
//     left: rebuild(font.slice(1, index + 1), left),
//     right: rebuild(font.slice(index), right)
//   }
// }

// function rebuild(font, mid) {
//   if (font.length == 0 || mid.length == 0) {
//     return null
//   }

//   let root = font[0]
//   let index = mid.indexOf(root)
//   let left = mid.slice(0, index)
//   let right = mid.slice(index + 1)

//   return {
//     root,
//     left: rebuild(font.slice(1, index + 1), left),
//     right: rebuild(font.slice(index + 1), right)
//   }
// }

// 已知中序和后序
function rebuild(last, mid) {
  if (last.length == 0 || mid.length == 0) {
    return null
  }

  let root = last[last.length - 1]
  let index = mid.indexOf(root)
  let left = mid.slice(0, index)
  let right = mid.slice(index + 1)

  return {
    root,
    left: rebuild(last.slice(0, index), left),
    right: rebuild(last.slice(index, last.length - 1), right)
  }
}

// console.log(rebuild(['G', 'D', 'A', 'F', 'E', 'M', 'H', 'Z'], ['A', 'D', 'E', 'F', 'G', 'H', 'M', 'Z']))

console.log(rebuild(['a', 'e', 'f', 'd', 'h', 'z', 'm', 'g'], ['a', 'd', 'e', 'f', 'g', 'h', 'm', 'z']))
