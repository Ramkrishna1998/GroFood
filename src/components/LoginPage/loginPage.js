import react, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom"
import Header from '../Header/header';
import './loginPage.css'
import login_bg from '../../images/login_bg.png'
import Footer from '../Footer/footer';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    function handleSignIn() {
        console.log('handle');
        let bodyFormData = new FormData();
        bodyFormData.append('email', email);
        bodyFormData.append('password', password);

        axios({
            method: "post",
            url: "http://assignment.cyberboxer.com/auth/login",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
        }).then((response) => {
            console.log('response', response)
            if (response.data.status === 1) {
                localStorage.setItem('userToken', response.data.data.token)
                navigate(`/dashboard`);
            }
        });
    }
    return (
        <div className='h-screen ' style={{ backgroundImage: `url(${login_bg})` }}>
            <Header />
            <div className="w-full bg-cover flex flex-col justify-center py-12 sm:px-6 lg:px-8">

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4  sm:rounded-lg sm:px-10">
                        <div className='flex text-xl text-gray-600 font-thin justify-center pt-8 pb-3'>First time?</div>
                        <div className='flex text-gray-400 font-thin justify-center pb-4'>It only takes a minute to login with indexfing.</div>
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                {/* <label htmlFor="email" className="float-left block text-sm font-medium text-gray-700">
                                    Email
                                </label> */}
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        placeholder='Email'
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                {/* <label htmlFor="password" className="float-left block text-sm font-medium text-gray-700">
                                    Password
                                </label> */}
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        placeholder='Password'
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className='flex justify-center'>
                                <button
                                    type="button"
                                    className="flex justify-center shadow-2xl py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300"
                                    onClick={() => handleSignIn()}
                                >
                                    Login in
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            <div className='bottom-0 absolute w-full'>
                <Footer />
            </div>
        </div>
    )
}

export default LoginPage;
