body: JSON.stringify({

service_code:"BIGPACK_EXPRESS",
contract_type:"MAIN",
pickup_type:"SELF",

sender:{
name:"PAKO",
country:"PL",
city:"Wroclaw",
postal_code:"50-001",
street:"Test",
house_number:"1",
contact_person:"PAKO",
contact_telephone:"500000000"
},

recipient:{
name:"Client",
country:"PL",
city:"Warszawa",
postal_code:"00-001",
street:"Test",
house_number:"1",
contact_person:"Client",
contact_telephone:"500000000"
},

item_list:items

})
