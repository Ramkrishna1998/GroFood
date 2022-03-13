import home_icon_logo from '../../images/home_icon_logo.png';
import home_search_image from '../../images/home_search_image.png';
import Dove from '../../images/Dove.jpg';
import pro_20189 from '../../images/pro_20189.jpg';
import pro_55389 from '../../images/pro_55389.jpg';
import pro_68615 from '../../images/pro_68615.jpg';
import tea from '../../images/23664a.jpg';
import Oil from '../../images/pro_14626.jpg';

import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import './dashboard.css';

function DashboardView() {

    const people = [
        {
            name: 'Jane Cooper',
            title: 'Paradigm Representative',
            role: 'Admin',
            email: 'janecooper@example.com',
            telephone: '+1-202-555-0170',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        },
        // More people...
    ]
    const ImgUrl = [
        { url: Dove },
        { url: pro_20189 },
        { url: pro_55389 },
        { url: pro_68615 },
        { url: tea },
        { url: Oil },

    ]

    return (
        <div className="h-auto w-full bg-gray-200">
            <div className=" bg-cover flex flex-col justify-center ">

                <div className="mt-8 sm:mx-auto sm:w-full bg-gray-200 sm:max-w-6xl">
                    <div className="bg-white py-8 px-4 flex justify-center sm:rounded-lg ">
                        <img className='h-auto w-auto' src={home_icon_logo} />
                    </div>
                    <div className="bg-white py-8 px-4 flex justify-center sm:rounded-lg ">
                        <img className='h-auto w-auto' src={home_search_image} />
                    </div>
                    <div className='mt-10 font-medium text-black'>Trending Grocery</div>
                    <div className="carousel__container">
                        <CarouselProvider
                            naturalSlideWidth={80}
                            naturalSlideHeight={40}
                            totalSlides={6}
                            visibleSlides={3}
                            currentSlide={0}
                            className='bg-white'
                        >
                            <div className='flex text-xl mt-2 text-gray-600 font-medium  justify-between'>
                                <div className='flex justify-start align-center bg-gray-300 rounded-3xl text-2xl text-white font-medium '>
                                    <ButtonBack className="px-3 py-1  ">{`<`}</ButtonBack>
                                </div>
                                <div className='flex justify-end align-center bg-gray-300 rounded-3xl text-2xl text-white font-medium'>
                                    <ButtonNext className="px-3 py-1  ">{`>`}</ButtonNext>
                                </div>
                            </div>
                            <Slider className="rounded">
                                {ImgUrl.map((item, index) => {
                                    return (
                                        <Slide key={index} index={index}><img className=" shadow-red-400 rounded-3xl h-full" src={item.url} /></Slide>
                                    )
                                })}
                            </Slider>
                        </CarouselProvider>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default DashboardView;
