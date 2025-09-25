const questions = [
  {
    text: "問1　今のテンションは？",
    options: [
      "静かに癒されたい",
      "ガツンと元気を出したい",
      "ちょっと冒険したい"
    ]
  },
  {
    text: "問2　あなたが大切にしたいのは？",
    options: [
      "スープ",
      "麺",
      "トッピング"
    ]
  }
];

const subQuestions = {
  スープ: {
    text: "問3　飲み干したくなるのは？",
    options: ["ガツンと濃厚系", "じんわり出汁系"]
  },
  麺: {
    text: "問3　あなたの性格は？",
    options: [
      "どっしり頼れるリーダー",
      "空気を読むサブリーダー",
      "繊細だけどスマートな頭脳派"
    ]
  },
  トッピング: {
    text: "問3　どれが好き？",
    options: ["チャーシュー", "玉子", "その他"]
  }
};

const results = {
  "静かに癒されたい|スープ|ガツンと濃厚系": {
    title: "静かな中に潜むスパイス欲",
	description: "落ち着いているように見えて、実は刺激を求めているのでは？<br>そんなあなたにおすすめのラーメンは…「濃厚醤油ラーメン」！",
    ramenImage: "./ramen-image/tamotsu_ramen.jpg",
    ramenName: "醤油の香(かおる)",
    ramenPrice: "930円",
    shopName: "麺屋TAMOTU",
    shopDescription: "青学から徒歩5分の好立地！ ローストビーフのような柔らかさのチャーシューと、トロトロの味玉がポイント。<br>卓上にある生姜と柚子胡椒で味変してもおいしい!",
    shopAccess: "東京都渋谷区渋谷2-7-13 大一ビル B1F <br>(青学から徒歩5分/渋谷駅から徒歩10分)",
    shopHours: "月～土　11:00～20:00<br>　　　　　日・祝日　11:00～15:00"
  },
  "静かに癒されたい|スープ|じんわり出汁系": {
    title: "澄み渡る超清純派",
    description: "いつでも落ち着いているあなたは、心が澄んでいるに違いない。<br>そんなあなたにおすすめのラーメンは…「あっさり魚介ラーメン」！",
	ramenImage: "./ramen-image/hayashi_ramen.jpg",
    ramenName: "味玉らーめん",
    ramenPrice: "1,100円",
    shopName: "はやし",
    shopDescription: "ラーメン百名店TOKYOに掲載実績あり！ あっさりした豚骨魚介スープ。<br>黄身が濃厚なとろとろ味玉は絶対につけるべき！",
    shopAccess: "東京都渋谷区道玄坂1-14-9 ソシアル道玄坂 1F<br>(青学から徒歩18分/渋谷駅から徒歩8分)",
    shopHours: "月・火・木・金・土　11:30～15:30<br>　　　　　水・日・祝日　定休日"
  },
  "静かに癒されたい|麺|どっしり頼れるリーダー": {
    title: "根を張る安心感",
    description: "言葉は少ないけど、ただそこにいるだけで揺るぎない安心感がある。<br>そんなあなたにおすすめのラーメンは…「柑橘系つけ麺」！",
	ramenImage: "./ramen-image/tsujita_ramen.jpg",
    ramenName: "濃厚つけ麺",
    ramenPrice: "1,100円",
    shopName: "つじ田",
    shopDescription: "すだちでさっぱり味変できる！ あっさりさと濃厚さがちょうどいいスープ。<br>コシのある太麺でボリューム満点！",
    shopAccess: "東京都渋谷区道玄坂1-2-3 渋谷フクラス 1F<br>(青学から徒歩15分/渋谷駅から徒歩5分)",
    shopHours: "不定休　11:00～04:00"
  },
  "静かに癒されたい|麺|空気を読むサブリーダー": {
    title: "縁の下の力持ち",
    description: "前に出なくても場を回すことができて、足りないところに手を伸ばせる人。<br>そんなあなたにおすすめのラーメンは…「まろやか塩らーめん」！",
	ramenImage: "./ramen-image/santouka_ramen.jpg",
    ramenName: "辛みそつけ麺",
    ramenPrice: "1,300円",
    shopName: "らーめん山頭火",
    shopDescription: "味がしっかり染み込んだ味玉がおいしい！ 中くらいで柔らかめの麺が特徴。<br>かなりあっさりめだから、こってり派の人向きではないかも？",
    shopAccess: "東京都渋谷区渋谷3-13-7<br>(青学から徒歩11分/渋谷駅から徒歩7分)",
    shopHours: "月～土　11:00～03:30<br>　　　　　日　11:00～21:00"
  },
  "静かに癒されたい|麺|繊細だけどスマートな頭脳派": {
    title: "冴えわたる頭脳派策士",
    description: "語りすぎず、でもいざというときに渾身の一手を放つ知性の持ち主。<br>そんなあなたにおすすめのラーメンは…「透き通る醬油ラーメン」！",
	ramenImage: "./ramen-image/kamotonegi_ramen.jpg",
    ramenName: "上 鴨らーめん",
    ramenPrice: "1,480円",
    shopName: "らーめん 鴨to葱",
    shopDescription: "あっさり鴨チャーシューは何枚でも食べられる！ こだわりの葱は毎月種類が変わるから飽きない。<br>トロトロの味玉を絶品醬油スープに浸しながら食べよう！",
    shopAccess: "東京都渋谷区渋谷2-19-15 宮益坂ビルディング 103<br>(青学から徒歩8分/渋谷駅から徒歩11分)",
    shopHours: "年中無休　10:00～22:30"
  },
  "静かに癒されたい|トッピング|チャーシュー": {
    title: "平和だけじゃ物足りない！",
    description: "人生に安心感だけじゃなく満足感も求める欲張りさん。<br>そんなあなたにおすすめのラーメンは…「こだわりチャーシューつけ麺」！",
	ramenImage: "./ramen-image/afuri_tsukemen.jpg",
    ramenName: "柚子辛露つけ麺",
    ramenPrice: "1,790円",
    shopName: "AFURI",
    shopDescription: "高級感のある店内で味わうあっさり柚子香るつけ麺！ 柚子の香り高いスープにシャキシャキの水菜がポイント。<br>スープが冷えているから、夏でもさっぱり食べられる！",
    shopAccess: "東京都港区南青山5-6-4 ハイトリオ南青山 B1F<br>(青学から徒歩6分/表参道駅から徒歩1分)",
    shopHours: "年中無休　10:30～22:00"
  },
  "静かに癒されたい|トッピング|玉子": {
    title: "ふわっとピシッと",
    description: "やわらかで穏便な日常を望みながらも、こだわりは強い方。<br>そんなあなたにおすすめのラーメンは…「進化系醬油ラーメン」！",
	ramenImage: "./ramen-image/onodera_ramen.jpg",
    ramenName: "特製ラーメン",
    ramenPrice: "1,450円",
    shopName: "麺 銀座おのでら",
    shopDescription: "表参道の裏道にあるおしゃれなラーメン店！出汁がよくきいたスープと甘めの味玉がしっかりマッチ。<br>香り高いハーブバターを溶かすと濃厚ラーメンに！1杯で2度楽しめる！",
    shopAccess: "東京都港区北青山3-5-40 PRYME CUBE表参道 1F<br>(青学から徒歩12分/表参道駅から徒歩8分)",
    shopHours: "年中無休　11:00～21:30"
  }, 
  "静かに癒されたい|トッピング|その他": {
    title: "しれっとすまし顔",
    description: "人畜無害そうな顔をしておきながら、秘めているのは大きな野望。<br>そんなあなたにおすすめのラーメンは…「鍋系醬油ラーメン」！",
	ramenImage: "./ramen-image/kamukura_ramen.jpg",
    ramenName: "煮玉子ラーメン",
    ramenPrice: "1,000円",
    shopName: "どうとんぼり神座",
    shopDescription: "大阪で大人気！シャキシャキで優しい甘みが特徴の白菜がたっぷり。<br>卓上のニラとおろしにんにくで自分好みにカスタマイズ！",
    shopAccess: "東京都渋谷区渋谷1-8-10<br>(青学から徒歩7分/渋谷駅から徒歩6分)",
    shopHours: "年中無休　11:00～23:30"
  },
  "ガツンと元気を出したい|スープ|ガツンと濃厚系": {
    title: "テンション高すぎエネルギー爆弾",
    description: "笑い声もリアクションも大きいあなたは、好きなものにも一直線！<br>そんなあなたにおすすめのラーメンは…「超濃厚魚介つけ麺」！",
	ramenImage: "./ramen-image/nukaji_ramen.jpg",
    ramenName: "辛つけめん",
    ramenPrice: "1,330円",
    shopName: "麺屋ぬかじ",
    shopDescription: "味濃いめのチャーシューが美味しい！濃厚なスープとツルツルの麺が絶妙にマッチ。<br>麺は割と細めだから、さっぱり食べられる！",
    shopAccess: "東京都渋谷区宇田川町3-12 monostep2 1F<br>(青学から徒歩16分/渋谷駅から徒歩11分)",
    shopHours: "月～土・祝日　11:00～16:00<br>　　　　　日　定休日"
  },
  "ガツンと元気を出したい|スープ|じんわり出汁系": {
    title: "空気洗浄機",
    description: "ノリがいいけどしつこくないあなたは、周囲を元気にするビタミン剤。<br>そんなあなたにおすすめのラーメンは…「ホットな生姜醬油ラーメン」！",
	ramenImage: "./ramen-image/shoganoyu_ramen.jpg",
    ramenName: "黒玉生姜ラーメン",
    ramenPrice: "1,140円",
    shopName: "長岡生姜ラーメン しょうがの湯",
    shopDescription: "新潟で有名な長岡ラーメンが渋谷で食べられる！ 生姜のきいたスープで身体もぽかぽか。<br>旨味たっぷりのスープがしみ込んだほうれん草と味玉で幸せになろう！",
    shopAccess: "東京都渋谷区渋谷3-10-12<br>(青学から徒歩12分/渋谷駅から徒歩5分)",
    shopHours: "年中無休　11:00～21:30"
  },
  "ガツンと元気を出したい|麺|どっしり頼れるリーダー": {
    title: "王道のムードメーカー",
    description: "皆を引っ張る姿は、まるで物語の主人公。<br>そんなあなたにおすすめのラーメンは…「ボリューム満点つけ麺」！",
	ramenImage: "./ramen-image/manmosu_ramen.jpg",
    ramenName: "濃厚 味玉入つけ麺",
    ramenPrice: "1,100円",
    shopName: "道玄坂 マンモス",
    shopDescription: "こってり重めのスープが麺によく絡む！ こだわりの胚芽麺が小麦の風味しっかりでおいしい。<br>濃度の高いスープともっちり麺でボリューム満点！",
    shopAccess: "東京都渋谷区道玄坂2-10-1<br>(青学から徒歩19分/渋谷駅から徒歩10分)",
    shopHours: "年中無休　11:30～22:00"
  },
  "ガツンと元気を出したい|麺|空気を読むサブリーダー": {
    title: "困ったらあの人！な安心装置",
    description: "明るく振舞いながらも、周囲を気遣える場の太陽。<br>そんなあなたにおすすめのラーメンは…「小麦感じる混ぜそば」！",
	ramenImage: "./ramen-image/aburadou_ramen.jpg",
    ramenName: "辛味噌油そば＋A",
    ramenPrice: "1,100円",
    shopName: "元祖油堂",
    shopDescription: "多種多様な卓上トッピングで自分好みに！ こだわり麺と味の濃いタレが絶妙にマッチ。<br>パルメザンチーズと卵黄が濃厚すぎる！",
    shopAccess: "東京都渋谷区宇田川町25-5<br>(青学から徒歩15分/渋谷駅から徒歩7分)",
    shopHours: "年中無休　11:00～03:00"
  },
  "ガツンと元気を出したい|麺|繊細だけどスマートな頭脳派": {
    title: "すべて計算済みの明るさ？！",
    description: "ふざけているようで、常に思考は冷静沈着。<br>そんなあなたにおすすめのラーメンは…「濃厚白湯麺」！",
	ramenImage: "./ramen-image/makotoya_ramen.jpg",
    ramenName: "煮玉子赤辛牛白湯",
    ramenPrice: "1,280円",
    shopName: "ラーメン まこと屋",
    shopDescription: "渋谷で唯一食べられる、牛白湯！ 濃厚で甘みのあるスープがおいしい。<br>柔らかいチャーシューが絶品で、超トロトロ煮玉子は必食！",
    shopAccess: "東京都渋谷区宇田川町33-10 J+RサイドJビル 1F<br>(青学から徒歩18分/渋谷駅から徒歩10分)",
    shopHours: "年中無休　24時間営業"
  },
  "ガツンと元気を出したい|トッピング|チャーシュー": {
    title: "肉＝正義の生きる飯テロ装置",
    description: "エネルギッシュに人生を謳歌するパワー満点。<br>そんなあなたにおすすめのラーメンは…「ちゃん系ラーメン」！",
	ramenImage: "./ramen-image/kattyan_ramen.jpg",
    ramenName: "辛味中華",
    ramenPrice: "1,050円",
    shopName: "渋谷かっちゃんラーメン",
    shopDescription: "なみなみ注がれたあっさり醤油スープが特徴のちゃん系ラーメン！ こだわりの切り立てチャーシューが絶品。<br>無料の白飯にスープをかけて食べるのはマスト！",
    shopAccess: "東京都渋谷区桜丘町1-1 Shibuya Sakura Stage 1F<br>(青学から徒歩12分/渋谷駅から徒歩4分)",
    shopHours: "年中無休　24時間営業"
  },
  "ガツンと元気を出したい|トッピング|玉子": {
    title: "ほっこりハイテンション",
    description: "落ち込んでいる人がいても、その無邪気さで笑わせちゃう。<br>そんなあなたにおすすめのラーメンは…「生姜香る味噌ラーメン」！",
	ramenImage: "./ramen-image/shinbusakiya_ramen.jpg",
    ramenName: "炙り味玉ラーメン(味噌)",
    ramenPrice: "1,100円",
    shopName: "炙り味噌らーめん 麺匠 真武咲弥",
    shopDescription: "生姜の風味が抜群の絶品味噌ラーメン！ とろっと甘めの味玉に、味噌スープが染み込んでいて癖になる。<br>無料で生姜を追加できるから、ほんのり生姜風味からガツンと生姜味までお好みに！",
    shopAccess: "東京都渋谷区道玄坂2-10-3<br>(青学から徒歩20分/渋谷駅から徒歩9分)",
    shopHours: "月　11:00～02:30<br>　　　　　火・水・木・日　11:00～04:30　　　　　金・土　11:00～06:30"
  },
  "ガツンと元気を出したい|トッピング|その他": {
    title: "分かる人には分かる隠し味",
    description: "その癖の強さから誤解されがちだけど、実は根強いファンがいる？！<br>そんなあなたにおすすめのラーメンは…「脂身がっつり混ぜそば」！",
	ramenImage: "./ramen-image/kasugatei_ramen.jpg",
    ramenName: "鳥豚油そば",
    ramenPrice: "890円",
    shopName: "油そば 春日亭",
    shopDescription: "背油たーっぷりのまぜそば！ 中太の縮れ麺がタレと背脂としっかり絡む。<br>甘めのまろやかテイストなので、卓上トッピングでパンチを足そう！",
    shopAccess: "東京都渋谷区道玄坂2-6-12<br>(青学から徒歩16分/渋谷駅から徒歩7分)",
    shopHours: "月～土　11:30～22:45<br>　　　　　日・祝日　11:00～21:00"
  },
  "ちょっと冒険したい|スープ|ガツンと濃厚系": {
    title: "変わり者の宇宙人",
    description: "前面に押し出されたその癖で、周りを蹴散らすバーサーカー。<br>そんなあなたにおすすめのラーメンは…「濃厚担々麺」！",
	ramenImage: "./ramen-image/usagi_ramen.jpg",
    ramenName: "担々麺 1辛",
    ramenPrice: "1,600円",
    shopName: "うさぎ",
    shopDescription: "行列に並ぶ価値あり！！ 山椒のほのかな痺れとゴマの風味が濃厚なスープがやみつきになる。",
    shopAccess: "東京都渋谷区神泉町8-13 アーガス霜田ビル 1F<br>(青学から徒歩24分/渋谷駅から徒歩15分)",
    shopHours: "月～金　11:30～14:30<br>　　　　　土・日・祝日　定休日"
  },
  "ちょっと冒険したい|スープ|じんわり出汁系": {
    title: "風変わりな清涼剤",
    description: "爽やかな雰囲気だけど、決して普通ではない独特なセンスの持ち主。<br>そんなあなたにおすすめのラーメンは…「ヘルシートマトラーメン」！",
	ramenImage: "./ramen-image/taiyou_ramen.jpg",
    ramenName: "夏野菜の冷やしトマト担々麺",
    ramenPrice: "950円",
    shopName: "太陽のトマト麺",
    shopDescription: "パスタとラーメンの融合！ トマトの旨味が凝縮した新感覚の担々麺。<br>辛さはないので、辛みが苦手な人にもオススメ！",
    shopAccess: "東京都渋谷区神宮前5-52-2 青山オーバルビル B1F<br>(青学から徒歩4分/表参道駅から徒歩6分)",
    shopHours: "年中無休　11:00～22:00"
  },
  "ちょっと冒険したい|麺|どっしり頼れるリーダー": {
    title: "影武者",
    description: "周りとは違う視点で物事を見られるあなたに、つい惹かれてしまう。<br>そんなあなたにおすすめのラーメンは…「がっつり二郎インスパイアラーメン」！",
	ramenImage: "./ramen-image/rin_ramen.jpg",
    ramenName: "しょうゆ",
    ramenPrice: "1,080円",
    shopName: "凛",
    shopDescription: "渋谷で食べられる二郎インスパイア！ 極太麺が最高においしい。<br>1/3サイズもあるから、二郎系初めての方でも安心！",
    shopAccess: "東京都渋谷区宇多川町6-20 パラシオン渋谷 1F<br>(青学から徒歩18分/渋谷駅から徒歩12分)",
    shopHours: "月～土　11:00～15:00/18:00～22:00<br>　　　　　日　11:00～15:00"
  },
  "ちょっと冒険したい|麺|空気を読むサブリーダー": {
    title: "カメレオン",
    description: "型にははまらないけど、自由な発想で皆を引っ張っていく。<br>そんなあなたにおすすめのラーメンは…「あっさりタイプの二郎系ラーメン」！",
	ramenImage: "./ramen-image/yarou_ramen.jpg",
    ramenName: "豚骨野郎",
    ramenPrice: "780円",
    shopName: "野郎ラーメン",
    shopDescription: "味が濃すぎないから食べやすい次郎インスパイア！ 大量の背油がこってりで美味しい。<br>コールがないから、安心して食べに行ける！",
    shopAccess: "東京都渋谷区宇田川町25-3 プリンスビル 1F<br>(青学から徒歩14分/渋谷駅から徒歩6分)",
    shopHours: "年中無休　24時間営業"
  },
  "ちょっと冒険したい|麺|繊細だけどスマートな頭脳派": {
    title: "高IQ変人",
    description: "常識にとらわれない独創的な思考で、周囲を驚かせる！<br>そんなあなたにおすすめのラーメンは…「まろやか豚骨ラーメン」！",
	ramenImage: "./ramen-image/tenjin_ramen.jpg",
    ramenName: "辛(カラ)",
    ramenPrice: "750円",
    shopName: "博多天神",
    shopDescription: "替え玉1杯無料のコスパ最強リピート必至ラーメン！ 卓上の紅生姜や高菜で自分好みにアレンジ！<br>クリーミーなスープと硬めの細麺であっという間に食べきれちゃう。",
    shopAccess: "東京都渋谷区道玄坂1-5-4 照力ビル 1F<br>(青学から徒歩15分/渋谷駅から徒歩5分)",
    shopHours: "年中無休　10:00～04:00"
  },
  "ちょっと冒険したい|トッピング|チャーシュー": {
    title: "偏愛ヒーロー",
    description: "その冒険心で、みんなの好奇心を満たしてくれるヒーロー。<br>そんなあなたにおすすめのラーメンは…「こだわりチャーシュー混ぜそば」！",
	ramenImage: "./ramen-image/shiti_ramen.jpg",
    ramenName: "味玉辛まぜそば",
    ramenPrice: "1,100円",
    shopName: "まぜそば七",
    shopDescription: "炭火で焼いたチャーシューが最高級においしい！ 甘めのタレがやみつきになる。<br>卓上のラー油でパンチを足してもおいしい！",
    shopAccess: "東京都渋谷区桜丘町16-10<br>(青学から徒歩14分/渋谷駅から徒歩6分)",
    shopHours: "月～金　11:30～22:45<br>　　　　　土・日・祝日　11:30～21:45"
	
  },
  "ちょっと冒険したい|トッピング|玉子": {
    title: "ふわふわ天然",
    description: "人とはちょっと違うその不思議な魅力で、周囲に好かれる天才。<br>そんなあなたにおすすめのラーメンは…「変わり種担々麺」！",
	ramenImage: "./ramen-image/jikasei_ramen.jpg",
    ramenName: "ヴィーガン担々麺(味玉トッピング)",
    ramenPrice: "1,480円",
    shopName: "ジカセイ メンショウ",
    shopDescription: "ヴィーガン担々麺という新ジャンル！ 山椒の香りがアクセント。<br>揚げたゴボウとトロトロの味玉がスープに絶妙にマッチ！",
    shopAccess: "東京都渋谷区宇田川町15-1 渋谷パルコ B1F<br>(青学から徒歩17分/渋谷駅から徒歩10分)",
    shopHours: "不定休　11:00～23:00"
  },
  "ちょっと冒険したい|トッピング|その他": {
    title: "癖強狂人",
    description: "もはや何を言っているのか分からない！あなたがいるこの空間がアクセント。<br>そんなあなたにおすすめのラーメンは…「変わり種混ぜそば」！",
	ramenImage: "./ramen-image/aburatou_ramen.jpg",
    ramenName: "油そば",
    ramenPrice: "880円",
    shopName: "日本油党",
    shopDescription: "もちもちの麺が甘いタレとしっかりマッチ！分厚めなチャーシューがホロホロとろける。<br>オススメは明太子とチーズいりの変わり種、釜玉油そば！",
    shopAccess: "東京都渋谷区宇田川町24-10 横田ビル 1F<br>(青学から徒歩15分/渋谷駅から徒歩7分)",
    shopHours: "月～木・日　11:00～23:00<br>　　　　　金・土　11:00～07:00"
  },
};

let answers = [];
let currentQuestionIndex = 0;
let selectedAnswers = [];

function showQuestion(step, options) {
  document.getElementById("result").classList.add("hidden");
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");

  questionEl.textContent = step.text;
  optionsEl.innerHTML = "";

  step.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.dataset.value = opt;
    btn.onclick = () => handleAnswer(opt);
    optionsEl.appendChild(btn);
  });
}

function handleAnswer(choice) {
  answers.push(choice);

  if (answers.length === 1) {
    showQuestion(questions[1], questions[1].options);
  } else if (answers.length === 2) {
    const subQ = subQuestions[answers[1]];
    showQuestion(subQ, subQ.options);
  } else if (answers.length === 3) {
    showResult();
  }
}



function startQuiz() {
  currentQuestionIndex = 0;
  selectedAnswers = [];
  document.querySelector(".start-button").style.display = "none";
  document.querySelector("#quiz-container").style.display = "block";
  showQuestion();
}

function showResult() {
  const key = answers.join("|");
  const result = results[key] || {
    title: "thinking time",
    description: "thinking time",
	ramenImage: "./noimage-ramen.jpg",
    ramenName: "nothing",
    ramenPrice: "-",
    shopName: "-",
    shopDescription: "-",
    shopAccess: "-",
    shopHours: "-"
  };
  document.getElementById("question").textContent = "-診断結果-";
  document.getElementById("options").innerHTML = "";

  document.getElementById("result-title").innerHTML = `あなたは…<br>　【${result.title}】タイプ！`;
  document.getElementById("result-description").innerHTML = result.description;
  document.querySelector("#result figure.image img").src = result.ramenImage;
  document.querySelector("#result figure.image p").innerHTML = `▲${result.ramenName}<br>${result.ramenPrice}`;
  document.querySelector("#result .right .title").innerHTML = `📍${result.shopName}`;
  document.querySelector("#result .right .text").innerHTML = result.shopDescription;
  document.querySelector("#result .right .information").innerHTML =
    `アクセス：${result.shopAccess}<br>営業時間：${result.shopHours}`;
  document.getElementById("result").classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  showQuestion(questions[0], questions[0].options);
  document.getElementById("restart-button").addEventListener("click", () => {
    answers = [];
    document.getElementById("result").classList.add("hidden");
    showQuestion(questions[0], questions[0].options);
  });
});