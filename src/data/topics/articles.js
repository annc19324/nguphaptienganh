export const articlesTopic = {
    id: 'articles',
    title: 'CHUYÊN ĐỀ 14: MẠO TỪ (Articles)',
    category: 'Articles',
    children: [
        {
            id: 'articles-theory',
            title: 'LÝ THUYẾT: MẠO TỪ',
            category: 'Articles',
            sections: [
                {
                    title: 'I. MẠO TỪ BẤT ĐỊNH (Indefinite Articles: A/AN)',
                    type: 'custom',
                    content: [
                        {
                            subtitle: '1. Cách dùng A/AN',
                            cases: [
                                {
                                    label: 'A - Trước phụ âm',
                                    formula: 'Dùng "A" trước danh từ số ít bắt đầu bằng phụ âm.\n\nEg: a book, a car, a university (phát âm /juː/)'
                                },
                                {
                                    label: 'AN - Trước nguyên âm',
                                    formula: 'Dùng "AN" trước danh từ số ít bắt đầu bằng nguyên âm (a, e, i, o, u).\n\nEg: an apple, an hour (h câm), an honest man'
                                },
                                {
                                    label: 'Nghề nghiệp',
                                    formula: 'Dùng trước danh từ chỉ nghề nghiệp.\n\nEg: She is a teacher. He is an engineer.'
                                },
                                {
                                    label: 'Lần đầu nhắc đến',
                                    formula: 'Dùng khi nhắc đến một người/vật lần đầu tiên.\n\nEg: I saw a man in the park.'
                                }
                            ]
                        }
                    ]
                },
                {
                    title: 'II. MẠO TỪ XÁC ĐỊNH (Definite Article: THE)',
                    type: 'custom',
                    content: [
                        {
                            subtitle: '1. Cách dùng THE',
                            cases: [
                                {
                                    label: 'Đã được nhắc đến',
                                    formula: 'Dùng khi danh từ đã được nhắc đến trước đó.\n\nEg: I saw a man. The man was tall.'
                                },
                                {
                                    label: 'Duy nhất',
                                    formula: 'Dùng trước danh từ chỉ vật duy nhất.\n\nEg: the sun, the moon, the earth, the world'
                                },
                                {
                                    label: 'So sánh nhất',
                                    formula: 'Dùng trước tính từ so sánh nhất.\n\nEg: the best, the most beautiful'
                                },
                                {
                                    label: 'Số thứ tự',
                                    formula: 'Dùng trước số thứ tự.\n\nEg: the first, the second, the last'
                                },
                                {
                                    label: 'Nhạc cụ',
                                    formula: 'Dùng trước tên nhạc cụ.\n\nEg: play the piano, play the guitar'
                                },
                                {
                                    label: 'Tên quốc gia đặc biệt',
                                    formula: 'Dùng với: the United States, the United Kingdom, the Netherlands, the Philippines'
                                },
                                {
                                    label: 'Tên biển, sông, dãy núi',
                                    formula: 'Eg: the Pacific Ocean, the Red River, the Alps'
                                }
                            ]
                        }
                    ]
                },
                {
                    title: 'III. KHÔNG DÙNG MẠO TỪ (Zero Article)',
                    type: 'custom',
                    content: [
                        {
                            subtitle: '1. Trường hợp không dùng mạo từ',
                            cases: [
                                {
                                    label: 'Danh từ số nhiều chung chung',
                                    formula: 'Eg: I like flowers. (nói chung)\nCats are cute animals.'
                                },
                                {
                                    label: 'Danh từ không đếm được',
                                    formula: 'Eg: Water is essential. I love music.'
                                },
                                {
                                    label: 'Bữa ăn',
                                    formula: 'Eg: have breakfast, have lunch, have dinner'
                                },
                                {
                                    label: 'Môn học',
                                    formula: 'Eg: study English, study Math'
                                },
                                {
                                    label: 'Môn thể thao',
                                    formula: 'Eg: play football, play basketball'
                                },
                                {
                                    label: 'Phương tiện đi lại (by)',
                                    formula: 'Eg: by car, by train, by bus, by plane'
                                },
                                {
                                    label: 'Tên nước (hầu hết)',
                                    formula: 'Eg: Vietnam, France, Japan, England'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'articles-ex-1',
            title: 'BÀI TẬP 1: TRẮC NGHIỆM (Multiple Choice)',
            category: 'Articles',
            sections: [
                {
                    title: 'Exercise 1: Mark the letter A, B, C, or D to indicate the correct answer',
                    subtitle: 'Chọn đáp án đúng nhất',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "I have bought ______ new shirt which matches ______ jacket I bought last week.", answer: "C", isExample: true, type: 'multiple_choice', options: ["some/a", "the/a", "a/the", "some/the"], explanation: "Vế đầu: Nhắc đến cái áo sơ mi lần đầu tiên -> dùng 'a'. Vế sau: Cái áo khoác đã được xác định bởi mệnh đề 'I bought last week' -> dùng 'the'." },
                        { id: 2, text: "Could you lend me some more? I've spent ______ money you gave me yesterday.", answer: "B", type: 'multiple_choice', options: ["Ø", "the", "a", "an"], explanation: "Danh từ 'money' đã được xác định bởi mệnh đề 'you gave me yesterday' -> dùng 'the'." },
                        { id: 3, text: "The principle river in Wales is ______ Severn, which flows from the slopes of Plymouth to ______ English border.", answer: "B", type: 'multiple_choice', options: ["Ø / Ø", "the/the", "a/the", "the/a"], explanation: "Dùng 'the' trước tên sông (the Severn) và trước danh từ có giới hạn (the English border)." },
                        { id: 4, text: "Until recently ______ economy of ______ southern United States was based on ______ cotton.", answer: "D", type: 'multiple_choice', options: ["an/the/Ø", "the/Ø/Ø", "the/the/the", "the/the/Ø"], explanation: "The economy of... (xác định); the southern United States (vùng miền xác định); cotton (danh từ không đếm được chỉ chất liệu nói chung -> không dùng mạo từ)." },
                        { id: 5, text: "I still keep wondering if I was doing ______ right thing when I asked my father for ______ permission to leave school.", answer: "B", type: 'multiple_choice', options: ["a/Ø", "the/Ø/Ø", "the/Ø", "Ø/a"], explanation: "the right thing (cụm từ cố định); ask for permission (yêu cầu sự cho phép - nói chung -> không dùng mạo từ)." },
                        { id: 6, text: "We needed ______ house to live in when we were in London.", answer: "A", type: 'multiple_choice', options: ["a", "the", "any", "Ø"], explanation: "Nhắc đến một ngôi nhà bất kỳ lần đầu tiên -> dùng 'a'." },
                        { id: 7, text: "You are ______ only person whose opinion is of any value to me in ______ present regrettable circumstances.", answer: "B", type: 'multiple_choice', options: ["the/Ø", "the/the", "the/a", "Ø/the"], explanation: "Dùng 'the' trước 'only'; 'the present circumstances' (hoàn cảnh hiện tại - đã xác định)." },
                        { id: 8, text: "The boy told me he hated ______ doctors.", answer: "C", type: 'multiple_choice', options: ["the", "some", "Ø", "a"], explanation: "Danh từ số nhiều chỉ chung một đối tượng (bác sĩ nói chung) -> không dùng mạo từ." },
                        { id: 9, text: "He had ______ laughing eyes and ______ most charming mouth.", answer: "C", type: 'multiple_choice', options: ["the/the", "a/a", "Ø/a", "Ø/the"], explanation: "laughing eyes (số nhiều nói chung -> Ø); most charming mouth (so sánh nhất -> the)." },
                        { id: 10, text: "My brother hopes to travel around the world ______ next summer.", answer: "D", type: 'multiple_choice', options: ["a", "an", "the", "Ø (no article)"], explanation: "Trước các từ chỉ thời gian có 'next/last' thường không dùng mạo từ." },
                        { id: 11, text: "Richard Byrd was ______ first person in history to fly over ______ ______ North Pole.", answer: "C", type: 'multiple_choice', options: ["the - a", "the - Ø", "the - the", "Ø - Ø"], explanation: "the first person (số thứ tự); the North Pole (địa điểm duy nhất, cực Bắc)." },
                        { id: 12, text: "______ university is an institution of higher education and research, which grants academic degrees.", answer: "A", type: 'multiple_choice', options: ["A", "An", "The", "Some"], explanation: "'University' bắt đầu bằng âm /j/ (phụ âm) nên dùng 'A'." },
                        { id: 13, text: "In most ______ developed countries, up to 50 % of ______ population enters higher education at some time in their lives.", answer: "D", type: 'multiple_choice', options: ["the / Ø", "Ø / Ø", "the / the", "Ø / the"], explanation: "most developed countries (hầu hết các nước - nói chung -> Ø); the population (dân số của một nhóm được xác định -> the)." },
                        { id: 14, text: "Reports are coming in of a major oil spill in ______ Mediterranean.", answer: "C", type: 'multiple_choice', options: ["an", "Ø", "the", "a"], explanation: "Dùng 'the' trước tên biển (the Mediterranean - Địa Trung Hải)." },
                        { id: 15, text: "______ non-verbal language is ______ important aspect of interpersonal communication.", answer: "B", type: 'multiple_choice', options: ["The - a", "Ø - an", "A - the", "The - Ø"], explanation: "non-verbal language (danh từ trừu tượng nói chung -> Ø); an important aspect (bắt đầu bằng nguyên âm 'i' -> an)." },
                        { id: 16, text: "Is it acceptable to touch ______ person on ______ shoulder in a conversation?", answer: "A", type: 'multiple_choice', options: ["a - the", "the - a", "the - the", "a - a"], explanation: "a person (một người bất kỳ); on the shoulder (trên bộ phận cơ thể -> dùng 'the')." },
                        { id: 17, text: "The excursion is ______ unique opportunity to discover ______ wild in its natural beauty.", answer: "B", type: 'multiple_choice', options: ["an - Ø", "a - the", "the - the", "an - the"], explanation: "a unique opportunity (unique bắt đầu bằng /j/ -> a); the wild (thế giới tự nhiên -> the)." },
                        { id: 18, text: "______ colleges and universities are the main institutions that provide ______ tertiary education.", answer: "A", type: 'multiple_choice', options: ["Ø - Ø", "The - Ø", "The - the", "Ø - the"], explanation: "Cả hai danh từ đều chỉ các cơ sở giáo dục nói chung -> không dùng mạo từ (Ø)." },
                        { id: 19, text: "I have left my book in ______ kitchen and I would like you to get it for me.", answer: "A", type: 'multiple_choice', options: ["the", "a", "Ø", "an"], explanation: "the kitchen (phòng bếp trong nhà - vật đã biết/xác định)." },
                        { id: 20, text: "Of all the world's major oceans, ______ Arctic Ocean is the shallowest.", answer: "B", type: 'multiple_choice', options: ["an", "the", "a", "Ø"], explanation: "the Arctic Ocean (tên đại dương luôn có 'the')." },
                        { id: 21, text: "My uncle's company made a very good profit in ______ 1990s.", answer: "A", type: 'multiple_choice', options: ["the", "Ø", "a", "an"], explanation: "Dùng 'the' trước các thập niên: the 1990s." },
                        { id: 22, text: "Park Hang-seo, who is the head coach of ______ Vietnam national football team, is a new idol of many people.", answer: "C", type: 'multiple_choice', options: ["Ø", "a", "the", "an"], explanation: "the Vietnam national football team (tên một tổ chức/đội tuyển cụ thể -> dùng 'the')." },
                        { id: 23, text: "Africa has always had a large migratory population because of war and ______ famine.", answer: "D", type: 'multiple_choice', options: ["a", "an", "the", "Ø"], explanation: "famine (nạn đói - danh từ trừu tượng nói chung -> không dùng mạo từ)." },
                        { id: 24, text: "My neighbor is ______ photographer. Let's ask him for ______ advice about color film.", answer: "C", type: 'multiple_choice', options: ["a - the", "the - an", "a - Ø", "the - the"], explanation: "a photographer (chỉ nghề nghiệp); advice (danh từ không đếm được nói chung -> không dùng mạo từ)." },
                        { id: 25, text: "The man grew up in ______ orphanage in ______ United Kingdom.", answer: "B", type: 'multiple_choice', options: ["the / an", "an / the", "an / an", "the / Ø"], explanation: "an orphanage (một trại trẻ mồ côi - nhắc đến lần đầu); the United Kingdom (tên quốc gia đặc biệt)." },
                        { id: 26, text: "Housewives find it easier to do domestic chores thanks to ______ invention of labour-saving devices.", answer: "C", type: 'multiple_choice', options: ["an", "some", "the", "a"], explanation: "the invention of... (sự phát minh ra cái gì đó - đã được xác định bởi cụm giới từ phía sau)." },
                        { id: 27, text: "Apparently, ______ science, mathematics, and technology are defined as much by what they do and how they do it as they are by ______ results they achieve.", answer: "B", type: 'multiple_choice', options: ["the / the", "Ø / the", "Ø / Ø", "the / Ø"], explanation: "Tên các môn học/ngành khoa học nói chung -> Ø; the results they achieve (kết quả họ đạt được - đã được xác định)." },
                        { id: 28, text: "More and more investors are pouring ______ money into food and beverage start-ups.", answer: "D", type: 'multiple_choice', options: ["the", "a", "an", "Ø"], explanation: "money (danh từ không đếm được nói chung -> không dùng mạo từ)." },
                        { id: 29, text: "______ man suffering from ______ shock should not be given anything to drink.", answer: "D", type: 'multiple_choice', options: ["A/the", "The/a", "Ø / a", "A/Ø"], explanation: "A man (một người đàn ông bất kỳ); shock (trong trường hợp này 'shock' là trạng thái nói chung -> Ø mạo từ)." },
                        { id: 30, text: "I won't be home for ______ dinner this evening. I'm meeting some friends after ______ work and we're going to ______ cinema.", answer: "C", type: 'multiple_choice', options: ["Ø/the/Ø", "The/Ø/Ø", "Ø/Ø/the", "Ø/the/the"], explanation: "dinner (bữa ăn); after work (sau giờ làm); the cinema (địa điểm công cộng quen thuộc)." },
                        { id: 31, text: "\"Did you have ______ nice holiday?\" – \"Yes, it was ______ best holiday I have ever had.\"", answer: "A", type: 'multiple_choice', options: ["a - the", "the - the", "the - a", "a - a"], explanation: "a nice holiday (nhắc đến lần đầu); the best (so sánh nhất)." },
                        { id: 32, text: "A worrying conclusion in the study called \"Heat and Learning\" is that ______ global warming may affect the future income of ______ students around the world.", answer: "D", type: 'multiple_choice', options: ["the / the", "Ø / the", "a / many", "Ø / Ø"], explanation: "global warming (sự nóng lên toàn cầu - hiện tượng nói chung -> Ø); students around the world (học sinh trên toàn thế giới - nói chung -> Ø)." },
                        { id: 33, text: "The escaping prisoner camped in ______ woods but he didn't light ______ fire because ______ smoke rising from the wood might attract ______ attention.", answer: "C", type: 'multiple_choice', options: ["the/a / Ø / Ø", "a/the/the/Ø", "the/a / Ø/the", "a/a / Ø/Ø"], explanation: "the woods (khu rừng cụ thể); a fire (một ngọn lửa); smoke (khói - không đếm được nói chung -> Ø); attention (sự chú ý - không đếm được nói chung -> Ø)." },
                        { id: 34, text: "My brother has been playing ______ piano since he was a small child.", answer: "A", type: 'multiple_choice', options: ["the", "a", "no article", "an"], explanation: "Dùng 'the' trước tên nhạc cụ khi chơi chúng." },
                        { id: 35, text: "Donald Trump is ______ president of ______ United States.", answer: "A", type: 'multiple_choice', options: ["the/the", "a/Ø", "the/an", "the/Ø"], explanation: "the president (chức vụ duy nhất); the United States (tên quốc gia đặc biệt)." },
                        { id: 36, text: "Our planned visit to ______ United Kingdom fell through because we were unable to get the visas.", answer: "C", type: 'multiple_choice', options: ["a", "an", "the", "no article"], explanation: "the United Kingdom (tên quốc gia đặc biệt luôn có 'the')." },
                        { id: 37, text: "According to ______ National Weather Service, ______ cyclones are ______ areas of circulating winds that rotate counterclockwise in ______ Northern Hemisphere and clockwise in ______ Southern Hemisphere.", answer: "B", type: 'multiple_choice', options: ["Ø/the/the/the", "the/Ø/Ø/the/the", "the/Ø/the/Ø", "the/Ø/Ø/an/the"], explanation: "the National Weather Service (tên tổ chức); cyclones (số nhiều nói chung -> Ø); the Northern/Southern Hemisphere (địa điểm duy nhất - Bắc/Nam bán cầu)." },
                        { id: 38, text: "Bodies of ______ dead in the tragic accident yesterday were taken away.", answer: "A", type: 'multiple_choice', options: ["the", "a", "an", "Ø"], explanation: "the dead (nhóm người đã mất - the + Adj)." },
                        { id: 39, text: "______ Socialist Republic of Vietnam is a country with a great patriotism through its history.", answer: "A", type: 'multiple_choice', options: ["The", "A", "An", "Ø"], explanation: "Cộng hòa Xã hội Chủ nghĩa Việt Nam (tên quốc gia có 'Republic' -> dùng 'The')." },
                        { id: 40, text: "My parents hope to travel around ______ world next summer.", answer: "C", type: 'multiple_choice', options: ["a", "an", "the", "Ø"], explanation: "the world (vật duy nhất)." },
                        { id: 41, text: "A recent survey has shown that ______ increasing number of men are willing to share the housework with their wives.", answer: "B", type: 'multiple_choice', options: ["a", "an", "the", "some"], explanation: "an increasing number of... (một số lượng ngày càng tăng - bắt đầu bằng nguyên âm 'i')." },
                        { id: 42, text: "First our team should identify ______ specific need in the community and then carry out a project to address that need.", answer: "C", type: 'multiple_choice', options: ["an", "Ø", "a", "the"], explanation: "a specific need (một nhu cầu cụ thể - nhắc đến lần đầu)." },
                        { id: 43, text: "Domestic appliances like washing machines and dishwashers have made ______ life much easier.", answer: "C", type: 'multiple_choice', options: ["the", "a", "Ø", "an"], explanation: "life (cuộc sống nói chung -> không dùng mạo từ)." },
                        { id: 44, text: "We moved to the countryside because we wanted to be close to ______ nature.", answer: "D", type: 'multiple_choice', options: ["a", "the", "an", "Ø"], explanation: "nature (thiên nhiên - không dùng mạo từ)." },
                        { id: 45, text: "She was drinking ______ glass of orange juice.", answer: "A", type: 'multiple_choice', options: ["a", "the", "Ø", "an"], explanation: "a glass of... (một ly nước)." },
                        { id: 46, text: "Mrs Florida felt that her marriage had become ______ prison.", answer: "A", type: 'multiple_choice', options: ["a", "the", "Ø", "an"], explanation: "a prison (như một nhà tù - nghĩa bóng, nhắc đến lần đầu)." },
                        { id: 47, text: "Laura is ______ most intelligent girl I've ever known.", answer: "D", type: 'multiple_choice', options: ["an", "Ø", "a", "the"], explanation: "the most intelligent (so sánh nhất)." },
                        { id: 48, text: "______ residents of the village are living a happy life although they lack ______ modern facilities.", answer: "D", type: 'multiple_choice', options: ["Ø/Ø", "Ø/the", "the/the", "the/Ø"], explanation: "The residents of the village (dân cư của ngôi làng - đã xác định); modern facilities (cơ sở vật chất hiện đại nói chung -> Ø)." },
                        { id: 49, text: "Tom sat down on ______ edge of a log and looked at ______ glassy surface of the lake.", answer: "B", type: 'multiple_choice', options: ["a/a", "the/the", "Ø/the", "the/Ø"], explanation: "the edge of... (mép của cái gì đó); the glassy surface (bề mặt như gương - đã xác định bằng cụm 'of the lake')." },
                        { id: 50, text: "______ deposit of 5 pounds is payable by anyone who wishes to become ______ reader of the library.", answer: "A", type: 'multiple_choice', options: ["A/a", "The/the", "The/Ø", "The/a"], explanation: "A deposit (một khoản tiền đặt cọc); a reader (một độc giả)." },
                    ]
                }
            ]
        },
        {
            id: 'articles-ex-2-1',
            title: 'BÀI TẬP 2.1: ĐIỀN MẠO TỪ (Fill in the blanks) - Part 1',
            category: 'Articles',
            sections: [
                {
                    title: 'Exercise 2.1: Fill in the blanks with a(n), the. Put on X where none is required',
                    subtitle: 'Điền a(n), the hoặc X (không cần mạo từ)',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "The scientists are working on ______ drug capable of arresting the spread of cancerous cells.", answer: "a", isExample: true, type: 'fill_blank' },
                        { id: 2, text: "In that mood I was unsuitable for attending ______ parents' meeting at the school.", answer: "the", type: 'fill_blank' },
                        { id: 3, text: "It's time he acted like ______ responsible adult and stopped blaming others for his wrongdoings.", answer: "a", type: 'fill_blank' },
                        { id: 4, text: "I liked reading in ______ garden, which was several steps below the level of the yard.", answer: "the", type: 'fill_blank' },
                        { id: 5, text: "Jason's father bought him ______ bike that he wanted for his birthday.", answer: "the", type: 'fill_blank' },
                        { id: 6, text: "______ Statue of Liberty was a gift of friendship from ______ France to ______ United states.", answer: "The/X/the", type: 'fill_blank' },
                        { id: 7, text: "Rita is studying ______ English and ______ Math this semester.", answer: "X/X", type: 'fill_blank' },
                        { id: 8, text: "Do you know ______ man who is waiting for the bus over there?", answer: "the", type: 'fill_blank' },
                        { id: 9, text: "Please give me ______ cup of ______ coffee with ______ cream and ______ sugar.", answer: "a/X/X/X", type: 'fill_blank' },
                        { id: 10, text: "______ big books which are on ______ table are for my history class.", answer: "The/the", type: 'fill_blank' },
                        { id: 11, text: "My ______ car is four years old, but it still runs well.", answer: "X", type: 'fill_blank' },
                        { id: 12, text: "There are only ______ few seats for ______ tonight's musical.", answer: "a/X", type: 'fill_blank' },
                        { id: 13, text: "______ chair that you are sitting in is broken.", answer: "The", type: 'fill_blank' },
                        { id: 14, text: "______ Civil War was fought in ______ United States between 1861 and 1865.", answer: "The/the", type: 'fill_blank' },
                        { id: 15, text: "We went by ______ train to the west of England.", answer: "X", type: 'fill_blank' },
                        { id: 16, text: "______ people who live in ______ Scotland are called the Scots.", answer: "The/X", type: 'fill_blank' },
                        { id: 17, text: "This house is very nice. Has it got ______ garden?", answer: "a", type: 'fill_blank' },
                        { id: 18, text: "There isn't ______ airport near where I live, ______ nearest airport is 70 miles away.", answer: "an/the", type: 'fill_blank' },
                        { id: 19, text: "Did you have ______ nice holiday? Yes, it was ______ best holiday I've ever had.", answer: "a/the", type: 'fill_blank' },
                        { id: 20, text: "Mai always plays ______ piano whenever she has free time.", answer: "the", type: 'fill_blank' },
                        { id: 21, text: "My daughter was born on ______ fifth of January.", answer: "the", type: 'fill_blank' },
                        { id: 22, text: "Yesterday I went to ______ school by ______ bus because my bike had been broken down.", answer: "X/X", type: 'fill_blank' },
                        { id: 23, text: "It takes me ______ hour to finish my work.", answer: "an", type: 'fill_blank' },
                        { id: 24, text: "She used to have ______ cat and ______ dog but ______ dog died.", answer: "a/a/the", type: 'fill_blank' },
                        { id: 25, text: "English is spoken all over ______ world.", answer: "the", type: 'fill_blank' },
                        { id: 26, text: "______ deaf are unable to hear anything.", answer: "The", type: 'fill_blank' },
                        { id: 27, text: "I like studying ______ math best.", answer: "X", type: 'fill_blank' },
                        { id: 28, text: "People all over the world like ______ football.", answer: "X", type: 'fill_blank' },
                        { id: 29, text: "______ tea is produced in Thai Nguyen.", answer: "X", type: 'fill_blank' },
                        { id: 30, text: "I wish today were on ______ Sunday.", answer: "X", type: 'fill_blank' },
                        { id: 31, text: "I often have ______ breakfast at 6:00pm and ______ lunch at 11:00 pm.", answer: "X/X", type: 'fill_blank' },
                        { id: 32, text: "She gave me ______ apple and gave Lan 2 ______ apples.", answer: "an/X", type: 'fill_blank' },
                        { id: 33, text: "______ Smiths are going to Ha Long bay next summer.", answer: "The", type: 'fill_blank' },
                        { id: 34, text: "If I won the lottery, first I would buy ______ piece of land in the country.", answer: "a", type: 'fill_blank' },
                        { id: 35, text: "This morning I bought a newspaper and ______ magazine. ______ newspaper is in my bag but I don't know where I put ______ magazine.", answer: "a/The/the", type: 'fill_blank' },
                        { id: 36, text: "I saw ______ accident this morning. ______ car crashed into ______ tree. ______ driver of ______ car wasn't hurt but ______ car was badly damaged.", answer: "an/A/a/The/the/the", type: 'fill_blank' },
                        { id: 37, text: "Maria comes from ______ United States. She is ______ American girl.", answer: "the/an", type: 'fill_blank' },
                        { id: 38, text: "The boy said: \"______ moon is bigger than ______ earth.\"", answer: "The/the", type: 'fill_blank' },
                        { id: 39, text: "I bought ______ car last week. ______ car is over there.", answer: "a/The", type: 'fill_blank' },
                        { id: 40, text: "I need ______ few apples but ______ lot of sugar.", answer: "a/a", type: 'fill_blank' },
                        { id: 41, text: "Where is ______ nearest shop? There is one at ______ end of this street.", answer: "the/the", type: 'fill_blank' },
                        { id: 42, text: "My friends live in ______ old house in ______ small village. There is ______ beautiful garden behind ______ house. I would like to have ______ garden like that.", answer: "an/a/a/the/a", type: 'fill_blank' },
                        { id: 43, text: "The office walls and furniture are ______ uniform grey.", answer: "a", type: 'fill_blank' },
                        { id: 44, text: "John and Mary went to ______ school yesterday and then studied in ______ library before returning home.", answer: "X/the", type: 'fill_blank' },
                        { id: 45, text: "On our trip to ______ Spain, we crossed ______ Atlantic Ocean.", answer: "X/the", type: 'fill_blank' },
                        { id: 46, text: "Rita plays ______ violin and her sister plays ______ guitar.", answer: "the/the", type: 'fill_blank' },
                        { id: 47, text: "David played ______ basketball and ______ baseball at ______ Boy's club this year.", answer: "X/X/the", type: 'fill_blank' },
                        { id: 48, text: "The political science class is taking ______ trip to ______ France in ______ Spring.", answer: "a/X/the", type: 'fill_blank' },
                        { id: 49, text: "Last night there was ______ bird singing outside my house.", answer: "a", type: 'fill_blank' },
                        { id: 50, text: "He is ______ honest person.", answer: "an", type: 'fill_blank' }
                    ]
                }
            ]
        },
        {
            id: 'articles-ex-2-2',
            title: 'BÀI TẬP 2.2: ĐIỀN MẠO TỪ (Fill in the blanks) - Part 2',
            category: 'Articles',
            sections: [
                {
                    title: 'Exercise 2.2: Fill in the blanks with a(n), the. Put on X where none is required',
                    subtitle: 'Điền a(n), the hoặc X (không cần mạo từ) - Phần 2',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "______ photographs show him wearing ______ T-shirt and ripped jeans that were ______ student's uniform of ______ time.", answer: "The/a/the/the", isExample: true, type: 'fill_blank' },
                        { id: 2, text: "He is ______ one-eyed man.", answer: "a", type: 'fill_blank' },
                        { id: 3, text: "There is ______ useful method of learning English.", answer: "a", type: 'fill_blank' },
                        { id: 4, text: "I've got ______ uncle.", answer: "an", type: 'fill_blank' },
                        { id: 5, text: "Your shoes are under ______ bed.", answer: "the", type: 'fill_blank' },
                        { id: 6, text: "There is a strike at ______ hospital.", answer: "the", type: 'fill_blank' },
                        { id: 7, text: "There is ______ onion left in the fridge.", answer: "an", type: 'fill_blank' },
                        { id: 8, text: "There is a splendid view of ______ Lake Geneva from his hotel.", answer: "X", type: 'fill_blank' },
                        { id: 9, text: "She is ______ nurse, so her work is to take care of ______ sick.", answer: "a/the", type: 'fill_blank' },
                        { id: 10, text: "______ summer is ______ warmest season but ______ summer of 1971 was unusually cool.", answer: "X/the/the", type: 'fill_blank' },
                        { id: 11, text: "He began to hum ______ song. It was ______ old popular song.", answer: "a/an", type: 'fill_blank' },
                        { id: 12, text: "______ deaf are ______ people who can't hear anything.", answer: "The/X", type: 'fill_blank' },
                        { id: 13, text: "My hometown is on the bank of ______ Red river.", answer: "the", type: 'fill_blank' },
                        { id: 14, text: "Tung's father bought him ______ bicycle that he had wanted for his birthday.", answer: "the", type: 'fill_blank' },
                        { id: 15, text: "My mother goes to church in ______ morning.", answer: "the", type: 'fill_blank' },
                        { id: 16, text: "I eat ______ banana every day.", answer: "a", type: 'fill_blank' },
                        { id: 17, text: "Harry is a sailor. He spends most of his life at ______ sea.", answer: "X", type: 'fill_blank' },
                        { id: 18, text: "______ young man listened to ______ conservation with ______ amused smile.", answer: "The/the/an", type: 'fill_blank' },
                        { id: 19, text: "He tried to park his car but ______ space wasn't big enough.", answer: "the", type: 'fill_blank' },
                        { id: 20, text: "We had ______ dinner in a restaurant.", answer: "X", type: 'fill_blank' },
                        { id: 21, text: "We had ______ meal in a restaurant.", answer: "a", type: 'fill_blank' },
                        { id: 22, text: "______ rose is my favorite color.", answer: "X", type: 'fill_blank' },
                        { id: 23, text: "He heard ______ popular song played by ______ dance band on ______ radio.", answer: "a/a/the", type: 'fill_blank' },
                        { id: 24, text: "______ fact that he would have independent means made her feel relieved.", answer: "The", type: 'fill_blank' },
                        { id: 25, text: "Mary loves ______ flowers.", answer: "X", type: 'fill_blank' },
                        { id: 26, text: "Jill went to ______ hospital to see her friend.", answer: "the", type: 'fill_blank' },
                        { id: 27, text: "Mrs Lan went to ______ school to meet her son's daughter.", answer: "the", type: 'fill_blank' },
                        { id: 28, text: "Carol went to ______ prison to meet her brother.", answer: "X", type: 'fill_blank' },
                        { id: 29, text: "______ questions Ann asked always seemed to be ______ questioned to which Paul knew the answers.", answer: "The/the", type: 'fill_blank' },
                        { id: 30, text: "She works six days ______ week.", answer: "a", type: 'fill_blank' },
                        { id: 31, text: "______ sun is a star.", answer: "The", type: 'fill_blank' },
                        { id: 32, text: "What did you have for ______ breakfast this morning.", answer: "X", type: 'fill_blank' },
                        { id: 33, text: "London is ______ capital of England.", answer: "the", type: 'fill_blank' },
                        { id: 34, text: "When was ______ telephone invented?", answer: "the", type: 'fill_blank' },
                        { id: 35, text: "What he said reminded me of ______ film I had seen.", answer: "a", type: 'fill_blank' },
                        { id: 36, text: "We haven't been to ______ cinema for years.", answer: "the", type: 'fill_blank' },
                        { id: 37, text: "Do you need ______ umbrella?", answer: "an", type: 'fill_blank' },
                        { id: 38, text: "______ injured man was taken to ______ hospital.", answer: "The/X", type: 'fill_blank' },
                        { id: 39, text: "She went out without ______ money.", answer: "X", type: 'fill_blank' },
                        { id: 40, text: "Tosi speaks ______ Japanese at home.", answer: "X", type: 'fill_blank' },
                        { id: 41, text: "A man and a woman were standing outside my house. ______ Man looked English but I think ______ woman was a foreigner.", answer: "The/the", type: 'fill_blank' },
                        { id: 42, text: "The Soviet Union was ______ first country to send a man into ______ space.", answer: "the/X", type: 'fill_blank' },
                        { id: 43, text: "Did you watch \"Titanic\" on ______ television or at ______ cinema?", answer: "X/the", type: 'fill_blank' },
                        { id: 44, text: "After ______ lunch, we went for a walk by ______ sea.", answer: "X/the", type: 'fill_blank' },
                        { id: 45, text: "Peru is ______ country in South America. ______ capital is Lima.", answer: "a/The", type: 'fill_blank' },
                        { id: 46, text: "It was a beautiful day. ______ sun shone brightly in ______ sky.", answer: "The/the", type: 'fill_blank' },
                        { id: 47, text: "It is said that Robin Hood robbed ______ rich and gave the money to ______ poor.", answer: "the/the", type: 'fill_blank' },
                        { id: 48, text: "Life is not so easy for ______ unemployed.", answer: "the", type: 'fill_blank' },
                        { id: 49, text: "On our trip to Spain, we crossed ______ Atlantic Ocean.", answer: "the", type: 'fill_blank' },
                        { id: 50, text: "Mel's mother is in ______ hospital, so we went to visit her last night.", answer: "X", type: 'fill_blank' }
                    ]
                }
            ]
        },
        {
            id: 'articles-ex-3',
            title: 'BÀI TẬP 3: TÌM LỖI SAI (Error Correction)',
            category: 'Articles',
            sections: [
                {
                    title: 'Exercise 3: Mark the letter A, B, C or D to indicate the underlined part that needs correction',
                    subtitle: 'Tìm lỗi sai về mạo từ trong câu',
                    type: 'exercise',
                    questions: [
                        { id: 1, text: "Once tested for viruses, the software can be installed in the school computer system for the use.\nA. tested\nB. can be installed\nC. computer system\nD. the use", answer: "D", isExample: true, type: 'multiple_choice', options: ["tested", "can be installed", "computer system", "the use"] },
                        { id: 2, text: "It was only birthday he had celebrated since he was a child.\nA. only\nB. he had celebrated\nC. since\nD. was", answer: "A", type: 'multiple_choice', options: ["only", "he had celebrated", "since", "was"], explanation: "Dùng 'the' trước 'only' (the only birthday)." },
                        { id: 3, text: "Nowadays, everybody knows Apples and almost everybody knows that a company was founded by Steve Jobs, an American inventor and entrepreneur.\nA. knows\nB. a company\nC. was founded\nD. an American", answer: "B", type: 'multiple_choice', options: ["knows", "a company", "was founded", "an American"], explanation: "Thay 'a company' thành 'the company' vì công ty này đã được xác định là Apple ở trước đó." },
                        { id: 4, text: "The teacher entered the room while the students were discussing their plan for an excursion.\nA. entered\nB. were discussing\nC. their\nD. an excursion", answer: "D", type: 'multiple_choice', options: ["entered", "were discussing", "their", "an excursion"], explanation: "Thay 'an excursion' thành 'the excursion' vì chuyến tham quan đã được xác định rõ là của các học sinh này." },
                        { id: 5, text: "Of all papers I read this morning, none interested me as much as this one.\nA. all papers\nB. read\nC. interested\nD. as much as", answer: "A", type: 'multiple_choice', options: ["all papers", "read", "interested", "as much as"], explanation: "Thay 'all papers' thành 'all the papers' vì các bài báo đã được xác định bởi mệnh đề 'I read this morning'." },
                        { id: 6, text: "Steve Jobs died in 2011 after battling with the pancreatic cancer for nearly a decade.\nA. died\nB. battling\nC. the pancreatic cancer\nD. nearly", answer: "C", type: 'multiple_choice', options: ["died", "battling", "the pancreatic cancer", "nearly"], explanation: "Tên các loại bệnh (pancreatic cancer) thường không dùng mạo từ." },
                        { id: 7, text: "He left on the 10 o'clock train yesterday to see his father who was taken to the hospital last week when he broke his right leg.\nA. the 10 o'clock train\nB. to see\nC. the hospital\nD. his right leg", answer: "C", type: 'multiple_choice', options: ["the 10 o'clock train", "to see", "the hospital", "his right leg"], explanation: "Bỏ 'the' trước 'hospital' vì bác sĩ/bệnh nhân đến bệnh viện đúng mục đích chính (chữa bệnh)." },
                        { id: 8, text: "Every week, his mother goes to university to visit him while my mother has never come to visit me since I went to university.\nA. to university\nB. to visit\nC. has never come\nD. went to", answer: "A", type: 'multiple_choice', options: ["to university", "to visit", "has never come", "went to"], explanation: "Dùng 'the university' vì mẹ đến trường không phải để học mà để thăm con (sai mục đích chính của địa điểm)." },
                        { id: 9, text: "I have visited Portugal but I have never been to Netherlands, so I intend to visit it next summer.\nA. have visited\nB. have never been\nC. Netherlands\nD. to visit", answer: "C", type: 'multiple_choice', options: ["have visited", "have never been", "Netherlands", "to visit"], explanation: "Dùng 'the' trước 'Netherlands' (tên quốc gia đặc biệt)." },
                        { id: 10, text: "Last month, while my friend was traveling round England by the car, he crashed the car into a tree.\nA. was traveling\nB. by the car\nC. crashed\nD. into a tree", answer: "B", type: 'multiple_choice', options: ["was traveling", "by the car", "crashed", "into a tree"], explanation: "Không dùng mạo từ trong cấu trúc 'by + phương tiện giao thông' (by car)." }
                    ]
                }
            ]
        }
    ]
};



