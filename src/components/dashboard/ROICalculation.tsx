
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, AreaChart, Area, BarChart, Bar } from "recharts";
import { Calculator, DollarSign, TrendingUp } from "lucide-react";

export const ROICalculation = () => {
  const roiTimeline = [
    { month: "Month 1", investment: 45000, returns: 12000, cumulative: -33000 },
    { month: "Month 3", investment: 45000, returns: 35000, cumulative: -10000 },
    { month: "Month 6", investment: 45000, returns: 62000, cumulative: 17000 },
    { month: "Month 9", investment: 45000, returns: 89000, cumulative: 44000 },
    { month: "Month 12", investment: 45000, returns: 128000, cumulative: 83000 }
  ];

  const costBreakdown = [
    { category: "Platform License", amount: 180000 },
    { category: "Implementation", amount: 25000 },
    { category: "Training", amount: 15000 },
    { category: "Support", amount: 18000 }
  ];

  const returnBreakdown = [
    { category: "Productivity Gains", amount: 275000 },
    { category: "Absence Reduction", amount: 120000 },
    { category: "Retention Savings", amount: 232000 },
    { category: "Healthcare Savings", amount: 45000 }
  ];

  const benchmarkData = [
    { metric: "Our ROI", value: 285, benchmark: 150 },
    { metric: "Payback Period", value: 4.2, benchmark: 8.5 },
    { metric: "Cost per Employee", value: 119, benchmark: 200 }
  ];

  const chartConfig = {
    investment: { label: "Investment", color: "#ef4444" },
    returns: { label: "Returns", color: "#10b981" },
    cumulative: { label: "Cumulative ROI", color: "#3b82f6" },
    amount: { label: "Amount ($)", color: "#8b5cf6" },
    value: { label: "Our Performance", color: "#10b981" },
    benchmark: { label: "Industry Benchmark", color: "#94a3b8" }
  };

  return (
    <div className="space-y-6">
      {/* ROI Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="flex items-center p-6">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">Total ROI</p>
              <p className="text-3xl font-bold text-green-600">285%</p>
              <p className="text-xs text-muted-foreground">$2.85 return per $1 invested</p>
            </div>
            <TrendingUp className="h-8 w-8 text-green-600" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center p-6">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">Payback Period</p>
              <p className="text-3xl font-bold text-blue-600">4.2</p>
              <p className="text-xs text-muted-foreground">months to break even</p>
            </div>
            <Calculator className="h-8 w-8 text-blue-600" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center p-6">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">Net Benefit</p>
              <p className="text-3xl font-bold text-green-600">$434K</p>
              <p className="text-xs text-muted-foreground">annual net savings</p>
            </div>
            <DollarSign className="h-8 w-8 text-green-600" />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>ROI Timeline</CardTitle>
            <p className="text-sm text-muted-foreground">Investment recovery and cumulative returns</p>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <AreaChart data={roiTimeline}>
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area 
                  type="monotone" 
                  dataKey="cumulative" 
                  stroke="var(--color-cumulative)"
                  fill="var(--color-cumulative)"
                  fillOpacity={0.3}
                />
                <Line 
                  type="monotone" 
                  dataKey="returns" 
                  stroke="var(--color-returns)"
                  strokeWidth={3}
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Performance vs Industry Benchmarks</CardTitle>
            <p className="text-sm text-muted-foreground">How we compare to industry standards</p>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <BarChart data={benchmarkData}>
                <XAxis dataKey="metric" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="value" fill="var(--color-value)" />
                <Bar dataKey="benchmark" fill="var(--color-benchmark)" />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Investment Breakdown</CardTitle>
            <p className="text-sm text-muted-foreground">Annual cost components</p>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <BarChart data={costBreakdown}>
                <XAxis dataKey="category" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="amount" fill="var(--color-amount)" />
              </BarChart>
            </ChartContainer>
            <div className="mt-4">
              <div className="flex justify-between font-bold">
                <span>Total Investment</span>
                <span>$238,000</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Return Breakdown</CardTitle>
            <p className="text-sm text-muted-foreground">Annual benefit components</p>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <BarChart data={returnBreakdown}>
                <XAxis dataKey="category" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="amount" fill="var(--color-value)" />
              </BarChart>
            </ChartContainer>
            <div className="mt-4">
              <div className="flex justify-between font-bold">
                <span>Total Returns</span>
                <span>$672,000</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed ROI Calculation */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed ROI Calculation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Annual Investment</h4>
                <div className="space-y-2 text-sm">
                  {costBreakdown.map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <span>{item.category}</span>
                      <span>${item.amount.toLocaleString()}</span>
                    </div>
                  ))}
                  <div className="border-t pt-2 font-bold">
                    <div className="flex justify-between">
                      <span>Total Investment</span>
                      <span>$238,000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Annual Returns</h4>
                <div className="space-y-2 text-sm">
                  {returnBreakdown.map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <span>{item.category}</span>
                      <span>${item.amount.toLocaleString()}</span>
                    </div>
                  ))}
                  <div className="border-t pt-2 font-bold">
                    <div className="flex justify-between">
                      <span>Total Returns</span>
                      <span>$672,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-sm text-muted-foreground">Net Benefit</div>
                  <div className="text-2xl font-bold text-green-600">$434,000</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">ROI Percentage</div>
                  <div className="text-2xl font-bold text-green-600">285%</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Cost Per Employee</div>
                  <div className="text-2xl font-bold text-blue-600">$119</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
