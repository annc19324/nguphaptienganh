export const subjunctiveTopic = {
    id: 'subjunctive-topic',
    title: 'CHUYÊN ĐỀ 6: THỨC GIẢ ĐỊNH (SUBJUNCTIVE MOOD)',
    category: 'Subjunctive',
    children: [
        {
            id: 'subjunctive-theory',
            title: 'LÝ THUYẾT: THỨC GIẢ ĐỊNH',
            category: 'Subjunctive',
            sections: [
                {
                    title: '1. S + V + that + S + (not) + V (present subjunctive)',
                    subtitle: 'Cấu trúc: S + V(any tense) + that + S + (not) + V(bare/present subjunctive)',
                    type: 'custom',
                    content: [
                        {
                            subtitle: 'Các động từ thường gặp',
                            cases: [
                                { label: 'advise', formula: 'khuyên bảo' },
                                { label: 'demand', formula: 'đòi hỏi, yêu cầu' },
                                { label: 'prefer', formula: 'thích hơn' },
                                { label: 'require', formula: 'đòi hỏi, yêu cầu' },
                                { label: 'insist', formula: 'khăng khăng đòi' },
                                { label: 'propose', formula: 'đề nghị, đề xuất' },
                                { label: 'stipulate', formula: 'quy định' },
                                { label: 'command', formula: 'ra lệnh' },
                                { label: 'move', formula: 'đề nghị' },
                                { label: 'recommend', formula: 'giới thiệu, tiến cử' },
                                { label: 'suggest', formula: 'đề nghị, gợi ý' },
                                { label: 'decree', formula: 'ra lệnh' },
                                { label: 'order', formula: 'ra lệnh' },
                                { label: 'request', formula: 'yêu cầu' },
                                { label: 'urge', formula: 'thúc giục' },
                                { label: 'ask', formula: 'yêu cầu' }
                            ]
                        }
                    ]
                },
                {
                    title: '2. It + be + Adj + that + S + (not) + V (present subjunctive)',
                    subtitle: 'Cấu trúc: It + be(any tense) + Adj + that + S + (not) + V(bare)',
                    type: 'custom',
                    content: [
                        {
                            subtitle: 'Các tính từ thường gặp',
                            cases: [
                                { label: 'important', formula: 'quan trọng' },
                                { label: 'necessary', formula: 'cần thiết' },
                                { label: 'urgent', formula: 'khẩn thiết' },
                                { label: 'obligatory', formula: 'bắt buộc' },
                                { label: 'essential', formula: 'thiết yếu' },
                                { label: 'advisable', formula: 'nên, thích hợp' },
                                { label: 'recommended', formula: 'được giới thiệu' },
                                { label: 'required', formula: 'được yêu cầu' },
                                { label: 'mandatory', formula: 'bắt buộc' },
                                { label: 'proposed', formula: 'được đề nghị' },
                                { label: 'suggested', formula: 'được gợi ý' },
                                { label: 'vital', formula: 'sống còn' },
                                { label: 'crucial', formula: 'chủ yếu, quyết định' },
                                { label: 'imperative', formula: 'cấp bách' }
                            ]
                        }
                    ]
                },
                {
                    title: '3. Danh từ tương ứng',
                    subtitle: 'Các danh từ xuất phát từ động từ/tính từ trên cũng bắt buộc mệnh đề sau nó ở dạng giả định.',
                    type: 'list',
                    content: [
                        'demand (yêu cầu)',
                        'recommendation (sự giới thiệu)',
                        'insistence (sự khăng khăng)',
                        'request (lời yêu cầu)',
                        'proposal (sự đề xuất)',
                        'suggestion (sự gợi ý)',
                        'preference (sự thích hơn)',
                        'importance (sự quan trọng)'
                    ]
                },
                {
                    title: '4. Cấu trúc câu giả định khác',
                    type: 'custom',
                    content: [
                        {
                            subtitle: 'Would Rather',
                            cases: [
                                { label: 'Hiện tại/Tương lai', formula: 'S1 + would rather that + S2 + V(past simple)' },
                                { label: 'Quá khứ', formula: 'S1 + would rather that + S2 + V(past perfect)' }
                            ]
                        },
                        {
                            subtitle: 'Câu điều kiện (Conditionals)',
                            cases: [
                                { label: 'Loại 2 (Hiện tại)', formula: 'If + S + V(past simple), S + would/could + V(bare)' },
                                { label: 'Loại 3 (Quá khứ)', formula: 'If + S + V(past perfect), S + would/could + have + Vp2' }
                            ]
                        },
                        {
                            subtitle: 'Câu ước (Wishes / If only)',
                            cases: [
                                { label: 'Trái với hiện tại', formula: 'S + wish / If only + S + V(past simple)' },
                                { label: 'Trái với quá khứ', formula: 'S + wish / If only + S + V(past perfect)' },
                                { label: 'Phàn nàn/Tương lai', formula: 'S + wish / If only + S + would + V(bare)' }
                            ]
                        },
                        {
                            subtitle: 'As if / As though (Như thể là)',
                            cases: [
                                { label: 'Trái với hiện tại', formula: 'S1 + V(present) + as if/though + S2 + V(past simple)' },
                                { label: 'Trái với quá khứ', formula: 'S1 + V(present) + as if/though + S2 + V(past perfect)' }
                            ]
                        },
                        {
                            subtitle: 'It\'s time',
                            cases: [
                                { label: 'Đã đến lúc ai làm gì', formula: 'It\'s (high/about) time + S + V(past simple)' },
                                { label: 'Cấu trúc khác', formula: 'It\'s time for sb to do st' }
                            ]
                        },
                        {
                            subtitle: 'Otherwise (Kẻo, nếu không thì)',
                            cases: [
                                { label: 'Hiện tại', formula: 'S + V(present) + otherwise + S + would/could + V(bare)' },
                                { label: 'Quá khứ', formula: 'S + V(past) + otherwise + S + would/could + have + Vp2' }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'subjunctive-ex-1',
            title: 'BÀI TẬP 1: TÌM LỖI SAI (Error Identification)',
            category: 'Subjunctive',
            sections: [
                {
                    title: 'Exercise 1: Find a mistake in each following sentence and correct it.',
                    subtitle: 'Enter the correction for the mistake in the sentence.',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "<b>Henry</b> would rather <b>that</b> his girlfriend <b>work</b> in the same <b>department</b> as he does.", answer: "work", correction: "worked", isExample: true, type: 'error_correction' },
                        { id: 2, text: "It is a <b>recommendation</b> from a <b>doctor</b> that the patient <b>stops</b> <b>smoking</b>.", answer: "stops", correction: "stop", type: 'error_correction' },
                        { id: 3, text: "It is <b>high</b> time I <b>had left</b> <b>for</b> the <b>airport</b>.", answer: "had left", correction: "left", type: 'error_correction' },
                        { id: 4, text: "It is <b>important</b> that we <b>be talked</b> <b>about</b> how developed countries <b>have solved</b> the urbanization problems...", answer: "be talked", correction: "talk", type: 'error_correction' },
                        { id: 5, text: "Is it <b>really</b> necessary that we <b>included</b> new <b>information</b> in the <b>conclusion</b>?", answer: "included", correction: "include", type: 'error_correction' },
                        { id: 6, text: "It is <b>recommended</b> that the presentation <b>were</b> no <b>more</b> than 15 <b>minutes</b>.", answer: "were", correction: "be", type: 'error_correction' },
                        { id: 7, text: "I <b>suggest</b> that we <b>focused</b> <b>on</b> its <b>advantages</b> and disadvantages.", answer: "focused", correction: "focus", type: 'error_correction' },
                        { id: 8, text: "Our Geography <b>teacher</b> also advised <b>that</b> we <b>will talk</b> about issues <b>that</b> are familiar...", answer: "will talk", correction: "talk", type: 'error_correction' },
                        { id: 9, text: "It is <b>important</b> that he <b>gets</b> <b>into</b> a good <b>university</b>.", answer: "gets", correction: "get", type: 'error_correction' },
                        { id: 10, text: "The teacher <b>demanded</b> <b>that</b> the classroom <b>clean</b> <b>immediately</b>.", answer: "clean", correction: "be cleaned", type: 'error_correction' },
                        { id: 11, text: "It is <b>vital</b> that people <b>allow</b> to <b>choose</b> where to <b>live</b>.", answer: "allow", correction: "be allowed", type: 'error_correction' },
                        { id: 12, text: "She <b>requested</b> that everyone <b>in</b> my class <b>attends</b> her <b>presentation</b>.", answer: "attends", correction: "attend", type: 'error_correction' },
                        { id: 13, text: "It is <b>crucial</b> that urban people <b>don't look</b> down <b>on</b> rural <b>people</b>.", answer: "don't look", correction: "not look", type: 'error_correction' },
                        { id: 14, text: "Her parents <b>insisted</b> that she <b>studies</b> <b>hard</b> for <b>GCSE</b>.", answer: "studies", correction: "study", type: 'error_correction' },
                        { id: 15, text: "The doctor <b>suggested</b> that his patient <b>does not stop</b> <b>smoking</b>.", answer: "does not stop", correction: "not stop", type: 'error_correction' },
                        { id: 16, text: "This train <b>is</b> very slow... I wish I <b>catch</b> the <b>earlier</b> <b>train</b>.", answer: "catch", correction: "had caught", type: 'error_correction' },
                        { id: 17, text: "Santiago <b>wishes</b> he <b>didn't spend</b> so <b>much</b> money last <b>night</b>.", answer: "didn't spend", correction: "hadn't spent", type: 'error_correction' },
                        { id: 18, text: "Bob would rather <b>that</b> Jill <b>went</b> to <b>class</b> <b>yesterday</b>.", answer: "went", correction: "had gone", type: 'error_correction' },
                        { id: 19, text: "It <b>is</b> imperative that everyone <b>knows</b> what to <b>do</b> when there is a <b>fire</b>.", answer: "knows", correction: "know", type: 'error_correction' },
                        { id: 20, text: "Public <b>opinion</b> <b>demands</b> <b>that</b> an inquiry <b>held</b>.", answer: "held", correction: "be held", type: 'error_correction' },
                        { id: 21, text: "Marry would rather <b>that</b> her boyfriend <b>would keep</b> his <b>promise</b>.", answer: "would keep", correction: "kept", type: 'error_correction' },
                        { id: 22, text: "The teacher <b>asked</b> that we <b>stopped</b> <b>talking</b> in the <b>class</b>.", answer: "stopped", correction: "stop", type: 'error_correction' },
                        { id: 23, text: "It has <b>been</b> suggested that children <b>will study</b> <b>hard</b>.", answer: "will study", correction: "study", type: 'error_correction' },
                        { id: 24, text: "Jennifer would rather she <b>did not leave</b> her <b>phone</b> at <b>home</b> <b>yesterday</b>.", answer: "did not leave", correction: "had not left", type: 'error_correction' },
                        { id: 25, text: "If this <b>were</b> proven right, you <b>will be</b> considered <b>innocent</b>.", answer: "will be", correction: "would be", type: 'error_correction' },
                        { id: 26, text: "It has been <b>suggested</b> that he <b>forgets</b> the <b>election</b>.", answer: "forgets", correction: "forget", type: 'error_correction' },
                        { id: 27, text: "It was <b>recommended</b> that we <b>will wait</b> for the <b>authorities</b>.", answer: "will wait", correction: "wait", type: 'error_correction' },
                        { id: 28, text: "The landlord <b>requested</b> that John <b>moves</b> <b>out</b> of the <b>apartment</b>.", answer: "moves", correction: "move", type: 'error_correction' },
                        { id: 29, text: "The company <b>asked</b> that employees <b>do not accept</b> personal <b>phone</b> calls during business <b>hours</b>.", answer: "do not accept", correction: "not accept", type: 'error_correction' },
                        { id: 30, text: "It has been <b>proposed</b> that we <b>will change</b> the <b>topic</b>.", answer: "will change", correction: "change", type: 'error_correction' }
                    ]
                }
            ]
        },
        {
            id: 'subjunctive-ex-2',
            title: 'BÀI TẬP 2: TRẮC NGHIỆM (Multiple Choice)',
            category: 'Subjunctive',
            sections: [
                {
                    title: 'Exercise 2: Mark the letter A, B, C, or D to indicate the correct answer',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "I enjoyed the movie very much. I wish I ______ the book from which it was made.", answer: "had read", isExample: true, type: 'multiple_choice', options: ["have read", "had read", "should have read", "am reading"], explanation: "Câu ước cho một sự việc trái với quá khứ (đã xem phim rồi) -> dùng thì Quá khứ hoàn thành (had + V3)." },
                        { id: 2, text: "You are late. If you ______ a few minutes earlier, you ______ him.", answer: "had come/would have met", type: 'multiple_choice', options: ["came/would meet", "had come/would have met", "come/will meet", "had come/would meet"], explanation: "Câu điều kiện loại 3 (diễn tả sự việc trái với quá khứ: thực tế là đã đến muộn) -> cấu trúc: If + S + had V3, S + would have V3." },
                        { id: 3, text: "I can't stand him. He always talks as though he ______ everything.", answer: "knew", type: 'multiple_choice', options: ["knew", "knows", "has known", "had known"], explanation: "Cấu trúc 'as though' (như thể là) diễn tả sự việc không có thật ở hiện tại -> dùng thì Quá khứ đơn." },
                        { id: 4, text: "His doctor suggested that he ______ a short trip abroad.", answer: "take", type: 'multiple_choice', options: ["will take", "would take", "take", "took"], explanation: "Cấu trúc giả định với động từ 'suggested that' -> động từ ở mệnh đề sau luôn ở dạng nguyên thể (không chia/bare infinitive)." },
                        { id: 5, text: "We might have failed if you ______ us a helping hand.", answer: "had not given", type: 'multiple_choice', options: ["have not given", "would not give", "had not given", "did not give"], explanation: "Câu điều kiện loại 3 (trái với quá khứ: thực tế là bạn ĐÃ giúp) -> If + S + had V3." },
                        { id: 6, text: "The law requires that everyone ______ his car checked at least once a month.", answer: "have", type: 'multiple_choice', options: ["has", "have", "had", "will have"], explanation: "Cấu trúc giả định với động từ 'requires that' -> động từ ở dạng nguyên thể (bare infinitive)." },
                        { id: 7, text: "He was busy yesterday, otherwise he ______ to the meeting.", answer: "would have been", type: 'multiple_choice', options: ["would come", "would have been", "could have been", "would be"], explanation: "Cấu trúc 'otherwise' trong quá khứ (trái với thực tế hôm qua bận) -> dùng 'would have + V3'." },
                        { id: 8, text: "If there were no subjunctive mood, English ______ much easier.", answer: "would be", type: 'multiple_choice', options: ["will be", "would have been", "could have been", "would be"], explanation: "Câu điều kiện loại 2 (trái với hiện tại: thực tế là CÓ thức giả định) -> S + would + V." },
                        { id: 9, text: "I don't understand this point of grammar. I wish I ______ it better.", answer: "understood", type: 'multiple_choice', options: ["understood", "would understand", "had understood", "understand"], explanation: "Câu ước cho hiện tại (thực tế là đang không hiểu) -> dùng thì Quá khứ đơn." },
                        { id: 10, text: "It never stops raining here. I wish it ______ raining.", answer: "would stop", type: 'multiple_choice', options: ["stopped", "would stop", "had stopped", "stops"], explanation: "Câu ước diễn tả sự phàn nàn về một thói quen/sự việc ở hiện tại -> dùng cấu trúc 'S + wish + S + would + V'." },
                        { id: 11, text: "I should never have said that. I wish I ______ that.", answer: "hadn't said", type: 'multiple_choice', options: ["didn't say", "wouldn't say", "hadn't said", "don't say"], explanation: "Câu ước cho sự việc trái với quá khứ (lẽ ra không nên nói) -> dùng Quá khứ hoàn thành (hadn't + V3)." },
                        { id: 12, text: "I miss my friends. I wish my friends ______ here right now.", answer: "were", type: 'multiple_choice', options: ["were", "would be", "had been", "are"], explanation: "Câu ước cho sự việc trái với hiện tại (các bạn đang không ở đây) -> dùng Quá khứ đơn (với tobe luôn dùng 'were')." },
                        { id: 13, text: "I speak English terribly. I wish I ______ English well.", answer: "spoke", type: 'multiple_choice', options: ["spoke", "would speak", "had spoken", "speaks"], explanation: "Câu ước cho sự việc trái với hiện tại (đang nói tiếng Anh tệ) -> dùng Quá khứ đơn." },
                        { id: 14, text: "I cannot sleep. The dog next door is making too much noise. I wish it ______ quiet.", answer: "would keep", type: 'multiple_choice', options: ["kept", "would keep", "had kept", "will keep"], explanation: "Câu ước diễn tả sự phàn nàn/mong muốn thay đổi một sự việc gây khó chịu ở hiện tại -> S + wish + S + would + V." },
                        { id: 15, text: "- \"What will you do during winter vacation?\" - \"I don't know, but it's about time ______ something.\"", answer: "I decided", type: 'multiple_choice', options: ["I decided", "I'll decide", "I'd decided", "I'm deciding"], explanation: "Cấu trúc: 'It's about time + S + V2/ed' (Đã đến lúc ai đó nên làm gì)." },
                        { id: 16, text: "He was very busy yesterday, otherwise, he ______ to your birthday party.", answer: "would have come", type: 'multiple_choice', options: ["would come", "came", "would have come", "should come"], explanation: "Cấu trúc 'otherwise' trái với quá khứ (hôm qua bận) -> 'would have + V3'." },
                        { id: 17, text: "The two strangers talked as if they ______ friends for years.", answer: "had been", type: 'multiple_choice', options: ["should be", "had been", "have been", "were"], explanation: "Cấu trúc 'as if' trái với quá khứ -> dùng Quá khứ hoàn thành (thực tế là họ mới gặp nhau, không phải bạn bè từ trước)." },
                        { id: 18, text: "It is about time you ______ harder for the next exam.", answer: "worked", type: 'multiple_choice', options: ["work", "are working", "worked", "have worked"], explanation: "Cấu trúc 'It's about time + S + V2/ed'." },
                        { id: 19, text: "The ceiling in this room doesn't look very safe. It looks as if it ______ down.", answer: "is going to fall", type: 'multiple_choice', options: ["would fall", "falls", "is falling", "is going to fall"], explanation: "Lưu ý: Nếu 'as if' diễn tả một sự việc có khả năng xảy ra cao dựa trên bằng chứng hiện tại (trần nhà trông không an toàn) -> dùng thì hiện tại bình thường hoặc 'be going to'." },
                        { id: 20, text: "Team rules require that each player ______ responsible for memorizing one rule...", answer: "be", type: 'multiple_choice', options: ["is", "was", "be", "were"], explanation: "Cấu trúc giả định với 'require that' -> động từ nguyên thể 'be'." },
                        { id: 21, text: "To avoid unnecessary injury, the coach insisted that the players' tackling drills ______ on the proper way to fall down.", answer: "focus", type: 'multiple_choice', options: ["focused", "focus", "were focused", "to focus"], explanation: "Cấu trúc giả định với 'insisted that' -> động từ ở dạng nguyên thể 'focus'." },
                        { id: 22, text: "I wish I ______ to retake my exams.", answer: "did not have", type: 'multiple_choice', options: ["do not have", "will not have", "am about", "did not have"], explanation: "Câu ước cho sự việc trái với hiện tại (thực tế là đang phải thi lại) -> dùng Quá khứ đơn 'did not have'." },
                        { id: 23, text: "The spaceman felt as if he ______ in a paradise.", answer: "had fallen", type: 'multiple_choice', options: ["had fallen", "falls", "fall", "has fallen"], explanation: "Cấu trúc 'as if' trái với quá khứ (cảm giác của phi hành gia lúc đó) -> dùng Quá khứ hoàn thành." },
                        { id: 24, text: "He looked frightened as if he ______ a ghost.", answer: "had seen", type: 'multiple_choice', options: ["has seen", "had seen", "were", "saw"], explanation: "Cấu trúc 'as if' diễn tả một giả định không có thật trong quá khứ -> dùng Quá khứ hoàn thành." },
                        { id: 25, text: "I wish another more effective teaching method ______ used.", answer: "were", type: 'multiple_choice', options: ["is", "was", "were", "has been"], explanation: "Câu ước cho hiện tại với thể bị động -> dùng 'were + V3/ed' (ở đây chỉ cần 'were')." },
                        { id: 26, text: "She wishes she ______ a fairy now.", answer: "were", type: 'multiple_choice', options: ["was", "were", "is", "are"], explanation: "Câu ước trái với hiện tại. Với động từ tobe, ta luôn dùng 'were' cho tất cả các ngôi." },
                        { id: 27, text: "She spent money as if she ______ plenty of it.", answer: "had had", type: 'multiple_choice', options: ["have", "had", "had had", "should have"], explanation: "Cấu trúc 'as if' trái với quá khứ (thực tế lúc đó cô ấy không có nhiều tiền) -> dùng Quá khứ hoàn thành 'had had'." },
                        { id: 28, text: "The emperor demanded that the thief ______ brought before him.", answer: "be", type: 'multiple_choice', options: ["were", "will be", "was", "be"], explanation: "Cấu trúc giả định với 'demanded that' ở dạng bị động -> dùng 'be + Vp2' (ở đây chỉ cần 'be')." },
                        { id: 29, text: "She talks too much but I wish she ______.", answer: "wouldn't", type: 'multiple_choice', options: ["didn't", "doesn't", "won't", "wouldn't"], explanation: "Câu ước diễn tả sự phàn nàn và mong muốn ai đó thay đổi hành động trong tương lai/hiện tại -> dùng 'wouldn't'." },
                        { id: 30, text: "They will drink wine but I wish they ______.", answer: "wouldn't", type: 'multiple_choice', options: ["didn't", "don't", "won't", "wouldn't"], explanation: "Tương tự câu 29, diễn tả sự phàn nàn về hành động của người khác -> dùng 'wouldn't'." },
                        { id: 31, text: "I demand that he ______ immediately.", answer: "apologize", type: 'multiple_choice', options: ["apologize", "shall apologize", "will apologize", "has apologized"], explanation: "Cấu trúc giả định với 'demand that' -> động từ nguyên thể 'apologize'." },
                        { id: 32, text: "The teacher requires Rose ______ by heart 15 English words each day.", answer: "to learn", type: 'multiple_choice', options: ["learn", "to learn", "must learn", "learning"], explanation: "Lưu ý: Động từ 'require' có 2 cấu trúc: 'require that + S + V(bare)' hoặc 'require sb TO do sth'. Ở đây có tân ngữ 'Rose' -> dùng 'to learn'." },
                        { id: 33, text: "I suggested that she ______ her lawyer before signing the contract.", answer: "should consult", type: 'multiple_choice', options: ["consults", "shall consult", "will consult", "should consult"], explanation: "Trong mệnh đề giả định (sau suggest, recommend...), ta có thể dùng 'should + V(bare)'." },
                        { id: 34, text: "It is necessary that everything ______ ready by two o'clock tomorrow.", answer: "be", type: 'multiple_choice', options: ["be", "was", "were", "would have been"], explanation: "Cấu trúc 'It is necessary that + S + V(bare)' -> dùng 'be'." },
                        { id: 35, text: "They recommend that she ______ to a ski resort in Spain.", answer: "should go", type: 'multiple_choice', options: ["will go", "would have gone", "should go", "should have gone"], explanation: "Sử dụng 'should + V(bare)' trong mệnh đề giả định sau 'recommend'." },
                        { id: 36, text: "It is advisable that you ______ your application as soon as possible.", answer: "submit", type: 'multiple_choice', options: ["submit", "will submit", "will have submitted", "should have submitted"], explanation: "Cấu trúc 'It is advisable that + S + V(bare)' -> dùng 'submit'." },
                        { id: 37, text: "It is desirable that the hotel manager ______ to call the maintenance staff...", answer: "remember", type: 'multiple_choice', options: ["remember", "will remember", "must remember", "remembers"], explanation: "Cấu trúc 'It is desirable that + S + V(bare)' -> dùng 'remember'." },
                        { id: 38, text: "The Principal demanded that the heaters ______ immediately. Winter is coming!", answer: "be repaired", type: 'multiple_choice', options: ["are repaired", "be repaired", "were repaired", "repair"], explanation: "Cấu trúc giả định ở dạng bị động: 'be + Vp2' -> 'be repaired'." },
                        { id: 39, text: "The boss insisted that Sam ______ at the meeting as he is too talkative...", answer: "not be", type: 'multiple_choice', options: ["not be", "isn't", "was", "is"], explanation: "Dạng phủ định của câu giả định: 'not + V(bare)' -> 'not be'." },
                        { id: 40, text: "The doctor insisted that she ______ to the hospital for tests.", answer: "go", type: 'multiple_choice', options: ["go", "goes", "will go", "has gone"], explanation: "Cấu trúc giả định với 'insist that' -> dùng 'go'." },
                        { id: 41, text: "She suggested that we ______ in the lobby of the hotel at 9:00 a.m.", answer: "should meet", type: 'multiple_choice', options: ["shall meet", "will meet", "should meet", "would have met"], explanation: "Sử dụng 'should + V(bare)' sau 'suggested that'." },
                    ]
                }
            ]
        },
        {
            id: 'subjunctive-ex-3',
            title: 'BÀI TẬP 3: VIẾT LẠI CÂU (Rewrite Sentences)',
            category: 'Subjunctive',
            sections: [
                {
                    title: 'Exercise 3: Rewrite the following sentences',
                    subtitle: 'Fill in the blanks to complete the rewritten sentences.',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "Please don't tell anyone about it. -> I'd rather you ___", answer: "didn't tell anyone about it", isExample: true, type: 'fill_gap' },
                        { id: 2, text: "I would prefer you deliver the sofa this afternoon. -> I'd rather you ___", answer: "delivered the sofa this afternoon", type: 'fill_gap' },
                        { id: 3, text: "\"Why don't you ask her yourself?\" -> My friend suggests that ___", answer: "I ask her myself | I should ask her myself", type: 'fill_gap' },
                        { id: 4, text: "She urged her husband to apply for the post in the government. -> She urged that her husband ___", answer: "apply for the post in the government", type: 'fill_gap' },
                        { id: 5, text: "They insisted on my coming early. -> They insisted that ___", answer: "I come early | I should come early", type: 'fill_gap' },
                        { id: 6, text: "An accountant has to master computer science. -> It is necessary that ___", answer: "an accountant master computer science", type: 'fill_gap' },
                        { id: 7, text: "It is time for us to leave now. -> It's time we ___", answer: "left", type: 'fill_gap' },
                        { id: 8, text: "What a pity! Your sister can't come with us. -> If only ___", answer: "your sister could come with us", type: 'fill_gap' },
                        { id: 9, text: "Everyone find it important for us to do something to save the environment. -> It is important that we ___", answer: "do something to save the environment", type: 'fill_gap' },
                        { id: 10, text: "Michael lost his job last month, so he couldn't buy a car. -> If Michael ___", answer: "hadn't lost his job last month, he could have bought a car", type: 'fill_gap' },
                        { id: 11, text: "He regrets applying for the job in that company. -> He wishes ___", answer: "he hadn't applied for the job in that company", type: 'fill_gap' },
                        { id: 12, text: "The headmaster insists on every schoolgirl's wearing Ao Dai every Monday. -> The headmaster insists that ___", answer: "every schoolgirl wear Ao Dai every Monday", type: 'fill_gap' },
                        { id: 13, text: "They advise her to eat less meat and fat to keep herself healthy. -> It is advisable that she ___", answer: "eat less meat and fat to keep herself healthy", type: 'fill_gap' },
                        { id: 14, text: "Naturally, a child had better respect his parents. -> It is natural that ___", answer: "a child respect his parents", type: 'fill_gap' },
                        { id: 15, text: "He needs to come to the interview early. -> It is necessary that ___", answer: "he come to the interview early", type: 'fill_gap' },
                        { id: 16, text: "She must find it important to take two medicines every day. -> It is important that ___", answer: "she take two medicines every day", type: 'fill_gap' },
                        { id: 17, text: "It is too late. He must go home. -> It's high time he ___", answer: "went home", type: 'fill_gap' },
                        { id: 18, text: "Every student must wear uniform. It is obligatory. -> It is obligatory that ___", answer: "every student wear uniform", type: 'fill_gap' },
                        { id: 19, text: "They recommended her to go to the best doctor in town. -> They recommended that she ___", answer: "go to the best doctor in town", type: 'fill_gap' },
                        { id: 20, text: "The man demanded to be told everything about the accident. -> The man demanded that everything ___", answer: "about the accident be told to him | be told about the accident", type: 'fill_gap' },
                        { id: 21, text: "Her GP advised her to do more exercise. -> Her GP suggested ___", answer: "she do more exercise | that she do more exercise", type: 'fill_gap' },
                        { id: 22, text: "The Prime Minister was asked very forcefully to consider resigning. -> They demand ___", answer: "that the Prime Minister consider resigning | the Prime Minister consider resigning", type: 'fill_gap' },
                        { id: 23, text: "If I were her, I would look for a job that is not so stressful. -> I recommend ___", answer: "she look for a job that is not so stressful | that she look for a job that is not so stressful", type: 'fill_gap' },
                        { id: 24, text: "She asked him to fix the computer. -> She requested ___", answer: "that he fix the computer | he fix the computer", type: 'fill_gap' },
                        { id: 25, text: "Sandra wanted the post office to hold onto her mail. -> Sandra asked ___", answer: "that the post office hold onto her mail", type: 'fill_gap' },
                        { id: 26, text: "The judge told the lawyer to be quiet. -> The judge insisted ___", answer: "that the lawyer be quiet | the lawyer be quiet", type: 'fill_gap' },
                        { id: 27, text: "My supervisor said it would be a good idea for me to accept this new position. -> My supervisor suggested ___", answer: "I accept this new position | that I accept this new position", type: 'fill_gap' },
                        { id: 28, text: "I have always regretted not having studied harder at school. -> I have always wished ___", answer: "I had studied harder at school", type: 'fill_gap' },
                        { id: 29, text: "\"Give me a refund,\" John told the clerk. -> John demanded ___", answer: "that the clerk give him a refund", type: 'fill_gap' },
                        { id: 30, text: "\"Could you help me move some boxes,\" Tom asked me. -> Tom asked ___", answer: "that I help him move some boxes", type: 'fill_gap' }
                    ]
                }
            ]
        },
        {
            id: 'subjunctive-ex-4',
            title: 'BÀI TẬP 4: CHIA ĐỘNG TỪ (Verb Form)',
            category: 'Subjunctive',
            sections: [
                {
                    title: 'Exercise 4: Give the correct forms of the verbs in the blankets.',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "Some managers require that the secretary (be)__________responsible for writing all reports...", answer: "be", isExample: true, type: 'fill_gap' },
                        { id: 2, text: "It is essential that cancer (diagnose)__________and treated as early as possible...", answer: "be diagnosed", type: 'fill_gap' },
                        { id: 3, text: "It was suggested that Oscar (study)__________the material more carefully before attempting to pass the exam.", answer: "study", type: 'fill_gap' },
                        { id: 4, text: "It is imperative that a graduate student (maintain)__________a grade point average of \"B\"...", answer: "maintain", type: 'fill_gap' },
                        { id: 5, text: "It is necessary that one (meet)__________with a judge before signing the final documents for a divorce.", answer: "meet", type: 'fill_gap' },
                        { id: 6, text: "I bet she wishes that she never (get)__________involved in the whole mess.", answer: "had never got | had never gotten", type: 'fill_gap' },
                        { id: 7, text: "I'd rather you (not say)__________anything to John about this conversation.", answer: "didn't say", type: 'fill_gap' },
                        { id: 8, text: "I would rather you (not get)__________to school so late last Tuesday.", answer: "hadn't got | had not got", type: 'fill_gap' },
                        { id: 9, text: "I wish Paul worked as hard as Mary (do)__________.", answer: "does", type: 'fill_gap' },
                        { id: 10, text: "John left without a word. If only he (say)__________something.", answer: "had said", type: 'fill_gap' },
                        { id: 11, text: "It has been raining for days now. I wish it (stop)__________soon.", answer: "would stop", type: 'fill_gap' },
                        { id: 12, text: "Frankness is a great thing, but I'd rather you (not repeat)__________to Miss White what I think about her.", answer: "didn't repeat", type: 'fill_gap' },
                        { id: 13, text: "I left my office at four because I was sure Mr. Andrews wouldn't come. Now I wish I (wait)__________for him.", answer: "had waited", type: 'fill_gap' },
                        { id: 14, text: "I'm afraid very few people know about the concert... If only the posters (hang)__________on time.", answer: "had been hung", type: 'fill_gap' },
                        { id: 15, text: "Jack, the security guard at the factory, wishes the robbery (not occur)__________on his shift.", answer: "had not occurred", type: 'fill_gap' },
                        { id: 16, text: "The fans proposed that they (stand)__________there when G-Dragon gets off the plane.", answer: "stand", type: 'fill_gap' },
                        { id: 17, text: "It is recommended the candidate (take)__________as many IELTS mock tests as possible...", answer: "take", type: 'fill_gap' },
                        { id: 18, text: "The board of executives requested every employee (come)__________to the meeting this weekend.", answer: "come", type: 'fill_gap' },
                        { id: 19, text: "We suggested that you (admit)__________to the organization.", answer: "be admitted", type: 'fill_gap' },
                        { id: 20, text: "It is imperative that you (be)__________ready when the car comes for you.", answer: "be", type: 'fill_gap' },
                        { id: 21, text: "Olga recommends that his brother (not take)__________the job without reading the work contract thoroughly.", answer: "not take", type: 'fill_gap' },
                        { id: 22, text: "I wish I (be)__________able to accept that role, but I was preparing for another play at the time.", answer: "had been", type: 'fill_gap' },
                        { id: 23, text: "What a pity I was away! If only the fax (reach)__________me an hour earlier.", answer: "had reached", type: 'fill_gap' },
                        { id: 24, text: "The situation was a little embarrassing when Mary served roast beef for dinner. I wish I (tell)__________her that Nick was a vegetarian.", answer: "had told", type: 'fill_gap' },
                        { id: 25, text: "If only we (know)__________about this service before!", answer: "had known", type: 'fill_gap' },
                        { id: 26, text: "I'd rather you (tell)__________me the truth now.", answer: "told", type: 'fill_gap' },
                        { id: 27, text: "I'd rather you (buy)__________the tickets before they are all sold out.", answer: "bought | had bought", type: 'fill_gap' },
                        { id: 28, text: "I wish I (have)__________time to see more exhibitions.", answer: "had", type: 'fill_gap' },
                        { id: 29, text: "I'm really sleepy today. I wish I (not have to take)__________Bob to the airport late last night.", answer: "hadn't had to take", type: 'fill_gap' },
                        { id: 30, text: "I'd rather you (not be)__________absent from the meeting yesterday. Things might have been different.", answer: "hadn't been", type: 'fill_gap' },
                        { id: 31, text: "Frankly, I'd rather you (not do)__________anything about it for the time being.", answer: "didn't do", type: 'fill_gap' },
                        { id: 32, text: "Tom has never been to Madrid, but he talks as if he (be)__________there himself.", answer: "had been", type: 'fill_gap' },
                        { id: 33, text: "I didn't see anyone but I felt as though I (watch)__________.", answer: "was being watched | were being watched", type: 'fill_gap' },
                        { id: 34, text: "The children sing loudly as if they (be)__________the winners.", answer: "were", type: 'fill_gap' },
                        { id: 35, text: "You talk as though it (be)__________a small thing to leave your country forever.", answer: "were", type: 'fill_gap' },
                        { id: 36, text: "Everybody feels sorry for him and says that if only he (spend)__________more time revising.", answer: "had spent", type: 'fill_gap' },
                        { id: 37, text: "He looks as though he (never get)__________a square meal in his life, but in fact his wife feeds him very well.", answer: "had never got | had never gotten", type: 'fill_gap' },
                        { id: 38, text: "If only he (tell)__________us the truth in the first place, things wouldn't have gone so wrong.", answer: "had told", type: 'fill_gap' },
                        { id: 39, text: "It is high time for us (think)__________about choosing a place to settle down.", answer: "to think", type: 'fill_gap' },
                        { id: 40, text: "The doctor advised that the man (transfer)__________to a private room.", answer: "be transferred", type: 'fill_gap' }
                    ]
                }
            ]
        }
    ]
};
