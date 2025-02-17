
import { useState } from "react";
import { Card } from "@/components/ui/card";
import Pipeline from "@/components/Pipeline";
import ViewToggle from "@/components/ViewToggle";
import DateFilter from "@/components/DateFilter";
import { PipelineData } from "@/types/pipeline";

const mockData: PipelineData[] = [
  {
    month: "January",
    leadsRecebidos: 100,
    tentativaConexao: 80,
    conectados: 60,
    negociacao: 40,
    venda: 20,
  },
  {
    month: "February",
    leadsRecebidos: 120,
    tentativaConexao: 90,
    conectados: 70,
    negociacao: 45,
    venda: 25,
  },
  // Add more months as needed
];

const Index = () => {
  const [view, setView] = useState<"cohort" | "static">("cohort");
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <header className="text-center space-y-2">
          <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
            Pipeline Analysis
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mt-4">
            Sales Pipeline
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Track your sales pipeline progress through different stages
          </p>
        </header>

        <Card className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <ViewToggle view={view} onChange={setView} />
            <DateFilter
              selectedDate={selectedDate}
              onChange={setSelectedDate}
            />
          </div>
          <Pipeline data={mockData} view={view} selectedDate={selectedDate} />
        </Card>
      </div>
    </div>
  );
};

export default Index;
