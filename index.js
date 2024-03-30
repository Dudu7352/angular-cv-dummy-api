// @ts-check

import express from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

/**
 * @typedef {"pl" | "en"} Lang
 */

/**
 * @typedef {Object} Perk
 * @property {string} imageUrl,
 * @property {"beginner" | "intermediate" | "advanced" | "expert"} level
 */

/**
 * @typedef {Object} ArticleBody
 * @param {string} head
 * @param {string[]} content
 * @param {string} link
 */

/**
 * @typedef {Object} Article
 * @param {number} id
 * @param {string} imageUrl
 * @param {string} head
 * @param {string[]} content
 * @param {string} link
 */

/**
 * @typedef {Object} MutliLang
 * @property {ArticleBody} pl
 * @property {ArticleBody} en
 */

/**
 * @typedef {Object} LangMap
 * @property {ArticleBody} en
 * @property {ArticleBody} pl
 */

/**
 * @typedef {Object} MultiLanguageArticle
 * @property {number} id
 * @property {string} imageUrl
 * @property {LangMap} body
 */

/** @type {Perk[]} */
const perks = [
  {
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    level: "intermediate",
  },
  {
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
    level: "intermediate",
  },
  {
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg",
    level: "intermediate",
  },
  {
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    level: "intermediate",
  },
  {
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg",
    level: "beginner",
  },
  {
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg",
    level: "beginner",
  },
  {
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
    level: "beginner",
  },
  {
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg",
    level: "beginner",
  },
];

const userInfo = {
  name: "Jakub Duda",
  paragraph:
    "I am a passionate developer fluent in spring, react, motivated enough to learn new technologies. Student of Piotr Drzewiecki technical school in Poland with a deep love for a software development",
  profilePicture: "https://source.unsplash.com/random/800x800?query=portrait",
};

/** @type {MultiLanguageArticle[]} */
const articles = [
  {
    id: 1,
    imageUrl: "https://source.unsplash.com/random/900x600",
    body: {
      pl: {
        head: "O mnie",
        content: ["paragraf 1", "paragraf 2", "paragraf 3"],
        link: "Czytaj więcej",
      },
      en: {
        head: "About me",
        content: ["paragraph 1", "paragraph 2", "paragraph 3"],
        link: "Read more",
      },
    },
  },
  {
    id: 2,
    imageUrl: "https://source.unsplash.com/random/900x600",
    body: {
      pl: {
        head: "Edukacja",
        content: ["paragraf 1", "paragraf 2", "paragraf 3"],
        link: "Czytaj więcej",
      },
      en: {
        head: "Education",
        content: ["paragraph 1", "paragraph 2", "paragraph 3"],
        link: "Read more",
      },
    },
  },
  {
    id: 3,
    imageUrl: "https://source.unsplash.com/random/900x600",
    body: {
      pl: {
        head: "Moje zainteresowania i pasje",
        content: [
          "W cyfrowym świecie, gdzie linie kodu tańczą pod rytmem kreatywności, znajduję moje schronienie. Witajcie, współtowarzysze cyber wędrowcy! Jestem tutaj, aby podzielić się karygodną sagą mojego romansu z kodowaniem, opowieścią nasączoną pasją, nocami napędzanymi kofeiną i okazjonalnymi imprezami na zgniatanie błędów.",
          "Od kiedy moje palce po raz pierwszy przebiegły po klawiaturze, wiedziałem, że jestem przeznaczony do wielkości w zaklętym królestwie programowania. Jako młodszy programista poszukujący wiedzy, wyruszyłem w magiczną podróż stażu w firmie SAS Media Company. Tam, pośród ruchliwych korytarzy innowacji, zagłębiłem się w oczarowujący świat Jetpack Compose. O, cuda, które odkryłem! Od tworzenia hipnotyzujących interfejsów użytkownika po odkrywanie tajemnic reaktywnego programowania, każda linijka kodu była jak pociągnięcie geniusza.",
          "Ale moja przygoda tam się nie skończyła, o nie! Zbrojony w mój wierny miecz i tarczę Kotlina, ruszyłem na szerokie pola języków programowania. Python, Rust, TypeScript, JavaScript—każdy język to cenny klejnot w mojej skarbnicy umiejętności. Z Javą jako wiernym rumakiem, galopowałem przez pola rozwoju przedsiębiorstwa, pokonując góry logiki biznesowej z gracją cyfrowego rycerza.",
          "Ale moje pragnienie wiedzy nie znało granic. Jak ciekawy odkrywca, wyruszyłem w niezbadane terytoria, chcąc okiełznać dzikie bestie programowania webowego. ReactJS, Angular, Svelte—nazwy szepty w świętych salach czarów frontendowych. Z każdym opanowanym frameworkiem czułem, że moje moce stają się silniejsze, a moje twory bardziej wspaniałe.",
          "Ale to jeszcze nie wszystko! W krainie backendowego czarowania, przywdziałem płaszcz Spring Boot i Actix Web, tkając złożone sieci RESTful API i obsługując zapytania z gracją doświadczonego czarodzieja. I nie zapomnijmy o mojej awanturniczej romansie z enigmatyczną biblioteką LangChain dla Pythona, mistycznym narzędziu, które szeptało mi tajemnice przetwarzania języka naturalnego do moich uszu pełnych zapału.",
          "Kiedy nie czaruję klawiaturą, znajdziesz mnie tonącego w blasku monitora, zagubionego w światach gier wideo lub oddającemu się najnowszym powieściom science fiction/fantasy. A w weekendy przemieniam się w kulinarnego czarodzieja, wyczarowując gourmetowskie przysmaki, które sprawią, że Gordon Ramsay zrobi podwójne wrażenie.",
        ],
        link: "Czytaj więcej",
      },
      en: {
        head: "My hobbies and passions",
        content: [
          "In the digital realm where the lines of code dance to the rhythm of creativity, I find my sanctuary. Hello there, fellow cyber wanderers! I'm here to share a cringe-worthy saga of my love affair with coding, a tale sprinkled with passion, caffeine-fueled nights, and the occasional bug squashing party.",
          "Ever since my fingers first danced across the keyboard, I knew I was destined for greatness in the enchanted kingdom of programming. As a junior developer on a quest for knowledge, I embarked on a magical internship journey at SAS Media Company. There, amidst the bustling corridors of innovation, I delved deep into the enchanting world of Jetpack Compose. Oh, the wonders I discovered! From crafting mesmerizing user interfaces to unraveling the secrets of reactive programming, every line of code felt like a stroke of genius.",
          "But my adventure didn't stop there, oh no! Armed with my trusty Kotlin sword and shield, I ventured forth into the vast wilderness of programming languages. Python, Rust, TypeScript, JavaScript—each language a precious gem in my treasure trove of skills. With Java as my faithful steed, I galloped through the fields of enterprise development, conquering mountains of business logic with the grace of a digital knight.",
          "Yet, my thirst for knowledge knew no bounds. Like a curious explorer, I set sail for uncharted territories, eager to tame the wild beasts of web development. ReactJS, Angular, Svelte—names whispered in hallowed halls of frontend sorcery. With every framework mastered, I felt my powers grow stronger, my creations more magnificent.",
          "But wait, there's more! In the realm of backend sorcery, I donned the cloak of Spring Boot and Actix Web, weaving intricate webs of RESTful APIs and handling requests with the finesse of a seasoned wizard. And let's not forget my dalliance with the enigmatic LangChain library for Python, a mystical tool that whispered secrets of natural language processing into my eager ears.",
          "When I'm not casting spells with my keyboard, you'll find me basking in the glow of my monitor, lost in the worlds of video games or indulging in the latest sci-fi/fantasy novels. And on weekends, I transform into a culinary wizard, conjuring up gourmet delights that would make Gordon Ramsay do a double-take.",
        ],
        link: "Read more",
      },
    },
  },
  {
    id: 4,
    imageUrl: "https://source.unsplash.com/random/900x600",
    body: {
      pl: {
        head: "Moje doświadczenie",
        content: [
          "Pozwól, że zabiorę Cię w niezwykłą podróż przez labirynt moich przygód z kodowaniem. Wyobraź sobie mnie, skromnego młodego programistę, bawiącego się na polach technologii, uzbrojonego jedynie w moją wierną klawiaturę i niezaspokojoną chęć podboju kodowania.",
          "Moja saga rozpoczęła się pośród świętych sal SAS Media, gdzie zostałem obdarowany świętą wiedzą Jetpack Compose i mistycznych sztuk Material UI. O, ekscytacja tworzenia eleganckich interfejsów użytkownika, które harmonijnie tańczą po cyfrowym płótnie! To tutaj moja miłość do magicznego świata kodowania naprawdę się rozpoczęła.",
          "Ale moje poszukiwanie oświecenia się tam nie skończyło, o nie! Zbrojony w potężne języki Kotlin, Python i Rust, wyruszyłem na pielgrzymkę nauki, przemierzając rozległe krajobrazy JavaScript, TypeScript i Java. Każdy język, cenny klejnot w koronie moich umiejętności programistycznych, obdarzył mnie siłą, by pokonać nowe horyzonty i podejmować większe wyzwania.",
          "W ZSLiT nr. 1 w Warszawie, Polsce, doskonaliłem moje umiejętności pośród grona innych poszukiwaczy wiedzy. Razem stworzyliśmy potężne projekty, które odbiły się echem w przestrzeni cyberprzestrzeni. AIChan, cud automatyzacji, ożywił cyfrową eter z jego legionem niezmordowanych botów, podczas gdy Poietic, CMS stworzony z samej esencji Rusta i Actix, świecił śladem efektywności i szybkości.",
          "Ale nie bój się, drogi czytelniku, moja podróż daleka jest od końca! Z każdym dniem napędzany jestem niezaspokojonym głodem, aby posuwać granice tego, co możliwe w cyfrowym świecie. Czy to mistrzostwo w intricacies ReactJS, Angular lub Spring Boot Actix Web, czy zagłębianie się w enigmatyczne głębiny biblioteki LangChain dla Pythona, jestem gotowy, by przyjąć wyzwania, które stoją przed nami.",
          "Tak więc dołącz do mnie, drodzy podróżnicy, gdy będziemy kontynuować rozplątywanie tajemnic kodu i wyznaczać kurs ku przyszłości ograniczonej jedynie granicami naszej wyobraźni. Bo w ciągle się rozszerzającym kosmosie technologii, jedyną granicą jest granica, którą odważamy się postawić sobie. Naprzód, do nieskończoności i dalej!",
        ],
        link: "Czytaj więcej",
      },
      en: {
        head: "My experience",
        content: [
          "Allow me to whisk you away on a whimsical journey through the labyrinth of my coding escapades. Picture me, a humble junior developer, frolicking in the fields of technology, armed with nothing but my trusty keyboard and an insatiable thirst for coding conquests.",
          "My saga began amidst the hallowed halls of SAS Media, where I was bestowed with the sacred knowledge of Jetpack Compose and the mystical arts of Material UI design language. Oh, the exhilaration of crafting elegant user interfaces that dance harmoniously across the digital canvas! It was here that my love affair with the magical world of coding truly began.",
          "But my quest for enlightenment did not end there, oh no! Armed with the mighty languages of Kotlin, Python, and Rust, I embarked on a pilgrimage of learning, traversing the vast landscapes of JavaScript, TypeScript, and Java. Each language, a cherished gem in the crown of my programming prowess, imbued me with the strength to conquer new horizons and tackle grander challenges.",
          "At ZSLiT nr. 1 in Warsaw, Poland, I honed my skills amidst a cadre of fellow seekers of knowledge. Together, we forged mighty projects that echoed through the annals of cyberspace. AIChan, a marvel of automation, breathed life into the digital ether with its legion of tireless bots, while Poietic, a CMS crafted from the very essence of Rust and Actix, blazed a trail of efficiency and speed.",
          "But fear not, dear reader, for my journey is far from over! With each passing day, I am driven by an insatiable hunger to push the boundaries of what is possible in the digital realm. Whether it be mastering the intricacies of ReactJS, Angular, or Spring Boot Actix Web, or delving into the enigmatic depths of the LangChain library for Python, I stand ready to embrace the challenges that lie ahead.",
          "So join me, fellow travelers, as we continue to unravel the mysteries of code and chart a course towards a future limited only by the bounds of our imagination. For in the ever-expanding cosmos of technology, the only limit is the limit we dare to set for ourselves. Onward, to infinity and beyond!",
        ],
        link: "Read more",
      },
    },
  },
];

/**
 *
 * @param {string} level
 * @returns {number}
 */
function getPerkValue(level) {
  switch (level) {
    case "beginner":
      return 1;
    case "intermediate":
      return 2;
    case "advanced":
      return 3;
    case "expert":
      return 4;
    default:
      return 0;
  }
}

/**
 *
 * @param {MultiLanguageArticle} article
 * @return {LangMap}
 */
/**
 * @param {MultiLanguageArticle} article
 * @returns {LangMap}
 */
function getMultiLangThumbnailBody(article) {
  // @ts-ignore
  return Object.entries(article.body)
    .map(([k, v]) => ({
      k,
      v: { head: v.head, link: v.link, content: [v.content[0]] },
    }))
    .reduce((acc, cur) => {
      acc[cur.k] = cur.v;
      return acc;
    }, {});
}

/** @type {MultiLanguageArticle[]} */
const thumbnailArticles = articles.map((art) => ({
  id: art.id,
  imageUrl: art.imageUrl,
  body: getMultiLangThumbnailBody(art),
}));

/**
 * @param {number} id
 * @param {string} language
 * @returns {Article | null}
 */
function getArticle(id, language) {
  if (language !== "pl" && language !== "en") return null;
  /** @type {ArticleBody | undefined} */
  const art = articles.find((art) => art.id === id);
  if (art === undefined) return null;
  const body = art.body[language];
  return body ?? null;
}

/**
 * @param {MultiLanguageArticle[]} multiLangArticles
 * @param {string} language
 * @returns {Article[]}
 */
function mapToArticles(multiLangArticles, language) {
  return multiLangArticles
    .map(
      (art) => {
        const body = art.body[language];
        if (body === undefined) return undefined;
        return {
          id: art.id,
          imageUrl: art.imageUrl,
          head: body.head,
          content: body.content,
          link: body.link,
        };
      }
    )
    .filter((x) => x !== undefined);
}

app.use(cors());

app.get("/:lang/articles", (req, res) => {
  const language = req.params.lang;
  if (req.query.thumbnail) {
    res.json(mapToArticles(thumbnailArticles, language));
  } else {
    console.log(JSON.stringify(mapToArticles(articles, language), undefined, 2));
    res.json(mapToArticles(articles, language));
  }
});

app.get("/:lang/articles/:id", (req, res) => {
  const articleId = parseInt(req.params.id);
  const langauge = req.params.lang;
  const article = articles.find((article) => article.id === articleId);
  if (article) {
    res.json(getArticle(articleId, langauge));
  } else {
    res.status(404).json({ error: "Article not found" });
  }
});

app.get("/:lang/user", (_, res) => {
  res.json(userInfo);
});

app.get("/perks", (_, res) => {
  res.json(perks.sort((a, b) => getPerkValue(a.level) - getPerkValue(b.level)));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
