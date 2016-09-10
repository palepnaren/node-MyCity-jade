exports.home = function(req, res){
  res.render('Home',{title: 'Welcome!', headline: "Each city has it's own diversity"});
}

exports.city = function(req, res){
   var city = req.params.cityName;
   var title, headline, imgName;
   var count=5;


   if(city == 'hyderabad'){
     title = "Hyderabad";
     heading = "Hyderabad: It is well known for biryani.";
   }
  else if(city == 'delhi'){
     title = "Delhi";
     heading = "Delhi: Well known for it's diversity.";
   }
  else if(city == 'mumbai'){
     title = "Mumbai";
     heading = "Mumbai: Popular for business and beautiful coastaline.";
   }
  else if(city == 'bangalore'){
     title = "Bangalore";
     heading = "Bangalore: Has a very good IT Hub establishment.";
   }
  else if(city == 'kolkata'){
     title = "Kolkata";
     heading = "Kolkata: It was the British-India capital when Britisher's ruled India .";
   }
   res.render('City', {title: title, headline: heading, numberOfImages: count, cityName: city, imgName: imgName});
}
