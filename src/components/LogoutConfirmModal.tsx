import React from "react";
import { LogOut } from "lucide-react";

interface LogoutConfirmModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export function LogoutConfirmModal({ isOpen, onConfirm, onCancel }: LogoutConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-zinc-950 border border-white/10 p-6 rounded-xl shadow-2xl max-w-sm w-full mx-4 animate-in zoom-in-95 duration-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
            <LogOut className="w-5 h-5 text-red-500" />
          </div>
          <h3 className="text-lg font-semibold text-white">Sign Out</h3>
        </div>
        <p className="text-sm text-gray-400 mb-8">
          Are you sure you want to sign out? You will need to authenticate again to access your projects.
        </p>
        <div className="flex justify-end gap-3">
          <button 
            onClick={onCancel}
            className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={onConfirm}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md shadow-lg shadow-red-900/20 transition-all"
          >
            Yes, Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
