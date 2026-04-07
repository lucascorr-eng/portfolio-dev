function Footer() {
  return (
    <footer className=" w-full mt-10">
      <div className="h-px bg-gray-400 w-full " />

      <div className="grid justify-center gap-2 font-firaCode text-gray-500 text-xs p-6">
        <span className="text-center">© 2026 LucasCorrea.dev — feito com muito café</span>
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
  );
}

export default Footer;
