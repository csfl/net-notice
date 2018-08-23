 <template>
  <div class="default-container">
    <div class="content-wrapper">
      <nuxt class="content"/>
    </div>
    <vite-footer></vite-footer>
  </div>
</template>

<script>
  import viteFooter from "~/components/Footer.vue";

  export default {
    components: {
      viteFooter
    },
    head () {
      return {
        title: this.$t('head.title')
      };
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
  }
  .content-wrapper {
    box-sizing: border-box;
    padding: 0 53px;
    margin: auto;
    height: 100%;
    min-height: calc(100vh - 76px);
  }

  @media (max-width: $MQMobile) {
    .content-wrapper {
      padding: 0 1.5rem;
    }
  }

</style>
