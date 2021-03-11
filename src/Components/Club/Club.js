import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Club.css'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Club = (props) => {
    const { idTeam, strLeague, strTeamBadge, strSport, strTeam } = props.club;
    const history = useHistory();
    const showDetails = idTeam => {
        const url = `clubDetails/${idTeam}`
        history.push(url)
    }
    return (
        <Card className="clubCard shadow-sm p-3 bg-body rounded container" style={{ width: '18rem' }}>
            <Card.Img className="img-fluid" variant="top" src={strTeamBadge} />
            <Card.Body>
                <Card.Title>
                    <h2>
                        {strTeam}
                    </h2>
                </Card.Title>
                <Card.Text>
                    <h6>{strLeague}</h6>
                </Card.Text>
                <Card.Text>
                    Game Type : {strSport}
                </Card.Text>
                <Button onClick={() => showDetails(idTeam)} variant="primary">Details <FontAwesomeIcon icon={faArrowRight} /></Button>
            </Card.Body>
        </Card>
    );
};

export default Club;