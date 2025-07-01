import ServiceForm from "../ServiceForm";
import { useParams } from "react-router-dom";

const EditService = () => {
  const { id } = useParams<{ id: string }>();
  
  return (
    <div className="flex h-screen items-center justify-center bg-secondary/30 dark:bg-secondary/5">
      <ServiceForm id={id}/>
    </div>
  );
};

export default EditService;
