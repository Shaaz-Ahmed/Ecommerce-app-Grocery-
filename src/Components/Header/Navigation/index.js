import Button from '@mui/material/Button';
import { IoMdMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";

const Navigation = () => {
    return (
        <>
           <nav>
                <div className='container'>
                <div className='row'>
                        <div className="col-sm-3 navPart1 ">
                            <Button className="allCatTab align-item-center">
                               <span className='icon1' style={{ marginRight: '10px' }}> <IoMdMenu /> </span>
                                 <span class='text'> ALL Categories</span>
                                 <span className='icon2 ' style={{ marginLeft: '10px' }}> <FaAngleDown /> </span>
                            </Button>
                        </div>

                        <div>

                        </div>
                </div>
                </div>
           </nav>
        </>
    );
};

export default Navigation;
