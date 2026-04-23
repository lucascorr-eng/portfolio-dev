import DividerLine from "../../components/ui/DividerLine";

function AboutCuriositySection() {
  return (
    <>
      <DividerLine />
      <div className="font-inter text-sm px-6 text-gray-500 my-6 lg:w-full lg:max-w-480 lg:mx-auto">
        <h3 className="font-firaCode text-base">INTERESSES & CURIOSIDADES</h3>
        <div className="mt-4 flex flex-wrap gap-2 gap-x-4">
          <div className="flex justify-center px-1 py-1 rounded-md border border-gray-500">
            <p>⚙ arquitetura</p>
          </div>
          <div className="flex justify-center px-1 py-1 rounded-md border border-gray-500">
            <p>◎ open source</p>
          </div>
          <div className="flex justify-center px-1 py-1 rounded-md border border-gray-500">
            <p>△ cloud & devops</p>
          </div>
          <div className="flex justify-center px-1 py-1 rounded-md border border-gray-500">
            <p>◈ ui / ux</p>
          </div>
          <div className="flex justify-center px-1 py-1 rounded-md border border-gray-500">
            <p>◻ inteligência artificial</p>
          </div>
          <div className="flex justify-center px-1 py-1 rounded-md border border-gray-500">
            <p>● xadrez</p>
          </div>
        </div>
      </div>
      <DividerLine />
    </>
  );
}

export default AboutCuriositySection;
