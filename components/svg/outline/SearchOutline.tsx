import React from 'react'
import { IconProps } from '../../../../formatTypes/icon'

const SearchOutline: React.FC<IconProps> = ({ size = 'SMALL' }) => {
    switch (size) {
        case 'SMALL':
            return <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.33336 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33336C12.6667 4.38783 10.2789 2 7.33336 2C4.38783 2 2 4.38783 2 7.33336C2 10.2789 4.38783 12.6667 7.33336 12.6667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.0001 14.0001L11.1001 11.1001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        case 'MEDIUM':
            return <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 19.0001C15.4183 19.0001 19 15.4184 19 11.0001C19 6.58184 15.4183 3.00012 11 3.00012C6.58172 3.00012 3 6.58184 3 11.0001C3 15.4184 6.58172 19.0001 11 19.0001Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20.9999 21.0001L16.6499 16.6501" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        case 'LARGE':
            return <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6667 25.3336C20.5578 25.3336 25.3334 20.5579 25.3334 14.6668C25.3334 8.77578 20.5578 4.00012 14.6667 4.00012C8.77565 4.00012 4 8.77578 4 14.6668C4 20.5579 8.77565 25.3336 14.6667 25.3336Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M28 28.0002L22.2 22.2002" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
    }
}

export default SearchOutline