import DividerLine from "../../components/ui/DividerLine";

function ContactHeroSection() {
  return (
    <>
      <div className="font-inter text-sm px-6 mb-8">
        <div>
          <p className="text-green-700 font-firaCode">// contato</p>
          <h1 className="text-3xl font-bold mb-2">
            bora trocar uma <span>ideia?</span>
          </h1>
          <p className="text-gray-500 mb-8">
            seja para um projeto, freela, oportunidade ou só um papo sobre
            tecnologia — estou por aqui.
          </p>
        </div>
      </div>
      <DividerLine />
    </>
  );
}

export default ContactHeroSection;
