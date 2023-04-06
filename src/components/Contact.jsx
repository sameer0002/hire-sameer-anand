import React from 'react';

const Contact = () => {
  return (
    <div 
    name="contact"
    className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div className='pb-8'>
                <p className="text-4xl font-bold  border-gray-500">
                    Hire Me !
                </p>
                <p className='py-6'>
                    
                </p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/3d859639-d2ba-4e5e-89d4-a0a3a2fa7359" method="POST" className="flex flex-col w-full md:w-1/2">
                    <input type="text" name="name" placeholder="Enter your name" 
                    className="p-2 bg-transparent border-2 rounded-md text-white 
                    focus:outline-none" />

                    <input type="text" name="email" placeholder="Enter your email" 
                    className="my-4 p-2 bg-transparent border-2 rounded-md text-white 
                    focus:outline-none" />

                    <textarea name="message" placeholder="what type of website do you want me to create" rows="10" 
                    className="p-2 bg-transparent border-2 rounded-md text-white 
                    focus:outline-none"></textarea>

                    <button className="text-white bg-gradient-to-b from-cyan-500 
                    to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md 
                    hover:scale-110 duration-500">Let's talk</button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Contact;