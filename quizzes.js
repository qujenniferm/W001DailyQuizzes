const QUIZZES = [
  {
    "id": "w2-sun",
    "week": 2,
    "day": "Sunday",
    "title": "Week 2 Sunday Review",
    "reviews": "Week 1 email lesson: polite requests, modal form, capitals, punctuation, and time expressions.",
    "questions": [
      {
        "type": "mcq",
        "prompt": "Which request is more polite?",
        "options": [
          "Send me the homework.",
          "Could you please send me the homework?",
          "You send homework now."
        ],
        "answer": 1,
        "feedback": "Use could you please… for a polite request."
      },
      {
        "type": "gap",
        "prompt": "Complete: My teacher ___ very helpful.",
        "answers": [
          "is"
        ],
        "feedback": "A complete sentence needs is here."
      },
      {
        "type": "error",
        "prompt": "Tap the word with the error:",
        "tokens": [
          "my",
          "class",
          "starts",
          "at",
          "eight."
        ],
        "answer": 0,
        "feedback": "A sentence begins with a capital letter: My."
      },
      {
        "type": "mcq",
        "prompt": "Which sentence has the correct modal form?",
        "options": [
          "She can help me.",
          "She can to help me.",
          "She can helps me."
        ],
        "answer": 0,
        "feedback": "After can, use the base verb: can help."
      },
      {
        "type": "mcq",
        "prompt": "Choose the correct time expression.",
        "options": [
          "on Sunday",
          "in Sunday",
          "at Sunday"
        ],
        "answer": 0,
        "feedback": "Use on with days."
      },
      {
        "type": "mcq",
        "prompt": "Choose the correct time expression.",
        "options": [
          "on 3:00",
          "at 3:00",
          "in 3:00"
        ],
        "answer": 1,
        "feedback": "Use at with clock times."
      },
      {
        "type": "mcq",
        "prompt": "Choose the correct time expression.",
        "options": [
          "at March",
          "on March",
          "in March"
        ],
        "answer": 2,
        "feedback": "Use in with months."
      },
      {
        "type": "reorder_words",
        "prompt": "Put the words in order to make a polite request.",
        "words": [
          "Could",
          "you",
          "please",
          "help",
          "me",
          "?"
        ],
        "answer": [
          "Could",
          "you",
          "please",
          "help",
          "me",
          "?"
        ],
        "feedback": "A useful polite request frame is: Could you please…?"
      },
      {
        "type": "mcq",
        "prompt": "Which email beginning is best?",
        "options": [
          "hi teacher",
          "Dear Professor Ali,",
          "HEY!!!"
        ],
        "answer": 1,
        "feedback": "Use an appropriate greeting in a university email."
      },
      {
        "type": "error",
        "prompt": "Tap the part with the punctuation error:",
        "tokens": [
          "Thank",
          "you",
          "for",
          "your",
          "help"
        ],
        "answer": 4,
        "feedback": "Add end punctuation: help."
      }
    ]
  },
  {
    "id": "w2-mon",
    "week": 2,
    "day": "Monday",
    "title": "Week 2 Monday Review",
    "reviews": "M1: facts, reasonable guesses, evidence, and useful details; plus one Week 1 recycle item.",
    "questions": [
      {
        "type": "classify",
        "prompt": "Sort each idea into FACT or GUESS.",
        "items": [
          [
            "She has a camera.",
            "FACT"
          ],
          [
            "She may like photography.",
            "GUESS"
          ],
          [
            "She is wearing a blue shirt.",
            "FACT"
          ],
          [
            "She seems cheerful.",
            "GUESS"
          ]
        ],
        "categories": [
          "FACT",
          "GUESS"
        ],
        "feedback": "Facts are visible. Guesses are ideas you infer."
      },
      {
        "type": "mcq",
        "prompt": "Which sentence is a guess?",
        "options": [
          "She has curly hair.",
          "She is wearing trousers.",
          "She may be a tourist."
        ],
        "answer": 2,
        "feedback": "May signals a reasonable guess."
      },
      {
        "type": "mcq",
        "prompt": "Which guess has evidence?",
        "options": [
          "She is friendly.",
          "She seems friendly because she is smiling.",
          "She is rich."
        ],
        "answer": 1,
        "feedback": "A good inference is supported by something visible."
      },
      {
        "type": "gap",
        "prompt": "Complete: She looks like a tourist ___ she has a camera.",
        "answers": [
          "because"
        ],
        "feedback": "because introduces the reason/evidence."
      },
      {
        "type": "mcq",
        "prompt": "Which detail is most useful if a reader must find the correct photo?",
        "options": [
          "She is a person.",
          "She has long curly black hair.",
          "She is outside."
        ],
        "answer": 1,
        "feedback": "Specific distinguishing details help the reader."
      },
      {
        "type": "reorder_words",
        "prompt": "Build a supported guess.",
        "words": [
          "She",
          "seems",
          "friendly",
          "because",
          "she",
          "is",
          "smiling",
          "."
        ],
        "answer": [
          "She",
          "seems",
          "friendly",
          "because",
          "she",
          "is",
          "smiling",
          "."
        ],
        "feedback": "Claim + because + visible evidence."
      },
      {
        "type": "mcq",
        "prompt": "Which idea should NOT be guessed from appearance alone?",
        "options": [
          "She may enjoy photography because she has a camera.",
          "She may be traveling because she has a backpack.",
          "She is wealthy because of her clothes."
        ],
        "answer": 2,
        "feedback": "Avoid unsupported assumptions about wealth or identity."
      },
      {
        "type": "gap",
        "prompt": "Complete the weaker guess: She ___ like photography because she has a camera.",
        "answers": [
          "may"
        ],
        "feedback": "may makes the inference appropriately cautious."
      },
      {
        "type": "mcq",
        "prompt": "Which is the polite request?",
        "options": [
          "Give me the file.",
          "Could you please send me the file?",
          "Send file."
        ],
        "answer": 1,
        "feedback": "Keep recycling useful Week 1 language."
      },
      {
        "type": "mcq",
        "prompt": "Which sentence is a visible fact?",
        "options": [
          "She seems kind.",
          "She has a red backpack.",
          "She may be a student."
        ],
        "answer": 1,
        "feedback": "A visible object is a fact."
      }
    ]
  },
  {
    "id": "w2-tue",
    "week": 2,
    "day": "Tuesday",
    "title": "Week 2 Tuesday Review",
    "reviews": "M2–M3: effective models, paragraph parts, relevance, and outlines; plus fact/guess recycling.",
    "questions": [
      {
        "type": "mcq",
        "prompt": "Which description helps a reader imagine the person better?",
        "options": [
          "She has hair.",
          "She has long curly brown hair."
        ],
        "answer": 1,
        "feedback": "Specific details are more useful than thin details."
      },
      {
        "type": "mcq",
        "prompt": "What is the job of a topic sentence?",
        "options": [
          "It introduces the person and main idea.",
          "It gives every small detail.",
          "It only says goodbye."
        ],
        "answer": 0,
        "feedback": "The topic sentence introduces the person/main idea."
      },
      {
        "type": "mcq",
        "prompt": "What is the job of a concluding sentence?",
        "options": [
          "It introduces a new unrelated topic.",
          "It finishes the paragraph with an overall idea.",
          "It lists vocabulary."
        ],
        "answer": 1,
        "feedback": "A conclusion finishes the paragraph and gives an overall idea."
      },
      {
        "type": "classify",
        "prompt": "Sort the notes into OUTLINE or PARAGRAPH.",
        "items": [
          [
            "curly brown hair",
            "OUTLINE"
          ],
          [
            "She has curly brown hair.",
            "PARAGRAPH"
          ],
          [
            "friendly / smiling",
            "OUTLINE"
          ],
          [
            "She seems friendly because she is smiling.",
            "PARAGRAPH"
          ]
        ],
        "categories": [
          "OUTLINE",
          "PARAGRAPH"
        ],
        "feedback": "Outlines use short notes or phrases; paragraphs use complete sentences."
      },
      {
        "type": "mcq",
        "prompt": "Which detail does NOT belong in a paragraph about Maya?",
        "options": [
          "She has curly brown hair.",
          "She may enjoy photography.",
          "Doha is hot.",
          "She seems friendly because she is smiling."
        ],
        "answer": 2,
        "feedback": "Keep information relevant to the person."
      },
      {
        "type": "reorder_paragraph",
        "prompt": "Put the paragraph parts in the best order.",
        "sentences": [
          "Overall, Khalid seems active and friendly.",
          "Khalid is a man who looks active.",
          "He has short dark hair and a beard.",
          "He seems active because he has a bicycle."
        ],
        "answer": [
          1,
          2,
          3,
          0
        ],
        "feedback": "Topic sentence → supporting details → supported idea → conclusion."
      },
      {
        "type": "mcq",
        "prompt": "Which is a supporting sentence?",
        "options": [
          "Maya is a young woman who looks like a traveler.",
          "She has long curly brown hair.",
          "Overall, Maya seems cheerful and adventurous."
        ],
        "answer": 1,
        "feedback": "Supporting sentences develop the topic with useful details."
      },
      {
        "type": "gap",
        "prompt": "Complete: A good paragraph has a topic sentence, supporting sentences, and a ___ sentence.",
        "answers": [
          "concluding",
          "conclusion"
        ],
        "feedback": "The three main parts are topic, support, and conclusion."
      },
      {
        "type": "mcq",
        "prompt": "Which sentence is a supported guess?",
        "options": [
          "She is friendly.",
          "She seems friendly because she is smiling."
        ],
        "answer": 1,
        "feedback": "Evidence strengthens an inference."
      },
      {
        "type": "mcq",
        "prompt": "Which outline note is best?",
        "options": [
          "She has curly brown hair.",
          "curly brown hair",
          "This is Maya."
        ],
        "answer": 1,
        "feedback": "Outline notes should be short phrases, not full sentences."
      }
    ]
  },
  {
    "id": "w2-wed",
    "week": 2,
    "day": "Wednesday",
    "title": "Week 2 Wednesday Review",
    "reviews": "M4 Language Toolkit 1: is, has, is wearing, adjective position, a/an, looks/looks like; plus paragraph structure.",
    "questions": [
      {
        "type": "mcq",
        "prompt": "Choose the correct word: She ___ tall.",
        "options": [
          "is",
          "has",
          "is wearing"
        ],
        "answer": 0,
        "feedback": "Use be + adjective: She is tall."
      },
      {
        "type": "mcq",
        "prompt": "Choose the correct word: He ___ short black hair.",
        "options": [
          "is",
          "has",
          "is wearing"
        ],
        "answer": 1,
        "feedback": "Use has + hair/eyes/things."
      },
      {
        "type": "mcq",
        "prompt": "Choose the correct phrase: She ___ a black abaya.",
        "options": [
          "is",
          "has",
          "is wearing"
        ],
        "answer": 2,
        "feedback": "Use is wearing for clothes."
      },
      {
        "type": "reorder_words",
        "prompt": "Put the words in the correct order.",
        "words": [
          "She",
          "has",
          "a",
          "green",
          "bag",
          "."
        ],
        "answer": [
          "She",
          "has",
          "a",
          "green",
          "bag",
          "."
        ],
        "feedback": "The adjective comes before the noun: a green bag."
      },
      {
        "type": "error",
        "prompt": "Tap the word with the error:",
        "tokens": [
          "She",
          "has",
          "a",
          "bag",
          "green."
        ],
        "answer": 4,
        "feedback": "The adjective should come before the noun: a green bag."
      },
      {
        "type": "mcq",
        "prompt": "Choose the correct sentence.",
        "options": [
          "She is wearing a abaya.",
          "She is wearing an abaya."
        ],
        "answer": 1,
        "feedback": "Use an before a vowel sound."
      },
      {
        "type": "mcq",
        "prompt": "Choose the correct pattern.",
        "options": [
          "He looks like happy.",
          "He looks happy.",
          "He is looks happy."
        ],
        "answer": 1,
        "feedback": "Use looks + adjective: looks happy."
      },
      {
        "type": "mcq",
        "prompt": "Choose the correct pattern for a noun.",
        "options": [
          "She looks teacher.",
          "She looks like a teacher.",
          "She looks like friendly."
        ],
        "answer": 1,
        "feedback": "Use looks like + noun."
      },
      {
        "type": "gap",
        "prompt": "Complete: She ___ brown eyes.",
        "answers": [
          "has"
        ],
        "feedback": "has is used for eyes, hair, and things."
      },
      {
        "type": "mcq",
        "prompt": "Which is the topic sentence?",
        "options": [
          "She has a blue bag.",
          "Maya is a young woman who looks like a traveler.",
          "She has curly hair."
        ],
        "answer": 1,
        "feedback": "A topic sentence introduces the person and overall idea."
      }
    ]
  },
  {
    "id": "w2-thu",
    "week": 2,
    "day": "Thursday",
    "title": "Week 2 Thursday Review",
    "reviews": "M5–M6: Weekly Writing process, self-checking, reader feedback, and small edits; plus Language Toolkit 1.",
    "questions": [
      {
        "type": "mcq",
        "prompt": "What should you do first in Weekly Writing?",
        "options": [
          "Copy a full model.",
          "Plan with short notes.",
          "Ask the teacher for every sentence."
        ],
        "answer": 1,
        "feedback": "Plan first using short notes."
      },
      {
        "type": "mcq",
        "prompt": "Weekly Writing is…",
        "options": [
          "handwritten and independent",
          "completed at home with AI",
          "a group paragraph"
        ],
        "answer": 0,
        "feedback": "Weekly Writing is supervised, handwritten, and independent."
      },
      {
        "type": "mcq",
        "prompt": "Which is a good self-check?",
        "options": [
          "Underline your topic sentence.",
          "Rewrite the entire paragraph.",
          "Ask your partner to fix all grammar."
        ],
        "answer": 0,
        "feedback": "Self-checking focuses attention on specific features."
      },
      {
        "type": "mcq",
        "prompt": "What should a peer reader do?",
        "options": [
          "Correct every grammar error.",
          "Star one useful detail and ask for more information where needed.",
          "Rewrite weak sentences for the writer."
        ],
        "answer": 1,
        "feedback": "Peer feedback is reader-focused, concrete, and limited."
      },
      {
        "type": "mcq",
        "prompt": "After peer feedback, what is the goal?",
        "options": [
          "Make a few useful edits on the original writing.",
          "Start a completely new paragraph.",
          "Ignore the feedback."
        ],
        "answer": 0,
        "feedback": "This is editing, not full redrafting."
      },
      {
        "type": "error",
        "prompt": "Tap the missing-word problem:",
        "tokens": [
          "She",
          "wearing",
          "a",
          "blue",
          "shirt."
        ],
        "answer": 1,
        "feedback": "The sentence needs is: She is wearing a blue shirt."
      },
      {
        "type": "gap",
        "prompt": "Fix the sentence: She ___ wearing a blue shirt.",
        "answers": [
          "is"
        ],
        "feedback": "Use is wearing."
      },
      {
        "type": "mcq",
        "prompt": "Which partner comment is useful?",
        "options": [
          "Bad grammar.",
          "I want one more detail about her job.",
          "Wrong."
        ],
        "answer": 1,
        "feedback": "Useful feedback tells the writer what the reader needs."
      },
      {
        "type": "reorder_words",
        "prompt": "Build the sentence after editing.",
        "words": [
          "She",
          "is",
          "wearing",
          "a",
          "light",
          "blue",
          "shirt",
          "."
        ],
        "answer": [
          "She",
          "is",
          "wearing",
          "a",
          "light",
          "blue",
          "shirt",
          "."
        ],
        "feedback": "The edit fixes missing be and adds a useful detail."
      },
      {
        "type": "mcq",
        "prompt": "Which detail is stronger?",
        "options": [
          "He has a bag.",
          "He has a large black backpack."
        ],
        "answer": 1,
        "feedback": "Specific details help the reader imagine the person."
      }
    ]
  },
  {
    "id": "w3-sun",
    "week": 3,
    "day": "Sunday",
    "title": "Week 3 Sunday Review",
    "reviews": "M7 Sentence Clinic: missing be, have/has, adjective order, complete sentences, capitals/punctuation; cumulative Cycle 1 review.",
    "questions": [
      {
        "type": "error",
        "prompt": "Tap the place where a word is missing:",
        "tokens": [
          "My",
          "sister",
          "very",
          "friendly."
        ],
        "answer": 2,
        "feedback": "Add is before the adjective: My sister is very friendly."
      },
      {
        "type": "gap",
        "prompt": "Fix: My sister ___ very friendly.",
        "answers": [
          "is"
        ],
        "feedback": "English needs be before the adjective."
      },
      {
        "type": "mcq",
        "prompt": "Choose the correct sentence.",
        "options": [
          "He have a short beard.",
          "He has a short beard."
        ],
        "answer": 1,
        "feedback": "Use has with he/she/it."
      },
      {
        "type": "error",
        "prompt": "Tap the word that is in the wrong position:",
        "tokens": [
          "She",
          "has",
          "a",
          "bag",
          "green."
        ],
        "answer": 4,
        "feedback": "Move green before bag: a green bag."
      },
      {
        "type": "mcq",
        "prompt": "Choose the complete sentence.",
        "options": [
          "Is wearing glasses.",
          "She is wearing glasses.",
          "She wearing glasses."
        ],
        "answer": 1,
        "feedback": "A complete sentence needs a subject and verb."
      },
      {
        "type": "error",
        "prompt": "Tap the word that needs a capital letter:",
        "tokens": [
          "he",
          "has",
          "a",
          "camera."
        ],
        "answer": 0,
        "feedback": "Begin the sentence with He."
      },
      {
        "type": "mcq",
        "prompt": "Which sentence is already correct?",
        "options": [
          "She have a black bag.",
          "He is wearing a white thobe.",
          "Aisha tall."
        ],
        "answer": 1,
        "feedback": "Do not change a sentence that is already correct."
      },
      {
        "type": "reorder_words",
        "prompt": "Put the corrected sentence in order.",
        "words": [
          "She",
          "has",
          "a",
          "white",
          "shayla",
          "."
        ],
        "answer": [
          "She",
          "has",
          "a",
          "white",
          "shayla",
          "."
        ],
        "feedback": "has + adjective + noun."
      },
      {
        "type": "mcq",
        "prompt": "Which check helps with 'She very friendly'?",
        "options": [
          "WHO/WHAT?",
          "IS/ARE or HAS/HAVE?",
          "CAPITAL + END MARK only"
        ],
        "answer": 1,
        "feedback": "The sentence needs is."
      },
      {
        "type": "mcq",
        "prompt": "Which is a supported inference?",
        "options": [
          "He is sporty.",
          "He seems sporty because he has a bicycle."
        ],
        "answer": 1,
        "feedback": "Evidence makes the inference stronger."
      }
    ]
  },
  {
    "id": "w3-mon",
    "week": 3,
    "day": "Monday",
    "title": "Week 3 Monday Review",
    "reviews": "M8 development: specificity, evidence, explanation, useful details; with Sentence Clinic recycling.",
    "questions": [
      {
        "type": "mcq",
        "prompt": "Which sentence is more developed?",
        "options": [
          "She has hair.",
          "She has long curly black hair."
        ],
        "answer": 1,
        "feedback": "Development adds useful specific information."
      },
      {
        "type": "mcq",
        "prompt": "Which sentence has evidence?",
        "options": [
          "He is friendly.",
          "He seems friendly because he is smiling and helping another person."
        ],
        "answer": 1,
        "feedback": "Show the evidence for an inference."
      },
      {
        "type": "mcq",
        "prompt": "Which sentence is too vague?",
        "options": [
          "She likes things.",
          "She may enjoy photography because she has a camera."
        ],
        "answer": 0,
        "feedback": "things is vague and tells the reader very little."
      },
      {
        "type": "gap",
        "prompt": "Improve: She seems cheerful ___ she is smiling.",
        "answers": [
          "because"
        ],
        "feedback": "because adds the visible reason."
      },
      {
        "type": "mcq",
        "prompt": "Which adds a useful layer to 'He has a bag'?",
        "options": [
          "He has a bag thing.",
          "He has a large black backpack.",
          "He has stuff."
        ],
        "answer": 1,
        "feedback": "Add specific, meaningful detail."
      },
      {
        "type": "classify",
        "prompt": "Sort each sentence into THIN or DEVELOPED.",
        "items": [
          [
            "She is nice.",
            "THIN"
          ],
          [
            "She seems friendly because she is smiling.",
            "DEVELOPED"
          ],
          [
            "He has a bag.",
            "THIN"
          ],
          [
            "He has a large black backpack.",
            "DEVELOPED"
          ]
        ],
        "categories": [
          "THIN",
          "DEVELOPED"
        ],
        "feedback": "Developed writing gives the reader more useful information."
      },
      {
        "type": "mcq",
        "prompt": "Development means…",
        "options": [
          "making every sentence longer",
          "adding useful detail, evidence, or explanation",
          "adding unrelated information"
        ],
        "answer": 1,
        "feedback": "The goal is useful information, not padding."
      },
      {
        "type": "error",
        "prompt": "Tap the error.",
        "tokens": [
          "She",
          "have",
          "long",
          "hair."
        ],
        "answer": 1,
        "feedback": "Use has with she."
      },
      {
        "type": "gap",
        "prompt": "Fix: She ___ long hair.",
        "answers": [
          "has"
        ],
        "feedback": "She has long hair."
      },
      {
        "type": "mcq",
        "prompt": "Which conclusion is stronger?",
        "options": [
          "That is all.",
          "Overall, Maya seems cheerful and interested in photography."
        ],
        "answer": 1,
        "feedback": "A conclusion gives a final overall idea about the person."
      }
    ]
  },
  {
    "id": "w3-tue",
    "week": 3,
    "day": "Tuesday",
    "title": "Week 3 Tuesday Review",
    "reviews": "M9–M10: personality/daily life, third-person -s, because/so, and Editor's Toolkit.",
    "questions": [
      {
        "type": "mcq",
        "prompt": "Choose the correct verb: She ___ photography.",
        "options": [
          "like",
          "likes",
          "liking"
        ],
        "answer": 1,
        "feedback": "With she, the present simple verb usually takes -s."
      },
      {
        "type": "gap",
        "prompt": "Complete: He ___ football every weekend. (play)",
        "answers": [
          "plays"
        ],
        "feedback": "he → plays"
      },
      {
        "type": "gap",
        "prompt": "Complete: She ___ engineering. (study)",
        "answers": [
          "studies"
        ],
        "feedback": "study → studies with she/he."
      },
      {
        "type": "mcq",
        "prompt": "Choose the correct form.",
        "options": [
          "He go to the gym.",
          "He goes to the gym.",
          "He gos to the gym."
        ],
        "answer": 1,
        "feedback": "go → goes"
      },
      {
        "type": "mcq",
        "prompt": "Choose the correct form.",
        "options": [
          "She haves a camera.",
          "She has a camera.",
          "She have a camera."
        ],
        "answer": 1,
        "feedback": "have → has with she/he/it."
      },
      {
        "type": "mcq",
        "prompt": "Choose the sentence with because.",
        "options": [
          "She seems friendly because she is smiling.",
          "She is smiling, so she seems friendly."
        ],
        "answer": 0,
        "feedback": "because introduces the reason."
      },
      {
        "type": "mcq",
        "prompt": "Choose the sentence with so.",
        "options": [
          "She seems friendly because she is smiling.",
          "She is smiling, so she seems friendly."
        ],
        "answer": 1,
        "feedback": "so introduces the result."
      },
      {
        "type": "error",
        "prompt": "Tap the error:",
        "tokens": [
          "She",
          "study",
          "English",
          "at",
          "university."
        ],
        "answer": 1,
        "feedback": "Use studies with she."
      },
      {
        "type": "classify",
        "prompt": "Sort the checks into EDITOR'S TOOLKIT or NOT A CHECK.",
        "items": [
          [
            "capital letters",
            "EDITOR'S TOOLKIT"
          ],
          [
            "end punctuation",
            "EDITOR'S TOOLKIT"
          ],
          [
            "third-person -s",
            "EDITOR'S TOOLKIT"
          ],
          [
            "make the paragraph sound fancy",
            "NOT A CHECK"
          ]
        ],
        "categories": [
          "EDITOR'S TOOLKIT",
          "NOT A CHECK"
        ],
        "feedback": "Editing uses specific checks, not vague 'make it better' instructions."
      },
      {
        "type": "reorder_words",
        "prompt": "Build the corrected sentence.",
        "words": [
          "She",
          "studies",
          "English",
          "at",
          "university",
          "."
        ],
        "answer": [
          "She",
          "studies",
          "English",
          "at",
          "university",
          "."
        ],
        "feedback": "Check third-person -s and punctuation."
      }
    ]
  },
  {
    "id": "w3-wed",
    "week": 3,
    "day": "Wednesday",
    "title": "Week 3 Wednesday Review",
    "reviews": "M11 collaborative writing and cumulative preparation for independent transfer.",
    "questions": [
      {
        "type": "mcq",
        "prompt": "What should a group do before writing its paragraph?",
        "options": [
          "Write immediately with no plan.",
          "List visible facts and reasonable ideas, then make an outline.",
          "Ask the teacher for complete sentences."
        ],
        "answer": 1,
        "feedback": "Select and plan before drafting."
      },
      {
        "type": "classify",
        "prompt": "Sort into SEE or THINK.",
        "items": [
          [
            "He has a bicycle.",
            "SEE"
          ],
          [
            "He may enjoy exercise.",
            "THINK"
          ],
          [
            "She is smiling.",
            "SEE"
          ],
          [
            "She seems cheerful.",
            "THINK"
          ]
        ],
        "categories": [
          "SEE",
          "THINK"
        ],
        "feedback": "Visible facts and inferences work together."
      },
      {
        "type": "mcq",
        "prompt": "Which outline note is best?",
        "options": [
          "She has long curly hair.",
          "long curly hair",
          "This is a very nice paragraph."
        ],
        "answer": 1,
        "feedback": "Outline notes are short phrases, not full sentences."
      },
      {
        "type": "reorder_paragraph",
        "prompt": "Put the group paragraph in a logical order.",
        "sentences": [
          "Overall, Samir seems active and friendly.",
          "Samir is a man who looks active.",
          "He has short dark hair and a bicycle.",
          "He seems active because he is standing beside the bicycle."
        ],
        "answer": [
          1,
          2,
          3,
          0
        ],
        "feedback": "Topic → useful facts → supported inference → conclusion."
      },
      {
        "type": "mcq",
        "prompt": "During collaborative writing, everyone should…",
        "options": [
          "contribute at least one sentence or idea",
          "wait for the strongest student",
          "copy a model paragraph"
        ],
        "answer": 0,
        "feedback": "Collaborative writing should involve the whole group."
      },
      {
        "type": "mcq",
        "prompt": "A gallery check should focus mainly on…",
        "options": [
          "content and development",
          "correcting every grammar error",
          "handwriting quality"
        ],
        "answer": 0,
        "feedback": "The reader checks useful detail and evidence."
      },
      {
        "type": "mcq",
        "prompt": "Which sentence is developed and accurate?",
        "options": [
          "She friendly.",
          "She seems friendly because she is smiling.",
          "She have friendly."
        ],
        "answer": 1,
        "feedback": "It is complete and supported."
      },
      {
        "type": "gap",
        "prompt": "Complete: Every day, he ___ at a shop. (work)",
        "answers": [
          "works"
        ],
        "feedback": "he → works"
      },
      {
        "type": "error",
        "prompt": "Tap the error:",
        "tokens": [
          "She",
          "is",
          "wearing",
          "a",
          "shirt",
          "blue."
        ],
        "answer": 5,
        "feedback": "Put the adjective before the noun: a blue shirt."
      },
      {
        "type": "mcq",
        "prompt": "Before independent writing, which is the best reminder?",
        "options": [
          "Use every word you know.",
          "Choose useful details, support guesses, organize, and check.",
          "Make it as long as possible."
        ],
        "answer": 1,
        "feedback": "The cycle is about purposeful selection, organization, development, and editing."
      }
    ]
  },
  {
    "id": "w3-thu",
    "week": 3,
    "day": "Thursday",
    "title": "Week 3 Thursday Review",
    "reviews": "M12–M13 and full Cycle 1 cumulative review before CAPP/transfer.",
    "questions": [
      {
        "type": "mcq",
        "prompt": "What does independent transfer mean?",
        "options": [
          "Write about a new unseen photo using skills you learned.",
          "Memorize yesterday's paragraph.",
          "Copy the model with new names."
        ],
        "answer": 0,
        "feedback": "Transfer means applying the skill to a new situation."
      },
      {
        "type": "mcq",
        "prompt": "Which is the strongest topic sentence?",
        "options": [
          "She has hair.",
          "Maya is a young woman who looks cheerful and adventurous.",
          "She has a camera."
        ],
        "answer": 1,
        "feedback": "A topic sentence introduces the person and overall idea."
      },
      {
        "type": "mcq",
        "prompt": "Which is a reasonable supported inference?",
        "options": [
          "He is rich because of his clothes.",
          "He may enjoy cycling because he has a bicycle.",
          "She is intelligent because she wears glasses."
        ],
        "answer": 1,
        "feedback": "Use visible/contextual evidence, not stereotypes."
      },
      {
        "type": "gap",
        "prompt": "Complete: She ___ a black backpack.",
        "answers": [
          "has"
        ],
        "feedback": "Use has for things the person possesses."
      },
      {
        "type": "gap",
        "prompt": "Complete: She ___ photography. (enjoy)",
        "answers": [
          "enjoys"
        ],
        "feedback": "she → enjoys"
      },
      {
        "type": "error",
        "prompt": "Tap the error:",
        "tokens": [
          "He",
          "looks",
          "like",
          "happy."
        ],
        "answer": 2,
        "feedback": "Use looks + adjective: He looks happy."
      },
      {
        "type": "reorder_words",
        "prompt": "Build the corrected sentence.",
        "words": [
          "He",
          "looks",
          "happy",
          "."
        ],
        "answer": [
          "He",
          "looks",
          "happy",
          "."
        ],
        "feedback": "looks + adjective"
      },
      {
        "type": "reorder_paragraph",
        "prompt": "Put the paragraph parts in order.",
        "sentences": [
          "Overall, Aisha seems hard-working and friendly.",
          "Aisha is a young woman who looks like a busy student.",
          "She has a laptop, books, and a notebook.",
          "She seems hard-working because she is studying at her desk."
        ],
        "answer": [
          1,
          2,
          3,
          0
        ],
        "feedback": "Topic → supporting details → supported inference → conclusion."
      },
      {
        "type": "mcq",
        "prompt": "Which is a useful CAPP-style reflection?",
        "options": [
          "It was good.",
          "I checked has/have and corrected one mistake. Next time I will check -s verbs.",
          "Writing is hard."
        ],
        "answer": 1,
        "feedback": "Useful reflection points to evidence and a next step."
      },
      {
        "type": "mcq",
        "prompt": "Which Editor's Toolkit habit is best?",
        "options": [
          "Try to fix everything at once.",
          "Use one specific check at a time.",
          "Change every sentence even if it is correct."
        ],
        "answer": 1,
        "feedback": "Good editors use focused checks and leave correct sentences alone."
      }
    ]
  }
];
