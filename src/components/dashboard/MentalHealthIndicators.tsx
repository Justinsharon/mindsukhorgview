
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, BarChart, Bar, XAxis, YAxis, LineChart, Line } from "recharts";

export const MentalHealthIndicators = () => {
  const wellbeingDimensions = [
    { dimension: "Calmness", current: 72, previous: 65 },
    { dimension: "Connection", current: 68, previous: 62 },
    { dimension: "Coping", current: 75, previous: 69 },
    { dimension: "Happiness", current: 71, previous: 66 },
    { dimension: "Health", current: 69, previous: 64 },
    { dimension: "Fulfillment", current: 73, previous: 68 },
    { dimension: "Sleep", current: 66, previous: 59 }
  ];

  const riskDistribution = [
    { risk: "Low Risk", percentage: 65, count: 1300 },
    { risk: "Medium Risk", percentage: 28, count: 560 },
    { risk: "High Risk", percentage: 7, count: 140 }
  ];

  const improvementTrend = [
    { month: "Jan", score: 62 },
    { month: "Feb", score: 65 },
    { month: "Mar", score: 68 },
    { month: "Apr", score: 71 },
    { month: "May", score: 74 },
    { month: "Jun", score: 78 }
  ];

  const chartConfig = {
    current: { label: "Current", color: "#3b82f6" },
    previous: { label: "Previous", color: "#94a3b8" },
    score: { label: "Mental Health Score", color: "#10b981" }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Mental Health Dimensions</CardTitle>
          <p className="text-sm text-muted-foreground">Organization-wide wellbeing across key dimensions</p>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[400px]">
            <RadarChart data={wellbeingDimensions}>
              <PolarGrid />
              <PolarAngleAxis dataKey="dimension" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} />
              <Radar
                name="Current"
                dataKey="current"
                stroke="var(--color-current)"
                fill="var(--color-current)"
                fillOpacity={0.3}
              />
              <Radar
                name="Previous Quarter"
                dataKey="previous"
                stroke="var(--color-previous)"
                fill="var(--color-previous)"
                fillOpacity={0.1}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
            </RadarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Mental Health Risk Distribution</CardTitle>
          <p className="text-sm text-muted-foreground">Workforce distribution across risk categories</p>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px]">
            <BarChart data={riskDistribution}>
              <XAxis dataKey="risk" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="percentage" fill="var(--color-current)" />
            </BarChart>
          </ChartContainer>
          <div className="mt-4 space-y-2">
            {riskDistribution.map((item, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span>{item.risk}</span>
                <span className="font-medium">{item.count} employees</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Mental Health Score Trend</CardTitle>
          <p className="text-sm text-muted-foreground">6-month improvement trajectory</p>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px]">
            <LineChart data={improvementTrend}>
              <XAxis dataKey="month" />
              <YAxis domain={[50, 85]} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line 
                type="monotone" 
                dataKey="score" 
                stroke="var(--color-score)"
                strokeWidth={3}
              />
            </LineChart>
          </ChartContainer>
          <div className="mt-4 text-center">
            <div className="text-2xl font-bold text-green-600">+16 points</div>
            <div className="text-sm text-muted-foreground">improvement since January</div>
          </div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Intervention Effectiveness</CardTitle>
          <p className="text-sm text-muted-foreground">Success rates across different support pathways</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-primary">85%</div>
              <div className="text-sm text-muted-foreground">AI Chatbot Success</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-primary">92%</div>
              <div className="text-sm text-muted-foreground">Peer Support Groups</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-primary">78%</div>
              <div className="text-sm text-muted-foreground">Self-Help Resources</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-primary">96%</div>
              <div className="text-sm text-muted-foreground">Professional Referrals</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
