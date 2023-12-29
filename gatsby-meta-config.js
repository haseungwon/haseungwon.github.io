module.exports = {
    title: `haseungwon.com`,
    description: `하승원의 개발일기`,
    language: `ko`, // `ko`, `en` => currently support versions for Korean and English
    siteUrl: `https://haseungwon.github.io/`,
    ogImage: `/og-image.png`, // Path to your in the 'static' folder
    comments: {
        utterances: {
            repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
        },
    },
    ga: '0', // Google Analytics Tracking ID
    author: {
        name: `하승원`,
        bio: {
            role: `개발자`,
            description: ['알잘딱깔센', '하고 싶은 하고 살기', '너는 다 계획이 있는'],
            thumbnail: 'sample.png', // Path to the image in the 'asset' folder
        },
        social: {
            github: `https://github.com/haseungwon`, // ``,
            linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
            email: `hapeter@korea.ac.kr`, // `zoomkoding@gmail.com`,
        },
    },

    // metadata for About Page
    about: {
        timestamps: [
            // =====       [Timestamp Sample and Structure]      =====
            // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
            {
                date: '',
                activity: '',
                links: {
                    github: '',
                    post: '',
                    googlePlay: '',
                    appStore: '',
                    demo: '',
                },
            },
            // ========================================================
            // ========================================================
            /*{
                date: '2021.02 ~',
                activity: '개인 블로그 개발 및 운영',
                links: {
                    post: '/gatsby-starter-zoomkoding-introduction',
                    github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
                    demo: 'https://www.zoomkoding.com',
                },
            },*/
            {
                date: '2023.09.04 ~ 2023.12.29',
                activity: '앤티에스 backend developer',
                links: {
                    github: '',
                    post: '',
                    googlePlay: '',
                    appStore: '',
                    demo: '',
                },
            },
            {
                date: '2023.09.01 ~ 2023.12.20',
                activity: '4학년 2학기',
                links: {
                    github: '',
                    post: '',
                    googlePlay: '',
                    appStore: '',
                    demo: '',
                },
            },
            {
                date: '2023.06.26 ~ 2023.08.22',
                activity: 'HD한국조선해양 AIC Landwise-Ai team 인턴',
                links: {
                    github: '',
                    post: '',
                    googlePlay: '',
                    appStore: '',
                    demo: '',
                },
            },
            {
                date: '2023.03.02 ~ 2023.06.21',
                activity: '4학년 1학기',
                links: {
                    github: '',
                    post: '',
                    googlePlay: '',
                    appStore: '',
                    demo: '',
                },
            },
            {
                date: '2022.12.22 ~ 2023.02.28',
                activity: 'KIST 인공지능연구단 인턴',
                links: {
                    github: '',
                    post: '',
                    googlePlay: '',
                    appStore: '',
                    demo: '',
                },
            },
            {
                date: '2022.09.01 ~ 20220.12.21',
                activity: '3학년 2학기',
                links: {
                    github: '',
                    post: '',
                    googlePlay: '',
                    appStore: '',
                    demo: '',
                },
            },
            {
                date: '2022.08.22 ~ 20220.09.16',
                activity: '42 서울 La Picine',
                links: {
                    github: '',
                    post: '',
                    googlePlay: '',
                    appStore: '',
                    demo: '',
                },
            },
            {
                date: '2022.07.17 ~ 20220.08.26',
                activity: '22년 하계 S/W 알고리즘 역량강화 과정',
                links: {
                    github: '',
                    post: '',
                    googlePlay: '',
                    appStore: '',
                    demo: '',
                },
            },
            {
                date: '2022.08 ~',
                activity: '개인 블로그 운영 시작',
                links: {
                    github: 'https://github.com/haseungwon/haseungwon.github.io',
                    post: '',
                    googlePlay: '',
                    appStore: '',
                    demo: '',
                },
            },

        ],

        projects: [
            // =====        [Project Sample and Structure]        =====
            // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
            {
                title: '',
                description: '',
                techStack: ['', ''],
                thumbnailUrl: '',
                links: {
                    post: '',
                    github: '',
                    googlePlay: '',
                    appStore: '',
                    demo: '',
                },
            },
            // ========================================================
            // ========================================================
            /*{
                title: '개발 블로그 테마 개발',
                description: '개발 블로그를 운영하는 기간이 조금씩 늘어나고 점점 많은 생각과 경험이 블로그에 쌓아가면서 제 이야기를 담고 있는 블로그를 직접 만들어보고 싶게 되었습니다. 그동안 여러 개발 블로그를 보면서 좋았던 부분과 불편했던 부분들을 바탕으로 레퍼런스를 참고하여 직접 블로그 테마를 만들게 되었습니다.',
                techStack: ['gatsby', 'react'],
                thumbnailUrl: 'blog.png',
                links: {
                    post: '/gatsby-starter-zoomkoding-introduction',
                    github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
                    demo: 'https://www.zoomkoding.com',
                },
            },*/
            {
                title: '생에 첫 데이콘 출전',
                description: '제1회 KRX 금융 빅데이터 활용 아이디어 경진대회에서 백테스팅 결과 분석과 이를 사용한 성장률 높은 종목 추천 시스템 개발을 주제로 참가했습니다. 장기투자 하는 사람들이 가장 고민하는 것에 대해 말할 때 항상 언급되는 두가지가 초기 자본으로 어떤 종목에 투자해야 할지, 여태까지 데이터를 봤을 때 얼마까지 성장할지라고 합니다. 따라서 단기 위주의 기존의 모의투자 시스템과 달리, 역대 데이터를 사용하여 현재의 가치를 알려주는 백테스팅 API는 사용자들에게 하여금 장기투자를 장려하는 효과를 불러일으킬것이다. 또한 거치식 투자와 적립식 투자의 차이를 사용자가 직접 체험하여 본인에게 적합한 투자 방식을 찾는 기회를 제공한다. 따라서 기존의 모의투자 서비시에 반하여 사용자들에게 새로운 경험과 인사이트를 선사할 것이다',
                techStack: ['Python', 'FinanceDataReader'],
                thumbnailUrl: '출전순위.png',
                links: {
                    post: '/project-20220722',
                    github: '',
                    demo: '',
                },
            }

        ],
    },
};