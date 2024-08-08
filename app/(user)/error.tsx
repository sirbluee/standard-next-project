"use client";
function CustomErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="h-screen grid grid-col place-content-center gap-2">
      <h2 className="text-center text-2xl text-red-500">Something went wrong!</h2>
      <p className="text-center">{error.message}</p>
        <button className="bg-blue-500 p-4 rounded-md text-white font-bold" onClick={reset}>Try again</button>
    </div>
  );
}

export default CustomErrorComponent;
