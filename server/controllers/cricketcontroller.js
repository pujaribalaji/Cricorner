require('../models/database');
const Category = require('../models/Category');
const player = require('../models/player');
const members = require('../models/members');








exports.homepage = async(req,res) =>{


   try {
      const limitNumber = 5;
      const categories = await Category.find({}).limit(limitNumber);
      const players = await player.find({}).limit(limitNumber);
   
      const latest = await members.find({}).limit(limitNumber);
      const Batsman = await members.find({'category':'Batsman'}).limit(limitNumber);
      const AllRounder = await members.find({'category':'AllRounder'}).limit(limitNumber);
      const WKBatsman = await members.find({'category':'WKBatsman'}).limit(limitNumber);
      const Bowler = await members.find({'category':'Bowler'}).limit(limitNumber);
      
      const food ={ latest, Batsman, AllRounder, WKBatsman, Bowler   };

      res.render('index',{title:'cricket-blot',categories,players,food});
   } catch (error) {
      res.satus(500).send({message:error.message ||"Error Occured"});
      
   }
}

// categories

exports.exploreCategories = async(req,res) =>{


   try {
      const limitNumber = 5;
      const categories = await Category.find({}).limit(limitNumber);
      res.render('categories',{title:'cricket-blot-viewall',categories});
   } catch (error) {
      res.satus(500).send({message:error.message ||"Error Occured"});
      
   }
}

// categories

exports.exploreCategoriesById = async (req, res) => {
   try {
     let categoryId = req.params.id;
     const limitNumber = 20;
     const categoryById = await Category.find({ 'category': categoryId }).limit(limitNumber);
     res.render('categories', { title: 'cricket-blot-viewall', categoryById });
   } catch (error) {
     res.satus(500).send({ message: error.message || "Error Occured" });
   }
 }


//   games
exports.exploreGames = async(req,res) =>{


   try {
      const limitNumber=9;
      const member = await members.find({}).limit(limitNumber);
      res.render('othergames', { members: member });
   } catch (error) {
      res.satus(500).send({message:error.message ||"Error Occured"});
      
   }
}



//  members players
exports.exploreMembers = async(req,res) =>{
   try {
      let membersid = req.params.id;
     
      const member = await members.findById(membersid)
      res.render('members',{title:'cricket-players',member});
   } catch (error) {
      res.satus(500).send({message:error.message ||"Error Occured"});  
   }
}

// search page

exports.searchmember = async(req,res) =>{

    try {
      let searchTerm = req.body.searchTerm;
      let member = await members.find({$text: { $search: searchTerm,$diacriticSensitive:true}});
      // res.json(members)
      // res.render('search',{title:'player block'})
      res.render('search', { members: member });

    } catch (error) {
      res.satus(500).send({message:error.message ||"Error Occured"});
      
    }

}  

//   players
exports.explorePlayers = async(req,res) =>{


   try {
      const limitNumber=9;
      const member = await members.find({}).limit(limitNumber);
      res.render('players', { members: member });
   } catch (error) {
      res.satus(500).send({message:error.message ||"Error Occured"});
      
   }
}

//   signup
exports.exploreSignup = async(req,res) =>{


   try {
      const limitNumber=9;
      const member = await members.find({}).limit(limitNumber);
      res.render('signup', { members: member });
   } catch (error) {
      res.satus(500).send({message:error.message ||"Error Occured"});
      
   }
}

//   games
exports.exploreOtherGames = async(req,res) =>{


   try {
      const limitNumber=9;
      const member = await members.find({}).limit(limitNumber);
      res.render('othergames', { members: member });
   } catch (error) {
      res.satus(500).send({message:error.message ||"Error Occured"});
      
   }
}







// async function insertDymmymembers1Data(){

//    try{
//       await members1.insertMany([
//          {   
//             "birth":"7 Jul 1981",
//             "height":'5 Ft 11 In (180 Cm)',
           
//             "odi":'a',
//             "test":'c',
//             "T20I":'q',
//             "ipl":'w',
//             "centuries":'q',
//             "halfcenturies":'d'
//          },
//          {   
//             "birth":"7 Jul 1981",
//             "height":'5 Ft 11 In (180 Cm)',
           
//             "odi":'a',
//             "test":'c',
//             "T20I":'q',
//             "ipl":'w',
//             "centuries":'q',
//             "halfcenturies":'d'
//          },
//          {   
//             "birth":"7 Jul 1981",
//             "height":'5 Ft 11 In (180 Cm)',
           
//             "odi":'a',
//             "test":'c',
//             "T20I":'q',
//             "ipl":'w',
//             "centuries":'q',
//             "halfcenturies":'d'
//          },
//          {   
//             "birth":"7 Jul 1981",
//             "height":'5 Ft 11 In (180 Cm)',
           
//             "odi":'a',
//             "test":'c',
//             "T20I":'q',
//             "ipl":'w',
//             "centuries":'q',
//             "halfcenturies":'d'
//          },
      
//        ]
         
         
//       );
//       }
//       catch(error){
//          console.log('err', )
//    }

// }

// insertDymmymembers1Data();




// async function insertDymmymembersData(){

//    try{
//       await members.insertMany([
//          {
//             "name":'dhoni',
//             "description":"caption",
//             "country":'india',
//             "team":'india',
//             "category":'wicker keeper',
//             "image":'foodball.png',
//             "birth1":'20',
//             "height1":'10'
//          },
//          {
//             "name":'dhoni1',
//             "description":"caption",
//             "country":'india',
//             "team":'india',
//             "category":'wicker keeper',
//             "image":'foodball.png'
//          },
//          {
//             "name":'dhoni2',
//             "description":"caption",
//             "country":'india',
//             "team":'india',
//             "category":'wicker keeper',
//             "image":'foodball.png'
//          },
//          {
//             "name":'dhoni3',
//             "description":"caption",
//             "country":'india',
//             "team":'india',
//             "category":'wicker keeper',
//             "image":'foodball.png'
//          },
      
//        ]
         
         
//       );
//       }
//       catch(error){
//          console.log('err', + error)
//    }

// }

// insertDymmymembersData();


// async function insertDymmyplayer1Data(){

//    try{
//       await player1.insertMany(
//          {
//             "name":"M.S.Dhoni",
//             "description":"Mahendra Singh Dhoni (/məˈheɪndrə ˈsɪŋ dhæˈnɪ/ (listen); born 7 July 1981), commonly known as MS Dhoni, is a former Indian cricketer and captain of the Indian national team in limited-overs formats from 2007 to 2017, and in Test cricket from 2008 to 2014. He is also the current captain of Chennai Super Kings in the Indian Premier League. Under his captaincy, India won the 2007 ICC World Twenty20, the 2011 Cricket World Cup, and the 2013 ICC Champions Trophy, the most by any captain. He also led India to victory in the 2010 and 2016 Asia Cup. Additionally, under his leadership, India won the 2010 and 2011 ICC Test Mace and 2013 ICC ODI Championship. Dhoni is a right-handed wicket-keeper batsman known for his calm captaincy and his ability to finish matches in tight situations. Mahi scored 17,266 runs in International Cricket (including 10,000 plus runs in ODI Internationals) and is considered one of the best finishers in the game. He is also one of the greatest wicket-keepers and captains in the history of cricket.",
//             "teams":"india,CSK",
//             "counrty":"India",
//             "role":"WK-Batsman",
//             "runs":"test(4876),ODI(10773),T20(4978)",
            
          
//             "image":"dhoni.png",
//          },
//          {
//             "name":"Virat Kohli",
//             "description":"Virat Kohli (Hindi pronunciation: [ʋɪˈɾɑːʈ ˈkoːɦli] (listen); born 5 November 1988) is an Indian international cricketer and former captain of the Indian national team who plays as a right-handed batsman for Royal Challengers Bangalore in the IPL and for Delhi in Indian domestic cricket. Widely regarded as one of the greatest batsmen of all time,[3] Kohli holds the record for scoring most runs in both T20 internationals and in IPL. In 2020, the International Cricket Council named him as the male cricketer of the decade. Kohli has also contributed to India's successes, including winning the 2011 World Cup and the 2013 Champions trophy.",
//             "teams":"india,RCB",
//             "counrty":"India",
//             "role":"Batsman",
//             "runs":"test(8230),ODI(12809),T20(6624)",
//             "born":"Nov 05, 1988",
//             "cups":"one ODI world cup,one T20 world cup,4 IPL cups",
//             "image":"kohli.png",
//          },
//          {
//             "name":"Virat Kohli",
//             "description":"Virat Kohli (Hindi pronunciation: [ʋɪˈɾɑːʈ ˈkoːɦli] (listen); born 5 November 1988) is an Indian international cricketer and former captain of the Indian national team who plays as a right-handed batsman for Royal Challengers Bangalore in the IPL and for Delhi in Indian domestic cricket. Widely regarded as one of the greatest batsmen of all time,[3] Kohli holds the record for scoring most runs in both T20 internationals and in IPL. In 2020, the International Cricket Council named him as the male cricketer of the decade. Kohli has also contributed to India's successes, including winning the 2011 World Cup and the 2013 Champions trophy.",
//             "teams":"india,RCB",
//             "counrty":"India",
//             "role":"Batsman",
//             "runs":"test(8230),ODI(12809),T20(6624)",
//             "born":"Nov 05, 1988",
//             "cups":"one ODI world cup,one T20 world cup,4 IPL cups",
//             "image":"kohli.png",
//          },
//          {
//             "name":"Virat Kohli",
//             "description":"Virat Kohli (Hindi pronunciation: [ʋɪˈɾɑːʈ ˈkoːɦli] (listen); born 5 November 1988) is an Indian international cricketer and former captain of the Indian national team who plays as a right-handed batsman for Royal Challengers Bangalore in the IPL and for Delhi in Indian domestic cricket. Widely regarded as one of the greatest batsmen of all time,[3] Kohli holds the record for scoring most runs in both T20 internationals and in IPL. In 2020, the International Cricket Council named him as the male cricketer of the decade. Kohli has also contributed to India's successes, including winning the 2011 World Cup and the 2013 Champions trophy.",
//             "teams":"india,RCB",
//             "counrty":"India",
//             "role":"Batsman",
//             "runs":"test(8230),ODI(12809),T20(6624)",
//             "born":"Nov 05, 1988",
//             "cups":"one ODI world cup,one T20 world cup,4 IPL cups",
//             "image":"kohli.png",
//          },
//          {
//             "name":"Virat Kohli",
//             "description":"Virat Kohli (Hindi pronunciation: [ʋɪˈɾɑːʈ ˈkoːɦli] (listen); born 5 November 1988) is an Indian international cricketer and former captain of the Indian national team who plays as a right-handed batsman for Royal Challengers Bangalore in the IPL and for Delhi in Indian domestic cricket. Widely regarded as one of the greatest batsmen of all time,[3] Kohli holds the record for scoring most runs in both T20 internationals and in IPL. In 2020, the International Cricket Council named him as the male cricketer of the decade. Kohli has also contributed to India's successes, including winning the 2011 World Cup and the 2013 Champions trophy.",
//             "teams":"india,RCB",
//             "counrty":"India",
//             "role":"Batsman",
//             "runs":"test(8230),ODI(12809),T20(6624)",
//             "born":"Nov 05, 1988",
//             "cups":"one ODI world cup,one T20 world cup,4 IPL cups",
//             "image":"kohli.png",
//          },
//       );
//       }
//       catch(error){
//          console.log('err', + error)
//    }

// }

// insertDymmyplayer1Data();


