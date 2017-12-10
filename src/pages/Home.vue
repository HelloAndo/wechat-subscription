<template>
  <div>
    <x-header :title="city + '业主权益保障'"
      :left-options="{showBack: false}"></x-header>
    <search ref="search" 
      position="relative"
      placeholder="搜索板块或主题"
      :auto-fixed="false"></search>
    <div>
      <grid :cols="2">
        <grid-item v-for="b in buildings" :key="b.class">
          <router-link :to="{name: 'Place', params: {id: b.id}}">
            <div class="grid-center text-center">
              <svg class="icon" aria-hidden="true" width="120" height="120">
                  <use :xlink:href="'#' + b.class"></use>
              </svg>
              <p>{{b.name}}</p>
            </div>
          </router-link>
        </grid-item>
      </grid>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        city: '广州',
        buildings: [
          {
            id: 1,
            name: '东方豪园',
            class: 'icon-fangchan-'
          },
          {
            id: 2,
            name: '中环广场',
            class: 'icon-cctv-headquarters'
          },
          {
            id: 3,
            name: '东方名城',
            class: 'icon-dalou'
          },
          {
            id: 4,
            name: '时代广场',
            class: 'icon-loupan'
          },
          {
            id: 5,
            name: '碧桂园',
            class: 'icon-xiezilou'
          },
          {
            id: 6,
            name: '步步高豪庭',
            class: 'icon-dalou1'
          },
          {
            id: 6,
            name: '步步高豪庭',
            class: 'icon-dalou1'
          },
          {
            id: 6,
            name: '步步高豪庭',
            class: 'icon-dalou1'
          },
          {
            id: 6,
            name: '步步高豪庭',
            class: 'icon-dalou1'
          },
          {
            id: 6,
            name: '步步高豪庭',
            class: 'icon-dalou1'
          },
          {
            id: 6,
            name: '步步高豪庭',
            class: 'icon-dalou1'
          },
          {
            id: 6,
            name: '步步高豪庭',
            class: 'icon-dalou1'
          },
          {
            id: 6,
            name: '步步高豪庭',
            class: 'icon-dalou1'
          },
          {
            id: 6,
            name: '步步高豪庭',
            class: 'icon-dalou1'
          }
        ]
      }
    }
  }
</script>

<style>

</style>

