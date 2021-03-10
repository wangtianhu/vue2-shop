<template>
  <div class="categroy">
    <TopHead ref="headRef">
      <div class="head-wrapper">
        <div class="head-left">
          <img src="@/assets/back-icon.png" alt="" />
        </div>
        <div class="head-right">
          <img src="@/assets/search_icon.png" alt="" />
          <!-- <input type="text" v-model="serachText" /> -->
          <router-link
            :to="{
              name: 'product-list',
              params: { from: 'index' }
            }"
          >
            <p>全场50元起</p>
          </router-link>
        </div>
      </div>
    </TopHead>
    <div class="cate-list" :style="{ height: listHeight }">
      <div class="left">
        <ul>
          <template v-for="(item, index) in listData">
            <li
              :key="item.categoryId"
              :class="{ active: index === activeIndex }"
              @click="clickCategory(index)"
            >
              {{ item.categoryName }}
            </li>
          </template>
        </ul>
      </div>
      <div class="right" v-if="activeContent">
        <ul>
          <template v-for="(item, index) in activeContent.secondLevelCategoryVOS">
            <li :key="index">
              <div class="title">
                {{ item.categoryName }}
              </div>
              <div class="list">
                <template v-for="(list, index2) in item.thirdLevelCategoryVOS">
                  <div class="item" :key="index2">
                    <img src="//s.weituibao.com/1583591077131/%E5%88%86%E7%B1%BB.png" alt="" />
                    <p>{{ list.categoryName }}</p>
                  </div>
                </template>
              </div>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import TopHead from '@/component/common/top-head.vue';
import allData from '@/api/mock/categroy.json';
import { mapState } from 'vuex';
export default {
  components: {
    TopHead
  },
  data() {
    return {
      listHeight: 0,
      activeIndex: 0,
      serachText: '',
      listData: allData
    };
  },
  computed: {
    ...mapState(['footHeight']),
    activeContent() {
      if (this.listData) {
        return this.listData[this.activeIndex];
      }
      return null;
    }
  },
  mounted() {
    this.initHeight();
  },
  methods: {
    initHeight() {
      var clientH =
        window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      this.listHeight = clientH - this.$refs['headRef'].$el.clientHeight - this.footHeight + 'px';
    },
    clickCategory(index) {
      this.activeIndex !== index && (this.activeIndex = index);
    }
  }
};
</script>

<style lang="less" scoped>
.categroy {
  width: 100%;
  height: auto;
  .head-wrapper {
    display: flex;
    align-items: center;
    .head-left {
      width: 1rem;
      height: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 0.4rem;
        height: 0.4rem;
      }
    }
    .head-right {
      height: 100%;
      padding: 0.2rem 0;
      flex: 1;
      border-radius: 0.3rem;
      background: #f7f7f7;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        width: 0.4rem;
        height: 0.4rem;
        margin-left: 0.3rem;
        margin-right: 0.1rem;
      }
      input {
        flex: 1;
        height: 100%;
      }
    }
  }

  .cate-list {
    display: flex;
    justify-content: space-between;
    .left {
      min-width: 2rem;
      background: #f8f8f8;
      ul {
        li {
          font-size: 0.3rem;
          padding: 0 0.1rem;
          height: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #222222;
        }
        .active {
          color: #1baeae;
          background: #ffffff;
        }
      }
    }
    .right {
      flex: 1;
      overflow: scroll;
      ul {
        padding-bottom: 1rem;
        li {
          .title {
            padding: 0.3rem 0.1rem;
            margin: 0.3rem 0;
            width: 100%;
            font-size: 0.32rem;
          }
          .list {
            width: 100%;
            height: auto;
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            .item {
              width: 33.33%;
              display: flex;
              flex-direction: column;
              align-items: center;
              img {
                width: 0.8rem;
                height: 0.8rem;
              }
              p {
                font-size: 0.3rem;
                color: #222222;
                padding: 0.5rem 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
