import {Projects} from '/lib/collections';

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
    Projects.insert({ code: "13049", title: "Lowes - Guelph Paisley", location: "Guelph, ON", tasks: tasks });
    Projects.insert({ code: "14068", title: "Lowe's of Winnipeg, MB", location: "Winnipeg, MB", tasks: tasks });
    Projects.insert({ code: "14069", title: "Lowe's of SW London, ON", location: "London, ON", tasks: tasks });
    Projects.insert({ code: "14093", title: "Lowe's of Kelowna", location: "Kelowna, BC", tasks: tasks });
    Projects.insert({ code: "14102", title: "Lowe's of Cornwall", location: "Cornwall, ON", tasks: tasks });
    Projects.insert({ code: "14106", title: "Lowe's of Port Coquitlam", location: "Port Coquitlam, BC", tasks: tasks });
    Projects.insert({ code: "14107", title: "Lowe's of Langley", location: "Langley, BC", tasks: tasks });
    Projects.insert({ code: "14108", title: "Lowe's of Ottawa (Shoppers City East)", location: "Ottawa, ON", tasks: tasks });
    Projects.insert({ code: "14110", title: "Lowe's of Port Coquitlam 2 - Lougheed", location: "Port Coquitlam, BC", tasks: tasks });
    Projects.insert({ code: "14111", title: "Lowe's Edmonton Albany", location: "Edmonton, AB", tasks: tasks });
    Projects.insert({ code: "14112", title: "Lowe's Erin Ridge", location: "Edmonton, AB", tasks: tasks });
    Projects.insert({ code: "14114", title: "Lowe's Sherwood Park", location: "Sherwood Park, AB", tasks: tasks });
    Projects.insert({ code: "14115", title: "Lowe's Vancouver (Marine Drive SW)", location: "Vancouver, BC", tasks: tasks });
    Projects.insert({ code: "14116", title: "Lowe's of Mississauga West", location: "Mississauga, ON", tasks: tasks });
    Projects.insert({ code: "15120", title: "Lowe's of Red Deer", location: "Red Deer, Alberta", tasks: tasks });
    Projects.insert({ code: "15121", title: "Lowe's of Peterborough #3", location: "Peterborough, Ontario", tasks: tasks });
    Projects.insert({ code: "15122", title: "Lowe's of North Regina #2 (Armour Crossing)", location: "Regina, Saskatchewan", tasks: tasks });
    Projects.insert({ code: "15124", title: "Lowe's  Milton", location: "Halton Hills, Ontario", tasks: tasks });
    Projects.insert({ code: "15125", title: "Lowe's Richmond Hill", location: "Richmond Hill, Ontario", tasks: tasks });
    Projects.insert({ code: "15126", title: "Lowe's Brampton West", location: "Brampton, Ontario", tasks: tasks });
    Projects.insert({ code: "15148", title: "Lowe's of Regina #3 (Capital Crossing)", location: "Regina, Saskatchewan", tasks: tasks });
    Projects.insert({ code: "15150", title: "Lowe's Erin Mills (Mississauga)", location: "Mississauga, ON", tasks: tasks });
    Projects.insert({ code: "15155", title: "Lowe's of Milton (Milton Mall)", location: "Milton, ON", tasks: tasks });
    Projects.insert({ code: "15156", title: "Lowe's of Ottawa (St. Laurent)", location: "Ottawa, Ontario", tasks: tasks });
    Projects.insert({ code: "15157", title: "Lowe's of Toronto (Centrepoint Mall)", location: "North York, ON", tasks: tasks });
    Projects.insert({ code: "15158", title: "Lowe's of Toronto (Danforth Mall)", location: "Toronto, ON", tasks: tasks });
    Projects.insert({ code: "15159", title: "Lowe's of Thunder Bay (Intercity Mall)", location: "Thunder Bay, ON", tasks: tasks });
    Projects.insert({ code: "15160", title: "Lowe's of Regina (Northgate)", location: "Regina, Saskatchewan", tasks: tasks });
    Projects.insert({ code: "15161", title: "Lowe's of Calgary (Signal Hill)", location: "Calgary, Alberta", tasks: tasks });
    Projects.insert({ code: "15162", title: "Lowe's of Calgary (Shawnessy)", location: "Calgary, Alberta", tasks: tasks });
    Projects.insert({ code: "15163", title: "Lowe's of Abbotsford (Mall)", location: "Abbotsford, BC", tasks: tasks });
    Projects.insert({ code: "15164", title: "Lowe's of Prince George", location: "Prince George, BC", tasks: tasks });
    Projects.insert({ code: "15165", title: "Lowe's of Nanaimo", location: "Nanaimo, BC", tasks: tasks });
    Projects.insert({ code: "15166", title: "Lowe's of Victoria (Tillicum)", location: "Victoria, BC", tasks: tasks });
    Projects.insert({ code: "15167", title: "Lowe's Hamilton Mountain", location: "Hamilton, ON", tasks: tasks });
    Projects.insert({ code: "15168", title: "Lowe's Central Mississauga", location: "Mississauga, ON", tasks: tasks });
    Projects.insert({ code: "15169", title: "Lowe's Ste-Julie", location: "Sainte-Julie, QC", tasks: tasks });
    Projects.insert({ code: "15170", title: "Lowe's Richmond Hill #2", location: "Richmond Hill, Ontario", tasks: tasks });
    Projects.insert({ code: "15171", title: "Lowe's Laval East", location: "Laval, QC", tasks: tasks });
    Projects.insert({ code: "15172", title: "Lowe's Kamloops", location: "Kamloops, BC", tasks: tasks });
    Projects.insert({ code: "15173", title: "Lowe's North Bay", location: "North Bay, ON", tasks: tasks });
    Projects.insert({ code: "15174", title: "Lowe's Hamilton Mountain #2", location: "Hamilton, ON", tasks: tasks });
    Projects.insert({ code: "15175", title: "Lowe's Greenfield Park", location: "Brossars, QC", tasks: tasks });
    Projects.insert({ code: "15176", title: "Lowe's Chateaugay", location: "Chateaugay, QC", tasks: tasks });
    Projects.insert({ code: "15177", title: "Lowe's Montreal NDG", location: "Montreal, QC", tasks: tasks });
    Projects.insert({ code: "15178", title: "Lowe's Pointe Claire", location: "Pointe Claire, QC", tasks: tasks });
    Projects.insert({ code: "15179", title: "Lowe's Vaudreuil", location: "Vaudreuid, QC", tasks: tasks });
    Projects.insert({ code: "15180", title: "Lowe's Gatineau", location: "Gatineau, QC", tasks: tasks });
    Projects.insert({ code: "15181", title: "Lowe's Laval Centre", location: "Laval, QC", tasks: tasks });
    Projects.insert({ code: "15182", title: "Lowe's Ottawa Barrhaven", location: "Ottawa, ON", tasks: tasks });
    Projects.insert({ code: "15183", title: "Lowe's Medicine Hat", location: "Medicine Hat, AB", tasks: tasks });
    Projects.insert({ code: "15184", title: "Lowe's Winnipeg Polo Park", location: "Winnipeg, MB", tasks: tasks });
    Projects.insert({ code: "15185", title: "Lowe's Richmond Hill (Quebecor)", location: "Richmond Hill, Ontario", tasks: tasks });
    Projects.insert({ code: "15189", title: "Lowe's Kawartha Golf Club", location: "Peterborough, ON", tasks: tasks });
    Projects.insert({ code: "15192", title: "Lowe's Orillia - Target Takeover", location: "Orillia, Ontario", tasks: tasks });
    Projects.insert({ code: "15193", title: "Lowe's Grande Prairie", location: "Grande Prairie, Alberta", tasks: tasks });
    Projects.insert({ code: "15194", title: "Lowe's Bowmanville (Clarington)", location: "Bowmanville, ON", tasks: tasks });
    Projects.insert({ code: "15195", title: "Lowe's Spruce Grove", location: "Spruce Grove, Alberta", tasks: tasks });
  }
}
