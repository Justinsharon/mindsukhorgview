
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle } from "lucide-react";

export const ExecutiveSummary = () => {
  const healthIndex = 78;
  const roiValue = 285;
  
  const kpis = [
    {
      id: "productivity",
      title: "Productivity Increase",
      value: "12.5%",
      trend: "up",
      change: "+2.3%",
      icon: TrendingUp,
      color: "text-green-600",
      details: {
        departmentBreakdown: [
          { department: "Engineering", improvement: "15.2%", baseline: 82, current: 94 },
          { department: "Sales", improvement: "18.7%", baseline: 78, current: 93 },
          { department: "Marketing", improvement: "9.3%", baseline: 85, current: 93 },
          { department: "Support", improvement: "11.8%", baseline: 80, current: 89 },
          { department: "HR", improvement: "8.5%", baseline: 88, current: 95 }
        ],
        metrics: [
          { metric: "Task Completion Rate", improvement: "+14.2%" },
          { metric: "Focus & Concentration", improvement: "+16.8%" },
          { metric: "Work Quality Score", improvement: "+11.3%" },
          { metric: "Goal Achievement", improvement: "+13.7%" }
        ],
        contributingFactors: [
          "Reduced stress-related distractions",
          "Better sleep quality leading to sharper focus",
          "Improved emotional regulation",
          "Enhanced team collaboration"
        ]
      }
    },
    {
      id: "absenteeism",
      title: "Absenteeism Reduction",
      value: "18.2%",
      trend: "down",
      change: "-4.1%",
      icon: TrendingDown,
      color: "text-green-600",
      details: {
        departmentBreakdown: [
          { department: "Engineering", reduction: "16.5%", beforeDays: 4.8, afterDays: 4.0 },
          { department: "Sales", reduction: "22.1%", beforeDays: 5.2, afterDays: 4.0 },
          { department: "Marketing", reduction: "14.3%", beforeDays: 4.2, afterDays: 3.6 },
          { department: "Support", reduction: "25.8%", beforeDays: 6.2, afterDays: 4.6 },
          { department: "HR", reduction: "12.5%", beforeDays: 3.2, afterDays: 2.8 }
        ],
        absenceTypes: [
          { type: "Mental Health Related", reduction: "32.4%", costSaving: "₹2,45,000" },
          { type: "Stress-induced Illness", reduction: "28.7%", costSaving: "₹1,85,000" },
          { type: "General Sick Days", reduction: "15.2%", costSaving: "₹1,25,000" }
        ],
        monthlyTrend: [
          { month: "Jan", days: 5.2 },
          { month: "Feb", days: 4.8 },
          { month: "Mar", days: 4.3 },
          { month: "Apr", days: 3.9 },
          { month: "May", days: 3.6 },
          { month: "Jun", days: 3.2 }
        ]
      }
    },
    {
      id: "retention",
      title: "Employee Retention",
      value: "94.7%",
      trend: "up",
      change: "+5.2%",
      icon: TrendingUp,
      color: "text-green-600",
      details: {
        departmentBreakdown: [
          { department: "Engineering", before: "89.2%", after: "96.8%", improvement: "+7.6%" },
          { department: "Sales", before: "82.1%", after: "94.3%", improvement: "+12.2%" },
          { department: "Marketing", before: "85.5%", after: "92.8%", improvement: "+7.3%" },
          { department: "Support", before: "78.9%", after: "90.5%", improvement: "+11.6%" },
          { department: "HR", before: "91.2%", after: "97.1%", improvement: "+5.9%" }
        ],
        retentionReasons: [
          { reason: "Better work-life balance", percentage: "34%" },
          { reason: "Improved mental wellbeing", percentage: "28%" },
          { reason: "Reduced workplace stress", percentage: "22%" },
          { reason: "Enhanced job satisfaction", percentage: "16%" }
        ],
        costSavings: [
          { category: "Reduced Recruitment Costs", amount: "₹8,75,000" },
          { category: "Lower Training Expenses", amount: "₹5,25,000" },
          { category: "Knowledge Retention", amount: "₹12,50,000" },
          { category: "Reduced Onboarding Time", amount: "₹3,75,000" }
        ]
      }
    },
    {
      id: "utilization",
      title: "Program Utilization",
      value: "67.3%",
      trend: "up",
      change: "+8.9%",
      icon: TrendingUp,
      color: "text-blue-600",
      details: {
        featureUsage: [
          { feature: "AI Mental Health Assistant", usage: "89%", sessions: 2845 },
          { feature: "Stress Assessment Tools", usage: "67%", sessions: 1876 },
          { feature: "Peer Support Community", usage: "45%", sessions: 1234 },
          { feature: "Wellness Resources", usage: "78%", sessions: 2156 },
          { feature: "Professional Coaching", usage: "34%", sessions: 892 }
        ],
        departmentAdoption: [
          { department: "Engineering", adoption: "72.4%" },
          { department: "Sales", adoption: "68.9%" },
          { department: "Marketing", adoption: "64.2%" },
          { department: "Support", adoption: "71.8%" },
          { department: "HR", adoption: "85.3%" }
        ],
        engagementMetrics: [
          { metric: "Average Session Duration", value: "23 minutes" },
          { metric: "Monthly Active Users", value: "1,847" },
          { metric: "Feature Completion Rate", value: "78%" },
          { metric: "User Satisfaction Score", value: "4.2/5" }
        ]
      }
    }
  ];

  const alerts = [
    { type: "warning", message: "Engineering team showing increased stress indicators" },
    { type: "success", message: "Sales team mental health scores improved 15%" }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Mental Health Index */}
      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Overall Mental Health Index
            <span className="text-2xl font-bold text-primary">{healthIndex}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Progress value={healthIndex} className="w-full" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Poor (0-40)</span>
            <span>Good (40-70)</span>
            <span>Excellent (70-100)</span>
          </div>
          <div className="text-sm">
            <span className="text-green-600">↗ +4.2%</span> from last month
          </div>
        </CardContent>
      </Card>

      {/* Expandable KPIs */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Key Performance Indicators</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {kpis.map((kpi, index) => (
              <AccordionItem key={kpi.id} value={kpi.id}>
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center justify-between w-full pr-4">
                    <div className="flex items-center gap-4">
                      <kpi.icon className={`h-6 w-6 ${kpi.color}`} />
                      <div className="text-left">
                        <p className="font-medium">{kpi.title}</p>
                        <p className="text-2xl font-bold">{kpi.value}</p>
                        <p className={`text-sm ${kpi.color}`}>{kpi.change} vs last quarter</p>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="space-y-6">
                    {kpi.id === "productivity" && (
                      <>
                        <div>
                          <h4 className="font-semibold mb-3">Department-wise Improvement</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {kpi.details.departmentBreakdown.map((dept, idx) => (
                              <div key={idx} className="flex justify-between p-3 border rounded">
                                <span>{dept.department}</span>
                                <span className="font-medium text-green-600">{dept.improvement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Key Metrics Improved</h4>
                          <div className="space-y-2">
                            {kpi.details.metrics.map((metric, idx) => (
                              <div key={idx} className="flex justify-between">
                                <span>{metric.metric}</span>
                                <span className="text-green-600">{metric.improvement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Contributing Factors</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            {kpi.details.contributingFactors.map((factor, idx) => (
                              <li key={idx}>{factor}</li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}
                    
                    {kpi.id === "absenteeism" && (
                      <>
                        <div>
                          <h4 className="font-semibold mb-3">Department-wise Reduction</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {kpi.details.departmentBreakdown.map((dept, idx) => (
                              <div key={idx} className="p-3 border rounded">
                                <div className="flex justify-between">
                                  <span>{dept.department}</span>
                                  <span className="font-medium text-green-600">{dept.reduction}</span>
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  {dept.beforeDays} → {dept.afterDays} days/month
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Absence Type Analysis</h4>
                          <div className="space-y-2">
                            {kpi.details.absenceTypes.map((type, idx) => (
                              <div key={idx} className="flex justify-between items-center p-2 border rounded">
                                <span>{type.type}</span>
                                <div className="text-right">
                                  <div className="text-green-600">{type.reduction}</div>
                                  <div className="text-sm text-muted-foreground">{type.costSaving} saved</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}

                    {kpi.id === "retention" && (
                      <>
                        <div>
                          <h4 className="font-semibold mb-3">Department-wise Retention</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {kpi.details.departmentBreakdown.map((dept, idx) => (
                              <div key={idx} className="p-3 border rounded">
                                <div className="flex justify-between">
                                  <span>{dept.department}</span>
                                  <span className="font-medium text-green-600">{dept.improvement}</span>
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  {dept.before} → {dept.after}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Cost Savings Breakdown</h4>
                          <div className="space-y-2">
                            {kpi.details.costSavings.map((saving, idx) => (
                              <div key={idx} className="flex justify-between">
                                <span>{saving.category}</span>
                                <span className="font-medium text-green-600">{saving.amount}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}

                    {kpi.id === "utilization" && (
                      <>
                        <div>
                          <h4 className="font-semibold mb-3">Feature Usage Statistics</h4>
                          <div className="space-y-2">
                            {kpi.details.featureUsage.map((feature, idx) => (
                              <div key={idx} className="flex justify-between items-center p-2 border rounded">
                                <span>{feature.feature}</span>
                                <div className="text-right">
                                  <div className="font-medium">{feature.usage}</div>
                                  <div className="text-sm text-muted-foreground">{feature.sessions} sessions</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Department Adoption Rates</h4>
                          <div className="grid grid-cols-2 gap-3">
                            {kpi.details.departmentAdoption.map((dept, idx) => (
                              <div key={idx} className="flex justify-between p-2 border rounded">
                                <span>{dept.department}</span>
                                <span className="font-medium">{dept.adoption}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      {/* ROI Summary */}
      <Card>
        <CardHeader>
          <CardTitle>ROI Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-green-600">{roiValue}%</div>
            <p className="text-sm text-muted-foreground">Return on Investment</p>
            <p className="text-xs">₹2.85 saved for every ₹1 invested</p>
          </div>
        </CardContent>
      </Card>

      {/* Critical Alerts */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Critical Alerts & Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {alerts.map((alert, index) => (
              <div key={index} className={`flex items-center gap-3 p-3 rounded-lg ${
                alert.type === 'warning' ? 'bg-amber-50 border border-amber-200' : 'bg-green-50 border border-green-200'
              }`}>
                {alert.type === 'warning' ? (
                  <AlertTriangle className="h-5 w-5 text-amber-600" />
                ) : (
                  <CheckCircle className="h-5 w-5 text-green-600" />
                )}
                <span className="text-sm">{alert.message}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
