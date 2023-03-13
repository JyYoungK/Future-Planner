function FadeTransition({ show, children, step }) {
  return (
    <div
      className={`fixed inset-0 z-10 flex transition-opacity duration-500 ${
        show ? "opacity-100" : "opacity-0"
      } ${step !== 10 ? "items-center justify-center" : ""}`}

      // } ${step !== 3 ? "items-center justify-center" : ""}`}
    >
      {children}
    </div>
  );
}

export default FadeTransition;
