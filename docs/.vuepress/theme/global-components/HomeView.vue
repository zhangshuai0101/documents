<template>
  <el-container class="layout-container">
    <el-main class="layout-main">
      <el-card class="box-card">
        <el-row>
          <el-col :span="24">
            <div class="tag-group">
              <span class="tag-group__title">文档分类</span>
              <el-tag
                v-for="item in tagData"
                :key="item.text"
                :class="activeTag == item.text ? 'active' : ''"
              >
                {{ item.text }}
              </el-tag>
            </div>
          </el-col>
        </el-row>
        <el-row class="card-row">
          <el-col 
            :span="24"
            v-for="(item,index) in tagData"
            v-if="index == 0"
          >
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>{{item.text}}</span>
              </div>
              <el-row>
                <el-col 
                  :span="4"
                  v-for="itm in item.items" class="card-item"
                >
                  <router-link class="text-style" :to="itm.link"> {{itm.text}} </router-link>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>
      </el-card>
    </el-main>
  </el-container>
</template>
<script>
import { constants } from 'fs';
export default {
  data() {
    return {
      // tagData: [],
      activeTag: null,
      documentsData: []
    }
  },
  computed: {
    tagData() {
      let tagdata = [],documentsdata = [];
      this.$themeConfig.nav.map(item => {
        if(item.id !== "home" && item.id !== "more" && item.id !== "operationManual"){
          tagdata.push(item);
        };
        if(item.id === "more" && item.items.length){
          item.items.map(itm => {
            tagdata.push(itm);
          })
        };
      });
      return tagdata
    }
  },
  mounted() {
    
  },
  methods: {
    tagClick(item) {
      console.log(item)
      this.activeTag = item.text;
    }
  },
}
</script>
<style lang="scss">
  .theme-container .home{
    padding: 3.6rem 0 0;
    max-width: 100%;
  }
  .layout-container{
    background: #fafafa;
    height: calc(100vh - 50px);
    .layout-menu{
      border-right: 1px solid #e8e8e8;
    }
    .layout-main{
      padding: 20px 150px;
      .el-tag{
        margin-right: 10px;
        cursor: pointer;
      }
      .active{
        color: #fff;
        background: #409EFF;
      }
      .card-row{
        margin-top: 20px;
      }
      .box-card{
        width: 100%
      }
      .text-style{
        color: #2c3e50;
      }
    }
    
  }
</style>
