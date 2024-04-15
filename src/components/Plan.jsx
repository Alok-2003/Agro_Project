import React from 'react';

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
      {/* Left Side */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src='https://images.pexels.com/photos/7286654/pexels-photo-7286654.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://images.pexels.com/photos/2468399/pexels-photo-2468399.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://images.pexels.com/photos/1382102/pexels-photo-1382102.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt='/'
        />
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src='https://images.pexels.com/photos/11070641/pexels-photo-11070641.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://images.pexels.com/photos/15876334/pexels-photo-15876334.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt='/'
        />
      </div>
      {/* Right Side */}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>Features:Empowering Farmers, NGOs, and Restaurants</h3>
        <p className='text-2xl py-6'>
        Discover the unique features that bring together farmers, NGOs, and restaurants for a sustainable agri-community
        </p>
        <p className='pb-6'> <b>1-Direct Access to Fresh Produce:</b> Connect directly with local farmers to access fresh and organic produce </p> <p className='pb-6'> <b>2- Collaboration Opportunities:</b> Engage with NGOs for community projects and sustainable farming practices </p> <p className='pb-6'> <b>3-Farm-to-Table Experience:</b> Restaurants can source ingredients directly from farmers for a farm-to-table dining experience </p> <p className='pb-6'> <b>4-Support Local Communities:</b> Contribute to the growth of local farming communities and promote sustainable practices </p> 


        <div>
          <button className='border-black mr-4 hover:shadow-xl'>
            Learn More
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Plan;
