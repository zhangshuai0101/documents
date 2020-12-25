<template>
  <el-container class="layout-container">
    <el-main class="layout-main">
      <div class="bg" style="margin-bottom: 20px;">
        <el-row>
          <el-col :span="24">
            <img style="height: 100%;width: 100%" :src="$withBase('/bg.jpeg')" alt="foo" />
          </el-col>
        </el-row>
      </div>
      <el-row style="padding: 0 200px;" :gutter="32">
        <el-col :span="8" class="card-main">
          <el-card class="box-card">
            <div class="card-item">
              <el-row>
                <el-col :span="24">
                  <i class="el-icon-menu menu-icon" />
                  <span class="menu-title">大前端</span>
                </el-col>
              </el-row>
              <el-row :gutter="12">
                <el-col :span="8" class="card-content">
                  <router-link to="/大前端/微前端/产品概述" class="link-style">
                    微前端
                  </router-link>
                </el-col>
                <el-col :span="8" class="card-content">
                  <router-link to="/大前端/移动研发/产品概述" class="link-style">
                    移动研发
                  </router-link>
                </el-col>
                <el-col :span="8" class="card-content">
                  <router-link to="/大前端/数据埋点/产品概述" class="link-style">
                    数据埋点
                  </router-link>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8" class="card-main">
          <el-card class="box-card">
            <div class="card-item">
              <el-row>
                <el-col :span="24">
                  <i class="el-icon-film menu-icon" />
                <span class="menu-title">分布式研发</span>
                </el-col>
              </el-row>
              <el-row :gutter="12">
                <el-col :span="8" class="card-content">
                  <router-link to="/分布式研发/微服务/产品概述" class="link-style">
                    微服务
                  </router-link>
                </el-col>
              </el-row>
            </div>
            
          </el-card>
        </el-col>
        <el-col :span="8" class="card-main">
          <el-card class="box-card">
            <div class="card-item">
              <el-row>
                <el-col :span="24">
                  <i class="el-icon-position menu-icon" />
                  <span class="menu-title">敏捷研发</span>
                </el-col>
              </el-row>
              <el-row :gutter="12">
                <el-col :span="8" class="card-content">
                  <router-link to="/敏捷研发/devops/产品概述" class="link-style">
                    devops
                  </router-link>
                </el-col>
                <el-col :span="8" class="card-content">
                  <router-link to="/使用手册/介绍" class="link-style">
                    icdp
                  </router-link>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8" class="card-main">
          <el-card class="box-card">
            <div class="card-item">
              <el-row>
                <el-col :span="24">
                  <i class="el-icon-c-scale-to-original menu-icon" />
                  <span class="menu-title">容器</span>
                </el-col>
              </el-row>
              <el-row :gutter="12">
                <el-col :span="8" class="card-content">
                  <router-link to="/容器/容器/产品概述" class="link-style">
                    容器
                  </router-link>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  computed: {
    menuData() {
      
    }
  },
  mounted() {
    console.log(this)
  },
  methods: {
    
  },
}
</script>
<style lang="scss">
  .navbar{
    background: #5aa3f7;
    border-bottom: none;
    .site-name{
      color: #fff;
    }
    .links{
      background: #5aa3f7;
      color: #fff;
      .search-box input{
        min-width: 200px;
      }
      .nav-links a:hover, .nav-links a.router-link-active {
        color: #fff;
      }
      .repo-link .icon.outbound{
        color: #fff;
      }
      .repo-link:hover{
        margin-bottom: -2px;
        border-bottom: 2px solid #46bd87;
      }
    }
  }
  .theme-container .home{
    // padding: 3.6rem 0 0;
    padding: 0;
    max-width: 100%;
    height: calc(100vh - 50px);
    margin-top: 50px;
  }
  .layout-container{
    background: #f4f9fe;
    height: calc(100vh - 50px);
    .el-main{
      overflow-x: hidden
    }
    .layout-menu{
      border-right: 1px solid #e8e8e8;
    }
    .layout-main{
      .card-main{
        margin-bottom: 20px;
      }
      .card-content{
        padding-top: 15px;
        .link-style{
          color: #b8b8b8;
          font-size: 14px;
        }
        .link-style:hover{
          padding-bottom: 3px;
          border-bottom: 2px solid #46bd87;
        }
      }
      .card-item{
        min-height: 120px;
        .menu-icon{
          font-size: 32px;
          color: #1890ff;
        }
        .menu-title{
          font-size: 16px;
          font-weight: 800
        }
      }
      padding: 0;
    }
  }
</style>
