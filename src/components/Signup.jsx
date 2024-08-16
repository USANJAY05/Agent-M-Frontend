import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../authConfig';


const Signup = ({setEmail,setName,name,setShowToast,setPicture}) => {
    const navigate = useNavigate(); // Initialize useNavigate

    const login = useGoogleLogin({
        onSuccess: async (response) => {
            try {
                const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: {
                        Authorization: `Bearer ${response.access_token}`,
                    },
                });
                const { name , picture , email } = res.data;
                console.log(res.data)
                setName(name);
                setEmail(email)
                setPicture(picture)
                setShowToast(true);
                navigate('/desktop2'); // Use navigate instead of Navigate
            } catch (error) {
                console.log(error);
            }
        },
    });


    const { instance } = useMsal();

    const handleMSLogin = () => {
      instance.loginPopup(loginRequest).catch((error) => {
        console.error(error);
      });
    };

    return (
        <section className='grid grid-cols-2 h-screen'>
            <section className='flex items-center justify-center bg-gray-200'>
                <img src="./a.svg" alt="" />
            </section>
            <section className='bg-slate-950 flex flex-col items-center gap-16 pt-20 dark:text-white'>
                <h1 className='text-3xl'>Agent-M</h1>
                <div className='w-96 p-8 border border-slate-800 rounded flex flex-col gap-10'>
                    <h2 className='text-2xl text-center'>Sign Up</h2>
                    <div className='w-full flex flex-col gap-6'>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="">Email</label>
                            <input className='px-2 p-1 rounded border border-slate-800 outline-none dark:bg-slate-950' placeholder='abc@example.com' />
                        </div>
                        <input className='p-1 bg-blue-500 rounded hover:bg-blue-600' type="submit" value="Generate OTP" />
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='flex items-center gap-4'>
                            <hr className='w-full border-slate-700' /> or <hr className='w-full border-slate-700' />
                        </div>
                        <div className='flex justify-center gap-8'>
                            <button onClick={() => login()}>
                                <img className='w-8' src="https://imgs.search.brave.com/Nv4129r-xJgP8ve9P-rlAy7BHaff8OoRyN1D5jdCcVg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9nb29nbGUt/aWNvbi0yNTZ4MjU2/LWhxeGh1N2o3LnBu/Zw" alt="Google icon" />
                            </button>
                            <button onClick={()=>handleMSLogin()}>
                                <img className='w-8' src="https://imgs.search.brave.com/lZtSHU0xcSaZfNN6zHo9A4aLmiNBnFIEpmjesp6VYeA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvbWljcm9zb2Z0/L21pY3Jvc29mdF9Q/TkcxMy5wbmc" alt="Microsoft icon" />
                            </button>
                        </div>
                        <small className='text-center'>Already have an account? <Link to={'/login'} className='underline'>Sign in</Link></small>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Signup;