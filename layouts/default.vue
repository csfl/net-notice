 <template>
  <div class="default-container">
    <div class="home-nav">
      <div class="home-nav-content">
        <logo-without-words class="logo"></logo-without-words>
        <div class="nav-content">
          <div class="navbar-menu">
            <el-menu mode="horizontal" background-color="transparent">
              <el-menu-item :key="index" :index="item" v-for="(item, index) in navs" class="nav-item" >
                <a :href="links[item]" target="_blank" >
                  {{$t(`nav.${item}`)}}
                </a>
              </el-menu-item>
              <el-submenu :index="item.key" v-for="item in doubleNavs" :key="item.key" >
                <template slot="title">{{$t(`nav.${item.key}.name`)}}</template>
                <el-menu-item :key="child" :index="child" v-for="child in item.childs" v-if="item.key !== 'iosApp'">
                  <a :href="links[item.key][child]" target="_blank" class="sub-a">
                    {{$t(`nav.${item.key}.childs.${child}`)}}
                  </a>
                </el-menu-item>
                <div v-if="item.key === 'iosApp'" class="ios-container">
                  <div v-for="child in item.childs" :key="child">
                    <img :src="links[item.key][child]"  class="ios-app" />
                    <div>{{$t(`nav.${item.key}.childs.${child}`)}}</div>
                  </div>
                </div>
              </el-submenu>
            </el-menu>
          </div>
        </div>
        <div class="vertical-menu" @click="openMenu">
          <div class="v-menu">
            <img src="~assets/images/menu.svg"/>
          </div>
        </div>
        <lang-select class="lang-select"></lang-select>
      </div>
    </div>
    <div class="vertail-menu-content">
      <menu-content :navs="navs" :visible.sync="open" @is-open="closeMenu"></menu-content>
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
  import menuContent from "~/components/menuContent.vue";

  export default {
    components: {
      logoWithoutWords,
      viteFooter,
      LangSelect,
      menuContent
    },
    head () {
      return {
        title: this.$t('head.title')
      };
    },
    data() {
      return {
        navs: ['explorer', 'webWallet', 'viteStore', 'website'],
        open: false,
        doubleNavs: [{
          key: 'iosApp',
          childs: ['zh', 'en']
        },{
          key: 'desktopWallet',
          childs: ['mac', 'win']
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
    },
    methods: {
      openMenu() {
        this.open = !this.open;
      },
      closeMenu(val) {
        this.open = val;
      },
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
      &:hover {
        cursor: pointer;
      }
    }
  }
  .sub-a {
    width: 100%;
    display: inline-block;
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
  .vertical-menu {
    display: none;
    .v-menu {
      width: 27px;
      height: 60px;
      line-height: 68px;
      text-align: center;
      box-sizing: border-box;
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
    a {
      text-decoration: none;
    }
    padding-top: 28px;
    position: relative;
    .home-nav-content {
      padding: 0 53px;
      margin: auto;
      position: relative;
    }
    .nav-content {
      position: absolute;
      left: 185px;
      top: 0px;
      
      .navbar-menu {
        .nav-item {
          font-size: 16px;
          padding: 0 20px;
          display: block;
          border: none;
        }
        .el-menu--horizontal>.el-submenu .el-submenu__title {
          font-size: 16px;
          line-height: 62px;
          color: #272727;
          border: none;
        }
        .is-active {
          text-decoration: none;
          border: none;
          color: #272727;
        }
        
        .el-menu--horizontal {
          border: none;
        }
        .el-menu-item {
          color: #272727;
          &:hover {
            color: $common-color;
            background: none!important;
          }
        }
        .el-menu--horizontal > .el-menu-item {
          height: 60px;
          line-height: 60px;
        }
      }
    }
    /** iPad **/
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      
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
      
      .nav-content {
        display: none;
      }

      .vertical-menu {
        display: block;
        float: right;
      }
      
    }
  }

  @media (max-width: $MQMobile) {
    .content-wrapper {
      padding: 0 1.5rem;
    }
  }

</style>
