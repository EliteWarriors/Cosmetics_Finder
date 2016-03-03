// Initialize your app
var myApp = new Framework7({
    template7Pages: true,
    animatedNavBackIcon:true,
    swipePanel:'left',
    cache:true,
});

var $$ = Dom7;
var base_url="http://www.einsteinquotations.com/api/";
var mainView = myApp.addView('.view-main', {
   
    dynamicNavbar: true,
    domCache:true
});


var Brands = [{"id":762,"name":"100% Pure","search":"100% Pure"},{"id":299,"name":"17","search":"17"},{"id":1991,"name":"22K","search":"22K"},{"id":551,"name":"2true","search":"2true"},{"id":1390,"name":"3 Concept Eyes","search":"3 Concept Eyes"},{"id":803,"name":"AA Make Up","search":"AA Make Up"},{"id":412,"name":"Abella","search":"Abella"},{"id":942,"name":"ADCOS","search":"ADCOS"},{"id":1247,"name":"Addiction by Ayako","search":"Addiction by Ayako"},{"id":1452,"name":"Adorn","search":"Adorn"},{"id":1051,"name":"Advance Mineral Makeup","search":"Advance Mineral Makeup"},{"id":509,"name":"agnès b.","search":"agnes b."},{"id":75,"name":"Alima Pure","search":"Alima Pure"},{"id":140,"name":"Alison Raffaele","search":"Alison Raffaele"},{"id":10,"name":"Almay","search":"Almay"},{"id":559,"name":"Alverde Naturkosmetik","search":"Alverde Naturkosmetik"},{"id":568,"name":"Amazing Cosmetics","search":"Amazing Cosmetics"},{"id":146,"name":"American Beauty","search":"American Beauty"},{"id":1412,"name":"Amore Pacific","search":"Amore Pacific"},{"id":151,"name":"Annabelle","search":"Annabelle"},{"id":1284,"name":"Anna Lotan","search":"Anna Lotan"},{"id":45,"name":"Anna Sui","search":"Anna Sui"},{"id":1436,"name":"Annayake","search":"Annayake"},{"id":340,"name":"Aphrodite Cosmetics","search":"Aphrodite Cosmetics"},{"id":176,"name":"Arbonne","search":"Arbonne"},{"id":1058,"name":"Archy Make Up","search":"Archy Make Up"},{"id":1425,"name":"Ardency Inn","search":"Ardency Inn"},{"id":1158,"name":"Arissa","search":"Arissa"},{"id":791,"name":"Aromaleigh Mineral Cosmetics","search":"Aromaleigh Mineral Cosmetics"},{"id":358,"name":"Artdeco","search":"Artdeco"},{"id":1406,"name":"Artist of Makeup","search":"Artist of Makeup"},{"id":315,"name":"Artistry","search":"Artistry"},{"id":177,"name":"ASAP","search":"ASAP"},{"id":1137,"name":"Asepxia","search":"Asepxia"},{"id":572,"name":"Astor Cosmetics","search":"Astor Cosmetics"},{"id":836,"name":"Atelier Makeup","search":"Atelier Makeup"},{"id":115,"name":"Australis","search":"Australis"},{"id":130,"name":"Aveda","search":"Aveda"},{"id":939,"name":"Aveeno","search":"Aveeno"},{"id":178,"name":"Avène","search":"Avene"},{"id":457,"name":"Averine","search":"Averine"},{"id":89,"name":"Avon","search":"Avon"},{"id":508,"name":"Avril","search":"Avril"},{"id":1201,"name":"B.","search":"B."},{"id":1426,"name":"Babor","search":"Babor"},{"id":80,"name":"Barbara Daly","search":"Barbara Daly"},{"id":447,"name":"BareFaced Beauty","search":"BareFaced Beauty"},{"id":36,"name":"bareMinerals - Bare Escentuals","search":"bareMinerals - Bare Escentuals"},{"id":1102,"name":"Barry M Cosmetics","search":"Barry M Cosmetics"},{"id":637,"name":"Baviphat","search":"Baviphat"},{"id":1289,"name":"Beautee Collagen Co., Ltd","search":"Beautee Collagen Co., Ltd"},{"id":586,"name":"BeautiControl","search":"BeautiControl"},{"id":1166,"name":"Beauty Forever","search":"Beauty Forever"},{"id":947,"name":"Beauty Point Cosmetics","search":"Beauty Point Cosmetics"},{"id":521,"name":"Beauty Success","search":"Beauty Success"},{"id":365,"name":"beauty uk","search":"beauty uk"},{"id":55,"name":"BECCA","search":"BECCA"},{"id":576,"name":"Bella Aurora","search":"Bella Aurora"},{"id":298,"name":"Bella Donna","search":"Bella Donna"},{"id":616,"name":"Bellapierre","search":"Bellapierre"},{"id":219,"name":"Bella Pierre","search":"Bella Pierre"},{"id":484,"name":"Bella Terra","search":"Bella Terra"},{"id":481,"name":"Benecos","search":"Benecos"},{"id":52,"name":"Benefit","search":"Benefit"},{"id":218,"name":"Ben Nye","search":"Ben Nye"},{"id":898,"name":"Bettina Cosmetics","search":"Bettina Cosmetics"},{"id":1211,"name":"BeYu","search":"BeYu"},{"id":794,"name":"BH Cosmetics","search":"BH Cosmetics"},{"id":1032,"name":"Bioderma","search":"Bioderma"},{"id":136,"name":"Biotherm","search":"Biotherm"},{"id":432,"name":"Bissu","search":"Bissu"},{"id":181,"name":"Black Opal","search":"Black Opal"},{"id":182,"name":"Black Radiance","search":"Black Radiance"},{"id":183,"name":"black|up","search":"blackup"},{"id":1263,"name":"black Up Cosmetics","search":"black Up Cosmetics"},{"id":1053,"name":"Bless Cosmetics","search":"Bless Cosmetics"},{"id":135,"name":"Bloom Cosmetics","search":"Bloom Cosmetics"},{"id":788,"name":"Blosson Ville Cosmetics","search":"Blosson Ville Cosmetics"},{"id":8,"name":"Bobbi Brown","search":"Bobbi Brown"},{"id":694,"name":"Bodyography","search":"Bodyography"},{"id":1134,"name":"Boots Botanics","search":"Boots Botanics"},{"id":179,"name":"Boots Natural Collection","search":"Boots Natural Collection"},{"id":93,"name":"Boots No.7","search":"Boots No.7"},{"id":644,"name":"Borghese","search":"Borghese"},{"id":19,"name":"Bourjois","search":"Bourjois"},{"id":172,"name":"BRTC","search":"BRTC"},{"id":110,"name":"Burberry Beauty","search":"Burberry Beauty"},{"id":451,"name":"BYS","search":"BYS"},{"id":58,"name":"By Terry","search":"By Terry"},{"id":128,"name":"Calvin Klein","search":"Calvin Klein"},{"id":1070,"name":"Candy Doll","search":"Candy Doll"},{"id":1083,"name":"CANMAKE","search":"CANMAKE"},{"id":1346,"name":"CaraMia","search":"CaraMia"},{"id":990,"name":"Careline","search":"Careline"},{"id":157,"name":"Cargo","search":"Cargo"},{"id":1348,"name":"Caring Colours","search":"Caring Colours"},{"id":464,"name":"Carita","search":"Carita"},{"id":843,"name":"Catalina Geo","search":"Catalina Geo"},{"id":1002,"name":"Cathy Cat","search":"Cathy Cat"},{"id":482,"name":"Catrice","search":"Catrice"},{"id":1161,"name":"CEZANNE","search":"CEZANNE"},{"id":1206,"name":"Chambor","search":"Chambor"},{"id":2,"name":"CHANEL","search":"CHANEL"},{"id":48,"name":"Chantecaille","search":"Chantecaille"},{"id":1397,"name":"Charlotte Tilbury","search":"Charlotte Tilbury"},{"id":1157,"name":"Chi Chi","search":"Chi Chi"},{"id":476,"name":"Chrimaluxe","search":"Chrimaluxe"},{"id":1172,"name":"Chris Farrell Cosmetics","search":"Chris Farrell Cosmetics"},{"id":570,"name":"Cinema Secrets","search":"Cinema Secrets"},{"id":331,"name":"ck one color","search":"ck one color"},{"id":32,"name":"Clarins","search":"Clarins"},{"id":422,"name":"Classified Cosmetics","search":"Classified Cosmetics"},{"id":1047,"name":"Claudia Cosmetics","search":"Claudia Cosmetics"},{"id":120,"name":"Cle De Peau","search":"Cle De Peau"},{"id":6,"name":"Clinique","search":"Clinique"},{"id":148,"name":"Coastal Scents","search":"Coastal Scents"},{"id":733,"name":"Collection Cosmetics (Collection 2000)","search":"Collection Cosmetics (Collection 2000)"},{"id":497,"name":"Collistar","search":"Collistar"},{"id":767,"name":"Color Combos","search":"Color Combos"},{"id":680,"name":"Colorescience","search":"Colorescience"},{"id":1078,"name":"Coloressence","search":"Coloressence"},{"id":1031,"name":"Constance Carroll","search":"Constance Carroll"},{"id":581,"name":"Contém1g","search":"Contem1g"},{"id":675,"name":"Coral Colours Cosmetics","search":"Coral Colours Cosmetics"},{"id":1147,"name":"Cosmence","search":"Cosmence"},{"id":1177,"name":"Cosmetics à La Carte","search":"Cosmetics a La Carte"},{"id":232,"name":"Coty","search":"Coty"},{"id":143,"name":"Couleur Caramel","search":"Couleur Caramel"},{"id":127,"name":"Cover FX","search":"Cover FX"},{"id":7,"name":"CoverGirl","search":"CoverGirl"},{"id":636,"name":"Covermark","search":"Covermark"},{"id":839,"name":"Crown","search":"Crown"},{"id":102,"name":"Dainty Doll","search":"Dainty Doll"},{"id":398,"name":"Daniel Sandler","search":"Daniel Sandler"},{"id":444,"name":"Da Vinci","search":"Da Vinci"},{"id":624,"name":"Deborah Milano","search":"Deborah Milano"},{"id":185,"name":"Dermablend","search":"Dermablend"},{"id":522,"name":"Dermacol","search":"Dermacol"},{"id":349,"name":"Dermage","search":"Dermage"},{"id":39,"name":"Dermalogica","search":"Dermalogica"},{"id":1023,"name":"Dermaquest","search":"Dermaquest"},{"id":493,"name":"Designer Brands Cosmetics","search":"Designer Brands Cosmetics"},{"id":191,"name":"Dianne Brill","search":"Dianne Brill"},{"id":612,"name":"Dinair Airbrush Makeup","search":"Dinair Airbrush Makeup"},{"id":20,"name":"Dior","search":"Dior"},{"id":1000,"name":"DMK Cosmetics","search":"DMK Cosmetics"},{"id":51,"name":"Dolce and Gabbana","search":"Dolce and Gabbana"},{"id":611,"name":"Dove","search":"Dove"},{"id":38,"name":"Dr.Hauschka","search":"Dr.Hauschka"},{"id":800,"name":"Dr. Jart+","search":"Dr. Jart+"},{"id":294,"name":"Duda Molinos","search":"Duda Molinos"},{"id":34,"name":"DuWop","search":"DuWop"},{"id":1285,"name":"Earthnicity","search":"Earthnicity"},{"id":192,"name":"Edward Bess","search":"Edward Bess"},{"id":323,"name":"ELES","search":"ELES"},{"id":107,"name":"e.l.f. (eyes. lips. face)","search":"e.l.f. (eyes. lips. face)"},{"id":1267,"name":"Elisha Coy","search":"Elisha Coy"},{"id":62,"name":"Elizabeth Arden","search":"Elizabeth Arden"},{"id":970,"name":"Elke","search":"Elke"},{"id":134,"name":"Ella Bache","search":"Ella Bache"},{"id":113,"name":"Ellis Faas","search":"Ellis Faas"},{"id":1216,"name":"Embryolisse","search":"Embryolisse"},{"id":1279,"name":"Eminence Organics","search":"Eminence Organics"},{"id":598,"name":"Environ","search":"Environ"},{"id":1067,"name":"Episol","search":"Episol"},{"id":519,"name":"Erborian","search":"Erborian"},{"id":997,"name":"eSpoir","search":"eSpoir"},{"id":456,"name":"Essence","search":"Essence"},{"id":9,"name":"Estee Lauder","search":"Estee Lauder"},{"id":380,"name":"Ettusais","search":"Ettusais"},{"id":312,"name":"Etude House","search":"Etude House"},{"id":944,"name":"Eudora","search":"Eudora"},{"id":498,"name":"EVAGARDEN","search":"EVAGARDEN"},{"id":1374,"name":"Eve Lom","search":"Eve Lom"},{"id":194,"name":"Eve Pearl","search":"Eve Pearl"},{"id":301,"name":"Ever Belena","search":"Ever Belena"},{"id":98,"name":"Everyday Minerals","search":"Everyday Minerals"},{"id":1164,"name":"EX1 Cosmetics","search":"EX1 Cosmetics"},{"id":195,"name":"Exuviance","search":"Exuviance"},{"id":68,"name":"Face Atelier","search":"Face Atelier"},{"id":116,"name":"Face of Australia","search":"Face of Australia"},{"id":1039,"name":"Faces Cosmetics","search":"Faces Cosmetics"},{"id":1203,"name":"Face Stockholm","search":"Face Stockholm"},{"id":1339,"name":"face value cosmetics","search":"face value cosmetics"},{"id":308,"name":"Fashion 21","search":"Fashion 21"},{"id":316,"name":"Fashion Fair","search":"Fashion Fair"},{"id":1167,"name":"Femme Couture","search":"Femme Couture"},{"id":892,"name":"Flori Roberts","search":"Flori Roberts"},{"id":233,"name":"Flormar","search":"Flormar"},{"id":1108,"name":"Flower","search":"Flower"},{"id":667,"name":"Forever 21 - Love \u0026 Beauty Makeup","search":"Forever 21 - Love \u0026 Beauty Makeup"},{"id":1306,"name":"Fred Farrugia","search":"Fred Farrugia"},{"id":196,"name":"Fresh","search":"Fresh"},{"id":1135,"name":"Fusion Beauty","search":"Fusion Beauty"},{"id":384,"name":"GA-DE Cosmetics","search":"GA-DE Cosmetics"},{"id":166,"name":"Garnier","search":"Garnier"},{"id":1329,"name":"George Skin Perfection","search":"George Skin Perfection"},{"id":1094,"name":"Gerda Spillmann","search":"Gerda Spillmann"},{"id":479,"name":"Gertraud Gruber","search":"Gertraud Gruber"},{"id":328,"name":"Gino McCray","search":"Gino McCray"},{"id":21,"name":"Giorgio Armani","search":"Giorgio Armani"},{"id":12,"name":"Givenchy","search":"Givenchy"},{"id":1281,"name":"GK Cosmetics","search":"GK Cosmetics"},{"id":197,"name":"Glo Minerals","search":"Glo Minerals"},{"id":1187,"name":"Golden Rose","search":"Golden Rose"},{"id":50,"name":"Gorgeous Cosmetics","search":"Gorgeous Cosmetics"},{"id":198,"name":"Gosh","search":"Gosh"},{"id":210,"name":"Grace","search":"Grace"},{"id":101,"name":"Graftobian","search":"Graftobian"},{"id":1194,"name":"Grimas","search":"Grimas"},{"id":76,"name":"Guerlain","search":"Guerlain"},{"id":31,"name":"Guinot","search":"Guinot"},{"id":228,"name":"Hard Candy","search":"Hard Candy"},{"id":129,"name":"Helena Rubenstein","search":"Helena Rubenstein"},{"id":735,"name":"H\u0026M","search":"H\u0026M"},{"id":229,"name":"Holika Holika","search":"Holika Holika"},{"id":100,"name":"Hourglass","search":"Hourglass"},{"id":22,"name":"Illamasqua","search":"Illamasqua"},{"id":378,"name":"Illuminare Cosmetics","search":"Illuminare Cosmetics"},{"id":656,"name":"Il Makiage","search":"Il Makiage"},{"id":111,"name":"Iman","search":"Iman"},{"id":977,"name":"in2it","search":"in2it"},{"id":49,"name":"Inglot","search":"Inglot"},{"id":29,"name":"INIKA","search":"INIKA"},{"id":1178,"name":"Innisfree","search":"Innisfree"},{"id":207,"name":"Innoxa","search":"Innoxa"},{"id":751,"name":"Interface","search":"Interface"},{"id":37,"name":"Invisible Zinc","search":"Invisible Zinc"},{"id":1226,"name":"IPSA","search":"IPSA"},{"id":230,"name":"isa dora","search":"isa dora"},{"id":1355,"name":"Isa Knox","search":"Isa Knox"},{"id":283,"name":"IT Cosmetics","search":"IT Cosmetics"},{"id":1040,"name":"Ivatherm","search":"Ivatherm"},{"id":1159,"name":"Jackelin","search":"Jackelin"},{"id":28,"name":"Jane Iredale","search":"Jane Iredale"},{"id":95,"name":"Jemma Kidd Make Up School","search":"Jemma Kidd Make Up School"},{"id":768,"name":"Jequiti Cosmeticos","search":"Jequiti Cosmeticos"},{"id":105,"name":"JK By Jemma Kidd","search":"JK By Jemma Kidd"},{"id":449,"name":"Joe Blasco","search":"Joe Blasco"},{"id":132,"name":"Joppa Minerals","search":"Joppa Minerals"},{"id":610,"name":"Jordana Cosmetics","search":"Jordana Cosmetics"},{"id":375,"name":"Josie Maran","search":"Josie Maran"},{"id":753,"name":"Jouer Cosmetics","search":"Jouer Cosmetics"},{"id":756,"name":"Juice Beauty","search":"Juice Beauty"},{"id":114,"name":"KANEBO","search":"KANEBO"},{"id":597,"name":"Karaja Makeup","search":"Karaja Makeup"},{"id":121,"name":"Kat Von D","search":"Kat Von D"},{"id":601,"name":"Kett Cosmetics","search":"Kett Cosmetics"},{"id":59,"name":"Kevyn Aucoin","search":"Kevyn Aucoin"},{"id":224,"name":"Kiehls","search":"Kiehls"},{"id":144,"name":"Kiko Cosmetics","search":"Kiko Cosmetics"},{"id":1063,"name":"Kirkland Signature Borghese","search":"Kirkland Signature Borghese"},{"id":284,"name":"Kiss New York","search":"Kiss New York"},{"id":379,"name":"KleanColor","search":"KleanColor"},{"id":160,"name":"Koh Gen Do","search":"Koh Gen Do"},{"id":1044,"name":"Koloss Cosmeticos","search":"Koloss Cosmeticos"},{"id":122,"name":"Korres","search":"Korres"},{"id":439,"name":"KOSÉ","search":"KOSE"},{"id":71,"name":"Kryolan","search":"Kryolan"},{"id":403,"name":"La Bella Donna","search":"La Bella Donna"},{"id":615,"name":"L.A. Colors","search":"L.A. Colors"},{"id":1118,"name":"LACURA","search":"LACURA"},{"id":311,"name":"L.A. Girl","search":"L.A. Girl"},{"id":861,"name":"Lakme","search":"Lakme"},{"id":2339,"name":"La Mav","search":"La Mav"},{"id":47,"name":"La Mer","search":"La Mer"},{"id":35,"name":"Lancôme","search":"Lancome"},{"id":226,"name":"Laneige","search":"Laneige"},{"id":42,"name":"La Prairie","search":"La Prairie"},{"id":363,"name":"La Roche-Posay","search":"La Roche-Posay"},{"id":1296,"name":"La Tulipe","search":"La Tulipe"},{"id":92,"name":"Laura Geller","search":"Laura Geller"},{"id":30,"name":"Laura Mercier","search":"Laura Mercier"},{"id":227,"name":"LaurEss Minerals","search":"LaurEss Minerals"},{"id":155,"name":"Lavera","search":"Lavera"},{"id":161,"name":"Le Metier de Beaute","search":"Le Metier de Beaute"},{"id":1173,"name":"Lierac","search":"Lierac"},{"id":1347,"name":"Lifeford Paris","search":"Lifeford Paris"},{"id":85,"name":"Lily Lolo","search":"Lily Lolo"},{"id":549,"name":"Lioele Cosmetics","search":"Lioele Cosmetics"},{"id":853,"name":"Lise Watier","search":"Lise Watier"},{"id":244,"name":"Living Nature","search":"Living Nature"},{"id":72,"name":"Liz Earle","search":"Liz Earle"},{"id":156,"name":"Lorac","search":"Lorac"},{"id":4,"name":"L'Oreal Paris","search":"LOreal Paris"},{"id":1060,"name":"Lotus Herbals","search":"Lotus Herbals"},{"id":847,"name":"Lucy Minerals","search":"Lucy Minerals"},{"id":245,"name":"Lumene","search":"Lumene"},{"id":1227,"name":"Lumiere Mineral Cosmetics","search":"Lumiere Mineral Cosmetics"},{"id":386,"name":"Lunasol","search":"Lunasol"},{"id":561,"name":"Luscious Cosmetics","search":"Luscious Cosmetics"},{"id":94,"name":"Lush","search":"Lush"},{"id":1,"name":"MAC","search":"MAC"},{"id":133,"name":"Mad Minerals","search":"Mad Minerals"},{"id":1207,"name":"Mahogany Cosmeticos","search":"Mahogany Cosmeticos"},{"id":1229,"name":"Maja","search":"Maja"},{"id":88,"name":"Make Up Academy","search":"Make Up Academy"},{"id":164,"name":"Make-Up Designory","search":"Make-Up Designory"},{"id":936,"name":"Make Up Factory","search":"Make Up Factory"},{"id":23,"name":"Makeup Forever (MUFE)","search":"Makeup Forever (MUFE)"},{"id":1311,"name":"Make Up Store","search":"Make Up Store"},{"id":126,"name":"Makeup Store","search":"Makeup Store"},{"id":252,"name":"Mally","search":"Mally"},{"id":961,"name":"Mamonde","search":"Mamonde"},{"id":170,"name":"Manhattan","search":"Manhattan"},{"id":485,"name":"Manic Panic","search":"Manic Panic"},{"id":466,"name":"Maquillage by Shiseido","search":"Maquillage by Shiseido"},{"id":1309,"name":"Marcelle","search":"Marcelle"},{"id":945,"name":"Marcelo Beauty Cosmeticos","search":"Marcelo Beauty Cosmeticos"},{"id":1366,"name":"Marc Jacobs","search":"Marc Jacobs"},{"id":175,"name":"mark","search":"mark"},{"id":13,"name":"Mary Kay","search":"Mary Kay"},{"id":14,"name":"Max Factor","search":"Max Factor"},{"id":1052,"name":"Max Love","search":"Max Love"},{"id":5,"name":"Maybelline","search":"Maybelline"},{"id":203,"name":"Mehron","search":"Mehron"},{"id":1086,"name":"MeMeMe","search":"MeMeMe"},{"id":150,"name":"Meow Cosmetics","search":"Meow Cosmetics"},{"id":246,"name":"merle norman","search":"merle norman"},{"id":401,"name":"Micabella","search":"Micabella"},{"id":832,"name":"Miessence","search":"Miessence"},{"id":264,"name":"Milani","search":"Milani"},{"id":1185,"name":"Mineral Hygienics","search":"Mineral Hygienics"},{"id":346,"name":"Mineral Makeup Market","search":"Mineral Makeup Market"},{"id":295,"name":"Minerelle Minerals","search":"Minerelle Minerals"},{"id":188,"name":"Mirabella","search":"Mirabella"},{"id":201,"name":"Miracle Skin Transformer","search":"Miracle Skin Transformer"},{"id":27,"name":"Mirenesse","search":"Mirenesse"},{"id":82,"name":"Missha","search":"Missha"},{"id":520,"name":"Miss Helen","search":"Miss Helen"},{"id":103,"name":"Miss Sporty","search":"Miss Sporty"},{"id":33,"name":"ModelCo","search":"ModelCo"},{"id":293,"name":"Models Prefer","search":"Models Prefer"},{"id":700,"name":"Moisture Mist","search":"Moisture Mist"},{"id":131,"name":"Monave","search":"Monave"},{"id":660,"name":"MUA Makeup Academy","search":"MUA Makeup Academy"},{"id":243,"name":"Musq","search":"Musq"},{"id":141,"name":"MyFace Cosmetics","search":"MyFace Cosmetics"},{"id":1145,"name":"Myra E","search":"Myra E"},{"id":819,"name":"nacara","search":"nacara"},{"id":265,"name":"Nanoce","search":"Nanoce"},{"id":26,"name":"Napoleon Perdis","search":"Napoleon Perdis"},{"id":24,"name":"NARS","search":"NARS"},{"id":117,"name":"Natio","search":"Natio"},{"id":326,"name":"Natura","search":"Natura"},{"id":1287,"name":"Natural Collection","search":"Natural Collection"},{"id":419,"name":"Natural Glamour","search":"Natural Glamour"},{"id":1275,"name":"Natural Reserve (Réserve Naturelle)","search":"Natural Reserve (Reserve Naturelle)"},{"id":1183,"name":"Nature Republic","search":"Nature Republic"},{"id":25,"name":"Neutrogena","search":"Neutrogena"},{"id":390,"name":"New CID Cosmetics","search":"New CID Cosmetics"},{"id":86,"name":"New York Color NYC","search":"New York Color NYC"},{"id":1242,"name":"Nichido","search":"Nichido"},{"id":1104,"name":"Nicka K","search":"Nicka K"},{"id":808,"name":"Niko","search":"Niko"},{"id":987,"name":"Nilens Jord","search":"Nilens Jord"},{"id":1197,"name":"Nip + Fab","search":"Nip + Fab"},{"id":325,"name":"Nivea","search":"Nivea"},{"id":1125,"name":"Noreva","search":"Noreva"},{"id":41,"name":"NP SET","search":"NP SET"},{"id":199,"name":"Nude by Nature","search":"Nude by Nature"},{"id":429,"name":"NuSkin","search":"NuSkin"},{"id":189,"name":"Nutrimetics","search":"Nutrimetics"},{"id":212,"name":"Nvey Eco","search":"Nvey Eco"},{"id":43,"name":"NYX","search":"NYX"},{"id":343,"name":"O Boticário","search":"O Boticario"},{"id":362,"name":"Obsessive Compulsive Cosmetics","search":"Obsessive Compulsive Cosmetics"},{"id":216,"name":"Olay","search":"Olay"},{"id":448,"name":"Oriflame","search":"Oriflame"},{"id":119,"name":"Origins","search":"Origins"},{"id":1353,"name":"Oxygenetix","search":"Oxygenetix"},{"id":701,"name":"P2 Cosmetics","search":"P2 Cosmetics"},{"id":320,"name":"Palladio","search":"Palladio"},{"id":654,"name":"Palmers","search":"Palmers"},{"id":1261,"name":"Pamela Grant","search":"Pamela Grant"},{"id":1048,"name":"Panvel Make Up","search":"Panvel Make Up"},{"id":956,"name":"parisberlin","search":"parisberlin"},{"id":266,"name":"Paula Dorf","search":"Paula Dorf"},{"id":61,"name":"Paula's Choice","search":"Paulas Choice"},{"id":97,"name":"Paul \u0026 Joe","search":"Paul \u0026 Joe"},{"id":411,"name":"Payot","search":"Payot"},{"id":1160,"name":"Peripera Cover BB Foundation","search":"Peripera Cover BB Foundation"},{"id":272,"name":"Philosophy","search":"Philosophy"},{"id":63,"name":"Physicians Formula","search":"Physicians Formula"},{"id":486,"name":"PIXI Beauty","search":"PIXI Beauty"},{"id":234,"name":"POLA / WHITISSIMO","search":"POLA / WHITISSIMO"},{"id":18,"name":"Prescriptives","search":"Prescriptives"},{"id":267,"name":"Prestige Cosmetics","search":"Prestige Cosmetics"},{"id":223,"name":"Priori","search":"Priori"},{"id":1155,"name":"Prisma","search":"Prisma"},{"id":84,"name":"Pupa","search":"Pupa"},{"id":202,"name":"Pur Minerals","search":"Pur Minerals"},{"id":727,"name":"Quem disse Berenice?","search":"Quem disse Berenice?"},{"id":1297,"name":"Quo","search":"Quo"},{"id":966,"name":"Racco ","search":"Racco "},{"id":268,"name":"RCMA","search":"RCMA"},{"id":626,"name":"Rejuva Minerals","search":"Rejuva Minerals"},{"id":955,"name":"Repêchage","search":"Repechage"},{"id":3,"name":"Revlon","search":"Revlon"},{"id":56,"name":"RIMMEL","search":"RIMMEL"},{"id":79,"name":"RMK","search":"RMK"},{"id":355,"name":"Rouge Bunny Rouge","search":"Rouge Bunny Rouge"},{"id":764,"name":"Ruby Kisses","search":"Ruby Kisses"},{"id":1272,"name":"Sacha Cosmetics","search":"Sacha Cosmetics"},{"id":187,"name":"Sally Hansen","search":"Sally Hansen"},{"id":676,"name":"Samina Pure Makeup","search":"Samina Pure Makeup"},{"id":891,"name":"San San Hortaleza MD","search":"San San Hortaleza MD"},{"id":269,"name":"Sante","search":"Sante"},{"id":74,"name":"Sappho Organics","search":"Sappho Organics"},{"id":1271,"name":"Savvy by DB","search":"Savvy by DB"},{"id":1220,"name":"Sax Cosmetics","search":"Sax Cosmetics"},{"id":1240,"name":"Sebastian Trucco (DISCONTINUED)","search":"Sebastian Trucco (DISCONTINUED)"},{"id":820,"name":"Sei Bella","search":"Sei Bella"},{"id":154,"name":"Sephora","search":"Sephora"},{"id":1255,"name":"Serge Louis Alvarez","search":"Serge Louis Alvarez"},{"id":1174,"name":"Serge Lutens","search":"Serge Lutens"},{"id":807,"name":"Sheer Cover","search":"Sheer Cover"},{"id":17,"name":"Shiseido","search":"Shiseido"},{"id":60,"name":"Shu Uemura","search":"Shu Uemura"},{"id":83,"name":"Signature Minerals","search":"Signature Minerals"},{"id":1091,"name":"SilkyGirl","search":"SilkyGirl"},{"id":1308,"name":"SimplySiti","search":"SimplySiti"},{"id":1303,"name":"Simply Vera by Vera Wang","search":"Simply Vera by Vera Wang"},{"id":118,"name":"Sisley","search":"Sisley"},{"id":54,"name":"SK-II","search":"SK-II"},{"id":392,"name":"Skin79","search":"Skin79"},{"id":139,"name":"Skin Food","search":"Skin Food"},{"id":73,"name":"Sleek MakeUP","search":"Sleek MakeUP"},{"id":77,"name":"Smashbox","search":"Smashbox"},{"id":459,"name":"Smashit","search":"Smashit"},{"id":1228,"name":"Smitten Organics","search":"Smitten Organics"},{"id":1328,"name":"Soap and Glory","search":"Soap and Glory"},{"id":1130,"name":"So'Bio étic","search":"SoBio etic"},{"id":364,"name":"Sonia Kashuk","search":"Sonia Kashuk"},{"id":828,"name":"Sothys","search":"Sothys"},{"id":1062,"name":"Spectraban T","search":"Spectraban T"},{"id":1036,"name":"SpectraBAN t","search":"SpectraBAN t"},{"id":938,"name":"Stargazer","search":"Stargazer"},{"id":446,"name":"Starlet Cosmetics","search":"Starlet Cosmetics"},{"id":1301,"name":"Starlooks","search":"Starlooks"},{"id":1084,"name":"Steelo Cosmetics","search":"Steelo Cosmetics"},{"id":940,"name":"Stendhal","search":"Stendhal"},{"id":15,"name":"Stila","search":"Stila"},{"id":152,"name":"Studio Gear","search":"Studio Gear"},{"id":517,"name":"Studio Makeup","search":"Studio Makeup"},{"id":761,"name":"Sue Devitt","search":"Sue Devitt"},{"id":614,"name":"SugarBaby","search":"SugarBaby"},{"id":1320,"name":"Suncoat","search":"Suncoat"},{"id":174,"name":"Sunday Riley","search":"Sunday Riley"},{"id":186,"name":"SUQQU","search":"SUQQU"},{"id":125,"name":"Tarte","search":"Tarte"},{"id":1249,"name":"Technic","search":"Technic"},{"id":367,"name":"Temptu","search":"Temptu"},{"id":44,"name":"TheBalm","search":"TheBalm"},{"id":57,"name":"The Body Shop","search":"The Body Shop"},{"id":995,"name":"The Face Shop","search":"The Face Shop"},{"id":1310,"name":"Therapy Systems","search":"Therapy Systems"},{"id":165,"name":"Thierry Mugler","search":"Thierry Mugler"},{"id":248,"name":"Thin Lizzy","search":"Thin Lizzy"},{"id":270,"name":"Three Custom Color","search":"Three Custom Color"},{"id":205,"name":"TIGI","search":"TIGI"},{"id":755,"name":"TiKei Mineral Cosmetics","search":"TiKei Mineral Cosmetics"},{"id":1225,"name":"T. LeClerc","search":"T. LeClerc"},{"id":296,"name":"Tom Ford","search":"Tom Ford"},{"id":748,"name":"Tony Moly Cosmetics","search":"Tony Moly Cosmetics"},{"id":78,"name":"Too Faced","search":"Too Faced"},{"id":351,"name":"TRACTA","search":"TRACTA"},{"id":204,"name":"Trish McEvoy","search":"Trish McEvoy"},{"id":87,"name":"Ulta","search":"Ulta"},{"id":1324,"name":"Ultima II (DISCONTINUED)","search":"Ultima II (DISCONTINUED)"},{"id":40,"name":"Ultraceuticals","search":"Ultraceuticals"},{"id":317,"name":"Une","search":"Une"},{"id":46,"name":"Urban Decay","search":"Urban Decay"},{"id":523,"name":"Uriage Roseliane","search":"Uriage Roseliane"},{"id":215,"name":"Vani-T","search":"Vani-T"},{"id":866,"name":"Vapour Organic Beauty","search":"Vapour Organic Beauty"},{"id":780,"name":"Vasanti","search":"Vasanti"},{"id":829,"name":"Veil","search":"Veil"},{"id":99,"name":"Vichy","search":"Vichy"},{"id":153,"name":"Victoria's Secret","search":"Victorias Secret"},{"id":1245,"name":"Vie at Home (formerly Virgin Vie)","search":"Vie at Home (formerly Virgin Vie)"},{"id":209,"name":"Vincent Longo","search":"Vincent Longo"},{"id":641,"name":"VMV Hypoallergenics","search":"VMV Hypoallergenics"},{"id":496,"name":"Vult Cosmetica","search":"Vult Cosmetica"},{"id":812,"name":"W7","search":"W7"},{"id":327,"name":"Wet 'n' Wild","search":"Wet n Wild"},{"id":1250,"name":"witch","search":"witch"},{"id":492,"name":"Yardley","search":"Yardley"},{"id":721,"name":"Yes Cosmetics","search":"Yes Cosmetics"},{"id":123,"name":"Youngblood","search":"Youngblood"},{"id":16,"name":"YSL - Yves Saint Laurent","search":"YSL - Yves Saint Laurent"},{"id":889,"name":"Yuva","search":"Yuva"},{"id":138,"name":"Yves Rocher","search":"Yves Rocher"},{"id":344,"name":"Za","search":"Za"},{"id":336,"name":"Zuii","search":"Zuii"},{"id":640,"name":"Zuri Cosmetics","search":"Zuri Cosmetics"}];
var Brand_ids=[];
var Brand_names=[];
var Brand_searches=[];
var Product_ids=[];
var Product_names=[];
for(var i=0;i<Brands.length;i++)
{
	Brand_ids[i]=Brands[i].id;
	Brand_names[i]=Brands[i].name;
	Brand_searches[i]=Brands[i].search;
}
var SelectedShades = [32136];
var searchResultsURL = '/searches/2445383';
var selectedBrands;
var autocompleteDropdownExpand = myApp.autocomplete({
    input: '#brand-dropdown',
    openIn: 'dropdown',
    preloader:true,
    expandInput: true, // expand input
    valueProperty: 'id', //object's "value" property name
    textProperty: 'text', //object's "text" property name
    onChange: function(){
    	//alert('change');
    },
    onClose:function(event)
    {
    	
    },
    source: function (autocomplete, query, render) {
        var results = [];
        if (query.length === 0) {
            render(results);
            return;
        }
        autocomplete.showPreloader();
        // Find matched items
         for (var i = 0; i < Brands.length; i++) {
            if (Brands[i].name.toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(Brands[i].name);
        }
    	render(results);
    	autocomplete.hidePreloader();
    }
});

var productDropDown = myApp.autocomplete({
    input: '#product-dropdown',
    openIn: 'dropdown',
    preloader: true, //enable preloader
    valueProperty: 'id', //object's "value" property name
    textProperty: 'name', //object's "text" property name
    limit: 20, //limit to 20 results
    dropdownPlaceholderText: 'Search products',
    expandInput: true, // expand input
    source: function (autocomplete, query, render) {
        var results = [];
        if (query.length === 0) {
            render(results);
            return;
        }
        // Show Preloader
        autocomplete.showPreloader();
        selectedBrands=Brand_ids[Brand_names.indexOf($$("#brand-dropdown").val())];
    	//alert(JSON.stringify(selectedBrands));
    	$$.ajax({
            url: base_url+'?mode=product&&brand_id='+selectedBrands,
            type: 'GET',
            dataType: 'json',
            success: function(data) { 
                for (var i = 0; i < data.length; i++) {
                    if (data[i].name.toLowerCase().indexOf(query.toLowerCase()) >= 0) 
                    {
                    	results.push(data[i].name);

                    }
                    Product_ids[i]=data[i].id;
                    Product_names[i]=data[i].name;
                }
                // Hide Preoloader
                autocomplete.hidePreloader();
                // Render items by passing array with result items
                render(results);
            }
        });

	}
});

var shadeDropDown = myApp.autocomplete({
    input: '#shade-dropdown',
    openIn: 'dropdown',
    preloader: true, //enable preloader
    valueProperty: 'id', //object's "value" property name
    textProperty: 'name', //object's "text" property name
    limit: 20, //limit to 20 results
    dropdownPlaceholderText: 'Search shades',
    expandInput: true, // expand input
    source: function (autocomplete, query, render) {
        var results = [];
        if (query.length === 0) {
            render(results);
            return;
        }
        // Show Preloader
        autocomplete.showPreloader();
        var selectedProducts=Product_ids[Product_names.indexOf($$("#product-dropdown").val())];
    	//alert(JSON.stringify(selectedProducts));
    	$$.ajax({
            url: base_url+'?mode=shade&&product_id='+selectedProducts,
            type: 'GET',
            dataType: 'json',
            success: function(data) { 
                for (var i = 0; i < data.length; i++) {
                    if (data[i].name.toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(data[i].name);
                }
                // Hide Preoloader
                autocomplete.hidePreloader();
                // Render items by passing array with result items
                render(results);
            }
        });

	}
});
myApp.onPageInit('searchresult', function (page) {
	myApp.showIndicator();
	$$.ajax({
            url: base_url+'?mode=searches&&search_id=2461628',
            type: 'GET',
            dataType: 'text',
            success: function(data) { 
            	$$(".temp").html(data);
                /*var count=data.contents().length;
                alert(count);
                // Hide Preoloader*/
                var result=$(".temp").contents().find($(".matches")[0]).html().trim();
                
                $$(".temp").html(result);
                var searchResult=$(".temp").children('.match-meta');
                $(".media-list").html();
                for(var i=0;i<searchResult.length;i++)
                {
                	$$(".media-list ul").append('<li>');
                	$$(".media-list ul").append(searchResult[i]);
                	$$(".media-list ul").append('</li>');
                }
                $(".media-list").contents().find('.media').addClass('item-link');
                $(".media-list").contents().find('.media').addClass('item-content');
                $(".media-list").contents().find('.img').attr('width','80px');
	            $(".media-list").contents().find('.media-left').addClass('item-media');
	            $(".media-list").contents().find('.media-body').addClass('item-inner');
	            $(".media-list").contents().find('.buy-stuff').remove();
	            $(".media-list").contents().find('.tried-it').remove();
                myApp.hideIndicator();

            }
        });
});

function generate_item(htmlstring)
{
	
}
