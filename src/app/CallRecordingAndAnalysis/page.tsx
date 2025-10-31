"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Play,
  Pause,
  Download,
  Share2,
  VolumeX,
  ThumbsUp,
  ThumbsDown,
  AlertCircle,
  CheckCircle,
  TrendingUp,
  Volume2,
  Target,
  DollarSign,
  Users,
  Clock,
  Shield,
  Calendar,
  Phone,

} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Slider } from "@/components/ui/slider";

export default function CallRecordingAndAnalysis() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.load();
    }
  }, []);

  const audioUrl = "/audio/call-recording2.mp3";
  // const audioUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Play/Pause toggle
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Update time as audio plays
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  // Get duration when loaded
  const handleLoadedMetadata = () => {
  if (audioRef.current) {
    const audioDuration = audioRef.current.duration;
    console.log("Metadata loaded, duration:", audioDuration);
    
    // Sometimes duration is Infinity or NaN on first load
    if (audioDuration && isFinite(audioDuration)) {
      setDuration(audioDuration);
    }
  }
};


  // Seek to position
  const handleSeek = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };

  // Volume control
  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    if (newVolume === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  };

  // Toggle mute
  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume;
        setIsMuted(false);
      } else {
        audioRef.current.volume = 0;
        setIsMuted(true);
      }
    }
  };

  // Download audio
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = audioUrl;
    link.download = `call-recording-${Date.now()}.mp3`;
    link.click();
  };

  // Reset when audio ends
  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  // Mock data matching DB schema
  const callData = {
    call_summary: {
      type: "call",
      overview: "Discussed mortgage renewal options with client. Client is rate-sensitive and considering competitor offers. Successfully addressed objections and scheduled follow-up.",
      primary_purpose: "Mortgage Renewal Discussion",
      outcome_achieved: "partial",
    },
    call_metadata: {
      call_date: "Oct 2, 2025",
      call_time: "11:27",
      call_length: "3:45",
      call_agent: "Peter Parker",
      call_contact: "Bruce Banner"
    },
    sentiment_analysis: {
      overall_sentiment: "positive",
      client_interest_level: "high",
      client_trust_level: "medium",
      broker_performance: "good",
    },
    call_quality_metrics: {
      engagement_level: "high",
      next_contact_confirmed: "yes",
      timeline_established: "yes",
      rapport_built: "yes",
      questions_answered_completely: "yes",
      client_concerns_addressed: "yes",
    },
    client_profile: {
      employment_status: "Full-time employed",
      combined_income: 125000,
      family_status: "Married with 2 children",
      goals: ["Lower monthly payments", "Financial stability", "Reduce overall debt"],
      recent_life_changes: ["Child starting university", "Considering home renovation"],
    },
    financial_details: {
      total_debt: 580000,
      current_monthly_payments: 3200,
      down_payment_available: 0,
      current_mortgage_rate: 5.25,
      desired_rate: "4.5% or lower",
      rate_sensitive: "yes",
      loan_amount_discussed: 580000,
      main_concerns: ["Rate competitiveness", "Monthly payment amount", "Approval timeline"],
    },
    property_details: {
      type: "Single Family Home",
      value: 750000,
      location: "Toronto, ON",
      intended_use: "primary",
    },
    key_discussion_points: [
      "Current mortgage renewal timeline",
      "Competitor rate comparison",
      "Options for rate reduction",
      "Impact of rate change on monthly payments",
      "Home equity line of credit possibilities",
    ],
    objections_and_responses: [
      {
        objection: "Another lender offered 4.5%",
        broker_response: "Explained our 4.25% rate with better terms and no hidden fees",
        resolution: "resolved",
        timestamp: "2:15",
      },
      {
        objection: "Concerned about approval timeline",
        broker_response: "Outlined 5-day approval process and provided timeline breakdown",
        resolution: "resolved",
        timestamp: "8:42",
      },
    ],
    call_strengths: [
      {
        strength: "Rate Objection Handling",
        description: "Effectively countered competitor rate with better overall value proposition",
        timestamp: "2:15",
      },
      {
        strength: "Active Listening",
        description: "Identified underlying concern about monthly payment affordability",
        timestamp: "5:30",
      },
    ],
    cross_sell_opportunities: [
      {
        product: "Home Equity Line of Credit (HELOC)",
        trigger: "Mentioned home renovation plans",
        timing: "after_approval",
        notes: "Client has $170k equity, good candidate for HELOC",
        priority: "high",
      },
      {
        product: "Life Insurance Review",
        trigger: "Family status with dependents",
        timing: "future",
        notes: "Standard cross-sell for mortgage clients with children",
        priority: "medium",
      },
    ],
    recommended_follow_up_actions: [
      {
        action: "Send detailed rate comparison sheet",
        due_date: "2025-10-17",
        urgency: "high",
        assigned_to: "broker",
        completed: false,
      },
      {
        action: "Prepare custom proposal with 4.25% rate",
        due_date: "2025-10-18",
        urgency: "high",
        assigned_to: "broker",
        completed: false,
      },
      {
        action: "Schedule follow-up call",
        due_date: "2025-10-20",
        urgency: "medium",
        assigned_to: "both",
        completed: false,
      },
    ],
    urgency_indicators: [
      {
        indicator: "Renewal date approaching",
        impact: "high",
        timeline: "2 weeks",
      },
      {
        indicator: "Active competitor engagement",
        impact: "high",
        timeline: "immediate",
      },
    ],
    competition: {
      competitors_mentioned: ["TD Bank", "RBC"],
      competitive_advantages_used: ["Lower rate", "Faster approval", "Better terms"],
      competitive_threats: ["Competitor rate of 4.5%"],
    },
    transcript: [
      {
        speaker: "Broker",
        time: "0:00",
        text: "Good morning Michael, thanks for taking my call today. I wanted to discuss your upcoming mortgage renewal.",
      },
      {
        speaker: "Client",
        time: "0:08",
        text: "Hi, yes I've been meaning to call about that. My renewal is coming up soon.",
      },
      {
        speaker: "Broker",
        time: "0:15",
        text: "That's right, your renewal date is October 15th. I've reviewed your current mortgage and I think we have some excellent options for you.",
      },
      {
        speaker: "Client",
        time: "0:25",
        text: "I've been shopping around and another lender offered me 4.5%. Can you beat that?",
      },
      {
        speaker: "Broker",
        time: "0:32",
        text: "Absolutely, I understand you want the best rate. Based on your history and equity, I can offer you 4.25% with better terms and no hidden fees.",
      },
    ],
  };

  // Calculate sentiment score
  const sentimentScore = callData.sentiment_analysis.overall_sentiment === "positive" ? 85 : 
                        callData.sentiment_analysis.overall_sentiment === "neutral" ? 50 : 25;

  return (
  <div className="space-y-6">
    <audio
      ref={audioRef}
      src={audioUrl}
      onTimeUpdate={handleTimeUpdate}
      onLoadedMetadata={handleLoadedMetadata}
      onDurationChange={handleLoadedMetadata} 
      onLoadedData={handleLoadedMetadata}
      onCanPlay={handleLoadedMetadata}
      onEnded={handleEnded}
      preload="metadata"
    />

    {/* TOPBAR */}
    <div className="flex items-center justify-between p-6 bg-primary-foreground shadow-sm rounded-xl">
      {/* LEFT SIDE */}
      <div className="flex flex-col">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold">Call Recording & Analysis</h2>
        </div>
        <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
          <p className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {callData.call_metadata.call_date}
          </p>
          <p className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {callData.call_metadata.call_time}
          </p>
          <p className="flex items-center gap-1">
            <Phone className="w-4 h-4" />
            {callData.call_metadata.call_length}
          </p>
          <p className="flex items-center gap-1">
            {callData.call_metadata.call_agent}
          </p>
          <p className="flex items-center gap-1">
            {callData.call_metadata.call_contact}
          </p>

        </div>
      </div>

    {/* RIGHT SIDE BUTTONS */}
    <div className="flex items-center gap-3">
      <Button
        variant="default"
        size="sm"
        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white"
      >
        <Download className="w-4 h-4" />
        <span>Download Recording</span>
      </Button>
      <Button
        variant="default"
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
      >
        <Target className="w-4 h-4" />
        Add to training library
      </Button>
    </div>
  </div>



    {/* AUDIO PLAYER CARD */}
    <Card className="bg-primary-foreground border-0 shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          {/* Play/Pause Button */}
          <Button
            size="icon"
            className="h-12 w-12 rounded-full bg-blue-600 hover:bg-blue-700"
            onClick={togglePlayPause}
            disabled={!audioUrl}
          >
            {isPlaying ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="h-5 w-5 ml-0.5" />
            )}
          </Button>

          {/* Progress Section */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">October 15, 2025</span>
              <span className="text-sm text-gray-600">{formatTime(duration)}</span>
            </div>
            
            {/* REPLACE Progress with Slider */}
            <Slider
              value={[currentTime]}
              max={duration > 0 ? duration : 1} 
              step={0.1}
              onValueChange={handleSeek}
              className="w-full cursor-pointer"
              disabled={duration === 0}
            />
            
            <div className="flex items-center justify-between mt-1">
              <span className="text-xs text-gray-500">{formatTime(currentTime)}</span>
              <span className="text-xs text-gray-500">{formatTime(duration)}</span>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex gap-2">
            {/* Volume Control */}
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={toggleMute}>
                {isMuted ? (
                  <VolumeX className="h-4 w-4" />
                ) : (
                  <Volume2 className="h-4 w-4" />
                )}
              </Button>
              <div className="w-20">
                <Slider
                  value={[isMuted ? 0 : volume]}
                  max={1}
                  step={0.01}
                  onValueChange={handleVolumeChange}
                  className="cursor-pointer"
                />
              </div>
            </div>

            {/* Download Button */}
            <Button variant="outline" size="icon" onClick={handleDownload}>
              <Download className="h-4 w-4" />
            </Button>

            {/* Share Button */}
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>

      {/* CALL SUMMARY */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <Target className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">{callData.call_summary.primary_purpose}</h4>
              <p className="text-sm text-blue-800">{callData.call_summary.overview}</p>
              <div className="flex gap-2 mt-3">
                <Badge className={
                  callData.call_summary.outcome_achieved === "yes" ? "bg-green-100 text-green-800" :
                  callData.call_summary.outcome_achieved === "partial" ? "bg-yellow-100 text-yellow-800" :
                  "bg-red-100 text-red-800"
                }>
                  Outcome: {callData.call_summary.outcome_achieved}
                </Badge>
                <Badge className="bg-blue-100 text-blue-800">
                  Type: {callData.call_summary.type}
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-3 gap-6">
        {/* LEFT COLUMN */}
        <div className="col-span-2 space-y-6">
          {/* CLIENT PROFILE */}
          <Card className="bg-primary-foreground border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Client Profile
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Employment</p>
                  <p className="font-semibold">{callData.client_profile.employment_status}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Combined Income</p>
                  <p className="font-semibold">${callData.client_profile.combined_income.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Family Status</p>
                  <p className="font-semibold">{callData.client_profile.family_status}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Property Value</p>
                  <p className="font-semibold">${callData.property_details.value.toLocaleString()}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">Client Goals</p>
                <div className="space-y-1">
                  {callData.client_profile.goals.map((goal, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>{goal}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FINANCIAL DETAILS */}
          <Card className="bg-primary-foreground border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                Financial Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Current Rate</p>
                  <p className="text-2xl font-bold text-red-600">{callData.financial_details.current_mortgage_rate}%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Desired Rate</p>
                  <p className="text-2xl font-bold text-green-600">{callData.financial_details.desired_rate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Monthly Payment</p>
                  <p className="text-2xl font-bold">${callData.financial_details.current_monthly_payments.toLocaleString()}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">Main Concerns</p>
                <div className="flex flex-wrap gap-2">
                  {callData.financial_details.main_concerns.map((concern, idx) => (
                    <Badge key={idx} variant="outline">{concern}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* TRANSCRIPT */}
          <Card className="bg-primary-foreground border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Call Transcript</span>
                <Button variant="outline" size="sm">
                  Download Transcript
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {callData.transcript.map((entry, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-lg ${
                      entry.speaker === "Broker"
                        ? "bg-blue-50 border-l-4 border-blue-500"
                        : "bg-gray-50 border-l-4 border-gray-400"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-sm">{entry.speaker}</span>
                      <span className="text-xs text-gray-500">{entry.time}</span>
                    </div>
                    <p className="text-sm text-gray-700">{entry.text}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* KEY DISCUSSION POINTS */}
          <Card className="bg-primary-foreground border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Key Discussion Points</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {callData.key_discussion_points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">{point}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* OBJECTIONS */}
          <Card className="bg-primary-foreground border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Objections Handled</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {callData.objections_and_responses.map((obj, idx) => (
                  <div key={idx} className="border-l-4 border-blue-500 pl-4 py-3 bg-gray-50 rounded-r-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-sm">{obj.objection}</span>
                      <Badge className={
                        obj.resolution === "resolved" ? "bg-green-100 text-green-800" :
                        obj.resolution === "partial" ? "bg-yellow-100 text-yellow-800" :
                        "bg-red-100 text-red-800"
                      }>
                        {obj.resolution}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-700 mb-1">{obj.broker_response}</p>
                    <span className="text-xs text-gray-500">{obj.timestamp}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT COLUMN - ANALYSIS */}
        <div className="space-y-6">
          {/* SENTIMENT ANALYSIS */}
          <Card className="bg-primary-foreground border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">Call Sentiment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold text-green-600 capitalize">
                  {callData.sentiment_analysis.overall_sentiment}
                </span>
                <Badge className="bg-green-100 text-green-800">
                  {sentimentScore}%
                </Badge>
              </div>
              <Progress value={sentimentScore} className="h-2 mb-4" />
              
              <div className="space-y-2 mt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Client Interest</span>
                  <span className="font-semibold capitalize">{callData.sentiment_analysis.client_interest_level}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Trust Level</span>
                  <span className="font-semibold capitalize">{callData.sentiment_analysis.client_trust_level}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Broker Performance</span>
                  <span className="font-semibold capitalize">{callData.sentiment_analysis.broker_performance}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CALL QUALITY METRICS */}
          <Card className="bg-primary-foreground border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">Call Quality</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {Object.entries(callData.call_quality_metrics).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <span className="text-sm capitalize">{key.replace(/_/g, ' ')}</span>
                  {value === "yes" || value === "high" ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : value === "partial" || value === "medium" ? (
                    <Clock className="w-5 h-5 text-yellow-600" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-600" />
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* URGENCY INDICATORS */}
          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-600" />
                Urgency Indicators
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {callData.urgency_indicators.map((indicator, idx) => (
                <div key={idx} className="p-3 bg-white rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold">{indicator.indicator}</span>
                    <Badge className={
                      indicator.impact === "high" ? "bg-red-500 text-white" :
                      indicator.impact === "medium" ? "bg-yellow-500 text-white" :
                      "bg-green-500 text-white"
                    }>
                      {indicator.impact}
                    </Badge>
                  </div>
                  {indicator.timeline && (
                    <span className="text-xs text-gray-600">{indicator.timeline}</span>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* CROSS-SELL OPPORTUNITIES */}
          <Card className="bg-primary-foreground border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Cross-Sell Opportunities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {callData.cross_sell_opportunities.map((item, idx) => (
                  <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold">{item.product}</span>
                      <Badge className={
                        item.priority === "high" ? "bg-red-100 text-red-800" :
                        item.priority === "medium" ? "bg-yellow-100 text-yellow-800" :
                        "bg-green-100 text-green-800"
                      }>
                        {item.priority}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-600 mb-1">Trigger: {item.trigger}</p>
                    <p className="text-xs text-gray-700">{item.notes}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* ACTION ITEMS */}
          <Card className="bg-primary-foreground border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">Follow-Up Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {callData.recommended_follow_up_actions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.action}</p>
                      <div className="flex gap-2 mt-1">
                        <span className="text-xs text-gray-600">Due: {item.due_date}</span>
                        <Badge variant="outline" className="text-xs">{item.urgency}</Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CALL STRENGTHS */}
          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <ThumbsUp className="w-4 h-4 text-green-600" />
                Call Strengths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {callData.call_strengths.map((strength, idx) => (
                  <div key={idx}>
                    <p className="text-sm font-semibold text-green-900">{strength.strength}</p>
                    <p className="text-xs text-green-800 mt-1">{strength.description}</p>
                    {strength.timestamp && (
                      <span className="text-xs text-green-600">{strength.timestamp}</span>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* COMPETITION */}
          <Card className="bg-primary-foreground border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Competition
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-600 mb-1">Competitors Mentioned</p>
                  <div className="flex flex-wrap gap-1">
                    {callData.competition.competitors_mentioned.map((comp, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">{comp}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Our Advantages Used</p>
                  <div className="space-y-1">
                    {callData.competition.competitive_advantages_used.map((adv, idx) => (
                      <div key={idx} className="flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                        <span className="text-xs">{adv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}