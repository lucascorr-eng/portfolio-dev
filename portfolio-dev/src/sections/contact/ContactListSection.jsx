import email from "../../assets/icons/email.svg";
import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import phone from "../../assets/icons/phone.svg";
import youtube from "../../assets/icons/youtube.svg";

function ContactListSection() {
  return (
    <>
      <div className="grid gap-3 font-inter text-sm px-6 my-6">
        <div className="flex items-center justify-between border border-gray-500 rounded-xl p-2">
          <div className="flex gap-4 items-center">
            <div className="bg-blue-100 w-10 h-10 rounded-md flex items-center justify-center">
              <img src={email} className="w-7 h-7 " />
            </div>
            <div>
              <p className="text-gray-500 font-firaCode">
                email — preferencial
              </p>
              <a className="text-base">lucas.engsoftwareee@gmail.com</a>
              <p className="text-gray-500">respondo em até 24h</p>
            </div>
          </div>
          <div>
            <span>↗</span>
          </div>
        </div>

        <a
          href="https://github.com/lucascorr-eng"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between border border-gray-500 rounded-xl p-2"
        >
          <div className="flex gap-4 items-center">
            <div className="bg-gray-200 w-10 h-10 rounded-md flex items-center justify-center">
              <img src={github} className="w-7 h-7 " />
            </div>
            <div>
              <p className="text-gray-500 font-firaCode">github</p>
              <a className="text-base">github.com/lucascorr-eng</a>
              <p className="text-gray-500">projetos & contribuições</p>
            </div>
          </div>
          <div>
            <span>↗</span>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/lucas-corr%C3%AAa-b09bbb34a/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between border border-gray-500 rounded-xl p-2"
        >
          <div className="flex gap-4 items-center">
            <div className="bg-blue-100 w-10 h-10 rounded-md flex items-center justify-center">
              <img src={linkedin} className="w-6 h-6 " />
            </div>
            <div>
              <p className="text-gray-500 font-firaCode">linkedin</p>
              <a className="text-base">linkedin.com/in/lucas-corr</a>
              <p className="text-gray-500">trajetória & experiências</p>
            </div>
          </div>
          <div>
            <span>↗</span>
          </div>
        </a>

        <a
          href="https://www.youtube.com/@lcs-engsoft"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between border border-gray-500 rounded-xl p-2"
        >
          <div className="flex gap-4 items-center">
            <div className="bg-red-100 w-10 h-10 rounded-md flex items-center justify-center">
              <img src={youtube} className="w-7 h-7 " />
            </div>
            <div>
              <p className="text-gray-500 font-firaCode">youtube</p>
              <a className="text-base">youtube.com/@lcs-engsoft</a>
              <p className="text-gray-500">interação com a comunidade</p>
            </div>
          </div>
          <div>
            <span>↗</span>
          </div>
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=5538992371650&text=Oi%2C%20vim%20pelo%20seu%20link!"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between border border-gray-500 rounded-xl p-2"
        >
          <div className="flex gap-4 items-center">
            <div className="bg-green-100 w-10 h-10 rounded-md flex items-center justify-center">
              <img src={phone} className="w-7 h-7 " />
            </div>
            <div>
              <p className="text-gray-500 font-firaCode">whatsapp / telefone</p>
              <a className="text-base">+55 (38) 9 9237-1650</a>
              <p className="text-gray-500">apenas para projetos</p>
            </div>
          </div>
          <div>
            <span>↗</span>
          </div>
        </a>
      </div>
    </>
  );
}

export default ContactListSection;
