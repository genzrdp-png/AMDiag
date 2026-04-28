// =============================================
// BASE DE DONNÉES DTC — AutoDiag Pro
// 150+ codes OBD2 standards + constructeurs
// =============================================
const DTC_DB = {

// ═══════════════════════════════════════
// P00xx — MESURE DÉBIT / PRESSION AIR
// ═══════════════════════════════════════
"P0000":{ title:"Aucun défaut détecté", system:"Système — OK", severity:"low",
  desc:"Le système de diagnostic n'a détecté aucun code de défaut. Le véhicule fonctionne normalement.",
  causes:[["Aucune anomalie détectée","100%"]],
  steps:["Effacer les codes si code en mémoire","Faire un test routier pour confirmer"],
  parts:[], cost:"0€", warning:null, keywords:["ok","aucun","normal"]},

"P0010":{ title:"Circuit actionneur arbre à cames admission — Banc 1", system:"Moteur — VVT/VVTi", severity:"medium",
  desc:"Problème électrique sur l'actionneur (solénoïde) de calage variable de l'arbre à cames admission côté banc 1.",
  causes:[["Solénoïde VVT ouvert ou court-circuit","80%"],["Câblage endommagé","60%"],["Huile encrassée obstruant le solénoïde","50%"],["ECU défaillant","10%"]],
  steps:["Changer l'huile si >10 000km depuis le dernier vidange","Mesurer résistance solénoïde (spec: 6–14 Ω selon marque)","Vérifier alimentation 12V et masse","Nettoyer filtre solénoïde","Remplacer solénoïde si HS"],
  parts:[["Solénoïde VVT admission","40–150€"],["Joint solénoïde","5–15€"]], cost:"50–200€", warning:null, keywords:["vvt","arbre à cames","solénoïde","calage"]},

"P0011":{ title:"Calage arbre à cames admission — Avance excessive (Banc 1)", system:"Moteur — VVT/VVTi", severity:"medium",
  desc:"L'arbre à cames d'admission est trop avancé par rapport à la consigne ECU. Perte puissance, consommation accrue.",
  causes:[["Huile moteur vieille / mauvaise viscosité","90%"],["Solénoïde VVT encrassé","75%"],["Déphaseur bloqué","60%"],["Crépine solénoïde bouchée","50%"]],
  steps:["Changer l'huile et le filtre immédiatement","Nettoyer solénoïde VVT admission","Vérifier le déphaseur arbre à cames","Mesurer corrections sur scanner après vidange"],
  parts:[["Solénoïde VVT","40–150€"],["Déphaseur arbre à cames","150–400€"]], cost:"50–500€", warning:"Changer l'huile avant toute autre intervention.", keywords:["vvt","calage","avance","arbre à cames","vibration"]},

"P0012":{ title:"Calage arbre à cames admission — Retard excessif (Banc 1)", system:"Moteur — VVT/VVTi", severity:"medium",
  desc:"L'arbre à cames d'admission est trop retardé. Démarrage difficile, ralenti instable.",
  causes:[["Solénoïde VVT bloqué en position retard","75%"],["Huile moteur mauvaise qualité","70%"],["Déphaseur usé","50%"]],
  steps:["Changer huile","Tester solénoïde VVT","Vérifier déphaseur","Contrôler chaîne distribution"],
  parts:[["Solénoïde VVT","40–150€"]], cost:"50–450€", warning:null, keywords:["vvt","retard","arbre à cames","ralenti"]},

"P0016":{ title:"Corrélation position vilebrequin / arbre à cames admission — Banc 1", system:"Moteur — Distribution", severity:"high",
  desc:"Décalage détecté entre vilebrequin et arbre à cames. Chaîne de distribution étirée ou déphaseur HS.",
  causes:[["Chaîne de distribution étirée","80%"],["Déphaseur VVT bloqué","70%"],["Tendeur chaîne défectueux","65%"],["Capteur CMP ou CKP défectueux","30%"]],
  steps:["Vérifier bruits de claquement chaîne au démarrage froid","Contrôler jeu chaîne","Mesurer valeurs CMP/CKP sur scanner","Remplacer kit chaîne si nécessaire"],
  parts:[["Kit chaîne distribution","150–500€"],["Solénoïde VVT","50–150€"]], cost:"300–900€", warning:"Ne pas ignorer — risque casse moteur.", keywords:["chaîne","distribution","vilebrequin","arbre à cames","claquement"]},

"P0020":{ title:"Circuit actionneur arbre à cames admission — Banc 2", system:"Moteur — VVT Banc 2", severity:"medium",
  desc:"Même défaut que P0010 mais sur le banc 2 (moteurs V6/V8 avec double rangée de cylindres).",
  causes:[["Solénoïde VVT banc 2 HS","80%"],["Câblage endommagé","60%"],["Huile encrassée","50%"]],
  steps:["Identifier le banc 2 selon le modèle","Mesurer résistance solénoïde banc 2","Nettoyer ou remplacer solénoïde"],
  parts:[["Solénoïde VVT banc 2","40–150€"]], cost:"50–200€", warning:null, keywords:["vvt","banc 2","v6","v8"]},

"P0030":{ title:"Circuit chauffage sonde lambda amont — Banc 1", system:"Moteur — Sondes Lambda", severity:"medium",
  desc:"Le circuit de chauffage de la sonde lambda amont (avant catalyseur, banc 1) est en défaut.",
  causes:[["Sonde lambda amont HS (résistance chauffage grillée)","80%"],["Câblage sonde coupé","50%"],["Fusible chauffage sonde grillé","30%"]],
  steps:["Vérifier fusible chauffage sondes","Mesurer résistance chauffage sonde (spec: 3–30Ω)","Vérifier alimentation 12V sur fil chauffage","Remplacer sonde si chauffage HS"],
  parts:[["Sonde lambda amont B1","50–180€"]], cost:"70–220€", warning:null, keywords:["lambda","sonde","oxygène","chauffage"]},

"P0100":{ title:"Débitmètre d'air massique (MAF) — Panne circuit", system:"Moteur — Débitmètre MAF", severity:"medium",
  desc:"Signal MAF absent ou hors plage. Le moteur tourne en mode dégradé avec cartographie de secours.",
  causes:[["Débitmètre MAF sale ou HS","80%"],["Fuite d'air après le MAF","60%"],["Câblage MAF endommagé","40%"],["ECU HS","5%"]],
  steps:["Inspecter la durit de connexion MAF — chercher fissures","Mesurer signal MAF (varie de 0 à 100% selon régime)","Nettoyer le MAF avec spray spécial (ne pas toucher le fil)","Remplacer le MAF si signal absent"],
  parts:[["Débitmètre MAF","60–250€"],["Durit admission","20–50€"]], cost:"80–300€", warning:null, keywords:["maf","débitmètre","air","consommation","puissance"]},

"P0101":{ title:"Débitmètre MAF — Signal hors plage", system:"Moteur — Débitmètre MAF", severity:"medium",
  desc:"Le signal MAF est présent mais en dehors des valeurs attendues pour les conditions de conduite.",
  causes:[["MAF encrassé (signal erroné)","85%"],["Fuite d'air admission","60%"],["Filtre à air bouché","40%"]],
  steps:["Remplacer filtre à air","Nettoyer MAF","Vérifier absence de fuite admission","Contrôler durite turbine si turbo"],
  parts:[["Filtre à air","10–35€"],["MAF","60–250€"]], cost:"15–280€", warning:null, keywords:["maf","débitmètre","filtre","air"]},

"P0102":{ title:"Débitmètre MAF — Signal faible", system:"Moteur — Débitmètre MAF", severity:"medium",
  desc:"Le signal MAF est anormalement faible. Le moteur compense avec une cartographie d'urgence.",
  causes:[["MAF très encrassé","80%"],["Câblage masse MAF défectueux","50%"],["MAF HS","40%"]],
  steps:["Nettoyer ou remplacer MAF","Vérifier masse câblage","Contrôler alimentation 5V référence"],
  parts:[["Débitmètre MAF","60–250€"]], cost:"60–270€", warning:null, keywords:["maf","signal faible"]},

"P0103":{ title:"Débitmètre MAF — Signal élevé", system:"Moteur — Débitmètre MAF", severity:"medium",
  desc:"Signal MAF anormalement élevé. Souvent dû à un court-circuit sur le câblage.",
  causes:[["Court-circuit câblage MAF","70%"],["MAF défectueux","60%"]],
  steps:["Inspecter câblage MAF","Mesurer tensions","Remplacer MAF si HS"],
  parts:[["Débitmètre MAF","60–250€"]], cost:"60–270€", warning:null, keywords:["maf","signal élevé"]},

"P0110":{ title:"Capteur température air admission (IAT) — Panne circuit", system:"Moteur — Capteurs admission", severity:"low",
  desc:"Signal du capteur de température d'air d'admission absent ou incorrect.",
  causes:[["Capteur IAT défectueux (souvent intégré au MAF)","75%"],["Câblage endommagé","50%"]],
  steps:["Localiser capteur IAT (souvent intégré au MAF ou sur la durit)","Mesurer résistance (NTC: diminue avec la température)","Remplacer si hors spécification"],
  parts:[["Capteur IAT / MAF","30–200€"]], cost:"35–220€", warning:null, keywords:["température","air","admission","iat"]},

"P0115":{ title:"Capteur température liquide refroidissement (ECT) — Panne circuit", system:"Moteur — Refroidissement", severity:"medium",
  desc:"Signal du capteur de température du liquide de refroidissement absent ou incorrect. Consommation peut augmenter.",
  causes:[["Capteur ECT HS","80%"],["Câblage endommagé","50%"],["Corrosion connecteur","40%"]],
  steps:["Localiser capteur ECT (sur culasse ou thermostat)","Mesurer résistance (spec 80°C: ~150Ω, 20°C: ~2500Ω)","Vérifier câblage et connecteur","Remplacer capteur si hors spec"],
  parts:[["Capteur température ECT","15–60€"]], cost:"25–90€", warning:null, keywords:["température","refroidissement","ect","liquide"]},

"P0118":{ title:"Capteur ECT — Signal élevé / court-circuit", system:"Moteur — Refroidissement", severity:"medium",
  desc:"Le capteur de température liquide indique une valeur irréaliste élevée (circuit ouvert ou capteur HS).",
  causes:[["Capteur ECT ouvert (circuit cassé)","75%"],["Câblage coupé","50%"]],
  steps:["Mesurer résistance capteur","Vérifier câblage","Remplacer capteur"],
  parts:[["Capteur ECT","15–60€"]], cost:"25–90€", warning:null, keywords:["temperature","capteur","refroidissement"]},

"P0120":{ title:"Capteur position papillon (TPS) — Panne circuit A", system:"Moteur — Gestion throttle", severity:"medium",
  desc:"Signal du capteur de position papillon absent ou incorrect. Ralenti instable, accélération hésitante.",
  causes:[["TPS usé ou HS","80%"],["Câblage endommagé","50%"],["Corps papillon sale","40%"]],
  steps:["Nettoyer le corps papillon","Mesurer signal TPS (0% fermé, 100% plein gaz)","Vérifier alimentation 5V","Remplacer TPS si signal incohérent"],
  parts:[["Capteur TPS","20–80€"],["Corps papillon complet","80–300€"]], cost:"30–350€", warning:null, keywords:["papillon","tps","accélération","ralenti"]},

"P0121":{ title:"Capteur TPS — Signal hors plage", system:"Moteur — Gestion throttle", severity:"medium",
  desc:"Le signal TPS existe mais sort de la plage de fonctionnement attendue.",
  causes:[["TPS usé","80%"],["Corps papillon encrassé","50%"],["Décalage position TPS","40%"]],
  steps:["Nettoyer corps papillon","Vérifier apprentissage papillon (réinitialiser via scanner)","Remplacer TPS si usé"],
  parts:[["Capteur TPS","20–80€"]], cost:"30–200€", warning:null, keywords:["papillon","tps","apprentissage"]},

"P0128":{ title:"Thermostat — Température moteur insuffisante", system:"Moteur — Refroidissement", severity:"low",
  desc:"Le moteur n'atteint pas la température de fonctionnement normale. Thermostat bloqué ouvert.",
  causes:[["Thermostat bloqué ouvert","95%"],["Capteur ECT défectueux","20%"],["Thermostat mauvaise cote","10%"]],
  steps:["Observer température sur scanner pendant chauffe","Si <80°C après 10 min → thermostat HS","Remplacer thermostat","Purger circuit refroidissement"],
  parts:[["Thermostat + joint","15–60€"],["Liquide refroidissement","10–20€"]], cost:"50–200€", warning:null, keywords:["thermostat","température","chauffe","refroidissement","froid"]},

// ═══════════════════════════════════════
// P013x-P015x — SONDES LAMBDA
// ═══════════════════════════════════════
"P0130":{ title:"Sonde lambda amont — Signal hors plage (Banc 1)", system:"Moteur — Sondes Lambda", severity:"medium",
  desc:"Le signal de la sonde lambda amont (avant catalyseur, banc 1) est hors plage.",
  causes:[["Sonde lambda amont usée","80%"],["Fuite d'air admission","60%"],["Contamination sonde (huile, liquide)","40%"]],
  steps:["Observer signal sur scanner (doit osciller 0.1–0.9V rapidement)","Si signal lent ou plat → sonde HS","Vérifier fuites admission","Remplacer sonde amont"],
  parts:[["Sonde lambda amont B1","50–180€"]], cost:"80–250€", warning:null, keywords:["lambda","sonde","oxygène","mélange"]},

"P0131":{ title:"Sonde lambda amont — Signal bas / trop pauvre (Banc 1)", system:"Moteur — Sondes Lambda", severity:"medium",
  desc:"La sonde lambda amont lit en permanence un signal faible (mélange pauvre constant).",
  causes:[["Fuite d'air admission","80%"],["Sonde lambda HS","60%"],["Injecteur bouché","50%"]],
  steps:["Chercher fuites d'air avec spray","Vérifier pression carburant","Remplacer sonde si HS"],
  parts:[["Sonde lambda amont","50–180€"]], cost:"60–250€", warning:null, keywords:["lambda","pauvre","fuite","air"]},

"P0132":{ title:"Sonde lambda amont — Signal haut / trop riche (Banc 1)", system:"Moteur — Sondes Lambda", severity:"medium",
  desc:"La sonde lambda amont lit en permanence un signal élevé (mélange riche constant).",
  causes:[["Injecteur qui fuit","75%"],["Pression carburant trop élevée","50%"],["Sonde lambda HS","40%"]],
  steps:["Contrôler pression carburant","Tester injecteurs (fuites)","Remplacer sonde si HS"],
  parts:[["Sonde lambda amont","50–180€"]], cost:"60–300€", warning:null, keywords:["lambda","riche","injecteur","carburant"]},

"P0133":{ title:"Sonde lambda amont — Réponse lente (Banc 1)", system:"Moteur — Sondes Lambda", severity:"medium",
  desc:"La sonde lambda répond trop lentement. L'ECU ne peut pas corriger le mélange efficacement.",
  causes:[["Sonde lambda amont vieillissante","90%"],["Contamination sonde","30%"]],
  steps:["Remplacer sonde lambda amont (>100 000km = remplacement préventif justifié)"],
  parts:[["Sonde lambda amont","50–180€"]], cost:"70–220€", warning:null, keywords:["lambda","lente","vieille","usée"]},

"P0136":{ title:"Circuit sonde lambda aval (Banc 1)", system:"Moteur — Sondes Lambda", severity:"low",
  desc:"Problème sur le circuit de la sonde lambda après catalyseur (banc 1).",
  causes:[["Sonde lambda aval HS","75%"],["Câblage endommagé par chaleur","50%"]],
  steps:["Vérifier câblage sous le véhicule","Mesurer résistance chauffage sonde","Remplacer sonde aval si HS"],
  parts:[["Sonde lambda aval B1","40–150€"]], cost:"60–200€", warning:null, keywords:["lambda","aval","catalyseur"]},

"P0138":{ title:"Sonde lambda aval — Signal haut / mélange riche (Banc 1)", system:"Moteur — Sondes Lambda", severity:"low",
  desc:"La sonde aval lit en permanence un signal riche. Catalyseur peut être HS.",
  causes:[["Catalyseur saturé de carburant","60%"],["Sonde aval HS","50%"],["Injections excessives","40%"]],
  steps:["Vérifier codes mélange associés (P0172)","Observer signal sonde aval vs amont","Remplacer sonde ou catalyseur selon diagnostic"],
  parts:[["Sonde lambda aval","40–150€"],["Catalyseur","200–600€"]], cost:"60–700€", warning:null, keywords:["lambda","aval","riche","catalyseur"]},

// ═══════════════════════════════════════
// P016x-P017x — CALAGE / MÉLANGE
// ═══════════════════════════════════════
"P0171":{ title:"Mélange air/carburant — Trop pauvre (Banc 1)", system:"Moteur — Gestion carburant", severity:"medium",
  desc:"L'ECU corrige en richesse au-delà de la limite. Trop d'air ou insuffisance de carburant.",
  causes:[["Fuite d'air (admission, collecteur, durit)","85%"],["Injecteurs encrassés/faible débit","70%"],["Sonde lambda usée","60%"],["Pompe carburant pression basse","50%"],["MAF encrassé","45%"]],
  steps:["Contrôler STFT et LTFT sur scanner (valeurs positives élevées = pauvre)","Chercher fuites d'air avec spray carb","Nettoyer MAF et injecteurs","Vérifier pression carburant (3–4 bars)","Remplacer sonde lambda si signal lent"],
  parts:[["Sonde lambda amont","50–180€"],["Kit nettoyage injecteurs","20–50€"],["MAF","60–200€"]], cost:"50–400€", warning:null, keywords:["pauvre","lean","mélange","fuite","air","injecteur","pompe"]},

"P0172":{ title:"Mélange air/carburant — Trop riche (Banc 1)", system:"Moteur — Gestion carburant", severity:"medium",
  desc:"L'ECU corrige en pauvreté au-delà de la limite. Trop de carburant ou manque d'air.",
  causes:[["Injecteurs qui fuient ou débit excessif","80%"],["Sonde lambda amont HS","65%"],["Pression carburant trop élevée","50%"],["Filtre à air bouché","40%"],["Purge canister bloquée ouverte","35%"]],
  steps:["Contrôler STFT/LTFT (valeurs négatives = trop riche)","Inspecter et changer le filtre à air","Vérifier la purge canister","Contrôler pression carburant (>4.5 bars = suspect)","Tester fuites injecteurs (bougies noires)"],
  parts:[["Filtre à air","10–30€"],["Sonde lambda","50–180€"],["Purge canister","30–100€"]], cost:"30–300€", warning:null, keywords:["riche","rich","mélange","injecteur","carburant","filtre"]},

"P0174":{ title:"Mélange air/carburant — Trop pauvre (Banc 2)", system:"Moteur — Gestion carburant Banc 2", severity:"medium",
  desc:"Même défaut P0171 mais sur le banc 2 (V6/V8). Vérifier côté droit du moteur.",
  causes:[["Fuite d'air côté banc 2","85%"],["Injecteurs banc 2 encrassés","70%"],["Sonde lambda banc 2 usée","60%"]],
  steps:["Localiser banc 2 (côté droit généralement)","Chercher fuites côté banc 2","Tester sonde lambda B2 amont","Nettoyer injecteurs B2"],
  parts:[["Sonde lambda B2 amont","50–180€"]], cost:"50–400€", warning:null, keywords:["banc 2","pauvre","v6","v8"]},

"P0175":{ title:"Mélange air/carburant — Trop riche (Banc 2)", system:"Moteur — Gestion carburant Banc 2", severity:"medium",
  desc:"Même défaut P0172 mais sur le banc 2. Injecteurs banc 2 à vérifier.",
  causes:[["Injecteurs banc 2 qui fuient","80%"],["Sonde lambda B2 HS","65%"]],
  steps:["Tester injecteurs banc 2","Vérifier sonde lambda B2 amont","Contrôler canister côté B2"],
  parts:[["Sonde lambda B2 amont","50–180€"]], cost:"50–300€", warning:null, keywords:["banc 2","riche","v6","v8"]},

// ═══════════════════════════════════════
// P018x-P019x — PRESSION CARBURANT
// ═══════════════════════════════════════
"P0181":{ title:"Capteur température carburant — Signal hors plage", system:"Moteur — Alimentation carburant", severity:"low",
  desc:"Signal du capteur de température carburant hors plage. Sur diesels principalement.",
  causes:[["Capteur température carburant HS","80%"],["Câblage endommagé","40%"]],
  steps:["Localiser capteur (filtre carburant ou boîtier pompe)","Mesurer résistance","Remplacer si HS"],
  parts:[["Capteur température carburant","15–50€"]], cost:"25–80€", warning:null, keywords:["carburant","température","diesel"]},

"P0190":{ title:"Capteur pression rampe carburant — Panne circuit", system:"Moteur — Rampe commune Diesel", severity:"high",
  desc:"Signal capteur pression rampe absent ou hors plage. Moteur peut refuser de démarrer.",
  causes:[["Capteur pression rampe HS","85%"],["Câblage oxydé","70%"],["Pompe HP déficiente","40%"],["Injecteurs qui fuient","30%"]],
  steps:["Vérifier câblage et connecteur capteur rampe","Mesurer tension 5V ref et masse","Contrôler pression rampe sur scanner (démarrage >200 bars diesel)","Remplacer capteur si lecture erronée"],
  parts:[["Capteur pression rampe","40–150€"]], cost:"80–250€", warning:"Diesel — ne pas conduire avec ce code actif.", keywords:["rampe","pression","diesel","common rail"]},

"P0191":{ title:"Capteur pression rampe — Signal hors plage", system:"Moteur — Rampe commune", severity:"high",
  desc:"Pression rampe lue par le capteur est hors des limites normales de fonctionnement.",
  causes:[["Régulateur pression HS","75%"],["Injecteurs qui fuient (pression chute)","60%"],["Pompe HP usée","50%"]],
  steps:["Comparer pression réelle vs consigne sur scanner","Vérifier fuites injecteurs","Tester régulateur pression","Contrôler pompe HP"],
  parts:[["Régulateur pression FMV","80–200€"],["Injecteur","150–400€ pièce"]], cost:"100–600€", warning:null, keywords:["pression","rampe","injecteur","pompe HP"]},

// ═══════════════════════════════════════
// P02xx — CIRCUITS INJECTEURS
// ═══════════════════════════════════════
"P0200":{ title:"Circuit commande injecteur — Panne", system:"Moteur — Injecteurs", severity:"high",
  desc:"Problème électrique général sur le circuit de commande des injecteurs.",
  causes:[["Court-circuit câblage injecteur","70%"],["Injecteur ouvert/HS","65%"],["Relais injecteurs HS","40%"],["ECU HS","15%"]],
  steps:["Identifier l'injecteur problématique","Mesurer résistance injecteurs (spec: 11–17Ω essence, 0.5–1Ω diesel)","Vérifier alimentation relais injecteurs","Remplacer injecteur si HS"],
  parts:[["Injecteur essence","50–200€"],["Injecteur diesel","150–500€"]], cost:"80–600€", warning:null, keywords:["injecteur","injection","cylindre"]},

"P0201":{ title:"Circuit injecteur cylindre 1 — Court-circuit ou ouvert", system:"Moteur — Injecteur Cyl.1", severity:"high",
  desc:"Problème électrique sur l'injecteur du cylindre 1. Peut provoquer ratés d'allumage.",
  causes:[["Injecteur Cyl.1 HS (résistance hors spec)","80%"],["Câblage injecteur Cyl.1 coupé","50%"]],
  steps:["Mesurer résistance injecteur Cyl.1","Vérifier câblage","Remplacer injecteur si HS"],
  parts:[["Injecteur Cyl.1","50–500€"]], cost:"80–600€", warning:null, keywords:["injecteur","cylindre 1"]},

"P0202":{ title:"Circuit injecteur cylindre 2", system:"Moteur — Injecteur Cyl.2", severity:"high",
  desc:"Problème électrique sur l'injecteur du cylindre 2.",
  causes:[["Injecteur Cyl.2 HS","80%"],["Câblage coupé","50%"]],
  steps:["Mesurer résistance","Remplacer si HS"],
  parts:[["Injecteur Cyl.2","50–500€"]], cost:"80–600€", warning:null, keywords:["injecteur","cylindre 2"]},

"P0203":{ title:"Circuit injecteur cylindre 3", system:"Moteur — Injecteur Cyl.3", severity:"high",
  desc:"Problème électrique sur l'injecteur du cylindre 3.",
  causes:[["Injecteur Cyl.3 HS","80%"]],
  steps:["Mesurer résistance","Remplacer si HS"],
  parts:[["Injecteur Cyl.3","50–500€"]], cost:"80–600€", warning:null, keywords:["injecteur","cylindre 3"]},

"P0204":{ title:"Circuit injecteur cylindre 4", system:"Moteur — Injecteur Cyl.4", severity:"high",
  desc:"Problème électrique sur l'injecteur du cylindre 4.",
  causes:[["Injecteur Cyl.4 HS","80%"]],
  steps:["Mesurer résistance","Remplacer si HS"],
  parts:[["Injecteur Cyl.4","50–500€"]], cost:"80–600€", warning:null, keywords:["injecteur","cylindre 4"]},

// ═══════════════════════════════════════
// P03xx — ALLUMAGE / RATÉS
// ═══════════════════════════════════════
"P0300":{ title:"Ratés d'allumage aléatoires — Plusieurs cylindres", system:"Moteur — Allumage", severity:"high",
  desc:"Ratés d'allumage sur plusieurs cylindres. Le moteur tremble, la consommation augmente, le catalyseur peut être endommagé.",
  causes:[["Bougies d'allumage usées","90%"],["Bobines d'allumage défectueuses","80%"],["Injecteurs encrassés","65%"],["Pression carburant insuffisante","50%"],["Fuite joint de culasse","20%"]],
  steps:["Remplacer les bougies (toutes en même temps)","Permuter bobines entre cylindres — le code suit-il la bobine?","Tester compression sur tous cylindres","Vérifier pression carburant","Contrôler injecteurs"],
  parts:[["Kit bougies NGK/Denso","20–80€"],["Bobine d'allumage (unité)","30–120€"]], cost:"50–600€", warning:"Voyant orange clignotant = catalyseur en danger. Réparer rapidement.", keywords:["ratés","allumage","tremblement","vibration","bougie","bobine","misfire"]},

"P0301":{ title:"Ratés d'allumage — Cylindre 1", system:"Moteur — Allumage Cyl.1", severity:"high",
  desc:"Ratés d'allumage sur le cylindre 1 uniquement.",
  causes:[["Bougie Cyl.1 usée","90%"],["Bobine Cyl.1 HS","80%"],["Injecteur Cyl.1 encrassé","60%"],["Compression Cyl.1 faible","30%"]],
  steps:["Remplacer bougie Cyl.1","Permuter bobine Cyl.1 vers autre cylindre","Mesurer compression Cyl.1 (min 10 bars)","Tester injecteur Cyl.1"],
  parts:[["Bougie Cyl.1","5–25€"],["Bobine Cyl.1","30–120€"]], cost:"30–250€", warning:null, keywords:["raté","cylindre 1","bougie","bobine"]},

"P0302":{ title:"Ratés d'allumage — Cylindre 2", system:"Moteur — Allumage Cyl.2", severity:"high",
  desc:"Ratés d'allumage sur le cylindre 2.",
  causes:[["Bougie Cyl.2 usée","90%"],["Bobine Cyl.2 HS","80%"],["Injecteur Cyl.2","60%"]],
  steps:["Remplacer bougie Cyl.2","Permuter bobine","Test compression","Test injecteur"],
  parts:[["Bougie Cyl.2","5–25€"],["Bobine Cyl.2","30–120€"]], cost:"30–250€", warning:null, keywords:["raté","cylindre 2"]},

"P0303":{ title:"Ratés d'allumage — Cylindre 3", system:"Moteur — Allumage Cyl.3", severity:"high",
  desc:"Ratés d'allumage sur le cylindre 3.",
  causes:[["Bougie Cyl.3 usée","90%"],["Bobine Cyl.3 HS","80%"],["Injecteur Cyl.3","60%"]],
  steps:["Remplacer bougie Cyl.3","Permuter bobine","Test compression"],
  parts:[["Bougie Cyl.3","5–25€"],["Bobine Cyl.3","30–120€"]], cost:"30–250€", warning:null, keywords:["raté","cylindre 3"]},

"P0304":{ title:"Ratés d'allumage — Cylindre 4", system:"Moteur — Allumage Cyl.4", severity:"high",
  desc:"Ratés d'allumage sur le cylindre 4.",
  causes:[["Bougie Cyl.4 usée","90%"],["Bobine Cyl.4 HS","80%"],["Injecteur Cyl.4","60%"]],
  steps:["Remplacer bougie Cyl.4","Permuter bobine","Test compression"],
  parts:[["Bougie Cyl.4","5–25€"],["Bobine Cyl.4","30–120€"]], cost:"30–250€", warning:null, keywords:["raté","cylindre 4"]},

"P0305":{ title:"Ratés d'allumage — Cylindre 5", system:"Moteur — Allumage Cyl.5", severity:"high",
  desc:"Ratés d'allumage sur le cylindre 5 (moteurs 5/6/8 cylindres).",
  causes:[["Bougie Cyl.5 usée","90%"],["Bobine Cyl.5 HS","80%"]],
  steps:["Remplacer bougie Cyl.5","Permuter bobine","Test compression"],
  parts:[["Bougie Cyl.5","5–25€"],["Bobine Cyl.5","30–120€"]], cost:"30–250€", warning:null, keywords:["raté","cylindre 5"]},

"P0306":{ title:"Ratés d'allumage — Cylindre 6", system:"Moteur — Allumage Cyl.6", severity:"high",
  desc:"Ratés d'allumage sur le cylindre 6.",
  causes:[["Bougie Cyl.6 usée","90%"],["Bobine Cyl.6 HS","80%"]],
  steps:["Remplacer bougie Cyl.6","Permuter bobine","Test compression"],
  parts:[["Bougie Cyl.6","5–25€"],["Bobine Cyl.6","30–120€"]], cost:"30–250€", warning:null, keywords:["raté","cylindre 6"]},

"P0316":{ title:"Ratés d'allumage au démarrage — 1000 premiers tours", system:"Moteur — Allumage démarrage", severity:"medium",
  desc:"Ratés d'allumage détectés uniquement lors des premières rotations au démarrage. Bougies froides ou injecteurs qui fuient.",
  causes:[["Bougies usées (démarrage difficile à froid)","80%"],["Injecteurs qui fuient (carburant s'accumule la nuit)","60%"],["Pression carburant qui chute (anti-retour pompe HS)","40%"]],
  steps:["Remplacer bougies","Tester fuites injecteurs (moteur arrêté, observer pression rampe qui chute)","Vérifier anti-retour pompe à carburant"],
  parts:[["Kit bougies","20–80€"],["Anti-retour pompe","20–60€"]], cost:"30–200€", warning:null, keywords:["démarrage","raté","froid","matin"]},

// ═══════════════════════════════════════
// P033x-P034x — CAPTEURS POSITION
// ═══════════════════════════════════════
"P0335":{ title:"Circuit capteur position vilebrequin (CKP) — Banc A", system:"Moteur — Capteur vilebrequin", severity:"high",
  desc:"Signal CKP absent. Peut provoquer non-démarrage ou calages intempestifs.",
  causes:[["Capteur CKP défectueux","85%"],["Câblage endommagé","70%"],["Disque phonique endommagé","40%"],["Jeu capteur/cible incorrect","30%"]],
  steps:["Localiser CKP (bas moteur près du volant)","Inspecter câblage","Mesurer résistance (200–900Ω selon marque)","Vérifier jeu (0.5–1.5mm)","Contrôler dents disque phonique","Remplacer si HS"],
  parts:[["Capteur CKP","30–120€"]], cost:"60–200€", warning:"Véhicule peut ne pas démarrer.", keywords:["vilebrequin","ckp","démarrage","calage"]},

"P0336":{ title:"Capteur CKP — Signal intermittent", system:"Moteur — Capteur vilebrequin", severity:"high",
  desc:"Le signal CKP est présent mais intermittent. Peut causer des calages aléatoires.",
  causes:[["Câblage CKP frêlé ou qui frotte","70%"],["Capteur CKP en fin de vie","60%"],["Connecteur oxydé","50%"]],
  steps:["Inspecter câblage CKP sur toute sa longueur","Chercher points de frottement","Nettoyer connecteur","Remplacer capteur"],
  parts:[["Capteur CKP","30–120€"]], cost:"60–180€", warning:null, keywords:["vilebrequin","intermittent","calage"]},

"P0340":{ title:"Circuit capteur position arbre à cames (CMP) — Banc 1", system:"Moteur — Capteur arbre à cames", severity:"high",
  desc:"Signal CMP absent. Démarrage difficile ou raté.",
  causes:[["Capteur CMP défectueux","80%"],["Câblage endommagé","65%"],["Roue dentée AàC endommagée","30%"],["Calage distribution incorrect","20%"]],
  steps:["Localiser CMP (culasse)","Vérifier alimentation 5V","Mesurer résistance","Comparer signaux CKP/CMP","Remplacer capteur si HS"],
  parts:[["Capteur CMP","25–100€"]], cost:"50–180€", warning:null, keywords:["arbre à cames","cmp","démarrage"]},

"P0341":{ title:"Capteur CMP — Signal hors plage (Banc 1)", system:"Moteur — Capteur arbre à cames", severity:"medium",
  desc:"Signal CMP présent mais incohérent avec la position vilebrequin.",
  causes:[["Déphaseur VVT bloqué","60%"],["Capteur CMP usé","50%"],["Chaîne distribution étirée","40%"]],
  steps:["Vérifier calage distribution","Tester déphaseur VVT","Remplacer capteur si HS"],
  parts:[["Capteur CMP","25–100€"]], cost:"50–500€", warning:null, keywords:["arbre à cames","calage","distribution"]},

// ═══════════════════════════════════════
// P036x-P039x — BOBINES / PRÉCHAUFFAGE
// ═══════════════════════════════════════
"P0350":{ title:"Circuit primaire / secondaire bobine d'allumage — Panne", system:"Moteur — Allumage", severity:"high",
  desc:"Problème général sur le circuit bobine d'allumage. Tous cylindres potentiellement affectés.",
  causes:[["Bobine(s) HS","80%"],["Câblage bobines endommagé","50%"],["Relais allumage HS","30%"]],
  steps:["Mesurer résistance bobines primaire (0.5–2Ω) et secondaire (6000–15000Ω)","Vérifier alimentation 12V","Remplacer bobines HS"],
  parts:[["Bobine d'allumage (unité)","30–120€"],["Kit bobines (4)","100–400€"]], cost:"100–500€", warning:null, keywords:["bobine","allumage","raté"]},

"P0380":{ title:"Circuit préchauffage diesel — Banc 1", system:"Moteur Diesel — Bougies préchauffage", severity:"medium",
  desc:"Problème circuit bougies de préchauffage. Démarrage froid difficile ou impossible.",
  causes:[["Une ou plusieurs bougies HS","85%"],["Relais préchauffage défectueux","70%"],["Câblage endommagé","40%"],["Boîtier commande préchauffage HS","20%"]],
  steps:["Mesurer résistance chaque bougie (spec: 0.5–2Ω)","Vérifier alimentation 12V pendant préchauffage","Tester relais préchauffage","Remplacer bougies HS (toutes si >100 000km)"],
  parts:[["Bougie préchauffage (unité)","10–30€"],["Kit 4 bougies","40–120€"],["Relais préchauffage","20–60€"]], cost:"60–200€", warning:null, keywords:["préchauffage","diesel","démarrage","froid","bougie"]},

// ═══════════════════════════════════════
// P04xx — SYSTÈME D'ÉMISSIONS
// ═══════════════════════════════════════
"P0400":{ title:"Recirculation gaz échappement (EGR) — Débit insuffisant", system:"Moteur — Dépollution EGR", severity:"medium",
  desc:"La soupape EGR ne recircule pas assez de gaz. Émissions NOx élevées.",
  causes:[["Soupape EGR encrassée / bloquée","90%"],["Capteur différentiel pression EGR HS","60%"],["Durit EGR bouchée","50%"],["Actionneur EGR défectueux","40%"]],
  steps:["Démonter soupape EGR","Nettoyer à l'aérosol décalaminant","Vérifier déplacement via actuateur scanner","Contrôler capteur pression différentielle","Remplacer si bloquée ou percée"],
  parts:[["Soupape EGR","80–300€"],["Kit nettoyage","15–30€"],["Capteur ΔP EGR","40–100€"]], cost:"30–450€", warning:null, keywords:["egr","recirculation","gaz","échappement","nox","diesel"]},

"P0401":{ title:"EGR — Débit insuffisant détecté", system:"Moteur — EGR", severity:"medium",
  desc:"Le test EGR confirme un débit insuffisant de gaz recirculés lors du test actif.",
  causes:[["Soupape EGR très encrassée","90%"],["Collecteur admission encrassé","60%"],["Capteur MAP perturbé","30%"]],
  steps:["Décalaminer la soupape EGR et le collecteur admission","Nettoyer le papillon et le collecteur d'admission","Tester actuation soupape EGR avec scanner"],
  parts:[["Soupape EGR","80–300€"],["Spray décalaminant","15–30€"]], cost:"30–400€", warning:null, keywords:["egr","débit","collecteur","admission"]},

"P0402":{ title:"EGR — Débit excessif détecté", system:"Moteur — EGR", severity:"medium",
  desc:"Trop de gaz EGR sont recirculés. Soupape bloquée ouverte ou capteur HS.",
  causes:[["Soupape EGR bloquée ouverte","70%"],["Capteur ΔP EGR HS","50%"]],
  steps:["Tester soupape EGR (actuation scanner)","Vérifier capteur ΔP","Remplacer soupape si bloquée ouverte"],
  parts:[["Soupape EGR","80–300€"]], cost:"80–350€", warning:null, keywords:["egr","soupape","bloquée","ouverte"]},

"P0404":{ title:"EGR — Circuit hors plage ou bloqué ouvert", system:"Moteur — EGR", severity:"medium",
  desc:"L'EGR est commandé en fermeture mais reste ouvert, ou est commandé en ouverture mais reste fermé.",
  causes:[["Soupape EGR grippée","80%"],["Actionneur électrique HS","50%"]],
  steps:["Tester actuation soupape avec scanner","Démonter et inspecter mécaniquement","Nettoyer ou remplacer"],
  parts:[["Soupape EGR","80–300€"]], cost:"80–350€", warning:null, keywords:["egr","bloquée","grippée"]},

"P0410":{ title:"Injection d'air secondaire — Débit insuffisant", system:"Moteur — Dépollution", severity:"medium",
  desc:"Le système d'injection d'air secondaire (post-démarrage) ne fonctionne pas correctement.",
  causes:[["Pompe à air secondaire HS","75%"],["Soupape de coupure bloquée","60%"],["Durites obstruées","40%"]],
  steps:["Localiser pompe à air secondaire","Tester électriquement (12V, résistance)","Vérifier durites et soupape","Remplacer pompe si HS"],
  parts:[["Pompe air secondaire","100–400€"],["Soupape coupure","40–150€"]], cost:"100–600€", warning:null, keywords:["air secondaire","pompe","démarrage","émissions"]},

"P0420":{ title:"Efficacité catalyseur en dessous du seuil (Banc 1)", system:"Moteur — Catalyseur", severity:"medium",
  desc:"Le catalyseur n'est plus efficace. La sonde aval oscille comme la sonde amont.",
  causes:[["Catalyseur usé / empoisonné","85%"],["Sonde lambda aval défectueuse","50%"],["Codes mélange non résolus (P0171/P0172)","45%"],["Liquide refroidissement dans échappement","20%"]],
  steps:["Résoudre d'abord les codes mélange associés","Observer signaux sondes amont vs aval sur scanner","Si sonde aval oscille rapidement → catalyseur HS","Remplacer catalyseur confirmé HS"],
  parts:[["Catalyseur","150–600€"],["Sonde lambda aval","40–150€"]], cost:"100–700€", warning:"Contrôle technique: ce code peut faire échouer le CT.", keywords:["catalyseur","pot","cat","émissions","contrôle technique"]},

"P0421":{ title:"Efficacité catalyseur faible (Banc 1) — Démarrage à froid", system:"Moteur — Catalyseur", severity:"medium",
  desc:"Le catalyseur est insuffisant uniquement au démarrage à froid. Peut être dû à un catalyseur vieillissant.",
  causes:[["Catalyseur vieillissant","80%"],["Sonde aval HS","40%"]],
  steps:["Observer signaux sondes au démarrage","Comparer avec véhicule similaire sain","Envisager remplacement catalyseur"],
  parts:[["Catalyseur","150–600€"]], cost:"100–650€", warning:null, keywords:["catalyseur","démarrage","froid"]},

"P0430":{ title:"Efficacité catalyseur en dessous du seuil (Banc 2)", system:"Moteur — Catalyseur Banc 2", severity:"medium",
  desc:"Même défaut P0420 sur le banc 2 (V6/V8 avec deux catalyseurs).",
  causes:[["Catalyseur B2 usé","85%"],["Sonde lambda aval B2 HS","50%"]],
  steps:["Même procédure que P0420 côté banc 2"],
  parts:[["Catalyseur B2","150–600€"]], cost:"100–700€", warning:null, keywords:["catalyseur","banc 2"]},

"P0440":{ title:"Système EVAP — Dysfonctionnement général", system:"Moteur — EVAP anti-évaporation", severity:"low",
  desc:"Fuite détectée dans le circuit de récupération des vapeurs d'essence.",
  causes:[["Bouchon réservoir mal fermé ou percé","80%"],["Purge canister défectueuse","65%"],["Durites EVAP fissurées","50%"],["Clapet rétention HS","30%"]],
  steps:["Vérifier bouchon réservoir (retirer et remettre correctement)","Inspecter durites EVAP","Tester purge canister via scanner","Test de fumée EVAP si disponible"],
  parts:[["Bouchon réservoir","10–30€"],["Purge canister","30–100€"]], cost:"15–200€", warning:null, keywords:["evap","vapeur","réservoir","bouchon","fuite","essence"]},

"P0441":{ title:"Système EVAP — Flux de purge incorrect", system:"Moteur — EVAP", severity:"low",
  desc:"La purge EVAP ne fonctionne pas au moment approprié ou avec le bon débit.",
  causes:[["Électrovanne purge canister HS","70%"],["Durit purge bouchée ou débranchée","60%"],["Canister saturé","30%"]],
  steps:["Localiser électrovanne purge (admission moteur)","Tester en 12V directement — doit s'ouvrir/fermer","Vérifier durites purge","Remplacer électrovanne si HS"],
  parts:[["Électrovanne purge EVAP","25–80€"]], cost:"35–120€", warning:null, keywords:["purge","canister","evap","électrovanne"]},

"P0442":{ title:"Système EVAP — Petite fuite détectée", system:"Moteur — EVAP", severity:"low",
  desc:"Petite fuite dans le système EVAP (0.5–1mm). Souvent bouchon réservoir.",
  causes:[["Bouchon réservoir défaillant","80%"],["Joint bouchon usé","60%"],["Micro-fissure durite EVAP","30%"]],
  steps:["Essayer un bouchon réservoir neuf en premier","Inspecter joints durites","Test fumée si bouchon ne résout pas"],
  parts:[["Bouchon réservoir","10–30€"]], cost:"10–150€", warning:null, keywords:["evap","fuite","bouchon","réservoir"]},

"P0446":{ title:"Circuit de contrôle soupape EVAP — Panne", system:"Moteur — EVAP", severity:"low",
  desc:"Problème électrique sur la soupape de contrôle de ventilation du canister.",
  causes:[["Soupape EVAP HS","70%"],["Câblage endommagé","50%"]],
  steps:["Localiser soupape EVAP","Tester électriquement","Remplacer si HS"],
  parts:[["Soupape EVAP","25–80€"]], cost:"35–120€", warning:null, keywords:["evap","soupape","canister"]},

"P0455":{ title:"Système EVAP — Grande fuite détectée", system:"Moteur — EVAP", severity:"low",
  desc:"Grande fuite dans le système EVAP (>1mm). Vérifier bouchon et durites principales.",
  causes:[["Bouchon réservoir très mal fermé ou absent","85%"],["Durit EVAP principale débranchée","70%"],["Canister fissuré","30%"]],
  steps:["Vérifier bouchon réservoir en premier","Inspecter toutes durites EVAP","Test fumée recommandé"],
  parts:[["Bouchon réservoir","10–30€"],["Durit EVAP","15–50€"]], cost:"10–200€", warning:null, keywords:["evap","grande fuite","bouchon"]},

// ═══════════════════════════════════════
// P05xx — CONTRÔLE VITESSE / RÉGIME
// ═══════════════════════════════════════
"P0500":{ title:"Capteur vitesse véhicule (VSS) — Panne", system:"Moteur/ABS — Capteur vitesse", severity:"medium",
  desc:"Signal VSS absent. Compteur peut être mort, régulateur de vitesse inopérant.",
  causes:[["Capteur VSS HS","80%"],["Câblage endommagé","60%"],["Roue phonique ABS endommagée","30%"]],
  steps:["Vérifier signal vitesse sur scanner en roulant","Localiser capteur VSS (boîte ou ABS)","Mesurer signal","Remplacer si HS"],
  parts:[["Capteur VSS","25–80€"]], cost:"50–150€", warning:null, keywords:["vitesse","compteur","vss","abs"]},

"P0505":{ title:"Système de contrôle du ralenti (IAC) — Panne", system:"Moteur — Ralenti", severity:"medium",
  desc:"Le système de contrôle du ralenti est défaillant. Ralenti irrégulier ou calage moteur.",
  causes:[["Vanne IAC encrassée ou HS","80%"],["Corps papillon sale","70%"],["Fuite d'air au ralenti","50%"]],
  steps:["Nettoyer corps papillon et vanne IAC","Vérifier fuites d'air au ralenti","Tester vanne IAC électriquement","Réinitialiser apprentissage papillon via scanner"],
  parts:[["Vanne IAC","30–100€"],["Kit nettoyage corps papillon","15–25€"]], cost:"30–180€", warning:null, keywords:["ralenti","iac","papillon","instable","calage"]},

"P0506":{ title:"Vitesse de ralenti trop basse", system:"Moteur — Ralenti", severity:"medium",
  desc:"Le régime de ralenti est en dessous de la consigne. Risque de calage.",
  causes:[["Corps papillon encrassé","75%"],["Vanne IAC encrassée","70%"],["Fuite d'air","50%"],["EGR ouvert au ralenti","30%"]],
  steps:["Nettoyer corps papillon","Nettoyer vanne IAC","Chercher fuites admission","Vérifier EGR"],
  parts:[["Kit nettoyage corps papillon","15–25€"]], cost:"20–200€", warning:null, keywords:["ralenti","bas","calage","papillon"]},

"P0507":{ title:"Vitesse de ralenti trop élevée", system:"Moteur — Ralenti", severity:"medium",
  desc:"Le régime de ralenti est au-dessus de la consigne. Moteur s'emballe au ralenti.",
  causes:[["Fuite d'air admission (aspiration parasite)","80%"],["Vanne IAC bloquée ouverte","60%"],["Corps papillon sale","40%"]],
  steps:["Chercher fuites d'air (durit admission fendue, joint collecteur)","Tester vanne IAC","Nettoyer corps papillon","Réinitialiser apprentissage"],
  parts:[["Vanne IAC","30–100€"],["Joint collecteur","15–40€"]], cost:"20–200€", warning:null, keywords:["ralenti","élevé","emballement","papillon","fuite"]},

// ═══════════════════════════════════════
// P055x-P056x — ÉLECTRIQUE / BATTERIE
// ═══════════════════════════════════════
"P0551":{ title:"Capteur pression direction assistée — Signal hors plage", system:"Direction — Assistance hydraulique", severity:"low",
  desc:"Signal du capteur de pression de la direction assistée hors plage. Surcharge moteur au braquage.",
  causes:[["Capteur pression DA HS","75%"],["Fuite hydraulique direction","40%"]],
  steps:["Vérifier niveau huile direction assistée","Mesurer signal capteur","Remplacer capteur si HS"],
  parts:[["Capteur pression DA","30–100€"]], cost:"40–150€", warning:null, keywords:["direction","assistée","pression"]},

"P0560":{ title:"Tension système — Panne générale", system:"Électrique — Batterie/Alternateur", severity:"medium",
  desc:"Tension système instable ou hors plage. Alternateur ou batterie suspects.",
  causes:[["Batterie défectueuse","75%"],["Alternateur HS","70%"],["Connexions oxydées","50%"]],
  steps:["Mesurer tension moteur éteint (12.4–12.8V)","Mesurer tension moteur en marche (13.8–14.8V)","Nettoyer bornes batterie","Tester alternateur"],
  parts:[["Batterie","80–200€"],["Alternateur","120–350€"]], cost:"80–500€", warning:null, keywords:["batterie","alternateur","tension","électrique"]},

"P0562":{ title:"Tension système — Trop basse", system:"Électrique — Batterie/Alternateur", severity:"high",
  desc:"Tension en dessous de 10V. Alternateur HS ou batterie déchargée/défectueuse.",
  causes:[["Batterie déchargée ou défectueuse","85%"],["Alternateur HS","80%"],["Connexions oxydées","50%"],["Forte consommation parasite","30%"]],
  steps:["Mesurer tension batterie moteur éteint","Démarrer — tension doit monter à 13.8–14.8V","Si <13.5V → alternateur suspect","Tester batterie (charge/décharge)","Mesurer consommation parasite si batterie se décharge seule"],
  parts:[["Batterie 12V","80–200€"],["Alternateur reconditionné","120–350€"]], cost:"80–450€", warning:null, keywords:["batterie","alternateur","tension","basse","décharge"]},

"P0563":{ title:"Tension système — Trop haute", system:"Électrique — Alternateur/Régulateur", severity:"high",
  desc:"Tension au-dessus de 16V. Régulateur de tension alternateur HS. Risque de dommages électronique.",
  causes:[["Régulateur alternateur HS","90%"],["Capteur tension ECU HS","20%"]],
  steps:["Mesurer tension en marche","Si >15.5V → alternateur à remplacer immédiatement","Vérifier si modules électroniques endommagés"],
  parts:[["Alternateur (neuf ou reconditionné)","150–400€"]], cost:"180–450€", warning:"🚨 Arrêter le moteur — risque d'endommager tous les modules ECU.", keywords:["alternateur","tension","haute","régulateur"]},

// ═══════════════════════════════════════
// P06xx — COMMUNICATION ECU
// ═══════════════════════════════════════
"P0600":{ title:"Bus CAN — Panne liaison série", system:"Électronique — Bus CAN", severity:"high",
  desc:"Problème communication bus CAN. Plusieurs systèmes peuvent être inopérants.",
  causes:[["Module ECU/BCM défectueux","60%"],["Câblage CAN endommagé","70%"],["Court-circuit ligne CAN","50%"],["Tension alimentation modules incorrecte","40%"]],
  steps:["Vérifier toutes les masses carrosserie","Mesurer résistance CAN (doit être ~60Ω entre CAN H et CAN L moteur éteint)","Isoler modules un par un","Vérifier alimentation chaque module"],
  parts:[["BCM Body Control Module","200–600€"],["ECU moteur","300–1000€"]], cost:"100–1200€", warning:"Diagnostic spécialisé recommandé.", keywords:["can","bus","communication","modules","ecm","bcm"]},

"P0606":{ title:"Module de contrôle ECU/PCM — Panne interne", system:"Électronique — ECU/PCM", severity:"critical",
  desc:"L'ECU a détecté une panne interne. Module à reconfigurer ou remplacer.",
  causes:[["ECU endommagé (surtension, eau, choc)","70%"],["Erreur firmware","30%"],["Câblage alimentation ECU défectueux","40%"]],
  steps:["Vérifier alimentation et masses ECU","Essayer de réinitialiser ECU (déconnecter batterie 15min)","Scanner spécialisé pour lire codes internes","Envoyer ECU en réparation spécialisée"],
  parts:[["ECU reconditionné","200–800€"],["Programmation ECU","100–300€"]], cost:"200–1200€", warning:"🚨 Risque de non-démarrage complet.", keywords:["ecu","pcm","module","interne","panne"]},

// ═══════════════════════════════════════
// P07xx — TRANSMISSION
// ═══════════════════════════════════════
"P0700":{ title:"Système contrôle transmission — Panne TCM", system:"Transmission automatique", severity:"high",
  desc:"La boîte automatique a enregistré des codes. Lire les codes TCM spécifiques.",
  causes:[["Codes TCM spécifiques à lire","100%"],["Solénoïdes boîte HS","60%"],["Huile boîte dégradée","50%"]],
  steps:["Lire codes TCM détaillés avec scanner avancé","Vérifier et changer huile boîte si >60 000km","Tester solénoïdes"],
  parts:[["Huile ATF (5L)","30–80€"],["Solénoïde boîte","40–200€"]], cost:"50–2000€", warning:"Lire les codes TCM secondaires pour diagnostic précis.", keywords:["transmission","boîte","automatique","tcm","solénoïde"]},

"P0711":{ title:"Capteur température huile transmission — Signal hors plage", system:"Transmission automatique", severity:"medium",
  desc:"Signal capteur température huile boîte incorrect. Peut déclencher mode sécurité.",
  causes:[["Capteur TFT HS","75%"],["Huile boîte très dégradée","40%"]],
  steps:["Changer huile boîte","Mesurer résistance capteur TFT","Remplacer si HS"],
  parts:[["Capteur température TFT","25–80€"],["Huile ATF","30–80€"]], cost:"40–200€", warning:null, keywords:["transmission","température","huile","atf"]},

"P0715":{ title:"Capteur vitesse turbine — Circuit d'entrée", system:"Transmission automatique", severity:"medium",
  desc:"Signal capteur vitesse turbine absent. Passage de rapports anormal.",
  causes:[["Capteur vitesse turbine HS","80%"],["Contamination magnétique","50%"],["Câblage endommagé","40%"]],
  steps:["Localiser capteur vitesse turbine (boîte)","Nettoyer pointe magnétique","Mesurer résistance","Remplacer si HS"],
  parts:[["Capteur vitesse turbine","30–100€"]], cost:"60–200€", warning:null, keywords:["transmission","turbine","vitesse","rapport"]},

"P0720":{ title:"Capteur vitesse sortie transmission — Panne", system:"Transmission automatique", severity:"medium",
  desc:"Capteur de vitesse en sortie de boîte défaillant. Passages de rapports incorrects.",
  causes:[["Capteur sortie HS","75%"],["Câblage endommagé","50%"]],
  steps:["Localiser capteur (sortie boîte)","Mesurer résistance ou signal","Remplacer si HS"],
  parts:[["Capteur sortie boîte","25–80€"]], cost:"50–150€", warning:null, keywords:["transmission","sortie","vitesse","boîte"]},

"P0730":{ title:"Rapport de transmission incorrect", system:"Transmission automatique", severity:"high",
  desc:"La boîte n'engage pas le bon rapport. Mode sécurité possible.",
  causes:[["Solénoïde passage de rapport HS","75%"],["Huile boîte très dégradée / niveau bas","70%"],["Capteurs vitesse défectueux","40%"]],
  steps:["Vérifier niveau huile boîte","Changer huile et filtre boîte","Tester solénoïdes","Scanner pour actuation solénoïdes"],
  parts:[["Huile ATF + filtre","60–150€"],["Solénoïde boîte","50–250€"]], cost:"80–800€", warning:null, keywords:["boîte","rapport","solénoïde","automatique"]},

// ═══════════════════════════════════════
// P08xx-P09xx — CONTRÔLE CARBURANT AVANCÉ
// ═══════════════════════════════════════
"P0841":{ title:"Circuit pression huile transmission — Signal bas", system:"Transmission automatique", severity:"high",
  desc:"Pression huile boîte insuffisante. Risque de dommages boîte.",
  causes:[["Niveau huile bas","80%"],["Pompe huile boîte HS","60%"],["Capteur pression HS","40%"]],
  steps:["Vérifier niveau huile boîte","Changer huile si dégradée","Mesurer pression réelle","Contrôler pompe huile boîte"],
  parts:[["Huile ATF","30–80€"],["Pompe huile boîte","200–600€"]], cost:"50–800€", warning:"Ne pas rouler — risque casse boîte.", keywords:["pression","huile","boîte","transmission"]},

// ═══════════════════════════════════════
// P1xxx — CODES CONSTRUCTEURS ESSENCES
// ═══════════════════════════════════════
"P1000":{ title:"Tests readiness OBD2 non complétés", system:"Système OBD2 — Moniteurs", severity:"low",
  desc:"Les tests de surveillance OBD2 n'ont pas tous été complétés depuis le dernier effacement des codes.",
  causes:[["Codes récemment effacés","90%"],["Cycle de conduite incomplet","80%"]],
  steps:["Effectuer un cycle de conduite complet (ville + autoroute)","Inclure accélérations, décélérations, vitesse stabilisée","Relire les readiness monitors sur scanner"],
  parts:[], cost:"0€", warning:"Ce code peut faire échouer le contrôle technique si les moniteurs ne sont pas complétés.", keywords:["readiness","monitors","contrôle technique","effacement"]},

"P1130":{ title:"Correction carburant court terme — Limite atteinte (Toyota/Lexus Banc 1)", system:"Moteur — Gestion carburant (Toyota)", severity:"medium",
  desc:"Code constructeur Toyota. La correction court terme a atteint sa limite — le système ne peut plus compenser.",
  causes:[["Fuite d'air admission","80%"],["Sonde lambda amont vieillissante","70%"],["MAF encrassé","60%"]],
  steps:["Contrôler STFT et LTFT","Nettoyer MAF","Chercher fuites admission","Remplacer sonde lambda si >120 000km"],
  parts:[["Sonde lambda amont","50–180€"],["MAF","60–200€"]], cost:"60–300€", warning:null, keywords:["toyota","lexus","correction","carburant","stft"]},

"P1135":{ title:"Sonde lambda ratio air/carburant — Préchauffage lent (Toyota Banc 1)", system:"Moteur — Sonde AF (Toyota)", severity:"medium",
  desc:"Code constructeur Toyota/Lexus. La sonde A/F à large bande met trop de temps à chauffer.",
  causes:[["Sonde A/F vieillissante","80%"],["Câblage chauffage HS","50%"]],
  steps:["Mesurer temps de chauffe sonde (doit être <20s moteur chaud)","Mesurer résistance chauffage","Remplacer sonde si lente"],
  parts:[["Sonde A/F Toyota","80–250€"]], cost:"100–300€", warning:null, keywords:["toyota","sonde","af","chauffage","lambda"]},

"P1300":{ title:"Circuit allumage primaire — Défaut (Toyota/Lexus)", system:"Moteur — Allumage (Toyota)", severity:"high",
  desc:"Code constructeur Toyota. Problème sur le signal primaire bobine d'allumage. Code P1305/P1310/P1315 pour cylindre spécifique.",
  causes:[["Bobine(s) d'allumage défectueuse(s)","85%"],["Bougies usées","70%"],["Câblage bobine endommagé","40%"]],
  steps:["Chercher code cylindre associé (P1305=Cyl1, P1310=Cyl2…)","Remplacer bougie puis bobine du cylindre concerné","Vérifier câblage et connecteur bobine"],
  parts:[["Bobine Toyota (unité)","40–120€"],["Bougies NGK Iridium kit","30–80€"]], cost:"60–400€", warning:null, keywords:["toyota","allumage","bobine","primaire"]},

"P1349":{ title:"Système VVTi — Panne (Toyota)", system:"Moteur — VVTi (Toyota)", severity:"medium",
  desc:"Code constructeur Toyota. Le système VVTi ne fonctionne pas correctement.",
  causes:[["Huile moteur mauvaise qualité","90%"],["Solénoïde OCV encrassé","80%"],["Déphaseur bloqué","60%"]],
  steps:["Changer huile et filtre IMMÉDIATEMENT","Nettoyer OCV solénoïde","Tester déphaseur avec scanner","Remplacer OCV si HS"],
  parts:[["Solénoïde OCV Toyota","50–150€"],["Déphaseur","150–400€"]], cost:"50–500€", warning:null, keywords:["toyota","vvti","solénoïde","ocv","huile"]},

"P1400":{ title:"Système EGR — Capteur pression (Nissan/Mitsubishi)", system:"Moteur — EGR (constructeur)", severity:"medium",
  desc:"Code constructeur Nissan/Mitsubishi. Capteur pression différentiel EGR défectueux.",
  causes:[["Capteur ΔP EGR HS","80%"],["Soupape EGR encrassée","60%"]],
  steps:["Nettoyer soupape EGR","Tester capteur ΔP","Remplacer capteur si HS"],
  parts:[["Capteur ΔP EGR","40–120€"]], cost:"50–250€", warning:null, keywords:["nissan","mitsubishi","egr","capteur","pression"]},

"P1456":{ title:"Fuite EVAP — Côté réservoir (Honda)", system:"Moteur — EVAP (Honda)", severity:"low",
  desc:"Code constructeur Honda. Fuite côté réservoir dans le système anti-évaporation.",
  causes:[["Bouchon réservoir Honda mal fermé/HS","85%"],["Clapet remplissage défectueux","50%"],["Durit réservoir percée","30%"]],
  steps:["Vérifier bouchon réservoir Honda","Inspecter durites EVAP côté réservoir","Test fumée si bouchon ne résout pas"],
  parts:[["Bouchon réservoir Honda","15–40€"]], cost:"15–150€", warning:null, keywords:["honda","evap","réservoir","bouchon","fuite"]},

"P1491":{ title:"Soupape recirculation EGR — Levée insuffisante (Honda)", system:"Moteur — EGR (Honda)", severity:"medium",
  desc:"Code constructeur Honda. L'EGR ne s'ouvre pas suffisamment.",
  causes:[["Soupape EGR encrassée (Honda CVT)","85%"],["Capteur levée EGR HS","50%"]],
  steps:["Nettoyer soupape EGR","Mesurer signal capteur levée","Remplacer EGR si nécessaire"],
  parts:[["Soupape EGR Honda","100–300€"]], cost:"50–350€", warning:null, keywords:["honda","egr","levée","soupape"]},

"P1564":{ title:"Interrupteur régulateur vitesse SET — Panne (Nissan)", system:"Confort — Régulateur (Nissan)", severity:"low",
  desc:"Code constructeur Nissan. Interrupteur SET du régulateur de vitesse défaillant.",
  causes:[["Interrupteur SET HS","80%"],["Câblage interrupteur volant","40%"]],
  steps:["Tester interrupteur SET au multimètre","Vérifier contacteur tournant","Remplacer interrupteur si HS"],
  parts:[["Interrupteur régulateur","20–80€"]], cost:"30–120€", warning:null, keywords:["nissan","régulateur","vitesse","set"]},

// ═══════════════════════════════════════
// P2xxx — CODES OBD2 AVANCÉS
// ═══════════════════════════════════════
"P2004":{ title:"Soupape de swirl admission — Bloquée ouverte (Banc 1)", system:"Moteur — Admission variable", severity:"medium",
  desc:"La soupape de swirl (tourbillon) dans l'admission est bloquée en position ouverte.",
  causes:[["Axe soupape grippé","75%"],["Câblage actionneur HS","50%"]],
  steps:["Localiser soupape swirl (collecteur admission)","Nettoyer axe et mécanisme","Tester actionneur électrique","Remplacer si bloquée"],
  parts:[["Kit soupape swirl","80–250€"]], cost:"80–350€", warning:null, keywords:["swirl","admission","soupape","collecteur"]},

"P2009":{ title:"Circuit de commande soupape d'admission variable — Signal bas", system:"Moteur — Admission variable", severity:"medium",
  desc:"Signal de commande soupape admission variable trop bas. Court-circuit probable.",
  causes:[["Court-circuit câblage soupape","65%"],["Actionneur soupape HS","55%"]],
  steps:["Vérifier câblage actionneur","Mesurer résistance","Remplacer actionneur si HS"],
  parts:[["Actionneur soupape admission","50–200€"]], cost:"60–250€", warning:null, keywords:["admission","variable","soupape"]},

"P2096":{ title:"Correction carburant aval catalyseur — Trop pauvre (Banc 1)", system:"Moteur — Post-catalyseur", severity:"medium",
  desc:"La correction de carburant post-catalyseur atteint la limite pauvre. Catalyseur ou sonde aval.",
  causes:[["Sonde lambda aval vieillissante","75%"],["Fuite d'air collecteur","60%"],["Catalyseur dégradé","50%"]],
  steps:["Vérifier codes mélange associés","Observer signal sonde aval (stable ~0.7V)","Chercher fuites admission","Remplacer sonde aval si >100 000km"],
  parts:[["Sonde lambda aval","40–150€"]], cost:"60–250€", warning:null, keywords:["catalyseur","sonde","aval","correction","mélange"]},

"P2097":{ title:"Correction carburant aval catalyseur — Trop riche (Banc 1)", system:"Moteur — Post-catalyseur", severity:"medium",
  desc:"Correction post-catalyseur à la limite riche. Injecteurs ou catalyseur suspect.",
  causes:[["Injecteurs qui fuient","70%"],["Catalyseur saturé","50%"],["Sonde aval HS","40%"]],
  steps:["Tester injecteurs","Vérifier signal sonde aval","Inspecter catalyseur"],
  parts:[["Sonde lambda aval","40–150€"]], cost:"60–300€", warning:null, keywords:["catalyseur","riche","injecteur","sonde"]},

"P2119":{ title:"Corps papillon electronique — Position réelle hors cible", system:"Moteur — Throttle body", severity:"medium",
  desc:"Le papillon électronique n'atteint pas la position commandée. Accélération hésitante.",
  causes:[["Corps papillon encrassé","80%"],["Moteur papillon HS","60%"],["Capteur TPS HS","40%"]],
  steps:["Nettoyer corps papillon","Réinitialiser apprentissage papillon via scanner","Remplacer corps papillon si moteur HS"],
  parts:[["Corps papillon complet","100–350€"]], cost:"30–400€", warning:null, keywords:["papillon","electronique","etb","accélération"]},

"P2135":{ title:"Capteur TPS — Corrélation incohérente signaux A et B", system:"Moteur — Throttle body", severity:"medium",
  desc:"Les deux signaux du capteur TPS (A et B) ne correspondent pas. Corps papillon à remplacer.",
  causes:[["Corps papillon (capteur TPS intégré) usé","85%"],["Câblage endommagé","30%"]],
  steps:["Observer les deux signaux TPS sur scanner","Vérifier câblage","Remplacer corps papillon"],
  parts:[["Corps papillon complet","100–350€"]], cost:"120–400€", warning:null, keywords:["papillon","tps","capteur","signaux"]},

"P2181":{ title:"Système refroidissement — Températures hors plage normale", system:"Moteur — Thermostat", severity:"medium",
  desc:"Température moteur hors plage attendue. Thermostat à ouverture variable suspect.",
  causes:[["Thermostat variable HS","85%"],["Capteur ECT HS","30%"]],
  steps:["Observer température sur scanner en chauffe","Vérifier ouverture thermostat (82–88°C selon modèle)","Remplacer thermostat"],
  parts:[["Thermostat","20–80€"]], cost:"50–200€", warning:null, keywords:["thermostat","température","refroidissement"]},

"P2187":{ title:"Mélange trop pauvre au ralenti (Banc 1)", system:"Moteur — Gestion carburant", severity:"medium",
  desc:"Mélange pauvre spécifiquement au ralenti. Fuite d'air ou injecteur bouché.",
  causes:[["Fuite d'air collecteur admission","80%"],["Injecteur encrassé faible débit ralenti","60%"],["EGR bloquée ouverte au ralenti","40%"]],
  steps:["Chercher fuites admission","Nettoyer injecteurs","Vérifier EGR au ralenti"],
  parts:[["Joint collecteur admission","15–60€"]], cost:"20–300€", warning:null, keywords:["ralenti","pauvre","lean","fuite","injecteur"]},

"P2188":{ title:"Mélange trop riche au ralenti (Banc 1)", system:"Moteur — Gestion carburant", severity:"medium",
  desc:"Mélange riche uniquement au ralenti. Injecteur qui fuit ou pression carburant excessive.",
  causes:[["Injecteur qui fuit au ralenti","75%"],["Pression carburant trop haute","50%"]],
  steps:["Tester fuites injecteurs (clé sur MAR sans démarrer — pression doit tenir)","Vérifier régulateur pression","Remplacer injecteurs si fuites"],
  parts:[["Kit injecteurs","200–600€"]], cost:"100–700€", warning:null, keywords:["ralenti","riche","injecteur","fuite"]},

// ═══════════════════════════════════════
// P217x — SURCHAUFFE / TEMPÉRATURES
// ═══════════════════════════════════════
"P0217":{ title:"Surchauffe moteur — Condition détectée", system:"Moteur — Refroidissement", severity:"critical",
  desc:"La température moteur a dépassé le seuil critique. Risque majeur de casse moteur (joint culasse, voilage).",
  causes:[["Niveau liquide bas / fuite","95%"],["Thermostat bloqué fermé","80%"],["Pompe à eau HS","70%"],["Ventilateur HS","60%"],["Joint de culasse percé","40%"]],
  steps:["ARRÊTER le moteur IMMÉDIATEMENT","Attendre refroidissement complet avant d'ouvrir le bouchon","Vérifier niveau et couleur liquide (mousse = joint culasse)","Chercher fuites externes","Vérifier ventilateur et thermostat","Test compression si surchauffe confirmée"],
  parts:[["Thermostat","15–60€"],["Pompe à eau","50–200€"],["Joint de culasse","100–400€"]], cost:"50–3000€", warning:"🚨 ARRÊT IMMÉDIAT OBLIGATOIRE — Risque casse moteur totale.", keywords:["surchauffe","température","eau","joint culasse","radiateur","fumée"]},

// ═══════════════════════════════════════
// B0xxx — CODES CARROSSERIE / SÉCURITÉ
// ═══════════════════════════════════════
"B0001":{ title:"Déploiement airbag conducteur — Circuit défectueux", system:"Sécurité — Airbag SRS", severity:"high",
  desc:"Problème électrique circuit airbag conducteur. Le système SRS est compromis.",
  causes:[["Connecteur sous siège débranché/oxydé","75%"],["Module airbag volant HS","60%"],["Contacteur tournant HS","55%"],["Module SRS défectueux","25%"]],
  steps:["⚠️ Couper le contact et attendre 10 min","Vérifier connecteur jaune sous siège conducteur","Inspecter contacteur tournant","Mesurer résistance circuit (spec: 2–4Ω)","Confier à un professionnel SRS"],
  parts:[["Contacteur tournant","60–200€"],["Module airbag","200–500€"]], cost:"80–700€", warning:"🚨 NE PAS MANIPULER LES AIRBAGS — Risque de déclenchement accidentel.", keywords:["airbag","srs","conducteur","sécurité","volant"]},

"B0002":{ title:"Déploiement airbag passager — Circuit défectueux", system:"Sécurité — Airbag SRS", severity:"high",
  desc:"Problème circuit airbag passager.",
  causes:[["Module airbag passager HS","70%"],["Câblage endommagé","60%"],["Module SRS HS","25%"]],
  steps:["Couper contact, attendre 10 min","Vérifier câblage airbag passager","Confier à professionnel SRS"],
  parts:[["Module airbag passager","200–600€"]], cost:"100–800€", warning:"🚨 Confier à professionnel SRS uniquement.", keywords:["airbag","srs","passager","sécurité"]},

"B0010":{ title:"Airbag rideau côté conducteur — Circuit", system:"Sécurité — Airbag SRS", severity:"high",
  desc:"Problème sur le circuit de l'airbag rideau côté conducteur.",
  causes:[["Câblage airbag rideau pincé (montant A)","65%"],["Module airbag rideau HS","55%"]],
  steps:["Couper contact, attendre 10 min","Inspecter câblage montant A","Confier à professionnel SRS"],
  parts:[["Module airbag rideau","300–800€"]], cost:"150–900€", warning:"🚨 Professionnel SRS uniquement.", keywords:["airbag","rideau","srs","conducteur"]},

"B0019":{ title:"Capteur choc latéral conducteur — Circuit", system:"Sécurité — Capteurs choc", severity:"high",
  desc:"Problème sur le capteur de choc latéral côté conducteur.",
  causes:[["Capteur choc HS","75%"],["Câblage endommagé","50%"]],
  steps:["Localiser capteur choc (porte ou siège conducteur)","Vérifier câblage","Remplacer capteur si HS","Effacer code avec scanner SRS"],
  parts:[["Capteur choc latéral","50–200€"]], cost:"80–300€", warning:"Confier à professionnel si doute.", keywords:["choc","capteur","srs","conducteur"]},

"B1000":{ title:"Module SRS — Panne interne", system:"Sécurité — Airbag SRS", severity:"critical",
  desc:"Le module de contrôle SRS a détecté une panne interne. Tous les airbags peuvent être inopérants.",
  causes:[["Module SRS endommagé (corrosion, eau)","70%"],["Mémoire crash (ancien accident)","60%"],["Surtension","30%"]],
  steps:["Ne pas tenter de réparer seul","Vérifier historique accident du véhicule","Remplacer ou réinitialiser module SRS (spécialiste)"],
  parts:[["Module SRS","300–800€"],["Réinitialisation SRS","80–200€"]], cost:"200–1000€", warning:"🚨 Système airbag complètement hors service.", keywords:["srs","module","airbag","crash","accident"]},

"B1001":{ title:"ECU SRS — Erreur alimentation", system:"Sécurité — Airbag SRS", severity:"high",
  desc:"Le module SRS ne reçoit pas la bonne alimentation électrique.",
  causes:[["Fusible SRS grillé","70%"],["Câblage alimentation SRS endommagé","60%"]],
  steps:["Vérifier fusible SRS","Contrôler alimentation module SRS","Vérifier masse SRS"],
  parts:[["Fusible SRS","2–10€"]], cost:"10–200€", warning:null, keywords:["srs","alimentation","fusible"]},

// ═══════════════════════════════════════
// C0xxx — CODES CHÂSSIS / ABS / ESP
// ═══════════════════════════════════════
"C0031":{ title:"Circuit capteur ABS roue avant droite — Panne", system:"ABS/ESP — Capteur roue", severity:"high",
  desc:"Signal capteur vitesse roue AV-DR absent. ABS et ESP désactivés.",
  causes:[["Capteur ABS AV-DR HS","85%"],["Câblage endommagé (frottement roue)","70%"],["Bague magnétique roulement endommagée","50%"],["Air gap trop important","30%"]],
  steps:["Lever roue AV-DR et inspecter capteur","Vérifier câble sur toute sa longueur","Mesurer résistance (passif: 1000–2500Ω)","Contrôler bague magnétique roulement","Remplacer capteur et/ou roulement"],
  parts:[["Capteur ABS AV-DR","25–80€"],["Roulement avec anneau ABS","60–200€"]], cost:"60–280€", warning:"ABS et ESP désactivés — prudence par temps mouillé.", keywords:["abs","esp","roue","capteur","avant","droit","freinage"]},

"C0034":{ title:"Circuit capteur ABS roue avant gauche — Panne", system:"ABS/ESP — Capteur roue", severity:"high",
  desc:"Signal capteur vitesse roue AV-GA absent. ABS et ESP désactivés.",
  causes:[["Capteur ABS AV-GA HS","85%"],["Câblage endommagé","70%"],["Bague roulement HS","50%"]],
  steps:["Lever roue AV-GA","Inspecter capteur","Mesurer résistance","Remplacer capteur et/ou roulement"],
  parts:[["Capteur ABS AV-GA","25–80€"],["Roulement AV-GA","60–200€"]], cost:"60–280€", warning:"ABS désactivé.", keywords:["abs","esp","avant","gauche","capteur"]},

"C0037":{ title:"Circuit capteur ABS roue arrière droite — Panne", system:"ABS/ESP — Capteur roue", severity:"high",
  desc:"Signal capteur vitesse roue AR-DR absent.",
  causes:[["Capteur ABS AR-DR HS","85%"],["Câblage endommagé","70%"],["Bague roulement HS","50%"]],
  steps:["Lever roue AR-DR","Inspecter capteur et câblage","Mesurer résistance","Remplacer si HS"],
  parts:[["Capteur ABS AR-DR","25–80€"],["Roulement AR-DR","50–180€"]], cost:"60–260€", warning:"ABS désactivé.", keywords:["abs","arrière","droit","capteur"]},

"C0040":{ title:"Circuit capteur ABS roue arrière gauche — Panne", system:"ABS/ESP — Capteur roue", severity:"high",
  desc:"Signal capteur vitesse roue AR-GA absent.",
  causes:[["Capteur ABS AR-GA HS","85%"],["Câblage endommagé","70%"],["Bague roulement HS","50%"]],
  steps:["Lever roue AR-GA","Inspecter capteur et câblage","Mesurer résistance","Remplacer si HS"],
  parts:[["Capteur ABS AR-GA","25–80€"],["Roulement AR-GA","50–180€"]], cost:"60–260€", warning:"ABS désactivé.", keywords:["abs","arrière","gauche","capteur"]},

"C0051":{ title:"Capteur angle volant (SAS) — Panne", system:"Direction — ESP/SAS", severity:"medium",
  desc:"Capteur angle volant défectueux ou non étalonné. ESP peut être inopérant.",
  causes:[["Capteur angle volant HS","70%"],["Non réinitialisé après intervention direction","60%"],["Batterie débranchée (perte mémoire)","40%"]],
  steps:["Réinitialiser le capteur SAS via scanner (procédure d'étalonnage)","Si l'étalonnage ne résout pas → remplacer capteur","Vérifier après remplacement colonne/épure"],
  parts:[["Capteur angle volant SAS","80–300€"]], cost:"30–400€", warning:null, keywords:["esp","volant","angle","direction","sas"]},

"C0061":{ title:"Pression liquide de frein — Signal bas", system:"Freins — Capteur pression", severity:"high",
  desc:"La pression dans le circuit de frein est insuffisante détectée par le capteur.",
  causes:[["Fuite dans le circuit de frein","80%"],["Capteur pression frein HS","50%"],["Niveau liquide frein bas","70%"]],
  steps:["Vérifier niveau liquide frein IMMÉDIATEMENT","Chercher fuites (maître-cylindre, flexibles, étriers)","Purger si niveau OK mais signal bas","Remplacer capteur si pas de fuite"],
  parts:[["Capteur pression frein","30–100€"],["Liquide frein DOT4","8–20€"]], cost:"20–500€", warning:"🚨 Freins potentiellement compromis — NE PAS ROULER.", keywords:["frein","pression","liquide","fuite","sécurité"]},

"C0110":{ title:"Moteur pompe hydraulique ABS — Circuit", system:"ABS — Pompe hydraulique", severity:"high",
  desc:"Problème sur le moteur de la pompe ABS. L'ABS ne peut pas s'actionner.",
  causes:[["Moteur pompe ABS HS","75%"],["Fusible pompe ABS grillé","50%"],["Relais pompe ABS HS","40%"]],
  steps:["Vérifier fusible pompe ABS","Tester relais pompe ABS","Écouter la pompe à l'activation (doit démarrer)","Remplacer groupe hydraulique ABS si moteur HS"],
  parts:[["Groupe hydraulique ABS (reconditionné)","200–600€"]], cost:"100–700€", warning:"ABS non fonctionnel.", keywords:["abs","pompe","hydraulique","frein"]},

"C0121":{ title:"Circuit solénoïde ABS roue AV-DR — Panne", system:"ABS — Solénoïdes hydrauliques", severity:"high",
  desc:"Solénoïde de modulation ABS roue avant droite défectueux.",
  causes:[["Solénoïde HS","70%"],["Câblage endommagé","50%"],["Module ABS interne HS","40%"]],
  steps:["Vérifier résistance solénoïde","Tester câblage","Envisager remplacement module ABS complet"],
  parts:[["Module ABS complet","300–800€"]], cost:"200–900€", warning:"ABS non fonctionnel.", keywords:["abs","solénoïde","roue","avant","droite"]},

"C0200":{ title:"Capteur de lacet (Yaw) — Panne", system:"ESP — Capteur lacet", severity:"medium",
  desc:"Capteur de lacet (rotation véhicule) défectueux. L'ESP ne peut pas fonctionner correctement.",
  causes:[["Capteur lacet HS","75%"],["Câblage endommagé","45%"],["Capteur non étalonné","35%"]],
  steps:["Vérifier câblage capteur lacet","Étalonner le capteur via scanner","Remplacer si HS"],
  parts:[["Capteur lacet/accélération latérale","100–400€"]], cost:"80–500€", warning:"ESP non fonctionnel.", keywords:["esp","lacet","yaw","stabilité","capteur"]},

"C0300":{ title:"Moteur arrière — Panne (4x4)", system:"Transmission — 4x4/AWD", severity:"medium",
  desc:"Problème sur le système de transmission arrière (4x4 ou AWD).",
  causes:[["Différentiel arrière HS","60%"],["Coupleur Haldex/Torsen défectueux","55%"],["Huile différentiel faible","50%"]],
  steps:["Vérifier niveau huile différentiel arrière","Changer huile si dégradée","Vérifier coupleur Haldex (filtre + huile)","Diagnostiquer différentiel"],
  parts:[["Huile différentiel","20–50€"],["Kit Haldex","80–250€"]], cost:"50–1000€", warning:null, keywords:["4x4","awd","différentiel","transmission"]},

// ═══════════════════════════════════════
// U0xxx — RÉSEAU / COMMUNICATION
// ═══════════════════════════════════════
"U0001":{ title:"Bus CAN haute vitesse — Communication perdue", system:"Réseau — Bus CAN principal", severity:"high",
  desc:"Communication perdue sur le bus CAN principal. Plusieurs systèmes peuvent être inopérants.",
  causes:[["Module ECU/BCM défectueux","60%"],["Court-circuit bus CAN","65%"],["Mauvaise masse générale","50%"]],
  steps:["Vérifier toutes masses carrosserie","Mesurer résistance CAN (~60Ω entre CAN H/L)","Débrancher modules un par un","Vérifier alimentation chaque module"],
  parts:[["BCM","200–600€"],["ECU moteur","300–1000€"]], cost:"100–1200€", warning:"Diagnostic professionnel recommandé.", keywords:["can","bus","communication","réseau","modules"]},

"U0100":{ title:"Communication perdue avec ECU/PCM", system:"Réseau — ECU moteur", severity:"high",
  desc:"L'ECU moteur ne répond plus sur le bus CAN.",
  causes:[["ECU sans alimentation","75%"],["Fusible ECU grillé","60%"],["ECU HS","50%"],["Câblage CAN ECU endommagé","45%"]],
  steps:["Vérifier fusibles ECU","Contrôler alimentation 12V et masse ECU","Vérifier connexion CAN sur ECU","Tester avec ECU de remplacement"],
  parts:[["Fusibles ECU","2–10€"],["ECU reconditionné","250–800€"]], cost:"10–900€", warning:"Véhicule peut ne pas démarrer.", keywords:["ecu","pcm","communication","can","démarrage"]},

"U0101":{ title:"Communication perdue avec TCM (boîte de vitesses)", system:"Réseau — Module boîte", severity:"high",
  desc:"Le module de contrôle de la boîte de vitesses ne répond plus sur le bus CAN.",
  causes:[["TCM sans alimentation","70%"],["Fusible TCM grillé","55%"],["TCM HS","50%"]],
  steps:["Vérifier fusibles TCM","Contrôler alimentation TCM","Vérifier connexion CAN sur TCM","Remplacer TCM si HS"],
  parts:[["TCM reconditionné","200–600€"]], cost:"100–700€", warning:"Boîte peut rester bloquée sur un rapport.", keywords:["tcm","boîte","communication","can"]},

"U0121":{ title:"Communication perdue avec module ABS", system:"Réseau — Module ABS", severity:"high",
  desc:"Le module ABS ne répond plus. ABS et ESP hors service.",
  causes:[["Module ABS sans alimentation","70%"],["Fusible ABS grillé","55%"],["Module ABS HS","50%"]],
  steps:["Vérifier fusibles ABS","Contrôler alimentation module ABS","Vérifier connexion CAN","Remplacer module si HS"],
  parts:[["Module ABS","200–700€"]], cost:"100–800€", warning:"ABS et ESP non fonctionnels.", keywords:["abs","communication","module","can"]},

"U0140":{ title:"Communication perdue avec BCM (module de carrosserie)", system:"Réseau — BCM", severity:"high",
  desc:"Le module de contrôle de carrosserie ne répond plus.",
  causes:[["BCM sans alimentation","70%"],["Fusible BCM grillé","55%"],["BCM HS","45%"]],
  steps:["Vérifier fusibles BCM","Contrôler alimentation et masse BCM","Vérifier connexion CAN BCM","Remplacer BCM si HS (reprogrammation requise)"],
  parts:[["BCM reconditionné","200–600€"],["Programmation BCM","100–300€"]], cost:"200–900€", warning:"Plusieurs fonctions électriques inopérantes.", keywords:["bcm","carrosserie","communication","can","alarme","portes"]},

"U0155":{ title:"Communication perdue avec tableau de bord (IPC)", system:"Réseau — Tableau de bord", severity:"medium",
  desc:"Le tableau de bord (cluster d'instruments) ne communique plus.",
  causes:[["IPC sans alimentation","65%"],["Fusible grillé","50%"],["IPC HS","40%"]],
  steps:["Vérifier fusibles tableau de bord","Contrôler alimentation IPC","Remplacer IPC si HS"],
  parts:[["Tableau de bord (reconditionné)","200–800€"]], cost:"100–900€", warning:null, keywords:["tableau","bord","instrument","compteur","communication"]},

// ═══════════════════════════════════════
// CODES CLIMATISATION
// ═══════════════════════════════════════
"B1424":{ title:"Capteur température habitacle — Circuit (Ford/Mazda)", system:"Climatisation — Capteurs (Ford)", severity:"low",
  desc:"Capteur de température de l'habitacle défectueux. Climatisation automatique perturbée.",
  causes:[["Capteur température habitacle HS","75%"],["Câblage endommagé","40%"]],
  steps:["Localiser capteur (tableau de bord, souvent avec ventilateur aspiration)","Mesurer résistance","Remplacer si HS"],
  parts:[["Capteur température habitacle","20–80€"]], cost:"30–120€", warning:null, keywords:["climatisation","température","habitacle","ford","mazda"]},

"P0532":{ title:"Capteur pression réfrigérant A/C — Signal bas", system:"Climatisation — Capteur pression", severity:"medium",
  desc:"Capteur pression réfrigérant lit une valeur trop basse. Compresseur peut se désactiver.",
  causes:[["Manque de gaz réfrigérant (fuite)","80%"],["Capteur pression HS","50%"]],
  steps:["Contrôler la charge en réfrigérant (station recharge clim)","Mesurer pression côté LP et HP","Rechercher fuite si niveau bas","Remplacer capteur si charge OK mais signal bas"],
  parts:[["Recharge réfrigérant R134a/R1234yf","80–200€"],["Capteur pression A/C","25–80€"]], cost:"80–300€", warning:null, keywords:["climatisation","clim","réfrigérant","pression","gaz"]},

"P0533":{ title:"Capteur pression réfrigérant A/C — Signal haut", system:"Climatisation — Capteur pression", severity:"medium",
  desc:"Pression réfrigérant anormalement élevée. Condenseur encrassé ou surchargé.",
  causes:[["Condenseur A/C très encrassé","70%"],["Surchargement réfrigérant","60%"],["Capteur HS","40%"]],
  steps:["Nettoyer condenseur A/C (avant du radiateur)","Vérifier charge réfrigérant","Tester ventilateur condenseur","Remplacer capteur si HS"],
  parts:[["Capteur pression A/C","25–80€"]], cost:"20–200€", warning:null, keywords:["climatisation","pression","condenseur","réfrigérant"]},

// ═══════════════════════════════════════
// P3xxx — HYBRIDE / ÉLECTRIQUE (Toyota Prius, Honda Insight, Lexus, Hyundai Ioniq…)
// ═══════════════════════════════════════
"P3000":{ title:"Batterie haute tension HV — Panne générale", system:"Hybride — Batterie HV", severity:"critical",
  desc:"Le système de batterie haute tension (HV) du véhicule hybride a détecté une panne générale. Le véhicule peut rouler en mode dégradé ou s'arrêter.",
  causes:[["Module de gestion batterie (BMU/BMS) défectueux","70%"],["Cellules de batterie HV dégradées (capacité <80%)","65%"],["Capteur température batterie HS","50%"],["Relais principaux HV défectueux","45%"],["Câblage orange HV endommagé","30%"]],
  steps:["⚠️ NE JAMAIS TOUCHER LES CÂBLES ORANGE — Tension 200–650V mortelle","Lire les codes sous-systèmes hybrides avec scanner spécialisé (Techstream/HDS)","Contrôler température batterie (doit être 20–45°C en fonctionnement)","Vérifier codes cellule par cellule avec diagnostic HV","Mesurer tension totale batterie et tension par module","Contacter centre spécialisé hybride"],
  parts:[["Batterie HV reconditionnée","800–3000€"],["BMU/BMS reconditionné","400–1200€"],["Module cellule individuel","150–500€"]], cost:"500–5000€", warning:"🚨 HAUTE TENSION 200–650V — Intervention spécialiste HV UNIQUEMENT.", keywords:["hybride","batterie","haute tension","hv","prius","ioniq","insight","bms"]},

"P3001":{ title:"Batterie HV — Tension trop faible", system:"Hybride — Batterie HV", severity:"critical",
  desc:"La tension de la batterie haute tension est en dessous du seuil minimum. Recharge impossible ou décharge excessive.",
  causes:[["Batterie HV profondément déchargée","80%"],["Cellules HS (tension inégale entre modules)","70%"],["Relais principal HS (précharge)","50%"],["Module BMU défectueux","40%"]],
  steps:["Couper le contact et attendre 5 min (décharge condensateurs)","Vérifier voyant HV Ready — s'il est éteint: système coupé","Brancher à secteur (hybride rechargeable) ou remorquer vers atelier","Mesurer tension totale (Prius: 200V min, PHEV: 300V min)","Diagnostic spécialisé obligatoire"],
  parts:[["Batterie HV","800–4000€"],["Cellules remplacement","200–600€ par module"]], cost:"500–5000€", warning:"🚨 Spécialiste hybride uniquement — tension létale.", keywords:["hybride","batterie","tension","faible","prius","décharge"]},

"P3002":{ title:"Batterie HV — Tension trop élevée", system:"Hybride — Batterie HV", severity:"critical",
  desc:"Surtension détectée dans la batterie HV. Risque d'emballement thermique.",
  causes:[["Système de charge défectueux (PHEV)","75%"],["BMU qui perd le contrôle de charge","65%"],["Capteur tension batterie HS","40%"]],
  steps:["Arrêter le véhicule immédiatement","Ne pas recharger","Contacter technicien HV certifié","Ne pas ouvrir le coffre batterie"],
  parts:[["Chargeur embarqué OBC","500–1500€"],["BMU","400–1200€"]], cost:"500–2500€", warning:"🚨 Risque d'incendie — ARRÊT IMMÉDIAT et technicien HV.", keywords:["hybride","surtension","batterie","phev","rechargeable"]},

"P3004":{ title:"Module de batterie HV — Température excessive", system:"Hybride — Batterie HV", severity:"high",
  desc:"La température d'un ou plusieurs modules de la batterie HV dépasse le seuil (>50°C). Le système réduit les performances.",
  causes:[["Ventilateur de refroidissement batterie HS","85%"],["Filtre ventilateur batterie bouché","75%"],["Cellule(s) défectueuse(s) qui surchauffe","50%"],["Capteur température HS","30%"]],
  steps:["Localiser la grille d'aspiration du ventilateur batterie (généralement habitacle/coffre)","Retirer et nettoyer le filtre (souvent sous le siège arrière)","Vérifier fonctionnement ventilateur batterie (audible à l'oreille)","Mesurer courant ventilateur","Remplacer ventilateur si HS"],
  parts:[["Ventilateur refroidissement batterie","80–300€"],["Filtre ventilateur","10–30€"]], cost:"30–400€", warning:"Performances réduites — ne pas forcer le véhicule.", keywords:["hybride","température","batterie","ventilateur","filtre","chaleur"]},

"P3006":{ title:"Déséquilibre entre modules de batterie HV", system:"Hybride — Batterie HV", severity:"high",
  desc:"Les modules de la batterie ne sont pas au même niveau de charge/tension. Certains sont usés prématurément.",
  causes:[["Cellules âgées (>200 000km ou >10 ans)","80%"],["Module(s) de cellule défectueux","65%"],["BMU qui ne rééquilibre plus correctement","40%"]],
  steps:["Scanner HV pour lire tension de chaque module (Techstream/HDS)","Identifier les modules hors norme (>0.3V d'écart = anormal)","Envisager reconditionnement batterie (remplacement modules HS uniquement)","Alternative: batterie complète reconditionnée"],
  parts:[["Module cellule batterie","150–400€ pièce"],["Batterie reconditionnée","800–2500€"]], cost:"300–3000€", warning:"Spécialiste hybride recommandé.", keywords:["hybride","déséquilibre","cellule","module","batterie","prius"]},

"P3009":{ title:"Batterie HV — Fuite de courant détectée", system:"Hybride — Isolation HV", severity:"critical",
  desc:"Une fuite de courant a été détectée dans le circuit haute tension. Risque électrique grave.",
  causes:[["Isolation câble HV endommagée","70%"],["Infiltration eau dans le boîtier batterie","60%"],["Composant HV fissuré","40%"]],
  steps:["Arrêter le véhicule","Ne pas toucher les câbles orange","Contacter technicien HV certifié immédiatement","Ne pas rouler"],
  parts:[["Câblage HV remplacement","300–800€"],["Boîtier batterie joint","100–300€"]], cost:"300–2000€", warning:"🚨 RISQUE ÉLECTROCUTION — Technicien HV UNIQUEMENT.", keywords:["hybride","fuite","courant","isolation","haute tension","électrocution"]},

"P3011":{ title:"Relais principal batterie HV — Défaut", system:"Hybride — Relais HV", severity:"critical",
  desc:"Le relais principal qui connecte la batterie HV au reste du circuit est défectueux.",
  causes:[["Relais positif ou négatif grillé","75%"],["Relais de précharge défectueux","65%"],["Condensateur de précharge HS","40%"]],
  steps:["Diagnostic scanner HV spécialisé","Localiser le boîtier relais (dans ou près de la batterie HV)","Mesurer résistance et continuité relais","Remplacer relais HS — SPÉCIALISTE UNIQUEMENT"],
  parts:[["Relais principal HV","150–500€ pièce"],["Kit relais HV complet","400–1200€"]], cost:"300–1500€", warning:"🚨 Spécialiste HV obligatoire.", keywords:["hybride","relais","principal","batterie","hv"]},

"P3017":{ title:"Onduleur / Convertisseur DC-DC — Panne", system:"Hybride — Onduleur/Convertisseur", severity:"critical",
  desc:"L'onduleur (inverter) qui convertit le courant DC de la batterie en AC pour les moteurs électriques est en panne.",
  causes:[["Transistors IGBT onduleur grillés (surtension/surchauffe)","70%"],["Pompe refroidissement onduleur HS","60%"],["Capteur température onduleur HS","40%"]],
  steps:["Vérifier refroidissement onduleur (liquide dédié)","Contrôler pompe eau onduleur (électrique, audible)","Lire codes spécifiques onduleur avec scanner HV","Mesurer températures onduleur","Remplacement ou réparation spécialiste"],
  parts:[["Onduleur (reconditionné)","800–3000€"],["Pompe refroidissement onduleur","150–400€"]], cost:"500–4000€", warning:"🚨 Spécialiste hybride/électrique uniquement.", keywords:["hybride","onduleur","inverter","igbt","convertisseur","moteur électrique"]},

"P3020":{ title:"Moteur électrique MG1 — Panne (Toyota/Lexus Hybride)", system:"Hybride — Moteur générateur MG1", severity:"critical",
  desc:"Code spécifique Toyota/Lexus hybride. Panne du moteur-générateur MG1 (démarreur/générateur).",
  causes:[["Stator ou rotor MG1 défectueux","65%"],["Onduleur MG1 HS","60%"],["Capteur résolveur MG1 HS","45%"]],
  steps:["Diagnostic Techstream obligatoire","Mesurer température et courant MG1","Tester résolveur MG1","Spécialiste Toyota hybride"],
  parts:[["Moteur MG1 (reconditionné)","1500–4000€"],["Capteur résolveur","200–600€"]], cost:"1000–5000€", warning:"Technicien Toyota HV certifié uniquement.", keywords:["toyota","hybride","mg1","moteur","générateur","lexus","prius"]},

"P3021":{ title:"Moteur électrique MG2 — Panne (Toyota/Lexus Hybride)", system:"Hybride — Moteur générateur MG2", severity:"critical",
  desc:"Panne du moteur-générateur MG2 (traction principale sur Prius/Lexus hybride).",
  causes:[["Stator ou rotor MG2 défectueux","65%"],["Onduleur MG2 HS","60%"],["Surchauffe MG2","45%"]],
  steps:["Diagnostic Techstream","Mesurer courant et température MG2","Contrôler refroidissement","Spécialiste Toyota HV"],
  parts:[["Moteur MG2 (reconditionné)","2000–6000€"]], cost:"1500–7000€", warning:"Technicien Toyota HV certifié.", keywords:["toyota","hybride","mg2","traction","moteur","prius","lexus"]},

"P3030":{ title:"Chargeur embarqué OBC — Panne (Hybride Rechargeable)", system:"Hybride PHEV — Chargeur OBC", severity:"high",
  desc:"Le chargeur embarqué pour la recharge secteur du PHEV est défaillant. Recharge impossible.",
  causes:[["OBC (On-Board Charger) défectueux","80%"],["Câble de charge endommagé","40%"],["Contacteur de charge HS","35%"]],
  steps:["Essayer un câble de charge différent","Vérifier tension secteur (220–240V)","Tester sur borne de recharge différente","Scanner pour codes OBC spécifiques","Remplacement OBC si confirmé HS"],
  parts:[["Chargeur OBC (reconditionné)","500–2000€"]], cost:"400–2500€", warning:null, keywords:["phev","rechargeable","chargeur","obc","prise","recharge"]},

"P3033":{ title:"Convertisseur DC-DC 12V — Panne", system:"Hybride — Convertisseur DC-DC", severity:"high",
  desc:"Le convertisseur DC-DC qui alimente la batterie 12V à partir de la batterie HV est défectueux. La batterie 12V ne se recharge plus.",
  causes:[["Convertisseur DC-DC HS","80%"],["Surcharge circuit 12V","40%"],["Capteur HS","25%"]],
  steps:["Mesurer tension batterie 12V moteur allumé (doit être 13.5–14.5V sur hybride)","Si <13V → DC-DC converter HS","Vérifier fuses DC-DC","Remplacement DC-DC"],
  parts:[["Convertisseur DC-DC","400–1500€"]], cost:"350–1800€", warning:"La batterie 12V se déchargera — véhicule bloqué.", keywords:["hybride","dc-dc","convertisseur","batterie 12v","alimentation"]},

"P3035":{ title:"Température onduleur excessive", system:"Hybride — Refroidissement onduleur", severity:"high",
  desc:"L'onduleur surchauffe. Le système réduit automatiquement la puissance (mode dégradé).",
  causes:[["Pompe refroidissement onduleur faible/HS","80%"],["Liquide refroidissement onduleur bas","70%"],["Radiateur onduleur encrassé","50%"]],
  steps:["Vérifier niveau liquide circuit refroidissement onduleur (séparé du circuit moteur sur certains modèles)","Écouter pompe eau onduleur (doit tourner clé sur ON)","Purger circuit si nécessaire","Remplacer pompe si HS"],
  parts:[["Pompe eau onduleur","100–400€"],["Liquide refroidissement hybride","20–40€"]], cost:"50–500€", warning:"Puissance réduite — éviter surcharge électrique.", keywords:["hybride","surchauffe","onduleur","pompe","refroidissement"]},

"P3040":{ title:"Système récupération énergie freinage — Panne (Regen)", system:"Hybride — Freinage régénératif", severity:"medium",
  desc:"Le freinage régénératif (récupération d'énergie au freinage) ne fonctionne pas. Consommation augmente.",
  causes:[["Capteur pression frein défectueux","60%"],["Module ABS/frein régénératif HS","55%"],["Calibration système perdue","40%"]],
  steps:["Lire codes ABS associés","Vérifier capteur pression frein","Calibrer système de freinage via scanner hybride","Vérifier accumulateur frein électrique"],
  parts:[["Capteur pression frein","30–100€"],["Module frein hybride","300–800€"]], cost:"100–900€", warning:null, keywords:["hybride","freinage","régénératif","regen","récupération","énergie"]},

"P3050":{ title:"Système Start-Stop — Panne (Mild Hybrid / Micro Hybride)", system:"Hybride Léger — Start-Stop", severity:"medium",
  desc:"Le système Start-Stop automatique du moteur est défaillant. Le moteur ne s'arrête plus aux feux.",
  causes:[["Batterie 12V insuffisante (AGM/EFB)","80%"],["Capteur capot (ne détecte pas fermeture)","50%"],["Alternateur-démarreur BSG HS","45%"],["Capteur ceinture HS","30%"]],
  steps:["Tester batterie 12V (doit être AGM ou EFB — pas standard)","Vérifier état charge batterie","Contrôler alternateur-démarreur BSG","Vérifier tous capteurs Start-Stop (température, charge batterie, inclinaison)"],
  parts:[["Batterie AGM 12V","120–300€"],["Alternateur-démarreur BSG","400–1200€"]], cost:"100–1500€", warning:null, keywords:["start-stop","micro hybride","bsg","batterie","agm","efb"]},

"P3060":{ title:"Moteur électrique de traction — Survitesse", system:"Hybride/Électrique — Moteur traction", severity:"high",
  desc:"Le moteur électrique de traction a dépassé sa vitesse maximale. Protection activée.",
  causes:[["Défaut capteur vitesse moteur électrique","60%"],["Onduleur envoie fréquence incorrecte","50%"],["Court-circuit bobinage moteur","30%"]],
  steps:["Scanner hybride pour codes détaillés","Vérifier résolveur/capteur vitesse MG","Contrôler températures onduleur","Spécialiste hybride"],
  parts:[["Capteur résolveur","150–400€"]], cost:"200–3000€", warning:"Risque dommage moteur électrique.", keywords:["hybride","électrique","moteur","survitesse","résolveur"]},

"P3070":{ title:"Système hybride — Mode sécurité activé", system:"Hybride — Sécurité système", severity:"critical",
  desc:"Le système hybride a activé le mode sécurité. La propulsion électrique est coupée, seul le moteur thermique fonctionne (si démarrage possible).",
  causes:[["Plusieurs codes HV simultanés","90%"],["Surchauffe batterie ou onduleur","70%"],["Isolement HV défaillant","60%"]],
  steps:["Lire TOUS les codes avec scanner HV","Résoudre les codes sous-jacents en priorité","Ne pas forcer le véhicule en mode sécurité","Technicien HV certifié obligatoire"],
  parts:[], cost:"Variable selon cause", warning:"🚨 Système hybride partiellement ou totalement hors service.", keywords:["hybride","sécurité","mode","panne","propulsion"]},

"P0A00":{ title:"Moteur-générateur A — Température excessive", system:"Hybride — MGA température", severity:"high",
  desc:"Le moteur-générateur A a dépassé sa limite de température. Puissance réduite automatiquement.",
  causes:[["Pompe refroidissement MGA HS","75%"],["Radiateur MGA encrassé","60%"],["Capteur température MGA HS","35%"]],
  steps:["Vérifier pompe eau MGA","Purger circuit refroidissement MGA","Nettoyer radiateur si encrassé","Remplacer capteur si HS"],
  parts:[["Pompe refroidissement MGA","150–400€"]], cost:"100–500€", warning:"Puissance réduite.", keywords:["hybride","moteur","température","pompe","refroidissement"]},

"P0A0F":{ title:"Propulsion moteur — Puissance insuffisante", system:"Hybride/Électrique — Propulsion", severity:"high",
  desc:"Le système de propulsion hybride ou électrique ne peut pas fournir la puissance demandée. Véhicule lent.",
  causes:[["Batterie HV déchargée ou dégradée","80%"],["Mode sécurité activé","65%"],["Onduleur limité en puissance","50%"],["MG2 en protection thermique","45%"]],
  steps:["Laisser le véhicule refroidir 20 min","Vérifier état charge batterie HV","Scanner codes hybrides","Vérifier températures onduleur et MG2"],
  parts:[["Batterie HV reconditionnée","800–3000€"]], cost:"100–4000€", warning:"Ne pas sur-solliciter le véhicule.", keywords:["hybride","puissance","lent","propulsion","batterie"]},

"P0A80":{ title:"Remplacer la batterie haute tension HV", system:"Hybride — Batterie HV", severity:"critical",
  desc:"Code Toyota/Lexus/Honda indiquant que la batterie HV est en fin de vie et doit être remplacée (capacité <80% ou défaillance cellule).",
  causes:[["Batterie HV en fin de vie (>150 000km / >10 ans)","90%"],["Module(s) de cellule défectueux","75%"],["BMS défectueux","25%"]],
  steps:["Diagnostic batterie HV complet (Techstream/HDS)","Mesurer capacité réelle vs originale","Identifier modules défaillants","Option 1: remplacer modules HS seulement","Option 2: batterie reconditionnée","Option 3: batterie neuve (garantie)"],
  parts:[["Batterie HV reconditionnée","800–2500€"],["Batterie HV neuve","2000–6000€"],["Modules cellule","150–400€ pièce"]], cost:"800–6000€", warning:"Technicien HV certifié obligatoire.", keywords:["toyota","lexus","honda","hybride","batterie","remplacement","prius","fin de vie"]},

"P0A94":{ title:"Convertisseur DC-DC — Performance insuffisante", system:"Hybride — DC-DC Converter", severity:"high",
  desc:"Le convertisseur DC-DC ne maintient pas la tension 12V correctement. Batterie 12V se décharge.",
  causes:[["DC-DC converter vieillissant","75%"],["Surcharge circuit 12V (accessoires)","50%"],["Connexions DC-DC oxydées","40%"]],
  steps:["Mesurer tension 12V en conduite (doit être 13.8–14.5V)","Vérifier connexions DC-DC","Déconnecter accessoires ajoutés","Remplacer DC-DC si tension insuffisante"],
  parts:[["Convertisseur DC-DC","400–1500€"]], cost:"350–1800€", warning:null, keywords:["hybride","dc-dc","12v","batterie","convertisseur"]},

// ═══════════════════════════════════════
// DIESEL AVANCÉ — DPF/FAP, AdBlue/SCR, Turbo
// ═══════════════════════════════════════
"P2002":{ title:"Filtre à particules diesel (DPF/FAP) — Efficacité insuffisante", system:"Diesel — Filtre à particules DPF", severity:"high",
  desc:"Le filtre à particules est saturé de suies et ne se régénère plus correctement. Risque de colmatage total.",
  causes:[["Conduite urbaine exclusive (pas assez de régénérations)","85%"],["Filtre DPF très encrassé (> 200g de cendres)","75%"],["Sonde pression différentielle DPF HS","50%"],["EGR défectueux (suies excessives)","40%"],["Huile moteur brûlée (joint turbo)","30%"]],
  steps:["Lire la contre-pression DPF sur scanner (>100 mbar au ralenti = saturé)","Tenter une régénération forcée via scanner (15–20 min en roulant)","Faire un trajet autoroute de 30–40 min à 2500 tr/min (70–80km/h)","Si régénération impossible: nettoyage FAP professionnel ou remplacement","Corriger la cause racine (huile, EGR) avant remplacement"],
  parts:[["Nettoyage DPF professionnel","200–400€"],["DPF/FAP neuf","800–2500€"],["Sonde ΔP DPF","60–150€"]], cost:"200–3000€", warning:"Ne pas continuer à rouler en ville — colmatage total possible.", keywords:["dpf","fap","filtre particules","diesel","suies","régénération","fumée","noire"]},

"P2003":{ title:"DPF — Efficacité insuffisante Banc 2", system:"Diesel — DPF Banc 2", severity:"high",
  desc:"Même défaut P2002 sur le banc 2 (moteurs diesel V6/V8 avec deux DPF).",
  causes:[["DPF banc 2 saturé","85%"],["Sonde ΔP B2 HS","50%"]],
  steps:["Même procédure que P2002 côté banc 2","Régénération forcée scanner","Nettoyage ou remplacement DPF B2"],
  parts:[["DPF banc 2","800–2500€"]], cost:"200–3000€", warning:null, keywords:["dpf","fap","diesel","banc 2"]},

"P2006":{ title:"DPF — Température entrée trop basse pour régénération", system:"Diesel — DPF", severity:"medium",
  desc:"La température d'entrée du DPF est trop basse pour permettre la régénération des suies (besoin de >550°C).",
  causes:[["Conduite uniquement à faible charge","80%"],["Injecteur post-injection défectueux","60%"],["Sonde température DPF HS","40%"]],
  steps:["Effectuer un trajet autoroute 30 min","Vérifier injecteurs de post-injection (7e injecteur sur certains modèles)","Contrôler sonde température entrée DPF","Tester régénération forcée scanner"],
  parts:[["Sonde température DPF","40–120€"],["7e injecteur PSA","100–300€"]], cost:"50–400€", warning:null, keywords:["dpf","fap","température","régénération","post-injection"]},

"P2031":{ title:"Capteur température sortie DPF — Circuit", system:"Diesel — DPF capteurs", severity:"medium",
  desc:"Signal du capteur de température en sortie du filtre à particules absent ou incorrect.",
  causes:[["Capteur température sortie DPF HS","80%"],["Câblage endommagé par chaleur","60%"]],
  steps:["Localiser capteur sur la ligne d'échappement après DPF","Mesurer résistance (NTC)","Inspecter câblage (souvent brûlé par chaleur échappement)","Remplacer capteur"],
  parts:[["Capteur température DPF","40–120€"]], cost:"60–200€", warning:null, keywords:["dpf","température","capteur","sortie","diesel"]},

"P2032":{ title:"Capteur température entrée DPF — Signal bas", system:"Diesel — DPF capteurs", severity:"medium",
  desc:"Signal trop faible du capteur température entrée DPF.",
  causes:[["Capteur HS","75%"],["Court-circuit câblage","50%"]],
  steps:["Mesurer résistance capteur","Vérifier câblage","Remplacer si HS"],
  parts:[["Capteur température entrée DPF","40–120€"]], cost:"60–200€", warning:null, keywords:["dpf","température","entrée","capteur"]},

"P2033":{ title:"Capteur température sortie DPF — Signal haut", system:"Diesel — DPF capteurs", severity:"medium",
  desc:"Signal trop élevé du capteur température sortie DPF. Circuit ouvert probable.",
  causes:[["Capteur ouvert (circuit coupé)","75%"],["Connecteur desserré","50%"]],
  steps:["Inspecter connecteur","Mesurer résistance","Remplacer capteur"],
  parts:[["Capteur température DPF","40–120€"]], cost:"60–200€", warning:null, keywords:["dpf","température","sortie"]},

"P2048":{ title:"Réducteur AdBlue — Injecteur circuit bas (SCR/AdBlue)", system:"Diesel — SCR AdBlue", severity:"high",
  desc:"L'injecteur d'urée AdBlue dans le système SCR est défaillant. Les émissions NOx sont hors norme.",
  causes:[["Injecteur AdBlue cristallisé/bouché","80%"],["Câblage injecteur AdBlue HS","55%"],["Module dosage AdBlue HS","40%"]],
  steps:["Vérifier niveau AdBlue (tank dédié — souvent sous le coffre)","Scanner pour lire pression pompe AdBlue","Nettoyer ou remplacer injecteur AdBlue","Vérifier câblage injecteur","Purger système si cristallisé"],
  parts:[["Injecteur AdBlue","150–400€"],["Pompe dosage AdBlue","300–800€"]], cost:"100–1200€", warning:"Contrôle technique: code peut faire échouer le CT.", keywords:["adblue","scr","urea","nox","def","injecteur","diesel"]},

"P2049":{ title:"Réducteur AdBlue — Injecteur circuit haut", system:"Diesel — SCR AdBlue", severity:"high",
  desc:"Court-circuit sur le circuit injecteur AdBlue.",
  causes:[["Court-circuit câblage injecteur AdBlue","65%"],["Module AdBlue HS","45%"]],
  steps:["Inspecter câblage injecteur AdBlue","Mesurer résistance injecteur","Remplacer si HS"],
  parts:[["Injecteur AdBlue","150–400€"]], cost:"100–500€", warning:null, keywords:["adblue","scr","injecteur","nox"]},

"P2080":{ title:"Capteur température gaz d'échappement — Turbo entrée", system:"Diesel — Capteurs échappement", severity:"medium",
  desc:"Capteur de température des gaz avant turbocompresseur défaillant.",
  causes:[["Capteur EGT HS","80%"],["Câblage brûlé par chaleur","60%"]],
  steps:["Localiser capteur (avant turbo, sur collecteur)","Inspecter câblage thermique","Mesurer résistance","Remplacer"],
  parts:[["Capteur EGT","40–120€"]], cost:"60–200€", warning:null, keywords:["egt","température","turbo","gaz","échappement"]},

"P2082":{ title:"Capteur température gaz d'échappement — Circuit entrée DPF", system:"Diesel — DPF", severity:"medium",
  desc:"Capteur de température avant filtre à particules défaillant.",
  causes:[["Capteur EGT entrée DPF HS","80%"],["Câblage endommagé","60%"]],
  steps:["Inspecter câblage et connecteur","Mesurer résistance","Remplacer capteur"],
  parts:[["Capteur EGT DPF","40–120€"]], cost:"60–200€", warning:null, keywords:["egt","température","dpf","entrée"]},

"P207F":{ title:"Qualité réducteur AdBlue — Incorrect", system:"Diesel — SCR AdBlue", severity:"high",
  desc:"La qualité du liquide AdBlue est incorrecte (trop dilué, contaminé, ou autre liquide ajouté).",
  causes:[["Mauvaise qualité AdBlue (trop dilué)","75%"],["Eau ou autre liquide dans le tank AdBlue","70%"],["Capteur qualité AdBlue HS","30%"]],
  steps:["Vider complètement le réservoir AdBlue","Rincer le réservoir à l'eau distillée","Remplir avec AdBlue ISO 22241 certifié","Effacer le code","Si code revient → capteur qualité HS"],
  parts:[["AdBlue ISO 22241 (10L)","15–30€"],["Capteur qualité AdBlue","100–300€"]], cost:"20–400€", warning:"Le véhicule peut se verrouiller en puissance réduite après X démarrages.", keywords:["adblue","qualité","scr","nox","contamination","diesel"]},

"P2228":{ title:"Capteur pression atmosphérique (BARO) — Signal bas", system:"Moteur — Capteurs admission", severity:"medium",
  desc:"Capteur de pression atmosphérique (baromètrique) lit une valeur trop basse.",
  causes:[["Capteur BARO HS (souvent intégré à l'ECU)","70%"],["Capteur MAP en panne (certains utilisent le même)","50%"]],
  steps:["Comparer BARO avec MAP au ralenti (doivent être proches)","Si BARO toujours incorrecte → ECU à remplacer sur certains modèles","Sur modèles avec capteur externe, remplacer capteur"],
  parts:[["Capteur BARO externe","25–80€"],["ECU (si intégré)","300–800€"]], cost:"30–900€", warning:null, keywords:["baro","pression","atmosphérique","altitude","map"]},

"P2263":{ title:"Turbocompresseur — Performance insuffisante", system:"Moteur — Turbo", severity:"high",
  desc:"Le turbocompresseur ne produit pas assez de pression de suralimentation. Manque de puissance notable.",
  causes:[["Durit intercooler fissurée ou débranchée","80%"],["Wastegate bloquée ouverte","70%"],["Actuateur wastegate HS","65%"],["Turbine encrassée de calamine","55%"],["Fuites d'huile turbo (joints usés)","40%"]],
  steps:["Inspecter toutes durits intercooler à la main (chercher fissures)","Vérifier pression de suralimentation sur scanner (compare réel vs consigne)","Tester actuateur wastegate (pneumatique ou électrique)","Vérifier absence de fumée bleue (joints turbo)","Nettoyer turbine si encrassée"],
  parts:[["Durit intercooler","30–100€"],["Actuateur wastegate","80–300€"],["Turbo reconditionné","400–1200€"]], cost:"50–1500€", warning:"Ne pas sur-solliciter le moteur avec ce code.", keywords:["turbo","suralimentation","boost","pression","intercooler","wastegate","diesel","essence"]},

"P2264":{ title:"Capteur pression eau/carburant — Signal bas", system:"Diesel — Eau dans carburant", severity:"high",
  desc:"Le capteur de présence d'eau dans le filtre à carburant détecte de l'eau. À purger immédiatement.",
  causes:[["Eau dans le carburant diesel","90%"],["Capteur eau carburant HS","20%"]],
  steps:["Purger l'eau du séparateur eau/carburant (trappe de vidange sous le filtre)","Remplacer le filtre à carburant","Faire le plein avec du diesel de qualité","Si persistant: vider réservoir et nettoyer"],
  parts:[["Filtre carburant diesel","20–60€"],["Capteur eau carburant","30–80€"]], cost:"20–150€", warning:"🚨 Ne pas rouler — l'eau endommage les injecteurs et la pompe HP.", keywords:["eau","carburant","diesel","filtre","purge","eau dans diesel"]},

"P2269":{ title:"Eau dans carburant — Condition détectée", system:"Diesel — Qualité carburant", severity:"high",
  desc:"De l'eau a été détectée dans le carburant diesel. Risque grave pour les injecteurs et la pompe HP.",
  causes:[["Eau dans le réservoir (condensation, mauvais carburant)","90%"],["Filtre carburant saturé","50%"]],
  steps:["Purger séparateur d'eau immédiatement","Remplacer filtre carburant","Faire le plein avec diesel propre","Vérifier injecteurs si problème persistait"],
  parts:[["Filtre carburant","20–60€"]], cost:"20–200€", warning:"🚨 Injecteurs diesel très sensibles à l'eau — intervenir immédiatement.", keywords:["eau","diesel","carburant","injecteurs","filtre","pompe"]},

"P2291":{ title:"Pression carburant insuffisante — Démarrage", system:"Diesel — Pression carburant", severity:"high",
  desc:"La pression de carburant est insuffisante lors du démarrage. Démarrage difficile ou impossible.",
  causes:[["Filtre à carburant colmaté","80%"],["Pompe basse pression faible","65%"],["Fuite dans circuit BP","50%"],["Clapet anti-retour pompe HS","40%"]],
  steps:["Remplacer filtre à carburant (priorité)","Mesurer pression BP (spec: 5–8 bars selon marque)","Vérifier absence de bulles d'air (fuite aspiration)","Tester pompe BP (débit et pression)"],
  parts:[["Filtre carburant diesel","20–60€"],["Pompe BP électrique","80–250€"]], cost:"30–400€", warning:null, keywords:["carburant","pression","démarrage","diesel","pompe","filtre"]},

"P246C":{ title:"DPF — Capteur pression différentielle — Signal bas", system:"Diesel — DPF", severity:"medium",
  desc:"Le capteur de pression différentielle du DPF (avant/après) lit une valeur trop basse.",
  causes:[["Durit capteur ΔP bouchée ou débranchée","70%"],["Capteur ΔP HS","60%"]],
  steps:["Inspecter les deux petites durits connectées au capteur ΔP","Souffler les durits pour vérifier qu'elles ne sont pas bouchées","Mesurer signal capteur","Remplacer capteur ou durites"],
  parts:[["Capteur ΔP DPF","60–150€"],["Durit capteur","10–30€"]], cost:"30–200€", warning:null, keywords:["dpf","pression","différentielle","capteur","durit"]},

"P246D":{ title:"DPF — Capteur pression différentielle — Signal haut", system:"Diesel — DPF", severity:"medium",
  desc:"Le capteur ΔP DPF lit une valeur trop haute. DPF très saturé ou capteur HS.",
  causes:[["DPF très saturé (contre-pression élevée)","80%"],["Capteur ΔP HS","40%"]],
  steps:["Lire contre-pression DPF sur scanner","Si >200 mbar → DPF saturé (nettoyage forcé)","Tenter régénération forcée","Nettoyage professionnel ou remplacement DPF","Remplacer capteur si valeur haute avec DPF OK"],
  parts:[["Capteur ΔP DPF","60–150€"],["Nettoyage DPF","200–400€"],["DPF neuf","800–2500€"]], cost:"200–3000€", warning:null, keywords:["dpf","pression","saturé","régénération"]},

// ═══════════════════════════════════════
// TURBO — CODES SPÉCIFIQUES
// ═══════════════════════════════════════
"P0234":{ title:"Turbocompresseur — Surpression (Overboost)", system:"Moteur — Turbo", severity:"high",
  desc:"La pression de suralimentation dépasse le seuil maximum. Risque de casse moteur si persistant.",
  causes:[["Wastegate bloquée fermée","80%"],["Solénoïde de commande wastegate HS","65%"],["Durit de pilotage wastegate percée","50%"]],
  steps:["Vérifier durit de commande wastegate (souvent percée)","Tester solénoïde wastegate (résistance 20–30Ω)","Vérifier déplacement wastegate mécaniquement","Remplacer solénoïde ou turbo si wastegate grippée"],
  parts:[["Solénoïde wastegate","40–150€"],["Turbo reconditionné","400–1500€"]], cost:"50–1800€", warning:"Risque casse moteur si pression non contrôlée.", keywords:["turbo","pression","surpression","overboost","wastegate","diesel","essence"]},

"P0235":{ title:"Capteur pression suralimentation (MAP/Boost) — Circuit", system:"Moteur — Turbo / MAP", severity:"medium",
  desc:"Signal du capteur de pression de suralimentation absent ou incorrect.",
  causes:[["Capteur MAP/boost HS","80%"],["Câblage endommagé","50%"],["Durit prise de pression bouchée","40%"]],
  steps:["Localiser capteur MAP/boost (collecteur admission)","Mesurer tension alimentation 5V","Mesurer signal (0.5V–4.5V selon pression)","Vérifier durit de connexion","Remplacer capteur si HS"],
  parts:[["Capteur MAP/boost","30–100€"]], cost:"40–150€", warning:null, keywords:["turbo","map","boost","pression","suralimentation","capteur"]},

"P0236":{ title:"Capteur pression suralimentation — Signal hors plage", system:"Moteur — Turbo / MAP", severity:"medium",
  desc:"Le signal du capteur MAP/boost est présent mais hors des valeurs attendues.",
  causes:[["Capteur MAP encrassé ou HS","75%"],["Fuite admission après turbo","60%"],["Durit intercooler débranchée","50%"]],
  steps:["Inspecter toutes durits admission après turbo","Nettoyer capteur MAP","Remplacer capteur MAP si HS"],
  parts:[["Capteur MAP","30–100€"]], cost:"40–200€", warning:null, keywords:["turbo","map","suralimentation","durit"]},

"P0243":{ title:"Solénoïde wastegate turbo — Circuit", system:"Moteur — Turbo Wastegate", severity:"high",
  desc:"Problème électrique sur le solénoïde de commande de la wastegate du turbocompresseur.",
  causes:[["Solénoïde wastegate HS","80%"],["Câblage endommagé","50%"],["Turbo VNT — mécanisme bloqué","40%"]],
  steps:["Mesurer résistance solénoïde (spec: 20–40Ω)","Vérifier alimentation 12V","Tester actuation via scanner","Remplacer solénoïde si HS"],
  parts:[["Solénoïde wastegate","40–150€"]], cost:"50–200€", warning:null, keywords:["turbo","wastegate","solénoïde","vnt","diesel"]},

"P0299":{ title:"Turbocompresseur — Sous-pression (Underboost)", system:"Moteur — Turbo", severity:"high",
  desc:"La pression de suralimentation est insuffisante. Manque de puissance important.",
  causes:[["Fuite durit intercooler ou admission","85%"],["Wastegate bloquée ouverte","70%"],["Turbine encrassée ou endommagée","60%"],["Vanne EGR bloquée ouverte","40%"],["Fuites huile turbo (jeu roulements)","35%"]],
  steps:["Inspecter toutes durits intercooler et admission (chercher fissures, joints)","Contrôler pression boost sur scanner vs consigne","Vérifier wastegate mécaniquement","Contrôler EGR","Vérifier huile turbo (prise de pression, jeu axe)"],
  parts:[["Durit intercooler","30–100€"],["Kit joints durits","20–50€"],["Turbo reconditionné","400–1500€"]], cost:"50–2000€", warning:"Ne pas solliciter le moteur — endommage le turbo.", keywords:["turbo","underboost","sous-pression","puissance","intercooler","fuite"]},

// ═══════════════════════════════════════
// TPMS — PRESSION PNEUMATIQUES
// ═══════════════════════════════════════
"C0750":{ title:"Capteur pression pneumatique TPMS — Roue AV-DR", system:"TPMS — Pression pneus", severity:"medium",
  desc:"Capteur TPMS de la roue avant droite ne communique plus. Signal absent ou batterie capteur morte.",
  causes:[["Batterie capteur TPMS déchargée (durée vie 5–7 ans)","80%"],["Capteur TPMS endommagé (choc, montage)","50%"],["Pression pneu très basse","30%"]],
  steps:["Vérifier pression pneu AV-DR avec manomètre (gonflage correct avant diagnostic)","Si pression OK → capteur TPMS HS (batterie interne morte)","Remplacer capteur TPMS","Reprogrammer le nouveau capteur avec outil TPMS"],
  parts:[["Capteur TPMS (unité)","30–80€"],["Kit valve TPMS","10–25€"]], cost:"40–120€", warning:null, keywords:["tpms","pneu","pression","capteur","roue","avant droit"]},

"C0755":{ title:"Capteur TPMS — Roue AV-GA", system:"TPMS — Pression pneus", severity:"medium",
  desc:"Capteur TPMS roue avant gauche défaillant.",
  causes:[["Batterie capteur déchargée","80%"],["Capteur endommagé","50%"]],
  steps:["Vérifier pression","Remplacer capteur","Reprogrammer"],
  parts:[["Capteur TPMS","30–80€"]], cost:"40–120€", warning:null, keywords:["tpms","pneu","avant gauche"]},

"C0760":{ title:"Capteur TPMS — Roue AR-DR", system:"TPMS — Pression pneus", severity:"medium",
  desc:"Capteur TPMS roue arrière droite défaillant.",
  causes:[["Batterie capteur déchargée","80%"],["Capteur endommagé","50%"]],
  steps:["Vérifier pression","Remplacer capteur","Reprogrammer"],
  parts:[["Capteur TPMS","30–80€"]], cost:"40–120€", warning:null, keywords:["tpms","pneu","arrière droit"]},

"C0765":{ title:"Capteur TPMS — Roue AR-GA", system:"TPMS — Pression pneus", severity:"medium",
  desc:"Capteur TPMS roue arrière gauche défaillant.",
  causes:[["Batterie capteur déchargée","80%"],["Capteur endommagé","50%"]],
  steps:["Vérifier pression","Remplacer capteur","Reprogrammer"],
  parts:[["Capteur TPMS","30–80€"]], cost:"40–120€", warning:null, keywords:["tpms","pneu","arrière gauche"]},

"C0775":{ title:"Système TPMS — Module récepteur panne", system:"TPMS — Module central", severity:"low",
  desc:"Le module récepteur du système TPMS (qui reçoit les signaux des capteurs) est défectueux.",
  causes:[["Module TPMS HS","70%"],["Câblage module endommagé","40%"]],
  steps:["Vérifier alimentation module TPMS","Remplacer module si HS","Reprogrammer tous les capteurs après remplacement"],
  parts:[["Module TPMS","100–400€"]], cost:"150–500€", warning:null, keywords:["tpms","module","récepteur","pneu"]},

// ═══════════════════════════════════════
// INJECTION DIRECTE ESSENCE (GDI/FSI/TSI)
// ═══════════════════════════════════════
"P0087":{ title:"Pression carburant — Trop basse (rampe/ligne)", system:"Moteur — Pression carburant", severity:"high",
  desc:"La pression dans la rampe carburant est insuffisante. Ratés possibles, perte de puissance.",
  causes:[["Filtre à carburant colmaté","80%"],["Pompe basse pression faible","70%"],["Régulateur pression BP HS","55%"],["Fuite dans circuit carburant","40%"],["Pompe HP usée (GDI/FSI)","35%"]],
  steps:["Remplacer filtre à carburant (priorité)","Mesurer pression BP (spec: 3–6 bars)","Mesurer pression HP sur moteurs GDI (spec: 50–200 bars)","Vérifier fuites circuit carburant","Contrôler pompe BP (débit suffisant?)"],
  parts:[["Filtre carburant","15–60€"],["Pompe BP électrique","80–250€"],["Pompe HP GDI","200–600€"]], cost:"30–800€", warning:null, keywords:["pression","carburant","pompe","filtre","gdi","fsi","tsi","injection directe"]},

"P0088":{ title:"Pression carburant — Trop haute", system:"Moteur — Pression carburant", severity:"high",
  desc:"La pression dans la rampe carburant est trop élevée. Injecteurs qui fuient de carburant.",
  causes:[["Régulateur de pression carburant HS","80%"],["Retour carburant bloqué","60%"],["Capteur pression HS (fausse lecture)","30%"]],
  steps:["Vérifier pression réelle avec manomètre calibré","Contrôler régulateur pression (retour carburant)","Vérifier filtre retour carburant","Remplacer régulateur si HS"],
  parts:[["Régulateur pression carburant","30–120€"]], cost:"40–200€", warning:null, keywords:["pression","carburant","haute","régulateur","injecteur"]},

"P0089":{ title:"Régulateur pression carburant — Performance", system:"Moteur — Pression carburant", severity:"high",
  desc:"Le régulateur de pression carburant ne maintient pas une pression stable.",
  causes:[["Régulateur pression usé","75%"],["Pompe carburant à débit variable HS","55%"],["Injecteurs qui fuient","40%"]],
  steps:["Mesurer pression rampe au ralenti et en accélération","Comparer pression réelle vs consigne sur scanner","Remplacer régulateur si instable","Contrôler pompe et injecteurs"],
  parts:[["Régulateur pression","30–120€"]], cost:"40–300€", warning:null, keywords:["pression","carburant","régulateur","pompe","instable"]},

// ═══════════════════════════════════════
// DIRECTION ÉLECTRIQUE EPS
// ═══════════════════════════════════════
"C0076":{ title:"Direction assistée électrique (EPS) — Panne générale", system:"Direction — EPS électrique", severity:"high",
  desc:"Le système de direction assistée électrique a détecté une panne. Direction lourde ou assistance nulle.",
  causes:[["Module EPS défectueux","65%"],["Surchauffe moteur EPS","60%"],["Capteur couple volant HS","55%"],["Câblage EPS endommagé","40%"]],
  steps:["Couper et rallumer le contact (reset temporaire possible)","Scanner pour codes EPS spécifiques","Vérifier tension batterie (EPS très sensible aux tensions basses)","Contrôler capteur couple","Remplacer colonne EPS si module interne HS"],
  parts:[["Colonne EPS (reconditionnée)","400–1200€"],["Capteur couple","100–300€"]], cost:"200–1500€", warning:"Direction lourde — conduire prudemment.", keywords:["eps","direction","assistée","électrique","colonne","volant","lourd"]},

"C0077":{ title:"Moteur direction assistée électrique — Surintensité", system:"Direction — EPS", severity:"high",
  desc:"Le moteur électrique de la direction assistée tire trop de courant. Risque de coupure assistance.",
  causes:[["Moteur EPS en surcharge (crémaillère grippée)","70%"],["Moteur EPS défectueux","60%"],["Câblage court-circuit","40%"]],
  steps:["Vérifier si crémaillère tourne librement (friction anormale)","Contrôler courant moteur EPS sur scanner","Lubrifier crémaillère si nécessaire","Remplacer moteur EPS ou colonne complète"],
  parts:[["Moteur EPS","200–600€"],["Colonne EPS complète","400–1200€"]], cost:"200–1500€", warning:"Direction peut couper l'assistance à chaud.", keywords:["eps","direction","moteur","surintensité","crémaillère"]},

"C0080":{ title:"Capteur couple direction — Panne (Torque Sensor)", system:"Direction — EPS / Capteur couple", severity:"medium",
  desc:"Le capteur de couple (effort sur le volant) de la direction assistée électrique est défaillant.",
  causes:[["Capteur couple HS","75%"],["Connecteur oxydé","50%"],["Colonne direction endommagée","30%"]],
  steps:["Scanner pour lire valeur capteur couple (doit varier avec rotation volant)","Vérifier connecteur","Remplacer capteur ou colonne complète selon modèle"],
  parts:[["Capteur couple EPS","100–300€"],["Colonne EPS","400–1200€"]], cost:"150–1500€", warning:null, keywords:["eps","direction","couple","capteur","volant","assistance"]},

// ═══════════════════════════════════════
// CODES ÉLECTRIQUES / MODULES AVANCÉS
// ═══════════════════════════════════════
"P0610":{ title:"Module ECU — Valeurs options de contrôle invalides", system:"Électronique — ECU", severity:"medium",
  desc:"L'ECU contient des données de configuration invalides ou corrompues.",
  causes:[["Déconnexion batterie a effacé mémoire ECU","60%"],["Mise à jour firmware incomplète","50%"],["ECU défectueux","30%"]],
  steps:["Reconnecter batterie et laisser l'ECU réapprendre","Faire un cycle de démarrage complet","Effectuer procédures d'apprentissage (papillon, IMMO) via scanner","Reprogrammer ECU si nécessaire"],
  parts:[["Reprogrammation ECU","100–300€"]], cost:"100–400€", warning:null, keywords:["ecu","configuration","mémoire","programmation"]},

"P0685":{ title:"Circuit relais alimentation ECU — Circuit ouvert", system:"Électronique — Relais ECU", severity:"high",
  desc:"Le relais principal d'alimentation de l'ECU est défectueux ou son circuit est ouvert.",
  causes:[["Relais principal ECU grillé","75%"],["Câblage relais coupé","55%"],["Corrosion sur les contacts relais","40%"]],
  steps:["Localiser le relais principal ECU (boîtier fusibles compartiment moteur)","Tester le relais (swap avec relais identique)","Vérifier câblage alimentation ECU","Remplacer relais si HS"],
  parts:[["Relais principal ECU","10–40€"]], cost:"15–80€", warning:"ECU sans alimentation = non-démarrage.", keywords:["relais","ecu","alimentation","démarrage","principal"]},

"P0690":{ title:"Circuit relais alimentation ECU — Signal haut", system:"Électronique — Relais ECU", severity:"high",
  desc:"Court-circuit dans le circuit d'alimentation de l'ECU.",
  causes:[["Court-circuit câblage alimentation ECU","65%"],["Relais bloqué fermé","50%"]],
  steps:["Inspecter câblage alimentation ECU","Tester relais","Chercher court-circuit sur ligne +12V ECU"],
  parts:[["Relais principal","10–40€"]], cost:"15–200€", warning:null, keywords:["relais","ecu","court-circuit","alimentation"]},

"P1601":{ title:"Erreur communication ECU — Réseau interne", system:"Électronique — ECU interne", severity:"medium",
  desc:"Erreur de communication interne dans l'ECU. Peut être transitoire ou signe de défaillance.",
  causes:[["Tension alimentation ECU instable","60%"],["ECU HS en interne","40%"],["Interférence électromagnétique","20%"]],
  steps:["Vérifier tension batterie et alternateur","Contrôler masses carrosserie","Effacer le code et observer si revient","Si persistant: ECU à faire réviser"],
  parts:[["Réparation ECU","150–500€"],["ECU neuf/reconditionné","250–800€"]], cost:"150–900€", warning:null, keywords:["ecu","communication","interne","réseau"]},

// ═══════════════════════════════════════
// BOÎTE DE VITESSES MANUELLE / CVT / DSG
// ═══════════════════════════════════════
"P0810":{ title:"Position embrayage — Signal hors plage", system:"Transmission — Embrayage électronique", severity:"medium",
  desc:"Le capteur de position d'embrayage (sur boîtes robotisées/DSG) donne un signal incorrect.",
  causes:[["Capteur position embrayage HS","75%"],["Fourchette embrayage usée","55%"],["Câblage endommagé","40%"]],
  steps:["Lire la position embrayage sur scanner","Mesurer résistance capteur","Vérifier jeu fourchette","Remplacer capteur ou fourchette si HS"],
  parts:[["Capteur embrayage","50–150€"]], cost:"80–400€", warning:null, keywords:["embrayage","dsg","robotisé","capteur","position"]},

"P0811":{ title:"Embrayage — Glissement excessif", system:"Transmission — Embrayage", severity:"high",
  desc:"L'embrayage glisse excessivement. Disques usés ou problème hydraulique.",
  causes:[["Disques embrayage usés","80%"],["Fluide hydraulique embrayage bas","50%"],["Cylindre émetteur ou récepteur HS","40%"]],
  steps:["Vérifier niveau fluide embrayage (si hydraulique)","Tester le glissement en charge (accélération forte en côte)","Remplacer kit embrayage si usé","Purger circuit hydraulique embrayage"],
  parts:[["Kit embrayage complet","200–600€"],["Fluide embrayage","10–20€"]], cost:"300–900€", warning:null, keywords:["embrayage","glissement","usé","hydraulique","disque"]},

"P0820":{ title:"Capteur position boîte X/Y — Circuit", system:"Transmission — Boîte robotisée", severity:"medium",
  desc:"Capteur de position de la boîte de vitesses robotisée (axes X et Y) défectueux.",
  causes:[["Capteur position X/Y HS","75%"],["Câblage endommagé","50%"],["Module boîte robotisée HS","35%"]],
  steps:["Lire position boîte sur scanner","Mesurer signal capteur","Remplacer capteur ou module boîte"],
  parts:[["Capteur position boîte","60–200€"]], cost:"80–500€", warning:null, keywords:["boîte","robotisée","capteur","position","dsg"]},

// ═══════════════════════════════════════
// CODES CONFORT / ÉLECTRONIQUE VÉHICULE
// ═══════════════════════════════════════
"B2477":{ title:"Module configuration — Code non programmé", system:"Électronique — BCM / Configuration", severity:"low",
  desc:"Le module de contrôle n'a pas été correctement configuré ou programmé.",
  causes:[["Module remplacé sans reprogrammation","80%"],["Batterie déchargée a effacé la configuration","40%"]],
  steps:["Reprogrammer le module avec scanner spécialisé","Effectuer procédures d'initialisation","Vérifier codes option véhicule"],
  parts:[["Reprogrammation module","80–250€"]], cost:"80–300€", warning:null, keywords:["module","programmation","configuration","bcm"]},

"B1011":{ title:"Mémoire EEPROM module — Erreur interne", system:"Électronique — Module ECU/BCM", severity:"medium",
  desc:"Erreur dans la mémoire interne EEPROM du module. Données corrompues.",
  causes:[["Surtension (alternateur HS)","60%"],["Module en fin de vie","50%"],["Interférence lors d'une mise à jour","30%"]],
  steps:["Vérifier tension alternateur","Tenter reset module (batterie déconnectée 15 min)","Reprogrammer module via scanner","Remplacer module si données corrompues irréparables"],
  parts:[["Module (reconditionné)","150–600€"]], cost:"100–800€", warning:null, keywords:["eeprom","mémoire","module","corruption","données"]},

"P0630":{ title:"VIN non programmé / Incompatible — ECU/PCM", system:"Électronique — ECU / VIN", severity:"high",
  desc:"Le numéro d'identification du véhicule (VIN) dans l'ECU ne correspond pas ou n'est pas programmé.",
  causes:[["ECU de remplacement non programmé pour ce VIN","85%"],["ECU d'un autre véhicule installé","70%"],["Problème anti-démarrage IMMO","30%"]],
  steps:["Reprogrammer le VIN dans l'ECU via outil constructeur","Vérifier compatibilité ECU avec le véhicule","Programmer l'anti-démarrage (IMMO) en même temps"],
  parts:[["Programmation VIN ECU","100–300€"]], cost:"100–400€", warning:"Véhicule peut ne pas démarrer (IMMO actif).", keywords:["vin","ecu","programmation","immo","antidémarrage"]},

// ═══════════════════════════════════════
// CODES MOTEURS CODES SPÉCIFIQUES ASIE
// ═══════════════════════════════════════
"P1031":{ title:"Rapport lambda sonde — Commutation rapide (Subaru)", system:"Moteur — Sonde Lambda (Subaru)", severity:"medium",
  desc:"Code constructeur Subaru. La sonde lambda commute trop rapidement — signe d'une sonde vieillissante.",
  causes:[["Sonde lambda amont vieillissante","80%"],["Fuite d'air légère","40%"]],
  steps:["Observer fréquence de commutation sur scanner","Comparer avec valeur nominal (0.5–1 Hz)","Remplacer sonde si >2 Hz ou réponse erratique"],
  parts:[["Sonde lambda Subaru","60–200€"]], cost:"80–250€", warning:null, keywords:["subaru","lambda","sonde","commutation"]},

"P1085":{ title:"Richesse carburant nuage de brume — Clapet phaseur (Mitsubishi MIVEC)", system:"Moteur — MIVEC (Mitsubishi)", severity:"medium",
  desc:"Code constructeur Mitsubishi. Problème sur le système MIVEC (calage variable Mitsubishi).",
  causes:[["Huile moteur mauvaise qualité","85%"],["Solénoïde MIVEC encrassé","70%"],["Filtre huile MIVEC bouché","55%"]],
  steps:["Vidange huile immédiate","Nettoyer solénoïde MIVEC","Vérifier filtre huile MIVEC","Tester déplacement calage sur scanner"],
  parts:[["Solénoïde MIVEC","50–150€"]], cost:"50–300€", warning:null, keywords:["mitsubishi","mivec","calage","huile","solénoïde"]},

"P1250":{ title:"Système de démarrage à froid — Soupape IACV (Nissan/Infiniti)", system:"Moteur — Démarrage froid (Nissan)", severity:"low",
  desc:"Code constructeur Nissan. Problème sur la soupape de contrôle d'air au ralenti froid.",
  causes:[["Vanne IACV encrassée","80%"],["Câblage vanne HS","40%"]],
  steps:["Nettoyer vanne IACV","Vérifier câblage","Remplacer si HS"],
  parts:[["Vanne IACV Nissan","40–120€"]], cost:"40–200€", warning:null, keywords:["nissan","iacv","ralenti","démarrage","froid"]},

"P1351":{ title:"Circuit allumage — Vérification bobine (Honda)", system:"Moteur — Allumage (Honda)", severity:"high",
  desc:"Code constructeur Honda. Signal de contrôle bobine d'allumage anormal.",
  causes:[["Bobine d'allumage Honda HS","80%"],["Bougies très usées (NGK recommandé)","70%"],["Module allumage HS","30%"]],
  steps:["Remplacer bougies NGK selon spécification Honda","Tester bobines individuellement","Remplacer bobine HS"],
  parts:[["Bobine Honda","40–120€"],["Bougies NGK kit","20–60€"]], cost:"50–300€", warning:null, keywords:["honda","allumage","bobine","bougie"]},

"P1399":{ title:"Ratés d'allumage aléatoires (Honda)", system:"Moteur — Allumage (Honda)", severity:"high",
  desc:"Code constructeur Honda. Ratés d'allumage aléatoires sur plusieurs cylindres.",
  causes:[["Bougies NGK Iridium usées","90%"],["Bobines d'allumage HS","75%"],["Injecteurs encrassés","55%"]],
  steps:["Remplacer toutes les bougies (NGK Iridium recommandé)","Tester et permuter bobines","Nettoyer injecteurs"],
  parts:[["Kit bougies NGK Iridium Honda","30–80€"],["Bobine Honda","40–120€"]], cost:"50–400€", warning:null, keywords:["honda","ratés","allumage","bougie","bobine"]},

"P1400":{ title:"Régulation EGR basse pression (Mazda/Mitsubishi)", system:"Moteur — EGR (Mazda/Mitsubishi)", severity:"medium",
  desc:"Code constructeur Mazda/Mitsubishi. Circuit EGR basse pression défaillant.",
  causes:[["Soupape EGR encrassée","80%"],["Capteur pression EGR HS","55%"]],
  steps:["Nettoyer soupape EGR","Tester capteur pression","Remplacer si nécessaire"],
  parts:[["Soupape EGR","80–250€"]], cost:"80–350€", warning:null, keywords:["mazda","mitsubishi","egr","basse pression"]},

"P1410":{ title:"Soupape de commutation EGR — Signal (Nissan)", system:"Moteur — EGR (Nissan)", severity:"medium",
  desc:"Code constructeur Nissan. Soupape de commutation EGR défaillante.",
  causes:[["Soupape EGR encrassée","80%"],["Solénoïde EGR HS","50%"]],
  steps:["Nettoyer soupape EGR","Tester solénoïde","Remplacer si HS"],
  parts:[["Soupape EGR Nissan","80–300€"]], cost:"80–350€", warning:null, keywords:["nissan","egr","soupape","solénoïde"]},

// ═══════════════════════════════════════
// CODES SPÉCIFIQUES EUROPE
// ═══════════════════════════════════════
"P1110":{ title:"Capteur débit MAF — Contamination détectée (Renault/Peugeot)", system:"Moteur — MAF (Constructeur FR)", severity:"medium",
  desc:"Code constructeur Renault/Peugeot/Citroën. Le MAF a détecté une contamination (huile, saleté).",
  causes:[["Filtre à air saturé (huile aspirée)","75%"],["MAF très encrassé","70%"],["Joint de filtre air mal posé","40%"]],
  steps:["Remplacer filtre à air immédiatement","Nettoyer MAF avec spray spécialisé","Vérifier joint de la boîte à air","Remplacer MAF si signal toujours incorrect"],
  parts:[["Filtre à air","10–30€"],["Débitmètre MAF","60–200€"]], cost:"20–250€", warning:null, keywords:["renault","peugeot","citroen","maf","débitmètre","filtre","contamination"]},

"P1340":{ title:"Corrélation capteur PMH — Injection diesel (PSA)", system:"Moteur Diesel — Distribution (PSA)", severity:"high",
  desc:"Code constructeur PSA (Peugeot/Citroën). Incohérence entre capteur PMH et injection diesel.",
  causes:[["Décalage distribution diesel","75%"],["Capteur PMH HS","60%"],["Pompe injection mal positionnée","40%"]],
  steps:["Vérifier calage distribution diesel","Contrôler capteur PMH","Vérifier calage pompe injection si présente"],
  parts:[["Capteur PMH","30–80€"],["Kit calage distribution","150–400€"]], cost:"100–600€", warning:"Ne pas rouler — risque calage moteur.", keywords:["peugeot","citroen","diesel","distribution","pmh","calage"]},

"P1536":{ title:"Circuit frein de stationnement — Appliqué pendant conduite (Renault)", system:"Freins — Frein stationnement (Renault)", severity:"medium",
  desc:"Code constructeur Renault. Le frein de stationnement électrique est détecté appliqué pendant la conduite.",
  causes:[["Capteur frein à main électrique HS","70%"],["Module frein à main HS","55%"],["Frein à main partiellement serré","40%"]],
  steps:["Vérifier si le frein à main est bien desserré","Scanner codes frein électrique","Calibrer frein à main via scanner","Remplacer capteur ou module si HS"],
  parts:[["Module EPB","200–600€"]], cost:"100–700€", warning:null, keywords:["renault","frein","stationnement","épb","électrique"]},

// ═══════════════════════════════════════
// CAPTEURS AVANCÉS
// ═══════════════════════════════════════
"P0453":{ title:"Capteur pression EVAP — Signal haut", system:"Moteur — EVAP", severity:"low",
  desc:"Le capteur de pression du système EVAP lit une valeur anormalement haute.",
  causes:[["Durit pression EVAP bouchée","65%"],["Capteur EVAP HS","55%"],["Canister saturé","35%"]],
  steps:["Inspecter durit capteur EVAP","Tester capteur","Remplacer si HS"],
  parts:[["Capteur pression EVAP","30–80€"]], cost:"35–120€", warning:null, keywords:["evap","pression","capteur"]},

"P0452":{ title:"Capteur pression EVAP — Signal bas", system:"Moteur — EVAP", severity:"low",
  desc:"Signal du capteur de pression EVAP trop bas. Court-circuit ou fuite importante.",
  causes:[["Fuite dans le système EVAP","70%"],["Capteur HS","50%"]],
  steps:["Chercher grandes fuites EVAP","Tester capteur","Remplacer si HS"],
  parts:[["Capteur pression EVAP","30–80€"]], cost:"35–200€", warning:null, keywords:["evap","pression","capteur","fuite"]},

"P0461":{ title:"Capteur niveau carburant — Signal hors plage", system:"Carrosserie — Jauge carburant", severity:"low",
  desc:"Signal de la jauge de carburant hors plage. Jauge erronée ou capteur HS.",
  causes:[["Flotteur jauge carburant HS","75%"],["Câblage jauge endommagé","50%"],["Module tableau de bord HS","20%"]],
  steps:["Vérifier résistance capteur jauge (varie de ~5Ω plein à ~180Ω vide selon marque)","Vérifier câblage jauge","Remplacer capteur jauge (dans le réservoir)"],
  parts:[["Capteur jauge carburant","40–150€"]], cost:"60–250€", warning:null, keywords:["jauge","carburant","niveau","réservoir","flotteur"]},

"P0462":{ title:"Capteur niveau carburant — Signal bas", system:"Carrosserie — Jauge carburant", severity:"low",
  desc:"La jauge carburant lit constamment un niveau bas ou vide.",
  causes:[["Flotteur bloqué en bas","70%"],["Court-circuit câblage jauge","55%"]],
  steps:["Tester résistance capteur à différents niveaux","Vérifier câblage","Remplacer capteur si HS"],
  parts:[["Capteur jauge","40–150€"]], cost:"60–250€", warning:null, keywords:["jauge","carburant","bas","flotteur"]},

"P0463":{ title:"Capteur niveau carburant — Signal haut", system:"Carrosserie — Jauge carburant", severity:"low",
  desc:"La jauge carburant lit constamment plein quelle que soit la quantité.",
  causes:[["Flotteur bloqué en haut","70%"],["Circuit ouvert câblage","55%"]],
  steps:["Tester résistance capteur","Vérifier câblage","Remplacer capteur si HS"],
  parts:[["Capteur jauge","40–150€"]], cost:"60–250€", warning:null, keywords:["jauge","carburant","plein","flotteur"]},

// ═══════════════════════════════════════
// VÉHICULE ÉLECTRIQUE PUR (BEV)
// ═══════════════════════════════════════
"P0B00":{ title:"Batterie HV — Isolation faible détectée", system:"Électrique BEV — Isolation HV", severity:"critical",
  desc:"Une fuite d'isolation a été détectée dans le circuit haute tension du véhicule électrique. Risque électrique grave.",
  causes:[["Câble HV orange endommagé","70%"],["Eau infiltrée dans batterie ou moteur","65%"],["Composant HV fissuré","40%"]],
  steps:["Arrêter le véhicule immédiatement","Ne toucher aucun câble orange","Appeler technicien HV certifié","Ne pas tenter de recharger"],
  parts:[["Câblage HV","300–1200€"],["Joint batterie","100–400€"]], cost:"300–3000€", warning:"🚨 RISQUE ÉLECTROCUTION — Technicien HV UNIQUEMENT.", keywords:["électrique","bev","isolation","haute tension","fuite","câble orange"]},

"P0B30":{ title:"Batterie HV — Module 1 température haute", system:"Électrique BEV — Thermique batterie", severity:"high",
  desc:"Le premier module de la batterie HV est en surchauffe. Performances réduites automatiquement.",
  causes:[["Système de refroidissement batterie insuffisant","80%"],["Conduite agressive prolongée","60%"],["Capteur température HS","30%"]],
  steps:["Garer le véhicule et laisser refroidir 30 min","Vérifier le niveau de liquide de refroidissement batterie","Vérifier pompe eau batterie","Scanner pour lire toutes températures modules"],
  parts:[["Pompe eau batterie","150–500€"],["Liquide refroidissement","20–40€"]], cost:"50–700€", warning:"Réduire les performances — ne pas recharger rapidement (DC).", keywords:["électrique","batterie","température","module","surchauffe","refroidissement"]},

"P0B90":{ title:"Moteur électrique principal — Surintensité", system:"Électrique BEV — Moteur traction", severity:"critical",
  desc:"Le moteur électrique de traction consomme un courant excessif. Risque dommage onduleur.",
  causes:[["Court-circuit bobinage moteur","65%"],["Onduleur défectueux","60%"],["Capteur courant HS","35%"]],
  steps:["Arrêter le véhicule","Scanner codes onduleur","Mesurer isolement bobinage moteur","Technicien HV spécialisé"],
  parts:[["Moteur électrique (reconditionné)","2000–8000€"],["Onduleur","1000–4000€"]], cost:"1000–12000€", warning:"🚨 Risque casse moteur électrique — Arrêt immédiat.", keywords:["électrique","moteur","surintensité","onduleur","traction"]},

"P0BC0":{ title:"Batterie HV — Capacité dégradée / SOH faible", system:"Électrique BEV — Santé batterie", severity:"medium",
  desc:"L'état de santé (SOH) de la batterie HV est tombé en dessous du seuil. Autonomie réduite.",
  causes:[["Batterie âgée (>8 ans ou >200 000km)","85%"],["Charges rapides DC excessives","55%"],["Exposition chaleur extrême répétée","40%"]],
  steps:["Faire mesurer le SOH par technicien HV (outil spécialisé)","Si SOH <70% → remplacement ou reconditionnement","Éviter charges DC rapides quotidiennes"],
  parts:[["Batterie HV reconditionnée","3000–8000€"],["Modules cellule","500–2000€"]], cost:"1000–10000€", warning:"Autonomie réduite — prévoir recharges plus fréquentes.", keywords:["électrique","batterie","capacité","autonomie","soh","dégradée","vieille"]},

"P0C00":{ title:"Moteur électrique A — Panne générale", system:"Électrique BEV — Moteur A", severity:"critical",
  desc:"Le moteur électrique A (avant ou arrière selon configuration) a détecté une panne interne.",
  causes:[["Stator ou rotor défectueux","65%"],["Onduleur A HS","60%"],["Résolveur de position HS","45%"]],
  steps:["Scanner pour codes onduleur","Mesurer température moteur A","Vérifier résolveur (capteur position rotor)","Technicien HV spécialisé"],
  parts:[["Moteur électrique A (reconditionné)","2000–8000€"],["Résolveur","200–600€"]], cost:"500–10000€", warning:"🚨 Perte de traction — Spécialiste EV uniquement.", keywords:["électrique","moteur","traction","rotor","stator","onduleur","ev"]},

"P0C40":{ title:"Système de recharge — Contacteur de charge HS", system:"Électrique BEV — Recharge", severity:"high",
  desc:"Le contacteur de charge de la borne de charge est défectueux. Recharge impossible ou interrompue.",
  causes:[["Contacteur de charge usé/grillé","75%"],["Câblage recharge endommagé","50%"],["Module de recharge OBC HS","40%"]],
  steps:["Essayer différents câbles et bornes de recharge","Scanner codes OBC","Vérifier contacteur physiquement","Remplacer contacteur ou OBC"],
  parts:[["Contacteur de charge","100–400€"],["OBC chargeur","500–2000€"]], cost:"100–2500€", warning:"Recharge impossible.", keywords:["électrique","recharge","contacteur","charge","borne","ev","bev"]},

"P0C60":{ title:"Système de freinage régénératif — Panne", system:"Électrique BEV — Frein régénératif", severity:"high",
  desc:"Le freinage régénératif est défaillant. L'énergie n'est plus récupérée au freinage.",
  causes:[["Module ABS/Regen HS","65%"],["Capteur pression frein HS","55%"],["Batterie ne peut plus accepter la charge (pleine)","30%"]],
  steps:["Scanner codes ABS et regen","Vérifier si batterie est pleine (regen désactivé logiquement)","Contrôler capteur pression frein","Remplacer module si HS"],
  parts:[["Module frein régénératif","400–1200€"]], cost:"200–1500€", warning:"Autonomie réduite sans récupération.", keywords:["électrique","freinage","régénératif","récupération","abs","bev"]},

"P0C80":{ title:"Pile à combustible — Panne (FCEV)", system:"Pile à combustible FCEV — Système H2", severity:"critical",
  desc:"Panne dans le système de pile à combustible (Hydrogen Fuel Cell). Propulsion compromise.",
  causes:[["Membrane échangeuse proton dégradée","65%"],["Système alimentation H2 HS","60%"],["Module de contrôle FCEV HS","45%"]],
  steps:["Arrêter le véhicule en lieu ventilé","Scanner codes système FCEV","Technicien H2 certifié obligatoire","Ne pas ouvrir le capot si fuite H2 suspectée"],
  parts:[], cost:"Variable — spécialiste FCEV", warning:"🚨 Hydrogène inflammable — Zone ventilée, technicien H2 uniquement.", keywords:["hydrogène","pile à combustible","fcev","h2","toyota mirai","nexo"]},

// ═══════════════════════════════════════
// SUSPENSION / CHÂSSIS AVANCÉ
// ═══════════════════════════════════════
"C1200":{ title:"Suspension pneumatique — Pression insuffisante", system:"Châssis — Suspension pneumatique", severity:"high",
  desc:"La pression dans le circuit de suspension pneumatique est insuffisante. Véhicule trop bas ou assis sur les butées.",
  causes:[["Fuite dans soufflet de suspension","80%"],["Compresseur suspension pneumatique HS","70%"],["Clapet de retenue HS","50%"],["Valve sélectrice HS","40%"]],
  steps:["Observer hauteur de caisse — si anormalement basse → suspension pneumatique HS","Scanner pour lire pressions circuits","Localiser fuite avec eau savonneuse sur soufflets","Tester compresseur (doit démarrer sur commande scanner)","Remplacer soufflet ou compresseur si HS"],
  parts:[["Soufflet suspension pneumatique","150–500€"],["Compresseur suspension","300–900€"],["Valve bloc","200–600€"]], cost:"200–2000€", warning:"Ne pas rouler sur butées mécaniques — dommages chassis.", keywords:["suspension","pneumatique","air","hauteur","soufflet","compresseur","range rover","audi","mercedes"]},

"C1201":{ title:"Compresseur suspension pneumatique — Circuit", system:"Châssis — Suspension pneumatique", severity:"high",
  desc:"Le compresseur de la suspension pneumatique ne fonctionne pas électriquement.",
  causes:[["Relais compresseur grillé","70%"],["Compresseur HS","65%"],["Câblage endommagé","50%"],["Fusible grillé","40%"]],
  steps:["Vérifier fusible et relais compresseur","Mesurer alimentation compresseur","Activer compresseur via scanner — entendre démarrage","Remplacer compresseur si HS"],
  parts:[["Compresseur suspension","300–900€"],["Relais","10–30€"]], cost:"50–1000€", warning:null, keywords:["suspension","pneumatique","compresseur","relais","hauteur"]},

"C1205":{ title:"Hauteur de caisse — Capteur avant droit défectueux", system:"Châssis — Suspension / Capteur hauteur", severity:"medium",
  desc:"Le capteur de hauteur de la suspension avant droite donne un signal incorrect.",
  causes:[["Capteur hauteur HS (usure ou choc)","80%"],["Rotule capteur hauteur cassée","65%"],["Câblage endommagé","40%"]],
  steps:["Localiser capteur hauteur (bras de suspension)","Inspecter rotule et biellette capteur","Mesurer signal (varie avec compression/détente)","Remplacer capteur si HS"],
  parts:[["Capteur hauteur de caisse","50–200€"]], cost:"70–300€", warning:null, keywords:["hauteur","capteur","suspension","avant droit","pneumatique"]},

"C1210":{ title:"Hauteur de caisse — Capteur avant gauche défectueux", system:"Châssis — Capteur hauteur", severity:"medium",
  desc:"Signal incorrect du capteur de hauteur avant gauche.",
  causes:[["Capteur hauteur HS","80%"],["Biellette cassée","65%"],["Câblage endommagé","40%"]],
  steps:["Inspecter capteur et biellette AV-GA","Mesurer signal","Remplacer si HS"],
  parts:[["Capteur hauteur AV-GA","50–200€"]], cost:"70–300€", warning:null, keywords:["hauteur","capteur","avant gauche","suspension"]},

"C1215":{ title:"Hauteur de caisse — Capteur arrière droit défectueux", system:"Châssis — Capteur hauteur", severity:"medium",
  desc:"Signal incorrect capteur hauteur arrière droit.",
  causes:[["Capteur hauteur HS","80%"],["Biellette cassée","65%"]],
  steps:["Inspecter capteur AR-DR","Remplacer si HS"],
  parts:[["Capteur hauteur AR-DR","50–200€"]], cost:"70–300€", warning:null, keywords:["hauteur","capteur","arrière droit","suspension"]},

"C1220":{ title:"Hauteur de caisse — Capteur arrière gauche défectueux", system:"Châssis — Capteur hauteur", severity:"medium",
  desc:"Signal incorrect capteur hauteur arrière gauche.",
  causes:[["Capteur hauteur HS","80%"],["Biellette cassée","65%"]],
  steps:["Inspecter capteur AR-GA","Remplacer si HS"],
  parts:[["Capteur hauteur AR-GA","50–200€"]], cost:"70–300€", warning:null, keywords:["hauteur","capteur","arrière gauche","suspension"]},

"C1701":{ title:"Transfert 4x4 — Mode de transfert incorrect", system:"Transmission — Boîte de transfert 4x4", severity:"high",
  desc:"La boîte de transfert 4x4 n'engage pas correctement le mode demandé (2H/4H/4L).",
  causes:[["Moteur électrique transfert HS","65%"],["Encodeur position transfert HS","60%"],["Huile transfert dégradée","50%"],["Câblage commande transfert HS","40%"]],
  steps:["Vérifier huile boîte de transfert","Scanner pour lire position encodeur","Activer le mode via scanner","Inspecter moteur électrique transfert","Remplacer moteur ou encodeur si HS"],
  parts:[["Moteur transfert 4x4","200–600€"],["Encodeur position","80–250€"],["Huile transfert","20–50€"]], cost:"50–900€", warning:null, keywords:["4x4","transfert","4wd","4l","4h","mode","boîte"]},

"C1702":{ title:"Différentiel central — Blocage HS", system:"Transmission — 4x4 AWD", severity:"high",
  desc:"Le différentiel central ne peut pas être bloqué ou débloqué correctement.",
  causes:[["Actuateur blocage différentiel HS","70%"],["Huile différentiel très dégradée","55%"],["Câblage actuateur endommagé","40%"]],
  steps:["Vérifier huile différentiel","Tester actuateur via scanner","Mesurer résistance actuateur","Remplacer actuateur si HS"],
  parts:[["Actuateur différentiel","150–500€"],["Huile différentiel","20–50€"]], cost:"50–700€", warning:null, keywords:["différentiel","blocage","4x4","awd","actuateur"]},

"C1730":{ title:"Coupleur Haldex / Torsen — Performance dégradée", system:"Transmission — Coupleur AWD", severity:"high",
  desc:"Le coupleur Haldex (AWD électronique) ne distribue plus correctement le couple aux roues arrière.",
  causes:[["Huile Haldex très dégradée ou basse","85%"],["Filtre Haldex bouché","75%"],["Pompe Haldex HS","60%"],["Module Haldex HS","40%"]],
  steps:["Changer l'huile Haldex ET le filtre (kit complet)","Nettoyer le filtre magnétique","Tester débit pompe Haldex","Remplacer module si nécessaire"],
  parts:[["Kit huile+filtre Haldex","60–150€"],["Pompe Haldex","200–500€"],["Module Haldex","300–800€"]], cost:"80–1200€", warning:null, keywords:["haldex","awd","coupleur","4x4","huile","filtre","volkswagen","audi","volvo"]},

// ═══════════════════════════════════════
// CVT — BOÎTE DE VITESSES CONTINUE
// ═══════════════════════════════════════
"P0730":{ title:"Rapport de transmission incorrect — CVT", system:"Transmission — CVT", severity:"high",
  desc:"La boîte CVT ne maintient pas le rapport correct. Patinage ou mode sécurité.",
  causes:[["Courroie CVT usée / cassée","80%"],["Huile CVT dégradée (mauvaise marque)","75%"],["Poulies CVT usées","60%"],["Solénoïdes de pression HS","45%"]],
  steps:["Changer l'huile CVT avec la marque EXACTE recommandée (Nissan NS-2/NS-3, Toyota TC, Honda HCF-2…)","Scanner les pressions CVT","Contrôler la courroie (si accessible)","Ne JAMAIS mettre huile ATF générique dans une CVT"],
  parts:[["Huile CVT d'origine (5L)","60–200€"],["Courroie CVT","400–1200€"],["Kit poulies CVT","800–2500€"]], cost:"80–4000€", warning:"Utiliser UNIQUEMENT l'huile CVT homologuée — huile incorrecte = casse garantie.", keywords:["cvt","boîte","courroie","poulie","huile","nissan","honda","toyota","subaru"]},

"P0868":{ title:"Pression huile transmission CVT — Basse", system:"Transmission — CVT", severity:"high",
  desc:"La pression hydraulique dans la CVT est insuffisante. Risque de patinage courroie.",
  causes:[["Huile CVT très basse ou dégradée","85%"],["Pompe à huile CVT HS","60%"],["Solénoïde pression HS","45%"]],
  steps:["Vérifier niveau huile CVT","Changer l'huile CVT si dégradée","Mesurer pression CVT","Contrôler pompe et solénoïdes"],
  parts:[["Huile CVT","60–200€"],["Solénoïde pression","80–250€"]], cost:"80–600€", warning:"Pression basse = casse courroie rapide.", keywords:["cvt","pression","huile","pompe","courroie"]},

"P0894":{ title:"Patinage de transmission détecté", system:"Transmission — CVT / Automatique", severity:"high",
  desc:"La boîte CVT ou automatique patine : l'entrée et la sortie ne sont pas synchronisées.",
  causes:[["Courroie CVT très usée","80%"],["Embrayages multidisques usés (auto)","65%"],["Pression hydraulique insuffisante","60%"],["Huile dégradée","55%"]],
  steps:["Changer huile CVT/ATF en priorité","Scanner données slip/patinage","Contrôler pressions CVT","Envisager remplacement courroie ou révision boîte"],
  parts:[["Huile CVT/ATF","60–200€"],["Révision CVT complète","1500–4000€"]], cost:"80–5000€", warning:"Patinage = usure rapide — intervenir vite.", keywords:["patinage","cvt","courroie","transmission","slip"]},

// ═══════════════════════════════════════
// PHARES / ÉCLAIRAGE AVANCÉ
// ═══════════════════════════════════════
"B0081":{ title:"Module projecteur xénon/LED gauche — Panne", system:"Carrosserie — Éclairage xénon/LED", severity:"medium",
  desc:"Le module de commande du projecteur xénon ou LED gauche est défaillant.",
  causes:[["Ampoule xénon grillée","75%"],["Module ballast xénon HS","65%"],["Câblage endommagé","40%"]],
  steps:["Vérifier ampoule xénon (D1S/D2S/D3S selon modèle)","Tester le ballast (échange côté droit)","Vérifier câblage et connecteur","Remplacer ballast ou ampoule"],
  parts:[["Ampoule xénon D1S/D2S","50–200€"],["Ballast xénon","100–400€"]], cost:"60–500€", warning:null, keywords:["xénon","led","phare","ballast","ampoule","éclairage","gauche"]},

"B0082":{ title:"Module projecteur xénon/LED droit — Panne", system:"Carrosserie — Éclairage xénon/LED", severity:"medium",
  desc:"Le module de commande du projecteur xénon ou LED droit est défaillant.",
  causes:[["Ampoule xénon grillée","75%"],["Ballast HS","65%"],["Câblage endommagé","40%"]],
  steps:["Vérifier ampoule","Tester ballast par échange","Vérifier câblage","Remplacer si HS"],
  parts:[["Ampoule xénon","50–200€"],["Ballast","100–400€"]], cost:"60–500€", warning:null, keywords:["xénon","led","phare","ballast","éclairage","droit"]},

"B0083":{ title:"Moteur correcteur de portée phares — Gauche", system:"Carrosserie — Correcteur phares", severity:"low",
  desc:"Le moteur de correction de portée des phares (réglage automatique de hauteur de faisceau) est HS.",
  causes:[["Moteur correcteur HS","75%"],["Capteur assiette HS (voir C12xx)","50%"],["Câblage endommagé","35%"]],
  steps:["Mesurer signal correcteur sur scanner","Tester moteur correcteur (12V direct)","Remplacer moteur si HS"],
  parts:[["Moteur correcteur phare","40–150€"]], cost:"50–200€", warning:null, keywords:["phare","correcteur","portée","moteur","hauteur"]},

// ═══════════════════════════════════════
// SYSTÈME ANTIVOL / IMMO
// ═══════════════════════════════════════
"B3055":{ title:"Clé de contact — Non reconnue par l'antidémarrage (IMMO)", system:"Sécurité — Antidémarrage IMMO", severity:"high",
  desc:"La clé de contact n'est pas reconnue par le système antidémarrage immobiliser. Démarrage impossible.",
  causes:[["Transpondeur clé HS ou démagnetisé","75%"],["Antenne IMMO HS (autour du contacteur)","60%"],["Module IMMO HS","40%"],["ECU non appairé","30%"]],
  steps:["Essayer l'autre clé si disponible","Vérifier batterie de la télécommande","Approcher la clé du contacteur (transpondeur passif)","Scanner pour lire statut IMMO","Faire programmer nouvelle clé chez le constructeur"],
  parts:[["Clé de remplacement","100–400€"],["Antenne IMMO","30–100€"],["Module IMMO","150–400€"]], cost:"100–600€", warning:"Véhicule ne démarre pas — appel technicien IMMO.", keywords:["clé","immo","antidémarrage","transpondeur","démarrage","reconnaissance"]},

"B3056":{ title:"Antidémarrage — Code incorrect reçu", system:"Sécurité — Antidémarrage IMMO", severity:"high",
  desc:"Le module IMMO reçoit un code incorrect depuis la clé. Tentative d'effraction détectée.",
  causes:[["Clé endommagée ou transpondeur faible","70%"],["Antenne IMMO HS","55%"],["Module IMMO mal appairé","35%"]],
  steps:["Essayer autre clé","Rapprocher clé du contacteur","Scanner IMMO pour statut","Reprogrammer clé via outil constructeur"],
  parts:[["Clé programmée","150–400€"],["Antenne IMMO","30–100€"]], cost:"100–500€", warning:"Démarrage bloqué.", keywords:["immo","clé","antidémarrage","code","transpondeur"]},

// ═══════════════════════════════════════
// CODES CONSTRUCTEURS SUPPLÉMENTAIRES
// ═══════════════════════════════════════

// --- Toyota / Lexus supplémentaires ---
"P1121":{ title:"Capteur TPS — Signal incohérent (Toyota)", system:"Moteur — Papillon (Toyota)", severity:"medium",
  desc:"Code constructeur Toyota. Les signaux des deux capteurs TPS ne correspondent pas.",
  causes:[["Corps papillon Toyota (ETCS) usé","85%"],["Câblage TPS endommagé","35%"]],
  steps:["Effectuer apprentissage papillon (procédure Toyota)","Observer les deux signaux TPS sur scanner","Remplacer corps papillon si signaux incohérents"],
  parts:[["Corps papillon Toyota","100–300€"]], cost:"100–400€", warning:null, keywords:["toyota","papillon","tps","etcs","apprentissage"]},

"P1155":{ title:"Sonde A/F ratio — Chauffage Banc 2 (Toyota/Lexus)", system:"Moteur — Sonde AF B2 (Toyota)", severity:"medium",
  desc:"Code constructeur Toyota/Lexus. Le chauffage de la sonde A/F large bande banc 2 est lent.",
  causes:[["Sonde A/F B2 vieillissante","80%"],["Câblage chauffage HS","45%"]],
  steps:["Mesurer résistance chauffage sonde B2","Remplacer si lente ou chauffage HS"],
  parts:[["Sonde A/F Toyota B2","80–250€"]], cost:"100–300€", warning:null, keywords:["toyota","lexus","sonde","af","banc 2","chauffage"]},

"P1604":{ title:"Système de démarrage — ECU corruption mémoire (Toyota)", system:"Moteur — ECU (Toyota)", severity:"high",
  desc:"Code constructeur Toyota. L'ECU a détecté une corruption dans sa mémoire interne au démarrage.",
  causes:[["Batterie 12V très faible lors du démarrage","65%"],["Surtension transitoire","45%"],["ECU défaillant","30%"]],
  steps:["Tester batterie 12V","Vérifier alternateur","Effacer le code","Si revient → ECU à remettre en service chez Toyota"],
  parts:[["ECU Toyota (reconditionné)","300–800€"]], cost:"100–900€", warning:null, keywords:["toyota","ecu","mémoire","démarrage","corruption"]},

"P1633":{ title:"Signal tension ECU — Panne (Toyota)", system:"Moteur — ECU alimentation (Toyota)", severity:"medium",
  desc:"Code constructeur Toyota. La tension d'alimentation de l'ECU est instable.",
  causes:[["Batterie 12V faible","75%"],["Connexion batterie oxydée","60%"],["Relais principal ECU HS","40%"]],
  steps:["Nettoyer bornes batterie","Tester batterie","Vérifier relais principal","Remplacer si instabilité persistante"],
  parts:[["Batterie","80–200€"],["Relais principal","10–40€"]], cost:"20–250€", warning:null, keywords:["toyota","ecu","tension","batterie","alimentation"]},

// --- Nissan / Infiniti supplémentaires ---
"P1148":{ title:"Sonde lambda — Commande en boucle fermée impossible (Nissan)", system:"Moteur — Lambda (Nissan)", severity:"medium",
  desc:"Code constructeur Nissan. La commande en boucle fermée via la sonde lambda ne peut pas s'activer.",
  causes:[["Sonde lambda amont vieillissante","80%"],["Température moteur insuffisante","50%"],["Fuite d'air admission","40%"]],
  steps:["Attendre que le moteur atteigne la température (>80°C)","Si code persiste → sonde lambda à remplacer","Vérifier thermostat et température moteur"],
  parts:[["Sonde lambda Nissan","50–180€"]], cost:"70–250€", warning:null, keywords:["nissan","lambda","boucle fermée","température"]},

"P1217":{ title:"Surchauffe moteur — Capteur confirme (Nissan)", system:"Moteur — Refroidissement (Nissan)", severity:"critical",
  desc:"Code constructeur Nissan. Surchauffe confirmée par capteur ECT.",
  causes:[["Thermostat bloqué fermé","80%"],["Pompe eau HS","70%"],["Fuite liquide refroidissement","65%"]],
  steps:["Arrêt immédiat — même procédure que P0217","Vérifier thermostat, pompe, liquide","Chercher fuite"],
  parts:[["Thermostat","15–60€"],["Pompe eau","50–200€"]], cost:"50–2000€", warning:"🚨 ARRÊT IMMÉDIAT.", keywords:["nissan","surchauffe","température","refroidissement"]},

"P1268":{ title:"Régulation pression carburant — Trop haute (Nissan)", system:"Moteur — Pression carburant (Nissan)", severity:"medium",
  desc:"Code constructeur Nissan. La pression carburant dépasse la valeur maximale autorisée.",
  causes:[["Régulateur pression HS","80%"],["Retour carburant bouché","60%"]],
  steps:["Mesurer pression carburant","Vérifier régulateur","Contrôler conduite de retour"],
  parts:[["Régulateur pression","30–120€"]], cost:"40–200€", warning:null, keywords:["nissan","carburant","pression","régulateur"]},

// --- Honda / Acura supplémentaires ---
"P1166":{ title:"Sonde A/F — Chauffage banc 1 (Honda)", system:"Moteur — Sonde AF (Honda)", severity:"medium",
  desc:"Code constructeur Honda. Chauffage de la sonde A/F banc 1 insuffisant.",
  causes:[["Sonde A/F Honda vieillissante","80%"],["Câblage chauffage HS","45%"]],
  steps:["Mesurer résistance chauffage sonde","Remplacer si lente"],
  parts:[["Sonde A/F Honda","80–250€"]], cost:"100–300€", warning:null, keywords:["honda","sonde","af","chauffage","lambda"]},

"P1259":{ title:"Système VTEC — Malfonctionnement (Honda)", system:"Moteur — VTEC (Honda)", severity:"medium",
  desc:"Code constructeur Honda. Le système VTEC (calage variable soupapes) est défaillant.",
  causes:[["Huile moteur mauvaise qualité ou niveau bas","90%"],["Solénoïde VTEC encrassé","75%"],["Pression huile insuffisante pour VTEC","65%"],["Capteur pression huile VTEC HS","40%"]],
  steps:["Changer l'huile moteur IMMÉDIATEMENT (priorité absolue)","Mesurer pression huile (min 3 bars à régime)","Nettoyer solénoïde VTEC","Tester capteur pression huile VTEC"],
  parts:[["Solénoïde VTEC Honda","50–150€"],["Capteur pression huile","20–60€"]], cost:"50–300€", warning:"Changer l'huile avant tout autre diagnostic.", keywords:["honda","vtec","huile","solénoïde","calage","soupape"]},

"P1381":{ title:"Ratés d'allumage — Capteur PMH non confirmé (Honda)", system:"Moteur — Allumage (Honda)", severity:"high",
  desc:"Code constructeur Honda. Ratés d'allumage avec perte du signal PMH.",
  causes:[["Capteur PMH (CKP/CMP Honda) HS","75%"],["Câblage endommagé","55%"]],
  steps:["Vérifier capteur PMH Honda","Mesurer signal","Remplacer si HS"],
  parts:[["Capteur CKP Honda","30–100€"]], cost:"50–180€", warning:null, keywords:["honda","pmh","ckp","raté","allumage"]},

// --- Subaru supplémentaires ---
"P0021":{ title:"Calage arbre à cames admission — Avance excessive Banc 2 (Subaru H4)", system:"Moteur — VVT Banc 2 (Subaru)", severity:"medium",
  desc:"Code fréquent sur Subaru moteurs H4 (boxer). Arbre à cames B2 trop avancé.",
  causes:[["Huile moteur dégradée (Subaru H4 = vidange 5000km maxi)","90%"],["Solénoïde VVT B2 Subaru encrassé","75%"],["Déphaseur B2 bloqué","55%"]],
  steps:["Vidange huile URGENTE (Subaru boxer très sensible à l'huile)","Nettoyer solénoïde VVT B2","Tester déphaseur B2"],
  parts:[["Solénoïde VVT Subaru B2","50–150€"],["Déphaseur B2","150–400€"]], cost:"50–500€", warning:"Subaru boxer : changez l'huile toutes les 5000–7500km MAX.", keywords:["subaru","boxer","h4","vvt","banc 2","avance","huile"]},

"P0022":{ title:"Calage arbre à cames admission — Retard excessif Banc 2", system:"Moteur — VVT Banc 2", severity:"medium",
  desc:"Arbre à cames admission banc 2 trop retardé.",
  causes:[["Solénoïde VVT B2 bloqué retard","75%"],["Huile dégradée","70%"]],
  steps:["Vidange huile","Nettoyer solénoïde","Tester déphaseur"],
  parts:[["Solénoïde VVT B2","50–150€"]], cost:"50–500€", warning:null, keywords:["subaru","vvt","banc 2","retard"]},

"P0420":{ title:"Efficacité catalyseur faible — Banc 1 (Subaru H4)", system:"Moteur — Catalyseur Subaru", severity:"medium",
  desc:"Code très fréquent sur Subaru EJ et FB. Le catalyseur n'est plus efficace.",
  causes:[["Catalyseur usé (boxer très chaud = usure rapide)","85%"],["Sonde lambda aval HS","50%"],["Joint de culasse percé (problème fréquent EJ25)","30%"]],
  steps:["Vérifier d'abord joint de culasse (émulsion eau/huile sur bouchon)","Observer signaux sondes amont et aval","Remplacer catalyseur si confirmé HS","Attention aux joint culasse Subaru EJ25 — vérifier systématiquement"],
  parts:[["Catalyseur Subaru","200–600€"],["Joint de culasse Subaru EJ","300–600€"]], cost:"100–2000€", warning:"Sur Subaru EJ25: toujours vérifier les joints de culasse.", keywords:["subaru","catalyseur","ej25","joint culasse","sonde","lambda"]},

// --- Mitsubishi supplémentaires ---
"P0132":{ title:"Sonde lambda amont — Signal riche (Mitsubishi)", system:"Moteur — Lambda (Mitsubishi)", severity:"medium",
  desc:"Code fréquent Mitsubishi. La sonde lambda amont lit un mélange constamment riche.",
  causes:[["Injecteur Mitsubishi fuite","75%"],["Sonde lambda HS","60%"],["Pression carburant élevée","45%"]],
  steps:["Contrôler pression carburant","Tester fuites injecteurs","Remplacer sonde si HS"],
  parts:[["Sonde lambda Mitsubishi","50–180€"]], cost:"60–300€", warning:null, keywords:["mitsubishi","lambda","riche","injecteur"]},

"P1500":{ title:"Circuit alternateur — Signal L manquant (Mitsubishi)", system:"Électrique — Alternateur (Mitsubishi)", severity:"medium",
  desc:"Code constructeur Mitsubishi. Le signal de charge L de l'alternateur est absent.",
  causes:[["Courroie alternateur cassée/glissante","70%"],["Alternateur HS","65%"],["Câblage signal L HS","40%"]],
  steps:["Vérifier état et tension courroie alternateur","Mesurer tension alternateur","Remplacer si HS"],
  parts:[["Courroie alternateur","20–50€"],["Alternateur","120–350€"]], cost:"30–450€", warning:null, keywords:["mitsubishi","alternateur","courroie","signal","charge"]},

// --- BMW / Mercedes supplémentaires ---
"P1421":{ title:"Chauffe-catalyseur secondaire — Court-circuit (BMW)", system:"Moteur — Catalyseur (BMW)", severity:"medium",
  desc:"Code constructeur BMW. Problème sur le système de préchauffage du catalyseur secondaire.",
  causes:[["Résistance de chauffe catalyseur HS","70%"],["Relais chauffe HS","50%"]],
  steps:["Localiser résistance chauffe catalyseur (entre moteur et cat)","Mesurer résistance","Remplacer si HS"],
  parts:[["Résistance chauffe catalyseur","100–300€"]], cost:"100–400€", warning:null, keywords:["bmw","catalyseur","chauffage","préchauffage"]},

"P0299":{ title:"Turbo N18/N20 — Underboost (BMW Mini)", system:"Moteur — Turbo (BMW/Mini)", severity:"high",
  desc:"Code fréquent BMW N18/N20. Pression turbo insuffisante. Wastegate électronique suspect.",
  causes:[["Actuateur wastegate électrique HS (N20/N55)","80%"],["Durit intercooler fissurée","70%"],["Joint turbo admisison percé","55%"]],
  steps:["Inspecter toutes durits intercooler (N20: durits plastique souvent fissurées)","Tester actuateur wastegate électrique","Mesurer boost sur scanner vs consigne","Remplacer actuateur ou durits"],
  parts:[["Actuateur wastegate BMW N20","150–500€"],["Kit durits intercooler silicone","80–200€"]], cost:"80–700€", warning:null, keywords:["bmw","mini","turbo","n20","n55","underboost","wastegate"]},

"P0597":{ title:"Thermostat — Circuit commande ouvert (BMW/VAG)", system:"Moteur — Thermostat électronique", severity:"medium",
  desc:"Le thermostat à commande électronique (map thermostat) est défaillant. Fréquent sur BMW et VAG.",
  causes:[["Thermostat électronique HS","85%"],["Câblage thermostat coupé","45%"]],
  steps:["Mesurer résistance thermostat (spec: variable selon modèle)","Vérifier alimentation","Remplacer thermostat"],
  parts:[["Thermostat électronique BMW/VAG","60–200€"]], cost:"80–300€", warning:null, keywords:["bmw","vag","thermostat","électronique","température"]},

// --- Volkswagen / Audi supplémentaires ---
"P0299":{ title:"Turbo — Underboost N75 DSG (VW/Audi 2.0 TDI)", system:"Moteur — Turbo (VW/Audi)", severity:"high",
  desc:"Code très fréquent VW/Audi 2.0 TDI. Turbo VNT en sous-pression. Actuateur N75 ou palettes VNT encrassées.",
  causes:[["Palettes VNT turbo encrassées de calamine","85%"],["Solénoïde N75 HS","70%"],["Fuite tuyau intercooler","55%"]],
  steps:["Nettoyer palettes VNT (EGR+turbo nettoyage combiné)","Tester solénoïde N75 (résistance 25–30Ω)","Inspecter tuyaux intercooler","Remonter turbo et vérifier liberté palettes"],
  parts:[["Solénoïde N75","40–120€"],["Turbo VNT reconditionné","400–1200€"],["Kit nettoyage VNT","20–40€"]], cost:"50–1500€", warning:null, keywords:["volkswagen","audi","tdi","turbo","vnt","n75","palettes","underboost"]},

"P2015":{ title:"Soupape de swirl admission — Position capteur (VW/Audi 2.0 TDI)", system:"Moteur — Admission (VW/Audi TDI)", severity:"medium",
  desc:"Code très fréquent VW/Audi 2.0 TDI. Les soupapes de swirl dans le collecteur d'admission sont bloquées.",
  causes:[["Axe soupapes swirl brisé (problème connu 2.0 TDI EA189)","90%"],["Mécanisme grippé par calamine","75%"]],
  steps:["Déposer le collecteur d'admission","Inspecter les soupapes de swirl (souvent en plastique cassé)","Remplacer le collecteur ou kit soupapes","Nettoyer collecteur de calamine"],
  parts:[["Collecteur admission swirl VW TDI","200–500€"],["Kit réparation soupapes","50–150€"]], cost:"100–600€", warning:"Problème connu EA189 — vérifier rappel constructeur.", keywords:["volkswagen","audi","tdi","swirl","admission","collecteur","ea189"]},

"P0087":{ title:"Pression carburant basse — Pompe basse pression (VW/Audi 2.0 TSI)", system:"Moteur — Carburant (VW/Audi TSI)", severity:"high",
  desc:"Code fréquent VW/Audi 2.0 TSI. La pompe basse pression in-tank ne fournit pas assez de débit.",
  causes:[["Pompe BP in-tank défectueuse (problème connu TSI)","80%"],["Filtre à carburant bouché","50%"],["Régulateur pression BP HS","40%"]],
  steps:["Mesurer pression BP (doit être >3.5 bars au démarrage)","Remplacer pompe BP in-tank","Remplacer filtre carburant"],
  parts:[["Pompe BP in-tank VW TSI","150–400€"],["Filtre carburant","20–50€"]], cost:"100–500€", warning:null, keywords:["volkswagen","audi","tsi","pompe","carburant","basse pression","in-tank"]},

// --- Peugeot / Citroën / Renault supplémentaires ---
"P1351":{ title:"Circuit bobine allumage — Contrôle (Peugeot TU/THP)", system:"Moteur — Allumage (Peugeot)", severity:"high",
  desc:"Code constructeur Peugeot. Problème sur le circuit de contrôle des bobines d'allumage.",
  causes:[["Bobine(s) allumage THP HS","80%"],["Bougies très encrassées (THP: changer à 30 000km)","70%"]],
  steps:["Remplacer bougies à 30 000km sur THP","Tester bobines","Remplacer si HS"],
  parts:[["Bougies THP","30–80€"],["Bobine","40–120€"]], cost:"40–300€", warning:null, keywords:["peugeot","thp","bobine","allumage","bougie"]},

"P1190":{ title:"Soupape DPF — Régénération impossible (Peugeot/Citroën)", system:"Diesel — DPF (PSA)", severity:"high",
  desc:"Code constructeur PSA. Le système ne peut pas initier une régénération DPF.",
  causes:[["7e injecteur PSA HS (modèles avec injecteur additionnel)","75%"],["Capteur température entrée DPF HS","60%"],["DPF trop saturé","55%"]],
  steps:["Tester 7e injecteur (si présent)","Contrôler capteurs température DPF","Tenter régénération forcée sur scanner","Nettoyage professionnel DPF"],
  parts:[["7e injecteur PSA","100–300€"],["Nettoyage DPF","200–400€"]], cost:"100–500€", warning:null, keywords:["peugeot","citroen","dpf","fap","régénération","7e injecteur"]},

"P1425":{ title:"Soupape EGR — Contrôle (Renault dCi)", system:"Moteur — EGR (Renault dCi)", severity:"medium",
  desc:"Code constructeur Renault dCi. La soupape EGR ne répond pas correctement.",
  causes:[["Soupape EGR encrassée (dCi très sensible)","90%"],["Collecteur admission encrassé","70%"]],
  steps:["Démonter et nettoyer soupape EGR Renault","Nettoyer collecteur admission","Vérifier câblage actuateur"],
  parts:[["Soupape EGR Renault dCi","80–250€"]], cost:"80–350€", warning:null, keywords:["renault","dci","egr","soupape","encrassement"]},

// --- Hyundai / Kia supplémentaires ---
"P0017":{ title:"Corrélation vilebrequin/arbre à cames admission — Banc 1 (Hyundai/Kia Theta)", system:"Moteur — Distribution (Hyundai)", severity:"high",
  desc:"Code fréquent Hyundai/Kia moteur Theta II. Décalage distribution — lié à un problème de lubrification connu.",
  causes:[["Consommation d'huile excessive (problème connu Theta II)","80%"],["Chaîne distribution étirée (manque d'huile)","75%"],["Solénoïde CVVT HS","55%"]],
  steps:["Vérifier niveau d'huile IMMÉDIATEMENT (peut être à sec)","Vérifier consommation huile (max 1L/1000km)","Scanner calage distribution","Vérifier rappel Hyundai/Kia (classe action Theta II)"],
  parts:[["Kit chaîne distribution Hyundai","150–500€"],["Solénoïde CVVT","50–150€"]], cost:"200–1500€", warning:"Moteur Theta II : vérifier huile très régulièrement — consommation connue.", keywords:["hyundai","kia","theta","distribution","chaîne","huile","cvvt","recall"]},

"P1326":{ title:"Cliquetis anormal détecté — Cognement moteur (Hyundai/Kia)", system:"Moteur — Protection cognement (Hyundai)", severity:"critical",
  desc:"Code constructeur Hyundai/Kia. Capteur de cliquetis détecte un cognement anormal du moteur. Souvent lié au défaut Theta II.",
  causes:[["Bielles endommagées (défaut connu Theta II GDI)","70%"],["Niveau huile très bas","80%"],["Vieille huile dégradée","65%"]],
  steps:["Arrêter le moteur IMMÉDIATEMENT","Vérifier niveau d'huile","Si bielles touchent → moteur irréparable","Contacter Hyundai/Kia pour garantie étendue (classe action)"],
  parts:[["Moteur de remplacement","3000–8000€"],["Réparation bielles (si possible)","1500–4000€"]], cost:"1500–10000€", warning:"🚨 ARRÊT IMMÉDIAT — Risque saisissement moteur. Contacter Hyundai/Kia pour garantie.", keywords:["hyundai","kia","theta","cognement","bielle","huile","recall","garantie"]},

// ═══════════════════════════════════════
// CODES SUPPLÉMENTAIRES COURANTS
// ═══════════════════════════════════════
"P0036":{ title:"Circuit chauffage sonde lambda aval — Banc 1", system:"Moteur — Sondes Lambda", severity:"low",
  desc:"Problème circuit de chauffage sonde lambda aval banc 1.",
  causes:[["Sonde lambda aval HS (chauffage grillé)","80%"],["Fusible chauffage grillé","35%"],["Câblage endommagé","45%"]],
  steps:["Vérifier fusible chauffage sondes","Mesurer résistance chauffage sonde aval (3–30Ω)","Remplacer sonde si HS"],
  parts:[["Sonde lambda aval B1","40–150€"]], cost:"60–200€", warning:null, keywords:["lambda","aval","chauffage","sonde","b1"]},

"P0051":{ title:"Circuit chauffage sonde lambda amont — Banc 2", system:"Moteur — Sondes Lambda B2", severity:"medium",
  desc:"Problème circuit chauffage sonde lambda amont banc 2 (moteurs V).",
  causes:[["Sonde amont B2 HS","80%"],["Câblage endommagé","50%"]],
  steps:["Mesurer résistance chauffage sonde amont B2","Remplacer si HS"],
  parts:[["Sonde lambda amont B2","50–180€"]], cost:"70–250€", warning:null, keywords:["lambda","amont","banc 2","chauffage"]},

"P0141":{ title:"Circuit chauffage sonde lambda aval — Panne", system:"Moteur — Sondes Lambda", severity:"low",
  desc:"Le circuit de chauffage de la sonde lambda aval est défaillant.",
  causes:[["Sonde aval HS (résistance chauffage ouverte)","80%"],["Câblage endommagé","45%"]],
  steps:["Mesurer résistance chauffage (3–30Ω)","Vérifier câblage","Remplacer sonde si HS"],
  parts:[["Sonde lambda aval","40–150€"]], cost:"60–200€", warning:null, keywords:["lambda","aval","chauffage","circuit"]},

"P0304":{ title:"Ratés d'allumage — Cylindre 4 (Avec données freeze frame)", system:"Moteur — Allumage Cyl.4", severity:"high",
  desc:"Ratés d'allumage confirmés cylindre 4. Consulter le freeze frame pour conditions d'apparition.",
  causes:[["Bougie Cyl.4 usée","90%"],["Bobine Cyl.4 HS","80%"],["Injecteur Cyl.4 encrassé","55%"],["Compression faible","25%"]],
  steps:["Remplacer bougie Cyl.4","Permuter bobine Cyl.4","Test compression Cyl.4","Nettoyer injecteur Cyl.4"],
  parts:[["Bougie Cyl.4","5–25€"],["Bobine Cyl.4","30–120€"]], cost:"30–250€", warning:null, keywords:["raté","cylindre 4","bougie","bobine","freeze frame"]},

"P0354":{ title:"Circuit bobine allumage cylindre 4 — Primaire/Secondaire", system:"Moteur — Allumage", severity:"high",
  desc:"Problème électrique spécifique à la bobine du cylindre 4.",
  causes:[["Bobine Cyl.4 HS","80%"],["Câblage bobine coupé","50%"]],
  steps:["Mesurer résistance primaire (0.5–2Ω) et secondaire (6000–15000Ω)","Remplacer bobine si HS"],
  parts:[["Bobine allumage Cyl.4","30–120€"]], cost:"40–150€", warning:null, keywords:["bobine","cylindre 4","allumage","primaire","secondaire"]},

"P0430":{ title:"Efficacité catalyseur Banc 2 — Seuil dépassé", system:"Moteur — Catalyseur B2", severity:"medium",
  desc:"Code fréquent sur moteurs V6/V8. Catalyseur banc 2 inefficace.",
  causes:[["Catalyseur B2 usé","85%"],["Sonde aval B2 HS","50%"],["Mélange non résolu B2","40%"]],
  steps:["Résoudre codes mélange B2 d'abord","Observer signaux sondes B2 amont/aval","Remplacer catalyseur B2 si confirmé"],
  parts:[["Catalyseur B2","200–600€"],["Sonde lambda aval B2","40–150€"]], cost:"100–700€", warning:null, keywords:["catalyseur","banc 2","v6","v8","sonde"]},

"P0456":{ title:"EVAP — Très petite fuite détectée", system:"Moteur — EVAP", severity:"low",
  desc:"Très petite fuite EVAP (<0.5mm). Souvent bouchon réservoir ou joint.",
  causes:[["Joint bouchon réservoir usé","75%"],["Micro-fissure durit EVAP","35%"]],
  steps:["Essayer bouchon neuf","Test fumée si bouchon ne résout pas"],
  parts:[["Bouchon réservoir","10–30€"]], cost:"10–150€", warning:null, keywords:["evap","fuite","petite","bouchon"]},

"P0571":{ title:"Interrupteur pédale frein — Circuit A", system:"Freins — Interrupteur pédale", severity:"medium",
  desc:"Signal de l'interrupteur de pédale de frein incorrect. Feux de freinage peuvent être affectés.",
  causes:[["Interrupteur pédale frein HS","80%"],["Pédale de frein mal ajustée","40%"],["Câblage endommagé","35%"]],
  steps:["Localiser interrupteur pédale frein (haut de la pédale)","Mesurer signal (fermeture à la pression pédale)","Ajuster la position ou remplacer interrupteur"],
  parts:[["Interrupteur pédale frein","15–60€"]], cost:"20–100€", warning:"Feux de freinage inopérants — danger de circulation.", keywords:["frein","interrupteur","pédale","feux","stop"]},

"P0615":{ title:"Circuit relais démarreur — Panne", system:"Moteur — Démarreur", severity:"high",
  desc:"Problème sur le circuit de commande du relais démarreur. Démarrage impossible.",
  causes:[["Relais démarreur HS","70%"],["Câblage commande relais coupé","55%"],["Contacteur d'antidémarrage HS","40%"]],
  steps:["Vérifier relais démarreur (claquement à la clé)","Mesurer alimentation relais","Tester commande relais ECU","Remplacer relais si HS"],
  parts:[["Relais démarreur","10–40€"],["Démarreur complet","120–350€"]], cost:"15–400€", warning:"Véhicule ne démarre pas.", keywords:["démarreur","relais","démarrage","contacteur"]},

"P0616":{ title:"Circuit démarreur — Signal bas", system:"Moteur — Démarreur", severity:"high",
  desc:"Signal trop bas sur le circuit de commande du démarreur.",
  causes:[["Câblage commande court-circuité à la masse","60%"],["Relais démarreur HS","55%"]],
  steps:["Mesurer signal commande démarreur","Vérifier câblage","Remplacer relais si HS"],
  parts:[["Relais démarreur","10–40€"]], cost:"15–80€", warning:null, keywords:["démarreur","signal","commande"]},

"P0617":{ title:"Circuit démarreur — Signal haut", system:"Moteur — Démarreur", severity:"high",
  desc:"Signal trop haut sur commande démarreur. Court-circuit possible.",
  causes:[["Court-circuit câblage commande démarreur","65%"],["Contacteur démarreur bloqué","45%"]],
  steps:["Inspecter câblage","Tester contacteur","Remplacer si HS"],
  parts:[["Démarreur","120–350€"]], cost:"50–400€", warning:null, keywords:["démarreur","court-circuit","contacteur"]},

"P0650":{ title:"Voyant MIL — Circuit de commande", system:"Tableau de bord — Voyant moteur", severity:"low",
  desc:"Le circuit de commande du voyant moteur (MIL/Check Engine) est défaillant. Le voyant peut rester allumé ou éteint.",
  causes:[["Câblage voyant MIL HS","60%"],["Module tableau de bord HS","45%"]],
  steps:["Vérifier câblage voyant","Tester avec scanner l'activation du MIL","Remplacer cluster si nécessaire"],
  parts:[["Tableau de bord (reconditionné)","200–800€"]], cost:"30–900€", warning:null, keywords:["voyant","moteur","mil","check engine","tableau bord"]},

"P0660":{ title:"Soupape swirl admission — Circuit ouvert (Banc 1)", system:"Moteur — Admission variable", severity:"medium",
  desc:"Circuit ouvert sur la soupape de swirl admission banc 1.",
  causes:[["Actionneur soupape swirl HS","70%"],["Câblage coupé","55%"]],
  steps:["Localiser actionneur soupape swirl","Mesurer résistance","Vérifier câblage","Remplacer si HS"],
  parts:[["Actionneur soupape swirl","50–200€"]], cost:"60–300€", warning:null, keywords:["swirl","admission","soupape","circuit"]},

"P0705":{ title:"Capteur position sélecteur boîte automatique (PRNDL) — Panne", system:"Transmission automatique — Sélecteur", severity:"medium",
  desc:"Le capteur de position du sélecteur de boîte automatique est défaillant. La boîte peut rester en sécurité.",
  causes:[["Capteur PRNDL HS","75%"],["Câblage endommagé","55%"],["Sélecteur mal ajusté","35%"]],
  steps:["Lire position sélecteur sur scanner (P, R, N, D…)","Vérifier ajustement câble sélecteur (si câble mécanique)","Mesurer signal capteur","Remplacer capteur PRNDL si HS"],
  parts:[["Capteur PRNDL","40–150€"]], cost:"60–250€", warning:null, keywords:["boîte","automatique","sélecteur","prndl","position"]},

"P0706":{ title:"Capteur PRNDL — Signal hors plage", system:"Transmission automatique — Sélecteur", severity:"medium",
  desc:"Signal du capteur de position sélecteur hors plage normale.",
  causes:[["Capteur PRNDL usé","70%"],["Câble sélecteur désajusté","50%"]],
  steps:["Ajuster câble sélecteur","Mesurer signal capteur","Remplacer si HS"],
  parts:[["Capteur PRNDL","40–150€"]], cost:"60–250€", warning:null, keywords:["boite","automatique","sélecteur","position"]},
};
