import Image from "next/image";
const Home = () => {
  return (
    <div className="p-3 h-screen flex justify-center select-none items-center text-center bg-cover bg-bottom bg-[url('../assets/bg.jpg')]">
      <div className="flex flex-col justify-center min-h-[400px] max-h-[600px] min-w-[400px] max-w-[600px] p-7 bg-grey-700/80  border-grey-600 border-[1px] rounded-xl backdrop-blur-sm">
        <div className="w-full flex justify-center items-center">
          <div className=" w-12 flex justify-center mb-6 ">
            <Image src={fthmLogo} alt="logo" className="m-0 p-0" />
          </div>
        </div>
        <form className="flex flex-col text-left">
          <input
            placeholder="Email"
            className="mb-4 text-sm border-grey-600 border-[1px] rounded-lg text-white p-2 active:border-primary-500 placeholder:text-grey-500 bg-transparent"
          ></input>
          <input
            placeholder="Password"
            className="mb-4 text-sm border-grey-600 border-[1px] rounded-lg text-white p-2 active:border-primary-500 placeholder:text-grey-500 bg-transparent"
          ></input>
          <div className="flex justify-end">
            <button className="hover:opacity-80 hover:scale-95 transition-all duration-150 bg-primary-400 border-[1px] border-primary-300 text-sm text-white rounded-lg w-2/5 py-2 px-6">
              Login
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-center items-end h-screen w-full absolute p-4">
        <q>If she eat she eat</q>
      </div>
    </div>
  );
};

export default Home;
