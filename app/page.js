import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center bg-gray-900 min-h-screen">
      <div className="bg-gray-700 rounded-lg shadow-lg p-6 w-full max-w-lg">
        <h2 className="text-white text-2xl font-bold mb-4 text-center">
          Welcome to Photos Store
        </h2>
        <p className="mb-6 text-lg text-center">
          Sign in to upload and save your secret photos. 😈
        </p>
      </div>
    </main>
  );
}
