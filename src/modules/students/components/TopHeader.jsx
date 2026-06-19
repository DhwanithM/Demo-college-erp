import { Bell, ChevronDown, LogOut, Menu, UserRound } from 'lucide-react';
import toast from 'react-hot-toast';

function SelectBox({ label, width = 'w-64' }) {
  return (
    <button
      onClick={() => toast.success(`${label.replace('*', '')} selector opened`)}
      className={`${width} h-11 bg-white border border-slate-200 rounded-lg shadow-[0_2px_8px_rgba(15,23,42,0.04)] px-4 flex items-center justify-between text-sm text-slate-600`}
    >
      <span>{label}<span className="text-orange-500">*</span></span>
      <ChevronDown size={15} className="text-slate-400" />
    </button>
  );
}

export default function TopHeader({ user, onLogout }) {
  return (
    <header className="h-[72px] bg-white border-b border-slate-200 flex items-center justify-between px-5 lg:px-10 shrink-0">
      <div className="flex items-center gap-5 min-w-0">
        <button
          onClick={() => toast.success('Menu toggled')}
          className="h-12 w-12 rounded-full bg-[#fb9a5b] text-slate-800 flex items-center justify-center shadow-sm shrink-0"
        >
          <Menu size={20} />
        </button>
        <div className="hidden md:flex items-center gap-3">
          <SelectBox label="Select Institute" />
          <SelectBox label="Academic Year" width="w-44" />
        </div>
      </div>

      <div className="flex items-center gap-5">
        <button onClick={() => toast.success('No new notifications')} className="relative text-slate-500">
          <Bell size={19} />
          <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-orange-500 border border-white" />
        </button>
        <div className="hidden sm:block h-9 w-px bg-slate-200" />
        <div className="hidden sm:block text-xs text-slate-700 leading-5">
          <div>Admin ID : ADM-001</div>
          <div>Institute ID : 97</div>
        </div>
        <div className="hidden sm:block h-9 w-px bg-slate-200" />
        <div className="text-right leading-tight">
          <div className="text-sm font-bold text-slate-900">{user?.name || 'Admin'}</div>
          <span className="inline-flex bg-[#ff9f68] text-white text-[9px] px-2 py-0.5 rounded-sm font-bold uppercase">
            Admin
          </span>
        </div>
        <div className="h-10 w-10 rounded-full bg-[#2e333b] text-emerald-300 flex items-center justify-center">
          <UserRound size={22} />
        </div>
        <button
          onClick={onLogout}
          className="h-10 w-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-200"
          title="Logout"
        >
          <LogOut size={18} />
        </button>
      </div>
    </header>
  );
}
