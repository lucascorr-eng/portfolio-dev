import arrow from "../../assets/icons/arrow-right.svg";
import DividerLine from "../../components/ui/DividerLine";
import git from "../../assets/icons/git.svg"
import task from "../../assets/icons/task.svg"
import movie from "../../assets/icons/movie.svg"
import { Link } from "react-router-dom";

function FeaturedProjectsSection() {
  return (
    <>
      <div className="font-inter  text-sm px-6 mt-6 md:px-12 lg:w-full lg:max-w-480 lg:mx-auto">
        <div className="flex justify-between">
          <h2 className="font-bold text-xl">projetos em destaque</h2>
          <Link to={"/projects"} className="flex items-center text-gray-500">
            ver todos <img src={arrow} alt="" className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid mt-6 lg:grid lg:grid-cols-3 lg:gap-4 ">
          <div className="flex gap-3 border border-gray-500 rounded-xl py-2 mb-6 lg:grid lg:py-0 overflow-hidden">
            <div className="bg-blue-100 w-25 h-35 items-center justify-center flex lg:w-full ">
              <img src={git} alt="" className="w-10 h-10" />
            </div>
            <div className="grid gap-2 text-gray-500 lg:pb-3 lg:px-4">
              <h3 className="text-lg text-black">GitHub User Search</h3>
              <p className="">
                Busca de usuários do GitHub com consumo de API, exibindo
                repositórios e informações em tempo real.
              </p>
              <div className="font-firaCode flex flex-wrap gap-3 items-center">
                <span className="bg-mist-100 px-3 rounded-md">JavaScript </span>
                <span className="bg-mist-100 px-3 rounded-md">React</span>
                <span className="bg-mist-100 px-3 rounded-md">GitHub API</span>
                <span className="bg-mist-100 px-3 rounded-md">CSS</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3 border border-gray-500 rounded-xl py-2 mb-6 lg:grid lg:py-0 overflow-hidden">
            <div className="bg-green-100 w-25 h-35 items-center justify-center flex lg:w-full ">
              <img src={task} alt="" className="w-10 h-10" />
            </div>
            <div className="grid gap-2 text-gray-500 lg:pb-3 lg:px-4">
              <h3 className="text-lg text-black">Task Manager</h3>
              <p className="">Aplicação de gerenciamento de tarefas com foco em componentização, estado e persistência local.</p>
              <div className="font-firaCode flex flex-wrap gap-3 items-center">
                <span className="bg-mist-100 px-3 rounded-md">React</span>
                <span className="bg-mist-100 px-3 rounded-md">CSS</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3 border border-gray-500 rounded-xl py-2 mb-6 lg:grid lg:py-0 overflow-hidden">
            <div className="bg-red-100 w-25 h-35 items-center justify-center flex lg:w-full ">
              <img src={movie} alt="" className="w-10 h-10" />
            </div>
            <div className="grid gap-2 text-gray-500 lg:pb-3 lg:px-4">
              <h3 className="text-lg text-black">Movie & Series Search</h3>
              <p className="">Busca de filmes e séries via API, com exibição dinâmica de dados e interface responsiva.</p>
              <div className="font-firaCode flex flex-wrap gap-3 items-center">
                <span className="bg-mist-100 px-3 rounded-md">JavaScript </span>
                <span className="bg-mist-100 px-3 rounded-md">API REST</span>
                <span className="bg-mist-100 px-3 rounded-md">HTML / CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DividerLine />
    </>
  );
}

export default FeaturedProjectsSection;
