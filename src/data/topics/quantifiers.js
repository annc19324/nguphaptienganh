export const quantifiersTopic = {
    id: 'quantifiers',
    title: 'CHUYÊN ĐỀ 22: TỪ CHỈ SỐ LƯỢNG (QUANTIFIERS)',
    category: 'Quantifiers',
    children: [
        {
            id: 'quantifiers-theory',
            title: 'LÝ THUYẾT: LƯỢNG TỪ',
            category: 'Quantifiers',
            sections: [
                {
                    title: 'I. PHÂN BIỆT LƯỢNG TỪ PHỔ BIẾN',
                    type: 'custom',
                    content: [
                        {
                            subtitle: '1. Many vs Much (Nhiều)',
                            cases: [
                                { label: 'Many', formula: 'Dùng với danh từ đếm được số nhiều (a large number of, a great many...)' },
                                { label: 'Much', formula: 'Dùng với danh từ không đếm được (a great deal of, a large amount of...)' },
                                { label: 'A lot of / Lots of', formula: 'Dùng cho cả danh từ đếm được và không đếm được' }
                            ]
                        },
                        {
                            subtitle: '2. A few/Few vs A little/Little (Một ít/Hầu như không)',
                            cases: [
                                { label: 'A few / Few', formula: 'Dùng với danh từ đếm được số nhiều' },
                                { label: 'A little / Little', formula: 'Dùng với danh từ không đếm được' },
                                { label: 'Lưu ý', formula: 'A few/A little mang nghĩa tích cực (đủ dùng), Few/Little mang nghĩa tiêu cực (quá ít, không đủ)' }
                            ]
                        },
                        {
                            subtitle: '3. Some vs Any (Một vài/Bất cứ)',
                            cases: [
                                { label: 'Some', formula: 'Dùng trong câu khẳng định, câu mời/đề nghị' },
                                { label: 'Any', formula: 'Dùng trong câu phủ định, nghi vấn. Dùng trong câu khẳng định với nghĩa "bất cứ"' }
                            ]
                        }
                    ]
                },
                {
                    title: 'II. CÁC LƯỢNG TỪ KHÁC',
                    type: 'custom',
                    content: [
                        { label: 'All vs Both', formula: 'All (3 trở lên), Both (chỉ 2)' },
                        { label: 'None vs Neither/Either', formula: 'None (3 trở lên đều không), Neither (cả 2 đều không - Khẳng định), Either (cả 2 đều không - Phủ định)' },
                        { label: 'Most vs Most of', formula: 'Most + N = Most of + the/Tính từ sở hữu + N' },
                        { label: 'Each vs Every', formula: 'Đều dùng với danh từ đếm được số ít' },
                        { label: 'Other vs Another', formula: 'Another + N số ít. Other + N số nhiều/không đếm được. Others = Other + N số nhiều' }
                    ]
                }
            ]
        },
        {
            id: 'quantifiers-ex-1',
            title: 'BÀI TẬP 1: ĐIỀN TỪ',
            category: 'Quantifiers',
            sections: [
                {
                    title: 'Exercise 1: Choose a word from (many, a little, any, some, less, little, fewer, much, a great deal of, a few, a lot of, few) to fill each blank.',
                    subtitle: 'Điền lượng từ phù hợp (Câu 1-19)',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "The museum was very crowded. There were too ______ people.", answer: "many", type: 'fill_in_the_blank' },
                        { id: 2, text: "Jack knows ______ Japanese, but his brother knows enough to manage.", answer: "a little", type: 'fill_in_the_blank' },
                        { id: 3, text: "Eating out seems to be expensive. There aren’t ______ cheap restaurants.", answer: "many", type: 'fill_in_the_blank' },
                        { id: 4, text: "She had ______ time to study than I did but had better results.", answer: "less", type: 'fill_in_the_blank' },
                        { id: 5, text: "Try to avoid foods which contain ______ fat.", answer: "much", type: 'fill_in_the_blank' },
                        { id: 6, text: "We’ve been having ______ problems with the new computer.", answer: "some", type: 'fill_in_the_blank' },
                        { id: 7, text: "There are hardly ______ jobs left which don’t use computers.", answer: "any", type: 'fill_in_the_blank' },
                        { id: 8, text: "We only have ______ apples. We should go and buy some more.", answer: "a few", type: 'fill_in_the_blank' },
                        { id: 9, text: "______ my friends are living abroad now.", answer: "A lot of", type: 'fill_in_the_blank' },
                        { id: 10, text: "There are ______ slices of cake left over from the party.", answer: "a few", type: 'fill_in_the_blank' },
                        { id: 11, text: "She has spent ______ time in Europe to learn English.", answer: "a great deal of", type: 'fill_in_the_blank' },
                        { id: 12, text: "There aren’t very ______ weekends between now and Christmas.", answer: "many", type: 'fill_in_the_blank' },
                        { id: 13, text: "“Is there ______ butter I could use?” “No, there isn’t ______ butter.”", answer: "any", type: 'fill_in_the_blank' },
                        { id: 14, text: "If I drink too ______ coffee, I can’t sleep.", answer: "much", type: 'fill_in_the_blank' },
                        { id: 15, text: "How ______ liquid do you think this bottle contains?", answer: "much", type: 'fill_in_the_blank' },
                        { id: 16, text: "I eat ______ chocolate and ______ biscuits than I used to.", answer: "less / fewer", type: 'fill_in_the_blank' },
                        { id: 17, text: "Lots of people at the club are under 20, but there are quite ______ who aren’t.", answer: "a few", type: 'fill_in_the_blank' },
                        { id: 18, text: "It was embarrassing how ______ people attended the party.", answer: "few", type: 'fill_in_the_blank' },
                        { id: 19, text: "The weather is expected to remain clear for the next ______ days.", answer: "a few", type: 'fill_in_the_blank' }
                    ]
                }
            ]
        },
        {
            id: 'quantifiers-ex-2',
            title: 'BÀI TẬP 2: TÌM LỖI SAI',
            category: 'Quantifiers',
            sections: [
                {
                    title: 'Exercise 2: Identify one word or phrase that must be changed in each sentence.',
                    subtitle: 'Sửa lỗi sai (Câu 1-20)',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "How many sugar do you take in your coffee?", answer: "much", type: 'fill_in_the_blank' },
                        { id: 2, text: "I don’t have some cash on me, so could I pay with by cheque?", answer: "any", type: 'fill_in_the_blank' },
                        { id: 3, text: "I know quite a little people who have had the same problem.", answer: "a few", type: 'fill_in_the_blank' },
                        { id: 4, text: "Can you give me any information about the buses... please?", answer: "any information (Correct)", type: 'fill_in_the_blank' },
                        { id: 5, text: "He has been to America a little times.", answer: "a few", type: 'fill_in_the_blank' },
                        { id: 6, text: "Do you want to exchange this toaster for other one?", answer: "another", type: 'fill_in_the_blank' },
                        { id: 7, text: "There’s a number of cupboard space in the kitchen...", answer: "amount", type: 'fill_in_the_blank' },
                        { id: 8, text: "You travel a lot. Have you been to much countries?", answer: "many", type: 'fill_in_the_blank' },
                        { id: 9, text: "Do you have some books in your bag?", answer: "any", type: 'fill_in_the_blank' },
                        { id: 10, text: "I can earn many money.", answer: "much", type: 'fill_in_the_blank' },
                        { id: 11, text: "More children start school at the age of five.", answer: "Most", type: 'fill_in_the_blank' },
                        { id: 12, text: "We didn’t see some tigers.", answer: "any", type: 'fill_in_the_blank' },
                        { id: 13, text: "I don’t think some of the supermarkets were open.", answer: "any", type: 'fill_in_the_blank' },
                        { id: 14, text: "Each of the kids know the answer.", answer: "knows", type: 'fill_in_the_blank' },
                        { id: 15, text: "Much people do not care about their hygiene.", answer: "Many", type: 'fill_in_the_blank' },
                        { id: 16, text: "Many determination is needed to fulfill the target.", answer: "Much", type: 'fill_in_the_blank' },
                        { id: 17, text: "Only a little employees knew how important the project was.", answer: "a few", type: 'fill_in_the_blank' },
                        { id: 18, text: "There was few traffic so we arrived very early.", answer: "little", type: 'fill_in_the_blank' },
                        { id: 19, text: "Both of the kids knows the answer.", answer: "know", type: 'fill_in_the_blank' },
                        { id: 20, text: "It costs few money to give your children a good education.", answer: "little", type: 'fill_in_the_blank' }
                    ]
                }
            ]
        },
        {
            id: 'quantifiers-ex-3',
            title: 'BÀI TẬP 3: CHỌN TỪ ĐÚNG',
            category: 'Quantifiers',
            sections: [
                {
                    title: 'Exercise 3: Choose the correct word in each bracket to complete the following sentences.',
                    subtitle: 'Chọn lượng từ đúng (Câu 1-30)',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "There is too ______ (much / many) traffic.", answer: "much", type: 'fill_in_the_blank' },
                        { id: 2, text: "I don’t have ______ (some/any) coca cola.", answer: "any", type: 'fill_in_the_blank' },
                        { id: 3, text: "There aren’t ______ (much/many) car parks.", answer: "many", type: 'fill_in_the_blank' },
                        { id: 4, text: "New York has ______ (a lot / plenty of) great fashion shops.", answer: "plenty of", type: 'fill_in_the_blank' },
                        { id: 5, text: "We only have ______ (a little / a few) time.", answer: "a little", type: 'fill_in_the_blank' },
                        { id: 6, text: "I saw ______ (some / any) beautiful scenery.", answer: "some", type: 'fill_in_the_blank' },
                        { id: 7, text: "(Many a/Many) ______ singer will be chosen.", answer: "Many a", type: 'fill_in_the_blank' },
                        { id: 8, text: "She doesn’t have ______ (few/any) patience.", answer: "any", type: 'fill_in_the_blank' },
                        { id: 9, text: "The problem with (both/all) ______ of these two is that they are impractical.", answer: "both", type: 'fill_in_the_blank' },
                        { id: 10, text: "______ (A large number / the number) of issues still need to be addressed.", answer: "A large number", type: 'fill_in_the_blank' },
                        { id: 11, text: "We haven’t got ______ (some / any) stamps at the moment.", answer: "any", type: 'fill_in_the_blank' },
                        { id: 12, text: "Today is very ______ (many/much) colder than yesterday.", answer: "much", type: 'fill_in_the_blank' },
                        { id: 13, text: "I had ______ (a few / a little) problems with my car.", answer: "a few", type: 'fill_in_the_blank' },
                        { id: 14, text: "If you have a fever, you should drink ______ (a number of / plenty of) fluids.", answer: "plenty of", type: 'fill_in_the_blank' },
                        { id: 15, text: "______ (A larger number of / A large amount of) water was evaporated.", answer: "A large amount of", type: 'fill_in_the_blank' },
                        { id: 16, text: "This club needs to win ______ (a lot of / much) trophies.", answer: "a lot of", type: 'fill_in_the_blank' },
                        { id: 17, text: "Could you give me ______ (any / some) paper?", answer: "some", type: 'fill_in_the_blank' },
                        { id: 18, text: "______ (None / Not) of them was able to come up with solutions.", answer: "None", type: 'fill_in_the_blank' },
                        { id: 19, text: "There was ______ (plenty of / several) food at the reunion dinner.", answer: "plenty of", type: 'fill_in_the_blank' },
                        { id: 20, text: "______ (Some / All) the children, except Susan, will be going.", answer: "All", type: 'fill_in_the_blank' },
                        { id: 21, text: "Neither / None of my parents likes my boyfriend.", answer: "Neither", type: 'fill_in_the_blank' },
                        { id: 22, text: "The exam is difficult and ______ (little / few) students passed it.", answer: "few", type: 'fill_in_the_blank' },
                        { id: 23, text: "Sorry, I have ______ (little / few) money. I can't go out.", answer: "little", type: 'fill_in_the_blank' },
                        { id: 24, text: "______ (Much / Several) people came down with food poisoning.", answer: "Several", type: 'fill_in_the_blank' },
                        { id: 25, text: "I’m pleased that I have ______ (few / little) arguments with my family.", answer: "few", type: 'fill_in_the_blank' },
                        { id: 26, text: "He paid regular ______ (amounts of / a number of) money.", answer: "amounts of", type: 'fill_in_the_blank' },
                        { id: 27, text: "It took several / any hours to clear the road.", answer: "several", type: 'fill_in_the_blank' },
                        { id: 28, text: "______ (Some / All) animals have to eat in order to live.", answer: "All", type: 'fill_in_the_blank' },
                        { id: 29, text: "Please donate ______ (a lot of / some) money.", answer: "some", type: 'fill_in_the_blank' },
                        { id: 30, text: "There are ______ (little / few) potatoes left.", answer: "few", type: 'fill_in_the_blank' }
                    ]
                }
            ]
        },
        {
            id: 'quantifiers-ex-4',
            title: 'BÀI TẬP 4: ANOTHER / OTHER / OTHERS...',
            category: 'Quantifiers',
            sections: [
                {
                    title: 'Exercise 4: Fill each blank with (other, others, the other, the others, most of, either, most, another, almost, all, both, none, neither, mostly).',
                    subtitle: 'Điền từ phù hợp (Câu 1-35)',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "When his alarm went off, he slept for ______ 15 minutes.", answer: "another", type: 'fill_in_the_blank' },
                        { id: 2, text: "They went from one shop to ______.", answer: "another", type: 'fill_in_the_blank' },
                        { id: 3, text: "The disease ______ affects people over 50.", answer: "mostly", type: 'fill_in_the_blank' },
                        { id: 4, text: "Some people like to rest. ______ like to travel.", answer: "Others", type: 'fill_in_the_blank' },
                        { id: 5, text: "This chemical is found in ______ weed killers.", answer: "most", type: 'fill_in_the_blank' },
                        { id: 6, text: "You can go by train or bus - ______ way it’ll take an hour.", answer: "either", type: 'fill_in_the_blank' },
                        { id: 7, text: "The supermarket is on the ______ side of the street.", answer: "other", type: 'fill_in_the_blank' },
                        { id: 8, text: "Some speakers went straight to the room. ______ speakers are hanging around.", answer: "Other", type: 'fill_in_the_blank' },
                        { id: 9, text: "The agent had pictures... but ______ of its interior.", answer: "none", type: 'fill_in_the_blank' },
                        { id: 10, text: "They have two TVs but ______ one works.", answer: "neither", type: 'fill_in_the_blank' },
                        { id: 11, text: "Everyone agreed it would be hard to find ______ like him.", answer: "another", type: 'fill_in_the_blank' },
                        { id: 12, text: "Her parents died... I was ______ the family she ever had.", answer: "all", type: 'fill_in_the_blank' },
                        { id: 13, text: "I have three brothers and sister, ______ of whom are rich.", answer: "all", type: 'fill_in_the_blank' },
                        { id: 14, text: "The boat sank ______ immediately.", answer: "almost", type: 'fill_in_the_blank' },
                        { id: 15, text: "We ran through the list, but ______ of the machines seemed good.", answer: "none", type: 'fill_in_the_blank' },
                        { id: 16, text: "She has written two novels, ______ of which have been made into series.", answer: "both", type: 'fill_in_the_blank' },
                        { id: 17, text: "We will be staying for ______ few weeks.", answer: "another", type: 'fill_in_the_blank' },
                        { id: 18, text: "______ the people in the department are working hard.", answer: "Most of", type: 'fill_in_the_blank' },
                        { id: 19, text: "People are jealous watching the couple taking care of each ______.", answer: "other", type: 'fill_in_the_blank' },
                        { id: 20, text: "Elephant is one kind. The tiger is ______.", answer: "another", type: 'fill_in_the_blank' },
                        { id: 21, text: "One is white, ______ is black.", answer: "the other", type: 'fill_in_the_blank' },
                        { id: 22, text: "Alex needs to get ______ one.", answer: "another", type: 'fill_in_the_blank' },
                        { id: 23, text: "One belongs to Mr. Smith, ______ belongs to Mrs. Smith.", answer: "the other", type: 'fill_in_the_blank' },
                        { id: 24, text: "One is dictionary, ______ are a telephone directory and a comic.", answer: "the others", type: 'fill_in_the_blank' },
                        { id: 25, text: "Elephant is one kind. ______ are tigers, horses, and whales.", answer: "Others", type: 'fill_in_the_blank' },
                        { id: 26, text: "Elephant is one kind. Some ______ kinds are tigers...", answer: "other", type: 'fill_in_the_blank' },
                        { id: 27, text: "One color is red, ______ are white and blue.", answer: "the others", type: 'fill_in_the_blank' },
                        { id: 28, text: "Spring and summer are two, ______ are fall and winter.", answer: "the others", type: 'fill_in_the_blank' },
                        { id: 29, text: "Summer is one season. Spring is ______. ", answer: "another", type: 'fill_in_the_blank' },
                        { id: 30, text: "Some like spring, ______ think fall is the nicest.", answer: "others", type: 'fill_in_the_blank' },
                        { id: 31, text: "One eye is grey and ______ is green.", answer: "the other", type: 'fill_in_the_blank' },
                        { id: 32, text: "One is a vowel, ______ are consonants.", answer: "the others", type: 'fill_in_the_blank' },
                        { id: 33, text: "Teacher is going to give him ______ chance.", answer: "another", type: 'fill_in_the_blank' },
                        { id: 34, text: "Some drink tea, ______ have coffee.", answer: "others", type: 'fill_in_the_blank' },
                        { id: 35, text: "Smith is common, ______ common names are Johnson...", answer: "other", type: 'fill_in_the_blank' }
                    ]
                }
            ]
        },
        {
            id: 'quantifiers-ex-5-1',
            title: 'BÀI TẬP 5.1: TRẮC NGHIỆM',
            category: 'Quantifiers',
            sections: [
                {
                    title: 'Exercise 5.1: Choose the best answer to complete each of the following sentences.',
                    subtitle: 'Trắc nghiệm (Câu 1-40)',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "There’s not ______ sugar in the cupboard.", answer: "A", type: 'multiple_choice', options: ["much", "many", "some", "few"] },
                        { id: 2, text: "There weren’t ______ people at the party.", answer: "D", type: 'multiple_choice', options: ["much", "some", "little", "many"] },
                        { id: 3, text: "Scientists have ______ hope of finding a cure.", answer: "C", type: 'multiple_choice', options: ["some", "many", "little", "any"] },
                        { id: 4, text: "There is ______ butter in the fridge.", answer: "C", type: 'multiple_choice', options: ["many", "more", "some", "a few"] },
                        { id: 5, text: "Do you have ______ money I could borrow?", answer: "A", type: 'multiple_choice', options: ["a little", "few", "a few", "many"] },
                        { id: 6, text: "How ______ children do Laura and Jack have?", answer: "B", type: 'multiple_choice', options: ["much", "many", "some", "any"] },
                        { id: 7, text: "This demands ______ concentration.", answer: "A", type: 'multiple_choice', options: ["a lot of", "much", "a little", "little"] },
                        { id: 8, text: "______ invitations have been sent.", answer: "C", type: 'multiple_choice', options: ["A great deal of", "The number of", "A number of", "A mount of"] },
                        { id: 9, text: "______ people killed... has fallen.", answer: "D", type: 'multiple_choice', options: ["A mount of", "A great deal of", "A number of", "The number of"] },
                        { id: 10, text: "\"How many potatoes?\" \"Oh, just ______, please.\"", answer: "B", type: 'multiple_choice', options: ["many", "a few", "much", "any"] },
                        { id: 11, text: "______ people have complained.", answer: "C", type: 'multiple_choice', options: ["much", "little", "Several", "a little"] },
                        { id: 12, text: "______ inhabitants have made suggestions.", answer: "A", type: 'multiple_choice', options: ["A number of", "A great deal of", "The number of", "A mount of"] },
                        { id: 13, text: "He spent a great ______ time watching television.", answer: "C", type: 'multiple_choice', options: ["number of", "lot of", "deal of", "any of"] },
                        { id: 14, text: "Put ______ wine in too. But not too much!", answer: "A", type: 'multiple_choice', options: ["a little", "much", "some", "a few"] },
                        { id: 15, text: "\"Is there any more soup?\" \"No, there isn't ______ left.\"", answer: "D", type: 'multiple_choice', options: ["some", "many", "any", "much"] },
                        { id: 16, text: "She has four children, ______ under the age of five.", answer: "C", type: 'multiple_choice', options: ["both", "little", "all", "neither"] },
                        { id: 17, text: "We haven't got ______ petrol.", answer: "A", type: 'multiple_choice', options: ["much", "many", "little", "few"] },
                        { id: 18, text: "______ people have complained about the noise.", answer: "A", type: 'multiple_choice', options: ["Lots of", "Much", "A great deal", "Many a"] },
                        { id: 19, text: "We've got ______ time before we need to leave.", answer: "B", type: 'multiple_choice', options: ["many", "plenty of", "the number of", "a number of"] },
                        { id: 20, text: "There was ______ food in the fridge. It was nearly empty.", answer: "A", type: 'multiple_choice', options: ["little", "a little", "few", "a few"] },
                        { id: 21, text: "Change ends... so that ______ side has an unfair advantage.", answer: "C", type: 'multiple_choice', options: ["many", "either", "neither", "all"] },
                        { id: 22, text: "She doesn't have ______ friends in the countryside.", answer: "A", type: 'multiple_choice', options: ["many", "some", "a little", "much"] },
                        { id: 23, text: "Could I have ______ butter, please?", answer: "A", type: 'multiple_choice', options: ["a bit of", "a number of", "hundreds of", "the number of"] },
                        { id: 24, text: "In this school, ______ the children are from the Chinese community.", answer: "D", type: 'multiple_choice', options: ["most", "almost", "mostly", "most of"] },
                        { id: 25, text: "We’ve got ______ furniture, but we still need a table.", answer: "B", type: 'multiple_choice', options: ["many", "much", "any", "few"] },
                        { id: 26, text: "It’ll cost ______ as much to repair it.", answer: "C", type: 'multiple_choice', options: ["most", "mostly", "almost", "most of"] },
                        { id: 27, text: "Most artists find it ______ impossible to make a living.", answer: "C", type: 'multiple_choice', options: ["mostly", "much", "almost", "a little"] },
                        { id: 28, text: "We’ve got five accounts... and ______ of them agree.", answer: "C", type: 'multiple_choice', options: ["either", "neither", "none", "both"] },
                        { id: 29, text: "Used for ______ educational purposes.", answer: "A", type: 'multiple_choice', options: ["a variety of", "a great deal of", "much", "a large amount of"] },
                        { id: 30, text: "______ politician has promised to make changes.", answer: "A", type: 'multiple_choice', options: ["Many a", "Many", "Plenty of", "All"] },
                        { id: 31, text: "Sitting at the table with smokers on ______ side of me.", answer: "A", type: 'multiple_choice', options: ["either", "neither", "all", "both"] },
                        { id: 32, text: "Opposed by schools, businesses and ______ local organizations.", answer: "D", type: 'multiple_choice', options: ["another", "others", "the other", "other"] },
                        { id: 33, text: "The man was waiting on ______ side of the street.", answer: "B", type: 'multiple_choice', options: ["other", "the other", "the others", "another"] },
                        { id: 34, text: "Newspaper is one, and television is ______.", answer: "C", type: 'multiple_choice', options: ["others", "other", "another", "the other"] },
                        { id: 35, text: "______ young men do not have good preparation.", answer: "A", type: 'multiple_choice', options: ["Most", "Much", "A great amount of", "A great deal of"] },
                        { id: 36, text: "The trainees helped ______ out during the seminar.", answer: "C", type: 'multiple_choice', options: ["another", "the other", "each other", "other"] },
                        { id: 37, text: "Decided to go our own ways... weren’t suited to ______.", answer: "A", type: 'multiple_choice', options: ["one another", "each others", "together", "others"] },
                        { id: 38, text: "Watch the sunset ______ time, when Jane and Mary are free.", answer: "D", type: 'multiple_choice', options: ["other", "such", "certain", "another"] },
                        { id: 39, text: "Take ______ of these two courses; they are ______ very interesting.", answer: "C", type: 'multiple_choice', options: ["both - either", "both - all", "either - both", "neither - all"] },
                        { id: 40, text: "______ of the candidates ______ an opportunity.", answer: "A", type: 'multiple_choice', options: ["Each - wants", "All - wants", "Every - want", "Many - wants"] }
                    ]
                }
            ]
        },
        {
            id: 'quantifiers-ex-5-2',
            title: 'BÀI TẬP 5.2: TRẮC NGHIỆM',
            category: 'Quantifiers',
            sections: [
                {
                    title: 'Exercise 5.2: Choose the best answer to complete each of the following sentences.',
                    subtitle: 'Trắc nghiệm (Câu 1-40)',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "Could you lend me ______ more? I’ve spent ______ money you gave me.", answer: "B", type: 'multiple_choice', options: ["any - some", "some - the", "the - the", "some - Ø"] },
                        { id: 2, text: "I had to pay ______ for these shoes than I expected.", answer: "A", type: 'multiple_choice', options: ["far more", "the most", "very much", "too many"] },
                        { id: 3, text: "I can remember the plot but almost ______ of the details.", answer: "C", type: 'multiple_choice', options: ["little", "anything", "none", "all"] },
                        { id: 4, text: "There were ______ reasons behind his decision.", answer: "A", type: 'multiple_choice', options: ["some other", "another", "such", "any other"] },
                        { id: 5, text: "______ of the libraries survived; ______ were destroyed.", answer: "A", type: 'multiple_choice', options: ["None - some", "Neither - many", "Many - much", "Some - a little"] },
                        { id: 6, text: "If decline continues... ______ of the species will be left.", answer: "A", type: 'multiple_choice', options: ["none", "many", "most", "any"] },
                        { id: 7, text: "Snob: he refuses to mix with ______ in his class.", answer: "D", type: 'multiple_choice', options: ["no one else", "some other", "many other", "the others"] },
                        { id: 8, text: "Go by ______ road, because ______ are free from traffic.", answer: "B", type: 'multiple_choice', options: ["any - either", "either - both", "neither - some", "both - all"] },
                        { id: 9, text: "Deliver the desk at ______ time from 9 to 6.", answer: "B", type: 'multiple_choice', options: ["most", "any", "each", "every"] },
                        { id: 10, text: "______ of you is going to be questioned by the police.", answer: "B", type: 'multiple_choice', options: ["All", "Each", "Every", "Some"] },
                        { id: 11, text: "Manager told us that he had visited ______ countries.", answer: "C", type: 'multiple_choice', options: ["a great deal of", "much", "a number of", "as many"] },
                        { id: 12, text: "Unless humans stop destroying... ______ of the wildlife will be extinct.", answer: "D", type: 'multiple_choice', options: ["many", "few", "a few", "much"] },
                        { id: 13, text: "______ the furniture delivered, except for one chair.", answer: "B", type: 'multiple_choice', options: ["A lot of - are", "All - has been", "Most - will be", "Both - is"] },
                        { id: 14, text: "No legally meaning without signatures of ______ sides.", answer: "A", type: 'multiple_choice', options: ["both", "either", "each", "every"] },
                        { id: 15, text: "You can pay with ______ currency you like.", answer: "B", type: 'multiple_choice', options: ["all", "any", "some", "every"] },
                        { id: 16, text: "Be nice to ______ other, or I’ll send you ______ to your rooms.", answer: "A", type: 'multiple_choice', options: ["each - all", "all - many", "every - both", "some - each"] },
                        { id: 17, text: "Rehearsing ______ other day, instead of once a week.", answer: "B", type: 'multiple_choice', options: ["all", "every", "some", "any"] },
                        { id: 18, text: "Progress... we’ll need ______ two weeks or so.", answer: "A", type: 'multiple_choice', options: ["another", "more", "much longer", "many"] },
                        { id: 19, text: "His parents were ______ very unsupportive.", answer: "C", type: 'multiple_choice', options: ["either", "all", "both", "neither"] },
                        { id: 20, text: "Jogging along ______ side of the river.", answer: "D", type: 'multiple_choice', options: ["less-each", "those-both", "other-all", "a lot of-either"] },
                        { id: 21, text: "Parents provided ______ opportunity for him.", answer: "B", type: 'multiple_choice', options: ["many", "every", "all of", "a few"] },
                        { id: 22, text: "Regret... we have had ______ applications than hoped.", answer: "C", type: 'multiple_choice', options: ["the least", "so few", "far fewer", "much less"] },
                        { id: 23, text: "______ people were able to understand... subject was obscure.", answer: "C", type: 'multiple_choice', options: ["Another", "None of", "Very few", "Quite a few"] },
                        { id: 24, text: "Scientists put forward ______ causes for extinction.", answer: "B", type: 'multiple_choice', options: ["a great deal of", "a number of", "quite a lot", "a large amount of"] },
                        { id: 25, text: "History of rights... there has been ______ disagreement.", answer: "C", type: 'multiple_choice', options: ["quite a few", "a number of", "a great deal of", "so many"] },
                        { id: 26, text: "Town is not interesting... ______ tourists come here.", answer: "A", type: 'multiple_choice', options: ["few", "little", "many", "a few"] },
                        { id: 27, text: "______ popular expressions have interesting background.", answer: "B", type: 'multiple_choice', options: ["little", "many", "a large number", "much"] },
                        { id: 28, text: "Two bookstores. One in Hanoi, ______ is in Ho Chi Minh.", answer: "D", type: 'multiple_choice', options: ["Other", "the others", "another", "the other"] },
                        { id: 29, text: "I never thought Shakespeare could be so ______ fun.", answer: "A", type: 'multiple_choice', options: ["much", "many", "few", "some"] },
                        { id: 30, text: "Telephone in ______ room of the house.", answer: "D", type: 'multiple_choice', options: ["every", "each", "some", "A and B"] },
                        { id: 31, text: "______ the pupils in my class enjoy green activities.", answer: "B", type: 'multiple_choice', options: ["most", "most of", "many", "the number of"] },
                        { id: 32, text: "Put so ______ sugar in the soup... too sweet.", answer: "C", type: 'multiple_choice', options: ["many", "little", "much", "a little"] },
                        { id: 33, text: "______ don’t like picture books but into comic books.", answer: "D", type: 'multiple_choice', options: ["some children", "some of children", "some of the childs", "some of the children"] },
                        { id: 34, text: "Robert Swan: first person to have walked to ______ poles.", answer: "A", type: 'multiple_choice', options: ["both", "every", "each", "several"] },
                        { id: 35, text: "Calcutta has ______ fine buildings... suburbs are ______ more than mud huts.", answer: "C", type: 'multiple_choice', options: ["much - less", "few - some", "many - little", "several – fewer"] },
                        { id: 36, text: "Boat to Normandy every ______ half hour.", answer: "A", type: 'multiple_choice', options: ["every", "one", "all", "either"] },
                        { id: 37, text: "Awkward... silence from ______ ends... as ______ person could find anything.", answer: "A", type: 'multiple_choice', options: ["both - neither", "neither - all", "either - none", "all - anyone"] },
                        { id: 38, text: "Be able to communicate in ______ language is useful.", answer: "B", type: 'multiple_choice', options: ["all", "another", "a few", "other"] },
                        { id: 39, text: "______ progress made... because ______ side feels the other is sincere.", answer: "D", type: 'multiple_choice', options: ["Several - none", "Much - no", "Any - every", "No - neither"] },
                        { id: 40, text: "Rhymes for orange, purple... found ______.", answer: "B", type: 'multiple_choice', options: ["no", "none", "neither", "not"] }
                    ]
                }
            ]
        }
    ]
};
