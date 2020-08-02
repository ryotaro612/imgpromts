const http = require('http'); 

// サーバセットアップ
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'}); // Content-Type指定
  res.end('Hello World!');
})
.listen(3000, () => console.log('Server http://localhost:3000')); 
