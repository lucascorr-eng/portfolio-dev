import arrow from "../../assets/icons/arrow-right.svg";
import { Link } from "react-router-dom";

function SkillsPreviewSection() {
  return (
    <>
      <div className="font-inter  text-sm px-6 mt-6">
        <div className="flex justify-between mb-4">
          <h2 className="font-bold text-xl">habilidades técnicas</h2>
          <Link to={"/skills"} className="flex items-center text-gray-500">
            ver todos <img src={arrow} alt="" className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid gap-5 font-firaCode">
          <div>
            <h3 className="text-gray-500 mb-2">FRONTEND</h3>
            <div className="grid gap-1">
              <div className="flex justify-between items-center">
                <p>React / Next.js</p>
                <div className="bg-gray-300 h-1 w-40 rounded-2xl">
                  <div
                    className="bg-green-500 h-full rounded-2xl"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p>TypeScript</p>
                <div className="bg-gray-300 h-1 w-40 rounded-2xl">
                  <div
                    className="bg-green-500 h-full rounded-2xl"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p>CSS / Tailwind</p>
                <div className="bg-gray-300 h-1 w-40 rounded-2xl">
                  <div
                    className="bg-green-500 h-full rounded-2xl"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-gray-500 mb-2">BACKEND</h3>
            <div className="grid gap-1">
              <div className="flex justify-between items-center">
                <p>Node.js</p>
                <div className="bg-gray-300 h-1 w-40 rounded-2xl">
                  <div
                    className="bg-green-500 h-full rounded-2xl"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p>Python</p>
                <div className="bg-gray-300 h-1 w-40 rounded-2xl">
                  <div
                    className="bg-green-500 h-full rounded-2xl"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p>PostgreSQL</p>
                <div className="bg-gray-300 h-1 w-40 rounded-2xl">
                  <div
                    className="bg-green-500 h-full rounded-2xl"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-gray-500 mb-2">IA & DADOS</h3>
            <div className="grid gap-1">
              <div className="flex justify-between items-center">
                <p>OpenAI API</p>
                <div className="bg-gray-300 h-1 w-40 rounded-2xl">
                  <div
                    className="bg-green-500 h-full rounded-2xl"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p>Pandas</p>
                <div className="bg-gray-300 h-1 w-40 rounded-2xl">
                  <div
                    className="bg-green-500 h-full rounded-2xl"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p>LangChain</p>
                <div className="bg-gray-300 h-1 w-40 rounded-2xl">
                  <div
                    className="bg-green-500 h-full rounded-2xl"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-gray-500 mb-2">FERRAMENTAS</h3>
            <div className="grid gap-1">
              <div className="flex justify-between items-center">
                <p>Docker</p>
                <div className="bg-gray-300 h-1 w-40 rounded-2xl">
                  <div
                    className="bg-green-500 h-full rounded-2xl"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p>Git / GitHub</p>
                <div className="bg-gray-300 h-1 w-40 rounded-2xl">
                  <div
                    className="bg-green-500 h-full rounded-2xl"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p>AWS</p>
                <div className="bg-gray-300 h-1 w-40 rounded-2xl">
                  <div
                    className="bg-green-500 h-full rounded-2xl"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsPreviewSection;
