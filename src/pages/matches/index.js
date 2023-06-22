import Inputcomponent from '@/components/Inputcomponent';
import React, { useState } from 'react';
import styles from './matches.module.scss';
// import Image from 'next/image';
// import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import HeaderComponent from '@/components/HeaderComponent';
import Head from "next/head"

const Matches = () => {
    const [active, setActive] = useState('all');

    var boxdata = [
        {
            head1: 'Store',
            para1: 'Thrift store #2',
            para2: 'Thrift store #2',
            para3: 'Thrift store #2',
            head2: 'Date',
            para4: '6 days ago',
            para5: '6 days ago',
            para6: '6 days ago',
            head3: 'Zip Code',
            para7: '16031',
            para8: '16031',
            para9: '16031',
        },
        {
            head1: 'Store',
            para1: 'Thrift store #2',
            para2: 'Thrift store #2',
            para3: 'Thrift store #2',
            head2: 'Date',
            para4: '6 days ago',
            para5: '6 days ago',
            para6: '6 days ago',
            head3: 'Zip Code',
            para7: '16031',
            para8: '16031',
            para9: '16031',
        },
        {
            head1: 'Store',
            para1: 'Thrift store #2',
            para2: 'Thrift store #2',
            para3: 'Thrift store #2',
            head2: 'Date',
            para4: '6 days ago',
            para5: '6 days ago',
            para6: '6 days ago',
            head3: 'Zip Code',
            para7: '16031',
            para8: '16031',
            para9: '16031',
        },
        {
            head1: 'Store',
            para1: 'Thrift store #2',
            para2: 'Thrift store #2',
            para3: 'Thrift store #2',
            head2: 'Date',
            para4: '6 days ago',
            para5: '6 days ago',
            para6: '6 days ago',
            head3: 'Zip Code',
            para7: '16031',
            para8: '16031',
            para9: '16031',
        },
        {
            head1: 'Store',
            para1: 'Thrift store #2',
            para2: 'Thrift store #2',
            para3: 'Thrift store #2',
            head2: 'Date',
            para4: '6 days ago',
            para5: '6 days ago',
            para6: '6 days ago',
            head3: 'Zip Code',
            para7: '16031',
            para8: '16031',
            para9: '16031',
        },
        {
            head1: 'Store',
            para1: 'Thrift store #2',
            para2: 'Thrift store #2',
            para3: 'Thrift store #2',
            head2: 'Date',
            para4: '6 days ago',
            para5: '6 days ago',
            para6: '6 days ago',
            head3: 'Zip Code',
            para7: '16031',
            para8: '16031',
            para9: '16031',
        },
        {
            head1: 'Store',
            para1: 'Thrift store #2',
            para2: 'Thrift store #2',
            para3: 'Thrift store #2',
            head2: 'Date',
            para4: '6 days ago',
            para5: '6 days ago',
            para6: '6 days ago',
            head3: 'Zip Code',
            para7: '16031',
            para8: '16031',
            para9: '16031',
        },
        {
            head1: 'Store',
            para1: 'Thrift store #2',
            para2: 'Thrift store #2',
            para3: 'Thrift store #2',
            head2: 'Date',
            para4: '6 days ago',
            para5: '6 days ago',
            para6: '6 days ago',
            head3: 'Zip Code',
            para7: '16031',
            para8: '16031',
            para9: '16031',
        },
        {
            head1: 'Store',
            para1: 'Thrift store #2',
            para2: 'Thrift store #2',
            para3: 'Thrift store #2',
            head2: 'Date',
            para4: '6 days ago',
            para5: '6 days ago',
            para6: '6 days ago',
            head3: 'Zip Code',
            para7: '16031',
            para8: '16031',
            para9: '16031',
        },
        {
            head1: 'Store',
            para1: 'Thrift store #2',
            para2: 'Thrift store #2',
            para3: 'Thrift store #2',
            head2: 'Date',
            para4: '6 days ago',
            para5: '6 days ago',
            para6: '6 days ago',
            head3: 'Zip Code',
            para7: '16031',
            para8: '16031',
            para9: '16031',
        },
        {
            head1: 'Store',
            para1: 'Thrift store #2',
            para2: 'Thrift store #2',
            para3: 'Thrift store #2',
            head2: 'Date',
            para4: '6 days ago',
            para5: '6 days ago',
            para6: '6 days ago',
            head3: 'Zip Code',
            para7: '16031',
            para8: '16031',
            para9: '16031',
        },
        {
            head1: 'Store',
            para1: 'Thrift store #2',
            para2: 'Thrift store #2',
            para3: 'Thrift store #2',
            head2: 'Date',
            para4: '6 days ago',
            para5: '6 days ago',
            para6: '6 days ago',
            head3: 'Zip Code',
            para7: '16031',
            para8: '16031',
            para9: '16031',
        },
        {
            head1: 'Store',
            para1: 'Thrift store #2',
            para2: 'Thrift store #2',
            para3: 'Thrift store #2',
            head2: 'Date',
            para4: '6 days ago',
            para5: '6 days ago',
            para6: '6 days ago',
            head3: 'Zip Code',
            para7: '16031',
            para8: '16031',
            para9: '16031',
        },
        {
            head1: 'Store',
            para1: 'Thrift store #2',
            para2: 'Thrift store #2',
            para3: 'Thrift store #2',
            head2: 'Date',
            para4: '6 days ago',
            para5: '6 days ago',
            para6: '6 days ago',
            head3: 'Zip Code',
            para7: '16031',
            para8: '16031',
            para9: '16031',
        },

        {
            head1: 'Store',
            para1: 'Thrift store #2',
            para2: 'Thrift store #2',
            para3: 'Thrift store #2',
            head2: 'Date',
            para4: '6 days ago',
            para5: '6 days ago',
            para6: '6 days ago',
            head3: 'Zip Code',
            para7: '16031',
            para8: '16031',
            para9: '16031',
        },
        {
            head1: 'Store',
            para1: 'Thrift store #2',
            para2: 'Thrift store #2',
            para3: 'Thrift store #2',
            head2: 'Date',
            para4: '6 days ago',
            para5: '6 days ago',
            para6: '6 days ago',
            head3: 'Zip Code',
            para7: '16031',
            para8: '16031',
            para9: '16031',
        },
        {
            head1: 'Store',
            para1: 'Thrift store #2',
            para2: 'Thrift store #2',
            para3: 'Thrift store #2',
            head2: 'Date',
            para4: '6 days ago',
            para5: '6 days ago',
            para6: '6 days ago',
            head3: 'Zip Code',
            para7: '16031',
            para8: '16031',
            para9: '16031',
        },
        {
            head1: 'Store',
            para1: 'Thrift store #2',
            para2: 'Thrift store #2',
            para3: 'Thrift store #2',
            head2: 'Date',
            para4: '6 days ago',
            para5: '6 days ago',
            para6: '6 days ago',
            head3: 'Zip Code',
            para7: '16031',
            para8: '16031',
            para9: '16031',
        },

        {
            head1: 'Store',
            para1: 'Thrift store #2',
            para2: 'Thrift store #2',
            para3: 'Thrift store #2',
            head2: 'Date',
            para4: '6 days ago',
            para5: '6 days ago',
            para6: '6 days ago',
            head3: 'Zip Code',
            para7: '16031',
            para8: '16031',
            para9: '16031',
        },

    ]

    console.log('active :::::::::::::::::::', active)
    return (
        <>
            <Head >
                <link rel="shortcut icon" href="/images/fav.png" />

            </Head>
            <div className='match-tab'>
                <HeaderComponent />
                <Inputcomponent />
                <section className={styles.matches_page}>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button onClick={() => setActive('all')} className={` nav-link ${active == "all" && 'active'} `} id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true">All</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button onClick={() => setActive('profile')} className={` nav-link ${active == "profile" && 'active'} `} id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button onClick={() => setActive('contact')} className={` nav-link ${active == "contact" && 'active'} `} id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-md-12'>
                                <div className="tab-content" id="pills-tabContent">
                                    {active == "all" && (
                                        <div className='row'>
                                            {
                                                boxdata.map((data, i) => {
                                                    return (
                                                        <div className='col-md-6 col-lg-4 col-xl-3' key={i}>
                                                            <div className={styles.box_info}>
                                                                <div className={styles.match_head}>
                                                                    <h4 className='m-0'>Seth Godin</h4>
                                                                    <p className='m-0'>Author</p>
                                                                </div>
                                                                <div className='row'>
                                                                    <div className='col-4 col-md-6'>
                                                                        <div className={styles.store_data}>
                                                                            <h5>{data.head1}</h5>
                                                                            <p>{data.para1}</p>
                                                                            <p>{data.para2}</p>
                                                                            <p>{data.para3}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-4 col-md-3'>
                                                                        <div className={styles.store_data}>
                                                                            <h5>{data.head2}</h5>
                                                                            <p>{data.para4}</p>
                                                                            <p>{data.para5}</p>
                                                                            <p>{data.para6}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-4 col-md-3'>
                                                                        <div className={styles.store_data}>
                                                                            <h5 className='text-center'>{data.head3}</h5>
                                                                            <p className='ps-2'>{data.para7}</p>
                                                                            <p className='ps-2'>{data.para8}</p>
                                                                            <p className='ps-2'>{data.para9}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>

                                    )}
                                    {active == "profile" && (

                                        <h1>Profile</h1>
                                    )}
                                    {active == "contact" && (
                                        <h1>Contact</h1>
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
            <style jsx>{`
                .match-tab .active {
                    color: red;
                    background: transparent;
                    font-family: 'Inter';
                    font-weight: 600;
                    font-size: 24px;
                    line-height: 29px;
                    color: #4F4F4F;
                }
                .nav-link{
                    color: #828282;
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 24px;
                    line-height: 29px;
                }
                .nav-pills{
                    margin:24px 0px;
                }
            `}</style>
        </>
    );
}



export default Matches;
