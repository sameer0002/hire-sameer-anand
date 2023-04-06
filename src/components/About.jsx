import React from 'react'

const About = () => {
  return (

    <div name="about"
    className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className='pb-8'>
                <p className="text-4xl font-bold  border-gray-500">About</p>
            </div>
            <p className='text-xl mt-20'>
                Hello, I'm Sameer Anand, a software engineer based in India. 
                I graduated from IAR Gandhinagar with a computer science degree and have worked on some freelance projects for the past couple of years. 
                I'm passionate about using technology to solve complex problems and I enjoy learning about new technologies and programming languages. 
                I enjoy Filmmaking and watching TV shows/movies. I'm excited to be here and look forward to connecting with others who share my interests!
                                                
                Happy Hacking.

                
            </p>

            <p className='text-xl mt-20'>Fill the form below to hire me as a freelancer / employee.</p>

            
        </div>
    </div>
  

  )
    
};

export default About;