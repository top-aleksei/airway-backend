const mongoose = require('mongoose');
const CountryCode = require('./models/country_code');



const seedData = async () => {
  const countryCodes = [
      { "country": "Australia", "code": "+61" },
      { "country": "Austria", "code": "+43" },
      { "country": "Azerbaijan", "code": "+994" },
      { "country": "Algeria", "code": "+213" },
      { "country": "England", "code": "+44" },
      { "country": "Andorra", "code": "+376" },
      { "country": "Argentina", "code": "+54" },
      { "country": "Belgium", "code": "+32" },
      { "country": "Belarus", "code": "+375" },
      { "country": "Brazil", "code": "+55" },
      { "country": "Bulgaria", "code": "+359" },
      { "country": "Canada", "code": "+1" },
      { "country": "Chile", "code": "+56" },
      { "country": "China", "code": "+86" },
      { "country": "Colombia", "code": "+57" },
      { "country": "Croatia", "code": "+385" },
      { "country": "Cyprus", "code": "+357" },
      { "country": "Czech Republic", "code": "+420" },
      { "country": "Denmark", "code": "+45" },
      { "country": "Ecuador", "code": "+593" },
      { "country": "Egypt", "code": "+20" },
      { "country": "Estonia", "code": "+372" },
      { "country": "Finland", "code": "+358" },
      { "country": "France", "code": "+33" },
      { "country": "Germany", "code": "+49" },
      { "country": "Greece", "code": "+30" },
      { "country": "Hungary", "code": "+36" },
      { "country": "Iceland", "code": "+354" },
      { "country": "India", "code": "+91" },
      { "country": "Indonesia", "code": "+62" },
      { "country": "Iran", "code": "+98" },
      { "country": "Ireland", "code": "+353" },
      { "country": "Israel", "code": "+972" },
      { "country": "Italy", "code": "+39" },
      { "country": "Japan", "code": "+81" },
      { "country": "Kazakhstan", "code": "+7" },
      { "country": "Korea", "code": "+82" },
      { "country": "Latvia", "code": "+371" },
      { "country": "Lebanon", "code": "+961" },
      { "country": "Lithuania", "code": "+370" },
      { "country": "Luxembourg", "code": "+352" },
      { "country": "Malaysia", "code": "+60" },
      { "country": "Mexico", "code": "+52" },
      { "country": "Netherlands", "code": "+31" },
      { "country": "New Zealand", "code": "+64" },
      { "country": "Norway", "code": "+47" },
      { "country": "Pakistan", "code": "+92" },
      { "country": "Peru", "code": "+51" },
      { "country": "Philippines", "code": "+63" },
      { "country": "Poland", "code": "+48" },
      { "country": "Portugal", "code": "+351" },
      { "country": "Romania", "code": "+40" },
      { "country": "Russia", "code": "+7" },
      { "country": "Saudi Arabia", "code": "+966" },
      { "country": "Serbia", "code": "+381" },
        {
        "country": "Singapore",
        "code": "+65"
        },
        {
        "country": "Slovakia",
        "code": "+421"
        },
        {
        "country": "Slovenia",
        "code": "+386"
        },
        {
        "country": "South Africa",
        "code": "+27"
        },
        {
        "country": "Spain",
        "code": "+34"
        },
        {
        "country": "Sweden",
        "code": "+46"
        },
        {
        "country": "Switzerland",
        "code": "+41"
        },
        {
        "country": "Taiwan",
        "code": "+886"
        },
        {
        "country": "Thailand",
        "code": "+66"
        },
        {
        "country": "Turkey",
        "code": "+90"
        },
        {
        "country": "Ukraine",
        "code": "+380"
        },
        {
        "country": "United Arab Emirates",
        "code": "+971"
        },
        {
        "country": "United Kingdom",
        "code": "+44"
        },
        {
        "country": "United States",
        "code": "+1"
        }
    
  ];

  try {
      await CountryCode.deleteMany({});
      await CountryCode.insertMany(countryCodes);
      console.log('Data successfully seeded');
      mongoose.connection.close();
  } catch (err) {
      console.log('Error seeding data:', err);
  }
};



  module.exports = seedData;