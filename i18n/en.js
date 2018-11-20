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
                zh: 'China Mainland',
                en: 'Outside China Mainland'
            }
        },
        viteStore: 'Vite Store',
        website: 'Official Website'
    },
    main:
    {
        notice: {
            title1: "Vite TestNet 1.0.0 is officially launched",
            title2: "We are proud to announce that Vite TestNet 1.0.0 was officially launched on November 8, 2018. At the same time, a series of Vite products including the block explorer, wallets and  Vite Store are upgraded to  Vite TestNet 1.0.0 synchronously and also partially provide interfaces of new functions. <br/>TestNet mainly contains the following features: ",
            ctx:["DAG Ledger Structure","Built-in Smart Contract","HDPoS Consensus","Asynchronous Communication ","Snapshot Chain", "Token Issuance", "Trading Quota", "SBP (aka Supernode) Registration & Voting"],
            summary: "So far, the Vite system has 3 types of token in total: VITE, VCP (Vite Community Point), VTT (Vite Test Token).<br/> The new functions of Web wallet 1.2.0 and Desktop wallet 1.2.0 have been released, including PoW, staking for TPS quota, SBP registration & voting. The SBP list, which can support scanning voting result, has been added to block explorer of Vite. The payment will be completed instantly after Vite Pay has access to Vite TestNet 1.0.0. In addition, we have new stocks being available at Vite Store. Come to check it out. ",
            annotation: '* SBP: Snapshot Block Producer'
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
