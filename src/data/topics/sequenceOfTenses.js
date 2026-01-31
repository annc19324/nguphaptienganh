export const sequenceOfTensesTopic = {
    id: 'sequence-of-tenses',
    title: 'CHUYÊN ĐỀ 2: SỰ PHỐI HỢP THÌ (Sequence of Tenses)',
    category: 'Sequence of Tenses',
    children: [
        {
            id: 'sequence-theory',
            title: 'LÝ THUYẾT: SỰ PHỐI HỢP THÌ',
            category: 'Sequence of Tenses',
            sections: [
                {
                    title: 'Lý thuyết: Sự phối hợp thì',
                    type: 'custom',
                    content: [
                        {
                            subtitle: '1. Hành động xong trước hành động khác',
                            cases: [
                                { label: '', formula: 'TRONG QUÁ KHỨ:\nAFTER + S + V (quá khứ hoàn thành), S + V (quá khứ đơn)\nEg: After she had done her homework, she went out for a walk.\n\nTRONG TƯƠNG LAI:\nAFTER + S + V (hiện tại đơn/hiện tại hoàn thành), S + will + V\nEg: After she does/has done her homework, she will go out for a walk.' }
                            ]
                        },
                        {
                            subtitle: '2. Hành động xảy ra trước một mốc thời gian',
                            cases: [
                                { label: '', formula: 'BY + mốc thời gian quá khứ, S + had + V(pp)\nEg: By the time he was 20, he had traveled to 10 countries.\n\nBY + mốc thời gian tương lai, S + will have + V(pp)\nEg: By the time he is 20, he will have traveled to 10 countries.' }
                            ]
                        },
                        {
                            subtitle: '3. Hai hành động xảy ra đồng thời',
                            cases: [
                                { label: '', formula: 'WHILE + S + V (quá khứ tiếp diễn), S + V (quá khứ đơn)\nEg: While I was cooking, the phone rang.\n\nWHEN + S + V (quá khứ đơn), S + V (quá khứ tiếp diễn)\nEg: When the phone rang, I was cooking.' }
                            ]
                        },
                        {
                            subtitle: '4. Câu điều kiện',
                            cases: [
                                { label: 'Loại 1', formula: 'If + S + V (hiện tại đơn), S + will + V\nEg: If it rains, I will stay home.' },
                                { label: 'Loại 2', formula: 'If + S + V (quá khứ đơn), S + would + V\nEg: If I were rich, I would buy a car.' },
                                { label: 'Loại 3', formula: 'If + S + had + V(pp), S + would have + V(pp)\nEg: If I had studied harder, I would have passed the exam.' }
                            ]
                        },
                        {
                            subtitle: '5. Câu gián tiếp',
                            cases: [
                                { label: '', formula: 'Khi chuyển từ trực tiếp sang gián tiếp, thì của động từ lùi về quá khứ:\n- Hiện tại đơn → Quá khứ đơn\n- Hiện tại tiếp diễn → Quá khứ tiếp diễn\n- Hiện tại hoàn thành → Quá khứ hoàn thành\n- Quá khứ đơn → Quá khứ hoàn thành\n- Will → Would\n- Can → Could\n- May → Might' }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'sequence-ex-1',
            title: 'BÀI TẬP 1: TỰ LUẬN (Fill in)',
            category: 'Sequence of Tenses',
            sections: [
                {
                    title: 'Exercise 1: Fill in the blanks',
                    subtitle: 'Complete the sentences using the correct tense forms.',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "After he ___ (finish) his homework, he went to bed.", answer: "had finished", isExample: true, type: 'fill_gap', explanation: "Sử dụng thì Quá khứ hoàn thành (had + V3) vì hành động 'hoàn thành bài tập' xảy ra trước hành động 'đi ngủ' (quá khứ đơn)." },
                        { id: 2, text: "By the time we arrived, the movie ___ (start).", answer: "had started", type: 'fill_gap', explanation: "Cấu trúc 'By the time + S + V(quá khứ đơn), S + V(quá khứ hoàn thành)'. Bộ phim đã chiếu trước khi chúng tôi đến." },
                        { id: 3, text: "While she ___ (cook), the phone rang.", answer: "was cooking", type: 'fill_gap', explanation: "Sử dụng Quá khứ tiếp diễn (was/were + V-ing) để diễn tả hành động đang xảy ra thì có một hành động khác xen vào (rang - quá khứ đơn)." },
                        { id: 4, text: "If it ___ (rain) tomorrow, we will cancel the picnic.", answer: "rains", type: 'fill_gap', explanation: "Câu điều kiện loại 1: Diễn tả điều có thể xảy ra ở hiện tại hoặc tương lai. Mệnh đề IF chia hiện tại đơn." },
                        { id: 5, text: "She said that she ___ (be) tired.", answer: "was", type: 'fill_gap', explanation: "Câu tường thuật lùi thì: 'is' (hiện tại đơn) chuyển thành 'was' (quá khứ đơn) do động từ dẫn 'said' ở quá khứ." },
                        { id: 6, text: "Before he came here, he ___ (live) in London.", answer: "had lived", type: 'fill_gap' },
                        { id: 7, text: "When I ___ (see) him, he was reading a book.", answer: "saw", type: 'fill_gap' },
                        { id: 8, text: "After they ___ (eat) dinner, they watched TV.", answer: "had eaten", type: 'fill_gap' },
                        { id: 9, text: "By next year, I ___ (graduate) from university.", answer: "will have graduated", type: 'fill_gap' },
                        { id: 10, text: "If I ___ (know) his address, I would visit him.", answer: "knew", type: 'fill_gap' },
                        { id: 11, text: "She told me that she ___ (can) speak three languages.", answer: "could", type: 'fill_gap' },
                        { id: 12, text: "While we ___ (wait) for the bus, it started to rain.", answer: "were waiting", type: 'fill_gap' },
                        { id: 13, text: "After she ___ (finish) her work, she will go home.", answer: "finishes | has finished", type: 'fill_gap' },
                        { id: 14, text: "By the time you arrive, I ___ (leave).", answer: "will have left", type: 'fill_gap' },
                        { id: 15, text: "If he ___ (study) harder, he would have passed the exam.", answer: "had studied", type: 'fill_gap' },
                        { id: 16, text: "When I got home, my family ___ (have) dinner.", answer: "was having | were having", type: 'fill_gap' },
                        { id: 17, text: "She said that she ___ (will) help me.", answer: "would", type: 'fill_gap' },
                        { id: 18, text: "Before the teacher came, the students ___ (prepare) everything.", answer: "had prepared", type: 'fill_gap' },
                        { id: 19, text: "While he ___ (drive) to work, he saw an accident.", answer: "was driving", type: 'fill_gap' },
                        { id: 20, text: "After you ___ (finish) this task, you can take a break.", answer: "finish | have finished", type: 'fill_gap' }
                    ]
                }
            ]
        },
        {
            id: 'sequence-ex-2',
            title: 'BÀI TẬP 2: TRẮC NGHIỆM (Multiple Choice)',
            category: 'Sequence of Tenses',
            sections: [
                {
                    title: 'Exercise 2: Multiple Choice',
                    subtitle: 'Choose the correct answer.',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "After he ___ his homework, he went to bed.", answer: "had finished", isExample: true, type: 'multiple_choice', options: ["finished", "had finished", "has finished", "finishes"], explanation: "Hành động hoàn thành bài tập xảy ra TRƯỚC hành động đi ngủ trong quá khứ -> dùng Quá khứ hoàn thành." },
                        { id: 2, text: "By the time we arrived, the movie ___.", answer: "had started", type: 'multiple_choice', options: ["started", "had started", "has started", "starts"], explanation: "Nhấn mạnh kết quả của một hành động đã hoàn tất trước một thời điểm/hành động khác trong quá khứ." },
                        { id: 3, text: "While she ___ dinner, the phone rang.", answer: "was cooking", type: 'multiple_choice', options: ["cooked", "was cooking", "has cooked", "cooks"], explanation: "Diễn tả hành động đang diễn ra trong quá khứ thì có hành động khác cắt ngang." },
                        { id: 4, text: "If it ___ tomorrow, we will cancel the picnic.", answer: "rains", type: 'multiple_choice', options: ["rains", "will rain", "rained", "would rain"], explanation: "Dấu hiệu 'tomorrow' và 'will cancel' cho thấy đây là câu điều kiện loại 1." },
                        { id: 5, text: "She said that she ___ tired.", answer: "was", type: 'multiple_choice', options: ["is", "was", "has been", "will be"], explanation: "Lùi thì trong câu gián tiếp: Am/Is/Are -> Was/Were." },
                        { id: 6, text: "Before he came here, he ___ in London.", answer: "had lived", type: 'multiple_choice', options: ["lived", "had lived", "has lived", "lives"] },
                        { id: 7, text: "When I saw him, he ___ a book.", answer: "was reading", type: 'multiple_choice', options: ["read", "was reading", "has read", "reads"] },
                        { id: 8, text: "After they ___ dinner, they watched TV.", answer: "had eaten", type: 'multiple_choice', options: ["ate", "had eaten", "have eaten", "eat"] },
                        { id: 9, text: "By next year, I ___ from university.", answer: "will have graduated", type: 'multiple_choice', options: ["graduate", "will graduate", "will have graduated", "graduated"] },
                        { id: 10, text: "If I ___ his address, I would visit him.", answer: "knew", type: 'multiple_choice', options: ["know", "knew", "had known", "will know"] },
                        { id: 11, text: "She told me that she ___ speak three languages.", answer: "could", type: 'multiple_choice', options: ["can", "could", "will", "would"] },
                        { id: 12, text: "While we ___ for the bus, it started to rain.", answer: "were waiting", type: 'multiple_choice', options: ["waited", "were waiting", "have waited", "wait"] },
                        { id: 13, text: "After she ___ her work, she will go home.", answer: "finishes", type: 'multiple_choice', options: ["finishes", "finished", "will finish", "has finished"] },
                        { id: 14, text: "By the time you arrive, I ___.", answer: "will have left", type: 'multiple_choice', options: ["leave", "will leave", "will have left", "left"] },
                        { id: 15, text: "If he ___ harder, he would have passed the exam.", answer: "had studied", type: 'multiple_choice', options: ["studied", "had studied", "studies", "will study"] },
                        { id: 16, text: "When I got home, my family ___ dinner.", answer: "was having", type: 'multiple_choice', options: ["had", "was having", "has had", "have"] },
                        { id: 17, text: "She said that she ___ help me.", answer: "would", type: 'multiple_choice', options: ["will", "would", "can", "could"] },
                        { id: 18, text: "Before the teacher came, the students ___ everything.", answer: "had prepared", type: 'multiple_choice', options: ["prepared", "had prepared", "have prepared", "prepare"] },
                        { id: 19, text: "While he ___ to work, he saw an accident.", answer: "was driving", type: 'multiple_choice', options: ["drove", "was driving", "has driven", "drives"] },
                        { id: 20, text: "After you ___ this task, you can take a break.", answer: "finish", type: 'multiple_choice', options: ["finish", "finished", "will finish", "have finished"] }
                    ]
                }
            ]
        },
        {
            id: 'sequence-ex-3',
            title: 'BÀI TẬP 3: TÌM LỖI SAI (Error Identification)',
            category: 'Sequence of Tenses',
            sections: [
                {
                    title: 'Exercise 3: Find the mistake',
                    subtitle: 'Mark the letter A, B, C or D to indicate the underlined part that needs correction.',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "<b>One of</b> the sad moments of the cruise was saying goodbye to Mel, who had <b>sailed</b> with us since we <b>had set</b> sail but whose health <b>problems forced</b> him to leave us at Lagos.", answer: "had set", correction: "set", type: 'error_correction' },
                        { id: 2, text: "He <b>was in</b> a great hurry and <b>had no time</b> to think it over. Otherwise, he <b>had found</b> another way <b>out</b>.", answer: "had found", correction: "would have found", type: 'error_correction' },
                        { id: 3, text: "Why <b>didn't</b> you <b>come</b> to see us when we <b>are having</b> <b>lunch</b>?", answer: "are having", correction: "were having", type: 'error_correction' },
                        { id: 4, text: "<b>As soon as</b> the next lesson <b>has finished</b>, we <b>leave</b>.", answer: "leave", correction: "will leave", type: 'error_correction' },
                        { id: 5, text: "<b>At 8</b> o'clock this evening my <b>friends</b> and I <b>will have watched</b> a famous film at the <b>cinema</b>.", answer: "will have watched", correction: "will be watching", type: 'error_correction' },
                        { id: 6, text: "John <b>won't be finishing</b> the study <b>by July</b> because he <b>has</b> some health <b>problems</b>.", answer: "won't be finishing", correction: "won't have finished", type: 'error_correction' },
                        { id: 7, text: "The lung cancer mortality rate <b>rose</b> six-fold <b>in males</b> when mass media <b>started</b> <b>covering</b> the health risks of smoking.", answer: "rose", correction: "had risen", type: 'error_correction' },
                        { id: 8, text: "Jane <b>spent</b> a lot of money yesterday. She <b>had bought</b> a dress which <b>cost</b> <b>$100</b>.", answer: "had bought", correction: "bought", type: 'error_correction' },
                        { id: 9, text: "No sooner <b>did he return</b> <b>from</b> a long journey than he <b>was ordered</b> to <b>pack</b> his bags.", answer: "did he return", correction: "had he returned", type: 'error_correction' },
                        { id: 10, text: "The crime rate in this city <b>has increased</b> from ten per cent <b>last year</b> to thirty percent <b>by the end</b> of 2009 <b>due to</b> the influx of the gang element.", answer: "has increased", correction: "increased", type: 'error_correction' },
                        { id: 11, text: "<b>At this time</b> last year, I <b>am attending</b> an <b>English course</b> in <b>America</b>.", answer: "am attending", correction: "was attending", type: 'error_correction' },
                        { id: 12, text: "When we <b>got</b> home <b>last night</b>. We found that somebody <b>broke</b> into the <b>flat</b>.", answer: "broke", correction: "had broken", type: 'error_correction' },
                        { id: 13, text: "While the plumber <b>was repairing</b> the <b>dishwasher</b>, I <b>had watched</b> the <b>smartphone</b>.", answer: "had watched", correction: "was watching", type: 'error_correction' },
                        { id: 14, text: "When their dad <b>got</b> home, the boys <b>has been watching</b> <b>TV</b> for three <b>hours</b>.", answer: "has been watching", correction: "had been watching", type: 'error_correction' },
                        { id: 15, text: "If he <b>continues</b> drinking so fast, he <b>would drink</b> the <b>whole</b> bottle by <b>midnight</b>.", answer: "would drink", correction: "will have drunk", type: 'error_correction' },
                        { id: 16, text: "On the way to Oxford I <b>stopped</b> <b>to have</b> a cup of coffee at a roadside restaurant and when I <b>came</b> out of the restaurant it <b>stopped</b> raining.", answer: "stopped", correction: "had stopped", type: 'error_correction' },
                        { id: 17, text: "She <b>washed</b> the <b>dishes</b> when his parents <b>came</b> back <b>home</b>.", answer: "washed", correction: "was washing", type: 'error_correction' },
                        { id: 18, text: "That evening we <b>had stayed</b> up <b>to talk</b> about the town, <b>where</b> he <b>had lived</b> for some years.", answer: "had stayed", correction: "stayed", type: 'error_correction' },
                        { id: 19, text: "It is the <b>worst</b> dish that I <b>ever tried</b> <b>in</b> my <b>life</b>.", answer: "ever tried", correction: "have ever tried", type: 'error_correction' },
                        { id: 20, text: "At first I <b>thought</b> I <b>did</b> the right thing, but soon I <b>realized</b> that I'd <b>made</b> a serious mistake", answer: "did", correction: "had done", type: 'error_correction' },
                        { id: 21, text: "I <b>was not</b> able to <b>join</b> them in the bicycle ride into the country. I <b>lent</b> John my bike <b>the day before</b>.", answer: "lent", correction: "had lent", type: 'error_correction' },
                        { id: 22, text: "The man who <b>answered</b> the phone said he <b>has read</b> all <b>about</b> the scandal in the newspapers a year or two <b>before</b>.", answer: "has read", correction: "had read", type: 'error_correction' },
                        { id: 23, text: "Michael, the student who <b>makes</b> a speech right now, <b>is majoring</b> in drama and <b>hopes</b> someday to become a great <b>actress</b>.", answer: "makes", correction: "is making", type: 'error_correction' },
                        { id: 24, text: "This was the <b>talking</b> between <b>brothers</b> who <b>have just met</b> up with <b>each other</b>.", answer: "have just met", correction: "had just met", type: 'error_correction' },
                        { id: 25, text: "He <b>refuses</b> to admit that he <b>had made</b> some <b>corrections</b> in the <b>document</b>.", answer: "had made", correction: "has made", type: 'error_correction' },
                        { id: 26, text: "He <b>waited</b> until the guest <b>left</b> the room and then <b>sat</b> down at the <b>desk</b>.", answer: "left", correction: "had left", type: 'error_correction' },
                        { id: 27, text: "You can <b>trust</b> me. I <b>remember</b> sending the documents <b>right after</b> you <b>sign</b> it.", answer: "remember", correction: "will remember", type: 'error_correction' },
                        { id: 28, text: "When the candidate <b>will speak</b> at the public <b>meeting</b> tonight, his campaign manager <b>will arrange</b> the location for his next <b>appearance</b>.", answer: "will speak", correction: "speaks", type: 'error_correction' },
                        { id: 29, text: "I'm <b>going</b> out for a walk. I <b>had been reading</b> <b>too long</b>, in fact since <b>early morning</b>.", answer: "had been reading", correction: "have been reading", type: 'error_correction' },
                        { id: 30, text: "<b>Stay</b> in the house and <b>wait</b> till you get a phone call from him. He <b>has told</b> you where to <b>look</b> for her.", answer: "has told", correction: "will tell", type: 'error_correction' }
                    ]
                }
            ]
        }
    ]
};
