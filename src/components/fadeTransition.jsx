function FadeTransition({ show, children, step }) {
  return (
    // <div
    // className={`fixed inset-0 z-10 flex transition-opacity duration-500 ${
    //   show ? "opacity-100" : "opacity-0"
    // } ${step !== 10 ? "items-center justify-center" : ""}`}

    // // } ${step !== 3 ? "items-center justify-center" : ""}`}
    // >
    //   {children}
    // </div>
    <div
      className={`z-10 flex h-[90vh] w-full items-center justify-center transition-opacity duration-500 ${
        show ? "opacity-100" : "opacity-0"
      } ${step !== 10 ? "items-center justify-center" : ""}`}
    >
      <div className="m-auto">{children}</div>
    </div>
  );
}

export default FadeTransition;
