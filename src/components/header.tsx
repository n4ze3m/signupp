import { Space, Twitter, Github, DollarSign } from "lucide-react";

export const Header = () => {
  return (
    <header
      className="flex flex-col mb-8 sm:mb-12 sm:flex-row justify-between items-center space-y-4 sm:space-y-0 max-w-6xl mx-auto p-4 mt-4 sm:mt-6"
    >
      <div className="text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary flex items-center">
          <Space className="mr-2" size={32} />
          Sign Upp
        </h1>
      </div>
      <div className="flex items-center space-x-6">
        {/* <a
          href="https://x.com/n4ze3m"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary text-sm sm:text-base hover:text-primary-dark inline-flex items-center gap-2 transition-colors"
        >
          <Twitter size={24} />
        </a> */}
        <a
          href="https://github.com/n4ze3m/signupp"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary text-sm sm:text-base hover:text-primary-dark inline-flex items-center gap-2 transition-colors"
        >
          <Github size={24} />
        </a>
        {/* <a
          href="https://ko-fi.com/n4ze3m"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 text-sm sm:text-base hover:text-green-700 inline-flex items-center gap-2 transition-colors"
        >
          <DollarSign size={24} />
        </a> */}
      </div>
    </header>
  );
};