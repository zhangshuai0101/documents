<template>
  <el-container class="layout-container">
    <el-main class="layout-main">
      <el-menu
        :default-active="activeStep"
        class="el-menu-vertical"
        background-color="#545c64"
        text-color="#fff"
      >
        <el-menu-item 
          v-for="(item,idx) in menuData" 
          :index="`${idx}`"
          @click="jump(`${idx}`)"
        >
          <i class="el-icon-menu"></i>
          <span slot="title">{{item.title}}</span>
        </el-menu-item>
      </el-menu>
      <div class="scroll-content" @scroll="onScroll">
        <el-card class="box-card scroll-item" 
          v-for="(item,idx) in menuData"
        >
          <div slot="header" class="clearfix">
            <i class="el-icon-menu"></i>
            <span>{{item.title}}</span>
          </div>
          <el-row>
            <el-col 
              :span="4"
              v-for="itm in item.children" class="card-item"
            >
              <router-link class="text-style" :to="itm.path"> {{itm.title}} </router-link>
            </el-col>
          </el-row>
        </el-card>
      </div>
    </el-main>
  </el-container>
</template>
<script>
import menuConfig from "../../menuConfig";
export default {
  data() {
    return {
      activeStep: "0"
    }
  },
  computed: {
    menuData() {
      return menuConfig.documentsData || [];
    }
  },
  mounted() {
    
  },
  methods: {
    onScroll (e) {
      let scrollItems = document.querySelectorAll('.scroll-item');
      for (let i = scrollItems.length - 1; i >= 0; i--) {
        // 判断滚动条滚动距离是否大于当前滚动项可滚动距离
        let judge = e.target.scrollTop >= scrollItems[i].offsetTop - scrollItems[0].offsetTop
        if (judge) {
          this.activeStep = `${i}`
          break
        }
      }
    },
    // 点击切换锚点
    jump (index) {
      let target = document.querySelector('.scroll-content')
      let scrollItems = document.querySelectorAll('.scroll-item')
      // 判断滚动条是否滚动到底部
      if (target.scrollHeight <= target.scrollTop + target.clientHeight) {
        this.activeStep = index
      }
      let total = scrollItems[index].offsetTop - scrollItems[0].offsetTop // 锚点元素距离其offsetParent(这里是body)顶部的距离(待滚动的距离)
      let distance = document.querySelector('.scroll-content').scrollTop // 滚动条距离滚动区域顶部的距离
      // let distance = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset // 滚动条距离滚动区域顶部的距离(滚动区域为窗口)
      // 滚动动画实现, 使用setTimeout的递归实现平滑滚动，将距离细分为50小段，10ms滚动一次
      // 计算每一小段的距离
      let step = total / 50
      if (total > distance) {
        smoothDown(document.querySelector('.scroll-content'))
      } else {
        let newTotal = distance - total
        step = newTotal / 50
        smoothUp(document.querySelector('.scroll-content'))
      }

      // 参数element为滚动区域
      function smoothDown (element) {
        if (distance < total) {
          distance += step
          element.scrollTop = distance
          setTimeout(smoothDown.bind(this, element), 10)
        } else {
          element.scrollTop = total
        }
      }

      // 参数element为滚动区域
      function smoothUp (element) {
        if (distance > total) {
          distance -= step
          element.scrollTop = distance
          setTimeout(smoothUp.bind(this, element), 10)
        } else {
          element.scrollTop = total
        }
      }
    }
  },
}
</script>
<style lang="scss">
  .theme-container .home{
    // padding: 3.6rem 0 0;
    padding: 0;
    max-width: 100%;
    height: calc(100vh - 50px);
    margin-top: 50px;
  }
  .layout-container{
    background: #fafafa;
    height: calc(100vh - 50px);
    .layout-menu{
      border-right: 1px solid #e8e8e8;
    }
    .layout-main{
      display: flex;
      padding: 0;
      .scroll-content {
        padding: 20px 40px 20px 40px;
        width: 100%;
        height: 100%;
        overflow: scroll;
      }
      .el-menu{
        height: 100%;
        width: 300px;
        overflow: scroll;
        .el-menu-item{
          padding-left: 50px !important;
        }
      }
      .box-card:not(:first-child){
        margin-top: 20px;
      }
      .box-card{
        .el-card__header{
          padding: 14px;
        }
      }
      .text-style{
        color: rgba(0,0,0,.65);
        padding-bottom: 5px;
      }
      .text-style:hover {
        color: #409EFF;
        border-bottom: 1px solid #409EFF;
      }
    }
  }
</style>
