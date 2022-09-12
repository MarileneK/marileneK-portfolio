import React from 'react';
import ArrowBackButton from '../components/Buttons/ArrowBackButton';
import { EMAIL, INSTAGRAM, INSTAGRAM_ICON, LINKEDIN, LINKEDIN_ICON } from '../data/constants';

export default function Contact() {
  return (
    <div className='page_container_narrow contact_style'>

      <ArrowBackButton />
      <h1 className='main_title'>Let's keep in touch =)</h1>

      <div className='network'>
        <a
          href={`mailto:${process.env.EMAIL}`}
          target='_blank'
          rel='noreferrer'
        >
          {process.env.EMAIL}
        </a>
        <a
          href={`${process.env.LINKEDIN}`}
          target='_blank'
          rel='noreferrer'
        >
          <i className={LINKEDIN_ICON}>{' '}</i>
        </a>
        <a
          href={`${process.env.INSTAGRAM}`}
          target='_blank'
          rel='noreferrer'
        >
          <i className={INSTAGRAM_ICON}></i>
        </a>
      </div>

    </div>
  )
}
