module.exports = {
    lang: "CH",
    head: {
        title: "Vite-新一代高性能公链",
    },
    nav: {
        explorer: '区块浏览器',
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
    action:{
        'vote':"我要投票",
        'queryReward':"查询投票奖励"
    },
    main: {
        notice: {
            title1: "投票超级节点，每天瓜分 <span class='strong-text'>8000+</span> VITE",
            ctx: ["Vite测试网络激励计算在11月23日13:00正式开启。",
                "测试网络中Vite基金会负责至少5个超级节点以保障系统的稳定性，官方超级节点获得的全部奖励会回馈给社区用户。",
                "官方超级节点为：<span class='strong-text'>Vite_SBP01、Vite_SBP02、Vite_SBP03、Vite_SBP04、Vite_SBP05</span>",
                "这5个官方超级节点获得的奖励将作为一个整体，其中的70%将作为投票奖励回馈给投票用户，用户投票给这5个超级节点中的任意一个，都可以瓜分奖励；另外30%将回馈给全节点。",
                "5个官方超级节点预计每天会产生<span class='strong-text'>8000+ </span>VITE作为投票奖励；越早加入投票，瓜分奖励越多！"],
        },
        links: {
            title: "问题反馈"
        }
    },
    footer: {
        official: "官网"
    }
};
