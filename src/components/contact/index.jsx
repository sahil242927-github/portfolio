import React from 'react';
import {
  PageHeadingWithLines,
  InputField,
  TextArea,
  Button,
} from '../styled-components';
import './index.scss';

export default () => (
  <section className='contact'>
    <PageHeadingWithLines className='heading' color='black'>
      Contact Us
    </PageHeadingWithLines>
    <div className='container'>
      <div className='form-container' id='contact'>
        <div className='left' />
        <div className='right'>
          <form>
            <InputField
              placeholder='Name'
              onFocus={(e) => (e.target.placeholder = '')}
              onBlur={(e) => (e.target.placeholder = 'Name')}
            />
            <InputField
              placeholder='Email'
              onFocus={(e) => (e.target.placeholder = '')}
              onBlur={(e) => (e.target.placeholder = 'Email')}
            />
            <InputField
              placeholder='Phone'
              onFocus={(e) => (e.target.placeholder = '')}
              onBlur={(e) => (e.target.placeholder = 'Phone')}
            />
            <TextArea
              placeholder='Message'
              onFocus={(e) => (e.target.placeholder = '')}
              onBlur={(e) => (e.target.placeholder = 'Message')}
            />
            <Button>Submit</Button>
          </form>
        </div>
      </div>
    </div>
    {/* 
    <PageHeadingWithLines className="heading" color="white">
      Contact Us
    </PageHeadingWithLines>
    <div className="form-container" id="contact">
      <div className="left" />
      <div className="right">
        <form>
          <InputField placeholder="Name" />
          <InputField placeholder="Email" />
          <InputField placeholder="Phone" />
          <TextArea placeholder="Message" />
          <Button>Submit</Button>
        </form>
      </div>
    </div> */}
  </section>
);
