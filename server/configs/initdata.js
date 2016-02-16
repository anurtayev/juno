import {Projects} from '/libs/collections';

export default function () {
  const LowesTasks = [
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
  
  const tasks2 = [
    '100 - PM',
    '200 - Planning',
    '300 - Site Planning',
    '400 - Engineering',
    '500 - Contract Admin'
  ];
  
  if (!Projects.findOne()) {
    // non Lowes
    Projects.insert({ projectNumber: "14050", projectName: "0976440 BC Ltd. - 3011 No. 5 Road, Richmond", tasks: tasks2 });
    Projects.insert({ projectNumber: "14055", projectName: "Walmart Gander", tasks: tasks2 });
    Projects.insert({ projectNumber: "14056", projectName: "BC IMC Royal Bay", tasks: tasks2 });
    Projects.insert({ projectNumber: "14058", projectName: "Arbutus Saskatoon", tasks: tasks2 });
    Projects.insert({ projectNumber: "14059", projectName: "Walmart King City", tasks: tasks2 });
    Projects.insert({ projectNumber: "14061", projectName: "Walmart Etobicoke", tasks: tasks2 });
    Projects.insert({ projectNumber: "14090", projectName: "Chatham Pioneer Square - Avila Investments Ltd", tasks: tasks2 });
    Projects.insert({ projectNumber: "14091", projectName: "UDGA Langley", tasks: tasks2 });
    Projects.insert({ projectNumber: "14092", projectName: "UDGA Maple Ridge", tasks: tasks2 });
    Projects.insert({ projectNumber: "14094", projectName: "Walmart Dauphin 3022", tasks: tasks2 });
    Projects.insert({ projectNumber: "14095", projectName: "Walmart Moose Jaw 3173", tasks: tasks2 });
    Projects.insert({ projectNumber: "14096", projectName: "Walmart Brooks 3658", tasks: tasks2 });
    Projects.insert({ projectNumber: "14097", projectName: "Walmart Trail 1011", tasks: tasks2 });
    Projects.insert({ projectNumber: "14098", projectName: "Walmart Nelson 3060", tasks: tasks2 });
    Projects.insert({ projectNumber: "14099", projectName: "Fengate SSM (c/o Daniel Cusimano)", tasks: tasks2 });
    Projects.insert({ projectNumber: "14101", projectName: "Terracap North Battleford Sask", tasks: tasks2 });
    Projects.insert({ projectNumber: "14103", projectName: "Cad Services for Arutip Engineering", tasks: tasks2 });
    Projects.insert({ projectNumber: "14104", projectName: "Walmart GO Tire", tasks: tasks2 });
    Projects.insert({ projectNumber: "14105", projectName: "N&T Properties Vernon", tasks: tasks2 });
    Projects.insert({ projectNumber: "14109", projectName: "Walmart Drive-Thrus", tasks: tasks2 });
    Projects.insert({ projectNumber: "14117", projectName: "Western Rubber c/o UDGA", tasks: tasks2 });
    Projects.insert({ projectNumber: "14118", projectName: "North Oakville", tasks: tasks2 });
    Projects.insert({ projectNumber: "14119", projectName: "Scarborough Walmart", tasks: tasks2 });
    Projects.insert({ projectNumber: "15149", projectName: "Walmart Marine Drive", tasks: tasks2 });
    Projects.insert({ projectNumber: "15151", projectName: "Giant Tiger (Gulf Developments) 2141 Kipling Plaza", tasks: tasks2 });
    Projects.insert({ projectNumber: "15153", projectName: "Walmart Kitchener", tasks: tasks2 });
    Projects.insert({ projectNumber: "15186", projectName: "Walmart Hinton", tasks: tasks2 });
    Projects.insert({ projectNumber: "15187", projectName: "Arbutus Rosewood Phase 1D", tasks: tasks2 });
    Projects.insert({ projectNumber: "15188", projectName: "Arbutus Rosewood Phase 2", tasks: tasks2 });
    Projects.insert({ projectNumber: "15190", projectName: "UDGA Lilooet", tasks: tasks2 });
    Projects.insert({ projectNumber: "15191", projectName: "Windsor West Gill Investments (Ram-Land)", tasks: tasks2 });
    Projects.insert({ projectNumber: "15196", projectName: "CRH - 3087 Harrison Court", tasks: tasks2 });
    Projects.insert({ projectNumber: "15197", projectName: "MHBC-275 Victoria Street", tasks: tasks2 });
    Projects.insert({ projectNumber: "15198", projectName: "Arbutus Harvest Block", tasks: tasks2 });
    Projects.insert({ projectNumber: "15199", projectName: "Arbutus Meadows Market Commercial", tasks: tasks2 });
    Projects.insert({ projectNumber: "15200", projectName: "Arbutus Struthers Park", tasks: tasks2 });
    
    // Lowes
    Projects.insert({ projectNumber: "14054", projectName: "Lowe's North Etobicoke Tim's", tasks: LowesTasks });
    Projects.insert({ projectNumber: "14060", projectName: "Lowe's of Sault Ste. Marie", tasks: LowesTasks });
    Projects.insert({ projectNumber: "14068", projectName: "Lowe's of Winnipeg, MB", tasks: LowesTasks });
    Projects.insert({ projectNumber: "14069", projectName: "Lowe's of SW London, ON", tasks: LowesTasks });
    Projects.insert({ projectNumber: "14089", projectName: "Lowe's of Ancaster, ON", tasks: LowesTasks });
    Projects.insert({ projectNumber: "14093", projectName: "Lowe's of Kelowna", tasks: LowesTasks });
    Projects.insert({ projectNumber: "14102", projectName: "Lowe's of Cornwall", tasks: LowesTasks });
    Projects.insert({ projectNumber: "14106", projectName: "Lowe's of Port Coquitlam", tasks: LowesTasks });
    Projects.insert({ projectNumber: "14107", projectName: "Lowe's of Langley", tasks: LowesTasks });
    Projects.insert({ projectNumber: "14108", projectName: "Lowe's of Ottawa (Shoppers City East)", tasks: LowesTasks });
    Projects.insert({ projectNumber: "14110", projectName: "Lowe's of Port Coquitlam 2 - Lougheed", tasks: LowesTasks });
    Projects.insert({ projectNumber: "14111", projectName: "Lowe's Edmonton Albany", tasks: LowesTasks });
    Projects.insert({ projectNumber: "14112", projectName: "Lowe's Erin Ridge", tasks: LowesTasks });
    Projects.insert({ projectNumber: "14114", projectName: "Lowe's Sherwood Park", tasks: LowesTasks });
    Projects.insert({ projectNumber: "14115", projectName: "Lowe's Vancouver (Marine Drive SW)", tasks: LowesTasks });
    Projects.insert({ projectNumber: "14116", projectName: "Lowe's of Mississauga West", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15120", projectName: "Lowe's of Red Deer", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15121", projectName: "Lowe's of Peterborough #3", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15122", projectName: "Lowe's of North Regina #2 (Armour Crossing)", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15124", projectName: "Lowe's  Milton", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15125", projectName: "Lowe's Richmond Hill", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15126", projectName: "Lowe's Brampton West", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15148", projectName: "Lowe's of Regina #3 (Capital Crossing)", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15150", projectName: "Lowe's Erin Mills (Mississauga)", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15155", projectName: "Lowe's of Milton (Milton Mall)", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15156", projectName: "Lowe's of Ottawa (St. Laurent)", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15157", projectName: "Lowe's of Toronto (Centrepoint Mall)", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15158", projectName: "Lowe's of Toronto (Danforth Mall)", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15159", projectName: "Lowe's of Thunder Bay (Intercity Mall)", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15160", projectName: "Lowe's of Regina (Northgate)", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15161", projectName: "Lowe's of Calgary (Signal Hill)", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15162", projectName: "Lowe's of Calgary (Shawnessy)", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15163", projectName: "Lowe's of Abbotsford (Mall)", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15164", projectName: "Lowe's of Prince George", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15165", projectName: "Lowe's of Nanaimo", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15166", projectName: "Lowe's of Victoria (Tillicum)", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15167", projectName: "Lowe's Hamilton Mountain", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15168", projectName: "Lowe's Central Mississauga", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15169", projectName: "Lowe's Ste-Julie", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15170", projectName: "Lowe's Richmond Hill #2", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15171", projectName: "Lowe's Laval East", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15172", projectName: "Lowe's Kamloops", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15173", projectName: "Lowe's North Bay", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15174", projectName: "Lowe's Hamilton Mountain #2", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15175", projectName: "Lowe's Greenfield Park", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15176", projectName: "Lowe's Chateaugay", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15177", projectName: "Lowe's Montreal NDG", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15178", projectName: "Lowe's Pointe Claire", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15179", projectName: "Lowe's Vaudreuil", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15180", projectName: "Lowe's Gatineau", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15181", projectName: "Lowe's Laval Centre", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15182", projectName: "Lowe's Ottawa Barrhaven", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15183", projectName: "Lowe's Medicine Hat", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15184", projectName: "Lowe's Winnipeg Polo Park", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15185", projectName: "Lowe's Richmond Hill (Quebecor)", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15189", projectName: "Lowe's Kawartha Golf Club", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15192", projectName: "Lowe's Orillia ", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15193", projectName: "Lowe's Grande Prairie", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15194", projectName: "Lowe's Bowmanville (Clarington)", tasks: LowesTasks });
    Projects.insert({ projectNumber: "15195", projectName: "Lowe's Spruce Grove", tasks: LowesTasks });
  } else {
    console.log('new projects...')
    if ( Projects.find({ projectNumber: "13049" }).fetch().length === 0 ) {
      console.log('added new project 13049')
      Projects.insert({ projectNumber: "13049", projectName: "Lowe’s of Guelph", tasks: LowesTasks });
    }
    
    if ( Projects.find({ projectNumber: "10000" }).fetch().length === 0 ) {
      console.log('added new project 10000')
      Projects.insert({ projectNumber: "10000", projectName: "Vacation", tasks: [ 'Vacation' ] });
    }
  }
}
