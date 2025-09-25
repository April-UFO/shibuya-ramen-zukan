// 地図の設定　setView:初期位置(緯度経度)、その後の数字はズーム具合(大きいほどズーム)
const map = L.map('map',{
  center: [35.661512, 139.698756],
  zoom: 16,
  minZoom: 16,
  maxZoom: 17,
  scrollWheelZoom: false
});
// 地図画像表示スタイルと著作権表示　※触らない
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; OpenStreetMap & CartoDB'
}).addTo(map);


// お店のデータ
const shops = [{
  name: "📍まぜそば チョップス",
  lat: 35.659924,
  lon: 139.699034,
  image: "../ramen-image/choppusu_ramen.jpg",
  price: "900円",
  dishName: "▲辛味まぜそば",
  description: `翌日まで匂いの残る強烈ニンニク！
      チャーシューは硬めのしっかり歯ごたえアリタイプ。
      <br>ジャンキーなまぜそばが食べたいならここ！`,
  access: `東京都渋谷区宇田川町26-3 サンルイビル1F
      <br>(青学から徒歩14分/渋谷駅から徒歩7分)`,
  hours: "年中無休　11:00～06:00"
},
{
  name: "📍桂花ラーメン",
  lat: 35.660241,
  lon: 139.698691,
  image: "../ramen-image/keika_ramen.jpg",
  price: "900円",
  dishName: "▲桂花拉麺",
  description: `熊本系豚骨ラーメンを渋谷で！
      味がしっかりしみ込んだ固めの味玉は絶対につけるべき。
      <br>トッピングに茎わかめという個性派ラーメン！`,
  access: `東京都渋谷区宇田川町27-1
      <br>(青学から徒歩16分/渋谷駅から徒歩7分)`,
  hours: "月～土　9:00～23:00<br>　　　　　日・祝日　9:00～22:30",
},
{
  name: "📍中華そば専門 田中そば店",
  lat: 35.662143,
  lon: 139.698296,
  image: "../ramen-image/tanaka_ramen.jpg",
  price: "1,050円",
  dishName: "▲中華そば味玉入",
  description: `濃いめの塩系中華そば！
      柔らかくて重すぎないチャーシューが3枚も入ってて嬉しい。
      <br>卓上の香唐(しゃんとう)は、風味がガラッと変わって美味しい！`,
  access: `東京都渋谷区宇田川町15-1 渋谷PARCO 7F
      <br>(青学から徒歩16分/渋谷駅から徒歩10分)`,
  hours: "月～金　11:00～16:00/17:00～21:00<br>　　　　　土・日　11:00～21:00",
},
{
  name: "📍威風",
  lat: 35.660346,
  lon: 139.698362,
  image: "../ramen-image/ifu_ramen.jpg",
  price: "1,000円",
  dishName: "▲辛味噌味玉らーめん",
  description: `濃厚な味噌の旨みが広がる味わい！
      辛味噌は結構辛い。
      <br>味が染みたトロトロの味玉は必見！`,
  access: `東京都渋谷区宇田川町28-1 1F
      <br>(青学から徒歩15分/渋谷駅から徒歩8分)`,
  hours: "24時間営業",
},
{
  name: "📍中国ラーメン揚州商人",
  lat: 35.661061,
  lon: 139.696831,
  image: "../ramen-image/yoshu_ramen.jpg",
  price: "910円",
  dishName: "▲タンタン麺",
  description: `ほのかな酸味があるスープがやみつきになる！
      選べる麺の刀削麺は、もちもちでスープとよく絡む。
      <br>レンゲに穴が空いているから、最後までひき肉そぼろを楽しめる！`,
  access: `東京都渋谷区宇田川町33-12 J+Rビル 1F
      <br>(青学から徒歩18分/渋谷駅から徒歩10分)`,
  hours: "月～金　10:00～08:00<br>　　　　　土・日・祝日　24時間営業",
},
{
  name: "📍ミズノボル",
  lat: 35.660546,
  lon: 139.698427,
  image: "../ramen-image/mizunoboru_ramen.jpg",
  price: "880円",
  dishName: "▲塩らーめん味玉入",
  description: `万人受けする癖のないスープ！
      刺激が足りない人は、卓上の柚子胡椒で自分好みに。
      <br>脂身が程よいチャーシューと、トロトロ染みしみの味玉が絶品！`,
  access: `東京都渋谷区宇田川町29-3
      <br>(青学から徒歩16分/渋谷駅から徒歩4分)`,
  hours: "年中無休　11:00～05:00",
},
{
  name: "📍金伝丸",
  lat: 35.660253,
  lon: 139.699464,
  image: "../ramen-image/kindenmaru_ramen.jpg",
  price: "1,050円",
  dishName: "▲特丸",
  description: `角煮チャーシューが楽しめる家系の変わり種！ 
      家系ながら、あっさりしているから食べやすい。
      <br>無料のごはんと一緒に無限ループ！`,
  access: `東京都渋谷区宇田川町24-6 鉄人門渋ビルヂング　１Ｆ
      <br>(青学から徒歩14分/渋谷駅から徒歩6分)`,
  hours: "月・火・水・木・日　10:00～07:00<br>　　　　　金・土　10:00～08:00",
},
{
  name: "📍元祖油堂",
  lat: 35.660405,
  lon: 139.698907,
  image: "../ramen-image/aburadou_ramen.jpg",
  price: "1,100円",
  dishName: "▲辛味噌油そば＋A",
  description: `多種多様な卓上トッピングで自分好みに！ 
      こだわり麺と味の濃いタレが絶妙にマッチ。
      <br>パルメザンチーズと卵黄が濃厚すぎる！`,
  access: `東京都渋谷区宇田川町25-5
      <br>(青学から徒歩15分/渋谷駅から徒歩7分)`,
  hours: "年中無休　11:00～03:00",
},
{
  name: "📍日本油党",
  lat: 35.660521,
  lon: 139.6995,
  image: "../ramen-image/aburatou_ramen.jpg",
  price: "880円",
  dishName: "▲油そば",
  description: `もちもちの麺が甘いタレとしっかりマッチ！ 
      綺麗な店内だから、女性でも入りやすい。
      <br>分厚めなチャーシューがホロホロとろける！`,
  access: `東京都渋谷区宇田川町24-10 横田ビル 1F
      <br>(青学から徒歩15分/渋谷駅から徒歩7分)`,
  hours: "月～木・日　11:00～23:00<br>　　　　　金・土　11:00～07:00"
},
{
  name: "📍天下一品",
  lat: 35.660749,
  lon: 139.698091,
  image: "../ramen-image/tenka_ramen.jpg",
  price: "1,580円",
  dishName: "▲味付煮卵ラーメン<br>(おすすめ三食丼定食)",
  description: `超濃厚鶏白湯！ 
      唯一無二のスープに絶品味玉が最高にマッチ。
      <br>高菜明太そぼろご飯にスープをかければ無限！`,
  access: `東京都渋谷区宇田川町30-3 アトラス シブヤビル1F
      <br>(青学から徒歩16分/渋谷駅から徒歩8分)`,
  hours: "月・火・水・木・土・日　11:00～22:30<br>　　　　　金　11:00～03:00",
},
{
  name: "📍俺の豚骨",
  lat: 35.661174,
  lon: 139.698773,
  image: "../ramen-image/ore_ramen.jpg",
  price: "1,010円",
  dishName: "▲黒泡豚骨(味玉)",
  description: `目玉の【泡豚骨】は、スープに泡が立つ新ジャンル！
      臭みがなく濃いめのスープが細麺にしっかり合う。
      <br>トッピングのトロトロ味玉は付けて損なし！`,
  access: `東京都渋谷区宇田川町13-4 スペイン坂OKビル B1F
      <br>(青学から徒歩17分/渋谷駅から徒歩9分)`,
  hours: "月～土　11:00～05:00<br>　　　　　日・祝日　11:00～22:00",
},
{
  name: "📍俺流塩らーめん",
  lat: 35.660018,
  lon: 139.700102,
  image: "../ramen-image/oreryu_ramen.jpg",
  price: "1,200円",
  dishName: "▲俺流超つけめん(辛塩)",
  description: `こってり好きでも美味しく塩味を楽しめる！
      麺の上の柚子皮の香りが良い。
      <br>白髪ネギとほうれん草、メンマトッピングがおいしい！`,
  access: `東京都渋谷区宇田川町21-7 渋谷平和バレービル
      <br>(青学から徒歩13分/渋谷駅から徒歩2分)`,
  hours: "不定休　11:00～23:00",
},
{
  name: "📍ジカセイ メンショウ",
  lat: 35.662143,
  lon: 139.698496,
  image: "../ramen-image/jikasei_ramen.jpg",
  price: "1,480円",
  dishName: "▲ヴィーガン担々麺(味玉トッピング)",
  description: `ヴィーガン担々麺という新ジャンル！
      山椒の香りがアクセント。
      <br>揚げたゴボウとトロトロの味玉がスープに絶妙にマッチ！`,
  access: `東京都渋谷区宇田川町15-1 渋谷パルコ B1F
      <br>(青学から徒歩17分/渋谷駅から徒歩10分)`,
  hours: "不定休　11:00～23:00",
},
{
  name: "📍博多食堂",
  lat: 35.661721,
  lon: 139.696358,
  image: "../ramen-image/hakatashokudo_ramen.jpg",
  price: "850円",
  dishName: "▲禁断の辛味噌ラーメン",
  description: `脂身多めのチャーシューでがっつり！
      たっぷりきくらげがシャキシャキでおいしい。
      <br>甘めのスープに無料の紅生姜と辛子高菜、ニンニクが絶妙にマッチ！`,
  access: `東京都渋谷区宇田川町36-16 プラザマリーナ 1F
      <br>(青学から徒歩19分/渋谷駅から徒歩11分)`,
  hours: "年中無休　11:00～01:00",
},
{
  name: "📍麺屋ぬかじ",
  lat: 35.662685,
  lon: 139.698633,
  image: "../ramen-image/nukaji_ramen.jpg",
  price: "1,330円",
  dishName: "▲辛つけめん",
  description: `味濃いめのチャーシューが美味しい！
      濃厚なスープとツルツルの麺が絶妙にマッチ。
      <br>麺は割と細めだから、さっぱり食べられる！`,
  access: `東京都渋谷区宇田川町3-12 monostep2 1F
      <br>(青学から徒歩16分/渋谷駅から徒歩11分)`,
  hours: "月～土・祝日　11:00～16:00<br>　　　　　日　定休日"
},
{
  name: "📍麺屋ずぅう",
  lat: 35.662501,
  lon: 139.69727,
  image: "../ramen-image/zuuu_ramen.jpg",
  price: "1,050円",
  dishName: "▲台湾まぜそば",
  description: `あっさりタイプの台湾まぜそばが楽しめる！
      辛めのひき肉で身体の芯からホットに。
      <br>高級感のある隠れ家店で女性にもオススメ！`,
  access: `東京都渋谷区宇田川町11-2 旭ビル 1F
      <br>(青学から徒歩18分/渋谷駅から徒歩12分)`,
  hours: "月～金　11:30～14:45/17:00～22:45<br>　　　　　土・日・祝日　11:30～22:45"
},
{
  name: "📍凛",
  lat: 35.66352,
  lon: 139.696791,
  image: "../ramen-image/rin_ramen.jpg",
  price: "1,080円",
  dishName: "▲しょうゆ",
  description: `渋谷で食べられる二郎インスパイア！
      極太麺が最高においしい。
      <br>1/3サイズもあるから、二郎系初めての方でも安心！`,
  access: `東京都渋谷区宇多川町6-20 パラシオン渋谷 1F
      <br>(青学から徒歩18分/渋谷駅から徒歩12分)`,
  hours: "月～土　11:00～15:00/18:00～22:00<br>　　　　　日　11:00～15:00"
},
{
  name: "📍一蘭",
  lat: 35.661109,
  lon: 139.701079,
  image: "../ramen-image/ichiran_ramen.jpg",
  price: "1,080円",
  dishName: "▲天然とんこつラーメン",
  description: `安定のクオリティで期待に応える王道チェーン店！
      インバウンド需要アップで120分以上待つことも。
      <br>赤タレとすっきり豚骨スープは、飲み終わりの締めにぴったり！`,
  access: `東京都渋谷区神南1-22-7 岩本ビル　Ｂ１Ｆ
      <br>(青学から徒歩14分/渋谷駅から徒歩6分)`,
  hours: "年中無休　24時間営業"
},
{
  name: "📍野郎ラーメン",
  lat: 35.660334,
  lon: 139.699177,
  image: "../ramen-image/yarou_ramen.jpg",
  price: "780円",
  dishName: "▲豚骨野郎",
  description: `味が濃すぎないから食べやすい次郎インスパイア！
      大量の背油がこってりで美味しい。
      <br>コールがないから、安心して食べに行ける！`,
  access: `東京都渋谷区宇田川町25-3 プリンスビル 1F
      <br>(青学から徒歩14分/渋谷駅から徒歩6分)`,
  hours: "年中無休　24時間営業"
},
{
  name: "📍ラーメン まこと屋",
  lat: 35.660991,
  lon: 139.696702,
  image: "../ramen-image/makotoya_ramen.jpg",
  price: "1,280円",
  dishName: "▲煮玉子赤辛牛白湯",
  description: `渋谷で唯一食べられる、"牛"白湯！
      濃厚で甘みのあるスープがおいしい。
      <br>柔らかいチャーシューが絶品で、超トロトロ煮玉子は必食！`,
  access: `東京都渋谷区宇田川町33-10 J+RサイドJビル 1F
      <br>(青学から徒歩18分/渋谷駅から徒歩10分)`,
  hours: "年中無休　24時間営業"
},
{
  name: "📍味源熊祭 おくむら",
  lat: 35.660253,
  lon: 139.699364,
  image: "../ramen-image/okumura_ramen.jpg",
  price: "1,050円",
  dishName: "▲味噌オロ(中辛)",
  description: `ホットなスープで身体の芯から温まる！
      濃厚な味噌スープが中太麺としっかりマッチ。
      <br>たっぷり野菜ときくらげでやみつき！`,
  access: `東京都渋谷区宇田川町24-6 鉄人門渋ビルヂング　２Ｆ
      <br>(青学から徒歩14分/渋谷駅から徒歩6分)`,
  hours: "不定休　11:00～07:00"
},
{
  name: "📍辛麺 華火",
  lat: 35.660154,
  lon: 139.699367,
  image: "../ramen-image/hanabi_ramen.jpg",
  price: "900円",
  dishName: "▲小辛",
  description: `ベースが醤油と唐辛子の宮崎県発祥辛麺！
      ふわふわのとき卵がおいしい。
      <br>もちもちのこんにゃく麺でもはやラーメンじゃない？！`,
  access: `東京都渋谷区宇田川町24-6 渋ビルヂング 3F
      <br>(青学から徒歩14分/渋谷駅から徒歩6分)`,
  hours: "火～日　11:30～06:00<br>　　　　　月　定休日"
},
{
  name: "📍九月堂",
  lat: 35.663853,
  lon: 139.69941,
  image: "../ramen-image/kugatsudo_ramen.jpg",
  price: "950円",
  dishName: "▲つけ麺",
  description: `カフェ併設のラーメン店！
      甘みが強めの濃厚魚介スープで、一味を入れて味変も。
      <br>濃いめのトロトロ角煮が絶品！`,
  access: `東京都渋谷区神南1-15-12 佐藤ビル2F
      <br>(青学から徒歩16分/渋谷駅から徒歩12分)`,
  hours: "不定休　11:00～21:00"
},
{
  name: "📍麺屋こころ",
  lat: 35.662426,
  lon: 139.701225,
  image: "../ramen-image/kokoro_ramen.jpg",
  price: "950円",
  dishName: "▲東京マゼソバ",
  description: `台湾混ぜそばの最高傑作！ 
      卵黄と濃厚な挽肉が中太麺と絡み合う。
      <br>刻みニンニクとニラの香りが食欲をそそること間違いなし！`,
  access: `東京都渋谷区神南1-11-5 ダイネス壱番館渋谷 1F
      <br>((青学から徒歩12分/渋谷駅から徒歩8分)`,
  hours: "月～土　11:00～23:00<br>　　　　　日　11:00～22:00"
}];

// ピンを地図に追加。クリックすると下にラーメンボックス  ※触らない
shops.forEach(shop => {
  const marker = L.marker([shop.lat, shop.lon]).addTo(map);
  marker.on('click', () => {
    infoDiv.style.display = 'block';
    infoDiv.innerHTML = `
      <div class="flex">
        <figure class="image">
          <img src="${shop.image}" alt="${shop.name}">
          <p>${shop.dishName}<br>${shop.price}</p>
        </figure>
        <div class="right">
          <p class="title">${shop.name}</p>
          <p class="text">${shop.description}</p>
          <p class="information">
            アクセス：${shop.access}<br>
            営業時間：${shop.hours}<br>
          </p>
        </div>
      </div>
    `;
	infoDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
const infoDiv = document.getElementById('info');


// 目印地点の強調表示ツール
const buildingCoords = [
  [35.659223, 139.699284],
  [35.659223, 139.698108],
  [35.659919, 139.698108],
  [35.659919, 139.699284]
];
var buildingPolygon = L.polygon(buildingCoords, {
  color: 'transparent'  
}).addTo(map);
var centroid = buildingPolygon.getBounds().getCenter();
L.tooltip({
  permanent: true,  
  className: 'building-tooltip' 
})
.setContent('SHIBUYA109')  // 表示するテキスト
.setLatLng(centroid)
.addTo(map);