import fs from 'fs';


const ex6_raw = `1. "I haven't finished my homework yet," the student said.
→ The student said that he/she hadn't finished his/her homework yet.
2. "We are planning a trip to Europe next month," they announced.
→ They announced that they were planning a trip to Europe the following month.
3. "I don't understand this math problem," Mary told her teacher.
→ Mary told her teacher that she didn't understand that math problem.
4. "The concert will start at 8 PM tonight," the organizer informed us.
→ The organizer informed us that the concert would start at 8 PM that night.
5. "I have been working on this project for two weeks," Tom said.
→ Tom said that he had been working on that project for two weeks.
6. "We won't be able to attend the meeting tomorrow," the team leader said.
→ The team leader said that they wouldn't be able to attend the meeting the next day.
7. "I'm allergic to peanuts," she told the waiter.
→ She told the waiter that she was allergic to peanuts.
8. "The train leaves at 6 AM sharp," the station master announced.
→ The station master announced that the train left at 6 AM sharp.
9. "I forgot to bring my wallet," John said to his friend.
→ John said to his friend that he had forgotten to bring his wallet.
10. "We have lived in this city for ten years," my parents said.
→ My parents said that they had lived in that city for ten years.
11. "I will graduate from university next year," Sarah told her grandparents.
→ Sarah told her grandparents that she would graduate from university the following year.
12. "The museum is closed on Mondays," the guide informed the tourists.
→ The guide informed the tourists that the museum was closed on Mondays.
13. "I've never been to Australia before," he said.
→ He said that he had never been to Australia before.
14. "We must submit the report by Friday," the manager told the employees.
→ The manager told the employees that they must submit the report by Friday.
15. "I'm learning to play the guitar," Lisa said to her cousin.
→ Lisa said to her cousin that she was learning to play the guitar.`;

const ex7_raw = `1. Tom: "Where did you go last weekend?"
→ Tom asked me where ____________
A. I went last weekend
B. did I go last weekend
C. I had gone last weekend
D. I have gone last weekend
Answer: C

2. Sarah: "Are you coming to the party tonight?"
→ Sarah asked if ____________
A. I am coming to the party tonight
B. I was coming to the party that night
C. will I come to the party tonight
D. I come to the party tonight
Answer: B

3. Teacher: "Who wrote this essay?"
→ The teacher wanted to know ____________
A. who has written this essay
B. who had written that essay
C. who wrote this essay
D. who did write this essay
Answer: B

4. John: "How long have you been studying English?"
→ John asked me how long ____________
A. I have been studying English
B. had I been studying English
C. I was studying English
D. I studied English
Answer: B

5. Mike: "Can you help me with my homework?"
→ Mike asked if ____________
A. I can help him with his homework
B. I could help him with his homework
C. could I help him with his homework
D. I help him with his homework
Answer: B

6. Lisa: "What time does the movie start?"
→ Lisa wanted to know ____________
A. what time the movie starts
B. what time did the movie start
C. what time the movie started
D. what time is the movie starting
Answer: C

7. Dad: "Have you cleaned your room yet?"
→ Dad asked if ____________
A. I have cleaned my room yet
B. I had cleaned my room yet
C. I cleaned my room yet
D. have I cleaned my room yet
Answer: B

8. Anna: "Will you be at the meeting tomorrow?"
→ Anna asked if ____________
A. I will be at the meeting tomorrow
B. I would be at the meeting the next day
C. I am at the meeting tomorrow
D. was I at the meeting tomorrow
Answer: B

9. The doctor asked him, "How often do you exercise?"
→ The doctor inquired ____________
A. how often he exercised
B. how often did he exercise
C. how often I exercised
D. how often did I exercise
Answer: A

10. Peter: "What were you doing when I called?"
→ Peter asked what ____________
A. I was doing when he called
B. I had been doing when he called
C. was I doing when he called
D. I have been doing when he called
Answer: A

11. Mary: "Do you like spicy food?"
→ Mary asked if ____________
A. I like spicy food
B. I liked spicy food
C. did I like spicy food
D. I had liked spicy food
Answer: B

12. Teacher: "Why didn't you submit your assignment on time?"
→ The teacher asked why ____________
A. I didn't submit my assignment on time
B. I haven't submitted my assignment on time
C. I hadn't submitted my assignment on time
D. didn't I submit my assignment on time
Answer: C

13. Bob: "How many languages can you speak?"
→ Bob wanted to know ____________
A. how many languages can I speak
B. how many languages I could speak
C. how many languages I can speak
D. how many languages could I speak
Answer: B

14. Emma: "Where are you going for your vacation?"
→ Emma asked where ____________
A. I am going for my vacation
B. I was going for my vacation
C. am I going for my vacation
D. I went for my vacation
Answer: B

15. David asked her, "Have you ever been to Paris?"
→ David asked if ____________
A. she has ever been to Paris
B. had I ever been to Paris
C. she had ever been to Paris
D. I have ever been to Paris
Answer: C`;

const ex8_raw = `1. Sarah said, "I will visit my grandparents next week".
→ Sarah said (that) she would visit her grandparents the following week.
2. Tom said, "I have never been to Paris".
→ Tom said (that) he had never been to Paris.
3. The teacher said, "The exam will be on Friday".
→ The teacher said (that) the exam would be on Friday.
4. My sister said, "I'm learning to play the piano".
→ My sister said (that) she was learning to play the piano.
5. John said, "I can't find my car keys".
→ John said (that) he couldn't find his car keys.
6. Emma said, "I've been working on this project for a month".
→ Emma said (that) she had been working on that project for a month.
7. The doctor said, "You need to take this medicine twice a day".
→ The doctor said (that) I/we needed to take that medicine twice a day.
8. Mike said, "I'll call you as soon as I arrive".
→ Mike said (that) he would call me/us as soon as he arrived.
9. Lisa said, "I don't like spicy food".
→ Lisa said (that) she didn't like spicy food.
10. The manager said, "We're having a meeting tomorrow morning".
→ The manager said (that) they were having a meeting the next morning.
11. Peter said, "I've lost my wallet”.
→ Peter said (that) he had lost his wallet.
12. Anna said, "I'm going to the gym after work”.
→ Anna said (that) she was going to the gym after work.
13. The waiter said, "Your table will be ready in 10 minutes".
→ The waiter said (that) our table would be ready in 10 minutes.
14. David said, "I've been living in this city for five years".
→ David said (that) he had been living in that city for five years.
15. The weatherman said, "It will rain tomorrow".
→ The weatherman said (that) it would rain the next day.`;

const ex9_raw = `1. "Where is my umbrella?" she asked.
Answer: She asked me where her umbrella was.
2. "How are you?" Martin asked us.
Answer: Martin asked us how we were.
3. He asked, "Do I have to do it?"
Answer: He asked if he had to do it.
4. "Where have you been?" the mother asked her daughter.
Answer: The mother asked her daughter where she had been.
5. "Which dress do you like best?" she asked her boyfriend.
Answer: She asked her boyfriend which dress he liked best.
6. "What are they doing?" she asked.
Answer: She wanted to know what they were doing.
7. "Are you going to the cinema?" he asked me.
Answer: He wanted to know if I was going to the cinema.
8. The teacher asked, "Who speaks English?"
Answer: The teacher wanted to know who spoke English.
9. "How do you know that?" she asked me.
Answer: She asked me how I knew that.
10. "Has Caron talked to Kevin?" my friend asked me.
Answer: My friend asked me if Caron had talked to Kevin.
11. "What's the time?" he asked.
Answer: He wanted to know what time it was.
12. "When will we meet again?" she asked me.
Answer: She asked me when we would meet again.
13. "Are you crazy?" she asked him.
Answer: She asked him if he was crazy.
14. "Where did they live?" he asked.
Answer: He wanted to know where they had lived.
15. "Will you be at the party?" he asked her.
Answer: He asked her if she would be at the party.
16. "Can you meet me at the station?" she asked me.
Answer: She asked me if I could meet her at the station.
17. "Who knows the answer?" the teacher asked.
Answer: The teacher wanted to know who knew the answer.
18. "Why don't you help me?" she asked him.
Answer: She wanted to know why he didn’t help her.
19. "Did you see that car?" he asked me.
Answer: He asked me if I had seen that car.
20. "Have you tidied up your room?" the mother asked the twins.
Answer: The mother asked the twins if they had tidied up their room.
21. "Stop talking, Joe," the teacher said.
Answer: The teacher told Joe to stop talking.
22. "Be patient," she said to him.
Answer: She told him to be patient.
23. "Go to your room," her father said to her.
Answer: Her father told her to go to her room.
24. "Hurry up," she said to us.
Answer: She told us to hurry up.
25. "Give me the key," he told her.
Answer: He asked her to give him the key.
26. "Play it again, Sam," she said.
Answer: She asked Sam to play it again.
27. "Sit down, Caron" he said.
Answer: He asked Caron to sit down.
28. "Fill in the form, Sir," the receptionist said.
Answer: The receptionist asked the guest to fill in the form.
29. "Take off your shoes," she told us.
Answer: She told us to take off our shoes.
30. "Mind your own business," she told him.
Answer: She told him to mind his own business.`;

const ex10_raw = `1. She said, "Go upstairs."
Answer: She told me to go upstairs.
2. "Close the door behind you," he told me.
Answer: He told me to close the door behind me.
3. "Don't be late," he advised us.
Answer: He advised us not to be late.
4. "Stop staring at me," she said.
Answer: She told him to stop staring at her.
5. "Don't be angry with me," he said.
Answer: He asked her not to be angry with him.
6. "Leave me alone," she said.
Answer: She told me to leave her alone.
7. "Don't drink and drive," she warned us.
Answer: She warned us not to drink and drive.
8. "John, stop smoking," she said.
Answer: She told John to stop smoking.
9. "Don't worry about us," they said.
Answer: They told her not to worry about them.
10. "Meet me at the cinema." he said.
Answer: He asked me to meet him at the cinema.
11. He said, "I like this song."
Answer: He said that he liked that song.
12. "Where is your sister?" she asked me.
Answer: She asked me where my sister was.
13. "I don't speak Italian," she said.
Answer: She said that she didn’t speak Italian.
14. "Say hello to Jim," they said.
Answer: They asked me to say hello to Jim.
15. "The film began at seven o'clock," he said.
Answer: He said that the film began at seven o’clock.`;

const ex11_raw = `1. “If the weather is fine, I will go on a picnic with my friends,” she said.
Answer: She said that if the weather was fine, she would go on a picnic with her friends.
2. “What would you do if you had three days off ?” I asked him.
Answer: I asked him what he would do if he had three days off.
3. “I would have come to see you if I had known your address, Jim” she said.
Answer: She told Jim that she would have come to see him if she had known his address.
4. “I’m sure she will help you if you ask her.” , he told me.
Answer: He told me that he was sure she would help me if I asked her.
5. “If Today were Sunday, we wouldn’t go to school.” They said to me.
Answer: They said to me that if that day were Sunday, they wouldn’t go to school.
6. She said to me, “If I were you, I wouldn’t tell her about this.”
Answer: She told me that if she were me, she wouldn’t tell her about that.
7. “There would not be enough seats if a lot of guests came.”, they said.
Answer: They said that there would not be enough seats if a lot of guests came.
8. “You will be surprised if you meet him.” , Peter said to Linda.
Answer: Peter said to Linda that she would be surprised if she met him.
9.The boy said : “I won’t be strong if I don’t swim everyday.”
Answer: The boy said that he wouldn’t be strong if he didn’t swim everyday.
10. “What would you do if you saw a snake ?” Nam asked Nga.
Answer: Nam asked Nga what she would do if she saw a snake.
11. “We’ll have lunch outside in the garden if it’s not cold.” ,Mr John said.
Answer: Mr John said that they would have lunch outside in the garden if it wasn't cold.
12. “Tom would win more races if he trained hard.” , The man said.
Answer: The man said that Tom would win more races if he trained hard.
13. “If you feel like a chat, phone me tonight.” David said to me.
Answer: David told me to phone him that night if I felt like a chat.
14. “If you isn’t eating so much junk food, you would be a lot fitter.” Mother said.
Answer: Mother said that if I weren't eating so much junk food, I would be a lot fitter.
15. “I will be surprised if Mary doesn’t pass the exam.” , our teacher said.
Answer: Our teacher said that he would be surprised if Mary doesn’t pass the exam.
16. “If I knew her hobbies, I could let you know.” He said to me.
Answer: He said to me that if he knew her hobbies, he could let me know.
17. “If I won the lottery, I would buy a new car.” , the man said.
Answer: The man said that if he won the lottery, he would buy a new car.
18. “If you had listened to my advice, you wouldn’t have made such a big mistakes.” Julia said to LiLi.
Answer: Julia said to LiLi that if she had listened to her advice, she wouldn’t have made such a big mistakes.`;

const ex12_raw = `1. Jack asked me _____.
A. where do you come from?
B. where I came from
C. where I came from
D. where did I come from?
Answer: B

2. She asked me _____ I liked pop music.
A.when
B.what
C.if
D.x
Answer: C

3. The doctor ____ him to take more exercise.
A.told
B.tell
C. have told
D. are telling
Answer: A

4. I wanted to know_____ return home.
A. when would she
B. when will she
C. when she will
D. when she would
Answer: D

5. Claire told me that her father____ a race horse.
A. owns
B. owned
C. owning
D. A and B
Answer: B

6. What did that man say ______?
A. at you
B. for you
C. to you
D. you
Answer: C

7. I rang my friend in Australia yesterday, and she said it _______ raining there.
A. is
B. were
C. has been
D. was
Answer: D

8. The builders have ______ that everything will be ready on time.
A. promised
B. promise
C. promises
D. promising
Answer: A

9. The doctor _______ him to take more exercise.
A. told
B. tell
C. have told
D. are telling
Answer: A

10. The last time I saw Linda, she looked very relaxed. She explained she’d been on holiday the ______ week.
A. ago
B. following
C. next
D. previous
Answer: D

11. Yesterday, Laura ______ him to put some shelves up.
A. asked
B. is asking
C. ask
D. was asked
Answer: A

12. Tom has ______ this story wasn’t completely true.
A. admitting that
B. was admitted that
C. admitted that
D. admit that
Answer: C

13. When I rang Tessa some time last week, she said she was busy ______ day.
A. that
B. the
C. then
D. this
Answer: A

14. I wonder _____ the tickets are on sale yet.
A. what
B. when
C. where
D. whether
Answer: D

15. Mathew _____ Emma that her train was about to leave.
A. has reminded
B. has reminded that
C. reminded
D. reminded that
Answer: C

16. Hello, Jim. I didn’t expect to see you today. Sophie said you _____ ill.
A. are
B. were
C. was
D. should be
Answer: B

17. Ann ______ and left.
A. said goodbye to me
B. says goodbye to me
C. tell me goodbye
D. told me goodbye
Answer: A

18. I told you ______ switch off the computer, didn’t I ?
A. don’t
B. not
C. not to
D. to not
Answer: C

19. Bill was slow, so I ________ hurry up.
A. tell him
B. told him for
C. told to
D. told him to
Answer: D

20. Sarah was driving to fast, so I ______ to slow down.
A. asked her
B. asked
C. ask
D.have asked her
Answer: A

21. Someone ______ me there’s been an accident on the motorway.
A. asked
B. said
C. spoke
D. told
Answer: D

22. Sue was very pessimistic about the situation. I advised her _____.
A. no worry
B. not worry
C. no to worry
D. not to worry
Answer: D

23. I couldn’t move the piano alone, so I asked Tom_______.
A. giving a hand
B. gave a hand
C. to give a hand
D. give a hand
Answer: C

24. Tom said that New York _______ more lively than London.
A. is
B. be
C. was
D. were
Answer: C

25. When he was at Oliver’s flat yesterday, Martin asked if he ______ use the phone.
A. can
B. could
C. may
D. must
Answer: B

26. George couldn’t help me. He ______ me to ask Kate.
A. tell
B. said
C. told
D. say
Answer: C

27. Judy ______ going for a walk, but no one else wanted to.
A.admitted
B. offered
C. promised
D. suggested
Answer: D

28. I said that I had met her ______ .
A. yesterday
B. the previous day
C. the day
D. the before day.
Answer: B

29. The man asked the boys ______ .
A. why did they fight
B. why they were fighting
C. why they fight
D.why were they fighting
Answer: B

30. “______the door”, he said.
A. please open
B. open pleased
C. please to open
D. please, opening
Answer: A

31. I wanted to know ______ return home.
A. when would she
B. when will she
C. when she will
D. when she would
Answer: D

32. The woman wonders _______ doing well at school.
A. whether her children are
B. if her children were
B. whether her children were
D. her children are if
Answer: A

33. Peter said he was leaving for Paris ______.
A. next week
B. the week previous
C. following week
D. the following week
Answer: D

34. “I don’t usually drink milk when ______ ” Mrs. Pike said.
A. she was hungry
B. I was hungry
C. I am hungry
D. I will be
Answer: C

35. They said that their house had been broken into ______.
A. the two days before
B. two days ago
C. two days before
D. since two days
Answer: C`;

function parseFillBlank(raw) {
    const lines = raw.split('\n').filter(line => line.trim() !== '');
    const questions = [];
    let currentQ = null;

    for (const line of lines) {
        if (/^\d+\.?/.test(line)) {
            // New question
            const text = line.replace(/^\d+\.?\s*/, '').trim();
            const id = parseInt(line.match(/^\d+/)[0]);
            currentQ = { id, text, answer: '', type: 'fill_blank' };
            questions.push(currentQ);
        } else if (line.startsWith('→') || line.startsWith('Answer:')) {
            let ans = line.trim();
            if (ans.startsWith('→')) ans = ans.substring(1).trim();
            if (ans.startsWith('Answer:')) ans = ans.substring(7).trim();
            if (currentQ) {
                currentQ.answer = ans;
            }
        }
    }
    return questions;
}

function parseMultipleChoice(raw) {
    const blocks = raw.split(/\n\s*\n/);
    const questions = [];

    for (const block of blocks) {
        if (!block.trim()) continue;
        const lines = block.split('\n').map(l => l.trim()).filter(l => l);

        let idRaw = lines[0].match(/^\d+/);
        if (!idRaw) continue;

        const id = parseInt(idRaw[0]);
        // Text is rest of first line + maybe second line if it starts with arrow
        let textLine = lines[0].replace(/^\d+\.?\s*/, '');
        let optionStartIndex = 1;

        if (lines[1] && lines[1].startsWith('→')) {
            textLine += '\n' + lines[1];
            optionStartIndex = 2;
        }

        const opts = [];
        let ans = '';

        for (let i = optionStartIndex; i < lines.length; i++) {
            if (lines[i].startsWith('Answer:')) {
                ans = lines[i].replace('Answer:', '').trim();
            } else if (/^[A-D]\./.test(lines[i])) {
                opts.push(lines[i].replace(/^[A-D]\.\s*/, '').trim());
            }
        }

        questions.push({
            id: id,
            text: textLine,
            answer: ans,
            type: 'multiple_choice',
            options: opts
        });
    }
    return questions;
}

const q6 = parseFillBlank(ex6_raw);
const q7 = parseMultipleChoice(ex7_raw);
const q8 = parseFillBlank(ex8_raw);
const q9 = parseFillBlank(ex9_raw);
const q10 = parseFillBlank(ex10_raw);
const q11 = parseFillBlank(ex11_raw);
const q12 = parseMultipleChoice(ex12_raw);

const sections = [
    {
        id: 'reported-ex-6',
        title: 'BÀI TẬP 6: VIẾT LẠI CÂU (Sentence Transformation) - Part 4',
        category: 'Reported Speech',
        sections: [{
            title: 'Exercise 6: Rewrite these sentences so that they have the same meaning',
            subtitle: 'Viết lại các câu sau sao cho nghĩa không đổi',
            type: 'exercise',
            questions: q6
        }]
    },
    {
        id: 'reported-ex-7',
        title: 'BÀI TẬP 7: TRẮC NGHIỆM (Multiple Choice) - Part 3',
        category: 'Reported Speech',
        sections: [{
            title: 'Exercise 7: Choose the best answer',
            subtitle: 'Chọn đáp án đúng',
            type: 'exercise',
            questions: q7
        }]
    },
    {
        id: 'reported-ex-8',
        title: 'BÀI TẬP 8: VIẾT LẠI CÂU DÙNG TỪ GỢI Ý',
        category: 'Reported Speech',
        sections: [{
            title: 'Exercise 8: Complete the sentences using the given words',
            subtitle: 'Viết lại câu tường thuật dùng từ gợi ý',
            type: 'exercise',
            questions: q8
        }]
    },
    {
        id: 'reported-ex-9',
        title: 'BÀI TẬP 9: VIẾT LẠI CÂU HỖN HỢP - Part 1',
        category: 'Reported Speech',
        sections: [{
            title: 'Exercise 9: Rewrite these sentences into reported speech',
            subtitle: 'Bài tập câu tường thuật tổng hợp 1',
            type: 'exercise',
            questions: q9
        }]
    },
    {
        id: 'reported-ex-10',
        title: 'BÀI TẬP 10: VIẾT LẠI CÂU HỖN HỢP - Part 2',
        category: 'Reported Speech',
        sections: [{
            title: 'Exercise 10: Rewrite these sentences into reported speech (Mixed)',
            subtitle: 'Bài tập câu tường thuật pha trộn negative và positive',
            type: 'exercise',
            questions: q10
        }]
    },
    {
        id: 'reported-ex-11',
        title: 'BÀI TẬP 11: RÈN LUYỆN VIẾT CÂU',
        category: 'Reported Speech',
        sections: [{
            title: 'Exercise 11: Change these sentences into reported speech',
            subtitle: 'Chuyển các câu sau về dạng câu trần thuật',
            type: 'exercise',
            questions: q11
        }]
    },
    {
        id: 'reported-ex-12',
        title: 'BÀI TẬP 12: RÈN LUYỆN TRẮC NGHIỆM',
        category: 'Reported Speech',
        sections: [{
            title: 'Exercise 12: Choose the best answer',
            subtitle: 'Chọn đáp án đúng nhất',
            type: 'exercise',
            questions: q12
        }]
    }
];

const json = JSON.stringify(sections, null, 4);
// Remove first [ and last ]
const innerJson = json.substring(json.indexOf('{'), json.lastIndexOf('}') + 1);
const contentToAppend = ',\n' + innerJson;
fs.writeFileSync('output.txt', contentToAppend);
