function AboutCollegeSection() {
  return (
    <>
      <div className="font-inter text-sm px-6 my-10 lg:grid-cols-2 lg:gap-x-8 lg:w-full lg:max-w-480 lg:mx-auto">
        <h3 className="font-firaCode text-base text-gray-500 mb-6">
          FORMAÇÃO ACADÊMICA
        </h3>

        <div className="grid border border-gray-500 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg">Engenharia de Software</h2>
            <div className="flex items-center gap-3 bg-green-100 rounded-xl h-6 px-4">
              <div className="h-3 w-3 bg-green-300 rounded-full "></div>
              <p>cursando</p>
            </div>
          </div>
          <p className="text-gray-500">Universidade de Franca — Hibrido</p>
          <div className="flex justify-between">
            <div className="flex items-center flex-wrap font-firaCode text-green-900 gap-2 gap-x-3 mt-1">
              <div className="bg-green-100 rounded-lg px-2">
                <p>algoritmos</p>
              </div>
              <div className="bg-green-100 rounded-lg px-2">
                <p>arquitetura</p>
              </div>
              <div className="bg-green-100 rounded-lg px-2">
                <p>banco de dados</p>
              </div>
              <div className="bg-green-100 rounded-lg px-2">
                <p>requisitos</p>
              </div>
            </div>

            <div className="text-gray-500 justify-between mt-4 hidden lg:grid lg:justify-items-end">
              <p>ingresso: 2022 </p>
              <p>
                conclusão: <span className="text-black">2025/2</span>
              </p>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-between">
              <p className="text-gray-500">progresso do curso </p>
              <p className="text-green-900">45% concluído</p>
            </div>
            <div className="bg-gray-300 h-1 w-full rounded-2xl">
              <div
                className="bg-green-500 h-full rounded-2xl mt-3"
                style={{ width: "45%" }}
              ></div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-4">
            <div className="text-green-900 bg-green-100 px-2 py-1 rounded-md">
              <p>1º</p>
            </div>
            <div className="text-green-900 bg-green-100 px-2 py-1 rounded-md">
              <p>2º</p>
            </div>
            <div className="text-green-900 bg-green-100 px-2 py-1 rounded-md">
              <p>3º</p>
            </div>
            <div className="text-white bg-green-700 px-2 py-1 rounded-md">
              <p>4º</p>
            </div>
            <div className="text-green-900 bg-mist-200 px-2 py-1 rounded-md">
              <p>5º</p>
            </div>
            <div className="text-green-900 bg-mist-200 px-2 py-1 rounded-md">
              <p>6º</p>
            </div>
            <div className="text-green-900 bg-mist-200 px-2 py-1 rounded-md">
              <p>7º</p>
            </div>
            <div className="text-green-900 bg-mist-200 px-2 py-1 rounded-md">
              <p>8º</p>
            </div>
          </div>

          <div className="flex gap-6 mt-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-700 rounded-sm"></div>
              <p>cursando</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-200 border border-green-400 rounded-sm"></div>
              <p>concluído</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-mist-200  rounded-sm"></div>
              <p>próximo</p>
            </div>
          </div>

          <div className="text-gray-500 flex justify-between mt-4 lg:hidden">
            <p>ingresso: 2022 </p>
            <p>
              conclusão: <span className="text-black">2025/2</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutCollegeSection;
