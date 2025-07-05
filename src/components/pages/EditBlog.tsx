import NewsForm from "../NewsForm";
import { useParams } from "react-router-dom";

const EditBlog = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-secondary/40 dark:bg-secondary/5 p-4 sm:p-6 md:p-8 lg:p-12">
      <NewsForm id={id}/>
    </div>
  );
};

export default EditBlog;
