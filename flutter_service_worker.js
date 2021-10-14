'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "7481bfb24c509b573eb98a1478cd0025",
".git/config": "671f8ee4c18188902eb61c6b90395578",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1089b07dafaf205f4c18ea3b7ae715f3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "097d161e58d8ba1b03852134ce6f44b9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0f30a62f5ce5c1491432843b2028cea9",
".git/logs/refs/heads/main": "0f30a62f5ce5c1491432843b2028cea9",
".git/logs/refs/remotes/origin/main": "d30dcfa2515fc07fca0b42bb969fc390",
".git/objects/02/c9f93a8e4cfcd7001116e1975e7793a726ca89": "6d21aefd3855ab4b610554773e6a442f",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/0c/edd8eeb2cd399eaf826352aefca66e6e99032e": "553b3a6d8c969a292627e269390167bc",
".git/objects/0d/ed09550ec10486583824919a863ed288a6b3cb": "84a58aeedea364d635f1a18eb1167224",
".git/objects/0f/609bfe2ae50084716b8049610134408d826263": "3b6f27a9be00a5ebf1983a14c7d29f5b",
".git/objects/14/d77a9c2f87c62ea2c37d158c4ef00e5347ec59": "04ece9a8dad293f1e5119178d6c50271",
".git/objects/16/d5ad3193195b0784744c3a5e0fbbf6fe97e1f4": "11bcef86c386a48dba6734a528b6e93c",
".git/objects/17/1998ab5f4409c2cacf8325bceac26c031872e5": "8f99b04c4fad1026a2b563449b3e3d4d",
".git/objects/17/9f44e634c15ca00de11a350be1fcd02d8312dc": "ce8a7bfdcba572ba1374c46edce12d26",
".git/objects/17/a4de0aa37da6ae5ee7d0d9c14d2f59bf44dc72": "9ea3daed8e42ae1e70aef767c8fa1119",
".git/objects/1b/ccb3d07bfc77df8c08bacda9b2e97733ae08af": "eaedbcd714adee7aee97c3f0b7131f5d",
".git/objects/1c/b050b05ea2e5627f131100dceb3bc0f075b58f": "349c11b987be7fc9ade0a750308be752",
".git/objects/1d/7dc079b3bf5aa9285e67722cb6bff6f050af06": "c47fe340fc72be693a7fe1cc2a2d5a61",
".git/objects/1f/6c8ed5be8576a1b1fb63481e72c843a52a3a13": "24604a827c3bb9758314aa237c475693",
".git/objects/20/8180a10143a4c069cafa131ad60b89df7bcddd": "2b9f3f4ffba79325ebaa796d932bf12b",
".git/objects/21/4ba1b004d874802481d4c5b0431219326212f2": "5f67921c8a8ae6012f2def31b6e79f04",
".git/objects/22/e8f2643b0721ff22997fe04cb21ae88d55ff4e": "5dae35cb9f95d71d2863ea8c7df6b953",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/26/6d4dd91258e53fc6e7794eb113d427837b3e94": "ce70017a56c41404edbd85872609af03",
".git/objects/2f/73f76f9bf8738e5892260b5ada9d60ae28a0cd": "c81e3345d39d72cd926945a7ba6aa34b",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/6dbbea6bcb06ec37df5dec5c4b364d9fd4978e": "fc330277dcd553d4b0672df129ba204a",
".git/objects/36/3425ca86e53a6bced022bb815d3f512414866c": "8538381205a933a0982d0128dd435395",
".git/objects/39/5e13ea6b95b68986d8d217c98b1d482aa05a2f": "55f8aa15ad52e84bc061568581853e18",
".git/objects/3f/4246826353c94f0bb73628b0ce014c55600f54": "acbec3b08bf4c13b1e75073d8c7ed556",
".git/objects/3f/f35abed20f0d8926ed12f3ac4e4d9881741fa0": "447401fafc282aadb2fb393b3fe39686",
".git/objects/40/0a3ba674fb45cb827a99e865c45f8ff6fec861": "6620a2e7c77a009db627efee05764ecc",
".git/objects/40/55861e1ceac96b14f777d48b949f25dfa9297e": "3794c5fbca8f5cd062caa49fc9d85c89",
".git/objects/45/faaacd7dcae21edb038f50212326b06fef76f1": "4e974be4c54b4705446e53762f74cb3b",
".git/objects/47/95541a6364c537c4dbb96f2445260d62aff500": "859f9dd4574ed1e6ab5b015c95e20894",
".git/objects/4e/529619b57f21b84f7f2e8acfad24b98aad3184": "45dd7ebfa553a10ec31dc451b1fb5238",
".git/objects/50/c2dd7c7be5c9f6a8e7db1a981d50cfe40df64e": "878571517a221dbba4b8883fad1f416d",
".git/objects/51/0126aa84fda08b8517b6a37b0fadfe640c3f19": "b835687056632ae441e34bb96a3d3b59",
".git/objects/52/50f9b5f70d968e3f4e650f9cea07c511044358": "01d3ecefc36b3ef8519a806d691f0f77",
".git/objects/57/6f3378e532c6249a53a91df460fe0bbf5112f0": "5a230287b1ee6cf0914febebc8165340",
".git/objects/5e/4b9bf301d32ae9d2a4c1bb0973d896e968275a": "2c38c2b308ab54d225276493ee93394b",
".git/objects/5f/dc637875ee91576899cdd845ba26fee2896662": "1fdead60e35cc682351812046d6a4d1d",
".git/objects/64/498ea0af60dab187467e13508695fed3ad7b6f": "a00a880adecf5b9be8c629af2f7dbad1",
".git/objects/78/0b9cc5de0f91576ae2b29509db6607a138c9fd": "af018f77187f4ec857ebfb57e2a8be54",
".git/objects/79/183a9f1e6672216ddd52fa5e35af8fa205ccc7": "3146335968ce8ec751293778bbfb5a4f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/84/9bea7724ffa03ffdaf81fb7507176918509b0e": "42cef85901fc706bdf8c9ecd1aff33db",
".git/objects/84/d5b8aa9ffebfdc3bd0d240f435cf5aced4e97c": "e52266d270abfd208db72954320125f4",
".git/objects/87/25c8fbf7a4a29e325cf346e15a6979f037f194": "d0c6616c132bb727a4624214e608ce4c",
".git/objects/89/3ff4019d7e2c4971d72f0a76aa2af3b495ffc3": "477bc7207d22ee43fe66afe608c7754e",
".git/objects/8b/3683ca72a5587812e967c141f5cb83dd7bb70f": "8437d94bbda6d3cd78ea334d704ae761",
".git/objects/8b/d52d9e31f2e2af4dc29344a2653ba1e2feea3e": "3566624a0fabd29d3dd6588e35d56e96",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/93/5006a3342bd6447ce8c443806c315645ee6b3b": "a11b29d89aa55895b6eac6043b801305",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/94/59dcea8e7c10f3eb9dc79cd71195b09fc90300": "fd95e506079618d214f7969d373b6a28",
".git/objects/9c/72f0967221c414af9a5610dfbbe766c8004e59": "83c07b28f8addcd82a9a5b109ff7c4cc",
".git/objects/9e/285dbee41d6030d150a19d600a14fe3d65c5e6": "d8303f3b433bd00999aa3a2489b76fcd",
".git/objects/a1/0724cc610c2312eb3adbf776ecebcf5200bc82": "7ce243f3b69cf1eb6aa6d7d339b3264e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/3cdb551b8013486878057add75dc603a531d08": "076136871099dc126720fe03ea86ef5f",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/66817b7cd83d783e205d080b0f7cb01d9cacd8": "e6de1ccd2589ed33f8440a4110e8f964",
".git/objects/ad/7c0953657a828c33882cc5d1991cd8a8333128": "1d6c15865dfbd4566573ac94c3b35bb8",
".git/objects/af/6719ace2c155cee049b7f456c55cc0dd4a82ce": "dd438cc5aabd42f23ea22195c31e8875",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/b9/95791f23b4ce9cf73e7546f913066833dab98d": "707b328f0e80642cc37ccbcb802217a1",
".git/objects/bb/466e8b7a2244fdca2d3606b85c4e776666beb6": "15a3b2ce9194aaf957ecc8636cfddf8b",
".git/objects/be/fa1caf35e2593ef36d028cf49dc076c824adfb": "7702b2b27e1d232a25458555809b4a61",
".git/objects/c0/d44a7cd7a69d948c8cfb3fc900a9971464892d": "ce9378939bdd551410962d1b1e4bb06d",
".git/objects/c6/85cc701f99d7f66f6fd53c81fe198228490367": "77860517c108ab5304ab9e470fd00f90",
".git/objects/c8/51a6705b05fb960f1d314c91018a5aa37ce4d8": "68631a4e72b83c19c0241b1115d9d7c2",
".git/objects/c9/fffc92840206ff157a9a1211497dbbe0df1920": "7b49077d4e23bea6fb5bfc1f53783162",
".git/objects/cc/76003aad294a13d856ef681748a198b906c57b": "4c0fbb6dee9c9ba1c0f17930b258f111",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cf/b0e4cc433952556d9c5d9374115fd843a0661e": "7c9f29cf8007eeaa983c951b1652dc0a",
".git/objects/d2/c366f108761ade32af65809e99a517ad8588ed": "bd97fb66f7a544b9067cf8bc1c24f542",
".git/objects/da/3abc4bf8a754d52cb7d970d6f6c1f48c1cb027": "b5a58df82f4bcb66c5babd5d1d1bf16a",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/e0/4de294698c835e97e1bed23d5ed0b7510e947d": "efd84b15f9b8346c1768010a879bb3f6",
".git/objects/e3/a7fbb0cfdffbad27af9710d42b96e3e6533962": "70bb7db6e327587f949013f7ff1c5815",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/8d40b67e34ff090e18094e3c589097c6d1bb8b": "3803df7a90b4546e7f04c3e44a82e4b2",
".git/objects/ee/932a69a6b5b4d3112615d6f96e2cdc2cd76378": "23129682b3bfcdc0532146bb86d959fe",
".git/objects/ef/92a2d72392ac03363f2612d6838b346635058a": "11979982de6ca7ca246e0edc1499be96",
".git/objects/f2/63ccc86a9ebdda6989a8147d0416eb8c79661f": "b185884a4872bb3c84ecf709392e54ff",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/ORIG_HEAD": "23752fe7481496e039006345be468203",
".git/refs/heads/main": "23752fe7481496e039006345be468203",
".git/refs/remotes/origin/main": "23752fe7481496e039006345be468203",
"assets/AssetManifest.json": "1390f9b2f2ba1702ade9c1f7ed83e53a",
"assets/assets/appstoreBlack.png": "0f2e24134d9a1ce984bbd8b28c060192",
"assets/assets/appstoreWhite.png": "f1f14cd596952b2560ba77dae39970f4",
"assets/assets/fonts/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/fonts/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/photo.jpeg": "c5e5101d2d08191012d825ff07864980",
"assets/assets/photoBig.jpeg": "cd91bd924ff16a315c04f43ad2572a82",
"assets/assets/playstoreBlack.png": "60a2004c1ec1f190d9cd1729af83406f",
"assets/assets/playstoreWhite.png": "e0a89cb39939bf8abc024ea1362b501b",
"assets/assets/projects/FFO/image0.png": "c5bedbb696f02dfa3f58f4f5427e8460",
"assets/assets/projects/FFO/image1.png": "e602a4462d0c30589cf500cc6c1e5412",
"assets/assets/projects/FFO/image2.png": "12be465bced5d3f132923dcfda370286",
"assets/assets/projects/FFO/image3.png": "780395ca125185e0a5f2c95376ecbe0c",
"assets/assets/projects/FFO/image4.png": "aaf6c1424a3f5e3bab008a949bcce9cf",
"assets/assets/projects/FFO/image5.png": "ebb6c83a49d4ecdf8223aca949223faf",
"assets/assets/projects/FoodCourt/image0.png": "09e29c752ba02d046e44d2231ba956d1",
"assets/assets/projects/FoodCourt/image1.png": "0438db9180f327ab6ff6d1b1a8a50853",
"assets/assets/projects/FoodCourt/image2.png": "a58375e9892bcfa74faa89a13336f9a2",
"assets/assets/projects/FoodCourt/image3.png": "22ba25d84b52bf4e93f2329cfd8914f1",
"assets/assets/projects/FoodCourt/image4.png": "27a9868b303065220316cfba0c22d702",
"assets/assets/projects/FoodCourt/image5.png": "6ef2d1f0cec77bf615c96d9b2d5b7285",
"assets/assets/projects/QPRider/image0.png": "d2b26f6159f87cc04e1c93a23d362065",
"assets/assets/projects/QPRider/image1.png": "ea368822e70a9a24b48d391a3e7d0c0b",
"assets/assets/projects/QPRider/image2.png": "f83991f808022d71d0df76819ecf4913",
"assets/assets/projects/QPRider/image3.png": "619d500dfbe784f959b79057bca20fa5",
"assets/assets/projects/QPRider/image4.png": "38ccba6d2bded3897ee244f10e809840",
"assets/assets/projects/QPRider/image5.png": "5052ed28c71194b99f44614e5b62d959",
"assets/assets/projects/Quickpickup/image0.png": "dccab85bc3e1af239964ab7f115cae3c",
"assets/assets/projects/Quickpickup/image1.png": "f3c1eb4d3390a209556ba58e4e3b515f",
"assets/assets/projects/Quickpickup/image2.png": "f9d5ce1fd80c1b48889da85264c1db34",
"assets/assets/projects/Quickpickup/image3.png": "c9a814955c8ae561e06194918061aa03",
"assets/assets/projects/Quickpickup/image4.png": "de3e9d66893e4a0403a50189f6361ab9",
"assets/assets/projects/Quickpickup/image5.png": "ec27398136af265c98fbff9abe066792",
"assets/FontManifest.json": "c6025de146e227fabb43e7a91f3ba4a0",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "747da5249695430c1087c90c59e099fa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"favicon.ico": "aafc30de8b9142cfff71584297246324",
"favicon.png": "c43bfb705711941e06123faaa8e49cef",
"icons/Icon-192.png": "f040d8062ca9a009539b5416688f7bc2",
"icons/Icon-512.png": "660f4a9bbbe4027ca252f37f0137603c",
"index.html": "9d447cbf0862f8e036c0d9ff96628dce",
"/": "9d447cbf0862f8e036c0d9ff96628dce",
"LICENSE": "ad1ffe37faf4b4c4735906faf64bfc67",
"main.dart.js": "a621043ba277eafb2caf2336aae416e4",
"manifest.json": "4e47af474da9be4f37b1bfc61aee71e7",
"README.md": "8685dd922c8a586152d2f11509aa4814",
"version.json": "1cefaf2a48f42633ff4b37ffe0e9de96"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
