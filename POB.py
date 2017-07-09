import random
from time import sleep

#this my database of POB questions you can always add to it#
dictionary = {
'''\nWhen an economist says that a product has utility, it means that it is ?
a. very useful
b. desirable
c. it able to satisfy a want,\n''':'c',


'''\nIn the formation of a company, the memorandum of association
states not only the name of the company but also the?
a. Way director is are chosen
b. The amount of capital to be issued
c. The dividends to be paid per share,\n''':'a',


'''\nThe manager off ABC company has embarked upon sponsoring high school cricket team in the Caribbean.
the company is fulfilling its?
a. social obligation
b. obligation to customers
c. Economic obligations,\n''':'a',


'''\nA hotel provides vouchers for meals for its employees.
This form of incentive is best described as?' 
 a. motivational scheme
 b. Fringe benefits
 c. Reward,\n''':'b',


'''\nA major role of trade union is to encourage?
a. Staff to strike whenever they have problems at work
b. Management to pay a higher salaries and give a longer vacations to staff
c. advancement of the welfare of its members,\n''':'c',



'''\nAn increase in productivity of labour in the Caribbean region mean that?
a. A greater number of the population is now employed
b. The value of output per person is greater than before
c. More factors of production are avaliable for production,\n''':'b',


'''\nAn example of marketing activity is
a. Publicizing an advertisement for a new staff
b. Distributing commodities outlets
c. Bulletins on staff matters,\n''':'b',


'''\nAn industry in which sugar cane is converted to rum is best described as?
a. primary
b. Secondary
c. extractive,\n''':'b',


'''\nIn a public limited company the losses are borne by the?
a. Share holders
b. Staff
c. community,\n''':'a',


'''\nThe money used for the day -to-day operations of a business is called?
a. Fixed capital
b. nominal capital
c. working capital,\n''':'c',



'''\nThe policies of a company are formulated by the?
a. managers
b. shareholders
c. directors,\n''':'c',


'''\nWhich of the following best describes an example of capital as a factor of production?
a. Machinery
b. Shares
c. Money,\n''':'a',


'''\nThe simplest form of production is
a. Surplus and export
b. Subsistence
c. Domestic consumption,\n''':'b',


'''\nWhich of the following best describes an example of capital as a factor of production?
a. Machinery
b. Shares
c. Money,\n''':'a',



'''\nThe primary function of advertising is to?
a. Communicate information
b. Promote brand locally
c. Ensure the distribution of goods,\n''':'b',


'''\nA purchase order is a?
a. Statement offering to buy goods
b. Notification of goods received
c. Payment of debts outstanding,\n''':'a',


'''\nA market in economic terms is defined as?
a. A place where a tangible goods are bought and sold
b. A situation which exists when buyers and sellers influence the price of goods
c. A specific place where buyers and sellers meet,\n''':'b',


'''\nWhich of the following will NOT form a part of a country's balance of trade?
a. Payments for the importation of tobacco
b. Earnings from tourists spending
c. Earnings from the exportation of rum,\n''':'b',


'''\nWhich of the following is not a benefit of international trade?
a. Producers are able to increase their market size
b. Import restrictions can be imposed on foreign items
c. Political links developed countries,\n''':'b',


'''\nWhich of the following actions of government is most likely to lead to an improvement in the standard of living?
a. Give tax incentives to business
b. Abolishing taxes on income
c. Increase in the income tax rate,\n''':'b',

'''\nPrivate enterprise is run MAINLY to?
a. create a profit
b. reduce inflation
c. provide jobs for more people,\n''':'a',

'''\nThe type of business environment MOST typical of the Commonwealth Caribbean area is?
a. corporate state
b. mixed economy
c. centrally planned,\n''':'b',

'''\nWhich of the following is NOT a function of money?
a. indivisibility
b. store of value
c. medium of exchange,\n''':'a',

'''\nManagement Information System (MIS) can be defined as the?

a. technological benifits gained by an organisation for being
   apart of a well-organised industry

b. use of technology to gather information for use in making decisions
   within an organisation

c. use of various factors within a business to reduce costs and increase
   profit,\n''':'b',

'''\nTom invests his savings by buying shares in a company.
from this investment Tom expects to receive?

a. profits
b. interest
c. dividends,\n''':'c',

   





}

#my reward system#
points=0
points1=0



# my poins system functions maaaaan#
def tes2():
 global points
 points+=1

 
def tes1():
 global points1
 points1+=1
#when it done ou#
def last():
    print('\n\n\n\n\n\nits over this is the end of the test...your worng answers are\t'+str(points1)
          +'\nyour total right answers are\t'+str(points))
            


    
 

   
words = list(dictionary.items())
random.shuffle(words)

print('WELCOME TO THE COMMON SENSE QUESTION PROGRAMME\t\t\t\t\n\n\n\n \r')
name=input('PLEASE STATE YOUR NAME__')
print ('HI  '+name+'\n\n\n')

for word, cow in words:
    print(word)
    answer =input('Enter your answer letter: ')

    if answer == cow:
        tes2()
        print ('right')
    else:
        tes1()
        print('wrong!!!The correct answer is: %s.' % cow)



last()
#win()
        
