// 地図の設定　setView:初期位置(緯度経度)、その後の数字はズーム具合(大きいほどズーム)
const map = L.map('map',{
  center: [35.659765 , 139.70465],
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
  name: "📍鼎泰豊",
  lat: 35.658672,
  lon: 139.701985,
  image: "../ramen-image/dhin_ramen.jpg",
  price: "1,230円",
  dishName: "▲タンタン麺",
  description: `THE・中華系の山椒風味抜群担々麺！
      チンゲン菜のクセが最高においしい。
      <br>中華全般取り扱っているので、小籠包と一緒に食べるのがマスト！`,
  access: `東京都渋谷区渋谷2-24-12 渋谷スクランブルスクエア 13F
      <br>(青学から徒歩11分/渋谷駅から徒歩1分)`,
  hours: "不定休　11:00～23:00"
},
{
  name: "📍大勝軒まるいち",
  lat: 35.659255,
  lon: 139.702838,
  image: "../ramen-image/maruichi_ramen.jpg",
  price: "1,070円",
  dishName: "▲辛つけ麺<br>(とろ～り煮卵トッピング)",
  description: `さらさらとしたスープが特徴的！ 
      脂身多めのチャーシューは柔らかくて絶品。
      <br>ボリューム満点でお腹いっぱいになる！`,
  access: `東京都渋谷区渋谷2-20-11 宇田川ビル1F・B1F
      <br>(青学から徒歩9分/渋谷駅から徒歩4分)`,
  hours: "年中無休　10:00～23:00",
},
{
  name: "📍香家",
  lat: 35.658839,
  lon: 139.702981,
  image: "../ramen-image/koya_ramen.jpg",
  price: "1,200円",
  dishName: "▲姫・担々麺",
  description: `エスニックな香りが強い！
      刻まれたザーサイをスープに浸しながら食べるのが最高。
      <br>辛さと痺れがあるので、苦手な人は注意！`,
  access: `東京都渋谷区渋谷2-21-1 渋谷ヒカリエShinQs1F
      <br>(青学から徒歩10分/渋谷駅から徒歩3分)`,
  hours: "不定休　11:00～22:30",
},
{
  name: "📍唐そば",
  lat: 35.658467,
  lon: 139.703853,
  image: "../ramen-image/karasoba_ramen.jpg",
  price: "900円",
  dishName: "▲ラーメン",
  description: `メニューは3種類の厳選！
      無料の唐辛子パウダーが食欲をそそる。
      <br>トッピングのトロトロ味玉は付けて損なし！`,
  access: `東京都渋谷区渋谷2-22-6 三信ビル
      <br>(青学から徒歩9分/渋谷駅から徒歩3分)`,
  hours: "月～土　11:00～21:00<br>　　　　　日・祝日　11:00～16:00",
},
{
  name: "📍ラーメン魁力屋",
  lat: 35.659596,
  lon: 139.703762,
  image: "../ramen-image/kairikiya_ramen.jpg",
  price: "1,089円",
  dishName: "▲コク旨辛ネギラーメン",
  description: `醤油ラーメンの中でもがっつりめの京都醬油ラーメン！
      背脂たっぷりでパンチのある味。
      <br>ラー油と七味に漬け込んだ白髪ねぎトッピングがオススメ！`,
  access: `東京都渋谷区渋谷2-19-15 宮益坂ビルディング 1F 105区画
      <br>(青学から徒歩8分/渋谷駅から徒歩4分)`,
  hours: "年中無休　11:00～24:00"
},
{
  name: "📍らーめん 鴨to葱",
  lat: 35.659596,
  lon: 139.704062,
  image: "../ramen-image/kamotonegi_ramen.jpg",
  price: "1,480円",
  dishName: "▲上 鴨らーめん",
  description: `あっさり鴨チャーシューは何枚でも食べられる！
      こだわりの葱は毎月種類が変わるから飽きない。
      <br>トロトロの味玉を絶品醬油スープに浸しながら食べよう！`,
  access: `東京都渋谷区渋谷2-19-15 宮益坂ビルディング 103
      <br>(青学から徒歩8分/渋谷駅から徒歩11分)`,
  hours: "年中無休　10:00～22:30",
},
{
  name: "📍横濱家系ラーメン 川島家",
  lat: 35.659765,
  lon: 139.70465,
  image: "../ramen-image/kawashimaya_ramen.jpg",
  price: "900円",
  dishName: "▲ラーメン",
  description: `町田商店の近くにニューオープン！
      パンチのあるスープにオリーブオイルの香りが強い。
      <br>麺は軟らかめなので、硬麺が好きな人は固めでオーダーしよう！`,
  access: `東京都渋谷区渋谷2-19-20 宮益坂村瀬ビル 1F
      <br>(青学から徒歩7分/渋谷駅から徒歩5分)`,
  hours: "年中無休　24時間営業",
},
{
  name: "📍どうとんぼり神座",
  lat: 35.660219,
  lon: 139.704881,
  image: "../ramen-image/kamukura_ramen.jpg",
  price: "1,000円",
  dishName: "▲煮玉子ラーメン",
  description: `大阪で大人気！
      シャキシャキで優しい甘みが特徴の白菜がたっぷり。
      <br>卓上のニラとおろしにんにくで自分好みにカスタマイズ！`,
  access: `東京都渋谷区渋谷1-8-10
      <br>(青学から徒歩7分/渋谷駅から徒歩6分)`,
  hours: "年中無休　11:00～23:30",
},
{
  name: "📍町田商店",
  lat: 35.660298,
  lon: 139.705487,
  image: "../ramen-image/matisho_ramen.jpg",
  price: "1,060円",
  dishName: "▲塩ネギラーメン",
  description: `渋谷で数少ない安定の家系！ 
      トッピングの白髪ねぎをご飯の上にのせて、豆板醤・ニンニクをかければもう最強。
      <br>完まく間違いなしの王道豚骨醤油！`,
  access: `東京都渋谷区渋谷1-8-5 小山ビル 1F
      <br>(青学から徒歩6分/渋谷駅から徒歩7分)`,
  hours: "年中無休　11:00～03:00",
},
{
  name: "📍青山煮干しラーメン ハレルヤ",
  lat:  35.66075,
  lon: 139.707381,
  image: "../ramen-image/hareruya_ramen.jpg",
  price: "850円",
  dishName: "▲濃厚煮干辛つけ麺",
  description: `青学生特典要チェック！
      煮干しの風味がしっかりしたスープ。
      <br>歯ごたえのある細麺がスープにしっかり絡む！`,
  access: `東京都渋谷区渋谷2-9-10 青山台ビル B1F
      <br>(青学から徒歩3分/渋谷駅から徒歩9分)`,
  hours: "月～土・祝日　11:30～16:30/18:00～22:00<br>　　　　　日　定休日",
},
{
  name: "📍麺屋TAMOTU",
  lat: 35.660374,
  lon: 139.707642,
  image: "../ramen-image/tamotsu_ramen.jpg",
  price: "930円",
  dishName: "▲醤油の香(かおる)",
  description: `青学から徒歩5分の好立地！ 
      ローストビーフのような柔らかさのチャーシューと、トロトロの味玉がポイント。
      <br>卓上にある生姜と柚子胡椒で味変してもおいしい！`,
  access: `東京都渋谷区渋谷2-7-13 大一ビル B1F
      <br>(青学から徒歩5分/渋谷駅から徒歩10分)`,
  hours: "月～土　11:00～20:00<br>　　　　　日・祝日　11:00～15:00"
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
  [35.661052, 139.710003],
  [35.661052, 139.710003],
  [35.661052, 139.710003],
  [35.661052, 139.710003]
];
var buildingPolygon = L.polygon(buildingCoords, {
  color: 'transparent'  
}).addTo(map);
var centroid = buildingPolygon.getBounds().getCenter();
L.tooltip({
  permanent: true,  
  className: 'building-tooltip' 
})
.setContent('青山学院大学')  // 表示するテキスト
.setLatLng(centroid)
.addTo(map);