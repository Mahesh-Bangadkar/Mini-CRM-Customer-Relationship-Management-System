import React from "react";

const EditLeadModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 px-2 py-2 backdrop-blur-sm">
      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/20 bg-white shadow-2xl">
        <div className="flex justify-between border-b border-slate-100 bg-linear-to-r from-slate-50 to-white px-4 py-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Update lead details</h3>
          </div>

          <button
            className="rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            onClick={onClose}
            aria-label="Close edit dialog"
          >
            ✕
          </button>
        </div>

        <div className="max-h-[80vh] overflow-y-auto px-1.5 py-1.5">{children}</div>
      </div>
    </div>
  );
};

export default EditLeadModal;