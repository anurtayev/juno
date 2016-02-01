import {Projects} from '/libs/collections';

export default function () {
  const tasks = [
    "2019.01 - Screening",
    "2019.03 - REC Site Planning and Planning",
    "2019.04 - REC Engineering",
    "2019.06 - Due Diligence",
    "2021.02 - Permitting - Project Management",
    "2023.01 - Permitting - 40% submission",
    "2023.02 - Permitting - 90% submission",
    "2023.03 - Permitting - 100% submission",
    "2023.09 - permitting - Site Plan",
    "2024 - Permitting - Offsite Plans",
    "2026.01 - Contract Admin - Pre Construction Services",
    "2026.02 - Contract Admin - Attend Pre-Bid Meeting",
    "2026.03 - Contract Admin - Attend Pre-Construction Meeting",
    "2026.04 - Contract Admin - Bi-weekly Site Visits",
    "2026.05 - Contract Admin - Conduct Preliminary Site Works Review",
    "2026.06 - Contract Admin - Conduct Final Site Works Review",
    "2026.07 - Contract Admin - Review of Shop Drawings",
    "2026.08 - Contract Admin - Review Site Works Change order Information",
    "2026.09 - Contract Admin - Review of Site Works As-built Information",
    "2026.10 - Contract Admin - Provide Civil Letter of General Conformance",
    "2026.11 - Contract Admin - General Coordination",
  ];

  if (!Projects.findOne()) {
    Projects.insert({ projectNumber: "13049", projectName: "Lowes - Guelph Paisley", location: "Guelph, ON", tasks: tasks });
    Projects.insert({ projectNumber: "14068", projectName: "Lowe's of Winnipeg, MB", location: "Winnipeg, MB", tasks: tasks });
    Projects.insert({ projectNumber: "14069", projectName: "Lowe's of SW London, ON", location: "London, ON", tasks: tasks });
    Projects.insert({ projectNumber: "14093", projectName: "Lowe's of Kelowna", location: "Kelowna, BC", tasks: tasks });
    Projects.insert({ projectNumber: "14102", projectName: "Lowe's of Cornwall", location: "Cornwall, ON", tasks: tasks });
    Projects.insert({ projectNumber: "14106", projectName: "Lowe's of Port Coquitlam", location: "Port Coquitlam, BC", tasks: tasks });
    Projects.insert({ projectNumber: "14107", projectName: "Lowe's of Langley", location: "Langley, BC", tasks: tasks });
    Projects.insert({ projectNumber: "14108", projectName: "Lowe's of Ottawa (Shoppers City East)", location: "Ottawa, ON", tasks: tasks });
    Projects.insert({ projectNumber: "14110", projectName: "Lowe's of Port Coquitlam 2 - Lougheed", location: "Port Coquitlam, BC", tasks: tasks });
    Projects.insert({ projectNumber: "14111", projectName: "Lowe's Edmonton Albany", location: "Edmonton, AB", tasks: tasks });
    Projects.insert({ projectNumber: "14112", projectName: "Lowe's Erin Ridge", location: "Edmonton, AB", tasks: tasks });
    Projects.insert({ projectNumber: "14114", projectName: "Lowe's Sherwood Park", location: "Sherwood Park, AB", tasks: tasks });
    Projects.insert({ projectNumber: "14115", projectName: "Lowe's Vancouver (Marine Drive SW)", location: "Vancouver, BC", tasks: tasks });
    Projects.insert({ projectNumber: "14116", projectName: "Lowe's of Mississauga West", location: "Mississauga, ON", tasks: tasks });
    Projects.insert({ projectNumber: "15120", projectName: "Lowe's of Red Deer", location: "Red Deer, Alberta", tasks: tasks });
    Projects.insert({ projectNumber: "15121", projectName: "Lowe's of Peterborough #3", location: "Peterborough, Ontario", tasks: tasks });
    Projects.insert({ projectNumber: "15122", projectName: "Lowe's of North Regina #2 (Armour Crossing)", location: "Regina, Saskatchewan", tasks: tasks });
    Projects.insert({ projectNumber: "15124", projectName: "Lowe's  Milton", location: "Halton Hills, Ontario", tasks: tasks });
    Projects.insert({ projectNumber: "15125", projectName: "Lowe's Richmond Hill", location: "Richmond Hill, Ontario", tasks: tasks });
    Projects.insert({ projectNumber: "15126", projectName: "Lowe's Brampton West", location: "Brampton, Ontario", tasks: tasks });
    Projects.insert({ projectNumber: "15148", projectName: "Lowe's of Regina #3 (Capital Crossing)", location: "Regina, Saskatchewan", tasks: tasks });
    Projects.insert({ projectNumber: "15150", projectName: "Lowe's Erin Mills (Mississauga)", location: "Mississauga, ON", tasks: tasks });
    Projects.insert({ projectNumber: "15155", projectName: "Lowe's of Milton (Milton Mall)", location: "Milton, ON", tasks: tasks });
    Projects.insert({ projectNumber: "15156", projectName: "Lowe's of Ottawa (St. Laurent)", location: "Ottawa, Ontario", tasks: tasks });
    Projects.insert({ projectNumber: "15157", projectName: "Lowe's of Toronto (Centrepoint Mall)", location: "North York, ON", tasks: tasks });
    Projects.insert({ projectNumber: "15158", projectName: "Lowe's of Toronto (Danforth Mall)", location: "Toronto, ON", tasks: tasks });
    Projects.insert({ projectNumber: "15159", projectName: "Lowe's of Thunder Bay (Intercity Mall)", location: "Thunder Bay, ON", tasks: tasks });
    Projects.insert({ projectNumber: "15160", projectName: "Lowe's of Regina (Northgate)", location: "Regina, Saskatchewan", tasks: tasks });
    Projects.insert({ projectNumber: "15161", projectName: "Lowe's of Calgary (Signal Hill)", location: "Calgary, Alberta", tasks: tasks });
    Projects.insert({ projectNumber: "15162", projectName: "Lowe's of Calgary (Shawnessy)", location: "Calgary, Alberta", tasks: tasks });
    Projects.insert({ projectNumber: "15163", projectName: "Lowe's of Abbotsford (Mall)", location: "Abbotsford, BC", tasks: tasks });
    Projects.insert({ projectNumber: "15164", projectName: "Lowe's of Prince George", location: "Prince George, BC", tasks: tasks });
    Projects.insert({ projectNumber: "15165", projectName: "Lowe's of Nanaimo", location: "Nanaimo, BC", tasks: tasks });
    Projects.insert({ projectNumber: "15166", projectName: "Lowe's of Victoria (Tillicum)", location: "Victoria, BC", tasks: tasks });
    Projects.insert({ projectNumber: "15167", projectName: "Lowe's Hamilton Mountain", location: "Hamilton, ON", tasks: tasks });
    Projects.insert({ projectNumber: "15168", projectName: "Lowe's Central Mississauga", location: "Mississauga, ON", tasks: tasks });
    Projects.insert({ projectNumber: "15169", projectName: "Lowe's Ste-Julie", location: "Sainte-Julie, QC", tasks: tasks });
    Projects.insert({ projectNumber: "15170", projectName: "Lowe's Richmond Hill #2", location: "Richmond Hill, Ontario", tasks: tasks });
    Projects.insert({ projectNumber: "15171", projectName: "Lowe's Laval East", location: "Laval, QC", tasks: tasks });
    Projects.insert({ projectNumber: "15172", projectName: "Lowe's Kamloops", location: "Kamloops, BC", tasks: tasks });
    Projects.insert({ projectNumber: "15173", projectName: "Lowe's North Bay", location: "North Bay, ON", tasks: tasks });
    Projects.insert({ projectNumber: "15174", projectName: "Lowe's Hamilton Mountain #2", location: "Hamilton, ON", tasks: tasks });
    Projects.insert({ projectNumber: "15175", projectName: "Lowe's Greenfield Park", location: "Brossars, QC", tasks: tasks });
    Projects.insert({ projectNumber: "15176", projectName: "Lowe's Chateaugay", location: "Chateaugay, QC", tasks: tasks });
    Projects.insert({ projectNumber: "15177", projectName: "Lowe's Montreal NDG", location: "Montreal, QC", tasks: tasks });
    Projects.insert({ projectNumber: "15178", projectName: "Lowe's Pointe Claire", location: "Pointe Claire, QC", tasks: tasks });
    Projects.insert({ projectNumber: "15179", projectName: "Lowe's Vaudreuil", location: "Vaudreuid, QC", tasks: tasks });
    Projects.insert({ projectNumber: "15180", projectName: "Lowe's Gatineau", location: "Gatineau, QC", tasks: tasks });
    Projects.insert({ projectNumber: "15181", projectName: "Lowe's Laval Centre", location: "Laval, QC", tasks: tasks });
    Projects.insert({ projectNumber: "15182", projectName: "Lowe's Ottawa Barrhaven", location: "Ottawa, ON", tasks: tasks });
    Projects.insert({ projectNumber: "15183", projectName: "Lowe's Medicine Hat", location: "Medicine Hat, AB", tasks: tasks });
    Projects.insert({ projectNumber: "15184", projectName: "Lowe's Winnipeg Polo Park", location: "Winnipeg, MB", tasks: tasks });
    Projects.insert({ projectNumber: "15185", projectName: "Lowe's Richmond Hill (Quebecor)", location: "Richmond Hill, Ontario", tasks: tasks });
    Projects.insert({ projectNumber: "15189", projectName: "Lowe's Kawartha Golf Club", location: "Peterborough, ON", tasks: tasks });
    Projects.insert({ projectNumber: "15192", projectName: "Lowe's Orillia - Target Takeover", location: "Orillia, Ontario", tasks: tasks });
    Projects.insert({ projectNumber: "15193", projectName: "Lowe's Grande Prairie", location: "Grande Prairie, Alberta", tasks: tasks });
    Projects.insert({ projectNumber: "15194", projectName: "Lowe's Bowmanville (Clarington)", location: "Bowmanville, ON", tasks: tasks });
    Projects.insert({ projectNumber: "15195", projectName: "Lowe's Spruce Grove", location: "Spruce Grove, Alberta", tasks: tasks });
  }
}
