//Import in bootstrap components
import Button  from 'react-bootstrap/Button';
import Card    from 'react-bootstrap/Card';


//Purpose: displays a bootstrap styled card of my github information 
function Display({ githubData }){
    return(
        <div className='centeredCard'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={githubData.avatar_url} alt="profile-avatar"/>
                <Card.Body>
                    <Card.Title>{githubData.login}</Card.Title>
                    <Card.Text>
                        {githubData.bio && <p> Bio: {githubData.bio} </p>}
                    </Card.Text>
                    <Button variant="outline-secondary"><a href={githubData.html_url} target="blank"> Visit my Github Account</a></Button>
                </Card.Body>
            </Card>
        </div>
    )
};

export default Display;