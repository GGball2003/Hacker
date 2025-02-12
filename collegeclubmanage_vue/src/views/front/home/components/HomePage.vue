<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">
      <router-link :to="getRouterLink(item)">
        <h3 class="carousel-title">{{ item }}</h3>
        <img :src="getImageUrl(item)" alt="CarouselImage"/>
      </router-link>
    </el-carousel-item>
  </el-carousel>
  <div class="card-container">
    <el-card class="box-card">
      <div class="text item"><a href="#">震惊长安第一拳</a></div>
      <div class="text item"><a href="#">S18的故事</a></div>
      <div class="text item"><a href="#">狂魔哥被封杀！</a></div>
      <div class="text item"><a href="#">一天几次，原因竟然是！！！</a></div>
      <div class="text item"><a href="#">天才少年一分钟跳绳250个夺冠</a></div>
      <div class="text item"><a href="#">时隔两年半，蛮好飞车突破车神！！！</a></div>
      <div class="text item"><a href="#">社团大会，现场有人想称王？！</a></div>
      <div class="text item"><a href="#">篮球社为热火打call！！！</a></div>
    </el-card>
    <el-card class="box-card">
      <div class="text item"><a href="#">震惊长安第一拳</a></div>
      <div class="text item"><a href="#">S18的故事</a></div>
      <div class="text item"><a href="#">狂魔哥被封杀！</a></div>
      <div class="text item"><a href="#">一天几次，原因竟然是！！！</a></div>
      <div class="text item"><a href="#">天才少年一分钟跳绳250个夺冠</a></div>
      <div class="text item"><a href="#">时隔两年半，蛮好飞车突破车神！！！</a></div>
      <div class="text item"><a href="#">社团大会，现场有人想称王？！</a></div>
      <div class="text item"><a href="#">篮球社为热火打call！！！</a></div>
    </el-card>
    <el-card class="box-card">
      <div class="text item"><a href="#">震惊长安第一拳</a></div>
      <div class="text item"><a href="#">S18的故事</a></div>
      <div class="text item"><a href="#">狂魔哥被封杀！</a></div>
      <div class="text item"><a href="#">一天几次，原因竟然是！！！</a></div>
      <div class="text item"><a href="#">天才少年一分钟跳绳250个夺冠</a></div>
      <div class="text item"><a href="#">时隔两年半，蛮好飞车突破车神！！！</a></div>
      <div class="text item"><a href="#">社团大会，现场有人想称王？！</a></div>
      <div class="text item"><a href="#">篮球社为热火打call！！！</a></div>
    </el-card>
  </div>
</template>

<script>
import { reactive } from 'vue'
import images01 from '@/assets/images/980.jpg'
export default {
  setup() {
    // 图片的URL数组
    const imageUrls = reactive([
      images01,
      images01,
      images01,
      images01,
      images01,
      images01,
    ]);

    // 获取对应图片的URL
    const getImageUrl = (item) => {
      return imageUrls[item - 1];
    };
    return {
      getImageUrl,
    };
  },
  methods: {
    getRouterLink(item) {
      // 根据需要返回相应的路由链接
      // 例如，返回 '/details/' + item 表示跳转到名为 'details' 的路由，并传递 item 作为参数
      return '/details/' + item;
    },
  },
};
</script>

<style scoped>
.carousel-title {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.text {
  font-size: 15px;
}

.item {
  padding: 18px 0;
}

.card-container a {
  color: #222;
}
.card-container a:hover {
  text-decoration: underline;
  color: #cc0000;
  /*font-weight: bold;*/
}
.box-card {
  width: 450px;
  background-color: #c7cee6;
}
.card-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 将容器分为三列，每列宽度相等 */
  grid-gap: 10px; /* 可根据需要调整卡片之间的间距 */
}
</style>
