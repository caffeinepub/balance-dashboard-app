import BalanceTable from "@/components/BalanceTable";
import TipsTable from "@/components/TipsTable";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface DashboardScreenProps {
  onNavigateBack: () => void;
}

function DashboardScreen({ onNavigateBack }: DashboardScreenProps) {
  return (
    <div className="min-h-screen p-8 md:p-12 lg:p-16">
      <header className="mb-12 flex items-center justify-between">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-[0.15em] mb-2">
            BALANCE
          </h1>
          <p className="text-gray-400 text-sm italic">Dashboard</p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onNavigateBack}
          className="text-gray-400 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </header>

      <main className="space-y-16">
        <section>
          <BalanceTable />
        </section>

        <section>
          <TipsTable />
        </section>
      </main>

      <footer className="mt-24 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()}. Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}

export default DashboardScreen;
