import React, { Component } from 'react'
import Img1 from '../img/xin.png';
import Img2 from '../img/sousuo.png';
import Img3 from '../img/fanhui.png';
import Img4 from '../img/hanbaocaidan.png';

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bool: !0,
            left: Img3,
            right: Img4
        }
    }

    render() {
        let style = {
            height: '50px',
            width: '100%',
            background: '#d43d3d',
            color: '#fff',
            fontSize: '20px',
            textAlign: 'center',
            lineHeight: '50px',
            fontWeight: 700,
            margin: 0,
            padding: 0
        }
        let style1 = {
            display: 'block',
            float: 'left',
            height: '30px',
            width: '30px',
            margin: '5px 0 0 5px'
            // background: Img

        }
        let style2 = {
            display: 'block',
            float: 'right',
            height: '20px',
            width: '20px',
            margin: '7px 5px 0 0'
            // background: Img

        }
        return (
            <div style={style}>

                <span style={style1}>
                    <img src={this.state.bool ? this.props.left : this.state.left} alt="" style={style1} />
                </span>

                今日头条

                <span style={style2}>
                    <img src={this.state.bool ? this.props.right : this.state.right} alt="" style={style2} />
                </span>
            </div>
        )
    }
}





// export default Header