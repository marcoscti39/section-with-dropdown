import React, {useEffect} from 'react'
import logo from '/images/logo.svg'
import arrowDown from '/images/icon-arrow-down.svg'
import arrowUp from '/images/icon-arrow-up.svg'
import todoIcon from '/images/icon-todo.svg'
import calendarIcon from '/images/icon-calendar.svg'
import remindersIcon from '/images/icon-reminders.svg'
import planningIcon from '/images/icon-planning.svg'
import openMenu from '/images/icon-menu.svg'
import closeMenu from '/images/icon-close-menu.svg'
import { useGlobalContext } from '../context'



export default function Header() {
  const [isFeaturesActive, setIsFeaturesActive] = React.useState(false)
  const [isCompanyActive, setIsCompanyActive] = React.useState(false)
  const {isMenuOpen, setIsMenuOpen} = useGlobalContext()

  useEffect(() =>{
    if(isMenuOpen){
        document.body.style.overflowY = 'hidden'
        return
    }
    document.body.style.overflowY = 'visible'
  }, [isMenuOpen])
  return (
    <header className='w-full flex justify-center'>
        <div className="flex w-full max-w-7xl m-4">

            <img src={logo} alt="logo" className='object-contain '/>

            <button className='md:hidden ml-auto' 
                onClick={() => setIsMenuOpen(!isMenuOpen)} >

                <img className='relative z-50'
                 src={isMenuOpen ? closeMenu : openMenu} alt="open menu"  />
            </button>

            <div className={`
                md:flex md:w-full md:justify-between
                ${isMenuOpen ? 'flex': 'hidden'} 
                ${isMenuOpen && (`
                block absolute top-0 bottom-0 bg-white
                right-0 w-[60%] p-4 pt-12 flex-col
                shadow-[0_0_0_100vw_rgba(0,0,0,0.7)]
                md:relative md:shadow-none md:bg-almost-white
                md:flex-row md:p-0 md:pt-0 md:items-center z-10
                
                `
                    )}`}>

                <nav>
                    
                    <ul className={`
                    flex md:flex-row ${isMenuOpen ? 'flex-col' : 'flex-row'}
                    md:gap-4`}>
                        <div className={`md:pl-16 ${isMenuOpen ? 'pl-0' : 'pl-16'} relative`}>
                            <button className='
                                p-2 flex gap-1 items-center
                                text-dark-gray hover:text-black'
                                onClick={() => setIsFeaturesActive(!isFeaturesActive)}>
                                Features
                                <img src={isFeaturesActive ? arrowUp:arrowDown } className=''/> 
                            
                            </button>
                            <ul className={`
                            ${isFeaturesActive ? 'grid' : 'hidden'}
                            bg-white md:absolute z-10 p-1 md:p-4 place-content-center
                            left-0 rounded-lg md:shadow-lg gap-3 w-full`}>
                                <li>
                                    <a className='flex gap-2 cursor-pointer'>
                                        <img className='object-contain w-4'
                                            src={todoIcon} alt="icon" /> 
                                        Todo List
                                    </a>
                                </li> 

                                <li>
                                    <a className='flex gap-2 cursor-pointer'>
                                        <img className='object-contain w-4'
                                            src={calendarIcon} alt="icon" /> 
                                        Calendar
                                    </a>
                                </li>
                                
                                <li>
                                    <a className='flex gap-2 cursor-pointer'>
                                        <img className='object-contain w-4'
                                            src={remindersIcon} alt="icon" /> 
                                        Reminders
                                    </a>
                                </li>

                                <li>
                                    <a className='flex gap-2 cursor-pointer'>
                                        <img className='object-contain w-4' 
                                            src={planningIcon} alt='icon'/> 
                                        Planning
                                    </a>
                                </li>
                                
                                
                            </ul>

                        </div>


                        <div className={`
                        md:pr-8 ${isMenuOpen ? 'pr-0' : 'pr-8'} relative
                       `}>
                            <button className='
                            p-2 flex gap-1 items-center'
                            onClick={() => setIsCompanyActive(!isCompanyActive)}>
                                <span className='text-dark-gray hover:text-black'>Company</span>
                                <img src={isCompanyActive ? arrowUp : arrowDown} 
                                className='text-dark-gray hover:text-black' />
                            </button>
                            <ul className={`
                            ${isCompanyActive ? 'grid' : 'hidden'}
                            md:absolute md:z-10 right-0 bg-white md:shadow-lg w-full
                            rounded-lg place-content-center py-1 md:py-4`}>
                                <li> <a href="#">History</a> </li>
                                <li> <a href="#"> Our Team </a> </li>
                                <li> <a href="#"> Blog</a> </li>
                            </ul>
                        </div>

                        

                        <a className='p-2 text-dark-gray hover:text-black' href="#">Careers</a>

                        <a className='p-2 text-dark-gray hover:text-black' href="#">About</a>

                    </ul>

                </nav>

                <div className={`
                md:mt-0
                flex ${isMenuOpen ? 'flex-col gap-3 mt-4 w-full': 'flex-row'} 
                md:flex items-center md:justify-end md:gap-[2.5rem] md:flex-row`}>

                    <button className='text-dark-gray hover:text-black'>Login</button>
                    <button className={`
                        ${isMenuOpen && 'w-[90%]'}
                        md:w-auto
                        border-solid border-2 border-dark-gray p-2 rounded-2xl
                        text-dark-gray hover:text-black hover:border-black`}>
                        Register
                    </button>
                </div>
            </div>

        </div>  

    </header>
  )
}
