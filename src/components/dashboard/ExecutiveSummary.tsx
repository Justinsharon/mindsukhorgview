
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle } from "lucide-react";

export const ExecutiveSummary = () => {
  const healthIndex = 78;
  const roiValue = 285;
  
  const kpis = [
    {
      title: "Productivity Increase",
      value: "12.5%",
      trend: "up",
      change: "+2.3%",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      title: "Absenteeism Reduction",
      value: "18.2%",
      trend: "down",
      change: "-4.1%",
      icon: TrendingDown,
      color: "text-green-600"
    },
    {
      title: "Employee Retention",
      value: "94.7%",
      trend: "up",
      change: "+5.2%",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      title: "Program Utilization",
      value: "67.3%",
      trend: "up",
      change: "+8.9%",
      icon: TrendingUp,
      color: "text-blue-600"
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

      {/* KPIs Grid */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Key Performance Indicators</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {kpis.map((kpi, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground">{kpi.title}</p>
                  <p className="text-2xl font-bold">{kpi.value}</p>
                  <p className={`text-sm ${kpi.color}`}>{kpi.change} vs last quarter</p>
                </div>
                <kpi.icon className={`h-8 w-8 ${kpi.color}`} />
              </div>
            ))}
          </div>
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
            <p className="text-xs">$2.85 saved for every $1 invested</p>
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
