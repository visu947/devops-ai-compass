import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TopbarProps {
  onMenuToggle: () => void;
}

export function Topbar({ onMenuToggle }: TopbarProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-6">
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={onMenuToggle}
        className="md:hidden"
      >
        <Menu className="h-4 w-4" />
      </Button>
      
      {/* App title */}
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
          <span className="text-sm font-bold text-primary-foreground">DA</span>
        </div>
        <h1 className="text-xl font-bold text-foreground">DevOps AI</h1>
      </div>
      
      {/* Spacer */}
      <div className="flex-1" />
      
      {/* Right side content */}
      <div className="flex items-center gap-4">
        <div className="hidden sm:block text-sm text-muted-foreground">
          Dashboard
        </div>
      </div>
    </header>
  );
}