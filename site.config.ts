import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://valaxy.site/',
  lang: 'zh-CN',
  title: 'Valaxy Theme Yun',
  author: {
    name: '水磁WaterMagent',
    avatar: 'https://cdn.luogu.com.cn/upload/image_hosting/nk6svehs.png'
  },
  description: 'Valaxy Theme Yun Preview.',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'QQ 群 1033897254',
      link: 'https://qm.qq.com/cgi-bin/qm/qr?k=Rt5ksLB0ONsfQ1B7YEaEir0LjHJpbVus&jump_from=webapi&authKey=Vpuj6kufgv7V9naXPgY0HjgAA8Nw32eEk9z5RcGm/hJkSLW6DXDrfyTM6y9b8xtz',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/WaterMagent',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '洛谷',
      link: 'https://www.luogu.com.cn/user/1429721',
      icon: 'i-ri-luogu-line',
      color: '#E6162D',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/3546745348819092',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'E-Mail',
      link: 'mailto:me@yunyoujun.cn',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
  ],

  search: {
    enable: false,
  },

  sponsor: {
    enable: true,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '支付宝',
        url: 'https://cdn.yunyoujun.cn/img/donate/alipay-qrcode.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/qqpay-qrcode.png',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/wechatpay-qrcode.jpg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})
