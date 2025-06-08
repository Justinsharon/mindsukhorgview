
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExecutiveSummary } from "@/components/dashboard/ExecutiveSummary";
import { UtilizationMetrics } from "@/components/dashboard/UtilizationMetrics";
import { MentalHealthIndicators } from "@/components/dashboard/MentalHealthIndicators";
import { BusinessImpactMetrics } from "@/components/dashboard/BusinessImpactMetrics";
import { ROICalculation } from "@/components/dashboard/ROICalculation";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Sahara Mental Health Dashboard</h1>
            <p className="text-muted-foreground mt-2">Comprehensive insights into your organization's mental health program</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-muted-foreground">Last Updated</div>
            <div className="font-medium">{new Date().toLocaleDateString()}</div>
          </div>
        </div>

        <ExecutiveSummary />

        <Tabs defaultValue="utilization" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="utilization">Utilization & Engagement</TabsTrigger>
            <TabsTrigger value="mental-health">Mental Health Indicators</TabsTrigger>
            <TabsTrigger value="business-impact">Business Impact</TabsTrigger>
            <TabsTrigger value="roi">ROI Analysis</TabsTrigger>
          </TabsList>

          <TabsContent value="utilization">
            <UtilizationMetrics />
          </TabsContent>

          <TabsContent value="mental-health">
            <MentalHealthIndicators />
          </TabsContent>

          <TabsContent value="business-impact">
            <BusinessImpactMetrics />
          </TabsContent>

          <TabsContent value="roi">
            <ROICalculation />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
