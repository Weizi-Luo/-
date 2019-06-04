
const strArr = ['a','b','c','d','e','f','f','g','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// Math.random()

const random = function(n) {
    let str = ''
    for(let i = 0; i < n; i++) {
        let index = Math.floor( Math.random() * 26 )
        str += strArr[index]
    }

    return str
}
export {random}