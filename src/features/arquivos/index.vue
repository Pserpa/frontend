
<script>
  import { mapState } from 'vuex'
  export default {
    name: 'arquivos',
    async mounted () {
      this.fetch()
    },
    computed: {
      ...mapState('categories', ['list']),
      hasCategories () {
        return this.list.length > 0
      }
    }
  }
</script>

<template>
  <div>
    <div class="row" v-show="hasCategories">
      <div
        class="col-sm-6 col-md-4"
        v-for="category in list"
        :key="category.id">
        <div class="thumbnail">
          <div class="caption">
            <h3>{{ category.name }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
