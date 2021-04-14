/*
 * @Author: shawnxiao
 * @Date: 2021-04-12 22:53:26
 * @LastEditTime: 2021-04-13 10:11:37
 * @FilePath: /webpack5-ts-pages/mock/index.js
 */
const { handleMockArray } = require('./utils')
const mockData = []
const mockArray = handleMockArray()
mockArray.forEach((item) => {
  const obj = require(item)
  mockData.push(...obj)
})
function Mock(app) {
  mockData.forEach(item => {
    app[item['type']](item['url'], (req, res) => {
      res.json(item['response'])
    })
  })
  // app.get('/xxxx/yyy', (req, res) => {
  //   console.log('getPower111')
  //   res.json('getPower')
  // })
  // app.post('/reconfig', (req, res) => {
  //   console.log('reConfig111')
  //   res.json('reConfig')
  // })
}

module.exports = Mock
