/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4cc26ac0d3dde8e866e93303e200894c"
  },
  {
    "url": "article/oview/chart_specific.html",
    "revision": "77fd91812048cb2dff4e66215b0d5eda"
  },
  {
    "url": "article/oview/Chart.html",
    "revision": "7b0313bd2fb4997d5c20adc21ffcaa7c"
  },
  {
    "url": "article/oview/chart/area.html",
    "revision": "94817f8f3233d9f36548e5b9d67fd225"
  },
  {
    "url": "article/oview/chart/histo.html",
    "revision": "7061d5d369a743c867b5bed05e5144b8"
  },
  {
    "url": "article/oview/chart/intercation.html",
    "revision": "576f481d83a8f6ba6764b60c81c513ac"
  },
  {
    "url": "article/oview/chart/line.html",
    "revision": "f7813f7a6677b2c6d34d0f83a5e6df13"
  },
  {
    "url": "article/oview/chart/pie.html",
    "revision": "8b9c96960877cf44a5c96620ae84be93"
  },
  {
    "url": "article/oview/chart/point.html",
    "revision": "d8fe31409c4e154645d1fd9f1512435a"
  },
  {
    "url": "article/oview/chart/radar.html",
    "revision": "e633fe0ccb25ae71267ccd2f25ef4c1d"
  },
  {
    "url": "article/oview/index.html",
    "revision": "b5938ec60ceaee7b67f13109a8623f9f"
  },
  {
    "url": "article/oview/Pie.html",
    "revision": "3158d5526d8098831f6e5bf260168646"
  },
  {
    "url": "assets/css/0.styles.c76a2eb7.css",
    "revision": "039da942bde23b8427026f457fa559ff"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.859ab93d.js",
    "revision": "08a7a5750bba7db4f1c1dbc9abc861f2"
  },
  {
    "url": "assets/js/100.6368a350.js",
    "revision": "420cbe437ec44f2dba9582c228f3a284"
  },
  {
    "url": "assets/js/101.ea0057d3.js",
    "revision": "b36175a6be5857d8b38fd14a6d2e0e2e"
  },
  {
    "url": "assets/js/102.65b2e128.js",
    "revision": "29ea84b2f6f1fa2b161fb552ab68aedb"
  },
  {
    "url": "assets/js/103.7ef2a96a.js",
    "revision": "9fe9746f772765e4450d65a3e1e97270"
  },
  {
    "url": "assets/js/104.85ad5705.js",
    "revision": "6320dec9c53f46fce54d6ba2918c0b83"
  },
  {
    "url": "assets/js/105.027442a3.js",
    "revision": "8fa714ebbf82c379a6f16a825ce7acec"
  },
  {
    "url": "assets/js/106.bbbd3ffc.js",
    "revision": "37d42e4996e0f5a2adf177ef9b4da49f"
  },
  {
    "url": "assets/js/11.a476c613.js",
    "revision": "a505a87589b5ab34f9d983d39d9ae0a3"
  },
  {
    "url": "assets/js/12.121b3802.js",
    "revision": "1d183cc21a9b11ebc461de244bdc4a5e"
  },
  {
    "url": "assets/js/13.fa8ed27b.js",
    "revision": "8307da6806a61f6363ce26e9a666b7a2"
  },
  {
    "url": "assets/js/14.abb089aa.js",
    "revision": "7d60a8cf18c594e920063983d4521b75"
  },
  {
    "url": "assets/js/15.b76e0c48.js",
    "revision": "8c287cae75dc62b1d6ce2ea363ff46db"
  },
  {
    "url": "assets/js/16.88187972.js",
    "revision": "814fdb8648f773d3efe21ff2a8602193"
  },
  {
    "url": "assets/js/17.8e6b4daa.js",
    "revision": "8159eeb4e5f34d33f7dfff4f4994f377"
  },
  {
    "url": "assets/js/18.efa9a24f.js",
    "revision": "dce9f153fdae5a911a49cdebf0e31137"
  },
  {
    "url": "assets/js/19.d97e00ee.js",
    "revision": "949188eac7db52460b04ce845af7f6b2"
  },
  {
    "url": "assets/js/2.79ae508a.js",
    "revision": "937d6923cb8c63137ffd0e2efaa131fc"
  },
  {
    "url": "assets/js/20.ad4561d7.js",
    "revision": "b363d18e986642579badf9e6e8330862"
  },
  {
    "url": "assets/js/21.ce274f8d.js",
    "revision": "9503aef27e3abb0a07aa4de9cecd1fb4"
  },
  {
    "url": "assets/js/22.ee7cad73.js",
    "revision": "6d714f35f86318e7049a9f96f982db36"
  },
  {
    "url": "assets/js/23.57f42e34.js",
    "revision": "f5bceda4b6f6d4d6b78ab7efc3cdbf9f"
  },
  {
    "url": "assets/js/24.a31994c9.js",
    "revision": "778503e861be952e119e51647380a29a"
  },
  {
    "url": "assets/js/25.b84ba3f6.js",
    "revision": "f47e1b02603e573901b48c0cf0a8ca55"
  },
  {
    "url": "assets/js/26.e8cbbcc6.js",
    "revision": "06483d788e40fe84c072615b7fcf3569"
  },
  {
    "url": "assets/js/27.645dd352.js",
    "revision": "275140c0a96af2a4145145f2ccd650e8"
  },
  {
    "url": "assets/js/28.5be3efdc.js",
    "revision": "6d9fa14fccead794ca1e1ff679cb8217"
  },
  {
    "url": "assets/js/29.be31e6f2.js",
    "revision": "50ac0bcdb4c02f89329225412a9d2b24"
  },
  {
    "url": "assets/js/3.a46c6c0f.js",
    "revision": "fb955e6b792d4d6df5014721d94cb657"
  },
  {
    "url": "assets/js/30.a73034c6.js",
    "revision": "5d8af548af6faade704e59ed3ac44699"
  },
  {
    "url": "assets/js/31.240ff27d.js",
    "revision": "147ec8eb7aec6df201cca6132919478a"
  },
  {
    "url": "assets/js/32.4179606e.js",
    "revision": "077e565e504852cd319054af5a5f0988"
  },
  {
    "url": "assets/js/33.e7d9de48.js",
    "revision": "b27fbc6a799f9d55fa69d7e882abdf05"
  },
  {
    "url": "assets/js/34.de8c3de4.js",
    "revision": "4bc467ef60574a1392b33d0e0c4dafa3"
  },
  {
    "url": "assets/js/35.41341c86.js",
    "revision": "8cb11679552d49712729959272f9c5d7"
  },
  {
    "url": "assets/js/36.041ec909.js",
    "revision": "8d41aee63b544c02b0a0dd93a62026b1"
  },
  {
    "url": "assets/js/37.f38d4fc0.js",
    "revision": "29733596c668989f32ac5e667da21a14"
  },
  {
    "url": "assets/js/38.09fc9ac6.js",
    "revision": "c50cb80499f5fe7c2fc2d179b5c5ef99"
  },
  {
    "url": "assets/js/39.5fb59f23.js",
    "revision": "da81268bf545a855e9d5bef9d80b6451"
  },
  {
    "url": "assets/js/4.b5197cfd.js",
    "revision": "d63131255f398682d34b85d6a4bd5464"
  },
  {
    "url": "assets/js/40.12638379.js",
    "revision": "01abc7763981fb1811f9a3f967611be5"
  },
  {
    "url": "assets/js/41.da898a7c.js",
    "revision": "cd941e7f4a0d82017adf0d70ec401c80"
  },
  {
    "url": "assets/js/42.b2454d6f.js",
    "revision": "43f2f15332232ac936a8b6cfdface95f"
  },
  {
    "url": "assets/js/43.005f235a.js",
    "revision": "adaaf7dc1c5d00a6159dacc8459667ea"
  },
  {
    "url": "assets/js/44.efa19b30.js",
    "revision": "7ece799892bf0ae25ae48a5a21eb8578"
  },
  {
    "url": "assets/js/45.5c646338.js",
    "revision": "74409dd6a1ef4a0f50c3945149a98a8e"
  },
  {
    "url": "assets/js/46.3e44cbc8.js",
    "revision": "1f96b0720c7d08f688965408e7ae7848"
  },
  {
    "url": "assets/js/47.bf58e8be.js",
    "revision": "9b1553f999b0692c696bff3a1acd5a59"
  },
  {
    "url": "assets/js/48.f2d6aa4e.js",
    "revision": "5832080dc0961722bc23b9867189ba20"
  },
  {
    "url": "assets/js/49.cd6b6305.js",
    "revision": "9babfd5300fb6dd1e5a92cff88f597fe"
  },
  {
    "url": "assets/js/5.7353be14.js",
    "revision": "9e511490de2a3d46e2392318f9e719db"
  },
  {
    "url": "assets/js/50.934e9044.js",
    "revision": "6d0c09b5e02ed129119569caf42834da"
  },
  {
    "url": "assets/js/51.93b86ef4.js",
    "revision": "d63583cd5b79414070dab1cd9af9b636"
  },
  {
    "url": "assets/js/52.cdaf2ceb.js",
    "revision": "07d85a4824b92ec49498c74a8f3e316c"
  },
  {
    "url": "assets/js/53.d81ca313.js",
    "revision": "de6cbcea994521a8a71ca1d2ed86b104"
  },
  {
    "url": "assets/js/54.fa5e7ae7.js",
    "revision": "77daad4bdef2792f28d573105324f076"
  },
  {
    "url": "assets/js/55.85111f2f.js",
    "revision": "6e68652164174ddc2f3315afedd05022"
  },
  {
    "url": "assets/js/56.53d5cc31.js",
    "revision": "55988dd6d86193ac981c3f136d364005"
  },
  {
    "url": "assets/js/57.fd5f7b80.js",
    "revision": "b35a721cd3ad7fd2cef0614343a025ec"
  },
  {
    "url": "assets/js/58.f72c15c2.js",
    "revision": "8ce7da686845fe84d2ca1c9fad98a3da"
  },
  {
    "url": "assets/js/59.9ff68eb8.js",
    "revision": "c253fa564ce892b875ee95e9f94a20cc"
  },
  {
    "url": "assets/js/6.8d79750a.js",
    "revision": "246e4e95e3e7b44fa26a507bf22273fa"
  },
  {
    "url": "assets/js/60.6d9061a2.js",
    "revision": "5cd5372a389f23e837d4a7dcdf08d646"
  },
  {
    "url": "assets/js/61.2612c478.js",
    "revision": "f4278c22075829781b8d1d3d1e237bd3"
  },
  {
    "url": "assets/js/62.8ee86ff5.js",
    "revision": "63be340e62141d924188f91d738f884f"
  },
  {
    "url": "assets/js/63.6586f1be.js",
    "revision": "f1dcac834c4781a8eac351b285ff903b"
  },
  {
    "url": "assets/js/64.6976a5a2.js",
    "revision": "356f9ef00bc26bc5507a108f248c4d4a"
  },
  {
    "url": "assets/js/65.1aba8708.js",
    "revision": "2305c3b2fcfdbf9249561c6a71a11477"
  },
  {
    "url": "assets/js/66.1fff2160.js",
    "revision": "1281d849f5b2ce31b19e235a8f5159b7"
  },
  {
    "url": "assets/js/67.aa2b6312.js",
    "revision": "d4122131fac6bbdd8e8a937d74180f2c"
  },
  {
    "url": "assets/js/68.4fd0a03e.js",
    "revision": "ba3e8bee0becd3f3a213797956cae75e"
  },
  {
    "url": "assets/js/69.594238b9.js",
    "revision": "fcc563c937a4ed332d2a92b325a1f950"
  },
  {
    "url": "assets/js/7.bb4e32e1.js",
    "revision": "c96e09bc64ab6563a4a298a7f83b6def"
  },
  {
    "url": "assets/js/70.4d86f0bc.js",
    "revision": "dd8ed0692503ef3218d936547d082496"
  },
  {
    "url": "assets/js/71.99d7824c.js",
    "revision": "fbccf7ff9b30242e3dcc3087a8de7cc4"
  },
  {
    "url": "assets/js/72.1afeacd3.js",
    "revision": "f94aa082ace6323b7ef478bc0be36bb2"
  },
  {
    "url": "assets/js/73.db7a4659.js",
    "revision": "de1fa662d4e8ccee2270e15b7215f14f"
  },
  {
    "url": "assets/js/74.f0800ef6.js",
    "revision": "f33d17e3a25faa49b7bda754de01a383"
  },
  {
    "url": "assets/js/75.cabe1798.js",
    "revision": "3e9f9c4568d523489a4853848f2523bc"
  },
  {
    "url": "assets/js/76.be61cbe5.js",
    "revision": "ebf39fa98b45481354259a320e3f02a6"
  },
  {
    "url": "assets/js/77.cc5be08b.js",
    "revision": "631d588e278d327a20d954c293454229"
  },
  {
    "url": "assets/js/78.f90bca59.js",
    "revision": "e764f145d539f6da1a4bb928485e1884"
  },
  {
    "url": "assets/js/79.25c3f9ef.js",
    "revision": "711c63820ece6c859eb925007e38edc7"
  },
  {
    "url": "assets/js/8.5c4ea443.js",
    "revision": "8a30047b07a0fd133a025aabeb10bace"
  },
  {
    "url": "assets/js/80.dcdc3b42.js",
    "revision": "f85be1d9a5cbfd95d65e74f8cae127b2"
  },
  {
    "url": "assets/js/81.2c554bff.js",
    "revision": "d29234bc3691a61ff451082c1d947bc9"
  },
  {
    "url": "assets/js/82.b001aa78.js",
    "revision": "ee08ec61d8215e5dacddf1a1db3ba8e9"
  },
  {
    "url": "assets/js/83.5dfe0aef.js",
    "revision": "f29d7b25d311bb74c2d8183c902122a8"
  },
  {
    "url": "assets/js/84.fe9236ef.js",
    "revision": "91c982cde8e810b2485c738cd39a4cf2"
  },
  {
    "url": "assets/js/85.336e0e5c.js",
    "revision": "ed1982a2ab311148448ab008cf6c050c"
  },
  {
    "url": "assets/js/86.cdc09f4e.js",
    "revision": "1855af4a58482a45ec0ebe2f9e695dd1"
  },
  {
    "url": "assets/js/87.65040504.js",
    "revision": "8e6672a08e8a3a2e177906ad0b3a6850"
  },
  {
    "url": "assets/js/88.beeae3ed.js",
    "revision": "7d940bda24960bd377a460c88b49aac1"
  },
  {
    "url": "assets/js/89.a9c7db6b.js",
    "revision": "ca003bf66fdb97904f2ececd882596bc"
  },
  {
    "url": "assets/js/9.a4c1be60.js",
    "revision": "724334935d0f0051f4a6833da17cc160"
  },
  {
    "url": "assets/js/90.e0ecbf4e.js",
    "revision": "0c2ad7878e907c6ead5efa44cb1528b9"
  },
  {
    "url": "assets/js/91.790dc1fc.js",
    "revision": "b409f06920169e17b25cb64f9b801f55"
  },
  {
    "url": "assets/js/92.d5f5ab3d.js",
    "revision": "800290cd9e32668c185d12863868402e"
  },
  {
    "url": "assets/js/93.aa172c94.js",
    "revision": "1886e99cbbbe30565de1e6d73e3d9ce9"
  },
  {
    "url": "assets/js/94.697a4a9d.js",
    "revision": "51c9fd409c7b6af6c21c4aab33cbeb6e"
  },
  {
    "url": "assets/js/95.c6e6f760.js",
    "revision": "8460b721351ee0c4d52537973b2575b7"
  },
  {
    "url": "assets/js/96.2fb4ad98.js",
    "revision": "8decacc9c66292b7d364fc5002639302"
  },
  {
    "url": "assets/js/97.dbe3ca66.js",
    "revision": "9a7adf831cd801b16a3d297ae4a360db"
  },
  {
    "url": "assets/js/98.24d3c9d1.js",
    "revision": "7511d632b3d31d34a92be2ef9cb4fe79"
  },
  {
    "url": "assets/js/99.1ef84b0d.js",
    "revision": "e8fec3a035f102de99c18f8c5047966d"
  },
  {
    "url": "assets/js/app.746c6c23.js",
    "revision": "831779c4ada316e9e9be3c66ed3f18f2"
  },
  {
    "url": "css.png",
    "revision": "ef6cba618da3500bbabf1053bce1098f"
  },
  {
    "url": "engine/企业级微服务方案.html",
    "revision": "403b13e0515bb183b75907de5ecc317f"
  },
  {
    "url": "engine/前端工程能力思考.html",
    "revision": "01cd54fa1af76b978ded838aae34b7b1"
  },
  {
    "url": "engine/前端性能优化度量.html",
    "revision": "f0a1ab83f80b6e6007168e8d0c3f2e22"
  },
  {
    "url": "fonts.png",
    "revision": "696f367093f29c7f1324225910f6b051"
  },
  {
    "url": "frontend.png",
    "revision": "795358080117fe0d9d7076421f0ccb48"
  },
  {
    "url": "githubApi.html",
    "revision": "4932061273bae460f768c11de7261728"
  },
  {
    "url": "header.png",
    "revision": "cd8231756addbf2de8a2f314ec01799a"
  },
  {
    "url": "html.png",
    "revision": "86cdfaad523489f09029b1e98ba6f305"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "images.png",
    "revision": "becb35d55927cd482a48a7b1ed5a3d78"
  },
  {
    "url": "images/alipay.jpeg",
    "revision": "dc906c16296b14fd52198e4c79d92053"
  },
  {
    "url": "images/gmtc/muti-route/event.jpg",
    "revision": "c652a8df03a9db11595c3922ec4222eb"
  },
  {
    "url": "images/gmtc/muti-route/fenfa.jpg",
    "revision": "3164bf1a1187a6dd681628411a51f983"
  },
  {
    "url": "images/gmtc/muti-route/geli.jpg",
    "revision": "f165327e0c7b6353dd61a63520472f07"
  },
  {
    "url": "images/gmtc/muti-route/jxbox.jpg",
    "revision": "d914352e19dfadd687e7b8603337ba5e"
  },
  {
    "url": "images/gmtc/muti-route/route.jpg",
    "revision": "7130995486fa81e513f23b305942e944"
  },
  {
    "url": "images/gmtc/muti-route/stract.jpg",
    "revision": "6ed8d61bcd4623365501618b3e0b497a"
  },
  {
    "url": "images/gmtc/muti-route/total.png",
    "revision": "80a0e0e5d6c07c97267b75b0a22988ad"
  },
  {
    "url": "images/gmtc/performance/bianyuan1.png",
    "revision": "2cedf8801b33b98204a6abfef68ac20c"
  },
  {
    "url": "images/gmtc/performance/bianyuan2.png",
    "revision": "22396ada2f9fd9c03a234b7c665e6aa6"
  },
  {
    "url": "images/gmtc/performance/fp-fcp.png",
    "revision": "0a4ee9bb1f5c7e7f3886348238580e00"
  },
  {
    "url": "images/gmtc/performance/lighthouse-fmp.png",
    "revision": "6835f3b4114ad63645ed01fe253208ce"
  },
  {
    "url": "images/gmtc/performance/main-me.png",
    "revision": "8d09243ee5c2231c03d629a4d44c0f4c"
  },
  {
    "url": "images/gmtc/performance/method.png",
    "revision": "c8395adb07c3039b8c44d9c62ca40e83"
  },
  {
    "url": "images/gmtc/performance/timing.png",
    "revision": "5402edeee782a52f7b499cbffdfef7a8"
  },
  {
    "url": "images/gmtc/performance/tongping1.png",
    "revision": "77b277d0c0d6fb13110fa0ce77084f7d"
  },
  {
    "url": "images/gmtc/performance/tongping2.png",
    "revision": "ac20bd697235b7c2088f98548bd42aab"
  },
  {
    "url": "images/gmtc/performance/web.png",
    "revision": "0ac90ef8035a2026bb5799c0bad13310"
  },
  {
    "url": "images/interview/a.png",
    "revision": "d834889619205acae9a5cac7d1e680f7"
  },
  {
    "url": "images/interview/b.png",
    "revision": "dc79b7ccc90ed18338b32c895ebfb548"
  },
  {
    "url": "images/js/js_base.png",
    "revision": "4155e81ec612009b955153e5862383d9"
  },
  {
    "url": "images/js/preload-attr.png",
    "revision": "9393ede477fb490911e11ffb7786d156"
  },
  {
    "url": "images/js/preload.png",
    "revision": "664fa5c508c4f5f13476518440dbea1b"
  },
  {
    "url": "images/js/project_do.png",
    "revision": "fb8b4e1a8f6e3970fedd480b0818c6a8"
  },
  {
    "url": "images/js/project.png",
    "revision": "59d7ff3d550640410a411b6faf4336c3"
  },
  {
    "url": "images/js/vue_source.png",
    "revision": "db23317cbfc9573c22f58460aea45462"
  },
  {
    "url": "images/js/webpack_code_split.png",
    "revision": "f9dc91c0ce2b6fa777349541186a4891"
  },
  {
    "url": "images/main.gif",
    "revision": "8f34ef7e2c23afeee32ca8012425c206"
  },
  {
    "url": "images/mendix/env/1.png",
    "revision": "34d854dc61a152632ed51b78200010e6"
  },
  {
    "url": "images/mendix/env/2.png",
    "revision": "059dc01add328d61902d75f216718552"
  },
  {
    "url": "images/mendix/env/3.png",
    "revision": "6ba4225284a100a334a8090a08aa0cf1"
  },
  {
    "url": "images/mendix/env/4.png",
    "revision": "b9729963e57a270830dd3dcaeb2ed4f3"
  },
  {
    "url": "images/mendix/env/5.png",
    "revision": "6d3d5c5fd3a57e8769d2fc141a2b97f1"
  },
  {
    "url": "images/mendix/mendix_start.png",
    "revision": "98d0611a28b3ad0f977ae0d605055d27"
  },
  {
    "url": "images/oview/logo.png",
    "revision": "5c266a738acdab157b04d079b347d62e"
  },
  {
    "url": "images/oview/oview_main.png",
    "revision": "bf55687dcca6c5b6a795ce01e6de4d6d"
  },
  {
    "url": "images/oview/oview_pie.png",
    "revision": "989b1b6d9d74f4ff63e4619508714942"
  },
  {
    "url": "images/oview/pie.png",
    "revision": "d24e5439408e317bccbcbdfb007d8f2d"
  },
  {
    "url": "images/oview/qrcode.png",
    "revision": "39fce429304536c0ea5113bc64d66a04"
  },
  {
    "url": "images/oview/scroll.png",
    "revision": "a9a24c7c07e581426eddb4e92f45195e"
  },
  {
    "url": "images/popup/image.gif",
    "revision": "40d0b6c7d691615a973466da43fad752"
  },
  {
    "url": "images/popup/showbottom.png",
    "revision": "f9f7e221cba78d0846491e480e03d328"
  },
  {
    "url": "images/render.png",
    "revision": "239aca542cd237fac433f1eaf0b7efed"
  },
  {
    "url": "images/safe/iframe_hack.png",
    "revision": "043f8e7339d2e83f18cf2d69139c7e6e"
  },
  {
    "url": "images/table-filter.png",
    "revision": "553166bc6c64b4bb30d6aea5badbfa3b"
  },
  {
    "url": "images/vue_template.png",
    "revision": "b34fe66a7ecd34f798593e36f69b3182"
  },
  {
    "url": "images/vue/data-flow.png",
    "revision": "9a08ed11ce27498a49294e14c882eff9"
  },
  {
    "url": "images/vue/majestic.png",
    "revision": "41d6f2469aafe96566eaac13bf831849"
  },
  {
    "url": "images/vue/report.png",
    "revision": "3bd51733e95a65cb4129ff4f41b59758"
  },
  {
    "url": "images/vue/vue_2.0.jpeg",
    "revision": "ffbfb79b16303ffed8a75077150be6db"
  },
  {
    "url": "images/webpack/has-props.png",
    "revision": "46ae90205c9daaeffd0f9e928ec5d030"
  },
  {
    "url": "images/webpack/no-prop.png",
    "revision": "03d227c3bdc96f1502e360c4fe9856bc"
  },
  {
    "url": "images/webpack/success-first.png",
    "revision": "c66fd3fc7f67061da016a691f2be049c"
  },
  {
    "url": "images/webpack/success-two.png",
    "revision": "da7fbf04a7c2ae49733bcb7f93de3b91"
  },
  {
    "url": "images/wechat.jpeg",
    "revision": "7a8ade00a31dc0443f4ad9ee64c71e25"
  },
  {
    "url": "index.html",
    "revision": "ffc2264d8e7b5dfd46f399b90d5771e3"
  },
  {
    "url": "interview/笔试题.html",
    "revision": "9a95b4a6e65ff3f86a24cf37030ac443"
  },
  {
    "url": "interview/面试记录.html",
    "revision": "f957d4e7a1986019a547572b05df5163"
  },
  {
    "url": "interview/腾讯面试.html",
    "revision": "1c487598e5951f7edb362a0b6a2f54c7"
  },
  {
    "url": "interview/问答题.html",
    "revision": "5a73a30072c7b02df7bad0287efa102c"
  },
  {
    "url": "interview/性能优化实践.html",
    "revision": "3286f9e2804290f365ddebee3cce112f"
  },
  {
    "url": "interview/Http面试汇总.html",
    "revision": "687518d4650f034f03bbba2b0d25023f"
  },
  {
    "url": "interview/index.html",
    "revision": "4910c004c4347c60956afc62870475da"
  },
  {
    "url": "interview/JavaScript面试汇总.html",
    "revision": "83c323b7f54df631d3fcb38cce88eb7c"
  },
  {
    "url": "interview/Vue面试汇总.html",
    "revision": "f5616b072ee77f450ec37cf6d5de57d6"
  },
  {
    "url": "introduce.html",
    "revision": "5a917477e2ea525c9a0752a39eff8208"
  },
  {
    "url": "javascript.png",
    "revision": "8021c40683e59503a2f636e3357e234d"
  },
  {
    "url": "javascript/1px.html",
    "revision": "2ae85381cffa9af6dce5b03956086ee0"
  },
  {
    "url": "javascript/base/对Object.create和类式继承的理解.html",
    "revision": "fdbfbcffd86bac135a88127fb5fe7435"
  },
  {
    "url": "javascript/base/你不知道的Javascript上.html",
    "revision": "21744765ab99708b764db6ecd4ba2699"
  },
  {
    "url": "javascript/base/你不知道的Javascript中.html",
    "revision": "6213932efdaaac6fc5ae189867236881"
  },
  {
    "url": "javascript/base/Http缓存详解.html",
    "revision": "2d9fa315aff62cc25df441119ef182b7"
  },
  {
    "url": "javascript/base/JavaScript常见ployfill.html",
    "revision": "746d82c17e06911d184e3b23aa9efe9e"
  },
  {
    "url": "javascript/base/Javascript的变量提升和函数提升.html",
    "revision": "95cdd64b30db18469be9687952b787ed"
  },
  {
    "url": "javascript/base/Javascript的bind的polyfill的理解.html",
    "revision": "334dc0785c3292ccd64cddb511be870b"
  },
  {
    "url": "javascript/base/Javascript的call和apply和bind方法.html",
    "revision": "d4acc55650968fa4317234115ea00988"
  },
  {
    "url": "javascript/base/Javascript对闭包的理解.html",
    "revision": "768988d186bebf5be5ef360d24a4f1d1"
  },
  {
    "url": "javascript/base/Javascript寄生式组合继承详解.html",
    "revision": "874e7c776ae878d6639be8f0333504fb"
  },
  {
    "url": "javascript/base/Javascript柯里化和偏函数实现.html",
    "revision": "28827abc1866caa335eb23f772f20a2c"
  },
  {
    "url": "javascript/base/Javascript模块化发展AMD,CMD,CommonJS,UMD,ES6.html",
    "revision": "df0159c9ce9b3a935296fa8875d5ad23"
  },
  {
    "url": "javascript/base/JavaScript中改变this指向有几种方式.html",
    "revision": "4d4cfde23323e19744f98be4e3d940ae"
  },
  {
    "url": "javascript/base/Javascript中this绑定详解.html",
    "revision": "a75d19230610126c680f7916c61e3e00"
  },
  {
    "url": "javascript/base/new_A和A的区别.html",
    "revision": "114a21c10c96d442dca2e653428a46e5"
  },
  {
    "url": "javascript/base/Object.create和New的区别.html",
    "revision": "11f0bea547a8d6129f1d33cd38f61de1"
  },
  {
    "url": "javascript/deep/前端页面劫持和反劫持.html",
    "revision": "3746aa96c0d29b6ba2c393e39fae2c0d"
  },
  {
    "url": "javascript/deep/页面预加载.html",
    "revision": "0ff0b2f16ff5301d1f418130fb6e8a84"
  },
  {
    "url": "javascript/index.html",
    "revision": "3f2bbb2ddc9fed4ff9c51a5a82c18b7b"
  },
  {
    "url": "javascript/learn.html",
    "revision": "0fd33cfe1f4ad3e6114616ea83660cd0"
  },
  {
    "url": "javascript/lerna.html",
    "revision": "19b65a357d71167d1b6b065df9952c62"
  },
  {
    "url": "javascript/performance/性能优化实践.html",
    "revision": "ac09a4b9c2c3b8ad9c9047cfe509151e"
  },
  {
    "url": "javascript/proxy.html",
    "revision": "7d13bdfa4599c385a984ca99f816c2ee"
  },
  {
    "url": "javascript/webpack/使用webpack的require.context按需打包.html",
    "revision": "776c2cf6eca6301d4878a8f0ac5b0ab1"
  },
  {
    "url": "javascript/webpack/chunk-hash,hash和content-hash的区别.html",
    "revision": "97a4fcb6914b066dbd3df554550a9b6d"
  },
  {
    "url": "javascript/webpack/webpack-chain常用配置.html",
    "revision": "3a622e72bec44d153a365eb60ad62c1f"
  },
  {
    "url": "javascript/webpack/webpack模块异步加载原理解析.html",
    "revision": "54dcb4410d4d5a2dceedbacd50298cc4"
  },
  {
    "url": "mendix/获取配置信息,使用java创建Rest服务.html",
    "revision": "b207220f5a58bbd8444257b249d2808d"
  },
  {
    "url": "mendix/一些功能的实现.html",
    "revision": "f5e368337d9912c2afdd6e3131462482"
  },
  {
    "url": "mendix/env.html",
    "revision": "0845bf2b74660bc196184d7430802955"
  },
  {
    "url": "mendix/index.html",
    "revision": "1c169a6a9ca78a62d36c862b2a2d5274"
  },
  {
    "url": "mendix/javaaction.html",
    "revision": "c54aaedbff44373b983882444bc92bff"
  },
  {
    "url": "mendix/Mendix后台程序环境搭建.html",
    "revision": "44e23e6d7b053bfc1d0e23987037b867"
  },
  {
    "url": "mendix/study.html",
    "revision": "e1f3bcc68c9c61399d922ee940b3c1a9"
  },
  {
    "url": "mendix/widget.html",
    "revision": "188729a784bbe987aeb146a2ab4211c2"
  },
  {
    "url": "mendix/widgets/常用API.html",
    "revision": "e9ae6f8299b59f6e1f9736d78bdcc410"
  },
  {
    "url": "mendix/widgets/开发组件前工具的准备.html",
    "revision": "031919860a23c37d839a0f3364a7957f"
  },
  {
    "url": "mendix/widgets/详细API.html",
    "revision": "b0b8fe078150a110f3fb9eec6d8757ac"
  },
  {
    "url": "mendix/widgets/index.html",
    "revision": "59ac74669c2a1767e046d9d82846eb81"
  },
  {
    "url": "mendix/widgets/Vue_Mendix.html",
    "revision": "143c7a98742e39cca5a04d7bcb304b8e"
  },
  {
    "url": "mobile/index.html",
    "revision": "1c5c9b370ca69fe9e4aaffe96e0803e0"
  },
  {
    "url": "open/index.html",
    "revision": "ab7511ed32894f33ebc622939fc934f6"
  },
  {
    "url": "open/luckly_popup_window.html",
    "revision": "76b3e0c4f539964afa28ca06a222a900"
  },
  {
    "url": "open/luckly_recyclerview.html",
    "revision": "fa0c4aeb6a2f9d98af0a297a40e6e868"
  },
  {
    "url": "open/vue_template.html",
    "revision": "18dd20649c66fe86746e679bb31a2144"
  },
  {
    "url": "other/android_ready.html",
    "revision": "3a82633b135311860a769f2b2f32230f"
  },
  {
    "url": "other/base_info.html",
    "revision": "f3c03938c70aeb74ef1cc526dddf7199"
  },
  {
    "url": "other/ready.html",
    "revision": "ece127a9108854bae034e7e192b01d0e"
  },
  {
    "url": "other/vscode.html",
    "revision": "28fd7b11f0731ec997b543b9c94da72c"
  },
  {
    "url": "other/work.html",
    "revision": "93f0e5de77f28905505915c0aaea6dfd"
  },
  {
    "url": "react/index.html",
    "revision": "3dcac05f5d550132c210a763af4ad1d8"
  },
  {
    "url": "react/Mobx异步Action方案.html",
    "revision": "5ec621e80d3a0594ffd721623e43ed3a"
  },
  {
    "url": "react/React高阶组件的理解.html",
    "revision": "777a25b88f8cdfce5fe6c8014001e102"
  },
  {
    "url": "react/React中使用bind函数和箭头函数效率比较.html",
    "revision": "97ff754d35549d81b88620d19e042416"
  },
  {
    "url": "react/React状态管理框架Redux使用.html",
    "revision": "79a3a7280224bc5632a9f87cb02d8bef"
  },
  {
    "url": "react/Redux异步Action方案.html",
    "revision": "475e160ea84709bd582650286d37ef9e"
  },
  {
    "url": "react/Redux中间件详解.html",
    "revision": "2c4b1c740877239b470a37af9961cb9f"
  },
  {
    "url": "server-side.png",
    "revision": "9732e628b5d2d9ce2634647c1a0478f0"
  },
  {
    "url": "view-designer.html",
    "revision": "b2fabfc159c4a95c914ffd5851a7b52c"
  },
  {
    "url": "vue/你所忽略的Vue.html",
    "revision": "63ebad8670cfcc71c5c3c94a89197781"
  },
  {
    "url": "vue/如何添加PWA.html",
    "revision": "5ee2a4c194da6f9cbc5952f78ee1179c"
  },
  {
    "url": "vue/deep/Vue多入口打包性能优化.html",
    "revision": "7109d3362c022eacd3cfc7df2cc54b95"
  },
  {
    "url": "vue/deep/Vue响应式原理解析.html",
    "revision": "c2e1195a56368c4eb11632b113323e33"
  },
  {
    "url": "vue/index.html",
    "revision": "1d5c6e3305c2ab2b40903d0d6d6394b3"
  },
  {
    "url": "vue/program/如何全局显示工具栏.html",
    "revision": "8541f68fb276eec84d9b622140d71d03"
  },
  {
    "url": "vue/proxy.html",
    "revision": "625241f9f853da8f054b62977dd008eb"
  },
  {
    "url": "vue/test/Jest测试结果分析.html",
    "revision": "f89c1afb54f67f8f6e6c9141e0b151b9"
  },
  {
    "url": "vue/test/Vue使用jest单元测试详解.html",
    "revision": "e26ac89e650b91698877eb269db0ea3e"
  },
  {
    "url": "vue/Vue-cli插件开发.html",
    "revision": "bc0190b943e94166be7ccb68869c80fd"
  },
  {
    "url": "vue/Vue父组件使用scoped无法修改子组件样式.html",
    "revision": "0d1d66982d98ca58730714adf4329f37"
  },
  {
    "url": "vue/Vue及React单向数据流的理解.html",
    "revision": "c6175febf4fddf84c282f470fc4d5158"
  },
  {
    "url": "vue/Vue路由变化页面没有刷新解决办法.html",
    "revision": "9933ef68210bf642da21d1b536667aac"
  },
  {
    "url": "vue/Vue使用render函数渲染组件.html",
    "revision": "64a48eb2736691a2e0fc4436e68d1ca1"
  },
  {
    "url": "vue/Vue中插件开发的四种方式.html",
    "revision": "78782e2e2cb54f0c33e6fbcdf6db2632"
  },
  {
    "url": "vue/Vuex中Getter,Action,Mutation函数参数说明.html",
    "revision": "776e0550a0efef1d528a53e74cc1e0dc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
