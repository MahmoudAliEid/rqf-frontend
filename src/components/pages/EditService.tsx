import ServiceForm from "../ServiceForm";
import { useParams } from "react-router-dom";

const EditService = () => {
  const { id } = useParams<{ id: string }>();
  
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-secondary/30 dark:bg-secondary/5 p-4 sm:p-6 md:p-8 lg:p-12">
      <ServiceForm id={id}/>
    </div>
  );
};

export default EditService;
