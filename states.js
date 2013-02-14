$(function() {
  var data = [
		{
		"Alabama": "Alaska",
		"AL": "AK"
	},
	{
		"Alabama": "Arizona",
		"AL": "AZ"
	},
	{
		"Alabama": "Arkansas",
		"AL": "AR"
	},
	{
		"Alabama": "California",
		"AL": "CA"
	},
	{
		"Alabama": "Colorado",
		"AL": "CO"
	},
	{
		"Alabama": "Connecticut",
		"AL": "CT"
	},
	{
		"Alabama": "Delaware",
		"AL": "DE"
	},
	{
		"Alabama": "District of Columbia",
		"AL": "DC"
	},
	{
		"Alabama": "Florida",
		"AL": "FL"
	},
	{
		"Alabama": "Georgia",
		"AL": "GA"
	},
	{
		"Alabama": "Hawaii",
		"AL": "HI"
	},
	{
		"Alabama": "Idaho",
		"AL": "ID"
	},
	{
		"Alabama": "Illinois",
		"AL": "IL"
	},
	{
		"Alabama": "Indiana",
		"AL": "IN"
	},
	{
		"Alabama": "Iowa",
		"AL": "IA"
	},
	{
		"Alabama": "Kansas",
		"AL": "KS"
	},
	{
		"Alabama": "Kentucky",
		"AL": "KY"
	},
	{
		"Alabama": "Louisiana",
		"AL": "LA"
	},
	{
		"Alabama": "Maine",
		"AL": "ME"
	},
	{
		"Alabama": "Montana",
		"AL": "MT"
	},
	{
		"Alabama": "Nebraska",
		"AL": "NE"
	},
	{
		"Alabama": "Nevada",
		"AL": "NV"
	},
	{
		"Alabama": "New Hampshire",
		"AL": "NH"
	},
	{
		"Alabama": "New Jersey",
		"AL": "NJ"
	},
	{
		"Alabama": "New Mexico",
		"AL": "NM"
	},
	{
		"Alabama": "New York",
		"AL": "NY"
	},
	{
		"Alabama": "North Carolina",
		"AL": "NC"
	},
	{
		"Alabama": "North Dakota",
		"AL": "ND"
	},
	{
		"Alabama": "Ohio",
		"AL": "OH"
	},
	{
		"Alabama": "Oklahoma",
		"AL": "OK"
	},
	{
		"Alabama": "Oregon",
		"AL": "OR"
	},
	{
		"Alabama": "Maryland",
		"AL": "MD"
	},
	{
		"Alabama": "Massachusetts",
		"AL": "MA"
	},
	{
		"Alabama": "Michigan",
		"AL": "MI"
	},
	{
		"Alabama": "Minnesota",
		"AL": "MN"
	},
	{
		"Alabama": "Mississippi",
		"AL": "MS"
	},
	{
		"Alabama": "Missouri",
		"AL": "MO"
	},
	{
		"Alabama": "Pennsylvania",
		"AL": "PA"
	},
	{
		"Alabama": "Rhode Island",
		"AL": "RI"
	},
	{
		"Alabama": "South Carolina",
		"AL": "SC"
	},
	{
		"Alabama": "South Dakota",
		"AL": "SD"
	},
	{
		"Alabama": "Tennessee",
		"AL": "TN"
	},
	{
		"Alabama": "Texas",
		"AL": "TX"
	},
	{
		"Alabama": "Utah",
		"AL": "UT"
	},
	{
		"Alabama": "Vermont",
		"AL": "VT"
	},
	{
		"Alabama": "Virginia",
		"AL": "VA"
	},
	{
		"Alabama": "Washington",
		"AL": "WA"
	},
	{
		"Alabama": "West Virginia",
		"AL": "WV"
	},
	{
		"Alabama": "Wisconsin",
		"AL": "WI"
	},
	{
		"Alabama": "Wyoming",
		"AL": "WY"
	}
];
	$.each(data, function(i, option) {
		$('#states').append($('<option/>').attr("value",
	option.id).text(option.name));
	});
})		
