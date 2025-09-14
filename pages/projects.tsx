import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Food Delivery App",
    description:
      "Full-stack platform with authentication and real-time order tracking. Built with modern React 18 and TypeScript for a seamless user experience.",
    technologies: [
      "React 18",
      "TypeScript",
      "Node.js",
      "NestJS",
      "SSR",
      "MongoDB",
      "Authentication",
      "Real-time Tracking",
    ],
    github: "https://github.com/riteshgulghane/food-delivery",
    demo: "https://food-delivery-3d71.onrender.com",
    image: "/food-delivery.png",
  },
  {
    id: 2,
    title: "Planning Poker Tool",
    description:
      "Real-time Agile estimation app for distributed teams with JIRA integration. Enables seamless story point estimation with WebSocket-powered live updates.",
    technologies: [
      "React",
      "NestJS",
      "WebSockets",
      "JIRA Integration",
      "Real-time Updates",
      "Agile",
    ],
    github: "https://github.com/riteshgulghane/planning-poker",
    demo: "https://planning-poker-l54q.onrender.com",
    image: "/planning-poker.png",
  },
  {
    id: 3,
    title: "Video Cropper",
    description:
      "Modern video cropper built with Angular and deployed on Netlify for optimal performance.",
    technologies: [
      "Angular",
      "TypeScript",
      "Netlify",
      "Responsive Design",
    ],
    github: "https://github.com/riteshgulghane/video-cropper",
    demo: "https://video-cropper.netlify.app",
    image: "/video-cropper.png",
  },
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Ritesh&apos;s Portfolio</title>
        <meta
          name="description"
          content="Browse my latest projects and development work"
        />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-gray-50 dark:bg-gray-900 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                My Projects
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Here are some of the projects I&apos;ve worked on. Each
                represents a unique challenge and learning experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
