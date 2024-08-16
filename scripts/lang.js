/**
 * @author Kiku
 *
 * Labels for each language
 *
 * Structure is as follows:
 * {
 *   LANGUAGE: {
 *     area: { AREA_ID: 'TRANSLATED_AREA_NAME' ... },
 *     weather: { WEATHER_ID: 'TRANSLATED_WEATHER_NAME' ... },
 *     web: { LABEL_ID: 'TRANSLATED_LABEL' }
 *   }
 * }
 */

const langMap = {
  en: {
    area: {
      limsaLominsa: "Limsa Lominsa",
      middleLaNoscea: "Middle La Noscea",
      lowerLaNoscea: "Lower La Noscea",
      easternLaNoscea: "Eastern La Noscea",
      westernLaNoscea: "Western La Noscea",
      upperLaNoscea: "Upper La Noscea",
      outerLaNoscea: "Outer La Noscea",
      wolvesDenPier: "Wolves' Den Pier",
      mist: "Mist",
      gridania: "Gridania",
      centralShroud: "Central Shroud",
      eastShroud: "East Shroud",
      southShroud: "South Shroud",
      northShroud: "North Shroud",
      theLavenderBeds: "The Lavender Beds",
      uldah: "Ul'dah",
      westernThanalan: "Western Thanalan",
      centralThanalan: "Central Thanalan",
      easternThanalan: "Eastern Thanalan",
      southernThanalan: "Southern Thanalan",
      northernThanalan: "Northern Thanalan",
      theGoblet: "The Goblet",
      morDhona: "Mor Dhona",
      ishgard: "Ishgard",
      coerthasCentralHighlands: "Coerthas Central Highlands",
      coerthasWesternHighlands: "Coerthas Western Highlands",
      theSeaOfclouds: "The Sea of Clouds",
      azysLla: "Azys Lla",
      theDravanianForelands: "The Dravanian Forelands",
      theDravanianHinterlands: "The Dravanian Hinterlands",
      theChurningMists: "The Churning Mists",
      idyllshire: "Idyllshire",
      rhalgrsReach: "Rhalgr's Reach",
      theFringes: "The Fringes",
      thePeaks: "The Peaks",
      theLochs: "The Lochs",
      kugane: "Kugane",
      shirogane: "Shirogane",
      theRubySea: "The Ruby Sea",
      yanxia: "Yanxia",
      theAzimSteppe: "The Azim Steppe",
      eurekaAnemos: "Eureka Anemos",
      eurekaPagos: "Eureka Pagos",
      eurekaPyros: "Eureka Pyros",
      eurekaHydatos: "Eureka Hydatos",
      theCrystarium: "The Crystarium",
      eulmore: "Eulmore",
      lakeland: "Lakeland",
      kholusia: "Kholusia",
      amhAraeng: "Amh Araeng",
      ilMheg: "Il Mheg",
      theRaktikaGreatwood: "The Rak'tika Greatwood",
      theTempest: "The Tempest",
      radzAtHan: "Radz-at-Han",
      thavnair: "Thavnair",
      garlemald: "Garlemald",
      oldSharlayan: "Old Sharlayan",
      labyrinthos: "Labyrinthos",
      mareLamentorum: "Mare Lamentorum",
      ultimaThule: "Ultima Thule",
      elpis: "Elpis",
      unnamedIsland: "Unnamed Island",
      tuliyollal: "Tuliyollal",
      urqopacha: "Urqopacha",
      kozamauka: "Kozama'uka",
      yakTel: "Yak T'el",
      solutionNine: "Solution Nine",
      shaaloani: "Shaaloani",
      heritageFound: "Heritage Found",
      livingMemory: "Living Memory",
    },
    expansion: {
      aRealmReborn: "A Realm Reborn",
      heavensward: "Heavensward",
      stormblood: "Stormblood",
      shadowbringers: "Shadowbringers",
      endwalker: "Endwalker",
      dawntrail: "Dawntrail",
    },
    weather: {
      clouds: "Clouds",
      clearSkies: "Clear Skies",
      fairSkies: "Fair Skies",
      fog: "Fog",
      rain: "Rain",
      wind: "Wind",
      showers: "Showers",
      gales: "Gales",
      thunder: "Thunder",
      thunderstorms: "Thunderstorms",
      dustStorms: "Dust Storms",
      heatWaves: "Heat Waves",
      gloom: "Gloom",
      snow: "Snow",
      blizzard: "Blizzard",
      umbralWind: "Umbral Wind",
      umbralStatic: "Umbral Static",
      moonDust: "Moon Dust",
      astromagneticStorm: "Astromagnetic Storm",
    },
    web: {
      ffxivWeatherForecastLabel: "FFXIV Weather Forecast",
      selectAnExpansion: "Please select an expansion",
      selectAnArea: "Please select an area",
      anyWeather: "Any",
      expansionLabel: "Expansion",
      areaLabel: "Area",
      targetWeatherLabel: "Target Weather",
      precedingWeatherLabel: "Preceding Weather",
      timeLabel: "Eorzea Time",
      findWeather: "Find Weather",
      addWeatherConditions: "Add Weather Conditions",
      areaConditionsHeader: "Area",
      targetWeatherConditionsHeader: "Target Weather",
      previousWeatherConditionsHeader: "Previous Weather",
      eorzeaTimeConditionsHeader: "Eorzea Time",
      areaHeader: "Area",
      previousWeatherHeader: "Previous Weather",
      currentWeatherHeader: "Current Weather",
      eorzeaTimeHeader: "Eorzea Time",
      localTimeHeader: "Local Time",
      advancedOptionsButtonLabel: "Advanced Options",
      advancedOptionsLabel: "Advanced Options",
      maximumNumberLabel: "Maximum Number",
      maximumCyclesLabel: "Maximum Cycles",
      customStartDateLabel: "Custom Start Date",
      noResultsFoundLabel: "No results found.",
      noConditionsMessage: "Please add a weather condition.",
      initialResultsTableLabel: "Click the Find Weather button to get started.",
      closeButtonLabel: "Close",
    },
  },
  zh: {
    area: {
      limsaLominsa: "利姆萨·罗敏萨",
      middleLaNoscea: "中拉诺西亚",
      lowerLaNoscea: "拉诺西亚低地",
      easternLaNoscea: "东拉诺西亚",
      westernLaNoscea: "西拉诺西亚",
      upperLaNoscea: "拉诺西亚高地",
      outerLaNoscea: "拉诺西亚外地",
      wolvesDenPier: "狼狱停船场",
      mist: "海雾村",
      gridania: "格里达尼亚",
      centralShroud: "黑衣森林中央林区",
      eastShroud: "黑衣森林东部林区",
      southShroud: "黑衣森林南部林区",
      northShroud: "黑衣森林北部林区",
      theLavenderBeds: "薰衣草苗圃",
      uldah: "乌尔达哈",
      westernThanalan: "西萨纳兰",
      centralThanalan: "中萨纳兰",
      easternThanalan: "东萨纳兰",
      southernThanalan: "南萨纳兰",
      northernThanalan: "北萨纳兰",
      theGoblet: "高脚孤丘",
      morDhona: "摩杜纳",
      ishgard: "伊修加德",
      coerthasCentralHighlands: "库尔札斯中央高地",
      coerthasWesternHighlands: "库尔札斯西部高地",
      theSeaOfclouds: "阿巴拉提亚云海",
      azysLla: "魔大陆阿济兹拉",
      theDravanianForelands: "龙堡参天高地",
      theDravanianHinterlands: "龙堡内陆低地",
      theChurningMists: "翻云雾海",
      idyllshire: "田园郡",
      rhalgrsReach: "神拳痕",
      theFringes: "基拉巴尼亚山区",
      thePeaks: "基拉巴尼亚山区",
      theLochs: "基拉巴尼亚湖区",
      kugane: "黄金港",
      shirogane: "白银乡",
      theRubySea: "红玉海",
      yanxia: "延夏",
      theAzimSteppe: "太阳神草原",
      eurekaAnemos: "禁地优雷卡常风之地",
      eurekaPagos: "禁地优雷卡恒冰之地",
      eurekaPyros: "禁地优雷卡涌火之地",
      eurekaHydatos: "禁地优雷卡丰水之地",
      theCrystarium: "水晶都",
      eulmore: "游末邦",
      lakeland: "雷克兰德",
      kholusia: "珂露西亚岛",
      amhAraeng: "安穆·艾兰",
      ilMheg: "伊尔美格",
      theRaktikaGreatwood: "拉凯提卡大森林",
      theTempest: "黑风海",
      radzAtHan: "拉札罕",
      thavnair: "萨维奈岛",
      garlemald: "加雷马",
      oldSharlayan: "旧萨雷安",
      labyrinthos: "迷津",
      mareLamentorum: "叹息海",
      ultimaThule: "天外天垓",
      elpis: "厄尔庇斯",
      unnamedIsland: "无人岛",
      tuliyollal: "图莱尤拉联合王国",
      urqopacha: "オルコ・パチャ（暂无翻译）",
      kozamauka: "コザマル・カ（暂无翻译）",
      yakTel: "ヤクテル樹海（暂无翻译）",
      solutionNine: "ソリューション・ナイン（暂无翻译）",
      shaaloani: "シャーローニ荒野（暂无翻译）",
      heritageFound: "ヘリテージファウンド（暂无翻译）",
      livingMemory: "リビング・メモリー（暂无翻译）",
    },
    expansion: {
      aRealmReborn: "重生之境",
      heavensward: "苍穹之禁城",
      stormblood: "红莲之狂潮",
      shadowbringers: "暗影之逆焰",
      endwalker: "晓月之终途",
      dawntrail: "金曦之遗辉",
    },
    weather: {
      clouds: "阴云",
      clearSkies: "碧空",
      fairSkies: "晴朗",
      fog: "薄雾",
      rain: "小雨",
      wind: "微风",
      showers: "暴雨",
      gales: "强风",
      thunder: "打雷",
      thunderstorms: "雷雨",
      dustStorms: "扬沙",
      heatWaves: "热浪",
      gloom: "妖雾",
      snow: "小雪",
      blizzard: "暴雪",
      umbralWind: "灵风",
      umbralStatic: "灵电",
      moonDust: "月尘",
      astromagneticStorm: "磁暴",
    },
    web: {
      ffxivWeatherForecastLabel: "最终幻想14 天气预报",
      selectAnExpansion: "请选择版本",
      selectAnArea: "请选择区域",
      anyWeather: "任何",
      expansionLabel: "版本",
      areaLabel: "区域",
      targetWeatherLabel: "目标天气",
      precedingWeatherLabel: "前置天气",
      timeLabel: "艾欧泽亚时间",
      findWeather: "搜索天气",
      addWeatherConditions: "新增天气条件",
      areaConditionsHeader: "地区",
      targetWeatherConditionsHeader: "目标天气",
      previousWeatherConditionsHeader: "前置天气",
      eorzeaTimeConditionsHeader: "艾欧泽亚时间",
      areaHeader: "区域",
      previousWeatherHeader: "前置天气",
      currentWeatherHeader: "目前天气",
      eorzeaTimeHeader: "艾欧泽亚时间",
      localTimeHeader: "本地时间",
      advancedOptionsButtonLabel: "进阶选项",
      advancedOptionsLabel: "进阶选项",
      maximumNumberLabel: "最高数目",
      maximumCyclesLabel: "最高循环次数",
      customStartDateLabel: "自订开始日期",
      noResultsFoundLabel: "找不到结果。",
      noConditionsMessage: "请最少新增一个天气检索条件。",
      initialResultsTableLabel: "请点击搜索天气按钮以开始。",
      closeButtonLabel: "关闭",
    },
  },
  ja: {
    area: {
      limsaLominsa: "リムサ・ロミンサ",
      middleLaNoscea: "中央ラノシア",
      lowerLaNoscea: "低地ラノシア",
      easternLaNoscea: "東ラノシア",
      westernLaNoscea: "西ラノシア",
      upperLaNoscea: "高地ラノシア",
      outerLaNoscea: "外地ラノシア",
      wolvesDenPier: "ウルヴズジェイル",
      mist: "ミスト・ヴィレッジ",
      gridania: "グリダニア",
      centralShroud: "黒衣森：中央森林",
      eastShroud: "黒衣森：東部森林",
      southShroud: "黒衣森：南部森林",
      northShroud: "黒衣森：北部森林",
      theLavenderBeds: "ラベンダーベッド",
      uldah: "ウルダハ",
      westernThanalan: "西ザナラーン",
      centralThanalan: "中央ザナラーン",
      easternThanalan: "東ザナラーン",
      southernThanalan: "南ザナラーン",
      northernThanalan: "北ザナラーン",
      theGoblet: "ゴブレットビュート",
      morDhona: "モードゥナ",
      ishgard: "イシュガルド",
      coerthasCentralHighlands: "クルザス中央高地",
      coerthasWesternHighlands: "クルザス西部高地",
      theSeaOfclouds: "アバラシア雲海",
      azysLla: "アジス・ラー",
      theDravanianForelands: "高地ドラヴァニア",
      theDravanianHinterlands: "低地ドラヴァニア",
      theChurningMists: "ドラヴァニア雲海",
      idyllshire: "イディルシャイア",
      rhalgrsReach: "ラールガーズリーチ",
      theFringes: "ギラバニア辺境地帯",
      thePeaks: "ギラバニア山岳地帯",
      theLochs: "ギラバニア湖畔地帯",
      kugane: "クガネ",
      shirogane: "シロガネ",
      theRubySea: "紅玉海",
      yanxia: "ヤンサ",
      theAzimSteppe: "アジムステップ",
      eurekaAnemos: "エウレカ：アネモス",
      eurekaPagos: "エウレカ：パゴス",
      eurekaPyros: "エウレカ：ピューロス",
      eurekaHydatos: "エウレカ：ヒュダトス",
      theCrystarium: "クリスタリウム",
      eulmore: "ユールモア",
      lakeland: "レイクランド",
      kholusia: "コルシア島",
      amhAraeng: "アム・アレーン",
      ilMheg: "イル・メグ",
      theRaktikaGreatwood: "ラケティカ大森林",
      theTempest: "テンペスト",
      radzAtHan: "ラザハン",
      thavnair: "サベネア島",
      garlemald: "ガレマルド",
      oldSharlayan: "オールド・シャーレアン",
      labyrinthos: "ラヴィリンソス",
      mareLamentorum: "嘆きの海",
      ultimaThule: "ウルティマ・トゥーレ",
      elpis: "エルピス",
      unnamedIsland: "名もなき島",
      tuliyollal: "トライヨラ",
      urqopacha: "オルコ・パチャ",
      kozamauka: "コザマル・カ",
      yakTel: "ヤクテル樹海",
      solutionNine: "ソリューション・ナイン",
      shaaloani: "シャーローニ荒野",
      heritageFound: "ヘリテージファウンド",
      livingMemory: "リビング・メモリー",
    },
    expansion: {
      aRealmReborn: "新生エオルゼア",
      heavensward: "蒼天のイシュガルド",
      stormblood: "紅蓮のリベレーター",
      shadowbringers: "漆黒のヴィランズ",
      endwalker: "暁月のフィナーレ",
      dawntrail: "黄金のレガシー",
    },
    weather: {
      clouds: "曇り",
      clearSkies: "快晴",
      fairSkies: "晴れ",
      fog: "霧",
      rain: "雨",
      wind: "風",
      showers: "暴雨",
      gales: "暴風",
      thunder: "雷",
      thunderstorms: "雷雨",
      dustStorms: "砂塵",
      heatWaves: "灼熱波",
      gloom: "妖霧",
      snow: "雪",
      blizzard: "吹雪",
      umbralWind: "霊風",
      umbralStatic: "放電",
      moonDust: "月砂塵",
      astromagneticStorm: "磁気嵐",
    },
    web: {
      ffxivWeatherForecastLabel: "FF14天気予報",
      selectAnExpansion: "拡張パッケージを選択してください",
      selectAnArea: "エリアを選択してください",
      anyWeather: "全て",
      expansionLabel: "拡張パッケージ",
      areaLabel: "エリア",
      targetWeatherLabel: "希望の天候",
      precedingWeatherLabel: "直前の天候",
      timeLabel: "エオルゼア時間",
      findWeather: "天候を検索",
      addWeatherConditions: "天気都合を追加",
      areaConditionsHeader: "エリア",
      targetWeatherConditionsHeader: "希望の天候",
      previousWeatherConditionsHeader: "直前の天候",
      eorzeaTimeConditionsHeader: "エオルゼア時間",
      areaHeader: "エリア",
      previousWeatherHeader: "直前の天候",
      currentWeatherHeader: "現在の天候",
      eorzeaTimeHeader: "エオルゼア時間",
      localTimeHeader: "ローカル時間",
      advancedOptionsButtonLabel: "詳細オプション",
      advancedOptionsLabel: "詳細オプション",
      maximumNumberLabel: "最大数",
      maximumCyclesLabel: "最大サイクル",
      customStartDateLabel: "カスタム開始日",
      noResultsFoundLabel: "結果が見つかりませんでした。",
      noConditionsMessage: "天気都合を追加してください。",
      initialResultsTableLabel: "「天候を検索」ボタンをクリックしてください。",
      closeButtonLabel: "閉じる",
    },
  },
};
