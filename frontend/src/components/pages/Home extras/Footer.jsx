import React from 'react'
import { Link } from 'react-router-dom'
import '../../inc/CategoryMenu.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Chatbot from '../../Chatbot/chatbot'
export default function Footer() {
    return (<>
        <div>
            <section className="footer">
                <div className="span1">&copy; 2021 Company, Inc</div>
                <div>
                    <ul>
                        
                        <li style={{ width: "auto" }}>

                            <Link to='/chatbot' className="nav-link active" data-bs-toggle="modal" data-bs-target="#Chatbot">
                                <i className="fas fa-robot" style={{ fontSize: "40px" }}></i> </Link>
                        </li>
                        <div className="modal fade" id="Chatbot" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div >
                                        <div >
                                            <Chatbot />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
            </section>
        </div>

    </>
    )
}
