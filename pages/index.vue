<template>
  <div class="page-home">
    <div class="page-content">
      <div class="left page-bottom">
        <div
          class="title"
          v-html="$t('main.notice.title1')"
        ></div>
        <div class="context">
          <div
            class="inner"
            v-for="(i,j) in $t('main.notice.ctx')"
            :key="j"
            v-html="i"
          >
          </div>
        </div>
        <div>
          <div class="entries">
            <a
              href="https://wallet.vite.net/"
              target="__balnk"
            >
              <div class="btn">{{$t('action.vote')}}</div>
            </a>
            <a
              href="https://reward.vite.net/"
              target="__balnk"
            >
              <div class="btn">{{$t('action.queryReward')}}</div>
            </a>
          </div>
        </div>
        <div class="explorer">
          <div class="content-title">{{ $t('main.links.title') }}</div>
          <a
            href="mailto:info@vite.org"
            target="_blank"
            class="extral"
          >
            info@vite.org <img
              src="~assets/images/newpage.svg"
              class="new-page"
            />
          </a>
        </div>
      </div>
      <div class="right page-bottom">
        <img src="~assets/images/reward.svg" />
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
      apps: ["zh", "en"],
      links: {
        iosApp: {
          en: require("~/assets/images/waiapp.png"),
          zh: require("~/assets/images/zhongapp.png")
        }
      },
      visible: false,
      ready: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.ready = true;
    }, 500);
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "~assets/css/vars";

a {
  text-decoration: none;
  cursor: pointer;
}

.dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 6px;
  background: #007aff;
  margin-right: 10px;
}

.content-title {
  font-family: PingFangSC-Semibold;
  font-size: 16px;
  color: #272727;
  letter-spacing: 0;
  line-height: 18px;
  margin-bottom: 20px;
}

.ios-container {
  display: flex;
  display: -webkit-flex;
  padding: 20px 20px 20px 0;
  font-size: 14px;
  color: #5e6875;
  letter-spacing: 0;
  text-align: center;
  .ios-app {
    width: 100px;
    height: 100px;
    margin-left: 20px;
  }
}

.ml30 {
  margin-left: 30px;
}

.page-home {
  font-family: Arial, PingFangSC-Semibold;
  display: flex;
  .lang-select {
    float: right;
    margin-right: 26px;
    margin-top: 13px;
    &:hover {
      cursor: pointer;
    }
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
      color: #007aff;
    }
    .page-bottom {
      width: 50%;
    }
    .left {
      .title {
        font-size: 40px;
        letter-spacing: 0.5px;
        line-height: 46px;
      }
      .context {
        text-align: left;
        margin-top: 33px;
        line-height: 22px;
        font-family: PingFangSC-Regular;
        color: #272727;
        font-size: 12px;
        .preview {
          padding: 10px 0;
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
                color:#007AFF;;
            }
            .page-bottom {
                width:50%;
            }
            .left {
                .title {
                    font-size: 40px;
                    letter-spacing: 0.5px;
                    line-height: 46px;
                }
                .context {
                    text-align: left;
                    margin-top: 33px;
                    line-height: 22px;
                    font-family: PingFangSC-Regular;
                    color: #272727;
                    font-size: 12px;
                    .preview {
                        padding: 10px 0;
                    }
                    .annotation {
                        color: #5E6875;
                    }
                    .inner {
                        margin:8px 0;
                        margin-left: 10px;
                        text-indent: 0;
                        font-size: 12px;
                    }
                }
                .entries{
                    display:flex;
                    margin-top:20px;
                    .btn{
                        color:#fff;
                        text-align: center;
                        line-height: 46px;
                        background: #007AFF;
                        border-radius: 2px;
                        width:160px;
                        height:46px;
                        margin-right: 19px;
                        cursor: pointer;
                    }
                        }
                .explorer {
                    margin-top:40px;
                    margin-bottom: 20px;
                    max-width: 400px;
                }
            }
            .right {
                align-self: flex-end;
                margin-bottom: 112px;
                & > img {
                    
                }
            }
        }
      }
      .entries {
        display: flex;
        margin-top: 20px;
        .btn {
          color: #fff;
          text-align: center;
          line-height: 46px;
          background: #007aff;
          border-radius: 2px;
          width: 160px;
          height: 46px;
          margin-right: 19px;
          cursor: pointer;
        }
      }
      .explorer {
        margin-top: 40px;
        margin-bottom: 20px;
        max-width: 400px;
      }
    }
    .right {
      align-self: flex-end;
      margin-bottom: 112px;
      & > img {
      }
    }
  }
}

@media (max-width: $MQNarrow) {
  .page-home {
    width: 100%;
  }
}

@media (max-width: $MQMobile) {
  .content-wrapper {
    padding: 0 1rem;
  }
  .page-home {
    width: 100%;
    .logo {
      width: 70px;
      color: white;
      margin-top: 10px;
    }
    .lang-select {
      margin-right: 0;
    }
    .page-content {
      width: 100%;
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
        & > img {
          width: 100%;
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
          color: rgba(255, 255, 255, 0.9);
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
