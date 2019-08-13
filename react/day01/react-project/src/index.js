import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

import Header from './components/Header';


import Img1 from './img/xin.png';
import Img2 from './img/sousuo.png';
import Img3 from './img/fanhui.png';
import Img4 from './img/hanbaocaidan.png';

// console.log(Img1);
let datas = { ig1: Img1, ig2: Img2, ig3: Img3, ig4: Img4 }

ReactDOM.render(
    <div >


        <Header left={Img1} right={Img2} />
        {/* <Header left={Img3} right={Img4} /> */}


    </div>,
    document.getElementById('root')
);





// serviceWorker.unregister();