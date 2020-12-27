import Link from 'next/link'
import SliderMenu from './sliderMenu'
import Footer from './footer'
import Search from './search';

const NavBar = (props) => {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light col-12">
                <div className="container-md">

                    <div className="navbar-brand col-8">
                        <span className="navbar-brand"></span>
                        <Link href="/">
                            <a className="entypo-home home"></a>
                        </Link>
                    </div>
                    <div className="">
                        <Search />
                    </div>
                    <div className="mb-3 menu">
                        <SliderMenu />
                    </div>
                    <Footer />
                </div>
            </nav>
        </>
    )
}

export default NavBar;