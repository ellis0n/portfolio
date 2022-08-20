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
        url: "/work#conditioner",
      },
      {
        title: "Steakflipper",
        url: "/work#steakflipper",
      },
      {
        title: "Taskr",
        url: "/taskr",
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
  intro: "I'm Glen May",
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
