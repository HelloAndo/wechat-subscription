// import 'babel-polyfill'
import axios from 'axios'

axios.defaults.baseURL = '/api';

import { resolve } from 'path';

import { cloneDeep } from 'lodash'

import { topics } from 'response'
import { setTimeout } from 'timers';

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
      total: 10,
      topic: `第${data.page || 1}页-主题${Math.random()}`,
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
          content: '楼主[奸笑]说什[哈欠]么都是对的楼主说什么都是对的楼主说什[便便]么都是对的楼主说[微笑]分[右太极]什么都[星星]是对的楼主说什么都是对的楼主说[鲸鱼]什么都是对[O]的楼主说什么都是对的楼主说什么都是对的楼主说什么都[成交]是[灯泡][CD]对的'
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
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: cloneDeep(topics)
        })
      }, 1000)
    })
  }
}
