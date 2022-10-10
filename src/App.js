import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-gray-100 h-full flex flex-col">
      {/* navbar */}
      <Navbar />
      {/* header */}
      <div className="flex w-[90%] mx-auto justify-evenly mb-10 bg-white">
        <div className='bg-emerald-500 w-1/3'>
          <p className="text-gray-800 lg:text-4xl flex flex-col items-center bg-white">Adara roto</p>
        </div>
        <img src="/images/img-header.jpg" alt="bureau adara roto" className='max-h-[70vh]' />
        <div className='bg-white w-1/3' />
      </div>
      {/* body */}
      <div className="bg-white lg:w-[70%] mx-auto p-4 flex flex-col shadow-md border mb-10 ">
        <div className="flex">
          <img
            src="/images/citernes.png"
            alt="citernes adara"
            className="lg:max-h-60 border-r-2 border-r-green-500 pr-4"
          />
          <div className=" ml-[10%]">
            <h1 className="lg:text-4xl font-semibold border-b-2 border-b-green-500 pb-2 max-w-fit mb-3 ">
              Adara roto c'est quoi ?
            </h1>
            <p className=" font-semibold max-w-2xl text-lg text-gray-800">
              Adara roto est une entreprise spécialisée dans la vente de
              citernes alimentaires en plastique , spécialement "Polyethylene"
              <br />
              toutes nos citernes ont un nombre de 3 couches:
            </p>
            {/* couches */}
            <div className="flex mx-auto mt-5 justify-evenly">
              <div className="flex flex-col items-center">
                <div className="w-20 h-11 rounded-full bg-gray-300" />
                <p className='font-semibold'>Gris</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-11 rounded-full bg-black" />
                <p className='font-semibold'>Noir</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-11 rounded-full bg-white shadow border" />
                <p className='font-semibold'>Blanc</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
