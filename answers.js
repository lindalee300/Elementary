var iscore=0;
var onetimepressit=0;




//THIS ALERT FUNCTION IS MADE FOR THE NEXT FUNCTION
function alertfunc() {
  alert("ENTER A LETTER IN THE BOX ABOVE");

}


//soundmake function triggers the click sound
function soundmake(){

  var sound= new Audio("media/click1.mp3");
  sound.play();

}


function func1() {
soundmake();

window.setTimeout(winz,300);

}

function winz() {
  //window.open("index mango.html",'_self',false);
  window.location.href=("index mango.html");

}

function wrongmake() {

  var wrongsound= new Audio("media/wrong.mp3");
  wrongsound.play();


}

                       //2//
var quest=["In the formation of a company,the memorandum of association\
<br>states not only the name of the company but also?<br><br>\
a. The way directors are chosen &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>\
b. The amount of capital to be issued<br>\
c. The dividends to be paid per share",
                      //3//
"The manager of ABC company has embarked upon sponsoring<br> \
high school cricket team in the Caribbean.the company is fulfilling its?<br><br>\
a. social obligation&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;\
b. obligation to customers<br>\
c. Economic obligations",
                    //4//
"A hotel provides vouchers for meals for its employees.\
<br>This form of incentive is best described as?\
<br><br>&nbsp;\
a. motivational scheme<br>\
b. Fringe benefits&nbsp;&nbsp;&nbsp;<br>\
c. Reward &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                  //5//
"A major role of trade union is to encourage?\
<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
a. Staff to strike whenever they have problems at work<br>\
b. Management to pay a higher salaries<br> and give a longer \
vacations to staff<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
c. advancement of the welfare of its members &nbsp;&nbsp;&nbsp;",
                  //6//
"An increase in productivity of labour<br> in the Caribbean region mean that?<br><br>\
a. A greater number of the population is now employed<br>&nbsp;&nbsp;&nbsp;\
b. The value of output per person is greater than before<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c. More factors of production are avaliable for production",
                  //7//
"An example of marketing activity is<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
a. Publicizing an advertisement for a new staff<br>\
b. Distributing commodities outlets<br>\
c. Bulletins on staff matters &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                  //8//
"An industry in which sugar cane is converted<br>\
 to rum is best described as?<br><br>\
a. primary &nbsp;<br>\
b. Secondary<br>\
 c. extractive",

                   //9//
"In a public limited company the losses are borne by the<br>\
           a. Share holders<br>\
   b. Staff<br>\
       c. community",

                   //10//
"The money used for the day -to-day operations of a business is called?<br>\
       a. Fixed capital<br>\
         b. nominal capital<br>\
         c. working capital",

                  //11//
"The policies of a company are formulated by the?<br>\
  a. managers<br>\
      b. shareholders<br>\
   c. directors",

                  //12//
"Which of the following best describes an example<br>\
 of capital as a factor of production?<br>\
      a. Machinery<br>\
   b. Shares<br>\
  c. Money",

                  //13//
"The simplest form of production is<br>\
         a. Surplus and export<br>\
  b. Subsistence<br>\
           c. Domestic consumption",

                //14//
"Within a firm, what is the Primary role<br>\
 of a personnel department?<br><br>\
     a. Recruit,hire and train employees<br>\
b. Encourage employees to take<br>\
     part in recreational activity<br>\
    c. Getting employees to understand<br>\
industrial relation",


                   //15//
"The primary function of advertising is to?<br>\
    a. Communicate information<br>\
  b. Promote brand locally<br>\
             c. Ensure the distribution of goods",

                   //16//
"A purchase order is a?<br>\
     a. Statement offering to buy goods<br>\
    b. Notification of goods received<br>\
  c. Payment of debts outstanding",

                   //17//
"A market in economic terms is defined as:<br><br>\
            a. A place where a tangible goods are bought and sold<br>\
  b. A situation which exists when buyers and<br>\
   sellers influence the price of goods<br>\
        c. A specific place where buyers and sellers meet",

                   //18//
"Which of the following will NOT form a part<br>\
 of a country's balance of trade?<br><br>\
          a. Payments for the importation of tobacco<br>\
  b. Earnings from tourists spending<br>\
       c. Earnings from the exportation of rum",

                    //19//
"Which of the following is not a benefit <br>\
of international trade?<br>\
               a. Producers are able to increase their market size<br>\
                  b. Import restrictions can be imposed on foreign items<br>\
  c. Political links developed countries",

                     //20//
"Which of the following actions of government is most<br>\
 likely to lead to an improvement in the standard of living?<br><br>\
       a. Give tax incentives to business<br>\
  b. Abolishing taxes on income<br>\
       c. Increase in the income tax rate",

                   //21//
"Private enterprise is run MAINLY to?<br>\
       a. create a profit<br>\
        b. reduce inflation<br>\
                    c. provide jobs for more people",


                   //22//
"The type of business environment MOST typical<br>\
 of the Commonwealth Caribbean area is?<br>\
         a. corporate state<br>\
       b. mixed economy<br>\
           c. centrally planned",


                     //23//
"Which of the following is NOT a function of money?<br>\
       a. indivisibility<br>\
       b. store of value<br>\
           c. medium of exchange",


                      //24//
"Management Information System (MIS) can be defined as the?<br><br>\
                 a. technological benifits gained by an organisation <br>\
               for being apart of a well-organised industry<br><br>\
           b. use of technology to gather information for<br>\
                 use in making decisions within an organisation<br><br>\
        c. use of various factors within a business<br>\
      to reduce costs and increase profit",


                      //25//
"Tom invests his savings by buying shares in a company.<br>\
from this investment Tom expects to receive?<br><br>\
       a. profits<br>\
        b. interest<br>\
         c. dividends",

                  //26//
"Which of these are management's responsibility to employees<br><br>\
a. Providing Training<br>\
                   b. Producing goods at a reasonable price<br>\
                c. providing basic needs of employees",

                    //27//
"If a retailer overpaid a supplier, which document should<br>\
 the supplier send the retailer?<br><br>\
       a. Credit note<br>\
            b. Bill of exchange<br>\
          c. Invoice order ",

            //28//
"Which of these would be classified as a service industry?<br><br>\
       a. Agriculture<br>\
   b. Tourism<br>\
           c. Food-Processing",

             //29//
"Which of these statements best describe CARICOM?<br>\
  a. A group of countries within the Caribbean that comes together to help each other<br>\
  b. A group of countries within the Caribbean working together to boost Economic development<br>\
  c. An intitution in jamaica that works together for the development of the Economy",

              //30//
"A typo error was made by Pacific Company ltd,<br>\
 resulting in Knight Company being under-charged,<br>\
        which of the following documents should be issued<br>\
        to Knight Company for them to make ajustments?<br><br>\
       a. Debit note<br>\
       b. Statement of Account<br>\
       c. Invoice",

            //31//
"Which of these does a simple contract does NOT require?<br><br>\
       a. Acceptance<br>\
       b. Consideration<br>\
       c. Legislation",

            //32//
"What is a multinational corporation?<br><br>\
       a. A private enterprise operating in many countries<br>\
       b. A private enterprise owned by many countries<br>\
       c. A Public enterprise operating in many countries",


                  //33//
"Which would affect the consumer's decision in purchasing a product?<br><br>\
       a. Taste and Brand Loyalty<br>\
       b. Taste and Price alternatives<br>\
       c. Price alternatives,Taste and Brand loyalty",

                //34//
"Which one of these would not be considered as a sales promotion?<br><br>\
       a. Gift coupons<br>\
       b. After-sales service<br>\
       c. Trading stamps",

               //35//
"Which would be considered as a legal tender?<br>\
       a. A bank note<br>\
       b. A cheque<br>\
       c. A postal order ",

             //36//
"Which of these would best describe the delegative<br>\
 leadership style?<br><br>\
       a. Individual control over all decisions and little input from others<br>\
       b. Encouraging people within a group to share ideas<br>\
       c. hands-off and allows group members to make decisions",

                  //37//
"The two factors within a free-market economy that<br>\
 determine the prices are:<br><br>\
       a. Need and wants<br>\
       b. Customer and Consumer<br>\
       c. Demand and Supply ",

              //38//
"What would be considered as a legal tender?<br><br>\
       a. Bank note<br>\
       b. Money Order<br>\
       c. Postal Order ",

             //39//
"The price of an item normally goes up when:<br><br>\
       a. Supply is great and demand is low<br>\
       b. Demand is high and supply is small<br>\
       c. Supply is great and demand is high ",


           //40//
"One of the Characteristic of an Ordinary Partnership is:<br><br>\
       a. All Partners have unlimited liability<br>\
       b. The least of one partner has unlimited liability<br>\
       c. Most Partners has limited liability ",

               //41//
"Which of these encourages a Sole Trader?<br><br>\
       a. More leisure time<br>\
       b. More Capital available to expand<br>\
       c. Holidays will be available ",

                //42//
"Which of the following ownes and control a Nationalized Industry<br><br>\
       a. The Chamber of Commerce<br>\
       b. Local business people<br>\
       c. The Government ",


               //43//
"A cheque that is dated for future payment would be considered as a:<br><br>\
       a. Order cheque<br>\
       b. Crossed cheque<br>\
       c. Post-dated cheque ",

               //44//
"Who would you consider as a retailer?<br><br>\
       a. A barber in the town square<br>\
       b. A road-side vendor<br>\
       c. A meat shop in a community ",

              //45//
"What does the abbreviation C.M.O means<br><br>\
       a. Chief Marketing Officer<br>\
       b. Conglomerate Marketing Organization<br>\
       c. Communications Marketing Officer ",

                //46//
"The persons who work for wages within a country<br><br>\
       a. Entreprenure<br>\
       b. Wage Labourer<br>\
       c. Store owner ",

               //47//
"Which would you say best describes the PAYE System?<br><br>\
       a. Deductible tax from workers income weekly<br>\
       b. Deductible tax from income while it is being earned<br>\
       c. Deductible tax from income by the employer ",

               //48//
"If very little equipment is used for farming,<br>\
 what would this be best described as?<br><br>\
       a. Workers being productive<br>\
       b. Low input of Capital<br>\
       c. Labour intensive ",

                //49//
"The Primary function of The Caribbean Development Bank is to<br><br>\
          a. Assist in financial and social economic programs for<br>\
          lesser developed territories within the Caribbean region<br>\
          b. Assist in Manufacturing industries<br>\
          c. Expand in Trade ",

              //50//
"Which one of these could be considered as a Primary industry<br><br>\
       a. Fishing<br>\
       b. Farming<br>\
       c. Mining ",



];




var ans= ["c","a","a","b","c","b","b","b","a","c",
          "c","a","b","a","b","a","b","b","b","b",
          "a","b","a","b","c","a","a","b","b","a",
          "c","a","c","b","a","c","c","a","b","b",
          "b","a","c","a","a","b","b","c","a","a",];

//THIS IS SCORING SYSTEM
var score=0;
///am making this global

var putscore=document.getElementById("scoresgohere");



var number=-1;
var greenarrow="<html><body><img src=\"pics/green.gif\" width=\"100\" height=\"100\"/></body></html>";


function next(){
onetimepressit=onetimepressit-1;
  //var theusergivenanswer=document.getElementsByName("mybutt").value;
  /*if (theusergivenanswer==""||theusergivenanswer==null){
    //this function makes the wrong sound
    wrongmake();
    //this triggersthe alertfunc function
    window.setTimeout(alertfunc,300);

    }



  else {}*/
    //soundmake function is called in next function to make the click sound
    soundmake();
blank= document.getElementById('ansa place');
blank.innerHTML="";
green= document.getElementById("arr");
green.innerHTML="";



number+=1;
var listwithques=document.getElementById('question').innerHTML=quest[number];

//this is an embeded if statement
        if (listwithques==undefined){
          document.write("<head><link rel=\"stylesheet\" href=\"mystyle.css\">\
          </head><center><body><img src=\"pics/game over.png\" width=\"1200\" height=\"500\"><br>\
          \"<h1 style=\"color:lightpurple;font-size:60px;\">YOUR OVERALL SCORE IS "+iscore+ " POINTS</h1>\"</body></center>");








}


}


var numberx=-1;







function mastergame(){
var theusergivenanswer=document.getElementsByName("mybutt").value;
if (theusergivenanswer==""||theusergivenanswer==null){
  wrongmake();
  //this triggersthe alertfunc function
  window.setTimeout(alertfunc,300);

}else{ check();}


    }


///the new version




function mastergame2(){

if (onetimepressit==0){
  check();}
else {alert("YOU HAVE ALREADY SELECTED YOUR ANSWER CLICK NEXT BUTTON");}

}





//THE CHECK FUNCTION CHECKS IF ANSWER IS CORRECT
 function check() {
//soundmake function is called in check function to make the click sound
onetimepressit+=1;
   soundmake();
blank= document.getElementById('ansa place');
var green=document.getElementById("arr");


//numberx is now negative1....so negative 1+positive 1=0



   numberx= numberx+1;

   var imagetick="<html><body><img src=\"pics/tick.png\" width=\"100\" height=\"80\"/></body></html>";
   var theusergivenanswer=document.querySelector('input[name="mybutt"]:checked').value;

///THIS IS FOR THE POINTS/////
   if (theusergivenanswer==ans[numberx])
   {score+=1;
   blank.innerHTML="<h2 style=\"color:orange;\">You Scored  "+score+"point  "+imagetick+"</h2>";

   green.innerHTML=greenarrow;

//THIS THE SCORE//////
   iscore=iscore+score;
   var showscore=document.getElementById("thescore");
   showscore.innerHTML="SCORE"+iscore;
 }


   else {
     var wrongs=[];
     wrongs.push("car");
    imagetick="<html><body><img src=\"pics/x.png\" width=\"200\" height=\"100\"/></body></html>";
     blank.innerHTML="wrong"+imagetick;
     wrongmake();
     green.innerHTML=greenarrow;


   }



function funny() {
  ("i am green bean with a lot of money, and i love jesus");



}

              }













              
