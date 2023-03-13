export const USPCard = (props) => {
  return (
    <div className="flex flex-wrap pt-8 pb-4 px-12 gap-y-4 text-center">
      <div className="w-full">
        <img
          src={props.image}
          className="max-w-[125px] lg:max-w-[300px] mx-auto lg:min-h-[350px]"
        />
      </div>
      <div className="w-full">
        <h1 className="font-[900] text-lg underline">{props.title}</h1>
      </div>
      <div className="text-md">
        <h1>{props.description}</h1>
      </div>
    </div>
  );
};
