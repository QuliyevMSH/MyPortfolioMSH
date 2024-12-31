import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "E-ticarət Platforması",
    description: "React və Node.js istifadə edərək hazırlanmış tam funksional e-ticarət həlli",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    title: "Task Meneceri",
    description: "Komandalar üçün real-vaxt task idarəetmə sistemi",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["React", "Firebase", "Tailwind"],
    link: "#"
  },
  {
    title: "Portfolio Vebsayt",
    description: "Şəxsi portfolio vebsaytı",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    tags: ["React", "Tailwind", "Framer Motion"],
    link: "#"
  }
];

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Layihələrim</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Təcrübəm ərzində hazırladığım bəzi layihələr
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
          {/* {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))} */}
          Tezliklə əlavə olunacaqlar...
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
