import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { TfiFullscreen } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";



const ProductItem = () =>{
    return(
        <>
            <div className='imageWrapper p-0'>
                                            <img
                                                src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/e252f32e-b4d2-4eca-b663-2a2769c526c4.jpg?ts=1708414667'
                                                className='w-100'
                                                alt='Product'
                                            />
                                           <span className='badge bg-primary'>28%</span>

                                           <div className='actions'>
                                                <Button> <TfiFullscreen /></Button>
                                                <Button> <IoMdHeartEmpty /></Button>
                                           </div>
                                        </div>
                                        <div className='info'>
                                        <h4>Werther Original Caramel Hard Candies</h4>
                                        <span className='text-success d-block'>In Stock</span>
                                        <Rating className='mt-2 mb-2' name="read-only" value={5} readOnly size='small' precision={0.5} />
                                        <div className='d-flex'>
                                            <span className='oldPrice'>20.00</span>
                                            <span className='netPrice text-danger ml-3'>14.00</span>
                                        </div>
                                        </div>
        </>
    )
};

export default ProductItem;