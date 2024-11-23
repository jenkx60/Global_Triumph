import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';


const AccordionItem = ({ title, content, content1, content2, button }) => {
  const [ isOpen, setIsOpen ] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen); 
  };
  return (
    <div className='border-2 border-gray-300 rounded-xl m-8 hover:border-blue-700 shadow-2xl'>
      <div className='flex justify-between items-center p-4 px-8 cursor-pointer ' onClick={toggleAccordion}>
        <h2 className='font-bold font-raleway text-lg text-green-700'>{title}</h2>
        <span className=''>{isOpen ? <div><FaChevronUp /></div> : <div><FaChevronDown /></div>}</span>
      </div>
      {isOpen && (
        <div className='p-1 px-8 font-raleway text-base font-normal'>
          <p className='mb-7'>{content}</p>
          <p className='mb-5'>{content1}</p>
          <div className='grid grid-cols-2 gap-96 pb-3'>
            <p className='font-raleway text-base font-normal'>{content2}</p>
            <Link to='/careerscontractor'>
              <button className='bg-green-400 p-2 w-1/2 rounded-md'>{button}</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  const items = [
    {
      title: 'Open Position',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repellat consequuntur, velit esse quas eligendi. Repellat cupiditate, explicabo quibusdam et in quae! Necessitatibus reiciendis libero dolore? Reiciendis quasi iste, cupiditate blanditiis quisquam temporibus ipsa quia dolorum totam, laboriosam voluptate assumenda repellat placeat impedit. Nemo fugit officiis excepturi, quos, nesciunt alias earum fuga impedit sequi debitis repellendus iste modi distinctio, beatae eaque omnis hic laboriosam soluta!',
      content1: 'Lorem ipsum',
      content2: 'Anim laborum. 24 April 2023',
      button: 'Apply Now',
    },
    {
      title: 'Open Position',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repellat consequuntur, velit esse quas eligendi. Repellat cupiditate, explicabo quibusdam et in quae! Necessitatibus reiciendis libero dolore? Reiciendis quasi iste, cupiditate blanditiis quisquam temporibus ipsa quia dolorum totam, laboriosam voluptate assumenda repellat placeat impedit. Nemo fugit officiis excepturi, quos, nesciunt alias earum fuga impedit sequi debitis repellendus iste modi distinctio, beatae eaque omnis hic laboriosam soluta!',
      content1: 'Lorem ipsum',
      content2: 'Anim laborum. 24 April 2023',
      button: 'Apply Now',
    },
    {
      title: 'Open Position',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repellat consequuntur, velit esse quas eligendi. Repellat cupiditate, explicabo quibusdam et in quae! Necessitatibus reiciendis libero dolore? Reiciendis quasi iste, cupiditate blanditiis quisquam temporibus ipsa quia dolorum totam, laboriosam voluptate assumenda repellat placeat impedit. Nemo fugit officiis excepturi, quos, nesciunt alias earum fuga impedit sequi debitis repellendus iste modi distinctio, beatae eaque omnis hic laboriosam soluta!',
      content1: 'Lorem ipsum',
      content2: 'Anim laborum. 24 April 2023',
      button: 'Apply Now',
    },
    {
      title: 'Open Position',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repellat consequuntur, velit esse quas eligendi. Repellat cupiditate, explicabo quibusdam et in quae! Necessitatibus reiciendis libero dolore? Reiciendis quasi iste, cupiditate blanditiis quisquam temporibus ipsa quia dolorum totam, laboriosam voluptate assumenda repellat placeat impedit. Nemo fugit officiis excepturi, quos, nesciunt alias earum fuga impedit sequi debitis repellendus iste modi distinctio, beatae eaque omnis hic laboriosam soluta!',
      content1: 'Lorem ipsum',
      content2: 'Anim laborum. 24 April 2023',
      button: 'Apply Now',
    },
    {
      title: 'Open Position',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repellat consequuntur, velit esse quas eligendi. Repellat cupiditate, explicabo quibusdam et in quae! Necessitatibus reiciendis libero dolore? Reiciendis quasi iste, cupiditate blanditiis quisquam temporibus ipsa quia dolorum totam, laboriosam voluptate assumenda repellat placeat impedit. Nemo fugit officiis excepturi, quos, nesciunt alias earum fuga impedit sequi debitis repellendus iste modi distinctio, beatae eaque omnis hic laboriosam soluta!',
      content1: 'Lorem ipsum',
      content2: 'Anim laborum. 24 April 2023',
      button: 'Apply Now',
    },
  ];

  return (
    <div className='accordion'>
      {items.map((item, index) => (
        <AccordionItem 
          key={index}
          title={item.title}
          content={item.content}
          content1={item.content1}
          content2={item.content2}
          button={item.button}/>
      ))}
    </div>
  );
};

export default Accordion;