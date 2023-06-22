import React from 'react';
import styles from './home.module.scss';
// import Image from 'next/image';
// import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import Inputcomponent from '@/components/Inputcomponent';
import HeaderComponent from '@/components/HeaderComponent';
import Head from "next/head"

// import ProfileComponent from '@/components/ProfileComponent';
const Home = () => {
  var data = [
    {
      head1: 'You don’t know JavaScript',
      para1: 'Kyle Simpson',
      para2: 'Thrift store #11',
      para3: 'Zip code : 16031',
      para4: '5 days ago',
    },
    {
      head1: 'You don’t know JavaScript',
      para1: 'Kyle Simpson',
      para2: 'Thrift store #11',
      para3: 'Zip code : 16031',
      para4: '5 days ago',
    },
    {
      head1: 'You don’t know JavaScript',
      para1: 'Kyle Simpson',
      para2: 'Thrift store #11',
      para3: 'Zip code : 16031',
      para4: '5 days ago',
    },
    {
      head1: 'You don’t know JavaScript',
      para1: 'Kyle Simpson',
      para2: 'Thrift store #11',
      para3: 'Zip code : 16031',
      para4: '5 days ago',
    },
    {
      head1: 'You don’t know JavaScript',
      para1: 'Kyle Simpson',
      para2: 'Thrift store #11',
      para3: 'Zip code : 16031',
      para4: '5 days ago',
    },
    {
      head1: 'You don’t know JavaScript',
      para1: 'Kyle Simpson',
      para2: 'Thrift store #11',
      para3: 'Zip code : 16031',
      para4: '5 days ago',
    },
    {
      head1: 'You don’t know JavaScript',
      para1: 'Kyle Simpson',
      para2: 'Thrift store #11',
      para3: 'Zip code : 16031',
      para4: '5 days ago',
    },
    {
      head1: 'You don’t know JavaScript',
      para1: 'Kyle Simpson',
      para2: 'Thrift store #11',
      para3: 'Zip code : 16031',
      para4: '5 days ago',
    },
    {
      head1: 'You don’t know JavaScript',
      para1: 'Kyle Simpson',
      para2: 'Thrift store #11',
      para3: 'Zip code : 16031',
      para4: '5 days ago',
    },
    {
      head1: 'You don’t know JavaScript',
      para1: 'Kyle Simpson',
      para2: 'Thrift store #11',
      para3: 'Zip code : 16031',
      para4: '5 days ago',
    },
    {
      head1: 'You don’t know JavaScript',
      para1: 'Kyle Simpson',
      para2: 'Thrift store #11',
      para3: 'Zip code : 16031',
      para4: '5 days ago',
    },
    {
      head1: 'You don’t know JavaScript',
      para1: 'Kyle Simpson',
      para2: 'Thrift store #11',
      para3: 'Zip code : 16031',
      para4: '5 days ago',
    },
    {
      head1: 'You don’t know JavaScript',
      para1: 'Kyle Simpson',
      para2: 'Thrift store #11',
      para3: 'Zip code : 16031',
      para4: '5 days ago',
    },
    {
      head1: 'You don’t know JavaScript',
      para1: 'Kyle Simpson',
      para2: 'Thrift store #11',
      para3: 'Zip code : 16031',
      para4: '5 days ago',
    },
    {
      head1: 'You don’t know JavaScript',
      para1: 'Kyle Simpson',
      para2: 'Thrift store #11',
      para3: 'Zip code : 16031',
      para4: '5 days ago',
    },
    {
      head1: 'You don’t know JavaScript',
      para1: 'Kyle Simpson',
      para2: 'Thrift store #11',
      para3: 'Zip code : 16031',
      para4: '5 days ago',
    },
    {
      head1: 'You don’t know JavaScript',
      para1: 'Kyle Simpson',
      para2: 'Thrift store #11',
      para3: 'Zip code : 16031',
      para4: '5 days ago',
    },
    {
      head1: 'You don’t know JavaScript',
      para1: 'Kyle Simpson',
      para2: 'Thrift store #11',
      para3: 'Zip code : 16031',
      para4: '5 days ago',
    },
    {
      head1: 'You don’t know JavaScript',
      para1: 'Kyle Simpson',
      para2: 'Thrift store #11',
      para3: 'Zip code : 16031',
      para4: '5 days ago',
    },
    {
      head1: 'You don’t know JavaScript',
      para1: 'Kyle Simpson',
      para2: 'Thrift store #11',
      para3: 'Zip code : 16031',
      para4: '5 days ago',
    },
  ]
  return (
    <>
      <Head >
        <link rel="shortcut icon" href="/images/fav.png" />

      </Head>
      <HeaderComponent />
      <Inputcomponent />

      <section className={styles.home_cards}>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12'>
              <div className={styles.result_founds}>
                <p>32 Results found</p>
              </div>
            </div>
          </div>
          <div className='row'>
            {
              data.map((data, i) => {
                return (
                  <div className='col-12 col-md-6 col-lg-4 col-xl-3' key={i}>
                    <div className={styles.result_box1}>
                      <div className={styles.result_box_img}>

                      </div>
                      <div className={styles.result_box_info}>
                        <h3>{data.head1}</h3>
                        <p>{data.para1}</p>
                        <p>{data.para2}</p>
                        <label>{data.para3}</label>
                        <h6>{data.para4}</h6>
                      </div>
                    </div>
                  </div>
                )
              }
              )
            }

          </div>
          {/* <ProfileComponent /> */}
        </div>
      </section>
    </>
  );
}

export default Home;
