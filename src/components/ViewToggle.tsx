
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ViewToggleProps {
  view: "cohort" | "static";
  onChange: (view: "cohort" | "static") => void;
}

const ViewToggle = ({ view, onChange }: ViewToggleProps) => {
  return (
    <div className="inline-flex rounded-lg border border-gray-200 p-1">
      <Button
        variant="ghost"
        className={cn(
          "rounded-md px-4 py-2 text-sm transition-colors",
          view === "cohort" &&
            "bg-gray-100 text-gray-900 shadow-sm"
        )}
        onClick={() => onChange("cohort")}
      >
        Cohort View
      </Button>
      <Button
        variant="ghost"
        className={cn(
          "rounded-md px-4 py-2 text-sm transition-colors",
          view === "static" &&
            "bg-gray-100 text-gray-900 shadow-sm"
        )}
        onClick={() => onChange("static")}
      >
        Static View
      </Button>
    </div>
  );
};

export default ViewToggle;
