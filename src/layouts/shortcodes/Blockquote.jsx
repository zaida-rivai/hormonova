const Blockquote = ({ name, children }) => {
  return (
    <div className="blockquote my-10 rounded-xl bg-white  ">
      <blockquote className="text-2xl text-dark lg:text-[32px]">
        {children}
        <span className="mb-0 mt-4">{name}</span>
      </blockquote>
    </div>
  );
};

export default Blockquote;
