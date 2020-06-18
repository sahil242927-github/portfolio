import React, { useState, useRef, createRef } from 'react';
import { PageHeadingWithLines, TextArea, Button } from '../styled-components';
import Input from '../form-components/input';
import './index.scss';

export default () => {
  const inputRefs = useRef([createRef(), createRef(), createRef()]);
  const [data, setData] = useState({});

  const handleChange = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = (e) => {
    e.preventDefault();

    let isValid = true;

    for (let i = 0; i < inputRefs.current.length; i++) {
      const valid = inputRefs.current[i].current.validate();
      console.log(valid);
      if (!valid) {
        isValid = false;
      }
    }

    if (!isValid) {
      return;
    }

    console.log('Logged In');
    //Carry on as normal
  };

  console.log(data);

  return (
    <section className='contact'>
      <PageHeadingWithLines className='heading' color='black'>
        Contact
      </PageHeadingWithLines>
      <div className='container'>
        <div className='form-container' id='contact'>
          <div className='left' />
          <div className='right'>
            <form onSubmit={submitForm}>
              <Input
                ref={inputRefs.current[0]}
                name='name'
                placeholder='Name'
                onFocus={(e) => (e.target.placeholder = '')}
                onBlur={(e) => (e.target.placeholder = 'Name')}
                onChange={handleChange}
                validation={'required|min:6|max:12'}
              />
              <Input
                ref={inputRefs.current[1]}
                name='email'
                placeholder='Email'
                onFocus={(e) => (e.target.placeholder = '')}
                onBlur={(e) => (e.target.placeholder = 'Email')}
                onChange={handleChange}
                validation={'required|min:6|max:12'}
              />
              <Input
                ref={inputRefs.current[2]}
                name='phone'
                placeholder='Phone'
                onFocus={(e) => (e.target.placeholder = '')}
                onBlur={(e) => (e.target.placeholder = 'Phone')}
                onChange={handleChange}
                validation={'required|min:6|max:12'}
              />
              <TextArea
                placeholder='Message'
                onFocus={(e) => (e.target.placeholder = '')}
                onBlur={(e) => (e.target.placeholder = 'Message')}
              />
              <Button type='submit'>Submit</Button>
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
};
