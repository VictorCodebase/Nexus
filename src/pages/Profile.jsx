import React ,{useEffect,useState} from 'react'

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(()=>{
        // fetching the user data from the local storage
        const storedUser = localStorage.getItem("user");
        if (storedUser){
            setUser(JSON.parse(storedUser));
        }
    },[])

    if(!user){
        return(
            <div className='flex items-center justify-center h-screen'>
                <p className='text-gray-500'>Loading Profile...</p>
            </div>
        );
    }
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4 py-4'>
        <div className='w-full max-w-3xl bg-white rounded-lg shadow-lg p-8'>
            <h1 className='text-3xl font-bold text-gray-800 text-center mb-6'>
                Profile
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                    <label
                     htmlFor="firstname"
                     className='block text-sm font-semibold text-gray-700'
                     >
                        First Name
                     </label>
                     <p className='mt-1 text-gray-800 w-fit bg-gray-100 px-3 py-2 rounded-lg'>
                        {user.fname}
                     </p>
                </div>
                <div>
                    <label
                     htmlFor="lastname"
                     className='block text-sm font-semibold text-gray-700'
                     >
                        Last Name
                     </label>
                     <p className='mt-1 text-gray-800 w-fit bg-gray-100 px-3 py-2 rounded-lg'>
                        {user.lname}
                     </p>
                </div>
                <div>
                    
                    <label
                     htmlFor="firstname"
                     className='block text-sm font-semibold text-gray-700'
                     >
                        UserName
                     </label>
                     <p className='mt-1 text-gray-800 w-fit bg-gray-100 px-3 py-2 rounded-lg'>
                        {user.username}
                     </p>
                </div>
                <div>
                    
                    <label
                     htmlFor="Email"
                     className='block text-sm font-semibold text-gray-700'
                     >
                        Email
                     </label>
                     <p className='mt-1 text-gray-800 w-fit bg-gray-100 px-3 py-2 rounded-lg'>
                        {user.email}
                     </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile