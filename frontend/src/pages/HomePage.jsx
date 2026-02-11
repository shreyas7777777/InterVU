import { Link } from "react-router";
import {
  ArrowRightIcon,
  CheckIcon,
  Code2Icon,
  SparklesIcon,
  UsersIcon,
  VideoIcon,
  GlobeIcon,
  LayersIcon,
} from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";

function HomePage() {
  return (
    <div className="bg-gradient-to-br from-base-100 via-base-200 to-base-300">

      {/* ================= NAVBAR ================= */}
      <nav className="bg-base-100/80 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">

          {/* LOGO */}
          <Link to={"/"} className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-lg">
              <SparklesIcon className="size-6 text-white" />
            </div>

            <div className="flex flex-col">
              <span className="font-black text-xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono tracking-wider">
                InterVU
              </span>
              <span className="text-xs text-base-content/60 -mt-1">
                Interview Practice Platform
              </span>
            </div>
          </Link>

          {/* AUTH */}
          <SignInButton mode="modal">
            <button className="btn btn-primary">
              Get Started
              <ArrowRightIcon className="size-4 ml-1" />
            </button>
          </SignInButton>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="space-y-8">

            <div className="badge badge-primary badge-lg">
              Real Interview Simulation
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Practice Technical Interviews
              </span>
              <br />
              <span className="text-base-content">The Realistic Way</span>
            </h1>

            <p className="text-xl text-base-content/70 max-w-xl">
              InterVU enables developers to host and join live coding interview
              sessions. Collaborate face-to-face, discuss structured problems,
              and sharpen your interview skills in a real environment.
            </p>

            {/* FEATURE PILLS */}
            <div className="flex flex-wrap gap-3">
              <div className="badge badge-outline badge-lg">
                <CheckIcon className="size-4 text-success" />
                Live Video Sessions
              </div>

              <div className="badge badge-outline badge-lg">
                <CheckIcon className="size-4 text-success" />
                Multi-Language Coding
              </div>

              <div className="badge badge-outline badge-lg">
                <CheckIcon className="size-4 text-success" />
                Real-time Chat
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">

              <SignInButton mode="modal">
                <button className="btn btn-primary btn-lg">
                  Start Session
                  <ArrowRightIcon className="size-5" />
                </button>
              </SignInButton>

              {/* NEW IMPORTANT BUTTON */}
              <Link to="/sessions">
                <button className="btn btn-outline btn-lg">
                  <LayersIcon className="size-5" />
                  Browse Sessions
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <img
            src="/hero.png"
            alt="InterVU Platform"
            className="w-full h-auto rounded-3xl shadow-2xl border-4 border-base-100"
          />
        </div>
      </div>

      {/* ================= FEATURES ================= */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Platform Capabilities
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <VideoIcon className="size-10 text-primary mb-3" />
              <h3 className="card-title">Video Interview Sessions</h3>
              <p>
                Conduct realistic mock interviews with integrated live video.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <Code2Icon className="size-10 text-primary mb-3" />
              <h3 className="card-title">Problem-based Collaboration</h3>
              <p>
                Create structured sessions with defined difficulty and tasks.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <GlobeIcon className="size-10 text-primary mb-3" />
              <h3 className="card-title">Multi-Language Support</h3>
              <p>
                Solve problems in your preferred programming language.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= HOW IT WORKS ================= */}
      <div className="max-w-6xl mx-auto px-4 pb-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          How InterVU Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">

          <div>
            <UsersIcon className="mx-auto size-10 text-primary mb-3" />
            <h3 className="font-bold">1️⃣ Create Session</h3>
            <p>Host a problem session with difficulty level.</p>
          </div>

          <div>
            <UsersIcon className="mx-auto size-10 text-primary mb-3" />
            <h3 className="font-bold">2️⃣ Invite / Join</h3>
            <p>Participants join and collaborate live.</p>
          </div>

          <div>
            <VideoIcon className="mx-auto size-10 text-primary mb-3" />
            <h3 className="font-bold">3️⃣ Solve Together</h3>
            <p>Discuss, code, and simulate real interviews.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
