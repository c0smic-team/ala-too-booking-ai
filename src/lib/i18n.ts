export type Lang = "ky" | "ru" | "en" | "zh";

export const LANGS: { code: Lang; label: string; short: string }[] = [
  { code: "ky", label: "Кыргызча", short: "KG" },
  { code: "ru", label: "Русский", short: "RU" },
  { code: "en", label: "English", short: "EN" },
  { code: "zh", label: "中文", short: "中" },
];

export type RoomKey = "standard" | "lux" | "family";

export const ROOMS: {
  key: RoomKey;
  price: number;
  capacity: number;
  beds: number;
  size: number;
}[] = [
  { key: "standard", price: 2500, capacity: 2, beds: 1, size: 22 },
  { key: "lux", price: 5500, capacity: 2, beds: 1, size: 38 },
  { key: "family", price: 4200, capacity: 4, beds: 2, size: 32 },
];

type Dict = {
  nav: { rooms: string; about: string; amenities: string; contact: string; book: string };
  hero: {
    eyebrow: string;
    title1: string;
    title2: string;
    subtitle: string;
    cta: string;
    secondary: string;
  };
  about: { eyebrow: string; title: string; body: string; stats: { years: string; rooms: string; rating: string } };
  rooms: {
    eyebrow: string;
    title: string;
    subtitle: string;
    perNight: string;
    bookBtn: string;
    capacity: string;
    beds: string;
    size: string;
    names: Record<RoomKey, string>;
    descriptions: Record<RoomKey, string>;
    features: Record<RoomKey, string[]>;
  };
  amenities: { eyebrow: string; title: string; items: { title: string; desc: string }[] };
  booking: {
    title: string;
    subtitle: string;
    room: string;
    checkIn: string;
    checkOut: string;
    nights: string;
    guests: string;
    name: string;
    namePlaceholder: string;
    submit: string;
    pickDate: string;
    night: string;
    nights2: string;
    nights5: string;
    guest: string;
    guests2: string;
    guests5: string;
    total: string;
    fillName: string;
    fillDates: string;
    waMessage: (p: { name: string; room: string; checkIn: string; checkOut: string; nights: number; guests: number; total: number }) => string;
  };
  contact: {
    eyebrow: string;
    title: string;
    address: string;
    addressValue: string;
    phone: string;
    phoneValue: string;
    hours: string;
    hoursValue: string;
    whatsapp: string;
  };
  footer: { tagline: string; rights: string };
};

const ru: Dict = {
  nav: { rooms: "Номера", about: "О нас", amenities: "Удобства", contact: "Контакты", book: "Забронировать" },
  hero: {
    eyebrow: "Баткен · Кыргызстан",
    title1: "Ала-Тоо",
    title2: "Тёплый горный приём",
    subtitle: "Уютная гостиница в сердце города Раззаков. Виды на хребты Памиро-Алая, искреннее гостеприимство и комфорт в каждой детали.",
    cta: "Выбрать номер",
    secondary: "Узнать больше",
  },
  about: {
    eyebrow: "О гостинице",
    title: "Дом у подножия гор",
    body: "Ала-Тоо — это место, где традиционное кыргызское гостеприимство встречается с современным комфортом. Мы создаём атмосферу, в которой хочется задержаться: тёплое дерево, мягкий свет, домашний завтрак и виды, ради которых стоит просыпаться раньше.",
    stats: { years: "лет с гостями", rooms: "уютных номеров", rating: "средний рейтинг" },
  },
  rooms: {
    eyebrow: "Размещение",
    title: "Наши номера",
    subtitle: "Три формата для одного, двоих или всей семьи — выберите свой.",
    perNight: "сом / ночь",
    bookBtn: "Забронировать",
    capacity: "гостей",
    beds: "кровати",
    size: "м²",
    names: { standard: "Стандарт", lux: "Люкс", family: "Семейный" },
    descriptions: {
      standard: "Уютный номер с двуспальной кроватью, видом на горы и всем необходимым для спокойного отдыха.",
      lux: "Просторный люкс с камином, мягкой зоной отдыха и панорамным окном на хребты Алайского массива.",
      family: "Светлый семейный номер с двумя кроватями — идеален для родителей с детьми и небольших компаний.",
    },
    features: {
      standard: ["Wi-Fi", "Завтрак", "Тёплый пол", "Душ"],
      lux: ["Камин", "Wi-Fi", "Мини-бар", "Ванна", "Завтрак"],
      family: ["2 кровати", "Wi-Fi", "Завтрак", "Чайник"],
    },
  },
  amenities: {
    eyebrow: "Удобства",
    title: "Всё для вашего комфорта",
    items: [
      { title: "Завтрак включён", desc: "Домашний кыргызский завтрак каждое утро." },
      { title: "Бесплатный Wi-Fi", desc: "Скоростной интернет во всех номерах и общих зонах." },
      { title: "Парковка", desc: "Закрытая парковка для гостей гостиницы." },
      { title: "Трансфер", desc: "Встреча и проводы из аэропорта по запросу." },
      { title: "Экскурсии", desc: "Туры в горы Баткена и к местным достопримечательностям." },
      { title: "Круглосуточно", desc: "Ресепшн и охрана 24/7 для вашего спокойствия." },
    ],
  },
  booking: {
    title: "Бронирование",
    subtitle: "Заполните детали — мы продолжим в WhatsApp.",
    room: "Номер",
    checkIn: "Заезд",
    checkOut: "Выезд",
    nights: "Ночей",
    guests: "Гостей",
    name: "Ваше имя",
    namePlaceholder: "Как к вам обращаться",
    submit: "Забронировать через WhatsApp",
    pickDate: "Выберите дату",
    night: "ночь",
    nights2: "ночи",
    nights5: "ночей",
    guest: "гость",
    guests2: "гостя",
    guests5: "гостей",
    total: "Итого",
    fillName: "Пожалуйста, укажите имя",
    fillDates: "Пожалуйста, выберите даты",
    waMessage: ({ name, room, checkIn, checkOut, nights, guests, total }) =>
      `Здравствуйте! Я хотел(а) бы забронировать номер в гостинице Ала-Тоо.\n\n• Имя: ${name}\n• Номер: ${room}\n• Заезд: ${checkIn}\n• Выезд: ${checkOut}\n• Ночей: ${nights}\n• Гостей: ${guests}\n• Сумма: ${total} сом\n\nСпасибо!`,
  },
  contact: {
    eyebrow: "Контакты",
    title: "Будем рады видеть вас",
    address: "Адрес",
    addressValue: "г. Раззаков, Баткенская область, Кыргызстан",
    phone: "Телефон",
    phoneValue: "+996 700 000 000",
    hours: "Ресепшн",
    hoursValue: "Круглосуточно, 24/7",
    whatsapp: "Написать в WhatsApp",
  },
  footer: { tagline: "Тёплый горный приём в сердце Баткена.", rights: "Все права защищены." },
};

const ky: Dict = {
  nav: { rooms: "Бөлмөлөр", about: "Биз жөнүндө", amenities: "Кызматтар", contact: "Байланыш", book: "Брондоо" },
  hero: {
    eyebrow: "Баткен · Кыргызстан",
    title1: "Ала-Тоо",
    title2: "Тоолуу жылуу тосуу",
    subtitle: "Раззаков шаарынын жүрөгүндөгү жайлуу мейманкана. Памир-Алай тоолорунун көрүнүшү, чын жүрөктөн тосуп алуу жана ар бир деталда ыңгайлуулук.",
    cta: "Бөлмө тандоо",
    secondary: "Көбүрөөк билүү",
  },
  about: {
    eyebrow: "Мейманкана жөнүндө",
    title: "Тоонун этегиндеги үй",
    body: "Ала-Тоо — салттуу кыргыз меймандостугу заманбап ыңгайлуулук менен айкалышкан жер. Биз сизди калгысы келтирген аура түзөбүз: жылуу жыгач, жумшак жарык, үй тамактанышы жана эртең менен эрте ойгонгуңуз келген көрүнүштөр.",
    stats: { years: "жыл коноктор менен", rooms: "жайлуу бөлмө", rating: "орточо рейтинг" },
  },
  rooms: {
    eyebrow: "Жайгашуу",
    title: "Биздин бөлмөлөр",
    subtitle: "Бирөө, экөө же бүт үй-бүлө үчүн үч формат — өзүңүздүн тандаңыз.",
    perNight: "сом / түн",
    bookBtn: "Брондоо",
    capacity: "конок",
    beds: "керебет",
    size: "м²",
    names: { standard: "Стандарт", lux: "Люкс", family: "Үй-бүлөлүк" },
    descriptions: {
      standard: "Эки кишилик керебет, тоо көрүнүшү жана тынч эс алуу үчүн бардык керектүү нерселери бар жайлуу бөлмө.",
      lux: "Каминдүү, жумшак эс алуу аймагы жана Алай тоолоруна панорамалык терезеси бар кенен люкс.",
      family: "Эки керебеттүү жарык үй-бүлөлүк бөлмө — балдар менен ата-энелерге жана чакан компанияларга идеалдуу.",
    },
    features: {
      standard: ["Wi-Fi", "Эртең мененки тамак", "Жылуу пол", "Душ"],
      lux: ["Камин", "Wi-Fi", "Мини-бар", "Ванна", "Эртең мененки тамак"],
      family: ["2 керебет", "Wi-Fi", "Эртең мененки тамак", "Чайнек"],
    },
  },
  amenities: {
    eyebrow: "Кызматтар",
    title: "Сиздин ыңгайлуулугуңуз үчүн баары",
    items: [
      { title: "Эртең мененки тамак кошулган", desc: "Ар күнү үй кыргыз эртең мененки тамагы." },
      { title: "Акысыз Wi-Fi", desc: "Бардык бөлмөлөрдө жана жалпы аймактарда тез интернет." },
      { title: "Унаа токтотуучу жай", desc: "Конокторго жабык унаа токтотуучу жай." },
      { title: "Трансфер", desc: "Суроо боюнча аэропорттон тосуп алуу жана узатуу." },
      { title: "Экскурсиялар", desc: "Баткен тоолоруна жана жергиликтүү жайларга турлар." },
      { title: "Күнү-түнү", desc: "Тынчтыгыңыз үчүн ресепшн жана коопсуздук 24/7." },
    ],
  },
  booking: {
    title: "Брондоо",
    subtitle: "Маалыматты толтуруңуз — биз WhatsApp'та улантабыз.",
    room: "Бөлмө",
    checkIn: "Келүү",
    checkOut: "Кетүү",
    nights: "Түн",
    guests: "Конок",
    name: "Атыңыз",
    namePlaceholder: "Сизге кантип кайрылабыз",
    submit: "WhatsApp аркылуу брондоо",
    pickDate: "Күндү тандаңыз",
    night: "түн",
    nights2: "түн",
    nights5: "түн",
    guest: "конок",
    guests2: "конок",
    guests5: "конок",
    total: "Жалпы",
    fillName: "Атыңызды жазыңыз",
    fillDates: "Күндөрдү тандаңыз",
    waMessage: ({ name, room, checkIn, checkOut, nights, guests, total }) =>
      `Салам! Мен Ала-Тоо мейманканасынан бөлмө брондогум келет.\n\n• Аты: ${name}\n• Бөлмө: ${room}\n• Келүү: ${checkIn}\n• Кетүү: ${checkOut}\n• Түн: ${nights}\n• Конок: ${guests}\n• Сумма: ${total} сом\n\nРахмат!`,
  },
  contact: {
    eyebrow: "Байланыш",
    title: "Сизди күтөбүз",
    address: "Дарек",
    addressValue: "Раззаков ш., Баткен областы, Кыргызстан",
    phone: "Телефон",
    phoneValue: "+996 700 000 000",
    hours: "Ресепшн",
    hoursValue: "Күнү-түнү, 24/7",
    whatsapp: "WhatsApp'ка жазуу",
  },
  footer: { tagline: "Баткендин жүрөгүндөгү тоолуу жылуу тосуу.", rights: "Бардык укуктар корголгон." },
};

const en: Dict = {
  nav: { rooms: "Rooms", about: "About", amenities: "Amenities", contact: "Contact", book: "Book now" },
  hero: {
    eyebrow: "Batken · Kyrgyzstan",
    title1: "Ala-Too",
    title2: "A warm mountain welcome",
    subtitle: "A boutique hotel in the heart of Razzakov. Pamir-Alay views, sincere hospitality and comfort in every detail.",
    cta: "Choose a room",
    secondary: "Discover more",
  },
  about: {
    eyebrow: "About the hotel",
    title: "A home at the foot of the mountains",
    body: "Ala-Too is where traditional Kyrgyz hospitality meets modern comfort. We create an atmosphere you won't want to leave: warm wood, soft light, homemade breakfast and views worth waking up early for.",
    stats: { years: "years with guests", rooms: "cozy rooms", rating: "average rating" },
  },
  rooms: {
    eyebrow: "Stay",
    title: "Our rooms",
    subtitle: "Three formats — for one, two or the whole family.",
    perNight: "KGS / night",
    bookBtn: "Book",
    capacity: "guests",
    beds: "beds",
    size: "m²",
    names: { standard: "Standard", lux: "Lux Suite", family: "Family Room" },
    descriptions: {
      standard: "A cozy room with a queen bed, mountain view and everything you need for a peaceful stay.",
      lux: "A spacious suite with a fireplace, lounge area and panoramic window facing the Alay range.",
      family: "A bright family room with two beds — perfect for parents with children or small groups.",
    },
    features: {
      standard: ["Wi-Fi", "Breakfast", "Heated floor", "Shower"],
      lux: ["Fireplace", "Wi-Fi", "Mini-bar", "Bathtub", "Breakfast"],
      family: ["2 beds", "Wi-Fi", "Breakfast", "Kettle"],
    },
  },
  amenities: {
    eyebrow: "Amenities",
    title: "Everything for your comfort",
    items: [
      { title: "Breakfast included", desc: "Homemade Kyrgyz breakfast every morning." },
      { title: "Free Wi-Fi", desc: "Fast internet in all rooms and public areas." },
      { title: "Parking", desc: "Secure parking for our guests." },
      { title: "Transfer", desc: "Airport pickup and drop-off on request." },
      { title: "Excursions", desc: "Tours in the Batken mountains and nearby sights." },
      { title: "24/7 reception", desc: "Front desk and security around the clock." },
    ],
  },
  booking: {
    title: "Reservation",
    subtitle: "Fill in the details — we'll continue on WhatsApp.",
    room: "Room",
    checkIn: "Check-in",
    checkOut: "Check-out",
    nights: "Nights",
    guests: "Guests",
    name: "Your name",
    namePlaceholder: "How should we call you",
    submit: "Book via WhatsApp",
    pickDate: "Pick a date",
    night: "night",
    nights2: "nights",
    nights5: "nights",
    guest: "guest",
    guests2: "guests",
    guests5: "guests",
    total: "Total",
    fillName: "Please enter your name",
    fillDates: "Please choose the dates",
    waMessage: ({ name, room, checkIn, checkOut, nights, guests, total }) =>
      `Hello! I would like to book a room at Ala-Too Hotel.\n\n• Name: ${name}\n• Room: ${room}\n• Check-in: ${checkIn}\n• Check-out: ${checkOut}\n• Nights: ${nights}\n• Guests: ${guests}\n• Total: ${total} KGS\n\nThank you!`,
  },
  contact: {
    eyebrow: "Contact",
    title: "We'd love to host you",
    address: "Address",
    addressValue: "Razzakov city, Batken region, Kyrgyzstan",
    phone: "Phone",
    phoneValue: "+996 700 000 000",
    hours: "Reception",
    hoursValue: "Open 24/7",
    whatsapp: "Message on WhatsApp",
  },
  footer: { tagline: "A warm mountain welcome in the heart of Batken.", rights: "All rights reserved." },
};

const zh: Dict = {
  nav: { rooms: "客房", about: "关于我们", amenities: "设施", contact: "联系", book: "立即预订" },
  hero: {
    eyebrow: "巴特肯 · 吉尔吉斯斯坦",
    title1: "阿拉套",
    title2: "温暖的山间款待",
    subtitle: "位于拉扎科夫市中心的精品酒店。帕米尔-阿赖山景、真诚的好客与每一处细节的舒适。",
    cta: "选择房间",
    secondary: "了解更多",
  },
  about: {
    eyebrow: "关于酒店",
    title: "山脚下的家",
    body: "阿拉套酒店将传统的吉尔吉斯式好客与现代舒适完美融合。温暖的木质装饰、柔和的灯光、家常早餐以及值得早起欣赏的山景。",
    stats: { years: "年接待客人", rooms: "舒适客房", rating: "平均评分" },
  },
  rooms: {
    eyebrow: "住宿",
    title: "我们的客房",
    subtitle: "三种房型 — 适合一人、两人或全家。",
    perNight: "索姆 / 晚",
    bookBtn: "预订",
    capacity: "位客人",
    beds: "张床",
    size: "平米",
    names: { standard: "标准房", lux: "豪华套房", family: "家庭房" },
    descriptions: {
      standard: "舒适的客房,配有大号床、山景和您安静住宿所需的一切。",
      lux: "宽敞的套房,配有壁炉、休息区和面向阿赖山脉的全景窗。",
      family: "明亮的家庭房,配有两张床 — 非常适合带孩子的父母或小团体。",
    },
    features: {
      standard: ["Wi-Fi", "早餐", "地暖", "淋浴"],
      lux: ["壁炉", "Wi-Fi", "迷你吧", "浴缸", "早餐"],
      family: ["2张床", "Wi-Fi", "早餐", "热水壶"],
    },
  },
  amenities: {
    eyebrow: "设施",
    title: "一切为您的舒适",
    items: [
      { title: "含早餐", desc: "每天早晨享用自制吉尔吉斯早餐。" },
      { title: "免费Wi-Fi", desc: "所有客房和公共区域的高速网络。" },
      { title: "停车场", desc: "为客人提供安全停车场。" },
      { title: "接送服务", desc: "应要求提供机场接送。" },
      { title: "观光游览", desc: "巴特肯山区和当地景点的旅游。" },
      { title: "24小时前台", desc: "前台和安保全天候服务。" },
    ],
  },
  booking: {
    title: "预订",
    subtitle: "填写详细信息 — 我们将通过 WhatsApp 继续。",
    room: "房间",
    checkIn: "入住",
    checkOut: "退房",
    nights: "晚数",
    guests: "客人",
    name: "您的姓名",
    namePlaceholder: "如何称呼您",
    submit: "通过 WhatsApp 预订",
    pickDate: "选择日期",
    night: "晚",
    nights2: "晚",
    nights5: "晚",
    guest: "位",
    guests2: "位",
    guests5: "位",
    total: "总计",
    fillName: "请输入您的姓名",
    fillDates: "请选择日期",
    waMessage: ({ name, room, checkIn, checkOut, nights, guests, total }) =>
      `您好!我想预订阿拉套酒店的房间。\n\n• 姓名: ${name}\n• 房间: ${room}\n• 入住: ${checkIn}\n• 退房: ${checkOut}\n• 晚数: ${nights}\n• 客人: ${guests}\n• 总额: ${total} 索姆\n\n谢谢!`,
  },
  contact: {
    eyebrow: "联系",
    title: "期待您的光临",
    address: "地址",
    addressValue: "拉扎科夫市,巴特肯州,吉尔吉斯斯坦",
    phone: "电话",
    phoneValue: "+996 700 000 000",
    hours: "前台",
    hoursValue: "24小时开放",
    whatsapp: "通过 WhatsApp 联系",
  },
  footer: { tagline: "巴特肯心脏的温暖山间款待。", rights: "版权所有。" },
};

export const DICTS: Record<Lang, Dict> = { ru, ky, en, zh };

export function detectLang(): Lang {
  if (typeof navigator === "undefined") return "ru";
  const stored = (typeof localStorage !== "undefined" && localStorage.getItem("lang")) as Lang | null;
  if (stored && DICTS[stored]) return stored;
  const n = navigator.language.toLowerCase();
  if (n.startsWith("ky") || n.startsWith("kg")) return "ky";
  if (n.startsWith("zh")) return "zh";
  if (n.startsWith("en")) return "en";
  return "ru";
}

// Russian/Kyrgyz plural form
export function plural(n: number, one: string, two: string, five: string) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return two;
  return five;
}
