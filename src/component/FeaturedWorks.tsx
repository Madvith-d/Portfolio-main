import { useTheme } from "@/hooks/theme";
import { Project } from "@/types/types";
import ProjectCard from "./ProjectCard";

export default function FeaturedWorks() {
    const { isDarkMode } = useTheme();
    const projects: Project[] = [
      {
        title: "Whispr",
        tagline: "REST API for a social media-like application",
        description: "It uses MongoDB (via Mongoose) for persistent data storage and JWT-based authentication (with cookies).",
        tags: ["Express", "Node.js", "MongoDB"],
        repoLink: "https://github.com/madvith-d/whispr"
      },
      {
        title: "Fast URL",
        tagline: "A modern, fast, and secure URL shortening service",
        description: " Create short, memorable links with advanced features like click tracking, expiration dates",
        tags: ["Express", "Prisma", "postgreSQL","React"],
        repoLink: "https://github.com/Madvith-d/fst-url"
      },
      {
        title: "Scout Iq",
        tagline: "resume analysis with AI-powered insights and intelligent job matching",
        description: " web application that leverages artificial intelligence to provide comprehensive resume analysis and job matching capabilities",
        tags: ["React", "Node.js", "Rag" ,"R2 storage"],
        repoLink: "https://github.com/Madvith-d/ScoutIQ"
      },
      {
        title: "MindMesh",
        tagline: "Mental health platform",
        description: "connects users with licensed therapists, provides AI-powered support, and offers tools for emotional wellness tracking, habit building, and crisis intervention.",
        tags: ["JavaScript", "Langchain", "PineconeDB", "R2 storage"],
        repoLink: "https://github.com/Madvith-d/MindMesh"
      }
    ];
  
    return (
      <section className={`border-b-2 transition-colors ${
        isDarkMode ? 'bg-zinc-900 border-zinc-100' : 'bg-[#fdfbf7] border-zinc-900'
      }`}>
        <div className={`border-b-2 p-4 md:p-6 flex justify-between items-center sticky top-0 z-10 ${
          isDarkMode ? 'border-zinc-100 bg-zinc-800 text-zinc-100' : 'border-zinc-900 bg-zinc-900 text-white'
        }`}>
          <h3 className={`font-pixel text-sm md:text-lg tracking-wide ${isDarkMode ? 'text-green-400' : 'text-yellow-400'}`}>
            Headline Projects
          </h3>
          <a 
            href="https://github.com/Madvith-d?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`font-pixel text-[8px] md:text-[10px] uppercase transition-colors border px-2 py-1 ${
              isDarkMode 
                ? 'border-zinc-100 hover:bg-zinc-100 hover:text-zinc-900' 
                : 'border-white hover:bg-white hover:text-zinc-900'
            }`}
          >
            View All ↗
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2">
          {projects.map((project, idx) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              isFirst={idx === 0}
              isLastRow={idx >= 2} 
            />
          ))}
        </div>
      </section>
    );
  };
  