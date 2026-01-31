export const conjunctionsTopic = {
    id: 'conjunctions',
    title: 'CHUYÊN ĐỀ 16: LIÊN TỪ (Conjunctions)',
    category: 'Conjunctions',
    children: [
        {
            id: 'conjunctions-theory',
            title: 'LÝ THUYẾT: LIÊN TỪ',
            category: 'Conjunctions',
            sections: [
                {
                    title: '1. LIÊN TỪ KẾT HỢP (Coordinating Conjunctions)',
                    type: 'custom',
                    content: [
                        {
                            subtitle: 'Định nghĩa & Mẹo nhớ',
                            cases: [
                                {
                                    label: 'Mẹo nhớ: FANBOYS',
                                    formula: 'F - For (Vì)\nA - And (Và)\nN - Nor (Cũng không)\nB - But (Nhưng)\nO - Or (Hoặc)\nY - Yet (Nhưng/Tuy nhiên)\nS - So (Vì vậy)'
                                },
                                {
                                    label: 'Cách dùng',
                                    formula: 'Dùng để nối các từ, cụm từ hoặc mệnh đề độc lập có cùng chức năng ngữ pháp.'
                                }
                            ]
                        }
                    ]
                },
                {
                    title: '2. LIÊN TỪ TƯƠNG QUAN (Correlative Conjunctions)',
                    type: 'custom',
                    content: [
                        {
                            subtitle: 'Các cặp liên từ phổ biến',
                            cases: [
                                { label: 'both... and...', formula: 'vừa... vừa...' },
                                { label: 'not only... but also...', formula: 'không những... mà còn...' },
                                { label: 'either... or...', formula: 'hoặc... hoặc...' },
                                { label: 'neither... nor...', formula: 'không... cũng không...' },
                                { label: 'whether... or...', formula: 'dù... hay...' },
                                { label: 'as/so... as...', formula: 'như là, bằng/không bằng...' },
                                { label: 'no sooner... than...', formula: 'vừa mới... thì...' },
                                { label: 'hardly/scarcely... when...', formula: 'vừa mới... thì...' },
                                { label: 'so/such... that...', formula: 'đến mức... đến nỗi' }
                            ]
                        }
                    ]
                },
                {
                    title: '3. LIÊN TỪ PHỤ THUỘC (Subordinating Conjunctions)',
                    type: 'custom',
                    content: [
                        {
                            subtitle: 'Nhóm Thời gian',
                            cases: [
                                { label: 'Từ vựng', formula: 'after (sau khi), as/when (khi), as soon as (ngay khi), before (trước khi), just as (vừa lúc), once (một khi), since (từ khi), until/till (cho đến khi), while (trong khi).' }
                            ]
                        },
                        {
                            subtitle: 'Nhóm Nguyên nhân',
                            cases: [
                                { label: 'Từ vựng', formula: 'because, now that, since, as, seeing that (vì).' }
                            ]
                        },
                        {
                            subtitle: 'Nhóm Hệ quả & Mục đích',
                            cases: [
                                { label: 'Hệ quả', formula: 'so (vì vậy).\ntherefore / thus / hence / consequently (do đó, do vậy).' },
                                { label: 'Mục đích', formula: 'so that / in order that (để mà).' }
                            ]
                        },
                        {
                            subtitle: 'Nhóm Đối lập / Nhượng bộ',
                            cases: [
                                { label: 'Mặc dù', formula: 'although / even though / though.' },
                                { label: 'Tuy nhiên', formula: 'however / nevertheless / nonetheless.' },
                                { label: 'Trái lại', formula: 'whereas / on the contrary / in contrast / on the other hand.' }
                            ]
                        },
                        {
                            subtitle: 'Nhóm Điều kiện & Giả thuyết',
                            cases: [
                                { label: 'Miễn là', formula: 'as long as / so long as / providing that / provided that.' },
                                { label: 'Nếu / Trừ khi', formula: 'if (nếu như), unless (trừ khi).' },
                                { label: 'Kể cả khi / Như thể', formula: 'even if (kể cả khi), as if / as though (như thể là).' },
                                { label: 'Phòng khi / Giả sử', formula: 'in the event that / in case (phòng khi).\nsuppose / supposing that (giả sử).' }
                            ]
                        },
                        {
                            subtitle: 'Cách diễn đạt khác',
                            cases: [
                                { label: 'Lưu ý', formula: 'for fear that / lest (vì e rằng).\nin other words (nói cách khác).' }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'conjunctions-ex-1-1',
            title: 'BÀI TẬP 1.1: TRẮC NGHIỆM (Multiple Choice)',
            category: 'Conjunctions',
            sections: [
                {
                    title: 'Exercise 1.1: Choose the correct answer A, B, C or D',
                    subtitle: 'Chọn đáp án đúng nhất (Câu 1-55)',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "Many students work to earn money ______ their parents are rich.", answer: "D", isExample: true, type: 'multiple_choice', options: ["because of", "despite", "however", "although"] },
                        { id: 2, text: "The residents of the village are living a happy life ______ they lack modern facilities.", answer: "B", type: 'multiple_choice', options: ["despite", "although", "therefore", "because of"] },
                        { id: 3, text: "Backpacking is best suited for those who are in good physical condition ______.", answer: "D", type: 'multiple_choice', options: ["without being required to walk several miles", "so that it would require walking several miles", "so as not to require walking several miles", "as it may require walking several miles"] },
                        { id: 4, text: "My uncle tries to spend time playing with his children ______ he is very busy.", answer: "B", type: 'multiple_choice', options: ["because of", "although", "despite", "moreover"] },
                        { id: 5, text: "Children are encouraged to read books ______ they are a wonderful source of knowledge.", answer: "C", type: 'multiple_choice', options: ["because of", "in spite of", "because", "although"] },
                        { id: 6, text: "Solar energy is not widely used ______ it is friendly to the environment.", answer: "B", type: 'multiple_choice', options: ["since", "although", "in spite of", "because of"] },
                        { id: 7, text: "Family members reach out to one another and share ______ happy and sad time together.", answer: "B", type: 'multiple_choice', options: ["between", "both", "either", "whether"] },
                        { id: 8, text: "Take time to do what needs to be done ______ that the family will have time to do fun things together, too.", answer: "A", type: 'multiple_choice', options: ["so", "such", "now", "given"] },
                        { id: 9, text: "Parents should start teaching them how to manage more complicated duties ______ children graduate from toddlerhood and move toward preschool.", answer: "B", type: 'multiple_choice', options: ["yet", "when", "and", "so"] },
                        { id: 10, text: "______ you’ve made your own lifestyle more environmentally conscious, you can also engage in ______ activism to help educate others on doing the same.", answer: "B", type: 'multiple_choice', options: ["Although", "Once", "Because", "Before"] },
                        { id: 11, text: "To my mind housework is boring and ______ it takes a lot of time with a hardly visible result.", answer: "A", type: 'multiple_choice', options: ["besides", "then", "yet", "so"] },
                        { id: 12, text: "If you want to eat, give your body the water that is needed ______ digest food.", answer: "A", type: 'multiple_choice', options: ["in order to", "in order that", "in order of", "in order for"] },
                        { id: 13, text: "Brass players make sound by \"buzzing\" their lips ______ blowing into the mouthpiece, they change notes with the help of valves or slides.", answer: "A", type: 'multiple_choice', options: ["while", "during", "before", "by"] },
                        { id: 14, text: "The conductor ______ gives the musicians non-verbal signals ______ with his hands or by using a small stick called a baton.", answer: "B", type: 'multiple_choice', options: ["whether", "either", "neither", "both"] },
                        { id: 15, text: "______ the TRUMPET is the smallest brass instrument, it can play the highest notes of all the brass instruments and often plays in marches or fanfares.", answer: "B", type: 'multiple_choice', options: ["Because", "Although", "However", "Since"] },
                        { id: 16, text: "The TROMBONE is the only brass instrument that does not use valves; ______ the player moves a curved tube, called a \"slide,\" back and forth in order to change notes.", answer: "C", type: 'multiple_choice', options: ["rather", "other", "instead", "but"] },
                        { id: 17, text: "Volunteer activities bring together people who might not ______ have contact with one another.", answer: "B", type: 'multiple_choice', options: ["likewise", "otherwise", "nonetheless", "unless"] },
                        { id: 18, text: "Volunteers have the opportunity to serve in fields such as healthcare, education, and social services - fields that need visionary leaders, ______ are currently facing a severe shortage of qualified employees.", answer: "B", type: 'multiple_choice', options: ["and", "but", "hence", "despite"] },
                        { id: 19, text: "Volunteer work and paid work are best viewed as complementary ______ mutually exclusive.", answer: "A", type: 'multiple_choice', options: ["rather than", "other than", "instead of", "in spite of"] },
                        { id: 20, text: "Student volunteer work required for graduation or continuation in a school or training programme violate the non-compulsory feature of the definition and should ______ not be considered as volunteer work.", answer: "D", type: 'multiple_choice', options: ["thereafter", "thereby", "thereunder", "therefore"] },
                        { id: 21, text: "A patent invention is protected by law ______ only particular people or companies have the right to make or sell it.", answer: "C", type: 'multiple_choice', options: ["in order for", "in order to", "so that", "such that"] },
                        { id: 22, text: "Among the job postings that included a gender preference, 70 percent specifically requested that the positions be filled by men ______ only 30 percent wanted female applicants.", answer: "B", type: 'multiple_choice', options: ["and", "whereas", "or", "so"] },
                        { id: 23, text: "Supporting women and men to build and advance their career ______ is an issue of gender equality ______ makes good business sense.", answer: "C", type: 'multiple_choice', options: ["both/and", "either/or", "not only/but also", "so/that"] },
                        { id: 24, text: "______ many international agreements affirming their human rights, women are still much more likely than men to be poor and illiterate.", answer: "B", type: 'multiple_choice', options: ["Although", "Despite", "Because", "Since"] },
                        { id: 25, text: "Cultural diversity supports the idea that every person can make a unique and positive contribution to the larger society ______ their differences.", answer: "A", type: 'multiple_choice', options: ["rather than", "instead of", "other than", "in place of"] },
                        { id: 26, text: "Understanding and respecting individuals who are different from one’s self, ______ racially, socially, ideologically or spiritually, is a natural outcome of understanding the vast diversity of God’s creation.", answer: "C", type: 'multiple_choice', options: ["either", "neither", "whether", "both"] },
                        { id: 27, text: "Students can only use technological devices to complete their work ______ investment on notebooks and books.", answer: "B", type: 'multiple_choice', options: ["rather than", "instead of", "but for", "in case"] },
                        { id: 28, text: "Online learning gives you full flexibility to accomplish your goals ______ you can access and learn anything you want, anytime you want.", answer: "B", type: 'multiple_choice', options: ["that", "because", "so", "which"] },
                        { id: 29, text: "______ we address the various issues prudently and seriously, we are surely doomed for disaster.", answer: "C", type: 'multiple_choice', options: ["If", "When", "Unless", "Though"] },
                        { id: 30, text: "Recycling minimizes the need for raw materials ______ the rainforests can be preserved.", answer: "B", type: 'multiple_choice', options: ["so", "so that", "such that", "that"] },
                        { id: 31, text: "My family really loves Japanese food, ______ we order it twice a week.", answer: "B", type: 'multiple_choice', options: ["yet", "so", "but", "nor"] },
                        { id: 32, text: "These games are challenging, ______ it’s not easy to spend little time playing them.", answer: "A", type: 'multiple_choice', options: ["so", "and", "for", "or"] },
                        { id: 33, text: "Smoking is extremely detrimental to health, ______ many people continue to smoke anyway.", answer: "C", type: 'multiple_choice', options: ["nor", "so", "yet", "then"] },
                        { id: 34, text: "We were lost in the forest, ______ luckily my friend had a map in his backpack.", answer: "D", type: 'multiple_choice', options: ["and", "so", "for", "but"] },
                        { id: 35, text: "Would you like a cup of milk tea ______ a cup of hot chocolate after dinner?", answer: "B", type: 'multiple_choice', options: ["and", "or", "yet", "so"] },
                        { id: 36, text: "Minh had his teeth decayed, ______ he refused to see the dentist.", answer: "D", type: 'multiple_choice', options: ["and", "so", "or", "but"] },
                        { id: 37, text: "Anna thinks she ought to go to the university, ______ she wants to get qualifications for her dream job.", answer: "C", type: 'multiple_choice', options: ["and", "yet", "for", "so"] },
                        { id: 38, text: "He invested a lot of money in this business, ______ it went bankrupt in a very short time.", answer: "A", type: 'multiple_choice', options: ["but", "and", "for", "nor"] },
                        { id: 39, text: "The students didn’t revise for their exams, ______ did they realise how important the exams were.", answer: "A", type: 'multiple_choice', options: ["nor", "but", "so", "for"] },
                        { id: 40, text: "Peter wonders he should stay home and watch TV, ______ he should go out and have dinner with his friends.", answer: "B", type: 'multiple_choice', options: ["so", "or", "and", "nor"] },
                        { id: 41, text: "______ being the CEO of Microsoft, Bill Gates is also one of the world’s greatest philanthropists.", answer: "A", type: 'multiple_choice', options: ["Aside from", "But for", "Except for", "In addition"] },
                        { id: 42, text: "Women are likely to become trouble-makers ______ they are too talkative.", answer: "C", type: 'multiple_choice', options: ["in order", "so", "because", "thus"] },
                        { id: 43, text: "______ ASEAN is becoming more integrated, investors should be aware of local preferences and cultural sensitivities.", answer: "A", type: 'multiple_choice', options: ["Because", "However", "Despite", "Although"] },
                        { id: 44, text: "There must be equal opportunity for all, ______ ethnicity, gender or religion.", answer: "A", type: 'multiple_choice', options: ["regardless of", "nevertheless", "in spite", "besides"] },
                        { id: 45, text: "Generations can be divided ______ group’s language, technological influences, workplace attitudes, general consciousness and ways of life.", answer: "A", type: 'multiple_choice', options: ["according to", "in response to", "with respect to", "forward to"] },
                        { id: 46, text: "Due to generation gaps, a child may explain to an adult how to use technology, ______ an older man passes the time reading.", answer: "D", type: 'multiple_choice', options: ["however", "so", "because", "while"] },
                        { id: 47, text: "______ the institution type, in the United States, students typically earn credits for courses they take and these credits count towards the completion of a program.", answer: "D", type: 'multiple_choice', options: ["Regards", "In regard to", "As regards", "Regardless of"] },
                        { id: 48, text: "______, we can all expect to see great changes during our lives.", answer: "B", type: 'multiple_choice', options: ["Even though which generation or which society we belong to", "No matter which generation or which society we belong to", "However we belong to which generation or which society", "Although we belong to which generation or which society"] },
                        { id: 49, text: "Reading book helps me understand many different cultures ______ traditions in the world.", answer: "D", type: 'multiple_choice', options: ["as", "nor", "but", "and"] },
                        { id: 50, text: "Priscilla Chan, who is Mark Zuckerberg’s wife, is not beautiful, ______ she is an intelligent girl.", answer: "D", type: 'multiple_choice', options: ["although", "and", "since", "yet"] },
                        { id: 51, text: "Because it rains heavily, they don’t go on holiday. They stay at home. ______", answer: "C", type: 'multiple_choice', options: ["neither", "either", "instead", "although"] },
                        { id: 52, text: "Energy produced from fossil fuels can make our environment polluted, ______ the government encourages people to use energy generated from natural resources.", answer: "D", type: 'multiple_choice', options: ["yet", "but", "therefore", "so"] },
                        { id: 53, text: "______ Lina hates the hustle and bustle of city life, she moves to the countryside to live.", answer: "A", type: 'multiple_choice', options: ["As", "Although", "Provided that", "however"] },
                        { id: 54, text: "She behaves ______ she knew everything about me.", answer: "C", type: 'multiple_choice', options: ["Providing", "If", "As if", "So"] },
                        { id: 55, text: "I don’t want to either meet him ______ say anything to him because he hurt my heart.", answer: "A", type: 'multiple_choice', options: ["or", "and", "nor", "but"] }
                    ]
                }
            ]
        },
        {
            id: 'conjunctions-ex-1-2',
            title: 'BÀI TẬP 1.2: TRẮC NGHIỆM (Multiple Choice)',
            category: 'Conjunctions',
            sections: [
                {
                    title: 'Exercise 1.2: Choose the correct answer A, B, C or D',
                    subtitle: 'Chọn đáp án đúng nhất (Câu 1-56)',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "Ha Long Bay has spectacular natural landscapes, ______ it attracts many tourists.", answer: "D", isExample: true, type: 'multiple_choice', options: ["Hence", "However", "Because", "So"] },
                        { id: 2, text: "He didn’t tell me anything about ______ he would come ______ not.", answer: "A", type: 'multiple_choice', options: ["whether - or", "neither-nor", "either - or", "either - nor"] },
                        { id: 3, text: "______ she went home, she realized that her house had been broken in.", answer: "C", type: 'multiple_choice', options: ["As long as", "As far as", "As soon as", "As well as"] },
                        { id: 4, text: "I am thinking about taking a piano class soon ______ I love the sound of piano.", answer: "C", type: 'multiple_choice', options: ["so that", "owning to", "seeing that", "indeed"] },
                        { id: 5, text: "He always pushes himself to the limit ______ he can have the chance to find out who he really wants to be and where he really wants to go.", answer: "B", type: 'multiple_choice', options: ["now that", "so that", "that", "since"] },
                        { id: 6, text: "Lina ______ her brother doesn’t like learning English because they have to memorize lots of new words.", answer: "D", type: 'multiple_choice', options: ["or", "as long as", "together with", "and"] },
                        { id: 7, text: "To pass the university entrance exam, she worked ______ hard ______ she became exhausted.", answer: "B", type: 'multiple_choice', options: ["such - that", "so - that", "both - and", "not - but"] },
                        { id: 8, text: "She has to work harder ______, she will fall the next exam.", answer: "B", type: 'multiple_choice', options: ["or else", "otherwise", "Now that", "but for"] },
                        { id: 9, text: "Your task is helping potential customers identify your business ______ you need to create a brand awareness.", answer: "D", type: 'multiple_choice', options: ["On the other hand", "However", "Although", "In other words"] },
                        { id: 10, text: "______ I feel my brain function most effectively in the morning, I prefer to study during time of day.", answer: "A", type: 'multiple_choice', options: ["Now that", "Because of", "Despite", "In spite of"] },
                        { id: 11, text: "______ advanced in the understanding of genetics, animals can be bred with specific genetic traits.", answer: "B", type: 'multiple_choice', options: ["Because", "Owing to", "As a result", "A result from"] },
                        { id: 12, text: "Nowadays, Erosion is more and more increasing ______ the removals of trees.", answer: "A", type: 'multiple_choice', options: ["on account of", "on behalf of", "because", "so"] },
                        { id: 13, text: "______ is an intelligent boy ______ he can solve all different exercises given by his teacher.", answer: "B", type: 'multiple_choice', options: ["So - that", "Such - that", "As - as", "Not only - but also"] },
                        { id: 14, text: "New Year’s Eve is on the night of 31st December. Many people stay up until at least just after midnight ______ see in the New Year.", answer: "D", type: 'multiple_choice', options: ["so that", "such that", "in order that", "in order to"] },
                        { id: 15, text: "______ electric cars were quieter, cleaner, and easier to start, there are not many people using it because they were not able to travel the far distances.", answer: "A", type: 'multiple_choice', options: ["Even though", "Despite", "Instead", "In fact"] },
                        { id: 16, text: "You can express your feeling correctly when you talk to your friend on phone. ______ you just see a message on the screen when you chat online.", answer: "A", type: 'multiple_choice', options: ["meanwhile", "providing that", "besides", "in case"] },
                        { id: 17, text: "You can enroll in this course ______ your application is accepted.", answer: "A", type: 'multiple_choice', options: ["so long as", "provide", "as well as", "so well as"] },
                        { id: 18, text: "______ going to bed, you should drink warm milk, which is the best choice for you to have a good night’s sleep.", answer: "B", type: 'multiple_choice', options: ["After", "Before", "Although", "However"] },
                        { id: 19, text: "______ I went home, everything was chaotic. Someone must have broken into my house.", answer: "A", type: 'multiple_choice', options: ["When", "Before", "Because", "Although"] },
                        { id: 20, text: "There are many ways to do multi-choice exercises. ______, you can exclude wrong answers before choosing the best answer.", answer: "B", type: 'multiple_choice', options: ["Besides", "For instance", "When", "Therefore"] },
                        { id: 21, text: "Although the fish can hear, they have ______ external ears ______ ear drums.", answer: "D", type: 'multiple_choice', options: ["either - or", "either - nor", "whether - or", "neither - nor"] },
                        { id: 22, text: "You are not allowed to drive your car in the city center at rush hour ______ there is too much traffic then.", answer: "C", type: 'multiple_choice', options: ["because of", "for fear", "for", "though"] },
                        { id: 23, text: "She studies so hard ______ if she falls the next exam, her mother will be sad.", answer: "A", type: 'multiple_choice', options: ["lest", "Least", "on fear that", "as"] },
                        { id: 24, text: "______ it had not been for the intolerable heat in the hall, they would have stayed much longer.", answer: "C", type: 'multiple_choice', options: ["unless", "As if", "Supposing", "As though"] },
                        { id: 25, text: "______ liquid ______ gases flow freely from a container because they have no definite shape.", answer: "D", type: 'multiple_choice', options: ["Either - or", "Neither - nor", "Whether - or", "Both - and"] },
                        { id: 26, text: "In a new culture, many embarrassing situations happen ______ misunderstanding.", answer: "A", type: 'multiple_choice', options: ["because of", "because", "as", "seeing that"] },
                        { id: 27, text: "Students are encouraged to develop critical thinking ______ accepting opinions without questioning them.", answer: "C", type: 'multiple_choice', options: ["in addition", "for instance", "instead of", "because of"] },
                        { id: 28, text: "Everybody had heard of Einstein, ______ hardly anyone could understand his theory of relativity.", answer: "B", type: 'multiple_choice', options: ["and", "but", "so", "because"] },
                        { id: 29, text: "It was the first time I had had visitors ______ I moved to London.", answer: "A", type: 'multiple_choice', options: ["since", "as", "for", "because"] },
                        { id: 30, text: "The new supermarket is so much cheaper than the one in John Street, ______ they do free home deliveries.", answer: "A", type: 'multiple_choice', options: ["Moreover", "Consequently", "Nevertheless", "Instead"] },
                        { id: 31, text: "______, she managed to hide her feelings.", answer: "A", type: 'multiple_choice', options: ["However jealous she felt", "If she would feel jealous", "Despite of her being jealous", "In case she felt jealous"] },
                        { id: 32, text: "My parents lent me the money, ______ I couldn’t have afforded the trip.", answer: "B", type: 'multiple_choice', options: ["Therefore", "Otherwise", "Only if", "However"] },
                        { id: 33, text: "All applications to courses at tertiary institutions are made through UCAS, a central agency ______ UK universities and colleges of higher education.", answer: "C", type: 'multiple_choice', options: ["standing for", "instead of", "on behalf of", "representative of"] },
                        { id: 34, text: "______ he hasn’t had any formal qualifications, he has managed to do very well.", answer: "B", type: 'multiple_choice', options: ["Despite", "Although", "If", "Whereas"] },
                        { id: 35, text: "______, he walked to the station.", answer: "D", type: 'multiple_choice', options: ["In spite being tired", "Despite of tiredness", "Although to be tired", "Despite being tired"] },
                        { id: 36, text: "______ busy she is, she manages to pick her children up after school every day.", answer: "A", type: 'multiple_choice', options: ["However", "Although", "Despite", "Because"] },
                        { id: 37, text: "A newborn baby can neither walk nor crawl. A newborn tiger, ______, can run within minutes of birth.", answer: "D", type: 'multiple_choice', options: ["therefore", "even though", "otherwise", "however"] },
                        { id: 38, text: "We’ve had a burglar alarm installed in our holiday cottage ______ we will feel happier about leaving it unoccupied for long periods.", answer: "B", type: 'multiple_choice', options: ["for fear that", "so that", "now that", "provided that"] },
                        { id: 39, text: "______ proficiency in German would be of much help, it is not requirement for the advertised position.", answer: "D", type: 'multiple_choice', options: ["Despite", "Otherwise", "Regarding", "Although"] },
                        { id: 40, text: "He couldn’t ride his bike ______ there’s no air in one of the types.", answer: "B", type: 'multiple_choice', options: ["since", "due to", "though", "despite"] },
                        { id: 41, text: "______ his income of current job is relatively low, he finds it difficult to make ends meet.", answer: "B", type: 'multiple_choice', options: ["Although", "As", "Because of", "In spite of"] },
                        { id: 42, text: "______ Allan’s inexperience as a midfielder, he played well and scored a decisive goal in the final match.", answer: "C", type: 'multiple_choice', options: ["Since", "Although", "Despite", "Because of"] },
                        { id: 43, text: "Her eyes are red and puffy ______ she has been crying a lot.", answer: "B", type: 'multiple_choice', options: ["although", "since", "because of", "despite"] },
                        { id: 44, text: "______ had the restaurant opened ______ people were flocking to eat there.", answer: "A", type: 'multiple_choice', options: ["Scarcely/when", "No sooner/when", "No sooner/then", "Hardly/that"] },
                        { id: 45, text: "Peter always takes a map with him ______ he loses his way.", answer: "B", type: 'multiple_choice', options: ["if", "in case", "so that", "so"] },
                        { id: 46, text: "My parents lent me the money. ______, I couldn’t have afforded the trip.", answer: "B", type: 'multiple_choice', options: ["However", "Otherwise", "Therefore", "Unless"] },
                        { id: 47, text: "Inexperienced ______, she can know the way of operating that system.", answer: "D", type: 'multiple_choice', options: ["even though she is", "as she might", "she may be though", "as she may be"] },
                        { id: 48, text: "You have to take the full course of your antibiotics even if you feel better, ______ your illness will simply return.", answer: "D", type: 'multiple_choice', options: ["whereas", "such as", "so that", "otherwise"] },
                        { id: 49, text: "The house felt terribly cold ______ the fact that the central heating had been on all day.", answer: "B", type: 'multiple_choice', options: ["because of", "in spite of", "because", "although"] },
                        { id: 50, text: "The building work is still on schedule ______ a problem ______ in digging the foundation.", answer: "B", type: 'multiple_choice', options: ["due to", "despite", "so as", "only if"] },
                        { id: 51, text: "______ she could not say anything.", answer: "C", type: 'multiple_choice', options: ["Therefore upset was she that", "However upset was she that", "So upset was she that", "So upset was that"] },
                        { id: 52, text: "______ badly you treat him, he’ll help you. He’s so tolerant.", answer: "A", type: 'multiple_choice', options: ["No matter how", "In addition to", "Even though", "As if"] },
                        { id: 53, text: "A new study by University College London shows that teenager girls are twice as likely to be depressed ______ social media as boys.", answer: "D", type: 'multiple_choice', options: ["as a result", "thanks to", "despite", "due to"] },
                        { id: 54, text: "______ there is not enough information on the effects of smoke in the atmosphere, doctors have proved that air pollution causes lung diseases.", answer: "B", type: 'multiple_choice', options: ["In spite of", "Although", "Therefore", "However"] },
                        { id: 55, text: "______ a spoken language dies, it leaves no archaeology, the scientific study of material remains such as tools, pottery, stone walls and monuments.", answer: "C", type: 'multiple_choice', options: ["After", "As long as", "When", "As a result"] },
                        { id: 56, text: "The pop festival passed off peacefully, ______ the fears of local residents.", answer: "A", type: 'multiple_choice', options: ["despite", "however", "but", "due to"] }
                    ]
                }
            ]
        },
        {
            id: 'conjunctions-ex-2',
            title: 'BÀI TẬP 2: TÌM LỖI SAI (Error Correction)',
            category: 'Conjunctions',
            sections: [
                {
                    title: 'Exercise 2: Identify the underlined part that needs correction',
                    subtitle: 'Chọn phần gạch chân sai (A, B, C hoặc D)',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "The doctors looked (A) at the test result, but (B) they decided to (C) operate on (D) the patient.", answer: "B", isExample: true, type: 'multiple_choice', options: ["A", "B", "C", "D"] },
                        { id: 2, text: "Hoa flew (A) to Paris to (B) visit her grandma, so (C) to (D) see Eiffel Tower.", answer: "C", type: 'multiple_choice', options: ["A", "B", "C", "D"] },
                        { id: 3, text: "Lan studied (A) hard for the (B) final test, but (C) she passed with (D) flying colours.", answer: "C", type: 'multiple_choice', options: ["A", "B", "C", "D"] },
                        { id: 4, text: "She’s counting (A) her calories, so (B) she really (C) wants to eat dessert after (D) meals.", answer: "B", type: 'multiple_choice', options: ["A", "B", "C", "D"] },
                        { id: 5, text: "There was (A) no food in the fridge, nor (B) they didn’t (C) have money to go (D) to the market.", answer: "C", type: 'multiple_choice', options: ["A", "B", "C", "D"] },
                        { id: 6, text: "Dogs are (A) loyal pets, or (B) they will (C) never make you feel (D) betrayed.", answer: "B", type: 'multiple_choice', options: ["A", "B", "C", "D"] },
                        { id: 7, text: "We went (A) to the Korean (B) restaurant, so (C) we found out (D) it was closed early.", answer: "C", type: 'multiple_choice', options: ["A", "B", "C", "D"] },
                        { id: 8, text: "Don’t forget (A) your (B) passport, and (C) you’ll have trouble (D) checking in.", answer: "C", type: 'multiple_choice', options: ["A", "B", "C", "D"] },
                        { id: 9, text: "We also have (A) to do (B) our assignment, and (C) we’ll be (D) punished.", answer: "C", type: 'multiple_choice', options: ["A", "B", "C", "D"] },
                        { id: 10, text: "John picked (A) me up at (B) my house, but (C) we went out for (D) a walk.", answer: "C", type: 'multiple_choice', options: ["A", "B", "C", "D"] },
                        { id: 11, text: "Travelling (A) helps not only (B) me meet people from all different walks of life but (C) also gives me a chance to widen (D) my horizon.", answer: "B", type: 'multiple_choice', options: ["A", "B", "C", "D"] },
                        { id: 12, text: "To reduce (A) air pollution, the (B) government encourages people to use public transportation instead (C) driving (D) car.", answer: "C", type: 'multiple_choice', options: ["A", "B", "C", "D"] },
                        { id: 13, text: "She always (A) asks someone to (B) solve her problems when (C) she can address (D) them on her own.", answer: "C", type: 'multiple_choice', options: ["A", "B", "C", "D"] },
                        { id: 14, text: "Provide (A) the weather permits (B), the annual company picnic will be (C) held at (D) a national park on Saturday, the 9th.", answer: "A", type: 'multiple_choice', options: ["A", "B", "C", "D"] },
                        { id: 15, text: "She gave up (A) her occupation because (B) this job was not suitable for her. However (C), she also wanted to have time to take care (D) of her family better.", answer: "C", type: 'multiple_choice', options: ["A", "B", "C", "D"] },
                        { id: 16, text: "It’s hot here (A), in Saigon, and then (B) it has rained, it floods, all the ditches will be (C) choked up with water and trash (D).", answer: "B", type: 'multiple_choice', options: ["A", "B", "C", "D"] },
                        { id: 17, text: "I can (A) let you borrow (B) my computer unless (C) you keep all of my files untouched (D).", answer: "C", type: 'multiple_choice', options: ["A", "B", "C", "D"] },
                        { id: 18, text: "You can call (A) this phone number once (B) you do not (C) meet him at (D) his office.", answer: "B", type: 'multiple_choice', options: ["A", "B", "C", "D"] },
                        { id: 19, text: "I tell (A) them the truth, regardless (B) what (C) they want to (D) hear.", answer: "B", type: 'multiple_choice', options: ["A", "B", "C", "D"] },
                        { id: 20, text: "Even though (A) repeated assurances that (B) the product is (C) safe, many people have stopped (D) buying it.", answer: "A", type: 'multiple_choice', options: ["A", "B", "C", "D"] },
                        { id: 21, text: "Actually (A), noise can cause a lot of problems, it can directly damage (B) your ear, specifically your ear drum. However (C), I think noise can interfere into (D) your concentration and your productivity.", answer: "C", type: 'multiple_choice', options: ["A", "B", "C", "D"] },
                        { id: 22, text: "You shouldn’t (A) drink water too much owning to (B) if you drink too much and (C) too suddenly, you can get (D) poison as well owning to the huge intake.", answer: "B", type: 'multiple_choice', options: ["A", "B", "C", "D"] },
                        { id: 23, text: "You must (A) either leave (B) for the movies immediately nor (C) forget about (D) going.", answer: "C", type: 'multiple_choice', options: ["A", "B", "C", "D"] },
                        { id: 24, text: "My brother never attended (A) the military parades (B) in the city, but (C) he hated (D) war.", answer: "C", type: 'multiple_choice', options: ["A", "B", "C", "D"] },
                        { id: 25, text: "All (A) root vegetables grow (B) underground, and (C) not all vegetables that grow underground are (D) roots.", answer: "C", type: 'multiple_choice', options: ["A", "B", "C", "D"] },
                        { id: 26, text: "William not only (A) takes (B) three showers a day and (C) washes his clothes (D) twice.", answer: "C", type: 'multiple_choice', options: ["A", "B", "C", "D"] },
                        { id: 27, text: "No matter how (A) you place (B) your order, we will do (C) our best to get (D) it filled by the time you request.", answer: "D", type: 'multiple_choice', options: ["A", "B", "C", "D"] },
                        { id: 28, text: "BioTech will (A) change its end user licensing agreement policy in spite of (B) the complaints that we have (C) received regarding (D) its practicality.", answer: "B", type: 'multiple_choice', options: ["A", "B", "C", "D"] },
                        { id: 29, text: "Though (A) falling sales (B), we are (C) optimistic about our sales next year because (D) we have high expectations for the new product line.", answer: "A", type: 'multiple_choice', options: ["A", "B", "C", "D"] },
                        { id: 30, text: "However (A) she was (B) very hard working, she hardly earned (C) enough to feed (D) her family.", answer: "A", type: 'multiple_choice', options: ["A", "B", "C", "D"] },
                        { id: 31, text: "That was the (A) reason when (B) they didn’t want to (C) come back to (D) their hometown.", answer: "B", type: 'multiple_choice', options: ["A", "B", "C", "D"] },
                        { id: 32, text: "To sum up (A), unless (B) the population explosion continues, many more (C) people will die for (D) starvation in poor countries.", answer: "B", type: 'multiple_choice', options: ["A", "B", "C", "D"] },
                        { id: 33, text: "Applicants are (A) required to present (B) between (C) a reference letter and (D) a photocopy of their social security card.", answer: "C", type: 'multiple_choice', options: ["A", "B", "C", "D"] },
                        { id: 34, text: "Actually (A), when I was a child, I only (B) learnt history through (C) a text book and at that time I was not so interested in it because (D) there were so many things that I had to remember.", answer: "B", type: 'multiple_choice', options: ["A", "B", "C", "D"] },
                        { id: 35, text: "Although (A) I pretended to be (B) fine, the whole thing was so (C) a worry that I began to (D) lose sleep over it.", answer: "C", type: 'multiple_choice', options: ["A", "B", "C", "D"] }
                    ]
                }
            ]
        },
        {
            id: 'conjunctions-ex-3',
            title: 'BÀI TẬP 3: VIẾT LẠI CÂU (Sentence Transformation)',
            category: 'Conjunctions',
            sections: [
                {
                    title: 'Exercise 3: Rewrite the following sentences using the words in brackets',
                    subtitle: 'Viết lại câu sao cho nghĩa không đổi',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "The government adopted the laws to regulate emission. They wanted to reduce air pollution. (SO THAT)\n=> The government adopted the laws to regulate emission ______.", answer: "so that they could reduce air pollution", isExample: true, type: 'fill_blank' },
                        { id: 2, text: "To reduce releasing polluted air into environment, the government encourages people to replace gasoline- fueled with zero- emission vehicle. (WITH A VIEW TO)\n=> The government encourages people to replace gasoline- fueled with zero- emission vehicle ______.", answer: "with a view to reducing releasing polluted air into environment", type: 'fill_blank' },
                        { id: 3, text: "People like driving cars instead of taking public transportation. Using the car is easy to move. (BECAUSE)\n=> People like driving cars instead of taking public transportation ______.", answer: "because using the car is easy to move", type: 'fill_blank' },
                        { id: 4, text: "The development of artificial intelligence helps reduce the workload of human. It also causes great harm. (ALTHOUGH)\n=> ______ the development of artificial intelligence helps reduce the workload of human, it also causes great harm.", answer: "Although", type: 'fill_blank' },
                        { id: 5, text: "If we don’t go home before night, we will be locked out. (OTHERWISE)\n=> We should go home before night ______.", answer: "otherwise we will be locked out", type: 'fill_blank' },
                        { id: 6, text: "Although he has a physical handicap, he becomes a successful businessman. (DESPITE)\n=> ______ his physical handicap, he becomes a successful businessman.", answer: "Despite", type: 'fill_blank' },
                        { id: 7, text: "I don’t tell the truth to my mother. I am afraid of being punished. (FOR FEAR THAT)\n=> I don’t tell the truth to my mother ______.", answer: "for fear that I will be punished", type: 'fill_blank' },
                        { id: 8, text: "You can take anything from my store, but you have to pay for them. (PROVIDING THAT)\n=> You can take anything from my store ______ you pay for them.", answer: "providing that", type: 'fill_blank' },
                        { id: 9, text: "Although robots are immensely intelligent, they are unlikely to exhibit human emotion. (IN SPITE OF)\n=> ______ being immensely intelligent, robots are unlikely to exhibit human emotion.", answer: "In spite of", type: 'fill_blank' },
                        { id: 10, text: "Declining mortality rate is one of reasons which cause overpopulation. (OWNING TO)\n=> ______ declining mortality rate, overpopulation has occurred.", answer: "Owning to", type: 'fill_blank' },
                        { id: 11, text: "High levels of pollution and noise cause stress for more and more people who live in the city. (BECAUSE OF)\n=> More and more people who live in the city suffer from stress ______ high levels of pollution and noise.", answer: "because of", type: 'fill_blank' },
                        { id: 12, text: "It is a wider gap between rich and poor that makes economy less develop. (DUE TO)\n=> Economy is less developed ______ a wider gap between rich and poor.", answer: "due to", type: 'fill_blank' },
                        { id: 13, text: "Tom doesn’t want to become a doctor and neither does his sister. (NEITHER ...NOR)\n=> ______ Tom ______ his sister wants to become a doctor.", answer: "Neither/nor", type: 'fill_blank' },
                        { id: 14, text: "If you continue play truant, you will be expelled from the school. (OR)\n=> Stop playing truant, ______.", answer: "or you will be expelled from the school", type: 'fill_blank' },
                        { id: 15, text: "Playing sport helps me keep fit. It also prevents various health problems such as high blood pressure. (NOT ONLY...BUT ALSO)\n=> Playing sport ______ helps me keep fit ______ prevents various health problems such as high blood pressure.", answer: "not only/but also", type: 'fill_blank' },
                        { id: 16, text: "Both Lina and her friend like independent learning, which helps them study better. (ACCOMPANIED BY)\n=> Lina, ______ her friend, likes independent learning, which helps them study better.", answer: "accompanied by", type: 'fill_blank' },
                        { id: 17, text: "Milk tea is not good for health. It makes people become fatter and can lead to diabetes. (WHEREAS)\n=> Milk tea is not good for health ______ it makes people become fatter and can lead to diabetes.", answer: "whereas", type: 'fill_blank' },
                        { id: 18, text: "There were so many people on the beach that it was difficult to get into the sea. (SUCH...THAT)\n=> It was ______ on the beach ______ it was difficult to get into the sea.", answer: "such a crowded beach/that", type: 'fill_blank' },
                        { id: 19, text: "It may take three days for my friend to receive my letter. Sending a message only takes several seconds. (WHILE)\n=> ______ it may take three days for my friend to receive my letter, sending a message only takes several seconds.", answer: "While", type: 'fill_blank' },
                        { id: 20, text: "Your mother will give you anything that you like if you enter Foreign Trade University. (PROVIDED)\n=> Your mother will give you anything that you like ______ you enter Foreign Trade University.", answer: "provided", type: 'fill_blank' },
                        { id: 21, text: "When going to public places like restaurants, it’s not exactly quiet either because everyone tries to speak louder so that they can hear themselves and they can hear their friends. (SEEING THAT)\n=> ______ going to public places like restaurants is not exactly quiet, everyone tries to speak louder.", answer: "Seeing that", type: 'fill_blank' },
                        { id: 22, text: "The bus service was so unreliable that we chose to travel by taxi. (SO)\n=> The bus service was ______ unreliable, ______ we chose to travel by taxi.", answer: "so/so", type: 'fill_blank' },
                        { id: 23, text: "Juice and other kinds of soft drinks contain a huge amount of calories. That is the reason why they make people gain weight too much. (AS)\n=> ______ juice and other kinds of soft drinks contain a huge amount of calories, they make people gain weight too much.", answer: "As", type: 'fill_blank' },
                        { id: 24, text: "I move to the countryside. I want to have fresh air and live in a peaceful place. (WITH A VIEW TO)\n=> I move to the countryside ______.", answer: "with a view to having fresh air and living in a peaceful place", type: 'fill_blank' },
                        { id: 25, text: "She buys a lovely doll. He daughter can play with it at home. (IN ORDER THAT)\n=> She buys a lovely doll ______ her daughter can play with it at home.", answer: "in order that", type: 'fill_blank' }
                    ]
                }
            ]
        },
        {
            id: 'conjunctions-ex-4-1',
            title: 'BÀI TẬP 4: KẾT HỢP CÂU (Sentence Combination) - Part 1',
            category: 'Conjunctions',
            sections: [
                {
                    title: 'Exercise 4: Choose the best sentence that combines each pair of sentences',
                    subtitle: 'Chọn câu kết hợp đúng nhất (Câu 1-30)',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "Laura practised playing the instrument a lot. She could hardly improve her performance.", answer: "C", isExample: true, type: 'multiple_choice', options: ["Hardly had Laura practised playing the instrument a lot when she could improve her performance.", "Had Laura practised playing the instrument a lot, she could have performed much better.", "However much Laura practised playing did instrument, she could hardly perform any better.", "As soon as Laura practised playing the instrument a lot, she could perform much better."] },
                        { id: 2, text: "Last night she worked very hard. She wanted to finish the report on time.", answer: "A", type: 'multiple_choice', options: ["Last night she worked very hard so as to finish the report on time.", "Last night she worked very hard although he wanted to finish the report on time.", "However hard she worked last night, she finished the report on time.", "No matter how hard she worked last night, she finished the report on time."] },
                        { id: 3, text: "The ethnic minority people make wine to enjoy themselves. It is wine that has bad effects on their mental and physical health.", answer: "D", type: 'multiple_choice', options: ["Despite making wine to enjoy themselves, it is wine that has bad effects on ethnic minority people’s mental and physical health.", "In spite of having bad effects on their mental and physical health, ethnic minority people make wine to enjoy themselves.", "Even though ethnic minority people make wine to enjoy themselves, it has bad effects on their mental and physical health.", "Both A & C are correct."] },
                        { id: 4, text: "The singer performed the traditional song beautifully but she didn’t pass the audition.", answer: "B", type: 'multiple_choice', options: ["The singer’s performance of a traditional song was too traditional to pass the audition.", "The singer performed the traditional song beautifully, yet she didn’t pass the audition.", "The singer performed the traditional song beautifully enough to pass the audition.", "The traditional song she performed was so beautiful that she did not pass the audition."] },
                        { id: 5, text: "You should take in more fruits and vegetables instead of eating too much fast food.", answer: "D", type: 'multiple_choice', options: ["Eating too much fast food day and taking in more fruits and vegetables are advisable.", "Don’t take in more fruits and vegetables, just eat too much fast food instead.", "Eating too much fast food helps you take in more fruits and vegetables.", "Taking in more fruits and vegetables is better than eating too much fast food."] },
                        { id: 6, text: "My brother can’t pass the entrance examination. He is very hard-working.", answer: "A", type: 'multiple_choice', options: ["My brother can’t pass the entrance examination even though he is very hard working.", "My brother can’t pass the entrance examination but he is very hard-working.", "My brother can’t pass the entrance examination despite he is very hard-working.", "My brother can’t pass the entrance examination despite a fact that he is very hard-working."] },
                        { id: 7, text: "Mark didn’t arrive in time to watch the musical Swan Lake.", answer: "C", type: 'multiple_choice', options: ["Mark was so late that he can’t watch the musical Swan Lake.", "Mark wasn’t too early to watch the musical Swan Lake.", "Mark wasn’t early enough to watch the musical Swan Lake.", "Mark wasn’t enough early to watch the musical Swan Lake."] },
                        { id: 8, text: "All families have disagreements from time to time. There may be times when you feel that others in your family don’t understand you.", answer: "A", type: 'multiple_choice', options: ["All families have disagreements from time to time, but there may be times when you feel that others in your family don’t understand you.", "All families have disagreements from time to time, which makes you feel that others in your family don’t understand you.", "There may be times when you feel that others in your family don’t understand you and all families have disagreements from time to time.", "Because all families have disagreements from time to time, there may be times when you feel that others in your family don’t understand you."] },
                        { id: 9, text: "Family members share fun as well as sorrow and help heal one another’s hurts.", answer: "C", type: 'multiple_choice', options: ["As family members share fun as well as sorrow, they also help heal one another’s hurts.", "Family members share fun as well as sorrow so that they can help heal one another’s hurts.", "Not only do family members share fun as well as sorrow, but they also help heal one another’s hurts.", "Family members do not share only fun as well as sorrow, but they also help heal one another’s hurts."] },
                        { id: 10, text: "Salt is vital. It extracts and gets rid of acids.", answer: "B", type: 'multiple_choice', options: ["It’s vital for salt to extract and get rid of acids.", "Salt is vital as it extracts and gets rid of acids.", "Extracting and get rid of acids is vital to salt.", "Salt extraction and getting rid of acids are vital."] },
                        { id: 11, text: "The teeth are part of the skeletal system. However, they aren’t considered bones.", answer: "A", type: 'multiple_choice', options: ["The teeth are part of the skeletal system, but they aren’t considered bones.", "Being also part of the skeletal system, the teeth aren’t considered bones.", "As not being considered bones, the teeth are also part of the skeletal system.", "Although considered bones, the teeth are not part of the skeletal system."] },
                        { id: 12, text: "Our skin not only provides protection to the internal body parts. It also gives us our sense of touch.", answer: "A", type: 'multiple_choice', options: ["Our skin not only provides protection to the internal body parts, but also gives us our sense of touch.", "Because our skin provides protection to the internal body parts, it also gives us our sense of touch.", "Providing protection to the internal body parts, the skin gives us our sense of touch.", "To provide protection to the internal body parts, the skin gives us our sense of touch."] },
                        { id: 13, text: "There are many places to go where you will be a member of an audience. However, audiences do not act the same at every type of event.", answer: "A", type: 'multiple_choice', options: ["Although there are many places to go where you will be a member of an audience, audiences do not act the same at every type of event.", "At different places where you will be a member of an audience, audiences do not act the same at every type at event.", "At every type of event at many different places where you will be a member of an audience, audiences do not always act the same.", "Audiences do not act the same at every type of event because there are many places where they can be a member of an audience."] },
                        { id: 14, text: "The evolution of marketing in the music industry has been carried out. At the same time, the evolution of technology in music has also been carried out.", answer: "C", type: 'multiple_choice', options: ["The evolution of marketing in the music industry has been carried out, resulting in the evolution of technology in music.", "The evolution of marketing in the music industry has been carried out thanks to the evolution of technology in music.", "The evolution of marketing in the music industry has been simultaneously carried out with the evolution of technology in music.", "The evolution of marketing in the music industry has been carried out, thanks to the evolution of technology in music."] },
                        { id: 15, text: "It is recognized that students' volunteer work will benefit communities. However, its primary purpose is to contribute to students' development.", answer: "A", type: 'multiple_choice', options: ["Although it is recognized that students' volunteer work will benefit communities, its primary purpose is to contribute to students' development.", "As it is recognized that students' volunteer work will benefit communities, its primary purpose is to contribute to the development.", "As the primary purpose of students' volunteer work is to contribute to students' development, its benefit to communities is recognized.", "To recognize the benefit of students' volunteer work to communities, it is to note that its primary purpose is to contribute to students' development."] },
                        { id: 16, text: "The lack of systematic data on volunteer work is not simply an academic matter. It also limits the ability to make the most effective use of this important resource.", answer: "B", type: 'multiple_choice', options: ["Because the lack of systematic data on volunteer work is not simply an academic matter, it limits the ability to make the most effective use of this important resource.", "The lack of systematic data on volunteer work is not only simply an academic matter, but it also limits the ability to make the most effective use of this important resource.", "Due to the lack of systematic data on volunteer work, it is now not only a simple academic matter but also limits the ability to make an effective use of this important resource.", "Because the lack of systematic data on volunteer work limits the ability to make the most effective use of this important resource, it is not simply an academic matter."] },
                        { id: 17, text: "Some volunteers are not willing to travel. They prefer to seek opportunities nearer home.", answer: "D", type: 'multiple_choice', options: ["Seeking opportunities nearer their homes makes some volunteers unwilling to travel.", "Being able to seek opportunities nearer home, some volunteers are not willing to travel.", "When volunteers are not willing to travel, they will try to seek opportunities nearer home.", "Because some volunteers are not willing to travel, they seek opportunities nearer home."] },
                        { id: 18, text: "Cultural diversity can be a source of tension. It can also bolster workplace productivity.", answer: "A", type: 'multiple_choice', options: ["Cultural diversity can be a source of tension, but it can also bolster workplace productivity.", "Cultural diversity can bolster workplace productivity, but it can also be a source of tension.", "Being a source of tension can also make cultural diversity bolster workplace productivity.", "When bolstering workplace productivity, cultural diversity can be a source of tension."] },
                        { id: 19, text: "Diverse companies are more aware of the needs of their community. They tend to give more monetarily and engage in cultural events in their communities.", answer: "A", type: 'multiple_choice', options: ["Because diverse companies are more aware of the needs of their community, they tend to give more monetarily and engage in cultural events in their communities.", "Diverse companies are more aware of the needs of their community, but they tend to give more monetarily and engage in cultural events in their communities.", "Although diverse companies are more aware of the needs of their community, they tend to give more monetarily and engage in cultural events in their communities.", "Diverse companies are not only more aware of the needs of their community, but they also tend to give more monetarily and engage in cultural events in their communities."] },
                        { id: 20, text: "Students’ needs are diverse. There are various types of schools and training programs to choose from.", answer: "D", type: 'multiple_choice', options: ["Students’ needs are diverse although there are various types of schools and training programs to choose from.", "There are various types of schools and training programs for students of diverse needs to choose from.", "Students’ needs are diversifying types of schools and training programs for them to choose from.", "Students’ needs are diverse, so there are various types of schools and training programs to choose from."] },
                        { id: 21, text: "Angelina Jolie began taking an interest in charity work. She was filming in Cambodia then.", answer: "B", type: 'multiple_choice', options: ["After Angelina Jolie began taking an interest in charity work, she was filming in Cambodia.", "Angelina Jolie began taking an interest in charity work while she was filming in Cambodia.", "Before Angelina Jolie was filming in Cambodia, she began to take an interest in charity work.", "As soon as Angelina Jolie began taking an interest in charity work, she was filming in Cambodia then."] },
                        { id: 22, text: "They were busy with their schoolwork. They spent time helping the elderly in the retirement home.", answer: "A", type: 'multiple_choice', options: ["They were busy with their schoolwork, but they still spent time helping the elderly in the retirement home.", "They spent time helping the elderly in the retirement home, so they were busy with their schoolwork.", "They were busy with their schoolwork, and they spent time helping the elderly in the retirement home.", "They spent time helping the elderly in the retirement home, or they were busy with their schoolwork."] },
                        { id: 23, text: "Some students took part in directing the traffic. Others took care of the war invalids.", answer: "C", type: 'multiple_choice', options: ["Some students took part in directing the traffic, so some others took care of the war invalids.", "Some students took part in directing the traffic, for some others took care of the to war invalids.", "Some students took part in directing the traffic, and some others took care of the war invalids.", "Some students took part in directing the traffic, but some others took care of the war invalids."] },
                        { id: 24, text: "The boy was only 10 years old. He established an athletic programme for children with special needs.", answer: "A", type: 'multiple_choice', options: ["Despite his young age, the boy established an athletic programme for children with special needs.", "Until the boy was only 10 years old, he established an athletic programme for children with special needs.", "The boy established an athletic programme for children with special needs because he was only 10 years old.", "The boy established an athletic programme for children with special needs in case of his young age."] },
                        { id: 25, text: "Bell succeeded with his new invention. People were able to talk to each other over great distances.", answer: "C", type: 'multiple_choice', options: ["Because Bell’s success with the new invention, people were able to talk to each other over great distances.", "In spite of Bell’s success with the new invention, people were able to talk to each other over great distances.", "Owing to Bell’s success with the new invention, people were able to talk to each other over great distances.", "Since Bell’s success with the new invention, people were able to talk to each other over great distances."] },
                        { id: 26, text: "You have to finish your homework if you want to go to the party.", answer: "D", type: 'multiple_choice', options: ["Finish your homework, and you cannot go to the party.", "Unless you finish your homework, you can go to the party.", "Finish your homework, otherwise you can go to the party.", "Finish your homework, or else you cannot go to the party."] },
                        { id: 27, text: "Although he was very tired, he agreed to play tennis.", answer: "B", type: 'multiple_choice', options: ["Tired as though he was, he agreed to play tennis.", "Tired though he was, he agreed to play tennis.", "Tired, he agreed to play tennis.", "So tired was he that he agreed to play tennis."] },
                        { id: 28, text: "You have to finish your homework if you want to visit the heritage site with your classmates.", answer: "C", type: 'multiple_choice', options: ["Finish your homework if you don’t want to visit the heritage site with your classmates.", "Unless you finish your homework, you can visit the heritage site with your classmates.", "Finish your homework, otherwise you can visit the heritage site with your classmates.", "Despite poverty and overcrowding, the life of people in many big cities is being ruined."] },
                        { id: 29, text: "Poverty and overcrowding are ruining the life of people in many big cities.", answer: "B", type: 'multiple_choice', options: ["To make poverty and overcrowding even worse, people in many big cities ruin their life.", "Due to poverty and overcrowding, the life of people in many big cities is being ruined.", "Unless there are poverty and overcrowding, the life of people in many big cities won’t be ruined.", "Despite poverty and overcrowding, the life of people in many big cities is being ruined."] },
                        { id: 30, text: "We stayed in that hotel despite the noise.", answer: "C", type: 'multiple_choice', options: ["Because the hotel is noisy, we stayed there.", "We stayed in the noisy hotel, and we liked it.", "Although the hotel was noisy, we stayed there.", "Without the noise, we would have stayed in the hotel."] }
                    ]
                }
            ]
        },
        {
            id: 'conjunctions-ex-4-2',
            title: 'BÀI TẬP 4: KẾT HỢP CÂU (Sentence Combination) - Part 2',
            category: 'Conjunctions',
            sections: [
                {
                    title: 'Exercise 4: Choose the best sentence that combines each pair of sentences',
                    subtitle: 'Chọn câu kết hợp đúng nhất (Câu 31-60)',
                    type: 'exercise',
                    questions: [
                        { id: 31, text: "I was so busy. I couldn’t come to her birthday party.", answer: "B", isExample: true, type: 'multiple_choice', options: ["I came to her birthday party so I was too busy.", "I was too busy to come to her birthday party.", "I was busy enough to come to her birthday party.", "Her birthday party made me really busy."] },
                        { id: 32, text: "She intended to study music in New Jersey. Accidentally she left and studied music in New York.", answer: "D", type: 'multiple_choice', options: ["She left her hometown in New Jersey in order to study music in New York.", "After studying music in New Jersey, she studied music in New York.", "She left New Jersey with the intention to study music in New York.", "She was going to study music in New Jersey but then studied in New York."] },
                        { id: 33, text: "He died in 1960. He received the bravery award in 1970.", answer: "A", type: 'multiple_choice', options: ["After his death, he received the bravery award in 1970.", "Because he died in 1960, he received the bravery award in 1970.", "He died in 1960 so he received the bravery award in 1970.", "Before his death, he received the bravery award in 1970."] },
                        { id: 34, text: "His mother wanted him to be a doctor. He wanted to become a music composer.", answer: "C", type: 'multiple_choice', options: ["His mother wanted him to be a doctor because he wanted to become a music composer.", "His mother wanted him to be a doctor so he wanted to become a music composer.", "His mother wanted him to be a doctor but he wanted to become a music composer.", "If his mother wanted him to be a doctor, he wanted to become a music composer."] },
                        { id: 35, text: "He sang very badly. Everyone left the room.", answer: "B", type: 'multiple_choice', options: ["Everyone left the room so he sang badly.", "He sang very badly so everyone left the room.", "He sang badly as a result of everyone leaving the room.", "He sang so badly but everyone left the room."] },
                        { id: 36, text: "Gender discrimination in education starts at home. Parents treat boys and girls differently.", answer: "C", type: 'multiple_choice', options: ["If parents don’t treat boys and girls differently, gender discrimination in education starts at home.", "Gender discrimination in education starts at home unless parents treat boys and girls differently.", "Gender discrimination in education starts at home if parents treat boys and girls differently.", "If gender discrimination in education starts at home, parents treat boys and girls the same."] },
                        { id: 37, text: "Gender differences cannot prevent a person from pursuing a job. Success comes to those who have enough courage and will.", answer: "D", type: 'multiple_choice', options: ["Unless success comes to those who have enough courage and will, gender differences cannot prevent a person from pursuing a job.", "Gender differences cannot prevent a person from pursuing a job unless success comes to those who have enough courage and will.", "Gender differences can prevent a person from pursuing a job because success comes to those who have enough courage and will.", "Gender differences cannot prevent a person from pursuing a job because success comes to those who have enough courage and will."] },
                        { id: 38, text: "Men should share household tasks with their wives. This helps to maintain gender equality at home.", answer: "B", type: 'multiple_choice', options: ["Men should share household tasks with their wives unless this helps to maintain gender equality at home.", "Men should share household tasks with their wives in order to maintain gender equality at home.", "Men should share household tasks with their wives, but this helps to maintain gender equality at home.", "Men shouldn’t share household tasks with their wives because this helps to maintain gender equality at home."] },
                        { id: 39, text: "Women have to do too much work. They will be exhausted.", answer: "A", type: 'multiple_choice', options: ["If women have to do too much work, they will be exhausted.", "Unless women have to do too much work, they will be exhausted.", "As long as women don’t have to do too much work, they will be exhausted.", "In case women have to do too much work, they won’t be exhausted."] },
                        { id: 40, text: "Wage discrimination affects women negatively. This should be abolished.", answer: "C", type: 'multiple_choice', options: ["Wage discrimination should be abolished, so it affects women negatively.", "Wage discrimination affects women negatively because this should be abolished.", "Wage discrimination affects women negatively, so this should be abolished.", "Wage discrimination should be abolished unless it affects women negatively."] },
                        { id: 41, text: "Living independently means you’ll be footing your own bills. Keep your finances in order.", answer: "B", type: 'multiple_choice', options: ["Living independently means you’ll be footing your own bill or keep your finances in order.", "Living independently means you’ll be footing your own bill, so keep your finances in order.", "Living independently means you’ll be footing your own bill and keep your finances in order.", "None of the above"] },
                        { id: 42, text: "The boy spends too much time in front of the telly. His parents are worried about his school work.", answer: "B", type: 'multiple_choice', options: ["While the boy is spending his time in front of the telly, his parents are worried about his school work.", "As he spends too much time in front of the telly, the boy’s parents are worried about his school work.", "Spending too much time in front of the telly, the boy asks his parents to worry about his school work.", "The boy’s parents are worried about his school work after he spends too much time in front of the telly."] },
                        { id: 43, text: "Urban population grows and the effects of climate change worsen. Therefore, our cities have to adapt.", answer: "B", type: 'multiple_choice', options: ["Our cities have to adapt if urban population grows and the effects of climate change worsen.", "As the urban population grows and the effects of climate change worsen, our cities have to adapt.", "Our cities are always adaptive to urban population growth and the effects of climate changes.", "Urban population growth and effects of climate changes are worsening, which make our cities more adaptive."] },
                        { id: 44, text: "Plants grow old as surely as do animals. However, a generally accepted definition of age in plants has not yet been realized.", answer: "B", type: 'multiple_choice', options: ["Plants grow old as surely as do animals, and a generally accepted definition of age in plants has not yet been realized.", "Although plants grow old as surely as do animals, a generally accepted definition of age in plants has not yet been realized.", "Plants grow old as surely as do animals, so a generally accepted definition of age in plants has not yet been realized.", "For plants to grow old as surely as do animals, a generally accepted definition of age in plants has not yet been realized."] },
                        { id: 45, text: "You shouldn’t be worried. You have prepared carefully for the test.", answer: "C", type: 'multiple_choice', options: ["You shouldn’t be worried, and you have prepared carefully for the test.", "You shouldn’t be worried, or you have prepared carefully for the test.", "You shouldn’t be worried, for you have prepared carefully for the test.", "You shouldn’t be worried, but you have prepared carefully for the test."] },
                        { id: 46, text: "The kids like Sundays. They don’t have to get up early then.", answer: "D", type: 'multiple_choice', options: ["The kids like Sundays if they don’t have to get up early then.", "The kids like Sundays although they don’t have to get up early then.", "The kids like Sundays so that they don’t have to get up early then.", "The kids like Sundays since they don’t have to get up early then."] },
                        { id: 47, text: "Some parents and children have different tastes in music. They have different tastes in fashion, too.", answer: "A", type: 'multiple_choice', options: ["Some parents and children have different tastes in both music and fashion.", "Some parents and children have different tastes in either music or fashion.", "Some parents and children have different tastes in neither music nor fashion.", "Some parents and children have different tastes in music but not fashion."] },
                        { id: 48, text: "His parents don’t like some of his friends. His friends wear too flashy clothes.", answer: "B", type: 'multiple_choice', options: ["His parents don’t like some of his friends despite their too flashy clothes.", "His parents don’t like some of his friends because of their too flashy clothes.", "His parents don’t like some of his friends but for their flashy clothes.", "His parents don’t like some of his friends without their too flashy clothes."] },
                        { id: 49, text: "You are not so ill. You don’t have to stay in bed all the time.", answer: "A", type: 'multiple_choice', options: ["You are not so ill, so there is no need to stay in bed all the time.", "You are too ill to stay in bed all the time.", "You are not ill enough to stay in bed all the time.", "You are not so ill, but there is no need to stay in bed all the time."] },
                        { id: 50, text: "Understanding cognitive disabilities will change people’s attitudes. It will also make them support these children better.", answer: "D", type: 'multiple_choice', options: ["Understanding cognitive disabilities will neither change people’s attitudes nor make them support these children better.", "Understanding cognitive disabilities will either change people’s attitudes or make them support these children better.", "Understanding cognitive disabilities will only change people’s attitudes not make them support these children better.", "Understanding cognitive disabilities will not only change people’s attitudes but also make them support these children better."] },
                        { id: 51, text: "Thomas Edison was one of the world’s greatest inventor. He had difficulties with words and speech.", answer: "C", type: 'multiple_choice', options: ["Thomas Edison, one of the world’s greatest inventor, had difficulties with words and speech.", "Because Thomas Edison was one of the world’s greatest inventor, he had difficulties with words and speech.", "Although Thomas Edison was one of the world’s greatest inventor, he had difficulties with words and speech.", "Unless Thomas Edison were one of the world’s greatest inventor, he would have difficulties with words and speech."] },
                        { id: 52, text: "Disabled people can contribute to our community. Non-disabled people can also contribute to our community.", answer: "B", type: 'multiple_choice', options: ["Either disabled people or non-disabled ones can contribute to our community.", "Both disabled people and non-disabled ones can contribute to our community.", "Only disabled people not non-disabled ones can contribute to our community.", "Neither disabled people nor non-disabled ones can contribute to our community."] },
                        { id: 53, text: "Louis Braille invented Braille in 1829. Since then, it has been an effective means of communication for the visually impaired.", answer: "A", type: 'multiple_choice', options: ["Since Louis Braille invented Braille in 1829, it has been an effective means of communication for the visually impaired.", "Louis Braille had no sooner invented Braille in 1829 than it became an effective means of communication for the visually impaired.", "Not until Louis Braille invented Braille in 1829 did it become an effective means of communication for the visually impaired.", "Louis Braille invented Braille in 1829 so that it would be an effective means of communication for the visually impaired."] },
                        { id: 54, text: "We should not use the words like “deaf” or “them”. They are disrespectful.", answer: "D", type: 'multiple_choice', options: ["We should not use the words like “deaf” or “them”, and they are disrespectful.", "We should not use the words like “deaf” or “them”, so they are disrespectful.", "We should not use the words like “deaf” or “them”, but they are disrespectful.", "We should not use the words like “deaf” or “them”, for they are disrespectful."] },
                        { id: 55, text: "The book was written by a famous author. It was not well recognized.", answer: "B", type: 'multiple_choice', options: ["The book would not be well recognized if it were written by a famous author.", "The book was written by a famous author, but it was not well recognized.", "Due to the famous author, the book was not well recognized.", "The author who is famous did not recognize the book."] },
                        { id: 56, text: "Nina was so nervous. She quit the final round of the competition.", answer: "A", type: 'multiple_choice', options: ["Nina was too nervous to join the final round of the competition.", "Nina quit final round of the competition despite being nervous.", "Though she was nervous, Nina quit the final round of the competition.", "Having quit the final round of the competition, Nina felt nervous."] },
                        { id: 57, text: "The region's average rainfall is high. Few streams and rivers can be seen there.", answer: "D", type: 'multiple_choice', options: ["Because of the region's high average rainfall, few streams and rivers can be seen there.", "The region's average rainfall is so high that few streams and rivers can be seen there.", "If the region's average rainfall were high, more streams and rivers could be seen there.", "In spite of the region's high average rainfall, few streams and rivers can be seen there."] },
                        { id: 58, text: "We almost gave up hope. At that time, the rescue party arrived.", answer: "C", type: 'multiple_choice', options: ["Only after the rescue party arrived did we give up hope.", "It was not until the rescue party arrived that we gave up hope.", "We were on the verge of giving up hope when the rescue party arrived.", "Had the rescue party not arrived, we wouldn't have given up hope."] },
                        { id: 59, text: "Pessimistically speaking, cities will be overpopulated. Traffic will be heavy, too.", answer: "A", type: 'multiple_choice', options: ["Pessimistically speaking, cities will be overpopulated, and traffic will be heavy.", "Pessimistically speaking, cities will be overpopulated, for traffic will be heavy.", "Pessimistically speaking, cities will be overpopulated, but traffic will be heavy.", "Pessimistically speaking, cities will be overpopulated, or traffic will be heavy."] },
                        { id: 60, text: "No disapproval of the plan was raised. I suggest we go ahead.", answer: "C", type: 'multiple_choice', options: ["Despite the approval of the plan being raised, I suggest we go ahead.", "In case someone raises the disapproval of the plan, I suggest we go ahead.", "As nobody raised any disapproval of the plan, I suggest we go ahead.", "Because the disapproval of the plan might be raised, I suggest we go ahead."] }
                    ]
                }
            ]
        }
    ]
};






