import DividerLine from "../../components/ui/DividerLine";

function ProjectsHeroSection() {
  return (
    <>
      <div className="font-inter  text-sm px-6 lg:w-full lg:max-w-480 lg:mx-auto">
        <p className="text-green-700 font-firaCode">// projetos</p>
        <h1 className="text-3xl font-bold mb-2">coisas que construí</h1>
        <p className="text-gray-500 mb-5">
          projetos pessoais, acadêmicos e freelances — código, lógica e aplicações na prática.
        </p>
        <div className="flex gap-2 mb-6">
          <span className="text-black">3</span>
          <p className="text-gray-500">projetos no total</p>
        </div>
      </div>

      <DividerLine />
    </>
  );
}

export default ProjectsHeroSection;
