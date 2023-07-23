# 開發筆記

***概述***

***為什麼想要架設部落格？ (由高到低)***

* 整理學習筆記
* 建立個人品牌

***想架構時遇到的困難紀錄～***

* 部落格網站內的 文章Post、照片Image 的檔案名稱FileName該怎麼定義？
  > [圖片也要做的命名規範](https://medium.com/@floraya/%E5%9C%96%E7%89%87%E4%B9%9F%E8%A6%81%E5%81%9A%E7%9A%84%E5%91%BD%E5%90%8D%E8%A6%8F%E7%AF%84-9a673c372a87)
  > [八大圖片SEO心法(1)-SEO圖檔命名技巧與alt文字密技](https://www.tedu.tw/blog/8-Image-SEO-essential-Tips-1.html)
  實際用法(供參考)：
  blog.nickfu.tw/posts/First-Build-Github-Project (文章)
  blog.nickfu.tw/img/Logo.png (Logo)
  blog.nickfu.tw/img/First-Build-Github-Project-Content-001.png(圖片)
  blog.nickfu.tw/img/login-button-entry.png(圖片)


***部落格的 Domain Name 怎麼定義才好？***

例：blog.nickfu.tw

***原本沒有考慮到SEO的部分，但看到其他較專業Blog都有做，例：用分類來當作關鍵字，同時達到站內搜尋的效果***
 > [喜歡在地上滾的工程師](https://blog.niclin.tw/2015/11/26/session-%E8%88%87-cookie-%E7%9A%84%E5%B7%AE%E5%88%A5/)
 > [暗黑執行緒](https://blog.darkthread.net/blog/oci-dll-bomb/)
 > [The Will Will Web](https://blog.miniasp.com/post/2023/04/27/ASPNET-Core-Data-Protection-Overview)
 > [frannn](https://frannn.dev/posts/27fd8f25/)

## 2023/6/30 

* React(前端) 怎麼呼叫 Node.js(後端) API ?
  > 透過方法 axios.post("程式路徑","要傳遞的參數")
  > 備註：使用前請先安裝 axios 函式庫

* 如何替 使用者輸入密碼 加密?
  > 請安裝 bcryptjs 函式庫

* 什麼是 async和await ?
  > 同時執行 作業一(需要1秒),作業二(需要2秒),作業三(需要3秒) 同步作業要花6秒鐘，非同步作業只要3秒鐘。

* 什麼是 程式耦合性太高?

* 什麼是 Design Pattern 設計模式 Solid ?

## 2023/7/23

需求說明：
一、調整主頁不要顯示 登入、編輯文章功能。
二、完成修改密碼功能，只有登入的人才可以新刪改文章，因此登入密碼就很重要，同時要防止駭客直接用api改資料庫密碼，這部分api有驗證 token，如果 token 不對就沒辦法改。

開發遇到問題：
一、後端api user.js 函式庫名一直寫錯，例如：bscript 寫成 bscript、status 寫成 state。
二、同上，只要 api 有錯基本上畫面會直接寫 axios 錯誤，導致以為問題是出在 Router 上，因此建議開發 api 一段一段 return 比較保險。
三、SQL 好像不管有沒有加符號重音符 ` 都不會怎樣。
四、原來 input 不用重複寫，可以用 useState 一次加很多屬性。
五、清空 input 要記得把每個 property 都再賦值一次。 
六、token 就是綜合自己設定的 雜湊值(可能是10)、原參數(可能是帳號)、雜湊密碼(最簡單就是jwtkey) 全部加在一起運算得到的結果。因此除非駭客知道你所有的設定，要不然基本上是不可能破解。

## 開發時遇到的錯誤

[解决 Node.js mysql 客户端不支持认证协议引发的“ER_NOT_SUPPORTED_AUTH_MODE”问题](https://waylau.com/node.js-mysql-client-does-not-support-authentication-protocol/)

[NodeJs 跟 MySQL 連線過久時的錯誤引發\_Error: Cannot enqueue Query after fatal error.](https://coolmandiary.blogspot.com/2021/01/nodejsmysqlerror-cannot-enqueue-query.html)

[[BUG] React报错之You provided a `checked` prop to a form field](https://www.cnblogs.com/chuckQu/p/16625969.html)

[[BUG] TypeError: map() is not a function in React](https://bobbyhadz.com/blog/react-map-is-not-a-function)

> 出現 map() is not a function 錯誤訊息，請先檢查 DB 是否有資料，或 map 方法內引用的參數有資料。


## 參考資料

[npm 套件管理工具](https://ithelp.ithome.com.tw/articles/10191670)

[【Git】檔案管理 - 忽略檔案 .gitignore](https://ithelp.ithome.com.tw/articles/10272447)

[package.json 中的每一个字段你都了解了吗](https://zhuanlan.zhihu.com/p/412183990)

[【译】关于你想知道的 package-lock.json 的一切](https://juejin.cn/post/6844903731067093005)

[怎么看自己电脑上有没有装 mysql\_怎么查看电脑是否有 mysql？](https://blog.csdn.net/weixin_39963053/article/details/113137425)

[MySQL 建立 Foreign Key ( InnoDB ) 時要注意的一件事](https://lagunawang.pixnet.net/blog/post/25455909-mysql-%e5%bb%ba%e7%ab%8bforeign-key-%28-innodb-%29-%e6%99%82%e8%a6%81%e6%b3%a8%e6%84%8f%e7%9a%84%e4%b8%80%e4%bb%b6%e4%ba%8b)

[MySQL 時間類型資料之基本操作](https://ithelp.ithome.com.tw/articles/10254833)

[npm bcryptjs 官方使用教學](https://www.npmjs.com/package/bcryptjs)

[什麼是 [資料結構] 雜湊 (Hash)??](<https://ithelp.ithome.com.tw/articles/10208884>)

[一文搞清 JS、ES、TS 的關係](https://juejin.cn/post/6882927003188592654)

[淺談 ECMAScript 與 JavaScript](https://ithelp.ithome.com.tw/articles/10213310)

[用淺顯方式說明 Javascript 的 Promise(同步異步??)](https://ithelp.ithome.com.tw/articles/10230214)

[標點符號英文大集合](https://www.managertoday.com.tw/english/view/56185?)

[Day 20: 使用 VS Code 來開發 Markdown](https://ithelp.ithome.com.tw/articles/10225442)

[Markdown and Visual Studio Code 官方文件](https://code.visualstudio.com/docs/languages/markdown)

[什麼是 useState ?](https://pjchender.dev/react-bootcamp/docs/bootcamp/week1/use-state/)

[什麼是 陣列解構賦值 ?](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

[怎麼使用 useState ?](https://www.youtube.com/watch?v=Fhu5cu864ag)

[VScode 快捷鍵](https://www.youtube.com/watch?v=jsZoR1kkq6s)

[VScode 8個實用擴充套件](https://www.youtube.com/watch?v=kyRclsioJBQ)

[寫 React 推薦套件](https://codelove.tw/@tony/post/9aWN3g)

[什麼是 IntelliSense ](https://ithelp.ithome.com.tw/articles/10219794)

[為甚麼要用 ` 重音符](https://stackoverflow.com/questions/33679732/difference-if-there-is-any-between-and-in-javascript)