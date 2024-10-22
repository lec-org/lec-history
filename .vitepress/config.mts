import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/lec-history/",
  title: "乐程编年史 LEC-History",
  description: "乐程的故事",
  themeConfig: {
    nav: [
      { text: "编年史", link: "/history-outline/" },
      { text: "人物", link: "/member-stories/" },
      { text: "获奖", link: "/achievements/" },
      { text: "其他故事", link: "/other-stories/" },
    ],

    sidebar: {
      "/history-outline/": [
        {
          text: "编年史",
          items: [
            // { text: "2023级", link: "/history-outline/2023/" },
            // { text: "2023级", link: "/history-outline/2023/" },
            // { text: "2023级", link: "/history-outline/2023/" },
          ],
        },
      ],
      "/member-stories/": [
        {
          text: "成员故事",
          items: [
            // { text: "2023级", link: "/member-stories/2023/" },
            // { text: "2022级", link: "/member-stories/2022/" },
            // { text: "2021级", link: "/member-stories/2021/" },
            // { text: "2020级", link: "/member-stories/2020/" },
            // { text: "2019级", link: "/member-stories/2019/" },
          ],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/lec-org" }],
  },
  vite: {
    build: {
      assetsDir: "assets",
    },
  },
});
