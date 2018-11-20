<template>
    <div class="page-home">
        <div class="page-content">
            <div class="left page-bottom">
                <div class="title">{{ $t('main.notice.title1') }}</div>
                <div class="context">
                    <div class="preview" v-html="$t('main.notice.title2')"></div>
                    <div class="inner" v-for="(i,j) in $t('main.notice.ctx')" :key="j"><span class="dot"></span> {{ i }}
                    </div>
                    <div class="preview" v-html="$t('main.notice.summary')"></div>
                    <div class="preview annotation">{{ $t('main.notice.annotation') }}</div>
                </div>
                <div class="download">
                    <div class="content-title">{{ $t('main.downloadWallet.title') }}</div>
                    <div class="version">
                        <no-ssr>
                            <el-popover
                                    placement="top"
                                    v-model="visible"
                            >
                                <div class="ios-container">
                                    <div v-for="(app, index) in apps" :key="index">
                                        <img :src="links.iosApp[app]" class="ios-app"/>
                                        <div>{{$t(`nav.iosApp.childs.${app}`)}}</div>
                                    </div>
                                </div>
                                <div class="version-btn btn-ios" slot="reference" @click="visible = !visible"><img src="~assets/images/applewhite.svg"/><span
                                        class="new-page">iOS</span></div>
                            </el-popover>
                        </no-ssr>


                        <a href="http://download.vite.net/Vite.Wallet-1.0.0.dmg">
                            <div class="version-btn ml30"><img src="~assets/images/appleblue.svg"/><span
                                    class="new-page">Mac OS</span></div>
                        </a>
                        <a href="http://download.vite.net/Vite.Wallet-1.0.0.exe">
                            <div class="version-btn ml30"><img src="~assets/images/windows.svg"/><span class="new-page">Windows</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="explorer">
                    <div class="content-title">{{ $t('main.links.title') }}</div>
                    <a href="mailto:info@vite.org" target="_blank" class="extral">
                        info@vite.org <img src="~assets/images/newpage.svg" class="new-page"/>
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
            return {
                apps: ['zh', 'en'],
                links: {
                    iosApp: {
                        en: require('~/assets/images/waiapp.png'),
                        zh: require('~/assets/images/zhongapp.png')
                    }
                },
                visible: false
            };
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
        background: #007AFF;
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
        color: #5E6875;
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
                        margin-left: 10px;
                        font-size: 12px;
                        text-indent: -10px;
                    }
                }
                .download {
                    margin-top: 30px;
                    margin-bottom: 30px;
                    &.app {
                        .qrcode {
                            margin-top: 24px;
                            width: 110px;
                            height: 110px;
                            top: -120px;
                            background-image: url(~assets/images/code_app_ios.png);
                            background-size: 100px;
                            background-repeat: no-repeat;
                            background-position: center;
                            background-color: #fff;
                        }
                    }
                }
                .version {
                    display: flex;
                    display: -webkit-flex;
                    .version-btn {
                        cursor: pointer;
                        width: 140px;
                        height: 46px;
                        text-align: center;
                        line-height: 46px;
                        background: #FFFFFF;
                        border: 2px solid #007AFF;
                        border-radius: 2px;
                        color: #007AFF;
                        .new-page {
                            margin-left: 10px;
                        }

                        &.btn-ios {
                            background: #007AFF;
                            color: #ffffff;
                        }

                    }
                }
                .explorer {
                    margin-bottom: 20px;
                    max-width: 400px;
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
