import React from 'react';

import Button from '../../shared/ui/Button/Button';

interface IOperationDetails {
    date: Date;
    sum: number;
    category: string;
    name: string;
    description: string;
}

const OperationDetails: React.FC<IOperationDetails> = ({ date, sum, category, name, description }) => {
    return (
        <div className="flex flex-row p-3 rounded shadow items-center">
            <div className="mr-10">{date.toLocaleString()}</div>
            <div className="mr-10">
                <div className="font-bold">{name}</div>
                <div className="font-normal text-blue-400">{category}</div>
            </div>
            <div className="mr-10">{description}</div>
            <div className="text-lg font-bold mr-10">{sum}</div>
            <Button>Редактировать</Button>
        </div>
    );
};

export default OperationDetails;
