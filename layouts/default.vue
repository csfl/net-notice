 <template>
  <div class="default-container">
    <div class="home-nav">
      <div class="home-nav-content">
        <logo-without-words class="logo"></logo-without-words>
        <div class="nav-content">
          <div class="navbar-menu">
            <el-menu :default-active="defaultActive" mode="horizontal" background-color="#ffffff" text-color="#000000"
                     active-text-color="#3498db">
              <el-menu-item :key="index" :index="item" v-for="(item, index) in navs" class="text-hover-transition">
                <a :href="item" class="nav-item">
                  {{$t(`nav.${item}`)}}
                </a>
              </el-menu-item>
            </el-menu>
          </div>
        </div>
       
        <lang-select class="lang-select"></lang-select>
      </div>
    </div>
    <div class="content-wrapper">
      <nuxt class="content"/>
    </div>
    <vite-footer></vite-footer>
  </div>
</template>

<script>
  import viteFooter from "~/components/Footer.vue";
  import logoWithoutWords from "~/components/logoWithoutWords.vue";
  import LangSelect from "~/components/LangSelect.vue";

  export default {
    components: {
      logoWithoutWords,
      viteFooter,
      LangSelect
    },
    head () {
      return {
        title: this.$t('head.title'),
      };
    },
    data() {
      return {
        navs: ['explorer']
      }
    }
  }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~assets/css/vars";

  .default-container {
    width: 100%;
    height: 100%;
    background: url("~assets/images/background.svg") 100% 0%;
    background-size: cover;
    .lang-select {
      float: right;
      margin-right: 26px;
      margin-top: 13px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .content-wrapper {
    box-sizing: border-box;
    padding: 0 53px;
    margin: auto;
    height: 100%;
    min-height: calc(100vh - 76px);
  }
  .home-nav {
    position: relative;
    .home-nav-content {
      width: 1160px;
      margin: auto;
      position: relative;
    }
    .nav-content {
      position: absolute;
      left: 100px;
      top: 0px;
      .navbar-menu {
        .nav-item {
          padding: 0 33px;
          text-decoration: none;
          display: block;
        }
        .el-menu-item {
          padding: 0px;
        }
        .el-menu-item:hover {
          background-color: #ffffff !important;
        }
        .el-menu--horizontal > .el-menu-item {
          height: 64px;
          line-height: 64px;
        }
      }
    }
    /** iPad **/
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      .home-nav-content {
        box-sizing: border-box;
        padding-left: 20px;
        width: 768px;
        margin: auto;
      }
      .nav-content {
        display: none;
      }
      .vertical-menu {
        display: block;
        float: right;
      }
    }
    /** iPhone **/
    @media only screen and (min-width: 320px) and (max-width: 767px) {
      .home-nav-content {
        box-sizing: border-box;
        padding-left: 15px;
        width: 320px;
        margin: auto;
      }
      .nav-content {
        display: none;
      }

      .vertical-menu {
        display: block;
        float: right;
      }
      .search-wrapper {
        .phone-search {
          display: block;
          width: 44px;
          text-align: center;
          float: right;
          line-height: 64px;
          border-right: 1px solid #E5EDF3;
        }
        .invisible-search {
          display: none;
        }
      }
    }
  }

  @media (max-width: $MQMobile) {
    .content-wrapper {
      padding: 0 1.5rem;
    }
  }

</style>
