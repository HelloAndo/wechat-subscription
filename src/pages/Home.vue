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
import { BUILDINGS } from 'data'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      city: '广州',
      buildings: BUILDINGS
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
        params: {name: item.en}
      })
    }
  }
}
</script>

<style>

</style>

