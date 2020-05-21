// 原生ajax
// 1. 创建实例

let xmlHttp = new XMLHttpRequest();


// 2. 绑定监听
// readystate: 0 1 2 3 4
xmlHttp.onreadystatechange = function () {
  if(xmlHttp.readyState === 4){ // 数据接收完毕， 成功 || 失败
    if(xmlHttp.status === 200){ // 成功     200 304 404 500
      console.log(xmlHttp.response);
    }
  }
}

// 问题： ajax请求能否同步发送： 能 ---> open方法的第三个参数为false
// 3. 设置请求的请求方式和请求的url
xmlHttp.open(method, url, false);
// 4. 发送请求
xmlHttp.send();

// 如果同步发送，只能在send后边 同步获取数据
// console.log(xmlHttp.response);
