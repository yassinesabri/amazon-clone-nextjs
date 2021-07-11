import Image from 'next/image';

import {SearchIcon, MenuIcon, ShoppingCartIcon} from '@heroicons/react/outline';

function Header() {
    return (
        <header>
            {/* Top nav */}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image 
                        src='https://t.ly/ExmP'
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>
                {/* Search */}
                <div className="hidden sm:flex items-center h-10 flex-grow cursor-pointer rounded-md bg-yellow-400 hover:bg-yellow-500">
                    <input className="h-full p-2 px-4 w-6 flex-grow flex-shrink rounded-l-md focus:outline-none" type="text" />
                    <SearchIcon className="h-12 p-4"/>
                </div>
                {/* Right side */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div className="link">
                        <p>Hello, Yassine</p>
                        <p className="font-extrabold md:text-sm">Accounts & Lists</p>
                    </div>
                    <div className="link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>
                    <div className="link flex items-center relative">
                        <span className="absolute top-0 right-0 md:right-11 h-4
                         w-4 rounded-full text-center text-black bg-yellow-400 font-bold">{0}</span>
                        <ShoppingCartIcon className="h-10"/>
                        <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
                    </div>
                </div>
            </div>

            {/* Bottom nav */}
            <div>

            </div>
        </header>
    )
}

export default Header
