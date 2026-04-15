import { Link } from "react-router-dom";
import DividerLine from "../../components/ui/DividerLine";

function HeroSection() {
  return (
    <>
      <div className="grid font-inter text-sm px-6 md:px-12 lg:grid-cols-2 lg:gap-x-8 lg:w-full lg:max-w-480 lg:mx-auto">
        <div className="order-1">
          <div className="bg-green-100 font-firaCode text-xs font-medium text-green-700 rounded-2xl inline-flex  items-center gap-2 px-4 py-1 mb-5">
            <span className="h-2 w-2 bg-green-700 rounded-full "></span>
            <p>disponível para trabalho</p>
          </div>
        </div>

        <div className="order-2 lg:order-3 lg:w-70">
          <h1 className="text-3xl font-bold mb-5">
            Dev <span className="text-green-700">Full Stack</span> & criador
          </h1>
          <p className="text-gray-500 mb-5">
            Construo interfaces que as pessoas adoram usar e sistemas que
            escalam com elegância. Código limpo, UX bem pensada.
          </p>
        </div>

        <div className="bg-gray-900 text-xs p-3 mb-5 rounded-lg font-firaCode text-mist-700 grid gap-1.5 order-3 lg:order-4">
          <p>
            1{" "}
            <span className="text-white">
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-400">dev</span> = {"{"}
            </span>
          </p>
          <p>
            2{" "}
            <span className="text-white">
              <span className="text-amber-400">nome</span>:{" "}
              <span className="text-green-400">"Lucas Corrêa"</span>,
            </span>
          </p>
          <p>
            3{" "}
            <span className="text-white">
              <span className="text-amber-400">stack</span> : {"["}{" "}
              <span className="text-green-400">"React"</span>,{" "}
              <span className="text-green-400">"Node"</span>
              {"]"}
            </span>
          </p>
          <p>
            4 <span className="text-mist-500">// sempre aprendendo...</span>
          </p>
          <p>
            5 <span className="text-white">{"}"}</span>
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 text-center order-4 lg:order-6">
          <div className="bg-mist-100 rounded-xl  py-2">
            <p className="font-bold text-xl">12+</p>
            <span className="text-xs text-gray-500">projeto</span>
          </div>
          <div className="bg-mist-100 rounded-xl py-2">
            <p className="font-bold text-xl">3 anos</p>
            <span className="text-xs text-gray-500">experiência</span>
          </div>
          <div className="bg-mist-100 rounded-xl py-2">
            <p className="font-bold text-xl">open src</p>
            <span className="text-xs text-gray-500">contrib.</span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 order-5 lg:order-5 lg:mt-4 lg:flex ">
          <Link
            to="/projects"
            className="block rounded-xl py-3 bg-black text-white text-center lg:px-4"
          >
            ver projetos
          </Link>
          <a
            href="../../assets/pdfs/cv-template.pdf"
            download
            className="text-center rounded-xl py-3 border border-gray-400 lg:px-4"
          >
            baixar CV
          </a>
        </div>
        <div className="lg:order-2"></div>
      </div>

      <div className="mt-8">
        <DividerLine />
      </div>
    </>
  );
}

export default HeroSection;
