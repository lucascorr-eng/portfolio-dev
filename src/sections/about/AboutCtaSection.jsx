import { Link } from "react-router-dom";

function AboutCtaSection() {
  return (
    <>
      <div className="font-inter  text-sm px-6 mt-8">
        <div className="bg-mist-100 px-4 py-6 rounded-xl lg:flex lg:justify-between">
          <div className="grid mb-4">
            <h2 className="font-bold text-xl">bora trocar uma ideia?</h2>
            <p className="text-gray-500">
              aberto para projetos interessantes, freelas ou um papo sobre
              tecnologia
            </p>
          </div>
          <div className="font-firaCode">
            <Link
              to={"/contact"}
              className="text-center block mt-3 rounded-xl py-3 bg-black text-white w-full lg:px-6"
            >
              entrar em contato
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutCtaSection;
