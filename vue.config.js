module.exports = {
  // lintOnSave: false,
  configureWebpack: {
    devServer: {
      port: 8888, // 端口
      open: false, // 是否自动打开
      // mock数据
      before(app) {
        // app.get('url', (req, res) => {
        //   res.json({
        //
        //   })
        // })
        // 用户信息池
        let userpool = [
          { username: 'sll', password: '123456' },
          { username: 'abc', password: 'abcdef'}
        ]
        // 注册接口
        app.get('/api/register', (req, res) => {
            const { username, password } = req.query
            const userLength = userpool.filter(v => v.username == username).length  // array.filter(function(currentValue,index,arr), thisValue)
            if(userLength > 0){
              // 返回数据
              res.json({
                success: false,
                message: '用户名已存在'
              })
            } else {
              res.json({
                success: true,
                message: '注册成功'
              })
            }
        })
        // 登录接口
        let tokeKey = "vip666"
        app.get('/api/login', (req, res) => {
          const { username, password } = req.query
          if( username == "sll" && password == "123456" || username == "abc" && password == "abcdef") {
            res.json({
              code: 0,
              message: "登录成功",
              token: tokeKey + '-' + username + '-' + (new Date().getTime()+60*60*1000)
            })
          } else {
            res.json({
              code: 1,
              message: "账户名或密码错误"
            })
          }
        })
        // 轮播图接口
        app.get('/api/banner', (req, res) => {
          res.json({
            data: [
              {
                url: 'https://sale.jd.com/mall/RIqGOPEzfgwMu.html',
                image: '//img1.360buyimg.com/pop/jfs/t1/15586/7/12593/244878/5c99f086E092dceca/db33339b3947286a.jpg'
              },
              {
                url: 'https://mall.jd.com/index-946180.html?extension_id=eyJhZCI6IiIsImNoIjoiIiwic2hvcCI6IiIsInNrdSI6IiIsInRzIjoiIiwidW5pcWlkIjoie1wiY2xpY2tfaWRcIjpcImM5OGYzN2E2LTNjN2ItNDI0Ni1iMWJlLWJkZjhkZDJjMTRmZVwiLFwibWF0ZXJpYWxfaWRcIjpcIjQyNDI3NDkwMFwiLFwicG9zX2lkXCI6XCIzNTAzXCIsXCJzaWRcIjpcImZkNDQzZDkwLWZmY2ItNGU5Ni1iMTAwLTYzMDQ5MTc2YTg2MFwifSJ9&jd_pop=c98f37a6-3c7b-4246-b1be-bdf8dd2c14fe&abt=1',
                image: '//img1.360buyimg.com/pop/jfs/t1/40494/12/59/185702/5cc03c2fEb59ee967/a343c4b5bfe01d08.jpg'
              },
              {
                url: 'https://mall.jd.com/index-977050.html?extension_id=eyJhZCI6IiIsImNoIjoiIiwic2hvcCI6IiIsInNrdSI6IiIsInRzIjoiIiwidW5pcWlkIjoie1wiY2xpY2tfaWRcIjpcIjNjMWRjMzVlLTExNmYtNGI0Yi1iNmMxLTk4OGEyN2Y4Njg0ZFwiLFwibWF0ZXJpYWxfaWRcIjpcIjQyNTYxOTg3OFwiLFwicG9zX2lkXCI6XCIzNTA1XCIsXCJzaWRcIjpcImY1YTcyZWRjLTY4MGItNDBmNS1hYTEzLWY0ODkyMjMzNTI1MlwifSJ9&jd_pop=3c1dc35e-116f-4b4b-b6c1-988a27f8684d&abt=1',
                image: '//img1.360buyimg.com/pop/jfs/t1/43730/16/587/139030/5cc2d32fEeecbf1fc/96b96da99b1cb71a.jpg'
              },
              {
                url: 'https://pro.jd.com/mall/active/47B5SP1ti3y4dvQEzniqRvaEgdrX/index.html',
                image: '//m.360buyimg.com/babel/jfs/t1/30333/27/15235/97464/5cc12a82Ea77fef50/eda43346cc55f4b7.jpg'
              },
              {
                url: 'https://pro.jd.com/mall/active/46Vsus7SpKRgDbyAUitFHeBJnthu/index.html',
                image: '//m.360buyimg.com/babel/jfs/t1/35192/18/4021/100700/5cc00bc1E7e092b2d/623f3377ba7dec01.jpg'
              },
              {
                url: 'https://pro.jd.com/mall/active/2CCAAbzbm5PQZaZpu7nPFL5D3HDh/index.html',
                image: '//m.360buyimg.com/babel/jfs/t1/43021/18/623/89439/5cc2d839E269f927c/de73647f4ef886a7.jpg'
              }
            ]
          })
        })
        // 滑动分类接口
        app.get('/api/scrolllist', (req, res) => {
          res.json({
            data: [
              [
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label: '分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label: '分类二'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label: '分类三'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label: '分类四'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label: '分类五'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label: '分类六'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label: '分类七'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label: '分类八'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label: '分类九'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                  label: '分类十'
                }
              ],
              [
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                  label: '分类十一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                  label: '分类十二'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                  label: '分类十三'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                  label: '分类十四'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                  label: '分类十五'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                  label: '分类十六'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                  label: '分类十七'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                  label: '分类十八'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                  label: '分类十九'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                  label: '分类二十'
                }
              ]
            ]
          })
        })
        // 分类页图片接口
        app.get('/api/classify', (req, res) => {
          switch (req.query.type) {
            case '0':
              res.json({
                data: [
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label: '华为'
                  },
                  {
                    image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label: '荣耀'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label: '雪梨手机'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label: '华为'
                  },
                  {
                    image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label: '荣耀'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label: '雪梨手机'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label: '华为'
                  },
                  {
                    image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label: '荣耀'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label: '雪梨手机'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label: '华为'
                  },
                  {
                    image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label: '荣耀'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label: '雪梨手机'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label: '华为'
                  },
                  {
                    image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label: '荣耀'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label: '雪梨手机'
                  },
                ]
              });
              break;
            case '1':
              res.json({
                data: [
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                ]
              });
              break;
            case '2':
              res.json({
                data: [
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label: '华为'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label: '华为'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label: '华为'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label: '华为'
                  }
                ]
              });
              break;
            case '3':
              res.json({
                data: [
                  {
                    image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label: '荣耀'
                  },
                  {
                    image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label: '荣耀'
                  },
                  {
                    image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label: '荣耀'
                  },
                  {
                    image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label: '荣耀'
                  },
                ]
              });
              break;
            case '4':
              res.json({
                data: [
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                ]
              });
              break;
            case '5':
              res.json({
                data: [
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label: '雪梨手机'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label: '雪梨手机'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label: '雪梨手机'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label: '雪梨手机'
                  },
                ]
              });
              break;
            case '6':
              res.json({
                data: [
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                ]
              });
              break;
          }
        })
      }
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
