import React from 'react';

interface DurationOption {
    key: string;
    percent: string;
    value: Number;
    real: Number
}

interface DurationSelectorProps {
    durations: DurationOption[];
    setDuration: (duration: any) => void;
}

const DurationSelector: React.FC<DurationSelectorProps> = ({ durations, setDuration }) => {

    return (
        <div className="flex mt-5 w-full justify-between text-white">
            {durations.map((duration) => (
                <div key={duration.key} className="rounded-3xl border-gray-300 border w-[31%] h-auto text-center cursor-pointer" onClick={() => setDuration(duration.real)}>
                    <div className="bg-white flex justify-center text-black text-[15px] md:text-[17px] py-2 rounded-3xl md:rounded-full">
                        <p className='pr-2'>{duration.value}</p>
                        {duration.key}
                        </div>
                    <p className="text-[20px] md:text-[30px] my-auto hover:opacity-40 active:opacity-50">{duration.percent}</p>
                </div>
            ))}
        </div>
    );
};

export default DurationSelector;
