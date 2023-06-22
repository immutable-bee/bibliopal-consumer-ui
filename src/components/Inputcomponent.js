import React, { useState } from 'react';
import styles from './inputcomponent.module.scss';
import Image from 'next/image';
const Inputcomponent = () => {
  const [active, setActive] = useState('all');

  return (
    <div>
      <div>
        <section className={styles.homepage}>
          <div className='container-fluid'>
            <div className='row justify-content-center'>
              <div className='col-10 col-md-8 col-lg-6'>
                <div className={styles.homepage_heading}>
                  <h1>Welcome to local4books. Here you can view all of the newly stocked books</h1>
                </div>
              </div>
            </div>
            <div className='row justify-content-center align-items-center'>
              <div className='col-9 col-md-8 col-lg-8 pe-0'>
                <div className={styles.input_group}>
                  <div className="input-group ">
                    <input type="text" className="form-control border-0 shadow-none" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div className={styles.badge_btn}>
                      <ul className="nav nav-pills m-0 p-0" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button onClick={() => setActive('all')} className={` nav-link rounded-pill ${active == "all" && 'active'} `} id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true">Title</button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button onClick={() => setActive('profile')} className={` nav-link rounded-pill ${active == "profile" && 'active'} `} id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Author</button>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
              <div className='col-3  col-md-2 col-lg-1'>
                <div className={styles.search_btn}>
                  <button type="button"><div className={styles.search_img}>
                    <Image src="./images/search-icon.svg"
                      className=''
                      alt="search_icon"
                      width={18}
                      height={18}
                    />
                  </div></button>
                </div>
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-md-9'>
                <div className={styles.input_zip}>
                  <div className={styles.zip_code}>
                    <div className='input_group'>
                      <label>ZIP CODE 1</label>
                      <input type="text"></input>
                    </div>
                  </div>
                  <div className={styles.zip_code}>
                    <div className='input_group'>
                      <label>ZIP CODE 1</label>
                      <input type="text"></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end heading section */}

      </div>
      <style jsx>{`
                .nav-link{
                    color: #828282;
                    font-family: 'Inter';
                    font-Weight:600;
                    font-size:16px
                    line-height:20px;
                    padding: 6px 37px;
                }
                .nav-pills .nav-link.active, .nav-pills .show > .nav-link {
                  color: #fff;
                  background-color:#4f4f4f;
              }
              @media all and (min-width:320px) and (max-width:575px){
                .nav-link{
                  padding: 6px 7px;
                }
              }
            `}</style>
    </div>
  );
}

export default Inputcomponent;
