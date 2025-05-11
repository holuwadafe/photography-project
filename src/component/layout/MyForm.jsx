// import React from 'react'
import React, { useState } from 'react';

function MyForm() {
  const [name, setName] = useState('');
  const [selectedValue, setSelectedValue] = useState('')
  const [count, setCount] = useState(0)


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted name:', name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='w-full flex flex-col'>
        <label>Your name:</label>
        <input className='border border-gray-300 rounded h-10' type="text" value={name} />
      </div>
      <div className='w-full flex flex-col'>
        <label>Your email:</label>
        <input className='border border-gray-300 rounded h-10' type="text"  />
      </div>
      <div className='w-full flex flex-col'>
        <label>Your phone:</label>
        <input className='border border-gray-300 rounded h-10' type="text" />
      </div>
      <div className='w-full flex flex-col'>
        <label>Job type:</label>
        {/* <input className='border rounded h-10' type="text" value={name} onChange={(e) => setName(e.target.value)}/> */}
        <select value={selectedValue} className="border border-gray-300 rounded h-10" >
          <option value="" disabled >Select Job Type</option>
          <option value="commercial-advertising">Commercial / Advertising</option>
          <option value="event">Event</option>
          <option value="family-portrait">Family Portrait</option>
          <option value="fashion">Fashion</option>
          <option value="head-shot">Head Shot</option>
          <option value="">Meternity</option>
          <option value="">Model Portfolio</option>
          <option value="">New Born</option>
          <option value="">Other</option>
          <option value="">Pet</option>
          <option value="">Portraits</option>
          <option value="">Real Estate And Architecture</option>
          <option value="">Wedding</option>
        </select>
      </div>
      <div className='w-full flex flex-col'>
        <label>Main shoot date:</label>
        <input className='border border-gray-300 rounded h-10'
          type="input" id="Calender-Input"
          min={"2022-01-10"} max={"2050-01-01"}
          placeholder='Choose Date'
          onFocus={(e) => e.target.type = 'date'}
        />
      </div>
      <div className='w-full flex justify-center'>
        <button className='rounded bg-gray-600 border border-gray-300 px-3 mt-5 ' type="submit">Submit</button>
      </div>
      <div className='w-full flex flex-col'>
        <label>Message (Tell me more about your enquries)</label>
        <textarea onChange={(e) => setCount(e.target.value.length)} maxLength={5000} className='border rounded h-20' type="text" name="" id=""></textarea>
        <p className='text-right'>{count}/5000</p>
      </div>
    </form>
  );
}

export default MyForm;