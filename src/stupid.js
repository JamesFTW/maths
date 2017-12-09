let cache = {}

let is = false

// for(let i = 0 - Math.pow(2,31) + 1; i < Math.pow(2,31) - 1; i++){
//   cache[i] = is
//   is = !is
// }

function isEven(a){
  if(cache[a] != undefined){
    return cache[a]
  }else{
    throw new Error("Number isn't valid!")
  }
}

console.log(!is)
