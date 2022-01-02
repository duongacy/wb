import React from 'react'
import { IconProps } from '../../../../formatTypes/icon'

const MoreVerticalOutline: React.FC<IconProps> = ({ size = 'SMALL' }) => {
    switch (size) {
        case 'SMALL':
            return <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 7.99979C9 7.41502 8.55228 6.94098 8 6.94098C7.44772 6.94098 7 7.41502 7 7.99979C7 8.58455 7.44772 9.05859 8 9.05859C8.55228 9.05859 9 8.58455 9 7.99979Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 3.05887C9 2.4741 8.55229 2.00006 8 2.00006C7.44772 2.00006 7 2.4741 7 3.05887C7 3.64363 7.44772 4.11768 8 4.11768C8.55229 4.11768 9 3.64363 9 3.05887Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 12.9412C9 12.3564 8.55229 11.8824 8 11.8824C7.44772 11.8824 7 12.3564 7 12.9412C7 13.526 7.44772 14 8 14C8.55229 14 9 13.526 9 12.9412Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        case 'MEDIUM':
            return <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        case 'LARGE':
            return <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 16.0006C17 15.3592 16.5523 14.8393 16 14.8393C15.4477 14.8393 15 15.3592 15 16.0006C15 16.6419 15.4477 17.1619 16 17.1619C16.5523 17.1619 17 16.6419 17 16.0006Z" fill="currentColor" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17 5.16121C17 4.51984 16.5523 3.99991 16 3.99991C15.4477 3.99991 15 4.51984 15 5.16121C15 5.80258 15.4477 6.32251 16 6.32251C16.5523 6.32251 17 5.80258 17 5.16121Z" fill="currentColor" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17 26.8387C17 26.1973 16.5523 25.6774 16 25.6774C15.4477 25.6774 15 26.1973 15 26.8387C15 27.4801 15.4477 28 16 28C16.5523 28 17 27.4801 17 26.8387Z" fill="currentColor" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
    }
}

export default MoreVerticalOutline