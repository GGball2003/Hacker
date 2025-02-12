<template>
  <div class="container">
    <div v-if="!selectedClub">
      <div class="header">
        <div class="search-bar">
          <input type="text" v-model="searchQuery" placeholder="搜索社团名称">
        </div>
      </div>

      <div class="clubs-container">
        <div v-for="club in filteredClubs" :key="club.id" class="club-item">
          <img :src="club.image" alt="社团图片" class="club-image" @click="selectClub(club)" @mouseover="addHoverEffect($event)" @mouseleave="removeHoverEffect($event)">
          <h3 class="club-name">{{ club.name }}</h3>
          <p class="club-leader">负责人：{{ club.leader }}</p>
          <p class="club-members">社团人数：{{ club.members }}</p>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="club-details-page">
        <button class="return-button" @click="returnToClubsPage">返回</button>
        <div class="club-details">
          <img :src="selectedClub.image" alt="社团图片" class="club-image-details">
          <div class="club-mes">社团名称：{{ selectedClub.name }}</div>
          <div class="club-mes">负责人：{{ selectedClub.leader }}</div>
          <div class="club-mes">社团人数：{{ selectedClub.members }}</div>
          <div class="club-mes">社团简介：</div>
          <!-- 在此处显示其他社团详细信息 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image01 from '@/assets/images/R-C.jfif';
import image02 from '@/assets/images/skill.jpg';

export default {
  name: 'ClubsPage',
  data() {
    return {
      clubs: [
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
          members: 30,
          image: image01
        },
        {
          id: 4,
          name: '社团4',
          leader: '负责人4',
          members: 5,
          image: image02
        },
        {
          id: 5,
          name: '社团5',
          leader: '负责人5',
          members: 30,
          image: image01
        },
        {
          id: 6,
          name: '社团6',
          leader: '负责人6',
          members: 20,
          image: image02
        },
        {
          id: 7,
          name: '社团7',
          leader: '负责人7',
          members: 15,
          image: image01
        },
        {
          id: 8,
          name: '社团8',
          leader: '负责人8',
          members: 17,
          image: image02
        },
        // 其他社团对象...
      ],
      searchQuery: '',
      selectedClub: null
    };
  },
  computed: {
    filteredClubs() {
      if (this.searchQuery === '') {
        return this.clubs;
      } else {
        return this.clubs.filter(club =>
            club.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
    }
  },
  methods: {
    selectClub(club) {
      this.selectedClub = club;
    },
    returnToClubsPage() {
      this.selectedClub = null;
    },
    addHoverEffect(event) {
      event.target.classList.add('hovered');
    },
    removeHoverEffect(event) {
      event.target.classList.remove('hovered');
    }
  }
};
</script>

<style scoped>
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

.clubs-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.club-item {
  width: calc(25% - 20px);
  padding: 20px;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
}

.club-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 10px;
  transition: transform 0.3s ease;
}

.club-image-details {
  margin-bottom: 10px;
  width: 300px; /* 调整图片的宽度 */
  height: 180px; /* 调整图片的高度 */
  object-fit: cover;
  border-radius: 4px;
}

.club-mes {
  width: 300px;
  height: 30px;
  text-align: left;
  font-size: 18px;
  margin-left: 410px;
  /*background-color: red;*/
}

.club-image.hovered {
  transform: scale(1.1);
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

.club-details-page {
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  padding: 20px;
  background-color: #fdf4eb;
}

.return-button {
  margin-bottom: 20px;
  border: none;
  background-color: #616dff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.club-details {
  text-align: center;
}
</style>
