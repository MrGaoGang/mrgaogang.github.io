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
    "revision": "040a4b322d5d9be74dc41e4342e1144f"
  },
  {
    "url": "article/oview/chart_specific.html",
    "revision": "3b65eb200b9e094a38fb09f7b9133294"
  },
  {
    "url": "article/oview/Chart.html",
    "revision": "a25b09033eab810a55f719ab0968ba38"
  },
  {
    "url": "article/oview/chart/area.html",
    "revision": "ad16ed2e902dbe2818d77179452012b2"
  },
  {
    "url": "article/oview/chart/histo.html",
    "revision": "8f7bd7fd6d906407bf24042f042960d1"
  },
  {
    "url": "article/oview/chart/intercation.html",
    "revision": "3729ed1d644bd5deed5daa138c8b836c"
  },
  {
    "url": "article/oview/chart/line.html",
    "revision": "b52a57af0a0c0264c8941cfb76c6751b"
  },
  {
    "url": "article/oview/chart/pie.html",
    "revision": "f62db47f5db8c52b0bd8a7b36974b7c3"
  },
  {
    "url": "article/oview/chart/point.html",
    "revision": "4248f899fee2ce81b6f39e3d2a071394"
  },
  {
    "url": "article/oview/chart/radar.html",
    "revision": "4f689c2fba4f66f60a5dd7efbab2853a"
  },
  {
    "url": "article/oview/index.html",
    "revision": "e6f95767cfb09dbaf134480c528be652"
  },
  {
    "url": "article/oview/Pie.html",
    "revision": "ae1aaf6924581f19ca184ec3390db2a4"
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
    "url": "assets/js/10.7b3673e3.js",
    "revision": "f71c9c6901c92bf3cdc6d675c9ece859"
  },
  {
    "url": "assets/js/100.9020dde6.js",
    "revision": "cdaa1fdde8b9e94d2eba7a2c321d161b"
  },
  {
    "url": "assets/js/101.ea0057d3.js",
    "revision": "b36175a6be5857d8b38fd14a6d2e0e2e"
  },
  {
    "url": "assets/js/102.ee240842.js",
    "revision": "ac5da8992c56b1e76d35da7b5d94e1c1"
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
    "url": "assets/js/105.03810594.js",
    "revision": "fa86e14e888b4a681fa1c72fc0d68182"
  },
  {
    "url": "assets/js/106.bbbd3ffc.js",
    "revision": "37d42e4996e0f5a2adf177ef9b4da49f"
  },
  {
    "url": "assets/js/11.2f3dab15.js",
    "revision": "a7c0292aa4b322c8c9cb9f5710c9bdbc"
  },
  {
    "url": "assets/js/12.a5266d05.js",
    "revision": "d7e0b09d01d1f9b88b73cb5083e4d9c2"
  },
  {
    "url": "assets/js/13.fa8ed27b.js",
    "revision": "8307da6806a61f6363ce26e9a666b7a2"
  },
  {
    "url": "assets/js/14.ff83153a.js",
    "revision": "5226036b5437309a4cdcd3aec88ad30d"
  },
  {
    "url": "assets/js/15.8b0259ed.js",
    "revision": "9358ebbeb834de4f66612e5969892db3"
  },
  {
    "url": "assets/js/16.b8ff12a5.js",
    "revision": "4434e3e84c4389cef635f5c39cfa2663"
  },
  {
    "url": "assets/js/17.8e6b4daa.js",
    "revision": "8159eeb4e5f34d33f7dfff4f4994f377"
  },
  {
    "url": "assets/js/18.73a5df70.js",
    "revision": "9a1609e2ae3df834ef170dba94afc2ef"
  },
  {
    "url": "assets/js/19.970fa675.js",
    "revision": "769ecf2aa2f524eec0993dd695bf105f"
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
    "url": "assets/js/21.f8c35c49.js",
    "revision": "e919dae0f330e57c91f6ae4e8c8b0251"
  },
  {
    "url": "assets/js/22.fc26f38a.js",
    "revision": "9a156fbdbd301c7e675159be4e50088a"
  },
  {
    "url": "assets/js/23.83f201f1.js",
    "revision": "d7934ce1cdd87df2601f013730b2bbaa"
  },
  {
    "url": "assets/js/24.3787080e.js",
    "revision": "849c2fd7c411171b3757d6cc5a785a81"
  },
  {
    "url": "assets/js/25.11bbbe50.js",
    "revision": "9fcefa706f5c2b6cb182892192c5d8d1"
  },
  {
    "url": "assets/js/26.e8cbbcc6.js",
    "revision": "06483d788e40fe84c072615b7fcf3569"
  },
  {
    "url": "assets/js/27.3261ee11.js",
    "revision": "f3012de85faa38afe2aeeef3520a321c"
  },
  {
    "url": "assets/js/28.fd94b5c0.js",
    "revision": "f2a12ad54cc8287f764bc0281706fa11"
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
    "url": "assets/js/30.e8f24c1d.js",
    "revision": "d859464956cd0f7be4d64aa09fbe99fe"
  },
  {
    "url": "assets/js/31.240ff27d.js",
    "revision": "147ec8eb7aec6df201cca6132919478a"
  },
  {
    "url": "assets/js/32.ed9c8a16.js",
    "revision": "0c41065fa112afc78f3e33997ac216a5"
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
    "url": "assets/js/35.d71e2cd9.js",
    "revision": "4bc0b0275cb1094c754f2fd3ae0d7399"
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
    "url": "assets/js/40.df949197.js",
    "revision": "879cb09f026072bb6ab854a360dce5d2"
  },
  {
    "url": "assets/js/41.da898a7c.js",
    "revision": "cd941e7f4a0d82017adf0d70ec401c80"
  },
  {
    "url": "assets/js/42.f59b0ec9.js",
    "revision": "dc0355d78c66784f453b09d97c579896"
  },
  {
    "url": "assets/js/43.005f235a.js",
    "revision": "adaaf7dc1c5d00a6159dacc8459667ea"
  },
  {
    "url": "assets/js/44.8bb013db.js",
    "revision": "6ad8306305a9d48bb92ee03c516f9d8d"
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
    "url": "assets/js/47.e5b22963.js",
    "revision": "3208f1eb3d2968be822784a8e19420a0"
  },
  {
    "url": "assets/js/48.f2d6aa4e.js",
    "revision": "5832080dc0961722bc23b9867189ba20"
  },
  {
    "url": "assets/js/49.e01bc196.js",
    "revision": "3184616c1fdcec164a4d8742daf16983"
  },
  {
    "url": "assets/js/5.7353be14.js",
    "revision": "9e511490de2a3d46e2392318f9e719db"
  },
  {
    "url": "assets/js/50.c13e368f.js",
    "revision": "9a4886d81d2cb3f644dfc5977e2db212"
  },
  {
    "url": "assets/js/51.93b86ef4.js",
    "revision": "d63583cd5b79414070dab1cd9af9b636"
  },
  {
    "url": "assets/js/52.e3fdc8a0.js",
    "revision": "82ca842bac2dc7069272018e8c373b50"
  },
  {
    "url": "assets/js/53.d81ca313.js",
    "revision": "de6cbcea994521a8a71ca1d2ed86b104"
  },
  {
    "url": "assets/js/54.40738534.js",
    "revision": "0f5cd26798a1074174305263d78a9f26"
  },
  {
    "url": "assets/js/55.85111f2f.js",
    "revision": "6e68652164174ddc2f3315afedd05022"
  },
  {
    "url": "assets/js/56.55fd0269.js",
    "revision": "2bfd110dcd3a4115ecaa864e340b39e4"
  },
  {
    "url": "assets/js/57.9cfde4b8.js",
    "revision": "9bee97b73101e29eff8bded5603a05fc"
  },
  {
    "url": "assets/js/58.f235803b.js",
    "revision": "317d905663b510c3dad006cca491138a"
  },
  {
    "url": "assets/js/59.9ff68eb8.js",
    "revision": "c253fa564ce892b875ee95e9f94a20cc"
  },
  {
    "url": "assets/js/6.ffeb50e2.js",
    "revision": "6844770333a24a9d38d2a09bb99106a4"
  },
  {
    "url": "assets/js/60.3f9dbf04.js",
    "revision": "21eb9599dbc5ac350ad8418afa5de83b"
  },
  {
    "url": "assets/js/61.4f63c777.js",
    "revision": "4e9fabed1a899fa4977ec91454071315"
  },
  {
    "url": "assets/js/62.663f0781.js",
    "revision": "49703ac296af8dc5f2d8c08a40543252"
  },
  {
    "url": "assets/js/63.1114b9a0.js",
    "revision": "d071bf00c8347615426b54840ea3be97"
  },
  {
    "url": "assets/js/64.87bca7f2.js",
    "revision": "c09a87a7503c14a94d196979e601a06c"
  },
  {
    "url": "assets/js/65.40c8e323.js",
    "revision": "5ff9bb288db6f4b1018ab12ea84acace"
  },
  {
    "url": "assets/js/66.c2a276ec.js",
    "revision": "7c3601fe16494921ca66f174b8d9ae71"
  },
  {
    "url": "assets/js/67.aa2b6312.js",
    "revision": "d4122131fac6bbdd8e8a937d74180f2c"
  },
  {
    "url": "assets/js/68.110bf94e.js",
    "revision": "c0c4cfd0331c3c560c406d75ee4ae702"
  },
  {
    "url": "assets/js/69.b4c42bca.js",
    "revision": "064a898e41241ed578090870ca6f50f3"
  },
  {
    "url": "assets/js/7.dcbee1f2.js",
    "revision": "f3a41fe0a006cf136cee193081264e78"
  },
  {
    "url": "assets/js/70.0bc17e3a.js",
    "revision": "51d187f9890a1babe3dcbb276f5f0c71"
  },
  {
    "url": "assets/js/71.a7c0d73d.js",
    "revision": "57575f923c6b7e8945d50e058a2266fc"
  },
  {
    "url": "assets/js/72.6748afe0.js",
    "revision": "eae7368f0bcb184aad6121c429a38f31"
  },
  {
    "url": "assets/js/73.05cbc0f1.js",
    "revision": "5c86242b8a72fa72cf765821344b8972"
  },
  {
    "url": "assets/js/74.97b71303.js",
    "revision": "6853d1ebff00541bfff6b6f57fb48952"
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
    "url": "assets/js/77.6d185d60.js",
    "revision": "788819fafbb5c6c036d3e9aa4879901d"
  },
  {
    "url": "assets/js/78.1340f7c7.js",
    "revision": "074ce55bc655712ddb569fc7bd64aa1e"
  },
  {
    "url": "assets/js/79.672bdc53.js",
    "revision": "206416a763804cece001a37b6286eee4"
  },
  {
    "url": "assets/js/8.3b4c5ab6.js",
    "revision": "206dde55e40c46a53550c1ddb0199ed2"
  },
  {
    "url": "assets/js/80.f9509585.js",
    "revision": "c0aaff6701df05127e4c014765e67168"
  },
  {
    "url": "assets/js/81.f5222703.js",
    "revision": "1dbd750c5f9477e9eec96488cbbb1442"
  },
  {
    "url": "assets/js/82.f97ac076.js",
    "revision": "ac38755145fe3532746c1e50bfa5bd03"
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
    "url": "assets/js/85.b332c4c1.js",
    "revision": "b86f07d4bd855514212b95af2a4ae615"
  },
  {
    "url": "assets/js/86.ed6e6f6b.js",
    "revision": "f62b71f700043e6fcab530d57d8cf66b"
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
    "url": "assets/js/90.4f85cb0a.js",
    "revision": "da05a47e6c5ef947453ea1a05edc7383"
  },
  {
    "url": "assets/js/91.0dd4d83c.js",
    "revision": "7411b06e7506eba8e8ca4012be3842c0"
  },
  {
    "url": "assets/js/92.d5f5ab3d.js",
    "revision": "800290cd9e32668c185d12863868402e"
  },
  {
    "url": "assets/js/93.0204602f.js",
    "revision": "e60b4eedc0a79e77baafa387efb0dc53"
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
    "url": "assets/js/99.9154f11f.js",
    "revision": "8327a3eb52066dbf33e3f3e9ef5a933b"
  },
  {
    "url": "assets/js/app.485eac22.js",
    "revision": "d059740aa59d29f553274ff787c88033"
  },
  {
    "url": "css.png",
    "revision": "ef6cba618da3500bbabf1053bce1098f"
  },
  {
    "url": "engine/企业级微服务方案.html",
    "revision": "15c2f702356fad0d647904be509132f1"
  },
  {
    "url": "engine/前端工程能力思考.html",
    "revision": "1b80dd548254d2f7768e1d2b5cee2ae2"
  },
  {
    "url": "engine/前端性能优化度量.html",
    "revision": "eae9bcaa67be2a463186dcae9dbce66d"
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
    "revision": "955db1f4376db144ad1726ce2a5339cf"
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
    "revision": "dc05579fedc045389f2067b92ffa05e4"
  },
  {
    "url": "interview/笔试题.html",
    "revision": "a185b50e95a10193f39dfca2871dee9c"
  },
  {
    "url": "interview/面试记录.html",
    "revision": "e39a2ad747b8ba0aa257425fedb41484"
  },
  {
    "url": "interview/腾讯面试.html",
    "revision": "3c610cb0f192c41d359bceec33e440c9"
  },
  {
    "url": "interview/问答题.html",
    "revision": "962ddfc2b2a9111333f69e419a442a26"
  },
  {
    "url": "interview/性能优化实践.html",
    "revision": "304352f3bdf74d0cf84b97a724376c38"
  },
  {
    "url": "interview/Http面试汇总.html",
    "revision": "4dc28f2f658caaefea874b1debd70bf5"
  },
  {
    "url": "interview/index.html",
    "revision": "61636d5a6f7ffc99e52a051a3a459dd2"
  },
  {
    "url": "interview/JavaScript面试汇总.html",
    "revision": "828b30b649ae557b4a9b245b50ccfe3c"
  },
  {
    "url": "interview/Vue面试汇总.html",
    "revision": "21c3da86521bc8fcfb49c307f4b4dc94"
  },
  {
    "url": "introduce.html",
    "revision": "8c5bef8e2c7d7b4a7fb0216ebac99d3c"
  },
  {
    "url": "javascript.png",
    "revision": "8021c40683e59503a2f636e3357e234d"
  },
  {
    "url": "javascript/1px.html",
    "revision": "89de72d12d8c61a3d74f818ae81d9ff9"
  },
  {
    "url": "javascript/base/对Object.create和类式继承的理解.html",
    "revision": "02a851d04e0b29ff4471a1a12f3c408b"
  },
  {
    "url": "javascript/base/你不知道的Javascript上.html",
    "revision": "e109a60c179c001076bba922b60e719d"
  },
  {
    "url": "javascript/base/你不知道的Javascript中.html",
    "revision": "7915298552db663eb349486c99855614"
  },
  {
    "url": "javascript/base/Http缓存详解.html",
    "revision": "28bc58dc7cb9ab157105180a650a3f21"
  },
  {
    "url": "javascript/base/JavaScript常见ployfill.html",
    "revision": "8eacd2057bd0ac01f9b41fe4e11c8c8a"
  },
  {
    "url": "javascript/base/Javascript的变量提升和函数提升.html",
    "revision": "c8cef7b87c626c20e27a4e7ccfe32780"
  },
  {
    "url": "javascript/base/Javascript的bind的polyfill的理解.html",
    "revision": "f8fd3d893663d9ba4a032f053096eca8"
  },
  {
    "url": "javascript/base/Javascript的call和apply和bind方法.html",
    "revision": "0748bcf787b1242841885a784c3c5be6"
  },
  {
    "url": "javascript/base/Javascript对闭包的理解.html",
    "revision": "5997f897ef8f29724e162b4c30e1eb6e"
  },
  {
    "url": "javascript/base/Javascript寄生式组合继承详解.html",
    "revision": "02f00d21df1c786acb06b2b71425791b"
  },
  {
    "url": "javascript/base/Javascript柯里化和偏函数实现.html",
    "revision": "107b455c140a6eb3c711afe92a9a86cc"
  },
  {
    "url": "javascript/base/Javascript模块化发展AMD,CMD,CommonJS,UMD,ES6.html",
    "revision": "c626471ff7c72028d5e1b5653a98a7cb"
  },
  {
    "url": "javascript/base/JavaScript中改变this指向有几种方式.html",
    "revision": "8ab82078764b96c3512d19d4d59dca5c"
  },
  {
    "url": "javascript/base/Javascript中this绑定详解.html",
    "revision": "6ddc60e6de2876eb8c73915631628da2"
  },
  {
    "url": "javascript/base/new_A和A的区别.html",
    "revision": "25a22c69b49fcdd075182168479c9e2e"
  },
  {
    "url": "javascript/base/Object.create和New的区别.html",
    "revision": "b25f8717c968fe54cfeb9ce378e4674a"
  },
  {
    "url": "javascript/deep/前端页面劫持和反劫持.html",
    "revision": "a3f3105f40fb98b3dc04e4da88d54a72"
  },
  {
    "url": "javascript/deep/页面预加载.html",
    "revision": "46df82701db23d8a39d65b98e093bc44"
  },
  {
    "url": "javascript/index.html",
    "revision": "62218cf8fae8e57a859b745ec1fc2473"
  },
  {
    "url": "javascript/learn.html",
    "revision": "b6d707026d2a4c7118b5aa1622e55f2a"
  },
  {
    "url": "javascript/lerna.html",
    "revision": "29f750dd973cb0dd6aa48eb0e38df1ef"
  },
  {
    "url": "javascript/performance/性能优化实践.html",
    "revision": "facc8bfc76aea9c98cb937a6a0debefa"
  },
  {
    "url": "javascript/proxy.html",
    "revision": "58ae54778bc327afcf31fdae34efe446"
  },
  {
    "url": "javascript/webpack/使用webpack的require.context按需打包.html",
    "revision": "ab5923ee2556570e87707834c29d98e3"
  },
  {
    "url": "javascript/webpack/chunk-hash,hash和content-hash的区别.html",
    "revision": "79eee5474951132e9605232a7a639410"
  },
  {
    "url": "javascript/webpack/webpack-chain常用配置.html",
    "revision": "887a8a93d24bf828b5f6ddf7464f5179"
  },
  {
    "url": "javascript/webpack/webpack模块异步加载原理解析.html",
    "revision": "6865dd4dfcc478709c69c4777ba0c41c"
  },
  {
    "url": "mendix/获取配置信息,使用java创建Rest服务.html",
    "revision": "c100ba9474b2d3593152e226f3c675f7"
  },
  {
    "url": "mendix/一些功能的实现.html",
    "revision": "c586bc5f4d4b34bc31749d9149932c38"
  },
  {
    "url": "mendix/env.html",
    "revision": "71b7f92d26f90b86a6bc378cf68cab82"
  },
  {
    "url": "mendix/index.html",
    "revision": "0512533781404994338e5b85df45614d"
  },
  {
    "url": "mendix/javaaction.html",
    "revision": "51208412e6bef03b6295dcb038d6d116"
  },
  {
    "url": "mendix/Mendix后台程序环境搭建.html",
    "revision": "7ceb5763ca8f8204b9b3fd5a85387a86"
  },
  {
    "url": "mendix/study.html",
    "revision": "8a68bbdfb5c7bc885e2e96857dbf821b"
  },
  {
    "url": "mendix/widget.html",
    "revision": "8681538e38883b14220710d42d0ce51b"
  },
  {
    "url": "mendix/widgets/常用API.html",
    "revision": "9488626c4ca770acb34743759484b18f"
  },
  {
    "url": "mendix/widgets/开发组件前工具的准备.html",
    "revision": "e5f2012590719990ddc2093c9e09549a"
  },
  {
    "url": "mendix/widgets/详细API.html",
    "revision": "fafa4a24f027731b5e02902283ff764a"
  },
  {
    "url": "mendix/widgets/index.html",
    "revision": "f94171b74ba19ccff2fcbfdb14976dbe"
  },
  {
    "url": "mendix/widgets/Vue_Mendix.html",
    "revision": "71a6504f345dec510ef8c734bae96c74"
  },
  {
    "url": "mobile/index.html",
    "revision": "4ab0b8100ba592c8abc711ecb339a0f2"
  },
  {
    "url": "open/index.html",
    "revision": "526eb428857a5e4eb85e965ab760354c"
  },
  {
    "url": "open/luckly_popup_window.html",
    "revision": "aaa900b72d5ddca0cc3b8af26f647222"
  },
  {
    "url": "open/luckly_recyclerview.html",
    "revision": "9f8f348d4af31ac9eddb1fb6b9882662"
  },
  {
    "url": "open/vue_template.html",
    "revision": "263015b40427a643d99a48ee73707fe0"
  },
  {
    "url": "other/android_ready.html",
    "revision": "ecbdcf244fc384d9257c897cea25a0f1"
  },
  {
    "url": "other/base_info.html",
    "revision": "4b7fa16fb9444507c96d5698b0945009"
  },
  {
    "url": "other/ready.html",
    "revision": "257d9057f01e68ad9e9cb07e16bbdc9d"
  },
  {
    "url": "other/vscode.html",
    "revision": "26153a2358a91c48d6a654c8d3b3e232"
  },
  {
    "url": "other/work.html",
    "revision": "8a97a6282dc2a7441ad388827a35a455"
  },
  {
    "url": "react/index.html",
    "revision": "61f77d38bfe49448146becb700a3f561"
  },
  {
    "url": "react/Mobx异步Action方案.html",
    "revision": "5388c7d30f5853ce9f6ab8b8efa5248b"
  },
  {
    "url": "react/React高阶组件的理解.html",
    "revision": "88ed9e1f572a1e2e48a1b5d0350fc1ae"
  },
  {
    "url": "react/React中使用bind函数和箭头函数效率比较.html",
    "revision": "3ff5af90a9903e420c60b5bc97366870"
  },
  {
    "url": "react/React状态管理框架Redux使用.html",
    "revision": "91335161d33307ac93f23da2cc9f63a6"
  },
  {
    "url": "react/Redux异步Action方案.html",
    "revision": "155786438beaa8b6096624b2045f0cd1"
  },
  {
    "url": "react/Redux中间件详解.html",
    "revision": "73d424a8dbad2c79d84d0d26b7007951"
  },
  {
    "url": "server-side.png",
    "revision": "9732e628b5d2d9ce2634647c1a0478f0"
  },
  {
    "url": "view-designer.html",
    "revision": "598d8cf5f0db512cdb4f58a0dfdf8fd9"
  },
  {
    "url": "vue/你所忽略的Vue.html",
    "revision": "28841c0cbb20a4b22187b633ca9f3127"
  },
  {
    "url": "vue/如何添加PWA.html",
    "revision": "f212389752ce56b467aa15cfd903f852"
  },
  {
    "url": "vue/deep/Vue多入口打包性能优化.html",
    "revision": "4de76421061f8dd1f2dd7890bdf18dfd"
  },
  {
    "url": "vue/deep/Vue响应式原理解析.html",
    "revision": "ae2963f08ae023d80f4895a85b5fcc5b"
  },
  {
    "url": "vue/index.html",
    "revision": "a98ff4b028c2f4273f52d0a33879c86d"
  },
  {
    "url": "vue/program/如何全局显示工具栏.html",
    "revision": "5030e0dea7a3c5457f6b01799cc9fe17"
  },
  {
    "url": "vue/proxy.html",
    "revision": "ddedd9dcb747efbc84b17a4fd12aa3f2"
  },
  {
    "url": "vue/test/Jest测试结果分析.html",
    "revision": "fbcff048cc9100a35083085db7a6e665"
  },
  {
    "url": "vue/test/Vue使用jest单元测试详解.html",
    "revision": "ec13f590e6ae9de1170c88754f2fffea"
  },
  {
    "url": "vue/Vue-cli插件开发.html",
    "revision": "f3f55c571efc21963769dddb7eb33161"
  },
  {
    "url": "vue/Vue父组件使用scoped无法修改子组件样式.html",
    "revision": "67ad8567bd7edc37361ae828b03ba92a"
  },
  {
    "url": "vue/Vue及React单向数据流的理解.html",
    "revision": "0019f37bdff0b1279642a38037e249a9"
  },
  {
    "url": "vue/Vue路由变化页面没有刷新解决办法.html",
    "revision": "d23ab9064bff48c044de569e09eedaa8"
  },
  {
    "url": "vue/Vue使用render函数渲染组件.html",
    "revision": "505dda122fa79c57b58e72e37099fd91"
  },
  {
    "url": "vue/Vue中插件开发的四种方式.html",
    "revision": "c0d1518f75f562ed14b936fbdc581a3c"
  },
  {
    "url": "vue/Vuex中Getter,Action,Mutation函数参数说明.html",
    "revision": "d8662f9f68f511df6946e313921dc962"
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
