export const demoDepartments = [
  { id: 'demo-dept-science', name: 'Science', headName: 'Dr. Kavita Menon', status: 'Active' },
  { id: 'demo-dept-commerce', name: 'Commerce', headName: 'Prof. Ramesh Iyer', status: 'Active' },
  { id: 'demo-dept-admin', name: 'Administration', headName: 'Anjali Kapoor', status: 'Active' },
];

export const demoStaffMembers = [
  {
    id: 'demo-staff-1001',
    employeeId: 'EMP-1001',
    name: 'Dr. Kavita Menon',
    staffType: 'Faculty',
    department: 'Science',
    designation: 'Senior Lecturer',
    phone: '+91 98765 10001',
    email: 'kavita.menon@college.edu',
    qualification: 'PhD Physics',
    status: 'Active',
    createdAtText: '03 Jun 2026',
  },
  {
    id: 'demo-staff-1002',
    employeeId: 'EMP-1002',
    name: 'Prof. Ramesh Iyer',
    staffType: 'Faculty',
    department: 'Commerce',
    designation: 'Assistant Professor',
    phone: '+91 98765 10002',
    email: 'ramesh.iyer@college.edu',
    qualification: 'M.Com',
    status: 'Active',
    createdAtText: '04 Jun 2026',
  },
  {
    id: 'demo-staff-2001',
    employeeId: 'EMP-2001',
    name: 'Anjali Kapoor',
    staffType: 'Staff',
    department: 'Administration',
    designation: 'Office Administrator',
    phone: '+91 98765 20001',
    email: 'anjali.kapoor@college.edu',
    qualification: 'MBA',
    status: 'Active',
    createdAtText: '05 Jun 2026',
  },
];

export const demoLeaveRecords = [
  {
    id: 'demo-leave-1',
    staffRecordId: 'demo-staff-1002',
    employeeId: 'EMP-1002',
    leaveType: 'Casual Leave',
    fromDate: '2026-06-20',
    toDate: '2026-06-21',
    reason: 'Family function',
    status: 'Pending Review',
    requestedAtText: '18 Jun 2026',
  },
];

export const demoAttendanceRecords = [
  {
    id: 'demo-attendance-1',
    staffRecordId: 'demo-staff-1001',
    employeeId: 'EMP-1001',
    dateText: '18 Jun 2026',
    status: 'Present',
    markedAtText: '18 Jun 2026',
  },
];
