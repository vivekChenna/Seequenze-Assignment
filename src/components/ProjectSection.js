import AddNewCard from "./AddNewCard";
import CardsList from "./CardsList";
import NewProject from "./NewProject";
import ProjectHeader from "./ProjectHeader";
const ProjectSection = () => {
  return (
    <div className="bg-[#F8F8F8] flex flex-col">
      <ProjectHeader />
      <div className=" flex items-center gap-20">
        <NewProject />
        <AddNewCard />
      </div>
      <CardsList />
    </div>
  );
};

export default ProjectSection;
