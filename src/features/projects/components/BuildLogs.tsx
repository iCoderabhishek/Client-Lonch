"use client";

import React, { useEffect, useState, useRef } from "react";

interface BuildLogsProps {
  deploymentId: string;
}

export function BuildLogs({ deploymentId }: BuildLogsProps) {
  const [logs, setLogs] = useState<string[]>([]);
  const [status, setStatus] = useState<"CONNECTING" | "STREAMING" | "DONE" | "ERROR">("CONNECTING");
  const scrollRef = useRef<HTMLDivElement>(null);
  const eventSourceRef = useRef<EventSource | null>(null);

  useEffect(() => {
    if (!deploymentId) return;

    setLogs([]);
    setStatus("CONNECTING");

    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") || "http://localhost:8080/api/v1";

    // EventSource with withCredentials to send the session cookie
    const eventSource = new EventSource(
      `${apiBaseUrl}/logs/deployments/${deploymentId}/build`,
      { withCredentials: true }
    );
    eventSourceRef.current = eventSource;

    eventSource.onopen = () => {
      setStatus("STREAMING");
    };

    eventSource.onmessage = (event) => {
      const data = event.data;

      // Backend sends this marker when logs are complete
      if (data === "[BUILD_COMPLETE]") {
        setStatus("DONE");
        eventSource.close();
        return;
      }

      setLogs((prev) => [...prev, data]);
    };

    eventSource.onerror = () => {
      // If we already have logs, it's likely just the stream closing normally
      setLogs((prev) => {
        if (prev.length > 0) {
          setStatus("DONE");
        } else {
          setStatus("ERROR");
        }
        return prev;
      });
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, [deploymentId]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  const statusLabel = status === "DONE" ? "COMPLETE" : status;
  const statusColor = status === "STREAMING"
    ? "bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"
    : status === "ERROR"
      ? "bg-red-500"
      : status === "DONE"
        ? "bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
        : "bg-gray-500 animate-pulse";

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
          <span className={`w-2 h-2 rounded-full ${statusColor}`} />
          {statusLabel}
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
        {logs.length === 0 && status === "ERROR" && (
          <div className="text-gray-400 mt-4 border border-white/10 bg-white/5 p-3 rounded text-center italic">
            No build logs available yet. Logs appear when a deployment starts.
          </div>
        )}
        {status === "DONE" && logs.length > 0 && (
          <div className="text-cyan-400/70 mt-4 text-center text-xs italic">
            ── Build log complete ──
          </div>
        )}
      </div>
    </div>
  );
}
