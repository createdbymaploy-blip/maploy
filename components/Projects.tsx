import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { getAsset } from '../constants';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Helper to extract YouTube ID
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  // Projects Data
  const projects: Project[] = [
    { 
      id: 1, 
      image: 'project1.png', 
      channelIcon: 'icon1.png', 
      channelName: 'Maska', 
      stats: '200k+ views', 
      link: 'https://www.youtube.com/watch?v=r4AHBBsV9g0&t=999s' 
    },
    { 
      id: 2, 
      image: 'project2.png', 
      channelIcon: 'icon1.png', 
      channelName: 'Maska', 
      stats: '90k+ views', 
      link: 'https://www.youtube.com/watch?v=m3m04NrVHTA' 
    },
    { 
      id: 3, 
      image: 'project3.png', 
      channelIcon: 'icon1.png', 
      channelName: 'Maska', 
      stats: '25k+ views', 
      link: 'https://www.youtube.com/watch?v=oV-Op4mIgtE&t' 
    },
    { 
      id: 4, 
      image: 'project4.jpg', 
      channelIcon: 'icon2.png', 
      channelName: 'Pasha FOCUS', 
      stats: '8k+ subs', 
      link: 'https://www.youtube.com/watch?v=R7gRYsLb6zA&t' 
    },
    { 
      id: 5, 
      video: 'project5_1.mp4',
      image: 'project5.png', 
      channelIcon: 'icon3.png', 
      channelName: 'maploy', 
      stats: '1.2k+ subs', 
      link: '#' 
    },
    { 
      id: 6, 
      video: 'project6_1_1.mp4',
      image: 'project6.png', 
      channelIcon: 'icon3.png', 
      channelName: 'maploy', 
      stats: '1.2k+ subs', 
      link: '#' 
    },
  ];

  const handleProjectClick = (e: React.MouseEvent, project: Project) => {
    e.preventDefault();
    setSelectedProject(project);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="pb-36 relative z-10 px-5">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-10 text-center md:text-left">
           <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm font-semibold text-slate-300 mb-4">
              <span className="text-accent text-lg leading-none">•</span> portfolio
           </div>
           <h2 className="text-[3.5rem] leading-[1.1] font-bold tracking-tight">
             selected<br/>
             <em className="font-serif italic font-light text-slate-400">projects</em>
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {projects.map((project) => (
             <div 
               key={project.id} 
               onClick={(e) => handleProjectClick(e, project)}
               className="group block bg-[#0b1120]/60 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-accent shadow-[0_4px_20px_rgba(0,0,0,0.3)] cursor-pointer"
             >
                <div className="w-full aspect-video overflow-hidden relative border-b border-white/5 bg-black">
                   {/* 
                      New Interaction Rules:
                      Default: saturate(60%) brightness(75%) contrast(90%)
                      Hover: saturate(100%) brightness(100%) contrast(100%) + Scale 1.02
                      Transition: 0.4s ease-out
                   */}
                   {project.video ? (
                     <video 
                       src={getAsset(project.video)} 
                       className="w-full h-full object-cover saturate-[.60] brightness-75 contrast-90 group-hover:saturate-100 group-hover:brightness-100 group-hover:contrast-100 group-hover:scale-[1.02] transition-all duration-[400ms] ease-out" 
                       muted 
                       loop 
                       playsInline
                       // Uses the image as a preview poster
                       poster={project.image ? getAsset(project.image) : undefined}
                       onMouseOver={(e) => {
                           e.currentTarget.play();
                       }}
                       onMouseOut={(e) => {
                           e.currentTarget.pause();
                           e.currentTarget.currentTime = 0;
                       }}
                     />
                   ) : (
                     <img 
                        src={getAsset(project.image || '')} 
                        alt={`Project ${project.id}`} 
                        className="w-full h-full object-cover saturate-[.60] brightness-75 contrast-90 group-hover:saturate-100 group-hover:brightness-100 group-hover:contrast-100 group-hover:scale-[1.02] transition-all duration-[400ms] ease-out" 
                     />
                   )}
                   
                   {/* Play Button Overlay (Visible on Hover) */}
                   <div className="absolute inset-0 bg-black/10 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] ease-out pointer-events-none">
                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 5V19L19 12L8 5Z" />
                            </svg>
                        </div>
                   </div>
                </div>
                
                <div className="p-5 md:p-6 flex justify-between items-center relative z-10 bg-[#0b1120]">
                   <div className="flex items-center gap-3.5 max-w-[60%]">
                      <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white/10 flex-shrink-0">
                         <img src={getAsset(project.channelIcon)} alt={project.channelName} className="w-full h-full object-cover" />
                      </div>
                      <h3 className="text-[1.2rem] font-bold text-white truncate">{project.channelName}</h3>
                   </div>
                   <div className="text-right flex-shrink-0">
                     <span className="text-[1.25rem] font-bold text-slate-200 tracking-tight">{project.stats}</span>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </div>

      {/* Lightbox Modal - Rendered via Portal to ensure top z-index */}
      {selectedProject && createPortal(
        <div 
            className="fixed inset-0 z-[9999] flex justify-center items-center p-4 bg-black/95 backdrop-blur-md transition-opacity duration-300"
            onClick={closeLightbox}
        >
            <div 
                className="relative w-full max-w-4xl bg-[#0b1120] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
            >
                {/* Close Button */}
                <button 
                    onClick={closeLightbox}
                    className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-white/20 text-white transition-colors"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6L6 18" /><path d="M6 6L18 18" />
                    </svg>
                </button>

                <div className="aspect-video w-full bg-black flex items-center justify-center">
                    {selectedProject.video ? (
                        <video 
                            src={getAsset(selectedProject.video)} 
                            className="w-full h-full" 
                            controls 
                            autoPlay 
                        />
                    ) : (
                        selectedProject.link.includes('youtube') ? (
                            <iframe 
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${getYouTubeId(selectedProject.link)}?autoplay=1`}
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            />
                        ) : (
                            <img 
                                src={getAsset(selectedProject.image || '')} 
                                alt="Project Preview" 
                                className="h-full object-contain"
                            />
                        )
                    )}
                </div>
                
                <div className="p-6 border-t border-white/5 bg-[#0b1120]">
                    <h3 className="text-xl font-bold mb-2">{selectedProject.channelName}</h3>
                    <p className="text-slate-400">{selectedProject.stats}</p>
                </div>
            </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Projects;
