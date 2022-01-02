import React from 'react'
import { IconProps } from '../../../../formatTypes/icon'

const PinOutline: React.FC<IconProps> = ({ size = 'SMALL' }) => {
    switch (size) {
        case 'SMALL':
            return <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 6.72727C14 11.1818 8 15 8 15C8 15 2 11.1818 2 6.72727C2 5.20831 2.63214 3.75155 3.75736 2.67748C4.88258 1.60341 6.4087 1 8 1C9.5913 1 11.1174 1.60341 12.2426 2.67748C13.3679 3.75155 14 5.20831 14 6.72727Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 8.81824C9.10457 8.81824 10 7.92281 10 6.81824C10 5.71367 9.10457 4.81824 8 4.81824C6.89543 4.81824 6 5.71367 6 6.81824C6 7.92281 6.89543 8.81824 8 8.81824Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        case 'MEDIUM':
            return <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        case 'LARGE':
            return <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28 13.4545C28 22.3636 16 30 16 30C16 30 4 22.3636 4 13.4545C4 10.4166 5.26428 7.5031 7.51472 5.35496C9.76516 3.20681 12.8174 2 16 2C19.1826 2 22.2348 3.20681 24.4853 5.35496C26.7357 7.5031 28 10.4166 28 13.4545Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 17.6364C18.2091 17.6364 20 15.8455 20 13.6364C20 11.4272 18.2091 9.63635 16 9.63635C13.7909 9.63635 12 11.4272 12 13.6364C12 15.8455 13.7909 17.6364 16 17.6364Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
    }
}

export default PinOutline