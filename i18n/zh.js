module.exports = {
    lang: "CH",
    head: {
        title: "Vite-新一代高性能公链",
    },
    nav: {
        explorer: '浏览器',
        webWallet: 'Web钱包',
        desktopWallet: {
            name: '桌面钱包',
            childs: {
                mac: 'Mac OS',
                win: 'Windows'
            }
        },
        iosApp: {
            name: 'iOS APP',
            childs: {
                zh: '中国用户',
                en: '外国用户'
            }
        },
        viteStore: 'Vite Store',
        website: '官网'
    },
    main: {
        notice: {
            title1: "Vite测试网络-Vite Testnet 1.0.0正式上线",
            title2: "11月8日，Vite正式上线第一个测试网络版本Vite Testnet 1.0.0。同时，此前发布的区块浏览器，钱包，Vite Store等产品都已切换至Vite Testnet 1.0.0 网络并提供了部分新功能的入口。<br/>测试网络包括如下主要功能模块：",
            ctx:["DAG 账本结构","内置智能合约","HDPoS分层共识机制","异步通信","快照链", "铸币", "交易配额", "SBP注册和投票"],
            summary: "目前，Vite系统共有三种代币：VITE，VCP（Vite Community Point），VTT（Vite Test Token）。<br/> 此次上线的Web钱包及桌面版钱包新增运行PoW、抵押获取配额；iOS钱包新增运行PoW、抵押获取配额。区块浏览器新增SBP列表页，支持查看SBP及SBPC相关信息。Vite Pay 接入Vite Testnet 1.0.0后支付速度达到秒级。Vite Store 新增数种虚拟商品。",
            annotation: '* SBP：快照块生产节点'
        },
        downloadWallet: {
            title: "下载 Vite App"
        },
        links: {
            title: "问题反馈"
        }
    },
    footer: {
        official: "官网"
    }
};
