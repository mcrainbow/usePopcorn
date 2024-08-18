function Box({ children }) {
  return (
    <div className="h-[full] min-w-[42rem] max-w-[42rem] bg-background-500 rounded-[0.9rem] relative overflow-y-scroll">
      {children}
    </div>
  );
}

export default Box;
