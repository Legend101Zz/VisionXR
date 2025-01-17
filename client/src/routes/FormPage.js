import walmartLogo from '../assets/images/Walmart.png';
import store from '../assets/images/store.png';
import Name from '../assets/images/Name.png';
import VisionXR_Logo from '../assets/images/VisionXR_Logo.png';
import Logo_black from '../assets/images/Logo_black.png';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import TextInput from '../components/TextInput.js';
import PasswordInput from '../components/PasswordInput';


const FormPage = () => {
    return (
        <div className="w-full h-full bg-gradient-to-b from-lightblue to-deepblue flex">
            {/* left side */}
            <div className='w-1/2'>
                <div className='m-12 font-black text-5xl text-yelloe'>
                    ApeXR
                </div>
                <div className='mt-28 ml-8'>
                    <img src={store} alt="logoBig" />
                </div>
            </div>
            {/* right side */}
            <div className=' w-1/2 flex items-center justify-center flex-col'>
                <div className='m-10 w-3/5'>
                    {/* form */}
                    <div className='inputRegion w-full p-10 flex items-center justify-center flex-col bg-white rounded-2xl'>
                        <div className='font-bold mb-4'>
                            <img src={Logo_black} alt="VisionXR" />
                        </div>
                        <TextInput
                            label='Email address'
                            placeholder='Email address'
                            className='my-6 rounded-2xl'
                            value=""
                            setValue=""
                        />
                        <PasswordInput
                            label='Password'
                            placeholder='Password'
                            className='my-6'
                            value=""
                            setValue=""
                        />
                        <TextInput
                            label='Business Name'
                            placeholder='Business Name'
                            className='my-6'
                            value=""
                            setValue=""
                        />
                         <TextInput
                            label='Business Name'
                            placeholder='Business Name'
                            className='my-6'
                            value=""
                            setValue=""
                        />

                        <Link
                            to='/submit'
                            className='text-white bg-gradient-to-r from-blue1 to-blue2 w-2/3 flex items-center justify-center py-4 rounded-full font-bold'>
                            <div>SIGN UP</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FormPage;