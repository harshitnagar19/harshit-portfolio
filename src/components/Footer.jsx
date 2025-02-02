import React, { useContext } from 'react'
import './Footer.css'
import { headerData } from '../data/headerData'

function Footer() {

    const shortname = (name) => {
        if(name.length > 10) {
            return name.split(" ")[0]
        } else {
            return name
        }
    }

    const theme = {
        type: 'dark',
        primary: '#823ae0',
        primary400: '#9456e5',
        primary600: '#762ad9',
        primary80: '#823ae0cc',
        primary50: '#823ae080',
        primary30: '#823ae04d',
        secondary: '#212121',
        secondary70: '#212121b3',
        secondary50: '#21212180',
        tertiary: '#eaeaea',
        tertiary80: '#eaeaeacc',
        tertiary70: '#eaeaeab3',
        tertiary50: '#eaeaea80',
    }
    
    return (
        <div className="footer w-full dark:bg-grid-white/[0.4] bg-grid-black/[0.4]  flex items-center justify-center" style={{backgroundColor: theme.secondary}}>
            <p style={{color: theme.tertiary}}>
                Made with  
                <span style={{color: theme.primary, margin: '0 0.5rem -1rem 0.5rem'}}>
                    ❤
                </span>
                 by {shortname(headerData.name)}
            </p>
        </div>
    )
}

export default Footer

