function Box({ children }) {
  return (
    <div className="h-[full] min-w-[60rem] max-w-[60rem] bg-background-500 rounded-[0.9rem] relative overflow-y-scroll">
      {children}
    </div>
  );
}

export default Box;
