"use client";

import React, { useEffect, useState, useRef } from "react";
import { API_BASE_URL } from "@/lib/client";

interface BuildLogsProps {
  deploymentId: string;
}

export function BuildLogs({ deploymentId }: BuildLogsProps) {
  const [logs, setLogs] = useState<string[]>([]);
  const [status, setStatus] = useState<"CONNECTING" | "STREAMING" | "CLOSED" | "ERROR">("CONNECTING");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!deploymentId) return;
    
    // Need to include withCredentials for the auth cookie to be sent with EventSource
    const eventSource = new EventSource(`${process.env.NEXT_PUBLIC_API_BASE_URL}/logs/deployments/${deploymentId}/build`, {
      withCredentials: true,
    });

    eventSource.onopen = () => {
      setStatus("STREAMING");
    };

    eventSource.onmessage = (event) => {
      setLogs((prev) => [...prev, event.data]);
    };

    eventSource.onerror = (err) => {
      console.error("EventSource failed:", err);
      setStatus("ERROR");
      eventSource.close();
    };

    return () => {
      eventSource.close();
      setStatus("CLOSED");
    };
  }, [deploymentId]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="bg-[#0c0c0c] border border-white/10 rounded-xl overflow-hidden flex flex-col h-[500px] shadow-[0_0_30px_rgba(0,0,0,0.5)]">
      <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center justify-between text-xs text-gray-400 font-mono relative">
        <div className="flex items-center gap-2">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <span className="ml-3 uppercase tracking-wider text-[10px]">Build Output</span>
        </div>
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${status === "STREAMING" ? "bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" : status === "ERROR" ? "bg-red-500" : "bg-gray-500"}`} />
          {status}
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 font-mono text-sm whitespace-pre-wrap text-gray-300"
      >
        {logs.length === 0 && status === "CONNECTING" && (
          <div className="text-gray-500 italic animate-pulse">Connecting to build stream...</div>
        )}
        {logs.map((log, index) => (
          <div key={index} className="leading-relaxed hover:bg-white/5 px-2 -mx-2 rounded transition-colors">
            {log}
          </div>
        ))}
        {status === "ERROR" && (
          <div className="text-gray-400 mt-4 border border-white/10 bg-white/5 p-3 rounded text-center italic">
            Build logs are visible when the project is deploying.
          </div>
        )}
      </div>
    </div>
  );
}
