import DividerLine from "../../components/ui/DividerLine";

function AboutInfoSection() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 font-inter text-sm text-black px-6 my-8 lg:px-0">
        <div className="rounded-lg bg-mist-100 p-3">
          <p className="text-gray-500">localização</p>
          <p className="text-base">Brasil </p>
        </div>
        <div className="rounded-lg bg-mist-100 p-3">
          <p className="text-gray-500">disponibilidade</p>
          <p className="text-base">aberto </p>
        </div>
        <div className="rounded-lg bg-mist-100 p-3">
          <p className="text-gray-500">foco atual</p>
          <p className="text-base">Node</p>
        </div>
        <div className="rounded-lg bg-mist-100 p-3">
          <p className="text-gray-500">stack fav.</p>
          <p className="text-base">React + Node </p>
        </div>
        <div className="rounded-lg bg-mist-100 p-3">
          <p className="text-gray-500">Inglês</p>
          <p className="text-base">Intermediário - B2</p>
        </div>
      </div>
      <div className="lg:hidden">
        <DividerLine />
      </div>
    </>
  );
}

export default AboutInfoSection;
