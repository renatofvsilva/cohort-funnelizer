
import { useState } from "react";
import { Card } from "@/components/ui/card";
import Pipeline from "@/components/Pipeline";
import ViewToggle from "@/components/ViewToggle";
import DateFilter from "@/components/DateFilter";
import { PipelineData } from "@/types/pipeline";

const mockData: PipelineData[] = [
  {
    month: "January",
    leadsRecebidos: 1000,
    tentativaConexao: 750,
    conectados: 500,
    negociacao: 250,
    venda: 100,
  },
  {
    month: "February",
    leadsRecebidos: 1200,
    tentativaConexao: 900,
    conectados: 600,
    negociacao: 300,
    venda: 150,
  },
];

const Index = () => {
  const [view, setView] = useState<"cohort" | "static">("static");
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  return (
    <div className="min-h-screen bg-[#1A1F2C] p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <header className="text-center space-y-2">
          <span className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm font-medium">
            Pipeline Analysis
          </span>
          <h1 className="text-4xl font-bold text-white mt-4">
            Sales Pipeline
          </h1>
          <p className="text-purple-200/70 max-w-2xl mx-auto">
            Track your sales pipeline progress through different stages
          </p>
        </header>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <ViewToggle view={view} onChange={setView} />
          <DateFilter
            selectedDate={selectedDate}
            onChange={setSelectedDate}
          />
        </div>

        <Pipeline data={mockData} view={view} selectedDate={selectedDate} />
      </div>
    </div>
  );
};

export default Index;
