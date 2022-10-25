import React from 'react';
import './Blog.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Blog = () => {
    return (
        <div >
            <div className='blog-bg'>

            </div>


            <Card className="text-center container mx-auto">
                <Card.Body>
                    <Card.Title> what is cors?</Card.Title>
                    <Card.Text>
                        Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.
                        Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).

                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">2 hours ago</Card.Footer>
            </Card>
            <Card className="text-center container mx-auto">
                <Card.Body>
                    <Card.Title> Why are you using firebase? What other options do you have to implement authentication?</Card.Title>
                    <Card.Text>
                        Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                        Other Authentication Platforms
                        STYTCH <br />
                        Ory <br />
                        Supabase <br />
                        Okta <br />
                        PingIdentity <br />
                        Keycloak <br />
                        Frontegg <br />
                        Authress <br />
                        Auth0 <br />
                        Firebase <br />
                        Amazon Cognito <br />
                        OneLogin
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
            <Card className="text-center container mx-auto">
                <Card.Body>
                    <Card.Title> How does the private route work?</Card.Title>
                    <Card.Text>
                        The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                        The current logged in user (authUser) is retrieved from Redux state with a call to the useSelector() hook. Redux is used in this example however it is not required to implement a Private Route component in React Router 6. You could use a different state management library or any approach you prefer to get the logged in status of the user.
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">5 days ago</Card.Footer>
            </Card>
            <Card className="text-center container mx-auto">
                <Card.Body>
                    <Card.Title>  What is Node? How does Node work?</Card.Title>
                    <Card.Text>
                        It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.

                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">7 days ago</Card.Footer>
            </Card>
        </div>
    );
};

export default Blog;