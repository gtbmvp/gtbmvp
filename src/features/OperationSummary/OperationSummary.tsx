import React from 'react';

interface IOperationSummary {
    sum: number;
    category: string;
    name: string;
    description: string;
}

const OperationSummary: React.FC<IOperationSummary> = ({ sum, category, name, description }) => {
    return (
        <div className="flex flex-row p-3 rounded shadow items-center">
            <div className="mr-10">
                <div className="font-bold">{name}</div>
                <div className="font-normal text-blue-400">{category}</div>
            </div>
            <div className="truncate mr-10">{description}</div>
            <div className="text-lg font-bold">{sum}</div>
        </div>
    );
};

export default OperationSummary;
