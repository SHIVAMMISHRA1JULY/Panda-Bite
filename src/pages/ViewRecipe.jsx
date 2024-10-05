import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ViewRecipe = () => {
    let location = useLocation();
    console.log(location);

    let nutrientsArr = Object.entries(location.state.totalNutrients);
    console.log(nutrientsArr);

    const [fadeIn, setFadeIn] = useState(false); // New state for fade-in

    // Trigger fade-in effect after component mounts
    useEffect(() => {
        setTimeout(() => {
            setFadeIn(true); // Start the fade-in effect after a brief delay
        }, 100);
    }, []);

    return (
        <div className={`transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'} pt-2 bg-gray-100 min-h-screen`}>
            <div className='flex flex-col md:flex-row gap-12 p-6 max-w-7xl mx-auto'>
                <div className='left'>
                    <img 
                        src={location.state.image} 
                        alt="" 
                        className="rounded-lg w-full md:w-96 object-cover shadow-lg"
                    />
                </div>
                <div className='right text-2xl mt-1 pt-1'>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        {location.state.label}
                    </h2>
                    <h3 className="text-xl text-gray-600 mb-2">
                        Cuisine Type: <span className="font-semibold">{location.state.cuisineType}</span>
                    </h3>
                    <h4 className="text-lg text-gray-600 mb-4">
                        Meal Type: <span className="font-semibold">{location.state.mealType}</span>
                    </h4>
                    <button 
                        type='button' 
                        className='bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-md transition duration-300 ease-in-out'
                    >
                        View Full Recipe
                    </button>

                    <div className='my-6 p-4 bg-white shadow-md rounded-md'>
                        <h3 className="text-xl font-semibold mb-3">Ingredients</h3>
                        <ul className='list-disc pl-5'>
                            {location.state.ingredientLines.map((ele, index) => (
                                <li key={index} className='text-gray-700 mb-1'>
                                    {ele}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="relative overflow-x-auto mx-auto max-w-6xl bg-white shadow-md rounded-lg mt-8">
                <table className="w-full text-sm text-left text-gray-600">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                        <tr>
                            <th scope="col" className="px-6 py-3">Nutrient</th>
                            <th scope="col" className="px-6 py-3">Label</th>
                            <th scope="col" className="px-6 py-3">Quantity</th>
                            <th scope="col" className="px-6 py-3">Unit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {nutrientsArr.map(([key, value], index) => (
                            <tr key={index} className="border-b odd:bg-white even:bg-gray-50">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-800">
                                    {key}
                                </th>
                                <td className="px-6 py-4">{value.label}</td>
                                <td className="px-6 py-4">{value.quantity.toFixed(2)}</td>
                                <td className="px-6 py-4">{value.unit}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ViewRecipe;
