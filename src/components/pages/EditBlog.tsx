import NewsForm from "../NewsForm";
import { useParams } from "react-router-dom";

const EditBlog = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="flex min-h-lvh p-36 w-full items-center justify-center bg-secondary/40 dark:bg-secondary/5">
      <NewsForm id={id}/>
    </div>
  );
};

export default EditBlog;
