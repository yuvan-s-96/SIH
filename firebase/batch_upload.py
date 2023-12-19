import json
import firebase_admin
from firebase_admin import credentials, firestore

# Replace 'path/to/your/serviceAccountKey.json' with the path to your service account key file
cred = credentials.Certificate('commerce-a298d-firebase-adminsdk-odp4t-1b7321ce7b.json')
firebase_admin.initialize_app(cred)

# Access Firestore
db = firestore.client()

# Replace 'your-collection' with the name of your Firestore collection
collection_name = 'QuestionsKorean'

# Example: Read data from Firestore
def read_data():
    collection_ref = db.collection(collection_name)
    docs = collection_ref.get()

    for doc in docs:
        print(f'Document ID: {doc.id}, Data: {doc.to_dict()}')

# Example: Write data to Firestore
def write_data():
    data_to_write = [{
      "question": "What are the objectives of the agreement?",
      "answer": "The objectives of this Agreement, as elaborated more specifically through its principles and rules are to: a) liberalise and facilitate trade in goods and services and expand investment between the Parties; b) establish a cooperative framework for strengthening and enhancing the economic relations between the Parties; c) establish a framework conducive for a more favourable environment for their businesses and promote conditions of fair competition in the free trade area; d) establish a framework of transparent rules to govern trade and investment between the Parties; e) create effective procedures for the implementation and application of this Agreement; explore new areas of economic cooperation and develop appropriate measures for closer economic partnership between the Parties; f) improve the efficiency and competitiveness of their manufacturing and services sectors and expand trade and investment between the Parties; and g) establish a framework for further regional and multilateral cooperation to expand and enhance the benefits of this Agreement throughout Asia, and thereby, to encourage the economic integration of Asian economies."
    },
    {
      "question": "What are the categories of tariff liberalization/reduction pattern for the agricultural and manufacturing products exported to Korea from India under the IKCEPA?",
      "answer": "Tariff liberalization/reduction pattern under the IKCEPA for agricultural and manufactured products are classified into the following five categories: E-0 CATEGORY: Duties on originating goods provided for in the items in staging category E-0 shall be eliminated entirely and such goods shall be duty-free on the date this Agreement enters into force i.e. 1 January 2010. E-5 CATEGORY: Duties on originating goods provided for in the items in staging category E-5 shall be removed in five equal annual stages beginning on the date this Agreement enters into force i.e. 1 January 2010, and such goods shall be duty free, effective January 1 of year four i.e. 1 January 2014. E-8 CATEGORY: Duties on originating goods provided for in the items in staging category E-8 shall be removed in eight equal annual stages beginning on the date this 41 Agreement enters into force i.e. 1 January 2010, and such goods shall be duty free, effective January 1 of year seven i.e. 1 January 2018. SEN (SENSITIVE): Duties on originating goods provided for in the items in staging category SEN shall be reduced by fifty percent of the base rate in ten equal annual stages beginning on the date this Agreement enters into force i.e. 1 January 2010, and such goods shall remain at fifty percent of the base rate, effective January 1 of year nine i.e. 1 January 2019. RED: Duties on originating goods provided for in the items in staging category RED shall be reduced to one to five percent from the base rate in eight equal annual stages beginning on the date this Agreement enters into force i.e. 1 January 2010, and such goods shall remain at one to five percent, effective January 1 of year seven i.e. 1 January 2017. EXC (EXCLUDED): Duties on originating goods provided for in the items in staging category EXC shall remain at the base rate prescribed in the CEPA agreement."
    },
    {
      "question": "What are the important categories of products in the negative list of the IKCEPA?",
      "answer": "The key categories in which products figure in India’s negative list under the IJCEPA are: • Poultry • Dairy products • Fruits, vegetables, spices and nuts • Cereals • Vegetable oils • Processed agricultural products (sugar, juice, liquor) • tobacco • Petroleum products and Organic chemicals • Plastics, rubber and paper • Textiles and clothing • Leather • Mechanical (engineering goods) and electrical machinery • Automotives and auto components • Instruments"
    },
    {
      "question": "What are the export opportunities for India under the IKCEPA?",
      "answer": "Korea has undertaken immediate tariff liberalisation on product categories of India’s export interest which includes marine products (prawns, shrimps and lobsters), textiles, chemical and chemical products, vegetables, fruits, meat and meat products, spices, castor and rapeseed oil, tobacco and mineral stones."
    },
    {
      "question": "When and how are customs duties eliminated or reduced?",
      "answer": "Except as otherwise provided for in this Agreement, each Party shall reduce or eliminate its customs duties on originating goods of the other Party in accordance with its Schedule. Upon the request of either Party, the Parties shall consult each other to consider the possibility of accelerating the reduction or elimination of customs duties as set out in their Schedules including the goods that are excluded from tariff concessions in the Annex. An agreement by the Parties to accelerate the reduction or elimination of customs duties on any goods shall supersede any duty rate or staging category established for those goods in this Article of the Agreement."
    },
    {
      "question": "What is the definition for 'originating products' under the agreement?",
      "answer": "The goods which are wholly obtained or produced entirely in the party country or if the product is not wholly or partly produced in the country then it has to satisfy certain conditions. They are as follows: 1. Goods wholly obtained or produced in the territory of the exporting party, in accordance with Article 3.3; or 2. Goods not wholly obtained or produced in the territory of the exporting party, provided that the said products are eligible under Article 3.4"
    },
    {
      "question": "What is the de-minimis value of products under the agreement?",
      "answer": "The de-minimis value in the case of a good that does not undergo a change in tariff classification pursuant to “Not wholly obtained or Produced” and “Products Specific Rules” (Annex 3-A) in the final process of production shall be considered as originating if: a. for goods except for those falling within Chapters 1 through 14 and Chapters 50 through 63 of the HS, the value of all non-originating materials used in its production, which do not undergo the required change in tariff classification, does not exceed ten percent of the FOB value of the good; b. for goods falling within Chapters 50 through 63 of the HS, the total weight of non-originating basic textile materials used in its production, which do not undergo the required change in tariff classification, does not exceed seven percent of the total weight of all the basic textile materials used; and c. the good meets all other applicable criteria set forth in this Chapter for qualifying as an originating good"
    },
    {
      "question": "What are the Rules of Origin and does the agreement talk of any Regional Cumulation?",
      "answer": "The Rules of Origin followed under the India-Korea CEPA was with twin criteria having the regional value content is not less than 35 percent of the FOB value. The ROO need the goods to have undergone a change in tariff classification in a subheading, at the six digit level, of the HS from tariff classification and a value addition criterion. The Article 3.7 (Accumulation) in the Agreement talks of extending preferential treatment for originating materials from the territory of a Party, incorporated in the production of a good in the territory of the other Party to be eligible to be considered to originate in the territory of the other Party."
    },
    {
      "question": "Whether there are any non-tariff measures imposed under the agreement?",
      "answer": "At present there are no non-tariff measures on importation of any goods of the other Party or on the exportation of any goods destined for the territory of the other Party except in accordance with its rights and obligations under the WTO Agreement."
    },
    {
      "question": "How are the customs values of the goods determined under the CEPA agreement?",
      "answer": "Each Party shall determine the customs value of goods traded between the Parties in accordance with the provisions of Article VII of GATT 1994 and the Customs Valuation Agreement."
    },
    {
      "question": "Are there any restrictions under INDIA-KOREA CEPA agreement?",
      "answer": "The general exceptions mentioned in GATT 1994 are applicable to the parties concerned. The measures are: a) Necessary to protect public morals b) Necessary to protect human, animal or plant life or health c) Necessary to secure compliance with laws or regulations which are not inconsistent with the provisions of this Chapter including those relating to: (i) The prevention of deceptive and fraudulent practices or to deal with the effects of a default on services contracts; (ii) The protection of the privacy of individuals in relation to the processing and dissemination of personal data and the protection of confidentiality of individual records and accounts; or (iii) Safety; or d) Inconsistent with Article 6.5, provided that the difference in treatment is aimed at ensuring the equitable or effective10 imposition or collection of direct taxes in respect of services or service suppliers of the other Party.. Along with this, the agreement also spells out certain restrictions."
    },
    {
      "question": "Whether any customs clearance procedures provided in the agreement?",
      "answer": "All the rules regarding the customs procedures should be predictable, consistent, transparent and fair manner. According to the agreement all the measures with regard to customs clearance will maintain simplified customs procedures for the efficient release of goods in order to facilitate trade between the Parties. Each Party shall also endeavour to maintain a system under which goods in need of emergency can go through the customs procedures for 24 hours a day including holidays."
    },
    {
      "question": "Are there any restrictions or prohibitions imposed on particular products under the agreement?",
      "answer": "There are no restrictions or prohibitions on any imported or exported products."
    },
    {
      "question": "Are there any transparency measures under the India-Korea CEPA?",
      "answer": "The agreement mandatorily requires the parties to publish all its customs laws, regulations, and administrative procedures through the internet. It requires the government to maintain one or more enquiry points to address the queries of interested parties. It is also compulsory to circulate the information regarding the procedures for making such enquiries."
    },
    {
      "question": "What are rules and regulations pertaining to release of goods in the agreement?",
      "answer": "It has been recommended to adopt simplified customs procedures to facilitate trade between parties. All the parties should ensure speedy procedures of release of goods. There should be facilities for advance electronic submission and processing of information before the physical arrival of goods to enable the release of goods on arrival."
    },
    {
      "question": "What are the rules regarding automation provided in the agreement?",
      "answer": "According to the agreement, every party shall endeavour to use information technology to expedite its procedure for the release of goods. It is recommended to make electronic systems accessible to customs users. It also mandates using international standards in accordance with World Customs Organisation Customs Data Modal and related WCO recommendations and guidelines."
    },
    {
      "question": "What are provisions related to express shipments in the agreement?",
      "answer": "According to the agreement the parties should try to provide a separate and expedited customs procedures for express shipments and to provide for an advance electronic submission and processing of information before the physical arrival of express shipments to enable their release upon arrival."
    },
    {
      "question": "What are the rules regarding temporary admission of goods in the IKCEPA?",
      "answer": "Facilities with regard to temporary admission of goods are provided according to terms and conditions provide in Revised Kyoto Convention."
    },
    {
      "question": "What are the standards followed with regard to Technical Barrier to Trade (TBT)?",
      "answer": "All the technical regulations, standards and conformity assessment procedures will be defined according to Annex 1A of the WTO Agreement on Technical Barriers to Trade."
    },
    {
      "question": "What are the standards followed with regard to Sanitary and Phytosanitary Measures (SPS)?",
      "answer": "The sanitary and phytosanitary measures mentioned in Annex 1A in the Agreement on Sanitary and Phytosanitary Measures of WTO will be applicable for food products. (Article 50)"
    },
    {
      "question": "What are the other WTO agreements applicable as per the agreement?",
      "answer": "The Agreement on Anti-dumping and the Agreement on Subsidies and Countervailing Measures and Agreement on Safeguards are applicable for, safeguard, anti-dumping and countervailing duties respectively."
    },
    {
      "question": "What are the salient features of Korea’s services commitments?",
      "answer": "Korea’s offer to India is significantly superior to Korea’s Revised Offers in the WTO and also compares favourably with its commitments under other FTAs. Some of the salient features are: • There is a separate chapter on Mode 4 (Trade through movement of natural persons). • There is also a separate Annex of 163 professions in which commitments have been taken. • Korea has agreed for common definitions for categories of natural persons resulting in conceptual clarity. • Commitment for a given duration of stay for each category of natural persons engaged in the supply of services provides a sense of certainty to the service supplier. • Agreed to remove the labour market test as a condition for temporary entry or impose a numerical restriction relating to temporary entry for business visitors and ICTs. • All numerical limitations have been removed from the horizontal section. • Korea has agreed for GATS plus disciplines in Domestic regulations. • Korea is committed to encourage the conclusion of MRAs in any regulated service sectors within 12 months from the date of entry into force of this Agreement after a request is made in writing by either Party."
    },
    {
      "question": "How many sectors and sub-sectors are covered in the agreement and what are the services?",
      "answer": "Broadly 12 sectors and around 100 sub-sectors have been included in the agreement. The sectoral commitments of the agreement cover Business Services, Communication, Construction, Distribution, Education, Environment, Financial, Health Related, Tourism and Travel-Related Services, Recreational, Transportation Services, Other Services."
    },
    {
      "question": "What has Korea offered to Indian service suppliers under Mode 1, Mode 2 and Mode 3?",
      "answer": "Korea has offered Modes 1 and 2 as ‘None' across the board (except for the local presence requirement in certain sectors like Architectural Services, Engineering Services, Urban planning and landscape architectural services etc. In Mode 3 (i.e. Commercial Presence abroad), no FDI limitation full market access and national treatment commitments across sectors only with a few exceptions."
    },
    {
      "question": "Are the commitments given by Korea under the Computer Related Services (CRS) satisfactory?",
      "answer": "Yes, Korea has provided robust commitments in Computer-Related Services. Moreover, full Commitments have been made at the 3-digit level in Modes 1, 2, and 3."
    },
    {
      "question": "How can Indian service suppliers benefit under various categories of ‘Other Business Services’?",
      "answer": "A broad coverage has been provided under “Other Business Services” (ex: Advertising, market Research and Opinion polling; management consulting; technical testing and analysis; consulting services related to agriculture, fishing, animal husbandry, mining; placement services for personnel; photographic services; stenography; translation and interpretation; specialty design etc) and has been scheduled as “None” in Cross Border Supply (Mode 1 & 2) in most of the above mentioned sectors. In addition, full commitments have been taken in Mode 3 in the above-mentioned sectors."
    },
    {
      "question": "What is the sectoral commitment of Korea in ‘Communication Services’?",
      "answer": "Korea has taken on the full coverage of Communication services It includes courier, telecom, audio-visual (except Postal courier services committed). Broad commitments have also been taken in Modes 1, 2, and 3 in all the above sectors."
    },
    {
      "question": "What is the sectoral commitment of Korea in ‘Financial Services’?",
      "answer": "Korea has taken extensive commitments in all sub-sectors of Financial Services."
    },
    {
      "question": "What is the sectoral commitment of Korea in ‘Tourism Services’?",
      "answer": "In tourism, except for ‘others’, all sectors have been covered with full commitments under Mode 1, Mode 2, and Mode 3."
    },
    {
      "question": "What is the sectoral commitment of Korea in ‘Transportation Services’?",
      "answer": "On transportation service, extensive commitments have been taken for maritime, air (including computer reservation system and selling and marketing of Air Transport services), railways, roads, and pipeline."
    },
    {
      "question": "What all categories are covered in the chapter on MoNP (Movement of Natural Person) under India Korea CEPA?",
      "answer": "The categories of Business Visitors (BV), Intra-Corporate Transferees (ICT) and Professionals are covered under the agreement."
    },
    {
      "question": "What is the maximum duration of stay allowed in Korea for the various categories of Indian service suppliers?",
      "answer": "Maximum duration of stay for the various categories of Indian service suppliers are given below: • Business Visitors -90 days • Intra Corporate Transferees (ICT) – 2yrs (extendable indefinitely provided the conditions on which it is based remain in Effect) • Professionals (as per Annex 8A)- 1 yr or period of contract"
    },
    {
      "question": "Is there any ENT/LMTs that poses unnecessary barriers to trade?",
      "answer": "Korea has removed all requirements relating to ENT (Economic Needs Tests) and LMT (Labour Market Tests) from its schedule of commitments. This is a major gain for India in terms of ensuring clarity and certainty in commitments. Further, all numerical limitations have been removed from the horizontal section."
    },
    {
      "question": "Enlist the professions covered under the agreement?",
      "answer": "A list of 163 professionals are included as ANNEX 8-A in the agreement. These, inter alia, include: • Different types of Engineers such as Computer, and IT, Telecom (various kinds including mobile and basic and network and equipment), Network, Aircraft, Gas turbine, Diesel machine, Satellite, Refrigerator, Machine tool and Machine, Industrial robotic design, Automobile, Car electronic, Petroleum and Chemical, pesticide and fertilizer, Cosmetic and soap, Natural gas, Tyre production, Gasoline, Brewage production, Metal, Power plant, Electronic equipment, Construction Engineer, Industrial machine Engineer, Ship, Aircraft Rail, Marine Engineer, Oil and Exploration Engineer, Civil Engineer etc. • Different types of Consultants such as IT, Network, Database, Information Security, Information System, General management, Financial management , Marketing, Human resources management, Production management, Public relations etc. • Different kinds of Designers, Programmers, Developers and Analysts in various sectors • Biologist • Biochemist • Advertising • Assistant English teachers for primary and secondary school"
    }
    ]

    for data in data_to_write:
        collection_ref = db.collection(collection_name)
        new_doc_ref = collection_ref.add(data)
        print(new_doc_ref)
        
# Uncomment and run the function you want to execute
# read_data()
write_data()
