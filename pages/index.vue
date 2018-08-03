<template>
  <div class="page-home">
    <img src="~assets/images/logo.svg" class="logo"/>
    <lang-select class="lang-select"></lang-select>
    <div class="page-content">
      <div class="left">
        <div class="title">预览版公告</div>
        <div class="context">
          <div class="preview">Vite的主网和第一期测试网络正在建设当中，目前为预览版本。</div>
          <div>· 你可以通过预览版区块链浏览器查询快照块、交易和账户等基本信息。</div>
          <div>· 你还可以下载预览版钱包生成个人账户，申请演示版代币，操作转账，并在区块链浏览器查询您的交易。</div>
        </div>
        <div class="download-wallet">
          <span>下载预览版钱包</span>
          <div class="version">
            <a target="_blank"><div class="wallet-version"><img src="~assets/images/apple.svg"/><span class="new-page">Mac 版</span></div></a>
            <a target="_blank"><div class="wallet-version ml30"><img src="~assets/images/windows.svg"/><span class="new-page">Windows 版</span></div></a>
          </div>
        </div>
        <div class="explorer">
          <a href="https://test.vite.net" target="_blank" class="extral">查看区块链浏览器<img src="~assets/images/newpage.svg" class="new-page"/></a>
        </div>
        <div>
          <a href="https://github.com/vitelabs" target="_blank" class="extral">
          以上系统代码已在 Github 开源，欢迎阅览 <img src="~assets/images/newpage.svg" class="new-page"/>
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
      return {
      };
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
  font-family: PingFangSC-Semibold;
  .lang-select {
    float: right;
    margin-right: 26px; 
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
      color: #053CCE;
    }
    .left {
      .title {
        font-size: 40px;
        letter-spacing: 0.5px;
        line-height: 46px;
      }
      .context {
        margin-top: 33px; 
        line-height: 38px;
        font-family: PingFangSC-Regular;
        color: #5E6875;
        font-size: 16px;
        .preview {
          font-family: PingFangSC-Semibold;
          line-height: 38px;
        }
      }
      .download-wallet {
        margin-top: 30px;
      }
      .version {
        display: flex;
        display: -webkit-flex;
        margin-top: 24px; 
        .wallet-version {
          display: inline-block;
          width: 180px;
          height: 50px;
          background-image: linear-gradient(-153deg, #1B3BD8 0%, #176CE0 31%, #0B92E7 49%, #0BB6EB 71%, #00E0F2 100%);
          box-shadow: 0 0 20px 0 rgba(29,17,86,0.12);
          border-radius: 100px;
          font-size: 18px;
          color: #FFFFFF;
          text-align: center;
          letter-spacing: 0;
          line-height: 50px;
        }
      }
      .explorer {
        margin-top: 40px;
        margin-bottom: 24px; 
      }
      
      .new-page {
        margin-left: 10px;
      }
    }
  }
}
</style>
