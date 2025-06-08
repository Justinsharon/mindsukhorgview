
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

export const UtilizationMetrics = () => {
  const utilizationTrend = [
    { month: "Jan", utilization: 45 },
    { month: "Feb", utilization: 52 },
    { month: "Mar", utilization: 58 },
    { month: "Apr", utilization: 63 },
    { month: "May", utilization: 67 },
    { month: "Jun", utilization: 73 }
  ];

  const featureUsage = [
    { feature: "AI Support", usage: 89 },
    { feature: "Assessments", usage: 67 },
    { feature: "Community", usage: 45 },
    { feature: "Resources", usage: 78 },
    { feature: "Coaching", usage: 34 }
  ];

  const engagementData = [
    { name: "High Engagement", value: 35, color: "#22c55e" },
    { name: "Medium Engagement", value: 45, color: "#3b82f6" },
    { name: "Low Engagement", value: 20, color: "#f59e0b" }
  ];

  const chartConfig = {
    utilization: { label: "Utilization %", color: "#3b82f6" },
    usage: { label: "Usage %", color: "#10b981" }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Overall Utilization Rate</CardTitle>
          <p className="text-sm text-muted-foreground">67.3% of employees have accessed MindSukh</p>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px]">
            <LineChart data={utilizationTrend}>
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line 
                type="monotone" 
                dataKey="utilization" 
                stroke="var(--color-utilization)"
                strokeWidth={3}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Feature Utilization Breakdown</CardTitle>
          <p className="text-sm text-muted-foreground">Usage across different platform features</p>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px]">
            <BarChart data={featureUsage}>
              <XAxis dataKey="feature" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="usage" fill="var(--color-usage)" />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>User Engagement Distribution</CardTitle>
          <p className="text-sm text-muted-foreground">Based on frequency and depth of interaction</p>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px]">
            <PieChart>
              <Pie
                data={engagementData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {engagementData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Key Utilization Metrics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-primary">8.5</div>
              <div className="text-sm text-muted-foreground">Avg. Sessions per User</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-primary">23min</div>
              <div className="text-sm text-muted-foreground">Avg. Session Duration</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-primary">78%</div>
              <div className="text-sm text-muted-foreground">Program Completion Rate</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-primary">4.2/5</div>
              <div className="text-sm text-muted-foreground">User Satisfaction</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
