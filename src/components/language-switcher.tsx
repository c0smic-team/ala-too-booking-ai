import { useLang } from "@/lib/lang-context";
import { LANGS, type Lang } from "@/lib/i18n";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, Check } from "lucide-react";

export function LanguageSwitcher({ subtle = false }: { subtle?: boolean }) {
  const { lang, setLang } = useLang();
  const current = LANGS.find((l) => l.code === lang);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
          subtle
            ? "border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur"
            : "border-border bg-background hover:bg-accent/10 text-foreground"
        }`}
        aria-label="Change language"
      >
        <Globe className="h-4 w-4" />
        <span>{current?.short}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[160px]">
        {LANGS.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => setLang(l.code as Lang)}
            className="cursor-pointer flex items-center justify-between"
          >
            <span>{l.label}</span>
            {l.code === lang && <Check className="h-4 w-4 text-gold" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
