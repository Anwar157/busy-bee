// src/app/(public)/page.jsx
export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center  text-center gap-6 p-5">
      <h1 className="text-4xl font-bold">Welcome to Busy Bee 🐝</h1>
      <p className="text-gray-600 max-w-xl">
        Complete micro tasks and earn money, or post tasks to get work done
        fast.
      </p>
      <div className="flex gap-4">
        <a href="/onboarding" className="btn btn-primary">
          Get Started
        </a>
        <a href="/login" className="btn btn-outline">
          Sign In
        </a>
      </div>
    </section>
  );
}
