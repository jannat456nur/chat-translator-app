import { CheckIcon } from "lucide-react";
import Link from "next/link";
import CheckoutButton from "./CheckoutButton";

const tiers = [
    {
        name: "Starter",
        id: null,
        href: "#",
        priceMonthly: null,
        description: "Get chatting right away eith anyone,anywhere!",
        features: [
            "20 Messages Chat Limit in Charts",
            "2 participant limit in chat",
            "chat Rooms limit",
            "Supports 2 languages",
            "48-hour support response time"
        ],
    },
    {
        name: "Pro",
        id: "si_OnlcsLNQYbMVzV",
        href: "#",
        priceMonthly: "$5.99",
        description: "Unlock the Full Potential with Pro!",
        features: [
            "Unlimited Messages in Charts",
            "Unlimited participant in chat",
            "Unlimited chat Rooms",
            "Supports up to 10 languages",
            "Multimedia support in charts(comming soon)",
            "1-hour,decicated support response time",
            "early access to new Featuires"
        ],
    },
];




function PricingCards({ redirect }: { redirect: boolean }) {
    return (
        <div>
            <div className='mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2'>
                {tiers.map((tier) => (
                    <div
                        key={tier.id}
                        className='flex flex-col justify-between rounded-3xl bg-white  shadow-xl ring-1 ring-gray-900/10 sm:p-10'
                    >
                        <div>
                            <h3
                                id={tier.id + tier.name}
                                className="text-base font-semibold leading-7 text-indigo-600 text-left"
                            >
                                {tier.name}
                            </h3>

                            <div className="mt-4 flex items-baseline gap-x-2">
                                {tier.priceMonthly ? (
                                    <>
                                        <span className="text-5xl font-bold tracking-tight text-gray-900">
                                            {tier.priceMonthly}
                                        </span>
                                        <span className="text-base font-semibold leading-7 text-gray-600">
                                            /month
                                        </span>
                                    </>
                                ) : (
                                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                                        Free
                                    </span>
                                )}
                            </div>
                            <p className="mt-6 text-basr leading-7 text-gray-600">
                                {tier.description}
                            </p>
                            <ul role="list"
                                className="mt-10 space-y-4 text-sm leading-6 text-gray-600">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex gap-x-3">
                                        <CheckIcon className="h-6 w-5 flex-none text-indigo-600"
                                            area-hidden="true" />

                                        {feature}
                                    </li>
                                ))}
                            </ul>

                        </div>
                        {
                            redirect ? (
                                <Link href='/register' className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center
                                text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outlinecursor-pointer 
                                disable:opacity-89">
                                    Get Started Today
                                </Link>
                            ) : (
                                tier.id && <CheckoutButton />
                            )}
                    </div>
                ))}
            </div>
        </div>

    )
}

export default PricingCards