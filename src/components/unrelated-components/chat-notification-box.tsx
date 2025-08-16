"use client";

function ChatNotifiBox() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="mx-auto flex gap-x-4 items-center justify-center rounded-xl bg-purple-400 py-4 px-7 max-w-sm outline outline-purple-700 dark:bg-blue-800 dark:outline-white/15">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="dark:stroke-white stroke-black"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M16.5 10c3.038 0 5.5 2.015 5.5 4.5c0 1.397 -.778 2.645 -2 3.47l0 2.03l-1.964 -1.178a6.649 6.649 0 0 1 -1.536 .178c-3.038 0 -5.5 -2.015 -5.5 -4.5s2.462 -4.5 5.5 -4.5z" />
          <path d="M11.197 15.698c-.69 .196 -1.43 .302 -2.197 .302a8.008 8.008 0 0 1 -2.612 -.432l-2.388 1.432v-2.801c-1.237 -1.082 -2 -2.564 -2 -4.199c0 -3.314 3.134 -6 7 -6c3.782 0 6.863 2.57 7 5.785l0 .233" />
          <path d="M10 8h.01" />
          <path d="M7 8h.01" />
          <path d="M15 14h.01" />
          <path d="M18 14h.01" />
        </svg>
        <div className="">
          <h1 className="text-2xl font-medium dark:text-white/100 text-black">
            Chit Chat
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            You have a new message!
          </p>
        </div>
      </div>
    </div>
  );
}
