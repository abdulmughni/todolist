const Empty = ({ setShowModal }) => {
  return (
    <div className=" w-full h-full flex items-center justify-center text-center mt-16">
      <div className="max-w-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-72 w-72 mx-auto stroke-zinc-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
        <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
          Create First Task
        </h1>
        <p className="mt-4 text-xl text-gray-500 mb-6">
          Let's ready to create your tasks and you can also mark completed and
          change positions with drag and drop
        </p>
        <a
          href="#"
          onClick={() => setShowModal(true)}
          className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
        >
          Create Task
        </a>
      </div>
    </div>
  );
};

export default Empty;
