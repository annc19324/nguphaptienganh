export const inversionsTopic = {
    id: 'inversions',
    title: 'CHUYÊN ĐỀ 18: ĐẢO NGỮ (Inversions)',
    category: 'Inversions',
    children: [
        {
            id: 'inversions-theory',
            title: 'LÝ THUYẾT: CÁC LOẠI ĐẢO NGỮ',
            category: 'Inversions',
            sections: [
                {
                    title: 'I. ĐẢO NGỮ VỚI CỤM TỪ CÓ TỪ "NO"',
                    type: 'custom',
                    content: [
                        {
                            subtitle: 'Công thức chung: No/Not + N + Trợ động từ + S + V',
                            cases: [
                                { label: 'At no time = Never', formula: 'Không bao giờ' },
                                { label: 'Under/In no circumstances', formula: 'Dù trong bất kỳ hoàn cảnh nào cũng không' },
                                { label: 'By no means', formula: 'Hoàn toàn không' },
                                { label: 'For no reason', formula: 'Không vì lý do gì' },
                                { label: 'In no way', formula: 'Không sao có thể' },
                                { label: 'On no condition = On no account', formula: 'Dù bất cứ lý do gì cũng không' },
                                { label: 'No longer', formula: 'Không còn nữa' },
                                { label: 'No where', formula: 'Không nơi nào, không ở đâu' }
                            ]
                        }
                    ]
                },
                {
                    title: 'II. ĐẢO NGỮ VỚI "ONLY"',
                    type: 'custom',
                    content: [
                        {
                            subtitle: 'Lưu ý: Đảo ngữ xảy ra ở mệnh đề chính',
                            cases: [
                                { label: 'Only after + S + V / V-ing', formula: 'Chỉ sau khi' },
                                { label: 'Only by + V-ing', formula: 'Chỉ bằng cách' },
                                { label: 'Only if + S + V', formula: 'Chỉ nếu' },
                                { label: 'Only when + S + V', formula: 'Chỉ khi' },
                                { label: 'Only with + N', formula: 'Chỉ với' },
                                { label: 'Only later / Only in this way / Only then', formula: 'Chỉ sau đó / bằng cách này' }
                            ]
                        }
                    ]
                },
                {
                    title: 'III. ĐẢO NGỮ VỚI SO/SUCH ... THAT',
                    type: 'custom',
                    content: [
                        {
                            subtitle: 'Quá ... đến nỗi mà',
                            cases: [
                                { label: 'So + Tính từ + V + Chủ ngữ + that + clause', formula: 'Cấu trúc với So' },
                                { label: 'Such + be + N + that + clause', formula: 'Cấu trúc với Such' }
                            ]
                        }
                    ]
                },
                {
                    title: 'IV. ĐẢO NGỮ CÂU ĐIỀU KIỆN',
                    type: 'custom',
                    content: [
                        {
                            subtitle: 'Loại bỏ IF',
                            cases: [
                                { label: 'Loại 1', formula: 'Should + S + V, S + will/can/may... + V' },
                                { label: 'Loại 2', formula: 'Were + S + (to V) + ..., S + would/could + V' },
                                { label: 'Loại 3', formula: 'Had + S + Vp2, S + would/could + have + Vp2' }
                            ]
                        }
                    ]
                },
                {
                    title: 'V. CÁC TRƯỜNG HỢP KHÁC',
                    type: 'custom',
                    content: [
                        {
                            subtitle: 'Trạng từ phủ định & Cấu trúc đặc biệt',
                            cases: [
                                { label: 'Trạng từ phủ định', formula: 'Never, rarely, seldom, little, hardly, scarcely, barely...' },
                                { label: 'Vừa mới... thì', formula: 'Hardly/Barely/Scarcely + had + S + Vp2 + when... | No sooner + had + S + Vp2 + than...' },
                                { label: 'Not only... but also...', formula: 'Not only + Trợ động từ + S + V + but also...' },
                                { label: 'Not until/till', formula: 'Not until/till + Time/Clause + Trợ động từ + S + V' },
                                { label: 'So/Neither/Nor', formula: 'So/Neither/Nor + Trợ động từ + S' },
                                { label: 'Đảo ngữ toàn bộ', formula: 'Trạng từ chỉ nơi chốn/giới từ + V + S' }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'inversions-ex-1',
            title: 'BÀI TẬP 1: CHIA ĐỘNG TỪ',
            category: 'Inversions',
            sections: [
                {
                    title: 'Exercise 1: Give the correct form of the verbs in the blanks',
                    subtitle: 'Chia động từ trong ngoặc (Câu 1-30)',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "Hardly ______ the new law (introduce) when the mistake was released.", answer: "had been introduced", type: 'fill_in_the_blank', explanation: "Cấu trúc đảo ngữ: 'Hardly + had + S + Vp2 + when...'. Ở đây là bị động của quá khứ hoàn thành (had been Vp2) vì đạo luật 'được ban hành'." },
                        { id: 2, text: "Not only ______ you (be late), but you also forgot to bring the documents.", answer: "were", type: 'fill_in_the_blank', explanation: "Cấu trúc đảo ngữ: 'Not only + Trợ động từ + S + V...'. Với động từ tobe ở quá khứ: 'Not only were you late'." },
                        { id: 3, text: "Only at the end of the interview ______ I (think) I had a chance of getting the job.", answer: "did", type: 'fill_in_the_blank', explanation: "Đảo ngữ với 'Only + trạng ngữ chỉ thời gian'. Mượn trợ động từ 'did' cho động từ 'think' ở quá khứ: 'did I think'." },
                        { id: 4, text: "Barely ______ the politician (start) to speak when the crowd began to boo.", answer: "had", type: 'fill_in_the_blank', explanation: "Cấu trúc: 'Barely + had + S + Vp2 + when...'. Đây là dạng đảo ngữ 'vừa mới... thì'." },
                        { id: 5, text: "Seldom ______ we (receive) any apology when mistakes are made.", answer: "do", type: 'fill_in_the_blank', explanation: "Đảo ngữ với trạng từ phủ định 'Seldom'. Động từ 'receive' ở hiện tại đơn -> mượn trợ động từ 'do': 'Seldom do we receive'." },
                        { id: 6, text: "My dad’s never been abroad, and nor ______ my mum (have).", answer: "has", type: 'fill_in_the_blank', explanation: "Cấu trúc 'nor + trợ động từ + S'. Câu trước dùng hiện tại hoàn thành 'has never been' -> câu sau dùng 'has'." },
                        { id: 7, text: "Never in all my life ______ I (see) such a horrible thing.", answer: "have", type: 'fill_in_the_blank', explanation: "Đảo ngữ với 'Never'. Dùng thì hiện tại hoàn thành để diễn tả trải nghiệm từ trước đến nay: 'Never... have I seen'." },
                        { id: 8, text: "______ I (be) you, I’d start looking for another job.", answer: "Were", type: 'fill_in_the_blank', explanation: "Đảo ngữ câu điều kiện loại 2: Bỏ 'If' và đưa 'Were' lên trước chủ ngữ." },
                        { id: 9, text: "At no time ______ I (suspect) that he was a killer.", answer: "did", type: 'fill_in_the_blank', explanation: "Đảo ngữ với cụm từ 'At no time'. Mượn trợ động từ 'did' vì hành động xảy ra trong quá khứ." },
                        { id: 10, text: "Nowhere ______ I (have) ever such bad service.", answer: "have", type: 'fill_in_the_blank', explanation: "Đảo ngữ với 'Nowhere'. Dùng hiện tại hoàn thành với 'ever' để nhấn mạnh: 'Nowhere have I ever had'." },
                        { id: 11, text: "Not until you (grow up) ______ will we let you live independently.", answer: "grow up", type: 'fill_in_the_blank', explanation: "Đảo ngữ với 'Not until'. Lưu ý: Đảo ngữ xảy ra ở mệnh đề CHÍNH, mệnh đề sau 'until' giữ nguyên: 'Not until you grow up did we...' (ở đây đề bài đã đảo 'will we let')." },
                        { id: 12, text: "Only when the plane landed safely ______ he (calm down).", answer: "did", type: 'fill_in_the_blank', explanation: "Đảo ngữ với 'Only when'. Đảo ngữ ở mệnh đề chính. Quá khứ đơn mượn trợ động từ 'did': 'did he calm down'." },
                        { id: 13, text: "Only after I (check) ______ that the burglars had left, did I call the police.", answer: "had checked", type: 'fill_in_the_blank', explanation: "Đảo ngữ với 'Only after'. Hành động kiểm tra xảy ra trước hành động gọi cảnh sát (quá khứ đơn 'did I call') nên chia quá khứ hoàn thành: 'had checked'." },
                        { id: 14, text: "No sooner ______ the company (launch) its new product than it went bankrupt.", answer: "had", type: 'fill_in_the_blank', explanation: "Cấu trúc: 'No sooner + had + S + Vp2 + than...'. Nghĩa là 'vừa mới... thì'." },
                        { id: 15, text: "Under no circumstances ______ employees (allow) to leave the building without permission.", answer: "are", type: 'fill_in_the_blank', explanation: "Đảo ngữ với 'Under no circumstances' (không trong bất cứ hoàn cảnh nào). Sử dụng tobe bị động ở hiện tại: 'are employees allowed' (ở đây chỉ cần điền 'are')." },
                        { id: 16, text: "Not only ______ he (spend) all his money but he borrowed some from me as well.", answer: "did", type: 'fill_in_the_blank', explanation: "Cấu trúc 'Not only + trợ động từ + S + V...'. Quá khứ đơn mượn trợ động từ 'did': 'did he spend'." },
                        { id: 17, text: "Scarcely ______ I (open) the front door when I heard a noise from the kitchen.", answer: "had", type: 'fill_in_the_blank', explanation: "Cấu trúc: 'Scarcely + had + S + Vp2 + when...'. Diễn tả hành động vừa mới xảy ra thì hành động khác xen vào." },
                        { id: 18, text: "Rarely ______ people (care) about the environment enough to give up driving their cars.", answer: "do", type: 'fill_in_the_blank', explanation: "Đảo ngữ với trạng từ phủ định 'Rarely'. Hiện tại đơn mượn trợ động từ 'do': 'Rarely do people care'." },
                        { id: 19, text: "______ we (win) the competition, we would have had a free trip to Moscow.", answer: "Had", type: 'fill_in_the_blank', explanation: "Đảo ngữ câu điều kiện loại 3: Bỏ 'If' và đưa 'Had' lên đầu câu: 'Had we won...'." },
                        { id: 20, text: "No sooner ______ I (accept) the job than they told me I had to work at weekends.", answer: "had", type: 'fill_in_the_blank', explanation: "Cấu trúc 'No sooner + had + S + Vp2 + than...'." },
                        { id: 21, text: "So bad ______ (be) her singing that she was booed off the stage.", answer: "was", type: 'fill_in_the_blank', explanation: "Cấu trúc đảo ngữ: 'So + tính từ + V + S + that...'. Ở đây dùng 'was' chia theo chủ ngữ 'her singing'." },
                        { id: 22, text: "Little ______ he (say) about it.", answer: "did", type: 'fill_in_the_blank', explanation: "Đảo ngữ với 'Little'. Mượn trợ động từ 'did' cho thì quá khứ đơn: 'Little did he say'." },
                        { id: 23, text: "Not until she left ______ I (know) that she had been very important to me.", answer: "did", type: 'fill_in_the_blank', explanation: "Đảo ngữ với 'Not until'. Đảo ngữ ở mệnh đề chính. Quá khứ đơn mượn 'did': 'did I know'." },
                        { id: 24, text: "In no way ______ the shop (can hold) responsible for customers’ lost property.", answer: "can", type: 'fill_in_the_blank', explanation: "Đảo ngữ với cụm từ 'In no way'. Đưa trợ động từ khuyết thiếu 'can' lên trước chủ ngữ: 'In no way can the shop hold...'." },
                        { id: 25, text: "Only when Tom saw his wife’s face ______ he (understand) the meaning of the comment.", answer: "did", type: 'fill_in_the_blank', explanation: "Đảo ngữ với 'Only when'. Đảo mệnh đề chính ở quá khứ đơn: 'did he understand'." },
                        { id: 26, text: "Only by training hard every day ______ you (become) a good athlete.", answer: "will/can", type: 'fill_in_the_blank', explanation: "Đảo ngữ với 'Only by'. Đảo mệnh đề chính sử dụng trợ động từ 'will' hoặc 'can'." },
                        { id: 27, text: "First (come) ______ the ambulance, then (come) ______ the police.", answer: "comes/came", type: 'fill_in_the_blank', explanation: "Đảo ngữ toàn bộ với trạng từ chỉ phương hướng/thứ tự: 'Trạng từ + V + S'." },
                        { id: 28, text: "On the grass ______ an enormous frog (sit).", answer: "sat", type: 'fill_in_the_blank', explanation: "Đảo ngữ toàn bộ với cụm trạng ngữ chỉ nơi chốn: 'Cụm trạng ngữ + V + S'." },
                        { id: 29, text: "He had no money, nor ______ he (know) anybody from whom he could borrow.", answer: "did", type: 'fill_in_the_blank', explanation: "Cấu trúc 'nor + trợ động từ + S + V'. Ở quá khứ đơn mượn 'did': 'nor did he know'." },
                        { id: 30, text: "Not a word ______ he (say) when he saw his wife hand in hand with another man.", answer: "did", type: 'fill_in_the_blank', explanation: "Đảo ngữ để nhấn mạnh với 'Not + N'. Quá khứ đơn mượn 'did': 'Not a word did he say'." },
                    ]
                }
            ]
        },
        {
            id: 'inversions-ex-2',
            title: 'BÀI TẬP 2: VIẾT LẠI CÂU',
            category: 'Inversions',
            sections: [
                {
                    title: 'Exercise 2: Rewrite the following sentences using inversions',
                    subtitle: 'Viết lại câu sử dụng cấu trúc đảo ngữ (Câu 1-30)',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "The only reason the party was a success was that a famous film star attended.", answer: "Had it not been for a famous film star attending, the party wouldn't have been a success.", type: 'fill_in_the_blank' },
                        { id: 2, text: "He had hardly left the office when the telephone rang.", answer: "No sooner had he left the office than the telephone rang.", type: 'fill_in_the_blank' },
                        { id: 3, text: "Alice and Charles did not decide to move to a bigger house until after the birth of their second child.", answer: "Only when their second child was born did Alice and Charles decide to move to a bigger house.", type: 'fill_in_the_blank' },
                        { id: 4, text: "If the river rises any higher, the town will be flooded.", answer: "Should the river rise any higher, the town will be flooded.", type: 'fill_in_the_blank' },
                        { id: 5, text: "If I were you, I’d accept the offer.", answer: "Were I you, I'd accept the offer.", type: 'fill_in_the_blank' },
                        { id: 6, text: "If the chemical were leaked, a large area of the sea would be contaminated.", answer: "Were the chemical to be leaked, a large area of the sea would be contaminated.", type: 'fill_in_the_blank' },
                        { id: 7, text: "If it hadn’t been for Henry, I might not have met you.", answer: "Had it not been for Henry, I might not have met you.", type: 'fill_in_the_blank' },
                        { id: 8, text: "Tom never seems worried about his future.", answer: "Never does Tom seem worried about his future.", type: 'fill_in_the_blank' },
                        { id: 9, text: "We won’t tell anybody the good news until we’re certain it’s true.", answer: "Not until we're certain it's true will we tell anybody the good news.", type: 'fill_in_the_blank' },
                        { id: 10, text: "There is a red flower tree near the old pagoda.", answer: "Near the old pagoda is a red flower tree.", type: 'fill_in_the_blank' },
                        { id: 11, text: "The dancer moved so gracefully that he appeared to be skating.", answer: "So gracefully did the dancer move that he appeared to be skating.", type: 'fill_in_the_blank' },
                        { id: 12, text: "She is so ignorant that she has never paid attention to any boys.", answer: "Such is her ignorance that she has never paid attention to any boys.", type: 'fill_in_the_blank' },
                        { id: 13, text: "You should never park on double yellow lines.", answer: "Under no circumstances should you park on double yellow lines.", type: 'fill_in_the_blank' },
                        { id: 14, text: "John certainly can’t be held responsible for the accident.", answer: "In no way can John be held responsible for the accident.", type: 'fill_in_the_blank' },
                        { id: 15, text: "The police didn’t at all suspect that the judge was the murder.", answer: "Little did the police suspect that the judge was the murder.", type: 'fill_in_the_blank' },
                        { id: 16, text: "You won’t find fossils like this anywhere else.", answer: "Nowhere else will you find fossils like this.", type: 'fill_in_the_blank' },
                        { id: 17, text: "She has never been so happy before.", answer: "Never before has she been so happy.", type: 'fill_in_the_blank' },
                        { id: 18, text: "She realized that she didn’t lock the door after the train had left.", answer: "Only after the train had left did she realize that she didn't lock the door.", type: 'fill_in_the_blank' },
                        { id: 19, text: "It isn’t often that temperatures in Spain fall below 0°C.", answer: "Seldom do temperatures in Spain fall below 0°C.", type: 'fill_in_the_blank' },
                        { id: 20, text: "The door to the basement isn’t to be left open on any account.", answer: "On no account is the door to the basement to be left open.", type: 'fill_in_the_blank' },
                        { id: 21, text: "The only way you can pass the exam is learning hard.", answer: "Only by learning hard can you pass the exam.", type: 'fill_in_the_blank' },
                        { id: 22, text: "I only watch television if I don’t have anything else to do.", answer: "Only when I don’t have anything else to do do I watch television.", type: 'fill_in_the_blank' },
                        { id: 23, text: "There was a great castle directly in front of them.", answer: "Directly in front of them was a great castle.", type: 'fill_in_the_blank' },
                        { id: 24, text: "Bob didn’t remember his mother’s birthday and his sister’s either.", answer: "Bob didn't remember his mother's birthday, nor did his sister.", type: 'fill_in_the_blank' },
                        { id: 25, text: "They managed to get our attention only by shouting and waving their arms.", answer: "Only by shouting and waving their arms did they manage to get our attention.", type: 'fill_in_the_blank' },
                        { id: 26, text: "This restaurant rarely gets so crowded.", answer: "Rarely does this restaurant get so crowded.", type: 'fill_in_the_blank' },
                        { id: 27, text: "You will only understand him if you speak French.", answer: "Only if you speak French will you understand him.", type: 'fill_in_the_blank' },
                        { id: 28, text: "I had barely started speaking when he interrupted me.", answer: "Barely had I started speaking when he interrupted me.", type: 'fill_in_the_blank' },
                        { id: 29, text: "Harvard is one of the best universities in the world.", answer: "One of the best universities in the world is Harvard.", type: 'fill_in_the_blank' },
                        { id: 30, text: "The lion which was lying under the tree was one of the biggest one I had ever seen.", answer: "Under the tree was lying the lion which was one of the biggest one I had ever seen.", type: 'fill_in_the_blank' }
                    ]
                }
            ]
        },
        {
            id: 'inversions-ex-3',
            title: 'BÀI TẬP 3: TRẮC NGHIỆM',
            category: 'Inversions',
            sections: [
                {
                    title: 'Exercise 3: Choose the correct answer',
                    subtitle: 'Chọn đáp án đúng (Câu 1-30)',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "______ had we arrived at the beach when it started pouring with rain.", answer: "B", type: 'multiple_choice', options: ["No sooner", "Hardly", "As soon as", "The minute"] },
                        { id: 2, text: "Not only ______ to determine the depth of the ocean floor, but it is also used to locate oil.", answer: "C", type: 'multiple_choice', options: ["seismology is used", "using seismology", "is seismology used", "to use seismology"] },
                        { id: 3, text: "______ the phone rang later that night did Ann remember the appointment.", answer: "C", type: 'multiple_choice', options: ["No sooner", "Only", "Not until", "Just before"] },
                        { id: 4, text: "Not only ______ in the field of psychology but animal behavior is examined as well.", answer: "B", type: 'multiple_choice', options: ["is studied human behavior", "is human behavior studied", "did human behavior study", "human behavior studied"] },
                        { id: 5, text: "______ be impolite to our parents.", answer: "C", type: 'multiple_choice', options: ["Not in any circumstances should we", "In any circumstances shouldn’t we", "In no circumstances should we", "No circumstances should we not"] },
                        { id: 6, text: "______ more information, please telephone our main office.", answer: "B", type: 'multiple_choice', options: ["You need", "Should you need", "You should need", "If you needed"] },
                        { id: 7, text: "______ in my seventies and rather unfit, I might consider taking up squash.", answer: "A", type: 'multiple_choice', options: ["Were I not", "Was I not", "Weren’t I", "If I am not"] },
                        { id: 8, text: "______, I would invite her to the party.", answer: "D", type: 'multiple_choice', options: ["Had I known her", "Should I know her", "Were I know her", "Were I to know her"] },
                        { id: 9, text: "______ I known what he was really like, I would never have married him.", answer: "C", type: 'multiple_choice', options: ["Have", "Did", "Had", "Would"] },
                        { id: 10, text: "Seldom ______ such a beautiful sight.", answer: "A", type: 'multiple_choice', options: ["have I seen", "I have ever seen", "I saw", "did I ever see"] },
                        { id: 11, text: "Rarely ______ last longer than an hour.", answer: "A", type: 'multiple_choice', options: ["do tornadoes", "tornadoes", "tornadoes that", "tornadoes do"] },
                        { id: 12, text: "On the battle field ______.", answer: "C", type: 'multiple_choice', options: ["the tanks lay", "did the tanks lie", "lay the tanks", "lied the tanks"] },
                        { id: 13, text: "______ pleased with himself.", answer: "A", type: 'multiple_choice', options: ["Only after John received the first prize was he", "Only after John received the first prize he was", "After John received the first prize only was he", "After John received the first prize only he was"] },
                        { id: 14, text: "______ received law degrees as today.", answer: "D", type: 'multiple_choice', options: ["Never so many women have", "The women aren’t never", "Women who have never", "Never have so many women"] },
                        { id: 15, text: "______ most of the soldiers gave up!", answer: "B", type: 'multiple_choice', options: ["So was the exercise difficult that", "So difficult was the exercise that", "So was the exercise difficult that did", "So difficult was the exercise that did"] },
                        { id: 16, text: "______ advised on what and how to prepare for the interview, he might have got the job.", answer: "A", type: 'multiple_choice', options: ["Had he been", "If he had", "Unless he had been", "Were he to be"] },
                        { id: 17, text: "Only by making a good impression ______ the job.", answer: "D", type: 'multiple_choice', options: ["will you give", "you will be given", "you give", "will you be given"] },
                        { id: 18, text: "Little ______ that Ted was a secret agent.", answer: "B", type: 'multiple_choice', options: ["did the embassy staff realized", "did the embassy staff realize", "the embassy staff realized", "realized the embassy staff"] },
                        { id: 19, text: "On no account ____.", answer: "C", type: 'multiple_choice', options: ["the house should be left unlocked", "left unlocked the house", "should the house be left unlocked", "should the house left unlocked"] },
                        { id: 20, text: "Only when ______ can we begin the program.", answer: "B", type: 'multiple_choice', options: ["has Peter arrived", "Peter has arrived", "arrived has Peter", "arrived Peter has"] },
                        { id: 21, text: "At no time ______ of anything out of usual.", answer: "B", type: 'multiple_choice', options: ["I was aware", "was I aware", "do I aware", "I aware"] },
                        { id: 22, text: "Only if ______ can we get into the house.", answer: "A", type: 'multiple_choice', options: ["you have a key", "have you a key", "do you have a key", "have a key do you"] },
                        { id: 23, text: "______ graduated from college.", answer: "C", type: 'multiple_choice', options: ["Nowhere does he found a job after he had", "Not anywhere did he find a job after he had", "Nowhere did he find a job after he had", "Nowhere did he find a job after he had"] },
                        { id: 24, text: "Scarcely ______ each other since they had a quarrel.", answer: "B", type: 'multiple_choice', options: ["do they talk to", "have they talked to", "were they talk to", "had they talk to"] },
                        { id: 25, text: "Tom: “I don’t believe he’s telling the truth.” Ann: “______. The facts don’t add up.”", answer: "C", type: 'multiple_choice', options: ["So do I", "Neither I do", "Neither do I", "I don’t neither"] },
                        { id: 26, text: "Fiona: “Jane bought a new dress this morning.” Betty: “What a coincidence!”", answer: "C", type: 'multiple_choice', options: ["So have I", "Nor did I", "So did I", "Nor have I"] },
                        { id: 27, text: "______ during his dinner with us.", answer: "D", type: 'multiple_choice', options: ["Not did my grandfather say a single word", "Not said a single word did my grandfather", "Not my grandfather said a single word", "Not a single word did my grandfather say"] },
                        { id: 28, text: "In no way ______ her wedding.", answer: "C", type: 'multiple_choice', options: ["can I come", "I can come to", "can I come to", "can come to"] },
                        { id: 29, text: "Silently ______.", answer: "A", type: 'multiple_choice', options: ["approaching them is a lion", "a lion is approaching them", "is a lion approaching them", "a lion approaches them"] },
                        { id: 30, text: "Barely ______ drying her hair when her first guests arrived.", answer: "C", type: 'multiple_choice', options: ["had she finish", "she had finished", "had she finished", "had finished she"] }
                    ]
                }
            ]
        },
        {
            id: 'inversions-ex-4',
            title: 'BÀI TẬP 4: CÂU ĐỒNG NGHĨA',
            category: 'Inversions',
            sections: [
                {
                    title: 'Exercise 4: Mark the letter A, B, C or D to indicate the sentence that is closest in meaning',
                    subtitle: 'Câu đồng nghĩa (Câu 1-15)',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "He got down to writing the letter as soon as he returned from his walk.", answer: "D", type: 'multiple_choice', options: ["No sooner had he returned from his walk when he got down to writing the letter.", "Not until he returned from his walk did he get down to writing the letter.", "Only after he had returned from his walk did he get down to writing the letter.", "Hardly had he returned from his walk when he got down to writing the letter."] },
                        { id: 2, text: "She just had time to put up her umbrella before the rain came down in torrents.", answer: "A", type: 'multiple_choice', options: ["No sooner had she put up her umbrella than the rain came down in torrents.", "The rain came down in torrents as soon as she just has time to put up her umbrella.", "Only when she had put up her umbrella did the rain come down in torrents.", "If she hadn’t time to put up her umbrella, the rain wouldn’t have come down in torrents."] },
                        { id: 3, text: "If you want to save your eyesight, you must operate immediately.", answer: "B", type: 'multiple_choice', options: ["Unless you want to save your eyesight, you mustn’t operate immediately.", "Only by operating immediately can you save your eyesight.", "Provided that you must operate immediately, you can save your eyesight.", "If you did operate immediately, you couldn’t save your eyesight."] },
                        { id: 4, text: "I only realized what I had missed when they told me about it later.", answer: "C", type: 'multiple_choice', options: ["Only after I had realized what I had missed did they tell me about it later.", "As soon as they told me about it I realized what I had missed.", "Only when they told me about it later did I realize what I had missed.", "They told me about it and I realized what I had missed."] },
                        { id: 5, text: "The demand was so great that they had to reprint the book immediately.", answer: "A", type: 'multiple_choice', options: ["So great was the demand that they had to reprint the book immediately.", "So great the demand was that they had to reprint the book immediately.", "Such great was the demand that they had to reprint the book immediately.", "Such was the demand great that they had to reprint the book immediately."] },
                        { id: 6, text: "She was so busy that she couldn’t answer the phone.", answer: "B", type: 'multiple_choice', options: ["She was very busy that she couldn’t answer the phone.", "So busy was she that she couldn’t answer the phone.", "She was too busy not to answer the phone.", "She was very busy so that she couldn’t answer the phone."] },
                        { id: 7, text: "She didn’t read the reference books. She wouldn’t be able to finish the test.", answer: "A", type: 'multiple_choice', options: ["Had she read the reference books, she would have been able to finish the test.", "If she had read the reference books, she could finish the test.", "Although she didn’t read the reference books, she was able to finish the test.", "Not having read the reference books, she couldn’t finish the test."] },
                        { id: 8, text: "It was not until the sun was shining brightly that the little girl woke up.", answer: "C", type: 'multiple_choice', options: ["No sooner was the sun shining brightly than the little girl woke up.", "Not until the little girl woke up was the sun shining brightly.", "Not until the sun was shining brightly did the little girl wake up.", "As soon as the little girl woke up, the sun hasn’t shone brightly yet."] },
                        { id: 9, text: "We couldn’t solve the problem until our teacher arrived.", answer: "D", type: 'multiple_choice', options: ["Not until we solved the problem could our teacher arrive.", "When our teacher arrived, we solved the problem.", "Until our teacher arrived, we were able to solve the problem.", "Not until our teacher arrived could we solve the problem."] },
                        { id: 10, text: "The mistake in the accounts was not noticed until the figures were re-checked.", answer: "C", type: 'multiple_choice', options: ["It was not until the mistake in the accounts was noticed that the figures were re-checked.", "Once re-checking the figures, the mistake in the accounts was noticed.", "The mistake in the accounts only came to light when the figures were re-checked.", "When the figures were re-checked they came to light the mistake in the accounts."] },
                        { id: 11, text: "You won’t find a more dedicated worker anywhere than Mrs Jones.", answer: "B", type: 'multiple_choice', options: ["Mrs Jones is the most dedicated worker you won’t find nowhere.", "Nowhere will you find a more dedicated worker than Mrs Jones.", "Nowhere will not you find a more dedicated worker than Mrs Jones.", "Mrs Jones can’t be found in nowhere."] },
                        { id: 12, text: "The outcome of the election was never in doubt.", answer: "A", type: 'multiple_choice', options: ["At no time was the outcome of the election in doubt.", "At no time the outcome of the election was in doubt.", "Never in doubt was the outcome of the election.", "By no means was the outcome of the election been suspected."] },
                        { id: 13, text: "The only way to eliminate world terrorism is by united opposition.", answer: "B", type: 'multiple_choice', options: ["Only with united opposition could we eliminate terrorism.", "Only by united opposition can we eliminate terrorism.", "Only in this way can world terrorism be eliminated.", "Only then can we eliminate terrorism."] },
                        { id: 14, text: "He forgot about the gun until he got home.", answer: "C", type: 'multiple_choice', options: ["Not until he got home did he forget about the gun.", "Not until he got home did he remember about the gun.", "Not until he had got home did he remember about the gun.", "Not until he had got home did he forget about the gun."] },
                        { id: 15, text: "The truth only came out on the publication of the general’s personal diaries.", answer: "D", type: 'multiple_choice', options: ["Only by publishing the general’s personal diaries, did the truth come out.", "Not until the general’s personal diaries published did the truth come out.", "Hardly were the general’s personal diaries published than the truth came out.", "Only when the general’s personal diaries were published did the truth come out."] }
                    ]
                }
            ]
        },
        {
            id: 'inversions-ex-5',
            title: 'BÀI TẬP 5: TÌM LỖI SAI',
            category: 'Inversions',
            sections: [
                {
                    title: 'Exercise 5: Mark the letter A, B, C or D to indicate the underlined part that needs correction',
                    subtitle: 'Tìm lỗi sai (Câu 1-30)',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "No sooner had he appointed to the post than the new editor fell ill.", answer: "B", type: 'multiple_choice', options: ["had", "appointed (should be been appointed)", "than", "fell ill"] },
                        { id: 2, text: "No sooner had the announcement been made when everyone started complaining.", answer: "C", type: 'multiple_choice', options: ["No sooner", "been made", "when (should be than)", "started complaining"] },
                        { id: 3, text: "Had it not been for the dead of the Prime Minister, the bill would have been passed.", answer: "B", type: 'multiple_choice', options: ["Had it not been for", "dead (should be death)", "the", "would have been passed"] },
                        { id: 4, text: "Not until John had received the offer of promotion in writing he celebrated.", answer: "D", type: 'multiple_choice', options: ["Not until", "had received", "in writing", "he celebrated (should be did he celebrate)"] },
                        { id: 5, text: "Only by hard training every day can we become a good athlete.", answer: "D", type: 'multiple_choice', options: ["Only", "hard training", "can we become", "a (should be good athletes or we... an athlete)"] },
                        { id: 6, text: "Never before there have been more people out of work in this country.", answer: "B", type: 'multiple_choice', options: ["Never before", "there have (should be have there)", "more", "out of work"] },
                        { id: 7, text: "Not until I have left home did I realize how much my father meant to me.", answer: "A", type: 'multiple_choice', options: ["I have left (should be had I left)", "did I realize", "much", "to me"] },
                        { id: 8, text: "She told his son only when he grew up he could understand it.", answer: "D", type: 'multiple_choice', options: ["told", "only when", "grew up", "he could (should be could he)"] },
                        { id: 9, text: "The witness reported that standing in the doorway a man with a gun was.", answer: "D", type: 'multiple_choice', options: ["The", "reported", "standing", "a man with a gun was (should be was a man with a gun)"] },
                        { id: 10, text: "Although he has just returned from the United States, not a penny he gets.", answer: "D", type: 'multiple_choice', options: ["has just returned", "the", "not", "he gets (should be does he get)"] },
                        { id: 11, text: "Little he knows about the surprise that awaited him when he arrived there.", answer: "A", type: 'multiple_choice', options: ["he knows (should be does he know)", "about", "that", "awaited"] },
                        { id: 12, text: "It was not until she arrived home did she remember her appointment with the doctor.", answer: "B", type: 'multiple_choice', options: ["arrived", "did she remember (should be that she remembered - it was not until ... THAT)", "with", "the doctor"] },
                        { id: 13, text: "Never in the history of humanity has there been more people living on this relatively small planet.", answer: "B", type: 'multiple_choice', options: ["humanity", "has (should be have - more people)", "living", "relatively"] },
                        { id: 14, text: "So extensive the lakes are that they are viewed as the largest bodies of fresh water in the world.", answer: "A", type: 'multiple_choice', options: ["the lakes are (should be are the lakes)", "are viewed as", "largest", "of fresh water"] },
                        { id: 15, text: "It was not until this morning when I heard the notification.", answer: "B", type: 'multiple_choice', options: ["this morning", "when (should be that - it was not until ... THAT)", "heard", "notification"] },
                        { id: 16, text: "Never before have the leaders of those two countries meet in an earnest attempt to resolve their differences.", answer: "C", type: 'multiple_choice', options: ["have", "those", "meet (should be met)", "earnest attempt"] },
                        { id: 17, text: "Not until I was on my way to the airport that I realized I had left my passport at home.", answer: "B", type: 'multiple_choice', options: ["I was (should be was I)", "that I realized (actually Not until ... did I realize - or it was not until ... that)", "had left", "at home"] },
                        { id: 18, text: "Such was he surprised that he nearly fell off his chair.", answer: "B", type: 'multiple_choice', options: ["was", "he surprised (should be his surprise)", "nearly", "fell off"] },
                        { id: 19, text: "Has he studied more, he would have been able to pass the exam.", answer: "A", type: 'multiple_choice', options: ["Has he studied (should be Had he studied)", "would have been", "to pass", "the exam"] },
                        { id: 20, text: "All the way along the winding street he came.", answer: "D", type: 'multiple_choice', options: ["All the way", "along", "winding", "he came (should be came he - wait, pronoun as subject usually no inversion)"] },
                        { id: 21, text: "Rarely has the federal government of the United States grown during a Republican administration.", answer: "D", type: 'multiple_choice', options: ["has", "federal government", "the", "grow (should be grown)"] },
                        { id: 22, text: "As fuel prices rose, bus companies raised their fares and neither did the airlines.", answer: "C", type: 'multiple_choice', options: ["rose", "raised", "neither (should be so)", "did the airlines"] },
                        { id: 23, text: "Not only she passed the exam but she also got a scholarship.", answer: "A", type: 'multiple_choice', options: ["she passed (should be did she pass)", "but she also", "got", "scholarship"] },
                        { id: 24, text: "Only by working hard you can achieve your goal.", answer: "C", type: 'multiple_choice', options: ["working", "hard", "you can achieve (should be can you achieve)", "goal"] },
                        { id: 25, text: "John never comes to class on time and so does Peter.", answer: "C", type: 'multiple_choice', options: ["comes", "on time", "so (should be neither)", "does Peter"] },
                        { id: 26, text: "Should I needed more help, I could call my neighbors and my friends.", answer: "A", type: 'multiple_choice', options: ["I needed (should be I need)", "help", "could call", "neighbors"] },
                        { id: 27, text: "Hardly had he finished the work than his wife came in with two policemen.", answer: "B", type: 'multiple_choice', options: ["had he finished", "than (should be when)", "came in", "policemen"] },
                        { id: 28, text: "So fluent does she speak the language that many people think she’s English.", answer: "A", type: 'multiple_choice', options: ["fluent (should be fluently)", "does she speak", "that", "English"] },
                        { id: 29, text: "No sooner when had he got home than he was called back to the office.", answer: "A", type: 'multiple_choice', options: ["when (remove when)", "had he got", "than", "was called back"] },
                        { id: 30, text: "Under no circumstances you should approach the man.", answer: "C", type: 'multiple_choice', options: ["Under", "circumstances", "you should (should be should you)", "approach"] }
                    ]
                }
            ]
        }
    ]
};
