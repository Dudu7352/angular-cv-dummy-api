import express from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

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

const articles = [
  {
    id: 1,
    head: "About me",
    content: ["paragraph 1", "paragraph 2", "paragraph 3"],
    imageUrl: "https://source.unsplash.com/random/900x600",
    link: "Read more"
  },
  {
    id: 2,
    head: "Education",
    content: ["paragraph 1", "paragraph 2", "paragraph 3"],
    imageUrl: "https://source.unsplash.com/random/900x600"
  },
  {
    id: 3,
    head: "My hobbies and passions",
    content: [
      "In the digital realm where the lines of code dance to the rhythm of creativity, I find my sanctuary. Hello there, fellow cyber wanderers! I'm here to share a cringe-worthy saga of my love affair with coding, a tale sprinkled with passion, caffeine-fueled nights, and the occasional bug squashing party.",
      "Ever since my fingers first danced across the keyboard, I knew I was destined for greatness in the enchanted kingdom of programming. As a junior developer on a quest for knowledge, I embarked on a magical internship journey at SAS Media Company. There, amidst the bustling corridors of innovation, I delved deep into the enchanting world of Jetpack Compose. Oh, the wonders I discovered! From crafting mesmerizing user interfaces to unraveling the secrets of reactive programming, every line of code felt like a stroke of genius.",
      "But my adventure didn't stop there, oh no! Armed with my trusty Kotlin sword and shield, I ventured forth into the vast wilderness of programming languages. Python, Rust, TypeScript, JavaScript—each language a precious gem in my treasure trove of skills. With Java as my faithful steed, I galloped through the fields of enterprise development, conquering mountains of business logic with the grace of a digital knight.",
      "Yet, my thirst for knowledge knew no bounds. Like a curious explorer, I set sail for uncharted territories, eager to tame the wild beasts of web development. ReactJS, Angular, Svelte—names whispered in hallowed halls of frontend sorcery. With every framework mastered, I felt my powers grow stronger, my creations more magnificent.",
      "But wait, there's more! In the realm of backend sorcery, I donned the cloak of Spring Boot and Actix Web, weaving intricate webs of RESTful APIs and handling requests with the finesse of a seasoned wizard. And let's not forget my dalliance with the enigmatic LangChain library for Python, a mystical tool that whispered secrets of natural language processing into my eager ears.",
      "When I'm not casting spells with my keyboard, you'll find me basking in the glow of my monitor, lost in the worlds of video games or indulging in the latest sci-fi/fantasy novels. And on weekends, I transform into a culinary wizard, conjuring up gourmet delights that would make Gordon Ramsay do a double-take.",
    ],
    imageUrl: "https://source.unsplash.com/random/900x600",
    link: "Read more"
  },
  {
    id: 4,
    head: "My experience",
    content: [
      "Allow me to whisk you away on a whimsical journey through the labyrinth of my coding escapades. Picture me, a humble junior developer, frolicking in the fields of technology, armed with nothing but my trusty keyboard and an insatiable thirst for coding conquests.",
      "My saga began amidst the hallowed halls of SAS Media, where I was bestowed with the sacred knowledge of Jetpack Compose and the mystical arts of Material UI design language. Oh, the exhilaration of crafting elegant user interfaces that dance harmoniously across the digital canvas! It was here that my love affair with the magical world of coding truly began.",
      "But my quest for enlightenment did not end there, oh no! Armed with the mighty languages of Kotlin, Python, and Rust, I embarked on a pilgrimage of learning, traversing the vast landscapes of JavaScript, TypeScript, and Java. Each language, a cherished gem in the crown of my programming prowess, imbued me with the strength to conquer new horizons and tackle grander challenges.",
      "At ZSLiT nr. 1 in Warsaw, Poland, I honed my skills amidst a cadre of fellow seekers of knowledge. Together, we forged mighty projects that echoed through the annals of cyberspace. AIChan, a marvel of automation, breathed life into the digital ether with its legion of tireless bots, while Poietic, a CMS crafted from the very essence of Rust and Actix, blazed a trail of efficiency and speed.",
      "But fear not, dear reader, for my journey is far from over! With each passing day, I am driven by an insatiable hunger to push the boundaries of what is possible in the digital realm. Whether it be mastering the intricacies of ReactJS, Angular, or Spring Boot Actix Web, or delving into the enigmatic depths of the LangChain library for Python, I stand ready to embrace the challenges that lie ahead.",
      "So join me, fellow travelers, as we continue to unravel the mysteries of code and chart a course towards a future limited only by the bounds of our imagination. For in the ever-expanding cosmos of technology, the only limit is the limit we dare to set for ourselves. Onward, to infinity and beyond!",
    ],
    imageUrl: "https://source.unsplash.com/random/900x600",
    link: "Read more"
  },
];

const thumbnailArticles = articles.map(art => ({
  id: art.id,
  head: art.head,
  content: [art.content[0]],
  imageUrl: art.imageUrl,
  link: art.link,
}));

app.use(cors());

app.get("/articles", (req, res) => {
  if (req.query.thumbnail) {
    console.log(JSON.stringify(thumbnailArticles, undefined, 2));
    res.json(thumbnailArticles);
  }
  else {
    console.log(JSON.stringify(articles, undefined, 2));
    res.json(articles);
  }
});

app.get("/articles/:id", (req, res) => {
  const articleId = parseInt(req.params.id);
  const article = articles.find((article) => article.id === articleId);
  if (article) {
    res.json(article);
  } else {
    res.status(404).json({ error: "Article not found" });
  }
});

app.get("/user", (_, res) => {
  res.json(userInfo);
});

app.get("/perks", (_, res) => {
  res.json(perks.sort((a, b) => a.level > b.level));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
