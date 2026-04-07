import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-5xl font-bold">Welcome to InvestiSim</h1>
            <p className="mt-4">Your personal real estate investment simulator.</p>
            <Link href="/simulator/input" className="mt-6 bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600">
                Start Simulation
            </Link>
        </div>
    );
};

export default Home;