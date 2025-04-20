import { useLocation, Link } from "react-router-dom";
import { 
  Home, 
  Info, 
  Briefcase, 
  Image, 
  GraduationCap,  
  Mail  
} from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "Portfolio", href: "/portfolio", icon: Image },
  { name: "Career", href: "/career", icon: GraduationCap },
  { name: "Contact", href: "/contact", icon: Mail }
];

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-background/90 backdrop-blur-sm border border-border shadow-xl rounded-full px-4 py-2 flex justify-between items-center w-[92%] max-w-md">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.name}
            to={item.href}
            className="relative flex flex-col items-center justify-center w-16 h-14 text-xs font-medium"
          >
            {isActive(item.href) && (
              <motion.span
                layoutId="active-icon"
                className="absolute top-1 w-12 h-12 bg-accent rounded-full z-0"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <Icon
              size={20}
              className={`relative z-10 transition-transform duration-300 mb-1 ${
                isActive(item.href) ? "scale-110 text-foreground" : "text-muted-foreground"
              }`}
            />
            <span
              className={`relative z-10 ${
                isActive(item.href)
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}