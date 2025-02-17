
import { ResponsiveContainer, FunnelChart, Funnel, LabelList, Tooltip } from "recharts";
import { PipelineData, FunnelData } from "@/types/pipeline";

interface PipelineProps {
  data: PipelineData[];
  view: "cohort" | "static";
  selectedDate: Date;
}

const Pipeline = ({ data, view, selectedDate }: PipelineProps) => {
  // Take the most recent month's data for the funnel
  const currentMonthData = data[data.length - 1];

  const calculateConversionRate = (current: number, previous: number): string => {
    return ((current / previous) * 100).toFixed(1) + "%";
  };

  const funnelData: FunnelData[] = [
    {
      value: currentMonthData.leadsRecebidos,
      name: "Leads Recebidos",
      fill: "#9b87f5",
    },
    {
      value: currentMonthData.tentativaConexao,
      name: "Tentativa de Conexão",
      fill: "#7E69AB",
    },
    {
      value: currentMonthData.conectados,
      name: "Conectados",
      fill: "#6E59A5",
    },
    {
      value: currentMonthData.negociacao,
      name: "Negociação",
      fill: "#5a4994",
    },
    {
      value: currentMonthData.venda,
      name: "Venda",
      fill: "#ea384c",
    },
  ];

  return (
    <div className="w-full h-[600px] bg-[#1A1F2C] rounded-lg p-6">
      <ResponsiveContainer width="100%" height="100%">
        <FunnelChart>
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(26, 31, 44, 0.9)",
              border: "1px solid #2a2f3d",
              borderRadius: "8px",
              color: "white",
            }}
          />
          <Funnel
            data={funnelData}
            dataKey="value"
            nameKey="name"
            labelLine={false}
          >
            <LabelList
              position="right"
              fill="#fff"
              stroke="none"
              dataKey={(entry: FunnelData, index: number) => {
                const conversionRate = index === 0 
                  ? "100%" 
                  : calculateConversionRate(entry.value, funnelData[index - 1].value);
                return `${entry.name} (${conversionRate})`;
              }}
            />
          </Funnel>
        </FunnelChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Pipeline;
