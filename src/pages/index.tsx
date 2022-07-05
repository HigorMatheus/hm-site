import { Header } from '../components/Header';

function Home() {
  return (
    <div className="min-h-screen h-full bg-gray-900  items-center">
      <Header />
      <div className="container p-2 sm:text-sm m-auto flex flex-wrap gap-2 bg-[#0F0D0D] rounded-2xl mt-4 items-center justify-around">
        <div className="gap-11 w-full flex rounded-2xl  bg-gray-900 items-center">
          <img
            className="h-96 w-64 place-items-stretch rounded-2xl items-stretch object-cover"
            src="./picwish.png"
            alt="Higor Matheus"
          />
          <h1 className="text-gray-300 text-center text-2xl leading-relaxed">
            Olá sou o Higor Matheus
            <br />
            Front end Developer
          </h1>
        </div>

        {/* <h1 className="text-gray-300 w-80 bg-slate-400 text-center p-2">
          estamos aqui para construir, o futuro através da tecnologia
        </h1>
        <h1 className="text-gray-300 w-80 bg-slate-400 text-center p-2">
          estamos aqui para construir, o futuro através da tecnologia
        </h1>
        <h1 className="text-gray-300 w-80 bg-slate-400 text-center p-2">
          estamos aqui para construir, o futuro através da tecnologia
        </h1> */}
      </div>
    </div>
  );
}

export default Home;
