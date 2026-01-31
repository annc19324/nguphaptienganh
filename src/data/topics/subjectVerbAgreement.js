export const subjectVerbAgreementTopic = {
    id: 'subject-verb-agreement',
    title: 'CHUYÊN ĐỀ 3: SỰ HÒA HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ (Subject-Verb Agreement)',
    category: 'Subject-Verb Agreement',
    children: [
        {
            id: 'sva-theory',
            title: 'LÝ THUYẾT: SỰ HÒA HỢP S-V (THEORY)',
            category: 'Subject-Verb Agreement',
            sections: [
                {
                    title: 'Lý thuyết: Sự hòa hợp giữa chủ ngữ và động từ',
                    type: 'custom',
                    content: [
                        {
                            subtitle: '1. Chủ ngữ số ít - Động từ số ít',
                            cases: [
                                { label: '', formula: 'S (số ít) + V (số ít)\nEg: The student is studying.\nEg: He/She/It works hard.' }
                            ]
                        },
                        {
                            subtitle: '2. Chủ ngữ số nhiều - Động từ số nhiều',
                            cases: [
                                { label: '', formula: 'S (số nhiều) + V (số nhiều)\nEg: The students are studying.\nEg: They work hard.' }
                            ]
                        },
                        {
                            subtitle: '3. Chủ ngữ nối bởi "and" - Động từ số nhiều',
                            cases: [
                                { label: '', formula: 'S1 + and + S2 + V (số nhiều)\nEg: Tom and Jerry are friends.\nNgoại lệ: Khi 2 danh từ chỉ cùng 1 người/vật → V số ít\nEg: The singer and dancer is performing. (cùng 1 người)' }
                            ]
                        },
                        {
                            subtitle: '4. Chủ ngữ nối bởi "or", "nor", "either...or", "neither...nor"',
                            cases: [
                                { label: '', formula: 'Động từ chia theo chủ ngữ gần nhất\nEg: Either the teacher or the students are responsible.\nEg: Neither the students nor the teacher is here.' }
                            ]
                        },
                        {
                            subtitle: '5. Các từ chỉ số lượng bất định',
                            cases: [
                                { label: 'Số ít', formula: 'Each, Every, Either, Neither, One, Someone, Anyone, Everyone, No one, Nobody, Somebody, Anybody, Everybody + V (số ít)\nEg: Everyone is here.\nEg: Each student has a book.' },
                                { label: 'Số nhiều', formula: 'Both, Few, Many, Several + V (số nhiều)\nEg: Both are correct.\nEg: Many students are absent.' },
                                { label: 'Tùy thuộc', formula: 'Some, All, Most, Half, Part + of + N\n- Nếu N đếm được số nhiều → V số nhiều\n- Nếu N không đếm được → V số ít\nEg: Some of the students are late. (đếm được)\nEg: Some of the water is dirty. (không đếm được)' }
                            ]
                        },
                        {
                            subtitle: '6. Danh từ tập hợp (Collective Nouns)',
                            cases: [
                                { label: '', formula: 'Family, team, group, class, committee, audience, crowd, government...\n- Xem như 1 đơn vị → V số ít\n- Xem như các cá nhân → V số nhiều\nEg: The team is winning. (cả đội)\nEg: The team are arguing. (các thành viên)' }
                            ]
                        },
                        {
                            subtitle: '7. Danh từ luôn ở dạng số nhiều',
                            cases: [
                                { label: '', formula: 'Scissors, pants, trousers, glasses, jeans, shorts... + V (số nhiều)\nEg: My glasses are on the table.\nNhưng: A pair of + N + V (số ít)\nEg: A pair of glasses is on the table.' }
                            ]
                        },
                        {
                            subtitle: '8. Các cấu trúc đặc biệt',
                            cases: [
                                { label: 'The number of', formula: 'The number of + N (số nhiều) + V (số ít)\nEg: The number of students is increasing.' },
                                { label: 'A number of', formula: 'A number of + N (số nhiều) + V (số nhiều)\nEg: A number of students are absent.' },
                                { label: 'There is/are', formula: 'There + is/are + N\n- N số ít → is\n- N số nhiều → are\nEg: There is a book on the table.\nEg: There are books on the table.' }
                            ]
                        },
                        {
                            subtitle: '9. Chủ ngữ là mệnh đề, V-ing, To-V',
                            cases: [
                                { label: '', formula: 'What/That clause + V (số ít)\nV-ing/To-V + V (số ít)\nEg: What he said is true.\nEg: Swimming is good for health.\nEg: To study hard is important.' }
                            ]
                        },
                        {
                            subtitle: '10. Các từ gây nhiễu (Intervening phrases)',
                            cases: [
                                { label: '', formula: 'S + (along with, together with, as well as, accompanied by, in addition to...) + N + V\nĐộng từ chia theo S chính, không phụ thuộc vào N sau\nEg: The teacher, along with the students, is going.\nEg: The students, as well as the teacher, are going.' }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'sva-ex-1',
            title: 'BÀI TẬP 1: CHIA ĐỘNG TỪ (Verb Form)',
            category: 'Subject-Verb Agreement',
            sections: [
                {
                    title: 'Exercise 1: Give the correct verb forms',
                    subtitle: 'Fill in the blanks with the correct form of the verbs in brackets.',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "The number of students in this class ___ (be) 30.", answer: "is", isExample: true, type: 'fill_gap', explanation: "Cấu trúc 'The number of + N số nhiều' đi với động từ số ít (chỉ một con số cụ thể)." },
                        { id: 2, text: "A number of students ___ (be) absent today.", answer: "are", type: 'fill_gap', explanation: "Cấu trúc 'A number of + N số nhiều' đi với động từ số nhiều (nghĩa là 'một vài/nhiều' học sinh)." },
                        { id: 3, text: "Either you or I ___ (be) wrong.", answer: "am", type: 'fill_gap', explanation: "Trong cấu trúc 'Either...or...', động từ chia theo chủ ngữ gần nhất (ở đây là 'I' nên dùng 'am')." },
                        { id: 4, text: "Neither the students nor the teacher ___ (be) here.", answer: "is", type: 'fill_gap', explanation: "Trong cấu trúc 'Neither...nor...', động từ chia theo chủ ngữ gần nhất (ở đây là 'the teacher' số ít nên dùng 'is')." },
                        { id: 5, text: "Each of the students ___ (have) a book.", answer: "has", type: 'fill_gap', explanation: "Chủ ngữ bắt đầu bằng 'Each of' luôn đi với động từ số ít." },
                        { id: 6, text: "Every student ___ (need) to study hard.", answer: "needs", type: 'fill_gap' },
                        { id: 7, text: "The team ___ (be) playing well.", answer: "is | are", type: 'fill_gap' },
                        { id: 8, text: "My glasses ___ (be) on the table.", answer: "are", type: 'fill_gap' },
                        { id: 9, text: "A pair of scissors ___ (be) in the drawer.", answer: "is", type: 'fill_gap' },
                        { id: 10, text: "There ___ (be) many books on the shelf.", answer: "are", type: 'fill_gap' },
                        { id: 11, text: "Swimming ___ (be) good for health.", answer: "is", type: 'fill_gap' },
                        { id: 12, text: "What he said ___ (be) true.", answer: "is", type: 'fill_gap' },
                        { id: 13, text: "The teacher, along with the students, ___ (be) going on a trip.", answer: "is", type: 'fill_gap' },
                        { id: 14, text: "Both Tom and Jerry ___ (be) my friends.", answer: "are", type: 'fill_gap' },
                        { id: 15, text: "Some of the water ___ (be) dirty.", answer: "is", type: 'fill_gap' },
                        { id: 16, text: "Some of the students ___ (be) late.", answer: "are", type: 'fill_gap' },
                        { id: 17, text: "Everyone ___ (be) here.", answer: "is", type: 'fill_gap' },
                        { id: 18, text: "Many students ___ (be) absent.", answer: "are", type: 'fill_gap' },
                        { id: 19, text: "The singer and dancer ___ (be) performing.", answer: "is", type: 'fill_gap' },
                        { id: 20, text: "To study hard ___ (be) important.", answer: "is", type: 'fill_gap' }
                    ]
                }
            ]
        },
        {
            id: 'sva-ex-2',
            title: 'BÀI TẬP 2: TÌM LỖI SAI (Error Identification)',
            category: 'Subject-Verb Agreement',
            sections: [
                {
                    title: 'Exercise 2: Find the mistake',
                    subtitle: 'Mark the letter A, B, C or D to indicate the underlined part that needs correction.',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "The number of students in this class <b>are</b> <b>30</b>.", answer: "are", correction: "is", type: 'error_correction' },
                        { id: 2, text: "A number of students <b>is</b> <b>absent</b> <b>today</b>.", answer: "is", correction: "are", type: 'error_correction' },
                        { id: 3, text: "<b>Either</b> you or I <b>are</b> <b>wrong</b>.", answer: "are", correction: "am", type: 'error_correction' },
                        { id: 4, text: "<b>Neither</b> the students nor the teacher <b>are</b> <b>here</b>.", answer: "are", correction: "is", type: 'error_correction' },
                        { id: 5, text: "<b>Each</b> of the students <b>have</b> a <b>book</b>.", answer: "have", correction: "has", type: 'error_correction' },
                        { id: 6, text: "<b>Every</b> student <b>need</b> to study <b>hard</b>.", answer: "need", correction: "needs", type: 'error_correction' },
                        { id: 7, text: "My <b>glasses</b> <b>is</b> on the <b>table</b>.", answer: "is", correction: "are", type: 'error_correction' },
                        { id: 8, text: "A pair of <b>scissors</b> <b>are</b> in the <b>drawer</b>.", answer: "are", correction: "is", type: 'error_correction' },
                        { id: 9, text: "<b>There</b> <b>is</b> many books on the <b>shelf</b>.", answer: "is", correction: "are", type: 'error_correction' },
                        { id: 10, text: "<b>Swimming</b> <b>are</b> good for <b>health</b>.", answer: "are", correction: "is", type: 'error_correction' },
                        { id: 11, text: "<b>What</b> he said <b>are</b> <b>true</b>.", answer: "are", correction: "is", type: 'error_correction' },
                        { id: 12, text: "The teacher, along with the students, <b>are</b> going on a <b>trip</b>.", answer: "are", correction: "is", type: 'error_correction' },
                        { id: 13, text: "<b>Both</b> Tom and Jerry <b>is</b> my <b>friends</b>.", answer: "is", correction: "are", type: 'error_correction' },
                        { id: 14, text: "<b>Some</b> of the water <b>are</b> <b>dirty</b>.", answer: "are", correction: "is", type: 'error_correction' },
                        { id: 15, text: "<b>Some</b> of the students <b>is</b> <b>late</b>.", answer: "is", correction: "are", type: 'error_correction' },
                        { id: 16, text: "<b>Everyone</b> <b>are</b> <b>here</b>.", answer: "are", correction: "is", type: 'error_correction' },
                        { id: 17, text: "<b>Many</b> students <b>is</b> <b>absent</b>.", answer: "is", correction: "are", type: 'error_correction' },
                        { id: 18, text: "The singer and dancer <b>are</b> <b>performing</b>.", answer: "are", correction: "is", type: 'error_correction' },
                        { id: 19, text: "<b>To study</b> hard <b>are</b> <b>important</b>.", answer: "are", correction: "is", type: 'error_correction' },
                        { id: 20, text: "The students, as well as the teacher, <b>is</b> going on a <b>trip</b>.", answer: "is", correction: "are", type: 'error_correction' }
                    ]
                }
            ]
        },
        {
            id: 'sva-ex-3',
            title: 'BÀI TẬP 3: TRẮC NGHIỆM (Multiple Choice)',
            category: 'Subject-Verb Agreement',
            sections: [
                {
                    title: 'Exercise 3: Multiple Choice',
                    subtitle: 'Choose the correct answer.',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "The number of students in this class ___ 30.", answer: "is", isExample: true, type: 'multiple_choice', options: ["is", "are", "was", "were"] },
                        { id: 2, text: "A number of students ___ absent today.", answer: "are", type: 'multiple_choice', options: ["is", "are", "was", "were"] },
                        { id: 3, text: "Either you or I ___ wrong.", answer: "am", type: 'multiple_choice', options: ["am", "is", "are", "be"] },
                        { id: 4, text: "Neither the students nor the teacher ___ here.", answer: "is", type: 'multiple_choice', options: ["is", "are", "was", "were"] },
                        { id: 5, text: "Each of the students ___ a book.", answer: "has", type: 'multiple_choice', options: ["has", "have", "had", "having"] },
                        { id: 6, text: "Every student ___ to study hard.", answer: "needs", type: 'multiple_choice', options: ["need", "needs", "needed", "needing"] },
                        { id: 7, text: "My glasses ___ on the table.", answer: "are", type: 'multiple_choice', options: ["is", "are", "was", "were"] },
                        { id: 8, text: "A pair of scissors ___ in the drawer.", answer: "is", type: 'multiple_choice', options: ["is", "are", "was", "were"] },
                        { id: 9, text: "There ___ many books on the shelf.", answer: "are", type: 'multiple_choice', options: ["is", "are", "was", "were"] },
                        { id: 10, text: "Swimming ___ good for health.", answer: "is", type: 'multiple_choice', options: ["is", "are", "was", "were"] },
                        { id: 11, text: "What he said ___ true.", answer: "is", type: 'multiple_choice', options: ["is", "are", "was", "were"] },
                        { id: 12, text: "The teacher, along with the students, ___ going on a trip.", answer: "is", type: 'multiple_choice', options: ["is", "are", "was", "were"] },
                        { id: 13, text: "Both Tom and Jerry ___ my friends.", answer: "are", type: 'multiple_choice', options: ["is", "are", "was", "were"] },
                        { id: 14, text: "Some of the water ___ dirty.", answer: "is", type: 'multiple_choice', options: ["is", "are", "was", "were"] },
                        { id: 15, text: "Some of the students ___ late.", answer: "are", type: 'multiple_choice', options: ["is", "are", "was", "were"] },
                        { id: 16, text: "Everyone ___ here.", answer: "is", type: 'multiple_choice', options: ["is", "are", "was", "were"] },
                        { id: 17, text: "Many students ___ absent.", answer: "are", type: 'multiple_choice', options: ["is", "are", "was", "were"] },
                        { id: 18, text: "The singer and dancer ___ performing.", answer: "is", type: 'multiple_choice', options: ["is", "are", "was", "were"] },
                        { id: 19, text: "To study hard ___ important.", answer: "is", type: 'multiple_choice', options: ["is", "are", "was", "were"] },
                        { id: 20, text: "The students, as well as the teacher, ___ going on a trip.", answer: "are", type: 'multiple_choice', options: ["is", "are", "was", "were"] }
                    ]
                }
            ]
        }
    ]
};
