import arrow from "../../assets/icons/arrow-right.svg";
import DividerLine from "../../components/ui/DividerLine";
import logoMakerting from "../../assets/images/logoMakerting.png";
import logoGit from "../../assets/images/logoGit.png";
import logoRobot from "../../assets/images/logoRobot.png";
import { Link } from "react-router-dom";

function FeaturedProjectsSection() {
  return (
    <>
      <div className="font-inter  text-sm px-6 mt-6">
        <div className="flex justify-between">
          <h2 className="font-bold text-xl">projetos em destaque</h2>
          <Link to={"/projects"} className="flex items-center text-gray-500">
            ver todos <img src={arrow} alt="" className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid mt-6">
          <div className="flex gap-3 border border-gray-500 rounded-xl py-2 mb-6">
            <img src={logoMakerting} alt="" className="w-25 h-25" />
            <div className="grid gap-2 text-gray-500">
              <h3 className="text-lg text-black">E-commerce App</h3>
              <p className="">Loja com carrinho, pagamento e painel admin</p>
              <div className="font-firaCode flex gap-3">
                <span className="bg-mist-100 px-3 rounded-md">React</span>
                <span className="bg-mist-100 px-3 rounded-md">Node.js</span>
                <span className="bg-mist-100 px-3 rounded-md">Stripe</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3 border border-gray-500 rounded-xl py-2 mb-6">
            <img src={logoRobot} alt="" className="w-25 h-25" />
            <div className="grid gap-2 text-gray-500">
              <h3 className="text-lg text-black">E-commerce App</h3>
              <p className="">Loja com carrinho, pagamento e painel admin</p>
              <div className="font-firaCode flex gap-3">
                <span className="bg-mist-100 px-3 rounded-md">Python</span>
                <span className="bg-mist-100 px-3 rounded-md">FastAPI</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3 border border-gray-500 rounded-xl py-2 mb-6">
            <img src={logoGit} alt="" className="w-25 h-25" />
            <div className="grid gap-2 text-gray-500">
              <h3 className="text-lg text-black">Dashboard Analytics</h3>
              <p className="">Dados em tempo real com gráficos interativos</p>
              <div className="font-firaCode flex gap-3">
                <span className="bg-mist-100 px-3 rounded-md">Next.js</span>
                <span className="bg-mist-100 px-3 rounded-md">D3.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DividerLine />
    </>
  );
}

export default FeaturedProjectsSection;
