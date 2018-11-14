 <template>
  <div class="default-container">
    <div class="home-nav">
      <div class="home-nav-content">
        <logo-without-words class="logo"></logo-without-words>
        <div class="nav-content">
          <div class="navbar-menu">
            <el-menu mode="horizontal" text-color="#272727">
              <el-menu-item :key="index" :index="item" v-for="(item, index) in navs" class="nav-item" >
                <a :href="links[item]" target="_blank" >
                  {{$t(`nav.${item}`)}}
                </a>
              </el-menu-item>
              <el-submenu :index="item.key" v-for="(item, index) in doubleNavs" :key="index" >
                <template slot="title">{{$t(`nav.${item.key}.name`)}}</template>
                <el-menu-item :key="index" :index="child" v-for="(child, index) in item.childs" class="sub-nav-item" v-if="item.key !== 'iosApp'">
                  <a :href="links[item.key][child]" target="_blank">
                    {{$t(`nav.${item.key}.childs.${child}`)}}
                  </a>
                </el-menu-item>
                <div v-if="item.key === 'iosApp'" class="ios-container">
                  <div v-for="(child, index) in item.childs" :key="index">
                    <img :src="links[item.key][child]"  class="ios-app" />
                    <div>{{$t(`nav.${item.key}.childs.${child}`)}}</div>
                  </div>
                </div>
              </el-submenu>
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
        title: this.$t('head.title')
      };
    },
    data() {
      return {
        navs: ['explorer', 'webWallet', 'viteStore', 'website'],
        doubleNavs: [{
          key: 'desktopWallet',
          childs: ['mac', 'win']
        },{
          key: 'iosApp',
          childs: ['zh', 'en']
        }],
        links: {
          explorer: 'https://testnet.vite.net',
          webWallet: 'https://wallet.vite.net',
          viteStore: 'https://vite.store',
          website: 'https://vite.org',
          desktopWallet: {
            mac: 'http://download.vite.net/Vite.Wallet-1.0.0.dmg',
            win: 'http://download.vite.net/Vite.Wallet-1.0.0.exe'
          },
          iosApp: {
            en: require('~/assets/images/waiapp.png'),
            zh: require('~/assets/images/zhongapp.png')
          }
        }
      }
    }
  }

</script>

<style rel="stylesheet/scss" lang="scss">
  @import "~assets/css/vars";

  .default-container {
    width: 100%;
    height: 100%;
    background: url("~assets/images/background.svg") 100% 0%;
    background-size: cover;
    .lang-select {
      float: right;
      margin-right: 26px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .ios-container {
    display: flex;
    display: -webkit-flex;
    padding: 20px 20px 20px 0;
    font-size: 14px;
    color: #5E6875;
    letter-spacing: 0;
    text-align: center;
    .ios-app {
      width: 100px;
      height: 100px;
      margin-left: 20px;
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
    padding-top: 28px;
    position: relative;
    .home-nav-content {
      width: 1160px;
      margin: auto;
      position: relative;
    }
    .nav-content {
      position: absolute;
      left: 140px;
      top: 0px;
      
      .navbar-menu {
        .nav-item {
          font-size: 16px!important;
          padding: 0 20px!important;
          display: block!important;
          border: none!important;
          a {
            background-color: transparent!important;
            text-decoration: none;
          }
        }
        .el-menu--horizontal>.el-submenu .el-submenu__title {
          font-size: 16px!important;
        }
        .el-menu-item.sub-nav-item {
          background-color: #ffffff!important;
          padding: 0 20px!important;
          display: block!important;
          border: none!important;
        }
        .is-active {
          text-decoration: none!important;
          border: none!important;
          color: #272727!important;
        }
        .el-menu-item {
          padding: 0px;
        }
        .el-menu--horizontal {
          border: none;
        }
        .el-menu--popup {
          
        }
        .el-menu-item:hover {
          background-color: transparent !important;
          color: $common-color!important;
        }
        .el-menu--horizontal > .el-menu-item {
          height: 60px;
          line-height: 60px;
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
