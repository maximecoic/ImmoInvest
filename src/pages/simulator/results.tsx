import React from 'react';
import InvestmentCard from '../../components/InvestmentCard';

const ResultPage: React.FC = () => {
    // Sample data, this would come from calculations based on input
    const investments = [
        { title: 'LMNP', returnOnInvestment: 8, risks: ['Market fluctuation', 'Tenant issues'] },
        { title: 'Denormandie', returnOnInvestment: 6, risks: ['Investment loss', 'Legal complexities'] },
        { title: 'Déficit Foncier', returnOnInvestment: 7, risks: ['Higher tax rates', 'Maintenance costs'] },
    ];

    return (
        <div className="max-w-lg mx-auto mt-10">
            <h2 className="text-3xl font-semibold mb-4">Investment Results</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {investments.map((investment, index) => (
                    <InvestmentCard key={index} {...investment} />
                ))}
            </div>
        </div>
    );
};

export default ResultPage;