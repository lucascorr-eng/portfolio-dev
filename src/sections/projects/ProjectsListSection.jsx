import DividerLine from "../../components/ui/DividerLine";
import git from "../../assets/icons/git.svg";
import task from "../../assets/icons/task.svg";
import movie from "../../assets/icons/movie.svg"

function ProjectsListSection() {
  return (
    <>
      <div className="grid font-inter text-sm px-6 lg:grid lg:grid-cols-3 gap-6 py-8">
        <div className="grid text-gray-500">
          <div className=" border border-gray-500 rounded-md overflow-hidden">
            <div className="h-35 bg-blue-100 flex items-center justify-center">
              <img src={git} className="h-20 w-20" />
            </div>
            <div className="py-5 px-3">
              <h3 className="text-black text-lg">GitHub User Search</h3>
              <p className="mt-2">
                Busca de usuários do GitHub com consumo de API, exibindo
                repositórios e informações em tempo real.
              </p>
              <div className="font-firaCode flex flex-wrap gap-3 my-5">
                <span className="bg-mist-100 px-3 rounded-md">JavaScript </span>
                <span className="bg-mist-100 px-3 rounded-md">React</span>
                <span className="bg-mist-100 px-3 rounded-md">GitHub API</span>
                <span className="bg-mist-100 px-3 rounded-md">CSS</span>
              </div>
              <DividerLine />
              <div className="flex gap-6 mt-2">
                <a
                  href="https://search-github-api-bx6p.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ↗ demo
                </a>
                <a
                  href="https://github.com/lucascorr-eng/search-github-api"
                  target="_blank"
                  rel="noreferrer"
                >
                  ⌥ github
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid text-gray-500">
          <div className=" border border-gray-500 rounded-md overflow-hidden">
            <div className="h-35 bg-green-100 flex items-center justify-center">
              <img src={task} className="h-20 w-20" />
            </div>
            <div className="py-5 px-3">
              <h3 className="text-black text-lg">Task Manager</h3>
              <p className="mt-2">
                Aplicação de gerenciamento de tarefas com foco em
                componentização, estado e persistência local.
              </p>
              <div className="font-firaCode flex flex-wrap gap-3 my-5">
                <span className="bg-mist-100 px-3 rounded-md">React</span>
                <span className="bg-mist-100 px-3 rounded-md">CSS</span>
              </div>
              <DividerLine />
              <div className="flex gap-6 mt-2">
                <a
                  href="https://todo-list-react-five-tawny.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ↗ demo
                </a>
                <a
                  href="https://github.com/lucascorr-eng/todo-list-react"
                  target="_blank"
                  rel="noreferrer"
                >
                  ⌥ github
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid text-gray-500">
          <div className=" border border-gray-500 rounded-md overflow-hidden">
            <div className="h-35 bg-red-100 flex items-center justify-center">
              <img src={movie} className="h-20 w-20" />
            </div>
            <div className="py-5 px-3">
              <h3 className="text-black text-lg">Movie & Series Search</h3>
              <p className="mt-2">
                Busca de filmes e séries via API, com exibição dinâmica de dados
                e interface responsiva.
              </p>
              <div className="font-firaCode flex flex-wrap gap-3 my-5">
                <span className="bg-mist-100 px-3 rounded-md">JavaScript </span>
                <span className="bg-mist-100 px-3 rounded-md">API REST</span>
                <span className="bg-mist-100 px-3 rounded-md">HTML / CSS</span>
              </div>
              <DividerLine />
              <div className="flex gap-6 mt-2">
                <a
                  href="https://lucascorr-eng.github.io/the_movie/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ↗ demo
                </a>
                <a
                  href="https://github.com/lucascorr-eng/the_movie"
                  target="_blank"
                  rel="noreferrer"
                >
                  ⌥ github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsListSection;
