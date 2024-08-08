"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home page</h1>
      <button
        onClick={() => router.push("/enroll")}
        className="p-4 bg-blue-400 rounded-md"
      >
        Enroll Now
      </button>
    </main>
  );
}
