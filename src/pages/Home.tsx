import React from 'react';
import { useEffect, useState } from "react";




const Home = () => {
    // console.log(place)
    const [place, setPlace] = useState([]);
    const getServices = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/desti/place`, {
                method: "GET",
            });

            if (response.ok) {
                const data = await response.json();
                // console.log(data.msg);
                setPlace(data.msg);
            }
        } catch (error) {
            console.log(`services frontend error: ${error}`);
        }
    };

    const searchHandle = async (e) => {
        let key = e.target.value
        if (key) {
            let result = await fetch(`http://localhost:5000/api/desti/search/${key}`);
            result = await result.json()
            const res=result
            if (result) {
                const ans=res;
                // lis = setUpdate(result);
                // setPlace(res);
                // setPlace(ans)
                console.log(res);
            }
        }
        else {
            getServices();

        }




    }
    useEffect(() => {
        getServices();

    }, []);
    // console.log(place)
    return (
        <div className='max-h-fit'>
            {/* <div className=" pl-16 pt-2 mt-3 mb-5 ">    
                <input
                    type="text"
                    placeholder="Search..."
                    className="px-2 py-1 rounded-md outline-none max-w-lg"
                onChange={searchHandle}
                />
            </div> */}

            {/* mt-20 */}
            <div className='mt-20  ml-7 mr-7 '>
                <div className='  flex flex-wrap justify-around flex-row '>


                    {place.map((curElem, index) => {
                        const { distance, duration, image, price, title } = curElem;

                        return (
                            <div className="  block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark  pb-2  max-w-xs mb-4  " key={index}>
                                <div className="relative  bg-cover bg-no-repeat "
                                    data-twe-ripple-init
                                    data-twe-ripple-color="light">
                                    <img className="rounded-lg min-h-60" src={image} alt="" />
                                    <a href="#!">
                                        <div
                                            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                                    </a>
                                </div>
                                <div className="mt-2 px-2 text-surface text-black">
                                    <h3 className=" text-sm font-semibold leading-tight">{title}</h3>
                                    <div className=" text-slate-400     text-base ">

                                        {distance} <span className='ml-0.5'>Kilometers away</span>
                                    </div>
                                    <div className=" mt-none text-slate-400     text-base ">
                                        {duration}
                                    </div>
                                    <div className='flex items-center ' >
                                        <h3 className="mt-2 text-sm font-semibold leading-tight ">
                                            &#8377;{price}
                                        </h3>
                                        <p className="ml-1 mt-2 text-black       text-base">
                                            night
                                        </p>
                                    </div>


                                </div>
                            </div>
                        );
                    })}


                </div>
            </div>
        </div>

    );
};



export default Home;