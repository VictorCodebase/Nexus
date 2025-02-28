import React from 'react'

const Sidebar = ({categories, selectedCategory, setSelectedCategory}) => {
  return (
    <aside className='w-1/4 bg-white px-4 py-4 shadow-md rounded-md h-full'>
        <h1 className='text-md font-bold mb-2'>
            Filter By Categories
        </h1>
        <ul>
            <li className={`py-2 cursor-pointer font-medium ${
                selectedCategory === 'All' ? 'text-blue-600' : 'hover:text-blue-600'
            
            }`}
            onClick={() => 
                // setSelectedCategories(category)
                console.log('All')
            
            }
            >
                All
            </li>
            {categories.map((category) => (
                <li
                    key={category}
                    className={`py-1 cursor-pointer ${
                        selectedCategory === category ? 'text-blue-600' : 'text-blue-500 hover:text-blue-700'
                    }`}
                    onClick={() => setSelectedCategory(category)}
                >
                    {category}
                </li>
            ))}
          
            
        </ul>

    </aside>
  )
}

export default Sidebar