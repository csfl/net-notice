<template>
  <div class="page-home">
    <img src="~assets/images/logo.svg" class="logo"/>
    <lang-select class="lang-select"></lang-select>
    <div class="page-content">
      <div class="left">
        <div class="title">{{ $t('main.title') }}</div>
        <div class="context">
          <div class="preview">{{ $t('main.ctx2') }}</div>
          <div>· {{ $t('main.ctx3') }}</div>
          <div>· {{ $t('main.ctx4') }}</div>
        </div>
        <div class="download-wallet">
          <span>{{ $t('main.ctx5') }}</span>
          <div class="version">
            <a href="/download/wallet/mac/vite-wallet-0.0.1.dmg" ><div class="wallet-version"><img src="~assets/images/apple.svg"/><span class="new-page">{{ $t('main.ctx6') }}</span></div></a>
            <a href="/download/wallet/win/vite-wallet Setup 0.0.1.exe"><div class="wallet-version ml30"><img src="~assets/images/windows.svg"/><span class="new-page">{{ $t('main.ctx7') }}</span></div></a>
          </div>
        </div>
        <div class="explorer">
          <a href="https://test.vite.net" target="_blank" class="extral">{{ $t('main.ctx8') }}<img src="~assets/images/newpage.svg" class="new-page"/></a>
        </div>
        <div class="explorer">
          <a href="https://github.com/vitelabs" target="_blank" class="extral">
          {{ $t('main.ctx9') }} Github {{ $t('main.ctx10') }} <img src="~assets/images/newpage.svg" class="new-page"/>
          </a>
        </div>
      </div>
      <div class="right">
        <img src="~assets/images/computer.svg"/>
      </div>
    </div>
    
  </div>
</template>

<script>
import LangSelect from "~/components/LangSelect.vue";
export default {
  components: {
    LangSelect
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
a {
  text-decoration: none;
  cursor: pointer;
}
.ml30 {
  margin-left: 30px;
}
.page-home {
  font-family: Arial, PingFangSC-Semibold;
  .lang-select {
    float: right;
    margin-right: 26px;
    margin-top: 13px;
    &:hover {
      cursor: pointer;
    }
  }
  .logo {
    margin-top: 28px;
  }
  .page-content {
    margin-top: 136px;
    display: flex;
    display: -webkit-flex;
    color: #272727;
    font-size: 18px;
    letter-spacing: 0;
    line-height: 18px;
    .extral {
      color: #053cce;
    }
    .left {
      .title {
        font-size: 40px;
        letter-spacing: 0.5px;
        line-height: 46px;
      }
      .context {
        margin-top: 33px;
        line-height: 20px;
        font-family: PingFangSC-Regular;
        color: #5e6875;
        font-size: 16px;
        .preview {
          font-family: Arial, PingFangSC-Semibold;
          padding-bottom: 10px;
        }
      }
      .download-wallet {
        margin-top: 30px;
        margin-bottom: 30px;
      }
      .version {
        display: flex;
        display: -webkit-flex;
        margin-top: 24px;
        .wallet-version {
          display: inline-block;
          width: 180px;
          height: 50px;
          background-image: linear-gradient(
            -153deg,
            #1b3bd8 0%,
            #176ce0 31%,
            #0b92e7 49%,
            #0bb6eb 71%,
            #00e0f2 100%
          );
          box-shadow: 0 0 20px 0 rgba(29, 17, 86, 0.12);
          border-radius: 100px;
          font-size: 18px;
          color: #ffffff;
          text-align: center;
          letter-spacing: 0;
          line-height: 50px;
        }
      }
      .explorer {
        margin-bottom: 20px;
        max-width: 400px;
      }

      .new-page {
        margin-left: 10px;
      }
    }
  }
}
</style>
