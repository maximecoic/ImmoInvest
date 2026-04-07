import React from 'react';

interface InvestmentCardProps {
    title: string;
    returnOnInvestment: number;
    risks: string[];
}

const InvestmentCard: React.FC<InvestmentCardProps> = ({ title, returnOnInvestment, risks }) => {
    return (
        <div className="border rounded-lg shadow-md p-4 m-2">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p>Return on Investment: {returnOnInvestment}%</p>
            <h4 className="font-medium mt-2">Risks:</h4>
            <ul className="list-disc ml-5">
                {risks.map((risk, index) => (
                    <li key={index}>{risk}</li>
                ))}
            </ul>
        </div>
    );
};

export default InvestmentCard;