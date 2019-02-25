import React, { Component } from 'react';
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
                        KICKSTARTER
                    </a>
                    <div className='second-inner-box'>
                        <span>
                            Search
                        </span>
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


