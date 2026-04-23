function SkillsLearningSection() {
  return (
    <div className="lg:grid-cols-2 lg:gap-x-8 lg:w-full lg:max-w-480 lg:mx-auto">
      <div className="font-inter text-sm text-green-950 p-6 ">
        <div className="border-2 border-green-700  rounded-xl p-4 bg-green-100">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-3 w-3 rounded-full bg-green-300"></div>
            <p className="font-medium">aprendendo agora — foco atual</p>
          </div>

          <div className="grid gap-3 lg:flex lg:justify-between">
            <div className="grid  border border-green-400 bg-white rounded-xl p-3 lg:w-full">
              <p className="text-lg font-medium">React avançado</p>
              <p className="text-green-700 mt-2">
                Otimização de renderização, padrões de design como HOCs e Render
                Props, além de gerenciamento de estado complexo e Performance
                Patterns.
              </p>
              <span className=" rounded-md bg-green-100 py-1 px-3 w-max mt-3">
                Frontend
              </span>
            </div>
            <div className="grid  border border-green-400 bg-white rounded-xl p-3 lg:w-full">
              <p className="text-lg font-medium">Node.js</p>
              <p className="text-green-700 mt-2">
                Desenvolvimento de arquiteturas escaláveis, mensageria, padrões
                de segurança em APIs e integração com serviços de nuvem.
              </p>
              <span className=" rounded-md bg-green-100 py-1 px-3 w-max mt-3">
                Backend
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsLearningSection;
