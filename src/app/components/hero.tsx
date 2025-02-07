import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa"; // For the arrow icon
import { TiShoppingCart } from "react-icons/ti";
import h1 from "@/app/media/nolan-kent-aZM1ng82J40-unsplash.jpg";
import f1 from "@/app/media/perfume-7639482_1280.jpg";
import f2 from "@/app/media/Screenshot (58).png";
import men from "@/app/media/Screenshot (59).png"
import women from "@/app/media/pexels-cottonbro-4154204.jpg"
import { FaAward, FaExchangeAlt, FaTint } from "react-icons/fa";
import sale from "@/app/media/pexels-pixabay-207518.jpg";
import Lt from "./latest/page";
import Bs from "./bestsellers/page";
import BackToTopButton from "./back2top";




const HeroSection = async () => {

    return (
        <>

            <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">

                <Image
                    src={h1.src}
                    alt="Perfume Collection"
                    layout="fill"
                    objectFit="cover"
                    className="absolute z-0"
                />

                <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

                <div className="relative z-20 text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-4">
                        Discover Your Signature Scent
                    </h1>
                    <p className="text-lg md:text-xl mb-8">
                        Luxury fragrances that inspire confidence and leave a lasting impression.
                    </p>
                    <div className="wrapper">
                        <div className="link_wrapper mt-52">
                            <Link href="/components/Shop" className="shop">Shop Now</Link>
                            <div className="icon">
                                <TiShoppingCart className="cart" />

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 mt-[50px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="box bg-white rounded-lg overflow-hidden flex flex-col md:flex-row">

                        <div className="w-full md:w-1/2 h-64 md:h-auto">
                            <Image
                                src={f1.src}
                                alt="Fragrances"
                                width={600}
                                height={400}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center text-center md:text-left">
                            <h2 className="text-3xl font-bold font-poppins mb-4">
                                Fragrances
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Explore our exquisite collection of luxury perfumes that captivate your senses.
                            </p>
                            <Link
                                href="/components/fragrances"
                                className="bg-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors inline-flex items-center justify-center md:justify-start w-40 mx-auto md:mx-0"
                            >
                                Explore <FaArrowRight className="ml-2" />
                            </Link>
                        </div>
                    </div>


                    <div className="box bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2 h-64 md:h-auto">
                            <Image
                                src={f2.src}
                                alt="Body Sprays"
                                width={600}
                                height={400}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center text-center md:text-left">
                            <h2 className="text-3xl font-bold font-poppins mb-4">
                                Body Sprays
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Refresh and rejuvenate with our collection of long-lasting body sprays.
                            </p>
                            <Link
                                href="/components/bodysprays"
                                className="bg-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors inline-flex items-center justify-center md:justify-start w-40 mx-auto md:mx-0"
                            >
                                Explore <FaArrowRight className="ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-[100px]">


                <div>
                    <Lt />
                </div>
            </div>


            <div className="container mx-auto px-4 py-10 mt-14">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <Link
                        href="/components/men"
                        className="men-women-card block relative group overflow-hidden rounded-lg h-[400px] md:h-[500px] flex items-center justify-center md:rounded-lg "
                    >
                        <Image
                            src={men.src}
                            alt="Men's Collection"
                            layout="fill"
                            objectFit="cover"
                            className="absolute z-0 transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
                        <div className="relative z-20 text-center text-white">
                            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
                                Men
                            </h2>

                            <div className="hidden md:block">
                                <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-cyan-600 transition-colors" >
                                    <Link href="/components/men">Explore</Link>
                                </button>
                            </div>
                        </div>
                    </Link>

                    <Link
                        href="/components/women"
                        className="men-women-card block relative group overflow-hidden rounded-lg h-[400px] md:h-[500px] flex items-center justify-center md:rounded-lg"
                    >
                        <Image
                            src={women.src}
                            alt="Women's Collection"
                            layout="fill"
                            objectFit="cover"
                            className="absolute z-0 transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
                        <div className="relative z-20 text-center text-white">
                            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
                                Women
                            </h2>

                            <div className="hidden md:block">
                                <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-cyan-600 transition-colors">
                                    Explore
                                </button>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>


            <div className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden group mt-[70px]">

                <Image
                    src={sale.src}
                    alt="Perfumes Background"
                    layout="fill"
                    objectFit="cover"
                    className="absolute z-0"
                />
                <div className="absolute inset-0 bg-black/50 z-10"></div>


                <div className="relative z-20 text-center text-white space-y-6">

                    <div className="animate-float">
                        <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-red-400 drop-shadow-lg">
                            Winter Blowout
                        </h1>
                    </div>

                    <p className="text-xl md:text-2xl font-poppins mb-8 max-w-2xl mx-auto text-gray-200">
                        Enjoy up to <span className="font-bold text-red-400 animate-pulse">
                            35% OFF
                        </span> on luxury winter fragrances
                    </p>


                    <button className="bg-red-600/90 hover:bg-red-700 text-white px-10 py-3 rounded-xl text-xl font-semibold transition-all duration-300 overflow-hidden group/button relative">

                        <Link href="/components/discount">
                            <span className="relative z-10 group-hover/button:opacity-0 transition-opacity duration-300">
                                Shop Now
                            </span>
                        </Link>


                        <span className="absolute inset-0 flex items-center justify-center z-0 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300">
                            <span className="animate-marq2 whitespace-nowrap text-red-100 font-bold">
                                SALE! SALE! SALE! SALE! SALE! SALE! SALE! SALE! SALE! SALE! SALE! SALE! SALE! SALE! SALE! SALE! SALE!
                            </span>
                        </span>
                    </button>
                </div>


                <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
                    {[...Array(30)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-white/50 rounded-full animate-glitter"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 2}s`,
                            }}
                        ></div>
                    ))}
                </div>
            </div>

            <div className="mt-[100px]">

                <div>
                    <Bs />
                </div>
            </div>

            <div className="bg-gray-100 py-12 mt-[70px]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="flex justify-center mb-4">
                                <FaAward className="text-4xl text-cyan-500" />
                            </div>
                            <h3 className="text-xl font-bold font-poppins mb-2">
                                AWARDED BY CONSUMER ASSOCIATION
                            </h3>
                            <p className="text-gray-600">
                                Consumer Association recognized Mehak in the 17th Consumer Choice
                                Awards.
                            </p>
                        </div>


                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="flex justify-center mb-4">
                                <FaExchangeAlt className="text-4xl text-cyan-500" />
                            </div>
                            <h3 className="text-xl font-bold font-poppins mb-2">
                                15 DAYS EASY RETURNS POLICY
                            </h3>
                            <p className="text-gray-600">
                                Didn’t Love What You Ordered? Avail returns or exchange for your
                                online purchases within 15 days. For in-store exchanges only.
                            </p>
                        </div>


                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="flex justify-center mb-4">
                                <FaTint className="text-4xl text-cyan-500" />
                            </div>
                            <h3 className="text-xl font-bold font-poppins mb-2">
                                HIGH CONCENTRATION PERFUMES
                            </h3>
                            <p className="text-gray-600">
                                We set our concentrations as high as possible to ensure maximum
                                performance of the perfumes.
                            </p>
                            <BackToTopButton />
                        </div>
                    </div>
                </div>
            </div>




        </>
    );
};

export default HeroSection;
