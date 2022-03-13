import react from 'react';
import header_logo from '../../images/header_logo.png';

function Header() {
    const navigation = [
        { name: 'Solutions', href: '#' },
        { name: 'Pricing', href: '#' },
        { name: 'Docs', href: '#' },
        { name: 'Company', href: '#' },
    ]
    return (
        <header className="bg-white shadow-gray-800 shadow-2xl">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="w-full py-4 flex items-center justify-between border-b border-indigo-500 lg:border-none">
                    <div className="flex items-center">
                        <a href="#">
                            <span className="sr-only">Workflow</span>
                            <img
                                className="h-10 w-auto"
                                src={header_logo}
                                alt=""
                            />
                        </a>
                        {/*   <div className="hidden ml-10 space-x-8 lg:block">
                            {navigation.map((link) => (
                                <a key={link.name} href={link.href} className="text-base font-medium text-black hover:text-indigo-50">
                                    {link.name}
                                </a>
                            ))}
                        </div> */}
                    </div>
                    <div className="ml-10 space-x-4">
                        <a
                            href="#"
                            className="inline-block  py-2 px-4 border border-transparent rounded-md text-base font-medium text-gray-500 hover:bg-opacity-75"
                        >
                            Location
                        </a>
                        <a
                            href="#"
                            className="inline-block py-2 px-4 border border-transparent rounded-md text-base font-medium text-gray-500 hover:text-green-400"
                        >
                            My Cart
                        </a>
                        <a
                            href="#"
                            className="inline-block py-1 px-6 bg-green-400 border border-transparent rounded-2xl text-base font-medium text-white hover:text-green-400"
                        >
                            Sign In
                        </a>
                    </div>
                </div>
                <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
                    {navigation.map((link) => (
                        <a key={link.name} href={link.href} className="text-base font-medium text-gray-600 hover:text-green-50">
                            {link.name}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
}

export default Header;
