<template>
  <div class="page-home">
    <svg class="logo" width="116px" height="60px" viewBox="0 0 116 60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs></defs>
      <g id="Page-1" stroke="none" stroke-width="1" fill="currentColor" fill-rule="evenodd">
        <g id="上线公告" transform="translate(-240.000000, -28.000000)">
          <g id="Group-6" transform="translate(240.000000, 28.000000)">
            <path d="M0,14.5913394 L19.7020183,10.164 L17.7385321,59.8340917 L0,14.5913394 Z M24.2043853,9.31150459 L63.6689725,-5.50458712e-05 L18.3612661,59.8997615 L24.2043853,9.31150459 Z M58.032,43.6297431 L64.7718165,26.8473578 L65.972367,26.8473578 L58.6870459,44.5726789 L57.2954862,44.5726789 L50.0371376,26.8473578 L51.2921835,26.8473578 L57.9775046,43.6297431 L58.032,43.6297431 Z M72.766789,44.572844 L72.766789,26.8469725 L73.9673394,26.8469725 L73.9673394,44.572844 L72.766789,44.572844 Z M80.7618165,27.7908991 L80.7618165,26.8474128 L95.6875046,26.8474128 L95.6875046,27.7908991 L88.8111743,27.7908991 L88.8111743,44.5727339 L87.6106239,44.5727339 L87.6106239,27.7908991 L80.7618165,27.7908991 Z M102.481596,26.8473578 L115.579211,26.8473578 L115.579211,27.7913945 L103.682147,27.7913945 L103.682147,34.8906606 L114.86967,34.8906606 L114.86967,35.8341468 L103.682147,35.8341468 L103.682147,43.6297431 L115.715725,43.6297431 L115.715725,44.5726789 L102.481596,44.5726789 L102.481596,26.8473578 Z" id="Combined-Shape"></path>
          </g>
        </g>
      </g>
    </svg>
    <lang-select class="lang-select"></lang-select>
    <div class="page-content">
      <div class="left page-bottom">
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
      <div class="right page-bottom">
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
  @import "~assets/css/vars";
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
    color: #0A60EC;
  }
  .page-content {
    margin-top: 5%;
    display: flex;
    display: -webkit-flex;
    color: #272727;
    font-size: 18px;
    letter-spacing: 0;
    line-height: 18px;
    .extral {
      color: #053cce;
    }
    .page-bottom {
      margin-bottom: 76px;
    }
    .left {
      width: 50%;
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
    .right {
      width: 50%;
      & > img {
        width: 100%;
      }
    }
  }
}
@media (max-width: $MQNarrow) {

}

@media (max-width: $MQMobile) {
  .content-wrapper {
    padding: 0 1rem;
  }
  .page-home {
    .logo {
      width: 70px;
      color: white;
      margin-top: 10px;
    }
    .lang-select {
      margin-right: 0;
    }
    .page-content {
      display: flex;
      flex-direction: column-reverse;
      overflow: hidden;
      margin: 2rem 0 0 0;
      padding: 0;
      width: 100%;
      .right {
        width: 100%;
        float: left;
        margin-bottom: 1rem;
        text-align: center;
        &.page-bottom {
          margin-bottom: 0;
        }
        & > svg {
          width: 300px;
        }
      }
      .left {
        width: 100%;
        color: white;
        text-align: center;
        &.page-bottom {
          margin-bottom: 0;
        }
        .title {
          font-size: 1.2rem;
        }
        .context {
          color: rgba(255,255,255,0.9);
          font-size: 0.9rem;
          line-height: 1.5rem;
        }
        .download-wallet {
          .version {
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-content: center;
            a {
              text-align: center;
              .wallet-version {
                margin: 1rem 0 0 0;
              }
            }
          }
        }
        .explorer {
          text-align: center;
          font-size: 0.95rem;
          & > a {
            color: #f7f8fb;
          }
        }
      }
    }
  }
}


</style>
