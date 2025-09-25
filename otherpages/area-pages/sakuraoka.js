// 地図の設定　setView:初期位置(緯度経度)、その後の数字はズーム具合(大きいほどズーム)
const map = L.map('map',{
  center: [35.657386 , 139.701854],
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
  name: "📍はやし",
  lat: 35.657351,
  lon: 139.698038,
  image: "../ramen-image/hayashi_ramen.jpg",
  price: "1,100円",
  dishName: "▲味玉らーめん",
  description: `ラーメン百名店TOKYOに掲載実績あり！
      あっさりした豚骨魚介スープ。
      <br>黄身が濃厚なとろとろ味玉は絶対につけるべき！`,
  access: `東京都渋谷区道玄坂1-14-9 ソシアル道玄坂 1F
      <br>(青学から徒歩18分/渋谷駅から徒歩8分)`,
  hours: "月・火・木・金・土　11:30～15:30<br>　　　　　水・日・祝日　定休日"
},
{
  name: "📍中華そば 大和田",
  lat: 35.657734,
  lon: 139.699111,
  image: "../ramen-image/owada_ramen.jpg",
  price: "1,000円",
  dishName: "▲つけ麺(昆布魚介だし汁スープ)",
  description: `家系ラーメン店のつけ麺！
      濃いめのスープが癖になる。
      <br>トロットロの味玉が最高においしい！`,
  access: `東京都渋谷区道玄坂1-6-7
      <br>(青学から徒歩16分/渋谷駅から徒歩6分)`,
  hours: "月～木　11:30～16:00<br>　　　　　金　11:30～16:00/18:00～23:00<br>　　　　　土・日・祝日　定休日",
},
{
  name: "📍桜ん坊",
  lat: 35.656451,
  lon: 139.70093,
  image: "../ramen-image/sakuranbo_ramen.jpg",
  price: "980円",
  dishName: "▲つけ麺",
  description: `味が濃い目の醬油魚介ベース！
      トッピングにきゅうりがある変わり種。
      <br>お店のおばちゃん2人がとっても優しい！`,
  access: `東京都渋谷区桜丘町16-8 1F
      <br>(青学から徒歩15分/渋谷駅から徒歩6分)`,
  hours: "月～金　11:30～15:00/18:00～00:00<br>　　　　　土・日　11:30～00:00",
},
{
  name: "📍Renge no Gotoku",
  lat: 35.656411,
  lon: 139.70108,
  image: "../ramen-image/renge_ramen.jpg",
  price: "1,000円",
  dishName: "▲担々麺(味玉トッピング)",
  description: `揚げた豚肉である排骨がのった担々麺！
       酸味の強いスープがおいしい。
      <br>辛さが固定で選べないから、苦手な人は注意！`,
  access: `東京都渋谷区桜丘町16-7 鈴木ビル 1F
      <br>(青学から徒歩15分/渋谷駅から徒歩6分)`,
  hours: "不定休　11:00～22:00"
},
{
  name: "📍博多天神",
  lat: 35.657931,
  lon: 139.699504,
  image: "../ramen-image/tenjin_ramen.jpg",
  price: "750円",
  dishName: "▲辛(カラ)",
  description: `替え玉1杯無料のコスパ最強リピート必至ラーメン！
      卓上の紅生姜や高菜で自分好みにアレンジ！
      <br>クリーミーなスープと硬めの細麺であっという間に食べきれちゃう。`,
  access: `東京都渋谷区道玄坂1-5-4 照力ビル 1F
      <br>(青学から徒歩15分/渋谷駅から徒歩5分)`,
  hours: "年中無休　10:00～04:00",
},
{
  name: "📍つじ田",
  lat: 35.657706,
  lon: 139.700239,
  image: "../ramen-image/tsujita_ramen.jpg",
  price: "1,100円",
  dishName: "▲濃厚つけ麺",
  description: `すだちでさっぱり味変できる！ 
      あっさりさと濃厚さがちょうどいいスープ。
      <br>コシのある太麺でボリューム満点！`,
  access: `東京都渋谷区道玄坂1-2-3 渋谷フクラス 1F
      <br>(青学から徒歩15分/渋谷駅から徒歩5分)`,
  hours: "不定休　11:00～04:00",
},
{
  name: "📍黄金の塩らぁ麺 ドゥエ イタリアン",
  lat: 35.657400,
  lon: 139.700239,
  image: "../ramen-image/due_ramen.jpg",
  price: "1,080円",
  dishName: "▲黄金の塩らぁ麺",
  description: `黄金に輝く絶品スープ！
      薄めの柔らかいチャーシューは2枚も入っているからありがたい。
      <br>フライドオニオンとオリーブオイルでパンチのある味！`,
  access: `東京都渋谷区道玄坂1-2-3 東急プラザ 6F
      <br>(青学から徒歩15分/渋谷駅から徒歩5分)`,
  hours: "月～金　11:00～15:00/17:00～23:00<br>　　　　　土・日・祝日　11:00～23:00"
},
{
  name: "📍中華ソバ 櫻坂",
  lat: 35.656241,
  lon: 139.701099,
  image: "../ramen-image/sakura_ramen.jpg",
  price: "1,300円",
  dishName: "▲つけソバ<br>(味玉トッピング)",
  description: `ボリューム満点の麺の量！
      濃厚な魚介系のスープは、味が濃くて最高においしい。
      <br>味玉はトッピングしなくても、もともとついているのでご注意。`,
  access: `東京都渋谷区桜丘町17-10 吉野ビル 1F
      <br>(青学から徒歩15分/渋谷駅から徒歩6分)`,
  hours: "月～土　11:00～21:00<br>　　　　　日　定休日",
},
{
  name: "📍まぜそば七",
  lat: 35.6566,
  lon: 139.701044,
  image: "../ramen-image/shiti_ramen.jpg",
  price: "1,100円",
  dishName: "▲味玉辛まぜそば",
  description: `炭火で焼いたチャーシューが最高級においしい！
      甘めのタレがやみつきになる。
      <br>卓上のラー油でパンチを足してもおいしい！`,
  access: `東京都渋谷区桜丘町16-10
      <br>(青学から徒歩14分/渋谷駅から徒歩6分)`,
  hours: "月～金　11:30～22:45<br>　　　　　土・日・祝日　11:30～21:45",
},
{
  name: "📍伊蔵八味噌らーめん",
  lat: 35.65723,
  lon: 139.703184,
  image: "../ramen-image/izobachi_miso.jpg",
  price: "1,200円",
  dishName: "▲三種のラー油の味噌らーめん",
  description: `縮れ麺に濃厚な甘めの味噌スープが絡む！
      ラー油入りにして、程よい辛さと山椒の香りを楽しもう。
      <br>卓上にあるきくらげは無料！好きなだけ入れられる！`,
  access: `東京都渋谷区渋谷3-21-3 SHIBUYA STREAM 2F
      <br>(青学から徒歩12分/渋谷駅から徒歩3分)`,
  hours: "年中無休　11:00～22:30",
},
{
  name: "📍つけ麺屋 やすべえ",
  lat: 35.657153,
  lon: 139.703816,
  image: "../ramen-image/yasubee_ramen.jpg",
  price: "1,100円",
  dishName: "▲辛味つけ麺<br>(味玉トッピング)",
  description: `あっさりとこってりの良い所どり！
      麺は熱盛と冷盛を選べるから、オールシーズン行けちゃう。
      <br>卓上の魚粉で魚介風味をさらにプラスすることもできる！`,
  access: `東京都渋谷区渋谷3-18-7
      <br>(青学から徒歩11分/渋谷駅から徒歩3分)`,
  hours: "月～土　11:00～03:00<br>　　　　　日　11:00～22:00",
},
{
  name: "📍麺飯食堂 なかじま",
  lat: 35.657153,
  lon: 139.703616,
  image: "../ramen-image/nakajima_ramen.jpg",
  price: "930円",
  dishName: "▲担々麺(まろやか)",
  description: `ゴマの風味が抜群なクリーミースープ！
      ひき肉のうまみが凝縮している。
      <br>辣油の量を調整してもらえるから、辛味が苦手な人にもオススメ！`,
  access: `東京都渋谷区渋谷3-18-7 ナルセビル 1F
      <br>(青学から徒歩12分/渋谷駅から徒歩3分)`,
  hours: "月～金　11:00～00:00<br>　　　　　土・日　11:00～21:30",
},
{
  name: "📍東京油組総本店",
  lat: 35.656977,
  lon: 139.703998,
  image: "../ramen-image/aburagumi_ramen.jpg",
  price: "980円",
  dishName: "▲辛味噌油そば",
  description: `ずっとアツアツだから最後まで楽しめる！ 
      卓上トッピングで辛みを追加できる。
      <br>途中できざみ玉ねぎを入れると、シャキシャキ感が出て最高！`,
  access: `東京都渋谷区渋谷3-18-10
      <br>(青学から徒歩12分/渋谷駅から徒歩4分)`,
  hours: "月～土　11:00～05:00<br>　　　　　日　11:00～22:00"
},
{
  name: "📍渋谷かっちゃんラーメン",
  lat: 35.657476,
  lon: 139.703115,
  image: "../ramen-image/kattyan_ramen.jpg",
  price: "1,050円",
  dishName: "▲辛味中華",
  description: `なみなみ注がれたあっさり醤油スープが特徴のちゃん系ラーメン！
      こだわりの切り立てチャーシューが絶品。
      <br>無料の白飯にスープをかけて食べるのはマスト！`,
  access: `東京都渋谷区桜丘町1-1 Shibuya Sakura Stage 1F
      <br>(青学から徒歩12分/渋谷駅から徒歩4分)`,
  hours: "年中無休　24時間営業"
},
{
  name: "📍長岡生姜ラーメン しょうがの湯",
  lat: 35.656646,
  lon: 139.705211,
  image: "../ramen-image/shoganoyu_ramen.jpg",
  price: "1,140円",
  dishName: "▲黒玉生姜ラーメン",
  description: `新潟で有名な長岡ラーメンが渋谷で食べられる！ 
      生姜のきいたスープで身体もぽかぽか。
      <br>旨味たっぷりのスープがしみ込んだほうれん草と味玉で幸せになろう！`,
  access: `東京都渋谷区渋谷3-10-12
      <br>(青学から徒歩12分/渋谷駅から徒歩5分)`,
  hours: "年中無休　11:00～21:30"
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
  [35.658072, 139.702585],
  [35.658072, 139.702585],
  [35.658672, 139.701985],
  [35.658672, 139.701985]
];
var buildingPolygon = L.polygon(buildingCoords, {
  color: 'transparent'  
}).addTo(map);
var centroid = buildingPolygon.getBounds().getCenter();
L.tooltip({
  permanent: true,  
  className: 'building-tooltip' 
})
.setContent('渋谷スクランブルスクエア')  // 表示するテキスト
.setLatLng(centroid)
.addTo(map);