Asset Inventory Management System

## Overview

The Asset Inventory Management System is a web-based application designed to facilitate the tracking, allocation, and management of organizational assets. This system provides role-based access for employees, managers, and administrators, enabling streamlined asset requests, repairs, and audits.

## Features

User Authentication: Secure login and signup functionality.

Employee Dashboard: Employees can request assets, submit repair requests, and track asset status.

Manager Dashboard: Manages asset allocations and request approvals.

Admin Dashboard: Comprehensive administrative control over users, assets, requests, and audit logs.

Asset Management: Tracks assets and their lifecycle within the organization.

Request Handling: Allows employees to request assets and administrators to approve/reject requests.

Repair Management: Logs repair requests and tracks their progress.

Audit Logs: Records key actions for system accountability.

Reports and System Configuration: Admins can generate reports and configure system settings.

## Installation

## Prerequisites

Ensure you have the following installed on your system:

Node.js (latest LTS version recommended)

npm or yarn (package manager)

Steps to Install

Clone the repository:

git clone https://github.com/your-repository.git
cd asset-inventory-management

## Install dependencies:

npm install
# or
yarn install

Start the development server:

npm start
# or
yarn start

Open a browser and navigate to http://localhost:3000 to access the application.

## Project Structure

asset-inventory-management/
│── src/
│   ├── employees/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── Sidebar.js
│   │   │   ├── EmployeeDashboard.js
│   │   │   ├── Requests.js
│   │   │   ├── RepairForm.js
│   │   │   ├── Login.js
│   │   │   ├── Signup.js
│   │   │   ├── Repairs.js
│   │   │   ├── RequestForm.js
│   ├── admin/
│   │   ├── pages/
│   │   │   ├── AdminDashboard.js
│   │   │   ├── AdminUsers.js
│   │   │   ├── AdminAssets.js
│   │   │   ├── AdminRequests.js
│   │   │   ├── AuditLogs.js
│   │   │   ├── SystemConfig.js
│   │   │   ├── Reports.js
│   ├── manager/
│   │   ├── Dashboard/DashboardLayout.js
│   │   ├── DataLogic/allocationLogic.js
│── App.js
│── package.json
│── README.md

## Usage

Login/Register: Users must first register and log in to access their respective dashboards.

Request Assets: Employees can submit asset requests for approval.

Manage Assets: Admins and managers can view, allocate, and monitor assets.

Repair Requests: Employees can report issues with assets, and managers/admins can track repairs.

Audit & Reports: Admins can monitor activity logs and generate reports.

## Contributing

We welcome contributions! Please fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License.