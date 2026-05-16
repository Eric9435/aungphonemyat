import Footer from "@/components/layout/Footer";
import FixedSidebar from "@/components/layout/FixedSidebar";
import Hero from "@/components/home/Hero";
import ProjectsSection from "@/components/projects/ProjectsSection";
import SkillsSection from "@/components/home/SkillsSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import EducationSection from "@/components/home/EducationSection";
import EngineeringNotesPreview from "@/components/notes/EngineeringNotesPreview";
import ContactSection from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-100">

      <FixedSidebar />

      <div className="ml-72">

        <div className="mx-auto max-w-[1600px] px-10 py-10">

          <Hero />

          <ProjectsSection />

          <SkillsSection />

          <ExperienceSection />

          <EducationSection />

          <EngineeringNotesPreview />

          <ContactSection />

        </div>

      </div>

      <Footer />
</main>
  );
}
