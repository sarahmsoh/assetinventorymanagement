import React from 'react';
import ApproveRequestModal from '../RequestManagement/ApproveRequestModal';

const Sidebar = () => {
  return (
    <aside>
      <nav>
      <ul>
        <li><a href="/manage-assets">Manage Asserts</a></li>
        <li><a href="/pending-requests">Pending & Approved Requests</a></li>
        <li><a href="/allocation-assert">Allocate Assert</a></li>
        <li><a href="/asset-allocated">Assert Allocated</a></li>
        <li><a href="/completed-requests">Completed Requests</a></li>
        <li><a href="/Rejected">Reject Request</a></li>
        <li><a href="/">Exit</a></li>
      </ul>
      </nav>
      <ApproveRequestModal />
    </aside>
  );
};

export default Sidebar;
