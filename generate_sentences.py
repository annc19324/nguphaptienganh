import json
import random

words = [
    "authority", "damage", "destroy", "disaster", "earthquake", "emergency kit", "erupt", "Fahrenheit", "funnel", "landslide", "liquid", "predict", "pretty", "property", "pull up", "rescue worker", "Richter scale", "shake", "storm", "suddenly", "tornado", "tremble", "tsunami", "victim", "volcanic", "warn",
    "account", "advanced", "carrier pigeon", "charge", "emoji", "holography", "instantly", "Internet connection", "language barrier", "live", "smartphone", "social network", "tablet", "telepathy", "text", "thought", "translation machine", "transmit", "video conference", "voice message", "webcam", "zoom",
    "application", "attendance", "biometric", "breakout room", "cheating", "complain", "contact lens", "convenient", "develop", "digital", "discover", "epidemic", "experiment", "eye-tracking", "face to face", "feedback", "fingerprint", "invent", "invention", "mark", "platform", "recognition", "scanner", "science", "screen", "solution", "technology", "truancy",
    "alien", "commander", "crater", "creature", "galaxy", "gravity", "habitable", "Jupiter", "Mars", "Mercury", "Neptune", "oppose", "possibility", "promising", "rocket", "Saturn", "telescope", "trace", "UFO", "Uranus", "Venus"
]

templates = [
    # 1
    ("The commander warned, \"The disaster will destroy the crater on Saturn.\"",
     "The commander warned (that) the disaster would destroy the crater on Saturn",
     "commander, warn, disaster, destroy, crater, Saturn"),
    ("She reported, \"A tornado funnel caused severe damage to the property.\"",
     "She reported (that) a tornado funnel had caused severe damage to the property",
     "tornado, funnel, damage, property"),
    # 2
    ("She complained, \"The advanced application cannot check attendance instantly without a fingerprint scanner.\"",
     "She complained (that) the advanced application could not check attendance instantly without a fingerprint scanner",
     "complain, advanced, application, attendance, instantly, fingerprint, scanner"),
    # 3
    ("The scientist said, \"We can discover alien creatures in the galaxy using this new invention.\"",
     "The scientist said (that) they could discover alien creatures in the galaxy using that new invention",
     "science(scientist), discover, alien, creature, galaxy, invention"),
    # 4
    ("The rescue worker reported, \"A suddenly erupting volcano disrupted the Internet connection for the tablet.\"",
     "The rescue worker reported (that) a suddenly erupting volcano had disrupted the Internet connection for the tablet",
     "rescue worker, suddenly, erupt, volcanic(volcano), Internet connection, tablet"),
    # 5
    ("He asked, \"Is the gravity on Jupiter, Uranus, and Neptune convenient for a habitable platform?\"",
     "He asked if the gravity on Jupiter, Uranus, and Neptune was convenient for a habitable platform",
     "gravity, Jupiter, Uranus, Neptune, convenient, habitable, platform"),
    # 6
    ("The student said, \"I will use a translation machine to overcome the language barrier and send an emoji.\"",
     "The student said (that) he would use a translation machine to overcome the language barrier and send an emoji",
     "translation machine, language barrier, emoji"),
    # 7
    ("They explained, \"The earthquake measured 8 on the Richter scale and the tornado funnel shook the property.\"",
     "They explained (that) the earthquake had measured 8 on the Richter scale and the tornado funnel had shaken the property",
     "earthquake, Richter scale, tornado, funnel, shake, property"),
    # 8
    ("The authority said, \"We must pull up the rocket and oppose the UFO trace.\"",
     "The authority said (that) they had to pull up the rocket and oppose the UFO trace",
     "authority, pull up, rocket, oppose, UFO, trace"),
    # 9
    ("She reported, \"The live video conference on this digital screen prevents truancy and cheating.\"",
     "She reported (that) the live video conference on that digital screen prevented truancy and cheating",
     "live, video conference, digital, screen, truancy, cheating"),
    # 10
    ("He stated, \"There is a promising possibility of finding liquid on Mars or Venus.\"",
     "He stated (that) there was a promising possibility of finding liquid on Mars or Venus",
     "promising, possibility, liquid, Mars, Venus"),
    # 11
    ("The inventor reported, \"This biometric technology gives good feedback for face to face recognition.\"",
     "The inventor reported (that) that biometric technology gave good feedback for face to face recognition",
     "invent(inventor), biometric, technology, feedback, face to face, recognition"),
    # 12
    ("She said, \"The landslide and tsunami made the ground tremble pretty badly and caused an epidemic.\"",
     "She said (that) the landslide and tsunami had made the ground tremble pretty badly and caused an epidemic",
     "landslide, tsunami, tremble, pretty, epidemic"),
    # 13
    ("He asked, \"Will the advanced telescope show Mercury going up to 100 Fahrenheit?\"",
     "He asked if the advanced telescope would show Mercury going up to 100 Fahrenheit",
     "advanced, telescope, Mercury, Fahrenheit"),
    # 14
    ("She stated, \"My smartphone can develop a solution to charge the contact lens.\"",
     "She stated (that) her smartphone could develop a solution to charge the contact lens",
     "smartphone, develop, solution, charge, contact lens"),
    # 15
    ("The boy said, \"I use a carrier pigeon or a voice message to text my social network account.\"",
     "The boy said (that) he used a carrier pigeon or a voice message to text his social network account",
     "carrier pigeon, voice message, text, social network, account"),
    # 16
    ("They explained, \"We transmit thought using telepathy and holography from the emergency kit.\"",
     "They explained (that) they transmitted thought using telepathy and holography from the emergency kit",
     "transmit, thought, telepathy, holography, emergency kit"),
    # 17
    ("The teacher said, \"We use an eye-tracking experiment to mark students in the breakout room.\"",
     "The teacher said (that) they used an eye-tracking experiment to mark students in the breakout room",
     "eye-tracking, experiment, mark, breakout room"),
    # 18
     ("He asked, \"Can you zoom in on the storm moving towards the victim using the webcam?\"",
      "He asked if I could zoom in on the storm moving towards the victim using the webcam",
      "zoom, storm, victim, webcam"),
     # 19
     ("They warned, \"The science application predicts a storm and a tsunami suddenly.\"",
      "They warned (that) the science application predicted a storm and a tsunami suddenly",
      "science, application, predict, storm, tsunami, suddenly")
]

all_sentences = []
id_counter = 1

persons = [
    {"s": "Tom", "i": "he", "my": "his"},
    {"s": "Mary", "i": "she", "my": "her"},
    {"s": "The scientist", "i": "she", "my": "her"},
    {"s": "The commander", "i": "he", "my": "his"},
    {"s": "The boy", "i": "he", "my": "his"},
    {"s": "The girl", "i": "she", "my": "her"}
]

time_shifts = [
    { "d": "tomorrow", "i": "the next day" },
    { "d": "yesterday", "i": "the previous day" },
    { "d": "now", "i": "then" },
    { "d": "", "i": "" },
    { "d": "next week", "i": "the following week" },
    { "d": "last year", "i": "the year before" }
]

def map_verb(verb):
    mapping = {
        "warned": "warned",
        "reported": "reported",
        "complained": "complained",
        "stated": "stated",
        "asked": "asked",
        "said": "said",
        "explained": "explained",
        "told": "told",
        "announced": "announced"
    }
    return mapping.get(verb, verb)

def process_template(t, time_info, person_info, id_c):
    d_text, i_text, exp = t
    
    # Simple manual regex to replace the intro phrase
    parts_d = d_text.split(', "')
    intro_d = parts_d[0]
    quote = parts_d[1][:-1] # remove trailing quote
    verb = intro_d.split(" ")[-1]
    verb = map_verb(verb)
    
    # Reconstruct Direct text
    if time_info["d"]:
        if quote.endswith("?"):
            quote = quote[:-1] + " " + time_info["d"] + "?"
        elif quote.endswith("."):
            quote = quote[:-1] + " " + time_info["d"] + "."
        else:
            quote = quote + " " + time_info["d"] + "."
    
    new_d = f'{person_info["s"]} {verb}, "{quote}"'
    
    # Reconstruct Indirect text
    # Finding the (that) or if
    if "(that)" in i_text:
        parts_i = i_text.split("(that) ")
        tail = parts_i[1]
        connector = "(that) "
    elif " if " in i_text:
        parts_i = i_text.split(" if ")
        tail = parts_i[1]
        connector = "if "
    else:
        parts_i = i_text.split(" ", 2)
        tail = parts_i[2]
        connector = ""
        
    tail = tail.replace("my ", person_info["my"] + " ")
    tail = tail.replace(" I ", " " + person_info["i"] + " ")
    
    if time_info["i"]:
        if tail.endswith("?"):
            tail = tail[:-1] + " " + time_info["i"] + "?"
        elif tail.endswith("."):
            tail = tail[:-1] + " " + time_info["i"] + "."
        else:
            tail = tail + " " + time_info["i"]
            
    new_i = f'{person_info["s"]} {verb} {connector}{tail}'
    
    return {
        "id": id_c,
        "text": new_d,
        "answer": new_i,
        "type": "fill_blank",
        "explanation": f"Lùi thì và đổi đại từ phù hợp. Từ vựng: {exp}"
    }

for i in range(5):
    t_shift = time_shifts[i]
    person = persons[i]
    for temp in templates:
        all_sentences.append(process_template(temp, t_shift, person, id_counter))
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
                    questions: """ + json.dumps(all_sentences, indent=24, ensure_ascii=False) + """
                }
            ]
        }
    ]
};
"""

with open("D:/demo/nguphaptienganh/src/data/topics/reportedSpeechVocab8.js", "w", encoding="utf-8") as f:
    f.write(js_content)
    
print("Successfully generated perfect reportedSpeechVocab8.js script")
