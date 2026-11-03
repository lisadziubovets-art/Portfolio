// All editable content lives here. Leave an image as "" to show a placeholder.
// Put image files in the images/ folder and reference them like "images/cover1.jpg".

const SITE = {
  name: "Lisa's Portfolio",
  email: "mailto:lisa.dziubovets@sjsu.edu",
  instagram: "https://instagram.com/trashtht",
  linkedin: "https://www.linkedin.com/in/yelyzaveta-dziubovets-003976343/",
  aboutPhoto: "images/about.webp",
  about:
    "Hi, I'm Lisa. I'm a new designer, and I'm just starting out. I love simple, clean design. My style is minimalism: only a few things, lots of space, and soft colours. I think simple design can be strong and beautiful. I'm still learning, and I try something new in every project. Right now I'm building my portfolio. I like branding, drawing, and making logos. I enjoy working with simple shapes, clean lines, and just a few colours. I want every piece to feel clear and easy to look at. My goal is to grow a little every day, learn from other designers, and slowly find my own voice. Soon I hope to work on real projects with real people. Thank you for visiting! You can write to me anytime."
};

const SLIDES = [
  { img: "images/slide-1.webp", caption: "Typographia 2026 brochure" },
  { img: "images/slide-2.webp", caption: "Baby Nutritional Care business card" },
  { img: "images/slide-3.webp", caption: "Baby Nutritional Care sign" },
  { img: "images/slide-4.webp", caption: "Frank Lloyd Wright magazine" },
  { img: "images/baby-1.webp", caption: "Baby Nutritional Care tote bag" }
];

const PROJECTS = [1, 2, 3, 4, 5, 6].map((n) => ({
  id: "project-" + n,
  name: { 1: "Typographia 2026", 2: "Magazine", 3: "Baby Store Logo", 4: "Baby Store Logo version 2", 5: "Digital Identity Logo Design", 6: "Glitch Art" }[n] || "Project Name " + n,
  glitch: n === 6,
  theme: { 1: "beige", 2: "grey", 3: "beige", 4: "beige", 5: "light", 6: "sand" }[n] || "",
  cover: {
    1: "images/typographia-1.webp",
    2: "images/magazine-1.webp",
    3: "images/baby-1.webp",
    4: "images/babyv2-1.webp",
    5: "images/digital-1.webp",
    6: "images/glitch-1.webp"
  }[n] || "",
  hero: {
    1: "images/typographia-1.webp",
    2: "images/magazine-1.webp",
    3: "images/baby-1.webp",
    4: "images/babyv2-1.webp",
    5: "images/digital-1.webp",
    6: "images/glitch-1.webp"
  }[n] || "",
  description:
    {
      1: "In this project, I generated an integrated visual system for typographer Elizabeth Goodspeed.",
      2: "In this project, I created a magazine about the popular architect Frank Lloyd Wright.",
      3: "In this project, I created a logo and a visual system for the store Baby Nutritional Care.",
      4: "This is the second version of the logo I created for the store Baby Nutritional Care.",
      5: "In this project, I created a logo that represents my artistic identity.",
      6: "In th1s pr0ject, I br0ke the im@ge on purp0se ▒▒ ERR0R 0x00FF // c0rrupt_d̶a̶t̶a̶.exe ░░ ▓▓ gl1tch_art.jpg [FAILED TO LOAD] ░░"
    }[n] || "Project description goes here. Explain the brief, your process and the result.",
  wide: {
    1: "images/typographia-2.webp",
    2: "images/magazine-2.webp",
    3: "images/baby-shirt.webp",
    4: "images/babyv2-2.webp",
    5: "images/digital-2.webp",
    6: "images/glitch-2.webp"
  }[n] || "",
  detail:
    {
      1: "These flyers and designs were made for the event Typographia 2026: International Typography &amp; Typeface Design Conference and Exhibition.",
      2: "Frank Lloyd Wright was a famous American architect. His style is called organic architecture. His buildings feel like part of nature. I tried to show this in my magazine with a big photo, simple type, and a lot of open space.",
      3: "Baby Nutritional Care is a store for baby food. I created its logo and a visual system that works on everything, from a business card to a T-shirt and a tote bag. The logo joins an apple and a baby bottle, so it feels healthy and caring. I used soft pink and fresh green colours, and I made a fun pattern from bottles to use on bags and packaging.",
      4: "This is the second version of the logo for Baby Nutritional Care. I kept the same visual style as the first version, but I changed the colours and some details. Now the logo shows a smiling baby inside a green apple, with fresh and soft green colours.",
      5: "I created a logo that represents my artistic identity. I was inspired by logos like Barbie and Apple because I really like their simple and minimalistic styles. My logo represents my artistic identity through its minimalistic and soft style and its color choice.",
      6: "▓▒░ 0x4E2F // s̷i̷g̷n̷a̷l̷ lost ░▒▓ I tw1sted c0l0urs, sh1fted p1xels, and l3t the f1le f@ll ap@rt. ██ D4TA_CORRUPT // r3nd3r_f@il ██ the m1st@ke is the @rt_ ▒▒░░ [ERR: n0 s1gnal] ░▒▓█"
    }[n] || "More detail about this project goes here. Tools used, client, year, or anything else worth sharing.",
  gallery:
    {
      1: [
        "images/typographia-3.webp",
        "images/typographia-4.webp",
        "images/typographia-5.webp",
        "images/typographia-logo.webp"
      ],
      2: [
        "images/magazine-3.jpg",
        "images/magazine-4.jpg",
        "images/magazine-5.jpg",
        "images/magazine-6.jpg"
      ],
      3: [
        "images/baby-3.webp",
        "images/baby-4.webp",
        "images/baby-5.webp",
        "images/baby-2.webp"
      ],
      4: ["images/babyv2-3.webp", "images/babyv2-4.webp"],
      5: [
        "images/digital-logo-1.png",
        "images/digital-logo-2.png",
        "images/digital-logo-3.png",
        "images/digital-logo-4.png"
      ],
      6: ["images/glitch-3.webp", "images/glitch-4.webp"]
    }[n] || ["", "", "", ""]
}));
