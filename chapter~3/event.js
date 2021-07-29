const EventEmitter = require('event')

const myEvent = new EventEmitter();
myEvent.addListener('event', () => {
  console.log('이벤트 1')
})
myEvent.on('event2', () => {
  console.log; ('이벤트 2')
})
myEvent.on('event2', () => {
  console.log; ('이벤트 2 추가')
})
myEvent.once('event3', () => {
  console.log; ('이벤트 3')
})

