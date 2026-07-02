export type Locale = "zh" | "en" | "es" | "qu";
export type LinkItem = { name: string; url: string };
export type FAQItem = { question: string; answer: string };
export type TransportOption = { name: string; time: string; price: string; steps: string[] };

export type Translations = {
  nav: { history: string; architecture: string; monuments: string; visiting: string; transportation: string; gallery: string; reviews: string; faq: string; location: string };
  hero: { tagline: string; title: string; subtitle: string; cta: string };
  rating: { reviews: string; source: string };
  history: { title: string; intro: string; originTitle: string; originContent: string; legendCard: { title: string; content: string } };
  architecture: { title: string; intro: string; specs: { structure: { title: string; content: string }; design: { title: string; content: string }; optics: { title: string; content: string } }; plaque: { title: string; items: { label: string; value: string }[] } };
  monuments: { title: string; intro: string; items: { name: string; description: string }[] };
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
    hero: { tagline: "秘鲁利马 · 历史中心区", title: "Plaza San Martín", subtitle: "圣马丁广场 · 利马历史地标 · 独立英雄的纪念之地", cta: "探索广场" },
    rating: { reviews: "条评价", source: "Google 评论" },
    history: {
      title: "历史背景与建造缘由",
      intro: "圣马丁广场（Plaza San Martín）是秘鲁首都利马最重要的公共广场之一，位于联合国教科文组织世界文化遗产——利马历史中心的范围内。广场以何塞·德·圣马丁（José de San Martín）命名，他是阿根廷-秘鲁将军，南美洲独立英雄，于1821年7月28日宣布秘鲁独立。\n\n**纪念秘鲁独立百年的历史意义**：广场于1921年7月27日正式落成，是为了庆祝秘鲁宣告独立100周年而建。它的建成也是利马在20世纪初迈向城市现代化进程中的一个关键标志。\n\n**致敬南美解放英雄**：广场得名于南美洲独立战争的关键领袖之一、阿根廷将军何塞·德·圣马丁（José de San Martín）。正是他在1821年宣布了秘鲁的脱离西班牙的独立。",
      originTitle: "从沼泽地到城市地标",
      originContent: "广场所在地原本是一片被称为「Maravillas」的沼泽地。20世纪初，随着利马城市现代化的推进，市政府决定在此建设一个新的广场。工程于1921年启动，以纪念秘鲁独立100周年。广场于1921年7月27日正式落成，由时任秘鲁总统奥古斯托·B·莱吉亚（Augusto B. Leguía）主持开幕仪式，恰好在圣马丁宣布独立的百年纪念日前一天。\n\n**世界文化遗产的核心部分**：圣马丁广场坐落于利马历史中心的范围内，由于其极高的历史和建筑价值，该区域在1988年被联合国教科文组织（UNESCO）正式宣布为世界文化遗产。",
      legendCard: {
        title: "你知道吗？著名的雕塑乌龙",
        content: "在广场纪念碑的下方有一尊代表'祖国母亲（Motherland）'的雕像，它因为一个著名的'乌龙'而备受游客讨论。相传，雕塑家在解读来自秘鲁的指令时，误将西班牙语中的'llama'（意为'火焰'）理解成了拼写完全相同的安第斯山脉特有动物'大羊驼（llama）'。结果，这尊庄严雕像的头上顶着一只可爱小羊驼的塑像，而不是原本要求的火苗。这个阴差阳错的小细节最终成为了该广场上最著名的奇观之一。"
      }
    },
    architecture: {
      title: "广场设计与建筑特色",
      intro: "圣马丁广场体现了20世纪初利马城市现代化的愿景，融合了新古典主义、新艺术和法国巴洛克风格。**和谐统一的欧式建筑群**：广场四周环绕着众多建于20世纪初的历史建筑，整体呈现出受欧洲风格（如新殖民主义和法国巴洛克风格）影响的对称之美。",
      specs: {
        structure: { title: "广场布局", content: "广场呈长方形，四周环绕着具有法国新艺术和巴洛克风格的建筑立面，体现了20世纪初利马城市现代化的愿景。广场设计对称和谐，是利马历史中心区最优雅的公共空间之一。" },
        design: { title: "雕塑艺术", content: "广场正中央矗立着由西班牙雕塑家马里亚诺·本利乌雷（Mariano Benlliure）设计的圣马丁将军跃马横枪青铜纪念碑。这是秘鲁民族认同的重要象征，展现了圣马丁将军骑在马背上、手持秘鲁国旗的英姿。" },
        optics: { title: "历史建筑", content: "**玻利瓦尔大酒店（Gran Hotel Bolívar）**：位于广场一侧，建于1924年，是利马最知名、最优雅的历史建筑之一。**科隆剧院（Teatro Colón）**：建于1914年，是广场周围的另一座重要历史建筑，体现了20世纪初利马的文化底蕴。" }
      },
      plaque: {
        title: "广场基本信息",
        items: [
          { label: "名称", value: "Plaza San Martín（圣马丁广场）" },
          { label: "建造年份", value: "1921年" },
          { label: "落成日期", value: "1921年7月27日" },
          { label: "纪念事件", value: "秘鲁独立100周年" },
          { label: "命名来源", value: "何塞·德·圣马丁将军" },
          { label: "雕塑家", value: "马里亚诺·本利乌雷（Mariano Benlliure）" },
          { label: "所在区", value: "利马历史中心区（UNESCO世界遗产）" },
          { label: "建筑风格", value: "新殖民主义、法国巴洛克风格" },
          { label: "附近地标", value: "玻利瓦尔大酒店、科隆剧院" }
        ]
      }
    },
    monuments: {
      title: "纪念雕像与周边建筑",
      intro: "广场以圣马丁将军的骑马雕像为核心，周围环绕着具有历史价值的建筑。**政治与社会生活的中心**：由于地处首都核心地带，这里不仅是市民休闲和游客观光的热门场所，长期以来也是秘鲁举行国家庆典、政治集会、社会游行和示威活动的主要公共舞台。",
      items: [
        { name: "圣马丁将军跃马横枪青铜纪念碑", description: "广场正中央矗立的纪念碑，由西班牙雕塑家马里亚诺·本利乌雷（Mariano Benlliure）设计。雕像展现了圣马丁将军骑在马背上、手持秘鲁国旗的英姿，是秘鲁民族认同的重要象征。纪念碑下方还有一尊代表'祖国母亲'的雕像。" },
        { name: "玻利瓦尔大酒店（Gran Hotel Bolívar）", description: "位于广场一侧的历史建筑，建于1924年，是利马最知名、最优雅的酒店之一。这座酒店曾是利马最豪华的酒店，吸引了众多国际游客和名人，是20世纪初利马城市现代化的重要见证。" },
        { name: "科隆剧院（Teatro Colón）", description: "建于1914年，位于广场周围，是利马重要的历史文化建筑。剧院体现了20世纪初利马的文化底蕴，是广场周边欧式建筑群的重要组成部分。" }
      ]
    },
    visiting: {
      title: "游览信息",
      intro: "圣马丁广场是利马历史中心区的重要公共空间，周围有众多历史建筑、商店和餐厅，是探索利马历史的理想起点。",
      hours: { title: "开放时间", content: "全天24小时开放", note: "作为公共广场，随时可以参观。白天更安全，建议白天或傍晚游览。" },
      price: { title: "费用说明", content: "免费开放", note: "广场是公共空间，无需门票，欢迎所有游客前来参观。" },
      duration: { title: "建议游览时长", content: "30分钟至1小时", note: "可以漫步广场、欣赏雕像和周围建筑，拍照留念。" },
      tips: { title: "出行建议", items: ["注意保管好个人物品（市中心人流密集）", "白天游览更安全", "穿着舒适的步行鞋", "携带相机拍照", "可结合参观附近的武器广场（Plaza de Armas）"] }
    },
    transportation: {
      title: "交通指南",
      airport: { title: "✈️ 豪尔赫·查韦斯国际机场 (LIM) ➔ 利马历史中心", content: "所有国际游客落地利马后，可直接在机场乘坐官方出租车或安排私人包车前往利马历史中心区。", options: [
        { name: "官方出租车 / 私人包车", price: "约 50-80 索尔", time: "约 45 分钟", steps: ["在机场官方柜台或提前预订", "直接前往利马历史中心区"] },
        { name: "机场大巴 + 出租车", price: "约 15-25 索尔", time: "约 1.5 小时", steps: ["乘坐机场专线大巴到市中心", "换乘出租车前往圣马丁广场"] }
      ]},
      publicTransport: {
        title: "🚇 地铁与公交",
        content: "利马地铁1号线可到达历史中心区附近，再步行或打车前往广场。",
        options: [
          {
            name: "地铁1号线 + 步行",
            description: "乘坐地铁到「Pizarro」或「Gamarra」站，再换乘出租车",
            steps: [
              "乘坐地铁1号线",
              "在最近站点下车",
              "打车或步行约10-15分钟到达广场"
            ]
          }
        ]
      },
      city: { title: "🚶 利马历史中心区内交通", content: "圣马丁广场位于历史中心区，步行可达多个重要景点。", steps: ["从武器广场步行约10分钟", "打车仅需约5分钟"] },
      tips: { title: "交通小贴士", items: ["市中心交通拥堵，建议步行或打车", "使用Uber等打车软件较为方便", "注意保管好个人物品", "晚上避免独自在市中心行走"] }
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
    hero: { tagline: "Lima, Peru · Historic City Center", title: "Plaza San Martín", subtitle: "San Martín Square · Historic Landmark · Tribute to Liberty", cta: "Explore the Square" },
    rating: { reviews: "reviews", source: "Google Reviews" },
    history: {
      title: "History & Background",
      intro: "Plaza San Martín is one of the most important public squares in Lima, the capital of Peru. The square is located within the Historic Center of Lima, a UNESCO World Heritage Site. The square is named after José de San Martín, the Argentine-Peruvian general and South American independence hero who proclaimed Peru's independence on July 28, 1821.\n\n**Commemorating the Centennial of Peruvian Independence**: The square was officially inaugurated on July 27, 1921, to celebrate the 100th anniversary of Peru's declaration of independence. Its construction was also a key milestone in Lima's urban modernization process in the early 20th century.\n\n**Tribute to the Hero of South American Liberation**: The square is named after one of the key leaders of the South American independence wars, Argentine General José de San Martín. It was he who proclaimed Peru's independence from Spain in 1821.",
      originTitle: "From Swamp to Urban Landmark",
      originContent: "The site where the square is located was originally a swamp known as 'Maravillas'. In the early 20th century, with the push for modernization in Lima, the city government decided to build a new square here. Construction began in 1921 to commemorate the centennial of Peru's independence. The square was officially inaugurated on July 27, 1921, presided over by then-President Augusto B. Leguía, exactly one day before the centennial anniversary of San Martín's proclamation of independence.\n\n**Part of the UNESCO World Heritage Site**: Plaza San Martín is situated within the Historic Center of Lima. Due to its immense historical and architectural value, this area was officially declared a UNESCO World Heritage Site in 1988.",
      legendCard: {
        title: "Did you know? The Famous Sculpture Mishap",
        content: "Beneath the square's monument, there is a statue representing 'Motherland'. It has become a topic of discussion among tourists due to a famous mishap. Legend has it that the sculptor, while interpreting instructions from Peru, misunderstood the Spanish word 'llama' (meaning 'flame') as the identically spelled animal 'llama' (the Andean camelid). As a result, this solemn statue has a cute little llama on its head instead of the requested flame. This accidental detail has become one of the most famous curiosities of the square."
      }
    },
    architecture: {
      title: "Square Design & Architectural Features",
      intro: "Plaza San Martín embodies the vision of early 20th century Lima urban modernization, blending neoclassical, art nouveau, and French Baroque styles. **Harmonious European Architectural Complex**: The square is surrounded by numerous historic buildings built in the early 20th century, presenting a symmetrical beauty influenced by European styles (such as Neocolonial and French Baroque).",
      specs: {
        structure: { title: "Square Layout", content: "The square is rectangular, surrounded by building facades in French Art Nouveau and Baroque styles, reflecting the urban modernization vision of Lima in the early 20th century. The symmetrical design of the square makes it one of the most elegant public spaces in Lima's Historic Center." },
        design: { title: "Sculptural Art", content: "In the center of the square stands the bronze equestrian monument of General San Martín, designed by Spanish sculptor Mariano Benlliure. This is an important symbol of Peruvian national identity, depicting General San Martín riding on horseback, holding the Peruvian flag." },
        optics: { title: "Historic Buildings", content: "**Gran Hotel Bolívar**: Located on one side of the square, built in 1924, it is one of the most famous and elegant historic buildings in Lima. **Teatro Colón**: Built in 1914, it is another important historic building around the square, reflecting the cultural heritage of Lima in the early 20th century." }
      },
      plaque: {
        title: "Basic Information",
        items: [
          { label: "Name", value: "Plaza San Martín" },
          { label: "Construction Year", value: "1921" },
          { label: "Inauguration Date", value: "July 27, 1921" },
          { label: "Commemorative Event", value: "Centennial of Peru's Independence" },
          { label: "Named After", value: "General José de San Martín" },
          { label: "Sculptor", value: "Mariano Benlliure" },
          { label: "District", value: "Lima Historic Center (UNESCO World Heritage)" },
          { label: "Architectural Style", value: "Neocolonial, French Baroque" },
          { label: "Nearby Landmarks", value: "Gran Hotel Bolívar, Teatro Colón" }
        ]
      }
    },
    monuments: {
      title: "Monuments & Surrounding Buildings",
      intro: "The square centers on the equestrian statue of General San Martín, surrounded by buildings of historical value. **Center of Political and Social Life**: Due to its location in the heart of the capital, it is not only a popular place for citizens to relax and tourists to sightsee, but has long been the main public stage for national celebrations, political rallies, social marches, and demonstrations in Peru.",
      items: [
        { name: "Bronze Equestrian Monument of General San Martín", description: "The monument standing in the center of the square, designed by Spanish sculptor Mariano Benlliure. The statue depicts General San Martín riding on horseback, holding the Peruvian flag, and is an important symbol of Peruvian national identity. Beneath the monument, there is also a statue representing 'Motherland'." },
        { name: "Gran Hotel Bolívar", description: "A historic building located on one side of the square, built in 1924. It is one of the most famous and elegant hotels in Lima. This hotel was once the most luxurious in Lima, attracting numerous international tourists and celebrities, and is an important witness to Lima's urban modernization in the early 20th century." },
        { name: "Teatro Colón", description: "Built in 1914, located around the square, it is an important historic and cultural building in Lima. The theater reflects the cultural heritage of Lima in the early 20th century and is an important part of the European-style architectural complex around the square." }
      ]
    },
    visiting: {
      title: "Visit Information",
      intro: "Plaza San Martín is an important public space in Lima's historic center, surrounded by numerous historic buildings, shops, and restaurants. It is an ideal starting point for exploring Lima's history.",
      hours: { title: "Opening Hours", content: "Open 24 hours daily", note: "As a public square, you can visit at any time. Daytime is safer; daytime or evening visits are recommended." },
      price: { title: "Entrance Fee", content: "Free Admission", note: "The square is a public space with no entrance fee, welcoming all visitors." },
      duration: { title: "Suggested Visit Duration", content: "30 minutes to 1 hour", note: "You can stroll around the square, admire the statue and surrounding buildings, and take photos." },
      tips: { title: "Travel Tips", items: ["Keep personal belongings secure (downtown area is crowded)", "Daytime visits are safer", "Wear comfortable walking shoes", "Bring a camera for photos", "Can be combined with a visit to nearby Plaza de Armas"] }
    },
    transportation: {
      title: "Transportation Guide",
      airport: { title: "✈️ Jorge Chávez Int'l Airport ➔ Lima Historic Center", content: "After landing in Lima, international tourists can take an official taxi or arrange a private transfer directly to Lima's historic center district.", options: [
        { name: "Official Taxi / Private Transfer", price: "About 50-80 soles", time: "About 45 minutes", steps: ["Book at official airport counters", "Head directly to Lima historic center"] },
        { name: "Airport Shuttle + Taxi", price: "About 15-25 soles", time: "About 1.5 hours", steps: ["Take the airport shuttle bus to downtown", "Transfer to a taxi to Plaza San Martín"] }
      ]},
      publicTransport: {
        title: "🚇 Metro & Bus",
        content: "Lima Metro Line 1 can reach near the historic center, then walk or take a taxi to the square.",
        options: [
          {
            name: "Metro Line 1 + Walk",
            description: "Take the metro to 'Pizarro' or 'Gamarra' station, then transfer to taxi",
            steps: [
              "Take Metro Line 1",
              "Get off at the nearest station",
              "Take a taxi or walk about 10-15 minutes to the square"
            ]
          }
        ]
      },
      city: { title: "🚶 Within Lima Historic Center", content: "Plaza San Martín is located in the historic center, within walking distance to multiple important attractions.", steps: ["About a 10-minute walk from Plaza de Armas", "Only about a 5-minute taxi ride"] },
      tips: { title: "Transportation Tips", items: ["Downtown traffic is congested; walking or taking taxi is recommended", "Using ride-hailing apps like Uber is convenient", "Keep personal belongings secure", "Avoid walking alone in downtown area at night"] }
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
    hero: { tagline: "Lima, Perú · Centro Histórico", title: "Plaza San Martín", subtitle: "Plaza San Martín · Lugar Histórico · Homenaje a la Libertad", cta: "Explorar" },
    rating: { reviews: "reseñas", source: "Google Reseñas" },
    history: {
      title: "Historia y Antecedentes",
      intro: "La Plaza San Martín es una de las plazas públicas más importantes de Lima, la capital del Perú. La plaza se encuentra dentro del Centro Histórico de Lima, un sitio del Patrimonio Mundial de la UNESCO. La plaza lleva el nombre de José de San Martín, el general argentino-peruano y héroe de la independencia sudamericana que proclamó la independencia del Perú el 28 de julio de 1821.\n\n**Conmemorando el Centenario de la Independencia Peruana**: La plaza fue inaugurada oficialmente el 27 de julio de 1921 para celebrar el 100º aniversario de la declaración de independencia del Perú. Su construcción también fue un hito clave en el proceso de modernización urbana de Lima a principios del siglo XX.\n\n**Homenaje al Héroe de la Liberación Sudamericana**: La plaza recibe su nombre en honor a uno de los líderes clave de las guerras de independencia sudamericanas, el general argentino José de San Martín. Fue él quien proclamó la independencia del Perú de España en 1821.",
      originTitle: "De Pantano a Hito Urbano",
      originContent: "El sitio donde se encuentra la plaza era originalmente un pantano conocido como 'Maravillas'. A principios del siglo XX, con el impulso de modernización de Lima, el gobierno municipal decidió construir una nueva plaza en este lugar. La construcción comenzó en 1921 para conmemorar el centenario de la independencia del Perú. La plaza fue inaugurada oficialmente el 27 de julio de 1921, presidida por el entonces presidente Augusto B. Leguía, exactamente un día antes del aniversario del centenario de la proclamación de independencia de San Martín.\n\n**Parte del Patrimonio Mundial de la UNESCO**: La Plaza San Martín se encuentra dentro del Centro Histórico de Lima. Debido a su inmenso valor histórico y arquitectónico, esta área fue declarada oficialmente Patrimonio Mundial de la UNESCO en 1988.",
      legendCard: {
        title: "¿Sabías? El Famscher Escultórico",
        content: "Debajo del monumento de la plaza, hay una estatua que representa la 'Madre Patria'. Se ha convertido en un tema de discusión entre los turistas debido a un famoso error. Se dice que el escultor, al interpretar las instrucciones de Perú, malinterpretó la palabra española 'llama' (que significa 'llama de fuego') como el animal andino 'llama' (el camélido andino). Como resultado, esta solemne estatua tiene una pequeña y adorable llama en su cabeza en lugar de la llama de fuego solicitada. Este detalle accidental se ha convertido en una de las curiosidades más famosas de la plaza."
      }
    },
    architecture: {
      title: "Diseño de la Plaza y Características Arquitectónicas",
      intro: "La Plaza San Martín encarna la visión de modernización urbana de Lima a principios del siglo XX, combinando estilos neoclásicos, art nouveau y barroco francés. **Armonioso Conjunto Arquitectónico Europeo**: La plaza está rodeada por numerosos edificios históricos construidos a principios del siglo XX, presentando una belleza simétrica influenciada por estilos europeos (como Neocolonial y barroco francés).",
      specs: {
        structure: { title: "Diseño de la Plaza", content: "La plaza es rectangular, rodeada por fachadas de edificios en estilo francés art nouveau y barroco, reflejando la visión de modernización urbana de Lima a principios del siglo XX. El diseño simétrico de la plaza la convierte en uno de los espacios públicos más elegantes del Centro Histórico de Lima." },
        design: { title: "Arte Escultórico", content: "En el centro de la plaza se encuentra el monumento ecuestre de bronce del General San Martín, diseñado por el escultor español Mariano Benlliure. Este es un símbolo importante de la identidad nacional peruana, que muestra al General San Martín montado a caballo, sosteniendo la bandera peruana." },
        optics: { title: "Edificios Históricos", content: "**Gran Hotel Bolívar**: Ubicado en un lado de la plaza, construido en 1924, es uno de los edificios históricos más famosos y elegantes de Lima. **Teatro Colón**: Construido en 1914, es otro edificio histórico importante alrededor de la plaza, reflejando el patrimonio cultural de Lima a principios del siglo XX." }
      },
      plaque: {
        title: "Información Básica",
        items: [
          { label: "Nombre", value: "Plaza San Martín" },
          { label: "Año de Construcción", value: "1921" },
          { label: "Fecha de Inauguración", value: "27 de julio de 1921" },
          { label: "Evento Conmemorativo", value: "Centenario de la Independencia del Perú" },
          { label: "Nombrado en honor de", value: "General José de San Martín" },
          { label: "Escultor", value: "Mariano Benlliure" },
          { label: "Distrito", value: "Centro Histórico de Lima (Patrimonio Mundial UNESCO)" },
          { label: "Estilo Arquitectónico", value: "Neocolonial, Barroco Francés" },
          { label: "Lugares Cercanos", value: "Gran Hotel Bolívar, Teatro Colón" }
        ]
      }
    },
    monuments: {
      title: "Monumentos y Edificios Circundantes",
      intro: "La plaza se centra en la estatua ecuestre del General San Martín, rodeada por edificios de valor histórico. **Centro de la Vida Política y Social**: Debido a su ubicación en el corazón de la capital, no solo es un lugar popular para que los ciudadanos se relajen y los turistas visiten, sino que ha sido durante mucho tiempo el principal escenario público para celebraciones nacionales, mítines políticos, marchas sociales y manifestaciones en el Perú.",
      items: [
        { name: "Monumento Ecuestre de Bronce del General San Martín", description: "El monumento que se encuentra en el centro de la plaza, diseñado por el escultor español Mariano Benlliure. La estatua muestra al General San Martín montado a caballo, sosteniendo la bandera peruana, y es un símbolo importante de la identidad nacional peruana. Debajo del monumento, también hay una estatua que representa la 'Madre Patria'." },
        { name: "Gran Hotel Bolívar", description: "Un edificio histórico ubicado en un lado de la plaza, construido en 1924. Es uno de los hoteles más famosos y elegantes de Lima. Este hotel fue una vez el más lujoso de Lima, atrayendo a numerosos turistas internacionales y celebridades, y es un testigo importante de la modernización urbana de Lima a principios del siglo XX." },
        { name: "Teatro Colón", description: "Construido en 1914, ubicado alrededor de la plaza, es un importante edificio histórico y cultural en Lima. El teatro refleja el patrimonio cultural de Lima a principios del siglo XX y es una parte importante del conjunto arquitectónico de estilo europeo alrededor de la plaza." }
      ]
    },
    visiting: {
      title: "Información de Visita",
      intro: "La Plaza San Martín es un espacio público importante en el centro histórico de Lima, rodeada por numerosos edificios históricos, tiendas y restaurantes. Es un punto de partida ideal para explorar la historia de Lima.",
      hours: { title: "Horario de Apertura", content: "Abierto las 24 horas, todos los días", note: "Como plaza pública, puede visitar en cualquier momento. El día es más seguro; se recomiendan visitas diurnas o nocturnas." },
      price: { title: "Entrada", content: "Entrada Gratuita", note: "La plaza es un espacio público sin cargo de entrada, dando la bienvenida a todos los visitantes." },
      duration: { title: "Duración Sugerida de la Visita", content: "30 minutos a 1 hora", note: "Puede caminar por la plaza, admirar la estatua y los edificios circundantes, y tomar fotos." },
      tips: { title: "Consejos de Viaje", items: ["Mantenga sus pertenencias personales seguras (el área del centro está concurrida)", "Las visitas diurnas son más seguras", "Use zapatos cómodos para caminar", "Traiga una cámara para fotos", "Puede combinarse con una visita a la cercana Plaza de Armas"] }
    },
    transportation: {
      title: "Guía de Transporte",
      airport: { title: "✈️ Aeropuerto Internacional Jorge Chávez ➔ Centro Histórico de Lima", content: "Después de aterrizar en Lima, los turistas internacionales pueden tomar un taxi oficial o arreglar un traslado privado directamente al distrito del centro histórico de Lima.", options: [
        { name: "Taxi Oficial / Traslado Privado", price: "Aprox. 50-80 soles", time: "Aprox. 45 minutos", steps: ["Reserve en los mostradores oficiales", "Diríjase directamente al centro histórico de Lima"] },
        { name: "Autobús del Aeropuerto + Taxi", price: "Aprox. 15-25 soles", time: "Aprox. 1.5 horas", steps: ["Tome el autobús del aeropuerto al centro", "Transfiera a un taxi a la Plaza San Martín"] }
      ]},
      publicTransport: {
        title: "🚇 Metro y Autobús",
        content: "La Línea 1 del Metro de Lima puede llegar cerca del centro histórico, luego camine o tome un taxi a la plaza.",
        options: [
          {
            name: "Línea 1 del Metro + Caminata",
            description: "Tome el metro a la estación 'Pizarro' o 'Gamarra', luego transfiera a taxi",
            steps: [
              "Tome la Línea 1 del Metro",
              "Baje en la estación más cercana",
              "Tome un taxi o camine unos 10-15 minutos hasta la plaza"
            ]
          }
        ]
      },
      city: { title: "🚶 Dentro del Centro Histórico de Lima", content: "La Plaza San Martín está ubicada en el centro histórico, a distancia de caminata de múltiples atracciones importantes.", steps: ["A unos 10 minutos a pie de la Plaza de Armas", "A solo 5 minutos en taxi"] },
      tips: { title: "Consejos de Transporte", items: ["El tráfico del centro es congestionado; se recomienda caminar o tomar taxi", "Usar aplicaciones de taxi como Uber es conveniente", "Mantenga sus pertenencias personales seguras", "Evite caminar solo en el área del centro de noche"] }
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
    hero: { tagline: "Lima, Piruw · Ñawpaq Llaqta", title: "Plaza San Martín", subtitle: "Plaza San Martín · San Martin Plaza · Libertad Yupay", cta: "Rikuy" },
    rating: { reviews: "niykuna", source: "Google niykuna" },
    history: {
      title: "Ñawpaq Kawsay",
      intro: "Plaza San Martín, Lima, Piruwpi. San Martin Plaza. José de San Martín libertador. UNESCO Patrimonio Mundial.\n\n**Perú libertad 100 wata**: 1921 watapi ruwasqa. José de San Martín libertador.",
      originTitle: "Maymanta hamun",
      originContent: "1921 watapi ruwasqa. Perú libertad 100 wata. Julio 27, 1921 p'unchaw kichasqa. UNESCO 1988 watapi.",
      legendCard: {
        title: "Yachankichu? Llama willakuy",
        content: "Escultor 'llama' nisqata mana yacharqan. Llama animal, mana k'ancha. Kayqa muyuriq willakuy."
      }
    },
    architecture: {
      title: "Imayna ruwasqa",
      intro: "Plaza San Martín allin ruwasqa. Europa estilo. San Martin rikch'an.",
      specs: {
        structure: { title: "Plaza Sayaynin", content: "Plaza San Martín, Lima centro. Europa estilo. Allin ruwasqa." },
        design: { title: "Rikch'an", content: "San Martín caballo rikch'an. Mariano Benlliure ruwarqa. Bronce." },
        optics: { title: "Historico Hotel", content: "Gran Hotel Bolívar. Teatro Colón. 1924, 1914 watapi." }
      },
      plaque: {
        title: "Willakuykuna",
        items: [
          { label: "Suti", value: "Plaza San Martín" },
          { label: "Wata", value: "1921" },
          { label: "Kichay P'unchaw", value: "Julio 27, 1921" },
          { label: "Escultor", value: "Mariano Benlliure" },
          { label: "Estilo", value: "Neocolonial, Francés" }
        ]
      }
    },
    monuments: {
      title: "Yuyaykuna",
      intro: "San Martín yuyanapaq. Política, social centro:",
      items: [
        { name: "San Martín General Monumento", description: "José de San Martín, Perú libertador. 1821 watapi libertad nisqa. Mariano Benlliure ruwarqa. Bronce." },
        { name: "Gran Hotel Bolívar", description: "Historico hotel. 1924 watapi ruwasqa. Lima centro." },
        { name: "Teatro Colón", description: "Teatro. 1914 watapi ruwasqa. Cultura centro." }
      ]
    },
    visiting: {
      title: "Puriy",
      intro: "Plaza San Martín purinapaq allin.",
      hours: { title: "Punchaw", content: "24 horas", note: "P'unchay puriy allin." },
      price: { title: "Qullqi", content: "Free", note: "Mana qullqiyuq." },
      duration: { title: "Hayk'aq", content: "30 minuto - 1 hora", note: "Rikuy, puriy." },
      tips: { title: "Yachay", items: ["P'unchay puriy", "Zapatos", "Cámara"] }
    },
    transportation: {
      title: "Chaykamuy",
      airport: { title: "Lima-manta", content: "Lima-man antawan hamuy.", options: [
        { name: "Taxi", price: "50 - 80 soles", time: "45 min", steps: ["Lima-manta taxi"] }
      ]},
      city: { title: "🚶 Lima Centro", content: "Lima centro-manta.", steps: ["Plaza de Armas-manta puriy", "Taxi"] },
      tips: { title: "Yachay", items: ["P'unchay puriy", "Taxi"] }
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
