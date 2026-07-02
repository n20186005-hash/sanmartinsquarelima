export type Locale = "zh" | "en" | "es" | "qu";
export type LinkItem = { name: string; url: string };
export type FAQItem = { question: string; answer: string };
export type TransportOption = { name: string; time: string; price: string; steps: string[] };

export type Translations = {
  nav: { history: string; architecture: string; monuments: string; visiting: string; transportation: string; gallery: string; reviews: string; faq: string; location: string };
  hero: { tags: string[]; tagline: string; title: string; subtitle: string; cta: string };
  rating: { reviews: string; source: string };
  history: { title: string; intro: string };
  curiosities: { title: string; content: string };
  architecture: { title: string; intro: string; specs: { structure: { title: string; content: string }; design: { title: string; content: string }; optics: { title: string; content: string } }; plaque: { title: string; items: { label: string; value: string }[] } };
  monuments: { title: string; intro: string; items: { name: string; description: string }[] };
  contrast: { title: string; intro: string; before: string; after: string };
  visiting: { title: string; intro: string; hours: { title: string; content: string; note: string }; price: { title: string; content: string; note: string }; duration: { title: string; content: string; note: string }; tips: { title: string; items: string[] } };
  transportation: { title: string; airport: { title: string; content: string; options: TransportOption[] }; publicTransport?: { title: string; content: string; options: { name: string; description: string; steps: string[] }[] }; cycling?: { title: string; content: string }; localTransport?: { title: string; description?: string; content?: string; steps?: string[] }; city: { title: string; content: string; steps: string[] }; tips: { title: string; items: string[] } };
  gallery: { title: string; viewMore: string };
  reviews: { title: string; subtitle: string; viewMore: string; nearbyTitle: string; nearbyIntro: string; nearbyItems: { name: string; description: string }[] };
  faq: { title: string; subtitle: string; items: FAQItem[] };
  location: { title: string; address: string; openMaps: string };
  footer: { callToAction: string; text: string; made: string; linksTitle: string; links: LinkItem[] };
};

export const translations: Record<Locale, Translations> = {
  zh: {
    nav: { history: "历史背景", architecture: "广场特色", monuments: "纪念雕像", visiting: "游览信息", transportation: "交通指南", gallery: "照片集锦", reviews: "游客评价", faq: "常见问题", location: "地图位置" },
    hero: { tags: ["UNESCO世界文化遗产", "免费", "历史地标"], tagline: "秘鲁利马 · 历史中心区", title: "Plaza San Martín", subtitle: "圣马丁广场 · 利马历史地标 · 独立英雄的纪念之地", cta: "探索广场" },
    rating: { reviews: "条评价", source: "Google 评论" },
    history: {
      title: "历史背景与百年纪念",
      intro: "圣马丁广场（Plaza San Martín）是秘鲁首都利马最重要的公共广场之一，为庆祝秘鲁宣告独立100周年而建。广场于1921年7月27日正式落成，由时任秘鲁总统奥古斯托·B·莱吉亚主持开幕仪式。\n\n**独立英雄的诞生**：广场得名于南美洲独立战争的关键领袖之一、阿根廷将军何塞·德·圣马丁（José de San Martín）。正是他在1821年7月28日宣布了秘鲁脱离西班牙的独立。",
    },
    curiosities: {
      title: "隐藏的秘密：雕塑上的“大羊驼”乌龙",
      content: "在广场圣马丁将军纪念碑的下方，有一尊代表“祖国母亲（Madre Patria）”的雕像。由于一个极其经典的视觉乌龙，它成为了广场上最著名的奇观。\n\n相传，西班牙雕塑家在解读来自秘鲁的指令时，误将西班牙语中意为“火焰”的词汇“llama”，理解成了拼写完全相同的安第斯山脉特有动物——大羊驼（Llama）。结果，这尊庄严雕像的头上顶着一只可爱的小羊驼塑像，而不是原本要求的火苗。下次实地打卡时，不妨特意去寻找这个有趣的细节！"
    },
    architecture: {
      title: "广场设计与建筑美学",
      intro: "圣马丁广场体现了20世纪初利马城市现代化的愿景，整体呈现出受法国巴洛克风格与新古典主义影响的对称之美。",
      specs: {
        structure: { title: "广场布局", content: "广场呈长方形，四周环绕着和谐统一的欧式建筑立面。从曾经的沼泽地到如今优雅的公共空间，它的建成是利马城市进程中的关键标志。" },
        design: { title: "玻利瓦尔大酒店", content: "位于广场一侧的 Gran Hotel Bolívar 建于1924年，曾是利马最豪华、最优雅的酒店，吸引了众多国际名人，是20世纪初岁月的见证。" },
        optics: { title: "科隆剧院", content: "建于1914年的 Teatro Colón 是广场周边的另一座标志性建筑，体现了利马深厚的文化底蕴与建筑艺术。" }
      },
      plaque: {
        title: "广场基本信息",
        items: [
          { label: "名称", value: "Plaza San Martín（圣马丁广场）" },
          { label: "建造年份", value: "1921年" },
          { label: "落成日期", value: "1921年7月27日" },
          { label: "纪念事件", value: "秘鲁独立100周年" },
          { label: "所在区", value: "利马历史中心区（UNESCO世界遗产）" },
          { label: "建筑风格", value: "新古典主义、法国巴洛克风格" }
        ]
      }
    },
    monuments: {
      title: "纪念雕像群解析",
      intro: "圣马丁广场不仅是市民休闲和游客观光的热门场所，更是秘鲁举行国家庆典和政治集会的主要公共舞台。",
      items: [
        { name: "圣马丁将军跃马横枪青铜像", description: "广场正中央矗立着由西班牙雕塑家马里亚诺·本利乌雷（Mariano Benlliure）设计的纪念碑。雕像展现了圣马丁将军骑在马背上、手持秘鲁国旗的英姿，是秘鲁民族认同的重要象征。" },
        { name: "祖国母亲雕像", description: "位于将军骑马像的下方，以青铜铸造，代表着秘鲁共和国的诞生。除了著名的“大羊驼”乌龙外，这座雕像本身的工艺也极其精湛。" }
      ]
    },
    contrast: {
      title: "穿越时空的广场",
      intro: "作为利马历史进程的见证者，圣马丁广场的百年变迁令人感慨。通过老照片与现代全景的对比，我们可以直观感受到这座城市地标的永恒魅力。",
      before: "1920年代 刚落成的广场",
      after: "今日的 圣马丁广场"
    },
    visiting: {
      title: "实用攻略",
      intro: "圣马丁广场是探索利马历史的理想起点。为了获得最佳体验，请参考以下实用信息。",
      hours: { title: "开放时间", content: "全天24小时开放", note: "白天光线更好，适合拍照打卡。" },
      price: { title: "费用说明", content: "免费开放", note: "广场为公共空间，无需门票。" },
      duration: { title: "建议游览时长", content: "30分钟至1小时", note: "可漫步广场，欣赏雕像与周边建筑。" },
      tips: { title: "游览贴士", items: ["白天游览更佳，注意防晒", "市中心人流密集，请时刻警惕防盗，保管好个人财物", "穿着舒适的步行鞋", "携带相机捕捉历史细节", "强烈建议结合周边的武器广场（Plaza de Armas）规划微徒步路线"] }
    },
    transportation: {
      title: "精准交通指南",
      airport: { title: "✈️ 豪尔赫·查韦斯国际机场 (LIM) ➔ 老城区", content: "对于国际游客，从机场到景点的落地交通是刚需。注意：Airport Express Lima 大巴主要开往米拉弗洛雷斯区（Miraflores），直接坐大巴去老城区并不方便。", options: [
        { name: "官方授权出租车（推荐）", price: "一口价约 50-60 索尔", time: "约 45 分钟", steps: ["在机场到达大厅内，直接寻找官方授权出租车柜台（如 Taxi Green / Taxi Directo）", "告知工作人员前往利马老城区（Centro Histórico）", "⚠️ 警告：千万不要在机场外随意搭乘没有标识的黑车"] }
      ]},
      publicTransport: {
        title: "🚌 快速公交系统 (Metropolitano)",
        content: "前往圣马丁广场最核心、最便捷的公共交通是利马都会快速公交系统（Metropolitano）。",
        options: [
          {
            name: "Metropolitano (Ruta A 或 Ruta C)",
            description: "在 Estación Colmena 站下车，出站后向南步行约2个街区（2分钟）即可抵达圣马丁广场。",
            steps: [
              "搭乘 Metropolitano 的 Ruta A 或 Ruta C",
              "在 Estación Colmena 站下车",
              "出站后向南步行约2个街区（约2分钟）"
            ]
          }
        ]
      },
      city: { title: "🚶 经典微徒步路线", content: "结合地图，您可以轻松规划一条从圣马丁广场步行至武器广场（Plaza de Armas）的10分钟经典微徒步路线。沿途可欣赏Jirón de la Unión步行街的繁华与历史建筑。", steps: ["从圣马丁广场出发", "沿着 Jirón de la Unión 步行街向北直行", "步行约 10 分钟即可到达武器广场"] },
      tips: { title: "交通小贴士", items: ["老城区交通拥堵，建议优先选择 Metropolitano 或步行", "使用 Uber 或 Cabify 等打车软件较为方便且价格透明", "下车时注意后方来车，保管好随身物品"] }
    },
    reviews: { 
      title: "游客评价与周边探索", 
      subtitle: "来自圣马丁广场的声音：Google Maps 真实见证", 
      viewMore: "在 Google Maps 查看更多评价",
      nearbyTitle: "周边步行可达景点",
      nearbyIntro: "参观完圣马丁广场后，您可以轻松步行前往以下景点：",
      nearbyItems: [
        { name: "武器广场 (Plaza de Armas)", description: "利马的历史中心，拥有利马大教堂、总统府等重要历史建筑。" },
        { name: "圣弗朗西斯科修道院 (Basílica y Convento de San Francisco)", description: "著名的殖民地时期建筑，以其地下墓穴和图书馆而闻名。" },
        { name: "利马大教堂 (Catedral de Lima)", description: "建于16世纪的宏伟教堂，是利马最重要的宗教建筑之一。" }
      ]
    },
    gallery: { title: "照片集锦", viewMore: "在 Google Maps 查看更多相片" },
    faq: { title: "常见问题", subtitle: "深入了解圣马丁广场", items: [
      { question: "圣马丁广场的开放时间是？", answer: "圣马丁广场是公共空间，全天24小时开放。但由于是户外广场，建议白天参观，安全和光线更佳。" },
      { question: "参观圣马丁广场需要门票吗？", answer: "不需要。圣马丁广场是免费的公共空间，无需购买门票，欢迎所有游客前来参观。" },
      { question: "圣马丁广场是以谁命名的？", answer: "广场以何塞·德·圣马丁（José de San Martín）将军命名。他是阿根廷-秘鲁将军，南美洲独立英雄，于1821年7月28日宣布秘鲁独立。广场于1921年7月27日落成，以纪念秘鲁独立100周年。" },
      { question: "如何前往圣马丁广场？", answer: "圣马丁广场位于秘鲁利马历史中心区，地址是Av. Nicolás de Piérola cdra. 9, Lima 15001。从利马机场乘坐出租车到历史中心区约45分钟；从武器广场步行到圣马丁广场约10分钟。" }
    ]},
    location: { title: "地图位置", address: "Av. Nicolás de Piérola cdra. 9\nLima 15001\nPerú\n（利马历史中心区）", openMaps: "在 Google Maps 查看位置" },
    footer: { callToAction: "作为利马的重要历史景点，请与我们一起爱护广场、保护环境。保持景点整洁，共同维护这一美丽的历史空间。", text: "© 2026 圣马丁广场指南 · 保留所有权利。\n本网站是一个独立的第三方指南项目，致力于准确传播圣马丁广场信息。我们与秘鲁政府或其他官方机构没有任何关联。", made: "本网站是一个独立的第三方指南项目。为探索者与学习者而制。", linksTitle: "相关链接", links: [
      { name: "秘鲁外贸和旅游部", url: "https://www.gob.pe/mincetur" },
      { name: "秘鲁国家旅游局官方指南 - 利马大区专页", url: "https://www.peru.travel/es/destinos/lima" },
      { name: "利马都会区市政府", url: "https://www.gob.pe/munilima" },
      { name: "联合国教科文组织 (UNESCO) - 利马历史中心 (包含圣马丁广场)", url: "https://whc.unesco.org/en/list/500/" },
      { name: "维基百科：圣马丁广场 (利马)", url: "https://en.wikipedia.org/wiki/Plaza_San_Mart%C3%ADn_(Lima)" },
      { name: "世界建筑文物保护基金会 - 利马历史中心", url: "https://www.wmf.org/projects/lima-historic-center" }
    ]}
  },
  en: {
    nav: { history: "History", architecture: "Features", monuments: "Monuments", visiting: "Visit Info", transportation: "Transportation", gallery: "Gallery", reviews: "Reviews", faq: "FAQ", location: "Location" },
    hero: { tags: ["UNESCO World Heritage", "Free", "Historical Landmark"], tagline: "Lima, Peru · Historic City Center", title: "Plaza San Martín", subtitle: "San Martín Square · Historic Landmark · Tribute to Liberty", cta: "Explore the Square" },
    rating: { reviews: "reviews", source: "Google Reviews" },
    history: {
      title: "History & Centennial Celebration",
      intro: "Plaza San Martín is one of the most important public squares in Lima, the capital of Peru. The square was officially inaugurated on July 27, 1921, to celebrate the 100th anniversary of Peru's declaration of independence. Its construction was also a key milestone in Lima's urban modernization process in the early 20th century.\n\n**Tribute to the Hero of South American Liberation**: The square is named after one of the key leaders of the South American independence wars, Argentine General José de San Martín. It was he who proclaimed Peru's independence from Spain on July 28, 1821.",
    },
    curiosities: {
      title: "Hidden Secrets: The 'Llama' Sculpture Mishap",
      content: "Beneath the equestrian monument of General San Martín stands a bronze statue representing the 'Motherland' (Madre Patria). Due to a classic visual mishap, it has become one of the most famous curiosities of the square.\n\nLegend has it that the Spanish sculptor, while interpreting instructions from Peru, misunderstood the Spanish word 'llama' (meaning 'flame') as the identically spelled Andean animal 'llama'. As a result, this solemn statue has a cute little llama on its head instead of the requested flame. Make sure to look for this amusing detail when you visit!"
    },
    architecture: {
      title: "Square Design & Architectural Features",
      intro: "Plaza San Martín embodies the vision of early 20th-century Lima urban modernization, presenting a symmetrical beauty influenced by French Baroque and Neoclassical styles.",
      specs: {
        structure: { title: "Square Layout", content: "The square is rectangular, surrounded by harmonious European-style building facades. From a former swamp to an elegant public space, its construction is a key symbol of Lima's urban progress." },
        design: { title: "Gran Hotel Bolívar", content: "Located on one side of the square, the Gran Hotel Bolívar was built in 1924. It was once the most luxurious hotel in Lima, attracting numerous international celebrities." },
        optics: { title: "Teatro Colón", content: "Built in 1914, the Teatro Colón is another iconic historic building around the square, reflecting Lima's deep cultural heritage and architectural art." }
      },
      plaque: {
        title: "Basic Information",
        items: [
          { label: "Name", value: "Plaza San Martín" },
          { label: "Construction Year", value: "1921" },
          { label: "Inauguration Date", value: "July 27, 1921" },
          { label: "Commemorative Event", value: "Centennial of Peru's Independence" },
          { label: "District", value: "Lima Historic Center (UNESCO World Heritage)" },
          { label: "Architectural Style", value: "Neoclassical, French Baroque" }
        ]
      }
    },
    monuments: {
      title: "Monuments Analysis",
      intro: "Plaza San Martín is not only a popular place for citizens to relax and tourists to sightsee, but it has also long been the main public stage for national celebrations and political rallies in Peru.",
      items: [
        { name: "Bronze Equestrian Monument of General San Martín", description: "In the center of the square stands the monument designed by Spanish sculptor Mariano Benlliure. The statue depicts General San Martín riding on horseback, holding the Peruvian flag, and is an important symbol of Peruvian national identity." },
        { name: "Statue of the Motherland", description: "Located beneath the equestrian statue, this bronze casting represents the birth of the Republic of Peru. Beyond the famous 'llama' mishap, the craftsmanship of this statue itself is exquisite." }
      ]
    },
    contrast: {
      title: "Square Across Time",
      intro: "As a witness to Lima's historical progress, the century-long transformation of Plaza San Martín is truly remarkable. Through the contrast of old photos and modern panoramas, we can intuitively feel the eternal charm of this city landmark.",
      before: "1920s: The newly inaugurated square",
      after: "Today: Plaza San Martín"
    },
    visiting: {
      title: "Plan Your Visit",
      intro: "Plaza San Martín is an ideal starting point for exploring Lima's history. For the best experience, please refer to the following practical information.",
      hours: { title: "Opening Hours", content: "Open 24 hours daily", note: "Daytime lighting is better for photos." },
      price: { title: "Entrance Fee", content: "Free Admission", note: "The square is a public space with no entrance fee." },
      duration: { title: "Suggested Visit Duration", content: "30 minutes to 1 hour", note: "You can stroll around the square, admire the statue and surrounding buildings." },
      tips: { title: "Travel Tips", items: ["Daytime visits are recommended, please use sun protection", "The city center is crowded, always be alert for pickpockets and keep personal belongings secure", "Wear comfortable walking shoes", "Bring a camera to capture historical details", "Highly recommended to combine with a walking route to the nearby Plaza de Armas"] }
    },
    transportation: {
      title: "Precise Transportation Guide",
      airport: { title: "✈️ Jorge Chávez Int'l Airport (LIM) ➔ Historic Center", content: "For international tourists, landing transportation from the airport is essential. Note: The Airport Express Lima bus mainly goes to the Miraflores district, and it is not convenient to take the bus directly to the old town.", options: [
        { name: "Official Authorized Taxi (Recommended)", price: "Fixed price around 50-60 soles", time: "About 45 minutes", steps: ["Inside the airport arrivals hall, look directly for official authorized taxi counters (e.g., Taxi Green / Taxi Directo)", "Inform the staff you are heading to the historic center (Centro Histórico)", "⚠️ Warning: Do not take unmarked unofficial taxis outside the airport"] }
      ]},
      publicTransport: {
        title: "🚌 Bus Rapid Transit (Metropolitano)",
        content: "The most core and convenient public transportation to Plaza San Martín is the Lima Bus Rapid Transit system (Metropolitano).",
        options: [
          {
            name: "Metropolitano (Ruta A or Ruta C)",
            description: "Get off at Estación Colmena station. Exit and walk south for about 2 blocks (2 minutes) to reach Plaza San Martín.",
            steps: [
              "Take Ruta A or Ruta C of the Metropolitano",
              "Get off at Estación Colmena station",
              "Exit and walk south for about 2 blocks (approx. 2 minutes)"
            ]
          }
        ]
      },
      city: { title: "🚶 Classic Walking Route", content: "You can easily plan a classic 10-minute walking route from Plaza San Martín to Plaza de Armas. Along the way, you can enjoy the bustling pedestrian street of Jirón de la Unión and historical buildings.", steps: ["Start from Plaza San Martín", "Walk straight north along Jirón de la Unión pedestrian street", "Walk for about 10 minutes to reach Plaza de Armas"] },
      tips: { title: "Transportation Tips", items: ["Traffic in the old town is congested; prioritize Metropolitano or walking", "Using ride-hailing apps like Uber or Cabify is convenient with transparent pricing", "Watch for approaching vehicles when getting off and secure your belongings"] }
    },
    reviews: { 
      title: "Visitor Reviews & Nearby Exploration", 
      subtitle: "Voices from Plaza San Martín: Real Testimonies from Google Maps", 
      viewMore: "View More Reviews on Google Maps",
      nearbyTitle: "Nearby Walking Distances Attractions",
      nearbyIntro: "After visiting Plaza San Martín, you can easily walk to the following attractions:",
      nearbyItems: [
        { name: "Plaza de Armas", description: "The historic center of Lima, featuring Lima Cathedral, Government Palace, and other important historic buildings." },
        { name: "Basílica y Convento de San Francisco", description: "A famous colonial-era building, known for its catacombs and library." },
        { name: "Catedral de Lima", description: "A magnificent church built in the 16th century, one of Lima's most important religious buildings." }
      ]
    },
    gallery: { title: "Photo Gallery", viewMore: "View More Photos on Google Maps" },
    faq: { title: "Frequently Asked Questions", subtitle: "Learn More About Plaza San Martín", items: [
      { question: "What are the opening hours of Plaza San Martín?", answer: "Plaza San Martín is a public space open 24 hours a day, 7 days a week. However, as it is an outdoor square, daytime visits are recommended for better safety and lighting." },
      { question: "Is there an entrance fee to visit Plaza San Martín?", answer: "No. Plaza San Martín is a free public space with no entrance fee required. All visitors are welcome." },
      { question: "Who is Plaza San Martín named after?", answer: "The square is named after General José de San Martín, the Argentine-Peruvian general and South American independence hero who proclaimed Peru's independence on July 28, 1821. The square was inaugurated on July 27, 1921, to commemorate the centennial of Peru's independence." },
      { question: "How do I get to Plaza San Martín?", answer: "Plaza San Martín is located in Lima's historic center district, at Av. Nicolás de Piérola cdra. 9, Lima 15001. It takes about 45 minutes by taxi from Lima airport to the historic center; it is about a 10-minute walk from Plaza de Armas to Plaza San Martín." }
    ]},
    location: { title: "Map Location", address: "Av. Nicolás de Piérola cdra. 9\nLima 15001\nPeru\n(Lima Historic Center)", openMaps: "View Location on Google Maps" },
    footer: { callToAction: "As an important historical attraction in Lima, please join us in caring for the square and protecting the environment. Keep the attraction clean and maintain this beautiful historical space together.", text: "© 2026 Plaza San Martín Guide · All rights reserved.\nThis website is an independent third-party guide project dedicated to accurately sharing information about Plaza San Martín. We are not affiliated with the Peruvian government or any official authority.", made: "This website is an independent third-party guide project. Made for explorers and learners.", linksTitle: "Related Links", links: [
      { name: "Peru Ministry of Foreign Trade and Tourism", url: "https://www.gob.pe/mincetur" },
      { name: "Official Peru Travel Guide - Lima Region", url: "https://www.peru.travel/es/destinos/lima" },
      { name: "Lima Municipality", url: "https://www.gob.pe/munilima" },
      { name: "UNESCO - Historic Center of Lima (including Plaza San Martín)", url: "https://whc.unesco.org/en/list/500/" },
      { name: "Wikipedia: Plaza San Martín (Lima)", url: "https://en.wikipedia.org/wiki/Plaza_San_Mart%C3%ADn_(Lima)" },
      { name: "World Monuments Fund - Historic Center of Lima", url: "https://www.wmf.org/projects/lima-historic-center" }
    ]}
  },
  es: {
    nav: { history: "Historia", architecture: "Características", monuments: "Monumentos", visiting: "Información", transportation: "Transporte", gallery: "Galería", reviews: "Reseñas", faq: "FAQ", location: "Ubicación" },
    hero: { tags: ["Patrimonio Mundial de la UNESCO", "Gratis", "Lugar Histórico"], tagline: "Lima, Perú · Centro Histórico", title: "Plaza San Martín", subtitle: "Plaza San Martín · Lugar Histórico · Homenaje a la Libertad", cta: "Explorar" },
    rating: { reviews: "reseñas", source: "Google Reseñas" },
    history: {
      title: "Historia y Celebración del Centenario",
      intro: "La Plaza San Martín es una de las plazas públicas más importantes de Lima, la capital del Perú. La plaza fue inaugurada oficialmente el 27 de julio de 1921 para celebrar el 100º aniversario de la declaración de independencia del Perú. Su construcción también fue un hito clave en el proceso de modernización urbana de Lima a principios del siglo XX.\n\n**Homenaje al Héroe de la Liberación Sudamericana**: La plaza recibe su nombre en honor a uno de los líderes clave de las guerras de independencia sudamericanas, el general argentino José de San Martín. Fue él quien proclamó la independencia del Perú de España el 28 de julio de 1821.",
    },
    curiosities: {
      title: "Secretos Ocultos: El Famoso Error Escultórico de la 'Llama'",
      content: "Debajo del monumento ecuestre del General San Martín se encuentra una estatua de bronce que representa a la 'Madre Patria'. Debido a un clásico error visual, se ha convertido en una de las curiosidades más famosas de la plaza.\n\nCuenta la leyenda que el escultor español, al interpretar las instrucciones de Perú, malinterpretó la palabra 'llama' (que significa 'llama de fuego') como el animal andino 'llama' (el camélido). Como resultado, esta solemne estatua tiene una adorable y pequeña llama en su cabeza en lugar de la llama de fuego solicitada. ¡Asegúrate de buscar este divertido detalle cuando la visites!"
    },
    architecture: {
      title: "Diseño de la Plaza y Estética Arquitectónica",
      intro: "La Plaza San Martín encarna la visión de modernización urbana de Lima a principios del siglo XX, presentando una belleza simétrica influenciada por los estilos barroco francés y neoclásico.",
      specs: {
        structure: { title: "Diseño de la Plaza", content: "La plaza es rectangular, rodeada por fachadas de edificios de estilo europeo armonioso. De un antiguo pantano a un espacio público elegante, su construcción es un símbolo clave del progreso urbano de Lima." },
        design: { title: "Gran Hotel Bolívar", content: "Ubicado en un lado de la plaza, el Gran Hotel Bolívar fue construido en 1924. Alguna vez fue el hotel más lujoso de Lima, atrayendo a numerosas celebridades internacionales." },
        optics: { title: "Teatro Colón", content: "Construido en 1914, el Teatro Colón es otro edificio histórico icónico alrededor de la plaza, reflejando el profundo patrimonio cultural y el arte arquitectónico de Lima." }
      },
      plaque: {
        title: "Información Básica",
        items: [
          { label: "Nombre", value: "Plaza San Martín" },
          { label: "Año de Construcción", value: "1921" },
          { label: "Fecha de Inauguración", value: "27 de julio de 1921" },
          { label: "Evento Conmemorativo", value: "Centenario de la Independencia del Perú" },
          { label: "Distrito", value: "Centro Histórico de Lima (Patrimonio Mundial UNESCO)" },
          { label: "Estilo Arquitectónico", value: "Neoclásico, Barroco Francés" }
        ]
      }
    },
    monuments: {
      title: "Análisis de Monumentos",
      intro: "La Plaza San Martín no solo es un lugar popular para que los ciudadanos se relajen y los turistas visiten, sino que también ha sido durante mucho tiempo el principal escenario público para celebraciones nacionales y mítines políticos en Perú.",
      items: [
        { name: "Monumento Ecuestre de Bronce del General San Martín", description: "En el centro de la plaza se encuentra el monumento diseñado por el escultor español Mariano Benlliure. La estatua muestra al General San Martín montado a caballo, sosteniendo la bandera peruana, y es un símbolo importante de la identidad nacional peruana." },
        { name: "Estatua de la Madre Patria", description: "Ubicada debajo de la estatua ecuestre, esta fundición de bronce representa el nacimiento de la República del Perú. Más allá del famoso error de la 'llama', la artesanía de esta estatua en sí es exquisita." }
      ]
    },
    contrast: {
      title: "La Plaza a Través del Tiempo",
      intro: "Como testigo del progreso histórico de Lima, la transformación de un siglo de la Plaza San Martín es verdaderamente notable. A través del contraste de fotos antiguas y panoramas modernos, podemos sentir intuitivamente el encanto eterno de este hito de la ciudad.",
      before: "Años 1920: La plaza recién inaugurada",
      after: "Hoy: Plaza San Martín"
    },
    visiting: {
      title: "Planifica Tu Visita",
      intro: "La Plaza San Martín es un punto de partida ideal para explorar la historia de Lima. Para obtener la mejor experiencia, consulte la siguiente información práctica.",
      hours: { title: "Horario de Apertura", content: "Abierto las 24 horas, todos los días", note: "La iluminación diurna es mejor para las fotos." },
      price: { title: "Entrada", content: "Entrada Gratuita", note: "La plaza es un espacio público sin tarifa de entrada." },
      duration: { title: "Duración Sugerida de la Visita", content: "30 minutos a 1 hora", note: "Puede pasear por la plaza, admirar la estatua y los edificios circundantes." },
      tips: { title: "Consejos de Viaje", items: ["Se recomiendan las visitas diurnas, por favor use protección solar", "El centro de la ciudad está concurrido, esté siempre alerta de los carteristas y mantenga sus pertenencias personales seguras", "Use zapatos cómodos para caminar", "Traiga una cámara para capturar detalles históricos", "Muy recomendable combinar con una ruta a pie a la cercana Plaza de Armas"] }
    },
    transportation: {
      title: "Guía de Transporte Precisa",
      airport: { title: "✈️ Aeropuerto Int'l Jorge Chávez (LIM) ➔ Centro Histórico", content: "Para los turistas internacionales, el transporte desde el aeropuerto es esencial. Nota: El autobús Airport Express Lima va principalmente al distrito de Miraflores, y no es conveniente tomar el autobús directamente al casco antiguo.", options: [
        { name: "Taxi Oficial Autorizado (Recomendado)", price: "Precio fijo alrededor de 50-60 soles", time: "Aprox. 45 minutos", steps: ["Dentro de la sala de llegadas del aeropuerto, busque directamente los mostradores de taxis oficiales autorizados (ej., Taxi Green / Taxi Directo)", "Informe al personal que se dirige al Centro Histórico", "⚠️ Advertencia: No tome taxis no oficiales sin marcar fuera del aeropuerto"] }
      ]},
      publicTransport: {
        title: "🚌 Autobús de Tránsito Rápido (Metropolitano)",
        content: "El transporte público más central y conveniente a la Plaza San Martín es el sistema de Autobús de Tránsito Rápido de Lima (Metropolitano).",
        options: [
          {
            name: "Metropolitano (Ruta A o Ruta C)",
            description: "Bájese en la estación Estación Colmena. Salga y camine hacia el sur por aproximadamente 2 cuadras (2 minutos) para llegar a la Plaza San Martín.",
            steps: [
              "Tome la Ruta A o Ruta C del Metropolitano",
              "Bájese en la estación Estación Colmena",
              "Salga y camine hacia el sur por aproximadamente 2 cuadras (aprox. 2 minutos)"
            ]
          }
        ]
      },
      city: { title: "🚶 Ruta a Pie Clásica", content: "Puede planificar fácilmente una ruta a pie clásica de 10 minutos desde la Plaza San Martín hasta la Plaza de Armas. En el camino, puede disfrutar de la bulliciosa calle peatonal de Jirón de la Unión y edificios históricos.", steps: ["Comience desde la Plaza San Martín", "Camine recto hacia el norte por la calle peatonal Jirón de la Unión", "Camine por unos 10 minutos para llegar a la Plaza de Armas"] },
      tips: { title: "Consejos de Transporte", items: ["El tráfico en el casco antiguo es congestionado; priorice el Metropolitano o caminar", "Usar aplicaciones de transporte como Uber o Cabify es conveniente con precios transparentes", "Cuidado con los vehículos que se acercan al bajarse y asegure sus pertenencias"] }
    },
    reviews: { 
      title: "Reseñas de Visitantes y Exploración Cercana", 
      subtitle: "Voces de la Plaza San Martín: Testimonios Reales de Google Maps", 
      viewMore: "Ver Más Reseñas en Google Maps",
      nearbyTitle: "Atracciones Cercanas a Distancia de Caminata",
      nearbyIntro: "Después de visitar la Plaza San Martín, puede caminar fácilmente a las siguientes atracciones:",
      nearbyItems: [
        { name: "Plaza de Armas", description: "El centro histórico de Lima, con la Catedral de Lima, Palacio de Gobierno y otros edificios históricos importantes." },
        { name: "Basílica y Convento de San Francisco", description: "Un famoso edificio de la era colonial, conocido por sus catacumbas y biblioteca." },
        { name: "Catedral de Lima", description: "Una iglesia magnífica construida en el siglo XVI, uno de los edificios religiosos más importantes de Lima." }
      ]
    },
    gallery: { title: "Galería de Fotos", viewMore: "Ver Más Fotos en Google Maps" },
    faq: { title: "Preguntas Frecuentes", subtitle: "Aprenda Más Sobre la Plaza San Martín", items: [
      { question: "¿Cuál es el horario de la Plaza San Martín?", answer: "La Plaza San Martín es un espacio público abierto las 24 horas del día, 7 días de la semana. Sin embargo, como es una plaza al aire libre, se recomiendan las visitas diurnas para una mejor seguridad y iluminación." },
      { question: "¿Hay que pagar entrada para visitar la Plaza San Martín?", answer: "No. La Plaza San Martín es un espacio público gratuito sin cargo de entrada requerido. Todos los visitantes son bienvenidos." },
      { question: "¿En honor a quién se nombró la Plaza San Martín?", answer: "La plaza lleva el nombre del General José de San Martín, el general argentino-peruano y héroe de la independencia sudamericana que proclamó la independencia del Perú el 28 de julio de 1821. La plaza fue inaugurada el 27 de julio de 1921, para conmemorar el centenario de la independencia del Perú." },
      { question: "¿Cómo llego a la Plaza San Martín?", answer: "La Plaza San Martín está ubicada en el distrito del centro histórico de Lima, en Av. Nicolás de Piérola cdra. 9, Lima 15001. Toma aproximadamente 45 minutos en taxi desde el aeropuerto de Lima hasta el centro histórico; son aproximadamente 10 minutos a pie desde la Plaza de Armas hasta la Plaza San Martín." }
    ]},
    location: { title: "Ubicación", address: "Av. Nicolás de Piérola cdra. 9\nLima 15001\nPerú\n(Centro Histórico de Lima)", openMaps: "Ver en Google Maps" },
    footer: { callToAction: "Como atracción histórica importante en Lima, únalse a nosotros para cuidar la plaza y proteger el medio ambiente. Mantenga la atracción limpia y conserve este hermoso espacio histórico juntos.", text: "© 2026 Guía de la Plaza San Martín · Todos los derechos reservados.\nEste sitio web es un proyecto independiente de guía de terceros dedicado a compartir información precisa sobre la Plaza San Martín. No estamos afiliados con el gobierno peruano o ninguna autoridad oficial.", made: "Este sitio web es un proyecto independiente de guía de terceros. Hecho para exploradores y aprendices.", linksTitle: "Enlaces Relacionados", links: [
      { name: "MINCETUR", url: "https://www.gob.pe/mincetur" },
      { name: "Peru Travel - Lima", url: "https://www.peru.travel/es/destinos/lima" },
      { name: "Municipalidad de Lima", url: "https://www.gob.pe/munilima" },
      { name: "UNESCO - Centro Histórico de Lima (incluyendo Plaza San Martín)", url: "https://whc.unesco.org/es/list/500/" },
      { name: "Wikipedia: Plaza San Martín (Lima)", url: "https://en.wikipedia.org/wiki/Plaza_San_Mart%C3%ADn_(Lima)" },
      { name: "World Monuments Fund - Centro Histórico de Lima", url: "https://www.wmf.org/projects/lima-historic-center" }
    ]}
  },
  qu: {
    nav: { history: "Ñawpaq", architecture: "Ruwasqa", monuments: "Yuyaykuna", visiting: "Puriy", transportation: "Chaykamuy", gallery: "Rikuy", reviews: "Niykuna", faq: "Tapuykuna", location: "Maypi" },
    hero: { tags: ["UNESCO", "Free", "Ñawpaq"], tagline: "Lima, Piruw · Ñawpaq Llaqta", title: "Plaza San Martín", subtitle: "Plaza San Martín · San Martin Plaza · Libertad Yupay", cta: "Rikuy" },
    rating: { reviews: "niykuna", source: "Google niykuna" },
    history: {
      title: "Ñawpaq Kawsay",
      intro: "Plaza San Martín, Lima, Piruwpi. San Martin Plaza. José de San Martín libertador. UNESCO Patrimonio Mundial.\n\n**Perú libertad 100 wata**: 1921 watapi ruwasqa. José de San Martín libertador."
    },
    curiosities: {
      title: "Pakasqa Yachay: Llama willakuy",
      content: "Escultor 'llama' nisqata mana yacharqan. Llama animal, mana k'ancha. Kayqa muyuriq willakuy. San Martin caballowan urapi."
    },
    architecture: {
      title: "Imayna ruwasqa",
      intro: "Plaza San Martín allin ruwasqa. Europa estilo. San Martin rikch'an.",
      specs: {
        structure: { title: "Plaza Sayaynin", content: "Plaza San Martín, Lima centro. Europa estilo. Allin ruwasqa." },
        design: { title: "Gran Hotel Bolívar", content: "Historico hotel. 1924 watapi ruwasqa. Lima centro." },
        optics: { title: "Teatro Colón", content: "Teatro. 1914 watapi ruwasqa. Cultura centro." }
      },
      plaque: {
        title: "Willakuykuna",
        items: [
          { label: "Suti", value: "Plaza San Martín" },
          { label: "Wata", value: "1921" },
          { label: "Kichay P'unchaw", value: "Julio 27, 1921" },
          { label: "Estilo", value: "Neocolonial, Francés" }
        ]
      }
    },
    monuments: {
      title: "Yuyaykuna",
      intro: "San Martín yuyanapaq. Política, social centro:",
      items: [
        { name: "San Martín General Monumento", description: "José de San Martín, Perú libertador. 1821 watapi libertad nisqa. Mariano Benlliure ruwarqa. Bronce." },
        { name: "Madre Patria", description: "San Martin caballowan urapi. Llama animal kachkan." }
      ]
    },
    contrast: {
      title: "Ñawpaq vs Kunan",
      intro: "Plaza San Martín ñawpaq vs kunan.",
      before: "1920s: Ñawpaq Plaza",
      after: "Kunan: Plaza San Martín"
    },
    visiting: {
      title: "Puriy",
      intro: "Plaza San Martín purinapaq allin.",
      hours: { title: "Punchaw", content: "24 horas", note: "P'unchay puriy allin." },
      price: { title: "Qullqi", content: "Free", note: "Mana qullqiyuq." },
      duration: { title: "Hayk'aq", content: "30 minuto - 1 hora", note: "Rikuy, puriy." },
      tips: { title: "Yachay", items: ["P'unchay puriy, intita qhaway", "Zapatos allin", "Cámara", "Plaza de Armas puriy"] }
    },
    transportation: {
      title: "Chaykamuy",
      airport: { title: "Lima-manta", content: "Lima-man antawan hamuy.", options: [
        { name: "Taxi (Allin)", price: "50 - 60 soles", time: "45 min", steps: ["Lima-manta oficial taxi (Taxi Green)"] }
      ]},
      publicTransport: {
        title: "Metropolitano",
        content: "Metropolitano allin.",
        options: [
          {
            name: "Metropolitano (Ruta A, Ruta C)",
            description: "Estación Colmena.",
            steps: [
              "Metropolitano Ruta A, Ruta C",
              "Estación Colmena",
              "2 blocks puriy"
            ]
          }
        ]
      },
      city: { title: "🚶 Lima Centro", content: "Lima centro-manta.", steps: ["Plaza de Armas-manta puriy 10 min", "Jirón de la Unión puriy"] },
      tips: { title: "Yachay", items: ["P'unchay puriy", "Metropolitano allin", "Uber allin"] }
    },
    reviews: { 
      title: "Niykuna", 
      subtitle: "Plaza San Martín niykuna", 
      viewMore: "Astawan niykuna",
      nearbyTitle: "Rikunapaq",
      nearbyIntro: "Huk kitikuna:",
      nearbyItems: [
        { name: "Plaza de Armas", description: "Lima centro. Catedral." },
        { name: "San Francisco", description: "Historico convento." }
      ]
    },
    gallery: { title: "Rikuy", viewMore: "Google Maps nisqapi astawan rikuy" },
    faq: { title: "Tapuykuna", subtitle: "Yachay", items: [
      { question: "Hayk'aq kachkan?", answer: "24 horas. P'unchay puriy allin." },
      { question: "Qullqi paganan chá?", answer: "Mana. Free. Mana qullqiyuq." },
      { question: "Piwan sutichasqa?", answer: "José de San Martín. Perú libertador." }
    ]},
    location: { title: "Maypipas", address: "Av. Nicolás de Piérola\nLima 15001\nPerú", openMaps: "Google Maps" },
    footer: { callToAction: "Plaza San Martín cuiday.", text: "© 2026 Plaza San Martín.", made: "Kayqa puriy yachay.", linksTitle: "Imakunata", links: [
      { name: "MINCETUR", url: "https://www.gob.pe/mincetur" },
      { name: "Peru Travel - Lima", url: "https://www.peru.travel/es/destinos/lima" },
      { name: "Lima Municipality", url: "https://www.gob.pe/munilima" },
      { name: "UNESCO - Lima Historic Center", url: "https://whc.unesco.org/en/list/500/" },
      { name: "Wikipedia: Plaza San Martín", url: "https://en.wikipedia.org/wiki/Plaza_San_Mart%C3%ADn_(Lima)" },
      { name: "World Monuments Fund", url: "https://www.wmf.org/projects/lima-historic-center" }
    ]}
  }
};
