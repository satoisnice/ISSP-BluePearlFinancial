"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Phone, 
  MessageSquare, 
  ChevronDown, 
  ChevronUp,
  BarChart3,
  Users,
  Home,
  GraduationCap,
  DollarSign,
  AlertCircle,
  Target,
  Sparkles,
  MessageCircle,
  Heart,
  ChevronRight,
  Search
} from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { mockClients } from '../../data/mockClients';

export default function BookPage() {
  const [selectedClient, setSelectedClient] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredClients = mockClients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!selectedClient) {
    return <ClientList 
      clients={filteredClients} 
      onSelectClient={setSelectedClient}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
    />;
  }

  return <ClientDetails client={selectedClient} onBack={() => setSelectedClient(null)} />;
}

function ClientList({ clients, onSelectClient, searchTerm, setSearchTerm }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-6">
          <h1 className="text-3xl font-bold mb-4">Client Book</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search clients by name or address..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 max-w-md"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-6">
        <div className="grid gap-4">
          {clients.map((client) => (
            <Card 
              key={client.id} 
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => onSelectClient(client)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold">{client.name}</h3>
                      <Badge 
                        variant={client.renewalDays <= 30 ? "destructive" : client.renewalDays <= 60 ? "default" : "secondary"}
                      >
                        Renewal in {client.renewalDays} days
                      </Badge>
                      {client.opportunities > 0 && (
                        <Badge variant="secondary" className="text-purple-700">
                          <Sparkles className="w-3 h-3 mr-1" />
                          {client.opportunities} Opportunities
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Home className="w-4 h-4" />
                        {client.address}
                      </span>
                      <span>Renewal: {client.renewalDate}</span>
                    </div>
                    <div className="flex gap-8 text-sm">
                      <div>
                        <span className="text-muted-foreground">Current Mortgage: </span>
                        <span className="font-semibold">${client.currentAmount.toLocaleString()} @ {client.currentRate}%</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Property Value: </span>
                        <span className="font-semibold">${client.propertyValue.toLocaleString()}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Available Equity: </span>
                        <span className="font-semibold text-green-600">${client.equity.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {clients.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No clients found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function ClientDetails({ client, onBack }) {
  const [dealOpen, setDealOpen] = useState(true);
  const [lifeChangesOpen, setLifeChangesOpen] = useState(true);
  const [financialOpen, setFinancialOpen] = useState(true);
  const [opportunitiesOpen, setOpportunitiesOpen] = useState(true);
  const [strategyOpen, setStrategyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-4">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            ← Back to Client List
          </Button>
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl font-bold">{client.name}</h1>
                <Badge variant={client.renewalDays <= 30 ? "destructive" : "default"}>
                  Renewal in {client.renewalDays} days
                </Badge>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Home className="w-4 h-4" />
                  {client.address}
                </span>
                <span className="flex items-center gap-1">
                  <DollarSign className="w-4 h-4" />
                  Current: ${client.currentAmount.toLocaleString()} @ {client.currentRate}%
                </span>
                <span className="flex items-center gap-1">
                  Renewal: {client.renewalDate}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button className="bg-green-600 hover:bg-green-700">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button variant="outline">
                <MessageSquare className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics Bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-8 text-sm">
            <div>
              <span className="text-muted-foreground">Property Value: </span>
              <span className="font-semibold">${client.propertyValue.toLocaleString()}</span>
              {client.propertyValueChange && <span className="text-green-600 ml-1">(+{client.propertyValueChange}%)</span>}
            </div>
            <div>
              <span className="text-muted-foreground">Available Equity: </span>
              <span className="font-semibold">${client.equity.toLocaleString()}</span>
            </div>
            {client.paymentRoom && (
              <div>
                <span className="text-muted-foreground">Payment Room: </span>
                <span className="font-semibold">~${client.paymentRoom.toLocaleString()}/mo</span>
              </div>
            )}
            {client.lifetimeValue && (
              <div>
                <span className="text-muted-foreground">Lifetime Value: </span>
                <span className="font-semibold text-green-600">${client.lifetimeValue.toLocaleString()}</span>
              </div>
            )}
            <div className="ml-auto">
              <Badge variant="secondary" className="text-purple-700">
                <Sparkles className="w-3 h-3 mr-1" />
                {client.opportunities} Cross-sell Opportunities
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="col-span-2 space-y-6">
            {/* Original Deal Analysis */}
            <Collapsible open={dealOpen} onOpenChange={setDealOpen}>
              <Card>
                <CollapsibleTrigger className="w-full">
                  <CardHeader className="cursor-pointer hover:bg-slate-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="w-5 h-5 text-blue-600" />
                        <CardTitle>Original Deal Analysis ({client.originalDeal.year})</CardTitle>
                      </div>
                      {dealOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4">Deal Details</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Original Amount:</span>
                            <span className="font-medium">${client.originalDeal.amount.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Rate Secured:</span>
                            <span className="font-medium text-green-600">{client.originalDeal.rateSecured}%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Your Commission:</span>
                            <span className="font-medium">${client.originalDeal.commission.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4">Competitive Landscape</h4>
                        <div className="space-y-3">
                          {client.originalDeal.competitors.map((comp, idx) => (
                            <div key={idx} className="flex items-center justify-between">
                              <span className="text-muted-foreground flex items-center gap-2">
                                <AlertCircle className="w-4 h-4 text-red-500" />
                                {comp.bank} - {comp.rate}%
                              </span>
                            </div>
                          ))}
                          <div className="flex items-center gap-2 text-green-600">
                            <span className="text-sm">✓ You won with best rate</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Separator className="my-4" />
                    <p className="text-sm text-muted-foreground">
                      <strong>Why they chose you:</strong> {client.originalDeal.wonReason}
                    </p>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>

            {/* Life Changes */}
            <Collapsible open={lifeChangesOpen} onOpenChange={setLifeChangesOpen}>
              <Card>
                <CollapsibleTrigger className="w-full">
                  <CardHeader className="cursor-pointer hover:bg-slate-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-purple-600" />
                        <CardTitle>Life Changes Since Last Deal</CardTitle>
                      </div>
                      {lifeChangesOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent>
                    <div className="space-y-4">
                      {client.lifeChanges.map((change, idx) => {
                        const iconMap = {
                          heart: Heart,
                          target: Target,
                          home: Home,
                          graduation: GraduationCap
                        };
                        const IconComponent = iconMap[change.icon] || Heart;
                        const colorMap = {
                          heart: 'pink',
                          target: 'blue',
                          home: 'green',
                          graduation: 'purple'
                        };
                        const color = colorMap[change.icon] || 'pink';
                        
                        return (
                          <div key={idx} className="flex gap-4">
                            <div className="flex-shrink-0">
                              <div className={`w-10 h-10 rounded-full bg-${color}-100 flex items-center justify-center`}>
                                <IconComponent className={`w-5 h-5 text-${color}-600`} />
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-semibold">{change.event}</h4>
                                <Badge variant="secondary">{change.year}</Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">{change.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>

            {/* Financial Snapshot */}
            <Collapsible open={financialOpen} onOpenChange={setFinancialOpen}>
              <Card>
                <CollapsibleTrigger className="w-full">
                  <CardHeader className="cursor-pointer hover:bg-slate-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-green-600" />
                        <CardTitle>Current Financial Snapshot</CardTitle>
                      </div>
                      {financialOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4">Income & Employment</h4>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-muted-foreground">Household Income:</span>
                              <span className="font-medium">${client.financial.householdIncome.toLocaleString()} <span className="text-green-600 text-sm">(+${client.financial.incomeChange.toLocaleString()})</span></span>
                            </div>
                          </div>
                          {Object.keys(client.financial).filter(key => !['householdIncome', 'incomeChange', 'debts'].includes(key)).map((person, idx) => (
                            <div key={idx}>
                              <span className="text-sm text-muted-foreground">{person.charAt(0).toUpperCase() + person.slice(1)}:</span>
                              <p className="text-sm font-medium">{client.financial[person]}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4">Other Debts</h4>
                        <div className="space-y-3">
                          {client.financial.debts.map((debt, idx) => (
                            <div key={idx}>
                              <div className="flex justify-between items-start mb-1">
                                <div>
                                  <p className="font-medium">{debt.type}</p>
                                  <p className="text-sm text-muted-foreground">Payment: ${debt.payment}/mo</p>
                                </div>
                                <div className="text-right">
                                  {debt.amount > 0 && <p className="font-medium">${debt.amount.toLocaleString()}</p>}
                                  {debt.rate > 0 && <p className="text-sm text-red-600">Rate: {debt.rate}%</p>}
                                </div>
                              </div>
                              {idx < client.financial.debts.length - 1 && <Separator />}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Primary Opportunity */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  <CardTitle className="text-blue-900">Primary Opportunity</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-lg mb-2">{client.primaryOpportunity.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{client.primaryOpportunity.description}</p>
                {client.primaryOpportunity.savingsAmount > 0 && (
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <div className="text-sm text-muted-foreground mb-1">Potential Savings:</div>
                    <div className="text-xl font-bold text-blue-900">~${client.primaryOpportunity.savingsAmount}/month vs current rate environment</div>
                  </div>
                )}
                <div className={`flex items-center gap-2 text-sm ${client.primaryOpportunity.urgency === 'critical' ? 'text-red-600' : client.primaryOpportunity.urgency === 'high' ? 'text-red-600' : 'text-yellow-600'}`}>
                  <AlertCircle className="w-4 h-4" />
                  <span className="font-medium">{client.primaryOpportunity.urgencyReason}</span>
                </div>
              </CardContent>
            </Card>

            {/* Cross-sell Opportunities */}
            <Collapsible open={opportunitiesOpen} onOpenChange={setOpportunitiesOpen}>
              <Card>
                <CollapsibleTrigger className="w-full">
                  <CardHeader className="cursor-pointer hover:bg-slate-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-purple-600" />
                        <CardTitle>Cross-sell Opportunities</CardTitle>
                      </div>
                      {opportunitiesOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="space-y-4">
                    {client.crossSellOpportunities.map((opp, idx) => (
                      <div key={idx} className="border-l-4 border-purple-500 pl-4 py-2">
                        <h4 className="font-semibold mb-1">{opp.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{opp.description}</p>
                        <p className={`text-sm font-medium ${opp.type === 'savings' ? 'text-green-600' : opp.type === 'protection' ? 'text-red-600' : 'text-blue-600'}`}>{opp.benefit}</p>
                      </div>
                    ))}
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>

            {/* Conversation Strategy */}
            <Collapsible open={strategyOpen} onOpenChange={setStrategyOpen}>
              <Card>
                <CollapsibleTrigger className="w-full">
                  <CardHeader className="cursor-pointer hover:bg-slate-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-5 h-5 text-green-600" />
                        <CardTitle>Conversation Strategy</CardTitle>
                      </div>
                      {strategyOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Opening:</h4>
                      <p className="text-sm text-muted-foreground italic">
                        "Congratulate on home value increase and Jennifer's career success"
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-2">Key Points:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-0.5">•</span>
                          <span>Market shifted significantly since 2020 - let's protect their rate</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-0.5">•</span>
                          <span>Blend and extend could save $180/month starting now</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-0.5">•</span>
                          <span>Debt consolidation opportunity - free up $275/month</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-0.5">•</span>
                          <span>Growing family needs - insurance gap discussion</span>
                        </li>
                      </ul>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-2">Objection Handlers:</h4>
                      <div className="space-y-3 text-sm">
                        <div>
                          <p className="font-medium">"Staying with TD"</p>
                          <p className="text-muted-foreground italic ml-4">
                            → I can often beat their renewal offer - let me show you the numbers
                          </p>
                        </div>
                        <div>
                          <p className="font-medium">"Rates might drop"</p>
                          <p className="text-muted-foreground italic ml-4">
                            → Lock in now with option to blend down if rates fall
                          </p>
                        </div>
                        <div>
                          <p className="font-medium">"Too busy"</p>
                          <p className="text-muted-foreground italic ml-4">
                            → I'll handle everything - 15 min phone call is all we need
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>

            {/* Competitive Alert - Separate Card */}
            <Card className="bg-yellow-50 border-yellow-200">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-yellow-600" />
                  <CardTitle className="text-yellow-900">Competitive Alert</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                {client.competitiveAlert.threats.map((threat, idx) => (
                  <p key={idx} className="text-sm text-yellow-800 mb-1">{threat}</p>
                ))}
                <p className="text-sm text-yellow-800 mt-2">Client loyalty: {client.competitiveAlert.clientLoyalty}</p>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-between">
                  Generate Renewal Proposal
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  Run New Scenarios
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  Schedule Meeting
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}