const HOTELS_DATA = [
    {
        "route": 1,
        "name": "EUROSTARS GRAND MARINA",
        "address": "Moll de Bcn s/n,World Trade Center",
        "comment": "",
        "mapsLink": "https://maps.app.goo.gl/T896CvSyx5q1TAFp9",
        "lat": 41.37180142078914,
        "lng": 2.180899412611472
    },
    {
        "route": 2,
        "name": "HILTON DIAGONAL MAR",
        "address": "Pg del Taulat 262,CCIB",
        "comment": "",
        "mapsLink": "https://maps.app.goo.gl/MXUKGKTfrgAeiWNKA",
        "lat": 41.40871094414003,
        "lng": 2.217446403510998
    },
    {
        "route": 2,
        "name": "LEONARDO BCN FORUM",
        "address": "Pg del Taulat 278,CCIB",
        "comment": "",
        "mapsLink": "https://maps.app.goo.gl/maa2C2w6nAR5wk1D7",
        "lat": 41.40991059858922,
        "lng": 2.2186130354624054
    },
    {
        "route": 2,
        "name": "BARCELONA PRINCESS",
        "address": "Av. Diagonal 1,Esq. Pg. Del Taulat",
        "comment": "",
        "mapsLink": "https://maps.app.goo.gl/oKNkMriiubTXiJY57",
        "lat": 41.41095138348593,
        "lng": 2.2186675456325755
    },
    {
        "route": 2,
        "name": "SB DIAGONAL ZERO",
        "address": "Pl. de Llevant s/n,Frente Torre Telefónica",
        "comment": "",
        "mapsLink": "https://maps.app.goo.gl/khW9aGa9wM1xdYhK8",
        "lat": 41.41223235049058,
        "lng": 2.2198451659660288
    },
    {
        "route": 2,
        "name": "TEMBO BARCELONA",
        "address": "Ramón Llull 479-487",
        "comment": "Por detrás del SB D. Zero, lado Besós",
        "mapsLink": "https://maps.app.goo.gl/utMpaygC9Cm5SN2a7",
        "lat": 41.41515372591302,
        "lng": 2.220786557915777
    },
    {
        "route": 2,
        "name": "SLS BARCELONA",
        "address": "Carrer de la Pau 2",
        "comment": "Port Forum, Sant Adrià",
        "mapsLink": "https://maps.app.goo.gl/mJkDuXd529TgaYaj8",
        "lat": 41.416155325201906,
        "lng": 2.226183994714848
    },
    {
        "route": 3,
        "name": "SOFITEL SKIPPER",
        "address": "Av. Del Litoral 10,Antes de llegar al Arts",
        "comment": "",
        "mapsLink": "https://maps.app.goo.gl/bmdFCWYdTyDBG6jg9",
        "lat": 41.38602938980801,
        "lng": 2.1947379544001127
    },
    {
        "route": 3,
        "name": "SB ICARIA ",
        "address": "Av. D'Icària 195",
        "comment": "Esq. Avila, lado montaña/Besós",
        "mapsLink": "https://maps.app.goo.gl/Hdrozu2ejPWq9Psk6",
        "lat": 41.39370040276063,
        "lng": 2.1994066526199814
    },
    {
        "route": 3,
        "name": "H10 MARINA ",
        "address": "Av. Del Bogatell 64,Villa Olímpica",
        "comment": "",
        "mapsLink": "https://maps.app.goo.gl/35q2UnUcwb382C4W9",
        "lat": 41.392875114525324,
        "lng": 2.1924708979929406
    },
    {
        "route": 4,
        "name": "SB GLOW",
        "address": "Badajoz 148,Subiendo a Pl. Glories a mano dcha",
        "comment": "",
        "mapsLink": "https://maps.app.goo.gl/iRSzX8fxk8fHKQYG7",
        "lat": 41.40216206174385,
        "lng": 2.191129290600608
    },
    {
        "route": 4,
        "name": "THE HOXTON POBLENOU",
        "address": "Av. Diagonal 205",
        "comment": "A dcha, junto torre Glòries/Agbar",
        "mapsLink": "https://maps.app.goo.gl/rYhL1jCoULqCNuML7",
        "lat": 41.40388134803245,
        "lng": 2.190244503472989
    },
    {
        "route": 4,
        "name": "NOVOTEL BARCELONA CITY",
        "address": "Ciutat de Granada 201,Esq. Diagonal",
        "comment": "",
        "mapsLink": "https://maps.app.goo.gl/m7zhnzgpxZKxovNJ7",
        "lat": 41.40385737988843,
        "lng": 2.1912238249513
    },
    {
        "route": 4,
        "name": "MELIÁ BARCELONA SKY",
        "address": "Lope de Vega 141,Esq. Diagonal y Pere IV",
        "comment": "",
        "mapsLink": "https://maps.app.goo.gl/J33uypRavXyqsx5i9",
        "lat": 41.40619356763894,
        "lng": 2.2009771955040707
    },
    {
        "route": 4,
        "name": "LABTWENTYTWO BCN",
        "address": "Carrer del Perú 102",
        "comment": "Paralela a C31, entre Espronceda y Bilbao",
        "mapsLink": "https://maps.app.goo.gl/nHk1pWsXWoBr5o6Q9",
        "lat": 41.40899687930711,
        "lng": 2.197275785102185
    },
    {
        "route": 5,
        "name": "OCCIDENTAL ATENEA MAR",
        "address": "Pg. De García Fària 37",
        "comment": "",
        "mapsLink": "https://maps.app.goo.gl/1V3LmCA3siYFp55g7",
        "lat": 41.4022763356525,
        "lng": 2.211670320652219
    },
    {
        "route": 5,
        "name": "ILUNION BARCELONA",
        "address": "Ramón Turró 196",
        "comment": "Esq. Llacuna, lado mar",
        "mapsLink": "https://maps.app.goo.gl/8i1tu1cKviBxLq8GA",
        "lat": 41.39910440586884,
        "lng": 2.2021108489739976
    },
    {
        "route": 5,
        "name": "PAXTON BCN",
        "address": "Lull 160",
        "comment": "Entre Llacuna y Roc Boronat, lado mar",
        "mapsLink": "https://maps.app.goo.gl/pDKwwLcXWVYHvPHB8",
        "lat": 41.39941498832945,
        "lng": 2.200230566422449
    },
    {
        "route": 6,
        "name": "ILUNION BEL-ART",
        "address": "Lepant 406,En frente Cuartel de Lepant",
        "comment": "",
        "mapsLink": "https://maps.app.goo.gl/d92wVs4PM1C7jQNC8",
        "lat": 41.410172007376325,
        "lng": 2.1695312494416266
    },
    {
        "route": 6,
        "name": "RADISSON BLU 1882",
        "address": "Còrsega 482",
        "comment": "Esq. Sicilia, lado mar/Llobregat",
        "mapsLink": "https://maps.app.goo.gl/C94jzwdX7YA6U75QA",
        "lat": 41.40402460610561,
        "lng": 2.1696246887795136
    },
    {
        "route": 6,
        "name": "NH PODIUM",
        "address": "Bailén 4-6",
        "comment": "Esq. Ali Bei, lado montaña/Besós",
        "mapsLink": "https://maps.app.goo.gl/8iN6xnoqyzLhoGNQ9",
        "lat": 41.391553872190414,
        "lng": 2.177893703503898
    },
    {
        "route": 6,
        "name": "CASA BONAY",
        "address": "Gran Via CC 700",
        "comment": "Antes de llegar a Pza Tetuán, a la dcha (esq. Bailén)",
        "mapsLink": "https://maps.app.goo.gl/yNNnRHbXqgX7EKkRA",
        "lat": 41.39362200391083,
        "lng": 2.1743192380350056
    },
    {
        "route": 7,
        "name": "SEVENTY BARCELONA",
        "address": "Còrsega 344",
        "comment": "Entre R. de Llúria y Pau Claris, lado mar",
        "mapsLink": "https://maps.app.goo.gl/L5xVMd9a9Mdn7tL97",
        "lat": 41.39806698492816,
        "lng": 2.1615557214779777
    },
    {
        "route": 7,
        "name": "THE ONE BARCELONA GL",
        "address": "Provença 277",
        "comment": "Esq. Pau Claris, lado montaña",
        "mapsLink": "https://maps.app.goo.gl/SsND3z8KBPnq2das9",
        "lat": 41.39612011021474,
        "lng": 2.1630349537020006
    },
    {
        "route": 7,
        "name": "SIR VICTOR HOTEL",
        "address": "Rosselló 265",
        "comment": "Entre Pau Claris y Pg de Gràcia, lado montaña",
        "mapsLink": "https://maps.app.goo.gl/aYAbVubqXbtXyoKU9",
        "lat": 41.39622172716171,
        "lng": 2.160967695348123
    },
    {
        "route": 7,
        "name": "GALLERY",
        "address": "Rosselló 249",
        "comment": "Entre Rbla. Cat y Pg de Gràcia, lado montaña",
        "mapsLink": "https://maps.app.goo.gl/8b3YhEGRQXAtFzga8",
        "lat": 41.395137887530325,
        "lng": 2.1591852277211916
    },
    {
        "route": 8,
        "name": "NEGRESCO PRINCESS",
        "address": "Roger de Llúria 16",
        "comment": "(Esq. Casp, lado mar)",
        "mapsLink": "https://maps.app.goo.gl/2NuwjWFfz7MxMiVz8",
        "lat": 41.390470161143995,
        "lng": 2.172609122471961
    },
    {
        "route": 8,
        "name": "EL PALACE BCN HOTEL",
        "address": "Gran Vía C.C. 668",
        "comment": "(Esq. Llúria, lado Besós)",
        "mapsLink": "https://maps.app.goo.gl/HPKR7RPxzk4ShWsUA",
        "lat": 41.39151118781879,
        "lng": 2.1715163289585715
    },
    {
        "route": 8,
        "name": "HCC ST. MORITZ",
        "address": "Diputació 264",
        "comment": "(Entre Pau Claris y Pg de Gràcia, lado mar)",
        "mapsLink": "https://maps.app.goo.gl/HjLmgGxPwqbcwFUS8",
        "lat": 41.39107339433926,
        "lng": 2.1682157239627045
    },
    {
        "route": 8,
        "name": "MANDARIN ORIENTAL",
        "address": "Pg. De Gràcia 38-40",
        "comment": "(Entre Diputació y Consell de Cent, lado Besós)",
        "mapsLink": "https://maps.app.goo.gl/iFjSkPbnsY3KoMdJA",
        "lat": 41.391171255642185,
        "lng": 2.166576508985028
    },
    {
        "route": 8,
        "name": "MAJESTIC",
        "address": "Pg. De Gràcia 68",
        "comment": "(Esq. Valencia, lado montaña)",
        "mapsLink": "https://maps.app.goo.gl/BgGFZ7gGwyFEmNQe6",
        "lat": 41.39344460304131,
        "lng": 2.1639884617097804
    },
    {
        "route": 8,
        "name": "CLARIS HOTEL",
        "address": "Pau Claris 150",
        "comment": "(Esq. València, lado Besós)",
        "mapsLink": "https://maps.app.goo.gl/SnqXjhWtffhyxtgL6",
        "lat": 41.39437362408376,
        "lng": 2.165196424314399
    },
    {
        "route": 8,
        "name": "RENAISSANCE BARCELONA",
        "address": "Pau Claris 122",
        "comment": "(Esq. Consell de Cent, lado Besós/montaña)",
        "mapsLink": "https://maps.app.goo.gl/CWUFzcw2hwTpgiNN7",
        "lat": 41.39269518806629,
        "lng": 2.1673979559112095
    },
    {
        "route": 8,
        "name": "EUROSTARS BCN CENTRAL",
        "address": "Aragó 300",
        "comment": "(Esq. R. de Llúria, lado Llobregat)",
        "mapsLink": "https://maps.app.goo.gl/SYHvJWkgpHJps8hx9",
        "lat": 41.39395141678543,
        "lng": 2.1675520356639537
    },
    {
        "route": 8,
        "name": "NH CALDERON",
        "address": "Rbla de Catalunya 26",
        "comment": "(Esq. Diputació, lado Besós)",
        "mapsLink": "https://maps.app.goo.gl/M6tZanBumA8f6Mk26",
        "lat": 41.38930879781708,
        "lng": 2.1660362821305044
    },
    {
        "route": 8,
        "name": "ALEXANDRA BARCELONA",
        "address": "Mallorca 251",
        "comment": "(Entre Rbla. Cat y Pg de Gràcia, lado montaña)",
        "mapsLink": "https://maps.app.goo.gl/VCWxz1EgmzbtBwYw5",
        "lat": 41.39317890213527,
        "lng": 2.1615668755590334
    },
    {
        "route": 9,
        "name": "EVENIA ROSSELLÓ",
        "address": "Rosselló 191",
        "comment": "(Entre Enric Granados y Aribau, lado montaña)",
        "mapsLink": "https://maps.app.goo.gl/ZXam9sFKLmjyKYYeA",
        "lat": 41.392045840423556,
        "lng": 2.1555556749380114
    },
    {
        "route": 9,
        "name": "GRANADOS 83",
        "address": "Enric Granados 83",
        "comment": "(Bajando a la dcha, entre Rosselló y Provença)",
        "mapsLink": "https://maps.app.goo.gl/RHLJfWfh7swUH2Dn8",
        "lat": 41.391865379698935,
        "lng": 2.156878376792106
    },
    {
        "route": 9,
        "name": "H10 ART GALLERY",
        "address": "Enric Granados 62-64",
        "comment": "A dcha, entre Rosselló y Provença (frente Granados 83)",
        "mapsLink": "https://maps.app.goo.gl/NdVLYcVYQQrTQSGM7",
        "lat": 41.39200475836279,
        "lng": 2.1569659537928754
    },
    {
        "route": 9,
        "name": "BALMES HOTEL",
        "address": "Mallorca 216",
        "comment": "(Entre Balmes y Enric Granados, lado mar)",
        "mapsLink": "https://maps.app.goo.gl/yC3Hzqzbqu1EQ1cN7",
        "lat": 41.39120599517814,
        "lng": 2.1591810139862746
    },
    {
        "route": 9,
        "name": "OHLA EIXAMPLE ",
        "address": "Còrsega 289",
        "comment": "(Entre Rbla Cat y Balmes, lado montaña)",
        "mapsLink": "https://maps.app.goo.gl/1uNjZ8LTfUmMcZhZA",
        "lat": 41.39452676964009,
        "lng": 2.156554663598239
    },
    {
        "route": 9,
        "name": "HESPERIA BCN PRESIDENTE",
        "address": "Av. Diagonal 570",
        "comment": "(Esq. Muntaner, a la dcha)",
        "mapsLink": "https://maps.app.goo.gl/U1zuxb6bmn9DEPxT8",
        "lat": 41.394186154442934,
        "lng": 2.1492046694224483
    },
    {
        "route": 10,
        "name": "CIUTADELLA BCN",
        "address": "Av. Marquès de l'Argentera 4",
        "comment": "(A dcha, antes de la estació del Nord)",
        "mapsLink": "https://maps.app.goo.gl/kva8KXSr2SJ33Dj57",
        "lat": 41.38387271037136,
        "lng": 2.1846252502976364
    },
    {
        "route": 10,
        "name": "MEDINACELI",
        "address": "Pl. del Duc de Medinaceli 8",
        "comment": "(En la plaza, lado Llobregat)",
        "mapsLink": "https://maps.app.goo.gl/5hrSvKPWNhr6eg4d7",
        "lat": 41.37820711118224,
        "lng": 2.178657178784603
    },
    {
        "route": 10,
        "name": "GÓTICO HOTEL ",
        "address": "Jaume I 14",
        "comment": "Lado mar",
        "mapsLink": "https://maps.app.goo.gl/8XBjBAbMwMTUVRE59",
        "lat": 41.383461840146666,
        "lng": 2.1781628386198664
    },
    {
        "route": 10,
        "name": "GRAND HOTEL CENTRAL",
        "address": "Via Laietana 30",
        "comment": "Subiendo, a mano dcha, antes de la catedral",
        "mapsLink": "https://maps.app.goo.gl/EvKPBrv9D6iVRKSs8",
        "lat": 41.38490575586353,
        "lng": 2.1776477777475653
    },
    {
        "route": 10,
        "name": "ILUNION ALMIRANTE",
        "address": "Via Laietana 42",
        "comment": "Subiendo, a mano dcha, pasada la catedral",
        "mapsLink": "https://maps.app.goo.gl/oRx8kN9LyCYzwc2w5",
        "lat": 41.38602121399078,
        "lng": 2.1761566256663616
    },
    {
        "route": 10,
        "name": "LE MÉRIDIEN BCN",
        "address": "La Rambla 111",
        "comment": "Esq. Pintor Fortuny, lado Llobregat",
        "mapsLink": "https://maps.app.goo.gl/HkqKjbemccaNSrGKA",
        "lat": 41.383527815496,
        "lng": 2.170624256795788
    },
    {
        "route": 10,
        "name": "HOTEL 1898",
        "address": "La Rambla 109",
        "comment": "Esq. Pintor Fortuny, lado Llobregat",
        "mapsLink": "https://maps.app.goo.gl/kHgygHQn9erVhQcb9",
        "lat": 41.383540761759285,
        "lng": 2.1711972924371956
    },
    {
        "route": 10,
        "name": "SILKEN RAMBLAS",
        "address": "Pintor Fortuny 13",
        "comment": "Lado mar",
        "mapsLink": "https://maps.app.goo.gl/C9sjpDhRb1siUMeB6",
        "lat": 41.383007830904134,
        "lng": 2.1700083771004017
    },
    {
        "route": 11,
        "name": "H10 CASANOVA",
        "address": "Gran Vía CC 559",
        "comment": "(Esq. Casanova, lado montaña)",
        "mapsLink": "https://maps.app.goo.gl/fMS8ayKfGayUK8Dh7",
        "lat": 41.38409534409633,
        "lng": 2.1607222416355283
    },
    {
        "route": 11,
        "name": "THE CORNER HOTEL",
        "address": "Mallorca 178",
        "comment": "(Esq. Muntaner, lado mar)",
        "mapsLink": "https://maps.app.goo.gl/nPNuy11STBGJT3V8A",
        "lat": 41.389100149762776,
        "lng": 2.156452302052392
    },
    {
        "route": 11,
        "name": "U232 HOTEL",
        "address": "Urgell 232",
        "comment": "Entre Còrsega y París, a mano dcha. Frente Escuela Ind",
        "mapsLink": "https://maps.app.goo.gl/nPNuy11STBGJT3V8A",
        "lat": 41.38959016998513,
        "lng": 2.1488818993801218
    },
    {
        "route": 12,
        "name": "DERBY HOTEL",
        "address": "Loreto 21",
        "comment": "",
        "mapsLink": "https://maps.app.goo.gl/YGVuPvFhnhFa6xGj7",
        "lat": 41.38977206036208,
        "lng": 2.142002519971402
    },
    {
        "route": 12,
        "name": "MELIA BARCELONA SARRIÁ",
        "address": "Av. De Sarrià 50",
        "comment": "",
        "mapsLink": "https://maps.app.goo.gl/Tu3z55iYzberG3VM9",
        "lat": 41.39089196992799,
        "lng": 2.141733099018712
    },
    {
        "route": 12,
        "name": "NH CONSTANZA",
        "address": "Deu i Mata 69-99",
        "comment": "",
        "mapsLink": "https://maps.app.goo.gl/DohJwGqy1YJYBUVZA",
        "lat": 41.38884371266142,
        "lng": 2.136296800793948
    },
    {
        "route": 13,
        "name": "NH SANTS BARCELONA",
        "address": "Numància 74",
        "comment": "Bajando a la izqda.",
        "mapsLink": "https://maps.app.goo.gl/53n9UVwWpTH7pLMa6",
        "lat": 41.384563518310465,
        "lng": 2.137785698871324
    },
    {
        "route": 13,
        "name": "ABBA SANTS",
        "address": "Numància 32",
        "comment": "Bajando a la izqda.",
        "mapsLink": "https://maps.app.goo.gl/sdH4ibdtKVtuqKcaA",
        "lat": 41.3825465063362,
        "lng": 2.139978113501307
    },
    {
        "route": 13,
        "name": "MOXY BARCELONA (EXPO)",
        "address": "Mallorca 1-23",
        "comment": "Antiguo hotel Expo",
        "mapsLink": "https://maps.app.goo.gl/eabw4uwmo34AdYGK8",
        "lat": 41.379110894210626,
        "lng": 2.142916839993952
    },
    {
        "route": 13,
        "name": "BARCELÓ SANTS",
        "address": "Pl. dels Paisos Catalans s/n",
        "comment": "Estació de Sants",
        "mapsLink": "https://maps.app.goo.gl/ir26wyiXVhmdsbXg7",
        "lat": 41.379881670482916,
        "lng": 2.1413035203990174
    },
    {
        "route": 13,
        "name": "NOBU HOTEL BARCELONA",
        "address": "Av. De Roma 2-4",
        "comment": "Antiguo Torre Catalunya",
        "mapsLink": "https://maps.app.goo.gl/f1oAEzjw7vCgzHRc7",
        "lat": 41.379953881013684,
        "lng": 2.1426241759747726
    },
    {
        "route": 13,
        "name": "H10 ITACA",
        "address": "Av. De Roma 22",
        "comment": "",
        "mapsLink": "https://maps.app.goo.gl/YTiQGcDDYDCZCsia6",
        "lat": 41.38123711601401,
        "lng": 2.145398544537613
    },
    {
        "route": 14,
        "name": "INDIGO GRANVIA PLAZA ESPANYA",
        "address": "Gran Via CC 322",
        "comment": "Esq. c/Mèxic",
        "mapsLink": "https://maps.app.goo.gl/3QVwuyoPvaqFxTtp8",
        "lat": 41.373388684991745,
        "lng": 2.147403862876384
    },
    {
        "route": 14,
        "name": " INTERCONTINENTAL BCN",
        "address": "Av. De Rius i Taulet 1-3",
        "comment": "Esq. c/Lleida",
        "mapsLink": "https://maps.app.goo.gl/DqR3mNgQJnKkfP6J9",
        "lat": 41.37293155764033,
        "lng": 2.154955500990119
    },
    {
        "route": 14,
        "name": "CATALONIA PLAZA",
        "address": "Pl. de Espanya 8",
        "comment": "",
        "mapsLink": "https://maps.app.goo.gl/eLTeLFMcRqjHHfPG7",
        "lat": 41.37552539081576,
        "lng": 2.1487620518454627
    },
    {
        "route": 14,
        "name": "PESTANA ARENA BCN",
        "address": "Consell de Cent 51-53",
        "comment": "A la dcha c/Tarragona. Lado montaña",
        "mapsLink": "https://maps.app.goo.gl/KM1ZqjT78W5oJD668",
        "lat": 41.37675426821944,
        "lng": 2.146087027761536
    },
    {
        "route": 14,
        "name": "INNSIDE MELIÁ BCN APOLO",
        "address": "Av. Paral·lel 57-59",
        "comment": "",
        "mapsLink": "https://maps.app.goo.gl/X3ButXBFKt1NFhN8A",
        "lat": 41.37478152219583,
        "lng": 2.170597195715193
    },
    {
        "route": 14,
        "name": "UNIVERSAL BCN HOTEL",
        "address": "Av. Paral·lel 76-80",
        "comment": "",
        "mapsLink": "https://maps.app.goo.gl/whfQgvWHW4ze3hMbA",
        "lat": 41.375123020028816,
        "lng": 2.168312842014166
    },
    {
        "route": 15,
        "name": "ILUNION LES CORTS SPA",
        "address": "Cardenal Reig 11",
        "comment": "Detrás Rey J.Carlos / Camp Nou",
        "mapsLink": "https://maps.app.goo.gl/W3nyK8DuMrMxnfMZ6",
        "lat": 41.37703194911845,
        "lng": 2.114091251048651
    },
    {
        "route": 15,
        "name": "TORRE MELINA HOTEL",
        "address": "Av. Diagonal 671",
        "comment": "",
        "mapsLink": "https://maps.app.goo.gl/3Ujom7vTmdNV5H6HA",
        "lat": 41.381644459181906,
        "lng": 2.1089750262115254
    },
    {
        "route": 16,
        "name": "GRAND HYATT BARCELONA",
        "address": "Pl. de Pius XII",
        "comment": "antiguo Sofía",
        "mapsLink": "https://maps.app.goo.gl/Rxres1ehEZXsNcaa9",
        "lat": 41.38666666833817,
        "lng": 2.123015710414754
    },
    {
        "route": 16,
        "name": "HILTON BARCELONA",
        "address": "Av. Diagonal 589",
        "comment": "",
        "mapsLink": "https://maps.app.goo.gl/QXfUfPJHQrZcMvbm6",
        "lat": 41.38901885914988,
        "lng": 2.131362567297132
    },
    {
        "route": 17,
        "name": "RENAISSANCE BCN FIRA",
        "address": "Pl. de Europa 50",
        "comment": "",
        "mapsLink": "https://maps.app.goo.gl/KB3TKWeVS9xfVqEC7",
        "lat": 41.3561037838946,
        "lng": 2.1236673976388847
    },
    {
        "route": 17,
        "name": "ALEXANDRE FIRA CONGRESS",
        "address": "C. José de Goytisolo 9, L'H.",
        "comment": "",
        "mapsLink": "https://maps.app.goo.gl/Uqm8nPpd5tsMAQK4A",
        "lat": 41.352694655528616,
        "lng": 2.1266837992537995
    },
    {
        "route": 17,
        "name": "PORTA FIRA",
        "address": "Pl. de Europa 45",
        "comment": "",
        "mapsLink": "https://maps.app.goo.gl/rERP9fnj4mB1yGiy5",
        "lat": 41.354935928480465,
        "lng": 2.125936421682284
    },
    {
        "route": 17,
        "name": "HAMPTON BY HILTON",
        "address": "Pl. De Europa 33",
        "comment": "",
        "mapsLink": "https://maps.app.goo.gl/jKmE3KCdxKFwxyYH8",
        "lat": 41.35571703025612,
        "lng": 2.1272230564478796
    },
    {
        "route": 17,
        "name": "SB PLAZA EUROPA",
        "address": "C/ de les Ciències 11",
        "comment": "Esq. c/ Alumini",
        "mapsLink": "https://maps.app.goo.gl/hi6VvYhFoNGiteTq7",
        "lat": 41.35928520050959,
        "lng": 2.132392914319662
    }
];

const ROUTE_COLORS = {
    1: '#FF6B6B',   // Rojo
    2: '#4ECDC4',   // Turquesa
    3: '#45B7D1',   // Azul
    4: '#FFA07A',   // Salmón
    5: '#98D8C8',   // Verde menta
    6: '#F7DC6F',   // Amarillo
    7: '#BB8FCE',   // Púrpura
    8: '#F8B739',   // Naranja
    9: '#85C1E2',   // Azul claro
    10: '#F1948A',  // Rosa
    11: '#BAAF38',  // Amarillo oscuro
    12: '#736C20',  // Amarillo más oscuro
    13: '#A67024',  // Naranja oscuro
    14: '#C4471B',
    15: '#FCB99F',
    16: '#A8348D',
    17: '#A38196'
};