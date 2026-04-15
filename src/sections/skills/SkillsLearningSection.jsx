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
              <p className="text-lg font-medium">AWS (Cloud)</p>
              <p className="text-green-700 mt-2">EC2, S3, Lambda e infraestrutura em nuvem</p>
              <span className=" rounded-md bg-green-100 py-1 px-3 w-max mt-3">DevOps</span>
            </div>
            <div className="grid  border border-green-400 bg-white rounded-xl p-3 lg:w-full">
              <p className="text-lg font-medium">LangChain</p>
              <p className="text-green-700 mt-2">Pipelines com LLMs, RAG e agentes em Python</p>
              <span className=" rounded-md bg-green-100 py-1 px-3 w-max mt-3">IA / LLM</span>
            </div>
            <div className="grid  border border-green-400 bg-white rounded-xl p-3 lg:w-full">
              <p className="text-lg font-medium">TypeScript avançado</p>
              <p className="text-green-700 mt-2">Genéricos, decorators e design patterns</p>
              <span className=" rounded-md bg-green-100 py-1 px-3 w-max mt-3">Frontend</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsLearningSection;
