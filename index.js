import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

const perks = [
  {
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    level: "intermediate",
  },
  {
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
    level: "intermediate",
  },
  {
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg",
    level: "intermediate",
  },
  {
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    level: "intermediate",
  },
  {
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg",
    level: "beginner",
  },
  {
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg",
    level: "beginner",
  },
  {
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
    level: "beginner",
  },
  {
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg",
    level: "beginner"
  }
];

const userInfo = {
  name: 'Jakub Duda',
  paragraph: 'I am a passionate developer fluent in spring, react, motivated enough to learn new technologies. Student of Piotr Drzewiecki technical school in Poland with a deep love for a software development',
  profilePicture: 'https://source.unsplash.com/random/800x800?query=portrait',
};

const articles = [
  {
    id: 1,
    head: 'About me',
    content: 'As a 17 years old software developer I have been interested in coding since my youngest age. This deep affection to field has led me to choose Piotr Drzewiecki technical school, which is one of the best technical schools in the Poland. I love to code both professionally and as a hobby. This interest has also led me to creating my own Github account, on which I frequently contribute code to many different projects.',
    imageUrl: 'https://source.unsplash.com/random/900x600',
    link: {
      url: 'https://www.google.com',
      text: 'Check out my github profile'
    }
  },
  {
    id: 2,
    head: 'Education',
    content: 'I am currently attending the Piotr Drzewiecki technical school in Poland.',
    imageUrl: 'https://source.unsplash.com/random/900x600?query=education',
    link: {
      url: 'https://www.tm1.edu.pl',
      text: 'Read more'
    }
  },
  {
    id: 3,
    head: 'My knowledge',
    content: 'Thanks to embracing the software develompent as my passion, I have learnt multiple languages such as Kotlin, Java, Javascript, Typescript, Python, Rust and several libraries/frameworks, including Spring Boot, React, Actix Web and Jetpack Compose. From hackathons to internship, I always chose to face the challenges, grow and learn. As a result, my skill and deep understanding of them is much better and clearer.',
    imageUrl: 'https://source.unsplash.com/random/900x600?query=knowledge'
  },
  {
    id: 4,
    head: 'Internship in SAS media',
    content: 'During the internship in SAS media, I have been learnt how to use Jetpack Compose and have been introduced to material 3 design language and it\'s guidelines. Thorought my work I have learnt how to work efficiently in a team. Overall, thanks to this internship, I have been able to get a grasp of software engineer job, it\'s requirements, and mechanics.',
    imageUrl: 'https://source.unsplash.com/random/900x600?query=internship',
    link: {
      url: 'https://sas-media.pl/',
      text: 'More about SAS media'
    }
  },
  {
    id: 5,
    head: 'AIChan',
    content: 'As a one of group projects in the technical school, my team had chosen to create a social media site fully populated by bots, using the OpenAI API, Spring Boot and Angular. This tech stack has allowed us to understand how the OpenAI API works and how one should assign work inside the team. Since then, we have made incremental improvements to the project, with the plans to monetize the site in the near future.',
    imageUrl: 'https://source.unsplash.com/random/900x600?query=AI',
    link: {
      url: 'https://github.com/AIChan-Team',
      text: 'Read more about AIChan'
    }
  }
];

app.use(cors());

app.get('/articles', (_, res) => {
  res.json(articles);
});

app.get('/articles/:id', (req, res) => {
  const articleId = parseInt(req.params.id);
  const article = articles.find(article => article.id === articleId);
  if (article) {
    res.json(article);
  } else {
    res.status(404).json({ error: 'Article not found' });
  }
});

app.get('/user', (_, res) => {
  res.json(userInfo);
});

app.get('/perks', (_, res) => {
  res.json(perks.sort((a, b) => a.level > b.level));
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

