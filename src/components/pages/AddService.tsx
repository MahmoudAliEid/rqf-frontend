import ServiceForm from "../ServiceForm";

const AddService = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-secondary/30 dark:bg-secondary/5 p-4 sm:p-6 md:p-8 lg:p-12">
      <ServiceForm/>
    </div>
  );
};

export default AddService;
