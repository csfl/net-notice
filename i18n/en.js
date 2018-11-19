module.exports = {
    lang: "EN",
    head: {
        title: "Vite-Next Generation High-performance Public Blockchain",
    },
    nav: {
        explorer: 'explorer',
        webWallet: 'Web Wallet',
        desktopWallet: {
            name: 'Desktop Wallet',
            childs: {
                mac: 'Mac OS',
                win: 'Windows'
            }
        },
        iosApp: {
            name: 'iOS APP',
            childs: {
                zh: 'Users in China Mainland',
                en: 'Users outside China Mainland'
            }
        },
        viteStore: 'Vite Store',
        website: 'Official Website'
    },
    main:
    {
        notice: {
            title1: "Vite测试网络-Vite Testnet 1.0.0正式上线",
            title2: "11月8日，Vite正式上线第一个测试网络版本Vite Testnet 1.0.0。同时，此前发布的区块浏览器，钱包，Vite Store等产品都已切换至Vite Testnet 1.0.0 网络并提供了部分新功能的入口。<br/>测试网络包括如下主要功能模块：",
            ctx:["DAG 账本结构","内置智能合约","HDPoS分层共识机制","异步通信","快照链", "铸币", "交易配额", "SBP注册和投票"],
            summary: "目前，Vite系统共有三种代币：VITE，VCP（Vite Community Point），VTT（Vite Test Token）。<br/> 此次上线的Web钱包及桌面版钱包新增运行PoW、抵押获取配额；iOS钱包新增运行PoW、抵押获取配额。区块浏览器新增SBP列表页，支持查看SBP及SBPC相关信息。Vite Pay 接入Vite Testnet 1.0.0后支付速度达到秒级。Vite Store 新增数种虚拟商品。",
            annotation: '* SBP：快照块生产节点'
        },
        downloadWallet: {
            title: "Download Vite App"
        },
        links: {
            title: "Feedback"
        }
    },
    footer: {
        official: "Official Website"
    }
};
