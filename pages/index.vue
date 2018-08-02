<template>
  <div class="page-home">
    <div class="page-content">
      <div class="title">预览版公告</div>
      <div class="context">
        <div>Vite的主网和第一期测试网络正在建设当中，目前为预览版本。</div>
        <div>· 你可以通过预览版区块链浏览器查询快照块、交易和账户等基本信息。</div>
        <div>· 你还可以下载预览版钱包生成个人账户，申请演示版代币，操作转账，并在区块链浏览器查询您的交易。</div>
      </div>
      <div>
        下载预览版钱包
        <div><a target="_blank">Mac 版</a></div>
        <div><a target="_blank">Windows 版</a></div>
      </div>
      <div>
        <a href="https://test.vite.net" target="_blank">查看区块链浏览器</a>
      </div>
      <div>
        以上系统代码已在
        <a href="https://github.com/vitelabs" target="_blank">Github</a>
        开源，欢迎阅览。
      </div>
    </div>
    
  </div>
</template>

<script>

  export default {
    components: {
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
  color: #3498db;
}
.page-home {
  .page-content {
    height: 400px;
    width: 700px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -200px 0 0 -350px;
    line-height: 30px;
  }
}
</style>
