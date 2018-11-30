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
            title1: "Vote for official SBPs to collect rewards! Over <span style='color:#007AFF;font-family: PingFangSC-Semibold;'>8000+</span> VITE will be distributed every day!",
            ctx: ["Vite TestNet incentive plan started at 13:30 (UTC+8:00) Nov 23, 2018",
                "In TestNet, Vite Fund is responsible for at least 5 SBPs to ensure the stability of the system. All of the rewards garnered by official SBPs will be given back to our community members",
                "Official SBPs of Vite: <span style='color:#007AFF;font-family: PingFangSC-Semibold;'>Vite_SBP01、Vite_SBP02、Vite_SBP03、Vite_SBP04、Vite_SBP05</span>",
                "The rewards obtained by these five SBPs will be distributed in two ways: 70% will go to users that vote for the official SBPs, 30% will go to the full node operators.",
                "These five SBPs are expected to generate <span style='color:#007AFF;font-family: PingFangSC-Semibold;'>8000+ </span>VITE as voting rewards. The earlier you vote, the more rewards you collect!"],
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
