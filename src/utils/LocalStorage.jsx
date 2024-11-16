   const employees = [
      {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Complete Project Documentation",
            "description": "Write detailed documentation for the new feature implementation",
            "date": "2024-01-20",
            "category": "Documentation",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Bug Fixes",
            "description": "Fix reported bugs in the login module",
            "date": "2024-01-18", 
            "category": "Development",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Code Review",
            "description": "Review pull requests from team members",
            "date": "2024-01-15",
            "category": "Review",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          }
        ]
      },
      {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "UI Design Updates",
            "description": "Update the dashboard UI components",
            "date": "2024-01-19",
            "category": "Design",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Performance Testing",
            "description": "Conduct performance tests on the application",
            "date": "2024-01-17",
            "category": "Testing",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "API Integration",
            "description": "Integrate third-party payment API",
            "date": "2024-01-16",
            "category": "Development",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Security Audit",
            "description": "Perform security audit of the application",
            "date": "2024-01-14",
            "category": "Security",
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true
          }
        ]
      },
      {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Database Optimization",
            "description": "Optimize database queries for better performance",
            "date": "2024-01-20",
            "category": "Database",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Unit Testing",
            "description": "Write unit tests for new features",
            "date": "2024-01-18",
            "category": "Testing",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Code Refactoring",
            "description": "Refactor legacy code modules",
            "date": "2024-01-15",
            "category": "Development",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          }
        ]
      },
      {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "User Documentation",
            "description": "Create user guide for new features",
            "date": "2024-01-19",
            "category": "Documentation",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Mobile Responsiveness",
            "description": "Ensure mobile compatibility of all pages",
            "date": "2024-01-17",
            "category": "Development",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Bug Investigation",
            "description": "Investigate reported production issues",
            "date": "2024-01-16",
            "category": "Support",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          }
        ]
      },
      {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Feature Implementation",
            "description": "Implement new user authentication system",
            "date": "2024-01-20",
            "category": "Development",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Code Documentation",
            "description": "Document new code implementations",
            "date": "2024-01-18",
            "category": "Documentation",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Performance Optimization",
            "description": "Optimize front-end performance",
            "date": "2024-01-15",
            "category": "Development",
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true
          }
        ]
      }
    ]

    const admin = [
    {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
]


export const setLocalStorage = () => {
     localStorage.setItem('employees', JSON.stringify(employees) )
     localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = localStorage.getItem('employees')
    const admin = localStorage.getItem('admin')
    // console.log(JSON.parse(employees))
    // console.log(JSON.parse(admin))
} 
