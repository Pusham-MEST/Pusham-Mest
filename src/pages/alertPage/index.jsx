import React from 'react'
import { alert, hero } from '../../assets'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const AlertPage = () => {
    return (
        <div>
            <div className='bg-[#F6F6F6] h-[120vh]'>
                <div className='pt-[50px] pl-[40px] font-bold text-[30px] text-[#1271b4] '>
                    <h1>Outage Info</h1>
                    <p className='mt-[15px]'>Location</p>
                </div>
                <div>
                    <form class="w-[40%] flex justify-center items-center rounded-xl overflow-hidden mx-auto">
                        <input type="email" class="bg-white px-7 py-3 grow focus:outline-none" placeholder="Search by location" />
                        <button
                            class="flex justify-center items-center text-white text-[22px] py-3 px-7 h-12 border border-[#1271b4] bg-[#1271b4] hover:bg-opacity-90 hover:border-opacity-90 duration-300"
                        >
                            <i class="fas fa-search"></i>
                        </button>
                    </form>
                </div>
                <div className='w-[45%] mt-[40px] pl-[20px] space-y-4'>
                    <div className="collapse collapse-plus bg-[#96BF17]">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title flex justify-self-auto text-xl font-medium">
                            <div className="collapse-title">Frafraha</div>
                            <div className="collapse-title">30th July, 2024</div>
                        </div>
                        <div className="collapse-content">
                            <p>There will be a scheduled maintaince in Frafra on this date.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-[#96BF17]">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title flex justify-self-auto text-xl font-medium">
                            <div className="collapse-title">Frafraha</div>
                            <div className="collapse-title">30th July, 2024</div>
                        </div>
                        <div className="collapse-content">
                            <p>There will be a scheduled maintaince in Frafra on this date.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-[#96BF17]">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title flex justify-self-auto text-xl font-medium">
                            <div className="collapse-title">Frafraha</div>
                            <div className="collapse-title">30th July, 2024</div>
                        </div>
                        <div className="collapse-content">
                            <p>There will be a scheduled maintaince in Frafra on this date.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-[#96BF17]">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title flex justify-self-auto text-xl font-medium">
                            <div className="collapse-title">Frafraha</div>
                            <div className="collapse-title">30th July, 2024</div>
                        </div>
                        <div className="collapse-content">
                            <p>There will be a scheduled maintaince in Frafra on this date.</p>
                        </div>
                    </div>
                </div>
            </div>
            <section
                class="ezy__service9 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative z-[1] overflow-hidden"
            >
                <div class="container px-4 mx-auto">
                    <div
                        class="absolute top-16 right-0 bottom-16 left-1/2 lg:left-[60%] rounded-l-[30px] bg-[#1271B4] bg-opacity-100 w-[100vw] -z-[1]"
                    ></div>
                    <div class="w-full max-w-xl mb-12">
                        <h2 class="text-3xl leading-none md:text-[45px] font-bold mb-4">GET OUTAGE ALERTS</h2>
                        <p class="text-lg opacity-80 mb-6">
                            Sign up to receive alerts via text when your power goes out.  We’ll notify you when we detect an outage on your property, have restoration estimates and updates, or have restored power to your address.
                        </p>
                        <p class="text-lg opacity-80 mb-6">For phone alerts: Text REG to ***** to get text alerts</p>
                    </div>

                    <div class="grid grid-cols-3 gap-6 gap-y-24 md:gap-y-0 mt-20 max-w-7xl mx-auto">
                        <div class="col-span-3 md:col-span-1">
                            <div class="bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-6 pb-12 h-full">
                                <div
                                    class="w-20 h-20 rounded-full text-3xl flex items-center justify-center -mt-16 bg-white dark:bg-slate-900 shadow-2xl text-blue-600"
                                >
                                    {/* <FontAwesomeIcon icon="fa-solid fa-mobile" /> */}
                                </div>

                                <div class="mt-6">
                                    <h4 class="text-2xl font-medium mb-4">Prompt Alert</h4>
                                    <p class="opacity-80">
                                        Alerts when there’s an outage on your property
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-3 md:col-span-1">
                            <div class="bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-6 pb-12 h-full relative">
                                <div
                                    class="w-20 h-20 rounded-full text-3xl flex items-center justify-center -mt-16 bg-white dark:bg-slate-900 shadow-2xl text-blue-600"
                                >
                                    {/* <i class="fas fa-random"></i> */}
                                </div>

                                <div class="mt-6">
                                    <h4 class="text-2xl font-medium mb-4">Updates</h4>
                                    <p class="opacity-80">
                                        Restoration estimates and updates
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-3 md:col-span-1">
                            <div class="bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-6 pb-12 h-full relative">
                                <div
                                    class="w-20 h-20 rounded-full text-3xl flex items-center justify-center -mt-16 bg-white dark:bg-slate-900 shadow-2xl text-blue-600"
                                >
                                    {/* <i class="fas fa-camera"></i> */}
                                </div>
                                <div class="mt-6">
                                    <h4 class="text-2xl font-medium mb-4">Notifications</h4>
                                    <p class="opacity-80">
                                        Notifications when power is restored
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="ezy__faq15 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
                <div class="container px-16 md:px-8 lg:px-28">
                    <div class="grid grid-cols-12">
                        <div class="col-span-12 lg:col-span-7 text-center md:text-start pl-6 lg:pl-12">
                            <h2 class="font-bold text-[35px] leading-[45px] md:text-[45px] md:leading-[65px]">
                                Frequently Asked Questions
                            </h2>
                            <p class="text-base leading-6 font-medium opacity-80 mb-2">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad dolorem labore assumenda, eveniet culpa nisi
                                rerum, quia laborum similique nemo molestiae sit amet cumque dolorum!
                            </p>
                        </div>
                    </div>
                   
                    <div class="grid grid-cols-12 text-center md:text-start">
                        
                        <div class="col-span-12 md:col-span-6 lg:col-span-4">
                            <div class="">
                                <div class="flex flex-col items-center md:items-start p-6 lg:p-12">
                                    <div
                                        class="bg-blue-600 text-white text-xl h-10 w-10 rounded-full flex justify-center items-center mb-6"
                                    >
                                        <i class="fa-solid fa-question"></i>
                                    </div>

                                    <h5 class="text-xl font-bold mb-4">What Shipping Options do you have?</h5>
                                    <p class="text-base leading-snug opacity-80 mb-2">
                                        Partner removes the hassle and confusion that comes from managing your tax burden effectively.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-span-12 md:col-span-6 lg:col-span-4">
                            <div class="">
                                <div class="flex flex-col items-center md:items-start p-6 lg:p-12">
                                    <div
                                        class="bg-blue-600 text-white text-xl h-10 w-10 rounded-full flex justify-center items-center mb-6"
                                    >
                                        <i class="fa-solid fa-question"></i>
                                    </div>

                                    <h5 class="text-xl font-bold mb-4">What Shipping Options do you have?</h5>
                                    <p class="text-base leading-snug opacity-80 mb-2">
                                        Partner removes the hassle and confusion that comes from managing your tax burden effectively.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-span-12 md:col-span-6 lg:col-span-4">
                            <div class="">
                                <div class="flex flex-col items-center md:items-start p-6 lg:p-12">
                                    <div
                                        class="bg-blue-600 text-white text-xl h-10 w-10 rounded-full flex justify-center items-center mb-6"
                                    >
                                        <i class="fa-solid fa-question"></i>
                                    </div>

                                    <h5 class="text-xl font-bold mb-4">What Shipping Options do you have?</h5>
                                    <p class="text-base leading-snug opacity-80 mb-2">
                                        Partner removes the hassle and confusion that comes from managing your tax burden effectively.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-span-12 md:col-span-6 lg:col-span-4">
                            <div class="">
                                <div class="flex flex-col items-center md:items-start p-6 lg:p-12">
                                    <div
                                        class="bg-blue-600 text-white text-xl h-10 w-10 rounded-full flex justify-center items-center mb-6"
                                    >
                                        <i class="fa-solid fa-question"></i>
                                    </div>

                                    <h5 class="text-xl font-bold mb-4">What Shipping Options do you have?</h5>
                                    <p class="text-base leading-snug opacity-80 mb-2">
                                        Partner removes the hassle and confusion that comes from managing your tax burden effectively.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-span-12 md:col-span-6 lg:col-span-4">
                            <div class="">
                                <div class="flex flex-col items-center md:items-start p-6 lg:p-12">
                                    <div
                                        class="bg-blue-600 text-white text-xl h-10 w-10 rounded-full flex justify-center items-center mb-6"
                                    >
                                        <i class="fa-solid fa-question"></i>
                                    </div>

                                    <h5 class="text-xl font-bold mb-4">What Shipping Options do you have?</h5>
                                    <p class="text-base leading-snug opacity-80 mb-2">
                                        Partner removes the hassle and confusion that comes from managing your tax burden effectively.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-span-12 md:col-span-6 lg:col-span-4">
                            <div class="">
                                <div class="flex flex-col items-center md:items-start p-6 lg:p-12">
                                    <div
                                        class="bg-blue-600 text-white text-xl h-10 w-10 rounded-full flex justify-center items-center mb-6"
                                    >
                                        <i class="fa-solid fa-question"></i>
                                    </div>

                                    <h5 class="text-xl font-bold mb-4">What Shipping Options do you have?</h5>
                                    <p class="text-base leading-snug opacity-80 mb-2">
                                        Partner removes the hassle and confusion that comes from managing your tax burden effectively.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                    <div class="grid grid-cols-12 mt-6">
                        <div class="col-span-12 text-center">
                            <div class="bg-[#252d39] dark:bg-[#1E2735] rounded-xl text-white p-4 md:py-6 lg:py-12">
                                <h4 class="text-[32px] leading-[45px] lg:text-[45px] lg:leading-[60px] font-bold mb-2">
                                    Have any additional questions?
                                </h4>
                                <p class="text-[17px] leading-normal opacity-50 mb-2">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, odio fuga!
                                </p>
                                <button
                                    class="bg-blue-600 hover:bg-opacity-90 text-white font-bold border border-blue-600 py-3 px-6 rounded transition mt-4 mb-0"
                                >
                                    Get in touch
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default AlertPage
