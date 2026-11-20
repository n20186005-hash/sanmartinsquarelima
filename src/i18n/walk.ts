export const walkPath = "/guide/plaza-mayor-walk";

export const walks = {
  es: {
    title: "De la Plaza San Martín a la Plaza Mayor de Lima a pie",
    intro: "Recorre el Jirón de la Unión entre dos plazas del centro histórico de Lima. La ruta empieza en la esquina de esta calle con la avenida Nicolás de Piérola.",
    route: "Ruta a pie",
    steps: [
      "Empieza en la Plaza San Martín. Observa la estatua ecuestre desde un lateral y recorre el borde de la plaza para ver cómo las fachadas enmarcan el monumento.",
      "Entra al Jirón de la Unión y sigue hacia la Plaza Mayor. Tómate un momento para mirar los balcones y las fachadas por encima de los escaparates. Usa los cruces señalizados.",
      "Ya en la Plaza Mayor, busca un punto desde el que puedas ver la catedral y los edificios que rodean la plaza. Si quieres visitar un interior, consulta su horario por separado.",
    ],
    history: "La Plaza San Martín se inauguró el 27 de julio de 1921, durante el centenario de la independencia del Perú. El diseño de Manuel Piqueras Cotolí comprende el trazado, la jardinería y el mobiliario de la plaza.",
    question: "¿La ruta requiere entrada?",
    answer: "El paseo por las calles y las dos plazas es de libre acceso. Las visitas a edificios pueden tener horarios y tarifas propios.",
    back: "Guía de la Plaza San Martín",
    map: "Abrir ruta a pie en Google Maps",
    source: "Inventario turístico del MINCETUR",
  },
  en: {
    title: "Walk from Plaza San Martín to Plaza Mayor in Lima",
    intro: "Follow Jirón de la Unión between two squares in Lima’s historic center. Start where the street meets Avenida Nicolás de Piérola.",
    route: "Walking route",
    steps: [
      "Start at Plaza San Martín. View the equestrian statue from the side, then circle the square to see how its surrounding façades frame the monument.",
      "Follow Jirón de la Unión toward Plaza Mayor. Look above the shopfronts for balconies and façade details, and use designated crossings.",
      "At Plaza Mayor, find a spot with a clear view of the cathedral and the buildings around the square. Check visiting hours separately if you plan to go inside.",
    ],
    history: "Plaza San Martín opened on July 27, 1921, during the centenary celebrations of Peru’s independence. Manuel Piqueras Cotolí designed the square’s layout, gardens and furnishings.",
    question: "Do I need a ticket for the walk?",
    answer: "The streets and both squares are free to visit. Buildings along the route can have their own hours and admission fees.",
    back: "Plaza San Martín visitor guide",
    map: "Open walking directions in Google Maps",
    source: "MINCETUR tourism inventory",
  },
  zh: {
    title: "利马圣马丁广场到武器广场步行路线",
    intro: "沿联盟街（Jirón de la Unión）串联利马历史中心的两座广场，从联盟街与尼古拉斯·德·彼罗拉大道的交会处出发。",
    route: "步行路线",
    steps: [
      "从圣马丁广场出发。先从侧面看骑马雕像，再沿广场边缘走一圈，观察周围建筑立面如何衬托纪念碑。",
      "沿联盟街步行前往武器广场。抬头看店面上方的阳台和立面装饰，过街时走标示的人行横道。",
      "抵达武器广场后，找一个能同时看到大教堂与周边建筑的位置。如果计划入内参观，请分别查询各处开放时间。",
    ],
    history: "圣马丁广场于 1921 年 7 月 27 日、秘鲁独立百年纪念期间揭幕。曼努埃尔·皮克拉斯·科托利设计了广场布局、园林与公共设施。",
    question: "步行路线需要买票吗？",
    answer: "街道和两座广场可免费步行游览。沿途建筑的开放时间和门票须分别查询。",
    back: "返回圣马丁广场游览指南",
    map: "在 Google 地图打开步行导航",
    source: "秘鲁外贸与旅游部景点名录",
  },
  qu: {
    title: "Lima llaqtapi Plaza San Martín-manta Plaza Mayor-kama puriy",
    intro: "Lima llaqta chawpipi iskay plazakunata Jirón de la Unión ñanwan tupachiy. Avenida Nicolás de Piérola tinkisqanpi qallariy.",
    route: "Purina ñan",
    steps: [
      "Plaza San Martín-pi qallariy. Caballupi José de San Martín-pa estatuntam rikunki. Plaza muyuriq wasikunatapas qaway.",
      "Jirón de la Unión ñanta Plaza Mayor-kama puriy. Wasikunapa balcónninkunata wichayman qaway.",
      "Plaza Mayor-pi Catedral-ta, plaza muyuriq wasikunatapas qaway. Umanaykipaq kichasqa pachata tapukuy.",
    ],
    history: "Plaza San Martín-ta 27 julio 1921 watapi kicharqanku, Piruwpa qispisqanpa pachak wata rayminpi. Manuel Piqueras Cotolí plaza ñankunata, muya kunata, tiyarinakunata kamachirqan.",
    question: "Kay ñanta purinapaq qullqita qunachu?",
    answer: "Ñankunapi, iskay plazakunapipas mana qullqita quspa puriyta atinki. Wasikunaman yaykunapaq sapa wasipa pachanta, chaninta tapukuy.",
    back: "Plaza San Martín-man kutiy",
    map: "Google Maps-pi purina ñanta qaway",
    source: "MINCETUR-pa willakuynin",
  },
};

export const siteUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "www.sanmartinsquarelima.com"}`;
export type WalkLocale = keyof typeof walks;
export const walkLocales = Object.keys(walks) as WalkLocale[];

export function walkAlternates(path: string) {
  return {
    ...Object.fromEntries(walkLocales.map((locale) => [locale, `${siteUrl}/${locale}${path}`])),
    "x-default": `${siteUrl}/en${path}`,
  };
}
