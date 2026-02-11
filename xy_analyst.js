const STORAGE_KEY = "xyanalyst-demo-v2";
const BRAND_DOMAIN = "xyanalyst.link";
const BRAND_URL = `https://${BRAND_DOMAIN}`;
const CLARITY_PROJECT_ID = "";

const profileThemes = {
  jugador: {
    label: { es: "Jugador", en: "Player", pt: "Jogador", fr: "Joueur" },
    accent: "#b8ff3c",
    accent2: "#38f6ff",
    accent3: "#7e5bff",
    role: {
      es: "Delantero · Sub 20",
      en: "Striker · U20",
      pt: "Atacante · Sub 20",
      fr: "Attaquant · U20"
    },
    bio: {
      es: "Goleador, capitán y disponible para pruebas.",
      en: "Goal scorer, captain, open to trials.",
      pt: "Artilheiro, capitão e disponível para testes.",
      fr: "Buteur, capitaine, disponible pour essais."
    }
  },
  jugadora: {
    label: { es: "Jugadora", en: "Female player", pt: "Jogadora", fr: "Joueuse" },
    accent: "#ff6ad5",
    accent2: "#38f6ff",
    accent3: "#ffb347",
    role: {
      es: "Extrema · Sub 17",
      en: "Winger · U17",
      pt: "Ponta · Sub 17",
      fr: "Ailière · U17"
    },
    bio: {
      es: "Velocidad, visión y 18 asistencias en 2025.",
      en: "Speed, vision, 18 assists in 2025.",
      pt: "Velocidade, visão, 18 assistências em 2025.",
      fr: "Vitesse, vision, 18 passes décisives en 2025."
    }
  },
  entrenador: {
    label: { es: "Entrenador", en: "Coach", pt: "Treinador", fr: "Coach" },
    accent: "#38f6ff",
    accent2: "#b8ff3c",
    accent3: "#4f7cff",
    role: {
      es: "Entrenador U20",
      en: "U20 Coach",
      pt: "Treinador Sub 20",
      fr: "Coach U20"
    },
    bio: {
      es: "Metodología ofensiva, 4 títulos regionales.",
      en: "Offensive methodology, 4 regional titles.",
      pt: "Metodologia ofensiva, 4 títulos regionais.",
      fr: "Méthodologie offensive, 4 titres régionaux."
    }
  },
  club: {
    label: { es: "Club", en: "Club", pt: "Clube", fr: "Club" },
    accent: "#ffb347",
    accent2: "#ff6ad5",
    accent3: "#38f6ff",
    role: {
      es: "Club profesional",
      en: "Pro club",
      pt: "Clube profissional",
      fr: "Club pro"
    },
    bio: {
      es: "Academia formativa y captación internacional.",
      en: "Academy pipeline and international scouting.",
      pt: "Academia e captação internacional.",
      fr: "Académie et recrutement international."
    }
  },
  scout: {
    label: { es: "Scout", en: "Scout", pt: "Scout", fr: "Scout" },
    accent: "#7e5bff",
    accent2: "#38f6ff",
    accent3: "#b8ff3c",
    role: {
      es: "Scout independiente",
      en: "Independent scout",
      pt: "Scout independente",
      fr: "Scout indépendant"
    },
    bio: {
      es: "Seguimiento en LATAM y Europa.",
      en: "Tracking LATAM and Europe.",
      pt: "Observação na América Latina e Europa.",
      fr: "Suivi en Amérique latine et Europe."
    }
  }
};

const nameInput = document.getElementById("nameInput");
const roleInput = document.getElementById("roleInput");
const bioInput = document.getElementById("bioInput");
const avatarInput = document.getElementById("avatarInput");
const linkLabel = document.getElementById("linkLabel");
const linkUrl = document.getElementById("linkUrl");
const addLinkBtn = document.getElementById("addLink");
const linkList = document.getElementById("linkList");
const linkError = document.getElementById("linkError");
const slugInput = document.getElementById("slugInput");
const copyUrlBtn = document.getElementById("copyUrl");
const typeButtons = document.querySelectorAll("[data-profile]");
const createProfileBtn = document.getElementById("createProfileBtn");
const langToggle = document.getElementById("langToggle");
const langMenu = document.getElementById("langMenu");
const loginBtn = document.getElementById("loginBtn");
const createProfileNavBtn = document.getElementById("createProfileNavBtn");
const loginModal = document.getElementById("loginModal");
const loginClose = document.getElementById("loginClose");
const createModal = document.getElementById("createModal");
const createClose = document.getElementById("createClose");
const createUsername = document.getElementById("createUsername");
const createSubmit = document.getElementById("createSubmit");
const createNotice = document.getElementById("createNotice");
const authTabs = document.querySelectorAll("[data-auth-tab]");
const authPanels = document.querySelectorAll("[data-auth-panel]");
const authNotice = document.getElementById("authNotice");
const loginSubmit = document.getElementById("loginSubmit");
const signupSubmit = document.getElementById("signupSubmit");

const previewName = document.getElementById("previewName");
const previewRole = document.getElementById("previewRole");
const previewBio = document.getElementById("previewBio");
const previewLinks = document.getElementById("previewLinks");
const previewType = document.getElementById("previewType");
const previewSlug = document.getElementById("previewSlug");
const heroProfileLabel = document.getElementById("heroProfileLabel");
const avatarImg = document.getElementById("avatarImg");
const avatarFallback = document.getElementById("avatarFallback");
const shareProfileBtn = document.getElementById("shareProfileBtn");
const shareModal = document.getElementById("shareModal");
const shareClose = document.getElementById("shareClose");
const shareAvatarImg = document.getElementById("shareAvatarImg");
const shareAvatarFallback = document.getElementById("shareAvatarFallback");
const shareName = document.getElementById("shareName");
const shareRole = document.getElementById("shareRole");
const shareLocation = document.getElementById("shareLocation");
const shareBio = document.getElementById("shareBio");
const shareLinks = document.getElementById("shareLinks");
const shareUrl = document.getElementById("shareUrl");
const shareRadarSvg = document.getElementById("shareRadarSvg");
const shareNotice = document.getElementById("shareNotice");
const miniPhoneAvatar = document.getElementById("miniPhoneAvatar");
const miniPhoneName = document.getElementById("miniPhoneName");
const miniPhoneRole = document.getElementById("miniPhoneRole");
const miniPhoneUrl = document.getElementById("miniPhoneUrl");
const phoneAvatarImg = document.getElementById("phoneAvatarImg");
const phoneAvatarFallback = document.getElementById("phoneAvatarFallback");
const phoneName = document.getElementById("phoneName");
const phoneRole = document.getElementById("phoneRole");
const phoneLocation = document.getElementById("phoneLocation");
const phoneStatMatches = document.getElementById("phoneStatMatches");
const phoneStatXg = document.getElementById("phoneStatXg");
const phoneStatPercentile = document.getElementById("phoneStatPercentile");
const phoneStatGoals = document.getElementById("phoneStatGoals");
const phoneStatAssists = document.getElementById("phoneStatAssists");
const phoneStatMinutes = document.getElementById("phoneStatMinutes");
const phoneStatDistance = document.getElementById("phoneStatDistance");
const phoneStatKeypasses = document.getElementById("phoneStatKeypasses");
const phoneStatShots = document.getElementById("phoneStatShots");
const phoneLinks = document.getElementById("phoneLinks");
const phoneUrl = document.getElementById("phoneUrl");
const phoneViews = document.querySelectorAll(".phone-view");
const radarSpeed = document.getElementById("radarSpeed");
const radarTechnique = document.getElementById("radarTechnique");
const radarVision = document.getElementById("radarVision");
const radarDefense = document.getElementById("radarDefense");
const radarStamina = document.getElementById("radarStamina");
const radarColor = document.getElementById("radarColor");
const radarSvg = document.getElementById("radarSvg");
const tickerTrack = document.getElementById("profileTicker");

const fallbackTextByLang = {
  es: { name: "Nombre Apellido", slug: "tu-nombre" },
  en: { name: "Full Name", slug: "your-name" },
  pt: { name: "Nome Sobrenome", slug: "seu-nome" },
  fr: { name: "Nom Prénom", slug: "votre-nom" }
};

const languageNames = {
  es: "Español",
  en: "English",
  pt: "Português",
  fr: "Français"
};

const i18n = {
  es: {
    title: "XY_Analyst - Demo",
    "nav.stats": "Estadísticas",
    "nav.login": "Iniciar sesión",
    "nav.create": "Crear perfil gratis",
    "hero.pill": "Link in bio para deportistas",
    "hero.title": "Tu perfil de fútbol",
    "hero.titleAccent": "en un enlace",
    "hero.sub": "Ponlo en tu bio de Instagram. Para jugadores, entrenadores, clubes, scouts y todo el ecosistema.",
    "hero.profileGroupLabel": "Tipo de perfil",
    "hero.profileLabel": "Perfil seleccionado:",
    "hero.urlHint": "Elige tu URL antes de que alguien más la tome.",
    "hero.cta": "Crear mi perfil gratis →",
    "ticker.label": "Perfiles en movimiento",
    "ticker.aria": "Perfiles destacados",
    "stats.links": "Links activos",
    "stats.bio": "Bio (caracteres)",
    "stats.completion": "Perfil completo",
    "stats.label": "Tus estadísticas aquí",
    "phone.badge": "Perfil PRO",
    "phone.location": "Madrid, España",
    "phone.matches": "Partidos",
    "phone.xg": "xG",
    "phone.percentile": "Percentil",
    "phone.links": "Links",
    "phone.bio": "Bio",
    "phone.profile": "Perfil",
    "phone.follow": "Seguir",
    "phone.message": "Mensaje",
    "phone.contact": "Email directo",
    "phone.whatsapp": "WhatsApp",
    "phone.linkedin": "LinkedIn",
    "phone.empty": "Agrega tus links",
    "editor.title": "Editor",
    "editor.name": "Nombre",
    "editor.role": "Rol / Posición",
    "editor.bio": "Bio corta",
    "editor.photo": "Foto de perfil (archivo)",
    "editor.linksTitle": "Links",
    "editor.linksHint": "Agrega videos, contactos o redes.",
    "preview.title": "Vista previa",
    "preview.avatarAlt": "Foto de perfil",
    "buttons.copy": "Copiar",
    "buttons.add": "Agregar",
    "buttons.share": "Compartir perfil",
    "buttons.copied": "Copiado",
    "buttons.error": "Error",
    "placeholders.slug": "tu-nombre",
    "placeholders.name": "Ej: Camila Suarez",
    "placeholders.role": "Ej: Delantera - Sub 20",
    "placeholders.bio": "Ej: Capitán, 12 goles en 2025, disponible para pruebas.",
    "placeholders.linkLabel": "Etiqueta: Highlights 2025",
    "placeholders.linkUrl": "https://...",
    "footer.note": "Demo educativo. Usa tus practicas de DOM, eventos, arrays y localStorage.",
    "login.title": "Tu cuenta",
    "login.subtitle": "Inicia sesión o crea tu perfil para continuar.",
    "login.tabLogin": "Iniciar sesión",
    "login.tabSignup": "Registrarse",
    "login.emailLabel": "Correo",
    "login.passwordLabel": "Contraseña",
    "login.emailPlaceholder": "nombre@email.com",
    "login.passwordPlaceholder": "••••••••",
    "login.submit": "Entrar",
    "signup.nameLabel": "Nombre completo",
    "signup.emailLabel": "Correo",
    "signup.passwordLabel": "Contraseña",
    "signup.namePlaceholder": "Ej: Camila Suarez",
    "signup.emailPlaceholder": "nombre@email.com",
    "signup.passwordPlaceholder": "••••••••",
    "signup.submit": "Crear cuenta",
    "status.stats": "Tus estadísticas aquí",
    "empty.linksEditor": "Aún no agregas links.",
    "empty.linksPreview": "Tus links aparecerán aquí.",
    "errors.linkMissing": "Completa etiqueta y URL.",
    "errors.imageInvalid": "Selecciona un archivo de imagen válido.",
    "errors.imageRead": "No se pudo leer la imagen.",
    "errors.imageTooLarge": "La imagen supera {max}MB. Puede que no se guarde.",
    "notices.loginDemo": "Demo: inicio de sesión simulado.",
    "notices.signupDemo": "Demo: registro simulado.",
    "create.title": "Crear perfil",
    "create.subtitle": "Solo elige tu nombre de usuario para empezar.",
    "create.usernameLabel": "Nombre de usuario",
    "create.usernamePlaceholder": "Ej: xy_analyst",
    "create.submit": "Crear perfil",
    "create.notice": "Perfil creado.",
    "create.error": "Ingresa un nombre de usuario válido."
  },
  en: {
    title: "XY_Analyst - Demo",
    "nav.stats": "Stats",
    "nav.login": "Sign in",
    "nav.create": "Create profile",
    "hero.pill": "Link in bio for athletes",
    "hero.title": "Your football profile",
    "hero.titleAccent": "in one link",
    "hero.sub": "Put it on your Instagram bio. For players, coaches, clubs, scouts and the whole ecosystem.",
    "hero.profileGroupLabel": "Profile type",
    "hero.profileLabel": "Selected profile:",
    "hero.urlHint": "Choose your URL before someone else takes it.",
    "hero.cta": "Create my profile free →",
    "ticker.label": "Profiles on the move",
    "ticker.aria": "Featured profiles",
    "stats.links": "Active links",
    "stats.bio": "Bio (characters)",
    "stats.completion": "Profile completion",
    "stats.label": "Your stats here",
    "phone.badge": "Pro profile",
    "phone.location": "Madrid, Spain",
    "phone.matches": "Matches",
    "phone.xg": "xG",
    "phone.percentile": "Percentile",
    "phone.links": "Links",
    "phone.bio": "Bio",
    "phone.profile": "Profile",
    "phone.follow": "Follow",
    "phone.message": "Message",
    "phone.contact": "Direct email",
    "phone.whatsapp": "WhatsApp",
    "phone.linkedin": "LinkedIn",
    "phone.empty": "Add your links",
    "editor.title": "Editor",
    "editor.name": "Name",
    "editor.role": "Role / Position",
    "editor.bio": "Short bio",
    "editor.photo": "Profile photo (file)",
    "editor.linksTitle": "Links",
    "editor.linksHint": "Add videos, contacts, or social links.",
    "preview.title": "Preview",
    "preview.avatarAlt": "Profile photo",
    "buttons.copy": "Copy",
    "buttons.add": "Add",
    "buttons.share": "Share profile",
    "buttons.copied": "Copied",
    "buttons.error": "Error",
    "placeholders.slug": "your-name",
    "placeholders.name": "Ex: Camila Suarez",
    "placeholders.role": "Ex: Striker - U20",
    "placeholders.bio": "Ex: Captain, 12 goals in 2025, open to trials.",
    "placeholders.linkLabel": "Label: Highlights 2025",
    "placeholders.linkUrl": "https://...",
    "footer.note": "Educational demo. Uses DOM, events, arrays and localStorage.",
    "login.title": "Your account",
    "login.subtitle": "Sign in or create your profile to continue.",
    "login.tabLogin": "Sign in",
    "login.tabSignup": "Sign up",
    "login.emailLabel": "Email",
    "login.passwordLabel": "Password",
    "login.emailPlaceholder": "name@email.com",
    "login.passwordPlaceholder": "••••••••",
    "login.submit": "Sign in",
    "signup.nameLabel": "Full name",
    "signup.emailLabel": "Email",
    "signup.passwordLabel": "Password",
    "signup.namePlaceholder": "Ex: Camila Suarez",
    "signup.emailPlaceholder": "name@email.com",
    "signup.passwordPlaceholder": "••••••••",
    "signup.submit": "Create account",
    "status.stats": "Your stats here",
    "empty.linksEditor": "No links added yet.",
    "empty.linksPreview": "Your links will appear here.",
    "errors.linkMissing": "Fill in label and URL.",
    "errors.imageInvalid": "Select a valid image file.",
    "errors.imageRead": "Could not read the image.",
    "errors.imageTooLarge": "Image is larger than {max}MB. It may not save.",
    "notices.loginDemo": "Demo: sign-in simulated.",
    "notices.signupDemo": "Demo: sign-up simulated.",
    "create.title": "Create profile",
    "create.subtitle": "Pick a username to start.",
    "create.usernameLabel": "Username",
    "create.usernamePlaceholder": "Ex: xy_analyst",
    "create.submit": "Create profile",
    "create.notice": "Profile created.",
    "create.error": "Enter a valid username."
  },
  pt: {
    title: "XY_Analyst - Demo",
    "nav.stats": "Estatísticas",
    "nav.login": "Entrar",
    "nav.create": "Criar perfil",
    "hero.pill": "Link na bio para atletas",
    "hero.title": "Seu perfil de futebol",
    "hero.titleAccent": "em um link",
    "hero.sub": "Coloque na sua bio do Instagram. Para jogadores, treinadores, clubes, scouts e todo o ecossistema.",
    "hero.profileGroupLabel": "Tipo de perfil",
    "hero.profileLabel": "Perfil selecionado:",
    "hero.urlHint": "Escolha sua URL antes que outra pessoa pegue.",
    "hero.cta": "Criar meu perfil grátis →",
    "ticker.label": "Perfis em movimento",
    "ticker.aria": "Perfis em destaque",
    "stats.links": "Links ativos",
    "stats.bio": "Bio (caracteres)",
    "stats.completion": "Perfil completo",
    "stats.label": "Suas estatísticas aqui",
    "phone.badge": "Perfil PRO",
    "phone.location": "Madri, Espanha",
    "phone.matches": "Partidas",
    "phone.xg": "xG",
    "phone.percentile": "Percentil",
    "phone.links": "Links",
    "phone.bio": "Bio",
    "phone.profile": "Perfil",
    "phone.follow": "Seguir",
    "phone.message": "Mensagem",
    "phone.contact": "Email direto",
    "phone.whatsapp": "WhatsApp",
    "phone.linkedin": "LinkedIn",
    "phone.empty": "Adicione seus links",
    "editor.title": "Editor",
    "editor.name": "Nome",
    "editor.role": "Função / Posição",
    "editor.bio": "Bio curta",
    "editor.photo": "Foto de perfil (arquivo)",
    "editor.linksTitle": "Links",
    "editor.linksHint": "Adicione vídeos, contatos ou redes.",
    "preview.title": "Prévia",
    "preview.avatarAlt": "Foto de perfil",
    "buttons.copy": "Copiar",
    "buttons.add": "Adicionar",
    "buttons.share": "Compartilhar perfil",
    "buttons.copied": "Copiado",
    "buttons.error": "Erro",
    "placeholders.slug": "seu-nome",
    "placeholders.name": "Ex: Camila Suarez",
    "placeholders.role": "Ex: Atacante - Sub 20",
    "placeholders.bio": "Ex: Capitã, 12 gols em 2025, disponível para testes.",
    "placeholders.linkLabel": "Etiqueta: Highlights 2025",
    "placeholders.linkUrl": "https://...",
    "footer.note": "Demo educativo. Usa DOM, eventos, arrays e localStorage.",
    "login.title": "Sua conta",
    "login.subtitle": "Entre ou crie seu perfil para continuar.",
    "login.tabLogin": "Entrar",
    "login.tabSignup": "Registrar",
    "login.emailLabel": "Email",
    "login.passwordLabel": "Senha",
    "login.emailPlaceholder": "nome@email.com",
    "login.passwordPlaceholder": "••••••••",
    "login.submit": "Entrar",
    "signup.nameLabel": "Nome completo",
    "signup.emailLabel": "Email",
    "signup.passwordLabel": "Senha",
    "signup.namePlaceholder": "Ex: Camila Suarez",
    "signup.emailPlaceholder": "nome@email.com",
    "signup.passwordPlaceholder": "••••••••",
    "signup.submit": "Criar conta",
    "status.stats": "Suas estatísticas aqui",
    "empty.linksEditor": "Nenhum link adicionado.",
    "empty.linksPreview": "Seus links aparecerão aqui.",
    "errors.linkMissing": "Preencha etiqueta e URL.",
    "errors.imageInvalid": "Selecione um arquivo de imagem válido.",
    "errors.imageRead": "Não foi possível ler a imagem.",
    "errors.imageTooLarge": "A imagem é maior que {max}MB. Pode não salvar.",
    "notices.loginDemo": "Demo: login simulado.",
    "notices.signupDemo": "Demo: registro simulado.",
    "create.title": "Criar perfil",
    "create.subtitle": "Escolha apenas um nome de usuário para começar.",
    "create.usernameLabel": "Nome de usuário",
    "create.usernamePlaceholder": "Ex: xy_analyst",
    "create.submit": "Criar perfil",
    "create.notice": "Perfil criado.",
    "create.error": "Digite um nome de usuário válido."
  },
  fr: {
    title: "XY_Analyst - Demo",
    "nav.stats": "Statistiques",
    "nav.login": "Se connecter",
    "nav.create": "Créer un profil",
    "hero.pill": "Lien bio pour athlètes",
    "hero.title": "Votre profil de football",
    "hero.titleAccent": "en un lien",
    "hero.sub": "Ajoutez-le à votre bio Instagram. Pour joueurs, coachs, clubs, scouts et tout l'écosystème.",
    "hero.profileGroupLabel": "Type de profil",
    "hero.profileLabel": "Profil sélectionné :",
    "hero.urlHint": "Choisissez votre URL avant qu'elle ne soit prise.",
    "hero.cta": "Créer mon profil gratuit →",
    "ticker.label": "Profils en mouvement",
    "ticker.aria": "Profils en vedette",
    "stats.links": "Liens actifs",
    "stats.bio": "Bio (caractères)",
    "stats.completion": "Profil complété",
    "stats.label": "Vos statistiques ici",
    "phone.badge": "Profil PRO",
    "phone.location": "Madrid, Espagne",
    "phone.matches": "Matchs",
    "phone.xg": "xG",
    "phone.percentile": "Percentile",
    "phone.links": "Liens",
    "phone.bio": "Bio",
    "phone.profile": "Profil",
    "phone.follow": "Suivre",
    "phone.message": "Message",
    "phone.contact": "Email direct",
    "phone.whatsapp": "WhatsApp",
    "phone.linkedin": "LinkedIn",
    "phone.empty": "Ajoutez vos liens",
    "editor.title": "Éditeur",
    "editor.name": "Nom",
    "editor.role": "Rôle / Poste",
    "editor.bio": "Bio courte",
    "editor.photo": "Photo de profil (fichier)",
    "editor.linksTitle": "Liens",
    "editor.linksHint": "Ajoutez des vidéos, contacts ou réseaux.",
    "preview.title": "Aperçu",
    "preview.avatarAlt": "Photo de profil",
    "buttons.copy": "Copier",
    "buttons.add": "Ajouter",
    "buttons.share": "Partager le profil",
    "buttons.copied": "Copié",
    "buttons.error": "Erreur",
    "placeholders.slug": "votre-nom",
    "placeholders.name": "Ex: Camila Suarez",
    "placeholders.role": "Ex: Attaquant - U20",
    "placeholders.bio": "Ex: Capitaine, 12 buts en 2025, disponible pour essais.",
    "placeholders.linkLabel": "Étiquette: Highlights 2025",
    "placeholders.linkUrl": "https://...",
    "footer.note": "Démo éducative. Utilise DOM, événements, tableaux et localStorage.",
    "login.title": "Votre compte",
    "login.subtitle": "Connectez-vous ou créez votre profil pour continuer.",
    "login.tabLogin": "Se connecter",
    "login.tabSignup": "S'inscrire",
    "login.emailLabel": "Email",
    "login.passwordLabel": "Mot de passe",
    "login.emailPlaceholder": "nom@email.com",
    "login.passwordPlaceholder": "••••••••",
    "login.submit": "Se connecter",
    "signup.nameLabel": "Nom complet",
    "signup.emailLabel": "Email",
    "signup.passwordLabel": "Mot de passe",
    "signup.namePlaceholder": "Ex: Camila Suarez",
    "signup.emailPlaceholder": "nom@email.com",
    "signup.passwordPlaceholder": "••••••••",
    "signup.submit": "Créer un compte",
    "status.stats": "Vos statistiques ici",
    "empty.linksEditor": "Aucun lien ajouté.",
    "empty.linksPreview": "Vos liens apparaîtront ici.",
    "errors.linkMissing": "Remplissez l'étiquette et l'URL.",
    "errors.imageInvalid": "Sélectionnez une image valide.",
    "errors.imageRead": "Impossible de lire l'image.",
    "errors.imageTooLarge": "L'image dépasse {max}MB. Elle pourrait ne pas s'enregistrer.",
    "notices.loginDemo": "Démo : connexion simulée.",
    "notices.signupDemo": "Démo : inscription simulée.",
    "create.title": "Créer un profil",
    "create.subtitle": "Choisissez simplement un nom d'utilisateur pour commencer.",
    "create.usernameLabel": "Nom d'utilisateur",
    "create.usernamePlaceholder": "Ex: xy_analyst",
    "create.submit": "Créer un profil",
    "create.notice": "Profil créé.",
    "create.error": "Entrez un nom d'utilisateur valide."
  }
};

const defaultState = {
  type: "jugador",
  name: "Cristiano Ronaldo",
  role: "Delantero · Profesional",
  bio: "Finalizador, líder y referencia internacional.",
  avatar: "assets/ronaldo.png",
  slug: "cristiano-ronaldo",
  links: [],
  radar: {
    speed: 88,
    technique: 86,
    vision: 82,
    defense: 60,
    stamina: 90,
    color: "#38f6ff"
  }
};

const phoneStats = {
  matches: 24,
  xg: 2.17,
  percentile: 92
};

const phoneStatsDetail = {
  goals: 15,
  assists: 8,
  minutes: 1870,
  distance: 10.2,
  keypasses: 32,
  shots: 64
};

let state = loadState();
let currentLang = "es";
let langMenuTimer = null;
let tickerWidth = 0;
let phoneViewIndex = 0;
let phoneViewTimer = null;

const tickerRoles = ["jugador", "entrenador", "scout", "club", "jugadora"];


function startClarity() {
  if (typeof window.clarity === "function" && CLARITY_PROJECT_ID) {
    window.clarity("start", { projectId: CLARITY_PROJECT_ID });
  }
}

function trackClarityEvent(name) {
  if (typeof window.clarity === "function") {
    window.clarity("event", name);
  }
}

function setClarityField(key, value) {
  if (typeof window.clarity === "function") {
    window.clarity("set", key, value);
  }
}

function getStoredLang() {
  const stored = localStorage.getItem("xyanalyst-lang");
  if (stored && languageNames[stored]) return stored;
  const browserLang = (navigator.language || "es").slice(0, 2);
  return languageNames[browserLang] ? browserLang : "es";
}

function t(key) {
  return i18n[currentLang]?.[key] || i18n.es[key] || "";
}

function translateTemplate(text, vars) {
  if (!text) return text;
  return text.replace(/\{(\w+)\}/g, (_, k) => (k in vars ? String(vars[k]) : `{${k}}`));
}

function pickLangText(value) {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value[currentLang] || value.es || Object.values(value)[0] || "";
}

function getFallbackText() {
  return fallbackTextByLang[currentLang] || fallbackTextByLang.es;
}

function updateProfileButtons() {
  document.querySelectorAll("[data-profile-label]").forEach((btn) => {
    const key = btn.dataset.profile;
    const theme = profileThemes[key];
    if (theme) btn.textContent = pickLangText(theme.label);
  });
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const value = t(key);
    if (value) el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    const value = t(key);
    if (value) el.setAttribute("placeholder", value);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.dataset.i18nAlt;
    const value = t(key);
    if (value) el.setAttribute("alt", value);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    const key = el.dataset.i18nAriaLabel;
    const value = t(key);
    if (value) el.setAttribute("aria-label", value);
  });

  if (langToggle) {
    langToggle.textContent = `${languageNames[currentLang]} ▾`;
  }

  document.documentElement.lang = currentLang;
  const title = t("title");
  if (title) document.title = title;

  updateProfileButtons();
}

function setLanguage(lang) {
  if (!languageNames[lang]) return;
  currentLang = lang;
  localStorage.setItem("xyanalyst-lang", lang);
  applyTranslations();
  buildTicker();
  render();
}

function toggleLangMenu(forceOpen = null) {
  if (!langMenu || !langToggle) return;
  const isOpen = !langMenu.hidden;
  const shouldOpen = forceOpen === null ? !isOpen : forceOpen;

  if (langMenuTimer) {
    clearTimeout(langMenuTimer);
    langMenuTimer = null;
  }

  if (shouldOpen) {
    langMenu.hidden = false;
    requestAnimationFrame(() => {
      langMenu.classList.add("is-open");
      langToggle.setAttribute("aria-expanded", "true");
      langMenu.setAttribute("aria-hidden", "false");
    });
  } else {
    langMenu.classList.remove("is-open");
    langToggle.setAttribute("aria-expanded", "false");
    langMenu.setAttribute("aria-hidden", "true");
    langMenuTimer = window.setTimeout(() => {
      langMenu.hidden = true;
    }, 180);
  }
}

function buildTicker() {
  if (!tickerTrack) return;
  tickerTrack.innerHTML = "";

  const group1 = document.createElement("div");
  group1.className = "ticker-group";
  const roleEmojis = {
    jugador: "⚽",
    jugadora: "⚽",
    entrenador: "🧠",
    club: "🏟️",
    scout: "🔍"
  };

  tickerRoles.forEach((roleKey) => {
    const theme = profileThemes[roleKey] || profileThemes.jugador;
    const label = pickLangText(theme.label);
    const item = document.createElement("div");
    item.className = "ticker-item";

    const text = document.createElement("span");
    const emoji = roleEmojis[roleKey] || "⚡";
    text.textContent = `${emoji} ${label}`;

    item.append(text);
    group1.appendChild(item);
  });

  const group2 = group1.cloneNode(true);
  tickerTrack.append(group1, group2);
  updateTickerWidth();
}

function updateTickerWidth() {
  if (!tickerTrack) return;
  const firstGroup = tickerTrack.querySelector(".ticker-group");
  if (!firstGroup) return;
  tickerWidth = firstGroup.scrollWidth;
  tickerTrack.style.setProperty("--ticker-width", `${tickerWidth}px`);
}

function setPhoneView(index) {
  if (!phoneViews.length) return;
  phoneViews.forEach((view, i) => {
    view.classList.toggle("is-active", i === index);
  });
  phoneViewIndex = index;
}

function nextPhoneView() {
  if (!phoneViews.length) return;
  const next = (phoneViewIndex + 1) % phoneViews.length;
  setPhoneView(next);
}

function startPhoneViewRotation() {
  if (!phoneViews.length) return;
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  setPhoneView(0);
  if (reduceMotion) return;
  if (phoneViewTimer) clearInterval(phoneViewTimer);
  phoneViewTimer = window.setInterval(nextPhoneView, 4200);
}

function openModal() {
  if (!loginModal) return;
  if (createModal?.classList.contains("is-open")) closeCreateModal();
  loginModal.classList.add("is-open");
  loginModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  if (authNotice) authNotice.textContent = "";
  activateAuthTab("login");
}

function closeModal() {
  if (!loginModal) return;
  loginModal.classList.remove("is-open");
  loginModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function openCreateModal() {
  if (!createModal) return;
  if (loginModal?.classList.contains("is-open")) closeModal();
  createModal.classList.add("is-open");
  createModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  if (createNotice) createNotice.textContent = "";
  if (createUsername) createUsername.value = state.slug || "";
}

function closeCreateModal() {
  if (!createModal) return;
  createModal.classList.remove("is-open");
  createModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function activateAuthTab(tab) {
  authTabs.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.authTab === tab);
  });
  authPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.authPanel === tab);
  });
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...defaultState };
    const parsed = JSON.parse(raw);
    const parsedLinks = Array.isArray(parsed.links) ? parsed.links : defaultState.links;
    const cleanedLinks = removeSampleLinks(parsedLinks);
    return {
      ...defaultState,
      ...parsed,
      links: cleanedLinks,
      radar: {
        ...defaultState.radar,
        ...(parsed.radar || {})
      }
    };
  } catch (error) {
    console.warn("No se pudo leer localStorage", error);
  }
  return { ...defaultState };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function removeSampleLinks(links) {
  const sampleUrls = new Set(["https://example.com", "http://example.com", "example.com"]);
  const isSample =
    links.length === 2 &&
    links.every((link) => sampleUrls.has(link.url)) &&
    links.some((link) => (link.label || "").toLowerCase().includes("video"));
  if (isSample) return [];
  return links;
}

function applyTheme(type) {
  const theme = profileThemes[type] || profileThemes.jugador;
  const root = document.documentElement;
  root.style.setProperty("--accent", theme.accent);
  root.style.setProperty("--accent-2", theme.accent2);
  root.style.setProperty("--accent-3", theme.accent3);
  root.style.setProperty("--glow", hexToGlow(theme.accent));
}

function hexToGlow(hex) {
  const sanitized = hex.replace("#", "");
  const bigint = parseInt(sanitized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, 0.35)`;
}

function normalizeSlug(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/--+/g, "-")
    .slice(0, 24);
}

function normalizeUrl(url) {
  if (!url) return "";
  if (!/^https?:\/\//i.test(url)) return `https://${url}`;
  return url;
}

function validateLink(label, url) {
  if (!label.trim() || !url.trim()) {
    return t("errors.linkMissing");
  }
  return "";
}

function setAvatar(url, fallbackChar) {
  const safeFallback = (fallbackChar || "K").trim().charAt(0).toUpperCase() || "K";

  const showFallback = () => {
    if (avatarImg) avatarImg.style.display = "none";
    if (avatarFallback) {
      avatarFallback.textContent = safeFallback;
      avatarFallback.style.display = "grid";
    }
    if (phoneAvatarImg) phoneAvatarImg.style.display = "none";
    if (phoneAvatarFallback) {
      phoneAvatarFallback.textContent = safeFallback;
      phoneAvatarFallback.style.display = "grid";
    }
    if (miniPhoneAvatar) {
      miniPhoneAvatar.textContent = safeFallback;
      miniPhoneAvatar.style.backgroundImage = "";
      miniPhoneAvatar.classList.remove("has-image");
    }
  };

  if (!url) {
    showFallback();
    return;
  }

  if (avatarImg) {
    avatarImg.src = url;
    avatarImg.onload = () => {
      avatarImg.style.display = "block";
      if (avatarFallback) avatarFallback.style.display = "none";
    };
    avatarImg.onerror = showFallback;
  }

  if (phoneAvatarImg) {
    phoneAvatarImg.src = url;
    phoneAvatarImg.onload = () => {
      phoneAvatarImg.style.display = "block";
      if (phoneAvatarFallback) phoneAvatarFallback.style.display = "none";
    };
    phoneAvatarImg.onerror = showFallback;
  }

  if (miniPhoneAvatar) {
    miniPhoneAvatar.textContent = "";
    miniPhoneAvatar.style.backgroundImage = `url(${url})`;
    miniPhoneAvatar.classList.add("has-image");
  }
}

function setShareAvatar(url, fallbackChar) {
  const safeFallback = (fallbackChar || "K").trim().charAt(0).toUpperCase() || "K";
  if (!shareAvatarImg || !shareAvatarFallback) return;

  if (!url) {
    shareAvatarImg.style.display = "none";
    shareAvatarFallback.style.display = "grid";
    shareAvatarFallback.textContent = safeFallback;
    return;
  }

  shareAvatarImg.src = url;
  shareAvatarImg.onload = () => {
    shareAvatarImg.style.display = "block";
    shareAvatarFallback.style.display = "none";
  };
  shareAvatarImg.onerror = () => {
    shareAvatarImg.style.display = "none";
    shareAvatarFallback.style.display = "grid";
    shareAvatarFallback.textContent = safeFallback;
  };
}

function renderLinks(target, links) {
  target.innerHTML = "";
  if (!links.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = t("empty.linksEditor");
    target.appendChild(empty);
    return;
  }

  links.forEach((link, index) => {
    const item = document.createElement("div");
    item.className = "link-item";

    const text = document.createElement("div");
    text.textContent = `${link.label} · ${link.url}`;

    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "Quitar";
    remove.dataset.index = String(index);

    item.append(text, remove);
    target.appendChild(item);
  });
}

function renderPreviewLinks(links) {
  previewLinks.innerHTML = "";
  if (!links.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = t("empty.linksPreview");
    previewLinks.appendChild(empty);
    return;
  }

  links.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.url;
    a.target = "_blank";
    a.rel = "noreferrer";
    a.textContent = link.label;

    const arrow = document.createElement("span");
    arrow.textContent = "→";
    a.appendChild(arrow);

    previewLinks.appendChild(a);
  });
}

function clampRadar(value) {
  const n = Number(value);
  if (Number.isNaN(n)) return 0;
  return Math.min(Math.max(n, 0), 100);
}

function hexToRgba(hex, alpha) {
  const sanitized = hex.replace("#", "");
  if (sanitized.length !== 6) return `rgba(56, 246, 255, ${alpha})`;
  const bigint = parseInt(sanitized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function renderRadar(target) {
  if (!target) return;
  target.innerHTML = "";

  const metrics = [
    { key: "speed", label: "Velocidad" },
    { key: "technique", label: "Técnica" },
    { key: "vision", label: "Visión" },
    { key: "defense", label: "Defensa" },
    { key: "stamina", label: "Resistencia" }
  ];

  const size = 260;
  const center = size / 2;
  const radius = 90;
  const levels = 5;
  const angleStep = (Math.PI * 2) / metrics.length;
  const startAngle = -Math.PI / 2;
  const gridColor = "rgba(255,255,255,0.1)";

  const createSvg = (tag) => document.createElementNS("http://www.w3.org/2000/svg", tag);

  const group = createSvg("g");
  group.setAttribute("transform", `translate(${center}, ${center})`);

  for (let level = 1; level <= levels; level += 1) {
    const r = (radius / levels) * level;
    const points = metrics
      .map((_, i) => {
        const angle = startAngle + i * angleStep;
        return `${Math.cos(angle) * r},${Math.sin(angle) * r}`;
      })
      .join(" ");
    const polygon = createSvg("polygon");
    polygon.setAttribute("points", points);
    polygon.setAttribute("fill", "none");
    polygon.setAttribute("stroke", gridColor);
    polygon.setAttribute("stroke-width", "1");
    group.appendChild(polygon);
  }

  metrics.forEach((_, i) => {
    const angle = startAngle + i * angleStep;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    const line = createSvg("line");
    line.setAttribute("x1", "0");
    line.setAttribute("y1", "0");
    line.setAttribute("x2", x);
    line.setAttribute("y2", y);
    line.setAttribute("stroke", gridColor);
    line.setAttribute("stroke-width", "1");
    group.appendChild(line);
  });

  const values = metrics.map((metric) => clampRadar(state.radar?.[metric.key] ?? 0));
  const valuePoints = values
    .map((value, i) => {
      const angle = startAngle + i * angleStep;
      const r = (radius * value) / 100;
      return `${Math.cos(angle) * r},${Math.sin(angle) * r}`;
    })
    .join(" ");

  const fill = createSvg("polygon");
  const stroke = createSvg("polygon");
  const color = state.radar?.color || "#38f6ff";
  fill.setAttribute("points", valuePoints);
  fill.setAttribute("fill", hexToRgba(color, 0.25));
  fill.setAttribute("stroke", "none");
  stroke.setAttribute("points", valuePoints);
  stroke.setAttribute("fill", "none");
  stroke.setAttribute("stroke", color);
  stroke.setAttribute("stroke-width", "2");

  group.appendChild(fill);
  group.appendChild(stroke);
  target.appendChild(group);

  metrics.forEach((metric, i) => {
    const angle = startAngle + i * angleStep;
    const labelRadius = radius + 18;
    const x = center + Math.cos(angle) * labelRadius;
    const y = center + Math.sin(angle) * labelRadius;
    const text = createSvg("text");
    text.setAttribute("x", x);
    text.setAttribute("y", y);
    text.setAttribute("fill", "rgba(255,255,255,0.75)");
    text.setAttribute("font-size", "11");
    text.setAttribute("text-anchor", "middle");
    text.textContent = metric.label;
    target.appendChild(text);
  });
}

function renderPhoneLinks(links) {
  if (!phoneLinks) return;
  phoneLinks.innerHTML = "";
  if (!links.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = t("phone.empty");
    phoneLinks.appendChild(empty);
    return;
  }

  links.slice(0, 3).forEach((link) => {
    const item = document.createElement("div");
    item.className = "phone-link-item";

    const label = document.createElement("span");
    label.textContent = link.label;

    const arrow = document.createElement("span");
    arrow.textContent = "↗";

    item.append(label, arrow);
    phoneLinks.appendChild(item);
  });
}

function render() {
  const theme = profileThemes[state.type] || profileThemes.jugador;
  const roleFallback = pickLangText(theme.role);
  const bioFallback = pickLangText(theme.bio);
  const themeLabel = pickLangText(theme.label);
  const fallbackText = getFallbackText();
  const nameValue = typeof state.name === "string" ? state.name : "";
  const roleValue = typeof state.role === "string" ? state.role : "";
  const bioValue = typeof state.bio === "string" ? state.bio : "";
  const slugValue = typeof state.slug === "string" ? state.slug : "";

  previewName.textContent = nameValue || fallbackText.name;
  previewRole.textContent = roleValue || roleFallback;
  previewBio.textContent = bioValue || bioFallback;
  previewType.textContent = themeLabel;
  heroProfileLabel.textContent = themeLabel;

  const slug = slugValue || fallbackText.slug;
  previewSlug.textContent = `${BRAND_DOMAIN}/${slug}`;
  if (miniPhoneUrl) miniPhoneUrl.textContent = `${BRAND_DOMAIN}/${slug}`;
  if (phoneUrl) phoneUrl.textContent = `${BRAND_DOMAIN}/${slug}`;

  const fallbackChar = (nameValue || fallbackText.name || "K").trim().charAt(0).toUpperCase() || "K";
  if (avatarFallback) avatarFallback.textContent = fallbackChar;
  if (phoneAvatarFallback) phoneAvatarFallback.textContent = fallbackChar;
  setAvatar(state.avatar, fallbackChar);
  setShareAvatar(state.avatar, fallbackChar);

  if (miniPhoneName) miniPhoneName.textContent = previewName.textContent;
  if (miniPhoneRole) miniPhoneRole.textContent = previewRole.textContent;
  if (phoneName) phoneName.textContent = previewName.textContent;
  if (phoneRole) phoneRole.textContent = previewRole.textContent;
  if (shareName) shareName.textContent = previewName.textContent;
  if (shareRole) shareRole.textContent = previewRole.textContent;
  if (shareLocation) shareLocation.textContent = phoneLocation?.textContent || "";
  if (shareBio) shareBio.textContent = previewBio.textContent;
  if (shareUrl) shareUrl.textContent = `${BRAND_DOMAIN}/${slug}`;
  if (shareLinks) {
    shareLinks.innerHTML = "";
    if (!state.links.length) {
      const empty = document.createElement("p");
      empty.className = "empty-state";
      empty.textContent = t("empty.linksPreview");
      shareLinks.appendChild(empty);
    } else {
      state.links.forEach((link) => {
        const a = document.createElement("a");
        a.href = link.url;
        a.target = "_blank";
        a.rel = "noreferrer";
        a.textContent = link.label;
        const arrow = document.createElement("span");
        arrow.textContent = "→";
        a.appendChild(arrow);
        shareLinks.appendChild(a);
      });
    }
  }

  renderLinks(linkList, state.links);
  renderPreviewLinks(state.links);
  renderPhoneLinks(state.links);

  nameInput.value = nameValue;
  roleInput.value = roleValue;
  bioInput.value = bioValue;
  if (avatarInput) {
    avatarInput.value = "";
  }
  slugInput.value = slugValue;
  if (radarSpeed) radarSpeed.value = clampRadar(state.radar?.speed ?? 0);
  if (radarTechnique) radarTechnique.value = clampRadar(state.radar?.technique ?? 0);
  if (radarVision) radarVision.value = clampRadar(state.radar?.vision ?? 0);
  if (radarDefense) radarDefense.value = clampRadar(state.radar?.defense ?? 0);
  if (radarStamina) radarStamina.value = clampRadar(state.radar?.stamina ?? 0);
  if (radarColor) radarColor.value = state.radar?.color || "#38f6ff";

  typeButtons.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.profile === state.type);
  });

  applyTheme(state.type);

  computeCompletion();
  animateNumber(phoneStatMatches, phoneStats.matches);
  animateNumber(phoneStatXg, phoneStats.xg, { decimals: 2 });
  animateNumber(phoneStatPercentile, phoneStats.percentile, { suffix: "%" });
  animateNumber(phoneStatGoals, phoneStatsDetail.goals);
  animateNumber(phoneStatAssists, phoneStatsDetail.assists);
  animateNumber(phoneStatMinutes, phoneStatsDetail.minutes);
  animateNumber(phoneStatDistance, phoneStatsDetail.distance, { decimals: 1 });
  animateNumber(phoneStatKeypasses, phoneStatsDetail.keypasses);
  animateNumber(phoneStatShots, phoneStatsDetail.shots);
  renderRadar(radarSvg);
  renderRadar(shareRadarSvg);
}

function computeCompletion() {
  const total = 5;
  let done = 0;
  if ((state.name || "").trim()) done += 1;
  if ((state.role || "").trim()) done += 1;
  if ((state.bio || "").trim()) done += 1;
  if ((state.slug || "").trim()) done += 1;
  if (state.links.length > 0) done += 1;
  const percent = Math.round((done / total) * 100);
  return { done, total, percent: Math.min(percent, 100) };
}

function animateNumber(element, target, options = {}) {
  if (!element) return;
  const { suffix = "", decimals = 0 } = options;
  const previousRaw = element.dataset.value;
  const previous = Number.isFinite(Number(previousRaw)) ? Number(previousRaw) : 0;
  const next = Number(target) || 0;
  if (previous === next) {
    const formatted = decimals ? next.toFixed(decimals) : String(Math.round(next));
    element.textContent = `${formatted}${suffix}`;
    return;
  }

  const duration = 900;
  const start = window.performance.now();
  const diff = next - previous;
  element.dataset.value = String(next);

  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const value = previous + diff * easeOut(progress);
    const formatted = decimals ? value.toFixed(decimals) : String(Math.round(value));
    element.textContent = `${formatted}${suffix}`;
    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  };

  requestAnimationFrame(tick);
}

function addLink() {
  const label = linkLabel.value;
  const url = normalizeUrl(linkUrl.value.trim());
  const error = validateLink(label, url);

  if (error) {
    linkError.textContent = error;
    return;
  }

  state.links.push({ label: label.trim(), url });
  linkLabel.value = "";
  linkUrl.value = "";
  linkError.textContent = "";

  render();
  saveState();
  trackClarityEvent("link_agregado");
}

nameInput.addEventListener("input", (event) => {
  state.name = event.target.value;
  if (!slugInput.value.trim()) {
    const suggestion = normalizeSlug(state.name || "");
    if (suggestion) state.slug = suggestion;
  }
  render();
  saveState();
});

roleInput.addEventListener("input", (event) => {
  state.role = event.target.value;
  render();
  saveState();
});

bioInput.addEventListener("input", (event) => {
  state.bio = event.target.value;
  render();
  saveState();
});

avatarInput.addEventListener("change", (event) => {
  const file = event.target.files && event.target.files[0];
  if (!file) {
    state.avatar = "";
    render();
    saveState();
    return;
  }

  if (!file.type.startsWith("image/")) {
    alert(t("errors.imageInvalid"));
    avatarInput.value = "";
    return;
  }

  const maxSizeMb = 2;
  if (file.size > maxSizeMb * 1024 * 1024) {
    alert(translateTemplate(t("errors.imageTooLarge"), { max: maxSizeMb }));
  }

  const reader = new FileReader();
  reader.onload = () => {
    state.avatar = String(reader.result || "");
    render();
    saveState();
    trackClarityEvent("foto_subida");
  };
  reader.onerror = () => {
    alert(t("errors.imageRead"));
  };
  reader.readAsDataURL(file);
});

slugInput.addEventListener("input", (event) => {
  state.slug = normalizeSlug(event.target.value);
  slugInput.value = state.slug;
  render();
  saveState();
});

typeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    state.type = btn.dataset.profile;
    render();
    saveState();
    setClarityField("profile_type", state.type);
    trackClarityEvent(`perfil_tipo_${state.type}`);
  });
});

addLinkBtn.addEventListener("click", addLink);

[linkLabel, linkUrl].forEach((input) => {
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addLink();
    }
  });
});

[radarSpeed, radarTechnique, radarVision, radarDefense, radarStamina].forEach((input) => {
  if (!input) return;
  input.addEventListener("input", () => {
    state.radar = {
      ...state.radar,
      speed: clampRadar(radarSpeed?.value ?? 0),
      technique: clampRadar(radarTechnique?.value ?? 0),
      vision: clampRadar(radarVision?.value ?? 0),
      defense: clampRadar(radarDefense?.value ?? 0),
      stamina: clampRadar(radarStamina?.value ?? 0)
    };
    render();
    saveState();
  });
});

radarColor?.addEventListener("input", () => {
  state.radar = { ...state.radar, color: radarColor.value };
  render();
  saveState();
});

linkList.addEventListener("click", (event) => {
  const btn = event.target.closest("button");
  if (!btn) return;

  const index = Number(btn.dataset.index);
  if (Number.isNaN(index)) return;

  state.links.splice(index, 1);
  render();
  saveState();
  trackClarityEvent("link_eliminado");
});

copyUrlBtn.addEventListener("click", async () => {
  const slugFallback = getFallbackText().slug;
  const slug = state.slug || slugFallback;
  const url = `${BRAND_URL}/${slug}`;
  const originalText = copyUrlBtn.textContent;

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(url);
    } else {
      slugInput.focus();
      slugInput.select();
      document.execCommand("copy");
    }
    copyUrlBtn.textContent = t("buttons.copied") || "Copiado";
    trackClarityEvent("url_copiada");
  } catch (error) {
    copyUrlBtn.textContent = t("buttons.error") || "Error";
    trackClarityEvent("url_copia_error");
  }

  setTimeout(() => {
    copyUrlBtn.textContent = originalText;
  }, 1400);
});

function openShareModal() {
  if (!shareModal) return;
  shareModal.classList.add("is-open");
  shareModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeShareModal() {
  if (!shareModal) return;
  shareModal.classList.remove("is-open");
  shareModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

shareProfileBtn?.addEventListener("click", () => {
  openShareModal();
});

shareClose?.addEventListener("click", closeShareModal);
shareModal?.addEventListener("click", (event) => {
  if (event.target === shareModal) closeShareModal();
});

createProfileBtn?.addEventListener("click", () => {
  trackClarityEvent("cta_crear_perfil");
  openCreateModal();
});

createProfileNavBtn?.addEventListener("click", () => {
  trackClarityEvent("cta_crear_perfil_nav");
  openCreateModal();
});

langToggle?.addEventListener("click", () => {
  toggleLangMenu();
});

langMenu?.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-lang]");
  if (!button) return;
  setLanguage(button.dataset.lang);
  toggleLangMenu(false);
});

document.addEventListener("click", (event) => {
  if (!langMenu || langMenu.hidden) return;
  if (event.target.closest(".lang-picker")) return;
  toggleLangMenu(false);
});

loginBtn?.addEventListener("click", openModal);
loginClose?.addEventListener("click", closeModal);
loginModal?.addEventListener("click", (event) => {
  if (event.target === loginModal) closeModal();
});

createClose?.addEventListener("click", closeCreateModal);
createModal?.addEventListener("click", (event) => {
  if (event.target === createModal) closeCreateModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (loginModal?.classList.contains("is-open")) closeModal();
    if (createModal?.classList.contains("is-open")) closeCreateModal();
    if (shareModal?.classList.contains("is-open")) closeShareModal();
    toggleLangMenu(false);
  }
});

authTabs.forEach((btn) => {
  btn.addEventListener("click", () => {
    activateAuthTab(btn.dataset.authTab);
    if (authNotice) authNotice.textContent = "";
  });
});

loginSubmit?.addEventListener("click", () => {
  if (authNotice) authNotice.textContent = t("notices.loginDemo");
  trackClarityEvent("login_demo");
});

signupSubmit?.addEventListener("click", () => {
  if (authNotice) authNotice.textContent = t("notices.signupDemo");
  trackClarityEvent("signup_demo");
});

createSubmit?.addEventListener("click", () => {
  const raw = createUsername?.value || "";
  const normalized = normalizeSlug(raw);
  if (!normalized) {
    if (createNotice) createNotice.textContent = t("create.error");
    return;
  }
  state.slug = normalized;
  if (!state.name.trim()) {
    state.name = normalized
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
  }
  render();
  saveState();
  if (createNotice) createNotice.textContent = t("create.notice");
  trackClarityEvent("create_profile_demo");
  if (slugInput) slugInput.focus();
  window.setTimeout(() => {
    closeCreateModal();
  }, 700);
});

startClarity();
currentLang = getStoredLang();
applyTranslations();
buildTicker();
render();
startPhoneViewRotation();

window.addEventListener("resize", () => {
  updateTickerWidth();
});
