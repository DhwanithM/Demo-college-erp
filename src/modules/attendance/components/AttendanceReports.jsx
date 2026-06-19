import StatusBadge from '../../students/components/StatusBadge';
import { buildReport, summarizeAttendance } from '../attendanceUtils';

export default function AttendanceReports({ records, scope }) {
  const grouped = buildReport(records, scope);
  const rows = Object.entries(grouped).map(([label, items]) => ({ label, ...summarizeAttendance(items) }));

  return (
    <aside className="xl:w-[32%]">
      <div className="bg-white border border-slate-100 rounded-lg p-5 shadow-sm">
        <h3 className="font-bold mb-4">Attendance Reports</h3>
        <div className="space-y-3">
          {rows.map((row) => (
            <div key={row.label} className="rounded-lg bg-[#f5f5f6] p-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="font-semibold">{row.label}</span>
                <StatusBadge value={`${row.percentage}%`} />
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs text-slate-500 mt-2">
                <span>Present: {row.present}</span>
                <span>Absent: {row.absent}</span>
                <span>Total: {row.total}</span>
              </div>
            </div>
          ))}
          {!rows.length && <div className="rounded-lg bg-[#f5f5f6] p-3 text-sm text-slate-500">No attendance reports yet.</div>}
        </div>
      </div>
    </aside>
  );
}
