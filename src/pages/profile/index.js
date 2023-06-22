import React from 'react';
import styles from './profile.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import HeaderComponent from '@/components/HeaderComponent';
const Profilecomponent = () => {
    return (
        <div>
            <HeaderComponent />
            <section className={styles.profile_component}>
                <div className='container-fluid'>
                    <div className='row justify-content-center'>
                        <div className='col-md-10 col-lg-6'>
                            <div className={styles.profile_icon}>
                                <div className={styles.icon_img}>
                                    <Image
                                        src="./images/profile-circle.svg"
                                        width={127}
                                        height={127}
                                        alt='profile-icon'
                                        className="img-fluid" />
                                    <h3>Mohammed Ismail</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.profile_Page}>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-6'>
                            <div className={styles.label_input}>
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <div className={styles.form_input}>
                                    <input type="email" class="form-control shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='MohammedIsmail@gmail.com' />
                                </div>
                            </div>

                            <div className={styles.form_headeing}>
                                <h3>Hunt Keywords</h3>
                            </div>
                            <div className={styles.label_input}>
                                <label for="exampleInputEmail1" class="form-label">Titles</label>
                                <div className={styles.title_input}>
                                    <div className={styles.form_input}>
                                        <input type="text" class="form-control shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='' />
                                    </div>
                                    <Link href="" className="text-decoration-none ms-2">
                                        <div className={styles.copy_img}>
                                            <Image
                                                src="./images/copy.svg"
                                                width={20}
                                                height={20}
                                                alt='profile-icon'
                                                className="img-fluid" />
                                        </div>
                                    </Link>
                                </div>
                                <div className={styles.select_option}>
                                    <div className={styles.select_option1}>
                                        <p className='rounded-pill'>Seth Godin <span className='ms-2'><Image src="./images/close-circle.svg" width={16} height={16} alt="" className="" /></span></p>
                                    </div>  
                                    <div className={styles.select_option1}>
                                        <p className='rounded-pill'>Seth Godin <span className='ms-2'><Image src="./images/close-circle.svg" width={16} height={16} alt="" className="" /></span></p>
                                    </div>      
                                    </div>
                            </div>
                            <div className={styles.label_input}>
                                <label for="exampleInputEmail1" class="form-label">Authors</label>
                                <div className={styles.title_input}>
                                    <div className={styles.form_input}>
                                        <input type="text" class="form-control shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='' />
                                    </div>
                                    <Link href="" className="text-decoration-none ms-2">
                                        <div className={styles.copy_img}>
                                            <Image
                                                src="./images/copy.svg"
                                                width={20}
                                                height={20}
                                                alt='profile-icon'
                                                className="img-fluid" />
                                        </div>
                                    </Link>
                                </div>
                                <div className={styles.select_option}>
                                    <div className={styles.select_option1}>
                                        <p className='rounded-pill'>Seth Godin <span className='ms-2'><Image src="./images/close-circle.svg" width={16} height={16} alt="" className="" /></span></p>
                                    </div>  
                                    <div className={styles.select_option1}>
                                        <p className='rounded-pill'>Seth Godin <span className='ms-2'><Image src="./images/close-circle.svg" width={16} height={16} alt="" className="" /></span></p>
                                    </div>      
                                    </div>
                            </div>





                            <div className={styles.zip_code}>
                                <div className={styles.form_headeing}>
                                    <h3>Zip Codes</h3>
                                </div>
                                <div className={styles.label_input1}>
                                    <label for="exampleInputEmail1" class="form-label">Default Zip Code</label>
                                    <div className={styles.title_input}>
                                        <div className={styles.form_input}>
                                            <input type="email" class="form-control shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='1593300' />
                                        </div>
                                        <Link href="" className="text-decoration-none ms-2">
                                            <div className={styles.copy_img}>
                                                Change
                                            </div></Link>
                                    </div>
                                </div>
                            </div>


                            <div className={styles.zip_code}>
                                <div className={styles.form_headeing}>
                                    <h3>Subscription Plan</h3>
                                </div>
                                <div className={styles.subscription_plan}>
                                    <Link href="" className=''>
                                        <Image
                                            src="./images/star-icon.svg"
                                            alt="img"
                                            width={86}
                                            height={94}
                                            className=""
                                        />
                                    </Link>
                                    <h4>BASIC PLAN</h4>
                                    <div className={styles.cancel_upgrade_btn}>
                                        <div className={styles.cancel_btn}>
                                            <button type="btn" className=''>Cancel</button>
                                        </div>
                                        <div className={styles.upgrade_btn}>
                                            <button type="btn" className=''>Upgrade Now </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Profilecomponent;
