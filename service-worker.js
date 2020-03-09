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
    "revision": "2a3f3a5b5e00b40ef089bc8eefdf38a3"
  },
  {
    "url": "article/oview/chart_specific.html",
    "revision": "c15426a3f94ddb97f18aa3f1157e3c23"
  },
  {
    "url": "article/oview/Chart.html",
    "revision": "31e66e590743c7ac53772f05a24b2f0f"
  },
  {
    "url": "article/oview/chart/area.html",
    "revision": "df7a0c4b6e19b64da9ad4d3a98e807e9"
  },
  {
    "url": "article/oview/chart/histo.html",
    "revision": "719256f64b821613deaba2a8cfd27596"
  },
  {
    "url": "article/oview/chart/intercation.html",
    "revision": "2bb4fb2a70ce78caf23fa5e3b94e3578"
  },
  {
    "url": "article/oview/chart/line.html",
    "revision": "79a663965edb2376d6bdbe086d61e0df"
  },
  {
    "url": "article/oview/chart/pie.html",
    "revision": "989f1a38ee795ae834da988c735bc8af"
  },
  {
    "url": "article/oview/chart/point.html",
    "revision": "008a58b1898191d8a9e5f37eff019ea4"
  },
  {
    "url": "article/oview/chart/radar.html",
    "revision": "3d90d924b3781b027d5e797a6f2f94ee"
  },
  {
    "url": "article/oview/index.html",
    "revision": "9bae423e25e80d3fda7610cf4609f021"
  },
  {
    "url": "article/oview/Pie.html",
    "revision": "021b45c00fc1e3583b0ecb41b8d65637"
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
    "url": "assets/js/103.5b934d3c.js",
    "revision": "e082e5516da984df16c25cd7127b1e87"
  },
  {
    "url": "assets/js/104.770e240a.js",
    "revision": "8a511909a6addade0747c487c0e42dab"
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
    "url": "assets/js/15.b76e0c48.js",
    "revision": "8c287cae75dc62b1d6ce2ea363ff46db"
  },
  {
    "url": "assets/js/16.5c69ae72.js",
    "revision": "0d538dba4c58e183e1f9a4371f1e37bd"
  },
  {
    "url": "assets/js/17.a6243819.js",
    "revision": "eba901b179fa28ecc11edf1834a1424d"
  },
  {
    "url": "assets/js/18.f113d1c0.js",
    "revision": "4773032a4c434502a7e07d75f6255487"
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
    "url": "assets/js/20.71e17124.js",
    "revision": "726c0851ecf0ed88d0741e5971a62750"
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
    "url": "assets/js/23.b83f07f0.js",
    "revision": "256aa318cff12ea934d40d02675cf936"
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
    "url": "assets/js/27.cdbb5a89.js",
    "revision": "11346644e3de27a271d4162df8749a82"
  },
  {
    "url": "assets/js/28.fd94b5c0.js",
    "revision": "f2a12ad54cc8287f764bc0281706fa11"
  },
  {
    "url": "assets/js/29.d2fd6af6.js",
    "revision": "acaba80d3e61681aa695fb70804d72d2"
  },
  {
    "url": "assets/js/3.a46c6c0f.js",
    "revision": "fb955e6b792d4d6df5014721d94cb657"
  },
  {
    "url": "assets/js/30.f34ec745.js",
    "revision": "c92ae03415beac9362f1537985133c7c"
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
    "url": "assets/js/35.d71e2cd9.js",
    "revision": "4bc0b0275cb1094c754f2fd3ae0d7399"
  },
  {
    "url": "assets/js/36.02127452.js",
    "revision": "82e7eacadd81608cfd0c1541a7b02100"
  },
  {
    "url": "assets/js/37.a85303f2.js",
    "revision": "07689ebbb954d9c3e778d01249a8c1e7"
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
    "url": "assets/js/40.037ee674.js",
    "revision": "d27a91781848618cab5d9bd6cefe7d73"
  },
  {
    "url": "assets/js/41.da037e31.js",
    "revision": "a75fb6d3d1d593c384836774fa859247"
  },
  {
    "url": "assets/js/42.c4bca244.js",
    "revision": "c19a420200afd7ca413b82cc87502cd4"
  },
  {
    "url": "assets/js/43.dac0d003.js",
    "revision": "fdb02163b58d0baa40a435021f3ac1af"
  },
  {
    "url": "assets/js/44.c515b046.js",
    "revision": "2c369249703cdde40c9704e623ee8c51"
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
    "url": "assets/js/49.21718ca3.js",
    "revision": "fa7676c5dbd67c6d538f3bc32be39244"
  },
  {
    "url": "assets/js/5.7353be14.js",
    "revision": "9e511490de2a3d46e2392318f9e719db"
  },
  {
    "url": "assets/js/50.b3322dde.js",
    "revision": "264e0edfb524787474dd117314be7a04"
  },
  {
    "url": "assets/js/51.b95362e0.js",
    "revision": "0b9c15a486a20e6285bc2e1e99a6f226"
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
    "url": "assets/js/58.5d041112.js",
    "revision": "1663aed2b1dc673112088fc9a829a737"
  },
  {
    "url": "assets/js/59.8495d392.js",
    "revision": "226d85ac1bc4362ab776cfb381379bcf"
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
    "url": "assets/js/61.2578bd8f.js",
    "revision": "4d7554442d500ff2ef08adf4eeac5ec9"
  },
  {
    "url": "assets/js/62.c3e67418.js",
    "revision": "d35100847d6a77b963fbfa6467ee707d"
  },
  {
    "url": "assets/js/63.6022a7fd.js",
    "revision": "09df5c42cc01874f772d89625bb7a286"
  },
  {
    "url": "assets/js/64.b3c2e580.js",
    "revision": "3374fb85f66f58702c8afd14dce58054"
  },
  {
    "url": "assets/js/65.4bba5473.js",
    "revision": "d6d7c7a15ef8dd09032aba3ebbf98309"
  },
  {
    "url": "assets/js/66.496389f8.js",
    "revision": "c4ee42bb03f1f7a03ee263e20919c202"
  },
  {
    "url": "assets/js/67.761c5a4e.js",
    "revision": "ceabd15cd33314a14b01b6c3a10a6bb8"
  },
  {
    "url": "assets/js/68.9c13f1e5.js",
    "revision": "bb9f2b3c91cc9dd26f4c39f2a9b219f6"
  },
  {
    "url": "assets/js/69.b4c42bca.js",
    "revision": "064a898e41241ed578090870ca6f50f3"
  },
  {
    "url": "assets/js/7.bb4e32e1.js",
    "revision": "c96e09bc64ab6563a4a298a7f83b6def"
  },
  {
    "url": "assets/js/70.6fbbfa8f.js",
    "revision": "cbc535c6a2acd236ff51e468cd2d4747"
  },
  {
    "url": "assets/js/71.99d7824c.js",
    "revision": "fbccf7ff9b30242e3dcc3087a8de7cc4"
  },
  {
    "url": "assets/js/72.3767d439.js",
    "revision": "ccccdb3a33219ac3956e51a408b5e5ea"
  },
  {
    "url": "assets/js/73.db7a4659.js",
    "revision": "de1fa662d4e8ccee2270e15b7215f14f"
  },
  {
    "url": "assets/js/74.59a66e04.js",
    "revision": "4e2bcb3d5aad7868d6142f5124ef3e4b"
  },
  {
    "url": "assets/js/75.cabe1798.js",
    "revision": "3e9f9c4568d523489a4853848f2523bc"
  },
  {
    "url": "assets/js/76.922a432c.js",
    "revision": "2bf4720ffe08ed6b25c8e204bf73ae4c"
  },
  {
    "url": "assets/js/77.6d185d60.js",
    "revision": "788819fafbb5c6c036d3e9aa4879901d"
  },
  {
    "url": "assets/js/78.19bf105f.js",
    "revision": "b764a2560295ac2d460602fb0c855fe9"
  },
  {
    "url": "assets/js/79.672bdc53.js",
    "revision": "206416a763804cece001a37b6286eee4"
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
    "url": "assets/js/84.97e836ee.js",
    "revision": "9bf5268b96aaeef6acb43a222aeeb37c"
  },
  {
    "url": "assets/js/85.12e2e4b9.js",
    "revision": "198072a4eda30dc4743e4f85bea5949d"
  },
  {
    "url": "assets/js/86.52fa5f09.js",
    "revision": "55fb16f19ea64762b57e2fcdda67f356"
  },
  {
    "url": "assets/js/87.65040504.js",
    "revision": "8e6672a08e8a3a2e177906ad0b3a6850"
  },
  {
    "url": "assets/js/88.951fc357.js",
    "revision": "0097341dc4b04b0c5bb126bb76887606"
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
    "url": "assets/js/90.119a8780.js",
    "revision": "3a4fc96c8453454a783068990009d6c0"
  },
  {
    "url": "assets/js/91.0dd4d83c.js",
    "revision": "7411b06e7506eba8e8ca4012be3842c0"
  },
  {
    "url": "assets/js/92.25284a00.js",
    "revision": "da8a0b0e08430f5f148b9f4bf5bf49e4"
  },
  {
    "url": "assets/js/93.8dcda1f6.js",
    "revision": "bc39d65d387f0c5442fa6fe5b367b5a8"
  },
  {
    "url": "assets/js/94.fba7d594.js",
    "revision": "4c67c15b535439a95760613dfe5c808b"
  },
  {
    "url": "assets/js/95.9b744e22.js",
    "revision": "0383f3ce071b6fa26a60c7df4d535f84"
  },
  {
    "url": "assets/js/96.d7e21eaf.js",
    "revision": "927728d3d0049a0072cffe799c88c793"
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
    "url": "assets/js/app.d4fb1a06.js",
    "revision": "75e9ee8a5a33451c538c75aaf31c40d5"
  },
  {
    "url": "css.png",
    "revision": "ef6cba618da3500bbabf1053bce1098f"
  },
  {
    "url": "engine/企业级微服务方案.html",
    "revision": "61f2f420c388ab2404d536ac399c3d34"
  },
  {
    "url": "engine/前端工程能力思考.html",
    "revision": "a6945c639375b17251ec0e8e01aee5bb"
  },
  {
    "url": "engine/前端性能优化度量.html",
    "revision": "f65efd7b9e271e231f31c2b3a78d5eef"
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
    "revision": "c66f7da4726332d02a09cdfc676f4610"
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
    "revision": "3c06bd32c6a0deaa95be27fbca05fbc2"
  },
  {
    "url": "interview/笔试题.html",
    "revision": "3d0d684b086a3261e46ba663ad41809e"
  },
  {
    "url": "interview/面试记录.html",
    "revision": "04374aeda4d1014715a91aa977bfa4ea"
  },
  {
    "url": "interview/腾讯面试.html",
    "revision": "6358fc9b22485f6b3fb3d255ddada10f"
  },
  {
    "url": "interview/问答题.html",
    "revision": "a138a2a59c961d55d75d755c1ae2f5b2"
  },
  {
    "url": "interview/性能优化实践.html",
    "revision": "9a207f83146ab4085d4b8ad7983b9cb2"
  },
  {
    "url": "interview/Http面试汇总.html",
    "revision": "f05339dd02c6ec07142df6c5cb7bb51b"
  },
  {
    "url": "interview/index.html",
    "revision": "698f4bbc52af22826aab6dba3338a9a0"
  },
  {
    "url": "interview/JavaScript面试汇总.html",
    "revision": "c9847fc5dd82972e11ca1791ec2ae451"
  },
  {
    "url": "interview/Vue面试汇总.html",
    "revision": "04e781f94ccb86760897e2c32a70d3fd"
  },
  {
    "url": "introduce.html",
    "revision": "ea0472dc17a7c8655d86ae84142c5742"
  },
  {
    "url": "javascript.png",
    "revision": "8021c40683e59503a2f636e3357e234d"
  },
  {
    "url": "javascript/1px.html",
    "revision": "0823be2cf644b082eec2d63248e4de4b"
  },
  {
    "url": "javascript/base/对Object.create和类式继承的理解.html",
    "revision": "76ac0baecd102074a101db6a5aec74f8"
  },
  {
    "url": "javascript/base/你不知道的Javascript上.html",
    "revision": "1579f7f9349ecf8074d450e2278dec07"
  },
  {
    "url": "javascript/base/你不知道的Javascript中.html",
    "revision": "c765920e482454a5b7a8c1540a8e8639"
  },
  {
    "url": "javascript/base/Http缓存详解.html",
    "revision": "05bf7836730fa636fd3cb68aa977ac15"
  },
  {
    "url": "javascript/base/JavaScript常见ployfill.html",
    "revision": "a559747a6788703d23ce6ca07fb2d874"
  },
  {
    "url": "javascript/base/Javascript的变量提升和函数提升.html",
    "revision": "a856931658ac7e157058e1451595b770"
  },
  {
    "url": "javascript/base/Javascript的bind的polyfill的理解.html",
    "revision": "4102ba81ca8b599abe99c09459a44e1a"
  },
  {
    "url": "javascript/base/Javascript的call和apply和bind方法.html",
    "revision": "b129d60e85bd589019527473769c357e"
  },
  {
    "url": "javascript/base/Javascript对闭包的理解.html",
    "revision": "ca31cd9da6363848836e6f6b96219237"
  },
  {
    "url": "javascript/base/Javascript寄生式组合继承详解.html",
    "revision": "78cf48341fcc44da98c3b5db2e73e29d"
  },
  {
    "url": "javascript/base/Javascript柯里化和偏函数实现.html",
    "revision": "a75e0587b06d3095811a353ab8a65260"
  },
  {
    "url": "javascript/base/Javascript模块化发展AMD,CMD,CommonJS,UMD,ES6.html",
    "revision": "942f04aafc6b18c934d770ddb008330d"
  },
  {
    "url": "javascript/base/JavaScript中改变this指向有几种方式.html",
    "revision": "a155b06c31f4f348d1a899aeaf8b5704"
  },
  {
    "url": "javascript/base/Javascript中this绑定详解.html",
    "revision": "6e5999bb9e0f4136bdc19437079c6cc5"
  },
  {
    "url": "javascript/base/new_A和A的区别.html",
    "revision": "235767027ee4d55070409a0561027883"
  },
  {
    "url": "javascript/base/Object.create和New的区别.html",
    "revision": "7aa0268a7b74d3445bcffa24d574e40b"
  },
  {
    "url": "javascript/deep/前端页面劫持和反劫持.html",
    "revision": "6ae15f4ecef9251344ac33e7e158d133"
  },
  {
    "url": "javascript/deep/页面预加载.html",
    "revision": "f051c83ba05835f79799e8582ec3e6d2"
  },
  {
    "url": "javascript/index.html",
    "revision": "4c3a712438bac91685b6a0fbae480178"
  },
  {
    "url": "javascript/learn.html",
    "revision": "ff6f3d297b06e595b80929d41544dcf1"
  },
  {
    "url": "javascript/lerna.html",
    "revision": "17607c20f7061187f8838a396b7c24f4"
  },
  {
    "url": "javascript/performance/性能优化实践.html",
    "revision": "02b423d4a19ad5ddaa29fba3b84243ba"
  },
  {
    "url": "javascript/proxy.html",
    "revision": "b2ecfd7e606c7aa4e000dcf182e94b5f"
  },
  {
    "url": "javascript/webpack/使用webpack的require.context按需打包.html",
    "revision": "b1185c18c7002a5c930bf46a3064354f"
  },
  {
    "url": "javascript/webpack/chunk-hash,hash和content-hash的区别.html",
    "revision": "72b9269fe0737221660a8b2c29a579d5"
  },
  {
    "url": "javascript/webpack/webpack-chain常用配置.html",
    "revision": "2d0b71d9e2e5306e093b746a91124db9"
  },
  {
    "url": "javascript/webpack/webpack模块异步加载原理解析.html",
    "revision": "dde33279086b8157fb7b1cd428ebebcd"
  },
  {
    "url": "mendix/获取配置信息,使用java创建Rest服务.html",
    "revision": "fa98bb0dd9650c219608ad782d7b5896"
  },
  {
    "url": "mendix/一些功能的实现.html",
    "revision": "0c8f8977a2d2764a75cd0d89428e6f51"
  },
  {
    "url": "mendix/env.html",
    "revision": "e059808c53b9c8369d3e523dad90e181"
  },
  {
    "url": "mendix/index.html",
    "revision": "ddf812394bede203f1d7fc3078590cb7"
  },
  {
    "url": "mendix/javaaction.html",
    "revision": "ba1590e0d60fe7618c26e1cd11e2e34f"
  },
  {
    "url": "mendix/Mendix后台程序环境搭建.html",
    "revision": "99e25172c6532935efad37f0b8016d11"
  },
  {
    "url": "mendix/study.html",
    "revision": "9f00241e6511e1c99201df850826d6af"
  },
  {
    "url": "mendix/widget.html",
    "revision": "12c1f12fe952a5a6c73f41791e1e8a37"
  },
  {
    "url": "mendix/widgets/常用API.html",
    "revision": "f150a20215bb6ba227db3ff7eb876a8e"
  },
  {
    "url": "mendix/widgets/开发组件前工具的准备.html",
    "revision": "2b51c64eed1fd5a3ba46af3bb86738bf"
  },
  {
    "url": "mendix/widgets/详细API.html",
    "revision": "d3186ab1ce91df1d1c8d8e87354e655b"
  },
  {
    "url": "mendix/widgets/index.html",
    "revision": "cc38b1529ffb8a681f104f3d674404d4"
  },
  {
    "url": "mendix/widgets/Vue_Mendix.html",
    "revision": "18b6390471175564af2b1dac647af30d"
  },
  {
    "url": "mobile/index.html",
    "revision": "d314c5ba00fd553eb7d9099165361648"
  },
  {
    "url": "open/index.html",
    "revision": "ef45bfdbd69785e1e06caa410b29ebe3"
  },
  {
    "url": "open/luckly_popup_window.html",
    "revision": "aa280977ed1addc1ac90ef6e09ed69fe"
  },
  {
    "url": "open/luckly_recyclerview.html",
    "revision": "bfd03f085bd469a05c76df4f896b38f3"
  },
  {
    "url": "open/vue_template.html",
    "revision": "68df222e74665de9da84dd1ed086d940"
  },
  {
    "url": "other/android_ready.html",
    "revision": "6b73a90c0d1742591a26def0e42490a4"
  },
  {
    "url": "other/base_info.html",
    "revision": "f0634f780b7a7a411d2a33130922e48f"
  },
  {
    "url": "other/ready.html",
    "revision": "31761d807a83faaf5158417810ca0cfa"
  },
  {
    "url": "other/vscode.html",
    "revision": "3789230fbee49deb70d6ce7b750acbac"
  },
  {
    "url": "other/work.html",
    "revision": "e874af45d5e9e517ebcf56c5c6c7c628"
  },
  {
    "url": "react/index.html",
    "revision": "590c9aed643eb87e99d206701ac3edec"
  },
  {
    "url": "react/Mobx异步Action方案.html",
    "revision": "66502adf4bf4fabd4aa0ccd16cda1166"
  },
  {
    "url": "react/React高阶组件的理解.html",
    "revision": "924297c4251d1300950f034ff4f53f04"
  },
  {
    "url": "react/React中使用bind函数和箭头函数效率比较.html",
    "revision": "091e42c94c9bd11f429439d666d70f3a"
  },
  {
    "url": "react/React状态管理框架Redux使用.html",
    "revision": "87d3a60ddfd71f42df8332c31ead06ff"
  },
  {
    "url": "react/Redux异步Action方案.html",
    "revision": "b6ce826a13869aabfd1f4d6e6d6d7a16"
  },
  {
    "url": "react/Redux中间件详解.html",
    "revision": "e0f0f07cdb227e46e216cd12ae610ea5"
  },
  {
    "url": "server-side.png",
    "revision": "9732e628b5d2d9ce2634647c1a0478f0"
  },
  {
    "url": "view-designer.html",
    "revision": "29e124353d4780b1804f2bea79b33f25"
  },
  {
    "url": "vue/你所忽略的Vue.html",
    "revision": "85564171c068d83863f7f836ad587d67"
  },
  {
    "url": "vue/如何添加PWA.html",
    "revision": "dba9534404f26f58e4f545b5f6ac4835"
  },
  {
    "url": "vue/deep/Vue多入口打包性能优化.html",
    "revision": "75a73411d38410bf713ec335bacf0fbc"
  },
  {
    "url": "vue/deep/Vue响应式原理解析.html",
    "revision": "b84f2c5c16424874e75ed004c384e40e"
  },
  {
    "url": "vue/index.html",
    "revision": "6a047a2b4cf107e79144d4473f436301"
  },
  {
    "url": "vue/program/如何全局显示工具栏.html",
    "revision": "11b21724d56c7948ceef13a47149457a"
  },
  {
    "url": "vue/proxy.html",
    "revision": "33bfd0446f2c0ddd7b1aa1f395e08d5d"
  },
  {
    "url": "vue/test/Jest测试结果分析.html",
    "revision": "be6896108e1fdfa4512fddf7f66810f6"
  },
  {
    "url": "vue/test/Vue使用jest单元测试详解.html",
    "revision": "154a7f0eb41fd5979883111d0c51c7ce"
  },
  {
    "url": "vue/Vue-cli插件开发.html",
    "revision": "6473c882f53b002c700c76e9445c82fa"
  },
  {
    "url": "vue/Vue父组件使用scoped无法修改子组件样式.html",
    "revision": "317d8b5f6c3cd80f5a703936bc7bb38f"
  },
  {
    "url": "vue/Vue及React单向数据流的理解.html",
    "revision": "67aca6be7e3e5deabd1afb87a329dbe6"
  },
  {
    "url": "vue/Vue路由变化页面没有刷新解决办法.html",
    "revision": "fd6e0292dc53e83c9ad6ac6903bf84d1"
  },
  {
    "url": "vue/Vue使用render函数渲染组件.html",
    "revision": "4679b05778bea45cc146e66ef1cfc1fb"
  },
  {
    "url": "vue/Vue中插件开发的四种方式.html",
    "revision": "3616975a39d89ad9c6094690e84d7f9a"
  },
  {
    "url": "vue/Vuex中Getter,Action,Mutation函数参数说明.html",
    "revision": "eae86f582f22a67ea335aa404582c9ff"
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
