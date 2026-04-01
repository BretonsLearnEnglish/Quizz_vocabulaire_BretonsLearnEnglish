const quiz = [

{ question: "skill", choix: ["compétence", "connaissance", "talent"], bonneReponse: 0 },
{ question: "knowledge", choix: ["connaissance", "compétence", "savoir-faire"], bonneReponse: 0 },
{ question: "to belong to", choix: ["appartenir à", "posséder", "donner"], bonneReponse: 0 },
{ question: "to share", choix: ["partager", "garder", "prendre"], bonneReponse: 0 },
{ question: "spare time", choix: ["temps libre", "travail", "vacances"], bonneReponse: 0 },
{ question: "academic", choix: ["scolaire", "sportif", "artistique"], bonneReponse: 0 },
{ question: "extracurricular", choix: ["extrascolaire", "obligatoire", "principal"], bonneReponse: 0 },
{ question: "to spend time with", choix: ["passer du temps avec", "éviter", "ignorer"], bonneReponse: 0 },
{ question: "to grow up", choix: ["grandir", "naître", "mourir"], bonneReponse: 0 },
{ question: "proud", choix: ["fier", "honteux", "triste"], bonneReponse: 0 },

{ question: "skinny", choix: ["maigre", "gros", "grand"], bonneReponse: 0 },
{ question: "tiny", choix: ["minuscule", "énorme", "moyen"], bonneReponse: 0 },
{ question: "healthy", choix: ["en bonne santé", "malade", "fatigué"], bonneReponse: 0 },
{ question: "unhealthy", choix: ["malsain", "sain", "équilibré"], bonneReponse: 0 },
{ question: "tolerant", choix: ["tolérant", "strict", "méchant"], bonneReponse: 0 },
{ question: "keen", choix: ["passionné", "désintéressé", "fatigué"], bonneReponse: 0 },
{ question: "enthusiastic", choix: ["enthousiaste", "triste", "ennuyé"], bonneReponse: 0 },
{ question: "fair", choix: ["juste", "injuste", "méchant"], bonneReponse: 0 },
{ question: "rude", choix: ["impoli", "gentil", "poli"], bonneReponse: 0 },
{ question: "impolite", choix: ["impoli", "poli", "sympa"], bonneReponse: 0 },

{ question: "location", choix: ["lieu", "voyage", "carte"], bonneReponse: 0 },
{ question: "journey", choix: ["voyage", "trajet", "maison"], bonneReponse: 0 },
{ question: "to get from…to…", choix: ["aller de…à…", "rester", "partir"], bonneReponse: 0 },
{ question: "sightseeing", choix: ["visite touristique", "travail", "sport"], bonneReponse: 0 },
{ question: "RV", choix: ["camping-car", "voiture", "bus"], bonneReponse: 0 },
{ question: "carshare", choix: ["covoiturage", "taxi", "bus"], bonneReponse: 0 },
{ question: "migration", choix: ["migration", "tourisme", "voyage"], bonneReponse: 0 },
{ question: "migrant", choix: ["migrant", "touriste", "citoyen"], bonneReponse: 0 },
{ question: "accessibility", choix: ["accessibilité", "distance", "chemin"], bonneReponse: 0 },
{ question: "nearby", choix: ["à proximité", "loin", "partout"], bonneReponse: 0 },

{ question: "landscape", choix: ["paysage", "ville", "maison"], bonneReponse: 0 },
{ question: "waterfall", choix: ["cascade", "rivière", "lac"], bonneReponse: 0 },
{ question: "dry", choix: ["sec", "humide", "mouillé"], bonneReponse: 0 },
{ question: "hurricane", choix: ["ouragan", "pluie", "vent"], bonneReponse: 0 },
{ question: "humid", choix: ["humide", "sec", "chaud"], bonneReponse: 0 },
{ question: "flood", choix: ["inondation", "sécheresse", "tempête"], bonneReponse: 0 },
{ question: "yearly", choix: ["annuel", "mensuel", "hebdomadaire"], bonneReponse: 0 },
{ question: "bright", choix: ["lumineux", "sombre", "gris"], bonneReponse: 0 },
{ question: "harvest", choix: ["récolte", "plantation", "culture"], bonneReponse: 0 },
{ question: "summit", choix: ["sommet", "vallée", "colline"], bonneReponse: 0 },

{ question: "alley", choix: ["ruelle", "avenue", "route"], bonneReponse: 0 },
{ question: "downtown", choix: ["centre-ville", "banlieue", "campagne"], bonneReponse: 0 },
{ question: "suburbs", choix: ["banlieue", "centre-ville", "campagne"], bonneReponse: 0 },
{ question: "countryside", choix: ["campagne", "ville", "banlieue"], bonneReponse: 0 },
{ question: "river bank", choix: ["rive", "montagne", "forêt"], bonneReponse: 0 },
{ question: "route", choix: ["itinéraire", "maison", "voyage"], bonneReponse: 0 },

{ question: "spicy", choix: ["épicé", "sucré", "amer"], bonneReponse: 0 },
{ question: "bitter", choix: ["amer", "sucré", "salé"], bonneReponse: 0 },
{ question: "sour", choix: ["acide", "sucré", "amer"], bonneReponse: 0 },

{ question: "character", choix: ["personnage", "acteur", "scène"], bonneReponse: 0 },
{ question: "scenery", choix: ["décor", "personnage", "histoire"], bonneReponse: 0 },
{ question: "setting", choix: ["cadre", "acteur", "lieu fictif"], bonneReponse: 0 },

{ question: "to realise", choix: ["se rendre compte", "oublier", "penser"], bonneReponse: 0 },
{ question: "to end up", choix: ["finir par", "commencer", "continuer"], bonneReponse: 0 },
{ question: "to encounter", choix: ["rencontrer", "éviter", "ignorer"], bonneReponse: 0 },

{ question: "timid", choix: ["timide", "courageux", "fort"], bonneReponse: 0 },
{ question: "strange", choix: ["étrange", "normal", "habituel"], bonneReponse: 0 },
{ question: "weird", choix: ["bizarre", "normal", "simple"], bonneReponse: 0 },

{ question: "happy", choix: ["heureux", "triste", "fatigué"], bonneReponse: 0 },
{ question: "sad", choix: ["triste", "heureux", "énervé"], bonneReponse: 0 },
{ question: "angry", choix: ["énervé", "calme", "heureux"], bonneReponse: 0 },

{ question: "player", choix: ["joueur", "équipe", "coach"], bonneReponse: 0 },
{ question: "team", choix: ["équipe", "joueur", "coach"], bonneReponse: 0 },
{ question: "coach", choix: ["entraîneur", "joueur", "arbitre"], bonneReponse: 0 },
{ question: "referee", choix: ["arbitre", "joueur", "coach"], bonneReponse: 0 },

{ question: "to agree", choix: ["être d’accord", "refuser", "critiquer"], bonneReponse: 0 },
{ question: "to argue", choix: ["se disputer", "parler", "écouter"], bonneReponse: 0 },

{ question: "friendship", choix: ["amitié", "amour", "famille"], bonneReponse: 0 },
{ question: "relationship", choix: ["relation", "amitié", "famille"], bonneReponse: 0 },

{ question: "to support", choix: ["soutenir", "abandonner", "ignorer"], bonneReponse: 0 },
{ question: "to protest", choix: ["manifester", "accepter", "ignorer"], bonneReponse: 0 },

{ question: "job interview", choix: ["entretien d’embauche", "travail", "réunion"], bonneReponse: 0 },
{ question: "résumé", choix: ["CV", "lettre", "email"], bonneReponse: 0 },
{ question: "cover letter", choix: ["lettre de motivation", "CV", "email"], bonneReponse: 0 },

{ question: "tourist", choix: ["touriste", "habitant", "guide"], bonneReponse: 0 },
{ question: "trip", choix: ["voyage", "travail", "maison"], bonneReponse: 0 },

{ question: "fake news", choix: ["fausses informations", "journal", "article"], bonneReponse: 0 },
{ question: "newspaper", choix: ["journal", "livre", "magazine"], bonneReponse: 0 },

{ question: "optimistic", choix: ["optimiste", "pessimiste", "triste"], bonneReponse: 0 },
{ question: "pessimistic", choix: ["pessimiste", "optimiste", "joyeux"], bonneReponse: 0 },
{ question: "curious", choix: ["curieux", "indifférent", "fatigué"], bonneReponse: 0 },

{ question: "city", choix: ["ville", "village", "campagne"], bonneReponse: 0 },
{ question: "street", choix: ["rue", "route", "chemin"], bonneReponse: 0 },
{ question: "building", choix: ["bâtiment", "maison", "route"], bonneReponse: 0 },
{ question: "skyscraper", choix: ["gratte-ciel", "maison", "immeuble"], bonneReponse: 0 },
{ question: "forest", choix: ["forêt", "plage", "ville"], bonneReponse: 0 },
{ question: "lake", choix: ["lac", "mer", "rivière"], bonneReponse: 0 },
{ question: "mountain", choix: ["montagne", "colline", "plaine"], bonneReponse: 0 },
{ question: "river", choix: ["rivière", "lac", "mer"], bonneReponse: 0 },
{ question: "sea", choix: ["mer", "océan", "lac"], bonneReponse: 0 },
{ question: "ocean", choix: ["océan", "mer", "lac"], bonneReponse: 0 }

];
