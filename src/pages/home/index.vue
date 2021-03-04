<template>
  <div class="content">
    <MaskLay />
    <Test />
    <div class="top-swiper">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#66c6f2">
        <template v-for="(item, index) in swiperList">
          <van-swipe-item :key="index"><img :src="item.img" alt=""/></van-swipe-item>
        </template>
      </van-swipe>
    </div>
    <div class="icon-list">
      <ul>
        <template v-for="(item, index) in iconList">
          <li :key="index">
            <van-image lazy-load :src="item.img" />
            <!-- <img :src="item.img" alt="" /> -->
            <p>{{ item.name }}</p>
          </li>
        </template>
      </ul>
    </div>
    <div class="all-goods">
      <template v-for="(value, key) in goodsList">
        <div class="goods-item" :key="key" v-if="key !== 'carousels'">
          <div class="title">
            {{ key }}
          </div>
          <div class="goods-list">
            <ul>
              <template v-for="item in value">
                <li :key="item.goodsId">
                  <van-image :src="item.goodsCoverImg" />
                  <p class="name">{{ item.goodsName }}</p>
                  <p class="price">¥{{ item.sellingPrice }}</p>
                </li>
              </template>
            </ul>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import goodsData from '@/api/mock/home.json';
import MaskLay from '@/component/common/mask.vue';
export default {
  components: {
    MaskLay
  },
  data() {
    return {
      goodsList: goodsData.data,
      swiperList: [
        {
          img: require('./image/swiperImg1.jpg')
        },
        {
          img: require('./image/swiperImg2.jpg')
        },
        {
          img: require('./image/swiperImg1.jpg')
        },
        {
          img: require('./image/swiperImg2.jpg')
        }
      ],
      iconList: [
        {
          img: '//s.yezgea02.com/1604041127880/%E8%B6%85%E5%B8%82%402x.png',
          name: '蜂鸟超市'
        },
        {
          img: '//s.yezgea02.com/1604041127880/%E6%9C%8D%E9%A5%B0%402x.png',
          name: '蜂鸟超市'
        },
        {
          img: '//s.yezgea02.com/1604041127880/%E6%9C%8D%E9%A5%B0%402x.png',
          name: '蜂鸟超市'
        },
        {
          img: '//s.yezgea02.com/1604041127880/%E5%85%A8%E7%90%83%E8%B4%AD%402x.png',
          name: '蜂鸟超市'
        },
        {
          img: '//s.yezgea02.com/1604041127880/%E7%94%9F%E9%B2%9C%402x.png',
          name: '蜂鸟超市'
        },
        {
          img: '//s.yezgea02.com/1604041127880/%E5%88%B0%E5%AE%B6%402x.png',
          name: '蜂鸟超市'
        },
        {
          img: '//s.yezgea02.com/1604041127880/%E5%88%B0%E5%AE%B6%402x.png',
          name: '蜂鸟超市'
        },
        {
          img: '//s.yezgea02.com/1604041127880/%E5%85%85%E5%80%BC%402x.png',
          name: '蜂鸟超市'
        },
        {
          img: '//s.yezgea02.com/1604041127880/%E5%85%A8%E9%83%A8%402x.png',
          name: '蜂鸟超市'
        },
        {
          img: '//s.yezgea02.com/1604041127880/%E5%85%A8%E9%83%A8%402x.png',
          name: '蜂鸟超市'
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.top-swiper {
  width: 100vw;
}
.my-swipe {
  .van-swipe-item {
    img {
      width: 100vw;
      height: auto;
    }
  }
}
.icon-list {
  width: 100vw;
  overflow: scroll;
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 20%;
      height: auto;
      display: flex;
      padding: 0.1rem;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      .van-image {
        padding: 0.15rem;
        width: 0.96rem;
        height: 0.96rem;
        margin-bottom: 0.15rem;
      }
      p {
        font-size: 0.28rem;
        color: #2c3e50;
      }
    }
  }
}
.title {
  background: #f9f9f9;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  color: #1baeae;
  font-size: 0.4rem;
  font-weight: 500;
}
.all-goods {
  padding-bottom: 1rem;
}
.goods-list {
  width: 100%;
  height: auto;
  ul {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    li {
      box-sizing: border-box;
      padding: 0.1rem;
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-bottom: 1px solid #e9e9e9;
      &:nth-child(2n + 1) {
        border-right: 1px solid #e9e9e9;
      }
      img {
        width: 2.4rem;
        height: 2.4rem;
      }
      .name {
        width: 100%;
        text-align: center;
        font-size: 0.28rem;
        color: #2c3e50;
      }
      .price {
        width: 100%;
        text-align: center;
        font-size: 0.28rem;
        color: #1baeae;
      }
    }
  }
}
</style>
