import { Link } from "react-router-dom";

const PortfolioFooter = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-12">
      <div className="container mx-auto px-6 text-center text-muted-foreground">
        <p className="mb-4">© {new Date().getFullYear()} Mukhtiar Shah. All rights reserved.</p>
        <div className="flex justify-center gap-6">
          <Link to="/about" className="hover:text-primary">About</Link>
          <Link to="/projects" className="hover:text-primary">Projects</Link>
          <Link to="/contact" className="hover:text-primary">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default PortfolioFooter;