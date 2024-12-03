export interface Task {
    id: string;
    name: string;
    description: string;
    project: string;
    notes?: string;
    assignedTo?: string;
    status: 'Not Started' | 'In Progress' | 'Completed';
}

export interface User {
    id: string;
    username: string;
    passwordHash: string;
    role: 'Admin' | 'User';
}
