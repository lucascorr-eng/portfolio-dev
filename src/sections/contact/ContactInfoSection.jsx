import clock from "../../assets/icons/clock.svg"

function ContactInfoSection() {
  return (
    <>
      <div className="font-inter text-sm px-6 my-6 text-gray-500">
        <div className="bg-mist-100 p-4 rounded-lg">
          <div className="flex items-center gap-3 ">
            <div className="w-2 h-2 rounded-full bg-green-600"></div>
            <p className="text-black text-base">disponível agora</p>
          </div>
          <p className="mt-3">
            aberto para freelas, projetos, colaborações open source e
            oportunidades — remoto ou híbrido.
          </p>
        </div>

        <div className="border border-gray-500 p-5 rounded-xl my-6">
          <p className="mb-2 font-firaCode text-base">TENHO INTERESSE EM</p>

          <div className="grid gap-1">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-600"></div>
              <p>projetos full stack com React + Node</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-600"></div>
              <p>aplicações com IA / LLMs</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-600"></div>
              <p>consultoria e code review</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-600"></div>
              <p>parcerias em startups early-stage</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-green-100 p-3 rounded-xl">
          <img src={clock} className="w-8 h-8" />
          <p className="text-green-900">
            resposta em menos de 24h por email. linkedin pode demorar um pouco
            mais.
          </p>
        </div>
      </div>
    </>
  );
}

export default ContactInfoSection;
