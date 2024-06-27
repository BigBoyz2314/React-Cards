import React from 'react';

const Content = () => {
    const landingPageBySessions = [
        {
            value: 101075,
            landingPageBySession: "/products/magnetic-gps-tracker-07"
        },
        {
            value: 40591,
            landingPageBySession: "/products/reusable-waterproof-tape"
        },
        {
            value: 50543,
            landingPageBySession: "/products/mini-refillable-perfume-bottle"
        },
        {
            value: 152217,
            landingPageBySession: "/products/magnetic-wifi-camera"
        },
        {
            value: 15297,
            landingPageBySession: "/products/https-essentialss-co-products-pet-hair-demating-comb"
        }
    ];

    const referBySessions = [
        {
            value: 3014,
            referBySession: "app.ecomsolid.com"
        },
        {
            value: 5029,
            referBySession: "imasdk.googleapis.com"
        },
        {
            value: 25169,
            referBySession: "www.pangleglobal.com"
        },
        {
            value: 4025,
            referBySession: "storage.googleapis.com"
        },
        {
            value: 10157,
            referBySession: "pangle-global.io"
        }
    ];

    const sessionsRate = {
        conversionRate: 33.3298429733126,
        addedToCart: {
            totalSessions: 168896,
            conversionRate: 33.3683686452398
        },
        reachedCheckout: {
            totalSessions: 168559,
            conversionRate: 33.3017883814476
        },
        sessionsConverted: {
            totalSessions: 168701,
            conversionRate: 33.3298429733126
        }
    };

    const addCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (
        <div className="grid grid-cols-2 text-sm gap-8 mt-10 px-16">
            <article className="rounded-xl md:h-96 bg-white p-4 shadow flex flex-col justify-between">
                <div className="flex justify-between mb-6 sm:gap-8">
                    <div className='has-tooltip font-semibold border-b-2 border-dotted w-52'>
                        <span className='tooltip font-normal rounded-lg shadow-lg px-2 py-4 border mt-6 w-4/12 bg-white'>
                            <h5 className="font-bold mb-2">Top landing pages by sessions</h5>
                            The top pages where visitors entered your online store and the number of sessions associated with each landing page.
                        </span>
                        Top landing pages by sessions
                    </div>
                    <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" className="w-5" focusable="false" aria-hidden="true"><path d="M9.018 3.5h1.964c.813 0 1.469 0 2 .043.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47.043.531.043 1.187.043 2v.232a.75.75 0 0 1-1.5 0v-.2c0-.852 0-1.447-.038-1.91-.037-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.984-.984c-.197-.1-.458-.17-.912-.207-.462-.037-1.056-.038-1.909-.038h-1.9c-.852 0-1.447 0-1.91.038-.453.037-.714.107-.911.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912-.037.462-.038 1.057-.038 1.909v1.9c0 .853 0 1.447.038 1.91.037.453.107.714.207.912.216.423.56.767.984.983.197.1.458.17.912.207.462.037 1.057.038 1.909.038h.2a.75.75 0 0 1 0 1.5h-.232c-.813 0-1.469 0-2-.043-.546-.045-1.026-.14-1.47-.366a3.75 3.75 0 0 1-1.64-1.639c-.226-.444-.32-.924-.365-1.47-.043-.531-.043-1.187-.043-2v-1.964c0-.813 0-1.469.043-2 .045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365.531-.043 1.187-.043 2-.043Z"></path><path fill-rule="evenodd" d="M10.25 13a2.75 2.75 0 1 1 5.152 1.34l1.128 1.13a.75.75 0 1 1-1.06 1.06l-1.13-1.129a2.75 2.75 0 0 1-4.09-2.402Zm2.75-1.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"></path><path d="M7 7.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z"></path><path d="M7.75 10a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z"></path></svg>
                </div>
                {landingPageBySessions.map((session, index) => (
                    <div key={index} className="flex justify-between py-4 border-b">
                        <a className="text-blue-400 underline" href={session.landingPageBySession}>{session.landingPageBySession}</a>
                        <p>{session.value}</p>
                    </div>
                ))}
            </article>
            <article className="rounded-xl bg-white p-4 shadow flex flex-col h-full">
                <div className="flex justify-between sm:gap-8">
                    <div className='has-tooltip font-semibold border-b-2 border-dotted w-50'>
                        <span className='tooltip font-normal rounded-lg shadow-lg px-2 py-4 border mt-6 w-4/12 bg-white'>
                            <h5 className="font-bold mb-2">Sales attributed to marketing</h5>
                            Value of total sales that can be attributed to traffic driven to your online store by trackable marketing efforts.
                        </span>
                        Sales attributed to marketing
                    </div>
                    <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" className="w-5" focusable="false" aria-hidden="true"><path d="M9.018 3.5h1.964c.813 0 1.469 0 2 .043.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47.043.531.043 1.187.043 2v.232a.75.75 0 0 1-1.5 0v-.2c0-.852 0-1.447-.038-1.91-.037-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.984-.984c-.197-.1-.458-.17-.912-.207-.462-.037-1.056-.038-1.909-.038h-1.9c-.852 0-1.447 0-1.91.038-.453.037-.714.107-.911.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912-.037.462-.038 1.057-.038 1.909v1.9c0 .853 0 1.447.038 1.91.037.453.107.714.207.912.216.423.56.767.984.983.197.1.458.17.912.207.462.037 1.057.038 1.909.038h.2a.75.75 0 0 1 0 1.5h-.232c-.813 0-1.469 0-2-.043-.546-.045-1.026-.14-1.47-.366a3.75 3.75 0 0 1-1.64-1.639c-.226-.444-.32-.924-.365-1.47-.043-.531-.043-1.187-.043-2v-1.964c0-.813 0-1.469.043-2 .045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365.531-.043 1.187-.043 2-.043Z"></path><path fill-rule="evenodd" d="M10.25 13a2.75 2.75 0 1 1 5.152 1.34l1.128 1.13a.75.75 0 1 1-1.06 1.06l-1.13-1.129a2.75 2.75 0 0 1-4.09-2.402Zm2.75-1.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"></path><path d="M7 7.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z"></path><path d="M7.75 10a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z"></path></svg>
                </div>
                <div className="text-lg flex font-bold justify-center items-center h-full text-2xl"><h1>Rs 0.00</h1></div>
            </article>
            <article className="rounded-xl bg-white p-4 shadow flex flex-col justify-between h-full">
                <div className="flex justify-between sm:gap-8">
                    <div className='has-tooltip font-semibold border-b-2 border-dotted w-50'>
                        <span className='tooltip font-normal rounded-lg shadow-lg px-2 py-4 border mt-6 w-4/12 bg-white'>
                            <h5 className="font-bold mb-2">Products by sell-through rate</h5>
                            Percentage of the total inventory sold during the selected time period.
                            <br />
                            <div className="bg-gray-200 rounded-lg p-2 font-mono text-green-600 text-xs">
                                <span className="text-cyan-700">Sell-through rate </span> =
                                Total quantity of items sold / [total quantity of items sold + total quantity of items still in inventory]
                            </div>
                        </span>
                        Products by sell-through rate
                    </div>
                    <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" className="w-5" focusable="false" aria-hidden="true"><path d="M9.018 3.5h1.964c.813 0 1.469 0 2 .043.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47.043.531.043 1.187.043 2v.232a.75.75 0 0 1-1.5 0v-.2c0-.852 0-1.447-.038-1.91-.037-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.984-.984c-.197-.1-.458-.17-.912-.207-.462-.037-1.056-.038-1.909-.038h-1.9c-.852 0-1.447 0-1.91.038-.453.037-.714.107-.911.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912-.037.462-.038 1.057-.038 1.909v1.9c0 .853 0 1.447.038 1.91.037.453.107.714.207.912.216.423.56.767.984.983.197.1.458.17.912.207.462.037 1.057.038 1.909.038h.2a.75.75 0 0 1 0 1.5h-.232c-.813 0-1.469 0-2-.043-.546-.045-1.026-.14-1.47-.366a3.75 3.75 0 0 1-1.64-1.639c-.226-.444-.32-.924-.365-1.47-.043-.531-.043-1.187-.043-2v-1.964c0-.813 0-1.469.043-2 .045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365.531-.043 1.187-.043 2-.043Z"></path><path fill-rule="evenodd" d="M10.25 13a2.75 2.75 0 1 1 5.152 1.34l1.128 1.13a.75.75 0 1 1-1.06 1.06l-1.13-1.129a2.75 2.75 0 0 1-4.09-2.402Zm2.75-1.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"></path><path d="M7 7.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z"></path><path d="M7.75 10a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z"></path></svg>
                </div>
                <div className="text-lg font-bold mb-6">33.9%</div>
                <div className="flex justify-between py-4 border-b">
                    <a className="text-blue-400 underline" href="#">Magnetic Wifi Camera | Default Title</a>
                    <p>100.00%</p>
                </div>
                <div className="flex justify-between py-4 border-b">
                    <a className="text-blue-400 underline" href="#">Refillable Perfume Bottle | black</a>
                    <p>100.00%</p>
                </div>
                <div className="flex justify-between py-4 border-b">
                    <a className="text-blue-400 underline" href="#">Magnetic GPS Tracker (PTA Approved) | Default...</a>
                    <p>100.00%</p>
                </div>
                <div className="flex justify-between py-4 border-b">
                    <a className="text-blue-400 underline" href="#">Refillable Perfume Bottle | Default Title</a>
                    <p>100.00%</p>
                </div>
                <div className="flex justify-between py-4 border-b">
                    <a className="text-blue-400 underline" href="#">Refillable Perfume Bottle | pink</a>
                    <p>100.00%</p>
                </div>
            </article>
            <article className="rounded-xl bg-white p-4 shadow flex flex-col justify-between h-full">
                <div className="flex justify-between mb-6 sm:gap-8">
                    <div className='has-tooltip font-semibold border-b-2 border-dotted w-46'>
                        <span className='tooltip font-normal rounded-lg shadow-lg px-2 py-4 border mt-6 w-4/12 bg-white'>
                            <h5 className="font-bold mb-2">Top referrers by sessions</h5>
                            External websites that directed the most sessions to your online store.
                        </span>
                        Top referrers by sessions
                    </div>
                    <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" className="w-5" focusable="false" aria-hidden="true"><path d="M9.018 3.5h1.964c.813 0 1.469 0 2 .043.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47.043.531.043 1.187.043 2v.232a.75.75 0 0 1-1.5 0v-.2c0-.852 0-1.447-.038-1.91-.037-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.984-.984c-.197-.1-.458-.17-.912-.207-.462-.037-1.056-.038-1.909-.038h-1.9c-.852 0-1.447 0-1.91.038-.453.037-.714.107-.911.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912-.037.462-.038 1.057-.038 1.909v1.9c0 .853 0 1.447.038 1.91.037.453.107.714.207.912.216.423.56.767.984.983.197.1.458.17.912.207.462.037 1.057.038 1.909.038h.2a.75.75 0 0 1 0 1.5h-.232c-.813 0-1.469 0-2-.043-.546-.045-1.026-.14-1.47-.366a3.75 3.75 0 0 1-1.64-1.639c-.226-.444-.32-.924-.365-1.47-.043-.531-.043-1.187-.043-2v-1.964c0-.813 0-1.469.043-2 .045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365.531-.043 1.187-.043 2-.043Z"></path><path fill-rule="evenodd" d="M10.25 13a2.75 2.75 0 1 1 5.152 1.34l1.128 1.13a.75.75 0 1 1-1.06 1.06l-1.13-1.129a2.75 2.75 0 0 1-4.09-2.402Zm2.75-1.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"></path><path d="M7 7.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z"></path><path d="M7.75 10a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z"></path></svg>
                </div>
                {referBySessions.map((session, index) => (
                <div key={index} className="flex justify-between py-4 border-b">
                    <a className="" href={`https://${session.referBySession}`} target="_blank" rel="noopener noreferrer">
                        {session.referBySession}
                    </a>
                    <p>{session.value}</p>
                </div>
                ))}
            </article>

            <article className="rounded-xl bg-white p-4 shadow">
                <div className="flex justify-between mb-2 sm:gap-8">
                    <div className='has-tooltip font-semibold border-b-2 border-dotted w-56'>
                        <span className='tooltip font-normal rounded-lg shadow-lg px-2 py-4 border mt-6 w-4/12 bg-white'>
                            <h5 className="font-bold mb-2">Conversion Rates</h5>
                            Conversion rates for different stages of the sales funnel.
                        </span>
                        Conversion Rates
                    </div>
                    <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" className="w-5" focusable="false" aria-hidden="true"><path d="M9.018 3.5h1.964c.813 0 1.469 0 2 .043.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47.043.531.043 1.187.043 2v.232a.75.75 0 0 1-1.5 0v-.2c0-.852 0-1.447-.038-1.91-.037-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.984-.984c-.197-.1-.458-.17-.912-.207-.462-.037-1.056-.038-1.909-.038h-1.9c-.852 0-1.447 0-1.91.038-.453.037-.714.107-.911.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912-.037.462-.038 1.057-.038 1.909v1.9c0 .853 0 1.447.038 1.91.037.453.107.714.207.912.216.423.56.767.984.983.197.1.458.17.912.207.462.037 1.057.038 1.909.038h.2a.75.75 0 0 1 0 1.5h-.232c-.813 0-1.469 0-2-.043-.546-.045-1.026-.14-1.47-.366a3.75 3.75 0 0 1-1.64-1.639c-.226-.444-.32-.924-.365-1.47-.043-.531-.043-1.187-.043-2v-1.964c0-.813 0-1.469.043-2 .045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365.531-.043 1.187-.043 2-.043Z"></path><path fill-rule="evenodd" d="M10.25 13a2.75 2.75 0 1 1 5.152 1.34l1.128 1.13a.75.75 0 1 1-1.06 1.06l-1.13-1.129a2.75 2.75 0 0 1-4.09-2.402Zm2.75-1.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"></path><path d="M7 7.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z"></path><path d="M7.75 10a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z"></path></svg>
                </div>
                <div className="text-lg font-bold mb-6">33.32%</div>
                <div className="flex justify-between py-4 border-b">
                    <p>Added to Cart <br /><span className='text-xs'>{addCommas(sessionsRate.addedToCart.totalSessions)} Sessions</span></p>
                    <p>{sessionsRate.addedToCart.conversionRate.toFixed(2)}%</p>
                </div>
                <div className="flex justify-between py-4 border-b">
                    <p>Reached Checkout <br /><span className='text-xs'>{addCommas(sessionsRate.reachedCheckout.totalSessions)} Sessions</span></p>
                    <p>{sessionsRate.reachedCheckout.conversionRate.toFixed(2)}%</p>
                </div>
                <div className="flex justify-between py-4 border-b">
                    <p>Sessions Converted <br /><span className='text-xs'>{addCommas(sessionsRate.sessionsConverted.totalSessions)} Sessions</span></p>
                    <p>{sessionsRate.sessionsConverted.conversionRate.toFixed(2)}%</p>
                </div>
            </article>
            
        </div>
    );
};

export default Content;
