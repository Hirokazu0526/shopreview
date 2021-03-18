<template>
  <div>
    <div class="content-title">お気に入りのお店</div>
    <ul class="shop-list">
      <li v-for="shop in shops" :key="shop.index">
        <Shop
          :image="shop.image"
          :shop-name="shop.shopName"
          :score="shop.score"
          :description="shop.description"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

// 型を定義する
export interface Shop {
  image?: string
  shopName?: string
  score?: number
  description?: string
}

export default Vue.extend({
  data() {
    return {
      shops: [] as any,
    }
  },
  created() {
    const shop: Shop = {
      image: '/shop.jpeg',
      shopName: 'ナクストコーヒー',
      score: 3,
      description: '人気沸騰中',
    }

    for (let i = 0; i < 9; i++) {
      this.shops.push(shop)
    }
  },
})
</script>

<style>
ul,
li {
  list-style: none;
}
.content-title {
  font-size: 24px;
  padding: 12px;
}
.shop-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
