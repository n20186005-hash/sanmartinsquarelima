export const legalPages = ["privacy", "terms", "cookies"] as const;
export type LegalPage = (typeof legalPages)[number];

export const legalCopy = {
  zh: {
    updated: "最后更新于 2026 年 6 月",
    privacy: { title: "隐私政策", sections: [
      ["收集的信息", "我们仅收集提供服务所需的最低限度数据，包括浏览数据（IP 地址、浏览器类型和访问页面）、Cookie 及类似技术，以及您通过联系表格或电子邮件自愿提供的信息。"],
      ["信息的用途", "我们使用这些信息改进网站与浏览体验、分析访问情况、回应请求并履行适用的法律义务。"],
      ["第三方服务", "Google 地图等第三方服务有各自的隐私政策。访问外部网站或使用嵌入式服务时，请查阅相应政策。"],
      ["您的权利", "在适用法律下，您可以请求访问、更正或删除个人数据，反对处理，并向相关监管机构投诉。"],
    ] },
    terms: { title: "服务条款", sections: [
      ["访问和使用", "访问本网站即表示您同意这些服务条款。"],
      ["内容使用", "本站为独立第三方旅行指南，资料仅供参考。"],
      ["信息准确性", "开放、票价、路线与服务可能变动。出发前请向景点管理方核实关键资料。"],
      ["知识产权", "网站设计和原创内容受版权保护。景点照片的来源与署名见各页。Google 地图受其服务条款约束。"],
      ["责任限制", "本网站按现状提供。在法律允许的范围内，我们对因使用网站信息而产生的损失不承担责任。"],
    ] },
    cookies: { title: "Cookie 设置", intro: "在此查看和管理此浏览器中的网站偏好。", required: "必要设置", analytics: "分析偏好", preferences: "显示偏好", marketing: "营销偏好", save: "保存偏好", reject: "拒绝可选项目", saved: "已在此浏览器保存偏好。", note: "有些网站功能需要保留必要设置。第三方嵌入服务按其各自的政策运行。" },
  },
  en: {
    updated: "Last updated June 2026",
    privacy: { title: "Privacy policy", sections: [
      ["Information collected", "We collect the minimum data needed to provide the site, including browsing data such as IP address, browser type and visited pages, cookies and similar technologies, and information you voluntarily share by contact form or email."],
      ["How we use information", "We use it to improve the site and browsing experience, understand traffic, respond to requests and meet applicable legal obligations."],
      ["Third-party services", "Services such as Google Maps have their own privacy policies. Consult the relevant policy for external sites and embedded services."],
      ["Your rights", "Where applicable law provides, you may request access, correction or deletion, object to processing and complain to the relevant regulator."],
    ] },
    terms: { title: "Terms of service", sections: [
      ["Access and use", "By using this website you agree to these terms."],
      ["Use of content", "This independent travel guide provides information for reference."],
      ["Accuracy of information", "Opening hours, prices, routes and services can change. Verify important details with the attraction operator before travelling."],
      ["Intellectual property", "The site design and original content are protected by copyright. See each page for image credits. Google Maps is subject to its own terms of service."],
      ["Limitation of liability", "The website is provided as is. To the extent permitted by law, we are not liable for losses arising from use of the information."],
    ] },
    cookies: { title: "Cookie settings", intro: "Review and manage site preferences for this browser.", required: "Essential settings", analytics: "Analytics preferences", preferences: "Display preferences", marketing: "Marketing preferences", save: "Save preferences", reject: "Reject optional settings", saved: "Preferences saved in this browser.", note: "Some features depend on essential settings. Third-party embeds operate under their own policies." },
  },
  es: {
    updated: "Última actualización en junio de 2026",
    privacy: { title: "Política de privacidad", sections: [
      ["Datos recopilados", "Recogemos los datos mínimos para ofrecer el sitio, incluidos la dirección IP, el navegador, las páginas visitadas, las cookies y tecnologías similares, y la información que compartes por formulario o correo electrónico."],
      ["Uso de los datos", "Los usamos para mejorar el sitio y la navegación, analizar el tráfico, responder solicitudes y cumplir las obligaciones legales aplicables."],
      ["Servicios de terceros", "Servicios como Google Maps tienen sus propias políticas de privacidad. Consulta la política correspondiente para sitios externos y servicios integrados."],
      ["Tus derechos", "Según la ley aplicable, puedes acceder a tus datos, solicitar su corrección o eliminación, oponerte al tratamiento y presentar una reclamación ante la autoridad competente."],
    ] },
    terms: { title: "Términos de servicio", sections: [
      ["Acceso y uso", "Al usar el sitio aceptas estos términos."],
      ["Contenido", "Esta guía de viaje independiente ofrece información de referencia."],
      ["Exactitud", "Los horarios, precios, rutas y servicios pueden cambiar. Confirma los datos importantes con quien gestiona el lugar antes de viajar."],
      ["Propiedad intelectual", "El diseño y los contenidos originales están protegidos por derechos de autor. Cada página indica los créditos de sus imágenes. Google Maps se rige por sus propios términos."],
      ["Responsabilidad", "El sitio se ofrece tal como está. En la medida permitida por la ley, no respondemos por pérdidas derivadas del uso de la información."],
    ] },
    cookies: { title: "Configuración de cookies", intro: "Consulta y gestiona las preferencias del sitio en este navegador.", required: "Ajustes esenciales", analytics: "Preferencias de análisis", preferences: "Preferencias de visualización", marketing: "Preferencias publicitarias", save: "Guardar preferencias", reject: "Rechazar ajustes opcionales", saved: "Preferencias guardadas en este navegador.", note: "Algunas funciones requieren los ajustes esenciales. Los servicios integrados de terceros se rigen por sus propias políticas." },
  },
  qu: {
    updated: "2026 watapa suqta killanpi musuqyachisqa",
    privacy: { title: "Pakalla willakuykunapa kamachiy", sections: [
      ["Huñusqa willakuykuna", "Kay raphi llamk’ananpaq munasqa willakuyllata huñuyku: IP yupayta, maskana rurayta, qawasqa raphikunata, cookie nisqakunata, hinallataq qillqawan apachimuwasqaykita."],
      ["Imapaq llamk’achiyku", "Raphita allinchaypaq, hayk’aq qawanku chayta yachanapaq, tapukuykunata kutichinapaq, kamachiykunata hunt’anapaq llamk’achiyku."],
      ["Huk llamk’aykuna", "Google Maps hina huk llamk’aykunapa kikin kamachiyninku kan. Huk raphiman rispa utaq kaypi kachkaq mapata llamk’achispa, chay kamachiyta qaway."],
      ["Derechoykikuna", "Kamachiy saqiptin, willakuyki qawayta, allichayta, qulluchiyta mañakuyta atinki. Mana munaspa willayta, kamachiqman mañakuyta atinkipas."],
    ] },
    terms: { title: "Raphi llamk’achinapaq kamachiykuna", sections: [
      ["Yaykuywan llamk’achiy", "Kay raphita llamk’achispayki, kay kamachiykunata chaskinki."],
      ["Raphipa qillqaynin", "Kay puriy yanapakuq raphi sapallan llamk’an. Qillqayninqa yachaypaqmi."],
      ["Willakuykunapa chiqap kaynin", "Kichana pacha, qullqi, ñan, llamk’aykunapas tikrakunman. Manaraq rispa, kitipa kamachiqninta tapuy."],
      ["Ruraqpa derechon", "Raphipa ruraynin, kikin qillqayninpas waqaychasqam. Sapa raphinpi siqipa ruraqninta qaway. Google Maps kikin kamachiyniyuqmi."],
      ["Kutyachiy", "Kay raphi imayna kasqanman hina qusqa. Kamachiy saqisqanman hina, willakuyta llamk’achispa chinkachisqaykimanta mana kutichiykuchu."],
    ] },
    cookies: { title: "Cookie nisqakunata kamachiy", intro: "Kay maskanapi munasqayki akllaykunata qaway, tikray.", required: "Munasqa akllaykuna", analytics: "Qawayta yupay akllay", preferences: "Rikuy akllay", marketing: "Willachiy akllay", save: "Akllaykunata waqaychay", reject: "Mana munasqata saqiy", saved: "Kay maskanapi akllaykuna waqaychasqa.", note: "Wakin llamk’aypaq munasqa akllaykuna kan. Huk llamk’aykuna kikin kamachiyninkuwan llamk’anku." },
  },
};
