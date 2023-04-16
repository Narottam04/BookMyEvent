const Loader = ({ message }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen h-screen ">
        <div className="dots-5"></div>
        <p className="font-title text-black  font-bold text-lg mt-2">{message}</p>
      </div>
    </>
  );
};

export default Loader;
