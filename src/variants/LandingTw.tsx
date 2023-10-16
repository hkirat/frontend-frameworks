import React from 'react';

export const LandingTw = () => {
    return (
        <div className="w-screen h-screen">
            <Landing />
        </div>
    );
}

function Landing() {
    return (
        <div className="flex h-screen">
            <div className="hidden md:flex flex-col w-6/12 lg:w-7/12 bg-indigo-950 h-full">
                <div className="ml-5 mt-2 text-purple-500 font-semibold text-lg">
                    ChatGPT ●
                </div>
                <div className="flex flex-1 justify-center flex-col">
                    <h3 className="ml-5 text-purple-500 font-semibold text-4xl">
                        Brainstorm names
                    </h3>
                    <h4 className="ml-5 text-purple-500 font-medium text-3xl">
                        into three points
                    </h4>
                </div>
            </div>

            <div className="flex flex-col w-full md:w-6/12 lg:w-5/12 justify-center items-center h-full bg-black">
                <h4 className="text-white font-semibold text-3xl mb-5">
                    Get Started
                </h4>
                <div className="flex">
                    <button className="rounded-md bg-indigo-600 text-white px-16 py-2.5 mr-3 ripple">
                        Log in
                    </button>
                    <button className="rounded-md bg-indigo-600 text-white px-16 py-2.5 ripple">
                        Sign up
                    </button>
                </div>
            </div>

        </div>
    );
}
