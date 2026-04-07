import React, { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useRouter } from 'next/router';

const InputPage: React.FC = () => {
    const [income, setIncome] = useState('');
    const [propertyValue, setPropertyValue] = useState('');
    const [plannedRentalPrice, setPlannedRentalPrice] = useState('');
    const [existingMortgages, setExistingMortgages] = useState('');
    const [deductions, setDeductions] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleNext = () => {
        if (!income || !propertyValue || !plannedRentalPrice) {
            setError('All fields are required.');
            return;
        }
        setError('');

        // Redirect to results page
        router.push('/simulator/results');
    };

    return (
        <div className="max-w-lg mx-auto mt-10">
            <h2 className="text-3xl font-semibold mb-4">Investment Input</h2>
            <Input label="Income" value={income} onChange={(e) => setIncome(e.target.value)} error={error} />
            <Input label="Property Value" value={propertyValue} onChange={(e) => setPropertyValue(e.target.value)} error={error} />
            <Input label="Planned Rental Price" value={plannedRentalPrice} onChange={(e) => setPlannedRentalPrice(e.target.value)} error={error} />
            <Input label="Existing Mortgages" value={existingMortgages} onChange={(e) => setExistingMortgages(e.target.value)} />
            <Input label="Deductions" value={deductions} onChange={(e) => setDeductions(e.target.value)} />
            <Button onClick={handleNext}>Next</Button>
        </div>
    );
};

export default InputPage;