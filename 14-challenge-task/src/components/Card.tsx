import React from 'react';
import Image from 'next/image';

const Card = () => {
  // This is how the data will be sent from the json-server that I am going to create
  // Think of it as a replica of the data that will be shown in the data.json
  const data = {
    "id": 1,
    "company": "Photosnap",
    "logo": "./images/photosnap.svg",
    "new": true,
    "featured": true,
    "position": "Senior Frontend Developer",
    "role": "Frontend",
    "level": "Senior",
    "postedAt": "1d ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["HTML", "CSS", "JavaScript"],
    "tools": []
  };
  const allData = [
    data.role,
    data.level,
    ...data.languages
  ];

  const arr = [ data.postedAt, data.contract, data.location ]

  return (
    <div className={`flex flex-row justify-between items-center bg-white py-8 px-10 w-full max-w-5xl rounded-md ${ data.featured ? 'border-l-4 border-primary' : '' }`} >

      <div className='flex space-x-5'>
        <div>
          <Image src={ data.logo.slice(2) } alt='logo' width={90} height={90} />
        </div>

        <div className='flex flex-col justify-center space-y-1'>
          <div className='flex flex-row space-x-2'>
            <span className='text-primary font-bold mr-3'>{ data.company }</span>
            { data.new &&
              <div className='flex justify-center items-center bg-primary text-white px-2 py-0 rounded-3xl'>
                <h6 className='text-sm font-bold'>NEW!</h6>
              </div>
            }
            { data.featured &&
              <div className='flex justify-center items-center bg-black text-white px-2 rounded-3xl'>
                <span className='text-sm font-bold'>FEATURED</span>
              </div>
            }
          </div>
          <div>
            <span className='font-bold text-2xl'>{ data.position }</span>
          </div>
          <div className='text-gray-400'>
            {
              arr.join(` · `)
            }
          </div>
        </div>

      </div>

      <div>
        <ul className='list-none flex space-x-4 text-primary font-bold'>
          {
            allData.map(data => (
              <li className='bg-filterTablets px-2 py-1 rounded-md' key={ data } >{ data }</li>
            ))
          }
        </ul>
      </div>

    </div>
  );
}

export default Card;
