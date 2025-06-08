
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, LineChart, Line, ComposedChart } from "recharts";
import { TrendingUp, TrendingDown, DollarSign, Users } from "lucide-react";

export const BusinessImpactMetrics = () => {
  const productivityData = [
    { month: "Jan", productivity: 85, presenteeism: 78 },
    { month: "Feb", productivity: 87, presenteeism: 82 },
    { month: "Mar", productivity: 89, presenteeism: 85 },
    { month: "Apr", productivity: 92, presenteeism: 88 },
    { month: "May", productivity: 94, presenteeism: 91 },
    { month: "Jun", productivity: 97, presenteeism: 94 }
  ];

  const absenteeismData = [
    { month: "Jan", days: 4.2, cost: 1540000 },
    { month: "Feb", days: 3.8, cost: 1390000 },
    { month: "Mar", days: 3.5, cost: 1280000 },
    { month: "Apr", days: 3.1, cost: 1130000 },
    { month: "May", days: 2.9, cost: 1060000 },
    { month: "Jun", days: 2.4, cost: 880000 }
  ];

  const retentionMetrics = [
    { department: "Engineering", before: 89, after: 96 },
    { department: "Sales", before: 82, after: 94 },
    { department: "Support", before: 78, after: 91 },
    { department: "Marketing", before: 85, after: 93 },
    { department: "HR", before: 91, after: 97 }
  ];

  const chartConfig = {
    productivity: { label: "Productivity Index", color: "#3b82f6" },
    presenteeism: { label: "Presenteeism Reduction", color: "#10b981" },
    days: { label: "Absence Days", color: "#ef4444" },
    cost: { label: "Cost (₹)", color: "#f59e0b" },
    before: { label: "Before MindSukh", color: "#94a3b8" },
    after: { label: "After MindSukh", color: "#10b981" }
  };

  return (
    <div className="space-y-6">
      {/* Key Metrics Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="flex items-center p-6">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">Productivity Increase</p>
              <p className="text-2xl font-bold text-green-600">+12.5%</p>
              <p className="text-xs text-muted-foreground flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" /> vs baseline
              </p>
            </div>
            <TrendingUp className="h-8 w-8 text-green-600" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center p-6">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">Absenteeism Reduction</p>
              <p className="text-2xl font-bold text-green-600">-43%</p>
              <p className="text-xs text-muted-foreground flex items-center">
                <TrendingDown className="h-3 w-3 mr-1" /> from 4.2 to 2.4 days/month
              </p>
            </div>
            <TrendingDown className="h-8 w-8 text-green-600" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center p-6">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">Cost Savings</p>
              <p className="text-2xl font-bold text-green-600">₹2.85Cr</p>
              <p className="text-xs text-muted-foreground flex items-center">
                <DollarSign className="h-3 w-3 mr-1" /> annual projected
              </p>
            </div>
            <DollarSign className="h-8 w-8 text-green-600" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center p-6">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">Retention Rate</p>
              <p className="text-2xl font-bold text-green-600">94.7%</p>
              <p className="text-xs text-muted-foreground flex items-center">
                <Users className="h-3 w-3 mr-1" /> +5.2% improvement
              </p>
            </div>
            <Users className="h-8 w-8 text-green-600" />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Productivity & Presenteeism Trends</CardTitle>
            <p className="text-sm text-muted-foreground">6-month improvement trajectory</p>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <ComposedChart data={productivityData}>
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line 
                  type="monotone" 
                  dataKey="productivity" 
                  stroke="var(--color-productivity)"
                  strokeWidth={3}
                />
                <Line 
                  type="monotone" 
                  dataKey="presenteeism" 
                  stroke="var(--color-presenteeism)"
                  strokeWidth={3}
                />
              </ComposedChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Absenteeism Impact</CardTitle>
            <p className="text-sm text-muted-foreground">Monthly absence days and associated costs</p>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <ComposedChart data={absenteeismData}>
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar yAxisId="left" dataKey="days" fill="var(--color-days)" />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="cost" 
                  stroke="var(--color-cost)"
                  strokeWidth={3}
                />
              </ComposedChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Retention Rate by Department</CardTitle>
            <p className="text-sm text-muted-foreground">Before vs. after MindSukh implementation</p>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <BarChart data={retentionMetrics}>
                <XAxis dataKey="department" />
                <YAxis domain={[70, 100]} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="before" fill="var(--color-before)" />
                <Bar dataKey="after" fill="var(--color-after)" />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Financial Impact Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Annual Financial Impact Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold">Productivity Gains</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Increased output</span>
                  <span className="font-medium">₹1,50,00,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Reduced presenteeism</span>
                  <span className="font-medium">₹79,00,000</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Absence Reduction</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Saved sick days</span>
                  <span className="font-medium">₹65,00,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Reduced temp costs</span>
                  <span className="font-medium">₹35,00,000</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Retention Benefits</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Reduced turnover</span>
                  <span className="font-medium">₹1,37,00,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Lower recruitment</span>
                  <span className="font-medium">₹56,00,000</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t pt-4 mt-6">
            <div className="flex justify-between text-lg font-bold">
              <span>Total Annual Savings</span>
              <span className="text-green-600">₹5,22,00,000</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
