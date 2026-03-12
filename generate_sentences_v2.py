import json
import random

subjects_stmt = ["The student", "The teacher", "The scientist", "The rescue worker", "The reporter", "The boy", "The girl", "The commander", "My friend", "My brother", "The guide", "The police officer", "He", "She", "They", "Someone", "People"]
verbs_stmt = ["said", "reported", "stated"]

subjects_q = ["The student", "The teacher", "The scientist", "The rescue worker", "The reporter", "The boy", "The girl", "The commander", "My friend", "My brother", "The guide", "The police officer", "He", "She", "They", "Someone", "People"]
verbs_q = ["asked", "wanted to know"]

time_options = [
    ("now", "then"),
    ("today", "that day"),
    ("tonight", "that night"),
    ("tomorrow", "the next day"),
    ("yesterday", "the day before"),
    ("next week", "the following week"),
    ("last week", "the week before")
]

all_templates = [
    # U9
    ("The earthquake damages the property {dt}.", "that the earthquake damaged the property {it}", 9),
    ("The storm destroyed the house {dt}.", "that the storm had destroyed the house {it}", 9),
    ("The volcanic mountain will erupt {dt}.", "that the volcanic mountain would erupt {it}", 9),
    ("Did the tsunami damage the city {dt}?", "if the tsunami had damaged the city {it}", 9),
    ("Where is the emergency kit for the victim {dt}?", "where the emergency kit for the victim was {it}", 9),
    ("Is the landslide a pretty big disaster {dt}?", "if the landslide was a pretty big disaster {it}", 9),
    ("The tornado funnel appeared suddenly {dt}.", "that the tornado funnel had appeared suddenly {it}", 9),
    ("Can they predict the Richter scale {dt}?", "if they could predict the Richter scale {it}", 9),
    ("Did the ground tremble and shake {dt}?", "if the ground had trembled and shaken {it}", 9),
    ("The authority warned about the storm {dt}.", "that the authority had warned about the storm {it}", 9),
    ("Will the scientist predict the disaster {dt}?", "if the scientist would predict the disaster {it}", 9),
    ("The rescue worker is pulling up the property {dt}.", "that the rescue worker was pulling up the property {it}", 9),
    ("Is the volcanic liquid reaching 100 Fahrenheit {dt}?", "if the volcanic liquid was reaching 100 Fahrenheit {it}", 9),
    ("Where did the tornado funnel destroy houses {dt}?", "where the tornado funnel had destroyed houses {it}", 9),
    ("The earthquake measures 7 on the Richter scale {dt}.", "that the earthquake measured 7 on the Richter scale {it}", 9),
    ("The tsunami will cause severe damage to the property {dt}.", "that the tsunami would cause severe damage to the property {it}", 9),
    ("How did the authority predict the landslide {dt}?", "how the authority had predicted the landslide {it}", 9),
    ("The victim is trembling and shaking right {dt}.", "that the victim was trembling and shaking right {it}", 9),
    ("Will you pull up the emergency kit suddenly {dt}?", "if he would pull up the emergency kit suddenly {it}", 9),
    ("The disaster is destroying everything {dt}.", "that the disaster was destroying everything {it}", 9),
    ("The volcanic mountain erupts at high Fahrenheit {dt}.", "that the volcanic mountain erupted at high Fahrenheit {it}", 9),
    ("Did the storm create a tornado funnel {dt}?", "if the storm had created a tornado funnel {it}", 9),
    ("Why did the earthquake damage the property {dt}?", "why the earthquake had damaged the property {it}", 9),
    ("The rescue worker can predict the tsunami {dt}.", "that the rescue worker could predict the tsunami {it}", 9),
    ("I must give liquid from the emergency kit to the victim {dt}.", "that he had to give liquid from the emergency kit to the victim {it}", 9),
    
    # U10
    ("Will you charge your account {dt}?", "if he would charge his account {it}", 10),
    ("The advanced holography can show a big emoji {dt}.", "that the advanced holography could show a big emoji {it}", 10),
    ("The Internet connection breaks the language barrier instantly {dt}.", "that the Internet connection broke the language barrier instantly {it}", 10),
    ("Is the live video on the social network working {dt}?", "if the live video on the social network was working {it}", 10),
    ("They communicate via telepathy and text on the tablet {dt}.", "that they communicated via telepathy and text on the tablet {it}", 10),
    ("Can the translation machine transmit a thought {dt}?", "if the translation machine could transmit a thought {it}", 10),
    ("Did she leave a voice message on the webcam {dt}?", "if she had left a voice message on the webcam {it}", 10),
    ("How do I zoom the advanced smartphone {dt}?", "how he zoomed the advanced smartphone {it}", 10),
    ("A carrier pigeon cannot compete with telepathy instantly {dt}.", "that a carrier pigeon could not compete with telepathy instantly {it}", 10),
    ("Where is the translation machine for this language barrier {dt}?", "where the translation machine for that language barrier was {it}", 10),
    ("She is posting an emoji on her social network account {dt}.", "that she was posting an emoji on her social network account {it}", 10),
    ("I must charge the tablet for the Internet connection {dt}.", "that he had to charge the tablet for the Internet connection {it}", 10),
    ("Will the live video conference zoom in {dt}?", "if the live video conference would zoom in {it}", 10),
    ("The holography is transmitting a voice message {dt}.", "that the holography was transmitting a voice message {it}", 10),
    ("I am using the smartphone webcam {dt}.", "that he was using the smartphone webcam {it}", 10),
    ("Why did you text that thought to my account {dt}?", "why he had texted that thought to his account {it}", 10),
    ("The carrier pigeon is not an advanced Internet connection {dt}.", "that the carrier pigeon was not an advanced Internet connection {it}", 10),
    ("Did the tablet access the live social network {dt}?", "if the tablet had accessed the live social network {it}", 10),
    ("The translation machine shows holography to fix the language barrier {dt}.", "that the translation machine showed holography to fix the language barrier {it}", 10),
    ("Can you transmit the emoji and voice message {dt}?", "if he could transmit the emoji and voice message {it}", 10),
    ("They are zooming the webcam to read the text {dt}.", "that they were zooming the webcam to read the text {it}", 10),
    ("Telepathy transmits a thought instantly {dt}.", "that telepathy transmitted a thought instantly {it}", 10),
    ("She charged her smartphone to check her account {dt}.", "that she had charged her smartphone to check her account {it}", 10),
    ("The live video conference uses a translation machine {dt}.", "that the live video conference used a translation machine {it}", 10),
    ("Will the advanced Internet connection solve the language barrier {dt}?", "if the advanced Internet connection would solve the language barrier {it}", 10),
    
    # U11
    ("The biometric application marks attendance {dt}.", "that the biometric application marked attendance {it}", 11),
    ("Did the student complain about cheating in the breakout room {dt}?", "if the student had complained about cheating in the breakout room {it}", 11),
    ("The scientist will develop a convenient contact lens {dt}.", "that the scientist would develop a convenient contact lens {it}", 11),
    ("They discover a digital solution for the epidemic {dt}.", "that they discovered a digital solution for the epidemic {it}", 11),
    ("Is the eye-tracking experiment face to face {dt}?", "if the eye-tracking experiment was face to face {it}", 11),
    ("The inventor gives feedback on the fingerprint device {dt}.", "that the inventor gave feedback on the fingerprint device {it}", 11),
    ("Where is the new invention on this platform {dt}?", "where the new invention on that platform was {it}", 11),
    ("The science scanner uses facial recognition {dt}.", "that the science scanner used facial recognition {it}", 11),
    ("Will the technology provide a solution on the screen {dt}?", "if the technology would provide a solution on the screen {it}", 11),
    ("The application reduces truancy and checks attendance {dt}.", "that the application reduced truancy and checked attendance {it}", 11),
    ("They must use a biometric fingerprint scanner {dt}.", "that they had to use a biometric fingerprint scanner {it}", 11),
    ("Why is the face to face breakout room convenient {dt}?", "why the face to face breakout room was convenient {it}", 11),
    ("She complains about cheating on the digital platform {dt}.", "that she complained about cheating on the digital platform {it}", 11),
    ("The eye-tracking contact lens projects a screen {dt}.", "that the eye-tracking contact lens projected a screen {it}", 11),
    ("Did you discover how to develop the invention {dt}?", "if he had discovered how to develop the invention {it}", 11),
    ("Science will find a solution to the epidemic {dt}.", "that science would find a solution to the epidemic {it}", 11),
    ("The technology gathers feedback from the experiment {dt}.", "that the technology gathered feedback from the experiment {it}", 11),
    ("How does the platform mark recognition {dt}?", "how the platform marked recognition {it}", 11),
    ("The biometric scanner fits into a contact lens {dt}.", "that the biometric scanner fit into a contact lens {it}", 11),
    ("Truancy is rising due to the epidemic and digital learning {dt}.", "that truancy was rising due to the epidemic and digital learning {it}", 11),
    ("Is it convenient to check attendance in a breakout room {dt}?", "if it was convenient to check attendance in a breakout room {it}", 11),
    ("The application is a solution against cheating {dt}.", "that the application was a solution against cheating {it}", 11),
    ("They are complaining about the feedback screen {dt}.", "that they were complaining about the feedback screen {it}", 11),
    ("When will they develop eye-tracking recognition {dt}?", "when they would develop eye-tracking recognition {it}", 11),
    ("The face to face experiment requires a fingerprint {dt}.", "that the face to face experiment required a fingerprint {it}", 11),
    
    # U12
    ("The commander found an alien in the crater {dt}.", "that the commander had found an alien in the crater {it}", 12),
    ("Did the creature survive the gravity of that galaxy {dt}?", "if the creature had survived the gravity of that galaxy {it}", 12),
    ("Is Mars more habitable than Jupiter {dt}?", "if Mars was more habitable than Jupiter {it}", 12),
    ("Why do they oppose travelling to Mercury and Neptune {dt}?", "why they opposed travelling to Mercury and Neptune {it}", 12),
    ("There is a promising possibility for the new rocket {dt}.", "that there was a promising possibility for the new rocket {it}", 12),
    ("The telescope detects a trace around Saturn {dt}.", "that the telescope detected a trace around Saturn {it}", 12),
    ("Will the UFO fly past Venus to Uranus {dt}?", "if the UFO would fly past Venus to Uranus {it}", 12),
    ("The alien creature seeks a habitable planet {dt}.", "that the alien creature sought a habitable planet {it}", 12),
    ("The commander will oppose this dangerous possibility {dt}.", "that the commander would oppose that dangerous possibility {it}", 12),
    ("We located a trace near a crater on Mercury {dt}.", "that they had located a trace near a crater on Mercury {it}", 12),
    ("The telescope follows the rocket into the galaxy {dt}.", "that the telescope followed the rocket into the galaxy {it}", 12),
    ("Does Jupiter have stronger gravity than Saturn {dt}?", "if Jupiter had stronger gravity than Saturn {it}", 12),
    ("Mars, Neptune, and Uranus are fascinating planets {dt}.", "that Mars, Neptune, and Uranus were fascinating planets {it}", 12),
    ("A promising UFO was spotted near Venus {dt}.", "that a promising UFO had been spotted near Venus {it}", 12),
    ("Where did the telescope find the alien trace {dt}?", "where the telescope had found the alien trace {it}", 12),
    ("The commander is launching the rocket to Jupiter {dt}.", "that the commander was launching the rocket to Jupiter {it}", 12),
    ("The crater on Mars looks habitable {dt}.", "that the crater on Mars looked habitable {it}", 12),
    ("I oppose bringing the creature from another galaxy {dt}.", "that he opposed bringing the creature from another galaxy {it}", 12),
    ("The gravity on Saturn differs from Mercury {dt}.", "that the gravity on Saturn differed from Mercury {it}", 12),
    ("Is there a possibility of a UFO near Neptune {dt}?", "if there was a possibility of a UFO near Neptune {it}", 12),
    ("Uranus and Venus offer promising discoveries {dt}.", "that Uranus and Venus offered promising discoveries {it}", 12),
    ("The telescope points at Jupiter and Saturn {dt}.", "that the telescope pointed at Jupiter and Saturn {it}", 12),
    ("Did the commander oppose the alien {dt}?", "if the commander had opposed the alien {it}", 12),
    ("There is a trace of a creature in the crater {dt}.", "that there was a trace of a creature in the crater {it}", 12),
    ("The rocket will explore a habitable galaxy {dt}.", "that the rocket would explore a habitable galaxy {it}", 12)
]

output_json = []

id_counter = 1

for direct_clause, indirect_clause, unit in all_templates:
    dt, it = random.choice(time_options)
    
    direct_formatted = direct_clause.format(dt=dt).replace(" .", ".").replace(" ?", "?").replace("  ", " ").strip()
    indirect_formatted = indirect_clause.format(it=it).replace(" .", ".").replace(" ?", "?").replace("  ", " ").strip()
    
    is_question = "?" in direct_formatted
    if is_question:
        subject = random.choice(subjects_q)
        verb = random.choice(verbs_q)
    else:
        subject = random.choice(subjects_stmt)
        verb = random.choice(verbs_stmt)
        
    full_direct = f'{subject} {verb}, "{direct_formatted}"'
    full_indirect = f"{subject} {verb} {indirect_formatted}"
    
    explanation = "Tense, pronoun and time place mapping based on Unit " + str(unit) + " vocabulary."
    
    output_json.append({
        "id": id_counter,
        "text": full_direct,
        "answer": full_indirect,
        "type": "fill_blank",
        "explanation": explanation
    })
    
    id_counter += 1

js_content = """export const reportedSpeechVocab8Topic = {
    id: 'reported-speech-vocab-8',
    title: 'Ôn tập Từ vựng (Unit 9-12) & Câu Gián tiếp (Lớp 8)',
    children: [
        {
            id: 'unit-9-12-exercises',
            title: 'BÀI TẬP THỰC HÀNH TỔNG HỢP (Global Success 8)',
            sections: [
                {
                    title: 'Bài tập: Chuyển các câu sau sang câu gián tiếp (Tập trung lặp từ vựng 5 lần)',
                    type: 'exercise',
                    questions: """ + json.dumps(output_json, indent=24, ensure_ascii=False) + """
                }
            ]
        }
    ]
};
"""

with open("D:/demo/nguphaptienganh/src/data/topics/reportedSpeechVocab8.js", "w", encoding="utf-8") as f:
    f.write(js_content)
