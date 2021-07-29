console.log("require가 최상단에 있지 않아도 됩니다.")
module.exports = '저를 찾아보세요'
require('./var')

console.log('require.cache')
console.log(require.cache) //속성값으로 각 파일의 모듈 객체가 들어감

console.log('require.main')
console.log(require.main)
console.log(require.main === module)

console.log('filename')
console.log(require.main.filename)