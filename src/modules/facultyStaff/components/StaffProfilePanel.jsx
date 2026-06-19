import { CalendarCheck, CheckCircle, UserRound, XCircle } from 'lucide-react';
import StatusBadge from '../../students/components/StatusBadge';

export default function StaffProfilePanel({
  attendanceRecords,
  canManageLeave,
  canMarkAttendance,
  leaveRecords,
  onAttendance,
  onLeaveDecision,
  staffMember,
}) {
  const relatedLeaves = leaveRecords.slice(0, 4);
  const relatedAttendance = attendanceRecords.slice(0, 4);

  return (
    <aside className="xl:w-[32%]">
      <div className="bg-[#f0f0f2] rounded-lg p-4 mb-5">
        <div className="bg-white rounded-lg p-5">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-bold text-slate-900">Staff Profile</h2>
            <StatusBadge value={staffMember.status} />
          </div>
          <div className="flex items-center gap-4 mb-5">
            <div className="h-20 w-20 rounded-full bg-[#30343c] text-emerald-300 flex items-center justify-center">
              <UserRound size={38} />
            </div>
            <div>
              <div className="text-lg font-bold">{staffMember.name}</div>
              <div className="text-sm text-slate-500">{staffMember.designation}</div>
              <div className="text-xs text-slate-500">{staffMember.department}</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <div className="text-xs text-slate-500">Employee ID</div>
              <div className="font-semibold">{staffMember.employeeId}</div>
            </div>
            <div>
              <div className="text-xs text-slate-500">Type</div>
              <div className="font-semibold">{staffMember.staffType}</div>
            </div>
            <div className="col-span-2">
              <div className="text-xs text-slate-500">Qualification</div>
              <div className="font-semibold">{staffMember.qualification || 'Not recorded'}</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-5">
            {['Present', 'Absent'].map((status) => (
              <button
                key={status}
                onClick={() => onAttendance(status)}
                disabled={!canMarkAttendance}
                className={`h-10 rounded-full text-white font-semibold text-sm disabled:bg-slate-300 disabled:cursor-not-allowed ${status === 'Present' ? 'bg-emerald-600' : 'bg-rose-600'}`}
              >
                Mark {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-100 rounded-lg p-5 shadow-sm mb-5">
        <h3 className="font-bold mb-4">Leave Management</h3>
        <div className="space-y-3">
          {relatedLeaves.map((leave) => (
            <div key={leave.id} className="rounded-lg bg-[#f5f5f6] p-3 text-sm">
              <div className="flex items-center justify-between gap-2">
                <span className="font-semibold">{leave.leaveType}</span>
                <StatusBadge value={leave.status} />
              </div>
              <div className="text-xs text-slate-500 mt-1">{leave.fromDate} to {leave.toDate}</div>
              <div className="text-xs text-slate-600 mt-1">{leave.reason}</div>
              {leave.status === 'Pending Review' && canManageLeave && (
                <div className="flex gap-2 mt-3">
                  <button onClick={() => onLeaveDecision(leave, 'Approved')} className="h-8 px-3 rounded-md bg-white border border-emerald-200 text-emerald-700 text-xs font-semibold flex items-center gap-1">
                    <CheckCircle size={13} /> Approve
                  </button>
                  <button onClick={() => onLeaveDecision(leave, 'Rejected')} className="h-8 px-3 rounded-md bg-white border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-1">
                    <XCircle size={13} /> Reject
                  </button>
                </div>
              )}
            </div>
          ))}
          {!relatedLeaves.length && <div className="rounded-lg bg-[#f5f5f6] p-3 text-sm text-slate-500">No leave records.</div>}
        </div>
      </div>

      <div className="bg-white border border-slate-100 rounded-lg p-5 shadow-sm">
        <h3 className="font-bold mb-4">Attendance</h3>
        <div className="space-y-3">
          {relatedAttendance.map((attendance) => (
            <div key={attendance.id} className="h-11 rounded-lg bg-[#f5f5f6] px-3 flex items-center justify-between text-sm">
              <span className="flex items-center gap-2"><CalendarCheck size={16} /> {attendance.dateText}</span>
              <StatusBadge value={attendance.status} />
            </div>
          ))}
          {!relatedAttendance.length && <div className="rounded-lg bg-[#f5f5f6] p-3 text-sm text-slate-500">No attendance marked.</div>}
        </div>
      </div>
    </aside>
  );
}
