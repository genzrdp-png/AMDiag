// =============================================
// AutoDiag Pro — v3.0
// =============================================

const SEV_LABEL = { low:"🟢 Faible", medium:"🟡 Modéré", high:"🔴 Élevé", critical:"💀 CRITIQUE" };
const SEV_CLASS = { low:"sl", medium:"sm", high:"sh", critical:"sc" };
const SEV_ORDER = { critical:0, high:1, medium:2, low:3 };

// ─────────────────────────────────────────
// MARQUES (sans doublons)
// ─────────────────────────────────────────
const BRANDS = [
  // Japonaises
  { name:"Toyota",          icon:"🇯🇵", origin:"Japon",      codes:["P0300","P0011","P0016","P1300","P1349","P0171","P0128","P0420","P0335","P1121","P1604","P1633"] },
  { name:"Toyota Hybride",  icon:"⚡",  origin:"HEV/PHEV",   codes:["P3000","P0A80","P3004","P3006","P3017","P3020","P3021","P3030","P3033","P3035","P3040","P3070"] },
  { name:"Honda",           icon:"🇯🇵", origin:"Japon",      codes:["P0171","P1456","P1491","P0440","P0300","P0128","P0420","P0172","P1259","P1351","P1399","P1166"] },
  { name:"Honda Hybride",   icon:"⚡",  origin:"HEV/PHEV",   codes:["P3000","P0A80","P3030","P3033","P3040","P3004","P3006","P3050","P3035","P0C40"] },
  { name:"Nissan",          icon:"🇯🇵", origin:"Japon",      codes:["P0300","P0171","P1564","P1400","P1217","P1268","P1148","P0340","P0562","P0700","P0420","P0016"] },
  { name:"Nissan CVT",      icon:"🔄",  origin:"CVT",        codes:["P0730","P0868","P0894","P0700","P0715","P0720","P0841","P0811","P0810"] },
  { name:"Mazda",           icon:"🇯🇵", origin:"Japon",      codes:["P0171","P0300","P0011","P0016","P0420","P0128","P0172","P0335","P0400","P0440","P2004"] },
  { name:"Subaru",          icon:"🇯🇵", origin:"Japon",      codes:["P0021","P0022","P0171","P0172","P0016","P0420","P0300","P0562","P0302","P0011","P1031"] },
  { name:"Mitsubishi",      icon:"🇯🇵", origin:"Japon",      codes:["P0300","P0340","P1085","P1400","P0171","P0190","P0700","P0420","P1500","P0132"] },
  { name:"Suzuki",          icon:"🇯🇵", origin:"Japon",      codes:["P0300","P0171","P0128","P0420","P0335","P0440","P0506","P0172","P0010","P0400"] },
  { name:"Lexus",           icon:"🇯🇵", origin:"Japon",      codes:["P0300","P0011","P1135","P1300","P0420","P0171","P0128","P0562","P0016","P0335"] },
  { name:"Lexus Hybride",   icon:"⚡",  origin:"HEV",        codes:["P3000","P0A80","P3017","P3020","P3021","P1135","P1155","P3004","P3006","P3035","P3040"] },
  { name:"Daihatsu",        icon:"🇯🇵", origin:"Japon",      codes:["P0300","P0171","P0128","P0420","P0335","P0506","P0440","P0172"] },
  { name:"Isuzu",           icon:"🇯🇵", origin:"Japon",      codes:["P0380","P0190","P0400","P2002","P0171","P0300","P0562","C0031"] },
  // Allemandes
  { name:"BMW / Mini",      icon:"🇩🇪", origin:"Allemagne",  codes:["P0300","P0171","P0562","P0600","U0100","P0016","P0420","P0172","P1421","P0597","P0299"] },
  { name:"BMW Hybride/EV",  icon:"⚡",  origin:"HEV/BEV",    codes:["P3000","P0A80","P3030","P3033","P0C00","P0B00","P0BC0","P3035","P3040","P0C40","P3050"] },
  { name:"Mercedes-Benz",   icon:"🇩🇪", origin:"Allemagne",  codes:["P0171","P0300","P0400","P0562","P0700","C0031","P0420","P0172","P0016","P0190","C1200","C1201"] },
  { name:"Volkswagen",      icon:"🇩🇪", origin:"Allemagne",  codes:["P0300","P0171","P2015","P0087","P0400","P0380","P0299","P0700","P0420","P2004","P0016"] },
  { name:"Audi",            icon:"🇩🇪", origin:"Allemagne",  codes:["P0300","P0171","P0011","P0016","P2015","P0087","P0299","P0190","P0400","P0420","P0172"] },
  { name:"Porsche",         icon:"🇩🇪", origin:"Allemagne",  codes:["P0300","P0171","P0420","P0011","P0562","P0600","C0031","P0700","C1200","P3000"] },
  { name:"Opel / Vauxhall", icon:"🇩🇪", origin:"Allemagne",  codes:["P0300","P0171","P0172","P0400","P0562","P0420","P0380","P0700","C0031","P0335"] },
  // Françaises
  { name:"Peugeot",         icon:"🇫🇷", origin:"France",     codes:["P0380","P2002","P1190","P1340","P0190","P0400","P0300","P0171","P0562","P1351","C0031"] },
  { name:"Renault",         icon:"🇫🇷", origin:"France",     codes:["P0380","P2002","P1425","P0300","P0171","P0190","P0400","P0562","P0420","C0031","P1536"] },
  { name:"Citroën",         icon:"🇫🇷", origin:"France",     codes:["P0380","P2002","P1190","P1340","P0190","P0400","P0300","P0171","P0562","P0420"] },
  // Britanniques
  { name:"Land Rover",      icon:"🇬🇧", origin:"Royaume-Uni",codes:["C1200","C1201","C1205","P0300","P0171","P0190","P0562","P0700","U0100","C1730"] },
  { name:"Jaguar",          icon:"🇬🇧", origin:"Royaume-Uni",codes:["P0300","P0171","P0420","P0562","P0600","U0100","C0031","P0016","P0700","P3000"] },
  // Scandinaves
  { name:"Volvo",           icon:"🇸🇪", origin:"Suède",      codes:["P0300","P0171","P0400","P0562","C1730","P0700","P0190","C0031","P0380","U0100"] },
  // Italiennes
  { name:"Fiat / Alfa",     icon:"🇮🇹", origin:"Italie",     codes:["P0300","P0171","P0380","P0400","P0190","P0420","P0562","P0172","C0031","P0700"] },
  // Américaines
  { name:"Ford",            icon:"🇺🇸", origin:"USA",        codes:["P0300","P0171","P0420","P0562","P0440","P0700","P0172","P0335","P0400","P0128","P0571","P0615"] },
  { name:"Chevrolet / GMC", icon:"🇺🇸", origin:"USA",        codes:["P0300","P0171","P0172","P0420","P0562","P0700","P0440","P0335","P0128","P0400","P0650"] },
  { name:"Dodge / Jeep",    icon:"🇺🇸", origin:"USA",        codes:["P0300","P0171","P0172","P0420","P0562","P0700","C0031","P0335","P0615","P0705"] },
  { name:"Cadillac",        icon:"🇺🇸", origin:"USA",        codes:["P0300","P0171","P0420","P0562","P0600","C1200","C0031","P0700","U0100","P0016"] },
  // Coréennes
  { name:"Hyundai",         icon:"🇰🇷", origin:"Corée",      codes:["P0300","P0171","P0017","P1326","P0128","P0420","P0335","P0700","P0172","P0016","P0440"] },
  { name:"Kia",             icon:"🇰🇷", origin:"Corée",      codes:["P0300","P0171","P0017","P1326","P0128","P0016","P0420","P0340","P0172","P0335","P0440"] },
  { name:"Hyundai/Kia EV",  icon:"⚡",  origin:"BEV",        codes:["P0A80","P3000","P0B00","P0BC0","P0C00","P3030","P3033","P0C40","P0C60","P3040","P3004"] },
  // Chinoises
  { name:"BYD",             icon:"🇨🇳", origin:"Chine",      codes:["P3000","P0A80","P0BC0","P0B00","P0C40","P0C60","P3040","P3030","P0562","U0100"] },
  { name:"Chery / Geely",   icon:"🇨🇳", origin:"Chine",      codes:["P0300","P0171","P0172","P0420","P0562","P0700","C0031","P0335","P0380","P0400"] },
];

// ─────────────────────────────────────────
// GLOSSAIRE
// ─────────────────────────────────────────
const GLOSSARY = [
  // OBD / Codes
  { term:"OBD2 / EOBD",      def:"On-Board Diagnostics 2 — Norme de diagnostic embarqué (USA 1996+, Europe essence 2001+, diesel 2003+)." },
  { term:"DTC",              def:"Diagnostic Trouble Code — Code défaut OBD2. Format: lettre + 4 chiffres (ex: P0300)." },
  { term:"Freeze Frame",     def:"Données moteur figées au moment de l'apparition du code (régime, charge, température…)." },
  { term:"DLC / OBD Port",   def:"Data Link Connector — Prise OBD2 de 16 broches, généralement sous le tableau de bord conducteur." },
  { term:"Readiness Monitor", def:"Tests OBD2 (catalyseur, EVAP, lambda…) à compléter après effacement de codes — requis au CT." },
  { term:"MIL",              def:"Malfunction Indicator Lamp — Voyant moteur (Check Engine). S'allume fixe ou clignote selon gravité." },
  // Moteur / Injection
  { term:"ECU / ECM",        def:"Electronic Control Unit / Engine Control Module — Calculateur moteur. Le cerveau du véhicule." },
  { term:"MAF",              def:"Mass Air Flow — Débitmètre d'air massique. Mesure la quantité d'air entrant dans le moteur." },
  { term:"MAP",              def:"Manifold Absolute Pressure — Capteur pression absolue collecteur d'admission." },
  { term:"TPS / ETB",        def:"Throttle Position Sensor / Electronic Throttle Body — Capteur et corps papillon électronique." },
  { term:"IAT",              def:"Intake Air Temperature — Capteur température air d'admission." },
  { term:"ECT",              def:"Engine Coolant Temperature — Capteur température liquide refroidissement moteur." },
  { term:"CKP",              def:"Crankshaft Position Sensor — Capteur position vilebrequin. Indispensable au démarrage." },
  { term:"CMP",              def:"Camshaft Position Sensor — Capteur position arbre à cames. Utilisé pour l'injection séquentielle." },
  { term:"VSS",              def:"Vehicle Speed Sensor — Capteur vitesse véhicule." },
  { term:"STFT / LTFT",      def:"Short/Long Term Fuel Trim — Corrections carburant court/long terme. Acceptable: ±10%." },
  { term:"Lambda / O2",      def:"Sonde d'oxygène — Mesure richesse mélange. Amont: régulation. Aval: contrôle catalyseur." },
  { term:"A/F Sensor",       def:"Air/Fuel Sensor large bande — Version avancée de la sonde lambda (Toyota, Honda, Nissan)." },
  { term:"VVT / VVTi",       def:"Variable Valve Timing — Calage variable soupapes. Toyota=VVTi, Honda=VTEC, BMW=VANOS, Nissan=CVVT." },
  { term:"EGR",              def:"Exhaust Gas Recirculation — Recirculation des gaz d'échappement pour réduire les NOx." },
  { term:"EVAP / Canister",  def:"Système anti-évaporation essence. Le canister piège les vapeurs et les brûle dans le moteur." },
  { term:"Common Rail",      def:"Rampe commune diesel haute pression (1500–2500 bars). Partagée entre injecteurs." },
  { term:"GDI / FSI / TSI",  def:"Injection directe essence haute pression. Pompe HP + pompe BP requises." },
  // Dépollution / Diesel
  { term:"DPF / FAP",        def:"Diesel Particulate Filter — Piège les suies. Régénération nécessaire (~600°C, autoroute)." },
  { term:"SCR",              def:"Selective Catalytic Reduction — Traitement NOx diesel avec AdBlue/DEF." },
  { term:"AdBlue / DEF",     def:"Solution urée 32.5% — Injectée dans le SCR pour neutraliser les NOx en azote + eau." },
  { term:"EGT",              def:"Exhaust Gas Temperature — Capteurs température gaz sur la ligne d'échappement." },
  { term:"Catalyseur",       def:"Convertisseur catalytique — Réduit CO, HC et NOx. Durée: 150–200 000km." },
  { term:"NOx",              def:"Oxydes d'azote — Polluant principal diesel. Réduit par EGR + SCR/AdBlue." },
  { term:"7e injecteur",     def:"Injecteur additionnel PSA/Renault dans l'échappement pour régénérer le FAP." },
  { term:"VNT / Wastegate",  def:"Variable Nozzle Turbine / soupape décharge turbo. Contrôle la pression de suralimentation." },
  // Transmission / Boîte
  { term:"TCM",              def:"Transmission Control Module — Module de contrôle de la boîte de vitesses automatique." },
  { term:"CVT",              def:"Continuously Variable Transmission — Boîte à variation continue (courroie + poulies variables)." },
  { term:"DSG / DCT",        def:"Direct Shift Gearbox / Dual Clutch Transmission — Boîte à double embrayage (VW, BMW, Hyundai…)." },
  { term:"Haldex",           def:"Coupleur AWD électronique (VW/Audi/Volvo). Huile et filtre dédiés à changer régulièrement." },
  { term:"ATF",              def:"Automatic Transmission Fluid — Huile spécifique boîte automatique. NE PAS utiliser huile générique CVT." },
  // Électrique / Réseau
  { term:"BCM",              def:"Body Control Module — Carrosserie: portes, vitres, éclairage, alarme…" },
  { term:"Bus CAN",          def:"Controller Area Network — Réseau communication numérique entre modules ECU." },
  { term:"ABS",              def:"Anti-lock Braking System — Antiblocage roues au freinage d'urgence." },
  { term:"ESP / ESC / DSC",  def:"Electronic Stability Program — Contrôle de stabilité (antidérapage)." },
  { term:"EPS",              def:"Electric Power Steering — Direction assistée électrique." },
  { term:"SAS",              def:"Steering Angle Sensor — Capteur angle volant. Utilisé par ESP/ESC." },
  { term:"SRS / Airbag",     def:"Supplemental Restraint System — Système coussins gonflables + ceintures prétensionneuses." },
  { term:"IMMO",             def:"Immobiliseur — Antidémarrage électronique par reconnaissance transpondeur dans la clé." },
  { term:"TPMS",             def:"Tire Pressure Monitoring System — Surveillance pression pneus. Capteurs dans les valves." },
  // Hybride / Électrique
  { term:"HV / Haute Tension",def:"High Voltage — Circuit 200–800V. CÂBLES ORANGE — Danger électrocution mortelle." },
  { term:"BEV",              def:"Battery Electric Vehicle — 100% électrique (Tesla, Leaf, Ioniq 6, EV6, ID.4…)." },
  { term:"HEV",              def:"Hybrid Electric Vehicle — Hybride classique sans prise (Prius, Insight…)." },
  { term:"PHEV",             def:"Plug-in Hybrid — Hybride rechargeable externe (RAV4 PHEV, Outlander PHEV, Ioniq 5…)." },
  { term:"MHEV / BSG",       def:"Mild Hybrid — Micro hybride avec alternateur-démarreur BSG 48V. Start-Stop amélioré." },
  { term:"FCEV / H2",        def:"Fuel Cell Electric Vehicle — Pile à combustible hydrogène (Mirai, Nexo)." },
  { term:"BMS / BMU",        def:"Battery Management System — Gestion batterie HV: tensions, températures, charge/décharge." },
  { term:"MG1 / MG2",        def:"Moteurs-générateurs Toyota/Lexus hybride. MG1=démarreur+générateur, MG2=traction." },
  { term:"Onduleur / Inverter",def:"Convertit DC batterie HV en AC triphasé pour les moteurs électriques." },
  { term:"DC-DC Converter",  def:"Convertit HV (200–600V) en 12V pour alimenter le réseau électrique classique." },
  { term:"OBC",              def:"On-Board Charger — Chargeur embarqué pour recharge secteur 220V (PHEV/BEV)." },
  { term:"SOC",              def:"State of Charge — Niveau de charge batterie HV en %. Équivalent jauge essence." },
  { term:"SOH",              def:"State of Health — Santé batterie HV en %. <80% → remplacement recommandé." },
  { term:"Regen",            def:"Freinage régénératif — Récupère l'énergie cinétique pour recharger la batterie HV." },
  { term:"Suspension pneum.", def:"Suspension à air (soufflets gonflables). Réglage hauteur automatique. BMW, Mercedes, Range Rover." },
];

// ─────────────────────────────────────────
// INDEX SYMPTÔMES
// ─────────────────────────────────────────
const SYMPTOM_INDEX = [
  { symptom:["tremble","vibration","secoue","tressaute","cahote","rough"], codes:["P0300","P0301","P0302","P0303","P0304","P0305","P0306","P0316"] },
  { symptom:["voyant moteur","check engine","témoin orange","moteur allumé","check"], codes:["P0171","P0172","P0300","P0420","P0440","P0128","P0016","P0011"] },
  { symptom:["démarrage difficile","ne démarre pas","démarre mal","no start","cranks"], codes:["P0335","P0340","P0380","P0606","U0100","P0191","P0615","B3055","P0087","P0685"] },
  { symptom:["surconsommation","consomme trop","trop de carburant","fuel","essence"], codes:["P0171","P0172","P0420","P0300","P0128","P0506","P2002","P0401"] },
  { symptom:["fumée blanche","vapeur","tuyau","exhaust white"], codes:["P0217","P0172","P0300","P2002","P2006"] },
  { symptom:["fumée noire","richesse","black smoke","diesel noir"], codes:["P0172","P0400","P0401","P2002","P0402","P0404"] },
  { symptom:["fumée bleue","huile brûlée","blue smoke"], codes:["P0217","P2263","P0300"] },
  { symptom:["surchauffe","chauffe","temperature haute","overheating","radiateur"], codes:["P0217","P0128","P2181","P0115","P1217","P0597"] },
  { symptom:["ralenti","calage","s'éteint","stalling","régime irrégulier","idle"], codes:["P0505","P0506","P0507","P0171","P0172","P0300","P0400","P2187","P2188"] },
  { symptom:["perte puissance","manque puissance","accélération","lent","mou","flat"], codes:["P0100","P0101","P0171","P0172","P0300","P0400","P0234","P0299","P2263","P0A0F"] },
  { symptom:["turbo","boost","suralimentation","wastegate","intercooler"], codes:["P0234","P0299","P0235","P0236","P0243","P2263","P0087"] },
  { symptom:["odeur essence","mauvaise odeur","soufre","œuf","carburant odeur"], codes:["P0420","P0440","P0455","P0441","P0172"] },
  { symptom:["freins","abs","freine mal","frein","brake","ebp"], codes:["C0031","C0034","C0037","C0040","C0110","C0061","C0051","C0200","C0121"] },
  { symptom:["pédale frein","dure","molle","enfonce","spongy"], codes:["C0061","C0110","P0571"] },
  { symptom:["airbag","srs","coussin","ceinture","crash","accident"], codes:["B0001","B0002","B1000","B1001","B0010","B0019"] },
  { symptom:["boîte vitesse","transmission","rapport","automatique","gear","claque"], codes:["P0700","P0715","P0720","P0730","P0841","U0101","P0705","P0706","P0706"] },
  { symptom:["cvt","courroie boite","variation continue","patinage boite"], codes:["P0730","P0868","P0894","P0811","P0810"] },
  { symptom:["4x4","awd","traction intégrale","haldex","différentiel"], codes:["C0300","C1701","C1702","C1730"] },
  { symptom:["batterie","alternateur","décharge","charge électrique","ne charge"], codes:["P0562","P0563","P0560","U0100","U0140","P3033","P0A94","P0685"] },
  { symptom:["clé","immo","antidémarrage","ne reconnait","transpondeur"], codes:["B3055","B3056","P0630"] },
  { symptom:["hybride","hv","prius","ready","haute tension","batterie hybride"], codes:["P3000","P0A80","P3004","P3006","P3017","P3070","P3040","P0A0F"] },
  { symptom:["électrique","ev","bev","autonomie","recharge","borne","charge lente"], codes:["P0BC0","P0B00","P0C00","P0C40","P0C60","P3030","P0A94","P0B30"] },
  { symptom:["start stop","micro hybride","ne s'arrête","bsg"], codes:["P3050"] },
  { symptom:["clim","climatisation","ac","froid","chaud","réfrigérant","gaz"], codes:["P0532","P0533"] },
  { symptom:["direction","volant","dur","assistance","eps","lourd"], codes:["C0051","C0200","P0551","C0076","C0077","C0080"] },
  { symptom:["suspension","hauteur","affaissée","soufflet","air","pneumatique"], codes:["C1200","C1201","C1205","C1210","C1215","C1220"] },
  { symptom:["dpf","fap","filtre particules","régénération","voyant dpf","suies"], codes:["P2002","P2006","P246C","P246D","P2031","P1190","P2003"] },
  { symptom:["adblue","urée","scr","nox","def","qualité adblue","bleu"], codes:["P2048","P2049","P207F"] },
  { symptom:["egr","recirculation","émission"], codes:["P0400","P0401","P0402","P0404","P0410"] },
  { symptom:["préchauffage","bougie diesel","démarrage froid","winter"], codes:["P0380","P0300","P0190","P0191","P2291"] },
  { symptom:["eau diesel","mauvais carburant","filtre diesel","water"], codes:["P2264","P2269","P2291","P0087"] },
  { symptom:["pneu","tpms","pression pneu","voyant pneu"], codes:["C0750","C0755","C0760","C0765","C0775"] },
  { symptom:["vtec","vvt","calage","distribution","chaîne"], codes:["P0011","P0012","P0016","P1259","P1349","P0021","P1085","P0017"] },
  { symptom:["cognement","claquement","bielle","moteur tape"], codes:["P1326","P0217","P0300","P0016"] },
  { symptom:["communication","can","réseau","module ne répond"], codes:["U0001","U0100","U0101","U0121","U0140","P0600"] },
];

// ─────────────────────────────────────────
// CODES PINNED (page d'accueil)
// ─────────────────────────────────────────
const PINNED_CODES = [
  // ── Moteur essence courants ──
  "P0300","P0301","P0302","P0303","P0304",
  "P0171","P0172","P0174","P0175",
  "P0011","P0012","P0016","P0017",
  "P0128","P0217","P2181",
  "P0100","P0101","P0120","P0121",
  "P0130","P0133","P0136","P0141",
  "P0335","P0336","P0340","P0341",
  "P0350","P0380",
  "P0420","P0430","P0440","P0441","P0442","P0455","P0456",
  "P0400","P0401","P0404",
  "P0505","P0506","P0507",
  "P0560","P0562","P0563",
  "P0600","P0606","P0615",
  "P0700","P0715","P0720","P0730",
  "P0087","P0088","P0089",
  "P0190","P0191",
  // ── Hybride / Électrique ──
  "P3000","P3004","P3006","P3009","P3011","P3017",
  "P3020","P3021","P3030","P3033","P3035","P3040","P3050","P3070",
  "P0A00","P0A0F","P0A80","P0A94",
  "P0B00","P0B30","P0B90","P0BC0",
  "P0C00","P0C40","P0C60","P0C80",
  // ── Diesel avancé ──
  "P2002","P2003","P2006","P2031","P2032","P2048","P207F",
  "P246C","P246D","P2263","P2264","P2269","P2291",
  "P0234","P0235","P0299","P0243",
  // ── ABS / Freins / Suspension / EPS ──
  "C0031","C0034","C0037","C0040","C0051","C0061","C0076","C0080","C0110",
  "C1200","C1201","C1205","C1210","C1215","C1220","C1730",
  // ── TPMS ──
  "C0750","C0755","C0760","C0765",
  // ── Airbag / SRS ──
  "B0001","B0002","B1000","B1001","B0010","B0019",
  // ── Réseau CAN ──
  "U0001","U0100","U0101","U0121","U0140","U0155",
  // ── Codes constructeurs ──
  "P1300","P1349","P1456","P1259","P1326","P2015","P0597","P0017","P0021","P1085",
];

// historique des recherches
let searchHistory = JSON.parse(localStorage.getItem("autodiag_history") || "[]");

// ─────────────────────────────────────────
// SEARCH DTC
// ─────────────────────────────────────────
function searchDTC() {
  const raw = document.getElementById("dtcInput").value.trim().toUpperCase().replace(/\s/g,"");
  if (!raw) return;
  const d = DTC_DB[raw];
  const make = document.getElementById("sel-make").value;
  const year = document.getElementById("sel-year").value;
  const eng  = document.getElementById("sel-engine").value;
  const area = document.getElementById("resultArea");

  // Sauvegarder dans l'historique
  if (d) {
    searchHistory = [raw, ...searchHistory.filter(c => c !== raw)].slice(0, 10);
    localStorage.setItem("autodiag_history", JSON.stringify(searchHistory));
    renderHistory();
  }

  area.innerHTML = d
    ? buildResultCard(raw, d, make, year, eng)
    : notFoundHTML(raw, make, year);
  area.scrollIntoView({ behavior:"smooth" });
}

function buildResultCard(code, d, make, year, eng) {
  const causes = d.causes.map((c, i) =>
    `<li class="l${Math.min(i+1,3)}">${c[0]}<span class="pt">${c[1]}</span></li>`
  ).join("");
  const steps = d.steps.map(s => `<li>${s}</li>`).join("");
  const parts = d.parts.map(p =>
    `<div class="pi"><span>🔩 ${p[0]}</span><span class="pp">${p[1]}</span></div>`
  ).join("");
  const warn = d.warning
    ? `<div class="alert ad" style="margin-top:.8rem;"><span class="ai2">🚨</span><span>${d.warning}</span></div>` : "";
  const vInfo = [make, year, eng].filter(Boolean).join(" — ");
  const vBadge = vInfo
    ? `<div style="color:var(--m);font-size:.78rem;margin-top:.4rem;">📍 ${vInfo}</div>` : "";

  return `<div class="rc">
    <div class="rh">
      <div class="dtc-badge">${code}</div>
      <div class="rmeta">
        <div class="rtitle">${d.title}</div>
        <div class="rsys">📂 ${d.system}</div>
        <span class="sbadge ${SEV_CLASS[d.severity]}">${SEV_LABEL[d.severity]}</span>
        ${vBadge}
      </div>
      <div style="display:flex;flex-direction:column;gap:.5rem;align-items:flex-end;">
        <div style="display:flex;gap:.5rem;">
          <button class="print-btn" onclick="printResult('${code}')">🖨️ Imprimer</button>
          <button class="print-btn" onclick="copyResult('${code}')">📋 Copier</button>
        </div>
        <div class="cost-box">
          <div class="cost-lbl">Coût estimé réparation</div>
          <div class="cost-val">${d.cost}</div>
        </div>
      </div>
    </div>
    <div style="padding:.9rem 1.8rem .6rem;border-bottom:1px solid var(--b);">
      <p style="font-size:.88rem;line-height:1.65;color:#ccc;">${d.desc}</p>
      ${warn}
    </div>
    <div class="rb">
      <div class="ib">
        <h3>⚙️ Causes probables</h3>
        <ul class="cl">${causes}</ul>
      </div>
      <div class="ib">
        <h3>🔩 Pièces concernées</h3>
        <div class="pg">${parts || '<p style="color:var(--m);font-size:.82rem;">Aucune pièce spécifique requise</p>'}</div>
      </div>
      <div class="ib full-col">
        <h3>🔧 Guide réparation étape par étape</h3>
        <ol class="sl2">${steps}</ol>
      </div>
    </div>
  </div>`;
}

function notFoundHTML(code, make, year) {
  const prefix = code.charAt(0);
  const prefixMap = {
    P:"Powertrain — Moteur, boîte de vitesses, émissions",
    B:"Body — Carrosserie, airbags, confort",
    C:"Chassis — Freins ABS, direction, suspension",
    U:"Réseau — Communication bus CAN, modules ECU"
  };
  const sys = prefixMap[prefix] || "Inconnu";
  // Chercher des codes similaires
  const similar = Object.keys(DTC_DB).filter(k =>
    k.startsWith(code.substring(0,3)) || k.substring(0,3) === code.substring(0,3)
  ).slice(0, 6);

  return `<div class="rc">
    <div class="rh">
      <div class="dtc-badge" style="opacity:.6;">${code}</div>
      <div class="rmeta">
        <div class="rtitle">Code non trouvé dans la base</div>
        <div class="rsys">📂 ${sys}</div>
        <span class="sbadge sm">❓ Inconnu</span>
      </div>
    </div>
    <div style="padding:1.2rem 1.8rem;">
      <div class="alert aw"><span class="ai2">⚠️</span>
        <div>Ce code peut être spécifique au constructeur ${make ? "<strong>"+make+"</strong>" : ""} (P1xxx, B1xxx…).
        Consultez un scanner avancé (Launch X431, VCDS, Techstream) ou le manuel constructeur.</div>
      </div>
      <div class="alert ai"><span class="ai2">💡</span>
        <div><strong>Préfixe ${prefix}xxx = ${sys}</strong><br>
        Code commençant par 1 = code constructeur spécifique à la marque.</div>
      </div>
      ${similar.length ? `
      <div style="margin-top:1rem;">
        <div class="sec-title" style="margin-bottom:.7rem;">Codes similaires dans notre base</div>
        <div class="cg" style="grid-template-columns:repeat(auto-fill,minmax(250px,1fr));">
          ${similar.map(c => chipHTML(c)).join("")}
        </div>
      </div>` : ""}
    </div>
  </div>`;
}

// ─────────────────────────────────────────
// MODE RECHERCHE (DTC / Symptôme)
// ─────────────────────────────────────────
function setSearchMode(mode, btn) {
  document.querySelectorAll(".stab").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById("dtcSearchPane").classList.toggle("hidden", mode !== "dtc");
  document.getElementById("symptomSearchPane").classList.toggle("hidden", mode !== "symptom");
  document.getElementById("historyPane").classList.toggle("hidden", mode !== "history");
}

// ─────────────────────────────────────────
// RECHERCHE PAR SYMPTÔME
// ─────────────────────────────────────────
function searchSymptom() {
  const query = document.getElementById("symptomInput").value.toLowerCase().trim();
  const results = document.getElementById("symptomResults");
  if (!query) return;

  const matches = new Map();
  SYMPTOM_INDEX.forEach(entry => {
    const score = entry.symptom.reduce((acc, s) =>
      acc + (query.includes(s) ? 2 : s.split(" ").some(w => query.includes(w) && w.length > 3) ? 1 : 0), 0);
    if (score > 0) {
      entry.codes.forEach(code => {
        if (DTC_DB[code]) {
          const existing = matches.get(code) || 0;
          matches.set(code, existing + score);
        }
      });
    }
  });

  if (!matches.size) {
    results.innerHTML = `<div class="alert ai"><span class="ai2">🔍</span>
      Aucun résultat. Essayez: "tremble", "surchauffe", "abs", "airbag", "dpf", "turbo", "hybride"…</div>`;
    return;
  }

  const sorted = [...matches.entries()]
    .sort((a, b) => b[1] - a[1] || SEV_ORDER[DTC_DB[a[0]].severity] - SEV_ORDER[DTC_DB[b[0]].severity])
    .slice(0, 10);

  results.innerHTML = sorted.map(([code, score]) => {
    const d = DTC_DB[code];
    return `<div class="sr-item" onclick="loadCode('${code}')">
      <span class="cc-code">${code}</span>
      <div style="flex:1;">
        <div style="font-size:.85rem;font-weight:600;line-height:1.3;">${d.title}</div>
        <div style="font-size:.73rem;color:var(--m);">${d.system}</div>
      </div>
      <span class="sbadge ${SEV_CLASS[d.severity]}" style="font-size:.68rem;">${SEV_LABEL[d.severity]}</span>
    </div>`;
  }).join("");
}

document.getElementById("symptomInput").addEventListener("keydown", e => {
  if (e.key === "Enter") searchSymptom();
});

// ─────────────────────────────────────────
// HISTORIQUE
// ─────────────────────────────────────────
function renderHistory() {
  const pane = document.getElementById("historyPane");
  if (!searchHistory.length) {
    pane.innerHTML = `<div class="alert ai"><span class="ai2">📜</span>Aucun code recherché récemment.</div>`;
    return;
  }
  pane.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.8rem;">
      <span style="font-size:.78rem;color:var(--m);">Dernières recherches</span>
      <button class="print-btn" onclick="clearHistory()">🗑️ Effacer</button>
    </div>
    <div class="cg" style="grid-template-columns:repeat(auto-fill,minmax(250px,1fr));">
      ${searchHistory.filter(c => DTC_DB[c]).map(c => chipHTML(c)).join("")}
    </div>`;
}

function clearHistory() {
  searchHistory = [];
  localStorage.removeItem("autodiag_history");
  renderHistory();
}

// ─────────────────────────────────────────
// CHARGER UN CODE
// ─────────────────────────────────────────
function loadCode(code) {
  document.getElementById("dtcInput").value = code;
  setSearchMode("dtc", document.querySelectorAll(".stab")[0]);
  searchDTC();
  document.getElementById("resultArea").scrollIntoView({ behavior:"smooth" });
}

// ─────────────────────────────────────────
// IMPRIMER / COPIER
// ─────────────────────────────────────────
function printResult() { window.print(); }

function copyResult(code) {
  const d = DTC_DB[code];
  if (!d) return;
  const txt = [
    `═══════════════════════════════════`,
    `CODE DTC : ${code}`,
    `═══════════════════════════════════`,
    `Titre    : ${d.title}`,
    `Système  : ${d.system}`,
    `Sévérité : ${SEV_LABEL[d.severity]}`,
    `Coût est.: ${d.cost}`,
    ``,
    `Description:`,
    d.desc,
    ``,
    `Causes probables:`,
    ...d.causes.map((c,i) => ` ${i+1}. ${c[0]} (${c[1]})`),
    ``,
    `Guide de réparation:`,
    ...d.steps.map((s,i) => ` ${i+1}. ${s}`),
    ``,
    `Pièces:`,
    ...d.parts.map(p => ` - ${p[0]} : ${p[1]}`),
    d.warning ? `\n⚠️ ATTENTION: ${d.warning}` : "",
    ``,
    `Source: AutoDiag Pro`,
  ].filter(l => l !== undefined).join("\n");

  navigator.clipboard.writeText(txt)
    .then(() => { showToast("✅ Diagnostic copié !"); })
    .catch(() => { showToast("❌ Erreur copie"); });
}

function showToast(msg) {
  let t = document.getElementById("toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "toast";
    t.style.cssText = "position:fixed;bottom:2rem;right:2rem;background:#2ecc71;color:#fff;padding:.7rem 1.4rem;border-radius:10px;font-weight:700;font-size:.9rem;z-index:999;animation:fadeIn .3s;";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.display = "block";
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.style.display = "none"; }, 2500);
}

// ─────────────────────────────────────────
// CODES COMMUNS — RENDU
// ─────────────────────────────────────────
function renderCommonCodes(customCodes) {
  const codes = customCodes || PINNED_CODES.filter(c => DTC_DB[c]);
  document.getElementById("commonCodesGrid").innerHTML = codes.map(c => chipHTML(c)).join("");
}

function chipHTML(code) {
  const d = DTC_DB[code];
  if (!d) return "";
  const label = d.title.length > 54 ? d.title.substring(0, 54) + "…" : d.title;
  return `<div class="cc" onclick="loadCode('${code}')">
    <span class="cc-code">${code}</span>
    <span class="cc-desc">${label}</span>
    <span class="dot ${d.severity}"></span>
  </div>`;
}

// ─────────────────────────────────────────
// FILTRES RAPIDES
// ─────────────────────────────────────────
const FILTER_MAP = {
  "Tous":          null,
  "Moteur":        { sys:["Moteur"] },
  "⚡ Hybride/EV": { kw:["hybride","électrique","bev","fcev","hv","pile"] },
  "🛢️ Diesel/DPF": { kw:["diesel","dpf","fap","adblue","scr","préchauffage"] },
  "🔥 Turbo":      { kw:["turbo","suralimentation","boost","wastegate","intercooler"] },
  "🔄 CVT/Boîte":  { sys:["Transmission","CVT"] },
  "ABS / ESP":     { sys:["ABS","ESP"] },
  "🔌 TPMS":       { kw:["tpms","pneu"] },
  "🏋️ Suspension": { kw:["suspension","hauteur","soufflet","pneumatique"] },
  "🚗 Direction":  { sys:["Direction","EPS"] },
  "🔒 SRS/Airbag": { sys:["SRS","Airbag","Sécurité"] },
  "📡 Réseau CAN": { sys:["Réseau","CAN","Bus"] },
  "❄️ Clim":       { kw:["climatisation","réfrigérant"] },
};

function renderFilters() {
  document.getElementById("filterRow").innerHTML = Object.keys(FILTER_MAP).map(cat =>
    `<button class="fchip${cat==="Tous"?" active":""}" onclick="applyFilter('${cat}',this)">${cat}</button>`
  ).join("");
}

function applyFilter(cat, btn) {
  document.querySelectorAll("#filterRow .fchip").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  const f = FILTER_MAP[cat];
  if (!f) { renderCommonCodes(); return; }

  let codes = Object.keys(DTC_DB).filter(k => {
    const sysLow = DTC_DB[k].system.toLowerCase();
    const kwLow  = (DTC_DB[k].keywords || []).join(" ").toLowerCase();
    if (f.sys) return f.sys.some(s => sysLow.includes(s.toLowerCase()));
    if (f.kw)  return f.kw.some(w => sysLow.includes(w) || kwLow.includes(w));
    return false;
  });
  codes.sort((a, b) => SEV_ORDER[DTC_DB[a].severity] - SEV_ORDER[DTC_DB[b].severity]);
  renderCommonCodes(codes);
}

// ─────────────────────────────────────────
// MARQUES
// ─────────────────────────────────────────
function renderBrands() {
  document.getElementById("brandsGrid").innerHTML = BRANDS.map((b, i) =>
    `<div class="bcard" onclick="showBrandCodes(${i},this)">
      <div class="bicon">${b.icon}</div>
      <div class="bname">${b.name}</div>
      <div class="borigin">${b.origin}</div>
    </div>`
  ).join("");
}

function showBrandCodes(idx, el) {
  document.querySelectorAll(".bcard").forEach(c => c.classList.remove("active"));
  el.classList.add("active");
  const brand = BRANDS[idx];
  const validCodes = brand.codes.filter(c => DTC_DB[c]);
  document.getElementById("brandCodesArea").innerHTML = `
    <div class="sec-title" style="margin-top:1.4rem;">${brand.icon} Codes fréquents — ${brand.name}</div>
    <div class="cg">${validCodes.map(c => chipHTML(c)).join("")}</div>`;
}

// ─────────────────────────────────────────
// NAVIGATION PAR SYSTÈME
// ─────────────────────────────────────────
const SYS_MAP = {
  "Tous systèmes":     null,
  "Moteur Essence":    { sys:["Moteur — Allumage","Moteur — Gestion","Moteur — Sondes","Moteur — Ralenti","Moteur — Injecteur","Moteur — Débitmètre","Moteur — VVT","Moteur — Distribution","Moteur — Refroid","Moteur — EVAP","Moteur — Catalyseur"] },
  "Moteur Diesel":     { kw:["diesel","rampe","préchauffage","dpf","adblue","scr"] },
  "🔥 Turbo":          { kw:["turbo","suralimentation","boost","wastegate","intercooler"] },
  "⚡ Hybride/EV":     { kw:["hybride","électrique bev","fcev","hv","pile à combustible"] },
  "VVT / Distribution":{ sys:["VVT","Distribution","Calage"] },
  "EGR / EVAP / Cat":  { sys:["EGR","EVAP","Catalyseur"] },
  "ABS / ESP / Freins":{ sys:["ABS","ESP","Freins"] },
  "Transmission / CVT":{ sys:["Transmission","CVT"] },
  "Direction EPS":     { sys:["Direction","EPS"] },
  "Suspension":        { kw:["suspension","hauteur","soufflet"] },
  "TPMS / Pneus":      { kw:["tpms","pneu"] },
  "Électrique 12V":    { sys:["Batterie","Alternateur","Électrique —"] },
  "SRS / Airbag":      { sys:["SRS","Airbag","Sécurité"] },
  "Réseau CAN":        { sys:["Réseau","CAN","Bus"] },
  "Climatisation":     { kw:["climatisation","réfrigérant"] },
  "Antivol / IMMO":    { kw:["antivol","immo"] },
};

function renderSysFilter() {
  document.getElementById("sysFilterRow").innerHTML = Object.keys(SYS_MAP).map((s, i) =>
    `<button class="fchip${i===0?" active":""}" onclick="filterBySys('${s}',this)">${s}</button>`
  ).join("");
  filterBySys("Tous systèmes", document.querySelector("#sysFilterRow .fchip"));
}

function filterBySys(sys, btn) {
  document.querySelectorAll("#sysFilterRow .fchip").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  const f = SYS_MAP[sys];

  let codes = f ? Object.keys(DTC_DB).filter(k => {
    const sysLow = DTC_DB[k].system.toLowerCase();
    const kwLow  = (DTC_DB[k].keywords || []).join(" ").toLowerCase();
    if (f.sys) return f.sys.some(s => sysLow.includes(s.toLowerCase()));
    if (f.kw)  return f.kw.some(w => sysLow.includes(w) || kwLow.includes(w));
    return false;
  }) : Object.keys(DTC_DB);

  codes.sort((a, b) => SEV_ORDER[DTC_DB[a].severity] - SEV_ORDER[DTC_DB[b].severity]);
  document.getElementById("systemCodesGrid").innerHTML = codes.map(c => chipHTML(c)).join("");
}

// ─────────────────────────────────────────
// GLOSSAIRE
// ─────────────────────────────────────────
function renderGlossary() {
  const search = (document.getElementById("glossarySearch") || {}).value || "";
  const filtered = search
    ? GLOSSARY.filter(g => g.term.toLowerCase().includes(search.toLowerCase()) || g.def.toLowerCase().includes(search.toLowerCase()))
    : GLOSSARY;

  document.getElementById("glossaryGrid").innerHTML = filtered.length
    ? filtered.map(g => `
        <div class="cc" style="flex-direction:column;align-items:flex-start;gap:.3rem;cursor:default;">
          <span class="cc-code" style="font-size:.9rem;">${g.term}</span>
          <span class="cc-desc" style="line-height:1.5;">${g.def}</span>
        </div>`).join("")
    : `<div style="color:var(--m);font-size:.9rem;">Aucun terme trouvé pour "${search}"</div>`;
}

// ─────────────────────────────────────────
// ONGLETS
// ─────────────────────────────────────────
function switchTab(id, btn) {
  document.querySelectorAll(".tc").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".tb").forEach(b => b.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  btn.classList.add("active");
}

// ─────────────────────────────────────────
// ENTER KEY
// ─────────────────────────────────────────
document.getElementById("dtcInput").addEventListener("keydown", e => {
  if (e.key === "Enter") searchDTC();
});

// Auto-format input (majuscules)
document.getElementById("dtcInput").addEventListener("input", e => {
  const v = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
  e.target.value = v;
});

// ─────────────────────────────────────────
// INIT
// ─────────────────────────────────────────
(function init() {
  const total = Object.keys(DTC_DB).length;
  document.getElementById("totalCount").textContent = total;
  document.getElementById("s1").textContent = total + "+";
  document.getElementById("s2").textContent = BRANDS.length;

  renderFilters();
  renderCommonCodes();
  renderBrands();
  renderSysFilter();
  renderGlossary();
  renderHistory();
})();
