const questions = [
    {
      id: 1,
      question: 'Have you utilized relevant construction technologies (e.g., BIM, 3D printing, prefabrication technology  in previous projects?',
      options: [
        { value: '1', label: 'Yes' },
        { value: '2', label: 'No' },
      ],
    },
    {
      id: 2,
      question: 'Will you be developing a Work Breakdown Structure (WBS) for this project?',
      options: [
        { value: '1', label: 'Yes' },
        { value: '2', label: 'No' },
      ],
    },
    // Add more questions as needed
    {
        id: 3,
        question: 'Did you use a specific scheduling methodology for this project, such as Critical Path Method (CPM) or Program Evaluation and Review Technique (PERT) ',
        options: [
          { value: '1', label: 'Yes' },
        { value: '2', label: 'No' },
        ],
      },{
        id: 4,
        question: 'Could you plan allocating the right resources (e.g. manpower, equipment) to corresponding tasks in the Work Breakdown Structure (WBS)',
        options: [
          { value: '1', label: 'Yes' },
        { value: '2', label: 'No' },
        ],
      },{
        id: 5,
        question: 'Is it acceptable for you to accommodate change orders (requests for changes to the project scope)?        ',
        options: [
          { value: '1', label: 'Yes' },
        { value: '2', label: 'No' },
        ],
      },{
        id: 6,
        question: 'Does your company have a culture and approach to innovation for addressing unexpected problems?        ',
        options: [
          { value: '1', label: 'Yes' },
        { value: '2', label: 'No' },
        ],
      },{
        id: 7,
        question: 'Do you hold a regular coordination meetings with subcontractors?        ',
        options: [
        
        ],
      },{
        id: 8,
        question: 'In your proposal, would you be willing to include a high-level overview of your proposed procurement plan for this project?         ',
        options: [
          { value: '1', label: 'Yes' },
        { value: '2', label: 'No' },
        ],
      },{
        id: 9,
        question: 'Does the company have measures in place to ensure it can effectively manage this project alongside its other ongoing projects?        ',
        options: [
          { value: '1', label: 'Yes' },
        { value: '2', label: 'No' },
        ],
      },{
        id: 10,
        question: 'Do you have a defined communication plan for this project?        ',
        options: [
          { value: '1', label: 'Yes' },
        { value: '2', label: 'No' },
        ],
      },{
        id: 11,
        question: 'Does your company utilize a project management system to ensure real-time communication, progress tracking, and reporting on all site activities?        ',
        options: [
          { value: '1', label: 'Yes' },
        { value: '2', label: 'No' },
        ],
      },{
        id: 12,
        question: 'Does your company have a defined organizational structure?        ',
        options: [
          { value: '1', label: 'Yes' },
        { value: '2', label: 'No' },
        ],
      },{
      id: 13,
      question: 'Can you evaluate the documented quality policy and quality management system established within your organization?      ',
      options: [
        { value: '1', label: 'Well-established' },
        { value: '2', label: 'Clear' },
        { value: '3', label: 'Unclear' },
      ],
    },{
        id: 14,
        question: 'Does your company hold an ISO certificate for quality management?        ',
        options: [
          { value: '1', label: 'Yes' },
          { value: '2', label: 'No' },
        ],
      },{
        id: 15,
        question: 'Do you have a documented QA/QC plan for construction projects?        ',
        options: [
          { value: '1', label: 'Yes' },
          { value: '2', label: 'No' },
        ],
      },{
        id: 16,
        question: 'Do your company have any LEED certification or experience working on LEED-certified projects?        ',
        options: [
          { value: '1', label: 'Yes' },
        { value: '2', label: 'No' },
        ],
      },{
        id: 17,
        question: 'Does your company utilize a documented project management methodology to ensure effective planning and control of projects?        ',
        options: [
          { value: '1', label: 'Yes' },
          { value: '2', label: 'No' },
        ],
      },{
        id: 18,
        question: 'Do you implement concrete actions based on your plans and procedures, ensuring their success, as part of management system?        ',
        options: [
          { value: '1', label: 'Yes' },
        { value: '2', label: 'No' },
        ],
      },{
        id: 19,
        question: 'Do you provide an insurance to all facilities, equipment, and personnel against possible accidents        ',
        options: [
          { value: '1', label: 'Yes' },
          { value: '2', label: 'No' },
        ],
      },{
        id: 20,
        question: 'Is there a policy in place to ensure the timely payment of wages for employees, agents, and subcontractors?        ',
        options: [
          { value: '1', label: 'Yes' },
        { value: '2', label: 'No' },
        ],
      },{
        id: 21,
        question: 'Does your company provide a detailed cash flow statement?        ',
        options: [
          { value: '1', label: 'Yes' },
          { value: '2', label: 'No' },
        ],
      },
      
      {
        id: 22,
        question: 'What is your classification in the Egyptian Federation for Contractors for Construction and Building?        ',
        options: [
          { value: '1', label: 'first' },
          { value: '2', label: 'second' },
          { value: '3', label: 'third' },
          { value: '4', label: 'fourth' },
          { value: '5', label: 'fifth' },
          { value: '6', label: 'sixth' },
          { value: '7', label: 'seventh' },
        ],
      },{
        id: 23,
        question: 'Do they have a process for documenting and tracking all your fixed assets?        ',
        options: [
          { value: '1', label: 'Yes' },
          { value: '2', label: 'No' },
        ],
      },{
        id: 24,
        question: 'Do you have a diverse workforce with a range of skills, including multi-skilled workers?        ',
        options: [
          { value: '1', label: 'Yes' },
          { value: '2', label: 'No' },
        ],
      },{
        id: 25,
        question: 'Do your board members or key team members have stable, long-term involvement with the company?        ',
        options: [
          { value: '1', label: 'Yes' },
        { value: '2', label: 'No' },
        ],
      },{
        id: 26,
        question: 'Do your staff members receive specialized training for their roles?        ',
        options: [
          { value: '1', label: 'Yes' },
          { value: '2', label: 'No' },
        ],
      },{
        id: 27,
        question: 'What is the availability status of the required materials for the project?        ',
        options: [
          { value: '1', label: 'High' },
          { value: '2', label: 'Limit' },
          { value: '3', label: 'Low' },

        ],
      },{
        id: 28,
        question: 'What is the availability status of the required equipment for the project?        ',
        options: [
          { value: '1', label: 'High' },
          { value: '2', label: 'Limit' },
          { value: '3', label: 'Low' },
        ],
      },{
        id: 29,
        question: 'What is the availability status of the required equipment for the project?        ',
        options: [
          { value: '1', label: 'High' },
          { value: '2', label: 'Limit' },
          { value: '3', label: 'Low' },
        ],
      },{
        id: 30,
        question: 'Do you prioritize the use of appropriate technology for project resources?        ',
        options: [
          { value: '1', label: 'Yes' },
        { value: '2', label: 'No' },
        ],
      },
      {
        id: 31,
        question: 'Do you have dedicated technical staff assigned to this project?        ',
        options: [
          { value: '1', label: 'Yes' },
        { value: '2', label: 'No' },

        ],
      },

      //  Numbeeeeeeeeerrrrrrr
      {
        id: 32,
        question: 'What is the number of similar projects your company has executed?        ',
        options: [
          { value: '1', label: 'High' },
          { value: '2', label: 'Limit' },
          { value: '3', label: 'Low' },

        ],
      },
      {
        id: 33,
        question: 'What is the number of years of experience your company has in construction?        ',
        options: [
          { value: '1', label: 'High' },
          { value: '2', label: 'Limit' },
          { value: '3', label: 'Low' },

        ],
      },
      {
        id: 34,
        question: 'How familiar are you with the regulations and standards specific to our industry?        ',
        options: [
          { value: '1', label: 'High' },
          { value: '2', label: 'Moderate' },
          { value: '3', label: 'Limited' },
          { value: '4', label: 'Non-Familiar' },
        ],
      } , {
        id: 35,
        question: 'Does your company have experience in diverse project types?        ',
        options: [
          { value: '1', label: 'Extensive experience' },
          { value: '2', label: 'Standerd experience' },
          { value: '3', label: 'No relevent' },
        ],
      },
      {
        id: 36,
        question: 'What is the number of years of experience your company has in the region?        ',
        options: [
          { value: '1', label: 'Yes' },
          { value: '2', label: 'No' },
        ],
      },
      {
        id: 37,
        question: "Do you conduct regular safety meetings for your team? ",
        options: [
          { value: '1', label: 'Yes' },
          { value: '2', label: 'No' },
        ],
      },
      {
        id: 38,
        question: 'Does your company employ professional security measures on project sites?        ',
        options: [
          { value: '1', label: 'Yes' },
          { value: '2', label: 'No' },
        ],
      },{
        id: 39,
        question: 'Does your company hold any safety certificates or OSHA certifications?        ',
        options: [
          { value: '1', label: 'Yes' },
          { value: '2', label: 'No' },
        ],
      },
      {
        id: 40,
        question: 'Has your company experienced any accidents or injuries on projects in last two years?        ',
        options: [
          { value: '1', label: 'Yes' },
          { value: '2', label: 'No' },
        ],
      },
      {
        id: 41,
        question: 'Do you have a safety policy and program implemented within your company?        ',
        options: [
          { value: '1', label: 'Yes' },
          { value: '2', label: 'No' },
        ],
      },
      {
        id: 42,
        question: 'Have there been any claim records within the past five years?        ',
        options: [
          { value: '1', label: 'Yes' },
          { value: '2', label: 'No' },
        ],
      },
      {
        id: 43,
        question: 'What is  the state of your current ligitation?         ',
        options: [
          { value: '1', label: 'Pending litigation' },
          { value: '2', label: 'Resolved Past litigation' },
          { value: '3', label: 'record' },
        ],
      },
      {
        id: 44,
        question: 'Has your company experienced any project failures, either in terms of time or cost, in the past two years?        ',
        options: [
          { value: '1', label: 'Yes' },
          { value: '2', label: 'No' },
        ],
      },
      {
        id: 45,
        question: 'Do you ensure continuity and maintain strong relationships with subcontractors and suppliers throughout a long-term project?        ',
        options: [
          { value: '1', label: 'Yes' },
          { value: '2', label: 'No' },
        ],
      },
      {
        id: 46,
        question: 'Do you have any recommendation letters available?        ',
        options: [
          { value: '1', label: 'Two or more' },
          { value: '2', label: 'Single bad' },
          { value: '3', label: 'No' },

        ],
      },{
        id: 47,
        question: 'Does your company possess any awards or official letters of appreciation?        ',
        options: [
          { value: '1', label: 'Yes' },
          { value: '2', label: 'No' },
        ],
      },{
        id: 48,
        question: 'Do you grasp of  project specifications, drawings, and relevant industry standards (e.g., building codes, material specifications)?        ',
        options: [
          { value: '1', label: 'Yes' },
          { value: '2', label: 'No' },
        ],
      },{
        id: 49,
        question: 'Within a certain radius of the project site, has your organization executed any projects comparable to this one?         ',
        options: [
          { value: '1', label: 'Yes' },
          { value: '2', label: 'No' },
        ],
      },{
        id: 50,
        question: 'Will your company be able to demonstrate its compliance with all applicable government regulations throughout the project lifecycle?        ',
        options: [
          { value: '1', label: 'Yes' },
          { value: '2', label: 'No' },
        ],
      },{
        id: 51,
        question: 'Is the project size acceptable for your company is capabilities? ',
        options: [
          { value: '1', label: 'Yes' },
          { value: '2', label: 'No' },
        ],
      }
      // ,{
      //   id: 52,
      //   question: 'Could you provide the proposed price for this project?        ',
      //   options: [
      //     { value: 'Num', label: 'Num' },
      //   ],
      // },{
      //   id: 53,
      //   question: 'Could you provide the expected NPV for this project?        ',
      //   options: [
      //     { value: 'Num', label: 'Num' },
      //   ],
      // }
  ];

  export default questions