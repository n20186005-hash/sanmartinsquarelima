import places from "./nearby-places.json";
import type { WalkLocale } from "./walk";

export const nearbyPlaces = places;
export const nearbyPath = (slug: string) => `/guide/${slug}`;
export const siteSource = "https://target2.promperu.gob.pe/teapuntas-lima-callao/distritos-con-historia/centro-historico-de-lima";

export const nearbyLabels = {
  es: {
    nearby: "Más lugares cerca de la Plaza San Martín", home: "Plaza San Martín", about: "Quién gestiona este lugar", info: "Información básica", address: "Ubicación", hours: "Horario", fees: "Entrada", map: "Ver ubicación en Google Maps", reviews: "Opiniones y puntuación", rating: "Consultar puntuación y opiniones en Google Maps", directions: "Ruta a pie desde la Plaza San Martín", transport: "Cómo llegar", starting: "Empieza en la Plaza San Martín y abre la ruta al acceso indicado abajo.", nearbyStop: "Continúa hacia", history: "Historia, arquitectura y qué observar", photo: "Fotografía", faq: "Preguntas frecuentes", question: "¿Cómo compruebo el acceso antes de salir?", related: "Siguiente parada", source: "Guía de turismo de PROMPERÚ", image: "Ficha y créditos de la fotografía", duration: "Tiempo orientativo", walk: "Guía a pie hasta la Plaza Mayor",
  },
  en: {
    nearby: "More places near San Martín Square", home: "San Martín Square", about: "Who manages this site", info: "At a glance", address: "Location", hours: "Opening hours", fees: "Admission", map: "View location on Google Maps", reviews: "Visitor ratings and reviews", rating: "Check ratings and reviews on Google Maps", directions: "Walking directions from San Martín Square", transport: "Getting here", starting: "Start at San Martín Square and open the walking directions to the location shown below.", nearbyStop: "Continue to", history: "History, architecture and what to look for", photo: "Photography", faq: "Frequently asked questions", question: "How can I check access before setting out?", related: "Next stop", source: "PROMPERÚ visitor guide", image: "Photo source and credits", duration: "Suggested time", walk: "Walk to Plaza Mayor",
  },
  zh: {
    nearby: "圣马丁广场周边景点", home: "圣马丁广场", about: "景点管理主体", info: "基本信息", address: "地点", hours: "开放时间", fees: "门票", map: "在 Google 地图查看地点", reviews: "游客评分与评价", rating: "在 Google 地图查看评分与评价", directions: "从圣马丁广场步行前往", transport: "交通与步行路线", starting: "从圣马丁广场出发，打开下方步行导航，按对应地点的入口前往。", nearbyStop: "下一站可去", history: "历史、建筑与观察重点", photo: "拍摄机位", faq: "常见问题", question: "出发前如何核对开放情况？", related: "下一站", source: "秘鲁旅游推广机构旅行指南", image: "照片来源与署名", duration: "建议停留", walk: "前往武器广场的步行指南",
  },
  qu: {
    nearby: "Plaza San Martínpa qayllanpi rikunapaq", home: "Plaza San Martín", about: "Pitaq kay kitita kamachin", info: "Kay kitimanta", address: "Maypi", hours: "Hayk’aq kichakun", fees: "Yaykuna", map: "Google Maps nisqapi maypi kasqanta qaway", reviews: "Waturiqkunapa rimaynin", rating: "Google Maps nisqapi waturiqkunapa rimayninta qaway", directions: "Plaza San Martínmanta purinapaq ñan", transport: "Imayna chayay", starting: "Plaza San Martínmanta qallariy. Uraypi purinapaq ñanta qaway.", nearbyStop: "Chaymanta riy", history: "Ñawpa kawsay, wasi ruray, ima qawanapaq", photo: "Siqi hurquy", faq: "Tapukuykuna", question: "Manaraq rispa imaynatataq yaykunata yachani?", related: "Qatiq kiti", source: "PROMPERÚ nisqapa purina qillqan", image: "Siqipa qallariynin", duration: "Rikunapaq pacha", walk: "Plaza Mayorman puriy",
  },
} satisfies Record<WalkLocale, Record<string, string>>;

const access = {
  public: {
    es: ["Espacio público. El acceso puede variar por eventos, obras o controles.", "Sin entrada para el espacio público.", "10–25 min"],
    en: ["Public space. Access can change during events, works or controls.", "No ticket for the public space.", "10–25 min"],
    zh: ["公共空间。活动、施工或管制期间出入可能变动。", "公共区域免票。", "10–25 分钟"],
    qu: ["Llapanpa kiti. Llamk’ay kaptinqa yaykuy hukmanyanman.", "Llapanpa kitiman qullqiwan mana yaykunchu.", "10–25 chininikuna"],
  },
  exterior: {
    es: ["Vista exterior desde la vía pública. Para entrar, consulta con la institución.", "Vista desde la calle gratuita.", "10–20 min"],
    en: ["Street-level exterior visit. Ask the institution about any interior access.", "Free to view from the street.", "10–20 min"],
    zh: ["可从公共街道看外观。入内请向管理机构查询。", "街道观览免费。", "10–20 分钟"],
    qu: ["Ñanmanta hawanta qaway. Ukhuman yaykunapaq kamachiqta tapuy.", "Ñanmanta qawanapaq qullqi mana kanchu.", "10–20 chininikuna"],
  },
  venue: {
    es: ["Consulta el horario y el acceso con la institución antes de ir.", "Consulta si la actividad elegida requiere entrada o reserva.", "30–60 min"],
    en: ["Confirm opening times and visitor access with the venue before visiting.", "Check for a ticket or reservation for the activity you choose.", "30–60 min"],
    zh: ["出发前向场馆核实当天开放时段及访客入场安排。", "查阅选定项目是否需要门票或预约。", "30–60 分钟"],
    qu: ["Manaraq rispa, hayk’aq kichakun chayta kamachiqta tapuy.", "Yaykunapaq qullqita otaq suti qillqayta tapuy.", "30–60 chininikuna"],
  },
};

export const managers = {
  city: "Municipalidad Metropolitana de Lima",
  serpar: "Servicio de Parques de Lima (SERPAR) · Municipalidad Metropolitana de Lima",
  rimac: "Municipalidad Distrital del Rímac",
  cathedral: "Arzobispado de Lima",
  franciscan: "Orden Franciscana (Provincia de los Doce Apóstoles del Perú)",
  dominican: "Orden de Predicadores (Dominicos)",
  merced: "Orden de la Merced",
  jesuit: "Compañía de Jesús",
  augustinian: "Orden de San Agustín",
  rosa: "Arzobispado de Lima",
  nazarenas: "Monasterio de las Nazarenas Carmelitas Descalzas",
  presidency: "Despacho Presidencial del Perú",
  congress: "Congreso de la República del Perú",
  foreign: "Ministerio de Relaciones Exteriores del Perú",
  aliaga: "Familia Aliaga",
  bcrp: "Banco Central de Reserva del Perú",
  literature: "Casa de la Literatura Peruana · Ministerio de Educación",
  navy: "Marina de Guerra del Perú",
  mali: "Museo de Arte de Lima (MALI)",
  water: "EMILIMA · Municipalidad Metropolitana de Lima",
};

export function visitDetails(place: (typeof places)[number], locale: WalkLocale) {
  const [hours, fees, time] = access[place.access as keyof typeof access][locale];
  const venue = venueInformation[place.slug];
  return [venue?.hours[locale] ?? hours, venue?.fees[locale] ?? fees, time];
}

export function locationLinks(place: (typeof places)[number]) {
  const query = encodeURIComponent(`${place.name}, ${place.address}, Lima, Perú`);
  return {
    map: `https://www.google.com/maps/search/?api=1&query=${query}`,
    transit: `https://www.google.com/maps/dir/?api=1&destination=${query}&travelmode=transit`,
    walk: `https://www.google.com/maps/dir/?api=1&origin=Plaza+San+Mart%C3%ADn%2C+Lima&destination=${query}&travelmode=walking`,
  };
}

export const visitorPlanning = {
  es: {
    tips: "Consejos para la visita",
    access: "Cuando el centro tenga cierres viales, consulta un punto de descenso en el perímetro y completa el trayecto a pie por los cruces señalizados.",
    lodging: "Dónde alojarse",
    stay: "Para hacer el circuito a pie por la mañana, busca alojamiento cerca de la Plaza San Martín o de la Plaza Mayor y comprueba el acceso en taxi si llevas equipaje.",
    walkManagement: "La Municipalidad Metropolitana de Lima gestiona los espacios públicos de este recorrido. Cada iglesia, museo y edificio del trayecto tiene su propio responsable y sus propias condiciones de acceso.",
  },
  en: {
    tips: "Visit tips",
    access: "When streets in the historic centre are closed, check for a drop-off point at the perimeter and use marked crossings for the final walk.",
    lodging: "Where to stay",
    stay: "For an early start on foot, look near San Martín Square or Plaza Mayor. Check taxi access to your lodging if you have luggage.",
    walkManagement: "The Metropolitan Municipality of Lima manages the public spaces along this route. Each church, museum and building has its own operator and visitor arrangements.",
  },
  zh: {
    tips: "游览建议",
    access: "老城道路临时管制时，可查询外围下车点，再走人行横道前往。携带行李时，宜事先核对车辆能否开到住宿入口。",
    lodging: "住宿建议",
    stay: "若计划一早步行逛老城，可在圣马丁广场或武器广场附近住宿。携带行李时可提前确认住宿门口能否上下车。",
    walkManagement: "此路线经过的公共广场和街道由利马大都会市政府管理。沿途教堂、博物馆和其他建筑各有管理机构，入内参观按各处安排。",
  },
  qu: {
    tips: "Waturinapaq yuyaykuna",
    access: "Ñankuna wisq’asqa kaptin, llaqta patapi karromanta uraykuy. Chimbanapaq ñankunata qatipay.",
    lodging: "Maypi puñuna",
    stay: "Tutamanta purinaykipaq Plaza San Martínpa utaq Plaza Mayorpa qayllanpi puñuna wasita maskay.",
    walkManagement: "Lima llaqtapa kamachiynin kay llapanpa ñankunata qawan. Sapa much’ay wasi, museo, huk wasikunapas kikin kamachiqniyuqmi.",
  },
};

export const venueInformation: Record<string, {
  source: string;
  hours: Record<WalkLocale, string>;
  fees: Record<WalkLocale, string>;
}> = {
  "casa-aliaga": {
    source: "https://casadealiaga.com/en/tourist-visits/",
    hours: { es: "Todos los días, 10:00–16:00. La casa pide contratar un guía oficial.", en: "Daily, 10:00–16:00. The house requires an independently hired official guide.", zh: "每日 10:00–16:00。宅邸要求访客自行聘请持证导游。", qu: "Sapa p’unchay 10:00–16:00. Yaykunapaq kamachisqa pusaqta maskay." },
    fees: { es: "S/ 35 por persona. Consulta el coste del guía por separado.", en: "S/ 35 per person. Check the guide fee separately.", zh: "门票每人 35 索尔，导游费另行询问。", qu: "Sapa runa S/ 35. Pusaqpa qullqinta sapanta tapuy." },
  },
  "museo-bcrp": {
    source: "https://mucen.bcrp.gob.pe/",
    hours: { es: "Consulta el horario vigente en la agenda del Museo Central antes de ir.", en: "Check the Museo Central programme for current opening hours.", zh: "出发前通过中央博物馆的活动日历核实开放时段。", qu: "Manaraq rispa Museo Centralpa qillqanpi kichana pachata qaway." },
    fees: { es: "Ingreso libre según el BCRP. Revisa si una actividad concreta requiere inscripción.", en: "The BCRP lists free admission. Check whether your chosen activity requires registration.", zh: "据秘鲁中央储备银行资料，博物馆免费入场。参加活动前请核对是否需报名。", qu: "BCRP nisqanman hina mana qullqiwanchu yaykunki. Ruranapaq suti qillqayta tapuy." },
  },
  catedral: {
    source: "https://target2.promperu.gob.pe/teapuntas-lima-callao/distritos-con-historia/centro-historico-de-lima/basilica-catedral-de-lima",
    hours: { es: "Lun–vie 09:00–20:00, sáb 10:00–22:00, dom 13:00–19:00.", en: "Mon–Fri 09:00–20:00, Sat 10:00–22:00, Sun 13:00–19:00.", zh: "周一至周五 09:00–20:00，周六 10:00–22:00，周日 13:00–19:00。", qu: "Killachaw–Ch’askachaw 09:00–20:00, K’uychichaw 10:00–22:00, Intichaw 13:00–19:00." },
    fees: { es: "General S/ 20 para nacionales y S/ 30 para extranjeros. Consulta las tarifas reducidas.", en: "General admission: S/ 20 for Peruvian visitors and S/ 30 for international visitors. Check concessions.", zh: "普通票：秘鲁访客 20 索尔，国际访客 30 索尔。优惠票见参观资料。", qu: "Piruwmanta waturiqkuna S/ 20, hawa suyumanta S/ 30. Pisilla qullqipaq qillqata qaway." },
  },
  "san-francisco": {
    source: "https://target2.promperu.gob.pe/teapuntas-lima-callao/distritos-con-historia/centro-historico-de-lima/iglesia-y-convento-de-san-francisco",
    hours: { es: "Iglesia 09:00–13:00 todos los días según PROMPERÚ. Confirma la hora del museo y las catacumbas para tu fecha.", en: "PROMPERÚ lists church hours as 09:00–13:00 daily. Check the museum and catacomb schedule for your date.", zh: "据秘鲁旅游推广机构资料，教堂每日 09:00–13:00 开放。修道院博物馆与地下墓穴另查当天时段。", qu: "Much’ay wasi sapa p’unchay 09:00–13:00. Museo uku p’ampanawan hayk’aq kichakun chayta tapuy." },
    fees: { es: "Iglesia gratuita. Museo y catacumbas: adulto S/ 20, estudiante S/ 10, niño S/ 5.", en: "Church entry is free. Museum and catacombs: adult S/ 20, student S/ 10, child S/ 5.", zh: "教堂免费。博物馆及地下墓穴：成人 20 索尔、学生 10 索尔、儿童 5 索尔。", qu: "Much’ay wasi mana qullqiyuq. Museo: hatun runa S/ 20, yachakuq S/ 10, wawa S/ 5." },
  },
  "santo-domingo": {
    source: "https://target2.promperu.gob.pe/teapuntas-lima-callao/distritos-con-historia/centro-historico-de-lima/iglesia-y-museo-del-convento-de-santo-domingo",
    hours: { es: "Museo mar–dom 09:30–13:00 y 14:00–17:00. Consulta el horario de misas por separado.", en: "Museum Tue–Sun 09:30–13:00 and 14:00–17:00. Check worship times separately.", zh: "博物馆周二至周日 09:30–13:00、14:00–17:00。教堂弥撒时间另查。", qu: "Museo Antichawmanta Intichawkama 09:30–13:00, 14:00–17:00. Misa pachata sapanta tapuy." },
    fees: { es: "Museo: general S/ 15. Consulta tarifas reducidas para estudiantes y mayores.", en: "Museum general admission: S/ 15. Check student and senior concessions.", zh: "博物馆普通票 15 索尔，学生和长者优惠见参观资料。", qu: "Museoman yaykuna S/ 15. Yachakuqkunapa kuraqkunapa qullqinta tapuy." },
  },
  "parque-reserva": {
    source: "https://target2.promperu.gob.pe/teapuntas-lima-callao/distritos-con-historia/centro-historico-de-lima/circuito-magico-del-agua-en-el-parque-de-la-reserva",
    hours: { es: "Visita de tarde y noche. Consulta para tu fecha la apertura y el horario de la Fuente de la Fantasía.", en: "Afternoon and evening visits. Check entry and Fantasy Fountain show times for your date.", zh: "建议下午或晚间到访。出发前查询当天开园及幻想喷泉表演时间。", qu: "Ch’isi tutapas waturiy. Pukyu qawachikuypa pachanta ñawpaqta tapuy." },
    fees: { es: "La ficha de PROMPERÚ indica entrada general de S/ 5. Verifica el precio del día.", en: "PROMPERÚ lists general admission at S/ 5. Verify the price for your visit.", zh: "秘鲁旅游推广机构资料列普通票 5 索尔，实际价格请核对到访当天安排。", qu: "PROMPERÚ qillqanpi yaykuna S/ 5. Chay p’unchaypa qullqinta tapuy." },
  },
  "parque-muralla": {
    source: "https://www.serpar.gob.pe/parques-metropolitanos/parque-de-la-muralla/",
    hours: { es: "Todos los días, 06:45–18:00.", en: "Daily, 06:45–18:00.", zh: "每日 06:45–18:00。", qu: "Sapa p’unchay, 06:45–18:00." },
    fees: { es: "Ingreso libre al parque.", en: "Free park entry.", zh: "公园免费入场。", qu: "Kanchaman mana qullqiwanchu yaykunki." },
  },
  "casa-literatura": {
    source: "https://www.casadelaliteratura.gob.pe/",
    hours: { es: "Martes a domingo, 10:00–19:00.", en: "Tuesday to Sunday, 10:00–19:00.", zh: "周二至周日 10:00–19:00。", qu: "Antichawmanta Intichawkama, 10:00–19:00." },
    fees: { es: "Ingreso libre.", en: "Free entry.", zh: "免费入场。", qu: "Mana qullqiwanchu yaykunki." },
  },
  "casa-grau": {
    source: "https://target2.promperu.gob.pe/teapuntas-lima-callao/distritos-con-historia/centro-historico-de-lima/museo-naval-casa-grau-de-lima",
    hours: { es: "Martes a domingo, 09:00–13:00 y 14:00–16:00.", en: "Tuesday to Sunday, 09:00–13:00 and 14:00–16:00.", zh: "周二至周日 09:00–13:00、14:00–16:00。", qu: "Antichawmanta Intichawkama, 09:00–13:00, 14:00–16:00." },
    fees: { es: "Adultos S/ 3. Consulta los descuentos y las exenciones en la ficha.", en: "Adults S/ 3. Check the listing for discounts and exemptions.", zh: "成人 3 索尔。优惠和免票条件见参观资料。", qu: "Hatun runakuna S/ 3. Pisilla qullqipaq qillqata qaway." },
  },
  mali: {
    source: "https://mali.pe/es/calendario/",
    hours: { es: "Consulta la sesión de admisión de tu fecha en el calendario del MALI.", en: "Check the MALI calendar for admission times on your date.", zh: "请在馆方日历核对到访当天的入场时段。", qu: "MALIpa p’unchay qillqanpi yaykuna pachata qaway." },
    fees: { es: "El precio depende del boleto y la actividad. Entrada peatonal por la Puerta 3A.", en: "Price varies by ticket and activity. Use Gate 3A on foot.", zh: "票价视门票种类和活动而定。步行从 3A 门进入。", qu: "Ruranaman hina qullqi. Chakiwan 3A punkumanta yaykuy." },
  },
};

export const guideSections = {
  es: {
    introduction: "Descubre el lugar", highlights: "Qué ver", name: "Nombre local", kind: "Tipo de lugar", manager: "Gestión", route: "Recorrido a pie", rules: "Antes de ir", directions: "Ubicación y mapa", sources: "Información para la visita",
    kinds: { square: "Plaza pública", church: "Patrimonio religioso", civic: "Edificio institucional", house: "Casona histórica", park: "Parque urbano", museum: "Museo o espacio cultural", street: "Paseo histórico", theatre: "Teatro histórico" },
  },
  en: {
    introduction: "Explore the site", highlights: "What to look for", name: "Local name", kind: "Type of site", manager: "Managed by", route: "Walking itinerary", rules: "Before you go", directions: "Address and map", sources: "Visitor information",
    kinds: { square: "Public square", church: "Religious heritage site", civic: "Institutional building", house: "Historic house", park: "City park", museum: "Museum or cultural venue", street: "Historic walkway", theatre: "Historic theatre" },
  },
  zh: {
    introduction: "景点导览", highlights: "景区特色", name: "当地名称", kind: "景点类型", manager: "管理主体", route: "步行游览路线", rules: "游览须知", directions: "交通指南与地图", sources: "访客资料",
    kinds: { square: "公共广场", church: "宗教历史建筑", civic: "机构办公建筑", house: "历史宅邸", park: "城市公园", museum: "博物馆或文化场馆", street: "历史街道或步道", theatre: "历史剧院" },
  },
  qu: {
    introduction: "Kay kitita riqsiy", highlights: "Ima qawanapaq", name: "Llaqta suti", kind: "Ima kiti", manager: "Kamachiq", route: "Chakiwan purinapaq ñan", rules: "Manaraq rispa", directions: "Maypi kasqan, mapa", sources: "Waturinapaq willakuy",
    kinds: { square: "Llapanpa plaza", church: "Ñawpa much’ay wasi", civic: "Kamachiy wasi", house: "Ñawpa wasi", park: "Llaqtapa kanchan", museum: "Museo utaq qawachina wasi", street: "Ñawpa purina ñan", theatre: "Ñawpa taki wasi" },
  },
};

export const transitDetails = {
  es: { station: "Estación del Metropolitano para orientarte", verify: "Consulta la ruta y las paradas del servicio antes de salir.", map: "Ruta en transporte público" },
  en: { station: "Metropolitano station to use as a reference", verify: "Check the service route and stopping pattern before leaving.", map: "Public transit directions" },
  zh: { station: "可作为下车参考的 Metropolitano 快速公交站", verify: "出发前核对所乘线路和停站安排。", map: "查看公共交通路线" },
  qu: { station: "Metropolitano kaypi sayan", verify: "Manaraq rispa maypi sayasqanta qaway.", map: "Llapanpa karrunpi chayanapaq ñan" },
};

const oldTownCore = new Set([
  "plaza-mayor", "catedral", "palacio-gobierno", "palacio-municipal", "palacio-arzobispal",
  "casa-aliaga", "san-francisco", "santo-domingo", "parque-muralla", "casa-literatura", "puente-piedra",
  "alameda-descalzos", "paseo-aguas",
]);

export function transitStation(slug: string) {
  if (slug === "parque-reserva") return "Estadio Nacional";
  if (["mali", "parque-exposicion", "museo-metropolitano", "plaza-francia"].includes(slug)) return "Estación Central";
  return oldTownCore.has(slug) ? "Jirón de la Unión" : "Colmena";
}

export const siteContext = {
  square: {
    es: "Lee la plaza por su perímetro: las fachadas y los accesos explican qué instituciones o calles organizan la vida del espacio. El monumento central ayuda a entender hacia dónde miraba el diseño original.",
    en: "Read the square from its perimeter. Facades and entrances show which institutions or streets shape its daily use, while the central monument gives you an axis to follow.",
    zh: "从广场外围观察，沿街立面和各处入口能看出哪些机构或街道组织了这里的日常活动。再以纪念物为参照，寻找规划时的主要视线轴。",
    qu: "Plazapa muyuriqninmanta wasikunata, yaykuna ñankunata qaway. Chawpipi saywachamanta ñanta qatipay.",
  },
  church: {
    es: "En el centro histórico, el atrio conecta el templo con la vida de la calle. Distingue el espacio abierto de la nave y, cuando exista un convento visitable, de los recintos dedicados a la vida comunitaria.",
    en: "In the historic centre, the forecourt connects a church with the street. Distinguish the open approach from the nave and, where a convent is open, from the rooms built for communal life.",
    zh: "在利马老城，教堂前庭承接街道与宗教建筑。可分别观察室外前庭、举行礼拜的中殿，以及开放参观的修道院生活空间。",
    qu: "Much’ay wasipa pampa ñanwan tinkun. Hawata ukunta sapanta qaway. Convento kichasqa kaptin, ayllu kawsana kuartukunata qaway.",
  },
  civic: {
    es: "La fachada puede leerse como parte de la calle incluso si el edificio está en uso. Compara la entrada ceremonial con los accesos laterales y observa cómo se relaciona con los edificios vecinos.",
    en: "The frontage is part of the streetscape even when the building is in use. Compare the formal entrance with side access and see how the building relates to its neighbours.",
    zh: "即使建筑仍在办公，从公共街区也能看懂它的外部布局。可对照礼仪正门与侧面通道，观察建筑与相邻立面的关系。",
    qu: "Wasi llamk’achkaspanpas ñanmanta uyanta qaway. Hatun punkuta ladupi punkukunatawan tupachiy.",
  },
  house: {
    es: "En las casonas limeñas, el balcón proyectado cambia lo que se ve desde la calle. La relación entre portada, ventanas y balcón permite reconocer la organización doméstica aun desde fuera.",
    en: "In Lima’s mansions, projecting balconies change what you see from the street. The arrangement of doorway, windows and balcony offers clues to the domestic layout even from outside.",
    zh: "利马历史宅邸常把木阳台挑出街面。从室外比较主门、窗洞和阳台的相互位置，也能读出一些原有住宅的空间安排。",
    qu: "Lima ñawpa wasikunapa balkonkunan ñanman lluqsin. Punkuta, t’ukuta balkonkunatawan qawaspa wasi rakisqanta riqsiy.",
  },
  park: {
    es: "Además del atractivo principal, observa por dónde te llevan los senderos y desde qué nivel se ve mejor el conjunto. El parque ofrece una lectura distinta desde sus bordes y desde el interior.",
    en: "Beyond the main attraction, follow the paths and note which level gives the clearest view. The park reads differently from its edges and from inside.",
    zh: "除了主要看点，也可留意步道如何引导视线。分别从园区边缘和内部停留，辨认地形高差、路径和景物之间的关系。",
    qu: "Kanchapa ñankunata qatipay. Hawa patamanta, ukhupimantapas mayqen allin rikukun chayta qaway.",
  },
  museum: {
    es: "Dedica un momento al inmueble antes de la exposición. Cuando una colección ocupa un edificio reutilizado, la entrada, las escaleras y los recorridos pueden conservar la huella de su función anterior.",
    en: "Spend time with the building before the exhibition. In a reused venue, the entrance, stairs and circulation can still show how the building originally worked.",
    zh: "看展前可先花一点时间观察建筑本身。设于改造建筑内的馆舍，入口、楼梯和参观动线常能保留原用途的痕迹。",
    qu: "Qawachikuyman yaykunaykipaq ñawpaqta wasita qaway. Punku, siqana, ñankuna ñawpa llamk’ayninta rikuchin.",
  },
  street: {
    es: "El recorrido se entiende caminando: alterna perspectivas largas con paradas en los cruces o extremos. Así se aprecian tanto el trazado como sus conexiones con otros barrios o edificios.",
    en: "The walk makes sense on foot. Alternate long views with pauses at crossings or endpoints to see how the route connects with neighbouring streets and buildings.",
    zh: "这类景点适合边走边看。沿长轴看整体，再在路口或两端停留，观察它怎样连接相邻街道、街区和建筑。",
    qu: "Chakiwan purispa ñanta riqsiy. Karumanta qaway, tinkuypi sayaspa huk ñankunawan imayna tinkusqanta qaway.",
  },
  theatre: {
    es: "El frente de un teatro organiza la llegada desde la calle, mientras que la experiencia interior depende de la programación. En una misma cuadra puedes leer la relación entre arquitectura y actividad cultural.",
    en: "A theatre’s frontage shapes how people arrive, while the programme determines the experience inside. Look at how the building and the street support a working cultural venue.",
    zh: "剧院立面和临街入口决定观众怎样抵达，馆内体验则随节目变化。从街道出发，可观察公共文化场馆怎样和所在街区相连。",
    qu: "Taki wasipa punkun ñanmanta yaykuqkunata chaskin. Ukhupi ruranakuna p’unchayman hina hukmanyan.",
  },
};

export const guideRules = {
  es: "Mantén libres los accesos. Consulta antes de fotografiar interiores o entrar en zonas reservadas.",
  en: "Keep entrances clear. Ask before photographing interiors or entering restricted areas.",
  zh: "请勿占用出入口。拍摄室内或进入有管制的区域前，请先询问现场人员。",
  qu: "Punkuta ama hark’aychu. Ukhupi siqita hurqunaykipaq utaq yaykunaykipaq ñawpaqta tapuy.",
};
