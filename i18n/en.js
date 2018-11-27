module.exports = {
    lang: "EN",
    head: {
        title: "Vite-Next Generation High-performance Public Blockchain",
    },
    nav: {
        explorer: 'Block Explorer',
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
                zh: 'China Mainland',
                en: 'Outside China Mainland'
            }
        },
        viteStore: 'Vite Store',
        website: 'Vite.org'
    },
    action:{
        'vote':"I\'d like to vote",
        'queryReward':"Rewards Enquiry"
    },
    main: {
        notice: {
            title1: "Voting for official SBPs to garner rewards，over <span style='color:#007AFF;font-family: PingFangSC-Semibold;'>8000+</span> VITE are waiting for your grab everyday",
            ctx: ["Vite TestNet incentive plan started at 13:30 (UTC+8:00) Nov 23, 2018",
                "In TestNet, Vite Fund is responsible for at least 5 SBPs to ensure the stability of the system. All of the rewards garnered by official SBPs will be given back to our community members",
                "Official SBPs of Vite: <span style='color:#007AFF;font-family: PingFangSC-Semibold;'>Vite_SBP01、Vite_SBP02、Vite_SBP03、Vite_SBP04、Vite_SBP05</span>",
                "The rewards obtained by these 5 SBPs will be as a whole, 70% of which will be distributed to users who vote for us. Users voted for any of these 5 SBPs can obtain rewards, the left 30% will be rewarded to full nodes.",
                "These 5 SBPs are expected to generate <span style='color:#007AFF;font-family: PingFangSC-Semibold;'>8000+ </span>VITE as voting rewards, the earlier you vote, the more rewards you garner!"],
        },
        downloadWallet: {
            title: "Download Vite Apps"
        },
        links: {
            title: "Feedback"
        }
    },
    footer: {
        official: "Official Website"
    }
};
