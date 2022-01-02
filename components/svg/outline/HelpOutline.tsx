import { IconProps } from '../../../../formatTypes/icon'

import React from 'react'

interface Props {

}

const HelpOutline: React.FC<IconProps> = ({ size = 'SMALL' }) => {
    switch (size) {
        case 'SMALL':
            return <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.96289 5.89996C6.12746 5.43213 6.4523 5.03763 6.87986 4.78635C7.30742 4.53507 7.81012 4.44322 8.29891 4.52706C8.78771 4.6109 9.23106 4.86503 9.55044 5.24443C9.86983 5.62383 10.0446 6.10402 10.0439 6.59996C10.0439 7.99996 7.94389 8.69996 7.94389 8.69996" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 11.5H8.0075" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

        case 'MEDIUM':

            return <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.09009 8.99996C9.32519 8.33163 9.78924 7.76807 10.4 7.40909C11.0108 7.05012 11.729 6.9189 12.4273 7.03867C13.1255 7.15844 13.7589 7.52148 14.2152 8.06349C14.6714 8.60549 14.9211 9.29148 14.9201 9.99996C14.9201 12 11.9201 13 11.9201 13" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 17H12.01" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>


        case 'LARGE':
            return <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.9258 11.8C12.2549 10.8644 12.9046 10.0754 13.7597 9.57283C14.6148 9.07026 15.6202 8.88655 16.5978 9.05424C17.5754 9.22192 18.4621 9.73017 19.1009 10.489C19.7397 11.2478 20.0893 12.2082 20.0878 13.2C20.0878 16 15.8878 17.4 15.8878 17.4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 23H16.014" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
    }
}




export default HelpOutline