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
    "revision": "ac927c449a091092375be5be98cfd4eb"
  },
  {
    "url": "article/oview/chart_specific.html",
    "revision": "6cc3f971c80b5a99dbfa095577fabb6c"
  },
  {
    "url": "article/oview/Chart.html",
    "revision": "528151530d4503d62df4bebd3a06f1fa"
  },
  {
    "url": "article/oview/chart/area.html",
    "revision": "0adb7239d48448396b17a0d4f77ff248"
  },
  {
    "url": "article/oview/chart/histo.html",
    "revision": "0e8f7057eb97f556fdd35a058b164666"
  },
  {
    "url": "article/oview/chart/intercation.html",
    "revision": "b65481de470b086a021188e8bb66634e"
  },
  {
    "url": "article/oview/chart/line.html",
    "revision": "7ffb156d0c52a243400f303cb28114ec"
  },
  {
    "url": "article/oview/chart/pie.html",
    "revision": "f41966616fddab3d3caee1247564a133"
  },
  {
    "url": "article/oview/chart/point.html",
    "revision": "3cf216ff1173499f9bac3b43cbf78d6c"
  },
  {
    "url": "article/oview/chart/radar.html",
    "revision": "8db72a418d93cec2071370bdbbd2e188"
  },
  {
    "url": "article/oview/index.html",
    "revision": "a164c0d18aa18d0444383994573aaee3"
  },
  {
    "url": "article/oview/Pie.html",
    "revision": "607b3c79ad5f21d0ffa1e0c9010cafd1"
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
    "url": "assets/js/10.c9b701ac.js",
    "revision": "31fdfd8a256039b0e95269e1737fef0e"
  },
  {
    "url": "assets/js/100.572aae27.js",
    "revision": "957e2b3994b1b7fd0de32ff698041681"
  },
  {
    "url": "assets/js/101.ceee73c7.js",
    "revision": "17b0361ce98c4fd9019448e4c56ee3a3"
  },
  {
    "url": "assets/js/102.b74fe283.js",
    "revision": "2cf6d741486adbd547131d62bb1222ff"
  },
  {
    "url": "assets/js/103.0737a66e.js",
    "revision": "fd56312509b08ed4524b4ca179e995cf"
  },
  {
    "url": "assets/js/104.567bdf3f.js",
    "revision": "02b16dd003849936f7e664d192770f5f"
  },
  {
    "url": "assets/js/105.832bb389.js",
    "revision": "c800f4819aff887a12123fa1dbbcf127"
  },
  {
    "url": "assets/js/106.9349e915.js",
    "revision": "036810772d05e05745ca3c53d2ef13be"
  },
  {
    "url": "assets/js/107.57206b01.js",
    "revision": "fa281c5120a47a80c2ef164034842802"
  },
  {
    "url": "assets/js/11.1ea8f964.js",
    "revision": "bdef35c5ebbeaa118c43630bc49b504a"
  },
  {
    "url": "assets/js/12.4921f46a.js",
    "revision": "5b710167cdb1ada9e21f926136fc3d44"
  },
  {
    "url": "assets/js/13.5b284fa0.js",
    "revision": "c4721b48b1a75a210c5601e5553c4e0f"
  },
  {
    "url": "assets/js/14.569823b5.js",
    "revision": "998876971e21956c8d8249ee9c9cbfac"
  },
  {
    "url": "assets/js/15.a88afdf4.js",
    "revision": "bb80624fb857fada327fd77f5871f835"
  },
  {
    "url": "assets/js/16.a0d2a24e.js",
    "revision": "1cbf81c69628529c184be9a8c98d034b"
  },
  {
    "url": "assets/js/17.d2773d2b.js",
    "revision": "d6fba5b386bf3e87e4fe14029a2422ed"
  },
  {
    "url": "assets/js/18.31181ec1.js",
    "revision": "cde4862cba7b2ab5d6d982d44c7e8609"
  },
  {
    "url": "assets/js/19.59ce070b.js",
    "revision": "b138cd70e1da67aece75a3cc8144ae50"
  },
  {
    "url": "assets/js/2.79ae508a.js",
    "revision": "937d6923cb8c63137ffd0e2efaa131fc"
  },
  {
    "url": "assets/js/20.b1ad1401.js",
    "revision": "6abaf51e3ceea6c98ad6f62b87aa1744"
  },
  {
    "url": "assets/js/21.f8c35c49.js",
    "revision": "e919dae0f330e57c91f6ae4e8c8b0251"
  },
  {
    "url": "assets/js/22.01921e6e.js",
    "revision": "a49ad96cbc3e11ee2ddbeded109ee9d7"
  },
  {
    "url": "assets/js/23.3065d4c3.js",
    "revision": "f0ecd3e16a528f66653f6dbbf5abdafe"
  },
  {
    "url": "assets/js/24.a77facc3.js",
    "revision": "ef7ce869b8952b3e88b4a476277dd768"
  },
  {
    "url": "assets/js/25.7cdd9bd7.js",
    "revision": "98a4c67227764dac7c0e7841aa4969db"
  },
  {
    "url": "assets/js/26.8f862c94.js",
    "revision": "f65048ec2deaf0b34ae6bdfcf496302f"
  },
  {
    "url": "assets/js/27.36c0efe2.js",
    "revision": "5ca7c5775c646979a872c083557f8126"
  },
  {
    "url": "assets/js/28.d24f8988.js",
    "revision": "79611bb187771ff0da7895bdb2cb2576"
  },
  {
    "url": "assets/js/29.caf2b318.js",
    "revision": "5524b023a8e8182ad523b50aed2c983d"
  },
  {
    "url": "assets/js/3.b27b74ee.js",
    "revision": "f608477a65180f4fb4c547d87364031f"
  },
  {
    "url": "assets/js/30.66dca4b0.js",
    "revision": "d2d15f7126d2e49f71a45fdbf7b421b8"
  },
  {
    "url": "assets/js/31.e6f18b5a.js",
    "revision": "f1bf5c779b14822c0f83db4375ec2d5b"
  },
  {
    "url": "assets/js/32.4179606e.js",
    "revision": "077e565e504852cd319054af5a5f0988"
  },
  {
    "url": "assets/js/33.a9b34f19.js",
    "revision": "61d5c1953f64450baa3630d732e3462c"
  },
  {
    "url": "assets/js/34.57857444.js",
    "revision": "3c184629a009ec8533a3de90c7ec89dd"
  },
  {
    "url": "assets/js/35.41341c86.js",
    "revision": "8cb11679552d49712729959272f9c5d7"
  },
  {
    "url": "assets/js/36.acb546ac.js",
    "revision": "3506318f2033e67b52bb47b29d552c48"
  },
  {
    "url": "assets/js/37.90caf1b4.js",
    "revision": "3c4960df5a4a46ce5889e31b8036b53d"
  },
  {
    "url": "assets/js/38.3f4bb8ff.js",
    "revision": "4aa0c9933e334ec5420af868273aac77"
  },
  {
    "url": "assets/js/39.de403a1f.js",
    "revision": "a0bb21a0548313ad149dbfeceb5fac4b"
  },
  {
    "url": "assets/js/4.b5197cfd.js",
    "revision": "d63131255f398682d34b85d6a4bd5464"
  },
  {
    "url": "assets/js/40.2804b683.js",
    "revision": "65f14a26d5a4faa0a7a37002ddb5e180"
  },
  {
    "url": "assets/js/41.d8f4120b.js",
    "revision": "8d19e3f6d884710feab6f4d1b2154d6a"
  },
  {
    "url": "assets/js/42.dac9c9a3.js",
    "revision": "dad9a9e32c0f0e365867483529f12621"
  },
  {
    "url": "assets/js/43.df942b27.js",
    "revision": "546b3d25b60684da34edac262117a2f7"
  },
  {
    "url": "assets/js/44.b3cd6e4a.js",
    "revision": "ca296e9521db4362a79ab3e282f8db5c"
  },
  {
    "url": "assets/js/45.23ff6445.js",
    "revision": "ed1cd636336c9af0a9f8f2b8481b4081"
  },
  {
    "url": "assets/js/46.55fd2a6c.js",
    "revision": "c9836056b0fdab26dc84ccf87ecfe9e8"
  },
  {
    "url": "assets/js/47.1a658b69.js",
    "revision": "0a837896b0d40554e355c079fbddc8de"
  },
  {
    "url": "assets/js/48.1ef13ae6.js",
    "revision": "5dc136ee784f07614d59deb520727932"
  },
  {
    "url": "assets/js/49.c042ff5f.js",
    "revision": "2906147689e77faf3d677032ad046745"
  },
  {
    "url": "assets/js/5.8c00075e.js",
    "revision": "62e462947a5a4cf65086e141593d22a1"
  },
  {
    "url": "assets/js/50.e1021dec.js",
    "revision": "d31181d085008bf7790297df562142dc"
  },
  {
    "url": "assets/js/51.aae68ef5.js",
    "revision": "f11b378e5439727baf1023df3d961d58"
  },
  {
    "url": "assets/js/52.c3e3ce7d.js",
    "revision": "0d3bce8e6acd1b01c571d035ead0cefe"
  },
  {
    "url": "assets/js/53.87a11e5a.js",
    "revision": "9dd0864e8e9366b04741a37aec271c32"
  },
  {
    "url": "assets/js/54.692a53cf.js",
    "revision": "212d0dfb411880a68b365031dcbf73d1"
  },
  {
    "url": "assets/js/55.db8b173f.js",
    "revision": "5e026c457dfc8cbde67d897f74313e62"
  },
  {
    "url": "assets/js/56.69e42e5b.js",
    "revision": "438a4607f66aec54e1d9dd6b8d9aa962"
  },
  {
    "url": "assets/js/57.d04183fd.js",
    "revision": "03b2d6054e326464bc1f02ec0274c99d"
  },
  {
    "url": "assets/js/58.ead681b1.js",
    "revision": "4516d78788f8700e5a4a51d197519e83"
  },
  {
    "url": "assets/js/59.f8425bc8.js",
    "revision": "1f17e102a0ca1a239a4009e60f988a7d"
  },
  {
    "url": "assets/js/6.8d79750a.js",
    "revision": "246e4e95e3e7b44fa26a507bf22273fa"
  },
  {
    "url": "assets/js/60.cd23af00.js",
    "revision": "c91e59c2de675fff668771a5de0e0530"
  },
  {
    "url": "assets/js/61.57a3e58b.js",
    "revision": "b58af62112cfd2be98b85358bcfba3d5"
  },
  {
    "url": "assets/js/62.f7514918.js",
    "revision": "5559a4a4fca42b57105dc02dea8368ca"
  },
  {
    "url": "assets/js/63.df5c2e2f.js",
    "revision": "f37a8d2dd54a44017fe8bf0a2be965ad"
  },
  {
    "url": "assets/js/64.659bb0ec.js",
    "revision": "60b27198646ebcb2307f8902ad2744ac"
  },
  {
    "url": "assets/js/65.0c21b6f9.js",
    "revision": "450bf3ca30d39d789cecbcf3df05273f"
  },
  {
    "url": "assets/js/66.a961cea1.js",
    "revision": "64b53fe94cb6933f3f45f69058983e9a"
  },
  {
    "url": "assets/js/67.0bdfe232.js",
    "revision": "60da119b086c8dc89ca2f2c121743ed9"
  },
  {
    "url": "assets/js/68.f2667e54.js",
    "revision": "ca6bb669336e8b93438bea78bde513b2"
  },
  {
    "url": "assets/js/69.9832b37b.js",
    "revision": "055689a97afbf6d84596b35fed897c60"
  },
  {
    "url": "assets/js/7.ba1813c0.js",
    "revision": "970686e5670648d242732cda10732c8b"
  },
  {
    "url": "assets/js/70.d33af35f.js",
    "revision": "30b0ec36fe0e9483592391e6250ebe7e"
  },
  {
    "url": "assets/js/71.40fff769.js",
    "revision": "f2dc88b16e33e6547adbcf555448a284"
  },
  {
    "url": "assets/js/72.5346640a.js",
    "revision": "9b82fa4664e808a6574a6c92b0a5303b"
  },
  {
    "url": "assets/js/73.04593cf4.js",
    "revision": "10abb36c2fb9d9915abdffb1e2beedd4"
  },
  {
    "url": "assets/js/74.c2ef643e.js",
    "revision": "44e2e5ec1aa784f1b14790b14049cfaf"
  },
  {
    "url": "assets/js/75.1dffc33b.js",
    "revision": "5a3831445638a5414cdff5c99778670d"
  },
  {
    "url": "assets/js/76.74af6067.js",
    "revision": "0d427764dc7ba1e0ab861efd7496b369"
  },
  {
    "url": "assets/js/77.e38709ac.js",
    "revision": "143b5d1cc7dbc88afcae7d5f1fb718ef"
  },
  {
    "url": "assets/js/78.11a133ca.js",
    "revision": "68b4d775b7c95103d24a314d51d0d171"
  },
  {
    "url": "assets/js/79.b22086bf.js",
    "revision": "ebddbffcfde19cc5671abc5618510ec3"
  },
  {
    "url": "assets/js/8.de43e75a.js",
    "revision": "37e4f323bca2145728cb94331ea66e59"
  },
  {
    "url": "assets/js/80.f9509585.js",
    "revision": "c0aaff6701df05127e4c014765e67168"
  },
  {
    "url": "assets/js/81.e4952bf5.js",
    "revision": "ebe1243553708b338f6edfb8c73d03bc"
  },
  {
    "url": "assets/js/82.69c89e6f.js",
    "revision": "68abccdf2f11535a00761377bb6a371c"
  },
  {
    "url": "assets/js/83.eee8877f.js",
    "revision": "fd58221cd2a43c3ae6ca367b44c2c89a"
  },
  {
    "url": "assets/js/84.b7877e4f.js",
    "revision": "208bc19947e904d57f760d036e16fe66"
  },
  {
    "url": "assets/js/85.e1d20db5.js",
    "revision": "e8790ae5c948ca246c2a730d959a9882"
  },
  {
    "url": "assets/js/86.d7d7d6b5.js",
    "revision": "2cc5d036774b8b612296e6daba3cb78f"
  },
  {
    "url": "assets/js/87.64829399.js",
    "revision": "6353eddf46ddf82d53da7fdbbc898cd6"
  },
  {
    "url": "assets/js/88.6fae0b39.js",
    "revision": "c79ec2ac2b422bbd483efff33cb4a112"
  },
  {
    "url": "assets/js/89.2633409a.js",
    "revision": "dd3791659af2048b06e28dd60379ec9b"
  },
  {
    "url": "assets/js/9.3be26985.js",
    "revision": "2483bf13407820070aabdab9188cba90"
  },
  {
    "url": "assets/js/90.b4970f93.js",
    "revision": "472ecf06aa56575d91b2321b4e07d5f7"
  },
  {
    "url": "assets/js/91.bfaf737e.js",
    "revision": "fd0cd1c5ec86256e822af32ed166dbbd"
  },
  {
    "url": "assets/js/92.f0cd4707.js",
    "revision": "00cf6312428843e5eaa26ddbfa4859aa"
  },
  {
    "url": "assets/js/93.13bbc5bf.js",
    "revision": "5492c5c7c28786c9c76b553652749367"
  },
  {
    "url": "assets/js/94.a0a536b1.js",
    "revision": "31eee763479f66fec8ea3020ba8ae9c4"
  },
  {
    "url": "assets/js/95.2319bda9.js",
    "revision": "70f9ef03c1a714b17e46d64d5fd1f2f8"
  },
  {
    "url": "assets/js/96.900a5070.js",
    "revision": "2263966660a82f353d73341be0dd5ad4"
  },
  {
    "url": "assets/js/97.dedbe8de.js",
    "revision": "62d896a0f1b91738dfdbc9aebe7697c6"
  },
  {
    "url": "assets/js/98.04d38b5b.js",
    "revision": "8cad980e7f2ae4a900e6a38c73ea2813"
  },
  {
    "url": "assets/js/99.07eb3dd4.js",
    "revision": "f3d1ad1e2d560dd94fa1b16bed7bcf76"
  },
  {
    "url": "assets/js/app.f0a8e60e.js",
    "revision": "b0aab88c2f158d62d9542a239a15aa0f"
  },
  {
    "url": "css.png",
    "revision": "ef6cba618da3500bbabf1053bce1098f"
  },
  {
    "url": "engine/企业级微服务方案.html",
    "revision": "922cbcc8191b3afd3925b6b1a7a09864"
  },
  {
    "url": "engine/前端工程能力思考.html",
    "revision": "9608df49454e1310044bc9e0b4a316a7"
  },
  {
    "url": "engine/前端性能优化度量.html",
    "revision": "6ecd45fbfbfa8e3e8dcc4b76e34d58e2"
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
    "revision": "86ac0d5993b348d73ea7ea35f50509f8"
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
    "url": "images/react/rn-dynamic/error.png",
    "revision": "1c40e253cce318a7090bec2eef872395"
  },
  {
    "url": "images/react/rn-dynamic/preview.gif",
    "revision": "4a7a4f8ac2012effa90a835570ed0525"
  },
  {
    "url": "images/react/rn-dynamic/rn-1.png",
    "revision": "d034dc85b1dc5fc825cdd326d3ada7b0"
  },
  {
    "url": "images/react/rn-dynamic/rn-2.png",
    "revision": "c50e6a24230b42653d566ca31847b2a4"
  },
  {
    "url": "images/react/rn-dynamic/rn-3.png",
    "revision": "f1dc05e9ed20bd049b36cb0bfbddc660"
  },
  {
    "url": "images/react/rn-dynamic/RN.png",
    "revision": "f4c9a3a939636999895ebe2dc0550a5a"
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
    "revision": "d5b8d7fe75e6abcf1ea440df3a0ddec4"
  },
  {
    "url": "interview/笔试题.html",
    "revision": "d92b6bc24f500e55b63b49ef44baba19"
  },
  {
    "url": "interview/面试记录.html",
    "revision": "96c1f4ed3267f32c40d0a307031e84fa"
  },
  {
    "url": "interview/腾讯面试.html",
    "revision": "921ceaa90796226be3b1690f15e40091"
  },
  {
    "url": "interview/问答题.html",
    "revision": "43303a4ba32dc663b30b24f4db625df3"
  },
  {
    "url": "interview/性能优化实践.html",
    "revision": "b100d5b9607cceeaf27020861651683a"
  },
  {
    "url": "interview/Http面试汇总.html",
    "revision": "6250b72624aa1c2e158c3ca44575b8ee"
  },
  {
    "url": "interview/index.html",
    "revision": "9c09ed11bbe475b17bf0868273bf0188"
  },
  {
    "url": "interview/JavaScript面试汇总.html",
    "revision": "e9727c888ec06fc5fd294a4b14a66d2d"
  },
  {
    "url": "interview/Vue面试汇总.html",
    "revision": "90b935a6a52b2a268fd089d7e450ae6b"
  },
  {
    "url": "introduce.html",
    "revision": "8a8b065e484c283c33729368631dad2e"
  },
  {
    "url": "javascript.png",
    "revision": "8021c40683e59503a2f636e3357e234d"
  },
  {
    "url": "javascript/1px.html",
    "revision": "5e7652a24016d9d93f040ebf374231bb"
  },
  {
    "url": "javascript/base/对Object.create和类式继承的理解.html",
    "revision": "23c492f9d5e07aca87e7a70fc653388e"
  },
  {
    "url": "javascript/base/你不知道的Javascript上.html",
    "revision": "4079b4074237f42221a2dc5f130d72d5"
  },
  {
    "url": "javascript/base/你不知道的Javascript中.html",
    "revision": "dc0acfe2a6fe22e2d095880802545d39"
  },
  {
    "url": "javascript/base/Http缓存详解.html",
    "revision": "2b4eb7221d9a876a0d3ea025be572615"
  },
  {
    "url": "javascript/base/JavaScript常见ployfill.html",
    "revision": "0bbf26f5d228a7f9e0ffd29919fb6d94"
  },
  {
    "url": "javascript/base/Javascript的变量提升和函数提升.html",
    "revision": "7e8262bf03d930c4b80cfec3e8410a25"
  },
  {
    "url": "javascript/base/Javascript的bind的polyfill的理解.html",
    "revision": "37f616ca4078498994faa7f9fcbdc3ff"
  },
  {
    "url": "javascript/base/Javascript的call和apply和bind方法.html",
    "revision": "b88ad6605733a90b6913a4827fc00e39"
  },
  {
    "url": "javascript/base/Javascript对闭包的理解.html",
    "revision": "c8ca0452cfd96eadae52c89f633d72c9"
  },
  {
    "url": "javascript/base/Javascript寄生式组合继承详解.html",
    "revision": "cf293d184568fc7eaf7023cdf9d2e991"
  },
  {
    "url": "javascript/base/Javascript柯里化和偏函数实现.html",
    "revision": "9aa3444eb5c4869c92b2dca9db378589"
  },
  {
    "url": "javascript/base/Javascript模块化发展AMD,CMD,CommonJS,UMD,ES6.html",
    "revision": "e36d2572c138bd2fe6309b9d8543f80a"
  },
  {
    "url": "javascript/base/JavaScript中改变this指向有几种方式.html",
    "revision": "824ad40bfb953da14e0b646629bc78b8"
  },
  {
    "url": "javascript/base/Javascript中this绑定详解.html",
    "revision": "2e3d189c74e278a70520224a465a9c25"
  },
  {
    "url": "javascript/base/new_A和A的区别.html",
    "revision": "c4c81390bc21a272e66956bd90a7032d"
  },
  {
    "url": "javascript/base/Object.create和New的区别.html",
    "revision": "1461c3d94bedfcf6d17c96c0e9198f40"
  },
  {
    "url": "javascript/deep/前端页面劫持和反劫持.html",
    "revision": "ddb1469067613b081e39cfa3a059a67a"
  },
  {
    "url": "javascript/deep/页面预加载.html",
    "revision": "208bb3d04cb5eeed8a135209f5376ed8"
  },
  {
    "url": "javascript/index.html",
    "revision": "34db2691f59fdec8aa79958cc70ff3f5"
  },
  {
    "url": "javascript/learn.html",
    "revision": "b5ab69fc3147ba42704fb03255afb7e7"
  },
  {
    "url": "javascript/lerna.html",
    "revision": "a80a361e33ed9138c5356cc0ac35e3da"
  },
  {
    "url": "javascript/performance/性能优化实践.html",
    "revision": "c0230b06894878a19075058606c76cfc"
  },
  {
    "url": "javascript/proxy.html",
    "revision": "8056696f391510d08774d1495b5d7dbd"
  },
  {
    "url": "javascript/webpack/使用webpack的require.context按需打包.html",
    "revision": "2b2ac7414dd31d4eea8a6a0675e403df"
  },
  {
    "url": "javascript/webpack/chunk-hash,hash和content-hash的区别.html",
    "revision": "f8354607f59d83b0ee28bc90c13b084d"
  },
  {
    "url": "javascript/webpack/webpack-chain常用配置.html",
    "revision": "360d74099e3e17830574d60b2b8cf772"
  },
  {
    "url": "javascript/webpack/webpack模块异步加载原理解析.html",
    "revision": "289d1bd7ba91f6868cfc4eefeb1271c5"
  },
  {
    "url": "mendix/获取配置信息,使用java创建Rest服务.html",
    "revision": "0a1ebee9f750c453e1242b7b4ec3c423"
  },
  {
    "url": "mendix/一些功能的实现.html",
    "revision": "1271af86d7165c6a642874fef1a376cb"
  },
  {
    "url": "mendix/env.html",
    "revision": "a8274412d92fbe2af2025a6c08229244"
  },
  {
    "url": "mendix/index.html",
    "revision": "60f7cdfccd4cd762047525a43c73b1ea"
  },
  {
    "url": "mendix/javaaction.html",
    "revision": "72ce254faa8aaa0ade2572f8e272c403"
  },
  {
    "url": "mendix/Mendix后台程序环境搭建.html",
    "revision": "d22df3c84548a72cbf839c62c6a24808"
  },
  {
    "url": "mendix/study.html",
    "revision": "76abe44f2e32b3d4142797e13a4f7201"
  },
  {
    "url": "mendix/widget.html",
    "revision": "1850bb2ab874476e0724fe38349cd308"
  },
  {
    "url": "mendix/widgets/常用API.html",
    "revision": "7b5185d3de8ef33d906eee2ee992a4e8"
  },
  {
    "url": "mendix/widgets/开发组件前工具的准备.html",
    "revision": "457da92ece2f4453111c532cb0fa156e"
  },
  {
    "url": "mendix/widgets/详细API.html",
    "revision": "b7355608db54e5b446d4b9397f7831f5"
  },
  {
    "url": "mendix/widgets/index.html",
    "revision": "6f323b9cf03d1eb483bd7b36cd707d72"
  },
  {
    "url": "mendix/widgets/Vue_Mendix.html",
    "revision": "bbe10383779b9bbe908fcc3ea72d6c00"
  },
  {
    "url": "mobile/index.html",
    "revision": "9fd5f200d044cd3a62de926833bd16d5"
  },
  {
    "url": "open/index.html",
    "revision": "f264175e404265d89b63450a193ffe5f"
  },
  {
    "url": "open/luckly_popup_window.html",
    "revision": "546432ddbf3c256cedf989f58ddf8790"
  },
  {
    "url": "open/luckly_recyclerview.html",
    "revision": "a115f0349da4634bd5f70678240b4d1c"
  },
  {
    "url": "open/vue_template.html",
    "revision": "43053cdd7db0ffc09a5f90f8090d13f9"
  },
  {
    "url": "other/android_ready.html",
    "revision": "69940a070ac474f1fe62fd63f5e9ba8c"
  },
  {
    "url": "other/base_info.html",
    "revision": "54342e196d125fdf44d99f2ed837a41b"
  },
  {
    "url": "other/ready.html",
    "revision": "b8bb1fae9578312c5be866b76f062aa9"
  },
  {
    "url": "other/vscode.html",
    "revision": "2d44a8343c16572036e5318dda3be254"
  },
  {
    "url": "other/work.html",
    "revision": "05939f02870bf0cb617c9d92eb0d67e6"
  },
  {
    "url": "react/已有Android项目如何实现动态加载RN.html",
    "revision": "24f4ee1ca38929c22431cfb040514631"
  },
  {
    "url": "react/index.html",
    "revision": "1ec2dcf839208c496d894bbba2592925"
  },
  {
    "url": "react/Mobx异步Action方案.html",
    "revision": "a000d54ce1f49fb133aff63e80cf5e36"
  },
  {
    "url": "react/React高阶组件的理解.html",
    "revision": "c5cf0d2015edbd95c6896f86ca2e3131"
  },
  {
    "url": "react/React中使用bind函数和箭头函数效率比较.html",
    "revision": "692eb8a3c29c60e2c9d1bfd43897b9ea"
  },
  {
    "url": "react/React状态管理框架Redux使用.html",
    "revision": "4d54f9bdcc031a3f7efcbe262f423a96"
  },
  {
    "url": "react/Redux异步Action方案.html",
    "revision": "6c5c2fc8a39e1af46f1a4e086c1cd13c"
  },
  {
    "url": "react/Redux中间件详解.html",
    "revision": "32648a68f20147f0df60c4d770636dfa"
  },
  {
    "url": "server-side.png",
    "revision": "9732e628b5d2d9ce2634647c1a0478f0"
  },
  {
    "url": "view-designer.html",
    "revision": "69163f906e7f706b37591382248bc877"
  },
  {
    "url": "vue/你所忽略的Vue.html",
    "revision": "347237a80c0de51a5fd256bdfd129ee6"
  },
  {
    "url": "vue/如何添加PWA.html",
    "revision": "9f0e573dd202bd4dbce23f63fa57d3fe"
  },
  {
    "url": "vue/deep/Vue多入口打包性能优化.html",
    "revision": "956192af8175124ac2139962af02d5a4"
  },
  {
    "url": "vue/deep/Vue响应式原理解析.html",
    "revision": "c2b3d91f1683bd4d0973c27cd1b8a7ea"
  },
  {
    "url": "vue/index.html",
    "revision": "154bcf1978fff4c21a07504f51c3db10"
  },
  {
    "url": "vue/program/如何全局显示工具栏.html",
    "revision": "a6b36e74d49ab4d780b27e73df8790be"
  },
  {
    "url": "vue/proxy.html",
    "revision": "70ac3a982ee721ecc392e125be797fc7"
  },
  {
    "url": "vue/test/Jest测试结果分析.html",
    "revision": "54804e462c12f01c9017e99b1a73630b"
  },
  {
    "url": "vue/test/Vue使用jest单元测试详解.html",
    "revision": "708d51c820f6420701d4a539e1cebfe0"
  },
  {
    "url": "vue/Vue-cli插件开发.html",
    "revision": "4b712e77894f183c082ea2af39a5fb2c"
  },
  {
    "url": "vue/Vue父组件使用scoped无法修改子组件样式.html",
    "revision": "e6816e9a65141ce09bf112d4f29ff0e7"
  },
  {
    "url": "vue/Vue及React单向数据流的理解.html",
    "revision": "2186ff12f319499a9cd1984c9478acf6"
  },
  {
    "url": "vue/Vue路由变化页面没有刷新解决办法.html",
    "revision": "1ffbed96ace8976f60dade513cb73000"
  },
  {
    "url": "vue/Vue使用render函数渲染组件.html",
    "revision": "23db3ca16174a9a0e852e54fdb375842"
  },
  {
    "url": "vue/Vue中插件开发的四种方式.html",
    "revision": "c2af6197505cdd15637daa290378da3d"
  },
  {
    "url": "vue/Vuex中Getter,Action,Mutation函数参数说明.html",
    "revision": "aa1f999e1254f9a66bc9ea99374bb056"
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
