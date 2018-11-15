<template>
  <div :class="classObj">
    <div class="menu-content">
      <div :key="index" v-for="(item, index) in navs" class="menu-item" @click="clickMenu">
        <a :href="links[item]" target="_blank" class="nav-item">
          {{$t(`nav.${item}`)}}
        </a>
      </div>
      <div :key="item.key" v-for="item in doubleNavs" class="menu-item">
        <span class="nav-item" @click="openChild(item)">{{$t(`nav.${item.key}.name`)}}</span>
        <div :key="child" :index="child" v-for="child in item.childs" v-if="item.key !== 'iosApp'" class="menu-item child-nav" :class="{'invisible': childInvisible}">
          <a :href="links[item.key][child]" target="_blank" class="nav-item">
            {{$t(`nav.${item.key}.childs.${child}`)}}
          </a>
        </div>
        <div v-if="item.key === 'iosApp'"  class="ios-container ios-item" :class="{'invisible': !childInvisible}">
          <div v-for="child in item.childs" :key="child">
            <img :src="links[item.key][child]"  class="ios-app" />
            <div>{{$t(`nav.${item.key}.childs.${child}`)}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
import config from '~/config'

  export default {
    props: {
      navs: {
        type: Array,
        default: () => []
      },
      visible: {
        type: Boolean,
        default: false
      },
      doubleNavs: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        open: this.visible,
        links: config.links,
        childInvisible: true,
      };
    },
    watch: {
      visible(val) {
        this.open = val;
      }
    },
    created() {
      this.open = this.visible;
    },
    computed: {
      classObj() {
        return {
          "menu-wrapper": true,
          "invisible": !this.open
        };
      },
    },
    methods: {
      clickMenu() {
        this.open = false;
        this.$emit("is-open", this.open);
      },
      openChild(item) {
        this.childInvisible = !this.childInvisible;
      }
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

.invisible {
  display: none;
}

.menu-wrapper {
  width: 100%;
  height: 228px;
  
  position: absolute;
  z-index: 999;
  .menu-content {
    box-sizing: border-box;
    background: #FFFFFF;
    border: 1px solid #E5EDF3;
    box-shadow: 0 6px 36px 0 rgba(0,62,100,0.04);
    margin: auto;
    .ios-item {
      line-height: 20px;
      padding-left: 10px;
    }
    .menu-item {
      background: #FFFFFF;
      padding-left: 15px;
      cursor: pointer;
      box-sizing: border-box;
      line-height: 57px;
      border-bottom: 1px solid #E5EDF3;
      .nav-item {
        display: inline-block;
        width: 100%;
        font-size: 14px;
        color: #3F3F3F;
      }
    }
    .child-nav {
      padding-left: 30px;
    }
  }
}

/** iPhone **/
@media only screen and (min-width: 320px) and (max-width: 767px) {
  .menu-wrapper {
    .menu-content {
      margin: auto;
    }
  }
}
</style>
