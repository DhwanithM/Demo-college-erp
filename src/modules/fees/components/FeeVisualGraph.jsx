import { formatCurrency } from '../feeUtils';

function percent(value, max) {
  if (!max) return 0;
  return Math.max(4, Math.round((Number(value || 0) / max) * 100));
}

export default function FeeVisualGraph({ assignments = [], summary = {} }) {
  const totals = [
    ['Assigned', summary.totalAssigned || 0, '#6576d8'],
    ['Collected', summary.totalCollected || 0, '#00c27a'],
    ['Adjusted', summary.totalAdjusted || 0, '#38a5ff'],
    ['Outstanding', summary.totalOutstanding || 0, '#f05252'],
  ];
  const maxTotal = Math.max(...totals.map(([, value]) => Number(value || 0)), 1);
  const classRows = Object.entries(assignments.reduce((map, item) => {
    const key = item.classKey || 'Unassigned';
    map[key] = (map[key] || 0) + Number(item.dueAmount || 0);
    return map;
  }, {})).sort((a, b) => b[1] - a[1]).slice(0, 5);
  const maxClassDue = Math.max(...classRows.map(([, value]) => value), 1);

  return (
    <section className="bg-white border border-slate-100 rounded-lg p-5 mb-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
        <div>
          <h3 className="font-bold text-slate-900">Fee Collection Graph</h3>
          <p className="text-xs text-slate-500 mt-1">Visual summary of collections, waivers, and dues.</p>
        </div>
        <div className="text-xs font-semibold text-slate-500">Collection rate: {summary.collectionRate || 0}%</div>
      </div>

      <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-5">
        <div className="space-y-3">
          {totals.map(([label, value, color]) => (
            <div key={label}>
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-semibold text-slate-600">{label}</span>
                <span className="font-bold text-slate-900">{formatCurrency(value)}</span>
              </div>
              <div className="h-3 rounded-full bg-[#f0f0f2] overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${percent(value, maxTotal)}%`, background: color }} />
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-lg bg-[#f5f5f6] p-4">
          <div className="text-sm font-bold text-slate-900 mb-3">Class-wise Outstanding</div>
          <div className="space-y-3">
            {classRows.map(([classKey, due]) => (
              <div key={classKey}>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-slate-600">{classKey}</span>
                  <span className="font-bold text-slate-900">{formatCurrency(due)}</span>
                </div>
                <div className="h-2 rounded-full bg-white overflow-hidden">
                  <div className="h-full rounded-full bg-[#6576d8]" style={{ width: `${percent(due, maxClassDue)}%` }} />
                </div>
              </div>
            ))}
            {!classRows.length && <div className="text-xs text-slate-500">No fee assignments available.</div>}
          </div>
        </div>
      </div>
    </section>
  );
}
