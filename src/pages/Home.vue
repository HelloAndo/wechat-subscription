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
        <grid-item v-for="b in buildings" :key="b.id">
          <a href="javascript:" @click="gotoPlace(b)">
            <div class="grid-center text-center">
              <svg class="icon" aria-hidden="true" width="120" height="120">
                  <use :xlink:href="'#' + b.class"></use>
              </svg>
              <p>{{b.name}}</p>
            </div>
          </a>
        </grid-item>
      </grid>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
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
          id: 7,
          name: '步步高豪庭',
          class: 'icon-dalou1'
        },
        {
          id: 8,
          name: '步步高豪庭',
          class: 'icon-dalou1'
        },
        {
          id: 9,
          name: '步步高豪庭',
          class: 'icon-dalou1'
        },
        {
          id: 10,
          name: '步步高豪庭',
          class: 'icon-dalou1'
        },
        {
          id: 11,
          name: '步步高豪庭',
          class: 'icon-dalou1'
        },
        {
          id: 12,
          name: '步步高豪庭',
          class: 'icon-dalou1'
        },
        {
          id: 13,
          name: '步步高豪庭',
          class: 'icon-dalou1'
        },
        {
          id: 14,
          name: '步步高豪庭',
          class: 'icon-dalou1'
        }
      ]
    }
  },
  methods: {
    ...mapMutations([
      'RECORD_PAGE_SWITCH_ROUTE'
    ]),
    gotoPlace (item) {
      this.RECORD_PAGE_SWITCH_ROUTE({
        to: 'Place',
        from: 'Home'
      })
      this.$router.push({
        name: 'Place',
        params: {id: item.id}
      })
    }
  }
}
</script>

<style>

</style>

