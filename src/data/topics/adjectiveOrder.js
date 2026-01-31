export const adjectiveOrderTopic = {
    id: 'adjective-order',
    title: 'CHUYÊN ĐỀ 20: TRẬT TỰ TÍNH TỪ (ADJECTIVE ORDER)',
    category: 'Adjectives',
    children: [
        {
            id: 'adjective-order-theory',
            title: 'LÝ THUYẾT: TRẬT TỰ TÍNH TỪ',
            category: 'Adjectives',
            sections: [
                {
                    title: 'QUY TẮC OSASCOMP',
                    type: 'custom',
                    content: [
                        {
                            subtitle: 'Ghi nhớ trật tự tính từ bằng quy tắc: OSASCOMP',
                            cases: [
                                { label: 'O - Opinion (Ý kiến)', formula: 'Beautiful, interesting, lovely, delicious...' },
                                { label: 'S - Size (Kích cỡ)', formula: 'Big, small, large, huge, long, short, tall...' },
                                { label: 'A - Age (Tuổi tác)', formula: 'Old, young, new, ancient, modern...' },
                                { label: 'S - Shape (Hình dáng)', formula: 'Round, triangle, heart-shaped, flat, square...' },
                                { label: 'C - Color (Màu sắc)', formula: 'Black, red, white, yellow, violet...' },
                                { label: 'O - Origin (Nguồn gốc)', formula: 'Vietnamese, English, Indian, Japanese, German...' },
                                { label: 'M - Material (Chất liệu)', formula: 'Silk, gold, silver, wooden, plastic, leather...' },
                                { label: 'P - Purpose (Mục đích)', formula: 'Sitting, sleeping, wedding, waiting...' }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'adjective-order-ex-1',
            title: 'BÀI TẬP 1: TRẮC NGHIỆM',
            category: 'Adjectives',
            sections: [
                {
                    title: 'Exercise 1: Choose the best answers to complete the following sentences',
                    subtitle: 'Chọn đáp án đúng (Câu 1-65)',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "When I was going to school this morning, I saw a ______ girl.", answer: "A", type: 'multiple_choice', options: ["beautiful young blonde Russian", "beautiful young Russian blonde", "blonde young beautiful Russian", "Russian young blonde beautiful"], explanation: "Trật tự: Opinion (beautiful) - Age (young) - Color (blonde) - Origin (Russian)." },
                        { id: 2, text: "Indiana University is located in a ______ town.", answer: "D", type: 'multiple_choice', options: ["small beautiful Midwestern", "beautiful Midwestern small", "Midwestern beautiful small", "beautiful small Midwestern"], explanation: "Trật tự: Opinion (beautiful) - Size (small) - Origin (Midwestern)." },
                        { id: 3, text: "Her father bought her ______ when he went on holiday in Singapore.", answer: "D", type: 'multiple_choice', options: ["a beautiful silk yellow scarf", "a beautiful yellow silk scarf", "a beautiful yellow scarf silk", "a beautiful yellow silk scarf"], explanation: "Trật tự: Opinion (beautiful) - Color (yellow) - Material (silk)." },
                        { id: 4, text: "It is really a (n) ______ which is suitable for my daughter.", answer: "D", type: 'multiple_choice', options: ["undergraduate interesting economics course", "economics course interesting undergraduate", "interesting economics undergraduate course", "interesting undergraduate economics course"], explanation: "Trật tự: Opinion (interesting) - Age/Type (undergraduate) - Purpose/Topic (economics)." },
                        { id: 5, text: "I’d give anything to have a look at the ______ world.", answer: "D", type: 'multiple_choice', options: ["modern British wizard intriguing", "wizard British wizard intriguing", "wizard intriguing wizard British", "intriguing modern British wizard"], explanation: "Trật tự: Opinion (intriguing) - Age (modern) - Origin (British)." },
                        { id: 6, text: "When my parents traveled to Singapore, they bought me a ______ piano.", answer: "A", type: 'multiple_choice', options: ["precious grand ancient wooden", "wooden grand ancient precious", "precious grand wooden ancient", "ancient grand precious wooden"], explanation: "Trật tự: Opinion (precious) - Size (grand) - Age (ancient) - Material (wooden)." },
                        { id: 7, text: "Our house is located near a(n) ______ school.", answer: "B", type: 'multiple_choice', options: ["large prestigious international Catholic", "prestigious large international Catholic", "Catholic prestigious large international", "prestigious catholic international large"], explanation: "Trật tự: Opinion (prestigious) - Size (large) - Origin/Type (international) - Religion/Type (Catholic)." },
                        { id: 8, text: "My daughter likes playing with a(n) ______ rope to get lean.", answer: "A", type: 'multiple_choice', options: ["old black leather skipping", "Leather black old skipping", "Skipping black old leather", "Leather old black skipping"], explanation: "Trật tự: Age (old) - Color (black) - Material (leather) - Purpose (skipping)." },
                        { id: 9, text: "Peter’s wife gave him a(n) ______ bike as a birthday present.", answer: "D", type: 'multiple_choice', options: ["blue Japanese cheap", "cheap Japanese blue", "Japanese cheap blue", "cheap blue Japanese"], explanation: "Trật tự: Opinion (cheap) - Color (blue) - Origin (Japanese)." },
                        { id: 10, text: "I remember she wore a ______ dress to go out with her boyfriend.", answer: "D", type: 'multiple_choice', options: ["cotton white Vietnamese", "Vietnamese white cotton", "white Vietnamese cotton", "white cotton Vietnamese"], explanation: "Trật tự: Color (white) - Material (cotton) - Origin (Vietnamese)." },
                        { id: 11, text: "“What is the groom wearing?” “He dresses in a ______.”", answer: "B", type: 'multiple_choice', options: ["light suit summer", "light summer suit", "suit summer light", "summer suit light"], explanation: "Trật tự: Opinion/Type (light) - Purpose (summer) + Danh từ (suit)." },
                        { id: 12, text: "\"When are you going to get rid of those ______ trousers?\"", answer: "D", type: 'multiple_choice', options: ["short nylon dreadful French", "short dreadful French nylon", "dreadful French nylon short", "dreadful short French nylon"], explanation: "Trật tự: Opinion (dreadful) - Size/Length (short) - Origin (French) - Material (nylon)." },
                        { id: 13, text: "There is a ______ table which was given to me by my best friends.", answer: "B", type: 'multiple_choice', options: ["large beautiful round wooden", "beautiful large round wooden", "beautiful round large wooden", "wooden large round beautiful"], explanation: "Trật tự: Opinion (beautiful) - Size (large) - Shape (round) - Material (wooden)." },
                        { id: 14, text: "Andrew has a ______ rug on the floor in her bedroom.", answer: "D", type: 'multiple_choice', options: ["sheepskin lovely long white", "long lovely white sheepskin", "lovely long sheepskin white", "lovely long white sheepskin"], explanation: "Trật tự: Opinion (lovely) - Size/Length (long) - Color (white) - Material (sheepskin)." },
                        { id: 15, text: "They bought me a ______ toy to congratulate me on achieving high scores.", answer: "D", type: 'multiple_choice', options: ["strange round orange plastic", "plastic orange round strange", "strange plastic orange round", "strange round plastic orange"], explanation: "Trật tự: Opinion (strange) - Shape (round) - Color (orange) - Material (plastic)." },
                        { id: 16, text: "Charles was wearing a ______ at the Peter’s party.", answer: "A", type: 'multiple_choice', options: ["funny wide red silk tie", "red silk funny tie", "tie red silk funny", "red funny tie silk"], explanation: "Trật tự: Opinion (funny) - Size (wide) - Color (red) - Material (silk)." },
                        { id: 17, text: "Jane lost the ______ bicycle he bought last month.", answer: "C", type: 'multiple_choice', options: ["Japanese beautiful new blue", "blue Japanese beautiful new", "beautiful new blue Japanese", "beautiful Japanese blue new"], explanation: "Trật tự: Opinion (beautiful) - Age (new) - Color (blue) - Origin (Japanese)." },
                        { id: 18, text: "\"Can I help you, sir?\" - \"I’m looking for a ______ desk for my son.\"", answer: "D", type: 'multiple_choice', options: ["wooden round fashionable", "round fashionable wooden", "wooden fashionable round", "fashionable round wooden"], explanation: "Trật tự: Opinion (fashionable) - Shape (round) - Material (wooden)." },
                        { id: 19, text: "These ______ boots belong to Nick who is a famous fashion designer.", answer: "D", type: 'multiple_choice', options: ["riding leather red Spanish", "red Spanish rising leather", "leather Spanish riding red", "red Spanish leather riding"], explanation: "Trật tự: Color (red) - Origin (Spanish) - Material (leather) - Purpose (riding)." },
                        { id: 20, text: "There is a(n) ______ basin.", answer: "B", type: 'multiple_choice', options: ["sugar antique silver", "antique silver sugar", "sugar silver antique", "antique sugar silver"], explanation: "Trật tự: Age (antique) - Material (silver) - Purpose (sugar)." },
                        { id: 21, text: "He gave me a ______ box to say sorry to me.", answer: "C", type: 'multiple_choice', options: ["small square jewelry metal", "small metal square jewelry", "small square metal jewelry", "small jewelry square metal"], explanation: "Trật tự: Size (small) - Shape (square) - Material (metal) - Purpose (jewelry)." },
                        { id: 22, text: "She is going to marry a ______ man next year.", answer: "D", type: 'multiple_choice', options: ["tall pretty English", "English tall pretty", "tall English pretty", "pretty tall English"], explanation: "Trật tự: Opinion (pretty) - Size (tall) - Origin (English)." },
                        { id: 23, text: "In the live show, Son Tung gave me some ______ cards.", answer: "C", type: 'multiple_choice', options: ["nice blue round", "round blue nice", "nice round blue", "blue nice round"], explanation: "Trật tự: Opinion (nice) - Shape (round) - Color (blue)." },
                        { id: 24, text: "His sister is not only a(n) ______ singer but also a distinguished painter.", answer: "C", type: 'multiple_choice', options: ["famous opera Italian", "opera famous Italian", "famous Italian opera", "Italian famous opera"], explanation: "Trật tự: Opinion (famous) - Origin (Italian) - Type (opera)." },
                        { id: 25, text: "They collected a lot of ______ stamps to exhibit at Tuan Chau festival.", answer: "D", type: 'multiple_choice', options: ["postage Australia valuable", "valuable Australia postage", "Australia valuable postage", "valuable postage Australia"], explanation: "Trật tự: Opinion (valuable) - Type (postage) - Origin (Australia)." },
                        { id: 26, text: "Although he is a ______ man, he is an expert at taking care of wild animals.", answer: "B", type: 'multiple_choice', options: ["young Japanese silly", "silly young Japanese", "young silly Japanese", "Japanese silly young"], explanation: "Trật tự: Opinion (silly) - Age (young) - Origin (Japanese)." },
                        { id: 27, text: "My husband extremely likes a ______ boat and has a passion for owning one.", answer: "A", type: 'multiple_choice', options: ["splendid old model", "model old splendid", "splendid model old", "old model splendid"], explanation: "Trật tự: Opinion (splendid) - Age (old) - Type (model)." },
                        { id: 28, text: "My mother puts a(n) ______ seat in my house to relax at the weekend.", answer: "A", type: 'multiple_choice', options: ["expensive wooden garden", "wooden expensive garden", "garden wooden expensive", "wooden garden expensive"], explanation: "Trật tự: Opinion (expensive) - Material (wooden) - Purpose/Location (garden)." },
                        { id: 29, text: "There are ______ chairs in the class for students to sit on.", answer: "B", type: 'multiple_choice', options: ["blue metal five", "five blue metal", "metal blue five", "five metal blue"], explanation: "Trật tự: Number (five) - Color (blue) - Material (metal)." },
                        { id: 30, text: "It was a ______ journey with my boyfriend before we get married.", answer: "A", type: 'multiple_choice', options: ["boring long train", "long boring train", "boring train long", "long train boring"], explanation: "Trật tự: Opinion (boring) - Size/Length (long) - Type (train)." },
                        { id: 31, text: "Please give me that ______ bucket to take out the trash.", answer: "C", type: 'multiple_choice', options: ["green new plastic", "plastic green new", "new green plastic", "green plastic new"], explanation: "Trật tự: Age (new) - Color (green) - Material (plastic)." },
                        { id: 32, text: "That poor man used to live in a ______ house with two dogs and a cat.", answer: "B", type: 'multiple_choice', options: ["big brick old", "big old brick", "brick old big", "brick big old"], explanation: "Trật tự: Size (big) - Age (old) - Material (brick)." },
                        { id: 33, text: "She was wearing a ______ dress to dine out with her family.", answer: "A", type: 'multiple_choice', options: ["dirty old flannel", "old dirty flannel", "old flannel dirty", "dirty flannel old"], explanation: "Trật tự: Opinion (dirty) - Age (old) - Material (flannel)." },
                        { id: 34, text: "Bring me the ______ bowl on that table to mix with pot.", answer: "C", type: 'multiple_choice', options: ["round salt black", "black round salt", "round black salt", "salt black round"], explanation: "Trật tự: Shape (round) - Color (black) - Purpose (salt)." },
                        { id: 35, text: "Look at that ______ ship! It is one of the biggest ships in the world.", answer: "A", type: 'multiple_choice', options: ["huge wooden sailing", "wooden sailing huge", "sailing huge wooden", "huge sailing wooden"], explanation: "Trật tự: Size (huge) - Material (wooden) - Purpose (sailing)." },
                        { id: 36, text: "Pass me the ______ cups to have my sister clean them.", answer: "B", type: 'multiple_choice', options: ["red big plastic", "big red plastic", "red plastic big", "plastic big blue"], explanation: "Trật tự: Size (big) - Color (red) - Material (plastic)." },
                        { id: 37, text: "There’s a ______ lamp in his room for him to read books.", answer: "D", type: 'multiple_choice', options: ["round small reading", "small reading round", "reading round small", "small round reading"], explanation: "Trật tự: Size (small) - Shape (round) - Purpose (reading)." },
                        { id: 38, text: "The windows are in frames and they are decorated with colorful flowers.", answer: "B", type: 'multiple_choice', options: ["circular huge wooden", "huge circular wooden", "wooden huge circular", "wooden circular huge"], explanation: "Trật tự: Size (huge) - Shape (circular) - Material (wooden)." },
                        { id: 39, text: "When she came home, she gave me a ______ to apologize.", answer: "A", type: 'multiple_choice', options: ["delicious small cupcake", "small delicious cupcake", "cupcake delicious lovely", "delicious cupcake small"], explanation: "Trật tự: Opinion (delicious) - Size (small)." },
                        { id: 40, text: "It is a(n) ______ woman. I’m too lucky to work with her.", answer: "C", type: 'multiple_choice', options: ["English young intelligent", "young intelligent English", "intelligent young English", "intelligent English young"], explanation: "Trật tự: Opinion (intelligent) - Age (young) - Origin (English)." },
                        { id: 41, text: "He bought a ______ house as a gift for his new wife.", answer: "D", type: 'multiple_choice', options: ["big pink beautiful", "beautiful pink big", "big beautiful pink", "beautiful big pink"], explanation: "Trật tự: Opinion (beautiful) - Size (big) - Color (pink)." },
                        { id: 42, text: "This is a ______ bag for my baby on the next trip to Thailand.", answer: "A", type: 'multiple_choice', options: ["new black sleeping", "sleeping new black", "black sleeping new", "new sleeping black"], explanation: "Trật tự: Age (new) - Color (black) - Purpose (sleeping)." },
                        { id: 43, text: "Yesterday, my husband gave me a(n) ______ painting.", answer: "B", type: 'multiple_choice', options: ["French old interesting", "interesting old French", "old interesting French", "French interesting old"], explanation: "Trật tự: Opinion (interesting) - Age (old) - Origin (French)." },
                        { id: 44, text: "We bought some ______ glasses for our children.", answer: "D", type: 'multiple_choice', options: ["German lovely old", "old lovely German", "German old lovely", "lovely old German"], explanation: "Trật tự: Opinion (lovely) - Age (old) - Origin (German)." },
                        { id: 45, text: "He has sold a ______ car for a beautiful woman.", answer: "D", type: 'multiple_choice', options: ["modern Vietnamese racing", "racing modern Vietnamese", "Vietnamese racing modern", "modern racing Vietnamese"], explanation: "Trật tự: Age (modern) - Purpose (racing) - Origin (Vietnamese)." },
                        { id: 46, text: "Peter is the ______ runner-up although he is not good at running.", answer: "A", type: 'multiple_choice', options: ["oldest American idol", "American idol oldest", "oldest idol American", "American oldest idol"], explanation: "Trật tự: Age (oldest) - Origin (American) - Type (idol)." },
                        { id: 47, text: "She has her ______ hair cut by her mother.", answer: "C", type: 'multiple_choice', options: ["short black beautiful", "black long beautiful", "beautiful short black", "short beautiful black"], explanation: "Trật tự: Opinion (beautiful) - Size (short) - Color (black)." },
                        { id: 48, text: "Visitors to the local museum are mostly attracted by ______ rocking chair.", answer: "B", type: 'multiple_choice', options: ["an old wooden European beautiful", "a beautiful old European wooden", "an old beautiful wooden European", "a wooden old beautiful European"], explanation: "Trật tự: Opinion (beautiful) - Age (old) - Origin (European) - Material (wooden)." },
                        { id: 49, text: "In the kitchen there is a ______ table.", answer: "D", type: 'multiple_choice', options: ["round large wooden beautiful", "large beautiful wooden round", "wooden round large beautiful", "beautiful large round wooden"], explanation: "Trật tự: Opinion (beautiful) - Size (large) - Shape (round) - Material (wooden)." },
                        { id: 50, text: "My friend bought ______ from a shop on Tram Phu street.", answer: "A", type: 'multiple_choice', options: ["a nice brown leather belt", "a brown nice leather belt", "a leather brown nice belt", "a nice leather brown belt"], explanation: "Trật tự: Opinion (nice) - Color (brown) - Material (leather)." },
                        { id: 51, text: "She has just bought ______.", answer: "B", type: 'multiple_choice', options: ["a French old interesting painting", "an interesting old French painting", "a French interesting old painting", "an old interesting painting French"], explanation: "Trật tự: Opinion (interesting) - Age (old) - Origin (French)." },
                        { id: 52, text: "I have a ______ bag.", answer: "B", type: 'multiple_choice', options: ["red Dior nice new leather big", "nice big new red Dior leather", "big new red leather nice Dior", "nice new big red Dior leather"], explanation: "Trật tự: Opinion (nice) - Size (big) - Age (new) - Color (red) - Origin (Dior) - Material (leather)." },
                        { id: 53, text: "It is the ______ which we often use khi có khách.", answer: "A", type: 'multiple_choice', options: ["blue polyester sleeping bag", "polyester sleeping blue bag", "blue sleeping polyester bag", "sleeping blue polyester bag"], explanation: "Trật tự: Color (blue) - Material (polyester) - Purpose (sleeping)." },
                        { id: 54, text: "We bought some ______ when we were on holiday to Singapore.", answer: "D", type: 'multiple_choice', options: ["German lovely old glasses", "German old lovely glasses", "lovely old German glasses", "old lovely German glasses"], explanation: "Trật tự: Opinion (lovely) - Age (old) - Origin (German)." },
                        { id: 55, text: "There is ______ in my bedroom.", answer: "A", type: 'multiple_choice', options: ["an old square wooden table", "a square wooden old table", "a square old wooden table", "an old wooden square table"], explanation: "Trật tự: Age (old) - Shape (square) - Material (wooden)." },
                        { id: 56, text: "At first sight I met her, I was impressed with her ______.", answer: "C", type: 'multiple_choice', options: ["big beautiful round black eyes", "beautiful black big round eyes", "beautiful big round black eyes", "beautiful round big black eyes"], explanation: "Trật tự: Opinion (beautiful) - Size (big) - Shape (round) - Color (black)." },
                        { id: 57, text: "Yesterday my mother bought ______.", answer: "C", type: 'multiple_choice', options: ["beautiful Italian some cotton hats", "Italian some beautiful cotton hats", "some beautiful Italian cotton hats", "some hats beautiful Italian cotton"], explanation: "Trật tự: Number/Determiner (some) - Opinion (beautiful) - Origin (Italian) - Material (cotton)." },
                        { id: 58, text: "This is a picture of a ______ bus.", answer: "B", type: 'multiple_choice', options: ["red bright London", "bright red London", "London bright red", "London red bright"], explanation: "Trật tự: Opinion (bright) - Color (red) - Origin (London)." },
                        { id: 59, text: "Jane bought me ______ handbag.", answer: "A", type: 'multiple_choice', options: ["an ugly small old black plastic", "an ugly old small plastic", "a small ugly black old plastic", "a black ugly plastic"], explanation: "Trật tự: Opinion (ugly) - Size (small) - Age (old) - Color (black) - Material (plastic)." },
                        { id: 60, text: "Jane really loves the ______ jewelry box.", answer: "D", type: 'multiple_choice', options: ["wooden brown nice", "nice wooden brown", "brown wooden nice", "nice brown wooden"], explanation: "Trật tự: Opinion (nice) - Color (brown) - Material (wooden)." },
                        { id: 61, text: "Paul has just sold his ______ car.", answer: "C", type: 'multiple_choice', options: ["black old Japanese", "Japanese old black", "old black Japanese", "old Japanese black"], explanation: "Trật tự: Age (old) - Color (black) - Origin (Japanese)." },
                        { id: 62, text: "The only thing he bought on his trip to Italy was a ______ watch.", answer: "B", type: 'multiple_choice', options: ["nice Italian new", "nice new Italian", "new Italian nice", "new nice Italian"], explanation: "Trật tự: Opinion (nice) - Age (new) - Origin (Italian)." },
                        { id: 63, text: "I met a ______ girl at my friend's birthday party.", answer: "D", type: 'multiple_choice', options: ["pretty American tall", "tall pretty American", "tall American pretty", "pretty tall American"], explanation: "Trật tự: Opinion (pretty) - Size (tall) - Origin (American)." },
                        { id: 64, text: "The man driving a(n) ______ is my father's boss.", answer: "D", type: 'multiple_choice', options: ["blue Japanese expensive", "expensive Japanese blue", "Japanese expensive blue", "expensive blue Japanese"], explanation: "Trật tự: Opinion (expensive) - Color (blue) - Origin (Japanese)." },
                        { id: 65, text: "Lara goes to a(n) ______ temple every week.", answer: "A", type: 'multiple_choice', options: ["great big ancient Buddhist", "Buddhist great big ancient", "ancient great big Buddhist", "big great ancient Buddhist"], explanation: "Trật tự: Opinion (great) - Size (big) - Age (ancient) - Type (Buddhist)." },
                    ]
                }
            ]
        },
        {
            id: 'adjective-order-ex-2',
            title: 'BÀI TẬP 2: SẮP XẾP TÍNH TỪ',
            category: 'Adjectives',
            sections: [
                {
                    title: 'Exercise 2: Put the adjectives in the brackets in the correct orders',
                    subtitle: 'Sắp xếp tính từ (Câu 1-30)',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "This store sells plenty of (beautiful/European wooden/old) ______ rocking chairs.", answer: "beautiful old European wooden", type: 'fill_in_the_blank', explanation: "Trật tự: Opinion (beautiful) - Age (old) - Origin (European) - Material (wooden)." },
                        { id: 2, text: "Don't worry! I will buy you another (new/small/red) ______ purse.", answer: "small new red", type: 'fill_in_the_blank', explanation: "Trật tự: Size (small) - Age (new) - Color (red)." },
                        { id: 3, text: "These are our (first/American/blue/three/big) ______ cars.", answer: "first three big blue American", type: 'fill_in_the_blank', explanation: "Trật tự: Ordinal (first) - Number (three) - Size (big) - Color (blue) - Origin (American)." },
                        { id: 4, text: "Her mother is a(n) (English/smart/young) ______ woman.", answer: "smart young English", type: 'fill_in_the_blank', explanation: "Trật tự: Opinion (smart) - Age (young) - Origin (English)." },
                        { id: 5, text: "My grandfather has a (n) (muddy/small/old) ______ storage house.", answer: "muddy small old", type: 'fill_in_the_blank', explanation: "Trật tự: Opinion (muddy) - Size (small) - Age (old)." },
                        { id: 6, text: "The woman is a (young/beautiful/Latin/skinny/tall) ______ doctor.", answer: "beautiful tall skinny young Latin", type: 'fill_in_the_blank', explanation: "Trật tự: Opinion (beautiful) - Size (tall) - Shape (skinny) - Age (young) - Origin (Latin)." },
                        { id: 7, text: "Of the three sisters, Mike has the most (big/round/beautiful) ______ eyes.", answer: "beautiful big round", type: 'fill_in_the_blank', explanation: "Trật tự: Opinion (beautiful) - Size (big) - Shape (round)." },
                        { id: 8, text: "We like (American/recent/economic) ______ policies.", answer: "recent American economic", type: 'fill_in_the_blank', explanation: "Trật tự: Age (recent) - Origin (American) - Type/Purpose (economic)." },
                        { id: 9, text: "Where's that (long/pink/silk/lovely) ______ dress?", answer: "lovely long pink silk", type: 'fill_in_the_blank', explanation: "Trật tự: Opinion (lovely) - Size/Length (long) - Color (pink) - Material (silk)." },
                        { id: 10, text: "There are many (American/interesting/old) ______ history books.", answer: "interesting old American", type: 'fill_in_the_blank', explanation: "Trật tự: Opinion (interesting) - Age (old) - Origin (American)." },
                        { id: 11, text: "My friend and I often go home on (shopping/new/narrow/crowded) ______ street.", answer: "crowded narrow new shopping", type: 'fill_in_the_blank', explanation: "Trật tự: Opinion (crowded) - Size (narrow) - Age (new) - Purpose (shopping)." },
                        { id: 12, text: "At the corner of his bedroom is a (Indian/old/beautiful) ______ lamp.", answer: "beautiful old Indian", type: 'fill_in_the_blank', explanation: "Trật tự: Opinion (beautiful) - Age (old) - Origin (Indian)." },
                        { id: 13, text: "He bought a (beautiful/pink/small) ______ house.", answer: "beautiful small pink", type: 'fill_in_the_blank', explanation: "Trật tự: Opinion (beautiful) - Size (small) - Color (pink)." },
                        { id: 14, text: "She gave him a (black/leather/big) ______ wallet.", answer: "big black leather", type: 'fill_in_the_blank', explanation: "Trật tự: Size (big) - Color (black) - Material (leather)." },
                        { id: 15, text: "In my (green/nice/big) ______ flat, my parents plant a lot of flowers.", answer: "nice big green", type: 'fill_in_the_blank', explanation: "Trật tự: Opinion (nice) - Size (big) - Color (green)." },
                        { id: 16, text: "The room was decorated with (magical/red/big) ______ balloons.", answer: "magical big red", type: 'fill_in_the_blank', explanation: "Trật tự: Opinion (magical) - Size (big) - Color (red)." },
                        { id: 17, text: "He invited that (old/short/distinguished) ______ lady to dinner.", answer: "distinguished short old", type: 'fill_in_the_blank', explanation: "Trật tự: Opinion (distinguished) - Size (short) - Age (old)." },
                        { id: 18, text: "This family has (tall/middle-aged/diligent/two) ______ people.", answer: "two diligent tall middle-aged", type: 'fill_in_the_blank', explanation: "Trật tự: Number (two) - Opinion (diligent) - Size (tall) - Age (middle-aged)." },
                        { id: 19, text: "Her favorite book is a(n) (boring/science/old) ______ one.", answer: "boring old science", type: 'fill_in_the_blank', explanation: "Trật tự: Opinion (boring) - Age (old) - Type (science)." },
                        { id: 20, text: "She bought me a pair of (Italian/yellow/expensive/small) ______ shoes.", answer: "expensive small yellow Italian", type: 'fill_in_the_blank', explanation: "Trật tự: Opinion (expensive) - Size (small) - Color (yellow) - Origin (Italian)." },
                        { id: 21, text: "She is Linda, a (graceful/Jewish/tall) ______ girl.", answer: "graceful tall Jewish", type: 'fill_in_the_blank', explanation: "Trật tự: Opinion (graceful) - Size (tall) - Origin (Jewish)." },
                        { id: 22, text: "It was a (blue/fast/new/Vietnamese) ______ car.", answer: "fast new blue Vietnamese", type: 'fill_in_the_blank', explanation: "Trật tự: Opinion (fast) - Age (new) - Color (blue) - Origin (Vietnamese)." },
                        { id: 23, text: "In his business trip, he bought a (sharp/black/Swiss) ______ knife.", answer: "sharp black Swiss", type: 'fill_in_the_blank', explanation: "Trật tự: Opinion (sharp) - Color (black) - Origin (Swiss)." },
                        { id: 24, text: "Her husband is a (n) (Jewish/rich/unfriendly) ______ man.", answer: "unfriendly rich Jewish", type: 'fill_in_the_blank', explanation: "Trật tự: Opinion (unfriendly) - Opinion (rich) - Origin (Jewish)." },
                        { id: 25, text: "It’s a (n) (mobile/expensive/white) ______ phone.", answer: "expensive white mobile", type: 'fill_in_the_blank', explanation: "Trật tự: Opinion (expensive) - Color (white) - Type (mobile)." },
                        { id: 26, text: "Yesterday we went to a (Chinese/narrow/cheap) ______ restaurant.", answer: "cheap narrow Chinese", type: 'fill_in_the_blank', explanation: "Trật tự: Opinion (cheap) - Size (narrow) - Origin (Chinese)." },
                        { id: 27, text: "I lost my handbag, but it was only a(n) (old/Vietnamese/tatty) ______ one.", answer: "tatty old Vietnamese", type: 'fill_in_the_blank', explanation: "Trật tự: Opinion (tatty) - Age (old) - Origin (Vietnamese)." },
                        { id: 28, text: "The (British/brown/old) ______ passport was much easier.", answer: "old brown British", type: 'fill_in_the_blank', explanation: "Trật tự: Age (old) - Color (brown) - Origin (British)." },
                        { id: 29, text: "She has lot of (triangle/new/pink/big) ______ bags.", answer: "big new triangle pink", type: 'fill_in_the_blank', explanation: "Trật tự: Size (big) - Age (new) - Shape (triangle) - Color (pink)." },
                        { id: 30, text: "Peter collected (huge/ivory/cubic/brown) ______ tables.", answer: "huge cubic brown ivory", type: 'fill_in_the_blank', explanation: "Trật tự: Size (huge) - Shape (cubic) - Color (brown) - Material (ivory)." },
                    ]
                }
            ]
        },
        {
            id: 'adjective-order-ex-3',
            title: 'BÀI TẬP 3: TÌM LỖI SAI',
            category: 'Adjectives',
            sections: [
                {
                    title: 'Exercise 3: Find and correct the mistakes',
                    subtitle: 'Sửa lỗi sai (Câu 1-20)',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "Their small nice white cat has gone missing.", answer: "nice small white", type: 'fill_in_the_blank', explanation: "Sửa lại trật tự: Opinion (nice) - Size (small) - Color (white)." },
                        { id: 2, text: "Bill was strongly impressed by Peter’s long brown shiny hair.", answer: "shiny long brown", type: 'fill_in_the_blank', explanation: "Sửa lại trật tự: Opinion (shiny) - Size/Length (long) - Color (brown)." },
                        { id: 3, text: "We’ve been invited to a wonderful engagement big party.", answer: "wonderful big engagement", type: 'fill_in_the_blank', explanation: "Sửa lại trật tự: Opinion (wonderful) - Size (big) - Purpose (engagement)." },
                        { id: 4, text: "Mr John is looking for a new fashionable car sports.", answer: "fashionable new sports car", type: 'fill_in_the_blank', explanation: "Sửa lại trật tự: Opinion (fashionable) - Age (new) - Purpose (sports) + Danh từ (car)." },
                        { id: 5, text: "They live in a spacious modern brick house near a river.", answer: "spacious modern brick", type: 'fill_in_the_blank', explanation: "Trật tự đúng: Size (spacious) - Age (modern) - Material (brick)." },
                        { id: 6, text: "Our kitchen has a wooden Chinese dining old oval table.", answer: "old oval Chinese wooden dining", type: 'fill_in_the_blank', explanation: "Sửa lại trật tự: Age (old) - Shape (oval) - Origin (Chinese) - Material (wooden) - Purpose (dining)." },
                        { id: 7, text: "The smallest child was given a small brick swimming red nice cap.", answer: "nice small red swimming", type: 'fill_in_the_blank', explanation: "Sửa lại trật tự: Opinion (nice) - Size (small) - Color (red) - Purpose (swimming)." },
                        { id: 8, text: "The auditorium needs a velvet pink silky curtain.", answer: "silky pink velvet", type: 'fill_in_the_blank', explanation: "Sửa lại trật tự: Opinion (silky) - Color (pink) - Material (velvet)." },
                        { id: 9, text: "He bought me a German magenta glass box.", answer: "magenta German glass", type: 'fill_in_the_blank', explanation: "Sửa lại trật tự: Color (magenta) - Origin (German) - Material (glass)." },
                        { id: 10, text: "Look at the man who is wearing a tie dirty old cotton.", answer: "dirty old cotton tie", type: 'fill_in_the_blank', explanation: "Sửa lại trật tự: Opinion (dirty) - Age (old) - Material (cotton) + Danh từ (tie)." },
                        { id: 11, text: "David was a very eighteenth-century prominent actor.", answer: "prominent eighteenth-century", type: 'fill_in_the_blank', explanation: "Sửa lại trật tự: Opinion (prominent) - Age (eighteenth-century)." },
                        { id: 12, text: "The concert was performed by a new French exciting band.", answer: "exciting new French", type: 'fill_in_the_blank', explanation: "Sửa lại trật tự: Opinion (exciting) - Age (new) - Origin (French)." },
                        { id: 13, text: "They are lucky to own a big Japanese luxurious red new car.", answer: "luxurious big new red Japanese", type: 'fill_in_the_blank', explanation: "Sửa lại trật tự: Opinion (luxurious) - Size (big) - Age (new) - Color (red) - Origin (Japanese)." },
                        { id: 14, text: "He was the only one to have invented Spanish riding leather red boots.", answer: "red Spanish leather riding", type: 'fill_in_the_blank', explanation: "Sửa lại trật tự: Color (red) - Origin (Spanish) - Material (leather) - Purpose (riding)." },
                        { id: 15, text: "Yesterday, I bought a plastic beautiful French new small hairbrush.", answer: "beautiful small new French plastic", type: 'fill_in_the_blank', explanation: "Sửa lại trật tự: Opinion (beautiful) - Size (small) - Age (new) - Origin (French) - Material (plastic)." },
                        { id: 16, text: "It’s an ancient awesome white doll.", answer: "awesome ancient white", type: 'fill_in_the_blank', explanation: "Sửa lại trật tự: Opinion (awesome) - Age (ancient) - Color (white)." },
                        { id: 17, text: "My walking gray wooly socks got wet yesterday.", answer: "wooly gray walking", type: 'fill_in_the_blank', explanation: "Sửa lại trật tự: Opinion (wooly) - Color (gray) - Purpose (walking)." },
                        { id: 18, text: "This is a big important Indian project done by Alex.", answer: "important big Indian", type: 'fill_in_the_blank', explanation: "Sửa lại trật tự: Opinion (important) - Size (big) - Origin (Indian)." },
                        { id: 19, text: "It’s not easy for him to get married to a young brilliant Vietnamese girl.", answer: "brilliant young Vietnamese", type: 'fill_in_the_blank', explanation: "Sửa lại trật tự: Opinion (brilliant) - Age (young) - Origin (Vietnamese)." },
                        { id: 20, text: "It’s a wonderful blue small bicycle.", answer: "wonderful small blue", type: 'fill_in_the_blank', explanation: "Sửa lại trật tự: Opinion (wonderful) - Size (small) - Color (blue)." },
                    ]
                }
            ]
        }
    ]
};
