export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-white">
      <div className="container mx-auto flex flex-row flex-wrap items-center justify-center w-full p-6 text-center border-t gap-y-6 gap-x-12 border-blue-gray-50 md:justify-between">
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
          © {new Date().getFullYear()} Movies
        </p>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <a
              href="#"
              className="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-blue-gray-900 hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-blue-gray-900 hover:text-blue-500 focus:text-blue-500"
            >
              License
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-blue-gray-900 hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-blue-gray-900 hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
