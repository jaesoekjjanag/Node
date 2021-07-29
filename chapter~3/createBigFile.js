const fs = require('fs')
const file = fs.createWriteStream('./big.txt')

for (let i = 0; i <= 1000000; i++) {
  file.write('안녕하세요 엄청나게 큰 파일을 만들어보겠습니다.\n');
}

file.end();
//end 메서드로 끝났다고 알림
//finish 이벤트 발생