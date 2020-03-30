const middleware = {}

middleware['route-compare'] = require('..\\middleware\\route-compare.js')
middleware['route-compare'] = middleware['route-compare'].default || middleware['route-compare']

export default middleware
