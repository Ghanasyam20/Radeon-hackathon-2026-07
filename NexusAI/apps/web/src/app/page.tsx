import { SystemStatus } from "@/components/system-status";
import { WorldSelector } from "@/components/world-selector";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-10 md:px-10">
      <div className="mx-auto max-w-6xl">
        <nav className="flex items-center justify-between">
          <div className="text-sm font-semibold tracking-[0.28em]">
            NEXUS<span className="text-cyan-200">AI</span>
          </div>
          <SystemStatus />
        </nav>

        <section className="pb-16 pt-24 md:pb-20 md:pt-32">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-cyan-200/70">
            Universal Knowledge Intelligence
          </p>
          <h1 className="max-w-5xl text-5xl font-medium leading-[1.04] tracking-[-0.04em] md:text-7xl">
            Transform information into worlds you can explore.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/55">
            NexusAI connects entities, relationships, events, and sources,
            turning fragmented data into interactive knowledge.
          </p>
        </section>

        <div className="mb-7 flex items-center gap-4">
          <span className="text-xs uppercase tracking-[0.3em] text-white/35">
            Choose a world
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <WorldSelector />
      </div>
    </main>
  );
}
