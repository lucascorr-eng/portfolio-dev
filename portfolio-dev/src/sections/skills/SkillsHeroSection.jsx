function SkillsHeroSection() {
  return (
    <>
      <div className="font-inter text-sm px-6">
        <p className="text-green-700 font-firaCode">// stack & skills</p>
        <h1 className="text-3xl font-bold mb-2">o que eu sei fazer</h1>
        <p className="text-gray-500 mb-10">
          tecnologias que já usei em projetos reais — sem blá-blá-blá de
          "proficiência em Office".
        </p>

        <div className="grid gap-2 text-gray-500">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-green-400 h-3 w-3"></div>
            <p>avançado — projetos sólidos</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-blue-400 h-3 w-3"></div>
            <p>expert — uso no dia a dia, produção</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-yellow-400 h-3 w-3"></div>
            <p>intermediário — ainda evoluindo</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-purple-400 h-3 w-3"></div>
            <p>aprendendo — em progresso</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsHeroSection;
