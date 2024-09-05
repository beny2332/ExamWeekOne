let militaryUnit = {

    name: "1st Infantry Division",
  
    location: "Fort Bragg, North Carolina, USA",
  
    establishmentDate: "1941-06-01",
  
    unitType: "Infantry Division",
  
    commandStructure: {
  
      commandingOfficer: {
  
        rank: "Major General",
  
        name: "John Doe",
  
        contact: {
  
          email: "john.doe@example.com",
  
          phone: "+1-555-123-4567",
  
        },
  
      },
  
      executiveOfficer: {
  
        rank: "Colonel",
  
        name: "Jane Smith",
  
        contact: {
  
          email: "jane.smith@example.com",
  
          phone: "+1-555-987-6543",
  
        },
  
      },
  
      chiefOfStaff: {
  
        rank: "Brigadier General",
  
        name: "Robert Brown",
  
        contact: {
  
          email: "robert.brown@example.com",
  
          phone: "+1-555-555-1234",
  
        },
  
      },
  
    },
  
    personnel: [
  
      {
  
        id: 1,
  
        name: "Private First Class Alice Johnson",
  
        rank: "Private First Class",
  
        role: "Rifleman",
  
        contact: {
  
          email: "alice.johnson@example.com",
  
          phone: "+1-555-000-1111",
  
        },
  
      },
  
      {
  
        id: 2,
  
        name: "Sergeant Michael White",
  
        rank: "Sergeant",
  
        role: "Squad Leader",
  
        contact: {
  
          email: "michael.white@example.com",
  
          phone: "+1-555-000-2222",
  
        },
  
      },
  
    ],
  
    equipment: {
  
      vehicles: [
  
        {
  
          type: "M1 Abrams Tank",
  
          quantity: 20,
  
          status: "Operational",
  
        },
  
        {
  
          type: "Humvee",
  
          quantity: 50,
  
          status: "Operational",
  
        },
  
      ],
  
      firearms: [
  
        {
  
          type: "M16 Rifle",
  
          quantity: 500,
  
          status: "Operational",
  
        },
  
        {
  
          type: "M249 SAW",
  
          quantity: 100,
  
          status: "Operational",
  
        },
  
      ],
  
      otherEquipment: [
  
        {
  
          type: "Night Vision Goggles",
  
          quantity: 150,
  
          status: "Operational",
  
        },
  
        {
  
          type: "Field Radios",
  
          quantity: 100,
  
          status: "Operational",
  
        },
  
      ],
  
    },
  
    missions: [
  
      {
  
        missionName: "Operation Desert Storm",
  
        startDate: "1991-01-17",
  
        endDate: "1991-02-28",
  
        description: "Combat operation to liberate Kuwait from Iraqi occupation.",
  
      },
  
      {
  
        missionName: "Operation Enduring Freedom",
  
        startDate: "2001-10-07",
  
        endDate: "2014-12-28",
  
        description:
  
          "Military operations aimed at dismantling al-Qaeda and removing the Taliban from power in Afghanistan.",
  
      },
  
    ],
  
    trainingPrograms: [
  
      {
  
        programName: "Basic Combat Training",
  
        duration: 10,
  
        focus:
  
          "Fundamentals of soldiering, physical conditioning, and basic combat skills.",
  
      },
  
      {
  
        programName: "Advanced Individual Training",
  
        duration: 12,
  
        focus:
  
          "Specialized training for specific military occupational specialties.",
  
      },
  
    ],
  
    history: [
  
      {
  
        eventDate: "1941-06-01",
  
        eventDescription: "Establishment of the 1st Infantry Division.",
  
      },
  
      {
  
        eventDate: "1944-06-06",
  
        eventDescription: "Participated in the D-Day landings in Normandy.",
  
      },
  
    ],
  
    currentDeployment: {
  
      location: "Middle East",
  
      mission: "Counter-terrorism operations",
  
      startDate: "2024-01-01",
  
      estimatedEndDate: "2024-12-31",
  
    },
  
  };

 // mission1. 
 //input: אובייקט המכיל את כלל הנתונים על היחידה
 //output: מחרוזת המכילה את כלל הפרטים הנדרשים

 function Mission1(militaryUnit){
    const rank = militaryUnit.commandStructure.chiefOfStaff.rank
    const name = militaryUnit.commandStructure.chiefOfStaff.name
    const phone = militaryUnit.commandStructure.chiefOfStaff.contact.phone
    return `Rank: ${rank}, Name: ${name}, Phone: ${phone}`
 }
//  console.log(
//   Mission1(militaryUnit));

  //mission2
  //input: אובייקט המכיל את כלל הנתונים על היחידה
  //output: מחרוזת המכילה את כמות החיילים במספר
  //שאלתי האם לכלול במספר החיילים גם את המפקדים וקיבלתי תשובה שלילית

  function Mission2(militaryUnit){
    const personnel = militaryUnit.personnel
    const totalPersonnel = personnel.length
    return `Total Personnel: ${totalPersonnel}`
  }
//   console.log(
//     Mission2(militaryUnit));
  
// mission3
//input1: NewDeployment 
//input2: אובייקט המכיל את כלל הנתונים על היחידה
//output: אובייקט המכיל את כלל הנתונים על היחידה

function Mission3(newDeployment, militaryUnit){
    const currentDeployment = militaryUnit.currentDeployment

    const currentToHistory = {
        eventDate: currentDeployment.startDate,
        eventDescription: `${currentDeployment.mission} in the ${currentDeployment.location}`
    }
    militaryUnit.history.push(currentToHistory)
    militaryUnit.currentDeployment = newDeployment

    return militaryUnit
    }
//     const newDeployment = {
//         location: "gaza",
//         mission: "hamas termination",
//         startDate: "2024-01-01",
//         estimatedEndDate: "2024-12-31",
//       }
//    console.log(
//     Mission3(newDeployment, militaryUnit));

// mission4
// input1: Firearm Object
// input2: אובייקט המכיל את כלל הנתונים על היחידה
// output: אובייקט המכיל את כלל הנתונים על היחידה

function Mission4(firearm, militaryUnit){
    const firearms = militaryUnit.equipment.firearms
    const existingFirearm  = firearms.find(f => f.type === firearm.type)
    
    if(existingFirearm && existingFirearm.status === firearm.status){
        existingFirearm.quantity += firearm.quantity;
    }
    else{
        firearms.push(newFirearm)
    }

    return militaryUnit
}
// const newFirearm = {
//     type: "M16 Rifle",
//     quantity: 500,
//     status: "Non operational",
// }
// Mission4(newFirearm, militaryUnit);
// console.log(militaryUnit.equipment.firearms);

// mission5
// input: אובייקט המכיל את כלל הנתונים על היחידה
// output: מחרוזת המכילה את כמות כלל השבועות בהכשרה

function Mission5(militaryUnit){
    const trainingPrograms = militaryUnit.trainingPrograms
    let totalWeeks = 0
    trainingPrograms.forEach(program => {
        totalWeeks += program.duration
    })

    return `Total Training Weeks: ${totalWeeks}`
}
// console.log(Mission5(militaryUnit));

module.exports = {
    Mission1,
    Mission2,
    Mission3,
    Mission4,
    Mission5
}
