<template>
  <div class="dashboard-container">
  <div class="container">
  <div class="tableBar">
    <el-input v-model="applyName" placeholder="请输入活动名称进行搜索"
              @input="handleSearchName" :prefix-icon="Search">
    </el-input>
  </div>
  <!--el-table数据表格组件-->
  <el-table
      :data="clubData"
      :header-cell-style="{ background: '#f6f9fa'}"
      @sort-change="handleSortChange"
      empty-text="暂无数据">
    <!--el-table-column列-->
    <el-table-column prop="eventname" label="活动名称" sortable></el-table-column>
    <el-table-column prop="clubName" label="社团名称" sortable></el-table-column>
    <el-table-column prop="mName" label="申请人姓名"></el-table-column>
    <el-table-column prop="eventDescription" label="活动简介"></el-table-column>
    <el-table-column prop="status" label="状态" sortable></el-table-column>
    <el-table-column label="操作" min-width="180">
      <template #default="{ row }">
        <el-button type="primary" size="small" icon="Edit"
                   @click="handleAgree(row)">同意</el-button>
        <el-button type="primary" size="small" icon="Edit"
                   @click="handleRefuse(row)">拒绝</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
      background
      :current-page="currentPage"
      :page-size="pageSize"
      :page-sizes="[5,10,20]"
      :total="total"
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
  />
  </div>
  </div>
</template>

<script setup>
//使用:icon绑定图标，需单独导入图标组件
import { Search } from '@element-plus/icons-vue'
import {ref} from 'vue'
import {onMounted} from "vue";
import axios from "axios";
import ElMessage, {ElMessageBox} from "element-plus";

const clubData = ref([]);
const currentPage = ref(1);//定义当前页码
const pageSize = ref(10);//定义每页显示记录数
const total = ref(0);//总记录数
// 在组件挂载后执行回调函数
onMounted(() => {
  getData()
})
//获取当前页数据
const getData = () => {
  axios.get('', {
    params: {
      pageNum: currentPage.value,
      pageSize: pageSize.value
    }
  })
      .then(response => {
        clubData.value = response.data.records;
        total.value = response.data.total;
      })
      .catch(error => {
        console.error(error);
      });
};
//处理页码变化点击事件
const handleCurrentChange = (pageNum) => {
  currentPage.value = pageNum;
  getData();
};
//处理每页显示多少条事件
const handleSizeChange=(pagesize)=>{
  pageSize.value=pagesize;
  getData();
};
//定义 handleSortChange 方法，接收 sortData 参数
const handleSortChange = (sortData) => {
  // 解构 sortData 参数，得到 prop 和 order 两个属性
  const { prop, order } = sortData;
  // 使用 sort 方法对 displayedItems 数组进行排序，并更新其值
  clubData.value = clubData.value.sort((a, b) => {
    if (order === 'ascending') { // 升序排序
      return a[prop] > b[prop] ? 1 : -1;
    } else { // 降序排序
      return a[prop] < b[prop] ? 1 : -1;
    }
  });
}
//按姓名搜索处理方法
const handleSearchName = (val) => {
  if(val.length>0){
    axios.get('' + val).then(response=>{
      clubData.value=response.data
    }).catch(error=>{
      console.error(error)
    })
  }else {
    getData()
  }
}
const handleAgree = (row) => {
}
const handleRefuse = (row) => {

}
</script>

<style scoped>
/*在ElementPlus中，可使用组件名称的类选择器选择对应组件，从而修改默认组件样式*/
.el-pagination {/*选择分页组件，默认采取Flex布局*/
  justify-content: center;/*水平方向居中对齐*/
  margin-top: 8px;
}
.topTool{
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 8px;
}
/*.el-input{*/
/*  width: 220px;*/
/*}*/
</style>