const axios = require('axios')

const baseURL = 'http://localhost:5000'

const request = (method, url, data) =>
  axios({ method, baseURL, url, data })
    .then(res => res && res.data)
    .catch(err => { throw Error(err) })

module.exports = {
  get: (url) => request('get', url),
  post: (url, data) => request('post', url, data),
  patch: (url, data) => request('patch', url, data),
  delete: (url) => request('delete', url)
    .then(_ => ({ message: 'Item has been deleted successfully' }))
}
