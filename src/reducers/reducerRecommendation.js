import C from "../actions/constants";

//Recommendation state
let recommendations = [
  {
    id: 1,
    name: "ADHD",
    selected: false,
    recommendation: [
      {
        id: "adhd1",
        text:
          "Similarly, CLIENT NAME would greatly benefit from continuing to learn and utilizing organizational techniques (i.e., making lists, brainstorming verbally, breaking down large tasks into smaller components) to help CLIENT NAME better manage CLIENT NAME work-related tasks.",
        subtext: []
      },
      {
        id: "adhd2",
        text:
          "CLIENT NAME may benefit from seeking out and utilizing individual therapeutic supports to help develop effective coping strategies to manage CLIENT NAME symptoms of anxiety and inattention, as well as build CLIENT NAME self-esteem.",
        subtext: []
      },
      {
        id: "adhd3",
        text:
          "CLIENT NAME may also benefit from participating in Neurofeedback to help CLIENT NAME better regulate CLIENT NAME symptoms of anxiety, agitation, and inattention. Neurofeedback is considered a natural treatment for improving attention and self-regulation for individuals who want to take a medication free approach to treatment or to enhance the effects of other treatments they are already receiving. With neurofeedback we are enhancing awareness of internal states by allowing the brain to witness its own EEG activity.  The goal is to allow the nervous system to calm down and reset itself onto a better path. It also addresses and better regulates symptoms of inattention and anxiety.",
        subtext: []
      },
      {
        id: "adhd4",
        text:
          "It is recommended that CLIENT NAME receive 50% extended testing time on tests and examinations to help CLIENT NAME illustrate CLIENT NAME knowledge base to the best of CLIENT NAME ability. Extended time would allow CLIENT NAME to take breaks, check CLIENT NAME work, access the full scope of the material presented to CLIENT NAME, and provide CLIENT NAME with the needed time to process the testing material.",
        subtext: []
      },
      {
        id: "adhd5",
        text:
          "CLIENT NAME is encouraged to utilize a schedule/planner daily to help CLIENT NAME keep track of important due dates and appointments.",
        subtext: []
      },
      {
        id: "adhd6",
        text:
          "Utilize a homework routine to help accomplish  nightly tasks. Example: Allow at most one hour after school to decompress before starting homework. Utilize an alarm to signal when the hour is up so not to lose track of time. To help stay motivated, reward CLIENT NAME during breaks by watching a preferred, short TV show or spending 15-30 minutes in a preferred activity.",
        subtext: []
      },
      {
        id: "adhd7",
        text:
          "CLIENT NAME's functional impairments also require that CLIENT NAME be allowed to take examinations in a distraction reduced environment.",
        subtext: []
      },
      {
        id: "adhd8",
        text:
          "Given that CLIENT NAME’s symptoms continue to negatively affect CLIENT NAME performance at work, CLIENT NAME may also benefit from a psychiatric consultation to assess whether medication may be an appropriate intervention at this time.",
        subtext: []
      },
      {
        id: "adhd9",
        text:
          "CLIENT NAME would benefit from a medication consultation to determine if psychiatric medication would be appropriate at this time to help CLIENT NAME better manage CLIENT NAME symptoms of inattention, anxiety, and agitation.",
        subtext: []
      },
      {
        id: "adhd10",
        text:
          "CLIENT NAME is encouraged to sit closer to teacher/speaker, also require that CLIENT NAME be allowed to take examinations in a distraction reduced environment to help guard against lapses in CLIENT NAME attention and concentration.",
        subtext: []
      },
      {
        id: "adhd11",
        text:
          "In addressing ADHD symptoms in preschool, children with ADHD commonly have a great need to touch and move. Giving them something to do with their hands and bodies while sitting in class can help them self-regulate, focus, and function better in the classroom. Teachers are encouraged to experiment with sensory strategies and tools, such as the following <ul><li>Velcro adhered to the underside of chair or desk— somewhere that CLIENT NAME can easily reach and discretely rub it to keep CLIENT NAME hands busy.</li><li>Seating options such as a rocking chair,exercise ball, or wiggle cushions.</li><li>Fidget toys (also called sensory toys). Consider looking for resources from companies such as Therapy Shoppe (www.therapyshoppe.com).</li></ul>",
        subtext: []
      },
      {
        id: "adhd12",
        text:
          "CLIENT NAME would also benefit from having an end of the day study hall at school to help complete work.",
        subtext: []
      }
    ]
  },
  {
    id: 2,
    name: "Autism",
    selected: false,
    recommendation: [
      {
        id: "autism1",
        text:
          "CLIENT NAME’s parents should share the results of this evaluation with GENDER current educators and the following recommendations should be incorporated into GENDER academic environment.",
        subtext: []
      },
      {
        id: "autism2",
        text:
          "Similarly, CLIENT NAME would also benefit from continuing to engage and participate in speech and language services, occupational therapy, as well social skills classes/groups (both in and out of school). Additionally, GENDER would also greatly benefit from A.B.A. therapy to help support GENDER needs outside of the classroom environment.",
        subtext: []
      },
      {
        id: "autism3",
        text:
          "CLIENT NAME would benefit from the following Educational and Academic supports and environments:",
        subtext: [
          {
            id: "autism3-1",
            text:
              "GENDER requires a school that is familiar with and can work with individuals presenting on the Autism Spectrum."
          },
          {
            id: "autism3-2",
            text:
              "CLIENT NAME’s diagnoses of Autism Spectrum Disorder and ADHD, Combined Type make it difficult for GENDER to attend in over-stimulating environments. Therefore, a small class size is recommended to help CLIENT NAME sustain attention, as there will be less extraneous stimuli in the room to distract GENDER. A classroom that has reduced noise will help CLIENT NAME successfully complete GENDER tasks. A small class size will also allow CLIENT NAME to receive the attention GENDER needs to succeed."
          },
          {
            id: "autism3-3",
            text:
              "When being asked a question or given a directive, CLIENT NAME will need extra time to process, respond, and act accordingly. It is also imperative to ensure that CLIENT NAME is not perseverating or fixating on preferred items during delivery of directions and commands."
          },
          {
            id: "autism3-4",
            text:
              "As academic work increases in difficulty, CLIENT NAME will also benefit from being provided 50% extended time on tests and in-class activities."
          },
          {
            id: "autism3-5",
            text:
              "CLIENT NAME’s attention and behavioral difficulties require significant levels of external structure and support. In the class, CLIENT NAME should be provided with predictable routines and clear-cut instructions and expectations. Teachers should speak slowly and repeat instructions as needed. Frequent monitoring should be done to ensure that GENDER remains on task."
          },
          {
            id: "autism3-6",
            text:
              "Multi-step directions/requests and lengthy assignments should be broken down as well."
          },
          {
            id: "autism3-7",
            text:
              "CLIENT NAME will often need directions and prompts repeated to GENDER, as well as having possible answer choices provided to GENDER."
          },
          {
            id: "autism3-8",
            text:
              "GENDER will also be more successful when verbal directives are paired with visual images to help cue GENDER to listen and ensure GENDER attention. When GENDER is not able to follow directions and comply, it is imperative to make sure GENDER understands what is being asked of GENDER."
          },
          {
            id: "autism3-9",
            text:
              "Preferential seating near the teacher and in the front of the classroom to help monitor difficulties with attention as well as processing difficulties."
          },
          {
            id: "autism3-10",
            text:
              "Teachers and caretakers working with CLIENT NAME should utilize short-term rewards (rather than longer, delayed rewards) as well as frequent, sensory breaks to help GENDER stay engaged, motivated and on-task with GENDER activities."
          },
          {
            id: "autism3-11",
            text:
              "CLIENT NAME should be provided with frequent breaks during classroom instruction for GENDER to fully comprehend the information and to increase GENDER overall compliance."
          },
          {
            id: "autism3-12",
            text:
              "Learning activities that increase motivation and arousal will facilitate sustaining attention (e.g., interactive and hands-on), rather than desk work. CLIENT NAME appears to be more of a visual and hands on learner, therefore GENDER will be more likely to comprehend the information when auditory information is supplemented with visual-based instruction."
          },
          {
            id: "autism3-13",
            text:
              "Teachers should assist in helping CLIENT NAME to make and maintain friendships in the classroom. Praise and encouragement should be used to reinforce appropriate social skills."
          },
          {
            id: "autism3-14",
            text:
              "Utilizing similar language and prompts both at home and at school to help support CLIENT NAME when GENDER perseverates and demonstrates difficulties with cognitive flexibility."
          },
          {
            id: "autism3-15",
            text:
              "Consistency and reliability should be implemented as much as possible (i.e., same seat every day, predictable and logical flow/routine during the day)."
          },
          {
            id: "autism3-16",
            text:
              "Use of a timer as well to help with transitions between activities."
          },
          {
            id: "autism3-17",
            text:
              "Schedule changes and transitions should be discussed ahead of time (as frequently as possible) to help CLIENT NAME shift activities and maintain a sense of control."
          },
          {
            id: "autism3-18",
            text:
              "It would be beneficial for CLIENT’s PARENTS to schedule an IEP meeting, to revise CLIENT NAME’s previous IEP to reflect GENDER diagnosis of Autism Spectrum Disorder. It is important for the educational staff to be aware of CLIENT NAME’s difficulties socially, as well as GENDER difficulties sustaining attention. Because of GENDER tendency to be very verbal, others may not readily recognize that CLIENT NAME has significant difficulty understanding and interpreting social cues."
          }
        ]
      },
      {
        id: "autism4",
        text:
          "CLIENT NAME will be successful when the environment has consistent structure and expectations. As a result, both home and school environments should help create a similar sense of structure.",
        subtext: []
      },
      {
        id: "autism5",
        text:
          "Due to CLIENT NAME’s rigidity, parents should provide a structured environment at home that encourages success and models effective coping strategies.",
        subtext: []
      },
      {
        id: "autism6",
        text:
          "CLIENT NAME would benefit from increasing GENDER understanding of social relationships and GENDER insight into how to make and maintain peer relationships. This training may best be implemented in a group setting where CLIENT NAME has an opportunity to practice skills under the supervision of a trained facilitator.",
        subtext: []
      },
      {
        id: "autism7",
        text:
          "CLIENT NAME would benefit from participation in a social skills group targeted toward teaching more complex social skills, such as understanding the pragmatics of social communication, perspective taking, and initiating and maintaining conversations about non-preferred topics. An individual therapist would also be helpful to review the specific social skills in a one to one setting.",
        subtext: []
      },
      {
        id: "autism8",
        text:
          "PARENTS/CARETAKER NAME should model and rehearse with CLIENT NAME appropriate social skills, to help GENDER use the skills when away from home.",
        subtext: []
      },
      {
        id: "autism9",
        text:
          "CLIENT NAME would benefit from opportunities to practice GENDER social skills in informal settings, such as outings with peers. Outings should be time limited (no more than 1-2 hours) and involve 1-2 peers to start. Activities should be selected in advance and should be activities that CLIENT NAME enjoys and that promote social engagement.",
        subtext: []
      },
      {
        id: "autism10",
        text:
          "It is recommended that CLIENT NAME be involved in activities that foster GENDER social development, to further increase GENDER social skills. Enrolling CLIENT NAME in activities that GENDER enjoys would help GENDER social development and may help to increase GENDER overall self-esteem.",
        subtext: []
      },
      {
        id: "autism11",
        text:
          "Lastly, CLIENT NAME and GENDER family may also find additional support and resources at the following websites:",
        subtext: [
          {
            id: "autism11-1",
            text:
              "National Resource Center on ADHD: <a href='https://chadd.org/'>https://chadd.org/</a>"
          },
          {
            id: "autism11-2",
            text:
              "Autism speaks: <a href='https://www.autismspeaks.org'>https://www.autismspeaks.org</a>"
          },
          {
            id: "autism11-3",
            text:
              "Michelle Winner’s Social Thinking program emphasizes how to be a part of the group, how to have conversations (topics other than the individual’s special interests), and perspective taking. <a href='https://www.socialthinking.com'>https://www.socialthinking.com</a>"
          },
          {
            id: "autism11-4",
            text:
              "<a href='https://www.danielwendler.com/'>https://www.danielwendler.com/</a> for tips and a resource guide to improving social skills"
          },
          {
            id: "autism11-5",
            text:
              "<a href='https://nationalautismassociation.org/'>https://nationalautismassociation.org/</a>"
          },
          {
            id: "autism11-6",
            text:
              "Autism Society of America: <a href='https://www.autism-society.org'>https://www.autism-society.org/</a>"
          },
          {
            id: "autism11-7",
            text: "<a href='https://autismnow.org/'>https://autismnow.org/</a>"
          },
          {
            id: "autism11-8",
            text:
              "<a href='http://www.autismlearn101.com'>http://www.autismlearn101.com</a> for online activities"
          },
          {
            id: "autism11-9",
            text:
              "Let’s Face It: <a href='http://www.web.uvic.ca/~letsface/letsfaceit'>http://www.web.uvic.ca/~letsface/letsfaceit</a> - teaches facial and emotional recognition"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "DEMENTIA",
    selected: false,
    recommendation: [
      {
        id: "dementia1",
        text:
          "CLIENT NAME current symptoms negatively impact GENDER daily functioning and could be exacerbated by increased amounts of stress. GENDER occupational and adaptive functioning have been greatly reduced and GENDER requires assistance to assist with functioning in these domains.",
        subtext: [
          {
            id: "dementia1-1",
            text:
              "It is recommended that CLIENT NAME seek disability services to help with current coping and additional supportive services over time."
          },
          {
            id: "dementia1-2",
            text:
              "It is also suggested that CLIENT NAME seek consultation with GENDER employee assistance team to help GENDER navigate GENDER current needs as they pertain to GENDER work environment."
          },
          {
            id: "dementia1-3",
            text:
              "CLIENT NAME are encouraged to talk about financial planning and goals for the current time as well as the future if CLIENT NAME should experience increasing cognitive and adaptive functioning challenges."
          }
        ]
      },
      {
        id: "dementia2",
        text:
          "It is of paramount importance that CLIENT NAME seeks out additional medical consultation in order to rule out any reversible medical causes for GENDER current dementia symptoms.",
        subtext: []
      },
      {
        id: "dementia3",
        text:
          "CLIENT NAME will benefit from the use of the following additional organizational strategies that GENDER can implement into GENDER daily routines:",
        subtext: [
          {
            id: "dementia3-1",
            text:
              "Using an alarm on GENDER mobile device to set important reminders."
          },
          {
            id: "dementia3-2",
            text: "Utilize a checklist when having to complete multiple tasks."
          },
          {
            id: "dementia3-3",
            text:
              "Create structure for time management that allows for individual tasks to be focused on."
          }
        ]
      },
      {
        id: "dementia4",
        text:
          "CLIENT NAME will benefit from individual therapy in order to process and support the impact that GENDER cognitive decline has on GENDER level of functioning currently and in the future. This support could help GENDER develop effective coping strategies to manage GENDER symptoms of anxiety and depression.",
        subtext: []
      },
      {
        id: "dementia5",
        text:
          "CLIENT NAME may also wish to consider neurofeedback as a source of self-regulation that can assist with cognitive (e.g., inattention, motivation), physical (e.g., pain) and emotional challenges (e.g., depression, anxiety).",
        subtext: []
      },
      {
        id: "dementia6",
        text:
          "CLIENT NAME may also benefit from participating in a support group for adults experiencing cognitive decline, anxiety, and depression. This group could help support CLIENT NAME in improving GENDER mood by helping GENDER to increase GENDER social support and coping skills.",
        subtext: []
      },
      {
        id: "dementia7",
        text:
          "CLIENT NAME and GENDER family might wish to participate in family therapy in order to process the impact that GENDER symptoms have on each individual and the relationships within their system.",
        subtext: []
      },
      {
        id: "dementia8",
        text:
          "CLIENT NAME and GENDER family should utilize the education and support provided by the following groups and organizations:",
        subtext: [
          {
            id: "dementia8-1",
            text:
              "Seven Stages of Dementia | Symptoms & Progression: https://www.dementiacarecentral.com/aboutdementia/facts/stages/"
          },
          {
            id: "dementia8-2",
            text:
              "Caregivers Guide to Understanding Dementia: https://www.caregiver.org/caregivers-guide-understanding-dementia-behaviors"
          },
          {
            id: "dementia8-3",
            text:
              "Support and Local Programs for individuals with Dementia: http://www.alz.org/mnnd/in_my_community_18497.asp"
          }
        ]
      },
      {
        id: "dementia9",
        text:
          "CLIENT NAME will benefit from additional organizational strategies:",
        subtext: [
          {
            id: "dementia9-1",
            text:
              "Using an alarm on GENDER mobile device to set important reminders."
          },
          {
            id: "dementia9-2",
            text: "Create a checklist of slides when giving a presentation."
          },
          {
            id: "dementia9-3",
            text: "Utilize a checklist when having to complete multiple tasks."
          },
          {
            id: "dementia9-4",
            text:
              "Create structure for time management that allows for individual tasks to be focused on before moving on to the next task."
          }
        ]
      },
      {
        id: "dementia10",
        text:
          "CLIENT NAME should continue to frequently engage in self-care activities (i.e., exercise, hobbies, spending time with friends) to help improve GENDER mood, sense of connectedness, and to better manage GENDER stress on a day-to-day basis.",
        subtext: []
      }
    ]
  },
  {
    id: 4,
    name: "Dysthymia",
    selected: false,
    recommendation: [
      {
        id: "dysthymia1",
        text:
          "CLIENT NAME’s current symptoms negatively impact GENDER daily functioning and are exacerbated by increased amounts of stress. At this time, CLIENT NAME would benefit from a psychiatric medication consultation to evaluate whether GENDER current medications are effectively treating GENDER mood symptoms.",
        subtext: []
      },
      {
        id: "dysthymia2",
        text:
          "CLIENT NAME should continue to utilize GENDER individual therapeutic supports to help GENDER develop effective coping strategies to manage GENDER symptoms of anxiety and depression.",
        subtext: []
      },
      {
        id: "dysthymia3",
        text:
          "CLIENT NAME may also benefit from participating in a support group for adults experiencing anxiety and depression. This group could help support CLIENT NAME in improving GENDER mood by helping GENDER to increase GENDER social support and coping skills.",
        subtext: []
      },
      {
        id: "dysthymia4",
        text:
          "CLIENT NAME may also benefit from participating in Neurofeedback to help GENDER better regulate GENDER symptoms of depression, inattention and anxiety. Neurofeedback is considered a natural treatment for improving attention and self-regulation for individuals who want to take a medication free approach to treatment or to enhance the effects of other treatments they are already receiving.",
        subtext: []
      },
      {
        id: "dysthymia5",
        text:
          "CLIENT NAME should frequently engage in self-care activities (i.e., exercise, hobbies, spending time with friends) to help improve GENDER mood, sense of connectedness, and to better manage GENDER stress on a day-to-day basis.",
        subtext: []
      }
    ]
  },
  {
    id: 5,
    name: "Learning Disability Mathematics",
    selected: false,
    recommendation: [
      {
        id: "learning-disability-mathematics1",
        text:
          "CLIENT NAME’s mother should review the findings from this evaluation to gain an understanding of CLIENT NAME’s current psychoeducational strengths and limitations and to implement appropriate recommendations and mobilize necessary services to assist with the provision of continued accommodations as GENDER transitions to adulthood.",
        subtext: []
      },
      {
        id: "learning-disability-mathematics2",
        text:
          "It is recommended that CLIENT NAME’s mother provide this evaluation to individuals at GENDER school as well as standardized assessment centers so that GENDER can receive ongoing accommodations that will enable GENDER to more fully demonstrate GENDER abilities and access the learning materials GENDER is provided.",
        subtext: []
      },
      {
        id: "learning-disability-mathematics3",
        text:
          "CLIENT NAME should be provided with access to double time on all standardized assessments with the provision of extra breaks to prevent fatigue and subsequent inattention.",
        subtext: []
      },
      {
        id: "learning-disability-mathematics4",
        text:
          "CLIENT NAME should be provided with the opportunity to have all test instructions read out loud to ensure that GENDER understands what the assignment requires.",
        subtext: []
      },
      {
        id: "learning-disability-mathematics5",
        text:
          "CLIENT NAME should be provided with the opportunity to take all standardized testing and large classroom-based assessments in a separate and quiet location with limited opportunities for distraction.",
        subtext: []
      },
      {
        id: "learning-disability-mathematics6",
        text:
          "It is important that CLIENT NAME is provided with an academic advisor when GENDER starts GENDER post- secondary education so GENDER can balance GENDER schedule with less demanding courses to avoid emotional and cognitive overwhelm. CLIENT NAME should be allowed to sign up for classes early, whenever possible, to ensure that GENDER is enrolled in appropriate classes that will afford GENDER ongoing ability to achieve at a more optimal level.",
        subtext: []
      },
      {
        id: "learning-disability-mathematics7",
        text:
          "CLIENT NAME should be provided with outlines of course material prior to class so GENDER has less demands placed on writing and GENDER will be able to allocate more energy to sustaining attention to classroom-based discussion.",
        subtext: []
      },
      {
        id: "learning-disability-mathematics8",
        text:
          "CLIENT NAME will benefit from consistent support that will help reduce demands for independent executive function. This type of support will help bridge the gap between childhood and adulthood and allow CLIENT NAME’s mother to step back and for appropriate community resources to be implemented.",
        subtext: []
      },
      {
        id: "learning-disability-mathematics9",
        text:
          "CLIENT NAME should be encouraged to seek healthy, fun, and therapeutic ways to manage GENDER social communication, executive, and emotional symptoms. CLIENT NAME should consider trying the following approaches:",
        subtext: [
          {
            id: "learning-disability-mathematics9-1",
            text:
              "<strong>Neurofeedback:</strong> CLIENT NAME would also benefit from participating in Neurofeedback. With neurofeedback we are enhancing awareness of internal states by allowing the brain to witness its own EEG activity. The goal is to allow the nervous system to calm down and reset itself onto a better path. Neurofeedback is considered a natural treatment for improving attention and self-regulation for individuals who want to take a medication free approach to treatment or to enhance the effects of other treatments they are already receiving. It also addresses and better regulates symptoms of inattention and anxiety."
          },
          {
            id: "learning-disability-mathematics9-2",
            text:
              "<strong>Mediation Practices and Mindfulness:</strong><ul><li>Meditation practice involving attention to ones breathing have been used for centuries. Mindfulness involves experiencing life from moment to moment with full awareness and acceptance and a practice that teaches us to pay greater attention to our internal and external experience.</li><li>These practices can guide individuals to improve relationships, create relaxation and calmness, sooth the self, increase memory, enhance focus, reduce stress, manage reactions and emotions, increase self-acceptance, and feel more at ease.</li></ul>"
          },
          {
            id: "learning-disability-mathematics9-3",
            text:
              "<strong>Breathing and Progressive Relaxation:</strong><ul><li>CLIENT NAME can be taught how to take conscious deep breaths to relax while listening to the sound of air coming in and out. GENDER should be shown how to inhale deeply (preferably through the nose) and slowly exhale through the mouth. The abdomen rises and expands during inhaling.</li><li>CLIENT NAME can learn progressive muscle relaxation by isolating different body parts and then tightening and relaxing them.</li></ul>"
          },
          {
            id: "learning-disability-mathematics9-4",
            text:
              "<strong>Yoga and Other Controlled Exercises:</strong><ul><li>Yoga has many health and psychological benefits, among them stress reduction and heightening one’s focus and self-awareness.</li></ul>"
          },
          {
            id: "learning-disability-mathematics9-5",
            text:
              "<strong>Guided Imagery and Visualization:</strong><ul><li>The ability to visualize colorful, vivid images with rich imagination can help empowerindividuals to overcome obstacles in their lives.</li><li>These techniques can be used for improving memory and learning, facilitate healing, and strength other areas of functioning such as social skills, coping, and creative expression.</li></ul>"
          },
          {
            id: "learning-disability-mathematics9-7",
            text:
              "<strong>Exercise and Physical Activity:</strong><ul><li>Exercise stimulates the central nervous system by increasing blood flow and oxygen tothe brain.</li><li>Exercise strengthens muscles, improves coordination, builds stamina, elevates mood, and is a positive outlet for excessive energy.</li></ul>"
          },
          {
            id: "learning-disability-mathematics9-8",
            text:
              "<strong>Green Time:</strong><ul><li>Several studies have shown that exposure to green, outdoor settings – a tree lined street, park, or grassy backyard – helps individuals with executive dysfunction feel calmer and more focused that those who spend hours on the computer or within an asphalt or concrete environment.</li></ul>"
          },
          {
            id: "learning-disability-mathematics9-9",
            text:
              "<strong>Music:</strong><ul><li>Music is well known to have many positive benefits in addition to pleasure and enjoyment.</li><li>Many individuals find that they are better able to focus and are more motivated and productive when listening to music.</li><li>Neuroscience is learning more and more about the effects of auditory stimulation on the brain. Music therapy may bolster attention and focus, reduce impulsivity, and strengthen social skills.</li></ul>"
          },
          {
            id: "learning-disability-mathematics9-10",
            text:
              "<strong>Art:</strong><ul><li>Any opportunity to give individuals creative outlets that they find pleasurable is well worth pursuing. CLIENT NAME as many other young adults with executive dysfunction has artistic strengths.</li><li>Drawing, painting, sculpting, photography, and other forms of visual art expression can have very beneficial effects.</li><li>Painting, drawing, and sculpting are great hands-on treatment for calming mind and body.</li><li>The visual arts are a means of self-expression and enable one to express graphically what may be difficult to do verbally, such as talking about feelings and emotions.</li><li>Art therapy is based on the premise that self-expression can be used to address emotional problems, develop interpersonal skills, manage behavior, reduce stress, and increase and increase self-awareness.</li><li>Different parts of the brain are engaged when painting, drawing, and sculpting, for example, those involved in motor skills, attention, and working memory.</li><li>CLIENT NAME will benefit from ongoing participation in structured group activities where GENDER can continue to develop GENDER peer-relational and social communication skills.</li></ul>"
          }
        ]
      }
    ]
  },
  {
    id: 6,
    name: "Learning Disability Reading",
    selected: false,
    recommendation: [
      {
        id: "learning-disability-reading1",
        text:
          "CLIENT NAME’s parents should share the results of this evaluation with GENDER current educators and the following recommendations should be incorporated into GENDER academic environment. Results of this assessment should also be shared with future schools to which GENDER gains admittance as soon as possible so GENDER can receive assistance with class selection and to determine how to incorporate the necessary accommodations into GENDER regular schedule.",
        subtext: []
      },
      {
        id: "learning-disability-reading2",
        text:
          "CLIENT NAME should talk to each of GENDER teachers during the first weeks of class to determine how to access office hour support and to discuss GENDER needs and accommodations.",
        subtext: []
      },
      {
        id: "learning-disability-reading3",
        text:
          "CLIENT NAME's current testing results documented GENDER relative weakness with inattention, impulsivity, and reading comprehension. It is recommended that GENDER receive 50% extended testing time on tests and examinations to help GENDER illustrate GENDER knowledge base to the best of GENDER ability. Extended time would help CLIENT NAME access the full scope of the material presented to GENDER, check GENDER work, and allow GENDER the needed time to process the testing material.",
        subtext: []
      },
      {
        id: "learning-disability-reading4",
        text:
          "Specifically, due to GENDER aforementioned weaknesses, GENDER also requires 50% extended testing time on all in-class tests.",
        subtext: []
      },
      {
        id: "learning-disability-reading5",
        text:
          "CLIENT NAME's functional impairments also require that GENDER be allowed to take examinations in a distraction reduced environment.",
        subtext: []
      },
      {
        id: "learning-disability-reading6",
        text:
          "Furthermore, while in the classroom, CLIENT NAME should be encouraged to sit close to the teacher/speaker, and further from GENDER preferred peers, to help guard against lapses in GENDER attention and concentration.",
        subtext: []
      },
      {
        id: "learning-disability-reading7",
        text:
          "CLIENT NAME would also benefit from having an end of the day study hall at school to help GENDER complete GENDER work.",
        subtext: []
      },
      {
        id: "learning-disability-reading8",
        text:
          "It also will be helpful for CLIENT NAME to utilize a homework routine to help GENDER accomplish GENDER nightly tasks. For example, CLIENT NAME should allow herself, at most, one hour after school to decompress before starting GENDER homework. To help GENDER, GENDER could also utilize an alarm on GENDER phone to signal when the hour is up so that GENDER does not lose track of time. (This can also be utilized while taking breaks in between assignments). To help GENDER stay motivated, CLIENT NAME could also reward GENDER during GENDER breaks by watching a preferred, short TV show or spending 15-30 minutes in a preferred activity. On days that GENDER has volleyball practices and/or games, CLIENT NAME should utilize the time right after school to begin GENDER work before engaging with peers and starting sports practice.",
        subtext: []
      },
      {
        id: "learning-disability-reading9",
        text:
          "CLIENT NAME is encouraged to continue utilizing a schedule/planner daily to help GENDER keep track of important due dates, appointments, and school assignments.",
        subtext: []
      },
      {
        id: "learning-disability-reading10",
        text:
          "Similarly, CLIENT NAME would greatly benefit from continuing to learn and utilizing organizational techniques (i.e., making lists, brainstorming verbally, breaking down larger tasks into smaller components) to help GENDER better manage GENDER assignments and tasks.",
        subtext: []
      },
      {
        id: "learning-disability-reading11",
        text:
          "While reading, CLIENT NAME should practice and engage in active reading skills (e.g., underlining, taking notes simultaneously to help GENDER grasp main ideas vs. supporting details) to help GENDER comprehend reading passages.",
        subtext: []
      },
      {
        id: "learning-disability-reading12",
        text:
          "CLIENT NAME would also benefit from participating in Neurofeedback to help GENDER better regulate GENDER symptoms of inattention, impulsivity, disorganization, and anxiety. Neurofeedback is considered a natural treatment for improving attention and self-regulation for individuals who want to take a medication free approach to treatment or to enhance the effects of other treatments they are already receiving.",
        subtext: []
      },
      {
        id: "learning-disability-reading13",
        text:
          "Breathing and Progressive Relaxation: CLIENT NAME can be taught how to take conscious deep breaths to relax while listening to the sound of air coming in and out. GENDER should be shown how to inhale deeply (preferably through the nose) and slowly exhale through the mouth. The abdomen rises and expands during inhaling. CLIENT NAME can learn progressive muscle relaxation by isolating different body parts and then tightening and relaxing them.",
        subtext: []
      }
    ]
  },
  {
    id: 7,
    name: "Neurocognitive Disorder",
    selected: false,
    recommendation: [
      {
        id: "neurocognitive-disorder1",
        text:
          "Therapeutic pre-school specifically designed for children with severe behavioral difficulties. These pre-schools have small class sizes and are equipped to address the significant behavioral and emotional issues.",
        subtext: []
      },
      {
        id: "neurocognitive-disorder2",
        text:
          "In addressing emotional functioning and anger symptoms it is recommended that:",
        subtext: [
          {
            id: "neurocognitive-disorder2-1",
            text:
              "Utilize a variety of therapeutic interventions to promote relaxation and emotional regulation in addition to behavioral techniques. These can include:<ul><li>Mindfulness and mediation practices involving attention to his breathing and internal and external experience. For example, utilizing the Spider-Man Mindfulness script incorporates using several senses, including tactile, auditory, and olfactory senses.</li><li>Relaxation techniques including diaphragmatic breathing exercises and progressive muscle relaxation techniques.</li><li>Exposure to green, outdoor settings may help Devon feel calmer and more relaxed.</li></ul>"
          }
        ]
      },
      {
        id: "neurocognitive-disorder3",
        text:
          "In addressing impulsive behaviors, self-control, and body-control/awareness, he/she may benefit from occupational therapy. Occupational therapy can also assess if  CLIENT NAME experiences any sensory processing difficulties which may be contributing to GENDER hyperactivity, impulsivity, and attentional difficulties.",
        subtext: []
      }
    ]
  }
];

const recommendationReducer = (state = recommendations, action) => {
  let array = recommendations.map(r => {
    let rname = action.payload;
    if (r.name === rname) {
      r.selected = !r.selected;
      return r;
    }
    return r;
  });
  return action.type === C.ADD_RECOMMENDATION ? array : state;
};

export default recommendationReducer;
