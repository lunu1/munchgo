import Snowfall from 'react-snowfall';


const StoreLocator = () => {
  const stores = [
    {
      name: 'Azizi Riviera',
      image: 'rastaurant2.jpg', 
      mapLink: 'https://maps.app.goo.gl/gW3iZYLHivfwz2zH6',
    },
   
  ];

  return (
    <div className="py-12">
      
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-10 font-custom">Locate Our Stores</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8 px-4 max-w-6xl mx-auto">
       
        {stores.map((store, index) => (
          <div
          key={index}
          className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300 bg-white"
          >
            <Snowfall  snowflakeCount={100} color='red'/>
            {/* Store Image */}
            <img
              src={store.image}
              alt={store.name}
              className="w-full h-[50vh] object-cover group-hover:scale-105 transition duration-300 "
            />
            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-xl font-bold text-white">{store.name}</h3>
              <a
                href={store.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-2 bg-white text-black rounded-md font-medium shadow hover:bg-gray-100 transition"
              >
                View on Map
              </a>
            </div>
            {/* Label */}
            <div className="absolute top-4 left-4 bg-white bg-opacity-75 px-3 py-1 rounded-md text-sm font-semibold text-gray-800 shadow">
              {store.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreLocator;
