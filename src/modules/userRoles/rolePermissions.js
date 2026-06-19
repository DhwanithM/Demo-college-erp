export const permissionGroups = [
  {
    id: 'students',
    label: 'Student Information',
    permissions: [
      ['students.view', 'View students'],
      ['students.create', 'Create admissions'],
      ['students.edit', 'Edit profiles'],
      ['students.archive', 'Archive/restore'],
      ['students.documents', 'Upload documents'],
      ['students.verifyDocuments', 'Verify documents'],
      ['students.promote', 'Promote/transfer'],
    ],
  },
  {
    id: 'staff',
    label: 'Faculty & Staff',
    permissions: [
      ['staff.view', 'View faculty/staff'],
      ['staff.create', 'Create faculty/staff'],
      ['staff.edit', 'Edit faculty/staff'],
      ['staff.archive', 'Archive/restore staff'],
      ['staff.leave', 'Manage leave'],
      ['staff.attendance', 'Mark attendance'],
    ],
  },
  {
    id: 'users',
    label: 'Users & Roles',
    permissions: [
      ['users.view', 'View users'],
      ['users.create', 'Create users'],
      ['users.edit', 'Edit users'],
      ['roles.view', 'View roles'],
      ['roles.edit', 'Edit permissions'],
    ],
  },
  {
    id: 'modules',
    label: 'Module Access',
    permissions: [
      ['attendance.view', 'Attendance module'],
      ['attendance.markStudents', 'Mark student attendance'],
      ['attendance.markStaff', 'Mark staff attendance'],
      ['attendance.reports', 'View attendance reports'],
      ['attendance.notifyParents', 'Parent notifications'],
      ['timetable.view', 'Timetable module'],
      ['exams.view', 'Exams module'],
      ['fees.view', 'Fees module'],
      ['parentPortal.view', 'Parent portal'],
    ],
  },
];

export const defaultRoles = [
  {
    id: 'super-admin',
    name: 'Super Admin',
    description: 'Full ERP control including users, roles, and all modules.',
    locked: true,
    permissions: permissionGroups.flatMap((group) => group.permissions.map(([key]) => key)),
  },
  {
    id: 'admin',
    name: 'Admin',
    description: 'Administrative ERP access for daily operations.',
    locked: false,
    permissions: [
      'students.view',
      'students.create',
      'students.edit',
      'students.archive',
      'students.documents',
      'students.verifyDocuments',
      'students.promote',
      'staff.view',
      'staff.create',
      'staff.edit',
      'staff.archive',
      'staff.leave',
      'staff.attendance',
      'users.view',
      'users.create',
      'users.edit',
      'roles.view',
      'attendance.view',
      'attendance.markStudents',
      'attendance.markStaff',
      'attendance.reports',
      'attendance.notifyParents',
      'timetable.view',
      'exams.view',
      'fees.view',
    ],
  },
  {
    id: 'faculty',
    name: 'Faculty',
    description: 'Academic staff access for assigned student and academic workflows.',
    locked: false,
    permissions: [
      'students.view',
      'students.documents',
      'staff.view',
      'staff.leave',
      'staff.attendance',
      'attendance.view',
      'attendance.markStudents',
      'attendance.markStaff',
      'attendance.reports',
      'timetable.view',
      'exams.view',
    ],
  },
  {
    id: 'parent',
    name: 'Parent',
    description: 'Parent portal access for student information visibility.',
    locked: false,
    permissions: [
      'students.view',
      'parentPortal.view',
    ],
  },
];

export function hasPermission(role, permission) {
  return Boolean(role?.permissions?.includes(permission));
}

export function getRoleById(roles, roleId) {
  return roles.find((role) => role.id === roleId) || null;
}

export function canAccess(roles, roleId, permission) {
  return hasPermission(getRoleById(roles, roleId), permission);
}

export function togglePermission(role, permission) {
  const permissions = new Set(role.permissions || []);
  if (permissions.has(permission)) {
    permissions.delete(permission);
  } else {
    permissions.add(permission);
  }
  return [...permissions].sort();
}

export function validateUserForm(form) {
  if (!form.name?.trim()) return 'Name is required.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email || '')) return 'Valid email is required.';
  if (!form.roleId) return 'Role is required.';
  if (!form.password || form.password.length < 6) return 'Password must be at least 6 characters.';
  return '';
}

export function validateUserUpdate(form) {
  if (!form.name?.trim()) return 'Name is required.';
  if (!form.roleId) return 'Role is required.';
  if (!form.status) return 'Status is required.';
  return '';
}
