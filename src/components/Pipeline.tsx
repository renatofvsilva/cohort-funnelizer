
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { PipelineData } from "@/types/pipeline";

interface PipelineProps {
  data: PipelineData[];
  view: "cohort" | "static";
  selectedDate: Date;
}

const Pipeline = ({ data, view, selectedDate }: PipelineProps) => {
  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="leadsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
          <XAxis dataKey="month" className="text-gray-600" />
          <YAxis className="text-gray-600" />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "none",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
          <Area
            type="monotone"
            dataKey="leadsRecebidos"
            stroke="#6366f1"
            fillOpacity={1}
            fill="url(#leadsGradient)"
          />
          <Area
            type="monotone"
            dataKey="tentativaConexao"
            stroke="#4f46e5"
            fill="#4f46e5"
            fillOpacity={0.6}
          />
          <Area
            type="monotone"
            dataKey="conectados"
            stroke="#4338ca"
            fill="#4338ca"
            fillOpacity={0.4}
          />
          <Area
            type="monotone"
            dataKey="negociacao"
            stroke="#3730a3"
            fill="#3730a3"
            fillOpacity={0.3}
          />
          <Area
            type="monotone"
            dataKey="venda"
            stroke="#312e81"
            fill="#312e81"
            fillOpacity={0.2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Pipeline;
