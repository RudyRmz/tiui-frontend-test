function PageTitle({ children }) {
  return (
    <p
      className={
        " w-full inline-block text-5xl font-bold uppercase text-center mt-8 mb-6 text-slate-700 md:text-6xl"
      }
    >
      {children}
    </p>
  );
}

export default PageTitle;
