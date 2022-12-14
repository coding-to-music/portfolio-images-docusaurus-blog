const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "portfolio-images-docusaurus-blog",
  tagline: "Dinosaurs are cool. But I'm even cooler 😎.",
  url: "https://portfolio-images-docusaurus-blog.pages.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "coding-to-music", // Usually your GitHub org/user name.
  projectName: "portfolio-images-docusaurus-blog", // Usually your repo name.
  i18n: {
    defaultLocale: "en",
    locales: ["en", "id"],
  },
  themeConfig: {
    defaultMode: "dark",
    image: "img/logo.svg",
    // announcementBar: {
    //   id: 'support_us', // Any value that will identify this message.
    //   content:
    //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
    //   backgroundColor: '#fafbfc', // Defaults to `#fff`.
    //   textColor: '#091E42', // Defaults to `#000`.
    // },
    navbar: {
      title: ".fyi()",
      logo: {
        alt: "priambudi.fyi",
        src: "img/logo.svg",
        srcDark: "img/logo.light.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: ".create()",
        },
        {
          to: "/read",
          label: ".read()",
          position: "left",
        },
        {
          to: "/showcase",
          label: ".showcase()",
          position: "left",
        },
        {
          href: "https://github.com/coding-to-music/portfolio-images-docusaurus-blog",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorials",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Connect with me",
          items: [
            {
              label: "Linkedin",
              href: "https://www.linkedin.com/in/priambudi-bagaskara/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Read",
              to: "/read",
            },
            {
              label: "GitHub",
              href: "https://github.com/coding-to-music",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Your-Name-Here. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    // gtag: {
    //   trackingID: "G-EWZ5G4808S",
    // },
  },
  plugins: ["@docusaurus/plugin-ideal-image"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/coding-to-music/portfolio-images-docusaurus-blog/tree/main",
          editLocalizedFiles: true,
        },
        blog: {
          showReadingTime: true,
          blogTitle: "Read | portfolio-images-docusaurus-blog",
          blogDescription: "Blog Bagas",
          editUrl: ({ locale, blogDirPath, blogPath, permalink }) => {
            return `https://github.com/coding-to-music/portfolio-images-docusaurus-blog/tree/main/${blogDirPath}/${blogPath}`;
          },
          routeBasePath: "read",
          feedOptions: {
            type: "all", // required. 'rss' | 'feed' | 'all'
            title: "", // default to siteConfig.title
            description: "", // default to  `${siteConfig.title} Blog`
            copyright: `Copyright © ${new Date().getFullYear()} Your-Name-Here`,
            language: "en", // possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
          },
          editLocalizedFiles: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      },
    ],
  ],
};
