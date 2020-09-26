import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Banner.css'
import Search from './Search';

function Banner() {
    const [showSearch, setShowSearch] = useState(false)
    const history = useHistory();

    return (
        <div className="banner">
            <div className="banner__search">
                <Button
                    onClick={() => setShowSearch(!showSearch) }
                    variant="outlined" >
                    { !showSearch ? "Search Dates" : "Hide" }
                </Button>
                {showSearch && <Search /> }
            </div>
            <div className="banner__info">
                <div>
                    <h1>Get out and stretch your imagination</h1>
                    <h5>
                        Plan a different kind of getaway to uncover the hidden gems near you.
                    </h5>
                    <Button
                        variant='outlined'
                        onClick={() => history.push('/search')}>
                        Explore Nearby
                    </Button>
                </div>
            </div>
            
        </div>
    )
}

export default Banner
