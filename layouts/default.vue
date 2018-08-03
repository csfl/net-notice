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
        title: "index"
      };
    }
  }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.default-container {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: url("~assets/images/background.svg") 100% 0%;
}
.content-wrapper {
  width: 1440px;
  margin: auto;
  height: 100%;
}
</style>
