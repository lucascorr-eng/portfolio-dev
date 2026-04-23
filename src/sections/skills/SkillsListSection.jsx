import DividerLine from "../../components/ui/DividerLine";
import code from "../../assets/icons/code.svg";

function SkillsListSection() {
  return (
    <>
      <div className="lg:grid-cols-2 lg:gap-x-8 lg:w-full lg:max-w-480 lg:mx-auto">
        <div className="lg:hidden">
          <DividerLine />
        </div>
        <div className="font-inter text-sm px-6">
          <div className="grid gap-4 mt-12 lg:mt-4">
            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 w-8 h-8 flex items-center justify-center rounded-md">
                  <img src={code} className="w-5 h-5" />
                </div>
                <p className="text-lg font-medium">frontend</p>
              </div>
              <p className="text-gray-500">4 techs</p>
            </div>

            <div className="grid lg:grid-cols-4 gap-4">
              <div className="border border-gray-500 p-4 rounded-xl">
                <div className="flex justify-between">
                  <p className=" text-lg">html</p>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <p className="text-gray-500">3 anos</p>
                  </div>
                </div>
                <p className="text-gray-500 mt-3">
                  estrutura semântica, SEO e acessibilidade.
                </p>
              </div>

              <div className="border border-gray-500 p-4 rounded-xl">
                <div className="flex justify-between">
                  <p className=" text-lg">css</p>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <p className="text-gray-500">3 anos</p>
                  </div>
                </div>
                <p className="text-gray-500 mt-3">
                  layouts responsivos, Flexbox, Grid e animações.
                </p>
              </div>

              <div className="border border-gray-500 p-4 rounded-xl">
                <div className="flex justify-between">
                  <p className=" text-lg">Tailwind CSS</p>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <p className="text-gray-500">1 ano</p>
                  </div>
                </div>
                <p className="text-gray-500 mt-3">
                  estilização via utilitários e Design Systems.
                </p>
              </div>

              <div className="border border-gray-500 p-4 rounded-xl">
                <div className="flex justify-between">
                  <p className=" text-lg">React</p>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <p className="text-gray-500">1 ano</p>
                  </div>
                </div>
                <p className="text-gray-500 mt-3">
                  componentização, Hooks e SPAs dinâmicas.
                </p>
              </div>
            </div>

            <DividerLine />
          </div>

          <div className="grid gap-4 mt-12">
            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 w-8 h-8 flex items-center justify-center rounded-md">
                  <img src={code} className="w-5 h-5" />
                </div>
                <p className="text-lg font-medium">backend</p>
              </div>
              <p className="text-gray-500">3 techs</p>
            </div>

            <div className="grid lg:grid-cols-4 gap-4">
              <div className="border border-gray-500 p-4 rounded-xl">
                <div className="flex justify-between">
                  <p className=" text-lg">Node.js</p>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <p className="text-gray-500">1 ano</p>
                  </div>
                </div>
                <p className="text-gray-500 mt-3">
                  APIs escaláveis, Express e ecossistema JavaScript.
                </p>
              </div>

              <div className="border border-gray-500 p-4 rounded-xl">
                <div className="flex justify-between">
                  <p className=" text-lg">APIs REST</p>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <p className="text-gray-500">1.5 anos</p>
                  </div>
                </div>
                <p className="text-gray-500 mt-3">
                  arquitetura, métodos HTTP e integração de dados.
                </p>
              </div>

              <div className="border border-gray-500 p-4 rounded-xl">
                <div className="flex justify-between">
                  <p className=" text-lg">Database </p>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <p className="text-gray-500">1.5 anos</p>
                  </div>
                </div>
                <p className="text-gray-500 mt-3">
                  modelagem de dados, consultas SQL e NoSQL.
                </p>
              </div>
            </div>

            <div>
              <DividerLine />
            </div>
          </div>

          <div className="grid gap-4 mt-12">
            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-100 w-8 h-8 flex items-center justify-center rounded-md">
                  <img src={code} className="w-5 h-5" />
                </div>
                <p className="text-lg font-medium">ia & dados</p>
              </div>
              <p className="text-gray-500">3 techs</p>
            </div>

            <div className="grid lg:grid-cols-4 gap-4">
              <div className="border border-gray-500 p-4 rounded-xl">
                <div className="flex justify-between">
                  <p className=" text-lg">OpenAI API</p>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <p className="text-gray-500">esporádico</p>
                  </div>
                </div>
                <p className="text-gray-500 mt-3">
                  integração de LLMs, engenharia de prompt e RAG.
                </p>
              </div>

              <div className="border border-gray-500 p-4 rounded-xl">
                <div className="flex justify-between">
                  <p className=" text-lg">Chatbots AI</p>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <p className="text-gray-500">esporádico</p>
                  </div>
                </div>
                <p className="text-gray-500 mt-3">
                  fluxos conversacionais e interfaces inteligentes.
                </p>
              </div>

              <div className="border border-gray-500 p-4 rounded-xl">
                <div className="flex justify-between">
                  <p className=" text-lg">Automações com IA</p>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <p className="text-gray-500">esporádico</p>
                  </div>
                </div>
                <p className="text-gray-500 mt-3">
                  otimização de workflows e processamento de dados.
                </p>
              </div>
            </div>

            <DividerLine />
          </div>

          <div className="grid gap-4 mt-12">
            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-blue-200 w-8 h-8 flex items-center justify-center rounded-md">
                  <img src={code} className="w-5 h-5" />
                </div>
                <p className="text-lg font-medium">ferramentas & devops </p>
              </div>
              <p className="text-gray-500">3 techs</p>
            </div>

            <div className="border border-gray-500 p-4 rounded-xl">
              <div className="flex justify-between">
                <p className=" text-lg">VS Code</p>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <p className="text-gray-500">3 anos</p>
                </div>
              </div>
              <p className="text-gray-500 mt-3">
                editor principal, extensões e produtividade no desenvolvimento.
              </p>
            </div>

            <div className="border border-gray-500 p-4 rounded-xl">
              <div className="flex justify-between">
                <p className=" text-lg">Git / GitHub</p>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <p className="text-gray-500">3 anos</p>
                </div>
              </div>
              <p className="text-gray-500 mt-3">
                controle de versão, Gitflow e colaboração em equipe.
              </p>
            </div>

            <div className="border border-gray-500 p-4 rounded-xl">
              <div className="flex justify-between">
                <p className=" text-lg">Figma</p>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <p className="text-gray-500">2 anos</p>
                </div>
              </div>
              <p className="text-gray-500 mt-3">
                prototipagem, UI Design e Handoff técnico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsListSection;
