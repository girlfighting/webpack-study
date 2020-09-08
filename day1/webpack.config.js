/***
 * webpack的配置文件
 * 
 * 所有构件文件都是基于nodeJS平台运行的~模块化采用commonJS
 * 
 * loader -- 下载  --使用
 * plugin --- 下载  --引入 --使用
 */

  //resolve 用来拼接所有绝对路径的
  const {resolve} = require("path");
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  module.exports = {
    //入口
    entry:"./src/index.js",
    //输出
    output:{
      //输出文件名
      filename:'build.js',
      // 输出文件路径
      //__dirname 当前文件所在的绝对路径
      path:resolve(__dirname,'build/js')
    },
    //loader的配置好---相当于翻译官
    module:{
      rules:[
        {
          //匹配需要解析的文件
          test:/\.css/,
          //使用哪些loader进行处理
          use : [
            //use数组中的loader执行顺序是从下往上执行的
            //创建style标签，将js中的样式资源引入，插入到header中生效
            'style-loader',
            //将css文件变成commonj模块加载的js中，里面的内是样式字符串
            'css-loader'
          ]
        }
      ]
    },
    //plugin插件配置
    plugins:[
      //html-webpack-plugin
      //会自动生成一个html文件，并自动引入打包输出的所有资源
      //需求:需要有结构的html文件
      new HtmlWebpackPlugin({ 
        //复制./src/index.html文件。./src/index.html
        template:'./src/index.html'
      })
    ],

    //模式
    //开发模式
    mode:"development",
    //生产模式--会将代码进行压缩
    // mode:"prodution",
  }