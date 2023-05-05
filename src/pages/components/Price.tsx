const Price = () => {
  return (
    <>
      <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
        <p className="line-through">$150</p>
        <p className="text-5xl font-bold">$99.95</p>
        <p className="text-sm font-light text-gray-400">
          This offer is valid until April 3rd or as long as stock lasts!
        </p>
      </div>
    </>
  );
};

export default Price;
