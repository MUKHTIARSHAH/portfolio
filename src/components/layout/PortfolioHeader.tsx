import { Link } from "react-router-dom";

const PortfolioHeader = () => {
  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold text-primary">Mukhtiar Shah</h1>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <Link to="/about" className="hover:text-primary">About</Link>
          <Link to="/achievements" className="hover:text-primary">Achievements</Link>
          <Link to="/projects" className="hover:text-primary">Projects</Link>
          <Link to="/contact" className="hover:text-primary">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default PortfolioHeader;