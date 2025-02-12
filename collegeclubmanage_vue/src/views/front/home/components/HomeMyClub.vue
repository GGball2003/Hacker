<template>
  <div class="container">
    <div class="header">
      <div class="search-bar">
        <input type="text" v-model="searchQuery" placeholder="搜索社团名称">
      </div>
      <router-link to="/add-club" class="add-club-button">添加社团</router-link>
    </div>

    <div class="clubs-container">
      <div v-for="club in filteredClubs" :key="club.id" class="club-item">
        <router-link :to="`/club/${club.id}`" class="club-link">
          <div class="image-container" @mouseover="showQuitButton = true" @mouseleave="showQuitButton = null">
            <img :src="club.image" alt="社团图片" class="club-image">
            <button v-if="showQuitButton" class="quit-button" @click="quitClub(club.id)">退出社团</button>
          </div>
          <h3 class="club-name">{{ club.name }}</h3>
          <p class="club-leader">负责人：{{ club.leader }}</p>
          <p class="club-members">社团人数：{{ club.members }}</p>
        </router-link>
      </div>
    </div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
    <div class="scroll-to-top" @click="scrollToTop" v-show="shouldShowScrollTopButton">
      <i class="fas fa-arrow-up"></i>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import image01 from '@/assets/images/R-C.jfif';
import image02 from '@/assets/images/skill.jpg';
export default {
  name: 'ClubsPage',
  setup() {
    const showQuitButton = ref(null);
    const quitClub = (clubId) => {
      // 执行退出社团操作
      // 在这里编写您退出社团的逻辑代码
      console.log(`退出社团 ${clubId}`);
    };
    const clubs = ref([
      {
        id: 1,
        name: '社团1',
        leader: '负责人1',
        members: 10,
        image: image01
      },
      {
        id: 2,
        name: '社团2',
        leader: '负责人2',
        members: 20,
        image: image02
      },
      {
        id: 3,
        name: '社团3',
        leader: '负责人3',
        members: 20,
        image: image01
      },
      {
        id: 4,
        name: '社团4',
        leader: '负责人4',
        members: 20,
        image: image02
      },
      {
        id: 4,
        name: '社团4',
        leader: '负责人4',
        members: 20,
        image: image02
      },
      {
        id: 4,
        name: '社团4',
        leader: '负责人4',
        members: 20,
        image: image02
      },
      {
        id: 4,
        name: '社团4',
        leader: '负责人4',
        members: 20,
        image: image02
      },
      {
        id: 4,
        name: '社团4',
        leader: '负责人4',
        members: 20,
        image: image02
      },
      {
        id: 4,
        name: '社团4',
        leader: '负责人4',
        members: 20,
        image: image02
      },
      {
        id: 4,
        name: '社团4',
        leader: '负责人4',
        members: 20,
        image: image02
      },
      {
        id: 4,
        name: '社团4',
        leader: '负责人4',
        members: 20,
        image: image02
      },
      // 其他社团对象...
    ]);

    const searchQuery = ref('');

    const router = useRouter();

    const filteredClubs = computed(() => {
      // 根据搜索条件筛选 clubs.value 数组，返回匹配的社团
      if (searchQuery.value === '') {
        return clubs.value;
      } else {
        return clubs.value.filter(club =>
            club.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
      }
    });

    const shouldShowScrollTopButton = ref(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    // 监听滚动事件，判断是否显示回到顶部按钮
    window.addEventListener('scroll', () => {
      shouldShowScrollTopButton.value = window.scrollY > 10;
      console.log('shouldShowScrollTopButton:', shouldShowScrollTopButton.value);
    });
    return {
      searchQuery,
      filteredClubs,
      showQuitButton,
      quitClub,
      shouldShowScrollTopButton,
      scrollToTop
    };
  }
}
</script>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.image-container {
  position: relative; /* 添加定位属性，使退出社团按钮相对定位 */
  transition: transform 0.3s ease;
}

.image-container:hover {
  transform: scale(1.1); /* 图片放大1.1倍 */
}

.quit-button {
  position: absolute; /* 使按钮相对定位 */
  top: 10px; /* 调整按钮的上边距 */
  right: 10px; /* 调整按钮的右边距 */
  padding: 5px 10px;
  background-color: #ff6161;
  border: none;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
  opacity: 0; /* 初始状态下按钮透明 */
  transition: opacity 0.3s ease; /* 添加过渡效果 */
}

.image-container:hover .quit-button {
  opacity: 1; /* 鼠标移到图片上时按钮显示 */
}

.search-bar {
  display: flex;
  align-items: center;
}

.search-bar input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  margin-right: 10px;
}

.add-club-button {
  padding: 10px 20px;
  background-color: #616dff;
  border: none;
  border-radius: 20px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}

.clubs-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.club-item {
  width: calc(25% - 20px);
  padding: 20px;
  /*border: 1px solid #ccc;*/
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  position: relative;
}

.club-link {
  text-decoration: none;
  color: inherit;
}

.club-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 10px;
}

.club-name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.club-leader,
.club-members {
  font-size: 14px;
  margin-bottom: 5px;
}
.scroll-to-top {
  position: fixed;
  z-index: 99999;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background-color: #616dff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.scroll-to-top:hover {
  opacity: 1;
}
</style>
