import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Club from '../Club/Club';
import './Home.css'
import stedium from '../Photo/stedium.jpg'

const Home = () => {
    const [clubs, setClubs] = useState([])
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`)
            .then(response => response.json())
            .then(data => setClubs(data.teams))
    }, [])
    return (
        <div className="container">
            <div className="stedium">
                <img className="img-fluid" src={stedium} alt="" />
            </div>

            {
                clubs.map(club => <Club club={club}> </Club>)
            }
        </div>
    );
};

export default Home;