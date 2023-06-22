import React, { useState }from 'react';
import { useRouter } from 'next/router';
import styles from './header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';

const HeaderComponent = () => {
    const router = useRouter()

    console.log('router ::::::::::::::::::::', router)
    return (
        <>
            <div>
                <header className={styles.header_Sec}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className={styles.main_head}>
                                <div className={styles.header_logo}>
                                    <Link href="" >
                                        {/* <Image
                                            src="./images/logo.svg"
                                            className='img-fluid' alt="logo" /> */}
                                        <Image
                                            src='/images/logo1.png'
                                            width={120}
                                            height={58}
                                            className="img-fluid"
                                            alt="logo"
                                        />
                                    </Link>
                                </div>
                                <div className={styles.header_menulist}>
                                    <ul>
                                        <li><Link href="/" className={`text-decoration-none ${router?.asPath == '/' && styles.active_blue_color} `}>Home</Link></li>
                                        <li><Link href="/matches" className={`text-decoration-none ${router?.asPath == '/matches' && styles.active_blue_color} `}>Matches</Link></li>
                                    </ul>
                                </div>
                                <div className={styles.profle_icon}>
                                    <Link href="/profile"> <Image
                                            src="./images/profile-icon.svg"
                                            width={40}
                                            height={40}
                                            className="img-fluid"
                                            alt="logo"
                                        /><span className=''>Hi, James!</span></Link>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    );
}

export default HeaderComponent;
