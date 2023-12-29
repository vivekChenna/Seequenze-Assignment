import AddNewCard from "./AddNewCard";
import CardsList from "./CardsList";
import NewProject from "./NewProject";
import ProjectHeader from "./ProjectHeader";
import UserCardList from "./UserCardList";
const ProjectSection = () => {
  return (
    <div className="bg-[#F8F8F8] flex flex-col">
      <ProjectHeader />
      <div className=" flex items-center gap-20">
        <NewProject />
        <AddNewCard />
      </div>
      <UserCardList />
      <CardsList />
    </div>
  );
};

export default ProjectSection;
