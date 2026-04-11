import DividerLine from "../../components/ui/dividerLine";
import code from "../../assets/icons/code.svg";

function SkillsListSection() {
  return (
    <>
      <DividerLine />
      <div className="font-inter text-sm px-6">
        <div className="grid gap-4 mt-12">
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 w-8 h-8 flex items-center justify-center rounded-md">
                <img src={code} className="w-5 h-5" />
              </div>
              <p className="text-lg font-medium">frontend</p>
            </div>
            <p className="text-gray-500">6 techs</p>
          </div>

          <div className="border border-gray-500 p-4 rounded-xl">
            <div className="flex justify-between">
              <p className=" text-lg">React</p>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <p className="text-gray-500">3 anos</p>
              </div>
            </div>
            <p className="text-gray-500 mt-3">
              hooks, context, performance e SSR com Next.js
            </p>
          </div>

          <div className="border border-gray-500 p-4 rounded-xl">
            <div className="flex justify-between">
              <p className=" text-lg">Next.js</p>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <p className="text-gray-500">2 anos</p>
              </div>
            </div>
            <p className="text-gray-500 mt-3">
              app router, server components, ISR e Vercel
            </p>
          </div>

          <div className="border border-gray-500 p-4 rounded-xl">
            <div className="flex justify-between">
              <p className=" text-lg">TypeScript</p>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <p className="text-gray-500">1.5 anos</p>
              </div>
            </div>
            <p className="text-gray-500 mt-3">
              tipagem em projetos reais, interfaces e generics
            </p>
          </div>

          <div className="border border-gray-500 p-4 rounded-xl">
            <div className="flex justify-between">
              <p className=" text-lg">Tailwind CSS</p>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <p className="text-gray-500">2 anos</p>
              </div>
            </div>
            <p className="text-gray-500 mt-3">
              design systems, responsivo e temas customizados
            </p>
          </div>

          <div className="border border-gray-500 p-4 rounded-xl">
            <div className="flex justify-between">
              <p className=" text-lg">Figma</p>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <p className="text-gray-500">esporádico</p>
              </div>
            </div>
            <p className="text-gray-500 mt-3">
              prototipação, componentes e handoff
            </p>
          </div>

          <div className="border border-gray-500 p-4 rounded-xl">
            <div className="flex justify-between">
              <p className=" text-lg">React Native</p>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <p className="text-gray-500">1 projeto</p>
              </div>
            </div>
            <p className="text-gray-500 mt-3">
              apps mobile com Expo e navegação
            </p>
          </div>
          <DividerLine />
        </div>

        <div className="grid gap-4 mt-12">
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 w-8 h-8 flex items-center justify-center rounded-md">
                <img src={code} className="w-5 h-5" />
              </div>
              <p className="text-lg font-medium">backend</p>
            </div>
            <p className="text-gray-500">3 techs</p>
          </div>

          <div className="border border-gray-500 p-4 rounded-xl">
            <div className="flex justify-between">
              <p className=" text-lg">React</p>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <p className="text-gray-500">3 anos</p>
              </div>
            </div>
            <p className="text-gray-500 mt-3">
              hooks, context, performance e SSR com Next.js
            </p>
          </div>

          <div className="border border-gray-500 p-4 rounded-xl">
            <div className="flex justify-between">
              <p className=" text-lg">Next.js</p>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <p className="text-gray-500">2 anos</p>
              </div>
            </div>
            <p className="text-gray-500 mt-3">
              app router, server components, ISR e Vercel
            </p>
          </div>

          <div className="border border-gray-500 p-4 rounded-xl">
            <div className="flex justify-between">
              <p className=" text-lg">TypeScript</p>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <p className="text-gray-500">1.5 anos</p>
              </div>
            </div>
            <p className="text-gray-500 mt-3">
              tipagem em projetos reais, interfaces e generics
            </p>
          </div>
          <DividerLine />
        </div>

        <div className="grid gap-4 mt-12">
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-yellow-100 w-8 h-8 flex items-center justify-center rounded-md">
                <img src={code} className="w-5 h-5" />
              </div>
              <p className="text-lg font-medium">ia & dados</p>
            </div>
            <p className="text-gray-500">3 techs</p>
          </div>

          <div className="border border-gray-500 p-4 rounded-xl">
            <div className="flex justify-between">
              <p className=" text-lg">Tailwind CSS</p>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <p className="text-gray-500">2 anos</p>
              </div>
            </div>
            <p className="text-gray-500 mt-3">
              design systems, responsivo e temas customizados
            </p>
          </div>

          <div className="border border-gray-500 p-4 rounded-xl">
            <div className="flex justify-between">
              <p className=" text-lg">Figma</p>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <p className="text-gray-500">esporádico</p>
              </div>
            </div>
            <p className="text-gray-500 mt-3">
              prototipação, componentes e handoff
            </p>
          </div>

          <div className="border border-gray-500 p-4 rounded-xl">
            <div className="flex justify-between">
              <p className=" text-lg">React Native</p>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <p className="text-gray-500">1 projeto</p>
              </div>
            </div>
            <p className="text-gray-500 mt-3">
              apps mobile com Expo e navegação
            </p>
          </div>

          <DividerLine />
        </div>

        <div className="grid gap-4 mt-12">
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-blue-200 w-8 h-8 flex items-center justify-center rounded-md">
                <img src={code} className="w-5 h-5" />
              </div>
              <p className="text-lg font-medium">ferramentas & devops </p>
            </div>
            <p className="text-gray-500">6 techs</p>
          </div>

          <div className="border border-gray-500 p-4 rounded-xl">
            <div className="flex justify-between">
              <p className=" text-lg">React</p>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <p className="text-gray-500">3 anos</p>
              </div>
            </div>
            <p className="text-gray-500 mt-3">
              hooks, context, performance e SSR com Next.js
            </p>
          </div>

          <div className="border border-gray-500 p-4 rounded-xl">
            <div className="flex justify-between">
              <p className=" text-lg">Next.js</p>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <p className="text-gray-500">2 anos</p>
              </div>
            </div>
            <p className="text-gray-500 mt-3">
              app router, server components, ISR e Vercel
            </p>
          </div>

          <div className="border border-gray-500 p-4 rounded-xl">
            <div className="flex justify-between">
              <p className=" text-lg">TypeScript</p>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <p className="text-gray-500">1.5 anos</p>
              </div>
            </div>
            <p className="text-gray-500 mt-3">
              tipagem em projetos reais, interfaces e generics
            </p>
          </div>

          <div className="border border-gray-500 p-4 rounded-xl">
            <div className="flex justify-between">
              <p className=" text-lg">Tailwind CSS</p>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <p className="text-gray-500">2 anos</p>
              </div>
            </div>
            <p className="text-gray-500 mt-3">
              design systems, responsivo e temas customizados
            </p>
          </div>

          <div className="border border-gray-500 p-4 rounded-xl">
            <div className="flex justify-between">
              <p className=" text-lg">Figma</p>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <p className="text-gray-500">esporádico</p>
              </div>
            </div>
            <p className="text-gray-500 mt-3">
              prototipação, componentes e handoff
            </p>
          </div>

          <div className="border border-gray-500 p-4 rounded-xl">
            <div className="flex justify-between">
              <p className=" text-lg">React Native</p>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <p className="text-gray-500">1 projeto</p>
              </div>
            </div>
            <p className="text-gray-500 mt-3">
              apps mobile com Expo e navegação
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsListSection;
