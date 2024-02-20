import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';   

import tour1 from '../images/colleseum.jpg'
import tour2 from '../images/panteon.jpeg'
import tour3 from '../images/vatican.jpg'
import tour4 from '../images/castel.jpg'


// Add brand icons to the library
library.add(fab, fas);


export const data = [
    {
        id: 1,
        href: "https://www.facebook.com/",
        icon: <FontAwesomeIcon icon={['fab', 'facebook-f']} size="lg" style={{ color: "#0dbcbf" }} />,
    },
    {
        id: 2,
        href: "https://www.instagram.com/",
        icon: <FontAwesomeIcon icon={['fab', 'instagram']} size="lg" style={{ color: "#0dbcbf" }} />,
    },
    { 
        id: 3,
        href: "https://www.twitter.com/",
        icon: <FontAwesomeIcon icon={['fab', 'twitter']} size="lg" style={{ color: "#0dbcbf" }}/>,
    }
];

export const service_data = [

    {
        id:1,
        icon:<FontAwesomeIcon icon={['fas','wallet']} size="xl" style={{color: "#1b4b48",}} />,
        title:'Saving Money',
        text: 'it describe all the possible ways on which you can save your money during travel',
    },
    {
        id:2,
        icon:<FontAwesomeIcon icon={['fas', 'tree']}  size="xl"  style={{color: "#1b4b48",}}/>,
        title:'Endless Hiking',
        text: 'Here you can find the all possible mountains tours on which ',
    },
    {
        id:3,
        icon:<FontAwesomeIcon icon={['fas', 'socks']}  size="xl"  style={{color: "#1b4b48",}}/>,
        title: 'Amazing Comfort',
        text: 'Make your life more suitable and comfort by staying on comfort hotels',
    }
]

export const tours_data = [
    
    
    {
        id:1,
        image: tour1,
        data:'August 26th, 2024',
        title:'Colleseo',
        description: 'it describe all the possible ways on which you can save your money during travel',
        duration:10,
        cost:1120,
        icon:<FontAwesomeIcon icon="fa-solid fa-calendar-days" style={{color: "#1aa6a6",}} />,
        icon_dollar:<FontAwesomeIcon icon="fa-solid fa-dollar-sign" style={{color: "#1aa6a6",}} />
    },

    {
        id:2,
        image:tour2,
        data:'July 09th, 2024',
        title:'Roma Panteon, Italy',
        description: 'it describe all the possible ways on which you can save your money during travel',
        duration:12,
        cost:700,
        icon:<FontAwesomeIcon icon="fa-solid fa-calendar-days" style={{color: "#1aa6a6",}} />,
        icon_dollar:<FontAwesomeIcon icon="fa-solid fa-dollar-sign" style={{color: "#1aa6a6",}} />
    },
    {
        id:3,
        image:tour3,
        data:'June 15th, 2024',
        title:'Vatican City, Roma',
        description: 'it describe all the possible ways on which you can save your money during travel',
        duration:3,
        cost:2000,
        icon:<FontAwesomeIcon icon="fa-solid fa-calendar-days" style={{color: "#1aa6a6",}} />,
        icon_dollar:<FontAwesomeIcon icon="fa-solid fa-dollar-sign" style={{color: "#1aa6a6",}} />
    },
    {
        id:5,
        image:tour4,
        data:'May 12nd, 2024',
        title:'Castel santangelo, Roma',
        description: 'it describe all the possible ways on which you can save your money during travel',
        duration:5,
        cost:1500,
        icon:<FontAwesomeIcon icon="fa-solid fa-calendar-days" style={{color: "#1aa6a6",}} />,
        icon_dollar:<FontAwesomeIcon icon="fa-solid fa-dollar-sign" style={{color: "#1aa6a6",}} />
    },
    
    

]   

export const fouter_data_links = [


    {
        id:1,
        to:'#Home',
        text:'Home',
        
    },
    {

        id:2,
        to:'#About',
        text:'About'

    },
    {

        id:3,
        to:'#Services',
        text:'Services'
    },
    {
        id:4,
        to:'#Tours',
        text:'Tours'

    },
    
]
export const fouter_links = [

    {
        id: 1,
        href: "https://www.facebook.com/",
        icon: <FontAwesomeIcon icon={['fab', 'facebook-f']} size="lg" style={{ color: "#f0f2f5" }} />,
    },
    {
        id: 2,
        href: "https://www.instagram.com/",
        icon: <FontAwesomeIcon icon={['fab', 'instagram']} size="lg" style={{ color: "#f0f2f5" }} />,
    },
    { 
        id: 3,
        href: "https://www.twitter.com/",
        icon: <FontAwesomeIcon icon={['fab', 'twitter']} size="lg" style={{ color: "#f0f2f5" }}/>,
    }

]
