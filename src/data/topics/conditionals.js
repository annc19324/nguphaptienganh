export const conditionalsTopic = {
    id: 'conditionals',
    title: 'CHUYÊN ĐỀ 8: CÂU ĐIỀU KIỆN (CONDITIONALS)',
    category: 'Conditionals',
    children: [
        {
            id: 'conditionals-theory',
            title: 'LÝ THUYẾT: CÂU ĐIỀU KIỆN',
            category: 'Conditionals',
            sections: [
                {
                    title: 'I. CẤU TRÚC CƠ BẢN VÀ ĐẢO NGỮ',
                    type: 'custom',
                    content: [
                        {
                            subtitle: '1. CÂU ĐIỀU KIỆN LOẠI 1 (Hiện tại thực)',
                            cases: [
                                { label: 'Cấu trúc', formula: 'If + S + V (hiện tại đơn) -> S + will/can/may/might/should/have to + V\n(Diễn tả sự việc có thể xảy ra ở hiện tại hoặc tương lai)' },
                                { label: 'Biến thể (Mệnh lệnh)', formula: 'If + S + V (hiện tại đơn) -> V/don\'t V + ... (Mệnh lệnh)' },
                                { label: 'Biến thể (Sự thật)', formula: 'If + S + V (hiện tại đơn) -> S + V (hiện tại đơn) (Sự thật hiển nhiên - Zero Conditional)' },
                                { label: 'Đảo ngữ', formula: 'Should + S + V(bare), S + will/can... + V' }
                            ]
                        },
                        {
                            subtitle: '2. CÂU ĐIỀU KIỆN LOẠI 2 (Hiện tại không thực)',
                            cases: [
                                { label: 'Cấu trúc', formula: 'If + S + V (quá khứ đơn) -> S + would/could/might + V\n(Diễn tả sự việc không có thật ở hiện tại. Động từ to be dùng WERE cho tất cả các ngôi)' },
                                { label: 'Đảo ngữ', formula: 'Were + S + (to + V), S + would/could... + V' }
                            ]
                        },
                        {
                            subtitle: '3. CÂU ĐIỀU KIỆN LOẠI 3 (Quá khứ không thực)',
                            cases: [
                                { label: 'Cấu trúc', formula: 'If + S + V (quá khứ hoàn thành) -> S + would/could/might + have + Vp2\n(Diễn tả sự việc không có thật trong quá khứ)' },
                                { label: 'Đảo ngữ', formula: 'Had + S + Vp2, S + would/could... + have + Vp2' },
                                { label: 'Lưu ý', formula: 'Without/But for + N = If it hadn\'t been for + N = Had it not been for + N' }
                            ]
                        },
                        {
                            subtitle: '4. CÂU ĐIỀU KIỆN HỖN HỢP (Mixed)',
                            cases: [
                                { label: 'Loại 3-2', formula: 'If + S + V (quá khứ hoàn thành) -> S + would/could + V\n(Giả thiết trái ngược quá khứ, kết quả trái ngược hiện tại)\nEg: If I had studied hard last night, I would be tired now.' },
                                { label: 'Loại 2-3', formula: 'If + S + V (quá khứ đơn) -> S + would/could/might + have + Vp2\n(Giả thiết trái ngược hiện tại, kết quả trái ngược quá khứ)\nEg: If I were you, I would have accepted that offer.' }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'conditionals-ex-1',
            title: 'BÀI TẬP 1: CÂU ĐIỀU KIỆN LOẠI 1',
            category: 'Conditionals',
            sections: [
                {
                    title: 'Exercise 1: Give the correct forms of the verbs (Type 1)',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "If you ______ (eat) an ice-cream, I ______ (have) a hot chocolate.", answer: "eat | will have", type: 'fill_gap', explanation: "Câu điều kiện loại 1: Diễn tả một khả năng có thể xảy ra ở hiện tại hoặc tương lai. Cấu trúc: If + S + V(hiện tại đơn), S + will + V(bare)." },
                        { id: 2, text: "If she ______ (need) a computer, her brother ______ (give) her his computer.", answer: "needs | will give", type: 'fill_gap', explanation: "Câu điều kiện loại 1. Mệnh đề If chia ở hiện tại đơn (she needs), mệnh đề chính chia ở tương lai đơn (will give)." },
                        { id: 3, text: "If we ______ (not have) time this afternoon, we ______ (meet) tomorrow.", answer: "don't have | will meet", type: 'fill_gap', explanation: "Câu điều kiện loại 1 phủ định ở mệnh đề If: 'don't have'. Mệnh đề chính: 'will meet'." },
                        { id: 4, text: "He ______ (talk) to her if you ______ (not want) to do it.", answer: "will talk | don't want", type: 'fill_gap', explanation: "Câu điều kiện loại 1. Lưu ý mệnh đề chính đứng trước: 'will talk', mệnh đề If đứng sau: 'if you don't want'." },
                        { id: 5, text: "You ______ (not win) the game if you ______ (not know) the rules.", answer: "won't win | don't know", type: 'fill_gap', explanation: "Câu điều kiện loại 1 dạng phủ định cả hai vế." },
                        { id: 6, text: "If you ______ (wash) the dishes, I ______ (cook) dinner tonight.", answer: "wash | will cook", type: 'fill_gap', explanation: "Câu điều kiện loại 1: Tình huống có thể xảy ra trong tương lai." },
                        { id: 7, text: "If my dad ______ (have) time next week, we ______ (paint) my room.", answer: "has | will paint", type: 'fill_gap', explanation: "Câu điều kiện loại 1: 'If + S + V(hiện tại đơn), S + will + V'." },
                        { id: 8, text: "You ______ (learn) a lot about American history if you ______ (visit) the exhibition this afternoon.", answer: "will learn | visit", type: 'fill_gap', explanation: "Câu điều kiện loại 1. Mệnh đề chính: 'will learn', mệnh đề If: 'visit'." },
                        { id: 9, text: "If the weather ______ (not be) too bad tomorrow, we ______ (play) golf.", answer: "isn't | will play", type: 'fill_gap', explanation: "Câu điều kiện loại 1 phủ định: 'isn't'." },
                        { id: 10, text: "We ______ (not get) there on time if we ______ (catch) the bus.", answer: "won't get | catch", type: 'fill_gap', explanation: "Câu điều kiện loại 1. Thực tế bắt xe bus có thể giúp đến kịp, hoặc bắt muộn thì không kịp." },
                        { id: 11, text: "If you ______ (pour) oil into water, it ______ (float) on the surface of the water.", answer: "pour | floats", type: 'fill_gap', explanation: "Câu điều kiện loại 0 (Zero Conditional): Diễn tả sự thật hiển nhiên. Cấu trúc: If + S + V(hiện tại), S + V(hiện tại)." },
                        { id: 12, text: "You ______ (have) any problems, ______ (call) me immediately.", answer: "have | call", type: 'fill_gap', explanation: "Câu điều kiện loại 1 dạng mệnh lệnh: 'If + S + V(hiện tại), V(bare)/Don't V...'." },
                        { id: 13, text: "If you ______ (not like), ______ (let) him know your feelings.", answer: "don't like | let", type: 'fill_gap', explanation: "Câu điều kiện loại 1 dạng mệnh lệnh. Mệnh đề If 'don't like', mệnh đề chính 'Let him know'." },
                        { id: 14, text: "If you ______ (heat) ice, it ______ (turn) to water.", answer: "heat | turns", type: 'fill_gap', explanation: "Câu điều kiện loại 0: Sự thật khoa học. Cả hai vế đều chia thì hiện tại đơn." },
                        { id: 15, text: "Unless she ______ (water) these trees, they ______ (die).", answer: "waters | will die", type: 'fill_gap', explanation: "Câu điều kiện loại 1 với 'Unless' (= If ... not): 'Nếu cô ấy không tưới cây, chúng sẽ chết'." }
                    ]
                }
            ]
        },
        {
            id: 'conditionals-ex-2',
            title: 'BÀI TẬP 2: CÂU ĐIỀU KIỆN LOẠI 2',
            category: 'Conditionals',
            sections: [
                {
                    title: 'Exercise 2: Give the correct forms of the verbs (Type 2)',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "If I ______ (have) more time, I ______ (learn) to play the guitar.", answer: "had | would learn", type: 'fill_gap', explanation: "Câu điều kiện loại 2: Diễn tả một giả thiết không có thật ở hiện tại. Cấu trúc: If + S + V(quá khứ đơn), S + would + V(bare)." },
                        { id: 2, text: "If she ______ (study) harder, she ______ (get) better marks.", answer: "studied | would get", type: 'fill_gap', explanation: "Câu điều kiện loại 2. Thực tế hiện tại cô ấy không học chăm chỉ." },
                        { id: 3, text: "If we ______ (know) more about history, we ______ (not be) afraid of the test.", answer: "knew | wouldn't be", type: 'fill_gap', explanation: "Câu điều kiện loại 2 dạng phủ định ở mệnh đề chính: 'wouldn't be'." },
                        { id: 4, text: "I ______ (go jogging) with Tom and Sue if they ______ (be) here now.", answer: "would go | were", type: 'fill_gap', explanation: "Câu điều kiện loại 2. Lưu ý 'were' dùng cho tất cả các ngôi trong mệnh đề If của câu điều kiện loại 2." },
                        { id: 5, text: "I ______ (buy) these shoes if they ______ (fit).", answer: "would buy | fit", type: 'fill_gap', explanation: "Câu điều kiện loại 2. Giả thiết trái ngược với thực tế là đôi giày không vừa." },
                        { id: 6, text: "If there ______ (be) no man in the world, I ______ (not marry) you.", answer: "were | wouldn't marry", type: 'fill_gap', explanation: "Câu điều kiện loại 2. Giả thiết không có thật ('nếu không có đàn ông')." },
                        { id: 7, text: "He ______ (be) rich, he ______ (support) his old-aged parents.", answer: "Were | would support", type: 'fill_gap', explanation: "Đảo ngữ câu điều kiện loại 2: 'Were + S + ..., S + would + V'." },
                        { id: 8, text: "If I ______ (be) you, I ______ (buy) a car and have a look around the country.", answer: "were | would buy", type: 'fill_gap', explanation: "Câu điều kiện loại 2 dùng để đưa ra lời khuyên ('If I were you')." },
                        { id: 9, text: "Thank goodness she isn't your wife. Just try to imagine our cooperation if she ______ (be).", answer: "were", type: 'fill_gap', explanation: "Câu điều kiện loại 2 (vế If rút gọn phía sau). '...if she were (your wife)'." },
                        { id: 10, text: "This city ______ (be) a better place to live if the level of pollution ______ (reduce).", answer: "would be | were reduced", type: 'fill_gap', explanation: "Câu điều kiện loại 2 bị động ở mệnh đề If: 'were reduced'." }
                    ]
                }
            ]
        },
        {
            id: 'conditionals-ex-3',
            title: 'BÀI TẬP 3: CÂU ĐIỀU KIỆN LOẠI 3',
            category: 'Conditionals',
            sections: [
                {
                    title: 'Exercise 3: Give the correct forms of the verbs (Type 3)',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "If the weather ______ (be) nice yesterday, they ______ (play) football.", answer: "had been | would have played", type: 'fill_gap', explanation: "Câu điều kiện loại 3: Diễn tả một giả thiết không có thật trong quá khứ. Cấu trúc: If + S + V(quá khứ hoàn thành), S + would have + V3/pp." },
                        { id: 2, text: "It was an awful meal. If we ______ (go) to a good restaurant, we ______ (have) a better dinner.", answer: "had gone | would have had", type: 'fill_gap', explanation: "Câu điều kiện loại 3. Thực tế trong quá khứ họ đã đi đến một nhà hàng không tốt." },
                        { id: 3, text: "If he had listened to me, he ______ (not fail) in the exam.", answer: "wouldn't have failed", type: 'fill_gap', explanation: "Câu điều kiện loại 3 dạng phủ định ở mệnh đề chính: 'wouldn't have + V3'." },
                        { id: 4, text: "But for the storm, we ______ (not be) late for the appointment.", answer: "wouldn't have been", type: 'fill_gap', explanation: "Cấu trúc 'But for + N' tương đương với 'If it hadn't been for + N' trong câu điều kiện loại 3." },
                        { id: 5, text: "The ambulance ______ (come) earlier, the victim ______ (not die).", answer: "Had ... come | would not have died", type: 'fill_gap', explanation: "Đảo ngữ câu điều kiện loại 3: Had + S + V3, S + would have + V3." },
                        { id: 6, text: "If it ______ (be) for your absence yesterday, you ______ (understand) the lesson today.", answer: "hadn't been | would understand", type: 'fill_gap', explanation: "Câu điều kiện hỗn hợp (Mixed): Giả thiết trái ngược quá khứ (hadn't been), kết quả trái ngược hiện tại (would understand)." },
                        { id: 7, text: "If the police ______ (come) earlier, the burglar ______ (arrest).", answer: "had come | would have been arrested", type: 'fill_gap', explanation: "Câu điều kiện loại 3. Mệnh đề chính chia bị động: 'would have been arrested'." },
                        { id: 8, text: "Without his parents' money, he ______ (not succeed).", answer: "wouldn't have succeeded", type: 'fill_gap', explanation: "Câu điều kiện loại 3 với 'Without' (= If it hadn't been for...)." },
                        { id: 9, text: "If you ______ (remember) to fill up before the journey, we wouldn't have lost half an hour...", answer: "had remembered", type: 'fill_gap', explanation: "Câu điều kiện loại 3. Mệnh đề If chia quá khứ hoàn thành." },
                        { id: 10, text: "If I ______ (accept) the offer, I ______ (not regret) now.", answer: "had accepted | wouldn't regret", type: 'fill_gap', explanation: "Câu điều kiện hỗn hợp: Giả thiết quá khứ (had accepted), kết quả hiện tại có từ 'now' (wouldn't regret)." },
                        { id: 11, text: "If he ______ (be) younger, he ______ (take) part in the last contest.", answer: "had been | would have taken", type: 'fill_gap', explanation: "Câu điều kiện loại 3: Giả thiết về tuổi tác trong quá khứ (had been younger)." },
                        { id: 12, text: "The accidents ______ (not happen) if the car in the front ______ (not stop) so suddenly.", answer: "wouldn't have happened | hadn't stopped", type: 'fill_gap', explanation: "Câu điều kiện loại 3: Sự việc đã xảy ra trong quá khứ." },
                        { id: 13, text: "I would have visited you before if there ______ (not be) quite a lot of people in your house.", answer: "hadn't been", type: 'fill_gap', explanation: "Câu điều kiện loại 3." },
                        { id: 14, text: "If I ______ (know) that you were ill, I ______ (go) to see you.", answer: "had known | would have gone", type: 'fill_gap', explanation: "Câu điều kiện loại 3." },
                        { id: 15, text: "Thank God Sue came on time! You ______ (find) the keys without her?", answer: "Would you have found", type: 'fill_gap', explanation: "Câu hỏi dạng điều kiện loại 3: 'Would + S + have + V3?'." }
                    ]
                }
            ]
        },
        {
            id: 'conditionals-ex-4',
            title: 'BÀI TẬP 4: TỔNG HỢP CÁC LOẠI CÂU ĐIỀU KIỆN',
            category: 'Conditionals',
            sections: [
                {
                    title: 'Exercise 4: Mixed Conditionals',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "If Tracy had a mobile phone, she ______ (phone) all her friends.", answer: "would phone", type: 'fill_gap', explanation: "Câu điều kiện loại 2 (giả thiết hiện tại): If + quá khứ đơn (had), mệnh đề chính dùng 'would + V(bare)'." },
                        { id: 2, text: "I ______ (be) very angry with Nick if he forgets my CD again.", answer: "will be", type: 'fill_gap', explanation: "Câu điều kiện loại 1 (khả năng tương lai): If + hiện tại đơn (forgets), mệnh đề chính dùng 'will + V(bare)'." },
                        { id: 3, text: "If the boys ______ (win) this match, their coach will invite them to a barbecue.", answer: "win", type: 'fill_gap', explanation: "Câu điều kiện loại 1. Mệnh đề If chia ở hiện tại đơn (win)." },
                        { id: 4, text: "If you don't read these articles, you ______ (not know) the facts about Africa.", answer: "won't know", type: 'fill_gap', explanation: "Câu điều kiện loại 1 dạng phủ định: If + hiện tại đơn phủ định, mệnh đề chính 'won't + V(bare)'." },
                        { id: 5, text: "If she'd had enough money, she ______ (buy) a car.", answer: "would have bought", type: 'fill_gap', explanation: "Câu điều kiện loại 3 (giả thiết quá khứ): If + quá khứ hoàn thành (had had), mệnh đề chính dùng 'would have + V3'." },
                        { id: 6, text: "I ______ (see) him if I ______ (go) to the party last night.", answer: "would have seen | had gone", type: 'fill_gap', explanation: "Câu điều kiện loại 3 (giả thiết quá khứ): If + had + V3, S + would have + V3." },
                        { id: 7, text: "We could have gone out if the weather ______ (not be) so bad.", answer: "hadn't been", type: 'fill_gap', explanation: "Câu điều kiện loại 3. Mệnh đề chính 'could have gone', mệnh đề If 'hadn't been'." },
                        { id: 8, text: "If the book ______ (not be) expensive, I ______ (buy) it.", answer: "weren't | would buy", type: 'fill_gap', explanation: "Câu điều kiện loại 2 (giả thiết hiện tại): 'weren't' (hoặc 'wasn't'), 'would buy'." },
                        { id: 9, text: "What you ______ (do) if you ______ (be) in my situation?", answer: "would you do | were", type: 'fill_gap', explanation: "Câu điều kiện loại 2: 'If you were in my situation' (Nếu bạn ở trong hoàn cảnh của tôi)." },
                        { id: 10, text: "I'll go out if it ______ (not rain).", answer: "doesn't rain", type: 'fill_gap', explanation: "Câu điều kiện loại 1: Tương lai có thể xảy ra." },
                        { id: 11, text: "If I spoke English, my job ______ (be) a lot easier.", answer: "would be", type: 'fill_gap', explanation: "Câu điều kiện loại 2: Giả thiết trái với thực tế hiện tại (tôi không nói tiếng Anh)." },
                        { id: 12, text: "If we had known who he was, we ______ (invite) him to speak at our meeting.", answer: "would have invited", type: 'fill_gap', explanation: "Câu điều kiện loại 3: Giả thiết trái với thực tế quá khứ." },
                        { id: 13, text: "My dog ______ (bark) if it ______ (hear) any strange sound.", answer: "barks | hears", type: 'fill_gap', explanation: "Câu điều kiện loại 0: Diễn tả thói quen hoặc sự thật hiển nhiên (chia hiện tại đơn cả 2 vế)." },
                        { id: 14, text: "If I ______ (be) in your place, I ______ (accept) Mr. Anderson's invitation.", answer: "were | would accept", type: 'fill_gap', explanation: "Câu điều kiện loại 2: Dùng đưa ra lời khuyên ('If I were in your place')." },
                        { id: 15, text: "If I ______ (win) a big prize in a lottery, I'd give up my job.", answer: "won", type: 'fill_gap', explanation: "Câu điều kiện loại 2: Giả thiết khó xảy ra ở hiện tại." },
                        { id: 16, text: "If I ______ (have) breakfast, I ______ (not feel) hungry now.", answer: "had had | wouldn't feel", type: 'fill_gap', explanation: "Câu điều kiện hỗn hợp (Mixed 3-2): Giả thiết quá khứ (If I had had...), kết quả hiện tại (I wouldn't feel...)." },
                        { id: 17, text: "I was busy. If I ______ (have) free time I ______ (go) to the cinema with you.", answer: "had had | would have gone", type: 'fill_gap', explanation: "Câu điều kiện loại 3: Giả thiết trái với quá khứ (thực tế quá khứ là 'I was busy')." },
                        { id: 18, text: "Why didn't you attend the meeting? Oh, I did not know. If I ______ (know) I ______ (come) there.", answer: "had known | would have come", type: 'fill_gap', explanation: "Câu điều kiện loại 3: Giả thiết trái với quá khứ." },
                        { id: 19, text: "If I ______ (not have) an important test today, I ______ (not stay) up late last night.", answer: "didn't have | wouldn't have stayed", type: 'fill_gap', explanation: "Câu điều kiện hỗn hợp (Mixed 2-3): Giả thiết hiện tại (If I didn't have... today), kết quả quá khứ (I wouldn't have stayed... last night)." },
                        { id: 20, text: "It's too bad Helen isn't here. If she ______ (be) here, she ______ (know) what to do.", answer: "were | would know", type: 'fill_gap', explanation: "Câu điều kiện loại 2: Giả thiết trái với hiện tại ('Helen isn't here')." },
                        { id: 21, text: "She ______ (come) late again, she will lose her job.", answer: "Should she come", type: 'fill_gap', explanation: "Đảo ngữ câu điều kiện loại 1: 'Should + S + V(bare)'." },
                        { id: 22, text: "If he ______ (not be) selfish, his wife ______ (not leave) him.", answer: "weren't | wouldn't have left", type: 'fill_gap', explanation: "Câu điều kiện hỗn hợp (Mixed 2-3): Giả thiết về bản chất/tính cách (hiện tại - loại 2), kết quả đã xảy ra trong quá khứ (loại 3)." },
                        { id: 23, text: "We ______ (live) in a town, life would be better.", answer: "lived", type: 'fill_gap', explanation: "Câu điều kiện loại 2: '(If) we lived...' (Lưu ý câu gốc có thể ẩn từ If)." },
                        { id: 24, text: "I know I ______ (feel) better if I ______ (stop) smoking.", answer: "would feel | stopped", type: 'fill_gap', explanation: "Câu điều kiện loại 2: Lời khuyên hoặc giả thiết trái hiện tại." },
                        { id: 25, text: "I ______ (understand) him if he spoke more slowly.", answer: "would understand", type: 'fill_gap', explanation: "Câu điều kiện loại 2: 'spoke' là quá khứ đơn." },
                        { id: 26, text: "He didn't listen to the teacher. He ______ (listen) carefully, he ______ (perform) well in the examination.", answer: "Had he listened | would have performed", type: 'fill_gap', explanation: "Đảo ngữ câu điều kiện loại 3: 'Had + S + V3, S + would have + V3'." },
                        { id: 27, text: "He's waiting for his mother to come back from Chicago. If his mother ______ (come) home, he ______ (have) a lot of presents.", answer: "comes | will have", type: 'fill_gap', explanation: "Câu điều kiện loại 1: Diễn tả sự việc có thể xảy ra trong tương lai ('waiting' - hiện tại)." },
                        { id: 28, text: "He wanted to buy some Christmas presents but he couldn't. If he ______ (afford) to buy, his children ______ (be) very happy to greet a new year.", answer: "could have afforded | would have been", type: 'fill_gap', explanation: "Câu điều kiện loại 3: Giả thiết trái với quá khứ ('wanted but couldn't')." },
                        { id: 29, text: "The kitchen will look better if we ______ (have) red curtains.", answer: "have", type: 'fill_gap', explanation: "Câu điều kiện loại 1." },
                        { id: 30, text: "Bring him another if he ______ (not/like) this one.", answer: "doesn't like", type: 'fill_gap', explanation: "Câu điều kiện loại 1 dạng mệnh lệnh." },
                        { id: 31, text: "Unless you are more careful, you ______ (have) an accident.", answer: "will have", type: 'fill_gap', explanation: "Câu điều kiện loại 1 với 'Unless' (= If you are not careful, you will have...)." },
                        { id: 32, text: "If summer ______ (come), we ______ (not have) to go to school.", answer: "comes | won't have", type: 'fill_gap', explanation: "Câu điều kiện loại 1: Sự việc sẽ xảy ra khi một điều kiện được đáp ứng." },
                        { id: 33, text: "If the sun ______ (stop) shining, there ______ (be) no light on earth.", answer: "stopped | would be", type: 'fill_gap', explanation: "Câu điều kiện loại 2: Giả thiết không có thật (Mặt trời ngừng chiếu sáng)." },
                        { id: 34, text: "If I ______ (be) a millionaire, I ______ (live) on Mars.", answer: "were | would live", type: 'fill_gap', explanation: "Câu điều kiện loại 2: Giả thiết không có thật ở hiện tại." },
                        { id: 35, text: "You ______ (get) very wet if you ______ (walk) in this rain.", answer: "will get | walk", type: 'fill_gap', explanation: "Câu điều kiện loại 1." },
                        { id: 36, text: "If some endangered species ______ (keep) in zoos, it will help to ensure their future survival.", answer: "are kept", type: 'fill_gap', explanation: "Câu điều kiện loại 1 bị động ở mệnh đề If." },
                        { id: 37, text: "Why don't we ask Michael to chair the meeting? \"Suppose we ______ (be) to ask him, do you think he would accept?\"", answer: "were", type: 'fill_gap', explanation: "Cấu trúc giả định 'Suppose' tương tự câu điều kiện loại 2: 'Suppose + S + were to V...'" },
                        { id: 38, text: "Now I know we were just too tired. Even with your help we ______ (not finish) it.", answer: "wouldn't have finished", type: 'fill_gap', explanation: "Câu điều kiện loại 3: Giả thiết trong quá khứ ('we were tired')." },
                        { id: 39, text: "I still regret I didn't have a camera. I ______ (take) some photographs of the bird.", answer: "could have taken", type: 'fill_gap', explanation: "Viết tắt của câu điều kiện loại 3: '(If I had had a camera), I could have taken...'." },
                        { id: 40, text: "Now that you're through with it, you should be more grateful to Ted for all his help. Do you think you ______ (succeed) without it?", answer: "would have succeeded", type: 'fill_gap', explanation: "Câu điều kiện loại 3 với 'without it' (= if you hadn't had it)." }
                    ]
                }
            ]
        },
        {
            id: 'conditionals-ex-5',
            title: 'BÀI TẬP 5: TRẮC NGHIỆM TỔNG HỢP',
            category: 'Conditionals',
            sections: [
                {
                    title: 'Exercise 5: Choose the correct answer',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "______ have enough apples, she'll make an apple pie this afternoon.", answer: "Should she", type: 'multiple_choice', options: ["Should she", "If she", "Will she", "Unless she"], explanation: "Đảo ngữ câu điều kiện loại 1: 'Should + S + V(bare)' dùng thay cho 'If + S + V(hiện tại đơn)'." },
                        { id: 2, text: "If you don't know how to spell a word, you ______ look it up in the dictionary.", answer: "should", type: 'multiple_choice', options: ["must", "will", "should", "ought"], explanation: "Câu điều kiện loại 1 dùng đưa ra lời khuyên: 'If + S + V(hiện tại), S + should + V'." },
                        { id: 3, text: "If the sun ______, we ______ for a walk.", answer: "shines / will go", type: 'multiple_choice', options: ["shines / will go", "shone / will go", "shone / would go", "had shone / would go"], explanation: "Cấu trúc đúng của câu điều kiện loại 1: Hiện tại đơn / Tương lai đơn." },
                        { id: 4, text: "The campfire ______ if it ______ last night.", answer: "wouldn't have been cancelled/hadn't rained", type: 'multiple_choice', options: ["wouldn't be cancelled/hadn't rained", "wouldn't have been cancelled/hadn't rained", "would have been cancelled/hadn't rained", "will be cancelled/rains"], explanation: "Giả thiết điều xảy ra trong quá khứ ('last night') -> Dùng câu điều kiện loại 3." },
                        { id: 5, text: "But for our parents, we ______ successful in life.", answer: "would never be", type: 'multiple_choice', options: ["will never be", "would never be", "wouldn't have", "would have never been"], explanation: "Giả thiết một điều luôn đúng/hiện tại: 'Nếu không có bố mẹ (thì bây giờ) chúng ta sẽ không thành công' -> Dùng loại 2." },
                        { id: 6, text: "If I ______ my wallet at home this morning, I ______ money for lunch now.", answer: "hadn't left / would have", type: 'multiple_choice', options: ["leave / will have", "didn't leave / would have", "hadn't left / would have", "hadn't left / would have had"], explanation: "Câu điều kiện hỗn hợp (Mixed 3-2): Giả thiết trái với quá khứ ('this morning') dùng quá khứ hoàn thành (hadn't left), kết quả ở hiện tại ('now') dùng Would + V(bare)." },
                        { id: 7, text: "If we ______ the plans carefully, we would not have had so many serious mistakes.", answer: "had studied", type: 'multiple_choice', options: ["study", "had studied", "studied", "were studying"], explanation: "Câu điều kiện loại 3: Mệnh đề chính 'would not have had' -> Mệnh đề If chia quá khứ hoàn thành." },
                        { id: 8, text: "I will never talk to you again ______ you apologize me ______ your being rude.", answer: "unless / for", type: 'multiple_choice', options: ["if / for", "unless / for", "or / of", "whether / or"], explanation: "Unless = If ... not. Apologize to sb for sth. Ở đây 'apologize me' (có thể là lỗi đánh máy, thường là apologize to me). Nhưng 'unless' là đáp án hợp lý nhất về nghĩa." },
                        { id: 9, text: "______ you work harder, you will be sacked.", answer: "Unless", type: 'multiple_choice', options: ["Whether", "If", "However", "Unless"], explanation: "Unless = If ... not (Trừ khi bạn làm việc chăm chỉ hơn, bạn sẽ bị sa thải)." },
                        { id: 10, text: "\"I think you should stop smoking.\"", answer: "If I were you, I would stop smoking.", type: 'multiple_choice', options: ["If I am you, I will stop smoking.", "If I were you, I will stop smoking.", "If I were you, I would stop smoking.", "If I had been you, I would stop smoking."], explanation: "Dùng câu điều kiện loại 2 'If I were you' để đưa ra lời khuyên." },
                        { id: 11, text: "If you take the ice out of the fridge, it ______.", answer: "melts", type: 'multiple_choice', options: ["vaporizes", "melts", "heats", "disappears"], explanation: "Câu điều kiện loại 0: Sự thật hiển nhiên. 'It melts' (Nó tan chảy)." },
                        { id: 12, text: "Unless we ______ more snow, we can't go skiing.", answer: "have", type: 'multiple_choice', options: ["will have", "have", "have had", "had"], explanation: "Câu điều kiện loại 1 với Unless. Động từ chia hiện tại đơn 'have'." },
                        { id: 13, text: "You'll fail the exam ______ you start revising.", answer: "unless", type: 'multiple_choice', options: ["if", "until", "when", "unless"], explanation: "Unless = If not ('Bạn sẽ trượt trừ khi bạn bắt đầu ôn tập')." },
                        { id: 14, text: "Unless you wash the car, you ______ not drive it at the weekend.", answer: "may", type: 'multiple_choice', options: ["would", "could", "have to", "may"], explanation: "Câu điều kiện loại 1 diễn tả sự cho phép (permission): 'may'." },
                        { id: 15, text: "If Peter ______ his car before the drive, he ______ the problem of out of petrol.", answer: "had checked / would not have got", type: 'multiple_choice', options: ["checked / will not get", "had checked / would not have got", "checks / will not have got", "would be checking / will not have got"], explanation: "Câu điều kiện loại 3: Giả thiết trong quá khứ." },
                        { id: 16, text: "Most people you meet will be polite to you ______.", answer: "if you are polite to them", type: 'multiple_choice', options: ["if you are polite to them", "if you will be polite to them", "unless you are polite to them", "if you were polite to them"], explanation: "Câu điều kiện loại 1: People will be polite if you are polite." },
                        { id: 17, text: "If you do so, it ______ the matter worse.", answer: "will only make", type: 'multiple_choice', options: ["makes only", "would only make", "will only make", "had only made"], explanation: "Câu điều kiện loại 1." },
                        { id: 18, text: "Hurry up, ______ you will miss the bus and be late for school.", answer: "or", type: 'multiple_choice', options: ["if", "and", "or", "as"], explanation: "Cấu trúc Mệnh lệnh + or + S + will... (Làm đi, nếu không thì...)." },
                        { id: 19, text: "You will get a good seat if you ______ first.", answer: "come", type: 'multiple_choice', options: ["come", "came", "have come", "will come"], explanation: "Câu điều kiện loại 1: Mệnh đề If chia hiện tại đơn." },
                        { id: 20, text: "If Margaret hadn't been wearing a seat belt, she ______ injured.", answer: "would have been", type: 'multiple_choice', options: ["has been", "would has been", "would be", "would have been"], explanation: "Câu điều kiện loại 3: 'hadn't been wearing' -> 'would have been'." }
                    ]
                }
            ]
        },
        {
            id: 'conditionals-ex-6',
            title: 'BÀI TẬP 6: TÌM LỖI SAI (Error Identification)',
            category: 'Conditionals',
            sections: [
                {
                    title: 'Exercise 6: Find the mistake in each sentence.',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "If Lucia <u>had been</u> here now, she <u>would find out</u> the truth <u>about</u> her <u>uncle's</u> accident.", answer: "had been", correction: "were", type: 'error_correction', explanation: "Dấu hiệu 'now' biến câu thành điều kiện loại 2 (giả thiết hiện tại). Sửa 'had been' -> 'were'." },
                        { id: 2, text: "If a student <u>takes a course</u> on Computer Science, it will <u>take</u> him four years <u>doing</u> the course.", answer: "doing", correction: "to do", type: 'error_correction', explanation: "Cấu trúc: It takes sb time + to V. Sửa 'doing' -> 'to do'." },
                        { id: 3, text: "<u>Unless</u> it <u>did not rain</u>, Peter <u>would pay</u> us <u>a visit</u>.", answer: "did not rain", correction: "rained", type: 'error_correction', explanation: "Unless = If ... not. Không dùng phủ định sau Unless. Sửa 'did not rain' -> 'rained'." },
                        { id: 4, text: "<u>had I known</u> you <u>were in</u> financial difficulty, I <u>would have helped</u> you.", answer: "had I known", correction: "Had I known", type: 'error_correction', explanation: "Đầu câu phải viết hoa. Đảo ngữ câu điều kiện loại 3: 'Had I known...'." },
                        { id: 5, text: "If I <u>had knew</u> the time <u>when</u> the match started, I <u>would have told</u> you.", answer: "had knew", correction: "had known", type: 'error_correction', explanation: "Quá khứ phân từ của 'know' là 'known'. Sửa 'had knew' -> 'had known'." },
                        { id: 6, text: "If she <u>had finished</u> <u>the work</u>, she <u>can</u> <u>go home</u>.", answer: "can", correction: "could have gone", type: 'error_correction', explanation: "Mệnh đề If chia quá khứ hoàn thành (loại 3), mệnh đề chính phải là 'could have gone'." },
                        { id: 7, text: "If I <u>had spoken</u> more <u>confident</u> at the interview, they <u>would have offered</u> me <u>the</u> job.", answer: "confident", correction: "confidently", type: 'error_correction', explanation: "Cần trạng từ bổ nghĩa cho động từ 'spoken'. Sửa 'confident' -> 'confidently'." },
                        { id: 8, text: "If we <u>had had</u> a map, we <u>would not be lost</u> yesterday.", answer: "would not be lost", correction: "would not have been lost", type: 'error_correction', explanation: "Giả thiết trái quá khứ ('yesterday') dùng câu điều kiện loại 3. Sửa thành 'would not have been lost'." },
                        { id: 9, text: "<u>Had I known</u> Alice's address, I <u>would write</u> <u>to her</u>.", answer: "would write", correction: "would have written", type: 'error_correction', explanation: "Đảo ngữ loại 3 ('Had I known'), mệnh đề chính phải là 'would have written'." },
                        { id: 10, text: "If I <u>had realized</u> <u>that</u> the <u>traffic lights</u> were red, I <u>would stop</u>.", answer: "would stop", correction: "would have stopped", type: 'error_correction', explanation: "Câu điều kiện loại 3. Sửa 'would stop' -> 'would have stopped'." },
                        { id: 11, text: "If <u>had you sent</u> the application form <u>to that company</u>, you <u>would have been offered</u> a job.", answer: "had you sent", correction: "you had sent", type: 'error_correction', explanation: "Sau 'If' là trật tự câu xuôi S + V. Nếu đảo ngữ thì bỏ 'If'. Sửa 'had you sent' -> 'you had sent'." },
                        { id: 12, text: "He <u>spends</u> money <u>carelessly</u> as if he <u>was</u> a millionaire.", answer: "was", correction: "were", type: 'error_correction', explanation: "Dùng 'as if' với ý nghĩa không có thật chia quá khứ giả định 'were'. Sửa 'was' -> 'were'." },
                        { id: 13, text: "<u>Unless</u> you <u>work</u> harder, you <u>will be sack</u> because of your <u>laziness</u>.", answer: "will be sack", correction: "will be sacked", type: 'error_correction', explanation: "Câu bị động: 'will be sacked'. Sửa 'will be sack' -> 'will be sacked'." },
                        { id: 14, text: "<u>Unless</u> there <u>had been</u> the <u>heavy</u> storm, the climbers <u>will</u> not have died.", answer: "will", correction: "would", type: 'error_correction', explanation: "Câu điều kiện loại 3. Sửa 'will' -> 'would'." },
                        { id: 15, text: "She <u>has found</u> that nobody <u>can help</u> her if she <u>did not try</u> her best <u>to do</u> it herself.", answer: "did not try", correction: "does not try", type: 'error_correction', explanation: "Mệnh đề chính dùng hiện tại/tương lai ('can help'), mệnh đề If dùng hiện tại đơn. Sửa 'did not try' -> 'does not try'." },
                        { id: 16, text: "If we <u>will reduce</u> the speed of <u>population growth</u>, there will be <u>less</u> pressure <u>on</u> the earth.", answer: "will reduce", correction: "reduce", type: 'error_correction', explanation: "Mệnh đề If câu điều kiện loại 1 không dùng tương lai đơn. Sửa 'will reduce' -> 'reduce'." },
                        { id: 17, text: "If we <u>leave</u> <u>a bowl of</u> water <u>under</u> the sun, it <u>will evaporate</u>.", answer: "under", correction: "in", type: 'error_correction', explanation: "Cụm từ: in the sun (ngoài nắng). Sửa 'under' -> 'in'." },
                        { id: 18, text: "If we continue <u>to use</u> fuels at the current rate, we <u>would</u> soon have <u>to face</u> a fuel crisis.", answer: "would", correction: "will", type: 'error_correction', explanation: "Câu điều kiện loại 1 ('continue' - hiện tại). Sửa 'would' -> 'will'." },
                        { id: 19, text: "If she <u>bought</u> that house <u>now</u>, she <u>ran</u> out <u>of</u> money.", answer: "ran", correction: "would run", type: 'error_correction', explanation: "Câu điều kiện loại 2 ('bought', 'now'). Mệnh đề chính dùng 'would + V'. Sửa 'ran' -> 'would run'." },
                        { id: 20, text: "<u>What</u> <u>you would do</u> if you <u>could</u> speak French <u>well</u>?", answer: "you would do", correction: "would you do", type: 'error_correction', explanation: "Câu hỏi phải đảo ngữ. Sửa 'you would do' -> 'would you do'." },
                        { id: 21, text: "<u>If I had</u> my mobile yesterday, I <u>could have contacted</u> and <u>informed you</u> about the last-minute <u>cancellation of the seminar</u>.", answer: "If I had", correction: "If I had had", type: 'error_correction', explanation: "Vì có 'yesterday' nên dùng câu điều kiện loại 3. Sửa 'If I had' -> 'If I had had'." },
                        { id: 22, text: "<u>If you had</u> studied <u>hard</u>, you <u>wouldn't</u> <u>failed</u> the exam.", answer: "failed", correction: "have failed", type: 'error_correction', explanation: "Sau modal verb 'wouldn't' phải là động từ nguyên mẫu hoặc 'have V3'. Ở đây loại 3 là 'wouldn't have failed'. Sửa 'failed' -> 'have failed'." },
                        { id: 23, text: "<u>If I hadn't been</u> too <u>late for</u> the exam, I <u>might be</u> <u>allowed to enter</u> the examination room.", answer: "might be", correction: "might have been", type: 'error_correction', explanation: "Câu điều kiện loại 3. Sửa 'might be' -> 'might have been'." },
                        { id: 24, text: "I <u>would</u> <u>have enroll on</u> an online course <u>if I had had</u> <u>enough money</u>.", answer: "have enroll on", correction: "have enrolled in", type: 'error_correction', explanation: "Sai dạng V3 của enroll và giới từ. Sửa 'have enroll on' -> 'have enrolled in'." },
                        { id: 25, text: "We <u>might</u> <u>have gone to</u> the Science Fair if we <u>knew</u> about it <u>happened</u>.", answer: "knew", correction: "had known", type: 'error_correction', explanation: "Câu điều kiện loại 3. Sửa 'knew' -> 'had known'." },
                        { id: 26, text: "If we <u>had drop</u> school <u>so early</u>, we <u>wouldn't have</u> <u>had enough</u> knowledge of the school subjects.", answer: "had drop", correction: "had dropped", type: 'error_correction', explanation: "Quá khứ phân từ của drop là dropped. Sửa 'had drop' -> 'had dropped'." },
                        { id: 27, text: "If you <u>had come</u> to class <u>last week</u>, you <u>might have join</u> in the discussion <u>on air pollution</u>.", answer: "might have join", correction: "might have joined", type: 'error_correction', explanation: "Cấu trúc 'might have + V3'. Sửa 'join' -> 'joined'." },
                        { id: 28, text: "<u>If I had listened</u> to <u>my parents</u>, I <u>wouldn't</u> <u>have been</u> in so much trouble now.", answer: "have been", correction: "be", type: 'error_correction', explanation: "Câu điều kiện hỗn hợp (Mixed 3-2) vì có 'now'. Sửa 'have been' -> 'be' (wouldn't be)." },
                        { id: 29, text: "I <u>don't know</u> your phone number. <u>If I had known</u> it, I <u>would have called</u> you last night.", answer: "If I had known", correction: "If I knew", type: 'error_correction', explanation: "Thực tế 'don't know' là ở hiện tại, nên giả thiết phải dùng quá khứ đơn (If I knew). Kết hợp với kết quả quá khứ 'would have called' -> Mixed 2-3." },
                        { id: 30, text: "If I <u>have studied</u> English <u>earlier</u>, I <u>could have read</u> this book several years ago.", answer: "have studied", correction: "had studied", type: 'error_correction', explanation: "Giả thiết trái quá khứ dùng quá khứ hoàn thành. Sửa 'have studied' -> 'had studied'." },
                        { id: 31, text: "If a meteor <u>hadn't struck the Earth</u>, the dinosaurs <u>didn't become</u> <u>extinct</u>.", answer: "didn't become", correction: "wouldn't have become", type: 'error_correction', explanation: "Mệnh đề chính loại 3 phải là 'wouldn't have become'. Sửa 'didn't become' -> 'wouldn't have become'." },
                        { id: 32, text: "If they <u>had win</u> the lottery <u>last summer</u>, they <u>would have bought</u> a new car.", answer: "had win", correction: "had won", type: 'error_correction', explanation: "V3 của win là won. Sửa 'had win' -> 'had won'." },
                        { id: 33, text: "If I <u>had known</u> he <u>is not</u> at home, I <u>wouldn't have gone</u> all the way <u>to</u> his house.", answer: "is not", correction: "was not", type: 'error_correction', explanation: "Lùi thì trong mệnh đề danh từ sau 'known' (quá khứ). Sửa 'is not' -> 'was not'." },
                        { id: 34, text: "If I <u>had known</u> that the road <u>were flooded</u>, I <u>would</u> never <u>have taken</u> that way.", answer: "were flooded", correction: "was flooded", type: 'error_correction', explanation: "Mệnh đề sau 'that' chia ở quá khứ đơn (sự thật trong quá khứ) với chủ ngữ số ít 'the road'. Sửa 'were flooded' -> 'was flooded'." },
                        { id: 35, text: "If I <u>were</u> you, I <u>will go</u> to <u>the dentist's</u> and have the tooth <u>checked</u>.", answer: "will go", correction: "would go", type: 'error_correction', explanation: "Câu điều kiện loại 2. Sửa 'will go' -> 'would go'." }
                    ]
                }
            ]
        },

        {
            id: 'conditionals-ex-7',
            title: 'BÀI TẬP 7: CÂU ĐỒNG NGHĨA',
            category: 'Conditionals',
            sections: [
                {
                    title: 'Exercise 7: Choose the sentence that is closest in meaning',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "I didn't have an umbrella with me, so I got wet.", answer: "I wouldn't have got wet if I had had an umbrella with me.", type: 'multiple_choice', options: ["Since I got wet, I didn't have an umbrella with me.", "My umbrella helped me to get wet.", "I wouldn't have got wet if I had had an umbrella with me.", "I got wet, so I didn't have an umbrella."], explanation: "Sự việc đã xảy ra trong quá khứ ('didn't have', 'got wet'). Viết lại bằng câu điều kiện loại 3 trái ngược với quá khứ." },
                        { id: 2, text: "Unless you leave me alone, I'll call the police.", answer: "I'll call the police if you don't leave me alone.", type: 'multiple_choice', options: ["I'll call the police because you leave me alone.", "I'll call the police if you don't leave me alone.", "If you leave me alone, I'll call the police.", "You leave me alone, so I'll call the police."], explanation: "Unless = If ... not." },
                        { id: 3, text: "If you hadn't told me about the changes in the timetable, I wouldn't have noticed.", answer: "Unless you had told me about the changes in the timetable, I wouldn't have noticed.", type: 'multiple_choice', options: ["You hadn't told me about the changes in the timetable, so I didn't notice.", "Unless you had told me about the changes in the timetable, I wouldn't have noticed.", "If you had told me about the changes in the timetable, I would have noticed.", "Unless you tell me about the changes in the timetable, I won't notice."], explanation: "'If you hadn't told me' = 'Unless you had told me'. Cả hai đều có nghĩa là 'Nếu bạn không nói với tôi'." },
                        { id: 4, text: "If I had known the reason why she was absent from class, I would have told you.", answer: "I didn't know the reason why she was absent from class, so I didn't tell.", type: 'multiple_choice', options: ["I knew the reason why she was absent from class, but I didn't tell you.", "Unless I knew the reason why she was absent from class, I wouldn't tell you.", "I didn't know the reason why she was absent from class, so I didn't tell.", "Although I knew the reason why she was absent from class, I didn't tell you."], explanation: "Câu điều kiện loại 3 diễn tả giả thiết trái ngược thực tế quá khứ. Thực tế là 'I didn't know... so I didn't tell'." },
                        { id: 5, text: "But for your carelessness, you could have been a partner in the firm.", answer: "You could have been a partner in the firm, but you were so careless.", type: 'multiple_choice', options: ["If it hadn't been your carelessness, you could have been a partner in the firm.", "Your carelessness was only thing to prevent being a partner in the firm.", "It was your carelessness that made you impossible to be a partner in the firm.", "You could have been a partner in the firm, but you were so careless."], explanation: "'But for your carelessness' (Nếu không vì sự bất cẩn của bạn) -> Thực tế là 'You were so careless'." },
                        { id: 6, text: "Without skillful surgery, he would not have survived the operation.", answer: "But for skillful surgery, he would not have survived the operation.", type: 'multiple_choice', options: ["With skillful surgery, he would have survived the operation.", "Had it not been for skillful surgery, he would have survived the operation.", "But for skillful surgery, he would not have survived the operation.", "He wouldn't have survived the operation if he hadn't skillful surgery."], explanation: "Without = But for (Nếu không có)." },
                        { id: 7, text: "We could not handle the situation without you.", answer: "If you had not helped us, we could not have handled the situation.", type: 'multiple_choice', options: ["You didn't help us handle the situation.", "If you had not helped us, we could not have handled the situation.", "If you did not help us, we could not handle the situation.", "We will handle the situation if you help."], explanation: "Câu gốc ám chỉ quá khứ (could not handle - không thể xoay sở được [lúc đó]). Viết lại bằng câu điều kiện loại 3." },
                        { id: 8, text: "Unless you have tickets you can't come in.", answer: "If you didn't have tickets, you couldn't come in.", type: 'multiple_choice', options: ["You can't come in provided that you have tickets.", "You can come in provided that you have tickets.", "If you didn't have tickets, you couldn't come in.", "Unless you don't have tickets, you can come in."], explanation: "Chuyển từ câu điều kiện loại 1 (Unless + hiện tại) sang loại 2 (If + quá khứ) để diễn đạt cùng ý nghĩa giả định (hoặc đây là cách viết lại tương đương trong trắc nghiệm này)." },
                        { id: 9, text: "He stepped on the mine, and it exploded.", answer: "If he hadn't stepped on the mine, it wouldn't have exploded.", type: 'multiple_choice', options: ["If he doesn't step on the mine, it doesn't explode.", "If he doesn't step on the mine, it won't explode.", "If he didn't step on the mine, it wouldn't explode.", "If he hadn't stepped on the mine, it wouldn't have exploded."], explanation: "Sự việc quá khứ -> Viết lại bằng câu điều kiện loại 3." },
                        { id: 10, text: "It may rain this afternoon. I hope it doesn't because I don't want the match to be cancelled.", answer: "If it rains, the match will be cancelled.", type: 'multiple_choice', options: ["If it rains, the match is cancelled.", "If it rains, the match will be cancelled.", "if it rained, the match would be cancelled.", "If it had rained, the match would have been cancelled."], explanation: "Diễn tả khả năng xảy ra ở tương lai -> Câu điều kiện loại 1." }
                    ]
                }
            ]
        },
        {
            id: 'conditionals-ex-8',
            title: 'BÀI TẬP 8: VIẾT LẠI CÂU (Rewrite Sentences)',
            category: 'Conditionals',
            sections: [
                {
                    title: 'Exercise 8: Rewrite the sentences',
                    subtitle: 'Complete the sentences using the conditional structure.',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "Keep silent or you’ll wake the baby up. -> If ______", answer: "you don't keep silent, you will wake the baby up", type: 'fill_gap', explanation: "Dạng 'Imperative + or + S + will...' = 'If you don't ..., you will ...'." },
                        { id: 2, text: "Stop talking or you won’t understand the lesson. -> If ______", answer: "you don't stop talking, you won't understand the lesson", type: 'fill_gap', explanation: "Tương tự câu 1: 'If you don't stop talking...'." },
                        { id: 3, text: "I don’t know her number, so I don’t ring her up. -> If ______", answer: "I knew her number, I would ring her up", type: 'fill_gap', explanation: "Thực tế hiện tại (don't know) -> Dùng câu điều kiện loại 2 (If I knew...)." },
                        { id: 4, text: "Peter is fat because he eats so many chips. -> If ______", answer: "Peter didn't eat so many chips, he wouldn't be fat", type: 'fill_gap', explanation: "Thực tế hiện tại (eats, is fat) -> Dùng câu điều kiện loại 2." },
                        { id: 5, text: "If you do not like this one, I’ll change you another. -> Unless ______", answer: "you like this one, I'll change you another", type: 'fill_gap', explanation: "Unless = If ... not." },
                        { id: 6, text: "If she does not hurry, she’ll be late -> Unless ______", answer: "she hurries, she'll be late", type: 'fill_gap', explanation: "Unless = If ... not." },
                        { id: 7, text: "He can’t go out because he has to study for his exam. -> If ______", answer: "he didn't have to study for his exam, he could go out", type: 'fill_gap', explanation: "Thực tế hiện tại -> Dùng câu điều kiện loại 2." },
                        { id: 8, text: "She is lazy so she can’t pass the exam. -> If ______", answer: "she were not lazy, she could pass the exam", type: 'fill_gap', explanation: "Thực tế hiện tại -> Dùng câu điều kiện loại 2." },
                        { id: 9, text: "He will pay me tonight; I will have enough money to buy a car. -> If ______", answer: "he pays me tonight, I will have enough money to buy a car", type: 'fill_gap', explanation: "Sự việc tương lai -> Dùng câu điều kiện loại 1." },
                        { id: 10, text: "He smokes too much; that’s why he can’t get rid of his cough. -> If ______", answer: "he didn't smoke too much, he could get rid of his cough", type: 'fill_gap', explanation: "Thực tế hiện tại -> Dùng câu điều kiện loại 2." },
                        { id: 11, text: "She is very shy, so she doesn’t enjoy the party. -> If ______", answer: "she were not very shy, she would enjoy the party", type: 'fill_gap', explanation: "Thực tế hiện tại -> Dùng câu điều kiện loại 2." },
                        { id: 12, text: "I will get a work permit. I will stay for another month. -> If ______", answer: "I get a work permit, I will stay for another month", type: 'fill_gap', explanation: "Sự việc tương lai -> Dùng câu điều kiện loại 1." },
                        { id: 13, text: "He doesn’t take any exercises. He is so unhealthy -> If ______", answer: "he took some exercises, he wouldn't be so unhealthy", type: 'fill_gap', explanation: "Thực tế hiện tại -> Dùng câu điều kiện loại 2." },
                        { id: 14, text: "Study hard or you won’t pass the exam. -> If ______", answer: "you don't study hard, you won't pass the exam", type: 'fill_gap', explanation: "Dạng 'Imperative + or...' -> 'If you don't...'." },
                        { id: 15, text: "Don’t be impatient or you will make mistakes. -> If ______", answer: "you are impatient, you will make mistakes", type: 'fill_gap', explanation: "Dạng 'Don't be + adj + or...' -> 'If you are + adj...'." },
                        { id: 16, text: "I didn’t see the film last night, so I can’t tell you now. -> If I ______", answer: "had seen the film last night, I could tell you now", type: 'fill_gap', explanation: "Thực tế quá khứ (didn't see) và hiện tại (can't tell) -> Mixed 3-2." },
                        { id: 17, text: "I only come if they invite me. -> Unless ______", answer: "they invite me, I won't come", type: 'fill_gap', explanation: "Unless = If ... not ('Trừ khi họ mời tôi, tôi sẽ không đến')." },
                        { id: 18, text: "He didn’t revise all his lessons, so he failed the exam. -> Had ______", answer: "he revised all his lessons, he wouldn't have failed the exam", type: 'fill_gap', explanation: "Thực tế quá khứ -> Dùng câu điều kiện loại 3 (Đảo ngữ: Had + S + V3)." },
                        { id: 19, text: "Leave me alone or I’ll call the police. -> Unless ______", answer: "you leave me alone, I'll call the police", type: 'fill_gap', explanation: "'Unless you leave me alone' = 'If you don't leave me alone'." },
                        { id: 20, text: "If you arrive at the office earlier than I do, please turn on the air-conditioner. -> Should ______", answer: "you arrive at the office earlier than I do, please turn on the air-conditioner", type: 'fill_gap', explanation: "Đảo ngữ câu điều kiện loại 1 dùng Should." },
                        { id: 21, text: "The children don’t go to school in the snowy weather. -> If it ______", answer: "snows, the children don't go to school", type: 'fill_gap', explanation: "Sự thật/thói quen (loại 0/1)." },
                        { id: 22, text: "He died so young; otherwise, he would be a famous musician by now. -> Had ______", answer: "he not died so young, he would be a famous musician by now", type: 'fill_gap', explanation: "Thực tế quá khứ (died), kết quả hiện tại (by now) -> Mixed 3-2 (Đảo ngữ Had + S + not + V3)." },
                        { id: 23, text: "You must tell me the whole truth or I won’t help you. -> Unless ______", answer: "you tell me the whole truth, I won't help you", type: 'fill_gap', explanation: "Unless = If ... not." },
                        { id: 24, text: "The car breaks down so often because you don’t take good care of it. -> Were I ______", answer: "you, I would take good care of it", type: 'fill_gap', explanation: "Đảo ngữ loại 2 (Were I you...)." },
                        { id: 25, text: "He is very bad-tempered, that’s why his wife left him soon after marriage. -> If he ______", answer: "were not very bad-tempered, his wife wouldn't have left him soon after marriage", type: 'fill_gap', explanation: "Thực tế hiện tại (bad-tempered) và quá khứ (left) -> Mixed 2-3." },
                        { id: 26, text: "Don’t tell lies to your boss or you’ll be fired at once. -> Should ______", answer: "you tell lies to your boss, you'll be fired at once", type: 'fill_gap', explanation: "Đảo ngữ loại 1: Should + S + V..." },
                        { id: 27, text: "She got married at such an early age. Otherwise, she would be at university now. -> Had ______", answer: "she not got married at such an early age, she would be at university now", type: 'fill_gap', explanation: "Thực tế quá khứ, kết quả hiện tại -> Mixed 3-2 (Đảo ngữ)." },
                        { id: 28, text: "She can’t be employed because she doesn’t have a college degree. -> Were ______", answer: "she to have a college degree, she could be employed", type: 'fill_gap', explanation: "Đảo ngữ loại 2 với động từ thường: Were + S + to V." },
                        { id: 29, text: "I don’t have enough money. I can’t go on a long holiday this year. -> Were ______", answer: "I to have enough money, I could go on a long holiday this year", type: 'fill_gap', explanation: "Đảo ngữ loại 2: Were + S + to V." },
                        { id: 30, text: "He was tired. He made a mistake. -> Had ______", answer: "he not been tired, he wouldn't have made a mistake", type: 'fill_gap', explanation: "Thực tế quá khứ -> Loại 3 (Đảo ngữ)." },
                        { id: 31, text: "We won’t go out unless it stops raining. -> If ______", answer: "it doesn't stop raining, we won't go out", type: 'fill_gap', explanation: "Unless = If ... not." },
                        { id: 32, text: "I will call the police if you don’t give back my bicycle. -> Unless ______", answer: "you give back my bicycle, I will call the police", type: 'fill_gap', explanation: "Unless = If ... not." },
                        { id: 33, text: "He is very slow, so we won’t give him such an important task. -> If ______", answer: "he were not very slow, we would give him such an important task", type: 'fill_gap', explanation: "Thực tế hiện tại -> Loại 2." },
                        { id: 34, text: "He didn’t look a lot better because he didn’t shave more often. -> If ______", answer: "he had shaved more often, he would have looked a lot better", type: 'fill_gap', explanation: "Thực tế quá khứ -> Loại 3." },
                        { id: 35, text: "City life isn’t enjoyable because everything is very expensive. -> Were ______", answer: "everything not very expensive, city life would be enjoyable", type: 'fill_gap', explanation: "Đảo ngữ loại 2 (Were + S + ...)." },
                        { id: 36, text: "The thief left his gloves at the scene. He was arrested. -> If ______", answer: "the thief hadn't left his gloves at the scene, he wouldn't have been arrested", type: 'fill_gap', explanation: "Thực tế quá khứ -> Loại 3." }
                    ]
                }
            ]
        }
    ]
};
