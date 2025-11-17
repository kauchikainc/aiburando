/**
 * キャストデータ
 */

export type CastMember = {
  id: number;
  name: string;
  age: number;
  height: number;
  bust: number;
  cup: string;
  waist: number;
  hip: number;
  bodyType: string;
  category: string[];
  image: string;
  description: string;
};

export const castMembers: CastMember[] = [
  {
    id: 1,
    name: "さくら",
    age: 20,
    height: 160,
    bust: 85,
    cup: "C",
    waist: 58,
    hip: 86,
    bodyType: "スレンダー",
    category: ["新人", "人気"],
    image: "/images/cast/cast1.jpg",
    description: "初々しさ残る20歳の新人。純粋な瞳とCカップの柔肌があなたを癒し、興奮させます。",
  },
  {
    id: 2,
    name: "ゆい",
    age: 22,
    height: 165,
    bust: 88,
    cup: "D",
    waist: 59,
    hip: 87,
    bodyType: "グラマー",
    category: ["人気", "グラマー"],
    image: "/images/cast/cast2.jpg",
    description: "Dカップの豊満なバストが揺れる度にあなたを刺激。甘い吐息と濡れた唇で、忘れられない夜を。",
  },
  {
    id: 3,
    name: "みお",
    age: 21,
    height: 158,
    bust: 83,
    cup: "B",
    waist: 56,
    hip: 84,
    bodyType: "スレンダー",
    category: ["スレンダー"],
    image: "/images/cast/cast3.jpg",
    description: "華奢な身体と透き通るような肌。細い指先が這うたび、背筋がゾクゾクする快感を。",
  },
  {
    id: 4,
    name: "あやか",
    age: 23,
    height: 162,
    bust: 90,
    cup: "E",
    waist: 60,
    hip: 88,
    bodyType: "グラマー",
    category: ["グラマー", "人気"],
    image: "/images/cast/cast4.jpg",
    description: "Eカップの谷間に誘われ、妖艶な微笑みに心を奪われる。大人の女が知る、禁断の快楽へ。",
  },
  {
    id: 5,
    name: "りな",
    age: 19,
    height: 163,
    bust: 84,
    cup: "C",
    waist: 57,
    hip: 85,
    bodyType: "スレンダー",
    category: ["新人"],
    image: "/images/cast/cast5.jpg",
    description: "19歳の瑞々しい肌と、まだ恥じらいを知る純粋さ。その初々しさが、あなたの欲望を掻き立てる。",
  },
  {
    id: 6,
    name: "えま",
    age: 24,
    height: 168,
    bust: 87,
    cup: "D",
    waist: 61,
    hip: 89,
    bodyType: "モデル系",
    category: ["モデル系", "人気"],
    image: "/images/cast/cast6.jpg",
    description: "168cmの長い脚が絡みつき、完璧なプロポーションがあなたを包み込む。モデル級の美貌に溺れて。",
  },
  {
    id: 7,
    name: "かな",
    age: 20,
    height: 157,
    bust: 86,
    cup: "D",
    waist: 58,
    hip: 85,
    bodyType: "グラマー",
    category: ["グラマー"],
    image: "/images/cast/cast7.jpg",
    description: "小柄な体にDカップの柔らかな胸。可愛い顔で甘える姿と、大胆な夜の顔のギャップに虜に。",
  },
  {
    id: 8,
    name: "なな",
    age: 22,
    height: 161,
    bust: 82,
    cup: "B",
    waist: 55,
    hip: 83,
    bodyType: "スレンダー",
    category: ["スレンダー"],
    image: "/images/cast/cast8.jpg",
    description: "清楚な見た目に隠された、妖しい魅力。知的な会話の後には、理性を失う甘い時間が待っている。",
  },
  {
    id: 9,
    name: "まい",
    age: 21,
    height: 164,
    bust: 89,
    cup: "E",
    waist: 59,
    hip: 88,
    bodyType: "グラマー",
    category: ["グラマー", "新人"],
    image: "/images/cast/cast9.jpg",
    description: "Eカップの柔らかな膨らみに顔を埋めたい。甘えん坊で積極的な新人が、あなたを夢中にさせる。",
  },
];

export const categories = [
  "すべて",
  "新人",
  "人気",
  "スレンダー",
  "グラマー",
  "モデル系",
];
