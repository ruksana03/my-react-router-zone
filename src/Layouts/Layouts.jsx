import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Layouts = () => {
    return (
        <div>
            <section className='flex justify-between px-10 shadow-md my-7'>
                <div>
                    <h1 className='text-2xl font-bold'>My Zone</h1>
                </div>
                <nav>
                    <ul className='flex gap-5'>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/products">Prosucts</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/dashboard">Dashboard</a>
                        </li>
                    </ul>
                </nav>
            </section>

            <section>

                <div className='min-h-screen'>
                <Outlet></Outlet>
                </div>

                <Footer></Footer>

            </section>

        </div>
    );
};

export default Layouts;