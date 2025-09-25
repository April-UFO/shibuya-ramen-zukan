// 地図の設定　setView:初期位置(緯度経度)、その後の数字はズーム具合(大きいほどズーム)
const map = L.map('map',{
  center: [35.664549 , 139.711062],
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
  name: "📍太陽のトマト麺",
  lat: 35.662702,
  lon: 139.709096,
  image: "../ramen-image/taiyou_ramen.jpg",
  price: "950円",
  dishName: "▲夏野菜の冷やしトマト担々麺<br>※夏季限定メニュー",
  description: `パスタとラーメンの融合！
      トマトの旨味が凝縮した新感覚の担々麺。
      <br>辛さはないので、辛みが苦手な人にもオススメ！`,
  access: `東京都渋谷区渋谷2-24-12 渋谷スクランブルスクエア 13F
      <br>(青学から徒歩4分/表参道駅から徒歩6分)`,
  hours: "年中無休　11:00～22:00"
},
{
  name: "📍SHIBIRE NOODLES 蝋燭屋",
  lat: 35.667318,
  lon: 139.708569,
  image: "../ramen-image/rosokuya_ramen.jpg",
  price: "1,400円",
  dishName: "▲担々麺",
  description: `辛さだけじゃない！
      痺れがおいしい夏にぴったり担々麺！大粒のひき肉は甘みたっぷり。
      <br>ゴマの風味もしっかり感じられる1杯！`,
  access: `東京都渋谷区神宮前4-12-10 表参道ヒルズ 3F
      <br>(青学から徒歩13分/表参道駅から徒歩8分)`,
  hours: "月～土　11:00～23:00<br>　　　　　日　11:00～22:00",
},
{
  name: "📍茂司",
  lat: 35.667534,
  lon: 139.715414 ,
  image: "../ramen-image/shigeji_ramen.jpg",
  price: "980円",
  dishName: "▲茂司ら～麺",
  description: `すっぽんのガラを使用した珍しいスープ！
      あっさりとこってりの中間。
      <br>麺の太さは細麺がおすすめ！`,
  access: `東京都港区南青山3-8-3
      <br>(青学から徒歩13分/表参道駅から徒歩7分)`,
  hours: "月～金・祝日　11:30～15:00<br>　　　　　土・日　定休日",
},
{
  name: "📍だるまや",
  lat: 35.663037,
  lon: 139.711771,
  image: "../ramen-image/darumaya_ramen.jpg",
  price: "1,100円",
  dishName: "▲角煮そば",
  description: `行列のできる人気店！
      魚介の風味が抜群のラーメン。
      <br>トッピングは別皿で提供されるから、自分のペースで追加できる！`,
  access: `東京都港区南青山5-9-5 村山ビル 1F
      <br>(青学から徒歩5分/表参道駅から徒歩3分)`,
  hours: "火～土　11:00～20:30<br>　　　　　月・日　定休日",
},
{
  name: "📍青山焼鳥俱楽部 昼の部",
  lat: 35.662543,
  lon: 139.711548,
  image: "../ramen-image/yakitori_ramen.jpg",
  price: "1,000円",
  dishName: "▲厚地鶏魚介つけ麺",
  description: `夜は焼き鳥店に早変わりする青山の隠れ家店！
      炭香る炙りチャーシューが絶品。
      <br>麺はしっかりコシがあり、スープは濃厚だけど柚子皮でさっぱり！`,
  access: `東京都港区南青山5-10-5 第一九曜ビル B1F
      <br>(青学から徒歩4分/表参道駅から徒歩5分)`,
  hours: "月～金　11:30～15:00<br>　　　　　土・日・祝日　定休日",
},
{
  name: "📍ラーメンロックマウンテン",
  lat: 35.667073,
  lon: 139.713606,
  image: "../ramen-image/rockmountain_ramen.jpg",
  price: "1,350円",
  dishName: "▲濃厚海老つけ麺<br>(味玉トッピング)",
  description: `まるでビーフシチューのようなつけ汁？！
       後から香る海老が超濃厚。
      <br>レモンでさっぱり味変して、最後まで楽しめる！`,
  access: `東京都港区南青山5-10-5 第一九曜ビル B1F
      <br>(青学から徒歩15分/表参道駅から徒歩9分)`,
  hours: "年中無休　11:00～21:30",
},
{
  name: "📍AFURI",
  lat: 35.66371,
  lon: 139.712244,
  image: "../ramen-image/afuri_shoyu.jpg",
  price: "1,173円",
  dishName: "▲醤油らーめん",
  description: `高級感のある店内で味わうあっさり醤油ラーメン！
      柚子の香り高いスープにシャキシャキの水菜がポイント。
      <br>AFURIで食べられる【つけ麺】はこちらから /【塩】はこちらから`,
  access: `東京都港区南青山5-6-4 ハイトリオ南青山 B1F
      <br>(青学から徒歩6分/表参道駅から徒歩1分)`,
  hours: "年中無休　10:30～22:00",
},
{
  name: "📍麺 銀座おのでら",
  lat: 35.666834,
  lon: 139.711671,
  image: "../ramen-image/onodera_ramen.jpg",
  price: "1,450円",
  dishName: "▲特製ラーメン",
  description: `表参道の裏道にあるおしゃれなラーメン店！
      出汁がよくきいたスープと甘めの味玉がしっかりマッチ。
      <br>香り高いハーブバターを溶かすと濃厚ラーメンに！1杯で2度楽しめる！`,
  access: `東京都港区北青山3-5-40 PRYME CUBE表参道 1F
      <br>(青学から徒歩12分/表参道駅から徒歩8分)`,
  hours: "年中無休　11:00～21:30",
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
  [35.665054, 139.712874],
  [35.665054, 139.711874],
  [35.665054, 139.711874],
  [35.665054, 139.711874]
];
var buildingPolygon = L.polygon(buildingCoords, {
  color: 'transparent'  
}).addTo(map);
var centroid = buildingPolygon.getBounds().getCenter();
L.tooltip({
  permanent: true,  
  className: 'building-tooltip' 
})
.setContent('表参道駅')  // 表示するテキスト
.setLatLng(centroid)
.addTo(map);