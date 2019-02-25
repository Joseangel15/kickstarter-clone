import React, {Component} from 'react';
import Header from '../Header/Header';
import './HomePage.css';


class HomePage extends Component {




    render(){
        return(
            <div>
                <Header/>
                <div className='top-Menu'>
                    <a>Arts</a>
                    <a>Comics & Illustrations</a>
                    <a>Design & Tech</a>
                    <a>Film</a>
                    <a>Food & Craft</a>
                    <a>Games</a>
                    <a>Music</a>
                    <a>Publishing</a>
                </div>
            </div>
        )
    }
}


export default HomePage;