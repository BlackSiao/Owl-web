
// 导航栏Logo 
module.exports ={
    themeConfig:{
        logo : '/logo.png',
        navber:false,  //禁用导航栏
        
        sidebar: [            //难道这里的路径不是相对路径？
            '/',
            ['/page-a','这里是侧边栏'],
            '/page-b'
          ],
       
        search: false, //禁用搜索栏
        lastUpdated:'最新一次更新时间为：', //显示更新时间

        //nextLinks:false,
        //prevLinks:false, 自动获取当前页的上一篇和下一篇文章

        smoothScroll:true, //启动页面滚动效果

    }
}
