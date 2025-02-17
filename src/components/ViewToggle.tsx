
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ViewToggleProps {
  view: "cohort" | "static";
  onChange: (view: "cohort" | "static") => void;
}

const ViewToggle = ({ view, onChange }: ViewToggleProps) => {
  return (
    <div className="inline-flex rounded-lg border border-purple-500/20 p-1 bg-purple-900/20">
      <Button
        variant="ghost"
        className={cn(
          "rounded-md px-4 py-2 text-sm transition-colors text-purple-200",
          view === "cohort" &&
            "bg-purple-500/20 text-purple-100 shadow-sm"
        )}
        onClick={() => onChange("cohort")}
      >
        Cohort View
      </Button>
      <Button
        variant="ghost"
        className={cn(
          "rounded-md px-4 py-2 text-sm transition-colors text-purple-200",
          view === "static" &&
            "bg-purple-500/20 text-purple-100 shadow-sm"
        )}
        onClick={() => onChange("static")}
      >
        Static View
      </Button>
    </div>
  );
};

export default ViewToggle;
