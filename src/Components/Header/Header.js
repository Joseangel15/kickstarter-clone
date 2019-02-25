import React, { Component } from 'react';
import kickstarterLogo from '../../Assets/kickstarter-logo-color.png';
import './Header.css';



class Header extends Component {


    render(){
        return(
            <div className='mainDiv-header'>
                <header>
                    <div className='first-inner-box'>
                        <button className='explore-btn'>
                            Explore
                        </button>
                        <a>
                            Start a Project 
                        </a>
                    </div>
                    <a className='main-title'>
                        <img src={kickstarterLogo} className='mainLogo'></img>
                    </a>
                    <div className='second-inner-box'>
                        <span className='search-btn'>
                            Search
                        </span>
                        <i class="fas fa-search" style={{ marginRight: '1.2rem'}}></i>
                        <a>
                            Sign in
                        </a>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header;


