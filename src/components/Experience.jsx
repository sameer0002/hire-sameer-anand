import React from "react";

import html from "../assests/html.png";
import css from "../assests/css.png";
import javascript from "../assests/javascript.png";
import react from "../assests/react.png";
import nextjs from "../assests/nextjs.png";
import graphql from "../assests/graphql.png";
import github from "../assests/github.png";
import tailwind from "../assests/tailwind.png";
import node from "../assests/node.png";


const Experience = () => {
    const techs=[
        {
            id:1, 
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2, 
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3, 
            src:javascript,
            title:'JavaScript',
            style:'shadow-yellow-500'
        },
        {
            id:4, 
            src:react,
            title:'React',
            style:'shadow-blue-500'
        },
        {
            id:5, 
            src:tailwind,
            title:'Tailwind',
            style:'shadow-sky-500'
        },
        {
            id:6, 
            src:nextjs,
            title:'Next Js',
            style:'shadow-white'
        },
        {
            id:7, 
            src:graphql,
            title:'GraphQl',
            style:'shadow-pink-500'
        },
        {
            id:8, 
            src:github,
            title:'GitHubL',
            style:'shadow-gray-500'
        },
        {
            id:9,
            src:node,
            title: 'node.js',
            style: 'shadow-green-500'
        },
    ]
  return (
    <div 
    name=""
    className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
                <p className="text-4xl font-bold border-gray-500">
                    Experience
                </p>
                <p className="py-6">Tech stacks i've worked with</p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

                {
                    techs.map (({id,src,title,style}) =>(

                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className="w-20 mx-auto"/>
                            <p className="mt-4">{title}</p>
                        </div>

                    ))
                }

                
            </div>
        </div>
    </div>
  )
};

export default Experience;