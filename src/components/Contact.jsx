import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function Contact() {
    return (
        <div className='contact'>
            <div className='container'>
            <h1 className='text-center' >Contact</h1>
            <Form className='text-center p-5'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <div className="row">
                        <div className="col-md-6">
                            <Form.Control type="name" placeholder="Your Name" />
                            </div>
                            <div className="col-md-6"><Form.Control type="email" placeholder="Your E-mail" />
                            
                        </div>
                    </div>

                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                    <Form.Control as="textarea" rows={3} placeholder='Your Message' />
                    <Button variant="primary mt-4">Send Message</Button>
                </Form.Group>

            </Form>
        </div>
        </div>
    )
}
export default Contact