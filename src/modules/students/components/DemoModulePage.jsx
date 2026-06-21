import { Plus, Users } from 'lucide-react';
import toast from 'react-hot-toast';
import { demoModuleContent } from '../demoModuleContent';
import StatusBadge from './StatusBadge';

export default function DemoModulePage({ page, onOpenStudents }) {
  const current = demoModuleContent[page] || demoModuleContent.academics;

  return (
    <div>
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{current.title}</h1>
          <p className="text-sm text-slate-500 mt-1">{current.subtitle}</p>
        </div>
        <button
          onClick={onOpenStudents}
          className="h-10 px-5 rounded-full bg-[#fb9a5b] text-white font-semibold text-sm flex items-center gap-2"
        >
          <Users size={16} /> Back to Students
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-4 py-5">
        {current.actions.map((action) => (
          <button
            key={action}
            onClick={() => toast.success(`${action} clicked`)}
            className="bg-[#f5f5f6] rounded-lg p-5 text-left hover:bg-[#eeeeef] transition-colors"
          >
            <div className="h-11 w-11 bg-white rounded-lg flex items-center justify-center text-[#34363d] shadow-sm mb-4">
              <Plus size={20} />
            </div>
            <div className="font-bold text-slate-900">{action}</div>
            <div className="text-xs text-slate-500 mt-1">Demo action is clickable and ready for real workflow wiring.</div>
          </button>
        ))}
      </div>

      <div className="erp-demo-table border border-slate-100 rounded-xl shadow-sm overflow-hidden">
        <div className="grid grid-cols-3 bg-[#101e26] text-sm font-bold text-slate-500">
          <div className="px-5 py-3">Item</div>
          <div className="px-5 py-3">Details</div>
          <div className="px-5 py-3">Status</div>
        </div>
        {current.rows.map(([item, detail, status]) => (
          <button
            key={item}
            onClick={() => toast.success(`${item} opened`)}
            className="grid grid-cols-3 w-full text-left border-t border-slate-100 bg-transparent hover:bg-[#101e26] text-sm"
          >
            <div className="px-5 py-4 font-semibold text-slate-900">{item}</div>
            <div className="px-5 py-4 text-slate-600">{detail}</div>
            <div className="px-5 py-4"><StatusBadge value={status === 'Paid' ? 'Active' : status} /></div>
          </button>
        ))}
      </div>
    </div>
  );
}
