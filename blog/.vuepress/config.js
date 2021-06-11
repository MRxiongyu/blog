/**
 * @program: my-blog
 * @description:
 * @author: Yu.Xiong
 * @create: 2021-06-11 10:14
 **/
module.exports = {
  theme: '@vuepress/blog', // 使用blog主题
  title: 'yu的博客',
  description: '随手写一写，没事写一写，只要写总比不写好。',
  sitemap: {
    hostname: 'http://www.xiongyu.work'
  },
  /**
   * Ref: https://vuepress-theme-blog.ulivz.com/config/#comment
   */
  comment: {
    service: 'disqus',
    shortname: 'vuepress-plugin-blog',
  },
  /**
   * Ref: https://vuepress-theme-blog.ulivz.com/config/#newsletter
   */
  newsletter: {
    endpoint: 'https://billyyyyy3320.us4.list-manage.com/subscribe/post?u=4905113ee00d8210c2004e038&amp;id=bd18d40138'
  },
  /**
   * Ref: https://vuepress-theme-blog.ulivz.com/config/#feed
   */
  feed: {
    canonical_base: 'https://example.vuepress-theme-blog.ulivz.com/',
  },
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '随笔', link: '/writings/'},
      {text: '标签', link: '/tag/',},
      {text: 'GitHub', link: 'https://github.com/MRxiongyu'},
    ],
    dateFormat: 'YYYY-MM-DD',
    smoothScroll: true,
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/vuejs/vuepress',
        },
        {
          type: 'twitter',
          link: 'https://github.com/vuejs/vuepress',
        },
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'MIT Licensed | Copyright © 2021-present YuX',
        },
      ],
    },
  },
  plugins: [
    [
      '@vuepress/blog',
      {
        directories: [
          {
            // Unique ID of current classification
            id: 'post',
            // Target directory
            dirname: '_posts',
            // Path of the `entry page` (or `list page`)
            path: '/',
            title: '主页',
            layout: 'MyIndexPost',
            itemLayout: 'MyPost',
            itemPermalink: '/:year/:month/:day/:slug'
          },
          {
            id: 'writing', // Unique id for current classifier
            dirname: '_writings', // Matched directory name
            path: '/writings/', // Entry page for current classifier
            title: '随笔', // Entry and pagination page titles for current classifier.
            layout: 'IndexWriting', // Layout component name for entry page.
            frontmatter:{ //Front matter for entry page.
              tag: 'vuepress'
            },
            itemLayout: 'Writing', // Layout for matched pages.
            itemPermalink: '/writings/:year/:month/:day/:slug', // Permalink for matched pages
          }
        ],
        frontmatters: [
          {
            id: 'tag',
            keys: ['tags'],
            path: '/tag/',
          },
        ],
        globalPagination: {
          lengthPerPage: 5,
        },
      },
    ],
  ],
}
