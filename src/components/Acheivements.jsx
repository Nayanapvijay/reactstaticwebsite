import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaTrophy } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";
import { FaCrown } from "react-icons/fa6";

function Acheivements() {
    return (
        <div className='container'>
<h1 className='text-center'>Acheivements</h1>
            <div className="row">
                <div className="col-md-4">
                    <Card>
                        
                        <Card.Body className='text-center'>
                            <Card.Title className='text-center'><FaTrophy className='acheivementicons text-warning'/></Card.Title>
                            <Card.Title className='text-center'>5 Ballon d'Or
                            </Card.Title>
                            <Card.Text>
                            Awarded for his outstanding football career.
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card>
                        
                        <Card.Body className='text-center'>
                        <Card.Title><GoStarFill className='acheivementicons text-primary' />
                        </Card.Title>
                            <Card.Title>UEFA Champions League
                            </Card.Title>
                            <Card.Text>
                            Won 5 UEFA Champions League titles.


                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card>
                        
                        <Card.Body className='text-center'>
                            <Card.Title><FaCrown className='acheivementicons text-success'/></Card.Title>
                            <Card.Title>European Champion
                            </Card.Title>
                            <Card.Text>
                            Led Portugal to victory in Euro 2016.


                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
        
    )
}

export default Acheivements