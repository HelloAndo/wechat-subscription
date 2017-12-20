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
  post (url, data = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, data)
        .then(res => {resolve(res.data)})
        .catch(err => {reject(err)})
    })
  },

  getTopic (data) {
    // return this.post('/topic', data)
    return Promise.resolve({
      topic: '主题' + Math.random(),
      title: '我的大标题' + Math.random(),
      content: '楼主发表的话题正文楼主发表的话题正文楼主发表的话题正文',
      name: 'zht',
      avator: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
      identity: '坛主',
      rank: '99级',
      posts: 1001,
      comments: [
        {
            name: '三三',
            avator: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
            identity: '游客',
            rank: '三级',
            posts: 333,
          content: '楼主说什么都是对的楼主说什么都是对的楼主说什么都是对的楼主说什么都是对的楼主说什么都是对的楼主说什么都是对的楼主说什么都是对的楼主说什么都是对的楼主说什么都是对的'
        },
        {
            name: '三三',
            avator: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
            identity: '游客',
            rank: '三级',
            posts: 333,
          content: '楼主说什么都是对的楼主说什么都是对的楼主说什么都是对的楼主说什么都是对的楼主说什么都是对的楼主说什么都是对的楼主说什么都是对的楼主说什么都是对的楼主说什么都是对的'
        },
        {
            name: '三三',
            avator: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
            identity: '游客',
            rank: '三级',
            posts: 333,
          content: '楼主说什么都是对的楼主说什么都是对的楼主说什么都是对的楼主说什么都是对的楼主说什么都是对的楼主说什么都是对的楼主说什么都是对的楼主说什么都是对的楼主说什么都是对的'
        }
      ]
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
