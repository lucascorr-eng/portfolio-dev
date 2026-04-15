import { Link } from "react-router-dom";

function ContactCtaSection() {
  return (
    <>
      <div className="font-inter  text-sm px-6 mt-12 md:px-12 lg:w-full lg:max-w-480 lg:mx-auto">
        <div className="bg-mist-100 px-4 py-6 rounded-xl lg:flex lg:justify-between">
          <div className="grid mb-4">
            <h2 className="font-bold text-xl">vamos construir algo juntos?</h2>
            <p className="text-gray-500">
              aberto a freelas, colaborações e oportunidades de trabalho
            </p>
          </div>
          <div className="font-firaCode">
            <div className="mt-4 grid grid-cols-2 gap-3 lg:flex lg:items-center">
              <a
                href="https://github.com/lucascorr-eng"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl py-3 border border-gray-400 text-center lg:px-5"
              >
                github
              </a>
              <a
                href="https://www.linkedin.com/in/lucas-corr%C3%AAa-b09bbb34a/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl py-3 border border-gray-400 text-center lg:px-5"
              >
                linkedin
              </a>

              <Link
                to={"/contact"}
                className="mt-3 block rounded-xl py-3 bg-black text-white text-center w-full col-span-2 lg:mt-0 lg:px-5"
              >
                entrar em contato
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactCtaSection;
