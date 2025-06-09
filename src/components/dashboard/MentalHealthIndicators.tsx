
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, BarChart, Bar, XAxis, YAxis, LineChart, Line, PieChart, Pie, Cell } from "recharts";

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

  const indexContributors = [
    { factor: "Wellbeing Dimensions", weight: 40, score: 70.6, contribution: 28.2, color: "#3b82f6" },
    { factor: "Risk Distribution", weight: 25, score: 86, contribution: 21.5, color: "#10b981" },
    { factor: "Program Engagement", weight: 20, score: 78, contribution: 15.6, color: "#f59e0b" },
    { factor: "Intervention Success", weight: 15, score: 88, contribution: 13.2, color: "#8b5cf6" }
  ];

  const wellbeingBreakdown = [
    { dimension: "Calmness", score: 72, contribution: 10.3, weight: "14.3%" },
    { dimension: "Connection", score: 68, contribution: 9.7, weight: "14.3%" },
    { dimension: "Coping", score: 75, contribution: 10.7, weight: "14.3%" },
    { dimension: "Happiness", score: 71, contribution: 10.1, weight: "14.3%" },
    { dimension: "Health", score: 69, contribution: 9.9, weight: "14.3%" },
    { dimension: "Fulfillment", score: 73, contribution: 10.4, weight: "14.3%" },
    { dimension: "Sleep", score: 66, contribution: 9.4, weight: "14.3%" }
  ];

  const interventionSuccess = [
    { intervention: "AI Support", successRate: 85, contribution: 3.2 },
    { intervention: "Peer Support", successRate: 92, contribution: 3.5 },
    { intervention: "Professional Referrals", successRate: 96, contribution: 3.6 },
    { intervention: "Self-Help Resources", successRate: 78, contribution: 2.9 }
  ];

  const chartConfig = {
    current: { label: "Current", color: "#3b82f6" },
    previous: { label: "Previous", color: "#94a3b8" },
    score: { label: "Mental Health Score", color: "#10b981" },
    contribution: { label: "Contribution", color: "#3b82f6" }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Overall Mental Health Index</CardTitle>
          <div className="flex items-center gap-4">
            <div className="text-4xl font-bold text-primary">78</div>
            <div className="text-sm text-muted-foreground">
              <div className="text-green-600 font-medium">+16 points since January</div>
              <div>Comprehensive organizational mental health score</div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="breakdown">
              <AccordionTrigger>View Contributing Factors Breakdown</AccordionTrigger>
              <AccordionContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Primary Contributing Factors</h4>
                    <ChartContainer config={chartConfig} className="h-[250px]">
                      <PieChart>
                        <Pie
                          data={indexContributors}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          dataKey="contribution"
                          label={({ factor, contribution }) => `${factor}: ${contribution}`}
                        >
                          {indexContributors.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ChartContainer>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Factor Details</h4>
                    {indexContributors.map((factor, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{factor.factor}</span>
                          <span className="text-sm text-muted-foreground">{factor.weight}% weight</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                          <div 
                            className="h-2 rounded-full" 
                            style={{ width: `${factor.score}%`, backgroundColor: factor.color }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Score: {factor.score}/100</span>
                          <span className="font-medium">+{factor.contribution} points</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Wellbeing Dimensions Breakdown (40% weight)</h4>
                    <div className="space-y-3">
                      {wellbeingBreakdown.map((item, index) => (
                        <div key={index} className="flex justify-between items-center p-3 border rounded">
                          <span className="font-medium">{item.dimension}</span>
                          <div className="text-right">
                            <div className="text-sm font-medium">{item.score}/100</div>
                            <div className="text-xs text-muted-foreground">+{item.contribution} pts</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-4">Intervention Success Rates (15% weight)</h4>
                    <div className="space-y-3">
                      {interventionSuccess.map((item, index) => (
                        <div key={index} className="flex justify-between items-center p-3 border rounded">
                          <span className="font-medium">{item.intervention}</span>
                          <div className="text-right">
                            <div className="text-sm font-medium">{item.successRate}% success</div>
                            <div className="text-xs text-muted-foreground">+{item.contribution} pts</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="text-center p-4 border rounded-lg bg-blue-50">
                    <div className="text-xl font-bold text-blue-600">25%</div>
                    <div className="text-sm text-muted-foreground">Risk Distribution</div>
                    <div className="text-xs">+21.5 points</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg bg-green-50">
                    <div className="text-xl font-bold text-green-600">20%</div>
                    <div className="text-sm text-muted-foreground">Program Engagement</div>
                    <div className="text-xs">+15.6 points</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg bg-amber-50">
                    <div className="text-xl font-bold text-amber-600">67.3%</div>
                    <div className="text-sm text-muted-foreground">Utilization Rate</div>
                    <div className="text-xs">Contributing factor</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg bg-purple-50">
                    <div className="text-xl font-bold text-purple-600">88%</div>
                    <div className="text-sm text-muted-foreground">Avg. Intervention Success</div>
                    <div className="text-xs">+13.2 points</div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

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
