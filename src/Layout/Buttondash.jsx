

const Buttondash = ({ title, onClick }) => {
    return (
      <button 
        className="text-black bg-yellow-400 font-semibold px-5 py-2 rounded-md hover:bg-yellow-300 transition duration-200 ease-linear"
        onClick={onClick} // Attach onClick event handler
      >
        {title}
      </button>
    );
  };
  
  export default Buttondash;