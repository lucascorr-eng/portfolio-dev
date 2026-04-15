import DividerLine from "../ui/DividerLine";

function Footer() {
  return (
    <>
      <div className="mt-10">
        <DividerLine />
      </div>
      <footer className=" w-full lg:grid-cols-2 lg:gap-x-8 lg:w-full lg:max-w-480 lg:mx-auto">
        <div className="grid justify-center gap-2 font-firaCode text-gray-500 text-xs p-6 lg:px-12 lg:flex lg:justify-between lg:text-base">
          <span className="text-center">
            © 2026 LucasCorrea.dev — feito com muito café
          </span>
          <div className="flex justify-center gap-8.5">
            <a
              href="https://github.com/lucascorr-eng"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-corr%C3%AAa-b09bbb34a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
            <a
              href="https://www.instagram.com/lucascorreabt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
