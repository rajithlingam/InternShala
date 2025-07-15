
const company_data = [
  {
    name: "Meeshoo",
    add: {
      street: "xyz",
      city: "Bangalore",
      zip: "560001"
    }
  },
  {
    name: "ZoHO",
    add: {
      street: "chengalpet",
      city: "Chennai",
      zip: "600042"
    }
  },
  {
    name: "SkyHigh Infotech",
    add: {
      street: "abc",
      city: "Hyderabad",
      zip: "123456"
    }
  },
  {
    name: "NextGen Softwares",
    add: {
      street: "zzxxcc",
      city: "Pune",
      zip: "098765"
    }
  },
  {
    name: "CodeCraft Systems",
    add: {
      street: "kaniyur",
      city: "Coimbatore",
      zip: "641002"
    }
  }
];

function Loop() {           
  company_data.map((company, index) => {
    const { street, city, zip } = company.add;
    console.log(`${index + 1}. ${company.name}: ${street}, ${city} - ${zip}`);
  });
}

Loop();
