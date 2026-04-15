import AboutInfoSection from "../../sections/about/AboutInfoSection";
import DividerLine from "../../components/ui/DividerLine";

function AboutHeroSection() {
  return (
    <>
      <div className="font-inter text-sm px-6 lg:hidden">
        <div className="grid justify-items-center text-center ">
          <div className="flex justify-center items-center border border-gray-500 rounded-2xl bg-green-100 w-30 h-30">
            <p className="text-green-800 text-5xl font-semibold">LC</p>
          </div>
          <p className="text-green-700 font-firaCode mt-4">// olá, mundo!</p>
          <h1 className="text-3xl font-bold mb-2">Lucas Corrêa</h1>
          <p className="text-gray-500 mb-6">
            dev full stack — construindo coisas que funcionam e ficam bonitas
          </p>
          <div className="flex gap-4 m-auto">
            <a
              href="https://github.com/lucascorr-eng"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 border border-gray-500 py-1 px-4 rounded-lg"
            >
              github
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-corr%C3%AAa-b09bbb34a/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 border border-gray-500 py-1 px-3 rounded-lg"
            >
              linkedin
            </a>
            <a
              href="https://www.youtube.com/@lcs-engsoft"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 border border-gray-500 py-1 px-3 rounded-lg"
            >
              youtube
            </a>
          </div>
        </div>

        <div className="text-gray-500 text-justify">
          <p className="mt-4">
            Oi! Sou estudante de{" "}
            <span className="text-black">Engenharia de Software</span>{" "}
            apaixonado por transformar problemas reais em código elegante. Gosto
            tanto do frontend bonito quanto de garantir que o backend aguente o
            tranco.
          </p>
          <p className="mt-4">
            Quando não estou codando, estou lendo sobre arquitetura,
            contribuindo com open source ou tentando vencer algum bug às 2 da
            manhã ☕
          </p>
        </div>
      </div>
      <div className="font-inter text-sm px-6 hidden lg:block lg:gap-x-8 lg:w-full lg:max-w-480 lg:mx-auto">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-20 sm:hidden md:hidden">
          <div className="text-center ">
            <div className="grid justify-items-center mt-6">
              <div className="flex justify-center items-center border border-gray-500 rounded-2xl bg-green-100 w-50 h-50">
                <p className="text-green-800 text-5xl font-semibold">LC</p>
              </div>
              <p className="text-gray-500 my-6 px-4">
                dev full stack — construindo coisas que funcionam e ficam
                bonitas
              </p>
              <div className="flex gap-4 m-auto">
                <a
                  href="https://github.com/lucascorr-eng"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500 border border-gray-500 py-1 px-4 rounded-lg"
                >
                  github
                </a>
                <a
                  href="https://www.linkedin.com/in/lucas-corr%C3%AAa-b09bbb34a/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500 border border-gray-500 py-1 px-3 rounded-lg"
                >
                  linkedin
                </a>
                <a
                  href="https://www.youtube.com/@lcs-engsoft"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500 border border-gray-500 py-1 px-3 rounded-lg"
                >
                  youtube
                </a>
              </div>
            </div>
          </div>

          <div className="text-gray-500 text-justify px-6">
            <div>
              <p className="text-green-700 font-firaCode mt-4">
                // olá, mundo!
              </p>
              <h1 className="text-3xl font-bold mb-2 text-black">Lucas Corrêa</h1>
            </div>
            <p className="mt-4">
              Oi! Sou estudante de{" "}
              <span className="text-black">Engenharia de Software</span>{" "}
              apaixonado por transformar problemas reais em código elegante.
              Gosto tanto do frontend bonito quanto de garantir que o backend
              aguente o tranco.
            </p>
            <p className="mt-2">
              Quando não estou codando, estou lendo sobre arquitetura,
              contribuindo com open source ou tentando vencer algum bug às 2 da
              manhã ☕
            </p>
            <div >
              <AboutInfoSection />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex">
      <DividerLine/>
      </div>
    </>
  );
}

export default AboutHeroSection;
