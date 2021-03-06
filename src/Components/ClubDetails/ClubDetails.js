import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ClubDetails.css'
import male from '../Photo/male.png'
import female from '../Photo/female.png'
import facebook from '../Icon/Facebook.png'
import twitter from '../Icon/Twitter.png'
import youTube from '../Icon/YouTube.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMale, faFutbol, faClock, faFlag, faStream } from '@fortawesome/free-solid-svg-icons'

const ClubDetails = () => {
    const { idTeam } = useParams();
    const [club, setClub] = useState({});
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
            .then(res => res.json())
            .then(data => setClub(data.teams[0]))
    }, [idTeam])
    const { strTeam, strSport, intFormedYear, strGender, strStadiumDescription, strCountry, strTeamBanner, strYoutube, strTwitter, strFacebook } = club;
    return (
        <div className="container">
            <div className="thumbnail">
                <img className="img-fluid" src={strTeamBanner} rounded alt="" />

            </div>

            <div className="brand row">
                <div className="col-md-6 text-brand">
                    <h2><FontAwesomeIcon icon={faStream} /> {strTeam}</h2>
                    <p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                    <p><FontAwesomeIcon icon={faClock} /> Founded: {intFormedYear}</p>
                    <p><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</p>
                    <p><FontAwesomeIcon icon={faMale} /> Gender: {strGender}</p>
                </div>
                <div className="col-md-6 brand-image ">
                    {
                        strGender === "Male"
                            ? <img className="img-fluid" src={male} alt="" />
                            : <img className="img-fluid" src={female} alt="" />
                    }

                </div>
            </div>

            <div className="description p-3 m-3">
                <p>{strStadiumDescription}</p>
            </div>

            <div className="icon">
                <a href={"https://" + strYoutube} > <img className="img-fluid" src={youTube} alt="" /></a>
                <a href={"https://" + strFacebook} > <img className="img-fluid" src={facebook} alt="facebook" /></a>
                <a href={"https://" + strTwitter} > <img className="img-fluid" src={twitter} alt="twitter" /></a>
            </div>
        </div>
    );
};

export default ClubDetails;
