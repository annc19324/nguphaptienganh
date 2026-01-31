export const relativeClausesTopic = {
    id: 'relative-clauses',
    title: 'CHUYÊN ĐỀ 12: MỆNH ĐỀ QUAN HỆ (Relative Clauses)',
    category: 'Relative Clauses',
    children: [
        {
            id: 'relative-theory',
            title: 'LÝ THUYẾT: MỆNH ĐỀ QUAN HỆ',
            category: 'Relative Clauses',
            sections: [
                {
                    title: 'I. ĐẠI TỪ QUAN HỆ (RELATIVE PRONOUNS)',
                    type: 'custom',
                    content: [
                        {
                            subtitle: '1. Thay cho danh từ chỉ người',
                            cases: [
                                { label: 'WHO', formula: 'Làm chủ ngữ hoặc tân ngữ cho động từ đứng sau nó.\nEg: The man who is standing there is my teacher.' },
                                { label: 'WHOM', formula: 'Chỉ làm tân ngữ cho động từ đứng sau nó.\nEg: The woman whom I met yesterday is a doctor.' }
                            ]
                        },
                        {
                            subtitle: '2. Thay cho danh từ chỉ vật, sự vật, sự việc',
                            cases: [
                                { label: 'WHICH', formula: 'Làm chủ ngữ hoặc tân ngữ cho động từ đứng sau nó.\nEg: The book which is on the table is mine.' }
                            ]
                        },
                        {
                            subtitle: '3. Thay cho tính từ sở hữu trước danh từ',
                            cases: [
                                { label: 'WHOSE', formula: 'Luôn đi kèm với một danh từ (dùng để chỉ sở hữu cho cả người và vật).\nEg: The man whose car was stolen reported to the police.' }
                            ]
                        },
                        {
                            subtitle: '4. Trường hợp đặc biệt: THAT',
                            cases: [
                                { label: 'Chức năng', formula: 'Có thể thay thế cho cả danh từ chỉ người lẫn vật.\nEg: The people that live next door are very friendly.' },
                                { label: 'Lưu ý quan trọng', formula: '- KHÔNG dùng "that" sau dấu phẩy (trong mệnh đề quan hệ không xác định)\n- KHÔNG dùng "that" sau giới từ\n- BẮT BUỘC dùng "that" sau:\n  + Danh từ hỗn hợp (cả người lẫn vật)\n  + Đại từ bất định (something, anything, everything, nothing...)\n  + Tính từ so sánh nhất (the best, the most...)\n  + The first, the last, the only...' }
                            ]
                        }
                    ]
                },
                {
                    title: 'II. TRẠNG TỪ QUAN HỆ (RELATIVE ADVERBS)',
                    type: 'custom',
                    content: [
                        {
                            subtitle: 'Trạng từ quan hệ dùng để thay thế cho các cụm từ chỉ nơi chốn, thời gian hoặc lý do',
                            cases: [
                                { label: 'WHERE (Chỉ nơi chốn)', formula: 'Công thức chuyển đổi: in/at/on + which = where\nEg: The house where I was born has been demolished.' },
                                { label: 'WHEN (Chỉ thời gian)', formula: 'Công thức chuyển đổi: in/at/on + which = when\nEg: I remember the day when we first met.' },
                                { label: 'WHY (Chỉ lý do)', formula: 'Công thức chuyển đổi: for which = why\nEg: Tell me the reason why you were late.' }
                            ]
                        },
                        {
                            subtitle: 'Ghi nhớ nhanh',
                            cases: [
                                { label: '', formula: '- Who/Whom/Which là các ĐẠI TỪ (có thể làm chủ ngữ/tân ngữ)\n- Where/When/Why là các TRẠNG TỪ (bản chất là một cụm giới từ + which)' }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'relative-ex-1',
            title: 'BÀI TẬP 1: ĐIỀN ĐẠI TỪ/TRẠNG TỪ QUAN HỆ',
            category: 'Relative Clauses',
            sections: [
                {
                    title: 'Exercise 1: Complete each sentence using "who, which, that, whom, whose, where, when, why"',
                    subtitle: 'Hoàn thành câu với đại từ/trạng từ quan hệ phù hợp',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "Is there a particular sequence in ______ you have to perform these tasks?", answer: "which", isExample: true, type: 'fill_blank', explanation: "Dùng 'which' thay thế cho danh từ chỉ vật 'sequence'. 'In which' có nghĩa là 'trong trật tự đó'." },
                        { id: 2, text: "The other people ______ live in the house are really friendly.", answer: "who/that", type: 'fill_blank', explanation: "Dùng 'who' hoặc 'that' thay thế cho danh từ chỉ người 'people' làm chủ ngữ trong mệnh đề quan hệ." },
                        { id: 3, text: "They have two grown children, both of ______ live abroad.", answer: "whom", type: 'fill_blank', explanation: "Dùng 'whom' sau giới từ 'of' để thay thế cho danh từ chỉ người 'children'." },
                        { id: 4, text: "The woman ______ bike was stolen went to the police station.", answer: "whose", type: 'fill_blank', explanation: "Dùng 'whose' để chỉ sở hữu: 'whose bike' = cái xe đạp CỦA người phụ nữ đó." },
                        { id: 5, text: "Tom travelled to a mountain ______ is near the mountainous and remote town.", answer: "which/that", type: 'fill_blank', explanation: "Dùng 'which' hoặc 'that' thay thế cho danh từ chỉ vật 'mountain' làm chủ ngữ." },
                        { id: 6, text: "I met a man with ______ I used to work.", answer: "whom", type: 'fill_blank', explanation: "Dùng 'whom' sau giới từ 'with' để thay thế cho danh từ chỉ người 'man'." },
                        { id: 7, text: "What is the name of the boy ______ lent Lisa the money?", answer: "who/that", type: 'fill_blank', explanation: "Dùng 'who' hoặc 'that' làm chủ ngữ thay cho danh từ chỉ người 'boy'." },
                        { id: 8, text: "Cohen, ______ short film won awards, was chosen to direct the movie.", answer: "whose", type: 'fill_blank', explanation: "Dùng 'whose' để chỉ sở hữu: bộ phim ngắn CỦA Cohen." },
                        { id: 9, text: "The house ______ was completed in 1856 was famous for its huge marble staircase.", answer: "which/that", type: 'fill_blank', explanation: "Dùng 'which/that' làm chủ ngữ thay cho danh từ chỉ vật 'house'." },
                        { id: 10, text: "Anyone ______ is interested in the job must apply before next Monday.", answer: "who/that", type: 'fill_blank', explanation: "Dùng 'who/that' thay cho đại từ bất định 'anyone'." },
                        { id: 11, text: "One of the boys kept laughing, ______ annoyed Jane intensely.", answer: "which", type: 'fill_blank', explanation: "Dùng 'which' để thay thế cho cả mệnh đề đứng trước nó ('One of the boys kept laughing')." },
                        { id: 12, text: "Do you know the people ______ live over the road?", answer: "who/that", type: 'fill_blank', explanation: "Dùng 'who/that' thay cho danh từ chỉ người 'people' làm chủ ngữ." },
                        { id: 13, text: "She had three lovers, none of ______ knew about the others.", answer: "whom", type: 'fill_blank', explanation: "Dùng 'whom' sau giới từ 'of' để thay thế cho danh từ chỉ người 'lovers'." },
                        { id: 14, text: "Alison Jones and her husband David, ______ live in Hartlepool, are celebrating their golden wedding anniversary.", answer: "who", type: 'fill_blank', explanation: "Dùng 'who' thay cho danh từ chỉ người (Alison & David) trong mệnh đề quan hệ KHÔNG xác định (có dấu phẩy)." },
                        { id: 15, text: "I saw her and her dog ______ were walking in the park this morning.", answer: "that", type: 'fill_blank', explanation: "Khi tiền ngữ bao gồm cả người ('her') và vật ('dog'), ta bắt buộc dùng 'that'." },
                        { id: 16, text: "Jurors, ______ identities will be kept secret, will be paid $40 a day.", answer: "whose", type: 'fill_blank', explanation: "Dùng 'whose' để chỉ sở hữu: danh tính CỦA các bồi thẩm đoàn." },
                        { id: 17, text: "Did you see the letter ______ came today?", answer: "which/that", type: 'fill_blank', explanation: "Dùng 'which/that' làm chủ ngữ thay cho danh từ chỉ vật 'letter'." },
                        { id: 18, text: "The author ______ you criticized in your review has written a reply.", answer: "whom/who/that", type: 'fill_blank', explanation: "Làm tân ngữ thay thế cho danh từ chỉ người 'author'." },
                        { id: 19, text: "The Kingfisher group, ______ name was changed from Woolworths earlier this year, includes about 720 high street shops.", answer: "whose", type: 'fill_blank', explanation: "Dùng 'whose' chỉ sở hữu: tên CỦA tập đoàn Kingfisher." },
                        { id: 20, text: "He was very contemptuous of popular writers, ______ he described as having no talent.", answer: "whom", type: 'fill_blank', explanation: "Làm tân ngữ thay thế cho danh từ chỉ người 'writers' trong mệnh đề quan hệ không xác định." },
                        { id: 21, text: "We're having a small drink party for one of our colleagues, ______ is leaving next week.", answer: "who", type: 'fill_blank' },
                        { id: 22, text: "Tell me the reason ______ you were absent from class yesterday.", answer: "why", type: 'fill_blank' },
                        { id: 23, text: "She lived in Rome for a couple of years, ______ she taught English.", answer: "where", type: 'fill_blank' },
                        { id: 24, text: "Bradford, ______ Bren comes from, has a lot of good curry restaurants.", answer: "where", type: 'fill_blank' },
                        { id: 25, text: "That is the place ______ we visited last year.", answer: "which/that", type: 'fill_blank' },
                        { id: 26, text: "This is the school assembly ______ all pupils are expected to attend.", answer: "which/that", type: 'fill_blank' },
                        { id: 27, text: "The Wimbledon men's final was the best game of tennis ______ I've ever seen.", answer: "that", type: 'fill_blank' },
                        { id: 28, text: "She blamed herself for everything ______ had happened.", answer: "that", type: 'fill_blank' },
                        { id: 29, text: "I know a restaurant ______ the food is excellent.", answer: "where", type: 'fill_blank' },
                        { id: 30, text: "There isn't a day ______ I don't feel rushed off my feet.", answer: "when", type: 'fill_blank' }
                    ]
                }
            ]
        },
        {
            id: 'relative-ex-3-1',
            title: 'BÀI TẬP 3.1: KẾT HỢP CÂU (Sentence Combination) - Part 1',
            category: 'Relative Clauses',
            sections: [
                {
                    title: 'Exercise 3.1: Combine each pair of sentences using a relative pronoun or relative adverb',
                    subtitle: 'Kết hợp các cặp câu sử dụng đại từ/trạng từ quan hệ',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "My parents spent their summer holiday in Scotland last month. Scotland is in the north of Great Britain.\n=> Last year my parents ______", answer: "Last year my parents spent their summer holiday in Scotland, which is in the north of Great Britain", isExample: true, type: 'fill_blank', explanation: "Sử dụng 'which' để bổ sung thông tin cho 'Scotland'. Vì 'Scotland' là danh từ riêng, ta dùng mệnh đề quan hệ không xác định (có dấu phẩy)." },
                        { id: 2, text: "The man used to be a worker. He is sitting in an armchair.\n=> The man ______", answer: "The man who/that is sitting in an armchair used to be a worker", type: 'fill_blank', explanation: "Dùng 'who' thay cho 'The man' làm chủ ngữ." },
                        { id: 3, text: "I talked to the girl. Her car was broken down in front of the shop yesterday.\n=> I talked to the girl ______", answer: "I talked to the girl whose car was broken down in front of the shop yesterday", type: 'fill_blank', explanation: "Dùng 'whose' thay cho tính từ sở hữu 'Her'." },
                        { id: 4, text: "I've just read a book. It was called \"Gone with The Wind\".\n=> I've just read ______", answer: "I've just read a book which/that was called \"Gone with The Wind\"", type: 'fill_blank', explanation: "Dùng 'which' hoặc 'that' thay cho 'a book'." },
                        { id: 5, text: "People live in Japan. They are called Japanese.\n=> The people ______", answer: "The people who/that live in Japan are called Japanese", type: 'fill_blank', explanation: "Dùng 'who/that' thay cho 'People' làm chủ ngữ cho mệnh đề quan hệ xác định." },
                        { id: 6, text: "Sarah thought the man was her buddy. He was walking down the street.\n=> Sarah thought ______", answer: "Sarah thought the man who/that was walking down the street was her buddy", type: 'fill_blank' },
                        { id: 7, text: "Our homemade cakes are made from selected raw materials in our confectionery by master hand. They are served at the royal wedding.\n=> Our homemade cakes, ______", answer: "Our homemade cakes, which are served at the royal wedding, are made from selected raw materials in our confectionery by master hand", type: 'fill_blank' },
                        { id: 8, text: "Laura first went to Hanoi. Hanoi is the capital of Vietnam.\n=> Laura ______", answer: "Laura first went to Hanoi, which is the capital of Vietnam", type: 'fill_blank' },
                        { id: 9, text: "Sheila is one of my best friends. I have known her for a very long time.\n=> Sheila, ______", answer: "Sheila, whom I have known for a very long time, is one of my best friends", type: 'fill_blank' },
                        { id: 10, text: "The jungle is full of strange and unusual animals. The tribe are living in the jungle.\n=> The jungle ______", answer: "The jungle where the tribe are living is full of strange and unusual animals", type: 'fill_blank' },
                        { id: 11, text: "Mr Parker was interested in my project. I spoke to him on the phone yesterday.\n=> Mr Parker, ______", answer: "Mr Parker, whom I spoke to on the phone yesterday, was interested in my project", type: 'fill_blank' },
                        { id: 12, text: "The woman the Minister of Agriculture. She is making a speech.\n=> The woman ______", answer: "The woman who is making a speech is the Minister of Agriculture", type: 'fill_blank' },
                        { id: 13, text: "Mary was given a lot of information. Most of the information was completely inaccurate.\n=> Mary ______", answer: "Mary was given a lot of information, most of which was completely inaccurate", type: 'fill_blank' },
                        { id: 14, text: "Volleyball is very good for health. It is a popular sport.\n=> Volleyball, ______", answer: "Volleyball, which is a popular sport, is very good for health", type: 'fill_blank' },
                        { id: 15, text: "There were a lot of people at her birthday party. She had met only a few of these people before.\n=> There were a lot of people ______", answer: "There were a lot of people at her birthday party, only a few of whom she had met before", type: 'fill_blank' },
                        { id: 16, text: "The mountain is the highest mountain in the world. It is called Everest.\n=> The mountain, ______", answer: "The mountain, which is called Everest, is the highest mountain in the world", type: 'fill_blank' },
                        { id: 17, text: "Michiko has gone through several earthquakes. He has lived in Japan for 10 years.\n=> Michiko, ______", answer: "Michiko, who has lived in Japan for 10 years, has gone through several earthquakes", type: 'fill_blank' },
                        { id: 18, text: "Here is the assignment. You must finish it before going to the class.\n=> Here is the ______", answer: "Here is the assignment which/that you must finish before going to the class", type: 'fill_blank' }
                    ]
                }
            ]
        },
        {
            id: 'relative-ex-3-2',
            title: 'BÀI TẬP 3.2: KẾT HỢP CÂU (Sentence Combination) - Part 2',
            category: 'Relative Clauses',
            sections: [
                {
                    title: 'Exercise 3.2: Combine each pair of sentences using a relative pronoun or relative adverb',
                    subtitle: 'Kết hợp các cặp câu sử dụng đại từ/trạng từ quan hệ (tiếp theo)',
                    type: 'exercise',
                    questions: [
                        { id: 19, text: "She has come up with some amazing ideas. We can discuss them at the meeting.\n=> She has come up with ______", answer: "She has come up with some amazing ideas which/that we can discuss at the meeting", isExample: true, type: 'fill_blank' },
                        { id: 20, text: "The university guarantees accommodation in halls of residence. The freshmen can live there.\n=> The university ______", answer: "The university guarantees accommodation in halls of residence where the freshmen can live", type: 'fill_blank' },
                        { id: 21, text: "A boy was injured in the accident. He is now in the hospital.\n=> The boy ______", answer: "The boy who/that was injured in the accident is now in the hospital", type: 'fill_blank' },
                        { id: 22, text: "There were some good programmes on the radio. None of the programmes I listened to.\n=> There were some good ______", answer: "There were some good programmes on the radio, none of which I listened to", type: 'fill_blank' },
                        { id: 23, text: "The package reached me this morning. My father sent it yesterday.\n=> The package ______", answer: "The package which/that my father sent yesterday reached me this morning", type: 'fill_blank' },
                        { id: 24, text: "Our school has a good laboratory. The students practice chemistry in this laboratory.\n=> Our school has ______", answer: "Our school has a good laboratory where the students practice chemistry", type: 'fill_blank' },
                        { id: 25, text: "My sister is thinking of opening an eating-house. She is an excellent cook.\n=> My sister, ______", answer: "My sister, who is an excellent cook, is thinking of opening an eating-house", type: 'fill_blank' },
                        { id: 26, text: "One reason was that the interview times were too short. The panel could not decide who was the best person for the job for that reason.\n=> One reason ______", answer: "One reason why the panel could not decide who was the best person for the job was that the interview times were too short", type: 'fill_blank' },
                        { id: 27, text: "The parcel arrived in the post at 11 am. I was still at work then.\n=> The parcel ______", answer: "The parcel arrived in the post at 11 am when I was still at work", type: 'fill_blank' },
                        { id: 28, text: "Students should get involved in environmental groups on campus. They are concerned with the environment.\n=> Students ______", answer: "Students who are concerned with the environment should get involved in environmental groups on campus", type: 'fill_blank' },
                        { id: 29, text: "The girl solved the algebra problem. She was fully praised by the teacher.\n=> The girl ______", answer: "The girl who/that solved the algebra problem was fully praised by the teacher", type: 'fill_blank' },
                        { id: 30, text: "Jackson made no such mistake in the 1000 m. He had been disqualified from the men's 200m final after a false start.\n=> Jackson, ______", answer: "Jackson, who had been disqualified from the men's 200m final after a false start, made no such mistake in the 1000 m", type: 'fill_blank' },
                        { id: 31, text: "We drove past my old school. It is celebrating its 100th anniversary this year.\n=> We drove ______", answer: "We drove past my old school, which is celebrating its 100th anniversary this year", type: 'fill_blank' },
                        { id: 32, text: "Kate has gone to work in Australia. I used to share a house with his sister.\n=> Kate ______", answer: "Kate, whose sister I used to share a house with, has gone to work in Australia", type: 'fill_blank' },
                        { id: 33, text: "Last week we visited the school. We went to school together when we were in Atlanta.\n=> Last week ______", answer: "Last week we visited the school where we went to school together when we were in Atlanta", type: 'fill_blank' },
                        { id: 34, text: "The hotel has been demolished. We spent our honeymoon there.\n=> The hotel ______", answer: "The hotel where we spent our honeymoon has been demolished", type: 'fill_blank' },
                        { id: 35, text: "I still remember the day. My mother took me to school for the first time on that day.\n=> I still ______", answer: "I still remember the day when my mother took me to school for the first time", type: 'fill_blank' }
                    ]
                }
            ]
        },
        {
            id: 'relative-ex-4',
            title: 'BÀI TẬP 4: GIỚI TỪ + WHOM/WHICH',
            category: 'Relative Clauses',
            sections: [
                {
                    title: 'Exercise 4: Combine the following sentences, using preposition + whom or which',
                    subtitle: 'Kết hợp câu sử dụng giới từ + whom/which',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "The lady gave me good advice. I spoke to her an hour ago.\n=> The lady ______", answer: "The lady to whom I spoke an hour ago gave me good advice", isExample: true, type: 'fill_blank', explanation: "Đưa giới từ 'to' lên trước đại từ quan hệ 'whom' (thay cho 'her'). Không dùng 'to who' hay 'to that'." },
                        { id: 2, text: "I'll give you an address. You should write to it.\n=> I'll give ______", answer: "I'll give you an address to which you should write", type: 'fill_blank', explanation: "Đưa giới từ 'to' lên trước 'which' (thay cho 'it')." },
                        { id: 3, text: "The picture is beautiful. She was looking at it.\n=> The picture ______", answer: "The picture at which she was looking is beautiful", type: 'fill_blank', explanation: "Đưa giới từ 'at' lên trước 'which'." },
                        { id: 4, text: "The movie is fantastic. They are talking about it.\n=> The movie ______", answer: "The movie about which they are talking is fantastic", type: 'fill_blank', explanation: "Đưa giới từ 'about' lên trước 'which'." },
                        { id: 5, text: "The song was interesting. We listened to it last night.\n=> The song ______", answer: "The song to which we listened last night was interesting", type: 'fill_blank', explanation: "Đưa giới từ 'to' lên trước 'which'." },
                        { id: 6, text: "The man was very kind. I talked to him yesterday.\n=> The man ______", answer: "The man to whom I talked yesterday was very kind", type: 'fill_blank' },
                        { id: 7, text: "The man works in the hospital. I told you about him.\n=> The man ______", answer: "The man about whom I told you works in the hospital", type: 'fill_blank' },
                        { id: 8, text: "Who was that boy? You were with him this morning.\n=> Who was ______", answer: "Who was that boy with whom you were this morning?", type: 'fill_blank' },
                        { id: 9, text: "The man sat next to me on the bus this morning. I got the news from that man.\n=> The man ______", answer: "The man from whom I got the news sat next to me on the bus this morning", type: 'fill_blank' },
                        { id: 10, text: "The train was full of passengers and goods. We traveled on it.\n=> The train ______", answer: "The train on which we traveled was full of passengers and goods", type: 'fill_blank' }
                    ]
                }
            ]
        },
        {
            id: 'relative-ex-5',
            title: 'BÀI TẬP 5: RÚT GỌN MỆNH ĐỀ (Present Participle)',
            category: 'Relative Clauses',
            sections: [
                {
                    title: 'Exercise 5: Rewrite the following sentences, using a present participle phrase',
                    subtitle: 'Viết lại câu sử dụng cụm hiện tại phân từ (V-ing)',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "That man who lives on the next floor looks very lonely.", answer: "That man living on the next floor looks very lonely", isExample: true, type: 'fill_blank', explanation: "Rút gọn mệnh đề quan hệ chủ động: Bỏ đại từ quan hệ 'who', chuyển động từ chính sang dạng V-ing ('lives' -> 'living')." },
                        { id: 2, text: "The person who interviewed me asked some very difficult questions.", answer: "The person interviewing me asked some very difficult questions", type: 'fill_blank', explanation: "Rút gọn mệnh đề quan hệ chủ động: 'who interviewed' -> 'interviewing'." },
                        { id: 3, text: "I saw some people and some animals that were working on the farm.", answer: "I saw some people and some animals working on the farm", type: 'fill_blank', explanation: "Rút gọn mệnh đề quan hệ tiếp diễn: Bỏ 'that were', giữ lại 'working'." },
                        { id: 4, text: "The man who answered the phone told me you were away.", answer: "The man answering the phone told me you were away", type: 'fill_blank', explanation: "Rút gọn mệnh đề quan hệ chủ động: 'who answered' -> 'answering'." },
                        { id: 5, text: "Over two hundred people who attended the funeral expressed their grief at her son's death.", answer: "Over two hundred people attending the funeral expressed their grief at her son's death", type: 'fill_blank', explanation: "Rút gọn mệnh đề quan hệ chủ động: 'who attended' -> 'attending'." },
                        { id: 6, text: "The person who did it was never caught.", answer: "The person doing it was never caught", type: 'fill_blank' },
                        { id: 7, text: "Do you like the person who sits next to you?", answer: "Do you like the person sitting next to you?", type: 'fill_blank' },
                        { id: 8, text: "More and more people are rejecting food which doesn't come from local producers.", answer: "More and more people are rejecting food not coming from local producers", type: 'fill_blank' },
                        { id: 9, text: "The boy who is playing the piano is Ben.", answer: "The boy playing the piano is Ben", type: 'fill_blank' },
                        { id: 10, text: "The people who are waiting for the bus in the rain are getting wet.", answer: "The people waiting for the bus in the rain are getting wet", type: 'fill_blank' }
                    ]
                }
            ]
        },
        {
            id: 'relative-ex-6',
            title: 'BÀI TẬP 6: RÚT GỌN MỆNH ĐỀ (Past Participle)',
            category: 'Relative Clauses',
            sections: [
                {
                    title: 'Exercise 6: Rewrite the following sentences, using a past participial phrase',
                    subtitle: 'Viết lại câu sử dụng cụm quá khứ phân từ (V-ed/V3)',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "They work in the hospital which was sponsored by the government.", answer: "They work in the hospital sponsored by the government", isExample: true, type: 'fill_blank', explanation: "Rút gọn mệnh đề quan hệ bị động: Bỏ đại từ quan hệ và trợ động từ (which was), giữ lại quá khứ phân từ (sponsored)." },
                        { id: 2, text: "The photographs which were published in the newspaper were extraordinary.", answer: "The photographs published in the newspaper were extraordinary", type: 'fill_blank', explanation: "Rút gọn mệnh đề quan hệ bị động: 'which were published' -> 'published'." },
                        { id: 3, text: "They live in a house that was built in 1890.", answer: "They live in a house built in 1890", type: 'fill_blank', explanation: "Rút gọn mệnh đề quan hệ bị động: 'that was built' -> 'built'." },
                        { id: 4, text: "I came from a city that is located in the southern part of the country.", answer: "I came from a city located in the southern part of the country", type: 'fill_blank', explanation: "Rút gọn mệnh đề quan hệ bị động: 'that is located' -> 'located'." },
                        { id: 5, text: "The ideas which are presented in that book are interesting.", answer: "The ideas presented in that book are interesting", type: 'fill_blank', explanation: "Rút gọn mệnh đề quan hệ bị động: 'which are presented' -> 'presented'." },
                        { id: 6, text: "The sport games which were held in India in 1951 were the first Asian Games.", answer: "The sport games held in India in 1951 were the first Asian Games", type: 'fill_blank' },
                        { id: 7, text: "The girl who was injured in the accident is in the hospital now.", answer: "The girl injured in the accident is in the hospital now", type: 'fill_blank' },
                        { id: 8, text: "I am writing this letter in response to the vacancy which is advertised on the newspaper.", answer: "I am writing this letter in response to the vacancy advertised on the newspaper", type: 'fill_blank' },
                        { id: 9, text: "The house which was destroyed completely in the fire has now been rebuilt.", answer: "The house destroyed completely in the fire has now been rebuilt", type: 'fill_blank' },
                        { id: 10, text: "Our company is applying to these methods of working which were established in the last century.", answer: "Our company is applying to these methods of working established in the last century", type: 'fill_blank' }
                    ]
                }
            ]
        },
        {
            id: 'relative-ex-7',
            title: 'BÀI TẬP 7: RÚT GỌN MỆNH ĐỀ (To-infinitive)',
            category: 'Relative Clauses',
            sections: [
                {
                    title: 'Exercise 7: Rewrite the following sentences, using to-infinitive',
                    subtitle: 'Viết lại câu sử dụng to-infinitive (sau the first, the last, the only...)',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "Yuri Gagarin was the first man who flew into space.\n=> ______", answer: "Yuri Gagarin was the first man to fly into space", isExample: true, type: 'fill_blank', explanation: "Rút gọn mệnh đề quan hệ bằng 'To-infinitive': Khi danh từ đứng trước có các từ số thứ tự (the first, the second...) hoặc 'the only, the last'." },
                        { id: 2, text: "The only thing that we have to remember is to obey our parents.\n=> ______", answer: "The only thing to remember is to obey our parents", type: 'fill_blank', explanation: "Rút gọn bằng 'To-infinitive' do có cụm 'the only thing'." },
                        { id: 3, text: "John was the last man who reached the top of the mountain.\n=> ______", answer: "John was the last man to reach the top of the mountain", type: 'fill_blank', explanation: "Rút gọn bằng 'To-infinitive' do có cụm 'the last man'." },
                        { id: 4, text: "My father is the only man who I can count on.\n=> ______", answer: "My father is the only man to count on", type: 'fill_blank', explanation: "Rút gọn bằng 'To-infinitive' do có cụm 'the only man'." },
                        { id: 5, text: "The last person who leaves the room must turn off the light.\n=> ______", answer: "The last person to leave the room must turn off the light", type: 'fill_blank', explanation: "Rút gọn bằng 'To-infinitive' do có cụm 'the last person'." },
                        { id: 6, text: "This is the second person who was killed in that way.\n=> ______", answer: "This is the second person to be killed in that way", type: 'fill_blank' },
                        { id: 7, text: "The first person who catches the ball will be the winner.\n=> ______", answer: "The first person to catch the ball will be the winner", type: 'fill_blank' },
                        { id: 8, text: "Who was the last person who saw the young man alive?\n=> ______", answer: "Who was the last person to see the young man alive?", type: 'fill_blank' },
                        { id: 9, text: "Sai Gon Times was the only newspaper which appeared that day.\n=> ______", answer: "Sai Gon Times was the only newspaper to appear that day", type: 'fill_blank' },
                        { id: 10, text: "Marie Curie was the first woman who was awarded the Nobel Prize in chemistry.\n=> ______", answer: "Marie Curie was the first woman to be awarded the Nobel Prize in chemistry", type: 'fill_blank' }
                    ]
                }
            ]
        },
        {
            id: 'relative-ex-8',
            title: 'BÀI TẬP 8: BÀI TẬP TỔNG HỢP',
            category: 'Relative Clauses',
            sections: [
                {
                    title: 'Exercise 8: Rewrite the following sentences as required',
                    subtitle: 'Viết lại câu theo yêu cầu (tổng hợp các dạng)',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "My brother has a pen friend. He has been writing to him for 20 years. (whom)\n=> ______", answer: "My brother has a pen friend to whom he has been writing for 20 years", isExample: true, type: 'fill_blank' },
                        { id: 2, text: "Sydney is the largest Australian city. It is not the capital of Australia. (reducing the relative clauses)\n=> ______", answer: "Sydney, the largest Australian city, is not the capital of Australia", type: 'fill_blank' },
                        { id: 3, text: "John works with that other chap. I can't remember his name. (whose)\n=> ______", answer: "John works with that other chap whose name I can't remember", type: 'fill_blank' },
                        { id: 4, text: "The man who jogs regularly in the Botanic Gardens is swimming in his private pool. (reducing the relative clauses)\n=> ______", answer: "The man jogging regularly in the Botanic Gardens is swimming in his private pool", type: 'fill_blank' },
                        { id: 5, text: "The shark which was caught at sea weighs two hundred kilos. (reducing the relative clauses)\n=> ______", answer: "The shark caught at sea weighs two hundred kilos", type: 'fill_blank' },
                        { id: 6, text: "She was the fourth woman who finished the race. (reducing the relative clauses)\n=> ______", answer: "She was the fourth woman to finish the race", type: 'fill_blank' },
                        { id: 7, text: "The student wrote an outstanding paper. He was awarded a prize for it. (using preposition + whom/which)\n=> ______", answer: "The student wrote an outstanding paper for which he was awarded a prize", type: 'fill_blank' },
                        { id: 8, text: "You should put the money in a savings account. It will earn interest in the savings account. (where)\n=> ______", answer: "You should put the money in a savings account where it will earn interest", type: 'fill_blank' },
                        { id: 9, text: "The car belongs to Mr Pike. Its brake is being repaired. (whose)\n=> ______", answer: "The car whose brake is being repaired belongs to Mr Pike", type: 'fill_blank' },
                        { id: 10, text: "He collects the things which were thrown away everywhere. (reducing the relative clauses)\n=> ______", answer: "He collects the things thrown away everywhere", type: 'fill_blank' },
                        { id: 11, text: "We found the fifth person that survived after the earthquake. (reducing the relative clauses)\n=> ______", answer: "We found the fifth person to survive after the earthquake", type: 'fill_blank' },
                        { id: 12, text: "There was a tree which was blown down in the storm last night. (reducing the relative clauses)\n=> ______", answer: "There was a tree blown down in the storm last night", type: 'fill_blank' },
                        { id: 13, text: "The children who attend that school receive a good education. (reducing the relative clauses)\n=> ______", answer: "The children attending that school receive a good education", type: 'fill_blank' },
                        { id: 14, text: "I must thank the man. I got the present from him. (using preposition + whom/which)\n=> ______", answer: "I must thank the man from whom I got the present", type: 'fill_blank' },
                        { id: 15, text: "It gives me a good chance to improve my Italian. It has become a little bit rusty. (which)\n=> ______", answer: "It gives me a good chance to improve my Italian, which has become a little bit rusty", type: 'fill_blank' }
                    ]
                }
            ]
        },
        {
            id: 'relative-ex-9-1',
            title: 'BÀI TẬP 9.1: TRẮC NGHIỆM (Multiple Choice) - Part 1',
            category: 'Relative Clauses',
            sections: [
                {
                    title: 'Exercise 9.1: Choose the best answer in the following questions',
                    subtitle: 'Chọn đáp án đúng nhất',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "She's one of the people ______ love to be the center of attention.", answer: "A", isExample: true, type: 'multiple_choice', options: ["who", "whom", "whose", "which"] },
                        { id: 2, text: "They meet in an old house, ______ basement has been converted into a chapel.", answer: "C", type: 'multiple_choice', options: ["whose", "whom", "whose", "which"] },
                        { id: 3, text: "There are lots of things ______ I need to buy before the trip.", answer: "A", type: 'multiple_choice', options: ["that", "whose", "which", "whom"] },
                        { id: 4, text: "I am writing in connection with the volunteer opportunities ______ on 10 November.", answer: "D", type: 'multiple_choice', options: ["appeared", "which appearing", "to appear", "appeared"] },
                        { id: 5, text: "Fraud detectives are investigating the company, ______ there are senior executives have already been arrested.", answer: "A", type: 'multiple_choice', options: ["whom", "whose", "that", "which"] },
                        { id: 6, text: "The people ______ called yesterday want to buy their house.", answer: "D", type: 'multiple_choice', options: ["whose", "whom", "which", "who"] },
                        { id: 7, text: "Isabel, ______ brother he was, had heard the joke before.", answer: "A", type: 'multiple_choice', options: ["whose", "whom", "which", "who"] },
                        { id: 8, text: "Do you remember that nice Mr Hoskins ______ came to dinner?", answer: "D", type: 'multiple_choice', options: ["whom", "whose", "which", "who"] },
                        { id: 9, text: "His best movie, ______ won several awards, was about the life of Gandhi.", answer: "C", type: 'multiple_choice', options: ["whose", "whom", "which", "who"] },
                        { id: 10, text: "The child ______ was playing outside the park was hit by a ball.", answer: "D", type: 'multiple_choice', options: ["whose", "whom", "which", "who"] },
                        { id: 11, text: "It was a crisis for ______ she was totally unprepared.", answer: "B", type: 'multiple_choice', options: ["whose", "which", "who", "whom"] },
                        { id: 12, text: "The Kingfisher group, ______ name was changed from Woolworths earlier this year, includes about 720 high street shops.", answer: "B", type: 'multiple_choice', options: ["whom", "whose", "which", "that"] },
                        { id: 13, text: "We don't know the person ______ donated this money.", answer: "A", type: 'multiple_choice', options: ["that", "whom", "whose", "who"] },
                        { id: 14, text: "We drove past my old school, ______ is celebrating its 100th anniversary this year.", answer: "D", type: 'multiple_choice', options: ["where", "whom", "whose", "which"] },
                        { id: 15, text: "He was the first director of the National Science Foundation, and he funded science research with an annual budget ______ grew to 500 million dollars.", answer: "C", type: 'multiple_choice', options: ["whom", "whose", "that", "why"] },
                        { id: 16, text: "Modern office buildings have false floors, under ______ computer and phone wires can be laid.", answer: "C", type: 'multiple_choice', options: ["why", "where", "which", "whom"] },
                        { id: 17, text: "Super Star's video tapes have all been packed up, waiting for the day ______ he finds a new location.", answer: "C", type: 'multiple_choice', options: ["whose", "why", "when", "where"] },
                        { id: 18, text: "The name originated from the days ______ this house belonged to the local policeman.", answer: "C", type: 'multiple_choice', options: ["whom", "why", "which", "whom"] },
                        { id: 19, text: "The hall ______ you're giving your talk has a really good sound system.", answer: "C", type: 'multiple_choice', options: ["whom", "whose", "where", "which"] },
                        { id: 20, text: "Jackson is the most good-looking boy ______ to this school.", answer: "A", type: 'multiple_choice', options: ["to come", "coming", "has come", "comes"] },
                        { id: 21, text: "We stood on the bridge ______ the two small towns of the London.", answer: "C", type: 'multiple_choice', options: ["connected", "was connecting", "connecting", "connects"] },
                        { id: 22, text: "The woman ______ in the hall expected to make a phone call.", answer: "A", type: 'multiple_choice', options: ["waiting", "was waiting", "had been waiting", "waited"] },
                        { id: 23, text: "Khrushchev may have been perspicacious enough to imagine the day ______ his turn would come and he would become Special Pensioner Khrushchev.", answer: "A", type: 'multiple_choice', options: ["when", "where", "which", "why"] },
                        { id: 24, text: "The conference ______ by non-governmental organizations was about globalization.", answer: "C", type: 'multiple_choice', options: ["plans", "planning", "planned", "is planning"] },
                        { id: 25, text: "Peter is the youngest person to ______ part in the race.", answer: "A", type: 'multiple_choice', options: ["take", "taken", "takes", "taking"] }
                    ]
                }
            ]
        },
        {
            id: 'relative-ex-9-2',
            title: 'BÀI TẬP 9.2: TRẮC NGHIỆM (Multiple Choice) - Part 2',
            category: 'Relative Clauses',
            sections: [
                {
                    title: 'Exercise 9.2: Choose the best answer in the following questions',
                    subtitle: 'Chọn đáp án đúng nhất (tiếp theo)',
                    type: 'exercise',
                    questions: [
                        { id: 26, text: "The books ______ by William Shakespeare are interesting.", answer: "C", isExample: true, type: 'multiple_choice', options: ["writes", "writing", "written", "wrote"] },
                        { id: 27, text: "He was the only person to ______ there at the time.", answer: "B", type: 'multiple_choice', options: ["have been living", "live", "have lived", "living"] },
                        { id: 28, text: "The term track and field refers to athletic events ______ include foot races and jumping and throwing events.", answer: "B", type: 'multiple_choice', options: ["of which", "that", "in which", "where"] },
                        { id: 29, text: "That was the week ______ we booked our holiday.", answer: "B", type: 'multiple_choice', options: ["why", "when", "where", "which"] },
                        { id: 30, text: "The circus fruit ______ has been exposed to cool temperatures during maturation is sweeter and more tender than those that have not.", answer: "C", type: 'multiple_choice', options: ["whom", "whose", "which", "where"] },
                        { id: 31, text: "There are times ______ I wonder why I do this job.", answer: "A", type: 'multiple_choice', options: ["when", "where", "why", "which"] },
                        { id: 32, text: "San Francisco, America's romantic city, has always been a haven for the artists and writers ______ have left at least part of their hearts there.", answer: "A", type: 'multiple_choice', options: ["who", "whom", "whose", "why"] },
                        { id: 33, text: "The educated man is the man ______ expression is educated.", answer: "B", type: 'multiple_choice', options: ["whom", "whose", "when", "why"] },
                        { id: 34, text: "Canada, ______ I spent most of my childhood, is a country of vast plains and heavy forested areas.", answer: "A", type: 'multiple_choice', options: ["in which", "when", "for which", "whom"] },
                        { id: 35, text: "The title of the book is the name of the community ______ the author grew up.", answer: "B", type: 'multiple_choice', options: ["when", "in which", "at which", "why"] },
                        { id: 36, text: "Mistletoe, ______ is believed to have magic powers, is traditionally hung over doorways during the Christmas season.", answer: "C", type: 'multiple_choice', options: ["that", "whom", "which", "where"] },
                        { id: 37, text: "I have never forgot the beloved school ______ I studied in.", answer: "A", type: 'multiple_choice', options: ["which", "when", "whom", "whose"] },
                        { id: 38, text: "The safe ______ we put our jewelry and other valuables was stolen by a group of thieves last night.", answer: "B", type: 'multiple_choice', options: ["whose", "in which", "whom", "why"] },
                        { id: 39, text: "She was at the JW Marriott Hanoi ______ I was telling you.", answer: "D", type: 'multiple_choice', options: ["on which", "to which", "at which", "about which"] },
                        { id: 40, text: "Martin Stevenson, ______ children I have been looking after since I started the university in London, is my history professor.", answer: "A", type: 'multiple_choice', options: ["whose", "which", "that", "whom"] },
                        { id: 41, text: "The day ______ I'm forced to give up my dream is a sad day for me.", answer: "B", type: 'multiple_choice', options: ["where", "on which", "at which", "why"] },
                        { id: 42, text: "The extent ______ the stock market is affected by the day-to-day pronouncements of the President of the United States is astonishing.", answer: "C", type: 'multiple_choice', options: ["of which", "where", "to which", "when"] },
                        { id: 43, text: "Jack was the handsome person ______ I was talking yesterday.", answer: "C", type: 'multiple_choice', options: ["on whom", "in whom", "with whom", "for whom"] },
                        { id: 44, text: "In many parts of the world, the grass ______ is called vetiver is known for its fragrant oil as well as its ability to prevent soil erosion.", answer: "B", type: 'multiple_choice', options: ["who", "which", "whose", "whom"] },
                        { id: 45, text: "David lives in the street ______ the houses are surrounded with lush lawns and green gardens.", answer: "D", type: 'multiple_choice', options: ["on which", "at which", "for which", "in which"] },
                        { id: 46, text: "The moment ______ I learned the results of the art competition was one of the worst times in my life.", answer: "A", type: 'multiple_choice', options: ["when", "why", "where", "which"] },
                        { id: 47, text: "The gorgeous picture ______ you are looking in the hall is very expensive.", answer: "B", type: 'multiple_choice', options: ["on which", "at which", "in which", "for which"] },
                        { id: 48, text: "He was the third man ______ in this way.", answer: "D", type: 'multiple_choice', options: ["killing", "was killed", "to have been killed", "to be killed"] },
                        { id: 49, text: "I have two sisters, both of ______ want to become an English teacher in the future.", answer: "A", type: 'multiple_choice', options: ["whom", "who", "which", "where"] },
                        { id: 50, text: "Dalat, ______ I paid a visit last summer vacation, is extremely magnificent.", answer: "C", type: 'multiple_choice', options: ["whose", "which", "where", "that"] }
                    ]
                }
            ]
        }
    ]
};




