export const mockAssets = [
    {
      id: 1,
      name: 'MacBook Pro 16"',
      category: 'IT Equipment',
      status: 'assigned',
      cost: 2499,
      purchaseDate: '2023-01-15',
      assignedTo: 'user1',
      imageUrl: '',
      warrantyExpiry: '2025-01-15',
    },
    {
      id: 2,
      name: 'Office Chair',
      category: 'Furniture',
      status: 'unassigned',
      cost: 399,
      purchaseDate: '2022-11-01',
      assignedTo: null,
      imageUrl: '',
      warrantyExpiry: '2027-11-01',
    },
  ];
  
  export const mockRequests = [
    {
      id: 1,
      userId: 'user2',
      assetId: null,
      type: 'new',
      urgency: 'high',
      status: 'pending',
      reason: 'Need laptop for new hire',
      createdAt: '2023-07-20',
    },
    {
      id: 2,
      userId: 'user1',
      assetId: 1,
      type: 'repair',
      urgency: 'medium',
      status: 'approved',
      reason: 'Keyboard not working',
      createdAt: '2023-07-18',
    },
  ];
  
  export const mockUsers = [
    {
      id: 'user1',
      username: 'john_doe',
      name: 'John Doe',
      role: 'admin',
      department: 'Engineering',
    },
    {
      id: 'user2',
      username: 'jane_smith',
      name: 'Jane Smith',
      role: 'procurement',
      department: 'Operations',
    },
  ];
  
  export const mockDepartments = ['Engineering', 'Operations', 'HR'];