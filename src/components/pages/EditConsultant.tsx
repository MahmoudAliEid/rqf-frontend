import ConsultantForm from "../ConsultantForm";
import { useParams } from "react-router-dom";

const EditConsultant = () => {
  const { id } = useParams<{ id: string }>();
  
  return (
    <div className="flex h-screen items-center justify-center bg-secondary/30 dark:bg-secondary/5">
      <ConsultantForm id={id}/>
    </div>
  );
};

export default EditConsultant;
