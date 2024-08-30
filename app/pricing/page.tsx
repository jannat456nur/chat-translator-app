import React from 'react'

const pricingPage = () => {
    return (
        <div className='isolate overflow-hidden bg-gray-900'>
            <div className='mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8'>
                <div className='mx-auto max-w-4xl'>
                    <h2 className='text-base font-semibold  leading-7 text-indigo-400'>
                        Pricing
                    </h2>
                    <p className='mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl'>
                        The right price for you.{""}
                        <br className='hidden sm:inline lg:hidden' />
                        Whoever you are
                    </p>
                </div>
                <div className='relative mt-6'>
                    <p className='mx-auto max-w-2xl text-lg leading-8 text-white/60'>
                        Wre 99% sure we have a plan to match 100% of your needs
                    </p>
                    <svg
                        viewBox='0 0 1208 1024'
                        className='absolute -top10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient
                        (closet-side,white,transparent)] sm:-top-12 md:top-20 lg:top-0'
                    >
                        <ellipse
                            cx={604}
                            cy={512}
                            rx={604}
                            ry={512}
                            fill='url(#linear-gradient-pricing)'
                        />
                        <defs>
                            <radialGradient id='radial-gradient-pricing'>
                                <stop stopColor='#777506'></stop>
                                <stop offset={1} stopColor='#E935c1'></stop>
                            </radialGradient>
                        </defs>
                    </svg>
                </div>

            </div>
            <div className='flow-root bg-white pb-24 sm:pb-32'>
                <div className='mt-80' />
            </div>

        </div>
    )
}

export default pricingPage