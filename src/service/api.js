// import 'babel-polyfill'
import axios from 'axios'

axios.defaults.baseURL = '/api';

import { resolve } from 'path';
export default {
  get (url) {
    return new Promise((resolve, reject) => {
      axios.get(url)
        .then(res => {resolve(res.data)})
        .catch(err => {reject(err)})
    })
  },
  getTopics () {
    return this.get('/topics')
    // return Promise.resolve([
    //   {
    //     author: '三三',
    //     release_time: '2015-03-03',
    //     title: '我是三三',
    //     content: '我是三三我怕谁',
    //     comments: [
    //       {
    //         replier: '欢欢',
    //         content: '呵呵'
    //       }
    //     ]
    //   },
    //   {
    //     author: '三三',
    //     release_time: '2015-03-03',
    //     title: '我是三三',
    //     content: '我是三三我怕谁',
    //     comments: [
    //       {
    //         replier: '欢欢',
    //         content: '呵呵'
    //       }
    //     ]
    //   }
    // ])
  }
}
