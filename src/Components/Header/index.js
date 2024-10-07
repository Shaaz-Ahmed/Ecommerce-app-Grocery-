import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';



const Header = () => {
    return (
        <>
         <div className='headerwrapper'>
                <div className='top-strip bg-purple'>
                    <div className='container'>
                        <p className='mb-0 mt-0 text-center'>
                            Due to <b>high amount of request</b>, orders may be processed with a slight delay
                        </p>
                    </div>
                </div>
            </div>

            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="logowrapper d-flex align-items-center col-sm-2">
                             <Link to={'/'}> <img src={logo} alt='logo' /> </Link> 
                        </div>
                    </div>
                </div>
            </div>

           
        </>
    );
};

export default Header;
