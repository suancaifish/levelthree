var express = require('express');
const app = express();

app.get('/', (req, res) => res.send('home'));

app.post('/setting', (req, res) => {
    res.append('Access-Control-Allow-Origin', '*')

    res.send(
        JSON.stringify(['a', 'b', 'c'])
    )
})


app.listen(8686);
console.log('启动服务器');