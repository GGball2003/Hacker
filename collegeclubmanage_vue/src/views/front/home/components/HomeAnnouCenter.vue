<template>
  <div class="announcement-center">
    <div v-for="announcement in announcements" :key="announcement.id" class="announcement-item">
      <h3 class="announcement-title">{{ announcement.title }}</h3>
      <p class="announcement-date">{{ formatDateTime(announcement.date) }}</p>
      <p class="announcement-content">{{ announcement.content }}</p>
      <div class="announcement-footer">
        <span class="announcement-author">发布人：{{ announcement.author }}</span>
        <span class="announcement-contact">联系方式：{{ announcement.contact }}</span>
      </div>
    </div>
    <div class="backtop-button" v-show="showBackToTop" @click="scrollToTop">
      UP
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      announcements: [
        {
          id: 1,
          title: '重要通知',
          date: '2023-06-01 10:00',
          content: '这是一条重要通知的内容。',
          author: '社团管理员',
          contact: '18868887268'
        },
        {
          id: 2,
          title: '活动公告',
          date: '2023-06-02 14:30',
          content: '社团将举办一场精彩的活动，请大家准时参加。',
          author: '活动组织者',
          contact: '15327551088'
        },
        {
          id: 3,
          title: '重要通知',
          date: '2023-06-01 10:00',
          content: '这是一条重要通知的内容。',
          author: '社团管理员',
          contact: '18868887268'
        },
        {
          id: 4,
          title: '活动公告',
          date: '2023-06-02 14:30',
          content: '社团将举办一场精彩的活动，请大家准时参加。',
          author: '活动组织者',
          contact: '15327551088'
        },
        {
          id: 5,
          title: '重要通知',
          date: '2023-06-01 10:00',
          content: '这是一条重要通知的内容。',
          author: '社团管理员',
          contact: '18868887268'
        },
        {
          id: 6,
          title: '活动公告',
          date: '2023-06-02 14:30',
          content: '社团将举办一场精彩的活动，请大家准时参加。',
          author: '活动组织者',
          contact: '15327551088'
        },
        {
          id: 7,
          title: '重要通知',
          date: '2023-06-01 10:00',
          content: '这是一条重要通知的内容。',
          author: '社团管理员',
          contact: '18868887268'
        },
        {
          id: 8,
          title: '活动公告',
          date: '2023-06-02 14:30',
          content: '社团将举办一场精彩的活动，请大家准时参加。',
          author: '活动组织者',
          contact: '15327551088'
        },
        {
          id: 9,
          title: '活动公告',
          date: '2023-06-02 14:30',
          content: '社团将举办一场精彩的活动，请大家准时参加。',
          author: '活动组织者',
          contact: '15327551088'
        },
        {
          id: 10,
          title: '活动公告',
          date: '2023-06-02 14:30',
          content: '社团将举办一场精彩的活动，请大家准时参加。',
          author: '活动组织者',
          contact: '15327551088'
        },
        {
          id: 11,
          title: '活动公告',
          date: '2023-06-02 14:30',
          content: '社团将举办一场精彩的活动，请大家准时参加。',
          author: '活动组织者',
          contact: '15327551088'
        },
        // 其他公告对象...
      ],
      showBackToTop: false
    };
  },
  methods: {
    formatDateTime(dateTime) {
      // 格式化日期时间，可根据需要自定义格式化方式
      const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
      return new Date(dateTime).toLocaleString('en-US', options);
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.showBackToTop = window.pageYOffset > 100;
    });
  },
  beforeUnmount() {
    window.removeEventListener('scroll', () => {
      this.showBackToTop = window.pageYOffset > 100;
    });
  }
};
</script>

<style scoped>
.announcement-center {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.backtop-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background-color: var(--el-bg-color-overlay);
  box-shadow: var(--el-box-shadow-lighter);
  text-align: center;
  line-height: 40px;
  color: #1989fa;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s;
}

.backtop-button:hover {
  opacity: 1;
}

.announcement-item {
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 4px;
  background-color: #f7f7f7;
}

.announcement-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.announcement-date {
  font-size: 14px;
  color: #888;
  margin-bottom: 10px;
}

.announcement-content {
  font-size: 16px;
  margin-bottom: 10px;
}

.announcement-footer {
  display: flex;
  justify-content: space-between;
}

.announcement-author,
.announcement-contact {
  font-size: 14px;
  color: #888;
}

</style>
