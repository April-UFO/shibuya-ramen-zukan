// 地図の設定　setView:初期位置(緯度経度)、その後の数字はズーム具合(大きいほどズーム)
const map = L.map('map',{
  center: [35.658965, 139.698108],
  zoom: 17,
  minZoom: 17,
  maxZoom: 17,
  scrollWheelZoom: false  //地図上でスクロールしてもズームにならない
});
// 地図画像表示スタイルと著作権表示　※触らない
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; OpenStreetMap & CartoDB'
}).addTo(map);


// お店のデータ
const shops = [{
  name: "📍らあめん渋英",
  lat: 35.658982,
  lon: 139.69946,
  image: "../ramen-image/shibuhide_ramen.jpg",
  price: "950円",
  dishName: "▲赤いとんこつめん",
  description: `あっさり臭みがないので豚骨苦手でもオススメ！
      麺はコシがしっかり。
      <br>半熟より硬めの味玉が好きな人は味玉もつけよう！`,
  access: `東京都渋谷区道玄坂2-4-5
      <br>(青学から徒歩14分/渋谷駅から徒歩6分)`,
  hours: "年中無休　10:00～23:00"
},
{
  name: "📍スタミナラーメン鬼山",
  lat: 35.658846,
  lon: 139.699305,
  image: "../ramen-image/oniyama_ramen.jpg",
  price: "950円",
  dishName: "▲スタミナラーメン",
  description: `ガツンとこってりパンチのあるスープ！
       生姜、ニンニク、背油たっぷりでボリューム満点。
      <br>ゴロゴロ大きめチャーシューが6個と、満足感◎`,
  access: `東京都渋谷区道玄坂2-6-6 山本ビル
      <br>(青学から徒歩16分/渋谷駅から徒歩6分)`,
  hours: "年中無休　11:00～23:00",
},
{
  name: "📍背脂ラーメン チャッチャ亭",
  lat: 35.660174,
  lon: 139.696542,
  image: "../ramen-image/chaccha_ramen.jpg",
  price: "1,380円",
  dishName: "▲背油ネギラーメン",
  description: `背油たっぷり、超濃厚ラーメン！
      背油の量は選べるから、初心者でも安心。
      <br>夏は冷房が効いていないので、汗だく！`,
  access: `東京都渋谷区道玄坂2-25-5 島田ビル 1F
      <br>(青学から徒歩18分/渋谷駅から徒歩10分)`,
  hours: "不定休　11:00～22:30",
},
{
  name: "📍ラーメン王 後楽本舗",
  lat: 35.658469,
  lon: 139.698648,
  image: "../ramen-image/ou_ramen.jpg",
  price: "800円",
  dishName: "▲味噌ラーメン<br>(味玉トッピング)",
  description: `THE 町中華の王道味噌ラーメン！
      チャーハンや餃子とセットで食べる方がいいかも。
      <br>シャキシャキの野菜炒めとトロトロ味玉が絶品！`,
  access: `東京都渋谷区道玄坂2-7-4 清水ビル 1F
      <br>(青学から徒歩16分/渋谷駅から徒歩7分)`,
  hours: "月　9:00～00:00<br>　　　　　火～土　24時間営業<br>　　　　　日　定休日",
},
{
  name: "📍博多風龍",
  lat: 35.658561,
  lon: 139.698417,
  image: "../ramen-image/furyu_ramen.jpg",
  price: "1,070円",
  dishName: "▲福・黒マー油とんこつラーメン",
  description: `替え玉2杯無料の激アツ店！
      香り高い黒マー油がオススメ。
      <br>卓上調味料が紅生姜、辛子高菜、ニンニク、鷹の爪とかなり豪華！`,
  access: `東京都渋谷区道玄坂2-8-8
      <br>(青学から徒歩16分/渋谷駅から徒歩7分)`,
  hours: "月～土　11:00～00:00<br>　　　　　日　11:00～20:00",
},
{
  name: "📍麺屋 五常",
  lat: 35.658168,
  lon: 139.698626,
  image: "../ramen-image/gojo_ramen.jpg",
  price: "1,300円",
  dishName: "▲辛・濃厚つけ麺 半熟玉子のせ",
  description: `超！濃厚魚介スープ！
      中太の麺にスープが絡み合って最後までおいしい。
      <br>味玉は適度なトロトロ感で、スープにひたすと美味しい！`,
  access: `東京都渋谷区道玄坂1-12-1 渋谷マークシティ アベニュー通り 4F
      <br>(青学から徒歩16分/渋谷駅から徒歩5分)`,
  hours: "不定休　11:00～23:00"
},
{
  name: "📍横浜家系らーめん侍",
  lat: 35.658846,
  lon: 139.699105,
  image: "../ramen-image/samurai_ramen.jpg",
  price: "950円",
  dishName: "▲らーめん",
  description: `行列に並ぶ価値あり！
      肉厚なチャーシューは絶品。
      <br>少し固めの縮れ麵が豚骨醬油のスープに合う！`,
  access: `東京都渋谷区道玄坂2-6-6 和光ビル 1F
      <br>　(青学から徒歩15分/渋谷駅から徒歩6分)`,
  hours: "年中無休　11:00～21:00",
},
{
  name: "📍蒙古タンメン中本",
  lat: 35.659055,
  lon: 139.698944,
  image: "../ramen-image/mouko_ramen.jpg",
  price: "920円",
  dishName: "▲味噌タンメン(辛3)",
  description: `大人気の激辛ラーメンチェーン！ 
      辛みレベルを選択できるから、辛さが苦手な方でも、安心して楽しめる！
      <br>たっぷりのシャキシャキ野菜と、熱々スープで最後まで冷めない！`,
  access: `東京都渋谷区道玄坂2-6-17 渋東シネタワー B2F
      <br>(青学から徒歩16分/渋谷駅から徒歩6分)`,
  hours: "年中無休　10:00～22:30",
},
{
  name: "📍中華麺店 喜楽",
  lat: 35.659034,
  lon: 139.696851,
  image: "../ramen-image/kiraku_ramen.jpg",
  price: "850円",
  dishName: "▲中華麺",
  description: `アクセントの焦がしネギがやみつきになるスープ！ 
      たっぷりもやしが最後まで食欲をそそる。
      <br>中太のわしわし麺が、スープによく絡んで絶品！`,
  access: `東京都渋谷区道玄坂2-17-6
      <br>(青学から徒歩18分/渋谷駅から徒歩9分)`,
  hours: "月・火・木・金・土・日　11:30～20:30<br>　　　　　水　定休日",
},
{
  name: "📍光醤",
  lat: 35.658569,
  lon: 139.698648,
  image: "../ramen-image/mitushou_ramen.jpg",
  price: "950円",
  dishName: "▲光らーめん",
  description: `無限に替玉無料！
      固めの細麺が癖になる。
      <br>背油とんこつのスープは、こってりしているのに食べやすい！`,
  access: `東京都渋谷区道玄坂2-7-4
      <br>(青学から徒歩16分/渋谷駅から徒歩7分)`,
  hours: "年中無休　10:00～07:00",
},
{
  name: "📍油そば 春日亭",
  lat: 35.658885,
  lon: 139.698448,
  image: "../ramen-image/kasugatei_ramen.jpg",
  price: "890円",
  dishName: "▲鳥豚油そば",
  description: `背油たーっぷりのまぜそば！
      中太の縮れ麺がタレと背脂としっかり絡む。
      <br>甘めのまろやかテイストなので、卓上トッピングでパンチを足そう！`,
  access: `東京都渋谷区道玄坂2-6-12
      <br>(青学から徒歩16分/渋谷駅から徒歩7分)`,
  hours: "月～土　11:30～22:45<br>　　　　　日・祝日　11:00～21:00"
},
{
  name: "📍麺屋武蔵 武骨外伝",
  lat: 35.658617,
  lon: 139.698267,
  image: "../ramen-image/musashi_ramen.jpg",
  price: "1,130円",
  dishName: "▲濃厚味玉白つけ麺",
  description: `もっちり太麺が最高！
      量を細かく決められるから、お腹いっぱいまで食べられる。
      <br>角煮チャーシューは絶品！`,
  access: `東京都渋谷区道玄坂2-8-5
      <br>(青学から徒歩16分/渋谷駅から徒歩7分)`,
  hours: "年中無休　11:30～22:30",
},
{
  name: "📍壱角家",
  lat: 35.658965,
  lon: 139.698108,
  image: "../ramen-image/ichikakuya_ramen.jpg",
  price: "860円",
  dishName: "▲ネギラーメン(醤油)",
  description: `クリーミーなスープととろけるチャーシューで食べやすい！ 
      飲みの後の締めにもぴったり。
      <br>ライスが230円と有料なのはどうなのか！`,
  access: `東京都渋谷区道玄坂2-9-10 道玄坂K&Kビル 2F
      <br>(青学から徒歩13分/渋谷駅から徒歩5分)`,
  hours: "月・火・水・木　11:00～06:00<br>　　　　　金　11:00～09:00<br>　　　　　土　24時間営業<br>　　　　　日・祝日　09:00～06:00",
},
{
  name: "📍油そば専門店 ぶらぶら",
  lat: 35.660002,
  lon: 139.697821,
  image: "../ramen-image/burabura_ramen.jpg",
  price: "880円",
  dishName: "▲油そば",
  description: `パンチのある濃いめのタレがやみつきになる！
      やわらかいチャーシューがおいしすぎる。
      <br>トッピングが色々あるから、アレンジ色々！`,
  access: `東京都渋谷区道玄坂2-29-18 清水ビル 1F
      <br>(青学から徒歩17分/渋谷駅から徒歩8分)`,
  hours: "年中無休　11:00～07:00",
},
{
  name: "📍三田製麺所",
  lat: 35.659147,
  lon: 139.697627,
  image: "../ramen-image/mita_ramen.jpg",
  price: "930円",
  dishName: "▲つけ麺",
  description: `魚介系のさっぱりつけ麵！
      スープには旨味が凝縮している。
      <br>無料で麺の量が変更できるから、たくさん食べる人にもオススメ！`,
  access: `東京都渋谷区道玄坂2-28-2 MMビル 1F
      <br>(青学から徒歩17分/渋谷駅から徒歩8分)`,
  hours: "年中無休　11:00～04:00",
},
{
  name: "📍塩豚骨らーめん たちひら",
  lat: 35.659083,
  lon: 139.697122,
  image: "../ramen-image/tachihira_ramen.jpg",
  price: "1,350円",
  dishName: "▲濃厚魚介辛みそつけ麺",
  description: `味噌の甘さをしっかり感じられるスープ！
      麺は中くらいの太さで、太麺が好きな人にはあんまりかも。
      <br>塩豚骨らーめんを売りにしているお店なので、つけ麺以外も要チェック！`,
  access: `東京都渋谷区道玄坂2-28-7
      <br>(青学から徒歩18分/渋谷駅から徒歩9分)`,
  hours: "年中無休　24時間営業",
},
{
  name: "📍炙り味噌らーめん 麺匠 真武咲弥",
  lat:  35.657847,
  lon:  139.696697,
  image: "../ramen-image/shinbusakiya_ramen.jpg",
  price: "1,100円",
  dishName: "▲炙り味玉ラーメン(味噌)",
  description: `生姜の風味が抜群の絶品味噌ラーメン！
      とろっと甘めの味玉に、味噌スープが染み込んでいて癖になる。
      <br>無料で生姜を追加できるから、ほんのり生姜風味からガツンと生姜味までお好みに！`,
  access: `東京都渋谷区道玄坂2-10-3
      <br>(青学から徒歩20分/渋谷駅から徒歩9分)`,
  hours: "月　11:00～02:30<br>　　　　　火・水・木・日　11:00～04:30<br>　　　　　金・土　11:00～06:30"
},
{
  name: "📍旭川ラーメン 男旭山",
  lat:  35.658661,
  lon:  139.698417,
  image: "../ramen-image/asahiyama_ramen.jpg",
  price: "1,030円",
  dishName: "▲辛味噌",
  description: `旨みたっぷりの味噌スープ！ 
      辛味噌のホットな辛さと濃厚スープが抜群にマッチ。
      <br>柔らかいチャーシューは脂乗りが良くて美味しすぎる！`,
  access: `東京都渋谷区道玄坂2-8-8 メナー道玄坂　１F
      <br>(青学から徒歩16分/渋谷駅から徒歩7分)`,
  hours: "年中無休　10:00～04:00"
},
{
  name: "📍道玄坂 マンモス",
  lat: 35.657689,
  lon: 139.696492,
  image: "../ramen-image/manmosu_ramen.jpg",
  price: "1,100円",
  dishName: "▲濃厚 味玉入つけ麺",
  description: `こってり重めのスープが麺によく絡む！
      こだわりの胚芽麺が小麦の風味しっかりでおいしい。
      <br>濃度の高いスープともっちり麺でボリューム満点！`,
  access: `東京都渋谷区道玄坂2-10-1
      <br>(青学から徒歩19分/渋谷駅から徒歩10分)`,
  hours: "年中無休　11:30～22:00"
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