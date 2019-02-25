import React, { Component } from 'react';
import './Header.css';



class Header extends Component {


    render(){
        return(
            <div className='mainDiv-header'>
                <header>
                    <div>
                        <button>
                            Explore
                        </button>
                        <a>
                            Start a Project 
                        </a>
                    </div>
                    <div>
                        KICKSTARTER
                    </div>
                    <div>
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


