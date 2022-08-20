import taskr from "./Images/Taskr.gif";
import steakflipper from "./Images/steakflipper.gif";

export const menuItems = [
  {
    title: "Bio",
    url: "/bio",
  },
  {
    title: "Work",
    url: "/work",
    submenu: [
      {
        title: "Conditioner",
        url: "/Conditioner",
      },
      {
        title: "Steakflipper",
        url: "/work",
      },
      {
        title: "Taskr",
        url: "/work#taskr",
      },
    ],
  },
  {
    title: "Other",
    url: "/",
    submenu: [
      {
        title: "Music",
        url: "/music",
      },
      {
        title: "Design",
        url: "/design",
      },
      {
        title: "Video",
        url: "/video",
      },
    ],
  },
];

export const bio = {
  intro: "I'm Glen,",
  text: "a software developer.",
  text2: "my current stack:",
  list: ["javascript", "react", "css", "html", "python"],
  text3: "i do other things too:",
  // Turn into objects, add URL
  list2: [
    { id: "parent", url: "/bio" },
    { id: "musician", url: "https://ccconditionerrr.bandcamp.com/" },
    { id: "volunteer", url: "http://lawnyavawnya.com/" },
    { id: "designer", url: "/bio" },
  ],
  text4: "elsewhere online:",
  list3: [
    {
      id: "github",
      url: "https://github.com/ellis0n",
    },
    {
      id: "twitter",
      url: "https://twitter.com/internet_glen",
    },
    {
      id: "linkedin",
      url: "https://www.linkedin.com/in/glen-may-319547239/",
    },
    {
      id: "instagram",
      url: "https://www.instagram.com/internet_glen/",
    },
  ],
};

export const showcases = [
  {
    id: "steakflipper",
    sub: "A simple countdown timer app for cooking steaks evenly",
    text: "This is my first project made using React. It asks the user to pick their preferred 'rarity' and lets them know when they should flip their steaks based on that input.",
    alt: "A countdown app in action",
    img: steakflipper,
    bgColor: "white",
    color: "black",
  },

  {
    id: "taskr",
    sub: "A classic to-do application",
    text: "This is a basic to-do application. The 'Hello world!' of vanilla javascript projects.",
    alt: "A to-do app in action",
    img: taskr,
    bgColor: "black",
    color: "white",
  },
];

export const bandcamps = [
  {
    border: "0",
    width: "400px",
    height: "120px",
    src: "https://bandcamp.com/EmbeddedPlayer/album=2608923616/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/",
    href: "https://ccconditionerrr.bandcamp.com/album/conditioner",
    title: "CONDITIONER",
    artist: "CONDITIONER",
  },
];
