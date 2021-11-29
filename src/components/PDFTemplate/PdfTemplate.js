import React from 'react';
import PropTypes from 'prop-types';
import './pdfTemplate.css';

const PdfTemplate = (props) => {
  console.log('PdfTemplate props = ', props);
  const {
    data: {
      values: {
        wizardForm5Disabled,
        wizardForm6Disabled,
        wizardForm7Disabled,
        wizardForm8Disabled,
        wizardForm9Disabled,
        wizardForm10Disabled,
        wizardForm11Disabled,
        wizardForm12Disabled,
        wizardForm13Disabled,
        wizardForm14Disabled,
        wizardForm15Disabled,
        wizardForm16Disabled,
        wizardForm17Disabled,
        wizardForm18Disabled,
        wizardForm19Disabled,
        wizardForm20Disabled,
        wizardForm21Disabled,
        wizardForm22Disabled,
        wizardForm23Disabled,
        wizardForm24Disabled,
        wizardForm25Disabled,
        wizardForm26Disabled,
        wizardForm27Disabled,
        wizardForm28Disabled,
        wizardForm29Disabled,
        wizardForm30Disabled,
        wizardForm31Disabled,
        wizardForm32Disabled,
        wizardForm33Disabled,
        wizardForm34Disabled,
        wizardForm35Disabled,
        wizardForm36Disabled,
        wizardForm37Disabled,
        wizardForm38Disabled,
        wizardForm39Disabled,
        wizardForm40Disabled,
        wizardForm41Disabled,
        wizardForm43Disabled,
        wizardForm44Disabled,
        wizardForm45Disabled,
        wizardForm46Disabled,
        diName,
        diDateofbirth,
        diAge,
        diGender,
        diHandedness,
        diEvaluationlocation,
        diDateoftesting,
        diEvaluator,
        diSchool,
        diGrade,
        paqName,
        paqGuardian,
        paqCellPhone,
        paqAddress,
        paqHomePhone,
        paqWorkPhone,
        reasonReferral1,
        reasonReferral2,
        reasonReferral3,
        recordsReviewed,
        bhPrimaryCaregiverMother,
        bhMotherName,
        bhStepmother,
        bhMotherCellPhone,
        bhMotherOccupation,
        bhMotherLengthEmployement,
        bhMotherPrimaryLanguage,
        bhMotherAge,
        bhMotherHomePhone,
        bhMotherWorkPhone,
        bhMotherEmployer,
        bhMotherHighestGrade,
        bhMotherSecondaryLanguage,
        bhPrimaryCaregiverFather,
        bhFatherName,
        bhStepfather,
        bhFatherCellPhone,
        bhFatherOccupation,
        bhFatherLengthEmployement,
        bhFatherPrimaryLanguage,
        bhFatherAge,
        bhFatherHomePhone,
        bhFatherWorkPhone,
        bhFatherEmployer,
        bhFatherHighestGrade,
        bhFatherSecondaryLanguage,
        bhPrimaryCaregiverName,
        bhOtherParentStepparentAge,
        bhOtherParentStepparentGuardian,
        bhOtherParentStepparentHomePhone,
        bhOtherParentStepparentWorkPhone,
        bhOtherParentStepparentCellPhone,
        bhOtherParentStepparentAddress,
        ccCaregiverGone,
        ccHoursPerDay,
        ccDifferentPeople,
        fhCloseness,
        fhExperienced,
        fhCustodyMother,
        fhCustodyFather,
        fhCustodyBoth,
        fhVisitation,
        fhParentalClosenessChoice,
        fhLifeExperiencesDate,
        fhLifeExperiencesAge,
        fhLifeExperiencesDetails,
        brothersSisters,
        bsGetAlong,
        crResidence,
        crResidenceLength,
        frMovies,
        frGames,
        frMeals,
        frSports,
        frConversations,
        frVisitsRelatives,
        frTelevision,
        frChurch,
        frOther,
        frSpokenLanguage,
        frGrandparentFrequency,
        frEnjoy,
        frDifficult,
        frCareer,
        frEducationLevel,
        frDisciplinarian,
        frAgreeDiscipline,
        frDisciplineTechniques,
        frDisciplinarianOtherDesc,
        mdhPlannedPregnancy,
        mdhDrCare,
        mdhTotalPregnancies,
        mdhPregnancyDifficultConception,
        mdhPregnancyToxemia,
        mdhPregnancyWeightGain,
        mdhPregnancyVomiting,
        mdhPregnancyGermanMeasels,
        mdhPregnancySwelling,
        mdhPregnancyEmotional,
        mdhPregnancyVaginalBleeding,
        mdhPregnancyFlu,
        mdhPregnancyAnemia,
        mdhPregnancyBloodPressure,
        mdhPregnancyInjury,
        mdhOtherComplication,
        mdhMothersAge,
        mdhFathersAge,
        mdhMothersAgeFirstChild,
        mdhHospitalBirth,
        mdhPregnancyLength,
        mdhBirthWeight,
        mdhLaborLength,
        mdhApgarScore,
        mdhBirthConditionChild,
        mdhForceps,
        mdhBreech,
        mdhInduced,
        mdhCeasarean,
        mdhDeliveryComplications,
        mdhIncubator,
        mdhJaundiced,
        mdhBreathingProblems,
        mdhSupplementalOxygen,
        mdhAnesthesia,
        mdhMotherLengthHospital,
        mdhChildLengthHospital,
        mdhOtherComplicationDescription,
        mdhBirthLocation,
        mdhBirthConditionMother,
        mdhTurnOverMonths,
        mdhTurnOverYear,
        mdhWalkDownStairsMonths,
        mdhWalkDownStairsYear,
        mdhSitAloneMonths,
        mdhSitAloneYear,
        mdhAttractedSoundMonths,
        mdhAttractedSoundYear,
        mdhCrawlMonths,
        mdhCrawlYear,
        mdhUnderstandWordsMonths,
        mdhUnderstandWordsYear,
        mdhStandAloneMonths,
        mdhStandAloneYear,
        mdhSpeakFirstWordsMonths,
        mdhSpeakFirstWordsYear,
        mdhWalkAloneMonths,
        mdhWalkAloneYear,
        mdhSpeakSentencesMonths,
        mdhSpeakSentencesYear,
        mdhWalkUpStairsMonths,
        mdhWalkUpStairsYear,
        mdhBreastFed,
        mdhBreastFedWeaned,
        mdhBottleFed,
        mdhBottleFedWeaned,
        mdhToiletTrainedDay,
        mdhToiletTrainedNight,
        mdhBedWetting,
        mdhBedSoiling,
        mdhBedWettingMedicalReasons,
        mdhBedWettingStop,
        mdhBedSoilingStop,
        mdhBedWettingMedicalReasonsDescription,
        mdhWalkingDifficulty,
        mdhUnclearSpeech,
        mdhFeedingProblem,
        mdhUnderweightProblem,
        mdhOverweightProblem,
        mdhColic,
        mdhSleepProblem,
        mdhEatingProblem,
        mdhLearningRideBike,
        mdhLearningSkip,
        mdhLearningThrowCatch,
        mdhWalkingDifficultyDescription,
        mdhUnclearSpeechDescription,
        mdhFeedingProblemDescription,
        mdhUnderweightProblemDescription,
        mdhOverweightProblemDescription,
        mdhColicDescription,
        mdhSleepProblemDescription,
        mdhEatingProblemDescription,
        mdhLearningRideBikeDescription,
        mdhLearningSkipDescription,
        mdhLearningThrowCatchDescription,
        mdhMotorSkillsFirstFour,
        mdhTemperTantrum,
        mdhNoThriveFirstFour,
        mdhSeparationAnxiety,
        mdhExcessiveCrying,
        mdhChangeWritingHand,
        mdhMotorSkillsFirstFourDescription,
        mdhTemperTantrumDescription,
        mdhNoThriveFirstFourDescription,
        mdhSeparationAnxietyDescription,
        mdhExcessiveCryingDescription,
        mhMeaselsMonths,
        mhMeaselsMonthsYear,
        mhRheumaticFeverMonths,
        mhRheumaticFeverYear,
        mhGermanMeaselsMonths,
        mhGermanMeaselsYear,
        mhDiptheriaMonths,
        mhDiptheriaYear,
        mhMumpsMonths,
        mhMumpsYear,
        mhUnderstandWordsMonths,
        mhUnderstandWordsYear,
        mdhMeningitisMonths,
        mdhMeningitisYear,
        mhChickenPoxMonth,
        mhChickenPoxYear,
        mhEncephalitisMonth,
        mhEncephalitisYear,
        mhTuberculosisMonth,
        mhAnemiaMonth,
        mhAnemiaYear,
        mhWhoopingCoughMonths,
        mhWhoopingCoughYear,
        mhFever104Months,
        mhFever104Year,
        mhScarletFeverMonths,
        mhScarletFeverYear,
        mhBrokenBonesMonths,
        mhBrokenBonesYear,
        mhConcussionMonths,
        mhConcussionYear,
        mhComaLossConsciousnessMonths,
        mhComaLossConsciousnessYear,
        mhTuberculosisYear,
        mdColds,
        mdChronicCough,
        mdAsthma,
        mdHayFever,
        mdSinusCondition,
        mdPhysicalExertion,
        mdActivityLimits,
        mdHeartMurmur,
        mdVomiting,
        mdDiarrhea,
        mdConstipation,
        mdStomachPain,
        mdUrination,
        mdPainUrinating,
        mdExessiveUrination,
        mdUrineOdor,
        mdMusclePain,
        mdClumsyWalk,
        mdPoorPosture,
        mdOtherMuscleProblems,
        mdFrequentRashes,
        mdBruises,
        mdSores,
        mdAcne,
        mdItchy,
        mdSeizures,
        mdSpeechDefects,
        mdAccidentProne,
        mdNailBiter,
        mdSucksThumb,
        mdGrindsTeeth,
        mdTwitches,
        mdBangsHead,
        mdRocks,
        mdBowelMovement,
        mdNeurologicalMeds,
        mdNeurologicalTranquilizer,
        mdNeurologicalAdhdMeds,
        mdhAllergiesMedicine,
        mdhAllergiesFood,
        mdhAllergiesOther,
        mdhSpeechStuttering,
        mdhSpeechUnclear,
        mdhSpeechOther,
        mdhSpeechExamDate,
        mdhHearingEarInfection,
        mdhHearingProblems,
        mdhHearingTubes,
        mdhHearingExamDate,
        mdhVisionProblems,
        mdhGlasses,
        mdhVisionProblemsDescription,
        mdhGlassesDescription,
        mdhVisionExamDate,
        mdhAllergiesMedicineDescription,
        mdhAllergiesFoodDescription,
        mdhAllergiesOtherDescription,
        mdhSpeechStutteringDescription,
        mdhSpeechUnclearDescription,
        mdhSpeechOtherDescription,
        mdNeurologicalMedsDate,
        mdNeurologicalMedsKind,
        mdNeurologicalTranquilizerDate,
        mdNeurologicalTranquilizerKind,
        mdNeurologicalAdhdMedsDate,
        mdNeurologicalAdhdMedsKind,
        mdhHearingEarInfectionDescription,
        mdhHearingProblemsDescription,
        mdhHearingTubesDescription,
        mcDrName,
        mcDrPhone,
        mcDrVisitCount,
        mcDrLastVisit,
        mcDrLastVisitMonths,
        medicationListGroup,
        mcSexualAbuse,
        counselingGroup,
        nuerologicalGroup,
        psychologyGroup,
        fhDrugAbuse,
        fhAlzheimers,
        fhBehaviorDisorder,
        fhBirthDefect,
        fhCancer,
        fhCerbralPalsy,
        fhCysticFibrosis,
        fhDiabetes,
        fhEmotionalDisturbance,
        fhFoodAllergies,
        fhHeartDisease,
        fhHemophilia,
        fhHighBloodPressure,
        fhHuntingtonChorea,
        fhIntellectualDisability,
        fhKidneyDisease,
        fhMentalIllness,
        fhMigraines,
        fhMultipleSclerosis,
        fhMuscularDystrophy,
        fhNervousnes,
        fhOtherLearningDisability,
        fhParkinsons,
        fhPhysicalHandicap,
        fhReadingProblem,
        fhSeizures,
        fhSevereHeadInjury,
        fhSickleCell,
        fhSpeechProblem,
        fhStroke,
        fhTaySachs,
        fhTourettes,
        fhTuberculosis,
        fhOther,
        fhFathersHealth,
        fhMothersHealth,
        specialEdGroup,
        fRelatingProblems,
        fRelatingProblemsDesc,
        fFight,
        fFightDesc,
        fYoungerFriends,
        fYoungerFriendsDesc,
        fMakingFriends,
        fMakingFriendsDesc,
        fAlone,
        fAloneDesc,
        fNeighbhoodFriends,
        fNeighbhoodFriendsDesc,
        fRolePeerGroupGames,
        fSmokeCigarettes,
        fChewTobacco,
        fInhale,
        fAlcholol,
        fDrugs,
        riActivitesSports,
        riActivitesHobbies,
        riActivitesOther,
        btOverstimulated,
        btAttentionSpan,
        btSelfControl,
        btUnhappy,
        btAffectionless,
        btHidesFeelings,
        btOverEngergetic,
        btImpulsive,
        btOverreactsProblems,
        btShy,
        btParentalAttention,
        btCannotCalm,
        btFears,
        btAngry,
        ehDaycare,
        ehDaycareAge,
        ehDaycareTime,
        ehDaycareDays,
        ehKindergarten,
        ehKindergartenProblems,
        ehDaycareProblems,
        ehChangedSchools,
        ehChangedSchoolsDesc,
        ehRepeatGrade,
        ehGradeRepeatDesc,
        ehGradeSkip,
        ehGradeSkipDesc,
        ehDifficultyReading,
        ehDifficultyReadingDesc,
        ehDifficultyMath,
        ehDifficultyMathDesc,
        ehSpecialEd,
        ehSpecialEdCurrent,
        ehTypeSpecialEdClass,
        ehTypeSpecialEdHours,
        ehDislikesSchool,
        ehAbsent,
        ehAbsentDesc,
        ehGraduateHsDesc,
        ehTeacherConcerns,
        ehTeacherConcernsDesc,
        ehPoorGrades,
        ehPoorGradesDesc,
        ehSpecialEdDesc,
        rdaReligonAffiliation,
        rdaReligonInvolvement,
        rdaSpiritualImportance,
        rdaReligonBuilding,
        rdaEthnicity,
        rdaRace,
        rdaIdenficationOther,
        otherInformation,
        WIATIII,
        NelsonDenny,
        WJIVACH,
        BRIEF,
        Conners3,
        DKEFS,
        RBANS,
        NEPSYII,
        QIKCPT,
        VinelandII,
        ADOS2,
        CARS2,
        GARS3,
        WISCV,
        CTONI2,
        DASII,
        WASIII,
        WAISIV,
        WJIVCOG,
        WPPSIIV,
        WRAML2,
        GORT5,
        WMSIV,
        WRAVMA,
        BeeryVMI,
        BASC3,
        PIY,
        HTP,
        MCMIIV,
        MMPI2,
        MMPIA,
        Rorschach,
        TOMM,
        TSCC,
        // TestModules
        t1Ados2Module1,
        t2Ados2Module2,
        t3Ados2Module3,
        t4Ados2Module4,
        // ParentGroupSubScales
        t1WiscvFullScale,
        t2WiscvGeneralAbilities,
        t3Cars2Cars2St,
        t5Cars2Cars2Hf,
        t6Conners3Parent,
        t7Conners3Teacher,
        t8Conners3SelfReport,
        t9RbansIndex,
        t10Wraml2CoreSubtestsAndIndexes,
        t11Wraml2OptionalDelayRecallAndRecognitionSubtests,
        t12Basc3SrpC,
        t13Basc3SrpA,
        t14Basc3SrpCol,
        t15Basc3TrsP,
        t16Basc3TrsCTrsA,
        t17Basc3PrsP,
        t18Basc3PrsCPrsA,
        t19WppsiivFullScale,
        // ParentGroupScales
        t2Ados2SocialAffectSa,
        t3Ados2RestrictedAndRepetitiveBehaviorRrb,
        t4Ados2SocialAffectSa,
        t5Ados2RestrictedAndRepetitiveBehaviorRrb,
        t6Ados2SocialAffectSa,
        t7Ados2RestrictedAndRepetitiveBehaviorRrb,
        t8Ados2SocialAffectSa,
        // ParentScaleTitles
        t1VerbalComprehension,
        t2VisualSpatial,
        t3FluidReasoning,
        t4WorkingMemory,
        t5ProcessingSpeed,
        t6Ados2Communication,
        t7Ados2ReciprocalSocialInteraction,
        t8Ados2RestrictedAndRepetitiveBehaviors,
        t9Ados2Communication,
        t10Ados2ReciprocalSocialInteraction,
        t11Ados2RestrictedAndRepetitiveBehaviors,
        t12Ados2Communication,
        t13Ados2ReciprocalSocialInteraction,
        t14Ados2RestrictedAndRepetitiveBehaviors,
        t15Ados2Communication,
        t16Ados2ReciprocalSocialInteraction,
        t17ComplimentarySubtests,
        t18BriefValidityScales,
        t19BriefBehavioralRegulationIndexBri,
        t20BriefMetacognitionIndexMi,
        t21BriefGlobalExecutiveCompositeGec,
        t22Cars2Cars2stItems,
        t23Cars2Cars2hfItems,
        t24Conners3ContentScales,
        t25Conners3DsmSymptomScales,
        t26Conners3Indices,
        t27Conners3ScreenerItems,
        t28Conners3CriticalItems,
        t29Conners3ValidityScales,
        t30Conners3ContentScales,
        t31Conners3DsmSymptomScales,
        t32Conners3Indices,
        t33Conners3ScreenerItems,
        t34Conners3CriticalItems,
        t35Conners3ValidityScales,
        t36Conners3ContentScales,
        t37Conners3DsmSymptomScales,
        t38Conners3Indices,
        t39Conners3ScreenerItems,
        t40Conners3CriticalItems,
        t41Conners3ValidityScales,
        t42DasiiEarlyYearsCore,
        t43DasiiEarlyYearsDiagnostic,
        t44DasiiSchoolAgeCore,
        t45DasiiSchoolAgeDiagnostic,
        t46DasiiDiagnosticSubtests,
        t47RbansImmediateMemory,
        t48RbansVisuospatialConstructional,
        t49RbansLanguage,
        t50RbansAttention,
        t51RbansDelayedMemory,
        t52VinelandiiCommunicationDomain,
        t53VinelandiiDailyLivingSkillsDomain,
        t54VinelandiiSocializationDomain,
        t55VinelandiiMotorSkillsDomainOnlyAgesBirthThrough6,
        t56VinelandiiMaladaptiveBehaviorDomainOptional,
        t57WasiiiVerbalComprehension,
        t58WasiiiPerceptualReasoning,
        t59WiatiiiEarlyYearsCore,
        t60Wraml2VerbalMemoryIndex,
        t61Wraml2VisualMemoryIndex,
        t62Wraml2AttentionconcentrationIndex,
        t63Wraml2OptionalSubtests,
        t64Wraml2DelayRecallSubtests,
        t65Wraml2RecognitionSubtests,
        t66ValidityIndexes,
        t67ClinicalScales,
        t68AdaptiveScales,
        t69ContentScales,
        t70SchoolProblems,
        t71InternalizingProblems,
        t72Inattentionhyperactivity,
        t73PersonalAdjustment,
        t74SchoolProblems,
        t75InternalizingProblems,
        t76Inattentionhyperactivity,
        t77EmotionalSymptomsIndex,
        t78PersonalAdjustment,
        t79InternalizingProblems,
        t80Inattentionhyperactivity,
        t81EmotionalSymptomsIndex,
        t82PersonalAdjustment,
        t85ValidityIndexes,
        t86ClinicalScales,
        t87AdaptiveScales,
        t88ContentScales,
        t89ExternalizingProblems,
        t90InternalizingProblems,
        t91AdaptiveSkills,
        t92BehavioralSymptomsIndex,
        t93ExternalizingProblems,
        t94InternalizingProblems,
        t95SchoolProblems,
        t96AdaptiveSkills,
        t97BehavioralSymptomsIndex,
        t98ExternalizingProblems,
        t99InternalizingProblems,
        t100AdaptiveSkills,
        t101BehavioralSymptomsIndex,
        t102ExternalizingProblems,
        t103InternalizingProblems,
        t104AdaptiveSkills,
        t105BehavioralSymptomsIndex,
        t106WaisivVerbalComprehension,
        t107WaisivPerceptualReasoning,
        t108WaisivWorkingMemory,
        t109WaisivProcessingSpeed,
        t110PiyCognitiveImpairmentScale,
        t111PiyImpulsivityAndDistractibilityScale,
        t112PiyDelinquencyScale,
        t113PiyFamilyDysfunctionScale,
        t114PiyRealityDistortionScale,
        t115PiySomaticConcernScale,
        t116PiyPsychologicalDiscomfortScale,
        t117PiySocialWithdrawalScale,
        t118PiySocialSkillDeficitScale,
        t119McmiivClinicalPersonalityPatterns,
        t120McmiivSeverePersonalityPathology,
        t121McmiivClinicalSyndromes,
        t122McmiivSevereClinicalSyndromes,
        t123McmiivModifyingIndices,
        t124McmiivRandomResponseIndicators,
        t125Mmpi2ClinicalScales,
        t126Mmpi2ValidityScales,
        t127MmpiaValidityScales,
        t128NepsyiiAttentionAndExecutiveFunctioning,
        t129NepsyiiLanguage,
        t130NepsyiiMemoryAndLearning,
        t131NepsyiiSensorimotor,
        t132NepsyiiSocialPerception,
        t133NepsyiiVisuospatialProcessing,
        t134WjivCogComprehensionKnowledgeGc,
        t135WjivCogFluidReasoningGf,
        t136WjivCogShortTermWorkingMemoryGwm,
        t137WjivCogCognitiveProcessingSpeedGs,
        t138WjivCogAuditoryProcessingSpeedGa,
        t139WjivCogLongTermRetrievalGlr,
        t140WjivCogVisualProcessingGv,
        t142TsccValidityScale,
        t143TsccClinicalScale,
        t144WjivAchBasicReadingSkills,
        t146WjivAchReadingComprehensionExtended,
        t147WjivAchMathCalculationSkills,
        t148WjivAchMathReasoning,
        t149WjivAchWrittenExpression,
        t150WjivAchWritingRelatedSubtest,
        t151Ctoni2Principals,
        t152Ctoni2Composites,
        t153VerbalComprehension,
        t154FluidReasoning,
        t155VisualSpatialReasoning,
        t156WorkingMemory,
        t157ProcessingSpeed,
        t158WppsiivLanguage,
        t159EmotionalSymptomsIndex,
        t160MmpiaClinical,
        // Subtest scores
        t1SimilaritiesScore,
        t2VocabularyScore,
        t3InformationScore,
        t4ComprehensionScore,
        t5BlockDesignScore,
        t6VocabularyScore,
        t7MatrixReasoningScore,
        t8FigureWeightsScore,
        t9PictureConceptsScore,
        t10ArithmeticScore,
        t11DigitSpanScore,
        t12PictureSpanScore,
        t13LetterNumberSequencingScore,
        t14CodingScore,
        t15SymbolSearchScore,
        t16CancellationScore,
        t17Ados2FrequencyOfSpontaneousVocalizationDirectedToOthersA2Score,
        t18Ados2PointingA7Score,
        t19Ados2GesturesA8Score,
        t20Ados2UnusualEyeContactB1Score,
        t21Ados2FacialExpressionsDirectedToOthersB3Score,
        t22Ados2IntegrationOfGazeAndOtherBehaviorsDuringSocialOverturesB4Score,
        t23Ados2SharedEnjoymentInInteractionB5Score,
        t24Ados2ShowingB9Score,
        t25Ados2SpontaneousInitiationOfJointAttentionB10Score,
        t26Ados2ResponseToJointAttentionB11Score,
        t27Ados2QualityOfSocialOverturesB12Score,
        t28Ados2IntonationOfVocalizationsOrVerbalizationsA3Score,
        t29Ados2StereotypedIdiosyncraticUseOfWordsOrPhrasesA5Score,
        t30Ados2UnusualSensoryInterestInPlayMaterialPersonD1Score,
        t31Ados2HandAndFingerAndOtherComplexMannerismsD2Score,
        t32Ados2UnusuallyRepetitiveInterestsOrStereotypedBehaviorsD4Score,
        t33Ados2PointingA6Score,
        t34Ados2DescriptiveConventionalInstrumentalOrInformationalGesturesA7Score,
        t35Ados2UnusualEyeContactB1Score,
        t36Ados2FacialExpressionsDirectedToOthersB2Score,
        t37Ados2SharedEnjoymentInInteractionB3Score,
        t38Ados2ShowingB5Score,
        t39Ados2SpontaneousInitiationOfJointAttentionB6Score,
        t40Ados2QualityOfSocialOverturesB8Score,
        t41Ados2AmountOfReciprocalSocialCommunicationB11Score,
        t42Ados2OverallQualityOfRapportB12Score,
        t43Ados2StereotypedIdiosyncraticUseOfWordsOrPhrasesA4Score,
        t44Ados2UnusualSensoryInterestInPlayMaterialPersonD1Score,
        t45Ados2HandAndFingerAndOtherComplexMannerismsD2Score,
        t46Ados2UnusuallyRepetitiveInterestsOrStereotypedBehaviorsScore,
        t47Ados2ReportingOfEventsA7Score,
        t48Ados2ConversationA8Score,
        t49Ados2DescriptiveConventionalInstrumentalOrInformationalGesturesA9Score,
        t50Ados2UnusualEyeContactB1Score,
        t51Ados2FacialExpressionsDirectedToExaminerB2Score,
        t52Ados2SharedEnjoymentInInteractionB3Score,
        t53Ados2SharedEnjoymentInInteractionB4Score,
        t54Ados2QualityOfSocialOverturesB7Score,
        t55Ados2QualityOfSocialResponseB9Score,
        t56Ados2AmountOfReciprocalSocialCommunicationB10Score,
        t57Ados2OverallQualityOfRapportB11Score,
        t58Ados2StereotypedIdiosyncraticUseOfWordsOrPhrasesA4Score,
        t59Ados2UnusualSensoryInterestInPlayMaterialPersonD1Score,
        t60Ados2HandAndFingerAndOtherComplexMannerismsD2Score,
        t61Ados2UnusuallyRepetitiveInterestsOrStereotypedBehaviorsScore,
        t62Ados2StereotypedIdiosyncraticUseOfWordsOrPhrasesA4Score,
        t63Ados2ConversationA8Score,
        t64Ados2DescriptiveConventionalInstrumentalOrInformationalGesturesA9Score,
        t65Ados2EmphaticOrEmotionalGesturesA10Score,
        t66Ados2UnusualEyeContactB1Score,
        t67Ados2FacialExpressionsDirectedToExaminerB2Score,
        t68Ados2CommentsOnOthersEmotionsEmpathyB6Score,
        t69Ados2ResponsibilityB8Score,
        t70Ados2QualityOfSocialOverturesB9Score,
        t71Ados2QualityOfSocialResponseB11Score,
        t72Ados2AmountOfReciprocalSocialCommunicationB12Score,
        t73NamingSpeedLiteracyScore,
        t74NamingSpeedQualityScore,
        t75ImmediateSymbolTranslationScore,
        t76DelayedSymbolTranslationScore,
        t77RecognitionSymbolTranslationScore,
        t30NelsonDennyStandardScore,
        t30NelsonDennyPercentile,
        t30NelsonDennyGradeEquivalent,
        t31NelsonDennyStandardScore,
        t31NelsonDennyPercentile,
        t31NelsonDennyGradeEquivalent,
        t34Gort5PercentileScore,
        t35Gort5PercentileScore,
        t35Gort5AgeLevelEquivalencyScore,
        t36Gort5PercentileScore,
        t36Gort5AgeLevelEquivalencyScore,
        t37Gort5PercentileScore,
        t37Gort5AgeLevelEquivalencyScore,
        t38Gort5AgeLevelEquivalencyScore,
        t46QikCptAccuracyIndexScore,
        t47QikCptSustainedAttentionScore,
        t48QikCptImpulseControlScore,
        t49QikCptPerformanceIndexScore,
        t50QikCptSpeedOfResponseScore,
        t51QikCptConsistencyOfResponseScore,
        t78InconsistencyScaleScore,
        t79NegativityScaleScore,
        t82InhibitScore,
        t83ShiftScore,
        t84EmotionalControlScore,
        t85InitiateScore,
        t86WorkingMemoryScore,
        t87PlanOrganizeScore,
        t88OrganizationOfMaterialsScore,
        t89MonitorScore,
        t90InhibitScore,
        t91ShiftScore,
        t92EmotionalControlScore,
        t93InitiateScore,
        t94WorkingMemoryScore,
        t95PlanOrganizeScore,
        t96OrganizationOfMaterialsScore,
        t97MonitorScore,
        t98RelatingToPeopleScore,
        t99ImitationScore,
        t100EmotionalResponseScore,
        t101BodyUseScore,
        t102ObjectUseScore,
        t103AdaptionToChangeScore,
        t104VisualResponseScore,
        t105ListeningResponseScore,
        t106TasteSmellAndTouchResponseAndUseScore,
        t107FearOrNervousnessScore,
        t108VerbalCommunicationScore,
        t109NonverbalCommunicationScore,
        t110ActivityLevelScore,
        t111LevelAndConsistencyOfIntellectualResponseScore,
        t112GeneralImpressionsScore,
        t113SocialEmotionalUnderstandingScore,
        t114EmotionalExpressionAndRegulationOfEmotionsScore,
        t115RelatingToPeopleScore,
        t116BodyUseScore,
        t117ObjectUseInPlayScore,
        t118VisualResponseScore,
        t119ListeningResponseScore,
        t646AdaptationToChangeRestrictedInterestsScore,
        t120InattentionScore,
        t121HyperactivityImpulsivityScore,
        t122LearningProblemsScore,
        t123ExecutiveFunctioningScore,
        t124DefianceAggressionScore,
        t125PeerRelationsScore,
        t126AdhdInattentiveScore,
        t127AdhdHyperactiveImpulsiveScore,
        t128ConductDisorderScore,
        t129OppositionalDefiantDisorderScore,
        t130Conners3AdhdIndexScore,
        t131Conners3GlobalIndexScore,
        t132AnxietyScore,
        t133DepressionScore,
        t134SevereConductScore,
        t135PositiveImpressionScore,
        t136NegativeImpressionScore,
        t137InconsistencyIndexScore,
        t138InattentionScore,
        t139HyperactivityImpulsivityScore,
        t140LearningProblemsExecutiveFunctioningScore,
        t141LearningProblemsScore,
        t142ExecutiveFunctioningScore,
        t143DefianceAggressionScore,
        t144PeerRelationsScore,
        t145AdhdInattentiveScore,
        t146AdhdHyperactiveImpulsiveScore,
        t147ConductDisorderScore,
        t148OppositionalDefiantDisorderScore,
        t149Conners3AdhdIndexScore,
        t150Conners3GlobalIndexScore,
        t151AnxietyScore,
        t152DepressionScore,
        t153SevereConductScore,
        t154PositiveImpressionScore,
        t155NegativeImpressionScore,
        t156InconsistencyIndexScore,
        t157InattentionScore,
        t158HyperactivityImpulsivityScore,
        t159LearningProblemsScore,
        t160DefianceAggressionScore,
        t161FamilyRelationsScore,
        t162AdhdInattentiveScore,
        t163AdhdHyperactiveImpulsiveScore,
        t164ConductDisorderScore,
        t165OppositionalDefiantDisorderScore,
        t166Conners3AdhdIndexScore,
        t644AnxietyScore,
        t167DepressionScore,
        t168SevereConductScore,
        t169PositiveImpressionScore,
        t170NegativeImpressionScore,
        t171InconsistencyIndexScore,
        t172PictorialAnalogiesScore,
        t173GeometricAnalogiesScore,
        t174PictorialCategoriesScore,
        t175GeometricCategoriesScore,
        t176PictorialSequencesScore,
        t177GeometricSequencesScore,
        t178PictorialScaleScore,
        t179GeometricScaleScore,
        t180FullScaleScore,
        t181VerbalComprehensionScore,
        t182PictureSimilaritiesScore,
        t183NamingVocabularyScore,
        t184RecallOfObjectsImmediateScore,
        t185PatternConstructionScore,
        t186MatricesScore,
        t187RecallOfObjectsDelayedScore,
        t188CopyingScore,
        t189RecallOfDesignsScore,
        t190WordDefinitionsScore,
        t191RecallOfObjectsImmediateScore,
        t192PatternConstructionScore,
        t193MatricesScore,
        t194RecallOfObjectsDelayedScore,
        t195VerbalSimilaritiesScore,
        t196SequentialAndQuantitativeReasoningScore,
        t197RecallOfDigitsForwardScore,
        t198RecognitionOfPicturesScore,
        t199EarlyNumberConceptsScore,
        t200MatchingLetterLikeFormsScore,
        t201RecallOfSequentialOrderScore,
        t202SpeedOfInformationProcessingScore,
        t203RecallOfDigitsBackwardScore,
        t204PhonologicalProcessingScore,
        t205RapidNamingScore,
        t206TrailMakingTestScore,
        t207VerbalFluencyTestScore,
        t208DesignFluencyTestScore,
        t209ColorWordInterferenceTestScore,
        t210SortingTestScore,
        t211TwentyQuestionsTestScore,
        t212WordContextTestScore,
        t213TowerTestScore,
        t214ProverbTestScore,
        t215RestrictiveRepetitiveBehaviorsScore,
        t216SocialInteractionScore,
        t217SocialCommunicationScore,
        t218EmotionalResponsesScore,
        t219CognitiveStyleScore,
        t220MaladaptiveSpeechScore,
        t221ListLearningScore,
        t222StoryMemoryScore,
        t223FigureCopyScore,
        t224LineOrientationScore,
        t225PictureNamingScore,
        t226SemanticFluencyScore,
        t227DigitSpanScore,
        t228CodingScore,
        t229ListRecallScore,
        t230ListRecognitionScore,
        t231StoryRecallScore,
        t232FigureRecallScore,
        t233ReceptiveScore,
        t234ExpressiveScore,
        t235WrittenScore,
        t236PersonalScore,
        t237DomesticScore,
        t238CommunityScore,
        t239InterpersonalRelationshipsScore,
        t240PlayAndLeisureTimeScore,
        t241CopingSkillsScore,
        t242GrossScore,
        t243FineScore,
        t244MaladaptiveBehaviorIndexScore,
        t245MaladaptiveBehaviorCriticalItemsScore,
        t246SimilaritiesScore,
        t247VocabularyScore,
        t248BlockDesignScore,
        t249MatrixReasoningScore,
        t250ListeningComprehensionGradesPK12Score,
        t251EarlyReadingSkillsGradesPK3Score,
        t252ReadingComprehensionGrades112Score,
        t253MathProblemSolvingGradesPK12Score,
        t254AlphabetWritingFluencyGradesPK3Score,
        t255SentenceCompositionGrades112Score,
        t256WordReadingGrades112Score,
        t257EssayCompositionGrades312Score,
        t258PseudowordDecodingGrades112Score,
        t259NumericalOperationsGradesK12Score,
        t260OralExpressionGradesPK12Score,
        t261OralReadingFluencyGrades112Score,
        t262SpellingGradesK12Score,
        t263MathFluencyAdditionScore,
        t264MathFluencySubtractionScore,
        t265MathFluencyMultiplicationScore,
        t266StoryMemoryScore,
        t267VerbalLearningScore,
        t268DesignMemoryScore,
        t269PictureMemoryScore,
        t270FingerWindowsScore,
        t271NumberLetterScore,
        t272SentenceMemoryScore,
        t273SoundSymbolScore,
        t274VerbalWorkingMemoryScore,
        t275SymbolicWorkingMemoryScore,
        t276StoryMemoryDelayRecallScore,
        t277VerbalLearningDelayRecallScore,
        t278SoundSymbolDelayRecallScore,
        t279StoryMemoryRecognitionScore,
        t280VerbalLearningRecognitionScore,
        t281DesignMemoryRecognitionScore,
        t282PictureMemoryRecognitionScore,
        t283FIndexScore,
        t284LIndexScore,
        t285VIndexScore,
        t286AlcoholAbuseScore,
        t288AttentionProblemsScore,
        t289AttitudeToSchoolScore,
        t287AnxietyScore,
        t290AttitudeToTeachersScore,
        t291AtypicalityScore,
        t292DepressionScore,
        t293HyperactivityScore,
        t294LocusOfControlScore,
        t295SchoolMaladjustmentScore,
        t298SocialStressScore,
        t296SensationSeekingScore,
        t297SenseOfInadequacyScore,
        t299SomatizationScore,
        t300InterpersonalRelationsScore,
        t301RelationsWithParentsScore,
        t302SelfEsteemScore,
        t303SelfRelianceScore,
        t304AngerControlScore,
        t305EgoStrengthScore,
        t306ManiaScore,
        t307TestAnxietyScore,
        t308AttitudeToSchoolScore,
        t309AttitudeToTeachersScore,
        t310AtypicalityScore,
        t311LocusOfControlScore,
        t312SocialStressScore,
        t313AnxietyScore,
        t314DepressionScore,
        t315SenseOfInadequacyScore,
        t316AttentionProblemsScore,
        t317HyperactivityScore,
        t318SocialStressScore,
        t319AnxietyScore,
        t320DepressionScore,
        t323SelfRelianceScore,
        t321SenseOfInadequacyScore,
        t322SelfEsteemScore,
        t662SocialStressScore,
        t664AnxietyScore,
        t665DepressionScore,
        t666SenseOfInadequacyScore,
        t667SelfEsteemScore,
        t668SelfRelianceScore,
        t324InterpersonalRelationsScore,
        t325RelationsWithParentsScore,
        t327SelfRelianceScore,
        t326SelfEsteemScore,
        t328AttitudeToSchoolScore,
        t329AttitudeToTeachersScore,
        t330SensationSeekingScore,
        t331AtypicalityScore,
        t332LocusOfControlScore,
        t333SocialStressScore,
        t334AnxietyScore,
        t335DepressionScore,
        t336SenseOfInadequacyScore,
        t337SomatizationScore,
        t338AttentionProblemsScore,
        t339HyperactivityScore,
        t340SocialStressScore,
        t341AnxietyScore,
        t342DepressionScore,
        t345SelfRelianceScore,
        t343SenseOfInadequacyScore,
        t344SelfEsteemScore,
        t346InterpersonalRelationsScore,
        t347RelationsWithParentsScore,
        t349SelfRelianceScore,
        t348SelfEsteemScore,
        t350AtypicalityScore,
        t351LocusOfControlScore,
        t352SocialStressScore,
        t353AnxietyScore,
        t354DepressionScore,
        t355SenseOfInadequacyScore,
        t356SomatizationScore,
        t357AttentionProblemsScore,
        t358HyperactivityScore,
        t359SocialStressScore,
        t360AnxietyScore,
        t361DepressionScore,
        t364SelfRelianceScore,
        t362SenseOfInadequacyScore,
        t363SelfEsteemScore,
        t365InterpersonalRelationsScore,
        t366RelationsWithParentsScore,
        t368SelfRelianceScore,
        t367SelfEsteemScore,
        t369FIndexScore,
        t370AggressionScore,
        t372AttentionProblemsScore,
        t371AnxietyScore,
        t373AtypicalityScore,
        t374ConductProblemsScore,
        t375DepressionScore,
        t376HyperactivityScore,
        t377LearningProblemsScore,
        t378SomatizationScore,
        t379WithdrawalScore,
        t380ActivitiesOfDailyLivingScore,
        t381AdaptabilityScore,
        t382FunctionalCommunicationScore,
        t383LeadershipScore,
        t384SocialSkillsScore,
        t385StudySkillsScore,
        t386AngerControlScore,
        t387BullyingScore,
        t388DevelopmentalSocialDisordersScore,
        t389EmotionalSelfControlScore,
        t390ExecutiveFunctioningScore,
        t391NegativeEmotionalityScore,
        t392ResiliencyScore,
        t393HyperactivityScore,
        t394AggressionScore,
        t395AnxietyScore,
        t396DepressionScore,
        t397SomatizationScore,
        t398AdaptabilityScore,
        t399SocialSkillsScore,
        t400FunctionalCommunicationScore,
        t401HyperactivityScore,
        t402AggressionScore,
        t403DepressionScore,
        t404AttentionProblemsScore,
        t406WithdrawalScore,
        t405AtypicalityScore,
        t407HyperactivityScore,
        t408AggressionScore,
        t409ConductProblemsScore,
        t410AnxietyScore,
        t411DepressionScore,
        t412SomatizationScore,
        t413LearningProblemsScore,
        t414AttentionProblemsScore,
        t415AdaptabilityScore,
        t416SocialSkillsScore,
        t417FunctionalCommunicationScore,
        t418LeadershipScore,
        t419StudySkillsScore,
        t420HyperactivityScore,
        t421AggressionScore,
        t422DepressionScore,
        t423AttentionProblemsScore,
        t425WithdrawalScore,
        t424AtypicalityScore,
        t426HyperactivityScore,
        t427AggressionScore,
        t428AnxietyScore,
        t429DepressionScore,
        t430SomatizationScore,
        t431AdaptabilityScore,
        t432SocialSkillsScore,
        t433FunctionalCommunicationScore,
        t434ActivitiesOfDailyLivingScore,
        t435HyperactivityScore,
        t436AggressionScore,
        t437DepressionScore,
        t438AttentionProblemsScore,
        t439AtypicalityScore,
        t440WithdrawalScore,
        t441HyperactivityScore,
        t442AggressionScore,
        t443ConductProblemsScore,
        t444AnxietyScore,
        t445DepressionScore,
        t446SomatizationScore,
        t447AdaptabilityScore,
        t448SocialSkillsScore,
        t449FunctionalCommunicationScore,
        t450ActivitiesOfDailyLivingScore,
        t451HyperactivityScore,
        t452AggressionScore,
        t453DepressionScore,
        t454AttentionProblemsScore,
        t455AtypicalityScore,
        t456WithdrawalScore,
        t459InformationScore,
        t457SimilaritiesScore,
        t458VocabularyScore,
        t460ComprehensionScore,
        t461BlockDesignScore,
        t462MatrixReasoningScore,
        t463VisualPuzzlesScore,
        t464FigureWeightsScore,
        t465PictureCompletionScore,
        t466DigitSpanScore,
        t467ArithmeticScore,
        t468LetterNumberSequencingScore,
        t469CodingScore,
        t470SymbolSearchScore,
        t471CancellationScore,
        t472PoorAchievementAndMemoryScore,
        t472PiyPoorAchievementAndMemoryPercentileRank,
        t473InadequateAbilitiesScore,
        t473PiyInadequateAbilitiesPercentileRank,
        t474LearningProblemsScore,
        t474PiyLearningProblemsPercentileRank,
        t475BrashnessScore,
        t475PiyBrashnessPercentileRank,
        t476PiyDistractibilityAndOveractivityPercentileRank,
        t476DistractibilityAndOveractivityScore,
        t477ImpulsivityScore,
        t477PiyImpulsivityPercentileRank,
        t478AntisocialBehaviorScore,
        t478PiyAntisocialBehaviorPercentileRank,
        t479DyscontrolScore,
        t479PiyDyscontrolPercentileRank,
        t480NoncomplianceScore,
        t480PiyNoncompliancePercentileRank,
        t481ParentChildConflictScore,
        t481PiyParentChildConflictPercentileRank,
        t482ParentMaladjustmentScore,
        t482PiyParentMaladjustmentPercentileRank,
        t483MaritalDiscordScore,
        t483PiyMaritalDiscordPercentileRank,
        t484FeelingsOfAlienationScore,
        t484PiyFeelingsOfAlienationPercentileRank,
        t485HallucinationsAndDelusionsScore,
        t485PiyHallucinationsAndDelusionsPercentileRank,
        t486PsychosomaticSyndromeScore,
        t486PiyPsychosomaticSyndromePercentileRank,
        t487MuscularTensionAndAnxietyScore,
        t487PiyMuscularTensionAndAnxietyPercentileRank,
        t488PreoccupationWithDiseaseScore,
        t488PiyPreoccupationWithDiseasePercentileRank,
        t489FearAndWorryScore,
        t489PiyFearAndWorryPercentileRank,
        t490DepressionScore,
        t490PiyDepressionPercentileRank,
        t491SleepDisturbanceScore,
        t491PiySleepDisturbancePercentileRank,
        t492SocialIntroversionScore,
        t492PiySocialIntroversionPercentileRank,
        t493IsolationScore,
        t493PiyIsolationPercentileRank,
        t494LimitedPeerStatusScore,
        t494PiyLimitedPeerStatusPercentileRank,
        t495ConflictWithPeersScore,
        t495PiyConflictWithPeersPercentileRank,
        t496Schizoid1Score,
        t497Avoidant2AScore,
        t498Depressive2BScore,
        t499Dependent3Score,
        t500Histrionic4Score,
        t501Narcissistic5Score,
        t502Antisocial6AScore,
        t503SadisticAggressive6BScore,
        t504Compulsive7Score,
        t505NegativisticPassiveAggressive8AScore,
        t506MasochisticSelfDefeating8BScore,
        t507SchizotypalSScore,
        t508BorderlineCScore,
        t509ParanoidPScore,
        t510AnxietyAScore,
        t511SomatoformHScore,
        t512BipolarManicNScore,
        t513DysthymiaDScore,
        t514AlcoholDependencebScore,
        t515DrugDependenceTScore,
        t516PostTraumaticStressDisorderRScore,
        t517ThoughtDisorderSSScore,
        t518MajorDepressionCCScore,
        t519DelusionalDisorderPPScore,
        t520DisclosureXScore,
        t521DesirabilityYScore,
        t522DebasementZScore,
        t523InvalidityVScore,
        t524InconsistencyWScore,
        t525HypochondriasisHsScore,
        t526DepressionDScore,
        t527HysteriaHyScore,
        t528PsychopathicDeviatePdScore,
        t529MasculinityFemininityMfScore,
        t530ParanoiaPaScore,
        t531PsychastheniaPtScore,
        t532SchizophreniaScScore,
        t533HypomaniaMaScore,
        t534SocialIntroversionSiScore,
        t535LieLScore,
        t536FScore,
        t537BackFFbScore,
        t538KScore,
        t539HypochondriasisHsScore,
        t540DepressionDScore,
        t541HysteriaHyScore,
        t542PsychopathicDeviatePdScore,
        t543MasculinityFemininityMfScore,
        t544ParanoiaPaScore,
        t545PsychastheniaPtScore,
        t546SchizophreniaScScore,
        t547HypomaniaMaScore,
        t548SocialIntroversionSiScore,
        t549CNSScore,
        t550VRINScore,
        t551TRINScore,
        t552FScore,
        t553F1Score,
        t554F2Score,
        t555LScore,
        t556KScore,
        t557AnimalSortingASScore,
        t558AuditoryAttentionAAAndResponseSetRSScore,
        t559ClocksCLScore,
        t560DesignFluencyDFScore,
        t561InhibitionINScore,
        t562StatueSTScore,
        t563BodyPartNamingBPNAndIdentificationBPIScore,
        t564ComprehensionOfInstructionsCIScore,
        t565OromotorSequencesOSScore,
        t566PhonologicalProcessingPHScore,
        t567RepetitionNonsenseWordsRNScore,
        t568SpeededNamingSNScore,
        t569WordGenerationWGScore,
        t571ListMemoryLMListMemoryDelayedLMDScore,
        t572MemoryForDesignsMDMemoryForDesignsDelayedMDDScore,
        t573MemoryForFacesMFMemoryForFacesDelayedMFDScore,
        t574MemoryForNamesMNMemoryForNamesDelayedMNDScore,
        t575NarrativeMemoryNMScore,
        t576SentenceRepetitionSRScore,
        t577WordListInterferenceWIScore,
        t578FingertipTappingFTScore,
        t579ImitatingHandPositionsIHScore,
        t580ManualMotorSequencesMMScore,
        t581VisuomotorPrecisionVPScore,
        t582AffectRecognitionARScore,
        t583TheoryOfMindTMScore,
        t584ArrowsAWScore,
        t585BlockConstructionBCScore,
        t586DesignCopyingDCScore,
        t587GeometricPuzzlesGPScore,
        t588PicturePuzzlesPPScore,
        t589RouteFindingRFScore,
        t590DrawingScore,
        t591MatchingScore,
        t592PegboardScore,
        t593VocabularyScore,
        t594GeneralInformationScore,
        t595NumberSeriesScore,
        t596ConceptFormationScore,
        t597AnalysisSynthesisScore,
        t598VerbalAttentionScore,
        t599NumbersReversedScore,
        t600ObjectNumberSequencingScore,
        t601PairCancellationScore,
        t645LetterPatternMatchingScore,
        t602PhonologicalProcessingScore,
        t603NonWordRepetitionScore,
        t604RecallScore,
        t605VisualAuditoryLearningScore,
        t606VisualizationScore,
        t607PictureRecognitionScore,
        t608UnderresponseUNDScore,
        t609HyperresponseHYPScore,
        t610AnxietyANXScore,
        t611DepressionDEPScore,
        t612AngerANGScore,
        t613PosttraumaticStressPTSScore,
        t614DissociationDISScore,
        t615SexualConcernsSCScore,
        t616LetterWordIdentificationScore,
        t617WordAttackScore,
        t618PassageComprehensionScore,
        t619ReadingRecallScore,
        t620ReadingVocabularyScore,
        t621CalculationScore,
        t622MathFactFluencyScore,
        t623AppliedProblemsScore,
        t624NumberMatricesScore,
        t625WritingSamplesScore,
        t626SentenceWritingFluencyScore,
        t627OralReadingScore,
        t628SentenceReadingFluencyScore,
        t629SpellingScore,
        t630SpellingOfSoundsScore,
        t631EditingScore,
        t632ScienceScore,
        t633SocialStudiesScore,
        t634HumanitiesScore,
        t635WordAttackScore,
        t636SpellingOfSoundsScore,
        t637BriefCognitiveStatusExamScore,
        t638LogicalMemoryScore,
        t639VerbalPairedAssociatesScore,
        t640DesignsScore,
        t641VisualReproductionScore,
        t642SpatialAdditionScore,
        t643SymbolSpanScore,
        t647SimilaritiesScore,
        t648VocabularyScore,
        t649InformationScore,
        t650ComprehensionScore,
        t653BlockDesignScore,
        t654ObjectAssemblyScore,
        t657BugSearchScore,
        t658CancellationScore,
        t659AnimalCodingScore,
        t651MatrixReasoningScore,
        t652PictureConceptsScore,
        t655PictureMemoryScore,
        t656ZooLocationsScore,
        t660ReceptiveVocabularyScore,
        t661PictureNamingScore,
        t669BeeryMotorIntegrationVMIScore,
        t670BeeryVisualPerceptionScore,
        t671BeeryMotorCoordinationScore,
        t672ListeningComprehensionGradesPK12Score,
        t673OralExpressionGradesPK12Score,
        t674EarlyReadingSkillsGradesPK3Score,
        t675ReadingComprehensionGrades112Score,
        t676WordReadingGrades112Score,
        t677PseudowordDecodingGrades112Score,
        t678OralReadingFluencyGrades112Score,
        t679SpellingGradesK12Score,
        t680AlphabetWritingFluencyGradesPK3Score,
        t681SentenceCompositionGrades112Score,
        t682EssayCompositionGrades312Score,
        t683NumericalOperationsGradesK12Score,
        t684MathProblemSolvingGradesPK12Score,
        t685MathFluencyAdditionScore,
        t686MathFluencySubtractionScore,
        t687MathFluencyMultiplicationScore,
        t688VocabularyScore,
        t689ComprehensionScore,
        t690ReadingRateScore,
        t698VisualScanningScore,
        t699NumberSequencingScore,
        t700LetterSequencingScore,
        t701CombinedNumberAndLetterSequencingScore,
        t702NumberLetterSwitchingScore,
        t703MotorSpeedScore,
        t704LetterFluencyScore,
        t705CategoryFluencyScore,
        t706CategorySwitchingScore,
        t707FilledDotsScore,
        t708EmptyDotsOnlyScore,
        t709SwitchingScore,
        t710ColorNamingScore,
        t711WordReadingScore,
        t712InhibitionScore,
        t713InhibitionSwitchingScore,
        t714FreeSortingScore,
        t715SortRecognitionScore,
        t716Item1Score,
        t717Item2Score,
        t718Item3Score,
        t719Item4Score,
        t720Item1Score,
        t721Item2Score,
        t722Item1TwoDisksScore,
        t723Item2TwoDisksScore,
        t724Item3TwoDisksScore,
        t725Item4ThreeDisksScore,
        t726Item5ThreeDisksScore,
        t727Item6FourDisksScore,
        t728Item7FourDisksScore,
        t729Item8FiveDisksScore,
        t730Item9FiveDisksScore,
        t731FreeInquiryScore,
        t732MultipleChoiceScore,
        t733RateScore,
        t734AccuracyScore,
        t735FluencyScore,
        t736ComprehensionScore,
        t737Trail1Score,
        t738Trial2Score,
        t739RetentionTrialScore,
        t743VerbalComprehensionScore,
        t744PictureSimilaritiesScore,
        t745NamingVocabularyScore,
        t746PatternConstructionScore,
        t747MatricesScore,
        t748CopyingScore,
        t749RecallOfObjectsImmediateScore,
        t750RecallOfObjectsDelayedScore,
        t751RecallOfDigitsForwardScore,
        t752RecognitionOfPicturesScore,
        t753EarlyNumberConceptsScore,
        t754MatchingLetterLikeFormsScore,
        t755RecallOfSequentialOrderScore,
        t756SpeedOfInformationProcessingScore,
        t757RecallOfDigitsBackwardScore,
        t758PhonologicalProcessingScore,
        t759RapidNamingScore,
        t760RecallOfDesignsScore,
        t761WordDefinitionsScore,
        t762PatternConstructionScore,
        t763MatricesScore,
        t764VerbalSimilaritiesScore,
        t765SequentialAndQuantitativeReasoningScore,
        t766RecallOfObjectsImmediateScore,
        t767RecallOfObjectsDelayedScore,
        t768RecallOfDigitsForwardScore,
        t769RecognitionOfPicturesScore,
        t770RecallOfSequentialOrderScore,
        t771SpeedOfInformationProcessingScore,
        t772RecallOfDigitsBackwardScore,
        t773PhonologicalProcessingScore,
        // Conditional scores
        t1IfFsiqIsMeaningful,
        t1WiscvFullScaleIqCompositeScore,
        t1WiscvFullScaleIqCompositePercentile,
        t1WiscvFullScaleIqCompositeRange,
        t5IfFsiqIsMeaningful,
        t5WaisivFullScaleIqCompositeScore,
        t5WaisivFullScaleIqCompositePercentile,
        t5WaisivFullScaleIqCompositeRange,
        t7IfGiaIsMeaningful,
        t7WjivCogGeneralIntellectualAbilityGiaCompositeRange,
        t7WjivCogGeneralIntellectualAbilityGiaCompositeScore,
        t7WjivCogGeneralIntellectualAbilityGiaCompositePercentile,
        t9IfFsiqIsMeaningful,
        t9WppsiivFullScaleIqCompositeScore,
        t9WppsiivFullScaleIqCompositePercentile,
        t9WppsiivFullScaleIqCompositeRange,
        t9WppsiivGaiCompositeScore,
        t57WasiiiVerbalComprehensionConsistent,
        t57WasiiiVerbalComprehensionCompositeScore,
        t57WasiiiVerbalComprehensionCompositePercentile,
        t57WasiiiVerbalComprehensionCompositeRange,
        // GCA, GAI, SNC scores
        t2WiscvGaiCompositeScore,
        t2WiscvGaiPercentile,
        t2WiscvGaiRange,
        t6WaisivGaiCompositeScore,
        t6WaisivGaiRange,
        t6WaisivGaiPercentile,
        t9WppsiivGaiRange,
        t9WppsiivGaiPercentile,
        t10DasiiGcaScore,
        t10DasiiGcaRange,
        t10DasiiGcaPercentile,
        t10DasiiSncScore,
        t10DasiiSncRange,
        t10DasiiSncPercentile,
        // TestScoringTableScores
        t36Gort5GradeLevelEquivalencyScore,
        t37Gort5GradeLevelEquivalencyScore,
        t38Gort5GradeLevelEquivalencyScore,
        t39Gort5GradeLevelEquivalencyScore,
        t57WasiiiVerbalComprehensionInconsistent,
        t57WasiiiVerbalComprehensionFreehandPerformance,
        t58WasiiiPerceptualReasoningConsistent,
        t58WasiiiPerceptualReasoningInconsistent,
        t58WasiiiPerceptualReasoningCompositeScore,
        t58WasiiiPerceptualReasoningCompositePercentile,
        t58WasiiiPerceptualReasoningCompositeRange,
        t58WasiiiPerceptualReasoningFreehandPerformance,
        t106WaisivVerbalComprehensionConsistent,
        t106WaisivVerbalComprehensionInconsistent,
        t106WaisivVerbalComprehensionFreehandPerformance,
        t106WaisivVerbalComprehensionCompositeScore,
        t106WaisivVerbalComprehensionCompositePercentile,
        t106WaisivVerbalComprehensionCompositeRange,
        t107WaisivPerceptualReasoningConsistent,
        t107WaisivPerceptualReasoningInconsistent,
        t107WaisivPerceptualReasoningFreehandPerformance,
        t107WaisivPerceptualReasoningCompositeScore,
        t107WaisivPerceptualReasoningCompositePercentile,
        t107WaisivPerceptualReasoningCompositeRange,
        t108WaisivWorkingMemoryConsistent,
        t108WaisivWorkingMemoryInconsistent,
        t108WaisivWorkingMemoryFreehandPerformance,
        t108WaisivWorkingMemoryCompositeScore,
        t108WaisivWorkingMemoryCompositePercentile,
        t108WaisivWorkingMemoryCompositeRange,
        t109WaisivProcessingSpeedConsistent,
        t109WaisivProcessingSpeedInconsistent,
        t109WaisivProcessingSpeedFreehandPerformance,
        t109WaisivProcessingSpeedCompositeScore,
        t109WaisivProcessingSpeedCompositePercentile,
        t109WaisivProcessingSpeedCompositeRange,
        // Freehand recommendations
        rAdhdRecommendationsFreehand,
        rAutismRecommendationsFreehand,
        rDementiaRecommendationsFreehand,
        rDysthymiaRecommendationsFreehand,
        rLearningdisabilitymathematicsRecommendationsFreehand,
        rLearningdisabilityreadingRecommendationsFreehand,
        rNeurocognitivedisorderRecommendationsFreehand,
        rVisualprocessingweaknessforchildrenadultsRecommendationsFreehand,
        rVisualprocessingweaknessforchildrenRecommendationsFreehand,
        rLearningdisabilityinwritingdiagnosisforchildrenadultsRecommendationsFreehand,
        rLearningdisabilityinwritingdiagnosisforchildrenRecommendationsFreehand,
        rAuditoryprocessingweaknessforchildrenadultsRecommendationsFreehand,
        rAuditoryprocessingweaknessforchildrenRecommendationsFreehand,
        rTraumaPtsdRecommendationsFreehand,
        rPsychosisRecommendationsFreehand,
        rBehaviorchallengesRecommendationsFreehand,
        rSportsconcussionRecommendationsFreehand,
        rReactiveattachmentdisorderRecommendationsFreehand,
        rTraumaticbraininjuryRecommendationsFreehand,
        // Appendix summary of scores
        t1WiscvSummaryAbilities,
        t1WiscvSummaryChallenges,
        t2DasiiSummaryAbilities,
        t2DasiiSummaryChallenges,
        t3WasiiiSummaryAbilities,
        t3WasiiiSummaryChallenges,
        t4WiatiiiSummaryAbilities,
        t4WiatiiiSummaryChallenges,
        t5WaisivSummaryAbilities,
        t5WaisivSummaryChallenges,
        t6WjivcogSummaryAbilities,
        t6WjivcogSummaryChallenges,
        t7BeeryvmiSummaryAbilities,
        t7BeeryvmiSummaryChallenges,
        t9WppsiivSummaryAbilities,
        t9WppsiivSummaryChallenges,
        relevantBackgroundHistory,
        resultsCurrentAssessment,
        summaryCurrentSituation,
        dsmCodes,
        eduCodeIntellectualDisabilityId,
        eduCodeHardOfHearingHh,
        eduCodeDeafnessDeafHearingImpairmentHi,
        eduCodeSpeechOrLanguageImpairmentSli,
        eduCodeVisualImpairmentVi,
        eduCodeEmotionalDisturbanceEd,
        eduCodeOrthopedicImpairmentOi,
        eduCodeOtherHealthImpairmentOhi,
        eduCodeEstablishedMedicalDisabilityEmd,
        eduCodeSpecificLearningDisabilitySld,
        eduCodeDeafBlindnessDb,
        eduCodeMultipleDisabilitiesMd,
        eduCodeAutismAut,
        eduCodeTraumaticBrainInjuryTbi,
        recommendationAdhd,
        recommendationAutism,
        recommendationDementia,
        recommendationDysthymia,
        recommendationLearningDisabilityMathematics,
        recommendationLearningDisabilityReading,
        recommendationNeurocognitiveDisorder,
        recommendationVisualProcessingChildrenAdults,
        recommendationVisualProcessingChildren,
        recommendationLearningDisabilityWritingChildrenAdults,
        recommendationLearningDisabilityWritingChildren,
        recommendationAuditoryProcessingWeaknessChildrenAdults,
        recommendationAuditoryProcessingWeaknessChildren,
        // Appendix values
        t1WiscvVerbalComprehensionIndexVciCompositeScore,
        t2WiscvVisualSpatialIndexVsiCompositeScore,
        t3WasiiiFullScaleIq4CompositeScore,
        t3WiscvFluidReasoningIndexFriCompositeScore,
        t4WiscvWorkingMemoryIndexWmiCompositeScore,
        t5WiscvProcessingSpeedIndexPsiCompositeScore,
        t134WjivCogComprehensionKnowledgeGcCompositeScore,
        t135WjivCogFluidReasoningGfCompositeScore,
        t136WjivCogShortTermWorkingMemoryGwmCompositeScore,
        t137WjivCogCognitiveProcessingSpeedGsCompositeScore,
        t138WjivCogAuditoryProcessingSpeedGaCompositeScore,
        t139WjivCogLongTermRetrievalGlrCompositeScore,
        t140WjivCogVisualProcessingGvCompositeScore,
        t153WppsiIvVerbalComprehensionCompositeScore,
        t154WppsiIvFluidReasoningCompositeScore,
        t155WppsiIvVisualSpatialReasoningCompositeScore,
        t156WppsiIvWorkingMemoryCompositeScore,
        t157WppsiIvProcessingSpeedCompositeScore,
        t1WiscvVerbalComprehensionIndexVciCompositePercentile,
        t2WiscvVisualSpatialIndexVsiCompositePercentile,
        t3WasiiiFullScaleIq4CompositePercentile,
        t3WiscvFluidReasoningIndexFriCompositePercentile,
        t4WiscvWorkingMemoryIndexWmiCompositePercentile,
        t5WiscvProcessingSpeedIndexPsiCompositePercentile,
        t134WjivCogComprehensionKnowledgeGcCompositePercentile,
        t135WjivCogFluidReasoningGfCompositePercentile,
        t136WjivCogShortTermWorkingMemoryGwmCompositePercentile,
        t137WjivCogCognitiveProcessingSpeedGsCompositePercentile,
        t138WjivCogAuditoryProcessingSpeedGaCompositePercentile,
        t139WjivCogLongTermRetrievalGlrCompositePercentile,
        t140WjivCogVisualProcessingGvCompositePercentile,
        t153WppsiIvVerbalComprehensionCompositePercentile,
        t154WppsiIvFluidReasoningCompositePercentile,
        t155WppsiIvVisualSpatialReasoningCompositePercentile,
        t156WppsiIvWorkingMemoryCompositePercentile,
        t157WppsiIvProcessingSpeedCompositePercentile,
        t1WiscvVerbalComprehensionIndexVciCompositeRange,
        t2WiscvVisualSpatialIndexVsiCompositeRange,
        t3WasiiiFullScaleIq4CompositeRange,
        t3WiscvFluidReasoningIndexFriCompositeRange,
        t4WiscvWorkingMemoryIndexWmiCompositeRange,
        t5WiscvProcessingSpeedIndexPsiCompositeRange,
        t134WjivCogComprehensionKnowledgeGcCompositeRange,
        t135WjivCogFluidReasoningGfCompositeRange,
        t136WjivCogShortTermWorkingMemoryGwmCompositeRange,
        t137WjivCogCognitiveProcessingSpeedGsCompositeRange,
        t138WjivCogAuditoryProcessingSpeedGaCompositeRange,
        t139WjivCogLongTermRetrievalGlrCompositeRange,
        t140WjivCogVisualProcessingGvCompositeRange,
        t153WppsiIvVerbalComprehensionCompositeRange,
        t154WppsiIvFluidReasoningCompositeRange,
        t155WppsiIvVisualSpatialReasoningCompositeRange,
        t156WppsiIvWorkingMemoryCompositeRange,
        t157WppsiIvProcessingSpeedCompositeRange,
        t1AppendixWiscVSimilaritiesRank,
        t1AppendixWiscVSimilaritiesRange,
        t2AppendixWiscVVocabularyRank,
        t2AppendixWiscVVocabularyRange,
        t3AppendixWiscVInformationRank,
        t3AppendixWiscVInformationRange,
        t4AppendixWiscVComprehensionRank,
        t4AppendixWiscVComprehensionRange,
        t5AppendixWiscVBlockDesignRank,
        t5AppendixWiscVBlockDesignRange,
        t6AppendixWiscVVocabularyRank,
        t6AppendixWiscVVocabularyRange,
        t7AppendixWiscVMatrixReasoningRank,
        t7AppendixWiscVMatrixReasoningRange,
        t8AppendixWiscVFigureWeightsRank,
        t8AppendixWiscVFigureWeightsRange,
        t9AppendixWiscVPictureConceptsRank,
        t9AppendixWiscVPictureConceptsRange,
        t10AppendixWiscVArithmeticRank,
        t10AppendixWiscVArithmeticRange,
        t11AppendixWiscVDigitSpanRank,
        t11AppendixWiscVDigitSpanRange,
        t12AppendixWiscVPictureSpanRank,
        t12AppendixWiscVPictureSpanRange,
        t13AppendixWiscVLetterNumberSequencingRank,
        t13AppendixWiscVLetterNumberSequencingRange,
        t14AppendixWiscVCodingRank,
        t14AppendixWiscVCodingRange,
        t15AppendixWiscVSymbolSearchRank,
        t15AppendixWiscVSymbolSearchRange,
        t16AppendixWiscVCancellationRank,
        t16AppendixWiscVCancellationRange,
        t18AppendixGort5ORIRank,
        t18AppendixGort5ORIGradeEquivalent,
        t18ORIScore,
        t46AppendixQikCptAccuracyIndexRank,
        t46AppendixQikCptAccuracyIndexRange,
        t47AppendixQikCptSustainedAttentionRank,
        t47AppendixQikCptSustainedAttentionRange,
        t48AppendixQikCptImpulseControlRank,
        t48AppendixQikCptImpulseControlRange,
        t49AppendixQikCptPerformanceIndexRank,
        t49AppendixQikCptPerformanceIndexRange,
        t50AppendixQikCptSpeedOfResponseRank,
        t50AppendixQikCptSpeedOfResponseRange,
        t51AppendixQikCptConsistencyOfResponseRank,
        t51AppendixQikCptConsistencyOfResponseRange,
        t73AppendixWiscVNamingSpeedLiteracyRank,
        t73AppendixWiscVNamingSpeedLiteracyRange,
        t74AppendixWiscVNamingSpeedQualityRank,
        t74AppendixWiscVNamingSpeedQualityRange,
        t75AppendixWiscVImmediateSymbolTranslationRank,
        t75AppendixWiscVImmediateSymbolTranslationRange,
        t76AppendixWiscVDelayedSymbolTranslationRank,
        t76AppendixWiscVDelayedSymbolTranslationRange,
        t77AppendixWiscVRecognitionSymbolTranslationRank,
        t77AppendixWiscVRecognitionSymbolTranslationRange,
        t78AppendixBriefInconsistencyScaleRank,
        t78AppendixBriefInconsistencyScaleRange,
        t79AppendixBriefNegativityScaleRank,
        t79AppendixBriefNegativityScaleRange,
        t82AppendixBriefInhibitRank,
        t82AppendixBriefInhibitRange,
        t83AppendixBriefShiftRank,
        t83AppendixBriefShiftRange,
        t84AppendixBriefEmotionalControlRank,
        t84AppendixBriefEmotionalControlRange,
        t85AppendixBriefInitiateRank,
        t85AppendixBriefInitiateRange,
        t86AppendixBriefWorkingMemoryRank,
        t86AppendixBriefWorkingMemoryRange,
        t87AppendixBriefPlanOrganizeRank,
        t87AppendixBriefPlanorganizeRange,
        t88AppendixBriefOrganizationOfMaterialsRank,
        t88AppendixBriefOrganizationOfMaterialsRange,
        t89AppendixBriefMonitorRank,
        t89AppendixBriefMonitorRange,
        t90AppendixBriefInhibitRank,
        t90AppendixBriefInhibitRange,
        t91AppendixBriefShiftRank,
        t91AppendixBriefShiftRange,
        t92AppendixBriefEmotionalControlRank,
        t92AppendixBriefEmotionalControlRange,
        t93AppendixBriefInitiateRank,
        t93AppendixBriefInitiateRange,
        t94AppendixBriefWorkingMemoryRank,
        t94AppendixBriefWorkingMemoryRange,
        t95AppendixBriefPlanOrganizeRank,
        t95AppendixBriefPlanorganizeRange,
        t96AppendixBriefOrganizationOfMaterialsRank,
        t96AppendixBriefOrganizationOfMaterialsRange,
        t97AppendixBriefMonitorRank,
        t97AppendixBriefMonitorRange,
        t98AppendixCars2RelatingToPeopleRank,
        t98AppendixCars2RelatingToPeopleRange,
        t99AppendixCars2ImitationRank,
        t99AppendixCars2ImitationRange,
        t100AppendixCars2EmotionalResponseRank,
        t100AppendixCars2EmotionalResponseRange,
        t101AppendixCars2BodyUseRank,
        t101AppendixCars2BodyUseRange,
        t102AppendixCars2ObjectUseRank,
        t102AppendixCars2ObjectUseRange,
        t103AppendixCars2AdaptionToChangeRank,
        t103AppendixCars2AdaptionToChangeRange,
        t104AppendixCars2VisualResponseRank,
        t104AppendixCars2VisualResponseRange,
        t105AppendixCars2ListeningResponseRank,
        t105AppendixCars2ListeningResponseRange,
        t106AppendixCars2TasteSmellAndTouchResponseAndUseRank,
        t106AppendixCars2TasteSmellAndTouchResponseAndUseRange,
        t107AppendixCars2FearOrNervousnessRank,
        t107AppendixCars2FearOrNervousnessRange,
        t108AppendixCars2VerbalCommunicationRank,
        t108AppendixCars2VerbalCommunicationRange,
        t109AppendixCars2NonverbalCommunicationRank,
        t109AppendixCars2NonverbalCommunicationRange,
        t110AppendixCars2ActivityLevelRank,
        t110AppendixCars2ActivityLevelRange,
        t111AppendixCars2LevelAndConsistencyOfIntellectualResponseRank,
        t111AppendixCars2LevelAndConsistencyOfIntellectualResponseRange,
        t112AppendixCars2GeneralImpressionsRank,
        t112AppendixCars2GeneralImpressionsRange,
        t113AppendixCars2SocialEmotionalUnderstandingRank,
        t113AppendixCars2SocialEmotionalUnderstandingRange,
        t114AppendixCars2EmotionalExpressionAndRegulationOfEmotionsRank,
        t114AppendixCars2EmotionalExpressionAndRegulationOfEmotionsRange,
        t115AppendixCars2RelatingToPeopleRank,
        t115AppendixCars2RelatingToPeopleRange,
        t116AppendixCars2BodyUseRank,
        t116AppendixCars2BodyUseRange,
        t117AppendixCars2ObjectUseInPlayRank,
        t117AppendixCars2ObjectUseInPlayRange,
        t646AppendixCars2AdaptationToChangeRestrictedInterestsRank,
        t646AppendixCars2AdaptationToChangeRestrictedInterestsRange,
        t118AppendixCars2VisualResponseRank,
        t118AppendixCars2VisualResponseRange,
        t119AppendixCars2ListeningResponseRank,
        t119AppendixCars2ListeningResponseRange,
        t120AppendixConners3InattentionRank,
        t120AppendixConners3InattentionRange,
        t121AppendixConners3HyperactivityImpulsivityRank,
        t121AppendixConners3HyperactivityImpulsivityRange,
        t122AppendixConners3LearningProblemsRank,
        t122AppendixConners3LearningProblemsRange,
        t123AppendixConners3ExecutiveFunctioningRank,
        t123AppendixConners3ExecutiveFunctioningRange,
        t124AppendixConners3DefianceAggressionRank,
        t124AppendixConners3DefianceAggressionRange,
        t125AppendixConners3PeerRelationsRank,
        t125AppendixConners3PeerRelationsRange,
        t126AppendixConners3AdhdInattentiveRank,
        t126AppendixConners3AdhdInattentiveRange,
        t128AppendixConners3ConductDisorderRank,
        t128AppendixConners3ConductDisorderRange,
        t129AppendixConners3OppositionalDefiantDisorderRank,
        t129AppendixConners3OppositionalDefiantDisorderRange,
        t127AppendixConners3AdhdHyperactiveImpulsiveRank,
        t127AppendixConners3AdhdHyperactiveImpulsiveRange,
        t130AppendixConners3Conners3AdhdIndexRank,
        t130AppendixConners3Conners3AdhdIndexRange,
        t131AppendixConners3Conners3GlobalIndexRank,
        t131AppendixConners3Conners3GlobalIndexRange,
        t132AppendixConners3AnxietyRank,
        t132AppendixConners3AnxietyRange,
        t133AppendixConners3DepressionRank,
        t133AppendixConners3DepressionRange,
        t134AppendixConners3SevereConductRank,
        t134AppendixConners3SevereConductRange,
        t135AppendixConners3PositiveImpressionRank,
        t135AppendixConners3PositiveImpressionRange,
        t136AppendixConners3NegativeImpressionRank,
        t136AppendixConners3NegativeImpressionRange,
        t137AppendixConners3InconsistencyIndexRank,
        t137AppendixConners3InconsistencyIndexRange,
        t138AppendixConners3InattentionRank,
        t138AppendixConners3InattentionRange,
        t139AppendixConners3HyperactivityImpulsivityRank,
        t139AppendixConners3HyperactivityImpulsivityRange,
        t141AppendixConners3LearningProblemsRank,
        t141AppendixConners3LearningProblemsRange,
        t142AppendixConners3ExecutiveFunctioningRank,
        t142AppendixConners3ExecutiveFunctioningRange,
        t143AppendixConners3DefianceAggressionRank,
        t143AppendixConners3DefianceAggressionRange,
        t144AppendixConners3PeerRelationsRank,
        t144AppendixConners3PeerRelationsRange,
        t145AppendixConners3AdhdInattentiveRank,
        t145AppendixConners3AdhdInattentiveRange,
        t146AppendixConners3AdhdHyperactiveImpulsiveRank,
        t146AppendixConners3AdhdHyperactiveImpulsiveRange,
        t147AppendixConners3ConductDisorderRank,
        t147AppendixConners3ConductDisorderRange,
        t148AppendixConners3OppositionalDefiantDisorderRank,
        t148AppendixConners3OppositionalDefiantDisorderRange,
        t149AppendixConners3Conners3AdhdIndexRank,
        t149AppendixConners3Conners3AdhdIndexRange,
        t150AppendixConners3Conners3GlobalIndexRank,
        t150AppendixConners3Conners3GlobalIndexRange,
        t151AppendixConners3AnxietyRank,
        t151AppendixConners3AnxietyRange,
        t152AppendixConners3DepressionRank,
        t152AppendixConners3DepressionRange,
        t153AppendixConners3SevereConductRank,
        t153AppendixConners3SevereConductRange,
        t154AppendixConners3PositiveImpressionRank,
        t154AppendixConners3PositiveImpressionRange,
        t155AppendixConners3NegativeImpressionRank,
        t155AppendixConners3NegativeImpressionRange,
        t156AppendixConners3InconsistencyIndexRank,
        t156AppendixConners3InconsistencyIndexRange,
        t158AppendixConners3HyperactivityImpulsivityRank,
        t158AppendixConners3HyperactivityImpulsivityRange,
        t157AppendixConners3InattentionRank,
        t157AppendixConners3InattentionRange,
        t159AppendixConners3LearningProblemsRank,
        t159AppendixConners3LearningProblemsRange,
        t160AppendixConners3DefianceAggressionRank,
        t160AppendixConners3DefianceAggressionRange,
        t161AppendixConners3FamilyRelationsRank,
        t161AppendixConners3FamilyRelationsRange,
        t162AppendixConners3AdhdInattentiveRank,
        t162AppendixConners3AdhdInattentiveRange,
        t163AppendixConners3AdhdHyperactiveImpulsiveRank,
        t163AppendixConners3AdhdHyperactiveImpulsiveRange,
        t164AppendixConners3ConductDisorderRank,
        t164AppendixConners3ConductDisorderRange,
        t165AppendixConners3OppositionalDefiantDisorderRank,
        t165AppendixConners3OppositionalDefiantDisorderRange,
        t166AppendixConners3Conners3AdhdIndexRank,
        t166AppendixConners3Conners3AdhdIndexRange,
        t167AppendixConners3DepressionRank,
        t167AppendixConners3DepressionRange,
        t168AppendixConners3SevereConductRank,
        t168AppendixConners3SevereConductRange,
        t169AppendixConners3PositiveImpressionRank,
        t169AppendixConners3PositiveImpressionRange,
        t169AppendixDkefsVerbalFluencySummaryOfScoresRange,
        t169AppendixDkefsVerbalFluencySummaryOfScoresScore,
        t170AppendixDkefsDesignFluencySummaryOfScoresScore,
        t170AppendixDkefsDesignFluencySummaryOfScoresRange,
        t171AppendixDkefsColorWordInterferenceTestSummaryOfScoresScore,
        t171AppendixDkefsColorWordInterferenceTestSummaryOfScoresRange,
        t172AppendixDkefsSortingTestSummaryOfScoresRange,
        t172AppendixDkefsSortingTestSummaryOfScoresScore,
        t173AppendixDkefsTwentyQuestionsSummaryOfScoresScore,
        t173AppendixDkefsTwentyQuestionsSummaryOfScoresRange,
        t174AppendixDkefsWordContextTestSummaryOfScoresScore,
        t174AppendixDkefsWordContextTestSummaryOfScoresRange,
        t175AppendixDkefsTowerTestSummaryOfScoresRange,
        t175AppendixDkefsTowerTestSummaryOfScoresScore,
        t176AppendixDkefsProverbTestSummaryOfScoresRange,
        t176AppendixDkefsProverbTestSummaryOfScoresScore,
        t170AppendixConners3NegativeImpressionRank,
        t170AppendixConners3NegativeImpressionRange,
        t171AppendixConners3InconsistencyIndexRank,
        t171AppendixConners3InconsistencyIndexRange,
        t172AppendixCtoni2PictorialAnalogiesRank,
        t172AppendixCtoni2PictorialAnalogiesRange,
        t173AppendixCtoni2GeometricAnalogiesRank,
        t173AppendixCtoni2GeometricAnalogiesRange,
        t174AppendixCtoni2PictorialCategoriesRank,
        t174AppendixCtoni2PictorialCategoriesRange,
        t175AppendixCtoni2GeometricCategoriesRank,
        t175AppendixCtoni2GeometricCategoriesRange,
        t177AppendixCtoni2GeometricSequencesRank,
        t177AppendixCtoni2GeometricSequencesRange,
        t176AppendixCtoni2PictorialSequencesRank,
        t176AppendixCtoni2PictorialSequencesRange,
        t178AppendixCtoni2PictorialScaleRank,
        t178AppendixCtoni2PictorialScaleRange,
        t179AppendixCtoni2GeometricScaleRank,
        t179AppendixCtoni2GeometricScaleRange,
        t180AppendixCtoni2FullScaleRank,
        t180AppendixCtoni2FullScaleRange,
        t206AppendixDKefsTrailMakingTestRank,
        t206AppendixDKefsTrailMakingTestRange,
        t207AppendixDKefsVerbalFluencyTestRank,
        t207AppendixDKefsVerbalFluencyTestRange,
        t208AppendixDKefsDesignFluencyTestRank,
        t208AppendixDKefsDesignFluencyTestRange,
        t209AppendixDKefsColorwordInterferenceTestRank,
        t209AppendixDKefsColorWordInterferenceTestRange,
        t210AppendixDKefsSortingTestRank,
        t210AppendixDKefsSortingTestRange,
        t211AppendixDKefsTwentyQuestionsTestRank,
        t211AppendixDKefsTwentyQuestionsTestRange,
        t212AppendixDKefsWordContextTestRank,
        t212AppendixDKefsWordContextTestRange,
        t213AppendixDKefsTowerTestRank,
        t213AppendixDKefsTowerTestRange,
        t214AppendixDKefsProverbTestRank,
        t214AppendixDKefsProverbTestRange,
        t215AppendixGars3RestrictiverepetitiveBehaviorsRank,
        t215AppendixGars3RestrictiverepetitiveBehaviorsRange,
        t216AppendixGars3SocialInteractionRank,
        t216AppendixGars3SocialInteractionRange,
        t217AppendixGars3SocialCommunicationRank,
        t217AppendixGars3SocialCommunicationRange,
        t218AppendixGars3EmotionalResponsesRank,
        t218AppendixGars3EmotionalResponsesRange,
        t219AppendixGars3CognitiveStyleRank,
        t219AppendixGars3CognitiveStyleRange,
        t220AppendixGars3MaladaptiveSpeechRank,
        t220AppendixGars3MaladaptiveSpeechRange,
        t221AppendixRbansListLearningRank,
        t221AppendixRbansListLearningRange,
        t222AppendixRbansStoryMemoryRank,
        t222AppendixRbansStoryMemoryRange,
        t223AppendixRbansFigureCopyRank,
        t223AppendixRbansFigureCopyRange,
        t224AppendixRbansLineOrientationRank,
        t224AppendixRbansLineOrientationRange,
        t225AppendixRbansPictureNamingRank,
        t225AppendixRbansPictureNamingRange,
        t226AppendixRbansSemanticFluencyRank,
        t226AppendixRbansSemanticFluencyRange,
        t227AppendixRbansDigitSpanRank,
        t227AppendixRbansDigitSpanRange,
        t228AppendixRbansCodingRank,
        t228AppendixRbansCodingRange,
        t229AppendixRbansListRecallRank,
        t229AppendixRbansListRecallRange,
        t230AppendixRbansListRecognitionRank,
        t230AppendixRbansListRecognitionRange,
        t231AppendixRbansStoryRecallRank,
        t231AppendixRbansStoryRecallRange,
        t232AppendixRbansFigureRecallRank,
        t232AppendixRbansFigureRecallRange,
        t233AppendixVinelandiiReceptiveRank,
        t233AppendixVinelandiiReceptiveRange,
        t234AppendixVinelandiiExpressiveRank,
        t234AppendixVinelandiiExpressiveRange,
        t235AppendixVinelandiiWrittenRank,
        t235AppendixVinelandiiWrittenRange,
        t236AppendixVinelandiiPersonalRank,
        t236AppendixVinelandiiPersonalRange,
        t237AppendixVinelandiiDomesticRank,
        t237AppendixVinelandiiDomesticRange,
        t238AppendixVinelandiiCommunityRank,
        t238AppendixVinelandiiCommunityRange,
        t239AppendixVinelandiiInterpersonalRelationshipsRank,
        t239AppendixVinelandiiInterpersonalRelationshipsRange,
        t240AppendixVinelandiiPlayAndLeisureTimeRank,
        t240AppendixVinelandiiPlayAndLeisureTimeRange,
        t241AppendixVinelandiiCopingSkillsRank,
        t241AppendixVinelandiiCopingSkillsRange,
        t242AppendixVinelandiiGrossRank,
        t242AppendixVinelandiiGrossRange,
        t243AppendixVinelandiiFineRank,
        t243AppendixVinelandiiFineRange,
        t244AppendixVinelandiiMaladaptiveBehaviorIndexRank,
        t244AppendixVinelandiiMaladaptiveBehaviorIndexRange,
        t245AppendixVinelandiiMaladaptiveBehaviorCriticalItemsRank,
        t245AppendixVinelandiiMaladaptiveBehaviorCriticalItemsRange,
        t246AppendixWasiiiSimilaritiesRank,
        t246AppendixWasiiiSimilaritiesRange,
        t247AppendixWasiiiVocabularyRank,
        t247AppendixWasiiiVocabularyRange,
        t248AppendixWasiiiBlockDesignRank,
        t248AppendixWasiiiBlockDesignRange,
        t249AppendixWasiiiMatrixReasoningRank,
        t249AppendixWasiiiMatrixReasoningRange,
        t250AppendixWiatiiiListeningComprehensionGradesPk12Rank,
        t250AppendixWiatiiiListeningComprehensionGradesPk12GradeEquivalent,
        t250AppendixWiatiiiListeningComprehensionGradesPk12Range,
        t251AppendixWiatiiiEarlyReadingSkillsGradesPk3Rank,
        t251AppendixWiatiiiEarlyReadingSkillsGradesPk3GradeEquivalent,
        t251AppendixWiatiiiEarlyReadingSkillsGradesPk3Range,
        t252AppendixWiatiiiReadingComprehensionGrades112Rank,
        t252AppendixWiatiiiReadingComprehensionGrades112GradeEquivalent,
        t252AppendixWiatiiiReadingComprehensionGrades112Range,
        t253AppendixWiatiiiMathProblemSolvingGradesPk12Rank,
        t253AppendixWiatiiiMathProblemSolvingGradesPk12GradeEquivalent,
        t253AppendixWiatiiiMathProblemSolvingGradesPk12Range,
        t254AppendixWiatiiiAlphabetWritingFluencyGradesPk3Rank,
        t254AppendixWiatiiiAlphabetWritingFluencyGradesPk3GradeEquivalent,
        t254AppendixWiatiiiAlphabetWritingFluencyGradesPk3Range,
        t255AppendixWiatiiiSentenceCompositionGrades112Rank,
        t255AppendixWiatiiiSentenceCompositionGrades112GradeEquivalent,
        t255AppendixWiatiiiSentenceCompositionGrades112Range,
        t256AppendixWiatiiiWordReadingGrades112Rank,
        t256AppendixWiatiiiWordReadingGrades112GradeEquivalent,
        t256AppendixWiatiiiWordReadingGrades112Range,
        t257AppendixWiatiiiEssayCompositionGrades312Rank,
        t257AppendixWiatiiiEssayCompositionGrades312GradeEquivalent,
        t257AppendixWiatiiiEssayCompositionGrades312Range,
        t258AppendixWiatiiiPseudowordDecodingGrades112Rank,
        t258AppendixWiatiiiPseudowordDecodingGrades112GradeEquivalent,
        t258AppendixWiatiiiPseudowordDecodingGrades112Range,
        t259AppendixWiatiiiNumericalOperationsGradesK12Rank,
        t259AppendixWiatiiiNumericalOperationsGradesK12GradeEquivalent,
        t259AppendixWiatiiiNumericalOperationsGradesK12Range,
        t260AppendixWiatiiiOralExpressionGradesPk12Rank,
        t260AppendixWiatiiiOralExpressionGradesPk12GradeEquivalent,
        t260AppendixWiatiiiOralExpressionGradesPk12Range,
        t261AppendixWiatiiiOralReadingFluencyGrades112Rank,
        t261AppendixWiatiiiOralReadingFluencyGrades112GradeEquivalent,
        t261AppendixWiatiiiOralReadingFluencyGrades112Range,
        t262AppendixWiatiiiSpellingGradesK12Rank,
        t262AppendixWiatiiiSpellingGradesK12GradeEquivalent,
        t262AppendixWiatiiiSpellingGradesK12Range,
        t263AppendixWiatiiiMathFluencyAdditionRank,
        t263AppendixWiatiiiMathFluencyAdditionGradeEquivalent,
        t263AppendixWiatiiiMathFluencyAdditionRange,
        t264AppendixWiatiiiMathFluencySubtractionRank,
        t264AppendixWiatiiiMathFluencySubtractionGradeEquivalent,
        t264AppendixWiatiiiMathFluencySubtractionRange,
        t265AppendixWiatiiiMathFluencyMultiplicationRank,
        t265AppendixWiatiiiMathFluencyMultiplicationGradeEquivalent,
        t265AppendixWiatiiiMathFluencyMultiplicationRange,
        t266AppendixWraml2StoryMemoryRank,
        t266AppendixWraml2StoryMemoryRange,
        t267AppendixWraml2VerbalLearningRank,
        t267AppendixWraml2VerbalLearningRange,
        t268AppendixWraml2DesignMemoryRank,
        t268AppendixWraml2DesignMemoryRange,
        t269AppendixWraml2PictureMemoryRank,
        t269AppendixWraml2PictureMemoryRange,
        t270AppendixWraml2FingerWindowsRank,
        t270AppendixWraml2FingerWindowsRange,
        t271AppendixWraml2NumberLetterRank,
        t271AppendixWraml2NumberLetterRange,
        t272AppendixWraml2SentenceMemoryRank,
        t272AppendixWraml2SentenceMemoryRange,
        t273AppendixWraml2SoundSymbolRank,
        t273AppendixWraml2SoundSymbolRange,
        t274AppendixWraml2VerbalWorkingMemoryRank,
        t274AppendixWraml2VerbalWorkingMemoryRange,
        t275AppendixWraml2SymbolicWorkingMemoryRank,
        t275AppendixWraml2SymbolicWorkingMemoryRange,
        t276AppendixWraml2StoryMemoryDelayRecallRank,
        t276AppendixWraml2StoryMemoryDelayRecallRange,
        t277AppendixWraml2VerbalLearningDelayRecallRank,
        t277AppendixWraml2VerbalLearningDelayRecallRange,
        t278AppendixWraml2SoundSymbolDelayRecallRank,
        t278AppendixWraml2SoundSymbolDelayRecallRange,
        t279AppendixWraml2StoryMemoryRecognitionRank,
        t279AppendixWraml2StoryMemoryRecognitionRange,
        t280AppendixWraml2VerbalLearningRecognitionRank,
        t280AppendixWraml2VerbalLearningRecognitionRange,
        t281AppendixWraml2DesignMemoryRecognitionRank,
        t281AppendixWraml2DesignMemoryRecognitionRange,
        t282AppendixWraml2PictureMemoryRecognitionRank,
        t282AppendixWraml2PictureMemoryRecognitionRange,
        t283AppendixBasc3FIndexRank,
        t283AppendixBasc3FIndexRange,
        t284AppendixBasc3LIndexRank,
        t284AppendixBasc3LIndexRange,
        t285AppendixBasc3VIndexRank,
        t285AppendixBasc3VIndexRange,
        t286AppendixBasc3AlcoholAbuseRank,
        t286AppendixBasc3AlcoholAbuseRange,
        t287AppendixBasc3AnxietyRank,
        t287AppendixBasc3AnxietyRange,
        t288AppendixBasc3AttentionProblemsRank,
        t288AppendixBasc3AttentionProblemsRange,
        t289AppendixBasc3AttitudeToSchoolRank,
        t289AppendixBasc3AttitudeToSchoolRange,
        t290AppendixBasc3AttitudeToTeachersRank,
        t290AppendixBasc3AttitudeToTeachersRange,
        t291AppendixBasc3AtypicalityRank,
        t291AppendixBasc3AtypicalityRange,
        t292AppendixBasc3DepressionRank,
        t292AppendixBasc3DepressionRange,
        t293AppendixBasc3HyperactivityRank,
        t293AppendixBasc3HyperactivityRange,
        t294AppendixBasc3LocusOfControlRank,
        t294AppendixBasc3LocusOfControlRange,
        t295AppendixBasc3SchoolMaladjustmentRank,
        t295AppendixBasc3SchoolMaladjustmentRange,
        t296AppendixBasc3SensationSeekingRank,
        t296AppendixBasc3SensationSeekingRange,
        t297AppendixBasc3SenseOfInadequacyRank,
        t297AppendixBasc3SenseOfInadequacyRange,
        t298AppendixBasc3SocialStressRank,
        t298AppendixBasc3SocialStressRange,
        t299AppendixBasc3SomatizationRank,
        t299AppendixBasc3SomatizationRange,
        t300AppendixBasc3InterpersonalRelationsRank,
        t300AppendixBasc3InterpersonalRelationsRange,
        t301AppendixBasc3RelationsWithParentsRank,
        t301AppendixBasc3RelationsWithParentsRange,
        t302AppendixBasc3SelfEsteemRank,
        t302AppendixBasc3SelfEsteemRange,
        t303AppendixBasc3SelfRelianceRank,
        t303AppendixBasc3SelfRelianceRange,
        t304AppendixBasc3AngerControlRank,
        t304AppendixBasc3AngerControlRange,
        t305AppendixBasc3EgoStrengthRank,
        t305AppendixBasc3EgoStrengthRange,
        t306AppendixBasc3ManiaRank,
        t306AppendixBasc3ManiaRange,
        t307AppendixBasc3TestAnxietyRank,
        t307AppendixBasc3TestAnxietyRange,
        t308AppendixBasc3AttitudeToSchoolRank,
        t308AppendixBasc3AttitudeToSchoolRange,
        t309AppendixBasc3AttitudeToTeachersRank,
        t309AppendixBasc3AttitudeToTeachersRange,
        t310AppendixBasc3AtypicalityRank,
        t310AppendixBasc3AtypicalityRange,
        t311AppendixBasc3LocusOfControlRank,
        t311AppendixBasc3LocusOfControlRange,
        t312AppendixBasc3SocialStressRank,
        t312AppendixBasc3SocialStressRange,
        t313AppendixBasc3AnxietyRank,
        t313AppendixBasc3AnxietyRange,
        t314AppendixBasc3DepressionRank,
        t314AppendixBasc3DepressionRange,
        t315AppendixBasc3SenseOfInadequacyRank,
        t315AppendixBasc3SenseOfInadequacyRange,
        t316AppendixBasc3AttentionProblemsRank,
        t316AppendixBasc3AttentionProblemsRange,
        t317AppendixBasc3HyperactivityRank,
        t317AppendixBasc3HyperactivityRange,

        t324AppendixBasc3InterpersonalRelationsRank,
        t324AppendixBasc3InterpersonalRelationsRange,
        t325AppendixBasc3RelationsWithParentsRank,
        t325AppendixBasc3RelationsWithParentsRange,
        t326AppendixBasc3SelfEsteemRank,
        t326AppendixBasc3SelfEsteemRange,
        t327AppendixBasc3SelfRelianceRank,
        t327AppendixBasc3SelfRelianceRange,
        t328AppendixBasc3AttitudeToSchoolRank,
        t328AppendixBasc3AttitudeToSchoolRange,
        t329AppendixBasc3AttitudeToTeachersRank,
        t329AppendixBasc3AttitudeToTeachersRange,
        t330AppendixBasc3SensationSeekingRank,
        t330AppendixBasc3SensationSeekingRange,
        t331AppendixBasc3AtypicalityRank,
        t331AppendixBasc3AtypicalityRange,
        t332AppendixBasc3LocusOfControlRank,
        t332AppendixBasc3LocusOfControlRange,
        t333AppendixBasc3SocialStressRank,
        t333AppendixBasc3SocialStressRange,
        t334AppendixBasc3AnxietyRank,
        t334AppendixBasc3AnxietyRange,
        t335AppendixBasc3DepressionRank,
        t335AppendixBasc3DepressionRange,
        t336AppendixBasc3SenseOfInadequacyRank,
        t336AppendixBasc3SenseOfInadequacyRange,
        t337AppendixBasc3SomatizationRank,
        t337AppendixBasc3SomatizationRange,
        t338AppendixBasc3AttentionProblemsRank,
        t338AppendixBasc3AttentionProblemsRange,
        t339AppendixBasc3HyperactivityRank,
        t339AppendixBasc3HyperactivityRange,
        t340AppendixBasc3SocialStressRank,
        t340AppendixBasc3SocialStressRange,
        t341AppendixBasc3AnxietyRank,
        t341AppendixBasc3AnxietyRange,
        t342AppendixBasc3DepressionRank,
        t342AppendixBasc3DepressionRange,
        t343AppendixBasc3SenseOfInadequacyRank,
        t343AppendixBasc3SenseOfInadequacyRange,
        t344AppendixBasc3SelfEsteemRank,
        t344AppendixBasc3SelfEsteemRange,
        t345AppendixBasc3SelfRelianceRank,
        t345AppendixBasc3SelfRelianceRange,
        t346AppendixBasc3InterpersonalRelationsRank,
        t346AppendixBasc3InterpersonalRelationsRange,
        t347AppendixBasc3RelationsWithParentsRank,
        t347AppendixBasc3RelationsWithParentsRange,
        t348AppendixBasc3SelfEsteemRank,
        t348AppendixBasc3SelfEsteemRange,
        t349AppendixBasc3SelfRelianceRank,
        t349AppendixBasc3SelfRelianceRange,
        t350AppendixBasc3AtypicalityRank,
        t350AppendixBasc3AtypicalityRange,
        t351AppendixBasc3LocusOfControlRank,
        t351AppendixBasc3LocusOfControlRange,
        t352AppendixBasc3SocialStressRank,
        t352AppendixBasc3SocialStressRange,
        t353AppendixBasc3AnxietyRank,
        t353AppendixBasc3AnxietyRange,
        t354AppendixBasc3DepressionRank,
        t354AppendixBasc3DepressionRange,
        t355AppendixBasc3SenseOfInadequacyRank,
        t355AppendixBasc3SenseOfInadequacyRange,
        t356AppendixBasc3SomatizationRank,
        t356AppendixBasc3SomatizationRange,
        t357AppendixBasc3AttentionProblemsRank,
        t357AppendixBasc3AttentionProblemsRange,
        t358AppendixBasc3HyperactivityRank,
        t358AppendixBasc3HyperactivityRange,
        t359AppendixBasc3SocialStressRank,
        t359AppendixBasc3SocialStressRange,
        t360AppendixBasc3AnxietyRank,
        t360AppendixBasc3AnxietyRange,
        t361AppendixBasc3DepressionRank,
        t361AppendixBasc3DepressionRange,
        t362AppendixBasc3SenseOfInadequacyRank,
        t362AppendixBasc3SenseOfInadequacyRange,
        t363AppendixBasc3SelfEsteemRank,
        t363AppendixBasc3SelfEsteemRange,
        t364AppendixBasc3SelfRelianceRank,
        t364AppendixBasc3SelfRelianceRange,
        t365AppendixBasc3InterpersonalRelationsRank,
        t365AppendixBasc3InterpersonalRelationsRange,
        t366AppendixBasc3RelationsWithParentsRank,
        t366AppendixBasc3RelationsWithParentsRange,
        t367AppendixBasc3SelfEsteemRank,
        t367AppendixBasc3SelfEsteemRange,
        t368AppendixBasc3SelfRelianceRank,
        t368AppendixBasc3SelfRelianceRange,
        t369AppendixBasc3FIndexRank,
        t369AppendixBasc3FIndexRange,
        t370AppendixBasc3AggressionRank,
        t370AppendixBasc3AggressionRange,
        t371AppendixBasc3AnxietyRank,
        t371AppendixBasc3AnxietyRange,
        t372AppendixBasc3AttentionProblemsRank,
        t372AppendixBasc3AttentionProblemsRange,
        t373AppendixBasc3AtypicalityRank,
        t373AppendixBasc3AtypicalityRange,
        t374AppendixBasc3ConductProblemsRank,
        t374AppendixBasc3ConductProblemsRange,
        t375AppendixBasc3DepressionRank,
        t375AppendixBasc3DepressionRange,
        t376AppendixBasc3HyperactivityRank,
        t376AppendixBasc3HyperactivityRange,
        t377AppendixBasc3LearningProblemsRank,
        t377AppendixBasc3LearningProblemsRange,
        t378AppendixBasc3SomatizationRank,
        t378AppendixBasc3SomatizationRange,
        t379AppendixBasc3WithdrawalRank,
        t379AppendixBasc3WithdrawalRange,
        t380AppendixBasc3ActivitiesOfDailyLivingRank,
        t380AppendixBasc3ActivitiesOfDailyLivingRange,
        t381AppendixBasc3AdaptabilityRank,
        t381AppendixBasc3AdaptabilityRange,
        t382AppendixBasc3FunctionalCommunicationRank,
        t382AppendixBasc3FunctionalCommunicationRange,
        t383AppendixBasc3LeadershipRank,
        t383AppendixBasc3LeadershipRange,
        t384AppendixBasc3SocialSkillsRank,
        t384AppendixBasc3SocialSkillsRange,
        t385AppendixBasc3StudySkillsRank,
        t385AppendixBasc3StudySkillsRange,
        t386AppendixBasc3AngerControlRank,
        t386AppendixBasc3AngerControlRange,
        t387AppendixBasc3BullyingRank,
        t387AppendixBasc3BullyingRange,
        t388AppendixBasc3DevelopmentalSocialDisordersRank,
        t388AppendixBasc3DevelopmentalSocialDisordersRange,
        t389AppendixBasc3EmotionalSelfControlRank,
        t389AppendixBasc3EmotionalSelfControlRange,
        t390AppendixBasc3ExecutiveFunctioningRank,
        t390AppendixBasc3ExecutiveFunctioningRange,
        t391AppendixBasc3NegativeEmotionalityRank,
        t391AppendixBasc3NegativeEmotionalityRange,
        t392AppendixBasc3ResiliencyRank,
        t392AppendixBasc3ResiliencyRange,
        t393AppendixBasc3HyperactivityRank,
        t393AppendixBasc3HyperactivityRange,
        t394AppendixBasc3AggressionRank,
        t394AppendixBasc3AggressionRange,
        t395AppendixBasc3AnxietyRank,
        t395AppendixBasc3AnxietyRange,
        t396AppendixBasc3DepressionRank,
        t396AppendixBasc3DepressionRange,
        t397AppendixBasc3SomatizationRank,
        t397AppendixBasc3SomatizationRange,
        t398AppendixBasc3AdaptabilityRank,
        t398AppendixBasc3AdaptabilityRange,
        t399AppendixBasc3SocialSkillsRank,
        t399AppendixBasc3SocialSkillsRange,
        t400AppendixBasc3FunctionalCommunicationRank,
        t400AppendixBasc3FunctionalCommunicationRange,
        t401AppendixBasc3HyperactivityRank,
        t401AppendixBasc3HyperactivityRange,
        t402AppendixBasc3AggressionRank,
        t402AppendixBasc3AggressionRange,
        t403AppendixBasc3DepressionRank,
        t403AppendixBasc3DepressionRange,
        t404AppendixBasc3AttentionProblemsRank,
        t404AppendixBasc3AttentionProblemsRange,
        t405AppendixBasc3AtypicalityRank,
        t405AppendixBasc3AtypicalityRange,
        t406AppendixBasc3WithdrawalRank,
        t406AppendixBasc3WithdrawalRange,
        t407AppendixBasc3HyperactivityRank,
        t407AppendixBasc3HyperactivityRange,
        t408AppendixBasc3AggressionRank,
        t408AppendixBasc3AggressionRange,
        t409AppendixBasc3ConductProblemsRank,
        t409AppendixBasc3ConductProblemsRange,
        t410AppendixBasc3AnxietyRank,
        t410AppendixBasc3AnxietyRange,
        t411AppendixBasc3DepressionRank,
        t411AppendixBasc3DepressionRange,
        t412AppendixBasc3SomatizationRank,
        t412AppendixBasc3SomatizationRange,
        t413AppendixBasc3LearningProblemsRank,
        t413AppendixBasc3LearningProblemsRange,
        t414AppendixBasc3AttentionProblemsRank,
        t414AppendixBasc3AttentionProblemsRange,
        t415AppendixBasc3AdaptabilityRank,
        t415AppendixBasc3AdaptabilityRange,
        t416AppendixBasc3SocialSkillsRank,
        t416AppendixBasc3SocialSkillsRange,
        t417AppendixBasc3FunctionalCommunicationRank,
        t417AppendixBasc3FunctionalCommunicationRange,
        t418AppendixBasc3LeadershipRank,
        t418AppendixBasc3LeadershipRange,
        t419AppendixBasc3StudySkillsRank,
        t419AppendixBasc3StudySkillsRange,
        t420AppendixBasc3HyperactivityRank,
        t420AppendixBasc3HyperactivityRange,
        t421AppendixBasc3AggressionRank,
        t421AppendixBasc3AggressionRange,
        t422AppendixBasc3DepressionRank,
        t422AppendixBasc3DepressionRange,
        t423AppendixBasc3AttentionProblemsRank,
        t423AppendixBasc3AttentionProblemsRange,
        t424AppendixBasc3AtypicalityRank,
        t424AppendixBasc3AtypicalityRange,
        t425AppendixBasc3WithdrawalRank,
        t425AppendixBasc3WithdrawalRange,
        t426AppendixBasc3HyperactivityRank,
        t426AppendixBasc3HyperactivityRange,
        t427AppendixBasc3AggressionRank,
        t427AppendixBasc3AggressionRange,
        t428AppendixBasc3AnxietyRank,
        t428AppendixBasc3AnxietyRange,
        t429AppendixBasc3DepressionRank,
        t429AppendixBasc3DepressionRange,
        t430AppendixBasc3SomatizationRank,
        t430AppendixBasc3SomatizationRange,
        t431AppendixBasc3AdaptabilityRank,
        t431AppendixBasc3AdaptabilityRange,
        t432AppendixBasc3SocialSkillsRank,
        t432AppendixBasc3SocialSkillsRange,
        t433AppendixBasc3FunctionalCommunicationRank,
        t433AppendixBasc3FunctionalCommunicationRange,
        t434AppendixBasc3ActivitiesOfDailyLivingRank,
        t434AppendixBasc3ActivitiesOfDailyLivingRange,
        t435AppendixBasc3HyperactivityRank,
        t435AppendixBasc3HyperactivityRange,
        t436AppendixBasc3AggressionRank,
        t436AppendixBasc3AggressionRange,
        t437AppendixBasc3DepressionRank,
        t437AppendixBasc3DepressionRange,
        t438AppendixBasc3AttentionProblemsRank,
        t438AppendixBasc3AttentionProblemsRange,
        t439AppendixBasc3AtypicalityRank,
        t439AppendixBasc3AtypicalityRange,
        t440AppendixBasc3WithdrawalRank,
        t440AppendixBasc3WithdrawalRange,
        t441AppendixBasc3HyperactivityRank,
        t441AppendixBasc3HyperactivityRange,
        t442AppendixBasc3AggressionRank,
        t442AppendixBasc3AggressionRange,
        t443AppendixBasc3ConductProblemsRank,
        t443AppendixBasc3ConductProblemsRange,
        t444AppendixBasc3AnxietyRank,
        t444AppendixBasc3AnxietyRange,
        t445AppendixBasc3DepressionRank,
        t445AppendixBasc3DepressionRange,
        t446AppendixBasc3SomatizationRank,
        t446AppendixBasc3SomatizationRange,
        t447AppendixBasc3AdaptabilityRank,
        t447AppendixBasc3AdaptabilityRange,
        t448AppendixBasc3SocialSkillsRank,
        t448AppendixBasc3SocialSkillsRange,
        t449AppendixBasc3FunctionalCommunicationRank,
        t449AppendixBasc3FunctionalCommunicationRange,
        t450AppendixBasc3ActivitiesOfDailyLivingRank,
        t450AppendixBasc3ActivitiesOfDailyLivingRange,
        t451AppendixBasc3HyperactivityRank,
        t451AppendixBasc3HyperactivityRange,
        t452AppendixBasc3AggressionRank,
        t452AppendixBasc3AggressionRange,
        t453AppendixBasc3DepressionRank,
        t453AppendixBasc3DepressionRange,
        t454AppendixBasc3AttentionProblemsRank,
        t454AppendixBasc3AttentionProblemsRange,
        t455AppendixBasc3AtypicalityRank,
        t455AppendixBasc3AtypicalityRange,
        t456AppendixBasc3WithdrawalRank,
        t456AppendixBasc3WithdrawalRange,
        t457AppendixWaisivSimilaritiesRank,
        t457AppendixWaisivSimilaritiesRange,
        t458AppendixWaisivVocabularyRank,
        t458AppendixWaisivVocabularyRange,
        t459AppendixWaisivInformationRank,
        t459AppendixWaisivInformationRange,
        t460AppendixWaisivComprehensionRank,
        t460AppendixWaisivComprehensionRange,
        t461AppendixWaisivBlockDesignRank,
        t461AppendixWaisivBlockDesignRange,
        t462AppendixWaisivMatrixReasoningRank,
        t462AppendixWaisivMatrixReasoningRange,
        t463AppendixWaisivVisualPuzzlesRank,
        t463AppendixWaisivVisualPuzzlesRange,
        t464AppendixWaisivFigureWeightsRank,
        t464AppendixWaisivFigureWeightsRange,
        t465AppendixWaisivPictureCompletionRank,
        t465AppendixWaisivPictureCompletionRange,
        t466AppendixWaisivDigitSpanRank,
        t466AppendixWaisivDigitSpanRange,
        t467AppendixWaisivArithmeticRank,
        t467AppendixWaisivArithmeticRange,
        t468AppendixWaisivLetterNumberSequencingRank,
        t468AppendixWaisivLetterNumberSequencingRange,
        t469AppendixWaisivCodingRank,
        t469AppendixWaisivCodingRange,
        t470AppendixWaisivSymbolSearchRank,
        t470AppendixWaisivSymbolSearchRange,
        t471AppendixWaisivCancellationRank,
        t471AppendixWaisivCancellationRange,
        t525AppendixMmpi2HypochondriasisHsRange,
        t526AppendixMmpi2DepressionDRange,
        t527AppendixMmpi2HysteriaHyRange,
        t528AppendixMmpi2PsychopathicDeviatePdRange,
        t529AppendixMmpi2MasculinityfemininityMfRange,
        t530AppendixMmpi2ParanoiaPaRange,
        t531AppendixMmpi2PsychastheniaPtRange,
        t532AppendixMmpi2SchizophreniaScRange,
        t533AppendixMmpi2HypomaniaMaRange,
        t534AppendixMmpi2SocialIntroversionSiRange,
        t535AppendixMmpi2LieLRange,
        t536AppendixMmpi2FRange,
        t537AppendixMmpi2BackFFbRange,
        t538AppendixMmpi2KRange,
        t539AppendixMmpiaHypochondriasisHsRange,
        t540AppendixMmpiaDepressionDRange,
        t541AppendixMmpiaHysteriaHyRange,
        t542AppendixMmpiaPsychopathicDeviatePdRange,
        t543AppendixMmpiaMasculinityfemininityMfRange,
        t544AppendixMmpiaParanoiaPaRange,
        t545AppendixMmpiaPsychastheniaPtRange,
        t546AppendixMmpiaSchizophreniaScRange,
        t547AppendixMmpiaHypomaniaMaRange,
        t548AppendixMmpiaSocialIntroversionSiRange,
        t549AppendixMmpiaCnsRange,
        t550AppendixMmpiaVrinRange,
        t551AppendixMmpiaTrinRange,
        t552AppendixMmpiaFRange,
        t553AppendixMmpiaF1Range,
        t554AppendixMmpiaF2Range,
        t555AppendixMmpiaLRange,
        t556AppendixMmpiaKRange,
        t557AppendixNepsyiiAnimalSortingAsRank,
        t557AppendixNepsyiiAnimalSortingAsRange,
        t558AppendixNepsyiiAuditoryAttentionAaAndResponseSetRsRank,
        t558AppendixNepsyiiAuditoryAttentionAaAndResponseSetRsRange,
        t559AppendixNepsyiiClocksClRank,
        t559AppendixNepsyiiClocksClRange,
        t560AppendixNepsyiiDesignFluencyDfRank,
        t560AppendixNepsyiiDesignFluencyDfRange,
        t561AppendixNepsyiiInhibitionInRank,
        t561AppendixNepsyiiInhibitionInRange,
        t562AppendixNepsyiiStatueStRank,
        t562AppendixNepsyiiStatueStRange,
        t563AppendixNepsyiiBodyPartNamingBpnAndIdentificationBpiRank,
        t563AppendixNepsyiiBodyPartNamingBpnAndIdentificationBpiRange,
        t564AppendixNepsyiiComprehensionOfInstructionsCiRank,
        t564AppendixNepsyiiComprehensionOfInstructionsCiRange,
        t565AppendixNepsyiiOromotorSequencesOsRank,
        t565AppendixNepsyiiOromotorSequencesOsRange,
        t566AppendixNepsyiiPhonologicalProcessingPhRank,
        t566AppendixNepsyiiPhonologicalProcessingPhRange,
        t567AppendixNepsyiiRepetitionNonsenseWordsRnRank,
        t567AppendixNepsyiiRepetitionNonsenseWordsRnRange,
        t568AppendixNepsyiiSpeededNamingSnRank,
        t568AppendixNepsyiiSpeededNamingSnRange,
        t569AppendixNepsyiiWordGenerationWgRank,
        t569AppendixNepsyiiWordGenerationWgRange,
        t571AppendixNepsyiiListMemoryLmListMemoryDelayedLmdRank,
        t571AppendixNepsyiiListMemoryLmListMemoryDelayedLmdRange,
        t572AppendixNepsyiiMemoryForDesignsMdMemoryForDesignsDelayedMddRank,
        t572AppendixNepsyiiMemoryForDesignsMdMemoryForDesignsDelayedMddRange,
        t573AppendixNepsyiiMemoryForFacesMfMemoryForFacesDelayedMfdRank,
        t573AppendixNepsyiiMemoryForFacesMfMemoryForFacesDelayedMfdRange,
        t574AppendixNepsyiiMemoryForNamesMnMemoryForNamesDelayedMndRank,
        t574AppendixNepsyiiMemoryForNamesMnMemoryForNamesDelayedMndRange,
        t575AppendixNepsyiiNarrativeMemoryNmRank,
        t575AppendixNepsyiiNarrativeMemoryNmRange,
        t576AppendixNepsyiiSentenceRepetitionSrRank,
        t576AppendixNepsyiiSentenceRepetitionSrRange,
        t577AppendixNepsyiiWordListInterferenceWiRank,
        t577AppendixNepsyiiWordListInterferenceWiRange,
        t578AppendixNepsyiiFingertipTappingFtRank,
        t578AppendixNepsyiiFingertipTappingFtRange,
        t579AppendixNepsyiiImitatingHandPositionsIhRank,
        t579AppendixNepsyiiImitatingHandPositionsIhRange,
        t580AppendixNepsyiiManualMotorSequencesMmRank,
        t580AppendixNepsyiiManualMotorSequencesMmRange,
        t581AppendixNepsyiiVisuomotorPrecisionVpRank,
        t581AppendixNepsyiiVisuomotorPrecisionVpRange,
        t582AppendixNepsyiiAffectRecognitionArRank,
        t582AppendixNepsyiiAffectRecognitionArRange,
        t583AppendixNepsyiiTheoryOfMindTmRank,
        t583AppendixNepsyiiTheoryOfMindTmRange,
        t584AppendixNepsyiiArrowsAwRank,
        t584AppendixNepsyiiArrowsAwRange,
        t585AppendixNepsyiiBlockConstructionBcRank,
        t585AppendixNepsyiiBlockConstructionBcRange,
        t586AppendixNepsyiiDesignCopyingDcRank,
        t586AppendixNepsyiiDesignCopyingDcRange,
        t587AppendixNepsyiiGeometricPuzzlesGpRank,
        t587AppendixNepsyiiGeometricPuzzlesGpRange,
        t588AppendixNepsyiiPicturePuzzlesPpRank,
        t588AppendixNepsyiiPicturePuzzlesPpRange,
        t589AppendixNepsyiiRouteFindingRfRank,
        t589AppendixNepsyiiRouteFindingRfRange,
        t593AppendixWjivcogVocabularyRank,
        t593AppendixWjivcogVocabularyRange,
        t594AppendixWjivcogGeneralInformationRank,
        t594AppendixWjivcogGeneralInformationRange,
        t595AppendixWjivcogNumberSeriesRank,
        t595AppendixWjivcogNumberSeriesRange,
        t596AppendixWjivcogConceptFormationRank,
        t596AppendixWjivcogConceptFormationRange,
        t597AppendixWjivcogAnalysisSynthesisRank,
        t597AppendixWjivcogAnalysisSynthesisRange,
        t598AppendixWjivcogVerbalAttentionRank,
        t598AppendixWjivcogVerbalAttentionRange,
        t599AppendixWjivcogNumbersReversedRank,
        t599AppendixWjivcogNumbersReversedRange,
        t600AppendixWjivcogObjectNumberSequencingRank,
        t600AppendixWjivcogObjectNumberSequencingRange,
        t645AppendixWjivcogLetterPatternMatchingRank,
        t645AppendixWjivcogLetterPatternMatchingRange,
        t601AppendixWjivcogPairCancellationRank,
        t601AppendixWjivcogPairCancellationRange,
        t602AppendixWjivcogPhonologicalProcessingRank,
        t602AppendixWjivcogPhonologicalProcessingRange,
        t603AppendixWjivcogNonWordRepetitionRank,
        t603AppendixWjivcogNonWordRepetitionRange,
        t604AppendixWjivcogRecallRank,
        t604AppendixWjivcogRecallRange,
        t605AppendixWjivcogVisualAuditoryLearningRank,
        t605AppendixWjivcogVisualAuditoryLearningRange,
        t606AppendixWjivcogVisualizationRank,
        t606AppendixWjivcogVisualizationRange,
        t607AppendixWjivcogPictureRecognitionRank,
        t607AppendixWjivcogPictureRecognitionRange,
        t608AppendixTsccUnderresponseUndRange,
        t609AppendixTsccHyperresponseHypRange,
        t610AppendixTsccAnxietyAnxRange,
        t611AppendixTsccDepressionDepRange,
        t612AppendixTsccAngerAngRange,
        t613AppendixTsccPosttraumaticStressPtsRange,
        t614AppendixTsccDissociationDisRange,
        t615AppendixTsccSexualConcernsScRange,
        t616AppendixWjivachLetterWordIdentificationRank,
        t616AppendixWjivachLetterWordIdentificationRange,
        t617AppendixWjivachWordAttackRank,
        t617AppendixWjivachWordAttackRange,
        t618AppendixWjivachPassageComprehensionRank,
        t618AppendixWjivachPassageComprehensionRange,
        t619AppendixWjivachReadingRecallRank,
        t619AppendixWjivachReadingRecallRange,
        t620AppendixWjivachReadingVocabularyRank,
        t620AppendixWjivachReadingVocabularyRange,
        t621AppendixWjivachCalculationRank,
        t621AppendixWjivachCalculationRange,
        t622AppendixWjivachMathFactFluencyRank,
        t622AppendixWjivachMathFactFluencyRange,
        t623AppendixWjivachAppliedProblemsRank,
        t623AppendixWjivachAppliedProblemsRange,
        t624AppendixWjivachNumberMatricesRank,
        t624AppendixWjivachNumberMatricesRange,
        t625AppendixWjivachWritingSamplesRank,
        t625AppendixWjivachWritingSamplesRange,
        t626AppendixWjivachSentenceWritingFluencyRank,
        t626AppendixWjivachSentenceWritingFluencyRange,
        t627AppendixWjivachOralReadingRank,
        t627AppendixWjivachOralReadingRange,
        t628AppendixWjivachSentenceReadingFluencyRank,
        t628AppendixWjivachSentenceReadingFluencyRange,
        t629AppendixWjivachSpellingRank,
        t629AppendixWjivachSpellingRange,
        t630AppendixWjivachSoundAwarenessRank,
        t630AppendixWjivachSoundAwarenessRange,
        t631AppendixWjivachEditingRank,
        t631AppendixWjivachEditingRange,
        t632AppendixWjivachScienceRank,
        t632AppendixWjivachScienceRange,
        t633AppendixWjivachSocialStudiesRank,
        t633AppendixWjivachSocialStudiesRange,
        t634AppendixWjivachHumanitiesRank,
        t634AppendixWjivachHumanitiesRange,
        t635AppendixWjivachWordAttackRank,
        t635AppendixWjivachWordAttackRange,
        t636AppendixWjivachSpellingOfSoundsRank,
        t636AppendixWjivachSpellingOfSoundsRange,
        t637AppendixWmsIvBriefCognitiveStatusExamRank,
        t637AppendixWmsIvBriefCognitiveStatusExamRange,
        t638AppendixWmsIvLogicalMemoryRank,
        t638AppendixWmsIvLogicalMemoryRange,
        t639AppendixWmsIvVerbalPairedAssociatesRank,
        t639AppendixWmsIvVerbalPairedAssociatesRange,
        t640AppendixWmsIvDesignsRank,
        t640AppendixWmsIvDesignsRange,
        t641AppendixWmsIvVisualReproductionRank,
        t641AppendixWmsIvVisualReproductionRange,
        t642AppendixWmsIvSpatialAdditionRank,
        t642AppendixWmsIvSpatialAdditionRange,
        t643AppendixWmsIvSymbolSpanRank,
        t643AppendixWmsIvSymbolSpanRange,
        t644AppendixConners3AnxietyRank,
        t644AppendixConners3AnxietyRange,
        t647AppendixWppsiivSimilaritiesRank,
        t647AppendixWppsiivSimilaritiesRange,
        t648AppendixWppsiivVocabularyRank,
        t648AppendixWppsiivVocabularyRange,
        t649AppendixWppsiivInformationRank,
        t649AppendixWppsiivInformationRange,
        t650AppendixWppsiivComprehensionRank,
        t650AppendixWppsiivComprehensionRange,
        t653AppendixWppsiivBlockDesignRank,
        t653AppendixWppsiivBlockDesignRange,
        t654AppendixWppsiivObjectAssemblyRank,
        t654AppendixWppsiivObjectAssemblyRange,
        t657AppendixWppsiivBugSearchRank,
        t657AppendixWppsiivBugSearchRange,
        t658AppendixWppsiivCancellationRank,
        t658AppendixWppsiivCancellationRange,
        t659AppendixWppsiivAnimalCodingRank,
        t659AppendixWppsiivAnimalCodingRange,
        t651AppendixWppsiivMatrixReasoningRank,
        t651AppendixWppsiivMatrixReasoningRange,
        t652AppendixWppsiivPictureConceptsRank,
        t652AppendixWppsiivPictureConceptsRange,
        t655AppendixWppsiivPictureMemoryRank,
        t655AppendixWppsiivPictureMemoryRange,
        t656AppendixWppsiivZooLocationsRank,
        t656AppendixWppsiivZooLocationsRange,
        t662AppendixBasc3SocialStressRank,
        t662AppendixBasc3SocialStressRange,
        t664AppendixBasc3AnxietyRank,
        t664AppendixBasc3AnxietyRange,
        t665AppendixBasc3DepressionRank,
        t665AppendixBasc3DepressionRange,
        t666AppendixBasc3SenseOfInadequacyRank,
        t666AppendixBasc3SenseOfInadequacyRange,
        t667AppendixBasc3SelfEsteemRank,
        t667AppendixBasc3SelfEsteemRange,
        t668AppendixBasc3SelfRelianceRank,
        t668AppendixBasc3SelfRelianceRange,
        t669AppendixBeeryvmiBeeryMotorIntegrationVmiRank,
        t669AppendixBeeryvmiBeeryMotorIntegrationVmiRange,
        t670AppendixBeeryvmiBeeryVisualPerceptionRank,
        t670AppendixBeeryvmiBeeryVisualPerceptionRange,
        t671AppendixBeeryvmiBeeryMotorCoordinationRank,
        t671AppendixBeeryvmiBeeryMotorCoordinationRange,
        t672AppendixWiatiiiListeningComprehensionGradesPk12Rank,
        t672AppendixWiatiiiListeningComprehensionGradesPk12GradeEquivalent,
        t672AppendixWiatiiiListeningComprehensionGradesPk12Range,
        t673AppendixWiatiiiOralExpressionGradesPk12Rank,
        t673AppendixWiatiiiOralExpressionGradesPk12GradeEquivalent,
        t673AppendixWiatiiiOralExpressionGradesPk12Range,
        t674AppendixWiatiiiEarlyReadingSkillsGradesPk3Rank,
        t674AppendixWiatiiiEarlyReadingSkillsGradesPk3GradeEquivalent,
        t674AppendixWiatiiiEarlyReadingSkillsGradesPk3Range,
        t675AppendixWiatiiiReadingComprehensionGrades112Rank,
        t675AppendixWiatiiiReadingComprehensionGrades112GradeEquivalent,
        t675AppendixWiatiiiReadingComprehensionGrades112Range,
        t676AppendixWiatiiiWordReadingGrades112Rank,
        t676AppendixWiatiiiWordReadingGrades112GradeEquivalent,
        t676AppendixWiatiiiWordReadingGrades112Range,
        t677AppendixWiatiiiPseudowordDecodingGrades112Rank,
        t677AppendixWiatiiiPseudowordDecodingGrades112GradeEquivalent,
        t677AppendixWiatiiiPseudowordDecodingGrades112Range,
        t678AppendixWiatiiiOralReadingFluencyGrades112Rank,
        t678AppendixWiatiiiOralReadingFluencyGrades112GradeEquivalent,
        t678AppendixWiatiiiOralReadingFluencyGrades112Range,
        t679AppendixWiatiiiSpellingGradesK12Rank,
        t679AppendixWiatiiiSpellingGradesK12GradeEquivalent,
        t679AppendixWiatiiiSpellingGradesK12Range,
        t680AppendixWiatiiiAlphabetWritingFluencyGradesPk3Rank,
        t680AppendixWiatiiiAlphabetWritingFluencyGradesPk3GradeEquivalent,
        t680AppendixWiatiiiAlphabetWritingFluencyGradesPk3Range,
        t681AppendixWiatiiiSentenceCompositionGrades112Rank,
        t681AppendixWiatiiiSentenceCompositionGrades112GradeEquivalent,
        t681AppendixWiatiiiSentenceCompositionGrades112Range,
        t682AppendixWiatiiiEssayCompositionGrades312Rank,
        t682AppendixWiatiiiEssayCompositionGrades312GradeEquivalent,
        t682AppendixWiatiiiEssayCompositionGrades312Range,
        t683AppendixWiatiiiNumericalOperationsGradesK12Rank,
        t683AppendixWiatiiiNumericalOperationsGradesK12GradeEquivalent,
        t683AppendixWiatiiiNumericalOperationsGradesK12Range,
        t684AppendixWiatiiiMathProblemSolvingGradesPk12Rank,
        t684AppendixWiatiiiMathProblemSolvingGradesPk12GradeEquivalent,
        t684AppendixWiatiiiMathProblemSolvingGradesPk12Range,
        t685AppendixWiatiiiMathFluencyAdditionRank,
        t685AppendixWiatiiiMathFluencyAdditionGradeEquivalent,
        t685AppendixWiatiiiMathFluencyAdditionRange,
        t686AppendixWiatiiiMathFluencySubtractionRank,
        t686AppendixWiatiiiMathFluencySubtractionGradeEquivalent,
        t686AppendixWiatiiiMathFluencySubtractionRange,
        t687AppendixWiatiiiMathFluencyMultiplicationRank,
        t687AppendixWiatiiiMathFluencyMultiplicationGradeEquivalent,
        t687AppendixWiatiiiMathFluencyMultiplicationRange,
        t688AppendixNelsonDennyVocabularyRank,
        t688AppendixNelsonDennyVocabularyRange,
        t689AppendixNelsonDennyComprehensionRank,
        t689AppendixNelsonDennyComprehensionRange,
        t690AppendixNelsonDennyReadingRateRank,
        t690AppendixNelsonDennyReadingRateRange,
        t698AppendixDkefsVisualScanningRange,
        t699AppendixDkefsNumberSequencingRange,
        t700AppendixDkefsLetterSequencingRange,
        t701AppendixDkefsCombinedNumberAndLetterSequencingRange,
        t702AppendixDkefsNumberLetterSwitchingRange,
        t703AppendixDkefsMotorSpeedRange,
        t704AppendixDkefsLetterFluencyRange,
        t705AppendixDkefsCategoryFluencyRange,
        t706AppendixDkefsCategorySwitchingRange,
        t707AppendixDkefsFilledDotsRange,
        t708AppendixDkefsEmptyDotsOnlyRange,
        t709AppendixDkefsSwitchingRange,
        t710AppendixDkefsColorNamingRange,
        t711AppendixDkefsWordReadingRange,
        t712AppendixDkefsInhibitionRange,
        t713AppendixDkefsInhibitionswitchingRange,
        t714AppendixDkefsFreeSortingRange,
        t715AppendixDkefsSortRecognitionRange,
        t716AppendixDkefsItem1Range,
        t717AppendixDkefsItem2Range,
        t718AppendixDkefsItem3Range,
        t719AppendixDkefsItem4Range,
        t720AppendixDkefsItem1Range,
        t721AppendixDkefsItem2Range,
        t722AppendixDkefsItem1TwoDisksRange,
        t723AppendixDkefsItem2TwoDisksRange,
        t724AppendixDkefsItem3TwoDisksRange,
        t725AppendixDkefsItem4ThreeDisksRange,
        t726AppendixDkefsItem5ThreeDisksRange,
        t727AppendixDkefsItem6FourDisksRange,
        t728AppendixDkefsItem7FourDisksRange,
        t729AppendixDkefsItem8FiveDisksRange,
        t730AppendixDkefsItem9FiveDisksRange,
        t731AppendixDkefsFreeInquiryRange,
        t732AppendixDkefsMultipleChoiceRange,
        t733AppendixGort5RateRank,
        t733AppendixGort5RateRange,
        t734AppendixGort5AccuracyRank,
        t734AppendixGort5AccuracyRange,
        t735AppendixGort5FluencyRank,
        t735AppendixGort5FluencyRange,
        t736AppendixGort5ComprehensionRank,
        t736AppendixGort5ComprehensionRange,
        t737AppendixTommTrail1Rank,
        t737AppendixTommTrail1Range,
        t738AppendixTommTrial2Rank,
        t738AppendixTommTrial2Range,
        t739AppendixTommRetentionTrialRank,
        t739AppendixTommRetentionTrialRange,
        t743AppendixDasiiVerbalComprehensionRank,
        t743AppendixDasiiVerbalComprehensionRange,
        t744AppendixDasiiPictureSimilaritiesRank,
        t744AppendixDasiiPictureSimilaritiesRange,
        t745AppendixDasiiNamingVocabularyRank,
        t745AppendixDasiiNamingVocabularyRange,
        t746AppendixDasiiPatternConstructionRank,
        t746AppendixDasiiPatternConstructionRange,
        t747AppendixDasiiMatricesRank,
        t747AppendixDasiiMatricesRange,
        t748AppendixDasiiCopyingRank,
        t748AppendixDasiiCopyingRange,
        t749AppendixDasiiRecallOfObjectsImmediateRank,
        t749AppendixDasiiRecallOfObjectsImmediateRange,
        t750AppendixDasiiRecallOfObjectsDelayedRank,
        t750AppendixDasiiRecallOfObjectsDelayedRange,
        t751AppendixDasiiRecallOfDigitsForwardRank,
        t751AppendixDasiiRecallOfDigitsForwardRange,
        t752AppendixDasiiRecognitionOfPicturesRank,
        t752AppendixDasiiRecognitionOfPicturesRange,
        t753AppendixDasiiEarlyNumberConceptsRank,
        t753AppendixDasiiEarlyNumberConceptsRange,
        t754AppendixDasiiMatchingLetterLikeFormsRank,
        t754AppendixDasiiMatchingLetterLikeFormsRange,
        t755AppendixDasiiRecallOfSequentialOrderRank,
        t755AppendixDasiiRecallOfSequentialOrderRange,
        t756AppendixDasiiSpeedOfInformationProcessingRank,
        t756AppendixDasiiSpeedOfInformationProcessingRange,
        t757AppendixDasiiRecallOfDigitsBackwardRank,
        t757AppendixDasiiRecallOfDigitsBackwardRange,
        t758AppendixDasiiPhonologicalProcessingRank,
        t758AppendixDasiiPhonologicalProcessingRange,
        t759AppendixDasiiRapidNamingRank,
        t759AppendixDasiiRapidNamingRange,
        t760AppendixDasiiRecallOfDesignsRank,
        t760AppendixDasiiRecallOfDesignsRange,
        t761AppendixDasiiWordDefinitionsRank,
        t761AppendixDasiiWordDefinitionsRange,
        t762AppendixDasiiPatternConstructionRank,
        t762AppendixDasiiPatternConstructionRange,
        t763AppendixDasiiMatricesRank,
        t763AppendixDasiiMatricesRange,
        t764AppendixDasiiVerbalSimilaritiesRank,
        t764AppendixDasiiVerbalSimilaritiesRange,
        t765AppendixDasiiSequentialAndQuantitativeReasoningRank,
        t765AppendixDasiiSequentialAndQuantitativeReasoningRange,
        t766AppendixDasiiRecallOfObjectsImmediateRank,
        t766AppendixDasiiRecallOfObjectsImmediateRange,
        t767AppendixDasiiRecallOfObjectsDelayedRank,
        t767AppendixDasiiRecallOfObjectsDelayedRange,
        t768AppendixDasiiRecallOfDigitsForwardRank,
        t768AppendixDasiiRecallOfDigitsForwardRange,
        t769AppendixDasiiRecognitionOfPicturesRank,
        t769AppendixDasiiRecognitionOfPicturesRange,
        t770AppendixDasiiRecallOfSequentialOrderRank,
        t770AppendixDasiiRecallOfSequentialOrderRange,
        t771AppendixDasiiSpeedOfInformationProcessingRank,
        t771AppendixDasiiSpeedOfInformationProcessingRange,
        t772AppendixDasiiRecallOfDigitsBackwardRank,
        t772AppendixDasiiRecallOfDigitsBackwardRange,
        t773AppendixDasiiPhonologicalProcessingRank,
        t773AppendixDasiiPhonologicalProcessingRange,
        rbansTotalScaleScore,
        rbansTotalScaleScoreScaledScore,
        rbansTotalScaleScorePercentileRank,
        rbansTotalScaleScoreRange,
      },
      testSelectedReducer,
      appendixReducer,
      recommendations,
    },
  } = props;

  const testModuleIsVisibleVal = (id) => {
    let val;
    switch (id) {
      case 1:
        val = t1Ados2Module1;
        break;
      case 2:
        val = t2Ados2Module2;
        break;
      case 3:
        val = t3Ados2Module3;
        break;
      case 4:
        val = t4Ados2Module4;
        break;
      default:
        val = '';
    }
    return val;
  };

  const parentGroupSubScaleIsVisibleVal = (id) => {
    let val;
    switch (id) {
      case 1:
        val = t1WiscvFullScale;
        break;
      case 2:
        val = t2WiscvGeneralAbilities;
        break;
      case 3:
        val = t3Cars2Cars2St;
        break;
      case 5:
        val = t5Cars2Cars2Hf;
        break;
      case 6:
        val = t6Conners3Parent;
        break;
      case 7:
        val = t7Conners3Teacher;
        break;
      case 8:
        val = t8Conners3SelfReport;
        break;
      case 9:
        val = t9RbansIndex;
        break;
      case 10:
        val = t10Wraml2CoreSubtestsAndIndexes;
        break;
      case 11:
        val = t11Wraml2OptionalDelayRecallAndRecognitionSubtests;
        break;
      case 12:
        val = t12Basc3SrpC;
        break;
      case 13:
        val = t13Basc3SrpA;
        break;
      case 14:
        val = t14Basc3SrpCol;
        break;
      case 15:
        val = t15Basc3TrsP;
        break;
      case 16:
        val = t16Basc3TrsCTrsA;
        break;
      case 17:
        val = t17Basc3PrsP;
        break;
      case 18:
        val = t18Basc3PrsCPrsA;
        break;
      case 19:
        val = t19WppsiivFullScale;
        break;
      default:
        val = '';
    }
    return val;
  };

  const parentGroupScaleIsVisibleVal = (id) => {
    let val;
    switch (id) {
      case 2:
        val = t2Ados2SocialAffectSa;
        break;
      case 3:
        val = t3Ados2RestrictedAndRepetitiveBehaviorRrb;
        break;
      case 4:
        val = t4Ados2SocialAffectSa;
        break;
      case 5:
        val = t5Ados2RestrictedAndRepetitiveBehaviorRrb;
        break;
      case 6:
        val = t6Ados2SocialAffectSa;
        break;
      case 7:
        val = t7Ados2RestrictedAndRepetitiveBehaviorRrb;
        break;
      case 8:
        val = t8Ados2SocialAffectSa;
        break;
      default:
        val = '';
    }
    return val;
  };

  const parentScaleTitleIsVisibleVal = (id) => {
    let val;
    switch (id) {
      case 1:
        val = t1VerbalComprehension;
        break;
      case 2:
        val = t2VisualSpatial;
        break;
      case 3:
        val = t3FluidReasoning;
        break;
      case 4:
        val = t4WorkingMemory;
        break;
      case 5:
        val = t5ProcessingSpeed;
        break;
      case 6:
        val = t6Ados2Communication;
        break;
      case 7:
        val = t7Ados2ReciprocalSocialInteraction;
        break;
      case 8:
        val = t8Ados2RestrictedAndRepetitiveBehaviors;
        break;
      case 9:
        val = t9Ados2Communication;
        break;
      case 10:
        val = t10Ados2ReciprocalSocialInteraction;
        break;
      case 11:
        val = t11Ados2RestrictedAndRepetitiveBehaviors;
        break;
      case 12:
        val = t12Ados2Communication;
        break;
      case 13:
        val = t13Ados2ReciprocalSocialInteraction;
        break;
      case 14:
        val = t14Ados2RestrictedAndRepetitiveBehaviors;
        break;
      case 15:
        val = t15Ados2Communication;
        break;
      case 16:
        val = t16Ados2ReciprocalSocialInteraction;
        break;
      case 17:
        val = t17ComplimentarySubtests;
        break;
      case 18:
        val = t18BriefValidityScales;
        break;
      case 19:
        val = t19BriefBehavioralRegulationIndexBri;
        break;
      case 20:
        val = t20BriefMetacognitionIndexMi;
        break;
      case 21:
        val = t21BriefGlobalExecutiveCompositeGec;
        break;
      case 22:
        val = t22Cars2Cars2stItems;
        break;
      case 23:
        val = t23Cars2Cars2hfItems;
        break;
      case 24:
        val = t24Conners3ContentScales;
        break;
      case 25:
        val = t25Conners3DsmSymptomScales;
        break;
      case 26:
        val = t26Conners3Indices;
        break;
      case 27:
        val = t27Conners3ScreenerItems;
        break;
      case 28:
        val = t28Conners3CriticalItems;
        break;
      case 29:
        val = t29Conners3ValidityScales;
        break;
      case 30:
        val = t30Conners3ContentScales;
        break;
      case 31:
        val = t31Conners3DsmSymptomScales;
        break;
      case 32:
        val = t32Conners3Indices;
        break;
      case 33:
        val = t33Conners3ScreenerItems;
        break;
      case 34:
        val = t34Conners3CriticalItems;
        break;
      case 35:
        val = t35Conners3ValidityScales;
        break;
      case 36:
        val = t36Conners3ContentScales;
        break;
      case 37:
        val = t37Conners3DsmSymptomScales;
        break;
      case 38:
        val = t38Conners3Indices;
        break;
      case 39:
        val = t39Conners3ScreenerItems;
        break;
      case 40:
        val = t40Conners3CriticalItems;
        break;
      case 41:
        val = t41Conners3ValidityScales;
        break;
      case 42:
        val = t42DasiiEarlyYearsCore;
        break;
      case 43:
        val = t43DasiiEarlyYearsDiagnostic;
        break;
      case 44:
        val = t44DasiiSchoolAgeCore;
        break;
      case 45:
        val = t45DasiiSchoolAgeDiagnostic;
        break;
      case 46:
        val = t46DasiiDiagnosticSubtests;
        break;
      case 47:
        val = t47RbansImmediateMemory;
        break;
      case 48:
        val = t48RbansVisuospatialConstructional;
        break;
      case 49:
        val = t49RbansLanguage;
        break;
      case 50:
        val = t50RbansAttention;
        break;
      case 51:
        val = t51RbansDelayedMemory;
        break;
      case 52:
        val = t52VinelandiiCommunicationDomain;
        break;
      case 53:
        val = t53VinelandiiDailyLivingSkillsDomain;
        break;
      case 54:
        val = t54VinelandiiSocializationDomain;
        break;
      case 55:
        val = t55VinelandiiMotorSkillsDomainOnlyAgesBirthThrough6;
        break;
      case 56:
        val = t56VinelandiiMaladaptiveBehaviorDomainOptional;
        break;
      case 57:
        val = t57WasiiiVerbalComprehension;
        break;
      case 58:
        val = t58WasiiiPerceptualReasoning;
        break;
      case 59:
        val = t59WiatiiiEarlyYearsCore;
        break;
      case 60:
        val = t60Wraml2VerbalMemoryIndex;
        break;
      case 61:
        val = t61Wraml2VisualMemoryIndex;
        break;
      case 62:
        val = t62Wraml2AttentionconcentrationIndex;
        break;
      case 63:
        val = t63Wraml2OptionalSubtests;
        break;
      case 64:
        val = t64Wraml2DelayRecallSubtests;
        break;
      case 65:
        val = t65Wraml2RecognitionSubtests;
        break;
      case 66:
        val = t66ValidityIndexes;
        break;
      case 67:
        val = t67ClinicalScales;
        break;
      case 68:
        val = t68AdaptiveScales;
        break;
      case 69:
        val = t69ContentScales;
        break;
      case 70:
        val = t70SchoolProblems;
        break;
      case 71:
        val = t71InternalizingProblems;
        break;
      case 72:
        val = t72Inattentionhyperactivity;
        break;
      case 73:
        val = t73PersonalAdjustment;
        break;
      case 74:
        val = t74SchoolProblems;
        break;
      case 75:
        val = t75InternalizingProblems;
        break;
      case 76:
        val = t76Inattentionhyperactivity;
        break;
      case 77:
        val = t77EmotionalSymptomsIndex;
        break;
      case 78:
        val = t78PersonalAdjustment;
        break;
      case 79:
        val = t79InternalizingProblems;
        break;
      case 80:
        val = t80Inattentionhyperactivity;
        break;
      case 81:
        val = t81EmotionalSymptomsIndex;
        break;
      case 82:
        val = t82PersonalAdjustment;
        break;
      case 85:
        val = t85ValidityIndexes;
        break;
      case 86:
        val = t86ClinicalScales;
        break;
      case 87:
        val = t87AdaptiveScales;
        break;
      case 88:
        val = t88ContentScales;
        break;
      case 89:
        val = t89ExternalizingProblems;
        break;
      case 90:
        val = t90InternalizingProblems;
        break;
      case 91:
        val = t91AdaptiveSkills;
        break;
      case 92:
        val = t92BehavioralSymptomsIndex;
        break;
      case 93:
        val = t93ExternalizingProblems;
        break;
      case 94:
        val = t94InternalizingProblems;
        break;
      case 95:
        val = t95SchoolProblems;
        break;
      case 96:
        val = t96AdaptiveSkills;
        break;
      case 97:
        val = t97BehavioralSymptomsIndex;
        break;
      case 98:
        val = t98ExternalizingProblems;
        break;
      case 99:
        val = t99InternalizingProblems;
        break;
      case 100:
        val = t100AdaptiveSkills;
        break;
      case 101:
        val = t101BehavioralSymptomsIndex;
        break;
      case 102:
        val = t102ExternalizingProblems;
        break;
      case 103:
        val = t103InternalizingProblems;
        break;
      case 104:
        val = t104AdaptiveSkills;
        break;
      case 105:
        val = t105BehavioralSymptomsIndex;
        break;
      case 106:
        val = t106WaisivVerbalComprehension;
        break;
      case 107:
        val = t107WaisivPerceptualReasoning;
        break;
      case 108:
        val = t108WaisivWorkingMemory;
        break;
      case 109:
        val = t109WaisivProcessingSpeed;
        break;
      case 110:
        val = t110PiyCognitiveImpairmentScale;
        break;
      case 111:
        val = t111PiyImpulsivityAndDistractibilityScale;
        break;
      case 112:
        val = t112PiyDelinquencyScale;
        break;
      case 113:
        val = t113PiyFamilyDysfunctionScale;
        break;
      case 114:
        val = t114PiyRealityDistortionScale;
        break;
      case 115:
        val = t115PiySomaticConcernScale;
        break;
      case 116:
        val = t116PiyPsychologicalDiscomfortScale;
        break;
      case 117:
        val = t117PiySocialWithdrawalScale;
        break;
      case 118:
        val = t118PiySocialSkillDeficitScale;
        break;
      case 119:
        val = t119McmiivClinicalPersonalityPatterns;
        break;
      case 120:
        val = t120McmiivSeverePersonalityPathology;
        break;
      case 121:
        val = t121McmiivClinicalSyndromes;
        break;
      case 122:
        val = t122McmiivSevereClinicalSyndromes;
        break;
      case 123:
        val = t123McmiivModifyingIndices;
        break;
      case 124:
        val = t124McmiivRandomResponseIndicators;
        break;
      case 125:
        val = t125Mmpi2ClinicalScales;
        break;
      case 126:
        val = t126Mmpi2ValidityScales;
        break;
      case 127:
        val = t127MmpiaValidityScales;
        break;
      case 128:
        val = t128NepsyiiAttentionAndExecutiveFunctioning;
        break;
      case 129:
        val = t129NepsyiiLanguage;
        break;
      case 130:
        val = t130NepsyiiMemoryAndLearning;
        break;
      case 131:
        val = t131NepsyiiSensorimotor;
        break;
      case 132:
        val = t132NepsyiiSocialPerception;
        break;
      case 133:
        val = t133NepsyiiVisuospatialProcessing;
        break;
      case 134:
        val = t134WjivCogComprehensionKnowledgeGc;
        break;
      case 135:
        val = t135WjivCogFluidReasoningGf;
        break;
      case 136:
        val = t137WjivCogCognitiveProcessingSpeedGs;
        break;
      case 137:
        val = t136WjivCogShortTermWorkingMemoryGwm;
        break;
      case 138:
        val = t138WjivCogAuditoryProcessingSpeedGa;
        break;
      case 139:
        val = t139WjivCogLongTermRetrievalGlr;
        break;
      case 140:
        val = t140WjivCogVisualProcessingGv;
        break;
      case 142:
        val = t142TsccValidityScale;
        break;
      case 143:
        val = t143TsccClinicalScale;
        break;
      case 144:
        val = t144WjivAchBasicReadingSkills;
        break;
      case 146:
        val = t146WjivAchReadingComprehensionExtended;
        break;
      case 147:
        val = t147WjivAchMathCalculationSkills;
        break;
      case 148:
        val = t148WjivAchMathReasoning;
        break;
      case 149:
        val = t149WjivAchWrittenExpression;
        break;
      case 150:
        val = t150WjivAchWritingRelatedSubtest;
        break;
      case 151:
        val = t151Ctoni2Principals;
        break;
      case 152:
        val = t152Ctoni2Composites;
        break;
      case 153:
        val = t153VerbalComprehension;
        break;
      case 154:
        val = t154FluidReasoning;
        break;
      case 155:
        val = t155VisualSpatialReasoning;
        break;
      case 156:
        val = t156WorkingMemory;
        break;
      case 157:
        val = t157ProcessingSpeed;
        break;
      case 158:
        val = t158WppsiivLanguage;
        break;
      case 159:
        val = t159EmotionalSymptomsIndex;
        break;
      case 160:
        val = t160MmpiaClinical;
        break;
      default:
        val = '';
    }
    return val;
  };

  const subtestVal = (id) => {
    let val;
    switch (id) {
      case 1:
        val = t1SimilaritiesScore;
        break;
      case 2:
        val = t2VocabularyScore;
        break;
      case 3:
        val = t3InformationScore;
        break;
      case 4:
        val = t4ComprehensionScore;
        break;
      case 5:
        val = t5BlockDesignScore;
        break;
      case 6:
        val = t6VocabularyScore;
        break;
      case 7:
        val = t7MatrixReasoningScore;
        break;
      case 8:
        val = t8FigureWeightsScore;
        break;
      case 9:
        val = t9PictureConceptsScore;
        break;
      case 10:
        val = t10ArithmeticScore;
        break;
      case 11:
        val = t11DigitSpanScore;
        break;
      case 12:
        val = t12PictureSpanScore;
        break;
      case 13:
        val = t13LetterNumberSequencingScore;
        break;
      case 14:
        val = t14CodingScore;
        break;
      case 15:
        val = t15SymbolSearchScore;
        break;
      case 16:
        val = t16CancellationScore;
        break;
      case 17:
        val = t17Ados2FrequencyOfSpontaneousVocalizationDirectedToOthersA2Score;
        break;
      case 18:
        val = t18Ados2PointingA7Score;
        break;
      case 19:
        val = t19Ados2GesturesA8Score;
        break;
      case 20:
        val = t20Ados2UnusualEyeContactB1Score;
        break;
      case 21:
        val = t21Ados2FacialExpressionsDirectedToOthersB3Score;
        break;
      case 22:
        val = t22Ados2IntegrationOfGazeAndOtherBehaviorsDuringSocialOverturesB4Score;
        break;
      case 23:
        val = t23Ados2SharedEnjoymentInInteractionB5Score;
        break;
      case 24:
        val = t24Ados2ShowingB9Score;
        break;
      case 25:
        val = t25Ados2SpontaneousInitiationOfJointAttentionB10Score;
        break;
      case 26:
        val = t26Ados2ResponseToJointAttentionB11Score;
        break;
      case 27:
        val = t27Ados2QualityOfSocialOverturesB12Score;
        break;
      case 28:
        val = t28Ados2IntonationOfVocalizationsOrVerbalizationsA3Score;
        break;
      case 29:
        val = t29Ados2StereotypedIdiosyncraticUseOfWordsOrPhrasesA5Score;
        break;
      case 30:
        val = t30Ados2UnusualSensoryInterestInPlayMaterialPersonD1Score;
        break;
      case 31:
        val = t31Ados2HandAndFingerAndOtherComplexMannerismsD2Score;
        break;
      case 32:
        val = t32Ados2UnusuallyRepetitiveInterestsOrStereotypedBehaviorsD4Score;
        break;
      case 33:
        val = t33Ados2PointingA6Score;
        break;
      case 34:
        val = t34Ados2DescriptiveConventionalInstrumentalOrInformationalGesturesA7Score;
        break;
      case 35:
        val = t35Ados2UnusualEyeContactB1Score;
        break;
      case 36:
        val = t36Ados2FacialExpressionsDirectedToOthersB2Score;
        break;
      case 37:
        val = t37Ados2SharedEnjoymentInInteractionB3Score;
        break;
      case 38:
        val = t38Ados2ShowingB5Score;
        break;
      case 39:
        val = t39Ados2SpontaneousInitiationOfJointAttentionB6Score;
        break;
      case 40:
        val = t40Ados2QualityOfSocialOverturesB8Score;
        break;
      case 41:
        val = t41Ados2AmountOfReciprocalSocialCommunicationB11Score;
        break;
      case 42:
        val = t42Ados2OverallQualityOfRapportB12Score;
        break;
      case 43:
        val = t43Ados2StereotypedIdiosyncraticUseOfWordsOrPhrasesA4Score;
        break;
      case 44:
        val = t44Ados2UnusualSensoryInterestInPlayMaterialPersonD1Score;
        break;
      case 45:
        val = t45Ados2HandAndFingerAndOtherComplexMannerismsD2Score;
        break;
      case 46:
        val = t46Ados2UnusuallyRepetitiveInterestsOrStereotypedBehaviorsScore;
        break;
      case 47:
        val = t47Ados2ReportingOfEventsA7Score;
        break;
      case 48:
        val = t48Ados2ConversationA8Score;
        break;
      case 49:
        val = t49Ados2DescriptiveConventionalInstrumentalOrInformationalGesturesA9Score;
        break;
      case 50:
        val = t50Ados2UnusualEyeContactB1Score;
        break;
      case 51:
        val = t51Ados2FacialExpressionsDirectedToExaminerB2Score;
        break;
      case 52:
        val = t52Ados2SharedEnjoymentInInteractionB3Score;
        break;
      case 53:
        val = t53Ados2SharedEnjoymentInInteractionB4Score;
        break;
      case 54:
        val = t54Ados2QualityOfSocialOverturesB7Score;
        break;
      case 55:
        val = t55Ados2QualityOfSocialResponseB9Score;
        break;
      case 56:
        val = t56Ados2AmountOfReciprocalSocialCommunicationB10Score;
        break;
      case 57:
        val = t57Ados2OverallQualityOfRapportB11Score;
        break;
      case 58:
        val = t58Ados2StereotypedIdiosyncraticUseOfWordsOrPhrasesA4Score;
        break;
      case 59:
        val = t59Ados2UnusualSensoryInterestInPlayMaterialPersonD1Score;
        break;
      case 60:
        val = t60Ados2HandAndFingerAndOtherComplexMannerismsD2Score;
        break;
      case 61:
        val = t61Ados2UnusuallyRepetitiveInterestsOrStereotypedBehaviorsScore;
        break;
      case 62:
        val = t62Ados2StereotypedIdiosyncraticUseOfWordsOrPhrasesA4Score;
        break;
      case 63:
        val = t63Ados2ConversationA8Score;
        break;
      case 64:
        val = t64Ados2DescriptiveConventionalInstrumentalOrInformationalGesturesA9Score;
        break;
      case 65:
        val = t65Ados2EmphaticOrEmotionalGesturesA10Score;
        break;
      case 66:
        val = t66Ados2UnusualEyeContactB1Score;
        break;
      case 67:
        val = t67Ados2FacialExpressionsDirectedToExaminerB2Score;
        break;
      case 68:
        val = t68Ados2CommentsOnOthersEmotionsEmpathyB6Score;
        break;
      case 69:
        val = t69Ados2ResponsibilityB8Score;
        break;
      case 70:
        val = t70Ados2QualityOfSocialOverturesB9Score;
        break;
      case 71:
        val = t71Ados2QualityOfSocialResponseB11Score;
        break;
      case 72:
        val = t72Ados2AmountOfReciprocalSocialCommunicationB12Score;
        break;
      case 73:
        val = t73NamingSpeedLiteracyScore;
        break;
      case 74:
        val = t74NamingSpeedQualityScore;
        break;
      case 75:
        val = t75ImmediateSymbolTranslationScore;
        break;
      case 76:
        val = t76DelayedSymbolTranslationScore;
        break;
      case 77:
        val = t77RecognitionSymbolTranslationScore;
        break;
      case 78:
        val = t78InconsistencyScaleScore;
        break;
      case 79:
        val = t79NegativityScaleScore;
        break;
      case 82:
        val = t82InhibitScore;
        break;
      case 83:
        val = t83ShiftScore;
        break;
      case 84:
        val = t84EmotionalControlScore;
        break;
      case 85:
        val = t85InitiateScore;
        break;
      case 86:
        val = t86WorkingMemoryScore;
        break;
      case 87:
        val = t87PlanOrganizeScore;
        break;
      case 88:
        val = t88OrganizationOfMaterialsScore;
        break;
      case 89:
        val = t89MonitorScore;
        break;
      case 90:
        val = t90InhibitScore;
        break;
      case 91:
        val = t91ShiftScore;
        break;
      case 92:
        val = t92EmotionalControlScore;
        break;
      case 93:
        val = t93InitiateScore;
        break;
      case 94:
        val = t94WorkingMemoryScore;
        break;
      case 95:
        val = t95PlanOrganizeScore;
        break;
      case 96:
        val = t96OrganizationOfMaterialsScore;
        break;
      case 97:
        val = t97MonitorScore;
        break;
      case 98:
        val = t98RelatingToPeopleScore;
        break;
      case 99:
        val = t99ImitationScore;
        break;
      case 100:
        val = t100EmotionalResponseScore;
        break;
      case 101:
        val = t101BodyUseScore;
        break;
      case 102:
        val = t102ObjectUseScore;
        break;
      case 103:
        val = t103AdaptionToChangeScore;
        break;
      case 104:
        val = t104VisualResponseScore;
        break;
      case 105:
        val = t105ListeningResponseScore;
        break;
      case 106:
        val = t106TasteSmellAndTouchResponseAndUseScore;
        break;
      case 107:
        val = t107FearOrNervousnessScore;
        break;
      case 108:
        val = t108VerbalCommunicationScore;
        break;
      case 109:
        val = t109NonverbalCommunicationScore;
        break;
      case 110:
        val = t110ActivityLevelScore;
        break;
      case 111:
        val = t111LevelAndConsistencyOfIntellectualResponseScore;
        break;
      case 112:
        val = t112GeneralImpressionsScore;
        break;
      case 113:
        val = t113SocialEmotionalUnderstandingScore;
        break;
      case 114:
        val = t114EmotionalExpressionAndRegulationOfEmotionsScore;
        break;
      case 115:
        val = t115RelatingToPeopleScore;
        break;
      case 116:
        val = t116BodyUseScore;
        break;
      case 117:
        val = t117ObjectUseInPlayScore;
        break;
      case 118:
        val = t118VisualResponseScore;
        break;
      case 119:
        val = t119ListeningResponseScore;
        break;
      case 646:
        val = t646AdaptationToChangeRestrictedInterestsScore;
        break;
      case 120:
        val = t120InattentionScore;
        break;
      case 121:
        val = t121HyperactivityImpulsivityScore;
        break;
      case 122:
        val = t122LearningProblemsScore;
        break;
      case 123:
        val = t123ExecutiveFunctioningScore;
        break;
      case 124:
        val = t124DefianceAggressionScore;
        break;
      case 125:
        val = t125PeerRelationsScore;
        break;
      case 126:
        val = t126AdhdInattentiveScore;
        break;
      case 127:
        val = t127AdhdHyperactiveImpulsiveScore;
        break;
      case 128:
        val = t128ConductDisorderScore;
        break;
      case 129:
        val = t129OppositionalDefiantDisorderScore;
        break;
      case 130:
        val = t130Conners3AdhdIndexScore;
        break;
      case 131:
        val = t131Conners3GlobalIndexScore;
        break;
      case 132:
        val = t132AnxietyScore;
        break;
      case 133:
        val = t133DepressionScore;
        break;
      case 134:
        val = t134SevereConductScore;
        break;
      case 135:
        val = t135PositiveImpressionScore;
        break;
      case 136:
        val = t136NegativeImpressionScore;
        break;
      case 137:
        val = t137InconsistencyIndexScore;
        break;
      case 138:
        val = t138InattentionScore;
        break;
      case 139:
        val = t139HyperactivityImpulsivityScore;
        break;
      case 140:
        val = t140LearningProblemsExecutiveFunctioningScore;
        break;
      case 141:
        val = t141LearningProblemsScore;
        break;
      case 142:
        val = t142ExecutiveFunctioningScore;
        break;
      case 143:
        val = t143DefianceAggressionScore;
        break;
      case 144:
        val = t144PeerRelationsScore;
        break;
      case 145:
        val = t145AdhdInattentiveScore;
        break;
      case 146:
        val = t146AdhdHyperactiveImpulsiveScore;
        break;
      case 147:
        val = t147ConductDisorderScore;
        break;
      case 148:
        val = t148OppositionalDefiantDisorderScore;
        break;
      case 149:
        val = t149Conners3AdhdIndexScore;
        break;
      case 150:
        val = t150Conners3GlobalIndexScore;
        break;
      case 151:
        val = t151AnxietyScore;
        break;
      case 152:
        val = t152DepressionScore;
        break;
      case 153:
        val = t153SevereConductScore;
        break;
      case 154:
        val = t154PositiveImpressionScore;
        break;
      case 155:
        val = t155NegativeImpressionScore;
        break;
      case 156:
        val = t156InconsistencyIndexScore;
        break;
      case 157:
        val = t157InattentionScore;
        break;
      case 158:
        val = t158HyperactivityImpulsivityScore;
        break;
      case 159:
        val = t159LearningProblemsScore;
        break;
      case 160:
        val = t160DefianceAggressionScore;
        break;
      case 161:
        val = t161FamilyRelationsScore;
        break;
      case 162:
        val = t162AdhdInattentiveScore;
        break;
      case 163:
        val = t163AdhdHyperactiveImpulsiveScore;
        break;
      case 164:
        val = t164ConductDisorderScore;
        break;
      case 165:
        val = t165OppositionalDefiantDisorderScore;
        break;
      case 166:
        val = t166Conners3AdhdIndexScore;
        break;
      case 644:
        val = t644AnxietyScore;
        break;
      case 167:
        val = t167DepressionScore;
        break;
      case 168:
        val = t168SevereConductScore;
        break;
      case 169:
        val = t169PositiveImpressionScore;
        break;
      case 170:
        val = t170NegativeImpressionScore;
        break;
      case 171:
        val = t171InconsistencyIndexScore;
        break;
      case 172:
        val = t172PictorialAnalogiesScore;
        break;
      case 173:
        val = t173GeometricAnalogiesScore;
        break;
      case 174:
        val = t174PictorialCategoriesScore;
        break;
      case 175:
        val = t175GeometricCategoriesScore;
        break;
      case 176:
        val = t176PictorialSequencesScore;
        break;
      case 177:
        val = t177GeometricSequencesScore;
        break;
      case 178:
        val = t178PictorialScaleScore;
        break;
      case 179:
        val = t179GeometricScaleScore;
        break;
      case 180:
        val = t180FullScaleScore;
        break;
      case 181:
        val = t181VerbalComprehensionScore;
        break;
      case 182:
        val = t182PictureSimilaritiesScore;
        break;
      case 183:
        val = t183NamingVocabularyScore;
        break;
      case 184:
        val = t184RecallOfObjectsImmediateScore;
        break;
      case 185:
        val = t185PatternConstructionScore;
        break;
      case 186:
        val = t186MatricesScore;
        break;
      case 187:
        val = t187RecallOfObjectsDelayedScore;
        break;
      case 188:
        val = t188CopyingScore;
        break;
      case 189:
        val = t189RecallOfDesignsScore;
        break;
      case 190:
        val = t190WordDefinitionsScore;
        break;
      case 191:
        val = t191RecallOfObjectsImmediateScore;
        break;
      case 192:
        val = t192PatternConstructionScore;
        break;
      case 193:
        val = t193MatricesScore;
        break;
      case 194:
        val = t194RecallOfObjectsDelayedScore;
        break;
      case 195:
        val = t195VerbalSimilaritiesScore;
        break;
      case 196:
        val = t196SequentialAndQuantitativeReasoningScore;
        break;
      case 197:
        val = t197RecallOfDigitsForwardScore;
        break;
      case 198:
        val = t198RecognitionOfPicturesScore;
        break;
      case 199:
        val = t199EarlyNumberConceptsScore;
        break;
      case 200:
        val = t200MatchingLetterLikeFormsScore;
        break;
      case 201:
        val = t201RecallOfSequentialOrderScore;
        break;
      case 202:
        val = t202SpeedOfInformationProcessingScore;
        break;
      case 203:
        val = t203RecallOfDigitsBackwardScore;
        break;
      case 204:
        val = t204PhonologicalProcessingScore;
        break;
      case 205:
        val = t205RapidNamingScore;
        break;
      case 206:
        val = t206TrailMakingTestScore;
        break;
      case 207:
        val = t207VerbalFluencyTestScore;
        break;
      case 208:
        val = t208DesignFluencyTestScore;
        break;
      case 209:
        val = t209ColorWordInterferenceTestScore;
        break;
      case 210:
        val = t210SortingTestScore;
        break;
      case 211:
        val = t211TwentyQuestionsTestScore;
        break;
      case 212:
        val = t212WordContextTestScore;
        break;
      case 213:
        val = t213TowerTestScore;
        break;
      case 214:
        val = t214ProverbTestScore;
        break;
      case 215:
        val = t215RestrictiveRepetitiveBehaviorsScore;
        break;
      case 216:
        val = t216SocialInteractionScore;
        break;
      case 217:
        val = t217SocialCommunicationScore;
        break;
      case 218:
        val = t218EmotionalResponsesScore;
        break;
      case 219:
        val = t219CognitiveStyleScore;
        break;
      case 220:
        val = t220MaladaptiveSpeechScore;
        break;
      case 221:
        val = t221ListLearningScore;
        break;
      case 222:
        val = t222StoryMemoryScore;
        break;
      case 223:
        val = t223FigureCopyScore;
        break;
      case 224:
        val = t224LineOrientationScore;
        break;
      case 225:
        val = t225PictureNamingScore;
        break;
      case 226:
        val = t226SemanticFluencyScore;
        break;
      case 227:
        val = t227DigitSpanScore;
        break;
      case 228:
        val = t228CodingScore;
        break;
      case 229:
        val = t229ListRecallScore;
        break;
      case 230:
        val = t230ListRecognitionScore;
        break;
      case 231:
        val = t231StoryRecallScore;
        break;
      case 232:
        val = t232FigureRecallScore;
        break;
      case 233:
        val = t233ReceptiveScore;
        break;
      case 234:
        val = t234ExpressiveScore;
        break;
      case 235:
        val = t235WrittenScore;
        break;
      case 236:
        val = t236PersonalScore;
        break;
      case 237:
        val = t237DomesticScore;
        break;
      case 238:
        val = t238CommunityScore;
        break;
      case 239:
        val = t239InterpersonalRelationshipsScore;
        break;
      case 240:
        val = t240PlayAndLeisureTimeScore;
        break;
      case 241:
        val = t241CopingSkillsScore;
        break;
      case 242:
        val = t242GrossScore;
        break;
      case 243:
        val = t243FineScore;
        break;
      case 244:
        val = t244MaladaptiveBehaviorIndexScore;
        break;
      case 245:
        val = t245MaladaptiveBehaviorCriticalItemsScore;
        break;
      case 246:
        val = t246SimilaritiesScore;
        break;
      case 247:
        val = t247VocabularyScore;
        break;
      case 248:
        val = t248BlockDesignScore;
        break;
      case 249:
        val = t249MatrixReasoningScore;
        break;
      case 250:
        val = t250ListeningComprehensionGradesPK12Score;
        break;
      case 251:
        val = t251EarlyReadingSkillsGradesPK3Score;
        break;
      case 252:
        val = t252ReadingComprehensionGrades112Score;
        break;
      case 253:
        val = t253MathProblemSolvingGradesPK12Score;
        break;
      case 254:
        val = t254AlphabetWritingFluencyGradesPK3Score;
        break;
      case 255:
        val = t255SentenceCompositionGrades112Score;
        break;
      case 256:
        val = t256WordReadingGrades112Score;
        break;
      case 257:
        val = t257EssayCompositionGrades312Score;
        break;
      case 258:
        val = t258PseudowordDecodingGrades112Score;
        break;
      case 259:
        val = t259NumericalOperationsGradesK12Score;
        break;
      case 260:
        val = t260OralExpressionGradesPK12Score;
        break;
      case 261:
        val = t261OralReadingFluencyGrades112Score;
        break;
      case 262:
        val = t262SpellingGradesK12Score;
        break;
      case 263:
        val = t263MathFluencyAdditionScore;
        break;
      case 264:
        val = t264MathFluencySubtractionScore;
        break;
      case 265:
        val = t265MathFluencyMultiplicationScore;
        break;
      case 266:
        val = t266StoryMemoryScore;
        break;
      case 267:
        val = t267VerbalLearningScore;
        break;
      case 268:
        val = t268DesignMemoryScore;
        break;
      case 269:
        val = t269PictureMemoryScore;
        break;
      case 270:
        val = t270FingerWindowsScore;
        break;
      case 271:
        val = t271NumberLetterScore;
        break;
      case 272:
        val = t272SentenceMemoryScore;
        break;
      case 273:
        val = t273SoundSymbolScore;
        break;
      case 274:
        val = t274VerbalWorkingMemoryScore;
        break;
      case 275:
        val = t275SymbolicWorkingMemoryScore;
        break;
      case 276:
        val = t276StoryMemoryDelayRecallScore;
        break;
      case 277:
        val = t277VerbalLearningDelayRecallScore;
        break;
      case 278:
        val = t278SoundSymbolDelayRecallScore;
        break;
      case 279:
        val = t279StoryMemoryRecognitionScore;
        break;
      case 280:
        val = t280VerbalLearningRecognitionScore;
        break;
      case 281:
        val = t281DesignMemoryRecognitionScore;
        break;
      case 282:
        val = t282PictureMemoryRecognitionScore;
        break;
      case 283:
        val = t283FIndexScore;
        break;
      case 284:
        val = t284LIndexScore;
        break;
      case 285:
        val = t285VIndexScore;
        break;
      case 286:
        val = t286AlcoholAbuseScore;
        break;
      case 287:
        val = t287AnxietyScore;
        break;
      case 288:
        val = t288AttentionProblemsScore;
        break;
      case 289:
        val = t289AttitudeToSchoolScore;
        break;
      case 290:
        val = t290AttitudeToTeachersScore;
        break;
      case 291:
        val = t291AtypicalityScore;
        break;
      case 292:
        val = t292DepressionScore;
        break;
      case 293:
        val = t293HyperactivityScore;
        break;
      case 294:
        val = t294LocusOfControlScore;
        break;
      case 295:
        val = t295SchoolMaladjustmentScore;
        break;
      case 296:
        val = t296SensationSeekingScore;
        break;
      case 297:
        val = t297SenseOfInadequacyScore;
        break;
      case 298:
        val = t298SocialStressScore;
        break;
      case 299:
        val = t299SomatizationScore;
        break;
      case 300:
        val = t300InterpersonalRelationsScore;
        break;
      case 301:
        val = t301RelationsWithParentsScore;
        break;
      case 302:
        val = t302SelfEsteemScore;
        break;
      case 303:
        val = t303SelfRelianceScore;
        break;
      case 304:
        val = t304AngerControlScore;
        break;
      case 305:
        val = t305EgoStrengthScore;
        break;
      case 306:
        val = t306ManiaScore;
        break;
      case 307:
        val = t307TestAnxietyScore;
        break;
      case 308:
        val = t308AttitudeToSchoolScore;
        break;
      case 309:
        val = t309AttitudeToTeachersScore;
        break;
      case 310:
        val = t310AtypicalityScore;
        break;
      case 311:
        val = t311LocusOfControlScore;
        break;
      case 312:
        val = t312SocialStressScore;
        break;
      case 313:
        val = t313AnxietyScore;
        break;
      case 314:
        val = t314DepressionScore;
        break;
      case 315:
        val = t315SenseOfInadequacyScore;
        break;
      case 316:
        val = t316AttentionProblemsScore;
        break;
      case 317:
        val = t317HyperactivityScore;
        break;
      case 318:
        val = t318SocialStressScore;
        break;
      case 319:
        val = t319AnxietyScore;
        break;
      case 320:
        val = t320DepressionScore;
        break;
      case 321:
        val = t321SenseOfInadequacyScore;
        break;
      case 322:
        val = t322SelfEsteemScore;
        break;
      case 323:
        val = t323SelfRelianceScore;
        break;
      case 324:
        val = t324InterpersonalRelationsScore;
        break;
      case 325:
        val = t325RelationsWithParentsScore;
        break;
      case 326:
        val = t326SelfEsteemScore;
        break;
      case 327:
        val = t327SelfRelianceScore;
        break;
      case 328:
        val = t328AttitudeToSchoolScore;
        break;
      case 329:
        val = t329AttitudeToTeachersScore;
        break;
      case 330:
        val = t330SensationSeekingScore;
        break;
      case 331:
        val = t331AtypicalityScore;
        break;
      case 332:
        val = t332LocusOfControlScore;
        break;
      case 333:
        val = t333SocialStressScore;
        break;
      case 334:
        val = t334AnxietyScore;
        break;
      case 335:
        val = t335DepressionScore;
        break;
      case 336:
        val = t336SenseOfInadequacyScore;
        break;
      case 337:
        val = t337SomatizationScore;
        break;
      case 338:
        val = t338AttentionProblemsScore;
        break;
      case 339:
        val = t339HyperactivityScore;
        break;
      case 340:
        val = t340SocialStressScore;
        break;
      case 341:
        val = t341AnxietyScore;
        break;
      case 342:
        val = t342DepressionScore;
        break;
      case 343:
        val = t343SenseOfInadequacyScore;
        break;
      case 344:
        val = t344SelfEsteemScore;
        break;
      case 345:
        val = t345SelfRelianceScore;
        break;
      case 346:
        val = t346InterpersonalRelationsScore;
        break;
      case 347:
        val = t347RelationsWithParentsScore;
        break;
      case 348:
        val = t348SelfEsteemScore;
        break;
      case 349:
        val = t349SelfRelianceScore;
        break;
      case 350:
        val = t350AtypicalityScore;
        break;
      case 351:
        val = t351LocusOfControlScore;
        break;
      case 352:
        val = t352SocialStressScore;
        break;
      case 353:
        val = t353AnxietyScore;
        break;
      case 354:
        val = t354DepressionScore;
        break;
      case 355:
        val = t355SenseOfInadequacyScore;
        break;
      case 356:
        val = t356SomatizationScore;
        break;
      case 357:
        val = t357AttentionProblemsScore;
        break;
      case 358:
        val = t358HyperactivityScore;
        break;
      case 359:
        val = t359SocialStressScore;
        break;
      case 360:
        val = t360AnxietyScore;
        break;
      case 361:
        val = t361DepressionScore;
        break;
      case 362:
        val = t362SenseOfInadequacyScore;
        break;
      case 363:
        val = t363SelfEsteemScore;
        break;
      case 364:
        val = t364SelfRelianceScore;
        break;
      case 365:
        val = t365InterpersonalRelationsScore;
        break;
      case 366:
        val = t366RelationsWithParentsScore;
        break;
      case 367:
        val = t367SelfEsteemScore;
        break;
      case 368:
        val = t368SelfRelianceScore;
        break;
      case 369:
        val = t369FIndexScore;
        break;
      case 370:
        val = t370AggressionScore;
        break;
      case 371:
        val = t371AnxietyScore;
        break;
      case 372:
        val = t372AttentionProblemsScore;
        break;
      case 373:
        val = t373AtypicalityScore;
        break;
      case 374:
        val = t374ConductProblemsScore;
        break;
      case 375:
        val = t375DepressionScore;
        break;
      case 376:
        val = t376HyperactivityScore;
        break;
      case 377:
        val = t377LearningProblemsScore;
        break;
      case 378:
        val = t378SomatizationScore;
        break;
      case 379:
        val = t379WithdrawalScore;
        break;
      case 380:
        val = t380ActivitiesOfDailyLivingScore;
        break;
      case 381:
        val = t381AdaptabilityScore;
        break;
      case 382:
        val = t382FunctionalCommunicationScore;
        break;
      case 383:
        val = t383LeadershipScore;
        break;
      case 384:
        val = t384SocialSkillsScore;
        break;
      case 385:
        val = t385StudySkillsScore;
        break;
      case 386:
        val = t386AngerControlScore;
        break;
      case 387:
        val = t387BullyingScore;
        break;
      case 388:
        val = t388DevelopmentalSocialDisordersScore;
        break;
      case 389:
        val = t389EmotionalSelfControlScore;
        break;
      case 390:
        val = t390ExecutiveFunctioningScore;
        break;
      case 391:
        val = t391NegativeEmotionalityScore;
        break;
      case 392:
        val = t392ResiliencyScore;
        break;
      case 393:
        val = t393HyperactivityScore;
        break;
      case 394:
        val = t394AggressionScore;
        break;
      case 395:
        val = t395AnxietyScore;
        break;
      case 396:
        val = t396DepressionScore;
        break;
      case 397:
        val = t397SomatizationScore;
        break;
      case 398:
        val = t398AdaptabilityScore;
        break;
      case 399:
        val = t399SocialSkillsScore;
        break;
      case 400:
        val = t400FunctionalCommunicationScore;
        break;
      case 401:
        val = t401HyperactivityScore;
        break;
      case 402:
        val = t402AggressionScore;
        break;
      case 403:
        val = t403DepressionScore;
        break;
      case 404:
        val = t404AttentionProblemsScore;
        break;
      case 405:
        val = t405AtypicalityScore;
        break;
      case 406:
        val = t406WithdrawalScore;
        break;
      case 407:
        val = t407HyperactivityScore;
        break;
      case 408:
        val = t408AggressionScore;
        break;
      case 409:
        val = t409ConductProblemsScore;
        break;
      case 410:
        val = t410AnxietyScore;
        break;
      case 411:
        val = t411DepressionScore;
        break;
      case 412:
        val = t412SomatizationScore;
        break;
      case 413:
        val = t413LearningProblemsScore;
        break;
      case 414:
        val = t414AttentionProblemsScore;
        break;
      case 415:
        val = t415AdaptabilityScore;
        break;
      case 416:
        val = t416SocialSkillsScore;
        break;
      case 417:
        val = t417FunctionalCommunicationScore;
        break;
      case 418:
        val = t418LeadershipScore;
        break;
      case 419:
        val = t419StudySkillsScore;
        break;
      case 420:
        val = t420HyperactivityScore;
        break;
      case 421:
        val = t421AggressionScore;
        break;
      case 422:
        val = t422DepressionScore;
        break;
      case 423:
        val = t423AttentionProblemsScore;
        break;
      case 424:
        val = t424AtypicalityScore;
        break;
      case 425:
        val = t425WithdrawalScore;
        break;
      case 426:
        val = t426HyperactivityScore;
        break;
      case 427:
        val = t427AggressionScore;
        break;
      case 428:
        val = t428AnxietyScore;
        break;
      case 429:
        val = t429DepressionScore;
        break;
      case 430:
        val = t430SomatizationScore;
        break;
      case 431:
        val = t431AdaptabilityScore;
        break;
      case 432:
        val = t432SocialSkillsScore;
        break;
      case 433:
        val = t433FunctionalCommunicationScore;
        break;
      case 434:
        val = t434ActivitiesOfDailyLivingScore;
        break;
      case 435:
        val = t435HyperactivityScore;
        break;
      case 436:
        val = t436AggressionScore;
        break;
      case 437:
        val = t437DepressionScore;
        break;
      case 438:
        val = t438AttentionProblemsScore;
        break;
      case 439:
        val = t439AtypicalityScore;
        break;
      case 440:
        val = t440WithdrawalScore;
        break;
      case 441:
        val = t441HyperactivityScore;
        break;
      case 442:
        val = t442AggressionScore;
        break;
      case 443:
        val = t443ConductProblemsScore;
        break;
      case 444:
        val = t444AnxietyScore;
        break;
      case 445:
        val = t445DepressionScore;
        break;
      case 446:
        val = t446SomatizationScore;
        break;
      case 447:
        val = t447AdaptabilityScore;
        break;
      case 448:
        val = t448SocialSkillsScore;
        break;
      case 449:
        val = t449FunctionalCommunicationScore;
        break;
      case 450:
        val = t450ActivitiesOfDailyLivingScore;
        break;
      case 451:
        val = t451HyperactivityScore;
        break;
      case 452:
        val = t452AggressionScore;
        break;
      case 453:
        val = t453DepressionScore;
        break;
      case 454:
        val = t454AttentionProblemsScore;
        break;
      case 455:
        val = t455AtypicalityScore;
        break;
      case 456:
        val = t456WithdrawalScore;
        break;
      case 457:
        val = t457SimilaritiesScore;
        break;
      case 458:
        val = t458VocabularyScore;
        break;
      case 459:
        val = t459InformationScore;
        break;
      case 460:
        val = t460ComprehensionScore;
        break;
      case 461:
        val = t461BlockDesignScore;
        break;
      case 462:
        val = t462MatrixReasoningScore;
        break;
      case 463:
        val = t463VisualPuzzlesScore;
        break;
      case 464:
        val = t464FigureWeightsScore;
        break;
      case 465:
        val = t465PictureCompletionScore;
        break;
      case 466:
        val = t466DigitSpanScore;
        break;
      case 467:
        val = t467ArithmeticScore;
        break;
      case 468:
        val = t468LetterNumberSequencingScore;
        break;
      case 469:
        val = t469CodingScore;
        break;
      case 470:
        val = t470SymbolSearchScore;
        break;
      case 471:
        val = t471CancellationScore;
        break;
      case 472:
        val = t472PoorAchievementAndMemoryScore;
        break;
      case 473:
        val = t473InadequateAbilitiesScore;
        break;
      case 474:
        val = t474LearningProblemsScore;
        break;
      case 475:
        val = t475BrashnessScore;
        break;
      case 476:
        val = t476DistractibilityAndOveractivityScore;
        break;
      case 477:
        val = t477ImpulsivityScore;
        break;
      case 478:
        val = t478AntisocialBehaviorScore;
        break;
      case 479:
        val = t479DyscontrolScore;
        break;
      case 480:
        val = t480NoncomplianceScore;
        break;
      case 481:
        val = t481ParentChildConflictScore;
        break;
      case 482:
        val = t482ParentMaladjustmentScore;
        break;
      case 483:
        val = t483MaritalDiscordScore;
        break;
      case 484:
        val = t484FeelingsOfAlienationScore;
        break;
      case 485:
        val = t485HallucinationsAndDelusionsScore;
        break;
      case 486:
        val = t486PsychosomaticSyndromeScore;
        break;
      case 487:
        val = t487MuscularTensionAndAnxietyScore;
        break;
      case 488:
        val = t488PreoccupationWithDiseaseScore;
        break;
      case 489:
        val = t489FearAndWorryScore;
        break;
      case 490:
        val = t490DepressionScore;
        break;
      case 491:
        val = t491SleepDisturbanceScore;
        break;
      case 492:
        val = t492SocialIntroversionScore;
        break;
      case 493:
        val = t493IsolationScore;
        break;
      case 494:
        val = t494LimitedPeerStatusScore;
        break;
      case 495:
        val = t495ConflictWithPeersScore;
        break;
      case 496:
        val = t496Schizoid1Score;
        break;
      case 497:
        val = t497Avoidant2AScore;
        break;
      case 498:
        val = t498Depressive2BScore;
        break;
      case 499:
        val = t499Dependent3Score;
        break;
      case 500:
        val = t500Histrionic4Score;
        break;
      case 501:
        val = t501Narcissistic5Score;
        break;
      case 502:
        val = t502Antisocial6AScore;
        break;
      case 503:
        val = t503SadisticAggressive6BScore;
        break;
      case 504:
        val = t504Compulsive7Score;
        break;
      case 505:
        val = t505NegativisticPassiveAggressive8AScore;
        break;
      case 506:
        val = t506MasochisticSelfDefeating8BScore;
        break;
      case 507:
        val = t507SchizotypalSScore;
        break;
      case 508:
        val = t508BorderlineCScore;
        break;
      case 509:
        val = t509ParanoidPScore;
        break;
      case 510:
        val = t510AnxietyAScore;
        break;
      case 511:
        val = t511SomatoformHScore;
        break;
      case 512:
        val = t512BipolarManicNScore;
        break;
      case 513:
        val = t513DysthymiaDScore;
        break;
      case 514:
        val = t514AlcoholDependencebScore;
        break;
      case 515:
        val = t515DrugDependenceTScore;
        break;
      case 516:
        val = t516PostTraumaticStressDisorderRScore;
        break;
      case 517:
        val = t517ThoughtDisorderSSScore;
        break;
      case 518:
        val = t518MajorDepressionCCScore;
        break;
      case 519:
        val = t519DelusionalDisorderPPScore;
        break;
      case 520:
        val = t520DisclosureXScore;
        break;
      case 521:
        val = t521DesirabilityYScore;
        break;
      case 522:
        val = t522DebasementZScore;
        break;
      case 523:
        val = t523InvalidityVScore;
        break;
      case 524:
        val = t524InconsistencyWScore;
        break;
      case 525:
        val = t525HypochondriasisHsScore;
        break;
      case 526:
        val = t526DepressionDScore;
        break;
      case 527:
        val = t527HysteriaHyScore;
        break;
      case 528:
        val = t528PsychopathicDeviatePdScore;
        break;
      case 529:
        val = t529MasculinityFemininityMfScore;
        break;
      case 530:
        val = t530ParanoiaPaScore;
        break;
      case 531:
        val = t531PsychastheniaPtScore;
        break;
      case 532:
        val = t532SchizophreniaScScore;
        break;
      case 533:
        val = t533HypomaniaMaScore;
        break;
      case 534:
        val = t534SocialIntroversionSiScore;
        break;
      case 535:
        val = t535LieLScore;
        break;
      case 536:
        val = t536FScore;
        break;
      case 537:
        val = t537BackFFbScore;
        break;
      case 538:
        val = t538KScore;
        break;
      case 539:
        val = t539HypochondriasisHsScore;
        break;
      case 540:
        val = t540DepressionDScore;
        break;
      case 541:
        val = t541HysteriaHyScore;
        break;
      case 542:
        val = t542PsychopathicDeviatePdScore;
        break;
      case 543:
        val = t543MasculinityFemininityMfScore;
        break;
      case 544:
        val = t544ParanoiaPaScore;
        break;
      case 545:
        val = t545PsychastheniaPtScore;
        break;
      case 546:
        val = t546SchizophreniaScScore;
        break;
      case 547:
        val = t547HypomaniaMaScore;
        break;
      case 548:
        val = t548SocialIntroversionSiScore;
        break;
      case 549:
        val = t549CNSScore;
        break;
      case 550:
        val = t550VRINScore;
        break;
      case 551:
        val = t551TRINScore;
        break;
      case 552:
        val = t552FScore;
        break;
      case 553:
        val = t553F1Score;
        break;
      case 554:
        val = t554F2Score;
        break;
      case 555:
        val = t555LScore;
        break;
      case 556:
        val = t556KScore;
        break;
      case 557:
        val = t557AnimalSortingASScore;
        break;
      case 558:
        val = t558AuditoryAttentionAAAndResponseSetRSScore;
        break;
      case 559:
        val = t559ClocksCLScore;
        break;
      case 560:
        val = t560DesignFluencyDFScore;
        break;
      case 561:
        val = t561InhibitionINScore;
        break;
      case 562:
        val = t562StatueSTScore;
        break;
      case 563:
        val = t563BodyPartNamingBPNAndIdentificationBPIScore;
        break;
      case 564:
        val = t564ComprehensionOfInstructionsCIScore;
        break;
      case 565:
        val = t565OromotorSequencesOSScore;
        break;
      case 566:
        val = t566PhonologicalProcessingPHScore;
        break;
      case 567:
        val = t567RepetitionNonsenseWordsRNScore;
        break;
      case 568:
        val = t568SpeededNamingSNScore;
        break;
      case 569:
        val = t569WordGenerationWGScore;
        break;
      case 571:
        val = t571ListMemoryLMListMemoryDelayedLMDScore;
        break;
      case 572:
        val = t572MemoryForDesignsMDMemoryForDesignsDelayedMDDScore;
        break;
      case 573:
        val = t573MemoryForFacesMFMemoryForFacesDelayedMFDScore;
        break;
      case 574:
        val = t574MemoryForNamesMNMemoryForNamesDelayedMNDScore;
        break;
      case 575:
        val = t575NarrativeMemoryNMScore;
        break;
      case 576:
        val = t576SentenceRepetitionSRScore;
        break;
      case 577:
        val = t577WordListInterferenceWIScore;
        break;
      case 578:
        val = t578FingertipTappingFTScore;
        break;
      case 579:
        val = t579ImitatingHandPositionsIHScore;
        break;
      case 580:
        val = t580ManualMotorSequencesMMScore;
        break;
      case 581:
        val = t581VisuomotorPrecisionVPScore;
        break;
      case 582:
        val = t582AffectRecognitionARScore;
        break;
      case 583:
        val = t583TheoryOfMindTMScore;
        break;
      case 584:
        val = t584ArrowsAWScore;
        break;
      case 585:
        val = t585BlockConstructionBCScore;
        break;
      case 586:
        val = t586DesignCopyingDCScore;
        break;
      case 587:
        val = t587GeometricPuzzlesGPScore;
        break;
      case 588:
        val = t588PicturePuzzlesPPScore;
        break;
      case 589:
        val = t589RouteFindingRFScore;
        break;
      case 590:
        val = t590DrawingScore;
        break;
      case 591:
        val = t591MatchingScore;
        break;
      case 592:
        val = t592PegboardScore;
        break;
      case 593:
        val = t593VocabularyScore;
        break;
      case 594:
        val = t594GeneralInformationScore;
        break;
      case 595:
        val = t595NumberSeriesScore;
        break;
      case 596:
        val = t596ConceptFormationScore;
        break;
      case 597:
        val = t597AnalysisSynthesisScore;
        break;
      case 598:
        val = t598VerbalAttentionScore;
        break;
      case 599:
        val = t599NumbersReversedScore;
        break;
      case 600:
        val = t600ObjectNumberSequencingScore;
        break;
      case 601:
        val = t601PairCancellationScore;
        break;
      case 645:
        val = t645LetterPatternMatchingScore;
        break;
      case 602:
        val = t602PhonologicalProcessingScore;
        break;
      case 603:
        val = t603NonWordRepetitionScore;
        break;
      case 604:
        val = t604RecallScore;
        break;
      case 605:
        val = t605VisualAuditoryLearningScore;
        break;
      case 606:
        val = t606VisualizationScore;
        break;
      case 607:
        val = t607PictureRecognitionScore;
        break;
      case 608:
        val = t608UnderresponseUNDScore;
        break;
      case 609:
        val = t609HyperresponseHYPScore;
        break;
      case 610:
        val = t610AnxietyANXScore;
        break;
      case 611:
        val = t611DepressionDEPScore;
        break;
      case 612:
        val = t612AngerANGScore;
        break;
      case 613:
        val = t613PosttraumaticStressPTSScore;
        break;
      case 614:
        val = t614DissociationDISScore;
        break;
      case 615:
        val = t615SexualConcernsSCScore;
        break;
      case 616:
        val = t616LetterWordIdentificationScore;
        break;
      case 617:
        val = t617WordAttackScore;
        break;
      case 618:
        val = t618PassageComprehensionScore;
        break;
      case 619:
        val = t619ReadingRecallScore;
        break;
      case 620:
        val = t620ReadingVocabularyScore;
        break;
      case 621:
        val = t621CalculationScore;
        break;
      case 622:
        val = t622MathFactFluencyScore;
        break;
      case 623:
        val = t623AppliedProblemsScore;
        break;
      case 624:
        val = t624NumberMatricesScore;
        break;
      case 625:
        val = t625WritingSamplesScore;
        break;
      case 626:
        val = t626SentenceWritingFluencyScore;
        break;
      case 627:
        val = t627OralReadingScore;
        break;
      case 628:
        val = t628SentenceReadingFluencyScore;
        break;
      case 629:
        val = t629SpellingScore;
        break;
      case 630:
        val = t630SpellingOfSoundsScore;
        break;
      case 631:
        val = t631EditingScore;
        break;
      case 632:
        val = t632ScienceScore;
        break;
      case 633:
        val = t633SocialStudiesScore;
        break;
      case 634:
        val = t634HumanitiesScore;
        break;
      case 635:
        val = t635WordAttackScore;
        break;
      case 636:
        val = t636SpellingOfSoundsScore;
        break;
      case 637:
        val = t637BriefCognitiveStatusExamScore;
        break;
      case 638:
        val = t638LogicalMemoryScore;
        break;
      case 639:
        val = t639VerbalPairedAssociatesScore;
        break;
      case 640:
        val = t640DesignsScore;
        break;
      case 641:
        val = t641VisualReproductionScore;
        break;
      case 642:
        val = t642SpatialAdditionScore;
        break;
      case 643:
        val = t643SymbolSpanScore;
        break;
      case 647:
        val = t647SimilaritiesScore;
        break;
      case 648:
        val = t648VocabularyScore;
        break;
      case 649:
        val = t649InformationScore;
        break;
      case 650:
        val = t650ComprehensionScore;
        break;
      case 651:
        val = t651MatrixReasoningScore;
        break;
      case 652:
        val = t652PictureConceptsScore;
        break;
      case 653:
        val = t653BlockDesignScore;
        break;
      case 654:
        val = t654ObjectAssemblyScore;
        break;
      case 655:
        val = t655PictureMemoryScore;
        break;
      case 656:
        val = t656ZooLocationsScore;
        break;
      case 657:
        val = t657BugSearchScore;
        break;
      case 658:
        val = t658CancellationScore;
        break;
      case 659:
        val = t659AnimalCodingScore;
        break;
      case 660:
        val = t660ReceptiveVocabularyScore;
        break;
      case 661:
        val = t661PictureNamingScore;
        break;
      case 662:
        val = t662SocialStressScore;
        break;
      case 663:
        val = '';
        break;
      case 664:
        val = t664AnxietyScore;
        break;
      case 665:
        val = t665DepressionScore;
        break;
      case 666:
        val = t666SenseOfInadequacyScore;
        break;
      case 667:
        val = t667SelfEsteemScore;
        break;
      case 668:
        val = t668SelfRelianceScore;
        break;
      case 669:
        val = t669BeeryMotorIntegrationVMIScore;
        break;
      case 670:
        val = t670BeeryVisualPerceptionScore;
        break;
      case 671:
        val = t671BeeryMotorCoordinationScore;
        break;
      case 672:
        val = t672ListeningComprehensionGradesPK12Score;
        break;
      case 673:
        val = t673OralExpressionGradesPK12Score;
        break;
      case 674:
        val = t674EarlyReadingSkillsGradesPK3Score;
        break;
      case 675:
        val = t675ReadingComprehensionGrades112Score;
        break;
      case 676:
        val = t676WordReadingGrades112Score;
        break;
      case 677:
        val = t677PseudowordDecodingGrades112Score;
        break;
      case 678:
        val = t678OralReadingFluencyGrades112Score;
        break;
      case 679:
        val = t679SpellingGradesK12Score;
        break;
      case 680:
        val = t680AlphabetWritingFluencyGradesPK3Score;
        break;
      case 681:
        val = t681SentenceCompositionGrades112Score;
        break;
      case 682:
        val = t682EssayCompositionGrades312Score;
        break;
      case 683:
        val = t683NumericalOperationsGradesK12Score;
        break;
      case 684:
        val = t684MathProblemSolvingGradesPK12Score;
        break;
      case 685:
        val = t685MathFluencyAdditionScore;
        break;
      case 686:
        val = t686MathFluencySubtractionScore;
        break;
      case 687:
        val = t687MathFluencyMultiplicationScore;
        break;
      case 688:
        val = t688VocabularyScore;
        break;
      case 689:
        val = t689ComprehensionScore;
        break;
      case 690:
        val = t690ReadingRateScore;
        break;
      case 698:
        val = t698VisualScanningScore;
        break;
      case 699:
        val = t699NumberSequencingScore;
        break;
      case 700:
        val = t700LetterSequencingScore;
        break;
      case 701:
        val = t701CombinedNumberAndLetterSequencingScore;
        break;
      case 702:
        val = t702NumberLetterSwitchingScore;
        break;
      case 703:
        val = t703MotorSpeedScore;
        break;
      case 704:
        val = t704LetterFluencyScore;
        break;
      case 705:
        val = t705CategoryFluencyScore;
        break;
      case 706:
        val = t706CategorySwitchingScore;
        break;
      case 707:
        val = t707FilledDotsScore;
        break;
      case 708:
        val = t708EmptyDotsOnlyScore;
        break;
      case 709:
        val = t709SwitchingScore;
        break;
      case 710:
        val = t710ColorNamingScore;
        break;
      case 711:
        val = t711WordReadingScore;
        break;
      case 712:
        val = t712InhibitionScore;
        break;
      case 713:
        val = t713InhibitionSwitchingScore;
        break;
      case 714:
        val = t714FreeSortingScore;
        break;
      case 715:
        val = t715SortRecognitionScore;
        break;
      case 716:
        val = t716Item1Score;
        break;
      case 717:
        val = t717Item2Score;
        break;
      case 718:
        val = t718Item3Score;
        break;
      case 719:
        val = t719Item4Score;
        break;
      case 720:
        val = t720Item1Score;
        break;
      case 721:
        val = t721Item2Score;
        break;
      case 722:
        val = t722Item1TwoDisksScore;
        break;
      case 723:
        val = t723Item2TwoDisksScore;
        break;
      case 724:
        val = t724Item3TwoDisksScore;
        break;
      case 725:
        val = t725Item4ThreeDisksScore;
        break;
      case 726:
        val = t726Item5ThreeDisksScore;
        break;
      case 727:
        val = t727Item6FourDisksScore;
        break;
      case 728:
        val = t728Item7FourDisksScore;
        break;
      case 729:
        val = t729Item8FiveDisksScore;
        break;
      case 730:
        val = t730Item9FiveDisksScore;
        break;
      case 731:
        val = t731FreeInquiryScore;
        break;
      case 732:
        val = t732MultipleChoiceScore;
        break;
      case 733:
        val = t733RateScore;
        break;
      case 734:
        val = t734AccuracyScore;
        break;
      case 735:
        val = t735FluencyScore;
        break;
      case 736:
        val = t736ComprehensionScore;
        break;
      case 737:
        val = t737Trail1Score;
        break;
      case 738:
        val = t738Trial2Score;
        break;
      case 739:
        val = t739RetentionTrialScore;
        break;
      case 743:
        val = t743VerbalComprehensionScore;
        break;
      case 744:
        val = t744PictureSimilaritiesScore;
        break;
      case 745:
        val = t745NamingVocabularyScore;
        break;
      case 746:
        val = t746PatternConstructionScore;
        break;
      case 747:
        val = t747MatricesScore;
        break;
      case 748:
        val = t748CopyingScore;
        break;
      case 749:
        val = t749RecallOfObjectsImmediateScore;
        break;
      case 750:
        val = t750RecallOfObjectsDelayedScore;
        break;
      case 751:
        val = t751RecallOfDigitsForwardScore;
        break;
      case 752:
        val = t752RecognitionOfPicturesScore;
        break;
      case 753:
        val = t753EarlyNumberConceptsScore;
        break;
      case 754:
        val = t754MatchingLetterLikeFormsScore;
        break;
      case 755:
        val = t755RecallOfSequentialOrderScore;
        break;
      case 756:
        val = t756SpeedOfInformationProcessingScore;
        break;
      case 757:
        val = t757RecallOfDigitsBackwardScore;
        break;
      case 758:
        val = t758PhonologicalProcessingScore;
        break;
      case 759:
        val = t759RapidNamingScore;
        break;
      case 760:
        val = t760RecallOfDesignsScore;
        break;
      case 761:
        val = t761WordDefinitionsScore;
        break;
      case 762:
        val = t762PatternConstructionScore;
        break;
      case 763:
        val = t763MatricesScore;
        break;
      case 764:
        val = t764VerbalSimilaritiesScore;
        break;
      case 765:
        val = t765SequentialAndQuantitativeReasoningScore;
        break;
      case 766:
        val = t766RecallOfObjectsImmediateScore;
        break;
      case 767:
        val = t767RecallOfObjectsDelayedScore;
        break;
      case 768:
        val = t768RecallOfDigitsForwardScore;
        break;
      case 769:
        val = t769RecognitionOfPicturesScore;
        break;
      case 770:
        val = t770RecallOfSequentialOrderScore;
        break;
      case 771:
        val = t771SpeedOfInformationProcessingScore;
        break;
      case 772:
        val = t772RecallOfDigitsBackwardScore;
        break;
      case 773:
        val = t773PhonologicalProcessingScore;
        break;
      default:
        val = '';
    }
    return val;
  };

  const subTestDescriptionColVal = (id) => {
    let val;
    switch (id) {
      case 472:
        val = t472PiyPoorAchievementAndMemoryPercentileRank;
        break;
      case 473:
        val = t473PiyInadequateAbilitiesPercentileRank;
        break;
      case 474:
        val = t474PiyLearningProblemsPercentileRank;
        break;
      case 475:
        val = t475PiyBrashnessPercentileRank;
        break;
      case 476:
        val = t476PiyDistractibilityAndOveractivityPercentileRank;
        break;
      case 477:
        val = t477PiyImpulsivityPercentileRank;
        break;
      case 478:
        val = t478PiyAntisocialBehaviorPercentileRank;
        break;
      case 479:
        val = t479PiyDyscontrolPercentileRank;
        break;
      case 480:
        val = t480PiyNoncompliancePercentileRank;
        break;
      case 481:
        val = t481PiyParentChildConflictPercentileRank;
        break;
      case 482:
        val = t482PiyParentMaladjustmentPercentileRank;
        break;
      case 483:
        val = t483PiyMaritalDiscordPercentileRank;
        break;
      case 484:
        val = t484PiyFeelingsOfAlienationPercentileRank;
        break;
      case 485:
        val = t485PiyHallucinationsAndDelusionsPercentileRank;
        break;
      case 486:
        val = t486PiyPsychosomaticSyndromePercentileRank;
        break;
      case 487:
        val = t487PiyMuscularTensionAndAnxietyPercentileRank;
        break;
      case 488:
        val = t488PiyPreoccupationWithDiseasePercentileRank;
        break;
      case 489:
        val = t489PiyFearAndWorryPercentileRank;
        break;
      case 490:
        val = t490PiyDepressionPercentileRank;
        break;
      case 491:
        val = t491PiySleepDisturbancePercentileRank;
        break;
      case 492:
        val = t492PiySocialIntroversionPercentileRank;
        break;
      case 493:
        val = t493PiyIsolationPercentileRank;
        break;
      case 494:
        val = t494PiyLimitedPeerStatusPercentileRank;
        break;
      case 495:
        val = t495PiyConflictWithPeersPercentileRank;
        break;
      default:
        val = '';
    }
    return val;
  };

  const recommendationFreehandVal = (id) => {
    let val;
    switch (id) {
      case 1:
        val = rAdhdRecommendationsFreehand;
        break;
      case 2:
        val = rAutismRecommendationsFreehand;
        break;
      case 3:
        val = rDementiaRecommendationsFreehand;
        break;
      case 4:
        val = rDysthymiaRecommendationsFreehand;
        break;
      case 5:
        val = rLearningdisabilitymathematicsRecommendationsFreehand;
        break;
      case 6:
        val = rLearningdisabilityreadingRecommendationsFreehand;
        break;
      case 7:
        val = rNeurocognitivedisorderRecommendationsFreehand;
        break;
      case 8:
        val = rVisualprocessingweaknessforchildrenadultsRecommendationsFreehand;
        break;
      case 9:
        val = rVisualprocessingweaknessforchildrenRecommendationsFreehand;
        break;
      case 10:
        val = rLearningdisabilityinwritingdiagnosisforchildrenadultsRecommendationsFreehand;
        break;
      case 11:
        val = rLearningdisabilityinwritingdiagnosisforchildrenRecommendationsFreehand;
        break;
      case 12:
        val = rAuditoryprocessingweaknessforchildrenadultsRecommendationsFreehand;
        break;
      case 13:
        val = rAuditoryprocessingweaknessforchildrenRecommendationsFreehand;
        break;
      case 14:
        val = rTraumaPtsdRecommendationsFreehand;
        break;
      case 15:
        val = rPsychosisRecommendationsFreehand;
        break;
      case 16:
        val = rBehaviorchallengesRecommendationsFreehand;
        break;
      case 17:
        val = rSportsconcussionRecommendationsFreehand;
        break;
      case 18:
        val = rReactiveattachmentdisorderRecommendationsFreehand;
        break;
      case 19:
        val = rTraumaticbraininjuryRecommendationsFreehand;
        break;
      default:
        val = '';
    }
    return val;
  };

  const appendixSubtestSummaryOfScoresScoreVal = (id) => {
    let val;
    switch (id) {
      case 169:
        val = t169AppendixDkefsVerbalFluencySummaryOfScoresScore;
        break;
      case 170:
        val = t170AppendixDkefsDesignFluencySummaryOfScoresScore;
        break;
      case 171:
        val = t171AppendixDkefsColorWordInterferenceTestSummaryOfScoresScore;
        break;
      case 172:
        val = t172AppendixDkefsSortingTestSummaryOfScoresScore;
        break;
      case 173:
        val = t173AppendixDkefsTwentyQuestionsSummaryOfScoresScore;
        break;
      case 174:
        val = t174AppendixDkefsWordContextTestSummaryOfScoresScore;
        break;
      case 175:
        val = t175AppendixDkefsTowerTestSummaryOfScoresScore;
        break;
      case 176:
        val = t176AppendixDkefsProverbTestSummaryOfScoresScore;
        break;
      default:
        val = '';
    }
    return val;
  };

  const appendixSubtestSummaryOfScoresClassificationVal = (id) => {
    let val;
    switch (id) {
      case 169:
        val = t169AppendixDkefsVerbalFluencySummaryOfScoresRange;
        break;
      case 170:
        val = t170AppendixDkefsDesignFluencySummaryOfScoresRange;
        break;
      case 171:
        val = t171AppendixDkefsColorWordInterferenceTestSummaryOfScoresRange;
        break;
      case 172:
        val = t172AppendixDkefsSortingTestSummaryOfScoresRange;
        break;
      case 173:
        val = t173AppendixDkefsTwentyQuestionsSummaryOfScoresRange;
        break;
      case 174:
        val = t174AppendixDkefsWordContextTestSummaryOfScoresRange;
        break;
      case 175:
        val = t175AppendixDkefsTowerTestSummaryOfScoresRange;
        break;
      case 176:
        val = t176AppendixDkefsProverbTestSummaryOfScoresRange;
        break;
      default:
        val = '';
    }
    return val;
  };

  const testScoringTableScoresCol1Val = (id) => {
    let val;
    switch (id) {
      case 30:
        val = t30NelsonDennyStandardScore;
        break;
      case 31:
        val = t31NelsonDennyStandardScore;
        break;
      case 46:
        val = t46QikCptAccuracyIndexScore;
        break;
      default:
        val = '';
    }
    return val;
  };

  const testScoringTableScoresCol2Val = (id) => {
    let val;
    switch (id) {
      case 30:
        val = t30NelsonDennyStandardScore;
        break;
      case 31:
        val = t31NelsonDennyStandardScore;
        break;
      case 33:
        val = t34Gort5PercentileScore;
        break;
      case 34:
        val = t35Gort5PercentileScore;
        break;
      case 35:
        val = t36Gort5PercentileScore;
        break;
      case 36:
        val = t37Gort5PercentileScore;
        break;
      case 46:
        val = t47QikCptSustainedAttentionScore;
        break;
      default:
        val = '';
    }
    return val;
  };

  const testScoringTableScoresCol3Val = (id) => {
    let val;
    switch (id) {
      case 30:
        val = t30NelsonDennyPercentile;
        break;
      case 31:
        val = t31NelsonDennyPercentile;
        break;
      case 33:
        val = t35Gort5AgeLevelEquivalencyScore;
        break;
      case 34:
        val = t36Gort5AgeLevelEquivalencyScore;
        break;
      case 35:
        val = t37Gort5AgeLevelEquivalencyScore;
        break;
      case 36:
        val = t38Gort5AgeLevelEquivalencyScore;
        break;
      case 46:
        val = t48QikCptImpulseControlScore;
        break;
      default:
        val = '';
    }
    return val;
  };

  const testScoringTableScoresCol4Val = (id) => {
    let val;
    switch (id) {
      case 30:
        val = t30NelsonDennyGradeEquivalent;
        break;
      case 31:
        val = t31NelsonDennyGradeEquivalent;
        break;
      case 33:
        val = t36Gort5GradeLevelEquivalencyScore;
        break;
      case 34:
        val = t37Gort5GradeLevelEquivalencyScore;
        break;
      case 35:
        val = t38Gort5GradeLevelEquivalencyScore;
        break;
      case 36:
        val = t39Gort5GradeLevelEquivalencyScore;
        break;
      case 46:
        val = t49QikCptPerformanceIndexScore;
        break;
      default:
        val = '';
    }
    return val;
  };

  const testScoringTableScoresCol5Val = (id) => {
    let val;
    switch (id) {
      case 46:
        val = t50QikCptSpeedOfResponseScore;
        break;
      default:
        val = '';
    }
    return val;
  };

  const testScoringTableScoresCol6Val = (id) => {
    let val;
    switch (id) {
      case 46:
        val = t51QikCptConsistencyOfResponseScore;
        break;
      default:
        val = '';
    }
    return val;
  };

  const gaiScore = (id) => {
    let val;
    switch (id) {
      case 2:
        val = t2WiscvGaiCompositeScore;
        break;
      case 6:
        val = t6WaisivGaiCompositeScore;
        break;
      case 9:
        val = t9WppsiivGaiCompositeScore;
        break;
      default:
        val = '';
    }
    return val;
  };

  const gaiPercentile = (id) => {
    let val;
    switch (id) {
      case 2:
        val = t2WiscvGaiPercentile;
        break;
      case 6:
        val = t6WaisivGaiPercentile;
        break;
      case 9:
        val = t9WppsiivGaiPercentile;
        break;
      default:
        val = '';
    }
    return val;
  };

  const gaiRange = (id) => {
    let val;
    switch (id) {
      case 2:
        val = t2WiscvGaiRange;
        break;
      case 6:
        val = t6WaisivGaiRange;
        break;
      case 9:
        val = t9WppsiivGaiRange;
        break;
      default:
        val = '';
    }
    return val;
  };

  const gcaRange = (id) => {
    let val;
    switch (id) {
      case 10:
        val = t10DasiiGcaRange;
        break;
      default:
        val = '';
    }
    return val;
  };

  const gcaScore = (id) => {
    let val;
    switch (id) {
      case 10:
        val = t10DasiiGcaScore;
        break;
      default:
        val = '';
    }
    return val;
  };

  const gcaPercentile = (id) => {
    let val;
    switch (id) {
      case 10:
        val = t10DasiiGcaPercentile;
        break;
      default:
        val = '';
    }
    return val;
  };

  const sncRange = (id) => {
    let val;
    switch (id) {
      case 10:
        val = t10DasiiSncRange;
        break;
      default:
        val = '';
    }
    return val;
  };

  const sncScore = (id) => {
    let val;
    switch (id) {
      case 10:
        val = t10DasiiSncScore;
        break;
      default:
        val = '';
    }
    return val;
  };

  const sncPercentile = (id) => {
    let val;
    switch (id) {
      case 10:
        val = t10DasiiSncPercentile;
        break;
      default:
        val = '';
    }
    return val;
  };

  const indexConditionVal = (id) => {
    let val;
    switch (id) {
      case 1:
        val = `${
          t1IfFsiqIsMeaningful === true
            ? `Overall, ${
                diName !== undefined ? `${diName}` : 'The Client'
              } demonstrated a consistent performance on the WISC-V and received a Full-Scale IQ (FSIQ) score of ${t1WiscvFullScaleIqCompositeScore} (${t1WiscvFullScaleIqCompositePercentile} percentile), which falls within in the  ${t1WiscvFullScaleIqCompositeRange} range when compared to ${
                diGender === 'Boy' ? 'his' : 'her'
              } same-aged peers.`
            : `Overall, ${
                diName !== undefined ? `${diName}` : 'The Client'
              } demonstrated an inconsistent performance on the WISC-V. As a result, ${
                diGender === 'Boy' ? 'his' : 'her'
              } Full-Scale score cannot be interpreted meaningfully due to the significant discrepancies between the five Composite areas that constitute ${
                diGender === 'Boy' ? 'his' : 'her'
              } Full-Scale score (FSIQ). Therefore, in order to better understand ${
                diGender === 'Boy' ? 'his' : 'her'
              } cognitive strengths and weaknesses, a more in-depth look at all of ${
                diName !== undefined ? `${diName}'s` : "The Client's"
              } individual subtest scores is warranted.`
        }`;
        break;
      case 3:
        val = `${
          t57WasiiiVerbalComprehensionConsistent === true
            ? `Overall, ${
                diName !== undefined ? `${diName}` : 'The Client'
              } demonstrated a consistent performance on the WISC-V and received a Full-Scale IQ (FSIQ) score of ${t57WasiiiVerbalComprehensionCompositeScore} (${t57WasiiiVerbalComprehensionCompositePercentile} percentile), which falls within in the ${t57WasiiiVerbalComprehensionCompositeRange} range of functioning.`
            : `Overall, ${
                diName !== undefined ? `${diName}` : 'The Client'
              } demonstrated an inconsistent performance on the WASI-II. As a result, ${
                diGender === 'Boy' ? 'his' : 'her'
              } Full-Scale score cannot be interpreted meaningfully due to the significant discrepancies between subtests that constitute ${
                diGender === 'Boy' ? 'his' : 'her'
              } Full-Scale score (FSIQ). Therefore, in order to better understand ${
                diGender === 'Boy' ? 'his' : 'her'
              } cognitive strengths and weaknesses, a more in-depth look at all of ${
                diName !== undefined ? `${diName}` : 'The Client'
              }'s individual subtest scores is warranted.`
        }`;
        break;
      case 5:
        val = `${
          t5IfFsiqIsMeaningful === true
            ? `Overall, ${
                diName !== undefined ? `${diName}` : 'The Client'
              } demonstrated a consistent performance on the WISC-V and received a Full-Scale IQ (FSIQ) score of ${t5WaisivFullScaleIqCompositeScore} (${t5WaisivFullScaleIqCompositePercentile} percentile), which falls within in the ${t5WaisivFullScaleIqCompositeRange} range of functioning.`
            : `Overall, ${
                diName !== undefined ? `${diName}` : 'The Client'
              } demonstrated an inconsistent performance on the WAIS-IV. As a result, ${
                diGender === 'Boy' ? 'his' : 'her'
              } Full-Scale score cannot be interpreted meaningfully due to the significant discrepancies between the four Composite areas that constitute ${
                diGender === 'Boy' ? 'his' : 'her'
              } Full-Scale score (FSIQ). Therefore, in order to better understand ${
                diGender === 'Boy' ? 'his' : 'her'
              } cognitive strengths and weaknesses, a more in-depth look at all of ${
                diName !== undefined ? `${diName}'s` : "The Client's"
              } individual subtest scores is warranted.`
        }`;
        break;
      case 7:
        val = `${
          t7IfGiaIsMeaningful === true
            ? `Overall, ${
                diName !== undefined ? `${diName}` : 'The Client'
              } demonstrated a consistent performance on the WJ-IV and received a General Intellectual Ability (GIA) score of ${t7WjivCogGeneralIntellectualAbilityGiaCompositeScore} (${t7WjivCogGeneralIntellectualAbilityGiaCompositePercentile} percentile), which falls within in the ${t7WjivCogGeneralIntellectualAbilityGiaCompositeRange} range of functioning.`
            : `Overall, ${
                diName !== undefined ? `${diName}` : 'The Client'
              } demonstrated an inconsistent performance on the WJ-IV. As a result, ${
                diGender === 'Boy' ? 'his' : 'her'
              } GIA score cannot be interpreted meaningfully due to the significant discrepancies between the seven clusters. Therefore, in order to better understand ${
                diGender === 'Boy' ? 'his' : 'her'
              } cognitive strengths and weaknesses, a more in-depth look at all of ${
                diName !== undefined ? `${diName}'s` : "The Client's"
              }'s individual subtest scores is warranted.`
        }`;
        break;
      case 9:
        val = `${
          t9IfFsiqIsMeaningful === true
            ? `Overall, ${diName} demonstrated a consistent performance on the WISC-V and received a Full-Scale IQ (FSIQ) score of ${t9WppsiivFullScaleIqCompositeScore} (${t9WppsiivFullScaleIqCompositePercentile} percentile), which falls within in the ${t9WppsiivFullScaleIqCompositeRange} range of functioning.`
            : `Overall, ${diName} demonstrated an inconsistent performance on the WPPSI-IV. As a result, ${
                diGender === 'Boy' ? 'his' : 'her'
              } Full-Scale score cannot be interpreted meaningfully due to the significant discrepancies between the five Composite areas that constitute ${
                diGender === 'Boy' ? 'his' : 'her'
              } Full-Scale score (FSIQ). Therefore, in order to better understand ${
                diGender === 'Boy' ? 'his' : 'her'
              } cognitive strengths and weaknesses, a more in-depth look at all of ${diName}'s individual subtest scores is warranted.`
        }`;
        break;
      default:
        val = 'default';
    }
    return val;
  };

  const parentScaleDescVal = (id) => {
    let val;
    switch (id) {
      case 1:
        val = `The VCI is designed to measure verbal concept formation, crystallized intelligence, effective information retrieval, ability to solve verbal problems, and language development.<br/><br/>`;
        break;
      case 2:
        val = `The VSI is a measure of visual processing, which represents one's ability to analyze and synthesize visual stimuli. designed to measure verbal concept formation, crystallized intelligence, effective information retrieval, ability to solve verbal problems, and language development.<br/><br/>`;
        break;
      case 3:
        val = `The FRI indicative of one’s ability to solve unfamiliar and novel tasks utilizing knowledge that is not dependent on formal education but is contingent on problem-solving abilities and mental flexibility.<br/><br/>`;
        break;
      case 4:
        val = `The WMI is designed to measure one’s ability to temporarily retain information in memory and mentally manipulate the information in order to produce a result.<br/><br/>`;
        break;
      case 5:
        val = `The PSI provides a measure of the ability to quickly and correctly scan, sequence, or discriminate simple visual information. This composite also measures short-term visual memory, attention, and visual-motor coordination involving decision-making.<br/><br/>`;
        break;
      case 19:
        val = `represents a child’s ability to shift cognitive set and modulate emotions and behavior via appropriate inhibitory control. Appropriate behavioral regulation is likely to be a precursor to appropriate metacognitive problem-solving. Behavioral regulation enables the metacognitive processes to successfully guide active, systematic problem solving, and more generally, supports appropriate self-regulation.`;
        break;
      case 20:
        val = `represents the child’s ability to initiate, plan, organize, and sustain future-oriented problem-solving in working memory. This index is interpreted as the ability to cognitively self-manage tasks and reflects the child’s ability to monitor his or her own performance. The MI related directly to a child’s ability to actively problem solve in a variety of contexts.`;
        break;
      case 21:
        val = `is a summary score that incorporates all eight clinical scales of the BRIEF. To legitimately derive a GEC score, there must be no significant difference between the BRI and MI scores, as this would suggest that the GEC is likely to obscure important differences between the two index scores and should not be used as a summary measure.`;
        break;
      case 57:
        val = `${diName !== undefined ? `${diName}` : 'The Client'} demonstrated a relatively ${
          t57WasiiiVerbalComprehensionConsistent === true
            ? 'consistent'
            : t57WasiiiVerbalComprehensionInconsistent === true
            ? 'inconsistent'
            : t57WasiiiVerbalComprehensionFreehandPerformance
        } performance on the subtests within the Verbal Comprehension Index (VCI). Specifically, 
        ${diGender === 'Boy' ? `he` : `she`}
        received a VCI Composite score of ${t57WasiiiVerbalComprehensionCompositeScore}, (${t57WasiiiVerbalComprehensionCompositePercentile} percentile), which is in the ${t57WasiiiVerbalComprehensionCompositeRange} range of functioning compared to other individuals ${
          diGender === 'Boy' ? `his` : `her`
        } age. The VCI measured ${
          diName !== undefined ? `${diName}'s` : "The Client's"
        } verbal reasoning, knowledge and conceptualization.`;
        break;
      case 58:
        val = `${diName !== undefined ? `${diName}` : 'The Client'} demonstrated a relatively ${
          t58WasiiiPerceptualReasoningConsistent === true
            ? 'consistent'
            : t58WasiiiPerceptualReasoningInconsistent === true
            ? 'inconsistent'
            : t58WasiiiPerceptualReasoningFreehandPerformance
        } performance on the subtests within the Fluid Reasoning Index (FRI). This index emphasizes visual-perceptual and visual-spatial reasoning, as well as conceptual reasoning and construction abilities requiring visual-perceptual integration. Specifically, ${
          diName !== undefined ? `${diName}` : 'The Client'
        } received a FRI Composite score of ${t58WasiiiPerceptualReasoningCompositeScore} (${t58WasiiiPerceptualReasoningCompositePercentile} percentile) which fell within the ${t58WasiiiPerceptualReasoningCompositeRange} range of functioning.`;
        break;
      case 106:
        val = `${diName !== undefined ? `${diName}` : 'The Client'} demonstrated a relatively ${
          t106WaisivVerbalComprehensionConsistent === true
            ? 'consistent'
            : t106WaisivVerbalComprehensionInconsistent === true
            ? 'inconsistent'
            : t106WaisivVerbalComprehensionFreehandPerformance
        } performance on the subtests within the Verbal Comprehension Index (VCI). Specifically, 
        ${diGender === 'Boy' ? `he` : `she`}
        received a VCI Composite score of ${t106WaisivVerbalComprehensionCompositeScore}, (${t106WaisivVerbalComprehensionCompositePercentile} percentile), which is in the ${t106WaisivVerbalComprehensionCompositeRange} range of functioning compared to other individuals ${
          diGender === 'Boy' ? `his` : `her`
        } age. The VCI measured ${
          diName !== undefined ? `${diName}'s` : "The Client's"
        } verbal reasoning, knowledge and conceptualization.`;
        break;
      case 107:
        val = `${diName !== undefined ? `${diName}` : 'The Client'} demonstrated a relatively ${
          t107WaisivPerceptualReasoningConsistent === true
            ? 'consistent'
            : t107WaisivPerceptualReasoningInconsistent === true
            ? 'inconsistent'
            : t107WaisivPerceptualReasoningFreehandPerformance
        } performance on the subtests within the Perceptual Reasoning (PRI). This index emphasizes visual-perceptual and visual-spatial reasoning, as well as conceptual reasoning and construction abilities requiring visual-perceptual integration. Specifically, ${
          diName !== undefined ? `${diName}` : 'The Client'
        } received a PRI Composite score of ${t107WaisivPerceptualReasoningCompositeScore} (${t107WaisivPerceptualReasoningCompositePercentile} percentile) which fell within the ${t107WaisivPerceptualReasoningCompositeRange} range of functioning.`;
        break;
      case 108:
        val = `${diName !== undefined ? `${diName}` : 'The Client'} demonstrated a relatively ${
          t108WaisivWorkingMemoryConsistent === true
            ? 'consistent'
            : t108WaisivWorkingMemoryInconsistent === true
            ? 'inconsistent'
            : t108WaisivWorkingMemoryFreehandPerformance
        } Tasks within the Working Memory Index (WMI) measure attention, concentration, and working memory for both verbal and visual material. ${
          diName !== undefined ? `${diName}` : 'The Client'
        } received a WMI Composite score of ${t108WaisivWorkingMemoryCompositeScore} (${t108WaisivWorkingMemoryCompositePercentile} percentile) which fell within the ${t108WaisivWorkingMemoryCompositeRange} range compared to ${
          diGender === 'Boy' ? `his` : `her`
        } peers.`;
        break;
      case 109:
        val = `${diName !== undefined ? `${diName}` : 'The Client'} demonstrated a relatively ${
          t109WaisivProcessingSpeedConsistent === true
            ? 'consistent'
            : t109WaisivProcessingSpeedInconsistent === true
            ? 'inconsistent'
            : t109WaisivProcessingSpeedFreehandPerformance
        } The Processing Speed domain measured ${
          diName !== undefined ? `${diName}'s` : "The Client's"
        } speed of mental and graphomotor processing, as well as their ability to efficiently scan and process visual information. ${
          diName !== undefined ? `${diName}` : 'The Client'
        } received a PSI Composite score of ${t109WaisivProcessingSpeedCompositeScore} (${t109WaisivProcessingSpeedCompositePercentile} percentile) which fell within the ${t109WaisivProcessingSpeedCompositeRange} range of functioning.`;
        break;
      case 127:
        val = `The Minnesota Multiphasic Personality Inventory-A (MMPI-A) contains eight validity scales used to describe the extent of the individual’s cooperation with the assessment. It can indicate whether the individual wanted to call attention to his or her symptoms or, conversely, if he or she was inclined to deny problems.`;
        break;
      case 128:
        val = `Attention and executive functions are multidimensional concepts that contain several related processes. Both concepts require self-regulatory skills and have some common subprocesses.`;
        break;
      case 129:
        val = `Language skills is the idea of input and output functions, that is, receptive and expressive skills. Receptive skills refer to the comprehension and decoding of speech. Expressive skills refer to language production.`;
        break;
      case 130:
        val = `In this manual, the term learning refers to the acquisition of new information. Learning, as used here, is more general than is applied to the concept of a learning disability as it is not limited to the acquisition of new academic skills. Memory, as used here, is a more technical term describing the particular forms of acquisition and retrieval.`;
        break;
      case 131:
        val = `Sensorimotor functioning refers to the fact that motor control requires neural circuits connecting the motor guidance with sensory (e.g., kinesthetic, tactile, and visual) feedback.`;
        break;
      case 132:
        val = `The subcomponents of social perception assessed include facial affect recognition and the ability to comprehend others perspectives, intentions, and beliefs (i.e., theory of mind).`;
        break;
      case 133:
        val = `The subcomponents of visuospatial processing that are assessed include the ability to judge line.`;
        break;
      case 134:
        val = `Comprehension-Knowledge (Gc) is a composite score that provides a estimate of crystalized intelligence or verbal ability, which is defined as a store of acquired knowledge that reflects the breadth and depth of knowledge of a culture. Comprehension-Knowledge (Gc) is composed of two tests Oral Vocabulary and General Information.`;
        break;
      case 135:
        val = `Fluid Reasoning (Gf) is a composite score that provides an estimate of ability to reason, form concepts, and solve problems using unfamiliar information or novel procedures. Fluid reason requires deliberate and flexible control of attention to solve on the spot problems.`;
        break;
      case 136:
        val = `Short-Term Working Memory (Gwm) is a composite score that provides an estimate of ability to apprehend and hold information in immediate awareness and then use or manipulate it to carry out a goal.`;
        break;
      case 137:
        val = `Cognitive Processing Speed (Gs) cluster is a composite score that provides an estimate of ability to quickly perform both simple and complex cognitive tasks, particularly when measured under pressure to sustain controlled attention and concentration.`;
        break;
      case 138:
        val = `The Ga cluster measured (client’s) ability to encode, synthesize, and discriminate auditory stimuli, including the ability to employ auditory information in task performance.`;
        break;
      case 139:
        val = `The Glr cluster measured (client’s) ability to store information and fluently retrieve it later in the process of thinking.`;
        break;
      case 140:
        val = `The Gv cluster measured (client’s) ability to perceive, analyze, synthesize and think with visual patterns, including the ability to store and recall visual representations.`;
        break;
      case 142:
        val = `TSCC has two validity scales: one that taps a child’s tendency to deny any symptomatology and one that indexes a tendency to overrespond to symptom items. <ul><li><b>Underresponse (UND) &#10142;</b> The UND scale reflects the extent to which the respondent denied behaviors, thoughts, or feelings that most others would report at some nonzero level.</li><li><b>Hyperresponse (HYP) &#10142;</b> Is when the child indiscriminately endorses the highest frequency point for many or all symptom items.</li></ul>`;
        break;
      case 143:
        val = `The clinical scales of the TSCC measure the extent to which the child endorses six different types of potentially trauma-related symptoms. Five of the six scales (all but PTS) are nonoverlapping at the item level. Two of these clinical scales (DIS and SC) also contain scorable subscales, based upon principle components analyses and scale content.<ul><li><b>Anxiety (ANX) &#10142;</b> Scores on the Anxiety (ANX) scale reflect the extent to which the child is experiencing generalized anxiety, hyperarousal, and worry, as well as specific fears of men or women, of the dark, and of being killed. Also tapped by this scale are episodes of free-floating anxiety and fears of impeding danger.</li><li><b>Depression (DEP) &#10142;</b> The Depression (DEP) scale taps feelings of sadness, unhappiness, and loneliness; episodes of tearfulness; and depressive cognitions such as guilt and self-denigration.</li>  <li><b>Anger (ANG)  &#10142;</b> Scores on the Anger (ANG) scale indicate the extent of angry thoughts, feelings, and behaviors reported by the child.</li>  <li><b>Posttraumatic Stress &#10142;</b> The Posttraumatic Stress (PTS) scale consists of items reflecting classic posttraumatic symptoms.</li><li><b>Dissociation (DIS) &#10142;</b> The Dissociation (DIS) scale measures the extent to which the child experiences mild-to-moderate dissociative symptomatology.</li>  <li><b>Sexual Concerns (SC) &#10142;</b> The Sexual Concerns (SC) scale measures sexual distress and preoccupation.</li></ul>`;
        break;
      case 151:
        val =
          'The CTONI-2 has two principal uses. The first use is to estimate the intelligence of people for whom traditional ability tests might be inappropriate. For such persons, the heavy language content or the complicated motor response demands of most mental ability tests can result in a serious underestimation of the intelligence. This often leads to misidentifications, faulty diagnoses, erroneous placements, low expectations, and other undesirable consequences. Use of the CTONI-2 will avoid many of the hazards that are frequently encountered when testing people who have a variety of disabilities (e.g., traumatic brain injury, post-stroke syndrome, deafness, aphasia, autism, or other language disorders) or come from cultural, linguistic, educational, or socioeconomic backgrounds that might negatively influence their performance on ability tests.<br/><br/>The CTONI-2’s second use is to provide researchers with a tool that they can use to study the nature of intelligence, the interaction of verbal and nonverbal abilities, and the role of nonverbal formats in assessing thinking and academic subject matters.';
        break;
      case 152:
        val =
          'In addition to the subtests, the CTONI-2 also has three composites. Two composites represent the contexts used to measure the abilities (Pictorial Scale and Geometric Scale). The third composite, the Full Scale, is the overall ability score on the test. All three composites measure general intelligence.';
        break;
      case 153:
        val =
          'Verbal Comprehension is designed to measure verbal concept formation, crystallized intelligence, effective information retrieval, ability to solve verbal problems, and language development.';
        break;
      case 154:
        val =
          'Fluid Reasoning (FRI) is indicative of one’s ability to solve unfamiliar and novel tasks utilizing the knowledge that is not dependent on formal education but is contingent on problem-solving abilities and mental flexibility.';
        break;
      case 155:
        val =
          "Visual-Spatial Processing index involves a measure of visual processing, which represents one's ability to analyze and synthesize visual stimuli.";
        break;
      case 156:
        val =
          'Working Memory (WMI) is designed to measure one’s ability to temporarily retain information in memory and mentally manipulate the information in order to produce a result.';
        break;
      case 157:
        val =
          'Processing Speed measures the ability to quickly and correctly scan, sequence, or discriminate simple visual information. This composite also measures short-term visual memory, attention, and visual-motor coordination involving decision-making.';
        break;
      case 160:
        val = `The Minnesota Personality Inventory-A is a self-report instrument designed to aid in the assessment of a wide range of clinical conditions.`;
        break;
      case 168:
        val = `This test consists of five conditions. The primary executive-function task is the Number-Letter Switching condition, a visual-motor sequencing procedure, which is a measure of flexibility of thinking. The other four conditions allow the examiner to evaluate several key component processes needed to perform the switching task. These fundamental components include visual scanning, number sequencing, letter sequencing, and motor speed in drawing lines.`;
        break;
      case 169:
        val = '';
        break;
      case 170:
        val = '';
        break;
      case 171:
        val = `This test measures the examinee’s ability to inhibit a more automatic verbal response (reading) in order to generate a conflicting response of naming a dissonant ink color. Another condition requires the examinee to switch back and forth between naming the dissonant ink colors and reading the conflicting words. This condition is a measure of both inhibition and cognitive flexibility.`;
        break;
      case 172:
        val = `This test provides a window into their ability to initiate problem-solving behavior and a window into their conceptual-reasoning skills.`;
        break;
      case 173:
        val = `On this test, the examinee is presented with a stimulus page depicting pictures of 30 common objects. The examinee tried to ask the fewest number of yes/no questions in order to identify the unknown target object. Executive functions tapped by this test include the individual’s ability to identify the various categories and subcategories represented in the 30 objects and to formulate abstract, yes/no questions that eliminate the maximum number of objects regardless of the examiner’s answer.`;
        break;
      case 174:
        val = `The examinee’s main task in this test is to discover the meaning of made-up or mystery words based on clues given in sentences. For each mystery word, the examinee is shown five sentences (clues) that help him or her to decode the meaning of the word. With each new clue-sentence for the word, previously presented sentences are also displayed. The first sentence for each word provides only vague or general clues about the mystery word’s meaning. Each subsequent clue sentence provides progressively more detailed information. The examinee tries to decode the mystery word with as few clue sentences as possible and is asked to continue reporting the correct response to the remaining clue sentences of each item. This test is a means of evaluating executive functions in the verbal modality and assessing skills such as deductive reasoning, integration of multiple bits of information, hypothesis testing, and flexibility of thinking.`;
        break;
      case 175:
        val = `The materials for this test include five disks that vary in size from small to large and a board with three vertical pegs. Each item begins by the examiner’s placing from two to five disks on the pegs in a predetermined starting position and displaying a picture of the tower to be built (i.e., the ending position). The examinee’s task is to move the disks across the three pegs to build the target tower in the fewest number of moves possible. In constructing the target towers, the examinee must follow two rules: (a) to move only one disk at a time and (b) never to place a larger disk over a smaller disk. Process measures include first-move completion time, the total number of moves, item-completion time, final achievement (correct or incorrect tower), and number of rule violations. This test measures spatial planning, rule learning, inhibition of impulsive responding, inhibition of perseverative responding, and establishing and maintaining the instructional set.`;
        break;
      case 176:
        val = `The test consists of eight sayings that are presented in two conditions: Free Inquiry and Multiple Choice. For the Free Inquiry condition, the proverbs are read individually to examinees, who attempt to interpret them orally without assistance or cues. For the Multiple Choice condition, the same eight proverbs are presented individually along with four alternative interpretations from which the examinee must select the best one. The set of multiple-choice response alternatives for each proverb consists of (a) a correct abstract interpretation; (b) a correct concrete interpretation; (c) an incorrect, phonemically similar response, and (d) an unrelated saying.`;
        break;
      default:
        val = 'default';
    }
    return val;
  };

  const summaryAbilities = (id) => {
    let val;
    switch (id) {
      case 1:
        val = t1WiscvSummaryAbilities;
        break;
      case 2:
        val = t2DasiiSummaryAbilities;
        break;
      case 3:
        val = t3WasiiiSummaryAbilities;
        break;
      case 4:
        val = t4WiatiiiSummaryAbilities;
        break;
      case 5:
        val = t5WaisivSummaryAbilities;
        break;
      case 6:
        val = t6WjivcogSummaryAbilities;
        break;
      case 7:
        val = t7BeeryvmiSummaryAbilities;
        break;
      case 9:
        val = t9WppsiivSummaryAbilities;
        break;
      default:
        val = '';
    }
    return val;
  };

  const summaryChallenges = (id) => {
    let val;
    switch (id) {
      case 1:
        val = t1WiscvSummaryChallenges;
        break;
      case 2:
        val = t2DasiiSummaryChallenges;
        break;
      case 3:
        val = t3WasiiiSummaryChallenges;
        break;
      case 4:
        val = t4WiatiiiSummaryChallenges;
        break;
      case 5:
        val = t5WaisivSummaryChallenges;
        break;
      case 6:
        val = t6WjivcogSummaryChallenges;
        break;
      case 7:
        val = t7BeeryvmiSummaryChallenges;
        break;
      case 9:
        val = t9WppsiivSummaryChallenges;
        break;
      default:
        val = '';
    }
    return val;
  };

  const appendixTestIndexScoreVal = (id, name) => {
    let val;
    switch (id) {
      case 1:
        name === 'Full Scale IQ'
          ? (val = t1WiscvFullScaleIqCompositeScore)
          : (val = t1WiscvVerbalComprehensionIndexVciCompositeScore);
        break;
      case 2:
        name === 'General Ability Index'
          ? (val = t2WiscvGaiCompositeScore)
          : (val = t2WiscvVisualSpatialIndexVsiCompositeScore);
        break;
      case 3:
        name === 'Full Scale IQ-4'
          ? (val = t3WasiiiFullScaleIq4CompositeScore)
          : (val = t3WiscvFluidReasoningIndexFriCompositeScore);
        break;
      case 4:
        val = t4WiscvWorkingMemoryIndexWmiCompositeScore;
        break;
      case 5:
        name === 'Full Scale IQ'
          ? (val = t5WaisivFullScaleIqCompositeScore)
          : (val = t5WiscvProcessingSpeedIndexPsiCompositeScore);
        break;
      case 6:
        val = t6WaisivGaiCompositeScore;
        break;
      case 7:
        val = t7WjivCogGeneralIntellectualAbilityGiaCompositeScore;
        break;
      case 9:
        val = t9WppsiivFullScaleIqCompositeScore;
        break;
      case 10:
        name === 'General Conceptual Ability (GCA)'
          ? (val = t10DasiiGcaScore)
          : (val = t10DasiiSncScore);
        break;
      case 57:
        val = t57WasiiiVerbalComprehensionCompositeScore;
        break;
      case 58:
        val = t58WasiiiPerceptualReasoningCompositeScore;
        break;
      case 106:
        val = t106WaisivVerbalComprehensionCompositeScore;
        break;
      case 107:
        val = t107WaisivPerceptualReasoningCompositeScore;
        break;
      case 108:
        val = t108WaisivWorkingMemoryCompositeScore;
        break;
      case 109:
        val = t109WaisivProcessingSpeedCompositeScore;
        break;
      case 134:
        val = t134WjivCogComprehensionKnowledgeGcCompositeScore;
        break;
      case 135:
        val = t135WjivCogFluidReasoningGfCompositeScore;
        break;
      case 136:
        val = t136WjivCogShortTermWorkingMemoryGwmCompositeScore;
        break;
      case 137:
        val = t137WjivCogCognitiveProcessingSpeedGsCompositeScore;
        break;
      case 138:
        val = t138WjivCogAuditoryProcessingSpeedGaCompositeScore;
        break;
      case 139:
        val = t139WjivCogLongTermRetrievalGlrCompositeScore;
        break;
      case 140:
        val = t140WjivCogVisualProcessingGvCompositeScore;
        break;
      case 153:
        val = t153WppsiIvVerbalComprehensionCompositeScore;
        break;
      case 154:
        val = t154WppsiIvFluidReasoningCompositeScore;
        break;
      case 155:
        val = t155WppsiIvVisualSpatialReasoningCompositeScore;
        break;
      case 156:
        val = t156WppsiIvWorkingMemoryCompositeScore;
        break;
      case 157:
        val = t157WppsiIvProcessingSpeedCompositeScore;
        break;
      default:
        val = '';
    }
    return val;
  };

  const appendixTestIndexRankVal = (id, name) => {
    let val;
    switch (id) {
      case 1:
        if (name === 'Full Scale IQ') {
          val = t1WiscvFullScaleIqCompositePercentile;
        } else {
          val = t1WiscvVerbalComprehensionIndexVciCompositePercentile;
        }
        break;
      case 2:
        if (name === 'General Ability Index') {
          val = t2WiscvGaiPercentile;
        } else {
          val = t2WiscvVisualSpatialIndexVsiCompositePercentile;
        }
        break;
      case 3:
        if (name === 'Full Scale IQ-4') {
          val = t3WasiiiFullScaleIq4CompositePercentile;
        } else {
          val = t3WiscvFluidReasoningIndexFriCompositePercentile;
        }
        break;
      case 4:
        val = t4WiscvWorkingMemoryIndexWmiCompositePercentile;
        break;
      case 5:
        if (name === 'Full Scale IQ') {
          val = t5WaisivFullScaleIqCompositePercentile;
        } else {
          val = t5WiscvProcessingSpeedIndexPsiCompositePercentile;
        }
        break;
      case 6:
        val = t6WaisivGaiPercentile;
        break;
      case 7:
        val = t7WjivCogGeneralIntellectualAbilityGiaCompositePercentile;
        break;
      case 9:
        name === 'Full Scale IQ'
          ? (val = t9WppsiivFullScaleIqCompositePercentile)
          : (val = t9WppsiivGaiPercentile);
        break;
      case 10:
        name === 'General Conceptual Ability (GCA)'
          ? (val = t10DasiiGcaPercentile)
          : (val = t10DasiiSncPercentile);
        break;
      case 57:
        val = t57WasiiiVerbalComprehensionCompositePercentile;
        break;
      case 58:
        val = t58WasiiiPerceptualReasoningCompositePercentile;
        break;
      case 106:
        val = t106WaisivVerbalComprehensionCompositePercentile;
        break;
      case 107:
        val = t107WaisivPerceptualReasoningCompositePercentile;
        break;
      case 108:
        val = t108WaisivWorkingMemoryCompositePercentile;
        break;
      case 109:
        val = t109WaisivProcessingSpeedCompositePercentile;
        break;
      case 134:
        val = t134WjivCogComprehensionKnowledgeGcCompositePercentile;
        break;
      case 135:
        val = t135WjivCogFluidReasoningGfCompositePercentile;
        break;
      case 136:
        val = t136WjivCogShortTermWorkingMemoryGwmCompositePercentile;
        break;
      case 137:
        val = t137WjivCogCognitiveProcessingSpeedGsCompositePercentile;
        break;
      case 138:
        val = t138WjivCogAuditoryProcessingSpeedGaCompositePercentile;
        break;
      case 139:
        val = t139WjivCogLongTermRetrievalGlrCompositePercentile;
        break;
      case 140:
        val = t140WjivCogVisualProcessingGvCompositePercentile;
        break;
      case 153:
        val = t153WppsiIvVerbalComprehensionCompositePercentile;
        break;
      case 154:
        val = t154WppsiIvFluidReasoningCompositePercentile;
        break;
      case 155:
        val = t155WppsiIvVisualSpatialReasoningCompositePercentile;
        break;
      case 156:
        val = t156WppsiIvWorkingMemoryCompositePercentile;
        break;
      case 157:
        val = t157WppsiIvProcessingSpeedCompositePercentile;
        break;
      default:
        val = '';
    }
    return val;
  };

  const appendixTestIndexRangeVal = (id, name) => {
    let val;
    switch (id) {
      case 1:
        if (name === 'Full Scale IQ') {
          val = t1WiscvFullScaleIqCompositeRange;
        } else {
          val = t1WiscvVerbalComprehensionIndexVciCompositeRange;
        }
        break;
      case 2:
        if (name === 'General Ability Index') {
          val = t2WiscvGaiRange;
        } else {
          val = t2WiscvVisualSpatialIndexVsiCompositeRange;
        }
        break;
      case 3:
        if (name === 'Full Scale IQ-4') {
          val = t3WasiiiFullScaleIq4CompositeRange;
        } else {
          val = t3WiscvFluidReasoningIndexFriCompositeRange;
        }
        break;
      case 4:
        val = t4WiscvWorkingMemoryIndexWmiCompositeRange;
        break;
      case 5:
        if (name === 'Full Scale IQ') {
          val = t5WaisivFullScaleIqCompositeRange;
        } else {
          val = t5WiscvProcessingSpeedIndexPsiCompositeRange;
        }
        break;
      case 6:
        val = t6WaisivGaiRange;
        break;
      case 7:
        val = t7WjivCogGeneralIntellectualAbilityGiaCompositeRange;
        break;
      case 9:
        name === 'Full Scale IQ'
          ? (val = t9WppsiivFullScaleIqCompositeRange)
          : (val = t9WppsiivGaiRange);
        break;
      case 10:
        name === 'General Conceptual Ability (GCA)'
          ? (val = t10DasiiGcaRange)
          : (val = t10DasiiSncRange);
        break;
      case 57:
        val = t57WasiiiVerbalComprehensionCompositeRange;
        break;
      case 58:
        val = t58WasiiiPerceptualReasoningCompositeRange;
        break;
      case 106:
        val = t106WaisivVerbalComprehensionCompositeRange;
        break;
      case 107:
        val = t107WaisivPerceptualReasoningCompositeRange;
        break;
      case 108:
        val = t108WaisivWorkingMemoryCompositeRange;
        break;
      case 109:
        val = t109WaisivProcessingSpeedCompositeRange;
        break;
      case 134:
        val = t134WjivCogComprehensionKnowledgeGcCompositeRange;
        break;
      case 135:
        val = t135WjivCogFluidReasoningGfCompositeRange;
        break;
      case 136:
        val = t136WjivCogShortTermWorkingMemoryGwmCompositeRange;
        break;
      case 137:
        val = t137WjivCogCognitiveProcessingSpeedGsCompositeRange;
        break;
      case 138:
        val = t138WjivCogAuditoryProcessingSpeedGaCompositeRange;
        break;
      case 139:
        val = t139WjivCogLongTermRetrievalGlrCompositeRange;
        break;
      case 140:
        val = t140WjivCogVisualProcessingGvCompositeRange;
        break;
      case 153:
        val = t153WppsiIvVerbalComprehensionCompositeRange;
        break;
      case 154:
        val = t154WppsiIvFluidReasoningCompositeRange;
        break;
      case 155:
        val = t155WppsiIvVisualSpatialReasoningCompositeRange;
        break;
      case 156:
        val = t156WppsiIvWorkingMemoryCompositeRange;
        break;
      case 157:
        val = t157WppsiIvProcessingSpeedCompositeRange;
        break;
      default:
        val = '';
    }
    return val;
  };

  const appendixSubtestScoreVal = (id) => {
    let val;
    switch (id) {
      case 1:
        val = t1SimilaritiesScore;
        break;
      case 2:
        val = t2VocabularyScore;
        break;
      case 3:
        val = t3InformationScore;
        break;
      case 4:
        val = t4ComprehensionScore;
        break;
      case 5:
        val = t5BlockDesignScore;
        break;
      case 6:
        val = t6VocabularyScore;
        break;
      case 7:
        val = t7MatrixReasoningScore;
        break;
      case 8:
        val = t8FigureWeightsScore;
        break;
      case 9:
        val = t9PictureConceptsScore;
        break;
      case 10:
        val = t10ArithmeticScore;
        break;
      case 11:
        val = t11DigitSpanScore;
        break;
      case 12:
        val = t12PictureSpanScore;
        break;
      case 13:
        val = t13LetterNumberSequencingScore;
        break;
      case 14:
        val = t14CodingScore;
        break;
      case 15:
        val = t15SymbolSearchScore;
        break;
      case 16:
        val = t16CancellationScore;
        break;
      case 17:
        val = t17Ados2FrequencyOfSpontaneousVocalizationDirectedToOthersA2Score;
        break;
      case 18:
        val = t18Ados2PointingA7Score;
        break;
      case 19:
        val = t19Ados2GesturesA8Score;
        break;
      case 20:
        val = t20Ados2UnusualEyeContactB1Score;
        break;
      case 21:
        val = t21Ados2FacialExpressionsDirectedToOthersB3Score;
        break;
      case 22:
        val = t22Ados2IntegrationOfGazeAndOtherBehaviorsDuringSocialOverturesB4Score;
        break;
      case 23:
        val = t23Ados2SharedEnjoymentInInteractionB5Score;
        break;
      case 24:
        val = t24Ados2ShowingB9Score;
        break;
      case 25:
        val = t25Ados2SpontaneousInitiationOfJointAttentionB10Score;
        break;
      case 26:
        val = t26Ados2ResponseToJointAttentionB11Score;
        break;
      case 27:
        val = t27Ados2QualityOfSocialOverturesB12Score;
        break;
      case 28:
        val = t28Ados2IntonationOfVocalizationsOrVerbalizationsA3Score;
        break;
      case 29:
        val = t29Ados2StereotypedIdiosyncraticUseOfWordsOrPhrasesA5Score;
        break;
      case 30:
        val = t30Ados2UnusualSensoryInterestInPlayMaterialPersonD1Score;
        break;
      case 31:
        val = t31Ados2HandAndFingerAndOtherComplexMannerismsD2Score;
        break;
      case 32:
        val = t32Ados2UnusuallyRepetitiveInterestsOrStereotypedBehaviorsD4Score;
        break;
      case 33:
        val = t33Ados2PointingA6Score;
        break;
      case 34:
        val = t34Ados2DescriptiveConventionalInstrumentalOrInformationalGesturesA7Score;
        break;
      case 35:
        val = t35Ados2UnusualEyeContactB1Score;
        break;
      case 36:
        val = t36Ados2FacialExpressionsDirectedToOthersB2Score;
        break;
      case 37:
        val = t37Ados2SharedEnjoymentInInteractionB3Score;
        break;
      case 38:
        val = t38Ados2ShowingB5Score;
        break;
      case 39:
        val = t39Ados2SpontaneousInitiationOfJointAttentionB6Score;
        break;
      case 40:
        val = t40Ados2QualityOfSocialOverturesB8Score;
        break;
      case 41:
        val = t41Ados2AmountOfReciprocalSocialCommunicationB11Score;
        break;
      case 42:
        val = t42Ados2OverallQualityOfRapportB12Score;
        break;
      case 43:
        val = t43Ados2StereotypedIdiosyncraticUseOfWordsOrPhrasesA4Score;
        break;
      case 44:
        val = t44Ados2UnusualSensoryInterestInPlayMaterialPersonD1Score;
        break;
      case 45:
        val = t45Ados2HandAndFingerAndOtherComplexMannerismsD2Score;
        break;
      case 46:
        val = t46Ados2UnusuallyRepetitiveInterestsOrStereotypedBehaviorsScore;
        break;
      case 47:
        val = t47Ados2ReportingOfEventsA7Score;
        break;
      case 48:
        val = t48Ados2ConversationA8Score;
        break;
      case 49:
        val = t49Ados2DescriptiveConventionalInstrumentalOrInformationalGesturesA9Score;
        break;
      case 50:
        val = t50Ados2UnusualEyeContactB1Score;
        break;
      case 51:
        val = t51Ados2FacialExpressionsDirectedToExaminerB2Score;
        break;
      case 52:
        val = t52Ados2SharedEnjoymentInInteractionB3Score;
        break;
      case 53:
        val = t53Ados2SharedEnjoymentInInteractionB4Score;
        break;
      case 54:
        val = t54Ados2QualityOfSocialOverturesB7Score;
        break;
      case 55:
        val = t55Ados2QualityOfSocialResponseB9Score;
        break;
      case 56:
        val = t56Ados2AmountOfReciprocalSocialCommunicationB10Score;
        break;
      case 57:
        val = t57Ados2OverallQualityOfRapportB11Score;
        break;
      case 58:
        val = t58Ados2StereotypedIdiosyncraticUseOfWordsOrPhrasesA4Score;
        break;
      case 59:
        val = t59Ados2UnusualSensoryInterestInPlayMaterialPersonD1Score;
        break;
      case 60:
        val = t60Ados2HandAndFingerAndOtherComplexMannerismsD2Score;
        break;
      case 61:
        val = t61Ados2UnusuallyRepetitiveInterestsOrStereotypedBehaviorsScore;
        break;
      case 62:
        val = t62Ados2StereotypedIdiosyncraticUseOfWordsOrPhrasesA4Score;
        break;
      case 63:
        val = t63Ados2ConversationA8Score;
        break;
      case 64:
        val = t64Ados2DescriptiveConventionalInstrumentalOrInformationalGesturesA9Score;
        break;
      case 65:
        val = t65Ados2EmphaticOrEmotionalGesturesA10Score;
        break;
      case 66:
        val = t66Ados2UnusualEyeContactB1Score;
        break;
      case 67:
        val = t67Ados2FacialExpressionsDirectedToExaminerB2Score;
        break;
      case 68:
        val = t68Ados2CommentsOnOthersEmotionsEmpathyB6Score;
        break;
      case 69:
        val = t69Ados2ResponsibilityB8Score;
        break;
      case 70:
        val = t70Ados2QualityOfSocialOverturesB9Score;
        break;
      case 71:
        val = t71Ados2QualityOfSocialResponseB11Score;
        break;
      case 72:
        val = t72Ados2AmountOfReciprocalSocialCommunicationB12Score;
        break;
      // case 46:
      //   val = t46QikCptAccuracyIndexScore;
      //   break;
      // case 47:
      //   val = t47QikCptSustainedAttentionScore;
      //   break;
      // case 48:
      //   val = t48QikCptImpulseControlScore;
      //   break;
      // case 49:
      //   val = t49QikCptPerformanceIndexScore;
      //   break;
      // case 50:
      //   val = t50QikCptSpeedOfResponseScore;
      //   break;
      // case 51:
      //   val = t51QikCptConsistencyOfResponseScore;
      //   break;
      case 73:
        val = t73NamingSpeedLiteracyScore;
        break;
      case 74:
        val = t74NamingSpeedQualityScore;
        break;
      case 75:
        val = t75ImmediateSymbolTranslationScore;
        break;
      case 76:
        val = t76DelayedSymbolTranslationScore;
        break;
      case 77:
        val = t77RecognitionSymbolTranslationScore;
        break;
      case 78:
        val = t78InconsistencyScaleScore;
        break;
      case 79:
        val = t79NegativityScaleScore;
        break;
      case 82:
        val = t82InhibitScore;
        break;
      case 83:
        val = t83ShiftScore;
        break;
      case 84:
        val = t84EmotionalControlScore;
        break;
      case 85:
        val = t85InitiateScore;
        break;
      case 86:
        val = t86WorkingMemoryScore;
        break;
      case 87:
        val = t87PlanOrganizeScore;
        break;
      case 88:
        val = t88OrganizationOfMaterialsScore;
        break;
      case 89:
        val = t89MonitorScore;
        break;
      case 90:
        val = t90InhibitScore;
        break;
      case 91:
        val = t91ShiftScore;
        break;
      case 92:
        val = t92EmotionalControlScore;
        break;
      case 93:
        val = t93InitiateScore;
        break;
      case 94:
        val = t94WorkingMemoryScore;
        break;
      case 95:
        val = t95PlanOrganizeScore;
        break;
      case 96:
        val = t96OrganizationOfMaterialsScore;
        break;
      case 97:
        val = t97MonitorScore;
        break;
      case 98:
        val = t98RelatingToPeopleScore;
        break;
      case 99:
        val = t99ImitationScore;
        break;
      case 100:
        val = t100EmotionalResponseScore;
        break;
      case 101:
        val = t101BodyUseScore;
        break;
      case 102:
        val = t102ObjectUseScore;
        break;
      case 103:
        val = t103AdaptionToChangeScore;
        break;
      case 104:
        val = t104VisualResponseScore;
        break;
      case 105:
        val = t105ListeningResponseScore;
        break;
      case 106:
        val = t106TasteSmellAndTouchResponseAndUseScore;
        break;
      case 107:
        val = t107FearOrNervousnessScore;
        break;
      case 108:
        val = t108VerbalCommunicationScore;
        break;
      case 109:
        val = t109NonverbalCommunicationScore;
        break;
      case 110:
        val = t110ActivityLevelScore;
        break;
      case 111:
        val = t111LevelAndConsistencyOfIntellectualResponseScore;
        break;
      case 112:
        val = t112GeneralImpressionsScore;
        break;
      case 113:
        val = t113SocialEmotionalUnderstandingScore;
        break;
      case 114:
        val = t114EmotionalExpressionAndRegulationOfEmotionsScore;
        break;
      case 115:
        val = t115RelatingToPeopleScore;
        break;
      case 116:
        val = t116BodyUseScore;
        break;
      case 117:
        val = t117ObjectUseInPlayScore;
        break;
      case 118:
        val = t118VisualResponseScore;
        break;
      case 119:
        val = t119ListeningResponseScore;
        break;
      case 120:
        val = t120InattentionScore;
        break;
      case 121:
        val = t121HyperactivityImpulsivityScore;
        break;
      case 122:
        val = t122LearningProblemsScore;
        break;
      case 123:
        val = t123ExecutiveFunctioningScore;
        break;
      case 124:
        val = t124DefianceAggressionScore;
        break;
      case 125:
        val = t125PeerRelationsScore;
        break;
      case 126:
        val = t126AdhdInattentiveScore;
        break;
      case 127:
        val = t127AdhdHyperactiveImpulsiveScore;
        break;
      case 128:
        val = t128ConductDisorderScore;
        break;
      case 129:
        val = t129OppositionalDefiantDisorderScore;
        break;
      case 130:
        val = t130Conners3AdhdIndexScore;
        break;
      case 131:
        val = t131Conners3GlobalIndexScore;
        break;
      case 132:
        val = t132AnxietyScore;
        break;
      case 133:
        val = t133DepressionScore;
        break;
      case 134:
        val = t134SevereConductScore;
        break;
      case 135:
        val = t135PositiveImpressionScore;
        break;
      case 136:
        val = t136NegativeImpressionScore;
        break;
      case 137:
        val = t137InconsistencyIndexScore;
        break;
      case 138:
        val = t138InattentionScore;
        break;
      case 139:
        val = t139HyperactivityImpulsivityScore;
        break;
      case 141:
        val = t141LearningProblemsScore;
        break;
      case 142:
        val = t142ExecutiveFunctioningScore;
        break;
      case 143:
        val = t143DefianceAggressionScore;
        break;
      case 144:
        val = t144PeerRelationsScore;
        break;
      case 145:
        val = t145AdhdInattentiveScore;
        break;
      case 146:
        val = t146AdhdHyperactiveImpulsiveScore;
        break;
      case 147:
        val = t147ConductDisorderScore;
        break;
      case 148:
        val = t148OppositionalDefiantDisorderScore;
        break;
      case 149:
        val = t149Conners3AdhdIndexScore;
        break;
      case 150:
        val = t150Conners3GlobalIndexScore;
        break;
      case 151:
        val = t151AnxietyScore;
        break;
      case 152:
        val = t152DepressionScore;
        break;
      case 153:
        val = t153SevereConductScore;
        break;
      case 154:
        val = t154PositiveImpressionScore;
        break;
      case 155:
        val = t155NegativeImpressionScore;
        break;
      case 156:
        val = t156InconsistencyIndexScore;
        break;
      case 157:
        val = t157InattentionScore;
        break;
      case 158:
        val = t158HyperactivityImpulsivityScore;
        break;
      case 159:
        val = t159LearningProblemsScore;
        break;
      case 160:
        val = t160DefianceAggressionScore;
        break;
      case 161:
        val = t161FamilyRelationsScore;
        break;
      case 162:
        val = t162AdhdInattentiveScore;
        break;
      case 163:
        val = t163AdhdHyperactiveImpulsiveScore;
        break;
      case 164:
        val = t164ConductDisorderScore;
        break;
      case 165:
        val = t165OppositionalDefiantDisorderScore;
        break;
      case 166:
        val = t166Conners3AdhdIndexScore;
        break;
      case 644:
        val = t644AnxietyScore;
        break;
      case 167:
        val = t167DepressionScore;
        break;
      case 168:
        val = t168SevereConductScore;
        break;
      case 169:
        val = t169PositiveImpressionScore;
        break;
      case 170:
        val = t170NegativeImpressionScore;
        break;
      case 171:
        val = t171InconsistencyIndexScore;
        break;
      case 172:
        val = t172PictorialAnalogiesScore;
        break;
      case 173:
        val = t173GeometricAnalogiesScore;
        break;
      case 174:
        val = t174PictorialCategoriesScore;
        break;
      case 175:
        val = t175GeometricCategoriesScore;
        break;
      case 176:
        val = t176PictorialSequencesScore;
        break;
      case 177:
        val = t177GeometricSequencesScore;
        break;
      case 178:
        val = t178PictorialScaleScore;
        break;
      case 179:
        val = t179GeometricScaleScore;
        break;
      case 180:
        val = t180FullScaleScore;
        break;
      case 206:
        val = t206TrailMakingTestScore;
        break;
      case 207:
        val = t207VerbalFluencyTestScore;
        break;
      case 208:
        val = t208DesignFluencyTestScore;
        break;
      case 209:
        val = t209ColorWordInterferenceTestScore;
        break;
      case 210:
        val = t210SortingTestScore;
        break;
      case 211:
        val = t211TwentyQuestionsTestScore;
        break;
      case 212:
        val = t212WordContextTestScore;
        break;
      case 213:
        val = t213TowerTestScore;
        break;
      case 214:
        val = t214ProverbTestScore;
        break;
      case 215:
        val = t215RestrictiveRepetitiveBehaviorsScore;
        break;
      case 216:
        val = t216SocialInteractionScore;
        break;
      case 217:
        val = t217SocialCommunicationScore;
        break;
      case 218:
        val = t218EmotionalResponsesScore;
        break;
      case 219:
        val = t219CognitiveStyleScore;
        break;
      case 220:
        val = t220MaladaptiveSpeechScore;
        break;
      case 221:
        val = t221ListLearningScore;
        break;
      case 222:
        val = t222StoryMemoryScore;
        break;
      case 223:
        val = t223FigureCopyScore;
        break;
      case 224:
        val = t224LineOrientationScore;
        break;
      case 225:
        val = t225PictureNamingScore;
        break;
      case 226:
        val = t226SemanticFluencyScore;
        break;
      case 227:
        val = t227DigitSpanScore;
        break;
      case 228:
        val = t228CodingScore;
        break;
      case 229:
        val = t229ListRecallScore;
        break;
      case 230:
        val = t230ListRecognitionScore;
        break;
      case 231:
        val = t231StoryRecallScore;
        break;
      case 232:
        val = t232FigureRecallScore;
        break;
      case 233:
        val = t233ReceptiveScore;
        break;
      case 234:
        val = t234ExpressiveScore;
        break;
      case 235:
        val = t235WrittenScore;
        break;
      case 236:
        val = t236PersonalScore;
        break;
      case 237:
        val = t237DomesticScore;
        break;
      case 238:
        val = t238CommunityScore;
        break;
      case 239:
        val = t239InterpersonalRelationshipsScore;
        break;
      case 240:
        val = t240PlayAndLeisureTimeScore;
        break;
      case 241:
        val = t241CopingSkillsScore;
        break;
      case 242:
        val = t242GrossScore;
        break;
      case 243:
        val = t243FineScore;
        break;
      case 244:
        val = t244MaladaptiveBehaviorIndexScore;
        break;
      case 245:
        val = t245MaladaptiveBehaviorCriticalItemsScore;
        break;
      case 246:
        val = t246SimilaritiesScore;
        break;
      case 247:
        val = t247VocabularyScore;
        break;
      case 248:
        val = t248BlockDesignScore;
        break;
      case 249:
        val = t249MatrixReasoningScore;
        break;
      case 250:
        val = t250ListeningComprehensionGradesPK12Score;
        break;
      case 251:
        val = t251EarlyReadingSkillsGradesPK3Score;
        break;
      case 252:
        val = t252ReadingComprehensionGrades112Score;
        break;
      case 253:
        val = t253MathProblemSolvingGradesPK12Score;
        break;
      case 254:
        val = t254AlphabetWritingFluencyGradesPK3Score;
        break;
      case 255:
        val = t255SentenceCompositionGrades112Score;
        break;
      case 256:
        val = t256WordReadingGrades112Score;
        break;
      case 257:
        val = t257EssayCompositionGrades312Score;
        break;
      case 258:
        val = t258PseudowordDecodingGrades112Score;
        break;
      case 259:
        val = t259NumericalOperationsGradesK12Score;
        break;
      case 260:
        val = t260OralExpressionGradesPK12Score;
        break;
      case 261:
        val = t261OralReadingFluencyGrades112Score;
        break;
      case 262:
        val = t262SpellingGradesK12Score;
        break;
      case 263:
        val = t263MathFluencyAdditionScore;
        break;
      case 264:
        val = t264MathFluencySubtractionScore;
        break;
      case 265:
        val = t265MathFluencyMultiplicationScore;
        break;
      case 266:
        val = t266StoryMemoryScore;
        break;
      case 267:
        val = t267VerbalLearningScore;
        break;
      case 268:
        val = t268DesignMemoryScore;
        break;
      case 269:
        val = t269PictureMemoryScore;
        break;
      case 270:
        val = t270FingerWindowsScore;
        break;
      case 271:
        val = t271NumberLetterScore;
        break;
      case 272:
        val = t272SentenceMemoryScore;
        break;
      case 273:
        val = t273SoundSymbolScore;
        break;
      case 274:
        val = t274VerbalWorkingMemoryScore;
        break;
      case 275:
        val = t275SymbolicWorkingMemoryScore;
        break;
      case 276:
        val = t276StoryMemoryDelayRecallScore;
        break;
      case 277:
        val = t277VerbalLearningDelayRecallScore;
        break;
      case 278:
        val = t278SoundSymbolDelayRecallScore;
        break;
      case 279:
        val = t279StoryMemoryRecognitionScore;
        break;
      case 280:
        val = t280VerbalLearningRecognitionScore;
        break;
      case 281:
        val = t281DesignMemoryRecognitionScore;
        break;
      case 282:
        val = t282PictureMemoryRecognitionScore;
        break;
      case 283:
        val = t283FIndexScore;
        break;
      case 284:
        val = t284LIndexScore;
        break;
      case 285:
        val = t285VIndexScore;
        break;
      case 286:
        val = t286AlcoholAbuseScore;
        break;
      case 287:
        val = t287AnxietyScore;
        break;
      case 288:
        val = t288AttentionProblemsScore;
        break;
      case 289:
        val = t289AttitudeToSchoolScore;
        break;
      case 290:
        val = t290AttitudeToTeachersScore;
        break;
      case 291:
        val = t291AtypicalityScore;
        break;
      case 292:
        val = t292DepressionScore;
        break;
      case 293:
        val = t293HyperactivityScore;
        break;
      case 294:
        val = t294LocusOfControlScore;
        break;
      case 295:
        val = t295SchoolMaladjustmentScore;
        break;
      case 296:
        val = t296SensationSeekingScore;
        break;
      case 297:
        val = t297SenseOfInadequacyScore;
        break;
      case 298:
        val = t298SocialStressScore;
        break;
      case 299:
        val = t299SomatizationScore;
        break;
      case 300:
        val = t300InterpersonalRelationsScore;
        break;
      case 301:
        val = t301RelationsWithParentsScore;
        break;
      case 302:
        val = t302SelfEsteemScore;
        break;
      case 303:
        val = t303SelfRelianceScore;
        break;
      case 304:
        val = t304AngerControlScore;
        break;
      case 305:
        val = t305EgoStrengthScore;
        break;
      case 306:
        val = t306ManiaScore;
        break;
      case 307:
        val = t307TestAnxietyScore;
        break;
      case 308:
        val = t308AttitudeToSchoolScore;
        break;
      case 309:
        val = t309AttitudeToTeachersScore;
        break;
      case 310:
        val = t310AtypicalityScore;
        break;
      case 311:
        val = t311LocusOfControlScore;
        break;
      case 312:
        val = t312SocialStressScore;
        break;
      case 313:
        val = t313AnxietyScore;
        break;
      case 314:
        val = t314DepressionScore;
        break;
      case 315:
        val = t315SenseOfInadequacyScore;
        break;
      case 316:
        val = t316AttentionProblemsScore;
        break;
      case 317:
        val = t317HyperactivityScore;
        break;
      case 318:
        val = t318SocialStressScore;
        break;
      case 319:
        val = t319AnxietyScore;
        break;
      case 320:
        val = t320DepressionScore;
        break;
      case 321:
        val = t321SenseOfInadequacyScore;
        break;
      case 322:
        val = t322SelfEsteemScore;
        break;
      case 323:
        val = t323SelfRelianceScore;
        break;
      case 324:
        val = t324InterpersonalRelationsScore;
        break;
      case 325:
        val = t325RelationsWithParentsScore;
        break;
      case 326:
        val = t326SelfEsteemScore;
        break;
      case 327:
        val = t327SelfRelianceScore;
        break;
      case 328:
        val = t328AttitudeToSchoolScore;
        break;
      case 329:
        val = t329AttitudeToTeachersScore;
        break;
      case 330:
        val = t330SensationSeekingScore;
        break;
      case 331:
        val = t331AtypicalityScore;
        break;
      case 332:
        val = t332LocusOfControlScore;
        break;
      case 333:
        val = t333SocialStressScore;
        break;
      case 334:
        val = t334AnxietyScore;
        break;
      case 335:
        val = t335DepressionScore;
        break;
      case 336:
        val = t336SenseOfInadequacyScore;
        break;
      case 337:
        val = t337SomatizationScore;
        break;
      case 338:
        val = t338AttentionProblemsScore;
        break;
      case 339:
        val = t339HyperactivityScore;
        break;
      case 340:
        val = t340SocialStressScore;
        break;
      case 341:
        val = t341AnxietyScore;
        break;
      case 342:
        val = t342DepressionScore;
        break;
      case 343:
        val = t343SenseOfInadequacyScore;
        break;
      case 344:
        val = t344SelfEsteemScore;
        break;
      case 345:
        val = t345SelfRelianceScore;
        break;
      case 346:
        val = t346InterpersonalRelationsScore;
        break;
      case 347:
        val = t347RelationsWithParentsScore;
        break;
      case 348:
        val = t348SelfEsteemScore;
        break;
      case 349:
        val = t349SelfRelianceScore;
        break;
      case 350:
        val = t350AtypicalityScore;
        break;
      case 351:
        val = t351LocusOfControlScore;
        break;
      case 352:
        val = t352SocialStressScore;
        break;
      case 353:
        val = t353AnxietyScore;
        break;
      case 354:
        val = t354DepressionScore;
        break;
      case 355:
        val = t355SenseOfInadequacyScore;
        break;
      case 356:
        val = t356SomatizationScore;
        break;
      case 357:
        val = t357AttentionProblemsScore;
        break;
      case 358:
        val = t358HyperactivityScore;
        break;
      case 359:
        val = t359SocialStressScore;
        break;
      case 360:
        val = t360AnxietyScore;
        break;
      case 361:
        val = t361DepressionScore;
        break;
      case 362:
        val = t362SenseOfInadequacyScore;
        break;
      case 363:
        val = t363SelfEsteemScore;
        break;
      case 364:
        val = t364SelfRelianceScore;
        break;
      case 365:
        val = t365InterpersonalRelationsScore;
        break;
      case 366:
        val = t366RelationsWithParentsScore;
        break;
      case 367:
        val = t367SelfEsteemScore;
        break;
      case 368:
        val = t368SelfRelianceScore;
        break;
      case 369:
        val = t369FIndexScore;
        break;
      case 370:
        val = t370AggressionScore;
        break;
      case 371:
        val = t371AnxietyScore;
        break;
      case 372:
        val = t372AttentionProblemsScore;
        break;
      case 373:
        val = t373AtypicalityScore;
        break;
      case 374:
        val = t374ConductProblemsScore;
        break;
      case 375:
        val = t375DepressionScore;
        break;
      case 376:
        val = t376HyperactivityScore;
        break;
      case 377:
        val = t377LearningProblemsScore;
        break;
      case 378:
        val = t378SomatizationScore;
        break;
      case 379:
        val = t379WithdrawalScore;
        break;
      case 380:
        val = t380ActivitiesOfDailyLivingScore;
        break;
      case 381:
        val = t381AdaptabilityScore;
        break;
      case 382:
        val = t382FunctionalCommunicationScore;
        break;
      case 383:
        val = t383LeadershipScore;
        break;
      case 384:
        val = t384SocialSkillsScore;
        break;
      case 385:
        val = t385StudySkillsScore;
        break;
      case 386:
        val = t386AngerControlScore;
        break;
      case 387:
        val = t387BullyingScore;
        break;
      case 388:
        val = t388DevelopmentalSocialDisordersScore;
        break;
      case 389:
        val = t389EmotionalSelfControlScore;
        break;
      case 390:
        val = t390ExecutiveFunctioningScore;
        break;
      case 391:
        val = t391NegativeEmotionalityScore;
        break;
      case 392:
        val = t392ResiliencyScore;
        break;
      case 393:
        val = t393HyperactivityScore;
        break;
      case 394:
        val = t394AggressionScore;
        break;
      case 395:
        val = t395AnxietyScore;
        break;
      case 396:
        val = t396DepressionScore;
        break;
      case 397:
        val = t397SomatizationScore;
        break;
      case 398:
        val = t398AdaptabilityScore;
        break;
      case 399:
        val = t399SocialSkillsScore;
        break;
      case 400:
        val = t400FunctionalCommunicationScore;
        break;
      case 401:
        val = t401HyperactivityScore;
        break;
      case 402:
        val = t402AggressionScore;
        break;
      case 403:
        val = t403DepressionScore;
        break;
      case 404:
        val = t404AttentionProblemsScore;
        break;
      case 405:
        val = t405AtypicalityScore;
        break;
      case 406:
        val = t406WithdrawalScore;
        break;
      case 407:
        val = t407HyperactivityScore;
        break;
      case 408:
        val = t408AggressionScore;
        break;
      case 409:
        val = t409ConductProblemsScore;
        break;
      case 410:
        val = t410AnxietyScore;
        break;
      case 411:
        val = t411DepressionScore;
        break;
      case 412:
        val = t412SomatizationScore;
        break;
      case 413:
        val = t413LearningProblemsScore;
        break;
      case 414:
        val = t414AttentionProblemsScore;
        break;
      case 415:
        val = t415AdaptabilityScore;
        break;
      case 416:
        val = t416SocialSkillsScore;
        break;
      case 417:
        val = t417FunctionalCommunicationScore;
        break;
      case 418:
        val = t418LeadershipScore;
        break;
      case 419:
        val = t419StudySkillsScore;
        break;
      case 420:
        val = t420HyperactivityScore;
        break;
      case 421:
        val = t421AggressionScore;
        break;
      case 422:
        val = t422DepressionScore;
        break;
      case 423:
        val = t423AttentionProblemsScore;
        break;
      case 424:
        val = t424AtypicalityScore;
        break;
      case 425:
        val = t425WithdrawalScore;
        break;
      case 426:
        val = t426HyperactivityScore;
        break;
      case 427:
        val = t427AggressionScore;
        break;
      case 428:
        val = t428AnxietyScore;
        break;
      case 429:
        val = t429DepressionScore;
        break;
      case 430:
        val = t430SomatizationScore;
        break;
      case 431:
        val = t431AdaptabilityScore;
        break;
      case 432:
        val = t432SocialSkillsScore;
        break;
      case 433:
        val = t433FunctionalCommunicationScore;
        break;
      case 434:
        val = t434ActivitiesOfDailyLivingScore;
        break;
      case 435:
        val = t435HyperactivityScore;
        break;
      case 436:
        val = t436AggressionScore;
        break;
      case 437:
        val = t437DepressionScore;
        break;
      case 438:
        val = t438AttentionProblemsScore;
        break;
      case 439:
        val = t439AtypicalityScore;
        break;
      case 440:
        val = t440WithdrawalScore;
        break;
      case 441:
        val = t441HyperactivityScore;
        break;
      case 442:
        val = t442AggressionScore;
        break;
      case 443:
        val = t443ConductProblemsScore;
        break;
      case 444:
        val = t444AnxietyScore;
        break;
      case 445:
        val = t445DepressionScore;
        break;
      case 446:
        val = t446SomatizationScore;
        break;
      case 447:
        val = t447AdaptabilityScore;
        break;
      case 448:
        val = t448SocialSkillsScore;
        break;
      case 449:
        val = t449FunctionalCommunicationScore;
        break;
      case 450:
        val = t450ActivitiesOfDailyLivingScore;
        break;
      case 451:
        val = t451HyperactivityScore;
        break;
      case 452:
        val = t452AggressionScore;
        break;
      case 453:
        val = t453DepressionScore;
        break;
      case 454:
        val = t454AttentionProblemsScore;
        break;
      case 455:
        val = t455AtypicalityScore;
        break;
      case 456:
        val = t456WithdrawalScore;
        break;
      case 457:
        val = t457SimilaritiesScore;
        break;
      case 458:
        val = t458VocabularyScore;
        break;
      case 459:
        val = t459InformationScore;
        break;
      case 460:
        val = t460ComprehensionScore;
        break;
      case 461:
        val = t461BlockDesignScore;
        break;
      case 462:
        val = t462MatrixReasoningScore;
        break;
      case 463:
        val = t463VisualPuzzlesScore;
        break;
      case 464:
        val = t464FigureWeightsScore;
        break;
      case 465:
        val = t465PictureCompletionScore;
        break;
      case 466:
        val = t466DigitSpanScore;
        break;
      case 467:
        val = t467ArithmeticScore;
        break;
      case 468:
        val = t468LetterNumberSequencingScore;
        break;
      case 469:
        val = t469CodingScore;
        break;
      case 470:
        val = t470SymbolSearchScore;
        break;
      case 471:
        val = t471CancellationScore;
        break;
      case 472:
        val = t472PoorAchievementAndMemoryScore;
        break;
      case 473:
        val = t473InadequateAbilitiesScore;
        break;
      case 474:
        val = t474LearningProblemsScore;
        break;
      case 475:
        val = t475BrashnessScore;
        break;
      case 476:
        val = t476DistractibilityAndOveractivityScore;
        break;
      case 477:
        val = t477ImpulsivityScore;
        break;
      case 478:
        val = t478AntisocialBehaviorScore;
        break;
      case 479:
        val = t479DyscontrolScore;
        break;
      case 480:
        val = t480NoncomplianceScore;
        break;
      case 481:
        val = t481ParentChildConflictScore;
        break;
      case 482:
        val = t482ParentMaladjustmentScore;
        break;
      case 483:
        val = t483MaritalDiscordScore;
        break;
      case 484:
        val = t484FeelingsOfAlienationScore;
        break;
      case 485:
        val = t485HallucinationsAndDelusionsScore;
        break;
      case 486:
        val = t486PsychosomaticSyndromeScore;
        break;
      case 487:
        val = t487MuscularTensionAndAnxietyScore;
        break;
      case 488:
        val = t488PreoccupationWithDiseaseScore;
        break;
      case 489:
        val = t489FearAndWorryScore;
        break;
      case 490:
        val = t490DepressionScore;
        break;
      case 491:
        val = t491SleepDisturbanceScore;
        break;
      case 492:
        val = t492SocialIntroversionScore;
        break;
      case 493:
        val = t493IsolationScore;
        break;
      case 494:
        val = t494LimitedPeerStatusScore;
        break;
      case 495:
        val = t495ConflictWithPeersScore;
        break;
      case 525:
        val = t525HypochondriasisHsScore;
        break;
      case 526:
        val = t526DepressionDScore;
        break;
      case 527:
        val = t527HysteriaHyScore;
        break;
      case 528:
        val = t528PsychopathicDeviatePdScore;
        break;
      case 529:
        val = t529MasculinityFemininityMfScore;
        break;
      case 530:
        val = t530ParanoiaPaScore;
        break;
      case 531:
        val = t531PsychastheniaPtScore;
        break;
      case 532:
        val = t532SchizophreniaScScore;
        break;
      case 533:
        val = t533HypomaniaMaScore;
        break;
      case 534:
        val = t534SocialIntroversionSiScore;
        break;
      case 535:
        val = t535LieLScore;
        break;
      case 536:
        val = t536FScore;
        break;
      case 537:
        val = t537BackFFbScore;
        break;
      case 538:
        val = t538KScore;
        break;
      case 539:
        val = t539HypochondriasisHsScore;
        break;
      case 540:
        val = t540DepressionDScore;
        break;
      case 541:
        val = t541HysteriaHyScore;
        break;
      case 542:
        val = t542PsychopathicDeviatePdScore;
        break;
      case 543:
        val = t543MasculinityFemininityMfScore;
        break;
      case 544:
        val = t544ParanoiaPaScore;
        break;
      case 545:
        val = t545PsychastheniaPtScore;
        break;
      case 546:
        val = t546SchizophreniaScScore;
        break;
      case 547:
        val = t547HypomaniaMaScore;
        break;
      case 548:
        val = t548SocialIntroversionSiScore;
        break;
      case 549:
        val = t549CNSScore;
        break;
      case 550:
        val = t550VRINScore;
        break;
      case 551:
        val = t551TRINScore;
        break;
      case 552:
        val = t552FScore;
        break;
      case 553:
        val = t553F1Score;
        break;
      case 554:
        val = t554F2Score;
        break;
      case 555:
        val = t555LScore;
        break;
      case 556:
        val = t556KScore;
        break;
      case 557:
        val = t557AnimalSortingASScore;
        break;
      case 558:
        val = t558AuditoryAttentionAAAndResponseSetRSScore;
        break;
      case 559:
        val = t559ClocksCLScore;
        break;
      case 560:
        val = t560DesignFluencyDFScore;
        break;
      case 561:
        val = t561InhibitionINScore;
        break;
      case 562:
        val = t562StatueSTScore;
        break;
      case 563:
        val = t563BodyPartNamingBPNAndIdentificationBPIScore;
        break;
      case 564:
        val = t564ComprehensionOfInstructionsCIScore;
        break;
      case 565:
        val = t565OromotorSequencesOSScore;
        break;
      case 566:
        val = t566PhonologicalProcessingPHScore;
        break;
      case 567:
        val = t567RepetitionNonsenseWordsRNScore;
        break;
      case 568:
        val = t568SpeededNamingSNScore;
        break;
      case 569:
        val = t569WordGenerationWGScore;
        break;
      case 571:
        val = t571ListMemoryLMListMemoryDelayedLMDScore;
        break;
      case 572:
        val = t572MemoryForDesignsMDMemoryForDesignsDelayedMDDScore;
        break;
      case 573:
        val = t573MemoryForFacesMFMemoryForFacesDelayedMFDScore;
        break;
      case 574:
        val = t574MemoryForNamesMNMemoryForNamesDelayedMNDScore;
        break;
      case 575:
        val = t575NarrativeMemoryNMScore;
        break;
      case 576:
        val = t576SentenceRepetitionSRScore;
        break;
      case 577:
        val = t577WordListInterferenceWIScore;
        break;
      case 578:
        val = t578FingertipTappingFTScore;
        break;
      case 579:
        val = t579ImitatingHandPositionsIHScore;
        break;
      case 580:
        val = t580ManualMotorSequencesMMScore;
        break;
      case 581:
        val = t581VisuomotorPrecisionVPScore;
        break;
      case 582:
        val = t582AffectRecognitionARScore;
        break;
      case 583:
        val = t583TheoryOfMindTMScore;
        break;
      case 584:
        val = t584ArrowsAWScore;
        break;
      case 585:
        val = t585BlockConstructionBCScore;
        break;
      case 586:
        val = t586DesignCopyingDCScore;
        break;
      case 587:
        val = t587GeometricPuzzlesGPScore;
        break;
      case 588:
        val = t588PicturePuzzlesPPScore;
        break;
      case 589:
        val = t589RouteFindingRFScore;
        break;
      case 593:
        val = t593VocabularyScore;
        break;
      case 594:
        val = t594GeneralInformationScore;
        break;
      case 595:
        val = t595NumberSeriesScore;
        break;
      case 596:
        val = t596ConceptFormationScore;
        break;
      case 597:
        val = t597AnalysisSynthesisScore;
        break;
      case 598:
        val = t598VerbalAttentionScore;
        break;
      case 599:
        val = t599NumbersReversedScore;
        break;
      case 600:
        val = t600ObjectNumberSequencingScore;
        break;
      case 601:
        val = t601PairCancellationScore;
        break;
      case 645:
        val = t645LetterPatternMatchingScore;
        break;
      case 602:
        val = t602PhonologicalProcessingScore;
        break;
      case 603:
        val = t603NonWordRepetitionScore;
        break;
      case 604:
        val = t604RecallScore;
        break;
      case 605:
        val = t605VisualAuditoryLearningScore;
        break;
      case 606:
        val = t606VisualizationScore;
        break;
      case 607:
        val = t607PictureRecognitionScore;
        break;
      case 608:
        val = t608UnderresponseUNDScore;
        break;
      case 609:
        val = t609HyperresponseHYPScore;
        break;
      case 610:
        val = t610AnxietyANXScore;
        break;
      case 611:
        val = t611DepressionDEPScore;
        break;
      case 612:
        val = t612AngerANGScore;
        break;
      case 613:
        val = t613PosttraumaticStressPTSScore;
        break;
      case 614:
        val = t614DissociationDISScore;
        break;
      case 615:
        val = t615SexualConcernsSCScore;
        break;
      case 616:
        val = t616LetterWordIdentificationScore;
        break;
      case 617:
        val = t617WordAttackScore;
        break;
      case 618:
        val = t618PassageComprehensionScore;
        break;
      case 619:
        val = t619ReadingRecallScore;
        break;
      case 620:
        val = t620ReadingVocabularyScore;
        break;
      case 621:
        val = t621CalculationScore;
        break;
      case 622:
        val = t622MathFactFluencyScore;
        break;
      case 623:
        val = t623AppliedProblemsScore;
        break;
      case 624:
        val = t624NumberMatricesScore;
        break;
      case 625:
        val = t625WritingSamplesScore;
        break;
      case 626:
        val = t626SentenceWritingFluencyScore;
        break;
      case 627:
        val = t627OralReadingScore;
        break;
      case 628:
        val = t628SentenceReadingFluencyScore;
        break;
      case 629:
        val = t629SpellingScore;
        break;
      case 630:
        val = t630SpellingOfSoundsScore;
        break;
      case 631:
        val = t631EditingScore;
        break;
      case 632:
        val = t632ScienceScore;
        break;
      case 633:
        val = t633SocialStudiesScore;
        break;
      case 634:
        val = t634HumanitiesScore;
        break;
      case 635:
        val = t635WordAttackScore;
        break;
      case 636:
        val = t636SpellingOfSoundsScore;
        break;
      case 637:
        val = t637BriefCognitiveStatusExamScore;
        break;
      case 638:
        val = t638LogicalMemoryScore;
        break;
      case 639:
        val = t639VerbalPairedAssociatesScore;
        break;
      case 640:
        val = t640DesignsScore;
        break;
      case 641:
        val = t641VisualReproductionScore;
        break;
      case 642:
        val = t642SpatialAdditionScore;
        break;
      case 643:
        val = t643SymbolSpanScore;
        break;
      case 646:
        val = t646AdaptationToChangeRestrictedInterestsScore;
        break;
      case 647:
        val = t647SimilaritiesScore;
        break;
      case 648:
        val = t648VocabularyScore;
        break;
      case 649:
        val = t649InformationScore;
        break;
      case 650:
        val = t650ComprehensionScore;
        break;
      case 651:
        val = t651MatrixReasoningScore;
        break;
      case 652:
        val = t652PictureConceptsScore;
        break;
      case 653:
        val = t653BlockDesignScore;
        break;
      case 654:
        val = t654ObjectAssemblyScore;
        break;
      case 655:
        val = t655PictureMemoryScore;
        break;
      case 656:
        val = t656ZooLocationsScore;
        break;
      case 657:
        val = t657BugSearchScore;
        break;
      case 658:
        val = t658CancellationScore;
        break;
      case 659:
        val = t659AnimalCodingScore;
        break;
      case 660:
        val = t660ReceptiveVocabularyScore;
        break;
      case 661:
        val = t661PictureNamingScore;
        break;
      case 662:
        val = t662SocialStressScore;
        break;
      case 663:
        val = '';
        break;
      case 664:
        val = t664AnxietyScore;
        break;
      case 665:
        val = t665DepressionScore;
        break;
      case 666:
        val = t666SenseOfInadequacyScore;
        break;
      case 667:
        val = t667SelfEsteemScore;
        break;
      case 668:
        val = t668SelfRelianceScore;
        break;
      case 669:
        val = t669BeeryMotorIntegrationVMIScore;
        break;
      case 670:
        val = t670BeeryVisualPerceptionScore;
        break;
      case 671:
        val = t671BeeryMotorCoordinationScore;
        break;
      case 672:
        val = t672ListeningComprehensionGradesPK12Score;
        break;
      case 673:
        val = t673OralExpressionGradesPK12Score;
        break;
      case 674:
        val = t674EarlyReadingSkillsGradesPK3Score;
        break;
      case 675:
        val = t675ReadingComprehensionGrades112Score;
        break;
      case 676:
        val = t676WordReadingGrades112Score;
        break;
      case 677:
        val = t677PseudowordDecodingGrades112Score;
        break;
      case 678:
        val = t678OralReadingFluencyGrades112Score;
        break;
      case 679:
        val = t679SpellingGradesK12Score;
        break;
      case 680:
        val = t680AlphabetWritingFluencyGradesPK3Score;
        break;
      case 681:
        val = t681SentenceCompositionGrades112Score;
        break;
      case 682:
        val = t682EssayCompositionGrades312Score;
        break;
      case 683:
        val = t683NumericalOperationsGradesK12Score;
        break;
      case 684:
        val = t684MathProblemSolvingGradesPK12Score;
        break;
      case 685:
        val = t685MathFluencyAdditionScore;
        break;
      case 686:
        val = t686MathFluencySubtractionScore;
        break;
      case 687:
        val = t687MathFluencyMultiplicationScore;
        break;
      case 688:
        val = t688VocabularyScore;
        break;
      case 689:
        val = t689ComprehensionScore;
        break;
      case 690:
        val = t690ReadingRateScore;
        break;
      case 698:
        val = t698VisualScanningScore;
        break;
      case 699:
        val = t699NumberSequencingScore;
        break;
      case 700:
        val = t700LetterSequencingScore;
        break;
      case 701:
        val = t701CombinedNumberAndLetterSequencingScore;
        break;
      case 702:
        val = t702NumberLetterSwitchingScore;
        break;
      case 703:
        val = t703MotorSpeedScore;
        break;
      case 704:
        val = t704LetterFluencyScore;
        break;
      case 705:
        val = t705CategoryFluencyScore;
        break;
      case 706:
        val = t706CategorySwitchingScore;
        break;
      case 707:
        val = t707FilledDotsScore;
        break;
      case 708:
        val = t708EmptyDotsOnlyScore;
        break;
      case 709:
        val = t709SwitchingScore;
        break;
      case 710:
        val = t710ColorNamingScore;
        break;
      case 711:
        val = t711WordReadingScore;
        break;
      case 712:
        val = t712InhibitionScore;
        break;
      case 713:
        val = t713InhibitionSwitchingScore;
        break;
      case 714:
        val = t714FreeSortingScore;
        break;
      case 715:
        val = t715SortRecognitionScore;
        break;
      case 716:
        val = t716Item1Score;
        break;
      case 717:
        val = t717Item2Score;
        break;
      case 718:
        val = t718Item3Score;
        break;
      case 719:
        val = t719Item4Score;
        break;
      case 720:
        val = t720Item1Score;
        break;
      case 721:
        val = t721Item2Score;
        break;
      case 722:
        val = t722Item1TwoDisksScore;
        break;
      case 723:
        val = t723Item2TwoDisksScore;
        break;
      case 724:
        val = t724Item3TwoDisksScore;
        break;
      case 725:
        val = t725Item4ThreeDisksScore;
        break;
      case 726:
        val = t726Item5ThreeDisksScore;
        break;
      case 727:
        val = t727Item6FourDisksScore;
        break;
      case 728:
        val = t728Item7FourDisksScore;
        break;
      case 729:
        val = t729Item8FiveDisksScore;
        break;
      case 730:
        val = t730Item9FiveDisksScore;
        break;
      case 731:
        val = t731FreeInquiryScore;
        break;
      case 732:
        val = t732MultipleChoiceScore;
        break;
      case 733:
        val = t733RateScore;
        break;
      case 734:
        val = t734AccuracyScore;
        break;
      case 735:
        val = t735FluencyScore;
        break;
      case 736:
        val = t736ComprehensionScore;
        break;
      case 737:
        val = t737Trail1Score;
        break;
      case 738:
        val = t738Trial2Score;
        break;
      case 739:
        val = t739RetentionTrialScore;
        break;
      case 743:
        val = t743VerbalComprehensionScore;
        break;
      case 744:
        val = t744PictureSimilaritiesScore;
        break;
      case 745:
        val = t745NamingVocabularyScore;
        break;
      case 746:
        val = t746PatternConstructionScore;
        break;
      case 747:
        val = t747MatricesScore;
        break;
      case 748:
        val = t748CopyingScore;
        break;
      case 749:
        val = t749RecallOfObjectsImmediateScore;
        break;
      case 750:
        val = t750RecallOfObjectsDelayedScore;
        break;
      case 751:
        val = t751RecallOfDigitsForwardScore;
        break;
      case 752:
        val = t752RecognitionOfPicturesScore;
        break;
      case 753:
        val = t753EarlyNumberConceptsScore;
        break;
      case 754:
        val = t754MatchingLetterLikeFormsScore;
        break;
      case 755:
        val = t755RecallOfSequentialOrderScore;
        break;
      case 756:
        val = t756SpeedOfInformationProcessingScore;
        break;
      case 757:
        val = t757RecallOfDigitsBackwardScore;
        break;
      case 758:
        val = t758PhonologicalProcessingScore;
        break;
      case 759:
        val = t759RapidNamingScore;
        break;
      case 760:
        val = t760RecallOfDesignsScore;
        break;
      case 761:
        val = t761WordDefinitionsScore;
        break;
      case 762:
        val = t762PatternConstructionScore;
        break;
      case 763:
        val = t763MatricesScore;
        break;
      case 764:
        val = t764VerbalSimilaritiesScore;
        break;
      case 765:
        val = t765SequentialAndQuantitativeReasoningScore;
        break;
      case 766:
        val = t766RecallOfObjectsImmediateScore;
        break;
      case 767:
        val = t767RecallOfObjectsDelayedScore;
        break;
      case 768:
        val = t768RecallOfDigitsForwardScore;
        break;
      case 769:
        val = t769RecognitionOfPicturesScore;
        break;
      case 770:
        val = t770RecallOfSequentialOrderScore;
        break;
      case 771:
        val = t771SpeedOfInformationProcessingScore;
        break;
      case 772:
        val = t772RecallOfDigitsBackwardScore;
        break;
      case 773:
        val = t773PhonologicalProcessingScore;
        break;
      default:
        val = '';
    }
    return val;
  };

  const appendixSubtestRankVal = (id) => {
    let val;
    switch (id) {
      case 1:
        val = t1AppendixWiscVSimilaritiesRank;
        break;
      case 2:
        val = t2AppendixWiscVVocabularyRank;
        break;
      case 3:
        val = t3AppendixWiscVInformationRank;
        break;
      case 4:
        val = t4AppendixWiscVComprehensionRank;
        break;
      case 5:
        val = t5AppendixWiscVBlockDesignRank;
        break;
      case 6:
        val = t6AppendixWiscVVocabularyRank;
        break;
      case 7:
        val = t7AppendixWiscVMatrixReasoningRank;
        break;
      case 8:
        val = t8AppendixWiscVFigureWeightsRank;
        break;
      case 9:
        val = t9AppendixWiscVPictureConceptsRank;
        break;
      case 10:
        val = t10AppendixWiscVArithmeticRank;
        break;
      case 11:
        val = t11AppendixWiscVDigitSpanRank;
        break;
      case 12:
        val = t12AppendixWiscVPictureSpanRank;
        break;
      case 13:
        val = t13AppendixWiscVLetterNumberSequencingRank;
        break;
      case 14:
        val = t14AppendixWiscVCodingRank;
        break;
      case 15:
        val = t15AppendixWiscVSymbolSearchRank;
        break;
      case 16:
        val = t16AppendixWiscVCancellationRank;
        break;
      case 46:
        val = t46AppendixQikCptAccuracyIndexRank;
        break;
      case 47:
        val = t47AppendixQikCptSustainedAttentionRank;
        break;
      case 48:
        val = t48AppendixQikCptImpulseControlRank;
        break;
      case 49:
        val = t49AppendixQikCptPerformanceIndexRank;
        break;
      case 50:
        val = t50AppendixQikCptSpeedOfResponseRank;
        break;
      case 51:
        val = t51AppendixQikCptConsistencyOfResponseRank;
        break;
      case 73:
        val = t73AppendixWiscVNamingSpeedLiteracyRank;
        break;
      case 74:
        val = t74AppendixWiscVNamingSpeedQualityRank;
        break;
      case 75:
        val = t75AppendixWiscVImmediateSymbolTranslationRank;
        break;
      case 76:
        val = t76AppendixWiscVDelayedSymbolTranslationRank;
        break;
      case 77:
        val = t77AppendixWiscVRecognitionSymbolTranslationRank;
        break;
      case 78:
        val = t78AppendixBriefInconsistencyScaleRank;
        break;
      case 79:
        val = t79AppendixBriefNegativityScaleRank;
        break;
      case 82:
        val = t82AppendixBriefInhibitRank;
        break;
      case 83:
        val = t83AppendixBriefShiftRank;
        break;
      case 84:
        val = t84AppendixBriefEmotionalControlRank;
        break;
      case 85:
        val = t85AppendixBriefInitiateRank;
        break;
      case 86:
        val = t86AppendixBriefWorkingMemoryRank;
        break;
      case 87:
        val = t87AppendixBriefPlanOrganizeRank;
        break;
      case 88:
        val = t88AppendixBriefOrganizationOfMaterialsRank;
        break;
      case 89:
        val = t89AppendixBriefMonitorRank;
        break;
      case 90:
        val = t90AppendixBriefInhibitRank;
        break;
      case 91:
        val = t91AppendixBriefShiftRank;
        break;
      case 92:
        val = t92AppendixBriefEmotionalControlRank;
        break;
      case 93:
        val = t93AppendixBriefInitiateRank;
        break;
      case 94:
        val = t94AppendixBriefWorkingMemoryRank;
        break;
      case 95:
        val = t95AppendixBriefPlanOrganizeRank;
        break;
      case 96:
        val = t96AppendixBriefOrganizationOfMaterialsRank;
        break;
      case 97:
        val = t97AppendixBriefMonitorRank;
        break;
      case 98:
        val = t98AppendixCars2RelatingToPeopleRank;
        break;
      case 99:
        val = t99AppendixCars2ImitationRank;
        break;
      case 100:
        val = t100AppendixCars2EmotionalResponseRank;
        break;
      case 101:
        val = t101AppendixCars2BodyUseRank;
        break;
      case 102:
        val = t102AppendixCars2ObjectUseRank;
        break;
      case 103:
        val = t103AppendixCars2AdaptionToChangeRank;
        break;
      case 104:
        val = t104AppendixCars2VisualResponseRank;
        break;
      case 105:
        val = t105AppendixCars2ListeningResponseRank;
        break;
      case 106:
        val = t106AppendixCars2TasteSmellAndTouchResponseAndUseRank;
        break;
      case 107:
        val = t107AppendixCars2FearOrNervousnessRank;
        break;
      case 108:
        val = t108AppendixCars2VerbalCommunicationRank;
        break;
      case 109:
        val = t109AppendixCars2NonverbalCommunicationRank;
        break;
      case 110:
        val = t110AppendixCars2ActivityLevelRank;
        break;
      case 111:
        val = t111AppendixCars2LevelAndConsistencyOfIntellectualResponseRank;
        break;
      case 112:
        val = t112AppendixCars2GeneralImpressionsRank;
        break;
      case 113:
        val = t113AppendixCars2SocialEmotionalUnderstandingRank;
        break;
      case 114:
        val = t114AppendixCars2EmotionalExpressionAndRegulationOfEmotionsRank;
        break;
      case 115:
        val = t115AppendixCars2RelatingToPeopleRank;
        break;
      case 116:
        val = t116AppendixCars2BodyUseRank;
        break;
      case 117:
        val = t117AppendixCars2ObjectUseInPlayRank;
        break;
      case 118:
        val = t118AppendixCars2VisualResponseRank;
        break;
      case 119:
        val = t119AppendixCars2ListeningResponseRank;
        break;
      case 120:
        val = t120AppendixConners3InattentionRank;
        break;
      case 121:
        val = t121AppendixConners3HyperactivityImpulsivityRank;
        break;
      case 122:
        val = t122AppendixConners3LearningProblemsRank;
        break;
      case 123:
        val = t123AppendixConners3ExecutiveFunctioningRank;
        break;
      case 124:
        val = t124AppendixConners3DefianceAggressionRank;
        break;
      case 125:
        val = t125AppendixConners3PeerRelationsRank;
        break;
      case 126:
        val = t126AppendixConners3AdhdInattentiveRank;
        break;
      case 127:
        val = t127AppendixConners3AdhdHyperactiveImpulsiveRank;
        break;
      case 128:
        val = t128AppendixConners3ConductDisorderRank;
        break;
      case 129:
        val = t129AppendixConners3OppositionalDefiantDisorderRank;
        break;
      case 130:
        val = t130AppendixConners3Conners3AdhdIndexRank;
        break;
      case 131:
        val = t131AppendixConners3Conners3GlobalIndexRank;
        break;
      case 132:
        val = t132AppendixConners3AnxietyRank;
        break;
      case 133:
        val = t133AppendixConners3DepressionRank;
        break;
      case 134:
        val = t134AppendixConners3SevereConductRank;
        break;
      case 135:
        val = t135AppendixConners3PositiveImpressionRank;
        break;
      case 136:
        val = t136AppendixConners3NegativeImpressionRank;
        break;
      case 137:
        val = t137AppendixConners3InconsistencyIndexRank;
        break;
      case 138:
        val = t138AppendixConners3InattentionRank;
        break;
      case 139:
        val = t139AppendixConners3HyperactivityImpulsivityRank;
        break;
      case 141:
        val = t141AppendixConners3LearningProblemsRank;
        break;
      case 142:
        val = t142AppendixConners3ExecutiveFunctioningRank;
        break;
      case 143:
        val = t143AppendixConners3DefianceAggressionRank;
        break;
      case 144:
        val = t144AppendixConners3PeerRelationsRank;
        break;
      case 145:
        val = t145AppendixConners3AdhdInattentiveRank;
        break;
      case 146:
        val = t146AppendixConners3AdhdHyperactiveImpulsiveRank;
        break;
      case 147:
        val = t147AppendixConners3ConductDisorderRank;
        break;
      case 148:
        val = t148AppendixConners3OppositionalDefiantDisorderRank;
        break;
      case 149:
        val = t149AppendixConners3Conners3AdhdIndexRank;
        break;
      case 150:
        val = t150AppendixConners3Conners3GlobalIndexRank;
        break;
      case 151:
        val = t151AppendixConners3AnxietyRank;
        break;
      case 152:
        val = t152AppendixConners3DepressionRank;
        break;
      case 153:
        val = t153AppendixConners3SevereConductRank;
        break;
      case 154:
        val = t154AppendixConners3PositiveImpressionRank;
        break;
      case 155:
        val = t155AppendixConners3NegativeImpressionRank;
        break;
      case 156:
        val = t156AppendixConners3InconsistencyIndexRank;
        break;
      case 157:
        val = t157AppendixConners3InattentionRank;
        break;
      case 158:
        val = t158AppendixConners3HyperactivityImpulsivityRank;
        break;
      case 159:
        val = t159AppendixConners3LearningProblemsRank;
        break;
      case 160:
        val = t160AppendixConners3DefianceAggressionRank;
        break;
      case 161:
        val = t161AppendixConners3FamilyRelationsRank;
        break;
      case 162:
        val = t162AppendixConners3AdhdInattentiveRank;
        break;
      case 163:
        val = t163AppendixConners3AdhdHyperactiveImpulsiveRank;
        break;
      case 164:
        val = t164AppendixConners3ConductDisorderRank;
        break;
      case 165:
        val = t165AppendixConners3OppositionalDefiantDisorderRank;
        break;
      case 166:
        val = t166AppendixConners3Conners3AdhdIndexRank;
        break;
      case 644:
        val = t644AppendixConners3AnxietyRank;
        break;
      case 167:
        val = t167AppendixConners3DepressionRank;
        break;
      case 168:
        val = t168AppendixConners3SevereConductRank;
        break;
      case 169:
        val = t169AppendixConners3PositiveImpressionRank;
        break;
      case 170:
        val = t170AppendixConners3NegativeImpressionRank;
        break;
      case 171:
        val = t171AppendixConners3InconsistencyIndexRank;
        break;
      case 172:
        val = t172AppendixCtoni2PictorialAnalogiesRank;
        break;
      case 173:
        val = t173AppendixCtoni2GeometricAnalogiesRank;
        break;
      case 174:
        val = t174AppendixCtoni2PictorialCategoriesRank;
        break;
      case 175:
        val = t175AppendixCtoni2GeometricCategoriesRank;
        break;
      case 176:
        val = t176AppendixCtoni2PictorialSequencesRank;
        break;
      case 177:
        val = t177AppendixCtoni2GeometricSequencesRank;
        break;
      case 178:
        val = t178AppendixCtoni2PictorialScaleRank;
        break;
      case 179:
        val = t179AppendixCtoni2GeometricScaleRank;
        break;
      case 180:
        val = t180AppendixCtoni2FullScaleRank;
        break;
      case 181:
        val = t181VerbalComprehensionScore;
        break;
      case 182:
        val = t182PictureSimilaritiesScore;
        break;
      case 183:
        val = t183NamingVocabularyScore;
        break;
      case 184:
        val = t184RecallOfObjectsImmediateScore;
        break;
      case 185:
        val = t185PatternConstructionScore;
        break;
      case 186:
        val = t186MatricesScore;
        break;
      case 187:
        val = t187RecallOfObjectsDelayedScore;
        break;
      case 188:
        val = t188CopyingScore;
        break;
      case 189:
        val = t189RecallOfDesignsScore;
        break;
      case 190:
        val = t190WordDefinitionsScore;
        break;
      case 191:
        val = t191RecallOfObjectsImmediateScore;
        break;
      case 192:
        val = t192PatternConstructionScore;
        break;
      case 193:
        val = t193MatricesScore;
        break;
      case 194:
        val = t194RecallOfObjectsDelayedScore;
        break;
      case 195:
        val = t195VerbalSimilaritiesScore;
        break;
      case 196:
        val = t196SequentialAndQuantitativeReasoningScore;
        break;
      case 197:
        val = t197RecallOfDigitsForwardScore;
        break;
      case 198:
        val = t198RecognitionOfPicturesScore;
        break;
      case 199:
        val = t199EarlyNumberConceptsScore;
        break;
      case 200:
        val = t200MatchingLetterLikeFormsScore;
        break;
      case 201:
        val = t201RecallOfSequentialOrderScore;
        break;
      case 202:
        val = t202SpeedOfInformationProcessingScore;
        break;
      case 203:
        val = t203RecallOfDigitsBackwardScore;
        break;
      case 204:
        val = t204PhonologicalProcessingScore;
        break;
      case 205:
        val = t205RapidNamingScore;
        break;
      case 206:
        val = t206AppendixDKefsTrailMakingTestRank;
        break;
      case 207:
        val = t207AppendixDKefsVerbalFluencyTestRank;
        break;
      case 208:
        val = t208AppendixDKefsDesignFluencyTestRank;
        break;
      case 209:
        val = t209AppendixDKefsColorwordInterferenceTestRank;
        break;
      case 210:
        val = t210AppendixDKefsSortingTestRank;
        break;
      case 211:
        val = t211AppendixDKefsTwentyQuestionsTestRank;
        break;
      case 212:
        val = t212AppendixDKefsWordContextTestRank;
        break;
      case 213:
        val = t213AppendixDKefsTowerTestRank;
        break;
      case 214:
        val = t214AppendixDKefsProverbTestRank;
        break;
      case 215:
        val = t215AppendixGars3RestrictiverepetitiveBehaviorsRank;
        break;
      case 216:
        val = t216AppendixGars3SocialInteractionRank;
        break;
      case 217:
        val = t217AppendixGars3SocialCommunicationRank;
        break;
      case 218:
        val = t218AppendixGars3EmotionalResponsesRank;
        break;
      case 219:
        val = t219AppendixGars3CognitiveStyleRank;
        break;
      case 220:
        val = t220AppendixGars3MaladaptiveSpeechRank;
        break;
      case 221:
        val = t221AppendixRbansListLearningRank;
        break;
      case 222:
        val = t222AppendixRbansStoryMemoryRank;
        break;
      case 223:
        val = t223AppendixRbansFigureCopyRank;
        break;
      case 224:
        val = t224AppendixRbansLineOrientationRank;
        break;
      case 225:
        val = t225AppendixRbansPictureNamingRank;
        break;
      case 226:
        val = t226AppendixRbansSemanticFluencyRank;
        break;
      case 227:
        val = t227AppendixRbansDigitSpanRank;
        break;
      case 228:
        val = t228AppendixRbansCodingRank;
        break;
      case 229:
        val = t229AppendixRbansListRecallRank;
        break;
      case 230:
        val = t230AppendixRbansListRecognitionRank;
        break;
      case 231:
        val = t231AppendixRbansStoryRecallRank;
        break;
      case 232:
        val = t232AppendixRbansFigureRecallRank;
        break;
      case 233:
        val = t233AppendixVinelandiiReceptiveRank;
        break;
      case 234:
        val = t234AppendixVinelandiiExpressiveRank;
        break;
      case 235:
        val = t235AppendixVinelandiiWrittenRank;
        break;
      case 236:
        val = t236AppendixVinelandiiPersonalRank;
        break;
      case 237:
        val = t237AppendixVinelandiiDomesticRank;
        break;
      case 238:
        val = t238AppendixVinelandiiCommunityRank;
        break;
      case 239:
        val = t239AppendixVinelandiiInterpersonalRelationshipsRank;
        break;
      case 240:
        val = t240AppendixVinelandiiPlayAndLeisureTimeRank;
        break;
      case 241:
        val = t241AppendixVinelandiiCopingSkillsRank;
        break;
      case 242:
        val = t242AppendixVinelandiiGrossRank;
        break;
      case 243:
        val = t243AppendixVinelandiiFineRank;
        break;
      case 244:
        val = t244AppendixVinelandiiMaladaptiveBehaviorIndexRank;
        break;
      case 245:
        val = t245AppendixVinelandiiMaladaptiveBehaviorCriticalItemsRank;
        break;
      case 246:
        val = t246AppendixWasiiiSimilaritiesRank;
        break;
      case 247:
        val = t247AppendixWasiiiVocabularyRank;
        break;
      case 248:
        val = t248AppendixWasiiiBlockDesignRank;
        break;
      case 249:
        val = t249AppendixWasiiiMatrixReasoningRank;
        break;
      case 250:
        val = t250AppendixWiatiiiListeningComprehensionGradesPk12Rank;
        break;
      case 251:
        val = t251AppendixWiatiiiEarlyReadingSkillsGradesPk3Rank;
        break;
      case 252:
        val = t252AppendixWiatiiiReadingComprehensionGrades112Rank;
        break;
      case 253:
        val = t253AppendixWiatiiiMathProblemSolvingGradesPk12Rank;
        break;
      case 254:
        val = t254AppendixWiatiiiAlphabetWritingFluencyGradesPk3Rank;
        break;
      case 255:
        val = t255AppendixWiatiiiSentenceCompositionGrades112Rank;
        break;
      case 256:
        val = t256AppendixWiatiiiWordReadingGrades112Rank;
        break;
      case 257:
        val = t257AppendixWiatiiiEssayCompositionGrades312Rank;
        break;
      case 258:
        val = t258AppendixWiatiiiPseudowordDecodingGrades112Rank;
        break;
      case 259:
        val = t259AppendixWiatiiiNumericalOperationsGradesK12Rank;
        break;
      case 260:
        val = t260AppendixWiatiiiOralExpressionGradesPk12Rank;
        break;
      case 261:
        val = t261AppendixWiatiiiOralReadingFluencyGrades112Rank;
        break;
      case 262:
        val = t262AppendixWiatiiiSpellingGradesK12Rank;
        break;
      case 263:
        val = t263AppendixWiatiiiMathFluencyAdditionRank;
        break;
      case 264:
        val = t264AppendixWiatiiiMathFluencySubtractionRank;
        break;
      case 265:
        val = t265AppendixWiatiiiMathFluencyMultiplicationRank;
        break;
      case 266:
        val = t266AppendixWraml2StoryMemoryRank;
        break;
      case 267:
        val = t267AppendixWraml2VerbalLearningRank;
        break;
      case 268:
        val = t268AppendixWraml2DesignMemoryRank;
        break;
      case 269:
        val = t269AppendixWraml2PictureMemoryRank;
        break;
      case 270:
        val = t270AppendixWraml2FingerWindowsRank;
        break;
      case 271:
        val = t271AppendixWraml2NumberLetterRank;
        break;
      case 272:
        val = t272AppendixWraml2SentenceMemoryRank;
        break;
      case 273:
        val = t273AppendixWraml2SoundSymbolRank;
        break;
      case 274:
        val = t274AppendixWraml2VerbalWorkingMemoryRank;
        break;
      case 275:
        val = t275AppendixWraml2SymbolicWorkingMemoryRank;
        break;
      case 276:
        val = t276AppendixWraml2StoryMemoryDelayRecallRank;
        break;
      case 277:
        val = t277AppendixWraml2VerbalLearningDelayRecallRank;
        break;
      case 278:
        val = t278AppendixWraml2SoundSymbolDelayRecallRank;
        break;
      case 279:
        val = t279AppendixWraml2StoryMemoryRecognitionRank;
        break;
      case 280:
        val = t280AppendixWraml2VerbalLearningRecognitionRank;
        break;
      case 281:
        val = t281AppendixWraml2DesignMemoryRecognitionRank;
        break;
      case 282:
        val = t282AppendixWraml2PictureMemoryRecognitionRank;
        break;
      case 283:
        val = t283AppendixBasc3FIndexRank;
        break;
      case 284:
        val = t284AppendixBasc3LIndexRank;
        break;
      case 285:
        val = t285AppendixBasc3VIndexRank;
        break;
      case 286:
        val = t286AppendixBasc3AlcoholAbuseRank;
        break;
      case 287:
        val = t287AppendixBasc3AnxietyRank;
        break;
      case 288:
        val = t288AppendixBasc3AttentionProblemsRank;
        break;
      case 289:
        val = t289AppendixBasc3AttitudeToSchoolRank;
        break;
      case 290:
        val = t290AppendixBasc3AttitudeToTeachersRank;
        break;
      case 291:
        val = t291AppendixBasc3AtypicalityRank;
        break;
      case 292:
        val = t292AppendixBasc3DepressionRank;
        break;
      case 293:
        val = t293AppendixBasc3HyperactivityRank;
        break;
      case 294:
        val = t294AppendixBasc3LocusOfControlRank;
        break;
      case 295:
        val = t295AppendixBasc3SchoolMaladjustmentRank;
        break;
      case 296:
        val = t296AppendixBasc3SensationSeekingRank;
        break;
      case 297:
        val = t297AppendixBasc3SenseOfInadequacyRank;
        break;
      case 298:
        val = t298AppendixBasc3SocialStressRank;
        break;
      case 299:
        val = t299AppendixBasc3SomatizationRank;
        break;
      case 300:
        val = t300AppendixBasc3InterpersonalRelationsRank;
        break;
      case 301:
        val = t301AppendixBasc3RelationsWithParentsRank;
        break;
      case 302:
        val = t302AppendixBasc3SelfEsteemRank;
        break;
      case 303:
        val = t303AppendixBasc3SelfRelianceRank;
        break;
      case 304:
        val = t304AppendixBasc3AngerControlRank;
        break;
      case 305:
        val = t305AppendixBasc3EgoStrengthRank;
        break;
      case 306:
        val = t306AppendixBasc3ManiaRank;
        break;
      case 307:
        val = t307AppendixBasc3TestAnxietyRank;
        break;
      case 308:
        val = t308AppendixBasc3AttitudeToSchoolRank;
        break;
      case 309:
        val = t309AppendixBasc3AttitudeToTeachersRank;
        break;
      case 310:
        val = t310AppendixBasc3AtypicalityRank;
        break;
      case 311:
        val = t311AppendixBasc3LocusOfControlRank;
        break;
      case 312:
        val = t312AppendixBasc3SocialStressRank;
        break;
      case 313:
        val = t313AppendixBasc3AnxietyRank;
        break;
      case 314:
        val = t314AppendixBasc3DepressionRank;
        break;
      case 315:
        val = t315AppendixBasc3SenseOfInadequacyRank;
        break;
      case 316:
        val = t316AppendixBasc3AttentionProblemsRank;
        break;
      case 317:
        val = t317AppendixBasc3HyperactivityRank;
        break;
      case 662:
        val = t662AppendixBasc3SocialStressRank;
        break;
      case 664:
        val = t664AppendixBasc3AnxietyRank;
        break;
      case 665:
        val = t665AppendixBasc3DepressionRank;
        break;
      case 666:
        val = t666AppendixBasc3SenseOfInadequacyRank;
        break;
      case 667:
        val = t667AppendixBasc3SelfEsteemRank;
        break;
      case 668:
        val = t668AppendixBasc3SelfRelianceRank;
        break;
      case 324:
        val = t324AppendixBasc3InterpersonalRelationsRank;
        break;
      case 325:
        val = t325AppendixBasc3RelationsWithParentsRank;
        break;
      case 326:
        val = t326AppendixBasc3SelfEsteemRank;
        break;
      case 327:
        val = t327AppendixBasc3SelfRelianceRank;
        break;
      case 328:
        val = t328AppendixBasc3AttitudeToSchoolRank;
        break;
      case 329:
        val = t329AppendixBasc3AttitudeToTeachersRank;
        break;
      case 330:
        val = t330AppendixBasc3SensationSeekingRank;
        break;
      case 331:
        val = t331AppendixBasc3AtypicalityRank;
        break;
      case 332:
        val = t332AppendixBasc3LocusOfControlRank;
        break;
      case 333:
        val = t333AppendixBasc3SocialStressRank;
        break;
      case 334:
        val = t334AppendixBasc3AnxietyRank;
        break;
      case 335:
        val = t335AppendixBasc3DepressionRank;
        break;
      case 336:
        val = t336AppendixBasc3SenseOfInadequacyRank;
        break;
      case 337:
        val = t337AppendixBasc3SomatizationRank;
        break;
      case 338:
        val = t338AppendixBasc3AttentionProblemsRank;
        break;
      case 339:
        val = t339AppendixBasc3HyperactivityRank;
        break;
      case 340:
        val = t340AppendixBasc3SocialStressRank;
        break;
      case 341:
        val = t341AppendixBasc3AnxietyRank;
        break;
      case 342:
        val = t342AppendixBasc3DepressionRank;
        break;
      case 343:
        val = t343AppendixBasc3SenseOfInadequacyRank;
        break;
      case 344:
        val = t344AppendixBasc3SelfEsteemRank;
        break;
      case 345:
        val = t345AppendixBasc3SelfRelianceRank;
        break;
      case 346:
        val = t346AppendixBasc3InterpersonalRelationsRank;
        break;
      case 347:
        val = t347AppendixBasc3RelationsWithParentsRank;
        break;
      case 348:
        val = t348AppendixBasc3SelfEsteemRank;
        break;
      case 349:
        val = t349AppendixBasc3SelfRelianceRank;
        break;
      case 350:
        val = t350AppendixBasc3AtypicalityRank;
        break;
      case 351:
        val = t351AppendixBasc3LocusOfControlRank;
        break;
      case 352:
        val = t352AppendixBasc3SocialStressRank;
        break;
      case 353:
        val = t353AppendixBasc3AnxietyRank;
        break;
      case 354:
        val = t354AppendixBasc3DepressionRank;
        break;
      case 355:
        val = t355AppendixBasc3SenseOfInadequacyRank;
        break;
      case 356:
        val = t356AppendixBasc3SomatizationRank;
        break;
      case 357:
        val = t357AppendixBasc3AttentionProblemsRank;
        break;
      case 358:
        val = t358AppendixBasc3HyperactivityRank;
        break;
      case 359:
        val = t359AppendixBasc3SocialStressRank;
        break;
      case 360:
        val = t360AppendixBasc3AnxietyRank;
        break;
      case 361:
        val = t361AppendixBasc3DepressionRank;
        break;
      case 362:
        val = t362AppendixBasc3SenseOfInadequacyRank;
        break;
      case 363:
        val = t363AppendixBasc3SelfEsteemRank;
        break;
      case 364:
        val = t364AppendixBasc3SelfRelianceRank;
        break;
      case 365:
        val = t365AppendixBasc3InterpersonalRelationsRank;
        break;
      case 366:
        val = t366AppendixBasc3RelationsWithParentsRank;
        break;
      case 367:
        val = t367AppendixBasc3SelfEsteemRank;
        break;
      case 368:
        val = t368AppendixBasc3SelfRelianceRank;
        break;
      case 369:
        val = t369AppendixBasc3FIndexRank;
        break;
      case 370:
        val = t370AppendixBasc3AggressionRank;
        break;
      case 371:
        val = t371AppendixBasc3AnxietyRank;
        break;
      case 372:
        val = t372AppendixBasc3AttentionProblemsRank;
        break;
      case 373:
        val = t373AppendixBasc3AtypicalityRank;
        break;
      case 374:
        val = t374AppendixBasc3ConductProblemsRank;
        break;
      case 375:
        val = t375AppendixBasc3DepressionRank;
        break;
      case 376:
        val = t376AppendixBasc3HyperactivityRank;
        break;
      case 377:
        val = t377AppendixBasc3LearningProblemsRank;
        break;
      case 378:
        val = t378AppendixBasc3SomatizationRank;
        break;
      case 379:
        val = t379AppendixBasc3WithdrawalRank;
        break;
      case 380:
        val = t380AppendixBasc3ActivitiesOfDailyLivingRank;
        break;
      case 381:
        val = t381AppendixBasc3AdaptabilityRank;
        break;
      case 382:
        val = t382AppendixBasc3FunctionalCommunicationRank;
        break;
      case 383:
        val = t383AppendixBasc3LeadershipRank;
        break;
      case 384:
        val = t384AppendixBasc3SocialSkillsRank;
        break;
      case 385:
        val = t385AppendixBasc3StudySkillsRank;
        break;
      case 386:
        val = t386AppendixBasc3AngerControlRank;
        break;
      case 387:
        val = t387AppendixBasc3BullyingRank;
        break;
      case 388:
        val = t388AppendixBasc3DevelopmentalSocialDisordersRank;
        break;
      case 389:
        val = t389AppendixBasc3EmotionalSelfControlRank;
        break;
      case 390:
        val = t390AppendixBasc3ExecutiveFunctioningRank;
        break;
      case 391:
        val = t391AppendixBasc3NegativeEmotionalityRank;
        break;
      case 392:
        val = t392AppendixBasc3ResiliencyRank;
        break;
      case 393:
        val = t393AppendixBasc3HyperactivityRank;
        break;
      case 394:
        val = t394AppendixBasc3AggressionRank;
        break;
      case 395:
        val = t395AppendixBasc3AnxietyRank;
        break;
      case 396:
        val = t396AppendixBasc3DepressionRank;
        break;
      case 397:
        val = t397AppendixBasc3SomatizationRank;
        break;
      case 398:
        val = t398AppendixBasc3AdaptabilityRank;
        break;
      case 399:
        val = t399AppendixBasc3SocialSkillsRank;
        break;
      case 400:
        val = t400AppendixBasc3FunctionalCommunicationRank;
        break;
      case 401:
        val = t401AppendixBasc3HyperactivityRank;
        break;
      case 402:
        val = t402AppendixBasc3AggressionRank;
        break;
      case 403:
        val = t403AppendixBasc3DepressionRank;
        break;
      case 404:
        val = t404AppendixBasc3AttentionProblemsRank;
        break;
      case 405:
        val = t405AppendixBasc3AtypicalityRank;
        break;
      case 406:
        val = t406AppendixBasc3WithdrawalRank;
        break;
      case 407:
        val = t407AppendixBasc3HyperactivityRank;
        break;
      case 408:
        val = t408AppendixBasc3AggressionRank;
        break;
      case 409:
        val = t409AppendixBasc3ConductProblemsRank;
        break;
      case 410:
        val = t410AppendixBasc3AnxietyRank;
        break;
      case 411:
        val = t411AppendixBasc3DepressionRank;
        break;
      case 412:
        val = t412AppendixBasc3SomatizationRank;
        break;
      case 413:
        val = t413AppendixBasc3LearningProblemsRank;
        break;
      case 414:
        val = t414AppendixBasc3AttentionProblemsRank;
        break;
      case 415:
        val = t415AppendixBasc3AdaptabilityRank;
        break;
      case 416:
        val = t416AppendixBasc3SocialSkillsRank;
        break;
      case 417:
        val = t417AppendixBasc3FunctionalCommunicationRank;
        break;
      case 418:
        val = t418AppendixBasc3LeadershipRank;
        break;
      case 419:
        val = t419AppendixBasc3StudySkillsRank;
        break;
      case 420:
        val = t420AppendixBasc3HyperactivityRank;
        break;
      case 421:
        val = t421AppendixBasc3AggressionRank;
        break;
      case 422:
        val = t422AppendixBasc3DepressionRank;
        break;
      case 423:
        val = t423AppendixBasc3AttentionProblemsRank;
        break;
      case 424:
        val = t424AppendixBasc3AtypicalityRank;
        break;
      case 425:
        val = t425AppendixBasc3WithdrawalRank;
        break;
      case 426:
        val = t426AppendixBasc3HyperactivityRank;
        break;
      case 427:
        val = t427AppendixBasc3AggressionRank;
        break;
      case 428:
        val = t428AppendixBasc3AnxietyRank;
        break;
      case 429:
        val = t429AppendixBasc3DepressionRank;
        break;
      case 430:
        val = t430AppendixBasc3SomatizationRank;
        break;
      case 431:
        val = t431AppendixBasc3AdaptabilityRank;
        break;
      case 432:
        val = t432AppendixBasc3SocialSkillsRank;
        break;
      case 433:
        val = t433AppendixBasc3FunctionalCommunicationRank;
        break;
      case 434:
        val = t434AppendixBasc3ActivitiesOfDailyLivingRank;
        break;
      case 435:
        val = t435AppendixBasc3HyperactivityRank;
        break;
      case 436:
        val = t436AppendixBasc3AggressionRank;
        break;
      case 437:
        val = t437AppendixBasc3DepressionRank;
        break;
      case 438:
        val = t438AppendixBasc3AttentionProblemsRank;
        break;
      case 439:
        val = t439AppendixBasc3AtypicalityRank;
        break;
      case 440:
        val = t440AppendixBasc3WithdrawalRank;
        break;
      case 441:
        val = t441AppendixBasc3HyperactivityRank;
        break;
      case 442:
        val = t442AppendixBasc3AggressionRank;
        break;
      case 443:
        val = t443AppendixBasc3ConductProblemsRank;
        break;
      case 444:
        val = t444AppendixBasc3AnxietyRank;
        break;
      case 445:
        val = t445AppendixBasc3DepressionRank;
        break;
      case 446:
        val = t446AppendixBasc3SomatizationRank;
        break;
      case 447:
        val = t447AppendixBasc3AdaptabilityRank;
        break;
      case 448:
        val = t448AppendixBasc3SocialSkillsRank;
        break;
      case 449:
        val = t449AppendixBasc3FunctionalCommunicationRank;
        break;
      case 450:
        val = t450AppendixBasc3ActivitiesOfDailyLivingRank;
        break;
      case 451:
        val = t451AppendixBasc3HyperactivityRank;
        break;
      case 452:
        val = t452AppendixBasc3AggressionRank;
        break;
      case 453:
        val = t453AppendixBasc3DepressionRank;
        break;
      case 454:
        val = t454AppendixBasc3AttentionProblemsRank;
        break;
      case 455:
        val = t455AppendixBasc3AtypicalityRank;
        break;
      case 456:
        val = t456AppendixBasc3WithdrawalRank;
        break;
      case 457:
        val = t457AppendixWaisivSimilaritiesRank;
        break;
      case 458:
        val = t458AppendixWaisivVocabularyRank;
        break;
      case 459:
        val = t459AppendixWaisivInformationRank;
        break;
      case 460:
        val = t460AppendixWaisivComprehensionRank;
        break;
      case 461:
        val = t461AppendixWaisivBlockDesignRank;
        break;
      case 462:
        val = t462AppendixWaisivMatrixReasoningRank;
        break;
      case 463:
        val = t463AppendixWaisivVisualPuzzlesRank;
        break;
      case 464:
        val = t464AppendixWaisivFigureWeightsRank;
        break;
      case 465:
        val = t465AppendixWaisivPictureCompletionRank;
        break;
      case 466:
        val = t466AppendixWaisivDigitSpanRank;
        break;
      case 467:
        val = t467AppendixWaisivArithmeticRank;
        break;
      case 468:
        val = t468AppendixWaisivLetterNumberSequencingRank;
        break;
      case 469:
        val = t469AppendixWaisivCodingRank;
        break;
      case 470:
        val = t470AppendixWaisivSymbolSearchRank;
        break;
      case 471:
        val = t471AppendixWaisivCancellationRank;
        break;
      case 472:
        val = t472PiyPoorAchievementAndMemoryPercentileRank;
        break;
      case 473:
        val = t473PiyInadequateAbilitiesPercentileRank;
        break;
      case 474:
        val = t474PiyLearningProblemsPercentileRank;
        break;
      case 475:
        val = t475PiyBrashnessPercentileRank;
        break;
      case 476:
        val = t476PiyDistractibilityAndOveractivityPercentileRank;
        break;
      case 477:
        val = t477PiyImpulsivityPercentileRank;
        break;
      case 478:
        val = t478PiyAntisocialBehaviorPercentileRank;
        break;
      case 479:
        val = t479PiyDyscontrolPercentileRank;
        break;
      case 480:
        val = t480PiyNoncompliancePercentileRank;
        break;
      case 481:
        val = t481PiyParentChildConflictPercentileRank;
        break;
      case 482:
        val = t482PiyParentMaladjustmentPercentileRank;
        break;
      case 483:
        val = t483PiyMaritalDiscordPercentileRank;
        break;
      case 484:
        val = t484PiyFeelingsOfAlienationPercentileRank;
        break;
      case 485:
        val = t485PiyHallucinationsAndDelusionsPercentileRank;
        break;
      case 486:
        val = t486PiyPsychosomaticSyndromePercentileRank;
        break;
      case 487:
        val = t487PiyMuscularTensionAndAnxietyPercentileRank;
        break;
      case 488:
        val = t488PiyPreoccupationWithDiseasePercentileRank;
        break;
      case 489:
        val = t489PiyFearAndWorryPercentileRank;
        break;
      case 490:
        val = t490PiyDepressionPercentileRank;
        break;
      case 491:
        val = t491PiySleepDisturbancePercentileRank;
        break;
      case 492:
        val = t492PiySocialIntroversionPercentileRank;
        break;
      case 493:
        val = t493PiyIsolationPercentileRank;
        break;
      case 494:
        val = t494PiyLimitedPeerStatusPercentileRank;
        break;
      case 495:
        val = t495PiyConflictWithPeersPercentileRank;
        break;
      case 557:
        val = t557AppendixNepsyiiAnimalSortingAsRank;
        break;
      case 558:
        val = t558AppendixNepsyiiAuditoryAttentionAaAndResponseSetRsRank;
        break;
      case 559:
        val = t559AppendixNepsyiiClocksClRank;
        break;
      case 560:
        val = t560AppendixNepsyiiDesignFluencyDfRank;
        break;
      case 561:
        val = t561AppendixNepsyiiInhibitionInRank;
        break;
      case 562:
        val = t562AppendixNepsyiiStatueStRank;
        break;
      case 563:
        val = t563AppendixNepsyiiBodyPartNamingBpnAndIdentificationBpiRank;
        break;
      case 564:
        val = t564AppendixNepsyiiComprehensionOfInstructionsCiRank;
        break;
      case 565:
        val = t565AppendixNepsyiiOromotorSequencesOsRank;
        break;
      case 566:
        val = t566AppendixNepsyiiPhonologicalProcessingPhRank;
        break;
      case 567:
        val = t567AppendixNepsyiiRepetitionNonsenseWordsRnRank;
        break;
      case 568:
        val = t568AppendixNepsyiiSpeededNamingSnRank;
        break;
      case 569:
        val = t569AppendixNepsyiiWordGenerationWgRank;
        break;
      case 571:
        val = t571AppendixNepsyiiListMemoryLmListMemoryDelayedLmdRank;
        break;
      case 572:
        val = t572AppendixNepsyiiMemoryForDesignsMdMemoryForDesignsDelayedMddRank;
        break;
      case 573:
        val = t573AppendixNepsyiiMemoryForFacesMfMemoryForFacesDelayedMfdRank;
        break;
      case 574:
        val = t574AppendixNepsyiiMemoryForNamesMnMemoryForNamesDelayedMndRank;
        break;
      case 575:
        val = t575AppendixNepsyiiNarrativeMemoryNmRank;
        break;
      case 576:
        val = t576AppendixNepsyiiSentenceRepetitionSrRank;
        break;
      case 577:
        val = t577AppendixNepsyiiWordListInterferenceWiRank;
        break;
      case 578:
        val = t578AppendixNepsyiiFingertipTappingFtRank;
        break;
      case 579:
        val = t579AppendixNepsyiiImitatingHandPositionsIhRank;
        break;
      case 580:
        val = t580AppendixNepsyiiManualMotorSequencesMmRank;
        break;
      case 581:
        val = t581AppendixNepsyiiVisuomotorPrecisionVpRank;
        break;
      case 582:
        val = t582AppendixNepsyiiAffectRecognitionArRank;
        break;
      case 583:
        val = t583AppendixNepsyiiTheoryOfMindTmRank;
        break;
      case 584:
        val = t584AppendixNepsyiiArrowsAwRank;
        break;
      case 585:
        val = t585AppendixNepsyiiBlockConstructionBcRank;
        break;
      case 586:
        val = t586AppendixNepsyiiDesignCopyingDcRank;
        break;
      case 587:
        val = t587AppendixNepsyiiGeometricPuzzlesGpRank;
        break;
      case 588:
        val = t588AppendixNepsyiiPicturePuzzlesPpRank;
        break;
      case 589:
        val = t589AppendixNepsyiiRouteFindingRfRank;
        break;
      case 593:
        val = t593AppendixWjivcogVocabularyRank;
        break;
      case 594:
        val = t594AppendixWjivcogGeneralInformationRank;
        break;
      case 595:
        val = t595AppendixWjivcogNumberSeriesRank;
        break;
      case 596:
        val = t596AppendixWjivcogConceptFormationRank;
        break;
      case 597:
        val = t597AppendixWjivcogAnalysisSynthesisRank;
        break;
      case 598:
        val = t598AppendixWjivcogVerbalAttentionRank;
        break;
      case 599:
        val = t599AppendixWjivcogNumbersReversedRank;
        break;
      case 600:
        val = t600AppendixWjivcogObjectNumberSequencingRank;
        break;
      case 601:
        val = t601AppendixWjivcogPairCancellationRank;
        break;
      case 645:
        val = t645AppendixWjivcogLetterPatternMatchingRank;
        break;
      case 602:
        val = t602AppendixWjivcogPhonologicalProcessingRank;
        break;
      case 603:
        val = t603AppendixWjivcogNonWordRepetitionRank;
        break;
      case 604:
        val = t604AppendixWjivcogRecallRank;
        break;
      case 605:
        val = t605AppendixWjivcogVisualAuditoryLearningRank;
        break;
      case 606:
        val = t606AppendixWjivcogVisualizationRank;
        break;
      case 607:
        val = t607AppendixWjivcogPictureRecognitionRank;
        break;
      case 616:
        val = t616AppendixWjivachLetterWordIdentificationRank;
        break;
      case 617:
        val = t617AppendixWjivachWordAttackRank;
        break;
      case 618:
        val = t618AppendixWjivachPassageComprehensionRank;
        break;
      case 619:
        val = t619AppendixWjivachReadingRecallRank;
        break;
      case 620:
        val = t620AppendixWjivachReadingVocabularyRank;
        break;
      case 621:
        val = t621AppendixWjivachCalculationRank;
        break;
      case 622:
        val = t622AppendixWjivachMathFactFluencyRank;
        break;
      case 623:
        val = t623AppendixWjivachAppliedProblemsRank;
        break;
      case 624:
        val = t624AppendixWjivachNumberMatricesRank;
        break;
      case 625:
        val = t625AppendixWjivachWritingSamplesRank;
        break;
      case 626:
        val = t626AppendixWjivachSentenceWritingFluencyRank;
        break;
      case 627:
        val = t627AppendixWjivachOralReadingRank;
        break;
      case 628:
        val = t628AppendixWjivachSentenceReadingFluencyRank;
        break;
      case 629:
        val = t629AppendixWjivachSpellingRank;
        break;
      case 630:
        val = t630AppendixWjivachSoundAwarenessRank;
        break;
      case 631:
        val = t631AppendixWjivachEditingRank;
        break;
      case 632:
        val = t632AppendixWjivachScienceRank;
        break;
      case 633:
        val = t633AppendixWjivachSocialStudiesRank;
        break;
      case 634:
        val = t634AppendixWjivachHumanitiesRank;
        break;
      case 635:
        val = t635AppendixWjivachWordAttackRank;
        break;
      case 636:
        val = t636AppendixWjivachSpellingOfSoundsRank;
        break;
      case 637:
        val = t637AppendixWmsIvBriefCognitiveStatusExamRank;
        break;
      case 638:
        val = t638AppendixWmsIvLogicalMemoryRank;
        break;
      case 639:
        val = t639AppendixWmsIvVerbalPairedAssociatesRank;
        break;
      case 640:
        val = t640AppendixWmsIvDesignsRank;
        break;
      case 641:
        val = t641AppendixWmsIvVisualReproductionRank;
        break;
      case 642:
        val = t642AppendixWmsIvSpatialAdditionRank;
        break;
      case 643:
        val = t643AppendixWmsIvSymbolSpanRank;
        break;
      case 646:
        val = t646AppendixCars2AdaptationToChangeRestrictedInterestsRank;
        break;
      case 647:
        val = t647AppendixWppsiivSimilaritiesRank;
        break;
      case 648:
        val = t648AppendixWppsiivVocabularyRank;
        break;
      case 649:
        val = t649AppendixWppsiivInformationRank;
        break;
      case 650:
        val = t650AppendixWppsiivComprehensionRank;
        break;
      case 651:
        val = t651AppendixWppsiivMatrixReasoningRank;
        break;
      case 652:
        val = t652AppendixWppsiivPictureConceptsRank;
        break;
      case 653:
        val = t653AppendixWppsiivBlockDesignRank;
        break;
      case 654:
        val = t654AppendixWppsiivObjectAssemblyRank;
        break;
      case 655:
        val = t655AppendixWppsiivPictureMemoryRank;
        break;
      case 656:
        val = t656AppendixWppsiivZooLocationsRank;
        break;
      case 657:
        val = t657AppendixWppsiivBugSearchRank;
        break;
      case 658:
        val = t658AppendixWppsiivCancellationRank;
        break;
      case 659:
        val = t659AppendixWppsiivAnimalCodingRank;
        break;
      case 669:
        val = t669AppendixBeeryvmiBeeryMotorIntegrationVmiRank;
        break;
      case 670:
        val = t670AppendixBeeryvmiBeeryVisualPerceptionRank;
        break;
      case 671:
        val = t671AppendixBeeryvmiBeeryMotorCoordinationRank;
        break;
      case 672:
        val = t672AppendixWiatiiiListeningComprehensionGradesPk12Rank;
        break;
      case 673:
        val = t673AppendixWiatiiiOralExpressionGradesPk12Rank;
        break;
      case 674:
        val = t674AppendixWiatiiiEarlyReadingSkillsGradesPk3Rank;
        break;
      case 675:
        val = t675AppendixWiatiiiReadingComprehensionGrades112Rank;
        break;
      case 676:
        val = t676AppendixWiatiiiWordReadingGrades112Rank;
        break;
      case 677:
        val = t677AppendixWiatiiiPseudowordDecodingGrades112Rank;
        break;
      case 678:
        val = t678AppendixWiatiiiOralReadingFluencyGrades112Rank;
        break;
      case 679:
        val = t679AppendixWiatiiiSpellingGradesK12Rank;
        break;
      case 680:
        val = t680AppendixWiatiiiAlphabetWritingFluencyGradesPk3Rank;
        break;
      case 681:
        val = t681AppendixWiatiiiSentenceCompositionGrades112Rank;
        break;
      case 682:
        val = t682AppendixWiatiiiEssayCompositionGrades312Rank;
        break;
      case 683:
        val = t683AppendixWiatiiiNumericalOperationsGradesK12Rank;
        break;
      case 684:
        val = t684AppendixWiatiiiMathProblemSolvingGradesPk12Rank;
        break;
      case 685:
        val = t685AppendixWiatiiiMathFluencyAdditionRank;
        break;
      case 686:
        val = t686AppendixWiatiiiMathFluencySubtractionRank;
        break;
      case 687:
        val = t687AppendixWiatiiiMathFluencyMultiplicationRank;
        break;
      case 688:
        val = t688AppendixNelsonDennyVocabularyRank;
        break;
      case 689:
        val = t689AppendixNelsonDennyComprehensionRank;
        break;
      case 690:
        val = t690AppendixNelsonDennyReadingRateRank;
        break;
      case 733:
        val = t733AppendixGort5RateRank;
        break;
      case 734:
        val = t734AppendixGort5AccuracyRank;
        break;
      case 735:
        val = t735AppendixGort5FluencyRank;
        break;
      case 736:
        val = t736AppendixGort5ComprehensionRank;
        break;
      case 737:
        val = t737AppendixTommTrail1Rank;
        break;
      case 738:
        val = t738AppendixTommTrial2Rank;
        break;
      case 739:
        val = t739AppendixTommRetentionTrialRank;
        break;
      case 743:
        val = t743AppendixDasiiVerbalComprehensionRank;
        break;
      case 744:
        val = t744AppendixDasiiPictureSimilaritiesRank;
        break;
      case 745:
        val = t745AppendixDasiiNamingVocabularyRank;
        break;
      case 746:
        val = t746AppendixDasiiPatternConstructionRank;
        break;
      case 747:
        val = t747AppendixDasiiMatricesRank;
        break;
      case 748:
        val = t748AppendixDasiiCopyingRank;
        break;
      case 749:
        val = t749AppendixDasiiRecallOfObjectsImmediateRank;
        break;
      case 750:
        val = t750AppendixDasiiRecallOfObjectsDelayedRank;
        break;
      case 751:
        val = t751AppendixDasiiRecallOfDigitsForwardRank;
        break;
      case 752:
        val = t752AppendixDasiiRecognitionOfPicturesRank;
        break;
      case 753:
        val = t753AppendixDasiiEarlyNumberConceptsRank;
        break;
      case 754:
        val = t754AppendixDasiiMatchingLetterLikeFormsRank;
        break;
      case 755:
        val = t755AppendixDasiiRecallOfSequentialOrderRank;
        break;
      case 756:
        val = t756AppendixDasiiSpeedOfInformationProcessingRank;
        break;
      case 757:
        val = t757AppendixDasiiRecallOfDigitsBackwardRank;
        break;
      case 758:
        val = t758AppendixDasiiPhonologicalProcessingRank;
        break;
      case 759:
        val = t759AppendixDasiiRapidNamingRank;
        break;
      case 760:
        val = t760AppendixDasiiRecallOfDesignsRank;
        break;
      case 761:
        val = t761AppendixDasiiWordDefinitionsRank;
        break;
      case 762:
        val = t762AppendixDasiiPatternConstructionRank;
        break;
      case 763:
        val = t763AppendixDasiiMatricesRank;
        break;
      case 764:
        val = t764AppendixDasiiVerbalSimilaritiesRank;
        break;
      case 765:
        val = t765AppendixDasiiSequentialAndQuantitativeReasoningRank;
        break;
      case 766:
        val = t766AppendixDasiiRecallOfObjectsImmediateRank;
        break;
      case 767:
        val = t767AppendixDasiiRecallOfObjectsDelayedRank;
        break;
      case 768:
        val = t768AppendixDasiiRecallOfDigitsForwardRank;
        break;
      case 769:
        val = t769AppendixDasiiRecognitionOfPicturesRank;
        break;
      case 770:
        val = t770AppendixDasiiRecallOfSequentialOrderRank;
        break;
      case 771:
        val = t771AppendixDasiiSpeedOfInformationProcessingRank;
        break;
      case 772:
        val = t772AppendixDasiiRecallOfDigitsBackwardRank;
        break;
      case 773:
        val = t773AppendixDasiiPhonologicalProcessingRank;
        break;
      default:
        val = '';
    }
    return val;
  };

  const appendixSubtestGradeEquivalentVal = (id) => {
    let val;
    switch (id) {
      case 206:
        val = t206AppendixDKefsTrailMakingTestRange;
        break;
      case 207:
        val = t207AppendixDKefsVerbalFluencyTestRange;
        break;
      case 208:
        val = t208AppendixDKefsDesignFluencyTestRange;
        break;
      case 209:
        val = t209AppendixDKefsColorWordInterferenceTestRange;
        break;
      case 210:
        val = t210AppendixDKefsSortingTestRange;
        break;
      case 211:
        val = t211AppendixDKefsTwentyQuestionsTestRange;
        break;
      case 212:
        val = t212AppendixDKefsWordContextTestRange;
        break;
      case 213:
        val = t213AppendixDKefsTowerTestRange;
        break;
      case 214:
        val = t214AppendixDKefsProverbTestRange;
        break;
      case 215:
        val = t215AppendixGars3RestrictiverepetitiveBehaviorsRange;
        break;
      case 216:
        val = t216AppendixGars3SocialInteractionRange;
        break;
      case 217:
        val = t217AppendixGars3SocialCommunicationRange;
        break;
      case 218:
        val = t218AppendixGars3EmotionalResponsesRange;
        break;
      case 219:
        val = t219AppendixGars3CognitiveStyleRange;
        break;
      case 220:
        val = t220AppendixGars3MaladaptiveSpeechRange;
        break;
      case 250:
        val = t250AppendixWiatiiiListeningComprehensionGradesPk12GradeEquivalent;
        break;
      case 251:
        val = t251AppendixWiatiiiEarlyReadingSkillsGradesPk3GradeEquivalent;
        break;
      case 252:
        val = t252AppendixWiatiiiReadingComprehensionGrades112GradeEquivalent;
        break;
      case 253:
        val = t253AppendixWiatiiiMathProblemSolvingGradesPk12GradeEquivalent;
        break;
      case 254:
        val = t254AppendixWiatiiiAlphabetWritingFluencyGradesPk3GradeEquivalent;
        break;
      case 255:
        val = t255AppendixWiatiiiSentenceCompositionGrades112GradeEquivalent;
        break;
      case 256:
        val = t256AppendixWiatiiiWordReadingGrades112GradeEquivalent;
        break;
      case 257:
        val = t257AppendixWiatiiiEssayCompositionGrades312GradeEquivalent;
        break;
      case 258:
        val = t258AppendixWiatiiiPseudowordDecodingGrades112GradeEquivalent;
        break;
      case 259:
        val = t259AppendixWiatiiiNumericalOperationsGradesK12GradeEquivalent;
        break;
      case 260:
        val = t260AppendixWiatiiiOralExpressionGradesPk12GradeEquivalent;
        break;
      case 261:
        val = t261AppendixWiatiiiOralReadingFluencyGrades112GradeEquivalent;
        break;
      case 262:
        val = t262AppendixWiatiiiSpellingGradesK12GradeEquivalent;
        break;
      case 263:
        val = t263AppendixWiatiiiMathFluencyAdditionGradeEquivalent;
        break;
      case 264:
        val = t264AppendixWiatiiiMathFluencySubtractionGradeEquivalent;
        break;
      case 265:
        val = t265AppendixWiatiiiMathFluencyMultiplicationGradeEquivalent;
        break;
      case 672:
        val = t672AppendixWiatiiiListeningComprehensionGradesPk12GradeEquivalent;
        break;
      case 673:
        val = t673AppendixWiatiiiOralExpressionGradesPk12GradeEquivalent;
        break;
      case 674:
        val = t674AppendixWiatiiiEarlyReadingSkillsGradesPk3GradeEquivalent;
        break;
      case 675:
        val = t675AppendixWiatiiiReadingComprehensionGrades112GradeEquivalent;
        break;
      case 676:
        val = t676AppendixWiatiiiWordReadingGrades112GradeEquivalent;
        break;
      case 677:
        val = t677AppendixWiatiiiPseudowordDecodingGrades112GradeEquivalent;
        break;
      case 678:
        val = t678AppendixWiatiiiOralReadingFluencyGrades112GradeEquivalent;
        break;
      case 679:
        val = t679AppendixWiatiiiSpellingGradesK12GradeEquivalent;
        break;
      case 680:
        val = t680AppendixWiatiiiAlphabetWritingFluencyGradesPk3GradeEquivalent;
        break;
      case 681:
        val = t681AppendixWiatiiiSentenceCompositionGrades112GradeEquivalent;
        break;
      case 682:
        val = t682AppendixWiatiiiEssayCompositionGrades312GradeEquivalent;
        break;
      case 683:
        val = t683AppendixWiatiiiNumericalOperationsGradesK12GradeEquivalent;
        break;
      case 684:
        val = t684AppendixWiatiiiMathProblemSolvingGradesPk12GradeEquivalent;
        break;
      case 685:
        val = t685AppendixWiatiiiMathFluencyAdditionGradeEquivalent;
        break;
      case 686:
        val = t686AppendixWiatiiiMathFluencySubtractionGradeEquivalent;
        break;
      case 687:
        val = t687AppendixWiatiiiMathFluencyMultiplicationGradeEquivalent;
        break;
      case 688:
        val = t688AppendixNelsonDennyVocabularyRange;
        break;
      case 689:
        val = t689AppendixNelsonDennyComprehensionRange;
        break;
      case 690:
        val = t690AppendixNelsonDennyReadingRateRange;
        break;
      case 743:
        val = t743AppendixDasiiVerbalComprehensionRange;
        break;
      case 744:
        val = t744AppendixDasiiPictureSimilaritiesRange;
        break;
      case 745:
        val = t745AppendixDasiiNamingVocabularyRange;
        break;
      case 746:
        val = t746AppendixDasiiPatternConstructionRange;
        break;
      case 747:
        val = t747AppendixDasiiMatricesRange;
        break;
      case 748:
        val = t748AppendixDasiiCopyingRange;
        break;
      case 749:
        val = t749AppendixDasiiRecallOfObjectsImmediateRange;
        break;
      case 750:
        val = t750AppendixDasiiRecallOfObjectsDelayedRange;
        break;
      case 751:
        val = t751AppendixDasiiRecallOfDigitsForwardRange;
        break;
      case 752:
        val = t752AppendixDasiiRecognitionOfPicturesRange;
        break;
      case 753:
        val = t753AppendixDasiiEarlyNumberConceptsRange;
        break;
      case 754:
        val = t754AppendixDasiiMatchingLetterLikeFormsRange;
        break;
      case 755:
        val = t755AppendixDasiiRecallOfSequentialOrderRange;
        break;
      case 756:
        val = t756AppendixDasiiSpeedOfInformationProcessingRange;
        break;
      case 757:
        val = t757AppendixDasiiRecallOfDigitsBackwardRange;
        break;
      case 758:
        val = t758AppendixDasiiPhonologicalProcessingRange;
        break;
      case 759:
        val = t759AppendixDasiiRapidNamingRange;
        break;
      case 760:
        val = t760AppendixDasiiRecallOfDesignsRange;
        break;
      case 761:
        val = t761AppendixDasiiWordDefinitionsRange;
        break;
      case 762:
        val = t762AppendixDasiiPatternConstructionRange;
        break;
      case 763:
        val = t763AppendixDasiiMatricesRange;
        break;
      case 764:
        val = t764AppendixDasiiVerbalSimilaritiesRange;
        break;
      case 765:
        val = t765AppendixDasiiSequentialAndQuantitativeReasoningRange;
        break;
      case 766:
        val = t766AppendixDasiiRecallOfObjectsImmediateRange;
        break;
      case 767:
        val = t767AppendixDasiiRecallOfObjectsDelayedRange;
        break;
      case 768:
        val = t768AppendixDasiiRecallOfDigitsForwardRange;
        break;
      case 769:
        val = t769AppendixDasiiRecognitionOfPicturesRange;
        break;
      case 770:
        val = t770AppendixDasiiRecallOfSequentialOrderRange;
        break;
      case 771:
        val = t771AppendixDasiiSpeedOfInformationProcessingRange;
        break;
      case 772:
        val = t772AppendixDasiiRecallOfDigitsBackwardRange;
        break;
      case 773:
        val = t773AppendixDasiiPhonologicalProcessingRange;
        break;
      default:
        val = '';
    }
    return val;
  };

  const appendixSubtestClassificationVal = (id) => {
    let val;
    switch (id) {
      case 1:
        val = t1AppendixWiscVSimilaritiesRange;
        break;
      case 2:
        val = t2AppendixWiscVVocabularyRange;
        break;
      case 3:
        val = t3AppendixWiscVInformationRange;
        break;
      case 4:
        val = t4AppendixWiscVComprehensionRange;
        break;
      case 5:
        val = t5AppendixWiscVBlockDesignRange;
        break;
      case 6:
        val = t6AppendixWiscVVocabularyRange;
        break;
      case 7:
        val = t7AppendixWiscVMatrixReasoningRange;
        break;
      case 8:
        val = t8AppendixWiscVFigureWeightsRange;
        break;
      case 9:
        val = t9AppendixWiscVPictureConceptsRange;
        break;
      case 10:
        val = t10AppendixWiscVArithmeticRange;
        break;
      case 11:
        val = t11AppendixWiscVDigitSpanRange;
        break;
      case 12:
        val = t12AppendixWiscVPictureSpanRange;
        break;
      case 13:
        val = t13AppendixWiscVLetterNumberSequencingRange;
        break;
      case 14:
        val = t14AppendixWiscVCodingRange;
        break;
      case 15:
        val = t15AppendixWiscVSymbolSearchRange;
        break;
      case 16:
        val = t16AppendixWiscVCancellationRange;
        break;
      case 46:
        val = t46AppendixQikCptAccuracyIndexRange;
        break;
      case 47:
        val = t47AppendixQikCptSustainedAttentionRange;
        break;
      case 48:
        val = t48AppendixQikCptImpulseControlRange;
        break;
      case 49:
        val = t49AppendixQikCptPerformanceIndexRange;
        break;
      case 50:
        val = t50AppendixQikCptSpeedOfResponseRange;
        break;
      case 51:
        val = t51AppendixQikCptConsistencyOfResponseRange;
        break;
      case 73:
        val = t73AppendixWiscVNamingSpeedLiteracyRange;
        break;
      case 74:
        val = t74AppendixWiscVNamingSpeedQualityRange;
        break;
      case 75:
        val = t75AppendixWiscVImmediateSymbolTranslationRange;
        break;
      case 76:
        val = t76AppendixWiscVDelayedSymbolTranslationRange;
        break;
      case 77:
        val = t77AppendixWiscVRecognitionSymbolTranslationRange;
        break;
      case 78:
        val = t78AppendixBriefInconsistencyScaleRange;
        break;
      case 79:
        val = t79AppendixBriefNegativityScaleRange;
        break;
      case 82:
        val = t82AppendixBriefInhibitRange;
        break;
      case 83:
        val = t83AppendixBriefShiftRange;
        break;
      case 84:
        val = t84AppendixBriefEmotionalControlRange;
        break;
      case 85:
        val = t85AppendixBriefInitiateRange;
        break;
      case 86:
        val = t86AppendixBriefWorkingMemoryRange;
        break;
      case 87:
        val = t87AppendixBriefPlanorganizeRange;
        break;
      case 88:
        val = t88AppendixBriefOrganizationOfMaterialsRange;
        break;
      case 89:
        val = t89AppendixBriefMonitorRange;
        break;
      case 90:
        val = t90AppendixBriefInhibitRange;
        break;
      case 91:
        val = t91AppendixBriefShiftRange;
        break;
      case 92:
        val = t92AppendixBriefEmotionalControlRange;
        break;
      case 93:
        val = t93AppendixBriefInitiateRange;
        break;
      case 94:
        val = t94AppendixBriefWorkingMemoryRange;
        break;
      case 95:
        val = t95AppendixBriefPlanorganizeRange;
        break;
      case 96:
        val = t96AppendixBriefOrganizationOfMaterialsRange;
        break;
      case 97:
        val = t97AppendixBriefMonitorRange;
        break;
      case 98:
        val = t98AppendixCars2RelatingToPeopleRange;
        break;
      case 99:
        val = t99AppendixCars2ImitationRange;
        break;
      case 100:
        val = t100AppendixCars2EmotionalResponseRange;
        break;
      case 101:
        val = t101AppendixCars2BodyUseRange;
        break;
      case 102:
        val = t102AppendixCars2ObjectUseRange;
        break;
      case 103:
        val = t103AppendixCars2AdaptionToChangeRange;
        break;
      case 104:
        val = t104AppendixCars2VisualResponseRange;
        break;
      case 105:
        val = t105AppendixCars2ListeningResponseRange;
        break;
      case 106:
        val = t106AppendixCars2TasteSmellAndTouchResponseAndUseRange;
        break;
      case 107:
        val = t107AppendixCars2FearOrNervousnessRange;
        break;
      case 108:
        val = t108AppendixCars2VerbalCommunicationRange;
        break;
      case 109:
        val = t109AppendixCars2NonverbalCommunicationRange;
        break;
      case 110:
        val = t110AppendixCars2ActivityLevelRange;
        break;
      case 111:
        val = t111AppendixCars2LevelAndConsistencyOfIntellectualResponseRange;
        break;
      case 112:
        val = t112AppendixCars2GeneralImpressionsRange;
        break;
      case 113:
        val = t113AppendixCars2SocialEmotionalUnderstandingRange;
        break;
      case 114:
        val = t114AppendixCars2EmotionalExpressionAndRegulationOfEmotionsRange;
        break;
      case 115:
        val = t115AppendixCars2RelatingToPeopleRange;
        break;
      case 116:
        val = t116AppendixCars2BodyUseRange;
        break;
      case 117:
        val = t117AppendixCars2ObjectUseInPlayRange;
        break;
      case 118:
        val = t118AppendixCars2VisualResponseRange;
        break;
      case 119:
        val = t119AppendixCars2ListeningResponseRange;
        break;
      case 120:
        val = t120AppendixConners3InattentionRange;
        break;
      case 121:
        val = t121AppendixConners3HyperactivityImpulsivityRange;
        break;
      case 122:
        val = t122AppendixConners3LearningProblemsRange;
        break;
      case 123:
        val = t123AppendixConners3ExecutiveFunctioningRange;
        break;
      case 124:
        val = t124AppendixConners3DefianceAggressionRange;
        break;
      case 125:
        val = t125AppendixConners3PeerRelationsRange;
        break;
      case 126:
        val = t126AppendixConners3AdhdInattentiveRange;
        break;
      case 127:
        val = t127AppendixConners3AdhdHyperactiveImpulsiveRange;
        break;
      case 128:
        val = t128AppendixConners3ConductDisorderRange;
        break;
      case 129:
        val = t129AppendixConners3OppositionalDefiantDisorderRange;
        break;
      case 130:
        val = t130AppendixConners3Conners3AdhdIndexRange;
        break;
      case 131:
        val = t131AppendixConners3Conners3GlobalIndexRange;
        break;
      case 132:
        val = t132AppendixConners3AnxietyRange;
        break;
      case 133:
        val = t133AppendixConners3DepressionRange;
        break;
      case 134:
        val = t134AppendixConners3SevereConductRange;
        break;
      case 135:
        val = t135AppendixConners3PositiveImpressionRange;
        break;
      case 136:
        val = t136AppendixConners3NegativeImpressionRange;
        break;
      case 137:
        val = t137AppendixConners3InconsistencyIndexRange;
        break;
      case 138:
        val = t138AppendixConners3InattentionRange;
        break;
      case 139:
        val = t139AppendixConners3HyperactivityImpulsivityRange;
        break;
      case 141:
        val = t141AppendixConners3LearningProblemsRange;
        break;
      case 142:
        val = t142AppendixConners3ExecutiveFunctioningRange;
        break;
      case 143:
        val = t143AppendixConners3DefianceAggressionRange;
        break;
      case 144:
        val = t144AppendixConners3PeerRelationsRange;
        break;
      case 145:
        val = t145AppendixConners3AdhdInattentiveRange;
        break;
      case 146:
        val = t146AppendixConners3AdhdHyperactiveImpulsiveRange;
        break;
      case 147:
        val = t147AppendixConners3ConductDisorderRange;
        break;
      case 148:
        val = t148AppendixConners3OppositionalDefiantDisorderRange;
        break;
      case 149:
        val = t149AppendixConners3Conners3AdhdIndexRange;
        break;
      case 150:
        val = t150AppendixConners3Conners3GlobalIndexRange;
        break;
      case 151:
        val = t151AppendixConners3AnxietyRange;
        break;
      case 152:
        val = t152AppendixConners3DepressionRange;
        break;
      case 153:
        val = t153AppendixConners3SevereConductRange;
        break;
      case 154:
        val = t154AppendixConners3PositiveImpressionRange;
        break;
      case 155:
        val = t155AppendixConners3NegativeImpressionRange;
        break;
      case 156:
        val = t156AppendixConners3InconsistencyIndexRange;
        break;
      case 157:
        val = t157AppendixConners3InattentionRange;
        break;
      case 158:
        val = t158AppendixConners3HyperactivityImpulsivityRange;
        break;
      case 159:
        val = t159AppendixConners3LearningProblemsRange;
        break;
      case 160:
        val = t160AppendixConners3DefianceAggressionRange;
        break;
      case 161:
        val = t161AppendixConners3FamilyRelationsRange;
        break;
      case 162:
        val = t162AppendixConners3AdhdInattentiveRange;
        break;
      case 163:
        val = t163AppendixConners3AdhdHyperactiveImpulsiveRange;
        break;
      case 164:
        val = t164AppendixConners3ConductDisorderRange;
        break;
      case 165:
        val = t165AppendixConners3OppositionalDefiantDisorderRange;
        break;
      case 166:
        val = t166AppendixConners3Conners3AdhdIndexRange;
        break;
      case 644:
        val = t644AppendixConners3AnxietyRange;
        break;
      case 167:
        val = t167AppendixConners3DepressionRange;
        break;
      case 168:
        val = t168AppendixConners3SevereConductRange;
        break;
      case 169:
        val = t169AppendixConners3PositiveImpressionRange;
        break;
      case 170:
        val = t170AppendixConners3NegativeImpressionRange;
        break;
      case 171:
        val = t171AppendixConners3InconsistencyIndexRange;
        break;
      case 172:
        val = t172AppendixCtoni2PictorialAnalogiesRange;
        break;
      case 173:
        val = t173AppendixCtoni2GeometricAnalogiesRange;
        break;
      case 174:
        val = t174AppendixCtoni2PictorialCategoriesRange;
        break;
      case 175:
        val = t175AppendixCtoni2GeometricCategoriesRange;
        break;
      case 176:
        val = t176AppendixCtoni2PictorialSequencesRange;
        break;
      case 177:
        val = t177AppendixCtoni2GeometricSequencesRange;
        break;
      case 178:
        val = t178AppendixCtoni2PictorialScaleRange;
        break;
      case 179:
        val = t179AppendixCtoni2GeometricScaleRange;
        break;
      case 180:
        val = t180AppendixCtoni2FullScaleRange;
        break;
      case 206:
        val = t206AppendixDKefsTrailMakingTestRange;
        break;
      case 207:
        val = t207AppendixDKefsVerbalFluencyTestRange;
        break;
      case 208:
        val = t208AppendixDKefsDesignFluencyTestRange;
        break;
      case 209:
        val = t209AppendixDKefsColorWordInterferenceTestRange;
        break;
      case 210:
        val = t210AppendixDKefsSortingTestRange;
        break;
      case 211:
        val = t211AppendixDKefsTwentyQuestionsTestRange;
        break;
      case 212:
        val = t212AppendixDKefsWordContextTestRange;
        break;
      case 213:
        val = t213AppendixDKefsTowerTestRange;
        break;
      case 214:
        val = t214AppendixDKefsProverbTestRange;
        break;
      case 221:
        val = t221AppendixRbansListLearningRange;
        break;
      case 222:
        val = t222AppendixRbansStoryMemoryRange;
        break;
      case 223:
        val = t223AppendixRbansFigureCopyRange;
        break;
      case 224:
        val = t224AppendixRbansLineOrientationRange;
        break;
      case 225:
        val = t225AppendixRbansPictureNamingRange;
        break;
      case 226:
        val = t226AppendixRbansSemanticFluencyRange;
        break;
      case 227:
        val = t227AppendixRbansDigitSpanRange;
        break;
      case 228:
        val = t228AppendixRbansCodingRange;
        break;
      case 229:
        val = t229AppendixRbansListRecallRange;
        break;
      case 230:
        val = t230AppendixRbansListRecognitionRange;
        break;
      case 231:
        val = t231AppendixRbansStoryRecallRange;
        break;
      case 232:
        val = t232AppendixRbansFigureRecallRange;
        break;
      case 233:
        val = t233AppendixVinelandiiReceptiveRange;
        break;
      case 234:
        val = t234AppendixVinelandiiExpressiveRange;
        break;
      case 235:
        val = t235AppendixVinelandiiWrittenRange;
        break;
      case 236:
        val = t236AppendixVinelandiiPersonalRange;
        break;
      case 237:
        val = t237AppendixVinelandiiDomesticRange;
        break;
      case 238:
        val = t238AppendixVinelandiiCommunityRange;
        break;
      case 239:
        val = t239AppendixVinelandiiInterpersonalRelationshipsRange;
        break;
      case 240:
        val = t240AppendixVinelandiiPlayAndLeisureTimeRange;
        break;
      case 241:
        val = t241AppendixVinelandiiCopingSkillsRange;
        break;
      case 242:
        val = t242AppendixVinelandiiGrossRange;
        break;
      case 243:
        val = t243AppendixVinelandiiFineRange;
        break;
      case 244:
        val = t244AppendixVinelandiiMaladaptiveBehaviorIndexRange;
        break;
      case 245:
        val = t245AppendixVinelandiiMaladaptiveBehaviorCriticalItemsRange;
        break;
      case 246:
        val = t246AppendixWasiiiSimilaritiesRange;
        break;
      case 247:
        val = t247AppendixWasiiiVocabularyRange;
        break;
      case 248:
        val = t248AppendixWasiiiBlockDesignRange;
        break;
      case 249:
        val = t249AppendixWasiiiMatrixReasoningRange;
        break;
      case 250:
        val = t250AppendixWiatiiiListeningComprehensionGradesPk12Range;
        break;
      case 251:
        val = t251AppendixWiatiiiEarlyReadingSkillsGradesPk3Range;
        break;
      case 252:
        val = t252AppendixWiatiiiReadingComprehensionGrades112Range;
        break;
      case 253:
        val = t253AppendixWiatiiiMathProblemSolvingGradesPk12Range;
        break;
      case 254:
        val = t254AppendixWiatiiiAlphabetWritingFluencyGradesPk3Range;
        break;
      case 255:
        val = t255AppendixWiatiiiSentenceCompositionGrades112Range;
        break;
      case 256:
        val = t256AppendixWiatiiiWordReadingGrades112Range;
        break;
      case 257:
        val = t257AppendixWiatiiiEssayCompositionGrades312Range;
        break;
      case 258:
        val = t258AppendixWiatiiiPseudowordDecodingGrades112Range;
        break;
      case 259:
        val = t259AppendixWiatiiiNumericalOperationsGradesK12Range;
        break;
      case 260:
        val = t260AppendixWiatiiiOralExpressionGradesPk12Range;
        break;
      case 261:
        val = t261AppendixWiatiiiOralReadingFluencyGrades112Range;
        break;
      case 262:
        val = t262AppendixWiatiiiSpellingGradesK12Range;
        break;
      case 263:
        val = t263AppendixWiatiiiMathFluencyAdditionRange;
        break;
      case 264:
        val = t264AppendixWiatiiiMathFluencySubtractionRange;
        break;
      case 265:
        val = t265AppendixWiatiiiMathFluencyMultiplicationRange;
        break;
      case 266:
        val = t266AppendixWraml2StoryMemoryRange;
        break;
      case 267:
        val = t267AppendixWraml2VerbalLearningRange;
        break;
      case 268:
        val = t268AppendixWraml2DesignMemoryRange;
        break;
      case 269:
        val = t269AppendixWraml2PictureMemoryRange;
        break;
      case 270:
        val = t270AppendixWraml2FingerWindowsRange;
        break;
      case 271:
        val = t271AppendixWraml2NumberLetterRange;
        break;
      case 272:
        val = t272AppendixWraml2SentenceMemoryRange;
        break;
      case 273:
        val = t273AppendixWraml2SoundSymbolRange;
        break;
      case 274:
        val = t274AppendixWraml2VerbalWorkingMemoryRange;
        break;
      case 275:
        val = t275AppendixWraml2SymbolicWorkingMemoryRange;
        break;
      case 276:
        val = t276AppendixWraml2StoryMemoryDelayRecallRange;
        break;
      case 277:
        val = t277AppendixWraml2VerbalLearningDelayRecallRange;
        break;
      case 278:
        val = t278AppendixWraml2SoundSymbolDelayRecallRange;
        break;
      case 279:
        val = t279AppendixWraml2StoryMemoryRecognitionRange;
        break;
      case 280:
        val = t280AppendixWraml2VerbalLearningRecognitionRange;
        break;
      case 281:
        val = t281AppendixWraml2DesignMemoryRecognitionRange;
        break;
      case 282:
        val = t282AppendixWraml2PictureMemoryRecognitionRange;
        break;
      case 283:
        val = t283AppendixBasc3FIndexRange;
        break;
      case 284:
        val = t284AppendixBasc3LIndexRange;
        break;
      case 285:
        val = t285AppendixBasc3VIndexRange;
        break;
      case 286:
        val = t286AppendixBasc3AlcoholAbuseRange;
        break;
      case 287:
        val = t287AppendixBasc3AnxietyRange;
        break;
      case 288:
        val = t288AppendixBasc3AttentionProblemsRange;
        break;
      case 289:
        val = t289AppendixBasc3AttitudeToSchoolRange;
        break;
      case 290:
        val = t290AppendixBasc3AttitudeToTeachersRange;
        break;
      case 291:
        val = t291AppendixBasc3AtypicalityRange;
        break;
      case 292:
        val = t292AppendixBasc3DepressionRange;
        break;
      case 293:
        val = t293AppendixBasc3HyperactivityRange;
        break;
      case 294:
        val = t294AppendixBasc3LocusOfControlRange;
        break;
      case 295:
        val = t295AppendixBasc3SchoolMaladjustmentRange;
        break;
      case 296:
        val = t296AppendixBasc3SensationSeekingRange;
        break;
      case 297:
        val = t297AppendixBasc3SenseOfInadequacyRange;
        break;
      case 298:
        val = t298AppendixBasc3SocialStressRange;
        break;
      case 299:
        val = t299AppendixBasc3SomatizationRange;
        break;
      case 300:
        val = t300AppendixBasc3InterpersonalRelationsRange;
        break;
      case 301:
        val = t301AppendixBasc3RelationsWithParentsRange;
        break;
      case 302:
        val = t302AppendixBasc3SelfEsteemRange;
        break;
      case 303:
        val = t303AppendixBasc3SelfRelianceRange;
        break;
      case 304:
        val = t304AppendixBasc3AngerControlRange;
        break;
      case 305:
        val = t305AppendixBasc3EgoStrengthRange;
        break;
      case 306:
        val = t306AppendixBasc3ManiaRange;
        break;
      case 307:
        val = t307AppendixBasc3TestAnxietyRange;
        break;
      case 308:
        val = t308AppendixBasc3AttitudeToSchoolRange;
        break;
      case 309:
        val = t309AppendixBasc3AttitudeToTeachersRange;
        break;
      case 310:
        val = t310AppendixBasc3AtypicalityRange;
        break;
      case 311:
        val = t311AppendixBasc3LocusOfControlRange;
        break;
      case 312:
        val = t312AppendixBasc3SocialStressRange;
        break;
      case 313:
        val = t313AppendixBasc3AnxietyRange;
        break;
      case 314:
        val = t314AppendixBasc3DepressionRange;
        break;
      case 315:
        val = t315AppendixBasc3SenseOfInadequacyRange;
        break;
      case 316:
        val = t316AppendixBasc3AttentionProblemsRange;
        break;
      case 317:
        val = t317AppendixBasc3HyperactivityRange;
        break;
      case 662:
        val = t662AppendixBasc3SocialStressRange;
        break;
      case 664:
        val = t664AppendixBasc3AnxietyRange;
        break;
      case 665:
        val = t665AppendixBasc3DepressionRange;
        break;
      case 666:
        val = t666AppendixBasc3SenseOfInadequacyRange;
        break;
      case 667:
        val = t667AppendixBasc3SelfEsteemRange;
        break;
      case 668:
        val = t668AppendixBasc3SelfRelianceRange;
        break;
      case 324:
        val = t324AppendixBasc3InterpersonalRelationsRange;
        break;
      case 325:
        val = t325AppendixBasc3RelationsWithParentsRange;
        break;
      case 326:
        val = t326AppendixBasc3SelfEsteemRange;
        break;
      case 327:
        val = t327AppendixBasc3SelfRelianceRange;
        break;
      case 328:
        val = t328AppendixBasc3AttitudeToSchoolRange;
        break;
      case 329:
        val = t329AppendixBasc3AttitudeToTeachersRange;
        break;
      case 330:
        val = t330AppendixBasc3SensationSeekingRange;
        break;
      case 331:
        val = t331AppendixBasc3AtypicalityRange;
        break;
      case 332:
        val = t332AppendixBasc3LocusOfControlRange;
        break;
      case 333:
        val = t333AppendixBasc3SocialStressRange;
        break;
      case 334:
        val = t334AppendixBasc3AnxietyRange;
        break;
      case 335:
        val = t335AppendixBasc3DepressionRange;
        break;
      case 336:
        val = t336AppendixBasc3SenseOfInadequacyRange;
        break;
      case 337:
        val = t337AppendixBasc3SomatizationRange;
        break;
      case 338:
        val = t338AppendixBasc3AttentionProblemsRange;
        break;
      case 339:
        val = t339AppendixBasc3HyperactivityRange;
        break;
      case 340:
        val = t340AppendixBasc3SocialStressRange;
        break;
      case 341:
        val = t341AppendixBasc3AnxietyRange;
        break;
      case 342:
        val = t342AppendixBasc3DepressionRange;
        break;
      case 343:
        val = t343AppendixBasc3SenseOfInadequacyRange;
        break;
      case 344:
        val = t344AppendixBasc3SelfEsteemRange;
        break;
      case 345:
        val = t345AppendixBasc3SelfRelianceRange;
        break;
      case 346:
        val = t346AppendixBasc3InterpersonalRelationsRange;
        break;
      case 347:
        val = t347AppendixBasc3RelationsWithParentsRange;
        break;
      case 348:
        val = t348AppendixBasc3SelfEsteemRange;
        break;
      case 349:
        val = t349AppendixBasc3SelfRelianceRange;
        break;
      case 350:
        val = t350AppendixBasc3AtypicalityRange;
        break;
      case 351:
        val = t351AppendixBasc3LocusOfControlRange;
        break;
      case 352:
        val = t352AppendixBasc3SocialStressRange;
        break;
      case 353:
        val = t353AppendixBasc3AnxietyRange;
        break;
      case 354:
        val = t354AppendixBasc3DepressionRange;
        break;
      case 355:
        val = t355AppendixBasc3SenseOfInadequacyRange;
        break;
      case 356:
        val = t356AppendixBasc3SomatizationRange;
        break;
      case 357:
        val = t357AppendixBasc3AttentionProblemsRange;
        break;
      case 358:
        val = t358AppendixBasc3HyperactivityRange;
        break;
      case 359:
        val = t359AppendixBasc3SocialStressRange;
        break;
      case 360:
        val = t360AppendixBasc3AnxietyRange;
        break;
      case 361:
        val = t361AppendixBasc3DepressionRange;
        break;
      case 362:
        val = t362AppendixBasc3SenseOfInadequacyRange;
        break;
      case 363:
        val = t363AppendixBasc3SelfEsteemRange;
        break;
      case 364:
        val = t364AppendixBasc3SelfRelianceRange;
        break;
      case 365:
        val = t365AppendixBasc3InterpersonalRelationsRange;
        break;
      case 366:
        val = t366AppendixBasc3RelationsWithParentsRange;
        break;
      case 367:
        val = t367AppendixBasc3SelfEsteemRange;
        break;
      case 368:
        val = t368AppendixBasc3SelfRelianceRange;
        break;
      case 369:
        val = t369AppendixBasc3FIndexRange;
        break;
      case 370:
        val = t370AppendixBasc3AggressionRange;
        break;
      case 371:
        val = t371AppendixBasc3AnxietyRange;
        break;
      case 372:
        val = t372AppendixBasc3AttentionProblemsRange;
        break;
      case 373:
        val = t373AppendixBasc3AtypicalityRange;
        break;
      case 374:
        val = t374AppendixBasc3ConductProblemsRange;
        break;
      case 375:
        val = t375AppendixBasc3DepressionRange;
        break;
      case 376:
        val = t376AppendixBasc3HyperactivityRange;
        break;
      case 377:
        val = t377AppendixBasc3LearningProblemsRange;
        break;
      case 378:
        val = t378AppendixBasc3SomatizationRange;
        break;
      case 379:
        val = t379AppendixBasc3WithdrawalRange;
        break;
      case 380:
        val = t380AppendixBasc3ActivitiesOfDailyLivingRange;
        break;
      case 381:
        val = t381AppendixBasc3AdaptabilityRange;
        break;
      case 382:
        val = t382AppendixBasc3FunctionalCommunicationRange;
        break;
      case 383:
        val = t383AppendixBasc3LeadershipRange;
        break;
      case 384:
        val = t384AppendixBasc3SocialSkillsRange;
        break;
      case 385:
        val = t385AppendixBasc3StudySkillsRange;
        break;
      case 386:
        val = t386AppendixBasc3AngerControlRange;
        break;
      case 387:
        val = t387AppendixBasc3BullyingRange;
        break;
      case 388:
        val = t388AppendixBasc3DevelopmentalSocialDisordersRange;
        break;
      case 389:
        val = t389AppendixBasc3EmotionalSelfControlRange;
        break;
      case 390:
        val = t390AppendixBasc3ExecutiveFunctioningRange;
        break;
      case 391:
        val = t391AppendixBasc3NegativeEmotionalityRange;
        break;
      case 392:
        val = t392AppendixBasc3ResiliencyRange;
        break;
      case 393:
        val = t393AppendixBasc3HyperactivityRange;
        break;
      case 394:
        val = t394AppendixBasc3AggressionRange;
        break;
      case 395:
        val = t395AppendixBasc3AnxietyRange;
        break;
      case 396:
        val = t396AppendixBasc3DepressionRange;
        break;
      case 397:
        val = t397AppendixBasc3SomatizationRange;
        break;
      case 398:
        val = t398AppendixBasc3AdaptabilityRange;
        break;
      case 399:
        val = t399AppendixBasc3SocialSkillsRange;
        break;
      case 400:
        val = t400AppendixBasc3FunctionalCommunicationRange;
        break;
      case 401:
        val = t401AppendixBasc3HyperactivityRange;
        break;
      case 402:
        val = t402AppendixBasc3AggressionRange;
        break;
      case 403:
        val = t403AppendixBasc3DepressionRange;
        break;
      case 404:
        val = t404AppendixBasc3AttentionProblemsRange;
        break;
      case 405:
        val = t405AppendixBasc3AtypicalityRange;
        break;
      case 406:
        val = t406AppendixBasc3WithdrawalRange;
        break;
      case 407:
        val = t407AppendixBasc3HyperactivityRange;
        break;
      case 408:
        val = t408AppendixBasc3AggressionRange;
        break;
      case 409:
        val = t409AppendixBasc3ConductProblemsRange;
        break;
      case 410:
        val = t410AppendixBasc3AnxietyRange;
        break;
      case 411:
        val = t411AppendixBasc3DepressionRange;
        break;
      case 412:
        val = t412AppendixBasc3SomatizationRange;
        break;
      case 413:
        val = t413AppendixBasc3LearningProblemsRange;
        break;
      case 414:
        val = t414AppendixBasc3AttentionProblemsRange;
        break;
      case 415:
        val = t415AppendixBasc3AdaptabilityRange;
        break;
      case 416:
        val = t416AppendixBasc3SocialSkillsRange;
        break;
      case 417:
        val = t417AppendixBasc3FunctionalCommunicationRange;
        break;
      case 418:
        val = t418AppendixBasc3LeadershipRange;
        break;
      case 419:
        val = t419AppendixBasc3StudySkillsRange;
        break;
      case 420:
        val = t420AppendixBasc3HyperactivityRange;
        break;
      case 421:
        val = t421AppendixBasc3AggressionRange;
        break;
      case 422:
        val = t422AppendixBasc3DepressionRange;
        break;
      case 423:
        val = t423AppendixBasc3AttentionProblemsRange;
        break;
      case 424:
        val = t424AppendixBasc3AtypicalityRange;
        break;
      case 425:
        val = t425AppendixBasc3WithdrawalRange;
        break;
      case 426:
        val = t426AppendixBasc3HyperactivityRange;
        break;
      case 427:
        val = t427AppendixBasc3AggressionRange;
        break;
      case 428:
        val = t428AppendixBasc3AnxietyRange;
        break;
      case 429:
        val = t429AppendixBasc3DepressionRange;
        break;
      case 430:
        val = t430AppendixBasc3SomatizationRange;
        break;
      case 431:
        val = t431AppendixBasc3AdaptabilityRange;
        break;
      case 432:
        val = t432AppendixBasc3SocialSkillsRange;
        break;
      case 433:
        val = t433AppendixBasc3FunctionalCommunicationRange;
        break;
      case 434:
        val = t434AppendixBasc3ActivitiesOfDailyLivingRange;
        break;
      case 435:
        val = t435AppendixBasc3HyperactivityRange;
        break;
      case 436:
        val = t436AppendixBasc3AggressionRange;
        break;
      case 437:
        val = t437AppendixBasc3DepressionRange;
        break;
      case 438:
        val = t438AppendixBasc3AttentionProblemsRange;
        break;
      case 439:
        val = t439AppendixBasc3AtypicalityRange;
        break;
      case 440:
        val = t440AppendixBasc3WithdrawalRange;
        break;
      case 441:
        val = t441AppendixBasc3HyperactivityRange;
        break;
      case 442:
        val = t442AppendixBasc3AggressionRange;
        break;
      case 443:
        val = t443AppendixBasc3ConductProblemsRange;
        break;
      case 444:
        val = t444AppendixBasc3AnxietyRange;
        break;
      case 445:
        val = t445AppendixBasc3DepressionRange;
        break;
      case 446:
        val = t446AppendixBasc3SomatizationRange;
        break;
      case 447:
        val = t447AppendixBasc3AdaptabilityRange;
        break;
      case 448:
        val = t448AppendixBasc3SocialSkillsRange;
        break;
      case 449:
        val = t449AppendixBasc3FunctionalCommunicationRange;
        break;
      case 450:
        val = t450AppendixBasc3ActivitiesOfDailyLivingRange;
        break;
      case 451:
        val = t451AppendixBasc3HyperactivityRange;
        break;
      case 452:
        val = t452AppendixBasc3AggressionRange;
        break;
      case 453:
        val = t453AppendixBasc3DepressionRange;
        break;
      case 454:
        val = t454AppendixBasc3AttentionProblemsRange;
        break;
      case 455:
        val = t455AppendixBasc3AtypicalityRange;
        break;
      case 456:
        val = t456AppendixBasc3WithdrawalRange;
        break;
      case 457:
        val = t457AppendixWaisivSimilaritiesRange;
        break;
      case 458:
        val = t458AppendixWaisivVocabularyRange;
        break;
      case 459:
        val = t459AppendixWaisivInformationRange;
        break;
      case 460:
        val = t460AppendixWaisivComprehensionRange;
        break;
      case 461:
        val = t461AppendixWaisivBlockDesignRange;
        break;
      case 462:
        val = t462AppendixWaisivMatrixReasoningRange;
        break;
      case 463:
        val = t463AppendixWaisivVisualPuzzlesRange;
        break;
      case 464:
        val = t464AppendixWaisivFigureWeightsRange;
        break;
      case 465:
        val = t465AppendixWaisivPictureCompletionRange;
        break;
      case 466:
        val = t466AppendixWaisivDigitSpanRange;
        break;
      case 467:
        val = t467AppendixWaisivArithmeticRange;
        break;
      case 468:
        val = t468AppendixWaisivLetterNumberSequencingRange;
        break;
      case 469:
        val = t469AppendixWaisivCodingRange;
        break;
      case 470:
        val = t470AppendixWaisivSymbolSearchRange;
        break;
      case 471:
        val = t471AppendixWaisivCancellationRange;
        break;
      case 525:
        val = t525AppendixMmpi2HypochondriasisHsRange;
        break;
      case 526:
        val = t526AppendixMmpi2DepressionDRange;
        break;
      case 527:
        val = t527AppendixMmpi2HysteriaHyRange;
        break;
      case 528:
        val = t528AppendixMmpi2PsychopathicDeviatePdRange;
        break;
      case 529:
        val = t529AppendixMmpi2MasculinityfemininityMfRange;
        break;
      case 530:
        val = t530AppendixMmpi2ParanoiaPaRange;
        break;
      case 531:
        val = t531AppendixMmpi2PsychastheniaPtRange;
        break;
      case 532:
        val = t532AppendixMmpi2SchizophreniaScRange;
        break;
      case 533:
        val = t533AppendixMmpi2HypomaniaMaRange;
        break;
      case 534:
        val = t534AppendixMmpi2SocialIntroversionSiRange;
        break;
      case 535:
        val = t535AppendixMmpi2LieLRange;
        break;
      case 536:
        val = t536AppendixMmpi2FRange;
        break;
      case 537:
        val = t537AppendixMmpi2BackFFbRange;
        break;
      case 538:
        val = t538AppendixMmpi2KRange;
        break;
      case 539:
        val = t539AppendixMmpiaHypochondriasisHsRange;
        break;
      case 540:
        val = t540AppendixMmpiaDepressionDRange;
        break;
      case 541:
        val = t541AppendixMmpiaHysteriaHyRange;
        break;
      case 542:
        val = t542AppendixMmpiaPsychopathicDeviatePdRange;
        break;
      case 543:
        val = t543AppendixMmpiaMasculinityfemininityMfRange;
        break;
      case 544:
        val = t544AppendixMmpiaParanoiaPaRange;
        break;
      case 545:
        val = t545AppendixMmpiaPsychastheniaPtRange;
        break;
      case 546:
        val = t546AppendixMmpiaSchizophreniaScRange;
        break;
      case 547:
        val = t547AppendixMmpiaHypomaniaMaRange;
        break;
      case 548:
        val = t548AppendixMmpiaSocialIntroversionSiRange;
        break;
      case 549:
        val = t549AppendixMmpiaCnsRange;
        break;
      case 550:
        val = t550AppendixMmpiaVrinRange;
        break;
      case 551:
        val = t551AppendixMmpiaTrinRange;
        break;
      case 552:
        val = t552AppendixMmpiaFRange;
        break;
      case 553:
        val = t553AppendixMmpiaF1Range;
        break;
      case 554:
        val = t554AppendixMmpiaF2Range;
        break;
      case 555:
        val = t555AppendixMmpiaLRange;
        break;
      case 556:
        val = t556AppendixMmpiaKRange;
        break;
      case 557:
        val = t557AppendixNepsyiiAnimalSortingAsRange;
        break;
      case 558:
        val = t558AppendixNepsyiiAuditoryAttentionAaAndResponseSetRsRange;
        break;
      case 559:
        val = t559AppendixNepsyiiClocksClRange;
        break;
      case 560:
        val = t560AppendixNepsyiiDesignFluencyDfRange;
        break;
      case 561:
        val = t561AppendixNepsyiiInhibitionInRange;
        break;
      case 562:
        val = t562AppendixNepsyiiStatueStRange;
        break;
      case 563:
        val = t563AppendixNepsyiiBodyPartNamingBpnAndIdentificationBpiRange;
        break;
      case 564:
        val = t564AppendixNepsyiiComprehensionOfInstructionsCiRange;
        break;
      case 565:
        val = t565AppendixNepsyiiOromotorSequencesOsRange;
        break;
      case 566:
        val = t566AppendixNepsyiiPhonologicalProcessingPhRange;
        break;
      case 567:
        val = t567AppendixNepsyiiRepetitionNonsenseWordsRnRange;
        break;
      case 568:
        val = t568AppendixNepsyiiSpeededNamingSnRange;
        break;
      case 569:
        val = t569AppendixNepsyiiWordGenerationWgRange;
        break;
      case 571:
        val = t571AppendixNepsyiiListMemoryLmListMemoryDelayedLmdRange;
        break;
      case 572:
        val = t572AppendixNepsyiiMemoryForDesignsMdMemoryForDesignsDelayedMddRange;
        break;
      case 573:
        val = t573AppendixNepsyiiMemoryForFacesMfMemoryForFacesDelayedMfdRange;
        break;
      case 574:
        val = t574AppendixNepsyiiMemoryForNamesMnMemoryForNamesDelayedMndRange;
        break;
      case 575:
        val = t575AppendixNepsyiiNarrativeMemoryNmRange;
        break;
      case 576:
        val = t576AppendixNepsyiiSentenceRepetitionSrRange;
        break;
      case 577:
        val = t577AppendixNepsyiiWordListInterferenceWiRange;
        break;
      case 578:
        val = t578AppendixNepsyiiFingertipTappingFtRange;
        break;
      case 579:
        val = t579AppendixNepsyiiImitatingHandPositionsIhRange;
        break;
      case 580:
        val = t580AppendixNepsyiiManualMotorSequencesMmRange;
        break;
      case 581:
        val = t581AppendixNepsyiiVisuomotorPrecisionVpRange;
        break;
      case 582:
        val = t582AppendixNepsyiiAffectRecognitionArRange;
        break;
      case 583:
        val = t583AppendixNepsyiiTheoryOfMindTmRange;
        break;
      case 584:
        val = t584AppendixNepsyiiArrowsAwRange;
        break;
      case 585:
        val = t585AppendixNepsyiiBlockConstructionBcRange;
        break;
      case 586:
        val = t586AppendixNepsyiiDesignCopyingDcRange;
        break;
      case 587:
        val = t587AppendixNepsyiiGeometricPuzzlesGpRange;
        break;
      case 588:
        val = t588AppendixNepsyiiPicturePuzzlesPpRange;
        break;
      case 589:
        val = t589AppendixNepsyiiRouteFindingRfRange;
        break;
      case 593:
        val = t593AppendixWjivcogVocabularyRange;
        break;
      case 594:
        val = t594AppendixWjivcogGeneralInformationRange;
        break;
      case 595:
        val = t595AppendixWjivcogNumberSeriesRange;
        break;
      case 596:
        val = t596AppendixWjivcogConceptFormationRange;
        break;
      case 597:
        val = t597AppendixWjivcogAnalysisSynthesisRange;
        break;
      case 598:
        val = t598AppendixWjivcogVerbalAttentionRange;
        break;
      case 599:
        val = t599AppendixWjivcogNumbersReversedRange;
        break;
      case 600:
        val = t600AppendixWjivcogObjectNumberSequencingRange;
        break;
      case 601:
        val = t601AppendixWjivcogPairCancellationRange;
        break;
      case 645:
        val = t645AppendixWjivcogLetterPatternMatchingRange;
        break;
      case 602:
        val = t602AppendixWjivcogPhonologicalProcessingRange;
        break;
      case 603:
        val = t603AppendixWjivcogNonWordRepetitionRange;
        break;
      case 604:
        val = t604AppendixWjivcogRecallRange;
        break;
      case 605:
        val = t605AppendixWjivcogVisualAuditoryLearningRange;
        break;
      case 606:
        val = t606AppendixWjivcogVisualizationRange;
        break;
      case 607:
        val = t607AppendixWjivcogPictureRecognitionRange;
        break;
      case 608:
        val = t608AppendixTsccUnderresponseUndRange;
        break;
      case 609:
        val = t609AppendixTsccHyperresponseHypRange;
        break;
      case 610:
        val = t610AppendixTsccAnxietyAnxRange;
        break;
      case 611:
        val = t611AppendixTsccDepressionDepRange;
        break;
      case 612:
        val = t612AppendixTsccAngerAngRange;
        break;
      case 613:
        val = t613AppendixTsccPosttraumaticStressPtsRange;
        break;
      case 614:
        val = t614AppendixTsccDissociationDisRange;
        break;
      case 615:
        val = t615AppendixTsccSexualConcernsScRange;
        break;
      case 616:
        val = t616AppendixWjivachLetterWordIdentificationRange;
        break;
      case 617:
        val = t617AppendixWjivachWordAttackRange;
        break;
      case 618:
        val = t618AppendixWjivachPassageComprehensionRange;
        break;
      case 619:
        val = t619AppendixWjivachReadingRecallRange;
        break;
      case 620:
        val = t620AppendixWjivachReadingVocabularyRange;
        break;
      case 621:
        val = t621AppendixWjivachCalculationRange;
        break;
      case 622:
        val = t622AppendixWjivachMathFactFluencyRange;
        break;
      case 623:
        val = t623AppendixWjivachAppliedProblemsRange;
        break;
      case 624:
        val = t624AppendixWjivachNumberMatricesRange;
        break;
      case 625:
        val = t625AppendixWjivachWritingSamplesRange;
        break;
      case 626:
        val = t626AppendixWjivachSentenceWritingFluencyRange;
        break;
      case 627:
        val = t627AppendixWjivachOralReadingRange;
        break;
      case 628:
        val = t628AppendixWjivachSentenceReadingFluencyRange;
        break;
      case 629:
        val = t629AppendixWjivachSpellingRange;
        break;
      case 630:
        val = t630AppendixWjivachSoundAwarenessRange;
        break;
      case 631:
        val = t631AppendixWjivachEditingRange;
        break;
      case 632:
        val = t632AppendixWjivachScienceRange;
        break;
      case 633:
        val = t633AppendixWjivachSocialStudiesRange;
        break;
      case 634:
        val = t634AppendixWjivachHumanitiesRange;
        break;
      case 635:
        val = t635AppendixWjivachWordAttackRange;
        break;
      case 636:
        val = t636AppendixWjivachSpellingOfSoundsRange;
        break;
      case 637:
        val = t637AppendixWmsIvBriefCognitiveStatusExamRange;
        break;
      case 638:
        val = t638AppendixWmsIvLogicalMemoryRange;
        break;
      case 639:
        val = t639AppendixWmsIvVerbalPairedAssociatesRange;
        break;
      case 640:
        val = t640AppendixWmsIvDesignsRange;
        break;
      case 641:
        val = t641AppendixWmsIvVisualReproductionRange;
        break;
      case 642:
        val = t642AppendixWmsIvSpatialAdditionRange;
        break;
      case 643:
        val = t643AppendixWmsIvSymbolSpanRange;
        break;
      case 646:
        val = t646AppendixCars2AdaptationToChangeRestrictedInterestsRange;
        break;
      case 647:
        val = t647AppendixWppsiivSimilaritiesRange;
        break;
      case 648:
        val = t648AppendixWppsiivVocabularyRange;
        break;
      case 649:
        val = t649AppendixWppsiivInformationRange;
        break;
      case 650:
        val = t650AppendixWppsiivComprehensionRange;
        break;
      case 651:
        val = t651AppendixWppsiivMatrixReasoningRange;
        break;
      case 652:
        val = t652AppendixWppsiivPictureConceptsRange;
        break;
      case 653:
        val = t653AppendixWppsiivBlockDesignRange;
        break;
      case 654:
        val = t654AppendixWppsiivObjectAssemblyRange;
        break;
      case 655:
        val = t655AppendixWppsiivPictureMemoryRange;
        break;
      case 656:
        val = t656AppendixWppsiivZooLocationsRange;
        break;
      case 657:
        val = t657AppendixWppsiivBugSearchRange;
        break;
      case 658:
        val = t658AppendixWppsiivCancellationRange;
        break;
      case 659:
        val = t659AppendixWppsiivAnimalCodingRange;
        break;
      case 669:
        val = t669AppendixBeeryvmiBeeryMotorIntegrationVmiRange;
        break;
      case 670:
        val = t670AppendixBeeryvmiBeeryVisualPerceptionRange;
        break;
      case 671:
        val = t671AppendixBeeryvmiBeeryMotorCoordinationRange;
        break;
      case 672:
        val = t672AppendixWiatiiiListeningComprehensionGradesPk12Range;
        break;
      case 673:
        val = t673AppendixWiatiiiOralExpressionGradesPk12Range;
        break;
      case 674:
        val = t674AppendixWiatiiiEarlyReadingSkillsGradesPk3Range;
        break;
      case 675:
        val = t675AppendixWiatiiiReadingComprehensionGrades112Range;
        break;
      case 676:
        val = t676AppendixWiatiiiWordReadingGrades112Range;
        break;
      case 677:
        val = t677AppendixWiatiiiPseudowordDecodingGrades112Range;
        break;
      case 678:
        val = t678AppendixWiatiiiOralReadingFluencyGrades112Range;
        break;
      case 679:
        val = t679AppendixWiatiiiSpellingGradesK12Range;
        break;
      case 680:
        val = t680AppendixWiatiiiAlphabetWritingFluencyGradesPk3Range;
        break;
      case 681:
        val = t681AppendixWiatiiiSentenceCompositionGrades112Range;
        break;
      case 682:
        val = t682AppendixWiatiiiEssayCompositionGrades312Range;
        break;
      case 683:
        val = t683AppendixWiatiiiNumericalOperationsGradesK12Range;
        break;
      case 684:
        val = t684AppendixWiatiiiMathProblemSolvingGradesPk12Range;
        break;
      case 685:
        val = t685AppendixWiatiiiMathFluencyAdditionRange;
        break;
      case 686:
        val = t686AppendixWiatiiiMathFluencySubtractionRange;
        break;
      case 687:
        val = t687AppendixWiatiiiMathFluencyMultiplicationRange;
        break;
      case 698:
        val = t698AppendixDkefsVisualScanningRange;
        break;
      case 699:
        val = t699AppendixDkefsNumberSequencingRange;
        break;
      case 700:
        val = t700AppendixDkefsLetterSequencingRange;
        break;
      case 701:
        val = t701AppendixDkefsCombinedNumberAndLetterSequencingRange;
        break;
      case 702:
        val = t702AppendixDkefsNumberLetterSwitchingRange;
        break;
      case 703:
        val = t703AppendixDkefsMotorSpeedRange;
        break;
      case 704:
        val = t704AppendixDkefsLetterFluencyRange;
        break;
      case 705:
        val = t705AppendixDkefsCategoryFluencyRange;
        break;
      case 706:
        val = t706AppendixDkefsCategorySwitchingRange;
        break;
      case 707:
        val = t707AppendixDkefsFilledDotsRange;
        break;
      case 708:
        val = t708AppendixDkefsEmptyDotsOnlyRange;
        break;
      case 709:
        val = t709AppendixDkefsSwitchingRange;
        break;
      case 710:
        val = t710AppendixDkefsColorNamingRange;
        break;
      case 711:
        val = t711AppendixDkefsWordReadingRange;
        break;
      case 712:
        val = t712AppendixDkefsInhibitionRange;
        break;
      case 713:
        val = t713AppendixDkefsInhibitionswitchingRange;
        break;
      case 714:
        val = t714AppendixDkefsFreeSortingRange;
        break;
      case 715:
        val = t715AppendixDkefsSortRecognitionRange;
        break;
      case 716:
        val = t716AppendixDkefsItem1Range;
        break;
      case 717:
        val = t717AppendixDkefsItem2Range;
        break;
      case 718:
        val = t718AppendixDkefsItem3Range;
        break;
      case 719:
        val = t719AppendixDkefsItem4Range;
        break;
      case 720:
        val = t720AppendixDkefsItem1Range;
        break;
      case 721:
        val = t721AppendixDkefsItem2Range;
        break;
      case 722:
        val = t722AppendixDkefsItem1TwoDisksRange;
        break;
      case 723:
        val = t723AppendixDkefsItem2TwoDisksRange;
        break;
      case 724:
        val = t724AppendixDkefsItem3TwoDisksRange;
        break;
      case 725:
        val = t725AppendixDkefsItem4ThreeDisksRange;
        break;
      case 726:
        val = t726AppendixDkefsItem5ThreeDisksRange;
        break;
      case 727:
        val = t727AppendixDkefsItem6FourDisksRange;
        break;
      case 728:
        val = t728AppendixDkefsItem7FourDisksRange;
        break;
      case 729:
        val = t729AppendixDkefsItem8FiveDisksRange;
        break;
      case 730:
        val = t730AppendixDkefsItem9FiveDisksRange;
        break;
      case 731:
        val = t731AppendixDkefsFreeInquiryRange;
        break;
      case 732:
        val = t732AppendixDkefsMultipleChoiceRange;
        break;
      case 733:
        val = t733AppendixGort5RateRange;
        break;
      case 734:
        val = t734AppendixGort5AccuracyRange;
        break;
      case 735:
        val = t735AppendixGort5FluencyRange;
        break;
      case 736:
        val = t736AppendixGort5ComprehensionRange;
        break;
      case 737:
        val = t737AppendixTommTrail1Range;
        break;
      case 738:
        val = t738AppendixTommTrial2Range;
        break;
      case 739:
        val = t739AppendixTommRetentionTrialRange;
        break;
      default:
        val = '';
    }
    return val;
  };

  const replaceAllGender = (pronoun, gender) => {
    let val;
    switch (pronoun) {
      case 'he':
        gender === 'Boy' ? (val = 'he') : (val = 'she');
        break;
      case 'his':
        gender === 'Boy' ? (val = 'his') : (val = 'her');
        break;
      case 'him':
        gender === 'Boy' ? (val = 'him') : (val = 'her');
        break;
      default:
        val = 'GENDER';
    }
    return val;
  };

  const createMarkup = (text, name, gender) => {
    if (text !== null) {
      const txt = text
        .replace(/CLIENT NAME/g, name)
        .replaceAll('Client', name)
        .replaceAll('GENDER HE', replaceAllGender('he', gender))
        .replaceAll('GENDER HIS', replaceAllGender('his', gender))
        .replaceAll('GENDER HIM', replaceAllGender('him', gender));
      return <span dangerouslySetInnerHTML={{ __html: txt }} />;
    }
  };

  return (
    <div className="pdf-t">
      <div id="pageHeader" className="flex flex--center-vertical">
        <img className="header__logo" src="http://www.lrtico.com/on/img/logo.png" alt="logo" />
        <div className="header__text">
          <div>
            <span>Phone +1 (310) 207-1720</span>
            <span className="header-footer__slash">/</span>
            <span>Fax +1 (310) 207-1638</span>
          </div>
          <div>
            <span>11633 San Vincente Blvd. #106</span>
            <span className="header-footer__slash">/</span>
            <span>hello@oneneuro.com</span>
            <span>www.oneneuro.com</span>
          </div>
        </div>
      </div>

      <footer id="pageFooter">
        <table>
          <tr>
            <td className="pageFooter__client-name">
              <div>
                <span>{diName !== undefined ? `${diName}'s` : 'Smith, John'}</span>{' '}
                <span className="header-footer__slash">/</span>{' '}
                <span>Confidential Neurological Evaluation</span>
              </div>
            </td>
            <td className="pageFooter__pagination">
              <div className="footer__page-num" />
            </td>
          </tr>
        </table>
      </footer>

      <table>
        <thead>
          <tr>
            <td>
              <div className="pdf-t__header-spacer" />
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <main>
                <h1>Confidential Neuropsychological Evaluation</h1>
                {diName !== undefined ||
                diDateofbirth !== undefined ||
                diAge !== undefined ||
                diGender !== undefined ||
                diHandedness !== undefined ||
                diEvaluationlocation !== undefined ||
                diDateoftesting !== undefined ||
                diEvaluator !== undefined ||
                diSchool !== undefined ||
                diGrade !== undefined ? (
                  <section>
                    <table cellPadding="0" cellSpacing="0">
                      <tr>
                        <td className="col2eq">
                          <div>
                            {diName !== undefined ? (
                              <p>
                                Name: <span>{diName}</span>
                              </p>
                            ) : null}
                            {diDateofbirth !== undefined ? (
                              <p>
                                Date of Birth: <span>{diDateofbirth}</span>
                              </p>
                            ) : null}
                            {diAge !== undefined ? (
                              <p>
                                Age: <span>{diAge}</span>
                              </p>
                            ) : null}
                            {diGender !== undefined ? (
                              <p>
                                Gender: <span>{diGender}</span>
                              </p>
                            ) : null}
                            {diHandedness !== undefined ? (
                              <p>
                                Handedness: <span>{diHandedness}</span>
                              </p>
                            ) : null}
                          </div>
                        </td>
                        <td className="col2eq">
                          <div>
                            {diEvaluationlocation !== undefined ? (
                              <p>
                                Place of Evaluation: <span>{diEvaluationlocation}</span>
                              </p>
                            ) : null}
                            {diDateoftesting !== undefined ? (
                              <p>
                                Date(s) of Evaluation:
                                <ul>
                                  {diDateoftesting.map((date) => (
                                    <li>
                                      {date.title}, {date.date}
                                    </li>
                                  ))}
                                </ul>
                              </p>
                            ) : null}
                            {diEvaluator !== undefined ? (
                              <p>
                                Evaluator&apos;s Name: <span>{diEvaluator}</span>
                              </p>
                            ) : null}
                            {diSchool !== undefined ? (
                              <p>
                                School: <span>{diSchool}</span>
                              </p>
                            ) : null}
                            {diGrade !== undefined ? (
                              <p>
                                Grade: <span>{diGrade}</span>
                              </p>
                            ) : null}
                          </div>
                        </td>
                      </tr>
                    </table>
                  </section>
                ) : null}
                {paqName !== undefined ||
                paqGuardian !== undefined ||
                paqCellPhone !== undefined ||
                paqAddress !== undefined ||
                paqHomePhone !== undefined ||
                paqWorkPhone !== undefined ? (
                  <section>
                    {paqName !== undefined ||
                    paqGuardian !== undefined ||
                    paqCellPhone !== undefined ||
                    paqAddress !== undefined ||
                    paqHomePhone !== undefined ||
                    paqWorkPhone !== undefined ? (
                      <h2>Person Answering Questions</h2>
                    ) : (
                      ''
                    )}
                    <table cellPadding="0" cellSpacing="0">
                      <tr>
                        <td className="col2eq">
                          <div>
                            {paqName !== undefined ? (
                              <p>
                                Name: <span>{paqName}</span>
                              </p>
                            ) : (
                              ''
                            )}
                            {paqGuardian !== undefined ? (
                              <p>
                                Relationship to the child: <span>{paqGuardian}</span>
                              </p>
                            ) : (
                              ''
                            )}
                            {paqCellPhone !== undefined ? (
                              <p>
                                Cell phone: <span>{paqCellPhone}</span>
                              </p>
                            ) : (
                              ''
                            )}
                          </div>
                        </td>
                        <td className="col2eq">
                          <div>
                            {paqAddress !== undefined ? (
                              <p>
                                Address: <span>{paqAddress}</span>
                              </p>
                            ) : (
                              ''
                            )}
                            {paqHomePhone !== undefined ? (
                              <p>
                                Home phone: <span>{paqHomePhone}</span>
                              </p>
                            ) : (
                              ''
                            )}
                            {paqWorkPhone !== undefined ? (
                              <p>
                                Work phone: <span>{paqWorkPhone}</span>
                              </p>
                            ) : (
                              ''
                            )}
                          </div>
                        </td>
                      </tr>
                    </table>
                  </section>
                ) : null}
                {reasonReferral1 !== undefined ||
                reasonReferral2 !== undefined ||
                reasonReferral3 !== undefined ? (
                  <section>
                    <h2>Reason for Referral</h2>
                    <table cellPadding="0" cellSpacing="0">
                      <tr>
                        <td>
                          <div>
                            <ul>
                              {reasonReferral1 !== undefined ? <li>{reasonReferral1}</li> : ''}
                              {reasonReferral2 !== undefined ? <li>{reasonReferral2}</li> : ''}
                              {reasonReferral3 !== undefined ? <li>{reasonReferral3}</li> : ''}
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </section>
                ) : null}
                {wizardForm5Disabled !== undefined &&
                wizardForm5Disabled !== true &&
                recordsReviewed !== undefined ? (
                  <section className={recordsReviewed === undefined ? 'pdf-t__empty' : null}>
                    <h2>Records Reviewed</h2>
                    <table cellPadding="0" cellSpacing="0">
                      <tr>
                        <td>
                          <div>
                            <ul>
                              {recordsReviewed !== undefined
                                ? recordsReviewed.map((record) => (
                                    <li>
                                      {record.title}, Report dated: {record.date}
                                    </li>
                                  ))
                                : null}
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </section>
                ) : null}
                {wizardForm6Disabled !== true ||
                wizardForm7Disabled !== true ||
                wizardForm8Disabled !== true ? (
                  <section
                    className={
                      bhPrimaryCaregiverMother === undefined &&
                      bhMotherName === undefined &&
                      bhMotherCellPhone === undefined &&
                      bhMotherOccupation === undefined &&
                      bhMotherLengthEmployement === undefined &&
                      bhMotherPrimaryLanguage === undefined &&
                      bhMotherAge === undefined &&
                      bhMotherHomePhone === undefined &&
                      bhMotherWorkPhone === undefined &&
                      bhMotherEmployer === undefined &&
                      bhMotherHighestGrade === undefined &&
                      bhMotherSecondaryLanguage === undefined &&
                      bhPrimaryCaregiverFather === undefined &&
                      bhFatherName === undefined &&
                      bhFatherCellPhone === undefined &&
                      bhFatherOccupation === undefined &&
                      bhFatherLengthEmployement === undefined &&
                      bhFatherPrimaryLanguage === undefined &&
                      bhFatherAge === undefined &&
                      bhFatherHomePhone === undefined &&
                      bhFatherWorkPhone === undefined &&
                      bhFatherEmployer === undefined &&
                      bhFatherHighestGrade === undefined &&
                      bhFatherSecondaryLanguage === undefined &&
                      bhPrimaryCaregiverName === undefined &&
                      bhOtherParentStepparentAge === undefined &&
                      bhOtherParentStepparentGuardian === undefined &&
                      bhOtherParentStepparentHomePhone === undefined &&
                      bhOtherParentStepparentWorkPhone === undefined &&
                      bhOtherParentStepparentCellPhone === undefined &&
                      bhStepmother === undefined &&
                      bhStepfather === undefined &&
                      bhOtherParentStepparentAddress === undefined
                        ? 'pdf-t__empty'
                        : null
                    }
                  >
                    {bhPrimaryCaregiverMother !== undefined ||
                    bhMotherName !== undefined ||
                    bhMotherCellPhone !== undefined ||
                    bhMotherOccupation !== undefined ||
                    bhMotherLengthEmployement !== undefined ||
                    bhMotherPrimaryLanguage !== undefined ||
                    bhMotherAge !== undefined ||
                    bhMotherHomePhone !== undefined ||
                    bhMotherWorkPhone !== undefined ||
                    bhMotherEmployer !== undefined ||
                    bhMotherHighestGrade !== undefined ||
                    bhMotherSecondaryLanguage !== undefined ||
                    bhPrimaryCaregiverFather !== undefined ||
                    bhFatherName !== undefined ||
                    bhFatherCellPhone !== undefined ||
                    bhFatherOccupation !== undefined ||
                    bhFatherLengthEmployement !== undefined ||
                    bhFatherPrimaryLanguage !== undefined ||
                    bhFatherAge !== undefined ||
                    bhFatherHomePhone !== undefined ||
                    bhFatherWorkPhone !== undefined ||
                    bhFatherEmployer !== undefined ||
                    bhFatherHighestGrade !== undefined ||
                    bhFatherSecondaryLanguage !== undefined ||
                    bhPrimaryCaregiverName !== undefined ||
                    bhOtherParentStepparentAge !== undefined ||
                    bhOtherParentStepparentGuardian !== undefined ||
                    bhOtherParentStepparentHomePhone !== undefined ||
                    bhOtherParentStepparentWorkPhone !== undefined ||
                    bhOtherParentStepparentCellPhone !== undefined ||
                    bhStepmother !== undefined ||
                    bhStepfather !== undefined ||
                    bhOtherParentStepparentAddress !== undefined ? (
                      <div>
                        <h2>Background Information</h2>
                        <p>
                          <em>
                            The following background information was obtained from a clinical
                            interview with {diEvaluator}.
                          </em>
                        </p>
                      </div>
                    ) : null}
                    {wizardForm6Disabled !== true ? (
                      <div>
                        {bhMotherName !== undefined ? (
                          <h3>Mother</h3>
                        ) : bhPrimaryCaregiverMother === true ? (
                          <div className="primary-caregiver--active">
                            <h3>Mother</h3>
                            <span>Primary caregiver</span>
                          </div>
                        ) : null}
                        <table cellPadding="0" cellSpacing="0">
                          <tr>
                            <td>
                              <div>
                                {bhMotherName !== undefined ? (
                                  <p>
                                    Name: <span>{bhMotherName}</span>
                                  </p>
                                ) : null}
                                {bhStepmother === undefined ? null : bhStepmother !== undefined &&
                                  bhStepmother === 'Yes' ? (
                                  <p>
                                    Relationship: <span>Stepmother</span>
                                  </p>
                                ) : (
                                  <p>
                                    Relationship: <span>Mother</span>
                                  </p>
                                )}
                                {bhMotherCellPhone !== undefined ? (
                                  <p>
                                    Cell phone: <span>${bhMotherCellPhone}</span>
                                  </p>
                                ) : null}
                                {bhMotherOccupation !== undefined ? (
                                  <p>
                                    Occupation: <span>{bhMotherOccupation}</span>
                                  </p>
                                ) : null}
                                {bhMotherLengthEmployement !== undefined ? (
                                  <p>
                                    Years: <span>{bhMotherLengthEmployement}</span>
                                  </p>
                                ) : null}
                                {bhMotherPrimaryLanguage !== undefined ? (
                                  <p>
                                    Primary language: <span>{bhMotherPrimaryLanguage}</span>
                                  </p>
                                ) : null}
                              </div>
                            </td>
                            <td>
                              <div>
                                {bhMotherAge !== undefined ? (
                                  <p>
                                    Age: <span>{bhMotherAge}</span>
                                  </p>
                                ) : null}
                                {bhMotherHomePhone !== undefined ? (
                                  <p>
                                    Home phone: <span>{bhMotherHomePhone}</span>
                                  </p>
                                ) : null}
                                {bhMotherWorkPhone !== undefined ? (
                                  <p>
                                    Work phone: <span>{bhMotherWorkPhone}</span>
                                  </p>
                                ) : null}
                                {bhMotherEmployer !== undefined ? (
                                  <p>
                                    Employer: <span>{bhMotherEmployer}</span>
                                  </p>
                                ) : null}
                                {bhMotherHighestGrade !== undefined ? (
                                  <p>
                                    Highest grade: <span>{bhMotherHighestGrade}</span>
                                  </p>
                                ) : null}
                                {bhMotherSecondaryLanguage !== undefined ? (
                                  <p>
                                    Secondary language: <span>{bhMotherSecondaryLanguage}</span>
                                  </p>
                                ) : null}
                              </div>
                            </td>
                          </tr>
                        </table>
                      </div>
                    ) : null}
                    {wizardForm7Disabled !== true ? (
                      <div>
                        {bhFatherName !== undefined ? (
                          <h3>Father</h3>
                        ) : bhPrimaryCaregiverFather !== undefined &&
                          bhPrimaryCaregiverFather === true ? (
                          <div className="primary-caregiver--active">
                            <h3>Father</h3>
                            <span>Primary caregiver</span>
                          </div>
                        ) : null}
                        <table cellPadding="0" cellSpacing="0">
                          <tr>
                            <td>
                              <div>
                                {bhFatherName !== undefined ? (
                                  <p>
                                    Name: <span>{bhFatherName}</span>
                                  </p>
                                ) : null}
                                {bhStepfather === undefined ? null : bhStepfather !== undefined &&
                                  bhStepfather === 'Yes' ? (
                                  <p>
                                    Relationship: <span>Stepfather</span>
                                  </p>
                                ) : (
                                  <p>
                                    Relationship: <span>Father</span>
                                  </p>
                                )}
                                {bhFatherCellPhone !== undefined ? (
                                  <p>
                                    Cell phone: <span>{bhFatherCellPhone}</span>
                                  </p>
                                ) : null}
                                {bhFatherOccupation !== undefined ? (
                                  <p>
                                    Occupation: <span>{bhFatherOccupation}</span>
                                  </p>
                                ) : null}
                                {bhFatherLengthEmployement !== undefined ? (
                                  <p>
                                    Years: <span>{bhFatherLengthEmployement}</span>
                                  </p>
                                ) : null}
                                {bhFatherPrimaryLanguage !== undefined ? (
                                  <p>
                                    Primarylanguage: <span>{bhFatherPrimaryLanguage}</span>
                                  </p>
                                ) : null}
                              </div>
                            </td>
                            <td>
                              <div>
                                {bhFatherAge !== undefined ? (
                                  <p>
                                    Age: <span>{bhFatherAge}</span>
                                  </p>
                                ) : null}
                                {bhFatherHomePhone !== undefined ? (
                                  <p>
                                    Home phone: <span>{bhFatherHomePhone}</span>
                                  </p>
                                ) : null}
                                {bhFatherWorkPhone !== undefined ? (
                                  <p>
                                    Work phone: <span>{bhFatherWorkPhone}</span>
                                  </p>
                                ) : null}
                                {bhFatherEmployer !== undefined ? (
                                  <p>
                                    Employer: <span>{bhFatherEmployer}</span>
                                  </p>
                                ) : null}
                                {bhFatherHighestGrade !== undefined ? (
                                  <p>
                                    Highest grade: <span>{bhFatherHighestGrade}</span>
                                  </p>
                                ) : null}
                                {bhFatherSecondaryLanguage !== undefined ? (
                                  <p>
                                    Secondary language: <span>{bhFatherSecondaryLanguage}</span>
                                  </p>
                                ) : null}
                              </div>
                            </td>
                          </tr>
                        </table>
                      </div>
                    ) : null}
                    {wizardForm8Disabled !== true ? (
                      <div>
                        {bhPrimaryCaregiverName === undefined ||
                        bhOtherParentStepparentGuardian === undefined ? null : (
                          <h3>Primary Caregiver Not Mother or Father</h3>
                        )}
                        <table cellPadding="0" cellSpacing="0">
                          <tr>
                            <td>
                              <div>
                                {bhPrimaryCaregiverName !== undefined ? (
                                  <p>
                                    Name: <span>{bhPrimaryCaregiverName}</span>
                                  </p>
                                ) : null}
                                {bhOtherParentStepparentAge !== undefined ? (
                                  <p>
                                    Age: <span>{bhOtherParentStepparentAge}</span>
                                  </p>
                                ) : null}
                                {bhOtherParentStepparentGuardian !== undefined ? (
                                  <p>
                                    Relationship: <span>{bhOtherParentStepparentGuardian}</span>
                                  </p>
                                ) : null}
                                {bhOtherParentStepparentHomePhone !== undefined ? (
                                  <p>
                                    Home phone: <span>{bhOtherParentStepparentHomePhone}</span>
                                  </p>
                                ) : null}
                                {bhOtherParentStepparentWorkPhone !== undefined ? (
                                  <p>
                                    Work phone: <span>{bhOtherParentStepparentWorkPhone}</span>
                                  </p>
                                ) : null}
                                {bhOtherParentStepparentCellPhone !== undefined ? (
                                  <p>
                                    Cell phone: <span>{bhOtherParentStepparentCellPhone}</span>
                                  </p>
                                ) : null}
                                {bhOtherParentStepparentAddress !== undefined ? (
                                  <p>
                                    Address: <span>{bhOtherParentStepparentAddress}</span>
                                  </p>
                                ) : null}
                              </div>
                            </td>
                          </tr>
                        </table>
                      </div>
                    ) : null}
                  </section>
                ) : null}
                {wizardForm9Disabled !== true ? (
                  <section
                    className={
                      ccCaregiverGone === undefined &&
                      ccHoursPerDay === undefined &&
                      ccDifferentPeople === undefined
                        ? 'pdf-t__empty'
                        : null
                    }
                  >
                    {ccCaregiverGone !== undefined ||
                    ccHoursPerDay !== undefined ||
                    ccDifferentPeople !== undefined ? (
                      <h2>Childcare Information</h2>
                    ) : null}
                    <table cellPadding="0" cellSpacing="0">
                      <tr>
                        <td>
                          <div>
                            {ccCaregiverGone !== undefined ? (
                              <p>
                                Who takes care of this child if the caregivers are gone?{' '}
                                <span>{ccCaregiverGone}</span>
                              </p>
                            ) : null}
                            {ccHoursPerDay !== undefined ? (
                              <p>
                                How many hours per day is this child in a childcare setting?{' '}
                                <span>{ccHoursPerDay}</span>
                              </p>
                            ) : null}
                            {ccDifferentPeople !== undefined ? (
                              <p>
                                Who are the different individuals that care for this child?{' '}
                                <span>{ccDifferentPeople}</span>
                              </p>
                            ) : null}
                          </div>
                        </td>
                      </tr>
                    </table>
                  </section>
                ) : null}
                {wizardForm10Disabled !== true ? (
                  <section
                    className={
                      fhCloseness === undefined &&
                      fhExperienced === undefined &&
                      fhCustodyMother !== true &&
                      fhCustodyFather !== true &&
                      fhCustodyBoth !== true &&
                      fhVisitation === undefined
                        ? 'pdf-t__empty'
                        : null
                    }
                  >
                    {fhCloseness !== undefined ||
                    fhExperienced !== undefined ||
                    fhCustodyMother === true ||
                    fhCustodyFather === true ||
                    fhCustodyBoth === true ||
                    fhVisitation !== undefined ? (
                      <h2>Family History</h2>
                    ) : null}
                    <table cellPadding="0" cellSpacing="0">
                      <tr>
                        <td>
                          <div>
                            {fhCloseness !== undefined ? (
                              <p>
                                Is this child closer to one parent than the other?{' '}
                                <span>{fhCloseness}</span>
                              </p>
                            ) : null}
                            {fhCloseness === 'Yes' ? (
                              <p>
                                If yes, which one? <span>{fhParentalClosenessChoice}</span>
                              </p>
                            ) : null}
                            {fhExperienced !== undefined ? (
                              <p>
                                Has this child ever experienced any parental separations, divorces,
                                or deaths? <span>{fhExperienced}</span>
                              </p>
                            ) : null}
                            {fhExperienced === 'Yes' ? (
                              <div>
                                <p>
                                  If yes, when? <span>{fhLifeExperiencesDate}</span>
                                </p>
                                <p>
                                  Child&apos;s age at the time? <span>{fhLifeExperiencesAge}</span>
                                </p>
                                <p>
                                  Please describe the circumstances.{' '}
                                  <span>{fhLifeExperiencesDetails}</span>
                                </p>
                              </div>
                            ) : null}
                            {fhCustodyMother === true ||
                            fhCustodyFather === true ||
                            fhCustodyBoth === true ? (
                              <p>
                                Who has custody of this child?{' '}
                                <span>
                                  {fhCustodyMother === true ? 'Mother' : null}
                                  {fhCustodyFather === true ? 'Father' : null}
                                  {fhCustodyBoth === true ? 'Both' : null}
                                </span>
                              </p>
                            ) : null}
                            {fhVisitation !== undefined ? (
                              <p>
                                How often does one parent see this child?{' '}
                                <span>{fhVisitation}</span>
                              </p>
                            ) : null}
                          </div>
                        </td>
                      </tr>
                    </table>
                  </section>
                ) : null}
                {wizardForm11Disabled !== true ? (
                  <section
                    className={
                      brothersSisters === undefined && bsGetAlong === undefined
                        ? 'pdf-t__empty'
                        : null
                    }
                  >
                    {brothersSisters !== undefined || bsGetAlong !== undefined ? (
                      <h2>Siblings</h2>
                    ) : null}
                    <table cellPadding="0" cellSpacing="0">
                      <tr>
                        <td>
                          <div>
                            <ul>
                              {brothersSisters !== undefined
                                ? brothersSisters.map((sib) => (
                                    <li>
                                      <p>
                                        <span>{sib.relationship},</span>
                                        <span>{sib.age} years old, </span>
                                        <span>
                                          {sib.home === 'Yes'
                                            ? 'lives at home'
                                            : 'does not live at home'}
                                        </span>
                                      </p>
                                    </li>
                                  ))
                                : null}
                            </ul>
                            <div>
                              {bsGetAlong !== undefined ? (
                                <p>
                                  How does this child get along with brother(s) and/or sister(s)?{' '}
                                  <span>{bsGetAlong}</span>
                                </p>
                              ) : null}
                            </div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </section>
                ) : null}
                {wizardForm12Disabled !== true ? (
                  <section
                    className={
                      crResidence === undefined && crResidenceLength === undefined
                        ? 'pdf-t__empty'
                        : null
                    }
                  >
                    {crResidence !== undefined || crResidenceLength !== undefined ? (
                      <h2>Child’s Residence</h2>
                    ) : null}
                    <table cellPadding="0" cellSpacing="0">
                      <tr>
                        <td>
                          <div>
                            {crResidence !== undefined ? (
                              <p>
                                Where does this child live? <span>{crResidence}</span>
                              </p>
                            ) : null}
                            {crResidenceLength !== undefined ? (
                              <p>
                                How many years living at the current address?{' '}
                                <span>{crResidenceLength}</span>
                              </p>
                            ) : null}
                          </div>
                        </td>
                      </tr>
                    </table>
                  </section>
                ) : null}
                {wizardForm13Disabled !== true ? (
                  <section
                    className={
                      frMovies === undefined &&
                      frGames === undefined &&
                      frMeals === undefined &&
                      frSports === undefined &&
                      frConversations === undefined &&
                      frVisitsRelatives === undefined &&
                      frTelevision === undefined &&
                      frChurch === undefined &&
                      frOther === undefined &&
                      frSpokenLanguage === undefined &&
                      frGrandparentFrequency === undefined &&
                      frEnjoy === undefined &&
                      frDifficult === undefined &&
                      frCareer === undefined &&
                      frEducationLevel === undefined &&
                      frDisciplinarian === undefined &&
                      frAgreeDiscipline === undefined &&
                      frDisciplineTechniques === undefined
                        ? 'pdf-t__empty'
                        : null
                    }
                  >
                    {frMovies !== undefined ||
                    frGames !== undefined ||
                    frMeals !== undefined ||
                    frSports !== undefined ||
                    frConversations !== undefined ||
                    frVisitsRelatives !== undefined ||
                    frTelevision !== undefined ||
                    frChurch !== undefined ||
                    frOther !== undefined ||
                    frSpokenLanguage !== undefined ||
                    frGrandparentFrequency !== undefined ||
                    frEnjoy !== undefined ||
                    frDifficult !== undefined ||
                    frCareer !== undefined ||
                    frEducationLevel !== undefined ||
                    frDisciplinarian !== undefined ||
                    frAgreeDiscipline !== undefined ||
                    frDisciplineTechniques !== undefined ? (
                      <h2>Family Residence</h2>
                    ) : null}
                    <table cellPadding="0" cellSpacing="0">
                      <tr>
                        <td>
                          <div>
                            {frMovies !== undefined ||
                            frGames !== undefined ||
                            frMeals !== undefined ||
                            frSports !== undefined ||
                            frConversations !== undefined ||
                            frVisitsRelatives !== undefined ||
                            frTelevision !== undefined ||
                            frChurch !== undefined ||
                            frOther !== undefined ? (
                              <p>
                                All the activities in which this child often participates with the
                                family is:
                              </p>
                            ) : null}
                            <ul>
                              {frMovies === true ? <li>Movies</li> : null}
                              {frGames === true ? <li>Games</li> : null}
                              {frMeals === true ? <li>Meals</li> : null}
                              {frSports === true ? <li>Sports</li> : null}
                              {frConversations === true ? <li>Conversations</li> : null}
                              {frVisitsRelatives === true ? <li>Visits with relatives</li> : null}
                              {frTelevision === true ? <li>Television</li> : null}
                              {frChurch === true ? <li>Church</li> : null}
                              {frOther === true ? <li>Other</li> : null}
                            </ul>
                            {frSpokenLanguage !== undefined ? (
                              <p>
                                What is the language spoken at home? <span>{frSpokenLanguage}</span>
                              </p>
                            ) : null}
                            {frGrandparentFrequency !== undefined ? (
                              <p>
                                How frequently does this child see grandparents?{' '}
                                <span>{frGrandparentFrequency}</span>
                              </p>
                            ) : null}
                            {frEnjoy !== undefined ? (
                              <p>
                                What do you most enjoy about this child? <span>{frEnjoy}</span>
                              </p>
                            ) : null}
                            {frDifficult !== undefined ? (
                              <p>
                                What do you find most difficult about raising this child?{' '}
                                <span>{frDifficult}</span>
                              </p>
                            ) : null}
                            {frCareer !== undefined ? (
                              <p>
                                What would you like this child to be when he grows up?{' '}
                                <span>{frCareer}</span>
                              </p>
                            ) : null}
                            {frEducationLevel !== undefined ? (
                              <p>
                                What level of education do you hope this child will complete?{' '}
                                <span>{frEducationLevel}</span>
                              </p>
                            ) : null}
                            {frDisciplinarian !== undefined && frDisciplinarian === 'Other' ? (
                              <p>
                                Who is mainly in charge of discipline in the home?{' '}
                                <span>{frDisciplinarianOtherDesc}</span>
                              </p>
                            ) : frDisciplinarian !== undefined ? (
                              <p>
                                Who is mainly in charge of discipline in the home?{' '}
                                <span>{frDisciplinarian}</span>
                              </p>
                            ) : null}
                            {frAgreeDiscipline !== undefined ? (
                              <p>
                                Do all caregivers agree on discipline?{' '}
                                <span>{frAgreeDiscipline}</span>
                              </p>
                            ) : null}
                            {frDisciplineTechniques !== undefined ? (
                              <p>
                                Please describe discipline techniques?{' '}
                                <span>{frDisciplineTechniques}</span>
                              </p>
                            ) : null}
                          </div>
                        </td>
                      </tr>
                    </table>
                  </section>
                ) : null}
                {wizardForm14Disabled !== true ? (
                  <section
                    className={
                      mdhPlannedPregnancy === undefined &&
                      mdhDrCare === undefined &&
                      mdhTotalPregnancies === undefined &&
                      mdhPregnancyDifficultConception === undefined &&
                      mdhPregnancyToxemia === undefined &&
                      mdhPregnancyWeightGain === undefined &&
                      mdhPregnancyVomiting === undefined &&
                      mdhPregnancyGermanMeasels === undefined &&
                      mdhPregnancySwelling === undefined &&
                      mdhPregnancyEmotional === undefined &&
                      mdhPregnancyVaginalBleeding === undefined &&
                      mdhPregnancyFlu === undefined &&
                      mdhPregnancyAnemia === undefined &&
                      mdhPregnancyBloodPressure === undefined &&
                      mdhPregnancyInjury === undefined &&
                      mdhOtherComplication === undefined &&
                      mdhMothersAge === undefined &&
                      mdhFathersAge === undefined &&
                      mdhMothersAgeFirstChild === undefined &&
                      mdhHospitalBirth === undefined &&
                      mdhPregnancyLength === undefined &&
                      mdhBirthWeight === undefined &&
                      mdhLaborLength === undefined &&
                      mdhApgarScore === undefined &&
                      mdhBirthConditionChild === undefined &&
                      mdhForceps === undefined &&
                      mdhBreech === undefined &&
                      mdhInduced === undefined &&
                      mdhCeasarean === undefined &&
                      mdhDeliveryComplications === undefined &&
                      mdhIncubator === undefined &&
                      mdhJaundiced === undefined &&
                      mdhBreathingProblems === undefined &&
                      mdhSupplementalOxygen === undefined &&
                      mdhAnesthesia === undefined &&
                      mdhMotherLengthHospital === undefined &&
                      mdhChildLengthHospital === undefined
                        ? 'pdf-t__empty'
                        : null
                    }
                  >
                    {mdhPlannedPregnancy !== undefined ||
                    mdhDrCare !== undefined ||
                    mdhTotalPregnancies !== undefined ||
                    mdhPregnancyDifficultConception !== undefined ||
                    mdhPregnancyToxemia !== undefined ||
                    mdhPregnancyWeightGain !== undefined ||
                    mdhPregnancyVomiting !== undefined ||
                    mdhPregnancyGermanMeasels !== undefined ||
                    mdhPregnancySwelling !== undefined ||
                    mdhPregnancyEmotional !== undefined ||
                    mdhPregnancyVaginalBleeding !== undefined ||
                    mdhPregnancyFlu !== undefined ||
                    mdhPregnancyAnemia !== undefined ||
                    mdhPregnancyBloodPressure !== undefined ||
                    mdhPregnancyInjury !== undefined ||
                    mdhOtherComplication !== undefined ||
                    mdhMothersAge !== undefined ||
                    mdhFathersAge !== undefined ||
                    mdhMothersAgeFirstChild !== undefined ||
                    mdhHospitalBirth !== undefined ||
                    mdhPregnancyLength !== undefined ||
                    mdhBirthWeight !== undefined ||
                    mdhLaborLength !== undefined ||
                    mdhApgarScore !== undefined ||
                    mdhBirthConditionChild !== undefined ||
                    mdhForceps !== undefined ||
                    mdhBreech !== undefined ||
                    mdhInduced !== undefined ||
                    mdhCeasarean !== undefined ||
                    mdhDeliveryComplications !== undefined ||
                    mdhIncubator !== undefined ||
                    mdhJaundiced !== undefined ||
                    mdhBreathingProblems !== undefined ||
                    mdhSupplementalOxygen !== undefined ||
                    mdhAnesthesia !== undefined ||
                    mdhMotherLengthHospital !== undefined ||
                    mdhChildLengthHospital !== undefined ? (
                      <h2>Medical &amp; Development History</h2>
                    ) : null}
                    {mdhPlannedPregnancy !== undefined ||
                    mdhDrCare !== undefined ||
                    mdhTotalPregnancies !== undefined ||
                    mdhPregnancyDifficultConception !== undefined ||
                    mdhPregnancyToxemia !== undefined ||
                    mdhPregnancyWeightGain !== undefined ||
                    mdhPregnancyVomiting !== undefined ||
                    mdhPregnancyGermanMeasels !== undefined ||
                    mdhPregnancySwelling !== undefined ||
                    mdhPregnancyEmotional !== undefined ||
                    mdhPregnancyVaginalBleeding !== undefined ||
                    mdhPregnancyFlu !== undefined ||
                    mdhPregnancyAnemia !== undefined ||
                    mdhPregnancyBloodPressure !== undefined ||
                    mdhPregnancyInjury !== undefined ||
                    mdhOtherComplication !== undefined ? (
                      <h3>Pregnancy</h3>
                    ) : null}
                    <table cellPadding="0" cellSpacing="0">
                      <tr>
                        <td>
                          <div>
                            {mdhPlannedPregnancy !== undefined ? (
                              <p>
                                Was this child a planned pregnancy?{' '}
                                <span>{mdhPlannedPregnancy}</span>
                              </p>
                            ) : null}
                            {mdhDrCare !== undefined ? (
                              <p>
                                Was the mother under doctor’s care? <span>{mdhDrCare}</span>
                              </p>
                            ) : null}
                            {mdhTotalPregnancies !== undefined ? (
                              <p>
                                The number of previous pregnancies/miscarriages?{' '}
                                <span>{mdhTotalPregnancies}</span>
                              </p>
                            ) : null}
                            {mdhPregnancyDifficultConception === true ||
                            mdhPregnancyToxemia === true ||
                            mdhPregnancyWeightGain === true ||
                            mdhPregnancyVomiting === true ||
                            mdhPregnancyGermanMeasels === true ||
                            mdhPregnancySwelling === true ||
                            mdhPregnancyEmotional === true ||
                            mdhPregnancyVaginalBleeding === true ||
                            mdhPregnancyFlu === true ||
                            mdhPregnancyAnemia === true ||
                            mdhPregnancyBloodPressure === true ||
                            mdhPregnancyInjury === true ||
                            mdhOtherComplication === true ? (
                              <div>
                                <p>Complications that occurred during pregnancy:</p>
                                <ul>
                                  {mdhPregnancyDifficultConception === true ? (
                                    <li>Difficulty in conception</li>
                                  ) : null}
                                  {mdhPregnancyToxemia === true ? <li>Toxemia</li> : null}
                                  {mdhPregnancyWeightGain === true ? (
                                    <li>Abnormal weight gain</li>
                                  ) : null}
                                  {mdhPregnancyVomiting === true ? (
                                    <li>Excessive vomiting</li>
                                  ) : null}
                                  {mdhPregnancyGermanMeasels === true ? (
                                    <li>German measels</li>
                                  ) : null}
                                  {mdhPregnancySwelling === true ? (
                                    <li>Excessive swelling</li>
                                  ) : null}
                                  {mdhPregnancyEmotional === true ? (
                                    <li>Emotional problems</li>
                                  ) : null}
                                  {mdhPregnancyVaginalBleeding === true ? (
                                    <li>Vaginal bleeding</li>
                                  ) : null}
                                  {mdhPregnancyFlu === true ? <li>Flu</li> : null}
                                  {mdhPregnancyAnemia === true ? <li>Anemia</li> : null}
                                  {mdhPregnancyBloodPressure === true ? (
                                    <li>High blood pressure</li>
                                  ) : null}
                                  {mdhPregnancyInjury === true ? <li>Maternal injury</li> : null}
                                  {mdhOtherComplication === true ? (
                                    <li>${mdhOtherComplicationDescription}</li>
                                  ) : null}
                                </ul>
                              </div>
                            ) : null}
                          </div>
                        </td>
                      </tr>
                    </table>
                  </section>
                ) : null}
                {wizardForm15Disabled !== true ? (
                  <section
                    className={
                      mdhMothersAge === undefined &&
                      mdhFathersAge === undefined &&
                      mdhMothersAgeFirstChild === undefined &&
                      mdhHospitalBirth === undefined &&
                      mdhPregnancyLength === undefined &&
                      mdhBirthWeight === undefined &&
                      mdhLaborLength === undefined &&
                      mdhApgarScore === undefined &&
                      mdhBirthConditionChild === undefined &&
                      mdhForceps === undefined &&
                      mdhBreech === undefined &&
                      mdhInduced === undefined &&
                      mdhCeasarean === undefined &&
                      mdhDeliveryComplications === undefined &&
                      mdhIncubator === undefined &&
                      mdhJaundiced === undefined &&
                      mdhBreathingProblems === undefined &&
                      mdhSupplementalOxygen === undefined &&
                      mdhAnesthesia === undefined &&
                      mdhMotherLengthHospital === undefined &&
                      mdhChildLengthHospital === undefined
                        ? 'pdf-t__empty'
                        : null
                    }
                  >
                    {mdhMothersAge !== undefined ||
                    mdhFathersAge !== undefined ||
                    mdhMothersAgeFirstChild !== undefined ||
                    mdhHospitalBirth !== undefined ||
                    mdhPregnancyLength !== undefined ||
                    mdhBirthWeight !== undefined ||
                    mdhLaborLength !== undefined ||
                    mdhApgarScore !== undefined ||
                    mdhBirthConditionChild !== undefined ||
                    mdhForceps !== undefined ||
                    mdhBreech !== undefined ||
                    mdhInduced !== undefined ||
                    mdhCeasarean !== undefined ||
                    mdhDeliveryComplications !== undefined ||
                    mdhIncubator !== undefined ||
                    mdhJaundiced !== undefined ||
                    mdhBreathingProblems !== undefined ||
                    mdhSupplementalOxygen !== undefined ||
                    mdhAnesthesia !== undefined ||
                    mdhMotherLengthHospital !== undefined ||
                    mdhChildLengthHospital !== undefined ? (
                      <h3>Birth</h3>
                    ) : null}
                    <table cellPadding="0" cellSpacing="0">
                      <tr>
                        <td>
                          <div>
                            {mdhMothersAge !== undefined ? (
                              <p>
                                At this child’s birth, what was the mother’s age?{' '}
                                <span>{mdhMothersAge}</span>
                              </p>
                            ) : null}
                            {mdhFathersAge !== undefined ? (
                              <p>
                                Father’s? <span>{mdhFathersAge}</span>
                              </p>
                            ) : null}
                            {mdhMothersAgeFirstChild !== undefined ? (
                              <p>
                                Mother’s age at birth of first child:{' '}
                                <span>{mdhMothersAgeFirstChild}</span>
                              </p>
                            ) : null}
                            {mdhHospitalBirth !== undefined ? (
                              <p>
                                Was this child born in a hospital? <span>{mdhHospitalBirth}</span>
                              </p>
                            ) : null}
                            {mdhHospitalBirth === 'No' ? (
                              <p>
                                If no, where? <span>{mdhBirthLocation}</span>
                              </p>
                            ) : null}
                            {mdhPregnancyLength !== undefined ? (
                              <p>
                                Length of pregnancy: <span>{mdhPregnancyLength}</span>
                              </p>
                            ) : null}
                            {mdhBirthWeight !== undefined ? (
                              <p>
                                Birth weight: <span>{mdhBirthWeight}</span>
                              </p>
                            ) : null}
                            {mdhLaborLength !== undefined ? (
                              <p>
                                Length of labor: <span>{mdhLaborLength}</span>
                              </p>
                            ) : null}
                            {mdhApgarScore !== undefined ? (
                              <p>
                                Apgar score: <span>{mdhApgarScore}</span>
                              </p>
                            ) : null}
                            {mdhBirthConditionChild !== undefined ? (
                              <p>
                                Child’s condition at birth: <span>{mdhBirthConditionChild}</span>
                              </p>
                            ) : null}
                            {mdhBirthConditionMother !== undefined ? (
                              <p>
                                Mother’s condition at birth: <span>{mdhBirthConditionMother}</span>
                              </p>
                            ) : null}
                            {mdhForceps === true ||
                            mdhBreech === true ||
                            mdhInduced === true ||
                            mdhCeasarean === true ? (
                              <div>
                                <p>Complications that occurred during birth:</p>
                                <ul>
                                  {mdhForceps === true ? <li>Forceps</li> : null}
                                  {mdhBreech === true ? <li>Breech</li> : null}
                                  {mdhInduced === true ? <li>Induced</li> : null}
                                  {mdhCeasarean === true ? <li>Ceasarean</li> : null}
                                </ul>
                              </div>
                            ) : null}
                            {mdhDeliveryComplications !== undefined ? (
                              <p>
                                Other deliver complications: <span>{mdhDeliveryComplications}</span>
                              </p>
                            ) : null}
                            {mdhIncubator !== undefined ? (
                              <p>
                                Incubator: <span>{mdhIncubator}</span>
                              </p>
                            ) : null}
                            {mdhJaundiced !== undefined ? (
                              <p>
                                Jaundiced: <span>{mdhJaundiced}</span>
                              </p>
                            ) : null}
                            {mdhBreathingProblems !== undefined ? (
                              <p>
                                Breathing problems right after birth?{' '}
                                <span>{mdhBreathingProblems}</span>
                              </p>
                            ) : null}
                            {mdhSupplementalOxygen !== undefined ? (
                              <p>
                                Supplemental oxygen? <span>{mdhSupplementalOxygen}</span>
                              </p>
                            ) : null}
                            {mdhAnesthesia !== undefined ? (
                              <p>
                                Was anesthesia used during delivery? If so, what kind?{' '}
                                <span>{mdhAnesthesia}</span>
                              </p>
                            ) : null}
                            {mdhMotherLengthHospital !== undefined ? (
                              <p>
                                Mother&apos;s length of hospital stay?{' '}
                                <span>{mdhMotherLengthHospital}</span>
                              </p>
                            ) : null}
                            {mdhChildLengthHospital !== undefined ? (
                              <p>
                                Child&apos;s length of hospital stay?{' '}
                                <span>{mdhChildLengthHospital}</span>
                              </p>
                            ) : null}
                          </div>
                        </td>
                      </tr>
                    </table>
                  </section>
                ) : null}
                {wizardForm16Disabled !== true ? (
                  <section
                    className={
                      mdhTurnOverMonths === undefined &&
                      mdhTurnOverYear === undefined &&
                      mdhWalkDownStairsMonths === undefined &&
                      mdhWalkDownStairsYear === undefined &&
                      mdhSitAloneMonths === undefined &&
                      mdhSitAloneYear === undefined &&
                      mdhAttractedSoundMonths === undefined &&
                      mdhAttractedSoundYear === undefined &&
                      mdhCrawlMonths === undefined &&
                      mdhCrawlYear === undefined &&
                      mdhUnderstandWordsMonths === undefined &&
                      mdhUnderstandWordsYear === undefined &&
                      mdhStandAloneMonths === undefined &&
                      mdhStandAloneYear === undefined &&
                      mdhSpeakFirstWordsMonths === undefined &&
                      mdhSpeakFirstWordsYear === undefined &&
                      mdhWalkAloneMonths === undefined &&
                      mdhWalkAloneYear === undefined &&
                      mdhSpeakSentencesMonths === undefined &&
                      mdhSpeakSentencesYear === undefined &&
                      mdhWalkUpStairsMonths === undefined &&
                      mdhWalkUpStairsYear === undefined
                        ? 'pdf-t__empty'
                        : null
                    }
                  >
                    {mdhTurnOverMonths !== undefined ||
                    mdhTurnOverYear !== undefined ||
                    mdhWalkDownStairsMonths !== undefined ||
                    mdhWalkDownStairsYear !== undefined ||
                    mdhSitAloneMonths !== undefined ||
                    mdhSitAloneYear !== undefined ||
                    mdhAttractedSoundMonths !== undefined ||
                    mdhAttractedSoundYear !== undefined ||
                    mdhCrawlMonths !== undefined ||
                    mdhCrawlYear !== undefined ||
                    mdhUnderstandWordsMonths !== undefined ||
                    mdhUnderstandWordsYear !== undefined ||
                    mdhStandAloneMonths !== undefined ||
                    mdhStandAloneYear !== undefined ||
                    mdhSpeakFirstWordsMonths !== undefined ||
                    mdhSpeakFirstWordsYear !== undefined ||
                    mdhWalkAloneMonths !== undefined ||
                    mdhWalkAloneYear !== undefined ||
                    mdhSpeakSentencesMonths !== undefined ||
                    mdhSpeakSentencesYear !== undefined ||
                    mdhWalkUpStairsMonths !== undefined ||
                    mdhWalkUpStairsYear !== undefined ? (
                      <h2>Development</h2>
                    ) : null}
                    <table cellPadding="0" cellSpacing="0">
                      <tr>
                        <td>
                          <div>
                            {mdhTurnOverMonths !== undefined ||
                            mdhTurnOverYear !== undefined ||
                            mdhWalkDownStairsMonths !== undefined ||
                            mdhWalkDownStairsYear !== undefined ||
                            mdhSitAloneMonths !== undefined ||
                            mdhSitAloneYear !== undefined ||
                            mdhAttractedSoundMonths !== undefined ||
                            mdhAttractedSoundYear !== undefined ||
                            mdhCrawlMonths !== undefined ||
                            mdhCrawlYear !== undefined ||
                            mdhUnderstandWordsMonths !== undefined ||
                            mdhUnderstandWordsYear !== undefined ||
                            mdhStandAloneMonths !== undefined ||
                            mdhStandAloneYear !== undefined ||
                            mdhSpeakFirstWordsMonths !== undefined ||
                            mdhSpeakFirstWordsYear !== undefined ||
                            mdhWalkAloneMonths !== undefined ||
                            mdhWalkAloneYear !== undefined ||
                            mdhSpeakSentencesMonths !== undefined ||
                            mdhSpeakSentencesYear !== undefined ||
                            mdhWalkUpStairsMonths !== undefined ||
                            mdhWalkUpStairsYear !== undefined ? (
                              <p>At what age did this child first do the following?</p>
                            ) : null}
                            <ul>
                              {mdhTurnOverMonths !== undefined || mdhTurnOverYear !== undefined ? (
                                <li>
                                  <p>
                                    Turn over:{' '}
                                    {mdhTurnOverMonths !== undefined ? (
                                      <span>
                                        {mdhTurnOverMonths}{' '}
                                        {mdhTurnOverMonths === '1' ? 'month' : 'months'}
                                      </span>
                                    ) : null}{' '}
                                    {mdhTurnOverYear !== undefined ? (
                                      <span>
                                        {mdhTurnOverYear}{' '}
                                        {mdhTurnOverYear === '1' ? 'year' : 'years'}
                                      </span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mdhWalkDownStairsMonths !== undefined ||
                              mdhWalkDownStairsYear !== undefined ? (
                                <li>
                                  <p>
                                    Walk down stairs:{' '}
                                    {mdhWalkDownStairsMonths !== undefined ? (
                                      <span>
                                        {mdhWalkDownStairsMonths}{' '}
                                        {mdhWalkDownStairsMonths === '1' ? 'month' : 'months'}
                                      </span>
                                    ) : null}{' '}
                                    {mdhWalkDownStairsYear !== undefined ? (
                                      <span>
                                        {mdhWalkDownStairsYear}{' '}
                                        {mdhWalkDownStairsYear === '1' ? 'year' : 'years'}
                                      </span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mdhSitAloneMonths !== undefined || mdhSitAloneYear !== undefined ? (
                                <li>
                                  <p>
                                    Sit alone:{' '}
                                    {mdhSitAloneMonths !== undefined ? (
                                      <span>
                                        {mdhSitAloneMonths}{' '}
                                        {mdhSitAloneMonths === '1' ? 'month' : 'months'}
                                      </span>
                                    ) : null}{' '}
                                    {mdhSitAloneYear !== undefined ? (
                                      <span>
                                        {mdhSitAloneYear}{' '}
                                        {mdhSitAloneYear === '1' ? 'year' : 'years'}
                                      </span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mdhAttractedSoundMonths !== undefined ||
                              mdhAttractedSoundYear !== undefined ? (
                                <li>
                                  <p>
                                    Show interest in or attraction to sound:{' '}
                                    {mdhAttractedSoundMonths !== undefined ? (
                                      <span>
                                        {mdhAttractedSoundMonths}{' '}
                                        {mdhAttractedSoundMonths === '1' ? 'month' : 'months'}
                                      </span>
                                    ) : null}{' '}
                                    {mdhAttractedSoundYear !== undefined ? (
                                      <span>
                                        {mdhAttractedSoundYear}{' '}
                                        {mdhAttractedSoundYear === '1' ? 'year' : 'years'}
                                      </span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mdhCrawlMonths !== undefined || mdhCrawlYear !== undefined ? (
                                <li>
                                  <p>
                                    Crawl:{' '}
                                    {mdhCrawlMonths !== undefined ? (
                                      <span>
                                        {mdhCrawlMonths}{' '}
                                        {mdhCrawlMonths === '1' ? 'month' : 'months'}
                                      </span>
                                    ) : null}{' '}
                                    {mdhCrawlYear !== undefined ? (
                                      <span>
                                        {mdhCrawlYear} {mdhCrawlYear === '1' ? 'year' : 'years'}
                                      </span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mdhUnderstandWordsMonths !== undefined ||
                              mdhUnderstandWordsYear !== undefined ? (
                                <li>
                                  <p>
                                    Understand first words:{' '}
                                    {mdhUnderstandWordsMonths !== undefined ? (
                                      <span>
                                        {mdhUnderstandWordsMonths}{' '}
                                        {mdhUnderstandWordsMonths === '1' ? 'month' : 'months'}
                                      </span>
                                    ) : null}{' '}
                                    {mdhUnderstandWordsYear !== undefined ? (
                                      <span>
                                        {mdhUnderstandWordsYear}{' '}
                                        {mdhUnderstandWordsYear === '1' ? 'year' : 'years'}
                                      </span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mdhStandAloneMonths !== undefined ||
                              mdhStandAloneYear !== undefined ? (
                                <li>
                                  <p>
                                    Stand alone:{' '}
                                    {mdhStandAloneMonths !== undefined ? (
                                      <span>
                                        {mdhStandAloneMonths}{' '}
                                        {mdhStandAloneMonths === '1' ? 'month' : 'months'}
                                      </span>
                                    ) : null}{' '}
                                    {mdhStandAloneYear !== undefined ? (
                                      <span>
                                        {mdhStandAloneYear}{' '}
                                        {mdhStandAloneYear === '1' ? 'year' : 'years'}
                                      </span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mdhSpeakFirstWordsMonths !== undefined ||
                              mdhSpeakFirstWordsYear !== undefined ? (
                                <li>
                                  <p>
                                    Speak first words:{' '}
                                    {mdhSpeakFirstWordsMonths !== undefined ? (
                                      <span>
                                        {mdhSpeakFirstWordsMonths}{' '}
                                        {mdhSpeakFirstWordsMonths === '1' ? 'month' : 'months'}
                                      </span>
                                    ) : null}{' '}
                                    {mdhSpeakFirstWordsYear !== undefined ? (
                                      <span>
                                        {mdhSpeakFirstWordsYear}{' '}
                                        {mdhSpeakFirstWordsYear === '1' ? 'year' : 'years'}
                                      </span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mdhWalkAloneMonths !== undefined ||
                              mdhWalkAloneYear !== undefined ? (
                                <li>
                                  <p>
                                    Walk alone:{' '}
                                    {mdhWalkAloneMonths !== undefined ? (
                                      <span>
                                        {mdhWalkAloneMonths}{' '}
                                        {mdhWalkAloneMonths === '1' ? 'month' : 'months'}
                                      </span>
                                    ) : null}{' '}
                                    {mdhWalkAloneYear !== undefined ? (
                                      <span>
                                        {mdhWalkAloneYear}{' '}
                                        {mdhWalkAloneYear === '1' ? 'year' : 'years'}
                                      </span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mdhSpeakSentencesMonths !== undefined ||
                              mdhSpeakSentencesYear !== undefined ? (
                                <li>
                                  <p>
                                    Speak in sentences:{' '}
                                    {mdhSpeakSentencesMonths !== undefined ? (
                                      <span>
                                        {mdhSpeakSentencesMonths}{' '}
                                        {mdhSpeakSentencesMonths === '1' ? 'month' : 'months'}
                                      </span>
                                    ) : null}{' '}
                                    {mdhSpeakSentencesYear !== undefined ? (
                                      <span>
                                        {mdhSpeakSentencesYear}{' '}
                                        {mdhSpeakSentencesYear === '1' ? 'year' : 'years'}
                                      </span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mdhWalkUpStairsMonths !== undefined ||
                              mdhWalkUpStairsYear !== undefined ? (
                                <li>
                                  <p>
                                    Walk up stairs:{' '}
                                    {mdhWalkUpStairsMonths !== undefined ? (
                                      <span>
                                        {mdhWalkUpStairsMonths}{' '}
                                        {mdhWalkUpStairsMonths === '1' ? 'month' : 'months'}
                                      </span>
                                    ) : null}{' '}
                                    {mdhWalkUpStairsYear !== undefined ? (
                                      <span>
                                        {mdhWalkUpStairsYear}{' '}
                                        {mdhWalkUpStairsYear === '1' ? 'year' : 'years'}
                                      </span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </section>
                ) : null}
                {wizardForm17Disabled !== true ? (
                  <section
                    className={
                      mdhBreastFed === undefined &&
                      mdhBreastFedWeaned === undefined &&
                      mdhBottleFed === undefined &&
                      mdhBottleFedWeaned === undefined &&
                      mdhToiletTrainedDay === undefined &&
                      mdhToiletTrainedNight === undefined &&
                      mdhBedWetting === undefined &&
                      mdhBedSoiling === undefined &&
                      mdhBedWettingMedicalReasons === undefined
                        ? 'pdf-t__empty'
                        : null
                    }
                  >
                    {mdhBreastFed !== undefined ||
                    mdhBreastFedWeaned !== undefined ||
                    mdhBottleFed !== undefined ||
                    mdhBottleFedWeaned !== undefined ||
                    mdhToiletTrainedDay !== undefined ||
                    mdhToiletTrainedNight !== undefined ||
                    mdhBedWetting !== undefined ||
                    mdhBedSoiling !== undefined ||
                    mdhBedWettingMedicalReasons !== undefined ? (
                      <h3>Early Years</h3>
                    ) : null}
                    <table cellPadding="0" cellSpacing="0">
                      <tr>
                        <td>
                          <div>
                            {mdhBreastFed !== undefined ? (
                              <p>
                                Was this child breast-fed? <span>{mdhBreastFed}</span>
                              </p>
                            ) : null}
                            {mdhBreastFedWeaned !== undefined ? (
                              <p>
                                When weaned? <span>{mdhBreastFedWeaned}</span>
                              </p>
                            ) : null}
                            {mdhBottleFed !== undefined ? (
                              <p>
                                Was this child bottle-fed? <span>{mdhBottleFed}</span>
                              </p>
                            ) : null}
                            {mdhBottleFedWeaned !== undefined ? (
                              <p>
                                When weaned? <span>{mdhBottleFedWeaned}</span>
                              </p>
                            ) : null}
                            {mdhToiletTrainedDay !== undefined ||
                            mdhToiletTrainedNight !== undefined ? (
                              <div>
                                <p>When was this child toilet trained?</p>
                                <ul>
                                  {mdhToiletTrainedDay !== undefined ? (
                                    <li>
                                      <p>
                                        Days: <span>{mdhToiletTrainedDay}</span>
                                      </p>
                                    </li>
                                  ) : null}
                                  {mdhToiletTrainedNight !== undefined ? (
                                    <li>
                                      <p>
                                        Nights: <span>{mdhToiletTrainedNight}</span>
                                      </p>
                                    </li>
                                  ) : null}
                                </ul>
                              </div>
                            ) : null}
                            {mdhBedWetting !== undefined ? (
                              <p>
                                Did bed-wetting occur after toilet training?{' '}
                                <span>{mdhBedWetting}</span>
                              </p>
                            ) : null}
                            {mdhBedWetting === 'Yes' ? (
                              <p>
                                If yes, until what age? <span>{mdhBedWettingStop}</span>
                              </p>
                            ) : null}
                            {mdhBedSoiling !== undefined ? (
                              <p>
                                Did bed-soiling occur? <span>{mdhBedSoiling}</span>
                              </p>
                            ) : null}
                            {mdhBedSoiling === 'Yes' ? (
                              <p>
                                If yes, until what age? <span>{mdhBedSoilingStop}</span>
                              </p>
                            ) : null}
                            {mdhBedWettingMedicalReasons !== undefined ? (
                              <p>
                                Were there medical reasons for bed-wetting or bed-soiling?{' '}
                                <span>{mdhBedWettingMedicalReasons}</span>
                              </p>
                            ) : null}
                            {mdhBedWettingMedicalReasons === 'Yes' ? (
                              <p>
                                If yes, please describe:{' '}
                                <span>{mdhBedWettingMedicalReasonsDescription}</span>
                              </p>
                            ) : null}
                          </div>
                        </td>
                      </tr>
                    </table>
                  </section>
                ) : null}
                {wizardForm18Disabled !== true ? (
                  <section
                    className={
                      mdhWalkingDifficulty === undefined &&
                      mdhUnclearSpeech === undefined &&
                      mdhFeedingProblem === undefined &&
                      mdhUnderweightProblem === undefined &&
                      mdhOverweightProblem === undefined &&
                      mdhColic === undefined &&
                      mdhSleepProblem === undefined &&
                      mdhEatingProblem === undefined &&
                      mdhLearningRideBike === undefined &&
                      mdhLearningSkip === undefined &&
                      mdhLearningThrowCatch === undefined
                        ? 'pdf-t__empty'
                        : null
                    }
                  >
                    {mdhWalkingDifficulty === true ||
                    mdhUnclearSpeech === true ||
                    mdhFeedingProblem === true ||
                    mdhUnderweightProblem === true ||
                    mdhOverweightProblem === true ||
                    mdhColic === true ||
                    mdhSleepProblem === true ||
                    mdhEatingProblem === true ||
                    mdhLearningRideBike === true ||
                    mdhLearningSkip === true ||
                    mdhLearningThrowCatch === true ? (
                      <h3>Developmental</h3>
                    ) : null}
                    <table cellPadding="0" cellSpacing="0">
                      <tr>
                        <td>
                          <div>
                            {mdhWalkingDifficulty === true ||
                            mdhUnclearSpeech === true ||
                            mdhFeedingProblem === true ||
                            mdhUnderweightProblem === true ||
                            mdhOverweightProblem === true ||
                            mdhColic === true ||
                            mdhSleepProblem === true ||
                            mdhEatingProblem === true ||
                            mdhLearningRideBike === true ||
                            mdhLearningSkip === true ||
                            mdhLearningThrowCatch === true ? (
                              <p>
                                {diName !== undefined ? diName : 'Client'} experienced the following
                                problems:
                              </p>
                            ) : null}
                            <ul>
                              {mdhWalkingDifficulty === true ? (
                                <li>
                                  <p>
                                    Walking difficulty
                                    {mdhWalkingDifficultyDescription !== undefined ? (
                                      <span>: {mdhWalkingDifficultyDescription}</span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mdhUnclearSpeech === true ? (
                                <li>
                                  <p>
                                    Unclear speech
                                    {mdhUnclearSpeechDescription !== undefined ? (
                                      <span>: {mdhUnclearSpeechDescription}</span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mdhFeedingProblem === true ? (
                                <li>
                                  <p>
                                    Feeding problem
                                    {mdhFeedingProblemDescription !== undefined ? (
                                      <span>: {mdhFeedingProblemDescription}</span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mdhUnderweightProblem === true ? (
                                <li>
                                  <p>
                                    Underweight problem
                                    {mdhUnderweightProblemDescription !== undefined ? (
                                      <span>: {mdhUnderweightProblemDescription}</span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mdhOverweightProblem === true ? (
                                <li>
                                  <p>
                                    Overweight problem
                                    {mdhOverweightProblemDescription !== undefined ? (
                                      <span>: {mdhOverweightProblemDescription}</span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mdhColic === true ? (
                                <li>
                                  <p>
                                    Colic
                                    {mdhColicDescription !== undefined ? (
                                      <span>: {mdhColicDescription}</span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mdhSleepProblem === true ? (
                                <li>
                                  <p>
                                    Sleep problem
                                    {mdhSleepProblemDescription !== undefined ? (
                                      <span>: {mdhSleepProblemDescription}</span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mdhEatingProblem === true ? (
                                <li>
                                  <p>
                                    Eating problem
                                    {mdhEatingProblemDescription !== undefined ? (
                                      <span>: {mdhEatingProblemDescription}</span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mdhLearningRideBike === true ? (
                                <li>
                                  <p>
                                    Difficulty learning to ride a bike
                                    {mdhLearningRideBikeDescription !== undefined ? (
                                      <span>: {mdhLearningRideBikeDescription}</span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mdhLearningSkip === true ? (
                                <li>
                                  <p>
                                    Difficulty learning how to skip
                                    {mdhLearningSkipDescription !== undefined ? (
                                      <span>: {mdhLearningSkipDescription}</span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mdhLearningThrowCatch === true ? (
                                <li>
                                  <p>
                                    Difficulty learning to throw or catch
                                    {mdhLearningThrowCatchDescription !== undefined ? (
                                      <span>: {mdhLearningThrowCatchDescription}</span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </section>
                ) : null}
                {wizardForm19Disabled !== true ? (
                  <section
                    className={
                      mdhMotorSkillsFirstFour === undefined &&
                      mdhTemperTantrum === undefined &&
                      mdhNoThriveFirstFour === undefined &&
                      mdhSeparationAnxiety === undefined &&
                      mdhExcessiveCrying === undefined &&
                      mdhChangeWritingHand === undefined
                        ? 'pdf-t__empty'
                        : null
                    }
                  >
                    <table cellPadding="0" cellSpacing="0">
                      <tr>
                        <td>
                          <div>
                            {mdhMotorSkillsFirstFour === true ||
                            mdhTemperTantrum === true ||
                            mdhNoThriveFirstFour === true ||
                            mdhSeparationAnxiety === true ||
                            mdhExcessiveCrying === true ||
                            mdhChangeWritingHand !== undefined ? (
                              <p>
                                {diName !== undefined ? diName : 'Client'} experienced the following
                                problems:
                              </p>
                            ) : null}
                            <ul>
                              {mdhMotorSkillsFirstFour === true ? (
                                <li>
                                  <p>
                                    Motor skills
                                    {mdhMotorSkillsFirstFourDescription !== undefined ? (
                                      <span>: {mdhMotorSkillsFirstFourDescription}</span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mdhTemperTantrum === true ? (
                                <li>
                                  <p>
                                    Temper tantrums
                                    {mdhTemperTantrumDescription !== undefined ? (
                                      <span>: {mdhTemperTantrumDescription}</span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mdhNoThriveFirstFour === true ? (
                                <li>
                                  <p>
                                    Failure to thrive
                                    {mdhNoThriveFirstFourDescription !== undefined ? (
                                      <span>: {mdhNoThriveFirstFourDescription}</span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mdhSeparationAnxiety === true ? (
                                <li>
                                  <p>
                                    Separating from parents
                                    {mdhSeparationAnxietyDescription !== undefined ? (
                                      <span>: {mdhSeparationAnxietyDescription}</span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mdhExcessiveCrying === true ? (
                                <li>
                                  <p>
                                    Excessive crying
                                    {mdhExcessiveCryingDescription !== undefined ? (
                                      <span>: {mdhExcessiveCryingDescription}</span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                            </ul>
                            {mdhChangeWritingHand !== undefined ? (
                              <p>
                                Has this child ever been forced to change writing hand?{' '}
                                <span>{mdhChangeWritingHand}</span>
                              </p>
                            ) : null}
                          </div>
                        </td>
                      </tr>
                    </table>
                  </section>
                ) : null}
                {wizardForm20Disabled !== true ? (
                  <section
                    className={
                      mhMeaselsMonths === undefined &&
                      mhMeaselsMonthsYear === undefined &&
                      mhRheumaticFeverMonths === undefined &&
                      mhRheumaticFeverYear === undefined &&
                      mhGermanMeaselsMonths === undefined &&
                      mhGermanMeaselsYear === undefined &&
                      mhDiptheriaMonths === undefined &&
                      mhDiptheriaYear === undefined &&
                      mhMumpsMonths === undefined &&
                      mhMumpsYear === undefined &&
                      mhUnderstandWordsMonths === undefined &&
                      mhUnderstandWordsYear === undefined &&
                      mdhMeningitisMonths === undefined &&
                      mdhMeningitisYear === undefined &&
                      mhChickenPoxMonth === undefined &&
                      mhChickenPoxYear === undefined &&
                      mhEncephalitisMonth === undefined &&
                      mhEncephalitisYear === undefined &&
                      mhTuberculosisMonth === undefined &&
                      mhAnemiaMonth === undefined &&
                      mhAnemiaYear === undefined &&
                      mhWhoopingCoughMonths === undefined &&
                      mhWhoopingCoughYear === undefined &&
                      mhFever104Months === undefined &&
                      mhFever104Year === undefined &&
                      mhScarletFeverMonths === undefined &&
                      mhScarletFeverYear === undefined &&
                      mhBrokenBonesMonths === undefined &&
                      mhBrokenBonesYear === undefined &&
                      mhConcussionMonths === undefined &&
                      mhConcussionYear === undefined &&
                      mhComaLossConsciousnessMonths === undefined &&
                      mhComaLossConsciousnessYear === undefined
                        ? 'pdf-t__empty'
                        : null
                    }
                  >
                    {mhMeaselsMonths !== undefined ||
                    mhMeaselsMonthsYear !== undefined ||
                    mhRheumaticFeverMonths !== undefined ||
                    mhRheumaticFeverYear !== undefined ||
                    mhGermanMeaselsMonths !== undefined ||
                    mhGermanMeaselsYear !== undefined ||
                    mhDiptheriaMonths !== undefined ||
                    mhDiptheriaYear !== undefined ||
                    mhMumpsMonths !== undefined ||
                    mhMumpsYear !== undefined ||
                    mhUnderstandWordsMonths !== undefined ||
                    mhUnderstandWordsYear !== undefined ||
                    mdhMeningitisMonths !== undefined ||
                    mdhMeningitisYear !== undefined ||
                    mhChickenPoxMonth !== undefined ||
                    mhChickenPoxYear !== undefined ||
                    mhEncephalitisMonth !== undefined ||
                    mhEncephalitisYear !== undefined ||
                    mhTuberculosisMonth !== undefined ||
                    mhAnemiaMonth !== undefined ||
                    mhAnemiaYear !== undefined ||
                    mhWhoopingCoughMonths !== undefined ||
                    mhWhoopingCoughYear !== undefined ||
                    mhFever104Months !== undefined ||
                    mhFever104Year !== undefined ||
                    mhScarletFeverMonths !== undefined ||
                    mhScarletFeverYear !== undefined ||
                    mhBrokenBonesMonths !== undefined ||
                    mhBrokenBonesYear !== undefined ||
                    mhConcussionMonths !== undefined ||
                    mhConcussionYear !== undefined ||
                    mhComaLossConsciousnessMonths !== undefined ||
                    mhComaLossConsciousnessYear !== undefined ? (
                      <h2>Medical history</h2>
                    ) : null}
                    <table cellPadding="0" cellSpacing="0">
                      <tr>
                        <td>
                          <div>
                            {mhMeaselsMonths !== undefined ||
                            mhMeaselsMonthsYear !== undefined ||
                            mhRheumaticFeverMonths !== undefined ||
                            mhRheumaticFeverYear !== undefined ||
                            mhGermanMeaselsMonths !== undefined ||
                            mhGermanMeaselsYear !== undefined ||
                            mhDiptheriaMonths !== undefined ||
                            mhDiptheriaYear !== undefined ||
                            mhMumpsMonths !== undefined ||
                            mhMumpsYear !== undefined ||
                            mhUnderstandWordsMonths !== undefined ||
                            mhUnderstandWordsYear !== undefined ||
                            mdhMeningitisMonths !== undefined ||
                            mdhMeningitisYear !== undefined ||
                            mhChickenPoxMonth !== undefined ||
                            mhChickenPoxYear !== undefined ||
                            mhEncephalitisMonth !== undefined ||
                            mhEncephalitisYear !== undefined ||
                            mhTuberculosisMonth !== undefined ||
                            mhAnemiaMonth !== undefined ||
                            mhAnemiaYear !== undefined ||
                            mhWhoopingCoughMonths !== undefined ||
                            mhWhoopingCoughYear !== undefined ||
                            mhFever104Months !== undefined ||
                            mhFever104Year !== undefined ||
                            mhScarletFeverMonths !== undefined ||
                            mhScarletFeverYear !== undefined ||
                            mhBrokenBonesMonths !== undefined ||
                            mhBrokenBonesYear !== undefined ||
                            mhConcussionMonths !== undefined ||
                            mhConcussionYear !== undefined ||
                            mhComaLossConsciousnessMonths !== undefined ||
                            mhComaLossConsciousnessYear !== undefined ? (
                              <p>
                                {diName !== undefined ? diName : 'Client'} has the following
                                illnesses:
                              </p>
                            ) : null}
                            <ul>
                              {mhMeaselsMonths !== undefined ||
                              mhMeaselsMonthsYear !== undefined ? (
                                <li>
                                  <p>
                                    Measels:{' '}
                                    {mhMeaselsMonths !== undefined ? (
                                      <span>
                                        {mhMeaselsMonths}{' '}
                                        {mhMeaselsMonths === '1' ? 'month' : 'months'}
                                      </span>
                                    ) : null}{' '}
                                    {mhMeaselsMonths !== undefined ? (
                                      <span>
                                        {mhMeaselsMonths}{' '}
                                        {mhMeaselsMonths === '1' ? 'year' : 'years'}
                                      </span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mhRheumaticFeverMonths !== undefined ||
                              mhRheumaticFeverYear !== undefined ? (
                                <li>
                                  <p>
                                    Rheumatic fever:{' '}
                                    {mhRheumaticFeverMonths !== undefined ? (
                                      <span>
                                        {mhRheumaticFeverMonths}{' '}
                                        {mhRheumaticFeverMonths === '1' ? 'month' : 'months'}
                                      </span>
                                    ) : null}{' '}
                                    {mhRheumaticFeverYear !== undefined ? (
                                      <span>
                                        {mhRheumaticFeverYear}{' '}
                                        {mhRheumaticFeverYear === '1' ? 'year' : 'years'}
                                      </span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mhGermanMeaselsMonths !== undefined ||
                              mhGermanMeaselsYear !== undefined ? (
                                <li>
                                  <p>
                                    German measels:{' '}
                                    {mhGermanMeaselsMonths !== undefined ? (
                                      <span>
                                        {mhGermanMeaselsMonths}{' '}
                                        {mhGermanMeaselsMonths === '1' ? 'month' : 'months'}
                                      </span>
                                    ) : null}{' '}
                                    {mhGermanMeaselsYear !== undefined ? (
                                      <span>
                                        {mhGermanMeaselsYear}{' '}
                                        {mhGermanMeaselsYear === '1' ? 'year' : 'years'}
                                      </span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mhDiptheriaMonths !== undefined || mhDiptheriaYear !== undefined ? (
                                <li>
                                  <p>
                                    Diptheria:{' '}
                                    {mhDiptheriaMonths !== undefined ? (
                                      <span>
                                        {mhDiptheriaMonths}{' '}
                                        {mhDiptheriaMonths === '1' ? 'month' : 'months'}
                                      </span>
                                    ) : null}{' '}
                                    {mhDiptheriaYear !== undefined ? (
                                      <span>
                                        {mhDiptheriaYear}{' '}
                                        {mhDiptheriaYear === '1' ? 'year' : 'years'}
                                      </span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : (
                                ''
                              )}
                              {mhMumpsMonths !== undefined || mhMumpsYear !== undefined ? (
                                <li>
                                  <p>
                                    Mumps:{' '}
                                    {mhMumpsMonths !== undefined ? (
                                      <span>
                                        {mhMumpsMonths} {mhMumpsMonths === '1' ? 'month' : 'months'}
                                      </span>
                                    ) : null}{' '}
                                    {mhMumpsYear !== undefined ? (
                                      <span>
                                        {mhMumpsYear} {mhMumpsYear === '1' ? 'year' : 'years'}
                                      </span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mhUnderstandWordsMonths !== undefined ||
                              mhUnderstandWordsYear !== undefined ? (
                                <li>
                                  <p>
                                    Understand first words:{' '}
                                    {mhUnderstandWordsMonths !== undefined ? (
                                      <span>
                                        {mhUnderstandWordsMonths}{' '}
                                        {mhUnderstandWordsMonths === '1' ? 'month' : 'months'}
                                      </span>
                                    ) : null}{' '}
                                    {mhUnderstandWordsYear !== undefined ? (
                                      <span>
                                        {mhUnderstandWordsYear}{' '}
                                        {mhUnderstandWordsYear === '1' ? 'year' : 'years'}
                                      </span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mdhMeningitisMonths !== undefined ||
                              mdhMeningitisYear !== undefined ? (
                                <li>
                                  <p>
                                    Meningitis:{' '}
                                    {mdhMeningitisMonths !== undefined ? (
                                      <span>
                                        {mdhMeningitisMonths}{' '}
                                        {mdhMeningitisMonths === '1' ? 'month' : 'months'}
                                      </span>
                                    ) : null}{' '}
                                    {mdhMeningitisYear !== undefined ? (
                                      <span>
                                        {mdhMeningitisYear}{' '}
                                        {mdhMeningitisYear === '1' ? 'year' : 'years'}
                                      </span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mhChickenPoxMonth !== undefined || mhChickenPoxYear !== undefined ? (
                                <li>
                                  <p>
                                    Chicken pox:{' '}
                                    {mhChickenPoxMonth !== undefined ? (
                                      <span>
                                        {mhChickenPoxMonth}{' '}
                                        {mhChickenPoxMonth === '1' ? 'month' : 'months'}
                                      </span>
                                    ) : null}{' '}
                                    {mhChickenPoxYear !== undefined ? (
                                      <span>
                                        {mhChickenPoxYear}{' '}
                                        {mhChickenPoxYear === '1' ? 'year' : 'years'}
                                      </span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mhEncephalitisMonth !== undefined ||
                              mhEncephalitisYear !== undefined ? (
                                <li>
                                  <p>
                                    Encephalitis:{' '}
                                    {mhEncephalitisMonth !== undefined ? (
                                      <span>
                                        {mhEncephalitisMonth}{' '}
                                        {mhEncephalitisMonth === '1' ? 'month' : 'months'}
                                      </span>
                                    ) : null}{' '}
                                    {mhEncephalitisYear !== undefined ? (
                                      <span>
                                        {mhEncephalitisYear}{' '}
                                        {mhEncephalitisYear === '1' ? 'year' : 'years'}
                                      </span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mhTuberculosisMonth !== undefined ||
                              mhTuberculosisYear !== undefined ? (
                                <li>
                                  <p>
                                    Tuberculosis:{' '}
                                    {mhTuberculosisMonth !== undefined ? (
                                      <span>
                                        {mhTuberculosisMonth}{' '}
                                        {mhTuberculosisMonth === '1' ? 'month' : 'months'}
                                      </span>
                                    ) : null}{' '}
                                    {mhTuberculosisYear !== undefined ? (
                                      <span>
                                        {mhTuberculosisYear}{' '}
                                        {mhTuberculosisYear === '1' ? 'year' : 'years'}
                                      </span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mhAnemiaMonth !== undefined || mhAnemiaYear !== undefined ? (
                                <li>
                                  <p>
                                    Anemia:{' '}
                                    {mhAnemiaMonth !== undefined ? (
                                      <span>
                                        {mhAnemiaMonth} {mhAnemiaMonth === '1' ? 'month' : 'months'}
                                      </span>
                                    ) : null}{' '}
                                    {mhAnemiaYear !== undefined ? (
                                      <span>
                                        {mhAnemiaYear} {mhAnemiaYear === '1' ? 'year' : 'years'}
                                      </span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mhWhoopingCoughMonths !== undefined ||
                              mhWhoopingCoughYear !== undefined ? (
                                <li>
                                  <p>
                                    Whooping cough:{' '}
                                    {mhWhoopingCoughMonths !== undefined ? (
                                      <span>
                                        {mhWhoopingCoughMonths}{' '}
                                        {mhWhoopingCoughMonths === '1' ? 'month' : 'months'}
                                      </span>
                                    ) : null}{' '}
                                    {mhWhoopingCoughYear !== undefined ? (
                                      <span>
                                        {mhWhoopingCoughYear}{' '}
                                        {mhWhoopingCoughYear === '1' ? 'year' : 'years'}
                                      </span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mhFever104Months !== undefined || mhFever104Year !== undefined ? (
                                <li>
                                  <p>
                                    Fever above 104°:{' '}
                                    {mhFever104Months !== undefined ? (
                                      <span>
                                        {mhFever104Months}{' '}
                                        {mhFever104Months === '1' ? 'month' : 'months'}
                                      </span>
                                    ) : null}{' '}
                                    {mhFever104Year !== undefined ? (
                                      <span>
                                        {mhFever104Year} {mhFever104Year === '1' ? 'year' : 'years'}
                                      </span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mhScarletFeverMonths !== undefined ||
                              mhScarletFeverYear !== undefined ? (
                                <li>
                                  <p>
                                    Scarlet fever:{' '}
                                    {mhScarletFeverMonths !== undefined ? (
                                      <span>
                                        {mhScarletFeverMonths}{' '}
                                        {mhScarletFeverMonths === '1' ? 'month' : 'months'}
                                      </span>
                                    ) : null}{' '}
                                    {mhScarletFeverYear !== undefined ? (
                                      <span>
                                        {mhScarletFeverYear}{' '}
                                        {mhScarletFeverYear === '1' ? 'year' : 'years'}
                                      </span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mhBrokenBonesMonths !== undefined ||
                              mhBrokenBonesYear !== undefined ? (
                                <li>
                                  <p>
                                    Broken bones:{' '}
                                    {mhBrokenBonesMonths !== undefined ? (
                                      <span>
                                        {mhBrokenBonesMonths}{' '}
                                        {mhBrokenBonesMonths === '1' ? 'month' : 'months'}
                                      </span>
                                    ) : null}{' '}
                                    {mhBrokenBonesYear !== undefined ? (
                                      <span>
                                        {mhBrokenBonesYear}{' '}
                                        {mhBrokenBonesYear === '1' ? 'year' : 'years'}
                                      </span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mhConcussionMonths !== undefined ||
                              mhConcussionYear !== undefined ? (
                                <li>
                                  <p>
                                    Concussion:{' '}
                                    {mhConcussionMonths !== undefined ? (
                                      <span>
                                        {mhConcussionMonths}{' '}
                                        {mhConcussionMonths === '1' ? 'month' : 'months'}
                                      </span>
                                    ) : null}{' '}
                                    {mhConcussionYear !== undefined ? (
                                      <span>
                                        {mhConcussionYear}{' '}
                                        {mhConcussionYear === '1' ? 'year' : 'years'}
                                      </span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mhComaLossConsciousnessMonths !== undefined ||
                              mhComaLossConsciousnessYear !== undefined ? (
                                <li>
                                  <p>
                                    Coma or loss of consiousness:{' '}
                                    {mhComaLossConsciousnessMonths !== undefined ? (
                                      <span>
                                        {mhComaLossConsciousnessMonths}{' '}
                                        {mhComaLossConsciousnessMonths === '1' ? 'month' : 'months'}
                                      </span>
                                    ) : null}{' '}
                                    {mhComaLossConsciousnessYear !== undefined ? (
                                      <span>
                                        {mhComaLossConsciousnessYear}{' '}
                                        {mhComaLossConsciousnessYear === '1' ? 'year' : 'years'}
                                      </span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </section>
                ) : null}
                {wizardForm21Disabled !== true ? (
                  <section
                    className={
                      mdColds === undefined &&
                      mdChronicCough === undefined &&
                      mdAsthma === undefined &&
                      mdHayFever === undefined &&
                      mdSinusCondition === undefined &&
                      mdPhysicalExertion === undefined &&
                      mdActivityLimits === undefined &&
                      mdHeartMurmur === undefined &&
                      mdVomiting === undefined &&
                      mdDiarrhea === undefined &&
                      mdConstipation === undefined &&
                      mdStomachPain === undefined &&
                      mdUrination === undefined &&
                      mdPainUrinating === undefined &&
                      mdExessiveUrination === undefined &&
                      mdUrineOdor === undefined &&
                      mdMusclePain === undefined &&
                      mdClumsyWalk === undefined &&
                      mdPoorPosture === undefined &&
                      mdOtherMuscleProblems === undefined &&
                      mdFrequentRashes === undefined &&
                      mdBruises === undefined &&
                      mdSores === undefined &&
                      mdAcne === undefined &&
                      mdItchy === undefined &&
                      mdSeizures === undefined &&
                      mdSpeechDefects === undefined &&
                      mdAccidentProne === undefined &&
                      mdNailBiter === undefined &&
                      mdSucksThumb === undefined &&
                      mdGrindsTeeth === undefined &&
                      mdTwitches === undefined &&
                      mdBangsHead === undefined &&
                      mdRocks === undefined &&
                      mdBowelMovement === undefined &&
                      mdNeurologicalMeds === undefined &&
                      mdNeurologicalTranquilizer === undefined &&
                      mdNeurologicalAdhdMeds === undefined &&
                      mdhAllergiesMedicine === undefined &&
                      mdhAllergiesFood === undefined &&
                      mdhAllergiesOther === undefined &&
                      mdhSpeechStuttering === undefined &&
                      mdhSpeechUnclear === undefined &&
                      mdhSpeechOther === undefined &&
                      mdhSpeechExamDate === undefined &&
                      mdhHearingEarInfection === undefined &&
                      mdhHearingProblems === undefined &&
                      mdhHearingTubes === undefined &&
                      mdhHearingExamDate === undefined &&
                      mdhVisionProblems === undefined &&
                      mdhGlasses === undefined &&
                      mdhVisionProblemsDescription === undefined &&
                      mdhGlassesDescription === undefined &&
                      mdhVisionExamDate === undefined
                        ? 'pdf-t__empty'
                        : null
                    }
                  >
                    {mdColds !== undefined ||
                    mdChronicCough !== undefined ||
                    mdAsthma !== undefined ||
                    mdHayFever !== undefined ||
                    mdSinusCondition !== undefined ||
                    mdPhysicalExertion !== undefined ||
                    mdActivityLimits !== undefined ||
                    mdHeartMurmur !== undefined ||
                    mdVomiting !== undefined ||
                    mdDiarrhea !== undefined ||
                    mdConstipation !== undefined ||
                    mdStomachPain !== undefined ||
                    mdUrination !== undefined ||
                    mdPainUrinating !== undefined ||
                    mdExessiveUrination !== undefined ||
                    mdUrineOdor !== undefined ||
                    mdMusclePain !== undefined ||
                    mdClumsyWalk !== undefined ||
                    mdPoorPosture !== undefined ||
                    mdOtherMuscleProblems !== undefined ||
                    mdFrequentRashes !== undefined ||
                    mdBruises !== undefined ||
                    mdSores !== undefined ||
                    mdAcne !== undefined ||
                    mdItchy !== undefined ||
                    mdSeizures !== undefined ||
                    mdSpeechDefects !== undefined ||
                    mdAccidentProne !== undefined ||
                    mdNailBiter !== undefined ||
                    mdSucksThumb !== undefined ||
                    mdGrindsTeeth !== undefined ||
                    mdTwitches !== undefined ||
                    mdBangsHead !== undefined ||
                    mdRocks !== undefined ||
                    mdBowelMovement !== undefined ||
                    mdNeurologicalMeds !== undefined ||
                    mdNeurologicalTranquilizer !== undefined ||
                    mdNeurologicalAdhdMeds !== undefined ||
                    mdhAllergiesMedicine !== undefined ||
                    mdhAllergiesFood !== undefined ||
                    mdhAllergiesOther !== undefined ||
                    mdhSpeechStuttering !== undefined ||
                    mdhSpeechUnclear !== undefined ||
                    mdhSpeechOther !== undefined ||
                    mdhSpeechExamDate !== undefined ||
                    mdhHearingEarInfection !== undefined ||
                    mdhHearingProblems !== undefined ||
                    mdhHearingTubes !== undefined ||
                    mdhHearingExamDate !== undefined ||
                    mdhVisionProblems !== undefined ||
                    mdhGlasses !== undefined ||
                    mdhVisionProblemsDescription !== undefined ||
                    mdhGlassesDescription !== undefined ||
                    mdhVisionExamDate !== undefined ? (
                      <h2>Medical development</h2>
                    ) : null}
                    {mdColds !== undefined ||
                    mdChronicCough !== undefined ||
                    mdAsthma !== undefined ||
                    mdHayFever !== undefined ||
                    mdSinusCondition !== undefined ? (
                      <h3>Respiratory</h3>
                    ) : null}
                    <table cellPadding="0" cellSpacing="0">
                      <tr>
                        <td>
                          <div>
                            <ul>
                              {mdColds !== undefined ? (
                                <li>
                                  <p>
                                    Frequent colds: <span>{mdColds}</span>
                                  </p>
                                </li>
                              ) : null}
                              {mdChronicCough !== undefined ? (
                                <li>
                                  <p>
                                    Chronic cough: <span>{mdChronicCough}</span>
                                  </p>
                                </li>
                              ) : null}
                              {mdAsthma !== undefined ? (
                                <li>
                                  <p>
                                    Asthma: <span>{mdAsthma}</span>
                                  </p>
                                </li>
                              ) : null}
                              {mdHayFever !== undefined ? (
                                <li>
                                  <p>
                                    Hay fever: <span>{mdHayFever}</span>
                                  </p>
                                </li>
                              ) : null}
                              {mdSinusCondition !== undefined ? (
                                <li>
                                  <p>
                                    Sinus condition: <span>{mdSinusCondition}</span>
                                  </p>
                                </li>
                              ) : null}
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </section>
                ) : null}
                {wizardForm22Disabled !== true ? (
                  <section
                    className={
                      mdPhysicalExertion === undefined &&
                      mdActivityLimits === undefined &&
                      mdHeartMurmur === undefined
                        ? 'pdf-t__empty'
                        : null
                    }
                  >
                    {mdPhysicalExertion !== undefined ||
                    mdActivityLimits !== undefined ||
                    mdHeartMurmur !== undefined ? (
                      <h3>Cardiovascular</h3>
                    ) : null}
                    <table cellPadding="0" cellSpacing="0">
                      <tr>
                        <td>
                          <div>
                            <ul>
                              {mdPhysicalExertion !== undefined ? (
                                <li>
                                  <p>
                                    Shortness of breath or dizziness with physical exertion:{' '}
                                    <span>{mdPhysicalExertion}</span>
                                  </p>
                                </li>
                              ) : null}
                              {mdActivityLimits !== undefined ? (
                                <li>
                                  <p>
                                    Activity limitation due to heart condition:{' '}
                                    <span>{mdActivityLimits}</span>
                                  </p>
                                </li>
                              ) : null}
                              {mdHeartMurmur !== undefined ? (
                                <li>
                                  <p>
                                    Heart murmur: <span>{mdHeartMurmur}</span>
                                  </p>
                                </li>
                              ) : null}
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </section>
                ) : null}
                {wizardForm23Disabled !== true ? (
                  <section
                    className={
                      mdVomiting === undefined &&
                      mdDiarrhea === undefined &&
                      mdConstipation === undefined &&
                      mdStomachPain === undefined
                        ? 'pdf-t__empty'
                        : null
                    }
                  >
                    {mdVomiting !== undefined ||
                    mdDiarrhea !== undefined ||
                    mdConstipation !== undefined ||
                    mdStomachPain !== undefined ? (
                      <h3>Gastrointestinal</h3>
                    ) : null}
                    <table cellPadding="0" cellSpacing="0">
                      <tr>
                        <td>
                          <div>
                            <ul>
                              {mdVomiting !== undefined ? (
                                <li>
                                  <p>
                                    Excessive vomitting: <span>{mdVomiting}</span>
                                  </p>
                                </li>
                              ) : null}
                              {mdDiarrhea !== undefined ? (
                                <li>
                                  <p>
                                    Frequent diarrhea: <span>{mdDiarrhea}</span>
                                  </p>
                                </li>
                              ) : null}
                              {mdConstipation !== undefined ? (
                                <li>
                                  <p>
                                    Constipation: <span>{mdConstipation}</span>
                                  </p>
                                </li>
                              ) : null}
                              {mdStomachPain !== undefined ? (
                                <li>
                                  <p>
                                    Stomach pain: <span>{mdStomachPain}</span>
                                  </p>
                                </li>
                              ) : null}
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </section>
                ) : null}
                {wizardForm24Disabled !== true ? (
                  <section
                    className={
                      mdUrination === undefined &&
                      mdPainUrinating === undefined &&
                      mdExessiveUrination === undefined &&
                      mdUrineOdor === undefined
                        ? 'pdf-t__empty'
                        : null
                    }
                  >
                    {mdUrination !== undefined ||
                    mdPainUrinating !== undefined ||
                    mdExessiveUrination !== undefined ||
                    mdUrineOdor !== undefined ? (
                      <h3>Genitourinary</h3>
                    ) : null}
                    <table cellPadding="0" cellSpacing="0">
                      <tr>
                        <td>
                          <div>
                            <ul>
                              {mdUrination !== undefined ? (
                                <li>
                                  <p>
                                    Urination in pants: <span>{mdUrination}</span>
                                  </p>
                                </li>
                              ) : null}
                              {mdPainUrinating !== undefined ? (
                                <li>
                                  <p>
                                    Pain while urinating: <span>{mdPainUrinating}</span>
                                  </p>
                                </li>
                              ) : null}
                              {mdExessiveUrination !== undefined ? (
                                <li>
                                  <p>
                                    Excessive urination: <span>{mdExessiveUrination}</span>
                                  </p>
                                </li>
                              ) : null}
                              {mdUrineOdor !== undefined ? (
                                <li>
                                  <p>
                                    Strong odor to urine: <span>{mdUrineOdor}</span>
                                  </p>
                                </li>
                              ) : null}
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </section>
                ) : null}
                {wizardForm25Disabled !== true ? (
                  <section
                    className={
                      mdMusclePain === undefined &&
                      mdClumsyWalk === undefined &&
                      mdPoorPosture === undefined &&
                      mdOtherMuscleProblems === undefined
                        ? 'pdf-t__empty'
                        : null
                    }
                  >
                    {mdMusclePain !== undefined ||
                    mdClumsyWalk !== undefined ||
                    mdPoorPosture !== undefined ||
                    mdOtherMuscleProblems !== undefined ? (
                      <h3>Musculoskeletal</h3>
                    ) : null}
                    <table cellPadding="0" cellSpacing="0">
                      <tr>
                        <td>
                          <div>
                            <ul>
                              {mdMusclePain !== undefined ? (
                                <li>
                                  <p>
                                    Muscle pain: <span>{mdMusclePain}</span>
                                  </p>
                                </li>
                              ) : null}
                              {mdClumsyWalk !== undefined ? (
                                <li>
                                  <p>
                                    Clumsy walk: <span>{mdClumsyWalk}</span>
                                  </p>
                                </li>
                              ) : null}
                              {mdPoorPosture !== undefined ? (
                                <li>
                                  <p>
                                    Poor posture: <span>{mdPoorPosture}</span>
                                  </p>
                                </li>
                              ) : null}
                              {mdOtherMuscleProblems !== undefined ? (
                                <li>
                                  <p>
                                    Other muscle problems: <span>{mdOtherMuscleProblems}</span>
                                  </p>
                                </li>
                              ) : null}
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </section>
                ) : null}
                {wizardForm26Disabled !== true ? (
                  <section
                    className={
                      mdFrequentRashes === undefined &&
                      mdBruises === undefined &&
                      mdSores === undefined &&
                      mdAcne === undefined &&
                      mdItchy === undefined
                        ? 'pdf-t__empty'
                        : null
                    }
                  >
                    {mdFrequentRashes !== undefined ||
                    mdBruises !== undefined ||
                    mdSores !== undefined ||
                    mdAcne !== undefined ||
                    mdItchy !== undefined ? (
                      <h3>Skin</h3>
                    ) : null}
                    <table cellPadding="0" cellSpacing="0">
                      <tr>
                        <td>
                          <div>
                            <ul>
                              {mdFrequentRashes !== undefined ? (
                                <li>
                                  <p>
                                    Frequent rashes: <span>{mdFrequentRashes}</span>
                                  </p>
                                </li>
                              ) : null}
                              {mdBruises !== undefined ? (
                                <li>
                                  <p>
                                    Bruises easily: <span>{mdBruises}</span>
                                  </p>
                                </li>
                              ) : null}
                              {mdSores !== undefined ? (
                                <li>
                                  <p>
                                    Sores: <span>{mdSores}</span>
                                  </p>
                                </li>
                              ) : null}
                              {mdAcne !== undefined ? (
                                <li>
                                  <p>
                                    Severe acne: <span>{mdAcne}</span>
                                  </p>
                                </li>
                              ) : null}
                              {mdItchy !== undefined ? (
                                <li>
                                  <p>
                                    Itchy skin: <span>{mdItchy}</span>
                                  </p>
                                </li>
                              ) : null}
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </section>
                ) : null}
                {wizardForm27Disabled !== true ? (
                  <section
                    className={
                      mdSeizures === undefined &&
                      mdSpeechDefects === undefined &&
                      mdAccidentProne === undefined &&
                      mdNailBiter === undefined &&
                      mdSucksThumb === undefined &&
                      mdGrindsTeeth === undefined &&
                      mdTwitches === undefined &&
                      mdBangsHead === undefined &&
                      mdRocks === undefined &&
                      mdBowelMovement === undefined &&
                      mdNeurologicalMeds === undefined &&
                      mdNeurologicalTranquilizer === undefined &&
                      mdNeurologicalAdhdMeds === undefined
                        ? 'pdf-t__empty'
                        : null
                    }
                  >
                    {mdSeizures !== undefined ||
                    mdSpeechDefects !== undefined ||
                    mdAccidentProne !== undefined ||
                    mdNailBiter !== undefined ||
                    mdSucksThumb !== undefined ||
                    mdGrindsTeeth !== undefined ||
                    mdTwitches !== undefined ||
                    mdBangsHead !== undefined ||
                    mdRocks !== undefined ||
                    mdBowelMovement !== undefined ||
                    mdNeurologicalMeds !== undefined ||
                    mdNeurologicalTranquilizer !== undefined ||
                    mdNeurologicalAdhdMeds !== undefined ? (
                      <h3>Neurological</h3>
                    ) : null}
                    <table cellPadding="0" cellSpacing="0">
                      <tr>
                        <td>
                          <div>
                            <ul>
                              {mdSeizures !== undefined ? (
                                <li>
                                  <p>
                                    Seizures/convulsions: <span>{mdSeizures}</span>
                                  </p>
                                </li>
                              ) : null}
                              {mdSpeechDefects !== undefined ? (
                                <li>
                                  <p>
                                    Speech defects: <span>{mdSpeechDefects}</span>
                                  </p>
                                </li>
                              ) : null}
                              {mdAccidentProne !== undefined ? (
                                <li>
                                  <p>
                                    Accident prone: <span>{mdAccidentProne}</span>
                                  </p>
                                </li>
                              ) : null}
                              {mdNailBiter !== undefined ? (
                                <li>
                                  <p>
                                    Nail biter: <span>{mdNailBiter}</span>
                                  </p>
                                </li>
                              ) : null}
                              {mdSucksThumb !== undefined ? (
                                <li>
                                  <p>
                                    Sucks thumb: <span>{mdSucksThumb}</span>
                                  </p>
                                </li>
                              ) : null}
                              {mdGrindsTeeth !== undefined ? (
                                <li>
                                  <p>
                                    Grinds teeth: <span>{mdGrindsTeeth}</span>
                                  </p>
                                </li>
                              ) : null}
                              {mdTwitches !== undefined ? (
                                <li>
                                  <p>
                                    Has tics/twitches: <span>{mdTwitches}</span>
                                  </p>
                                </li>
                              ) : null}
                              {mdBangsHead !== undefined ? (
                                <li>
                                  <p>
                                    Bangs head: <span>{mdBangsHead}</span>
                                  </p>
                                </li>
                              ) : null}
                              {mdRocks !== undefined ? (
                                <li>
                                  <p>
                                    Rocks back and forth: <span>{mdRocks}</span>
                                  </p>
                                </li>
                              ) : null}
                              {mdBowelMovement !== undefined ? (
                                <li>
                                  <p>
                                    Bowel movements in pants/bed: <span>{mdBowelMovement}</span>
                                  </p>
                                </li>
                              ) : null}
                            </ul>
                            {mdNeurologicalMeds === 'Yes' ? (
                              <p>
                                Has this child ever taken medication to increase activity?{' '}
                                <span>{mdNeurologicalMeds}</span>
                              </p>
                            ) : null}
                            {mdNeurologicalMeds === 'Yes' ? (
                              <div>
                                <p>
                                  If yes, when? <span>{mdNeurologicalMedsDate}</span>
                                </p>
                                <p>
                                  What medication? <span>{mdNeurologicalMedsKind}</span>
                                </p>
                              </div>
                            ) : null}
                            {mdNeurologicalTranquilizer === 'Yes' ? (
                              <p>
                                Has this child ever taken tranquilizer medication?{' '}
                                <span>{mdNeurologicalTranquilizer}</span>
                              </p>
                            ) : null}
                            {mdNeurologicalTranquilizer === 'Yes' ? (
                              <div>
                                <p>
                                  If yes, when? <span>{mdNeurologicalTranquilizerDate}</span>
                                </p>
                                <p>
                                  What medication? <span>{mdNeurologicalTranquilizerKind}</span>
                                </p>
                              </div>
                            ) : null}
                            {mdNeurologicalAdhdMeds === 'Yes' ? (
                              <p>
                                Has this child ever taken medication for ADD, ADHD, or similar
                                problems? <span>{mdNeurologicalAdhdMeds}</span>
                              </p>
                            ) : null}
                            {mdNeurologicalAdhdMeds === 'Yes' ? (
                              <div>
                                <p>
                                  If yes, when? <span>{mdNeurologicalAdhdMedsDate}</span>
                                </p>
                                <p>
                                  What medication? <span>{mdNeurologicalAdhdMedsKind}</span>
                                </p>
                              </div>
                            ) : null}
                          </div>
                        </td>
                      </tr>
                    </table>
                  </section>
                ) : null}
                {wizardForm28Disabled !== true ? (
                  <section
                    className={
                      mdhAllergiesMedicine === undefined &&
                      mdhAllergiesFood === undefined &&
                      mdhAllergiesOther === undefined
                        ? 'pdf-t__empty'
                        : null
                    }
                  >
                    {mdhAllergiesMedicine !== undefined ||
                    mdhAllergiesFood !== undefined ||
                    mdhAllergiesOther !== undefined ? (
                      <h3>Allergies</h3>
                    ) : null}
                    <table cellPadding="0" cellSpacing="0">
                      <tr>
                        <td>
                          <div>
                            <ul>
                              {mdhAllergiesMedicine === true ? (
                                <li>
                                  <p>
                                    Allergies to medicine
                                    {mdhAllergiesMedicineDescription !== undefined ? (
                                      <span>: {mdhAllergiesMedicineDescription}</span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mdhAllergiesFood === true ? (
                                <li>
                                  <p>
                                    Allergies to food
                                    {mdhAllergiesFoodDescription !== undefined ? (
                                      <span>: {mdhAllergiesFoodDescription}</span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mdhAllergiesOther === true ? (
                                <li>
                                  <p>
                                    Other allergies
                                    {mdhAllergiesOtherDescription !== undefined ? (
                                      <span>: {mdhAllergiesOtherDescription}</span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </section>
                ) : null}
                {wizardForm29Disabled !== true ? (
                  <section
                    className={
                      mdhSpeechStuttering === undefined &&
                      mdhSpeechUnclear === undefined &&
                      mdhSpeechOther === undefined &&
                      mdhSpeechExamDate === undefined
                        ? 'pdf-t__empty'
                        : null
                    }
                  >
                    {mdhSpeechStuttering !== undefined ||
                    mdhSpeechUnclear !== undefined ||
                    mdhSpeechOther !== undefined ||
                    mdhSpeechExamDate !== undefined ? (
                      <h3>Speech</h3>
                    ) : null}
                    <table cellPadding="0" cellSpacing="0">
                      <tr>
                        <td>
                          <div>
                            <ul>
                              {mdhSpeechStuttering === true ? (
                                <li>
                                  <p>
                                    Stuttering
                                    {mdhSpeechStutteringDescription !== undefined ? (
                                      <span>: {mdhSpeechStutteringDescription}</span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mdhSpeechUnclear === true ? (
                                <li>
                                  <p>
                                    Unclear speech
                                    {mdhSpeechUnclearDescription !== undefined ? (
                                      <span>: {mdhSpeechUnclearDescription}</span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mdhSpeechOther === true ? (
                                <li>
                                  <p>
                                    Other speech problems
                                    {mdhSpeechOtherDescription !== undefined ? (
                                      <span>: {mdhSpeechOtherDescription}</span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                            </ul>
                            {mdhSpeechExamDate !== undefined ? (
                              <p>
                                Date of most recent speech exam: <span>{mdhSpeechExamDate}</span>
                              </p>
                            ) : null}
                          </div>
                        </td>
                      </tr>
                    </table>
                  </section>
                ) : null}
                {wizardForm30Disabled !== true ? (
                  <section
                    className={
                      mdhHearingEarInfection === undefined &&
                      mdhHearingProblems === undefined &&
                      mdhHearingTubes === undefined &&
                      mdhHearingExamDate === undefined
                        ? 'pdf-t__empty'
                        : null
                    }
                  >
                    {mdhHearingEarInfection !== undefined ||
                    mdhHearingProblems !== undefined ||
                    mdhHearingTubes !== undefined ||
                    mdhHearingExamDate !== undefined ? (
                      <h3>Hearing</h3>
                    ) : null}
                    <table cellPadding="0" cellSpacing="0">
                      <tr>
                        <td>
                          <div>
                            <ul>
                              {mdhHearingEarInfection === true ? (
                                <li>
                                  <p>
                                    Ear infections
                                    {mdhHearingEarInfectionDescription !== undefined ? (
                                      <span>: {mdhHearingEarInfectionDescription}</span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mdhHearingProblems === true ? (
                                <li>
                                  <p>
                                    Hearing problems
                                    {mdhHearingProblemsDescription !== undefined ? (
                                      <span>: {mdhHearingProblemsDescription}</span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mdhHearingTubes === true ? (
                                <li>
                                  <p>
                                    Ear tubes
                                    {mdhHearingTubesDescription !== undefined ? (
                                      <span>: {mdhHearingTubesDescription}</span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                            </ul>
                            {mdhHearingExamDate !== undefined ? (
                              <p>
                                Date of most recent hearing exam: <span>{mdhHearingExamDate}</span>
                              </p>
                            ) : null}
                          </div>
                        </td>
                      </tr>
                    </table>
                  </section>
                ) : null}
                {wizardForm31Disabled !== true ? (
                  <section
                    className={
                      mdhVisionProblems === undefined &&
                      mdhGlasses === undefined &&
                      mdhVisionProblemsDescription === undefined &&
                      mdhGlassesDescription === undefined &&
                      mdhVisionExamDate === undefined
                        ? 'pdf-t__empty'
                        : null
                    }
                  >
                    {mdhVisionProblems !== undefined ||
                    mdhGlasses !== undefined ||
                    mdhVisionProblemsDescription !== undefined ||
                    mdhGlassesDescription !== undefined ||
                    mdhVisionExamDate !== undefined ? (
                      <h3>Vision</h3>
                    ) : null}
                    <table cellPadding="0" cellSpacing="0">
                      <tr>
                        <td>
                          <div>
                            <ul>
                              {mdhVisionProblems === true ? (
                                <li>
                                  <p>
                                    Vision problems
                                    {mdhVisionProblemsDescription !== undefined ? (
                                      <span>: {mdhVisionProblemsDescription}</span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                              {mdhGlasses === true ? (
                                <li>
                                  <p>
                                    Wears glasses or contacts
                                    {mdhGlassesDescription !== undefined ? (
                                      <span>: {mdhGlassesDescription}</span>
                                    ) : null}
                                  </p>
                                </li>
                              ) : null}
                            </ul>
                            {mdhVisionExamDate !== undefined ? (
                              <p>
                                Date of most recent vision exam: <span>{mdhVisionExamDate}</span>
                              </p>
                            ) : null}
                          </div>
                        </td>
                      </tr>
                    </table>
                  </section>
                ) : null}
                {wizardForm32Disabled !== true &&
                wizardForm33Disabled !== true &&
                wizardForm34Disabled !== true ? (
                  <section
                    className={
                      mcDrName === undefined &&
                      mcDrPhone === undefined &&
                      mcDrVisitCount === undefined &&
                      mcDrLastVisit === undefined &&
                      medicationListGroup === undefined &&
                      mcSexualAbuse === undefined &&
                      counselingGroup === undefined &&
                      nuerologicalGroup === undefined &&
                      psychologyGroup === undefined
                        ? 'pdf-t__empty'
                        : null
                    }
                  >
                    {mcDrName !== undefined ||
                    mcDrPhone !== undefined ||
                    mcDrVisitCount !== undefined ||
                    mcDrLastVisit !== undefined ||
                    medicationListGroup !== undefined ||
                    mcSexualAbuse !== undefined ||
                    counselingGroup !== undefined ||
                    nuerologicalGroup !== undefined ||
                    psychologyGroup !== undefined ? (
                      <h3>Medical Care</h3>
                    ) : null}
                    <table cellPadding="0" cellSpacing="0">
                      <tr>
                        <td>
                          <div>
                            {wizardForm32Disabled === true ? null : (
                              <div>
                                {mcDrName !== undefined ? (
                                  <p>
                                    What is the primary physicians name? <span>{mcDrName}</span>
                                  </p>
                                ) : null}
                                {mcDrPhone !== undefined ? (
                                  <p>
                                    What's the doctor's phone? <span>{mcDrPhone}</span>
                                  </p>
                                ) : null}
                                {mcDrVisitCount !== undefined ? (
                                  <p>
                                    How often do they visit? <span>{mcDrVisitCount}</span>
                                  </p>
                                ) : null}
                                {mcDrLastVisit !== undefined ? (
                                  <p>
                                    Date of last visit? <span>{mcDrLastVisit}</span>
                                  </p>
                                ) : null}
                                {mcDrLastVisit === undefined &&
                                mcDrLastVisitMonths !== undefined ? (
                                  <p>
                                    How long since last visit? <span>{mcDrLastVisitMonths}</span>
                                  </p>
                                ) : null}
                                {medicationListGroup === undefined ||
                                medicationListGroup.length < 1 ? null : (
                                  <p>List any medication this child is currently taking:</p>
                                )}
                                <ul>
                                  {medicationListGroup !== undefined
                                    ? medicationListGroup.map((med) => (
                                        <li>
                                          <p>
                                            <span>{med.mcMedicationName},</span>
                                            <span> {med.mcMedicationReason}</span>
                                          </p>
                                        </li>
                                      ))
                                    : null}
                                </ul>
                                {mcSexualAbuse !== undefined ? (
                                  <p>
                                    Has this child ever been sexually abused?{' '}
                                    <span>{mcSexualAbuse}</span>
                                  </p>
                                ) : null}
                              </div>
                            )}
                            {counselingGroup === undefined ||
                            counselingGroup.length < 1 ||
                            wizardForm33Disabled === true ? null : (
                              <div>
                                <p>Psychology counseling or therapy this child has had:</p>
                                <ul>
                                  {counselingGroup !== undefined
                                    ? counselingGroup.map((session) => (
                                        <li>
                                          <p>
                                            <span>{session.mcCounselingName},</span>
                                            <span> {session.mcCounselingAddress},</span>
                                            <span> {session.mcCounselingPhone},</span>
                                            <span> {session.mcCounselingReason},</span>
                                            <span> {session.mcCounselingDate}</span>
                                          </p>
                                        </li>
                                      ))
                                    : null}
                                </ul>
                              </div>
                            )}
                            {nuerologicalGroup === undefined ||
                            nuerologicalGroup.length < 1 ||
                            wizardForm34Disabled === true ? null : (
                              <div>
                                <p>Neurological exam(s) this child has had:</p>
                                <ul>
                                  {nuerologicalGroup !== undefined
                                    ? nuerologicalGroup.map((session) => (
                                        <li>
                                          <p>
                                            <span>{session.mcNuerologicalName},</span>
                                            <span> {session.mcNuerologicalAddress},</span>
                                            <span> {session.mcNuerologicalDate},</span>
                                            <span> {session.mcNuerologicalReason}</span>
                                          </p>
                                        </li>
                                      ))
                                    : null}
                                </ul>
                              </div>
                            )}
                            {psychologyGroup === undefined ||
                            psychologyGroup.length < 1 ||
                            wizardForm35Disabled === true ? null : (
                              <div>
                                <p>Psychiatric exam(s) this child has had:</p>
                                <ul>
                                  {psychologyGroup !== undefined
                                    ? psychologyGroup.map((session) => (
                                        <li>
                                          <p>
                                            <span>{session.mcPsychologyExamName},</span>
                                            <span> {session.mcPsychologyExamCity},</span>
                                            <span> {session.mcPsychologyExamDate},</span>
                                            <span> {session.mcPsychologyExamReason}</span>
                                          </p>
                                        </li>
                                      ))
                                    : null}
                                </ul>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    </table>
                  </section>
                ) : null}
                {wizardForm36Disabled !== true ? (
                  <section
                    className={
                      fhDrugAbuse === undefined &&
                      fhAlzheimers === undefined &&
                      fhBehaviorDisorder === undefined &&
                      fhBirthDefect === undefined &&
                      fhCancer === undefined &&
                      fhCerbralPalsy === undefined &&
                      fhCysticFibrosis === undefined &&
                      fhDiabetes === undefined &&
                      fhEmotionalDisturbance === undefined &&
                      fhFoodAllergies === undefined &&
                      fhHeartDisease === undefined &&
                      fhHemophilia === undefined &&
                      fhHighBloodPressure === undefined &&
                      fhHuntingtonChorea === undefined &&
                      fhIntellectualDisability === undefined &&
                      fhKidneyDisease === undefined &&
                      fhMentalIllness === undefined &&
                      fhMigraines === undefined &&
                      fhMultipleSclerosis === undefined &&
                      fhMuscularDystrophy === undefined &&
                      fhNervousnes === undefined &&
                      fhOtherLearningDisability === undefined &&
                      fhParkinsons === undefined &&
                      fhPhysicalHandicap === undefined &&
                      fhReadingProblem === undefined &&
                      fhSeizures === undefined &&
                      fhSevereHeadInjury === undefined &&
                      fhSickleCell === undefined &&
                      fhSpeechProblem === undefined &&
                      fhStroke === undefined &&
                      fhTaySachs === undefined &&
                      fhTourettes === undefined &&
                      fhTuberculosis === undefined &&
                      fhOther === undefined &&
                      fhFathersHealth === undefined &&
                      fhMothersHealth === undefined &&
                      specialEdGroup === undefined
                        ? 'pdf-t__empty'
                        : null
                    }
                  >
                    {fhDrugAbuse !== undefined ||
                    fhAlzheimers !== undefined ||
                    fhBehaviorDisorder !== undefined ||
                    fhBirthDefect !== undefined ||
                    fhCancer !== undefined ||
                    fhCerbralPalsy !== undefined ||
                    fhCysticFibrosis !== undefined ||
                    fhDiabetes !== undefined ||
                    fhEmotionalDisturbance !== undefined ||
                    fhFoodAllergies !== undefined ||
                    fhHeartDisease !== undefined ||
                    fhHemophilia !== undefined ||
                    fhHighBloodPressure !== undefined ||
                    fhHuntingtonChorea !== undefined ||
                    fhIntellectualDisability !== undefined ||
                    fhKidneyDisease !== undefined ||
                    fhMentalIllness !== undefined ||
                    fhMigraines !== undefined ||
                    fhMultipleSclerosis !== undefined ||
                    fhMuscularDystrophy !== undefined ||
                    fhNervousnes !== undefined ||
                    fhOtherLearningDisability !== undefined ||
                    fhParkinsons !== undefined ||
                    fhPhysicalHandicap !== undefined ||
                    fhReadingProblem !== undefined ||
                    fhSeizures !== undefined ||
                    fhSevereHeadInjury !== undefined ||
                    fhSickleCell !== undefined ||
                    fhSpeechProblem !== undefined ||
                    fhStroke !== undefined ||
                    fhTaySachs !== undefined ||
                    fhTourettes !== undefined ||
                    fhTuberculosis !== undefined ||
                    fhOther !== undefined ||
                    fhFathersHealth !== undefined ||
                    fhMothersHealth !== undefined ||
                    specialEdGroup !== undefined ? (
                      <h2>Family History</h2>
                    ) : null}
                    <table cellPadding="0" cellSpacing="0">
                      <tr>
                        <td>
                          <div>
                            {fhDrugAbuse !== undefined ||
                            fhAlzheimers !== undefined ||
                            fhBehaviorDisorder !== undefined ||
                            fhBirthDefect !== undefined ||
                            fhCancer !== undefined ||
                            fhCerbralPalsy !== undefined ||
                            fhCysticFibrosis !== undefined ||
                            fhDiabetes !== undefined ||
                            fhEmotionalDisturbance !== undefined ||
                            fhFoodAllergies !== undefined ||
                            fhHeartDisease !== undefined ||
                            fhHemophilia !== undefined ||
                            fhHighBloodPressure !== undefined ||
                            fhHuntingtonChorea !== undefined ||
                            fhIntellectualDisability !== undefined ||
                            fhKidneyDisease !== undefined ||
                            fhMentalIllness !== undefined ||
                            fhMigraines !== undefined ||
                            fhMultipleSclerosis !== undefined ||
                            fhMuscularDystrophy !== undefined ||
                            fhNervousnes !== undefined ||
                            fhOtherLearningDisability !== undefined ||
                            fhParkinsons !== undefined ||
                            fhPhysicalHandicap !== undefined ||
                            fhReadingProblem !== undefined ||
                            fhSeizures !== undefined ||
                            fhSevereHeadInjury !== undefined ||
                            fhSickleCell !== undefined ||
                            fhSpeechProblem !== undefined ||
                            fhStroke !== undefined ||
                            fhTaySachs !== undefined ||
                            fhTourettes !== undefined ||
                            fhTuberculosis !== undefined ||
                            fhOther !== undefined ||
                            fhFathersHealth !== undefined ||
                            fhMothersHealth !== undefined ||
                            specialEdGroup !== undefined ? (
                              <p>Family members had the following:</p>
                            ) : null}
                            <ul>
                              {fhDrugAbuse === true ? <li>Alcohol/Drug abuse</li> : null}
                              {fhAlzheimers === true ? <li>Alzheimers Disease</li> : null}
                              {fhBehaviorDisorder === true ? <li>Behavior disorder</li> : null}
                              {fhBirthDefect === true ? <li>Birth defect</li> : null}
                              {fhCancer === true ? <li>Cancer</li> : null}
                              {fhCerbralPalsy === true ? <li>Cerbral Palsy</li> : null}
                              {fhCysticFibrosis === true ? <li>Cystic Fibrosis</li> : null}
                              {fhDiabetes === true ? <li>Diabetes</li> : null}
                              {fhEmotionalDisturbance === true ? (
                                <li>Emotional Disturbance</li>
                              ) : null}
                              {fhFoodAllergies === true ? <li>Food Allergies</li> : null}
                              {fhHeartDisease === true ? <li>Heart Disease</li> : null}
                              {fhHemophilia === true ? <li>Hemophilia</li> : null}
                              {fhHighBloodPressure === true ? <li>High Blood Pressure</li> : null}
                              {fhHuntingtonChorea === true ? <li>Huntington Chorea</li> : null}
                              {fhIntellectualDisability === true ? (
                                <li>Intellectual Disability</li>
                              ) : null}
                              {fhKidneyDisease === true ? <li>Kidney Disease</li> : null}
                              {fhMentalIllness === true ? <li>Mental Illness</li> : null}
                              {fhMigraines === true ? <li>Migraines</li> : null}
                              {fhMultipleSclerosis === true ? <li>Multiple Sclerosis</li> : null}
                              {fhMuscularDystrophy === true ? <li>Muscular Dystrophy</li> : null}
                              {fhNervousnes === true ? <li>Nervousnes</li> : null}
                              {fhOtherLearningDisability === true ? (
                                <li>Other Learning Disability</li>
                              ) : null}
                              {fhParkinsons === true ? <li>Parkinsons</li> : null}
                              {fhPhysicalHandicap === true ? <li>Physical Handicap</li> : null}
                              {fhReadingProblem === true ? <li>Reading Problem</li> : null}
                              {fhSeizures === true ? <li>Seizures</li> : null}
                              {fhSevereHeadInjury === true ? <li>Severe Head Injury</li> : null}
                              {fhSickleCell === true ? <li>Sickle Cell</li> : null}
                              {fhSpeechProblem === true ? <li>Speech Problem</li> : null}
                              {fhStroke === true ? <li>Stroke</li> : null}
                              {fhTaySachs === true ? <li>Tay Sachs</li> : null}
                              {fhTourettes === true ? <li>Tourettes</li> : null}
                              {fhTuberculosis === true ? <li>Tuberculosis</li> : null}
                              {fhOther === true ? <li>Other</li> : null}
                            </ul>
                            {fhFathersHealth !== undefined ? (
                              <p>
                                Describe the father’s present health: <span>{fhFathersHealth}</span>
                              </p>
                            ) : null}
                            {fhMothersHealth !== undefined ? (
                              <p>
                                Describe the mother’s present health: <span>{fhMothersHealth}</span>
                              </p>
                            ) : null}
                            {specialEdGroup !== undefined && specialEdGroup.length > 0 ? (
                              <div>
                                <p>Has anyone in the family ever been in special education?</p>
                                <ul>
                                  {specialEdGroup.map((person) => (
                                    <li>
                                      <p>
                                        <span>{person.mcSpecialEdName},</span>
                                        <span> {person.mcSpecialEdClass}</span>
                                      </p>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ) : null}
                          </div>
                        </td>
                      </tr>
                    </table>
                  </section>
                ) : null}
                {wizardForm37Disabled !== true ? (
                  <section
                    className={
                      fRelatingProblems === undefined &&
                      fRelatingProblemsDesc === undefined &&
                      fFight === undefined &&
                      fFightDesc === undefined &&
                      fYoungerFriends === undefined &&
                      fYoungerFriendsDesc === undefined &&
                      fMakingFriends === undefined &&
                      fMakingFriendsDesc === undefined &&
                      fAlone === undefined &&
                      fAloneDesc === undefined &&
                      fNeighbhoodFriends === undefined &&
                      fNeighbhoodFriendsDesc === undefined &&
                      fRolePeerGroupGames === undefined &&
                      fSmokeCigarettes === undefined &&
                      fChewTobacco === undefined &&
                      fInhale === undefined &&
                      fAlcholol === undefined &&
                      fDrugs === undefined
                        ? 'pdf-t__empty'
                        : null
                    }
                  >
                    {fRelatingProblems !== undefined ||
                    fRelatingProblemsDesc !== undefined ||
                    fFight !== undefined ||
                    fFightDesc !== undefined ||
                    fYoungerFriends !== undefined ||
                    fYoungerFriendsDesc !== undefined ||
                    fMakingFriends !== undefined ||
                    fMakingFriendsDesc !== undefined ||
                    fAlone !== undefined ||
                    fAloneDesc !== undefined ||
                    fNeighbhoodFriends !== undefined ||
                    fNeighbhoodFriendsDesc !== undefined ||
                    fRolePeerGroupGames !== undefined ||
                    fSmokeCigarettes !== undefined ||
                    fChewTobacco !== undefined ||
                    fInhale !== undefined ||
                    fAlcholol !== undefined ||
                    fDrugs !== undefined ? (
                      <div>
                        <h2>Friendships</h2>
                        <table cellPadding="0" cellSpacing="0">
                          <tr>
                            <td>
                              <div>
                                {fRelatingProblems !== undefined ||
                                fRelatingProblemsDesc !== undefined ? (
                                  <p>
                                    <em>
                                      Does this child have problems relating to or playing with
                                      children?{' '}
                                    </em>
                                    {fRelatingProblems === 'Yes' ? (
                                      <span>Yes. {fRelatingProblemsDesc}</span>
                                    ) : (
                                      <span>No</span>
                                    )}
                                  </p>
                                ) : null}
                                {fFight !== undefined || fFightDesc !== undefined ? (
                                  <p>
                                    <em>Does this child fight frequently with playmates? </em>
                                    {fFight === 'Yes' ? (
                                      <span>Yes. {fFightDesc}</span>
                                    ) : (
                                      <span>No</span>
                                    )}
                                  </p>
                                ) : null}
                                {fYoungerFriends !== undefined ||
                                fYoungerFriendsDesc !== undefined ? (
                                  <p>
                                    <em>Does this child prefer playing with younger children? </em>
                                    {fYoungerFriends === 'Yes' ? (
                                      <span>Yes. {fYoungerFriendsDesc}</span>
                                    ) : (
                                      <span>No</span>
                                    )}
                                  </p>
                                ) : null}
                                {fMakingFriends !== undefined ||
                                fMakingFriendsDesc !== undefined ? (
                                  <p>
                                    <em>Does this child have difficulty making friends? </em>
                                    {fMakingFriends === 'Yes' ? (
                                      <span>Yes. {fMakingFriendsDesc}</span>
                                    ) : (
                                      <span>No</span>
                                    )}
                                  </p>
                                ) : null}
                                {fAlone !== undefined || fAloneDesc !== undefined ? (
                                  <p>
                                    <em>Does this child prefer to play alone? </em>
                                    {fAlone === 'Yes' ? (
                                      <span>Yes. {fAloneDesc}</span>
                                    ) : (
                                      <span>No</span>
                                    )}
                                  </p>
                                ) : null}
                                {fNeighbhoodFriends !== undefined ||
                                fNeighbhoodFriendsDesc !== undefined ? (
                                  <p>
                                    <em>
                                      Are there children in the neighborhood with whom this child
                                      could play with?{' '}
                                    </em>
                                    {fNeighbhoodFriends === 'Yes' ? (
                                      <span>Yes. {fNeighbhoodFriendsDesc}</span>
                                    ) : (
                                      <span>No</span>
                                    )}
                                  </p>
                                ) : null}
                                {fRolePeerGroupGames !== undefined ? (
                                  <p>
                                    <em>What role does this child take in peer group games?</em>{' '}
                                    <span>{fRolePeerGroupGames}</span>
                                  </p>
                                ) : null}
                                {fSmokeCigarettes === true ||
                                fChewTobacco === true ||
                                fInhale === true ||
                                fAlcholol === true ||
                                fDrugs === true ? (
                                  <div>
                                    <p>
                                      <em>Does this child’s friends do any of the following:</em>
                                    </p>
                                    <ul>
                                      {fSmokeCigarettes !== undefined ? (
                                        <li>
                                          {fSmokeCigarettes === true ? (
                                            <p>
                                              <em>Smoke cigarettes? </em>
                                              <span>Yes</span>
                                            </p>
                                          ) : (
                                            <p>
                                              <em>Smoke cigarettes? </em>
                                              <span>No</span>
                                            </p>
                                          )}
                                        </li>
                                      ) : null}
                                      {fChewTobacco !== undefined ? (
                                        <li>
                                          {fChewTobacco === true ? (
                                            <p>
                                              <em>Chew tobacco? </em>
                                              <span>Yes</span>
                                            </p>
                                          ) : (
                                            <p>
                                              <em>Chew tobacco? </em>
                                              <span>No</span>
                                            </p>
                                          )}
                                        </li>
                                      ) : null}
                                      {fInhale !== undefined ? (
                                        <li>
                                          {fInhale === true ? (
                                            <p>
                                              <em>Inhale toxic substances (e.g., paint)? </em>
                                              <span>Yes</span>
                                            </p>
                                          ) : (
                                            <p>
                                              <em>Inhale toxic substances (e.g., paint)? </em>
                                              <span>No</span>
                                            </p>
                                          )}
                                        </li>
                                      ) : null}
                                      {fAlcholol !== undefined ? (
                                        <li>
                                          {fAlcholol === true ? (
                                            <p>
                                              <em>Drink beer, wine, or liquor? </em>
                                              <span>Yes</span>
                                            </p>
                                          ) : (
                                            <p>
                                              <em>Drink beer, wine, or liquor? </em>
                                              <span>No</span>
                                            </p>
                                          )}
                                        </li>
                                      ) : null}
                                      {fDrugs !== undefined ? (
                                        <li>
                                          {fDrugs === true ? (
                                            <p>
                                              <em>Use drugs illegally (e.g., marijuana)? </em>
                                              <span>Yes</span>
                                            </p>
                                          ) : (
                                            <p>
                                              <em>Use drugs illegally (e.g., marijuana)? </em>
                                              <span>No</span>
                                            </p>
                                          )}
                                        </li>
                                      ) : null}
                                    </ul>
                                  </div>
                                ) : null}
                              </div>
                            </td>
                          </tr>
                        </table>
                      </div>
                    ) : null}
                  </section>
                ) : null}
                {wizardForm38Disabled !== true ? (
                  <section
                    className={
                      riActivitesSports === undefined &&
                      riActivitesHobbies === undefined &&
                      riActivitesOther === undefined
                        ? 'pdf-t__empty'
                        : null
                    }
                  >
                    {riActivitesSports !== undefined ||
                    riActivitesHobbies !== undefined ||
                    riActivitesOther !== undefined ? (
                      <div>
                        <h2>Recreation &amp; Interests</h2>
                        <div>
                          {riActivitesSports !== undefined ? (
                            <p>
                              <em>What sport activities does this child enjoy?</em>
                              <br />
                              <span>{riActivitesSports}</span>
                            </p>
                          ) : null}
                          {riActivitesHobbies !== undefined ? (
                            <p>
                              <em>What hobbies does this child enjoy?</em>
                              <br />
                              <span>{riActivitesHobbies}</span>
                            </p>
                          ) : null}
                          {riActivitesOther !== undefined ? (
                            <p>
                              <em>What other activities does this child enjoy?</em>
                              <br />
                              <span>{riActivitesOther}</span>
                            </p>
                          ) : null}
                        </div>
                      </div>
                    ) : null}
                  </section>
                ) : null}
                {wizardForm39Disabled !== true ? (
                  <section
                    className={
                      btOverstimulated === undefined &&
                      btAttentionSpan === undefined &&
                      btSelfControl === undefined &&
                      btUnhappy === undefined &&
                      btAffectionless === undefined &&
                      btHidesFeelings === undefined &&
                      btOverEngergetic === undefined &&
                      btImpulsive === undefined &&
                      btOverreactsProblems === undefined &&
                      btShy === undefined &&
                      btParentalAttention === undefined &&
                      btCannotCalm === undefined
                        ? 'pdf-t__empty'
                        : null
                    }
                  >
                    {btOverstimulated === true ||
                    btAttentionSpan === true ||
                    btSelfControl === true ||
                    btUnhappy === true ||
                    btAffectionless === true ||
                    btHidesFeelings === true ||
                    btOverEngergetic === true ||
                    btImpulsive === true ||
                    btOverreactsProblems === true ||
                    btShy === true ||
                    btParentalAttention === true ||
                    btCannotCalm === true ? (
                      <div>
                        <h2>Behavior &amp; Treatment</h2>
                        <p>
                          <em>
                            {diName !== undefined ? <i>{diName}</i> : 'The Client'} exhibits the
                            following:
                          </em>
                        </p>
                        <ul>
                          {btOverstimulated === true ? (
                            <li>Is easily overstimulated in play</li>
                          ) : null}
                          {btAttentionSpan === true ? <li>Has a short attention span</li> : null}
                          {btSelfControl === true ? <li>Lacks selfControl</li> : null}
                          {btUnhappy === true ? <li>Seems unhappy most of the time</li> : null}
                          {btAffectionless === true ? <li>Withholds affection</li> : null}
                          {btHidesFeelings === true ? <li>Hides feelings</li> : null}
                          {btOverEngergetic === true ? <li>Seems over energetic in play</li> : null}
                          {btImpulsive === true ? <li>Seems impulsive</li> : null}
                          {btOverreactsProblems === true ? (
                            <li>Overreacts in the face of problems</li>
                          ) : null}
                          {btShy === true ? <li>Uncomfortable meeting new people</li> : null}
                          {btParentalAttention === true ? (
                            <li>Requires a lot of parental attention</li>
                          ) : null}
                          {btCannotCalm === true ? <li>Cannot calm down</li> : null}
                        </ul>
                        <div>
                          {btFears !== undefined ? (
                            <p>
                              <em>
                                What are {diName !== undefined ? <i>{diName}'s</i> : "the Client's"}{' '}
                                fears?
                              </em>
                              <br />
                              <span>{btFears}</span>
                            </p>
                          ) : null}
                          {btAngry !== undefined ? (
                            <p>
                              <em>
                                What makes {diName !== undefined ? <i>{diName}</i> : 'the Client'}{' '}
                                angry?
                              </em>
                              <br />
                              <span>{btAngry}</span>
                            </p>
                          ) : null}
                        </div>
                      </div>
                    ) : null}
                  </section>
                ) : null}
                {wizardForm40Disabled !== true ? (
                  <section
                    className={
                      ehDaycare === undefined &&
                      ehDaycareAge === undefined &&
                      ehDaycareTime === undefined &&
                      ehDaycareDays === undefined &&
                      ehKindergarten === undefined &&
                      ehKindergartenProblems === undefined
                        ? 'pdf-t__empty'
                        : null
                    }
                  >
                    {ehDaycare !== undefined ||
                    ehDaycareAge !== undefined ||
                    ehDaycareTime !== undefined ||
                    ehDaycareDays !== undefined ||
                    ehKindergarten !== undefined ||
                    ehKindergartenProblems !== undefined ? (
                      <div>
                        <h2>Educational History</h2>
                        <h3>PRESCHOOL &amp; DAYCARE</h3>
                        {ehDaycare !== undefined ? (
                          <p>
                            <em>Does or did this child attend preschool/daycare? </em>
                            {ehDaycare === 'Yes' ? <span>Yes</span> : <span>No</span>}
                          </p>
                        ) : null}
                        {ehDaycare === 'Yes' ? (
                          <ul>
                            {ehDaycareAge !== undefined ? (
                              <li>
                                <p>
                                  <em>Age:</em> <span>{ehDaycareAge}</span>
                                </p>
                              </li>
                            ) : null}
                            {ehDaycareTime !== undefined ? (
                              <li>
                                <p>
                                  <em>Hours per week:</em> <span>{ehDaycareTime}</span>
                                </p>
                              </li>
                            ) : null}
                            {ehDaycareDays !== undefined ? (
                              <li>
                                <p>
                                  <em>Days per week:</em> <span>{ehDaycareDays}</span>
                                </p>
                              </li>
                            ) : null}
                            {ehDaycareProblems !== undefined ? (
                              <li>
                                <p>
                                  <em>Problems:</em> <span>{ehDaycareProblems}</span>
                                </p>
                              </li>
                            ) : null}
                          </ul>
                        ) : null}
                        {ehKindergarten !== undefined ? (
                          <p>
                            <em>Does or did this child attend kindergarten? </em>
                            {ehKindergarten === 'Yes' ? <span>Yes</span> : <span>No</span>}
                          </p>
                        ) : null}
                        {ehKindergarten === 'Yes' ? (
                          <p>
                            <em>Any problems in kindergarten?</em>
                            <span>
                              <br />
                              {ehKindergartenProblems}
                            </span>
                          </p>
                        ) : null}
                      </div>
                    ) : null}
                  </section>
                ) : null}
                {wizardForm41Disabled !== true ? (
                  <section
                    className={
                      ehChangedSchools === undefined &&
                      ehChangedSchoolsDesc === undefined &&
                      ehRepeatGrade === undefined &&
                      ehGradeRepeatDesc === undefined &&
                      ehGradeSkip === undefined &&
                      ehGradeSkipDesc === undefined &&
                      ehDifficultyReading === undefined &&
                      ehDifficultyReadingDesc === undefined &&
                      ehDifficultyMath === undefined &&
                      ehDifficultyMathDesc === undefined &&
                      ehSpecialEd === undefined &&
                      ehSpecialEdCurrent === undefined &&
                      ehTypeSpecialEdClass === undefined &&
                      ehTypeSpecialEdHours === undefined &&
                      ehDislikesSchool === undefined &&
                      ehAbsent === undefined &&
                      ehAbsentDesc === undefined &&
                      ehGraduateHsDesc === undefined &&
                      ehTeacherConcerns === undefined &&
                      ehTeacherConcernsDesc === undefined
                        ? 'pdf-t__empty'
                        : null
                    }
                  >
                    {ehChangedSchools !== undefined ||
                    ehChangedSchoolsDesc !== undefined ||
                    ehRepeatGrade !== undefined ||
                    ehGradeRepeatDesc !== undefined ||
                    ehGradeSkip !== undefined ||
                    ehGradeSkipDesc !== undefined ||
                    ehDifficultyReading !== undefined ||
                    ehDifficultyReadingDesc !== undefined ||
                    ehDifficultyMath !== undefined ||
                    ehDifficultyMathDesc !== undefined ||
                    ehSpecialEd !== undefined ||
                    ehSpecialEdCurrent !== undefined ||
                    ehTypeSpecialEdClass !== undefined ||
                    ehTypeSpecialEdHours !== undefined ||
                    ehDislikesSchool !== undefined ||
                    ehAbsent !== undefined ||
                    ehAbsentDesc !== undefined ||
                    ehGraduateHsDesc !== undefined ||
                    ehTeacherConcerns !== undefined ||
                    ehTeacherConcernsDesc !== undefined ? (
                      <h3>ELEMENTARY/HIGH SCHOOL</h3>
                    ) : null}
                    {ehChangedSchools !== undefined ? (
                      <p>
                        <em>
                          Changed schools for reasons other than normal academic progression?
                          <br />
                        </em>
                        {ehChangedSchools === 'Yes' ? (
                          <span>Yes. {ehChangedSchoolsDesc}</span>
                        ) : (
                          <span>No</span>
                        )}
                      </p>
                    ) : null}
                    {ehRepeatGrade !== undefined ? (
                      <p>
                        <em>
                          Has been retained a grade in school?
                          <br />
                        </em>
                        {ehRepeatGrade === 'Yes' ? (
                          <span>Yes. {ehGradeRepeatDesc}</span>
                        ) : (
                          <span>No</span>
                        )}
                      </p>
                    ) : null}
                    {ehGradeSkip !== undefined ? (
                      <p>
                        <em>
                          Has skipped a grade in school?
                          <br />
                        </em>
                        {ehGradeSkip === 'Yes' ? (
                          <span>Yes. {ehGradeSkipDesc}</span>
                        ) : (
                          <span>No</span>
                        )}
                      </p>
                    ) : null}
                    {ehDifficultyReading !== undefined ? (
                      <p>
                        <em>
                          Does this child have difficulty reading?
                          <br />
                        </em>
                        {ehDifficultyReading === 'Yes' ? (
                          <span>Yes. {ehDifficultyReadingDesc}</span>
                        ) : (
                          <span>No</span>
                        )}
                      </p>
                    ) : null}
                    {ehDifficultyMath !== undefined ? (
                      <p>
                        <em>
                          Does this child difficulty with math?
                          <br />
                        </em>
                        {ehDifficultyMath === 'Yes' ? (
                          <span>Yes. {ehDifficultyMathDesc}</span>
                        ) : (
                          <span>No</span>
                        )}
                      </p>
                    ) : null}
                    {ehPoorGrades !== undefined ? (
                      <p>
                        <em>
                          Gets poor grades?
                          <br />
                        </em>
                        {ehPoorGrades === 'Yes' ? (
                          <span>Yes. {ehPoorGradesDesc}</span>
                        ) : (
                          <span>No</span>
                        )}
                      </p>
                    ) : null}
                    {ehSpecialEd !== undefined ? (
                      <p>
                        <em>
                          Has been tested for special education?
                          <br />
                        </em>
                        {ehSpecialEd === 'Yes' ? (
                          <span>Yes. {ehSpecialEdDesc}</span>
                        ) : (
                          <span>No</span>
                        )}
                      </p>
                    ) : null}
                    {ehSpecialEdCurrent !== undefined ? (
                      <p>
                        <em>Currently is placed in special education? </em>
                        {ehSpecialEdCurrent === 'Yes' ? <span>Yes</span> : <span>No</span>}
                      </p>
                    ) : null}
                    {ehSpecialEdCurrent === 'Yes' ? (
                      <ul>
                        {ehTypeSpecialEdClass !== undefined ? (
                          <li>
                            <p>
                              <em>What type of class?</em> {ehTypeSpecialEdClass}
                            </p>
                          </li>
                        ) : null}
                        {ehTypeSpecialEdHours !== undefined ? (
                          <li>
                            <p>
                              <em>Hours per day?</em> {ehTypeSpecialEdHours}
                            </p>
                          </li>
                        ) : null}
                      </ul>
                    ) : null}
                    {ehDislikesSchool !== undefined ? (
                      <p>
                        <em>Dislikes going to school? </em>
                        {ehDislikesSchool === 'Yes' ? <span>Yes</span> : <span>No</span>}
                      </p>
                    ) : null}
                    {ehAbsent !== undefined ? (
                      <p>
                        <em>
                          Is absent from school frequently?
                          <br />
                        </em>
                        {ehAbsent === 'Yes' ? <span>Yes. {ehAbsentDesc}</span> : <span>No</span>}
                      </p>
                    ) : null}
                    {ehGraduateHsDesc !== undefined ? (
                      <p>
                        <em>
                          {diName !== undefined ? <span>{diName}'s</span> : "The Client's"} will
                          graduate high school on{' '}
                        </em>
                        {ehGraduateHsDesc}.
                      </p>
                    ) : null}
                    {ehTeacherConcerns !== undefined ? (
                      <p>
                        <em>
                          Do you have any concerns about the quality of this child's teachers?
                          <br />
                        </em>
                        {ehTeacherConcerns === 'Yes' ? (
                          <span>Yes. {ehTeacherConcernsDesc}</span>
                        ) : (
                          <span>No</span>
                        )}
                      </p>
                    ) : null}
                  </section>
                ) : null}
                {rdaReligonAffiliation !== undefined ||
                rdaReligonInvolvement !== undefined ||
                rdaSpiritualImportance !== undefined ||
                rdaReligonBuilding !== undefined ||
                rdaEthnicity !== undefined ||
                rdaRace !== undefined ||
                rdaIdenficationOther !== undefined ? (
                  <section
                    className={
                      rdaReligonAffiliation === undefined && rdaReligonInvolvement === undefined
                        ? 'pdf-t__empty'
                        : null
                    }
                  >
                    <h2>Religious &amp; Racial Ethnic Identification</h2>
                    {rdaReligonAffiliation !== undefined || rdaReligonInvolvement !== undefined ? (
                      <div>
                        <p>
                          <em>Current religious denomination/affiliation:</em>
                        </p>
                        <ul>
                          <li>
                            <p>
                              <em>Denomination:</em> <span>{rdaReligonAffiliation}</span>
                            </p>
                          </li>
                          <li>
                            <p>
                              <em>
                                Level of involvement (Scale of 1-5 with 5 being very involved):
                              </em>{' '}
                              <span>{rdaReligonInvolvement}</span>
                            </p>
                          </li>
                        </ul>
                      </div>
                    ) : null}
                  </section>
                ) : null}
                {wizardForm43Disabled !== true ? (
                  <section className={rdaSpiritualImportance === undefined ? 'pdf-t__empty' : null}>
                    {rdaSpiritualImportance !== undefined ? (
                      <div>
                        <p>
                          <em>How important are spirtial concerns in your life?</em>
                          <br />
                          <span>{rdaSpiritualImportance}</span>
                        </p>
                      </div>
                    ) : null}
                  </section>
                ) : null}
                {wizardForm44Disabled !== true ? (
                  <section className={rdaReligonBuilding === undefined ? 'pdf-t__empty' : null}>
                    {rdaReligonBuilding !== undefined ? (
                      <div>
                        <p>
                          <em>Which, if any, are you involved with:</em>{' '}
                          <span>{rdaReligonBuilding}</span>
                        </p>
                      </div>
                    ) : null}
                  </section>
                ) : null}
                {wizardForm45Disabled !== true ? (
                  <section
                    className={
                      rdaEthnicity === undefined &&
                      rdaRace === undefined &&
                      rdaIdenficationOther === undefined
                        ? 'pdf-t__empty'
                        : null
                    }
                  >
                    {rdaEthnicity !== undefined ? (
                      <div>
                        <p>
                          <em>
                            {diName !== undefined ? <span>{diName}'s</span> : "The Client's"}{' '}
                            ethnicity is
                          </em>{' '}
                          <span>{rdaEthnicity}</span>.
                        </p>
                      </div>
                    ) : null}
                    {rdaRace !== undefined ? (
                      <div>
                        <p>
                          <em>
                            {diName !== undefined ? <span>{diName}'s</span> : "The Client's"} race
                            is
                          </em>{' '}
                          <span>${rdaRace}</span>.
                        </p>
                      </div>
                    ) : null}
                    {rdaIdenficationOther !== undefined ? (
                      <div>
                        <p>
                          <em>Any other way you identify yourself and consider important?</em>
                          <br />
                          <span>{rdaIdenficationOther}</span>
                        </p>
                      </div>
                    ) : null}
                  </section>
                ) : null}
                {wizardForm46Disabled !== true ? (
                  <section className={otherInformation === undefined ? 'pdf-t__empty' : null}>
                    {otherInformation !== undefined ? (
                      <div>
                        <h2>Other Information</h2>
                        <p>
                          <em>
                            Is there anything else we should know that doesn't appear on this or
                            other forms, but that is or might be important?
                          </em>
                          <br />
                          <span>${otherInformation}</span>
                        </p>
                      </div>
                    ) : null}
                  </section>
                ) : null}
                {WIATIII === true ||
                NelsonDenny === true ||
                WJIVACH === true ||
                BRIEF === true ||
                Conners3 === true ||
                DKEFS === true ||
                RBANS === true ||
                NEPSYII === true ||
                QIKCPT === true ||
                VinelandII === true ||
                ADOS2 === true ||
                CARS2 === true ||
                GARS3 === true ||
                WISCV === true ||
                CTONI2 === true ||
                DASII === true ||
                WASIII === true ||
                WAISIV === true ||
                WJIVCOG === true ||
                WPPSIIV === true ||
                WRAML2 === true ||
                GORT5 === true ||
                WMSIV === true ||
                WRAVMA === true ||
                BeeryVMI === true ||
                BASC3 === true ||
                PIY === true ||
                HTP === true ||
                MCMIIV === true ||
                MMPI2 === true ||
                MMPIA === true ||
                Rorschach === true ||
                TOMM === true ||
                TSCC === true ? (
                  <section>
                    <div>
                      <img
                        src="http://www.lrtico.com/on/img/bell-curve.png"
                        alt="Bell curve"
                        className="bell-curve"
                      />
                    </div>
                    <h2>Test Results</h2>
                    <p>
                      Consistent with common medical practice, ability levels are described
                      statistically. It is important to be aware that mild deficits from a
                      statistical standpoint may interfere significantly with daily functioning.
                      Percentiles are used to describe how many people out of 100 this individual
                      would score above. For example, at the 50th percentile (exactly Average),
                      {diName} would score higher than 50 out of 100 people.
                    </p>
                    <p>
                      The following table is presented below to further describe the statistical
                      classifications, unless otherwise specified (e.g., BASC-3, BRIEF-2,
                      Vineland-3).
                    </p>
                    <p>
                      Please refer to the table below for the numerical results of {diName}'s
                      performance on all of the measures, as well as his classification level.
                    </p>
                    <p>
                      Note for interpretation of test results: these test results are to be
                      interpreted only within the context of this report. They are not to be
                      interpreted independent of this report.
                    </p>
                    <table className="test-table">
                      <tr className="table__row table__header">
                        <th>Classification Level</th>
                        <th>% Rank</th>
                        <th>Std. Score</th>
                        <th>Scaled Score</th>
                        <th>T-Score</th>
                      </tr>
                      <tr>
                        <td>Very superior</td>
                        <td>> 98</td>
                        <td>131 &amp; up</td>
                        <td>&#62;17</td>
                        <td>70</td>
                      </tr>
                      <tr>
                        <td>Superior</td>
                        <td>92-98</td>
                        <td>120-130</td>
                        <td>15-16</td>
                        <td>64-69</td>
                      </tr>
                      <tr>
                        <td>High/Above Average</td>
                        <td>76-91</td>
                        <td>110-119</td>
                        <td>13-14</td>
                        <td>58-63</td>
                      </tr>
                      <tr>
                        <td>Average</td>
                        <td>25-75</td>
                        <td>90-109</td>
                        <td>8-12</td>
                        <td>44-57</td>
                      </tr>
                      <tr>
                        <td>Low/Below Average</td>
                        <td>9-24</td>
                        <td>80-89</td>
                        <td>6-7</td>
                        <td>37-43</td>
                      </tr>
                      <tr>
                        <td>Very Low</td>
                        <td>2-8</td>
                        <td>70-79</td>
                        <td>4-5</td>
                        <td>30-36</td>
                      </tr>
                      <tr>
                        <td>Extremely Low</td>
                        <td>&#60;2</td>
                        <td>&#60;70</td>
                        <td>1-3</td>
                        <td>&#60;30</td>
                      </tr>
                    </table>
                  </section>
                ) : null}
                {testSelectedReducer.map((t, i) => (
                  <section key={t.Id}>
                    <div className="domain__test">
                      <h3>{t.DomainName}</h3>
                      <div className="domain__test__title flex">
                        <h4>{t.Name}</h4>
                        <span className="h7">&nbsp;{t.Abbreviation}</span>
                      </div>
                      <p>{createMarkup(t.Descriptions, diName, diGender)}</p>
                    </div>
                    {t.TestIndexes !== undefined && t.TestIndexes.length > 0
                      ? t.TestIndexes.map((t) => (
                          <div key={t.Id} className="domain__test">
                            {t.IndexName === 'General Ability Index' ? (
                              <div className="test__list">
                                <h5>{t.IndexName}</h5>
                                <p>
                                  {t.IndexDescription}
                                  {t.HasInput && (
                                    <span>
                                      {diName !== undefined ? <span>{diName}</span> : 'The Client'}{' '}
                                      received a Composite score of {gaiScore(t.Id)}(
                                      {gaiPercentile(t.Id)} percentile) which is in the{' '}
                                      {gaiRange(t.Id)} range of functioning compared to other
                                      individuals {diGender === 'Boy' ? 'his' : 'her'} age.
                                    </span>
                                  )}
                                </p>
                              </div>
                            ) : t.IndexName === 'General Conceptual Ability' ? (
                              <div>
                                <h5>{t.IndexName}</h5>
                                <div className="test__list">
                                  {diName !== undefined ? <span>{diName}'s</span> : "The Client's"}{' '}
                                  GCA score on the DAS-II places{' '}
                                  {diGender === 'Boy' ? 'him' : 'her'} in the {gcaRange(t.Id)}{' '}
                                  range, (DAS-II GCA score of {gcaScore(t.Id)},{' '}
                                  {gcaPercentile(t.Id)} percentile), while{' '}
                                  {diGender === 'Boy' ? 'his' : 'her'} Special Nonverbal Composite
                                  SNC score placed in the {sncRange(t.Id)} range (DAS-II SNC score
                                  of {sncScore(t.Id)}, {sncPercentile(t.Id)} percentile).
                                </div>
                              </div>
                            ) : (
                              <div>
                                <h5>{t.IndexName}</h5>
                                <p>{t.IndexDescription}</p>
                              </div>
                            )}
                            {t.IndexConditions !== undefined && t.IndexConditions.length > 0 ? (
                              <p>{indexConditionVal(t.IndexConditions[0].Id)}</p>
                            ) : null}
                          </div>
                        ))
                      : null}
                    {t.ParentScaleTitles.length > 0
                      ? t.ParentScaleTitles.map((parentscaletitle) =>
                          parentScaleTitleIsVisibleVal(parentscaletitle.Id) === true ? (
                            <div key={parentscaletitle.Id} className="domain__test">
                              <h5>
                                {parentscaletitle.ParentScaleName.replaceAll(
                                  '<span>',
                                  '',
                                ).replaceAll('</span>', '')}
                              </h5>
                              {parentscaletitle.ParentScaleDescription !== null ? (
                                <p>{parentScaleDescVal(parentscaletitle.Id)}</p>
                              ) : null}
                              <table className="test-table">
                                <thead>
                                  <tr className="table__row table__header">
                                    <th style={{ width: '25%' }}>
                                      {testSelectedReducer[i].SubTestType}
                                    </th>
                                    <th style={{ width: '15%' }}>
                                      {testSelectedReducer[i].ScoreType}
                                    </th>
                                    <th style={{ width: '60%' }}>
                                      {appendixReducer[i].Abbreviation === 'DAS-II' ||
                                      (appendixReducer[i].Abbreviation === 'D-KEFS' &&
                                        (parentscaletitle.ParentScaleName ===
                                          'Color-Word Interference Test' ||
                                          parentscaletitle.ParentScaleName === 'Twenty Questions' ||
                                          parentscaletitle.ParentScaleName ===
                                            'Word Context Test' ||
                                          parentscaletitle.ParentScaleName ===
                                            'Tower Test')) ? null : (
                                        <span>{testSelectedReducer[i].DescriptionType}</span>
                                      )}
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {parentscaletitle.SubTests.map((subtest) =>
                                    subtestVal(subtest.Id) !== undefined ? (
                                      <tr key={subtest.Id} className="table__row">
                                        <td>{subtest.Name}</td>
                                        <td>
                                          <strong>{subtestVal(subtest.Id)}</strong>
                                        </td>
                                        <td>
                                          <div>
                                            {subtest.Description === null
                                              ? subTestDescriptionColVal(subtest.Id)
                                              : createMarkup(subtest.Description, diName, diGender)}
                                          </div>
                                        </td>
                                      </tr>
                                    ) : null,
                                  )}
                                </tbody>
                              </table>
                            </div>
                          ) : null,
                        )
                      : null}
                    {t.SubTests !== undefined && t.SubTests.length > 0 ? (
                      <table className="test-table">
                        <tr className="table__row table__header">
                          <th style={{ width: '25%' }}>{testSelectedReducer[i].SubTestType}</th>
                          <th style={{ width: '15%' }}>{testSelectedReducer[i].ScoreType}</th>
                          <th style={{ width: '60%' }}>
                            {appendixReducer[i].Abbreviation !== 'TOMM'
                              ? testSelectedReducer[i].DescriptionType
                              : null}
                          </th>
                        </tr>
                        {t.SubTests.map((t) =>
                          subtestVal(t.Id) !== undefined ? (
                            <tr key={t.Id} className="table__row">
                              <td>{t.Name}</td>
                              <td>
                                <strong>{subtestVal(t.Id)}</strong>
                              </td>
                              <td>
                                <div>{createMarkup(t.Description, diName, diGender)}</div>
                              </td>
                            </tr>
                          ) : null,
                        )}
                      </table>
                    ) : null}
                    {t.ParentGroupScales !== undefined
                      ? t.ParentGroupScales.map((t) => (
                          <div key={t.Id} className="domain__test">
                            <h4 className="parent-group-scale-name">{t.ParentGroupScaleName}</h4>
                            {t.ParentScaleTitles.length > 0
                              ? t.ParentScaleTitles.map((scale) =>
                                  parentScaleTitleIsVisibleVal(scale.Id) === true ? (
                                    <div key={scale.Id} className="domain__test">
                                      <div>
                                        <h5>{scale.ParentScaleName}</h5>
                                      </div>
                                      <table className="test-table">
                                        <tr className="table__row table__header">
                                          <th style={{ width: '25%' }}>
                                            {testSelectedReducer[i].SubTestType}
                                          </th>
                                          <th style={{ width: '15%' }}>
                                            {testSelectedReducer[i].ScoreType}
                                          </th>
                                          <th style={{ width: '60%' }}>
                                            {testSelectedReducer[i].DescriptionType}
                                          </th>
                                        </tr>
                                        {scale.SubTests.map((t) =>
                                          subtestVal(t.Id) !== undefined ? (
                                            <tr key={t.Id} className="table__row">
                                              <td>{t.Name}</td>
                                              <td>
                                                <strong>{subtestVal(t.Id)}</strong>
                                              </td>
                                              <td>
                                                <div>
                                                  {createMarkup(t.Description, diName, diGender)}
                                                </div>
                                              </td>
                                            </tr>
                                          ) : null,
                                        )}
                                      </table>
                                    </div>
                                  ) : null,
                                )
                              : null}
                            {t.ParentGroupSubScales !== undefined
                              ? t.ParentGroupSubScales.map((scale) => (
                                  <div key={scale.Id}>
                                    {parentGroupSubScaleIsVisibleVal(scale.Id) === true ? (
                                      <div className="domain__test pgss">
                                        <h6 className="test-module">
                                          {scale.ParentGroupSubScaleName.toLowerCase()
                                            .replace(/ /g, ' ')
                                            .replaceAll('-', ' ')
                                            .replaceAll('(', '')
                                            .replaceAll(')', '')
                                            .split(' ')
                                            .map(
                                              (word) =>
                                                word.charAt(0).toUpperCase() + word.slice(1),
                                            )
                                            .join('')}
                                        </h6>
                                        {scale.ParentScaleTitles.map((t) => (
                                          <div key={t.Id} className="domain__test">
                                            {parentScaleTitleIsVisibleVal(t.Id) === true ? (
                                              <div>
                                                <h5>{t.ParentScaleName}</h5>
                                                {t.ParentScaleDescription !== null ? (
                                                  <p>{t.ParentScaleDescription}</p>
                                                ) : null}
                                                <table className="test-table">
                                                  <tr className="table__row table__header">
                                                    <th style={{ width: '25%' }}>
                                                      {testSelectedReducer[i].SubTestType}
                                                    </th>
                                                    <th style={{ width: '15%' }}>
                                                      {testSelectedReducer[i].ScoreType}
                                                    </th>
                                                    <th style={{ width: '60%' }}>
                                                      {testSelectedReducer[i].DescriptionType}
                                                    </th>
                                                  </tr>
                                                  {t.SubTests.map((t) => (
                                                    <tbody key={t.Id}>
                                                      {subtestVal(t.Id) !== undefined ? (
                                                        <tr className="table__row">
                                                          <td>{t.Name}</td>
                                                          <td>
                                                            <strong>{subtestVal(t.Id)}</strong>
                                                          </td>
                                                          <td>
                                                            <div>{t.Description}</div>
                                                          </td>
                                                        </tr>
                                                      ) : null}
                                                    </tbody>
                                                  ))}
                                                </table>
                                              </div>
                                            ) : null}
                                          </div>
                                        ))}
                                      </div>
                                    ) : null}
                                  </div>
                                ))
                              : null}
                          </div>
                        ))
                      : null}
                    {t.ParentGroupSubScales !== undefined
                      ? t.ParentGroupSubScales.map((scale) => (
                          <div key={scale.Id}>
                            {parentGroupSubScaleIsVisibleVal(scale.Id) === true ? (
                              <div className="domain__test">
                                <h6 className="test-module">{scale.ParentGroupSubScaleName}</h6>
                                {scale.ParentScaleTitles.map((t) => (
                                  <div key={t.Id} className="domain__test">
                                    {parentScaleTitleIsVisibleVal(t.Id) === true ? (
                                      <div>
                                        <h5>{t.ParentScaleName}</h5>
                                        {t.ParentScaleDescription !== null ? (
                                          <p>{t.ParentScaleDescription}</p>
                                        ) : null}
                                        <table className="test-table">
                                          <thead>
                                            <tr className="table__row table__header">
                                              <th style={{ width: '25%' }}>
                                                {testSelectedReducer[i].SubTestType}
                                              </th>
                                              <th style={{ width: '15%' }}>
                                                {testSelectedReducer[i].ScoreType}
                                              </th>
                                              <th style={{ width: '60%' }}>
                                                {testSelectedReducer[i].DescriptionType}
                                              </th>
                                            </tr>
                                          </thead>
                                          {t.SubTests.map((t) => (
                                            <tbody key={t.Id}>
                                              {subtestVal(t.Id) !== undefined ? (
                                                <tr className="table__row">
                                                  <td>{t.Name}</td>
                                                  <td>
                                                    <strong>{subtestVal(t.Id)}</strong>
                                                  </td>
                                                  <td>
                                                    <div>
                                                      {createMarkup(
                                                        t.Description,
                                                        diName,
                                                        diGender,
                                                      )}
                                                    </div>
                                                  </td>
                                                </tr>
                                              ) : null}
                                            </tbody>
                                          ))}
                                        </table>
                                      </div>
                                    ) : null}
                                  </div>
                                ))}
                              </div>
                            ) : null}
                          </div>
                        ))
                      : null}
                    {t.TestModules !== undefined
                      ? t.TestModules.map((t) => (
                          <div key={t.Id}>
                            {testModuleIsVisibleVal(t.Id) === true ? (
                              <div className="domain__test">
                                <h5 className="test-module">{t.Name}</h5>
                                <p>{t.Descriptions}</p>
                                {t.ParentGroupScales.map((t) =>
                                  parentGroupScaleIsVisibleVal(t.Id) === true ? (
                                    <div key={t.Id} className="test-table-heading">
                                      <h6 className="test-module">{t.ParentGroupScaleName}</h6>
                                      {t.ParentScaleTitles.map((t) => (
                                        <div key={t.Id} className="domain__test">
                                          {parentScaleTitleIsVisibleVal(t.Id) === true ? (
                                            <div>
                                              <h5>{t.ParentScaleName}</h5>
                                              {t.ParentScaleDescription !== null ? (
                                                <p>{t.ParentScaleDescription}</p>
                                              ) : null}
                                              <table className="test-table">
                                                <tr className="table__row table__header">
                                                  <th style={{ width: '25%' }}>
                                                    {testSelectedReducer[i].SubTestType}
                                                  </th>
                                                  <th style={{ width: '15%' }}>
                                                    {testSelectedReducer[i].ScoreType}
                                                  </th>
                                                  <th style={{ width: '60%' }}>
                                                    {testSelectedReducer[i].DescriptionType}
                                                  </th>
                                                </tr>
                                                {t.SubTests.map((t) =>
                                                  subtestVal(t.Id) !== undefined ? (
                                                    <tr key={t.Id} className="table__row">
                                                      <td>{t.Name}</td>
                                                      <td>
                                                        <strong>{subtestVal(t.Id)}</strong>
                                                      </td>
                                                      <td>
                                                        <div>
                                                          {createMarkup(
                                                            t.Description,
                                                            diName,
                                                            diGender,
                                                          )}
                                                        </div>
                                                      </td>
                                                    </tr>
                                                  ) : null,
                                                )}
                                              </table>
                                            </div>
                                          ) : null}
                                        </div>
                                      ))}
                                    </div>
                                  ) : null,
                                )}
                              </div>
                            ) : null}
                          </div>
                        ))
                      : null}
                    {t.TestScoringTableDetails !== null
                      ? t.TestScoringTableDetails.map((t) => (
                          <div key={t.Id} className="test-table test-table--fourCols">
                            <h5 className="test-table__name">{t.Name !== null ? t.Name : ''}</h5>
                            {t.Description !== null ? (
                              <p>
                                <span>{t.Description}</span>
                              </p>
                            ) : null}
                            {t.ScoreHeader !== null ? (
                              <p>
                                <span>
                                  <strong>{t.ScoreHeader}</strong>
                                </span>
                              </p>
                            ) : null}
                            <table className="test-table">
                              <tr className="table__row table__header">
                                {t.TableHeaderRowTitles.Col1 === null ? (
                                  <td></td>
                                ) : (
                                  <td>{t.TableHeaderRowTitles.Col1}</td>
                                )}
                                {t.TableHeaderRowTitles.Col2 === null ? (
                                  <td></td>
                                ) : (
                                  <td>{t.TableHeaderRowTitles.Col2}</td>
                                )}
                                {t.TableHeaderRowTitles.Col3 === null ? (
                                  <td></td>
                                ) : (
                                  <td>{t.TableHeaderRowTitles.Col3}</td>
                                )}
                                {t.TableHeaderRowTitles.Col4 === null ? (
                                  <td></td>
                                ) : (
                                  <td>{t.TableHeaderRowTitles.Col4}</td>
                                )}
                                {t.TableHeaderRowTitles.Col5 === null ? (
                                  ''
                                ) : (
                                  <td>{t.TableHeaderRowTitles.Col5}</td>
                                )}
                                {t.TableHeaderRowTitles.Col6 === null ? (
                                  ''
                                ) : (
                                  <td>{t.TableHeaderRowTitles.Col6}</td>
                                )}
                              </tr>
                              {t.TestScoringTableScores.map((t) => (
                                <tr key={t.Id} className="table__row">
                                  {t.Col1 === null ? (
                                    <td></td>
                                  ) : t.Col1 === '<Field>' ? (
                                    <td>{testScoringTableScoresCol1Val(t.Id)}</td>
                                  ) : (
                                    <td>{t.Col1}</td>
                                  )}
                                  {t.Col2 === null ? (
                                    <td></td>
                                  ) : t.Col2 === '<Field>' ? (
                                    <td>{testScoringTableScoresCol2Val(t.Id)}</td>
                                  ) : (
                                    <td>{t.Col2}</td>
                                  )}
                                  {t.Col3 === null ? (
                                    <td></td>
                                  ) : t.Col3 === '<Field>' ? (
                                    <td>{testScoringTableScoresCol3Val(t.Id)}</td>
                                  ) : (
                                    <td>{t.Col3}</td>
                                  )}
                                  {t.Col4 === null ? (
                                    <td></td>
                                  ) : t.Col4 === '<Field>' ? (
                                    <td>{testScoringTableScoresCol4Val(t.Id)}</td>
                                  ) : (
                                    <td>{t.Col4}</td>
                                  )}
                                  {t.Col5 === null ? (
                                    ''
                                  ) : t.Col5 === '<Field>' ? (
                                    <td>{testScoringTableScoresCol5Val(t.Id)}</td>
                                  ) : (
                                    <td>{t.Col5}</td>
                                  )}
                                  {t.Col6 === null ? (
                                    ''
                                  ) : t.Col6 === '<Field>' ? (
                                    <td>{testScoringTableScoresCol6Val(t.Id)}</td>
                                  ) : (
                                    <td>{t.Col6}</td>
                                  )}
                                </tr>
                              ))}
                            </table>
                          </div>
                        ))
                      : null}
                    {t.TestSummaries !== undefined
                      ? t.TestSummaries.map((t) => (
                          <div key={t.Id} className="domain__test">
                            <h5>SUMMARY</h5>
                            <p className="test__list">
                              <span>
                                Overall,{' '}
                                {diName !== undefined ? <span>{diName}'s</span> : "The Client's"}{' '}
                                performance on the&nbsp;
                                {testSelectedReducer[0].Abbreviation} provided a snapshot into{' '}
                                {diGender === 'Boy' ? 'his' : 'her'} various cognitive abilities and
                                strengths. {diGender === 'Boy' ? 'He' : 'She'} demonstrated
                                well-developed {summaryAbilities(t.Id)} abilities.
                              </span>
                            </p>
                            <p className="test__list">
                              <span>
                                However, {diGender === 'Boy' ? 'he' : 'she'} also evidenced relative
                                challenges with {summaryChallenges(t.Id)}.
                              </span>
                            </p>
                            <p>
                              These challenges should continue to be monitored and evaluated so as
                              to help {diGender === 'Boy' ? 'him' : 'her'} continue to perform at{' '}
                              {diGender === 'Boy' ? 'his' : 'her'} best.
                            </p>
                          </div>
                        ))
                      : null}
                  </section>
                ))}
                <section>
                  {diName !== undefined ||
                  diAge !== undefined ||
                  reasonReferral1 !== undefined ||
                  reasonReferral2 !== undefined ||
                  reasonReferral3 !== undefined ||
                  relevantBackgroundHistory !== undefined ||
                  resultsCurrentAssessment !== undefined ||
                  summaryCurrentSituation !== undefined ? (
                    <h2>Summary of Findings</h2>
                  ) : null}

                  {diName !== undefined || diAge !== undefined ? (
                    <ul className="mb9mm">
                      <li>
                        <p>
                          <em>Patient's name: </em>
                          <span>{diName}</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <em>Patient's age: </em>
                          <span>{diAge}</span>
                        </p>
                      </li>
                    </ul>
                  ) : null}

                  {reasonReferral1 !== undefined ||
                  reasonReferral2 !== undefined ||
                  reasonReferral3 !== undefined ? (
                    <div className="mb9mm">
                      <h5>Reasons for Referral</h5>
                      <ul>
                        <li>
                          <p>
                            <span>{reasonReferral1}</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>{reasonReferral2}</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>{reasonReferral3}</span>
                          </p>
                        </li>
                      </ul>
                    </div>
                  ) : null}

                  {relevantBackgroundHistory !== undefined ? (
                    <div className="mb9mm">
                      <h5>Relevant Background History</h5>
                      <div>
                        <p>
                          <span>{relevantBackgroundHistory}</span>
                        </p>
                      </div>
                    </div>
                  ) : null}

                  {resultsCurrentAssessment !== undefined ? (
                    <div className="mb9mm">
                      <h5>Results of Current Assessment</h5>
                      <div>
                        <p>
                          <span>{resultsCurrentAssessment}</span>
                        </p>
                      </div>
                    </div>
                  ) : null}

                  {summaryCurrentSituation !== undefined ? (
                    <div className="mb9mm">
                      <h5>Overall summary of current situation</h5>
                      <div>
                        <p>
                          <span>{summaryCurrentSituation}</span>
                        </p>
                      </div>
                    </div>
                  ) : null}
                </section>
                <section>
                  {dsmCodes !== undefined ||
                  eduCodeIntellectualDisabilityId === true ||
                  eduCodeHardOfHearingHh === true ||
                  eduCodeDeafnessDeafHearingImpairmentHi === true ||
                  eduCodeSpeechOrLanguageImpairmentSli === true ||
                  eduCodeVisualImpairmentVi === true ||
                  eduCodeEmotionalDisturbanceEd === true ||
                  eduCodeOrthopedicImpairmentOi === true ||
                  eduCodeOtherHealthImpairmentOhi === true ||
                  eduCodeEstablishedMedicalDisabilityEmd === true ||
                  eduCodeSpecificLearningDisabilitySld === true ||
                  eduCodeDeafBlindnessDb === true ||
                  eduCodeMultipleDisabilitiesMd === true ||
                  eduCodeAutismAut === true ||
                  eduCodeTraumaticBrainInjuryTbi === true ? (
                    <h2>Diagnostic considerations</h2>
                  ) : null}

                  {dsmCodes !== undefined && dsmCodes.length > 0 ? (
                    <div className="mb9mm">
                      <h5>DSM-5 diagnosis (ICD-10)</h5>
                      <ul>
                        {dsmCodes.map((code, i) => (
                          <li key={i}>
                            <p>
                              <em>Code:</em> <span>{code.codeValue}</span>
                            </p>
                            <p>
                              <em>ICD-10:</em> <span>{code.codeValueIcd10}</span>
                            </p>
                            <p>
                              <em>Description:</em> <span>{code.codeDescription}</span>
                            </p>
                            <p>
                              <em>Specifier:</em> <span>{code.codeSpecifier}</span>
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {eduCodeIntellectualDisabilityId === true ||
                  eduCodeHardOfHearingHh === true ||
                  eduCodeDeafnessDeafHearingImpairmentHi === true ||
                  eduCodeSpeechOrLanguageImpairmentSli === true ||
                  eduCodeVisualImpairmentVi === true ||
                  eduCodeEmotionalDisturbanceEd === true ||
                  eduCodeOrthopedicImpairmentOi === true ||
                  eduCodeOtherHealthImpairmentOhi === true ||
                  eduCodeEstablishedMedicalDisabilityEmd === true ||
                  eduCodeSpecificLearningDisabilitySld === true ||
                  eduCodeDeafBlindnessDb === true ||
                  eduCodeMultipleDisabilitiesMd === true ||
                  eduCodeAutismAut === true ||
                  eduCodeTraumaticBrainInjuryTbi === true ? (
                    <div className="mb9mm">
                      <h5>Educational classification</h5>
                      <div>
                        {eduCodeIntellectualDisabilityId === true ? (
                          <p>
                            Intellectual Disability (ID){' '}
                            <span>
                              Intellectual Disability means significantly subaverage general
                              intellectual functioning, existing concurrently with deficits in
                              adaptive behavior, and manifested during the developmental period,
                              that adversely affects a child's educational performance. (34 Code of
                              Federal Regulations (CFR), Sec. 300.8(c)(6)).
                            </span>
                          </p>
                        ) : null}

                        {eduCodeHardOfHearingHh === true ? (
                          <p>
                            Hard of hearing (HH){' '}
                            <span>
                              Hard of Hearing means hearing, impairment, whether permanent or
                              fluctuating, that adversely affects a child's educational performance,
                              but that is not included under the definition of deaf in this section.
                            </span>
                          </p>
                        ) : null}

                        {eduCodeDeafnessDeafHearingImpairmentHi === true ? (
                          <p>
                            Deafness (DEAF)/Hearing impairment (HI){' '}
                            <span>
                              Deafness means a hearing impairment that is so severe that the child
                              is impaired in processing linguistic information through learning,
                              with or without amplification, which adversely affects educational
                              performance. (34 CFR Sec. 300.8(c)(3) Hearing Impairment is a federal
                              category of disability, which includes both hard of hearing and deaf
                              individuals as defined above.
                            </span>
                          </p>
                        ) : null}

                        {eduCodeSpeechOrLanguageImpairmentSli === true ? (
                          <p>
                            Speech or language impairment (SLI){' '}
                            <span>
                              Speech or Language Impairment means a communication disorder such as
                              stuttering, impaired articulation, language impairment, or a voice
                              impairment, that adversely affects a child's educational performance.
                              (34 CFR Sec. 300.8(c)(11)).
                            </span>
                          </p>
                        ) : null}

                        {eduCodeVisualImpairmentVi === true ? (
                          <p>
                            Visual impairment (VI){' '}
                            <span>
                              Visually Impaired, including blindness means impairment in vision
                              that, even with correction, adversely affects a child's educational
                              performance. The term includes both partially seeing and blind
                              children. (34 CFR Sec. 300.8(c)(13)).
                            </span>
                          </p>
                        ) : null}

                        {eduCodeEmotionalDisturbanceEd === true ? (
                          <p>
                            Emotional disturbance (ED){' '}
                            <span>
                              Emotional Disturbance means a condition exhibiting one or more of the
                              following characteristics, over a long period of time and to a marked
                              degree, that adversely affects educational performance: (A) An
                              inability to learn which cannot be explained by intellectual, sensory,
                              or health factors; (B) An inability to build or maintain satisfactory
                              interpersonal relationships with peers and teachers; (C) Inappropriate
                              types of behavior or feeling under normal circumstances; (D) A general
                              pervasive mood of unhappiness or depression; or (E) A tendency to
                              develop physical symptoms or fears associated with personal or school
                              problems. The term (ED) includes schizophrenia. The term does not
                              apply to children who are socially maladjusted, unless it is
                              determined that they have an emotional disturbance. (34 CFR Sec.
                              300.8(c)(4)).
                            </span>
                          </p>
                        ) : null}

                        {eduCodeOrthopedicImpairmentOi === true ? (
                          <p>
                            Orthopedic impairment (OI){' '}
                            <span>
                              Orthopedic Impairment means a severe orthopedic impairment that
                              adversely affects a child's educational performance. The term includes
                              impairments caused by congenital anomaly (e.g., clubfoot, absence of
                              some member, etc.), impairments caused by disease (e.g.,
                              poliomyelitis, bone tuberculosis, etc.), and impairments from other
                              causes (e.g., cerebral palsy, amputations, and fractures or burns
                              which cause contractures). (34 CFR Sec. 300.8(b)(6 Sec. 300.8(c)(8)).
                            </span>
                          </p>
                        ) : null}

                        {eduCodeOtherHealthImpairmentOhi === true ? (
                          <p>
                            Other health impairment (OHI){' '}
                            <span>
                              Other Health Impairment means having limited strength, vitality or
                              alertness, due to chronic or acute health problems such as a heart
                              condition, tuberculosis, rheumatic fever, nephritis, asthma, sickle
                              cell anemia, hemophilia, epilepsy, lead poisoning, leukemia, or
                              diabetes, which adversely affects a child's educational performance.
                              (34 CFR Part 300.8 (c) (9)).
                            </span>
                          </p>
                        ) : null}

                        {eduCodeEstablishedMedicalDisabilityEmd === true ? (
                          <p>
                            Established medical disability (EMD){' '}
                            <span>
                              A disabling medical condition or congenital syndrome that the
                              individualized education program (IEP) team determines has a high
                              predictability of requiring special education and services. (CA Ed
                              Code, Section 56441.11(d)) (Note: This eligibility category is only
                              applicable for children ages 3-5).
                            </span>
                          </p>
                        ) : null}

                        {eduCodeSpecificLearningDisabilitySld === true ? (
                          <p>
                            Specific learning disability (SLD){' '}
                            <span>
                              Specific Learning Disability means a disorder in one or more of the
                              basic psychological processes involved in understanding or using
                              language, spoken or written, that may manifest itself in an imperfect
                              ability to listen, think, speak, read, write, spell, or to do
                              mathematical calculations, including such conditions as perceptual
                              disabilities, brain injury, minimal brain dysfunction, dyslexia, and
                              developmental aphasia. The term does not include learning problems
                              that are primarily the result of visual, hearing, or motor handicaps,
                              of mental retardation, of emotional disturbance or of environmental,
                              cultural, or economic disadvantage. (34 CFR Sec. 300.8(c)(10)).
                            </span>
                          </p>
                        ) : null}

                        {eduCodeDeafBlindnessDb === true ? (
                          <p>
                            DeafBlindness (DB){' '}
                            <span>
                              DeafBlindness means concomitant hearing and visual impairments, the
                              combination of which causes such severe communication and other
                              developmental and educational needs that they cannot be accommodated
                              in special education programs solely for children with deafness or
                              children with blindness. (34 CFR Sec. 300.8(c)(2)).
                            </span>
                          </p>
                        ) : null}

                        {eduCodeMultipleDisabilitiesMd === true ? (
                          <p>
                            Multiple disabilities (MD){' '}
                            <span>
                              Multiple Disabilities means concomitant impairments (such as mental
                              retardationBlindness, mental retardationOrthopedic impairment, etc.,)
                              the combination of which causes such severe educational needs that
                              they cannot be accommodated in special education programs solely for
                              one of the impairments. The term does not include deafBlind children.
                              (34 CFR Sec. 300.8(c)(7)).
                            </span>
                          </p>
                        ) : null}

                        {eduCodeAutismAut === true ? (
                          <p>
                            Autism (AUT){' '}
                            <span>
                              Autism means a developmental disability significantly affecting verbal
                              and nonVerbal communication and social interaction, generally evident
                              before age three, which adversely affects educational performance.
                              Other characteristics often associated with autism include, engagement
                              in repetitive activities and stereotyped movements, resistance to
                              environmental change or change in daily routines, and unusual
                              responses to sensory experiences. The term does not does not apply if
                              a child's educational performance is adversely affected primarily
                              because the child has an emotional disturbance. A child who manifests
                              characteristics of autism after age three, that child could be
                              diagnosed as having autism if the criteria in the above paragraph are
                              satisfied. (34 CFR Sec. 300.8(c)(1)).
                            </span>
                          </p>
                        ) : null}

                        {eduCodeTraumaticBrainInjuryTbi === true ? (
                          <p>
                            Traumatic brain injury (TBI){' '}
                            <span>
                              Traumatic Brain Injury means an acquired injury to the brain caused by
                              an external physical force, resulting in total or partial functional
                              disability or psychosocial impairment, which adversely affects
                              educational performance. The term applies to both open or closed head
                              injuries resulting in impairments in one or more areas, such as
                              cognition; language; memory; attention; reasoning; abstract thinking;
                              judgment; problemSolving; sensory, perceptual and motor abilities;
                              psychosocial behavior; physical functions; information processing; and
                              speech. The term does not include brain injuries that are congenital
                              or degenerative, nor brain injuries induced by birth trauma. (34 CFR
                              Sec. 300.8(c)(12)).
                            </span>
                          </p>
                        ) : null}
                      </div>
                    </div>
                  ) : null}
                </section>
                {recommendationAdhd === true ||
                recommendationAutism === true ||
                recommendationDementia === true ||
                recommendationDysthymia === true ||
                recommendationLearningDisabilityMathematics === true ||
                recommendationLearningDisabilityReading === true ||
                recommendationNeurocognitiveDisorder === true ||
                recommendationVisualProcessingChildrenAdults === true ||
                recommendationVisualProcessingChildren === true ||
                recommendationLearningDisabilityWritingChildrenAdults === true ||
                recommendationLearningDisabilityWritingChildren === true ||
                recommendationAuditoryProcessingWeaknessChildrenAdults === true ||
                recommendationAuditoryProcessingWeaknessChildren === true ? (
                  <section className="li-not-bold recommendations">
                    <h2>Recommendations</h2>
                    <p>
                      Based on the current testing results, recommendations to support {diName}’s
                      needs and strengths are as follows:
                    </p>
                    {recommendations.map((r) =>
                      r.selected === true ? (
                        <div key={r.id} className="recommendations">
                          <h3>{r.name}</h3>
                          <ul>
                            {r.recommendation.map((item) =>
                              item.selected === true ? (
                                <li key={item.id}>
                                  {createMarkup(item.text, diName, diGender)}
                                  {item.subtext.length > 0 ? (
                                    <ul>
                                      {item.subtext.map((s) =>
                                        s.selected === true ? (
                                          <li key={s.id}>
                                            {createMarkup(s.text, diName, diGender)}
                                          </li>
                                        ) : null,
                                      )}
                                    </ul>
                                  ) : null}
                                </li>
                              ) : null,
                            )}
                          </ul>
                          {rAdhdRecommendationsFreehand !== undefined ? (
                            <p>
                              Additional recommendations:{' '}
                              <span>{recommendationFreehandVal(r.id)}</span>
                            </p>
                          ) : null}
                        </div>
                      ) : null,
                    )}
                  </section>
                ) : null}
                {WIATIII === true ||
                NelsonDenny === true ||
                WJIVACH === true ||
                BRIEF === true ||
                Conners3 === true ||
                DKEFS === true ||
                RBANS === true ||
                NEPSYII === true ||
                QIKCPT === true ||
                VinelandII === true ||
                ADOS2 === true ||
                CARS2 === true ||
                GARS3 === true ||
                WISCV === true ||
                CTONI2 === true ||
                DASII === true ||
                WASIII === true ||
                WAISIV === true ||
                WJIVCOG === true ||
                WPPSIIV === true ||
                WRAML2 === true ||
                GORT5 === true ||
                TOMM === true ||
                WMSIV === true ||
                WRAVMA === true ||
                BeeryVMI === true ||
                BASC3 === true ||
                PIY === true ||
                HTP === true ||
                MCMIIV === true ||
                MMPI2 === true ||
                MMPIA === true ||
                TSCC === true ? (
                  <section className="appendices">
                    <h2>Appendix of scores</h2>
                    {appendixReducer.map((a, i) => (
                      <div key={a.Id} className="appendix">
                        <div className="domain__test__title flex">
                          <h4>{a.TestName}</h4>
                          <span className="h7">&nbsp;{a.Abbreviation}</span>
                        </div>
                        {a.TestIndexes !== undefined ? (
                          <div>
                            <table className="test-table test-table--appendix">
                              <tr className="table__row table__header">
                                <th style={{ width: '50%' }}>Subtest</th>
                                <th style={{ width: '10%' }}>Score</th>
                                <th style={{ width: '10%' }}>% Rank</th>
                                <th style={{ width: '20%' }}>Range</th>
                              </tr>
                              {a.TestIndexes.map((testIndex) => (
                                <tr key={testIndex.Id} className="table__row">
                                  <td style={{ width: '50%' }}>
                                    {testIndex.IndexName.replace('<span>', '')
                                      .replace('</span>', '')
                                      .replace(/\(|\)/g, '')}
                                  </td>
                                  <td style={{ width: '10%' }}>
                                    <strong>
                                      {appendixTestIndexScoreVal(testIndex.Id, testIndex.IndexName)}
                                    </strong>
                                  </td>
                                  <td style={{ width: '10%' }}>
                                    <strong>
                                      {appendixTestIndexRankVal(testIndex.Id, testIndex.IndexName)}
                                    </strong>
                                  </td>
                                  <td style={{ width: '20%' }}>
                                    <strong>
                                      {appendixTestIndexRangeVal(testIndex.Id, testIndex.IndexName)}
                                    </strong>
                                  </td>
                                </tr>
                              ))}
                            </table>
                          </div>
                        ) : null}
                        {a.SubTests !== undefined ? (
                          <div>
                            <table className="test-table test-table--appendix">
                              <tr className="table__row table__header">
                                <th style={{ width: '50%' }}>Subtest</th>
                                <th style={{ width: '10%' }}>Score</th>
                                {appendixReducer[i].Abbreviation === 'TOMM' ? (
                                  <th style={{ width: '10%' }}># Correct</th>
                                ) : (
                                  <th style={{ width: '10%' }}>% Rank</th>
                                )}
                                {appendixReducer[i].Abbreviation === 'GORT-5' ||
                                appendixReducer[i].Abbreviation === 'TOMM' ? null : (
                                  <th style={{ width: '20%' }}>Gr. Eqv.</th>
                                )}
                                {appendixReducer[i].Abbreviation === 'GORT-5' ? (
                                  <th style={{ width: '20%' }}>Classification</th>
                                ) : null}
                                {appendixReducer[i].Abbreviation === 'TOMM' ? (
                                  <th style={{ width: '20%' }}>Percentile</th>
                                ) : null}
                              </tr>
                              {a.SubTests.map((subtest) => (
                                <tr key={subtest.Id} className="table__row">
                                  <td style={{ width: '50%' }}>{subtest.Name}</td>
                                  <td style={{ width: '10%' }}>
                                    <strong>{appendixSubtestScoreVal(subtest.Id)}</strong>
                                  </td>
                                  <td style={{ width: '10%' }}>
                                    <strong>{appendixSubtestRankVal(subtest.Id)}</strong>
                                  </td>
                                  {appendixReducer[i].Abbreviation === 'GORT-5' ||
                                  appendixReducer[i].Abbreviation === 'TOMM' ? (
                                    <td style={{ width: '20%' }}>
                                      <strong>
                                        {appendixSubtestClassificationVal(subtest.Id)}
                                      </strong>
                                    </td>
                                  ) : (
                                    <td style={{ width: '20%' }}>
                                      <strong>
                                        {appendixSubtestGradeEquivalentVal(subtest.Id)}
                                      </strong>
                                    </td>
                                  )}
                                </tr>
                              ))}
                              {appendixReducer[i].Id === 18 ? (
                                <tr className="table__row">
                                  <td style={{ width: '50%' }}>ORI (Oral Reading Index)</td>
                                  <td style={{ width: '10%' }}>
                                    <strong>{t18ORIScore}</strong>
                                  </td>
                                  <td style={{ width: '10%' }}>
                                    <strong>{t18AppendixGort5ORIGradeEquivalent}</strong>
                                  </td>
                                  <td style={{ width: '10%' }}>
                                    <strong>{t18AppendixGort5ORIRank}</strong>
                                  </td>
                                </tr>
                              ) : null}
                            </table>
                          </div>
                        ) : null}
                        {a.ParentScale !== undefined
                          ? a.ParentScale.map((p) => (
                              <div key={p.Id}>
                                <h5>{p.ParentScaleTitle}</h5>
                                <table className="test-table test-table--appendix">
                                  <tr className="table__row table__header">
                                    <th style={{ width: '50%' }}>Subtest</th>
                                    <th style={{ width: '10%' }}>Score</th>
                                    {appendixReducer[i].Abbreviation === 'MMPI-2' ||
                                    appendixReducer[i].Abbreviation === 'MMPI-A' ||
                                    appendixReducer[i].Abbreviation === 'TSCC' ||
                                    appendixReducer[i].Abbreviation === 'D-KEFS' ? null : (
                                      <th style={{ width: '10%' }}>% Rank</th>
                                    )}
                                    {appendixReducer[i].Abbreviation === 'WJ-IV ACH' ||
                                    appendixReducer[i].Abbreviation === 'BRIEF' ||
                                    appendixReducer[i].Abbreviation === 'NEPSY-II' ||
                                    appendixReducer[i].Abbreviation === 'Vineland-II' ||
                                    appendixReducer[i].Abbreviation === 'CTONI-2' ||
                                    appendixReducer[i].Abbreviation === 'WISC-V' ||
                                    appendixReducer[i].Abbreviation === 'WAIS-IV' ||
                                    appendixReducer[i].Abbreviation === 'WASI-II' ||
                                    appendixReducer[i].Abbreviation === 'WJ-IV COG' ||
                                    appendixReducer[i].Abbreviation === 'WPPSI-IV' ||
                                    appendixReducer[i].Abbreviation === 'Beery VMI' ||
                                    appendixReducer[i].Abbreviation === 'MMPI-2' ||
                                    appendixReducer[i].Abbreviation === 'MMPI-A' ||
                                    appendixReducer[i].Abbreviation === 'PIY' ||
                                    appendixReducer[i].Abbreviation === 'TSCC' ||
                                    appendixReducer[i].Abbreviation === 'D-KEFS' ? null : (
                                      <th style={{ width: '10%' }}>Gr. Eqv.</th>
                                    )}
                                    {appendixReducer[i].Abbreviation === 'DAS-II' ||
                                    appendixReducer[i].Abbreviation === 'PIY' ? null : (
                                      <th style={{ width: '20%' }}>Classification</th>
                                    )}
                                  </tr>
                                  {p.SubTests.map((subtest) => (
                                    <tr key={subtest.id} className="table__row">
                                      <td style={{ width: '50%' }}>{subtest.name}</td>
                                      <td style={{ width: '10%' }}>
                                        <strong>{appendixSubtestScoreVal(subtest.id)}</strong>
                                      </td>
                                      {appendixReducer[i].Abbreviation === 'MMPI-2' ||
                                      appendixReducer[i].Abbreviation === 'MMPI-A' ||
                                      appendixReducer[i].Abbreviation === 'TSCC' ||
                                      appendixReducer[i].Abbreviation === 'D-KEFS' ? null : (
                                        <td style={{ width: '10%' }}>
                                          <strong>{appendixSubtestRankVal(subtest.id)}</strong>
                                        </td>
                                      )}
                                      {appendixReducer[i].Abbreviation === 'WJ-IV ACH' ||
                                      appendixReducer[i].Abbreviation === 'BRIEF' ||
                                      appendixReducer[i].Abbreviation === 'NEPSY-II' ||
                                      appendixReducer[i].Abbreviation === 'Vineland-II' ||
                                      appendixReducer[i].Abbreviation === 'CTONI-2' ||
                                      appendixReducer[i].Abbreviation === 'WISC-V' ||
                                      appendixReducer[i].Abbreviation === 'WAIS-IV' ||
                                      appendixReducer[i].Abbreviation === 'WASI-II' ||
                                      appendixReducer[i].Abbreviation === 'WJ-IV COG' ||
                                      appendixReducer[i].Abbreviation === 'WPPSI-IV' ||
                                      appendixReducer[i].Abbreviation === 'Beery VMI' ||
                                      appendixReducer[i].Abbreviation === 'MMPI-2' ||
                                      appendixReducer[i].Abbreviation === 'MMPI-A' ||
                                      appendixReducer[i].Abbreviation === 'PIY' ||
                                      appendixReducer[i].Abbreviation === 'TSCC' ||
                                      appendixReducer[i].Abbreviation === 'D-KEFS' ? null : (
                                        <td style={{ width: '10%' }}>
                                          <strong>
                                            {appendixSubtestGradeEquivalentVal(subtest.id)}
                                          </strong>
                                        </td>
                                      )}
                                      {appendixReducer[i].Abbreviation === 'DAS-II' ||
                                      appendixReducer[i].Abbreviation === 'PIY' ? null : (
                                        <td style={{ width: '10%' }}>
                                          <strong>
                                            {appendixSubtestClassificationVal(subtest.id)}
                                          </strong>
                                        </td>
                                      )}
                                    </tr>
                                  ))}
                                  {appendixReducer[i].Abbreviation === 'D-KEFS' &&
                                  (p.ParentScaleTitle === 'Verbal Fluency' ||
                                    p.ParentScaleTitle === 'Design Fluency' ||
                                    p.ParentScaleTitle === 'Color-Word Interference Test' ||
                                    p.ParentScaleTitle === 'Sorting Test' ||
                                    p.ParentScaleTitle === 'Twenty Questions' ||
                                    p.ParentScaleTitle === 'Word Context Test' ||
                                    p.ParentScaleTitle === 'Tower Test' ||
                                    p.ParentScaleTitle === 'Proverb Test') ? (
                                    <tr className="table__row">
                                      <td style={{ width: '50%' }}>
                                        {<strong>Summary of Scores</strong>}
                                      </td>
                                      <td style={{ width: '10%' }}>
                                        <strong>
                                          {appendixSubtestSummaryOfScoresScoreVal(p.Id)}
                                        </strong>
                                      </td>
                                      <td style={{ width: '20%' }}>
                                        <strong>
                                          {appendixSubtestSummaryOfScoresClassificationVal(p.Id)}
                                        </strong>
                                      </td>
                                    </tr>
                                  ) : null}
                                </table>
                              </div>
                            ))
                          : null}
                        {a.ParentGroupSubScales !== undefined
                          ? a.ParentGroupSubScales.map((pgs) => (
                              <div key={pgs.Id}>
                                <h6>{pgs.ParentGroupSubScaleName}</h6>
                                {pgs.ParentScale.map((p) => (
                                  <div key={p.Id}>
                                    <h5>{p.ParentScaleTitle}</h5>
                                    <table className="test-table test-table--appendix">
                                      <tr className="table__row table__header">
                                        <th style={{ width: '50%' }}>Subtest</th>
                                        <th style={{ width: '10%' }}>Score</th>
                                        <th style={{ width: '10%' }}>% Rank</th>
                                        {appendixReducer[i].Abbreviation === 'WJ-IV ACH' ||
                                        appendixReducer[i].Abbreviation === 'BRIEF' ||
                                        appendixReducer[i].Abbreviation === 'Conners-3' ||
                                        appendixReducer[i].Abbreviation === 'RBANS' ||
                                        appendixReducer[i].Abbreviation === 'CARS-2' ||
                                        appendixReducer[i].Abbreviation === 'WRAML2' ? null : (
                                          <th style={{ width: '10%' }}>Gr. Eqv.</th>
                                        )}
                                        <th style={{ width: '20%' }}>Classification</th>
                                      </tr>
                                      {p.SubTests.map((subtest) => (
                                        <tr key={subtest.id} className="table__row">
                                          <td style={{ width: '50%' }}>{subtest.name}</td>
                                          <td style={{ width: '10%' }}>
                                            <strong>{appendixSubtestScoreVal(subtest.id)}</strong>
                                          </td>
                                          <td style={{ width: '10%' }}>
                                            <strong>{appendixSubtestRankVal(subtest.id)}</strong>
                                          </td>
                                          {appendixReducer[i].Abbreviation === 'WJ-IV ACH' ||
                                          appendixReducer[i].Abbreviation === 'BRIEF' ||
                                          appendixReducer[i].Abbreviation === 'Conners-3' ||
                                          appendixReducer[i].Abbreviation === 'RBANS' ||
                                          appendixReducer[i].Abbreviation === 'CARS-2' ||
                                          appendixReducer[i].Abbreviation === 'WRAML2' ? null : (
                                            <td style={{ width: '10%' }}>
                                              <strong>
                                                {appendixSubtestGradeEquivalentVal(subtest.id)}
                                              </strong>
                                            </td>
                                          )}
                                          <td style={{ width: '20%' }}>
                                            <strong>
                                              {appendixSubtestClassificationVal(subtest.id)}
                                            </strong>
                                          </td>
                                        </tr>
                                      ))}
                                    </table>
                                  </div>
                                ))}
                                {appendixReducer[i].Abbreviation === 'RBANS' ? (
                                  <table className="test-table test-table--appendix">
                                    <tr className="table__row table__header">
                                      <th style={{ width: '50%' }}>Total Scale Score</th>
                                      <th style={{ width: '10%' }}>Scaled Score</th>
                                      <th style={{ width: '10%' }}>% Rank</th>
                                      <th style={{ width: '20%' }}>Classification</th>
                                    </tr>
                                    <tr className="table__row">
                                      <td style={{ width: '50%' }}>{rbansTotalScaleScore}</td>
                                      <td style={{ width: '10%' }}>
                                        <strong>{rbansTotalScaleScoreScaledScore}</strong>
                                      </td>
                                      <td style={{ width: '10%' }}>
                                        <strong>{rbansTotalScaleScorePercentileRank}</strong>
                                      </td>
                                      <td style={{ width: '20%' }}>
                                        <strong>{rbansTotalScaleScoreRange}</strong>
                                      </td>
                                    </tr>
                                  </table>
                                ) : null}
                              </div>
                            ))
                          : null}
                        {a.ParentGroupScales !== undefined
                          ? a.ParentGroupScales.map((pgs) => (
                              <div key={pgs.Id}>
                                {pgs.ParentScaleTitles !== undefined ? (
                                  <div>
                                    <h6>{pgs.ParentGroupScaleName}</h6>
                                    {pgs.ParentScaleTitles.map((pst) => (
                                      <div key={pst.Id}>
                                        <h5>{pst.ParentScaleName}</h5>
                                        <table className="test-table test-table--appendix">
                                          <tr className="table__row table__header">
                                            <th style={{ width: '50%' }}>Subtest</th>
                                            <th style={{ width: '10%' }}>Score</th>
                                            <th style={{ width: '10%' }}>% Rank</th>
                                            {appendixReducer[i].Abbreviation === 'WJ-IV ACH' ||
                                            appendixReducer[i].Abbreviation === 'BRIEF' ||
                                            appendixReducer[i].Abbreviation === 'Conners-3' ||
                                            appendixReducer[i].Abbreviation === 'RBANS' ||
                                            appendixReducer[i].Abbreviation === 'WRAML2' ||
                                            appendixReducer[i].Abbreviation === 'WISC-V' ||
                                            appendixReducer[i].Abbreviation === 'BASC-3' ? null : (
                                              <th style={{ width: '10%' }}>Gr. Eqv.</th>
                                            )}
                                            <th style={{ width: '20%' }}>Classification</th>
                                          </tr>
                                          {pst.SubTests.map((subtest) => (
                                            <tr key={subtest.id} className="table__row">
                                              <td style={{ width: '50%' }}>{subtest.name}</td>
                                              <td style={{ width: '10%' }}>
                                                <strong>
                                                  {appendixSubtestScoreVal(subtest.id)}
                                                </strong>
                                              </td>
                                              <td style={{ width: '10%' }}>
                                                <strong>
                                                  {appendixSubtestRankVal(subtest.id)}
                                                </strong>
                                              </td>
                                              {appendixReducer[i].Abbreviation === 'WJ-IV ACH' ||
                                              appendixReducer[i].Abbreviation === 'BRIEF' ||
                                              appendixReducer[i].Abbreviation === 'Conners-3' ||
                                              appendixReducer[i].Abbreviation === 'RBANS' ||
                                              appendixReducer[i].Abbreviation === 'WRAML2' ||
                                              appendixReducer[i].Abbreviation === 'WISC-V' ||
                                              appendixReducer[i].Abbreviation ===
                                                'BASC-3' ? null : (
                                                <td style={{ width: '10%' }}>
                                                  <strong>
                                                    {appendixSubtestGradeEquivalentVal(subtest.id)}
                                                  </strong>
                                                </td>
                                              )}
                                              <td style={{ width: '20%' }}>
                                                <strong>
                                                  {appendixSubtestClassificationVal(subtest.id)}
                                                </strong>
                                              </td>
                                            </tr>
                                          ))}
                                        </table>
                                      </div>
                                    ))}
                                  </div>
                                ) : null}
                                {pgs.ParentGroupSubScales !== undefined ? (
                                  <div>
                                    <h6>{pgs.ParentGroupScaleName}</h6>
                                    {pgs.ParentGroupSubScales.map((pgss) => (
                                      <div key={`pgss-${pgss.Id}`}>
                                        <h4 className="parentGroupSubScale__parentGroupSubScaleName">
                                          {pgss.ParentGroupSubScaleName}
                                        </h4>
                                        {pgss.ParentScaleTitles.map((pst) => (
                                          <div key={pst.Id}>
                                            <h5>{pst.ParentScaleName}</h5>
                                            <table className="test-table test-table--appendix">
                                              <tr className="table__row table__header">
                                                <th style={{ width: '50%' }}>Subtest</th>
                                                <th style={{ width: '10%' }}>Score</th>
                                                <th style={{ width: '10%' }}>% Rank</th>
                                                {appendixReducer[i].Abbreviation === 'WJ-IV ACH' ||
                                                appendixReducer[i].Abbreviation === 'BRIEF' ||
                                                appendixReducer[i].Abbreviation === 'Conners-3' ||
                                                appendixReducer[i].Abbreviation === 'RBANS' ||
                                                appendixReducer[i].Abbreviation === 'WRAML2' ||
                                                appendixReducer[i].Abbreviation === 'WISC-V' ||
                                                appendixReducer[i].Abbreviation ===
                                                  'BASC-3' ? null : (
                                                  <th style={{ width: '10%' }}>Gr. Eqv.</th>
                                                )}
                                                <th style={{ width: '20%' }}>Classification</th>
                                              </tr>
                                              {pst.SubTests.map((subtest) => (
                                                <tr key={subtest.id} className="table__row">
                                                  <td style={{ width: '50%' }}>{subtest.name}</td>
                                                  <td style={{ width: '10%' }}>
                                                    <strong>
                                                      {appendixSubtestScoreVal(subtest.id)}
                                                    </strong>
                                                  </td>
                                                  <td style={{ width: '10%' }}>
                                                    <strong>
                                                      {appendixSubtestRankVal(subtest.id)}
                                                    </strong>
                                                  </td>
                                                  {appendixReducer[i].Abbreviation ===
                                                    'WJ-IV ACH' ||
                                                  appendixReducer[i].Abbreviation === 'BRIEF' ||
                                                  appendixReducer[i].Abbreviation === 'Conners-3' ||
                                                  appendixReducer[i].Abbreviation === 'RBANS' ||
                                                  appendixReducer[i].Abbreviation === 'WRAML2' ||
                                                  appendixReducer[i].Abbreviation === 'WISC-V' ||
                                                  appendixReducer[i].Abbreviation ===
                                                    'BASC-3' ? null : (
                                                    <td style={{ width: '10%' }}>
                                                      <strong>
                                                        {appendixSubtestGradeEquivalentVal(
                                                          subtest.id,
                                                        )}
                                                      </strong>
                                                    </td>
                                                  )}
                                                  <td style={{ width: '20%' }}>
                                                    <strong>
                                                      {appendixSubtestClassificationVal(subtest.id)}
                                                    </strong>
                                                  </td>
                                                </tr>
                                              ))}
                                            </table>
                                          </div>
                                        ))}
                                      </div>
                                    ))}
                                  </div>
                                ) : null}
                              </div>
                            ))
                          : null}
                        {a.TestModules !== undefined
                          ? a.TestModules.map((t) => (
                              <div key={t.Id}>
                                <div className="domain__test">
                                  <h5 className="test-module">{t.Name}</h5>
                                  {t.ParentGroupScales.map((t) => (
                                    <div key={t.Id} className="test-table-heading">
                                      <h6 className="test-module">{t.ParentGroupScaleName}</h6>
                                      {t.ParentScaleTitles.map((t) => (
                                        <div key={t.Id} className="domain__test">
                                          <div>
                                            <h5>{t.ParentScaleTitle}</h5>
                                            <table className="test-table">
                                              <tr className="table__row table__header">
                                                <th style={{ width: '25%' }}>
                                                  {testSelectedReducer[i].SubTestType}
                                                </th>
                                                <th style={{ width: '15%' }}>
                                                  {testSelectedReducer[i].ScoreType}
                                                </th>
                                                <th style={{ width: '60%' }}>
                                                  {testSelectedReducer[i].DescriptionType}
                                                </th>
                                              </tr>
                                              {t.SubTests.map((t) => (
                                                <tr key={t.id} className="table__row">
                                                  <td>{t.name}</td>
                                                  <td>
                                                    <strong>{appendixSubtestScoreVal(t.id)}</strong>
                                                  </td>
                                                  <td>
                                                    <strong>
                                                      {appendixSubtestGradeEquivalentVal(t.id)}
                                                    </strong>
                                                  </td>
                                                  <td>
                                                    <strong>
                                                      {appendixSubtestSummaryOfScoresClassificationVal(
                                                        t.id,
                                                      )}
                                                    </strong>
                                                  </td>
                                                </tr>
                                              ))}
                                            </table>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))
                          : null}
                        {a.TestScoringTableScores !== undefined ? (
                          <div>
                            <table className="test-table test-table--appendix">
                              <tr className="table__row table__header">
                                <th style={{ width: '50%' }}>Subtest</th>
                                <th style={{ width: '10%' }}>Score</th>
                                <th style={{ width: '10%' }}>% Rank</th>
                                <th style={{ width: '20%' }}>Classification</th>
                              </tr>
                              {a.TestScoringTableScores.map((item) => (
                                <tr key={item.id} className="table__row">
                                  <td style={{ width: '50%' }}>{item.name}</td>
                                  <td style={{ width: '10%' }}>
                                    <strong>{appendixSubtestScoreVal(item.id)}</strong>
                                  </td>
                                  <td style={{ width: '10%' }}>
                                    <strong>{appendixSubtestRankVal(item.id)}</strong>
                                  </td>
                                  <td style={{ width: '20%' }}>
                                    <strong>{appendixSubtestClassificationVal(item.id)}</strong>
                                  </td>
                                </tr>
                              ))}
                            </table>
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </section>
                ) : null}
              </main>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>
              <div className="pdf-t__footer-spacer" />
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

PdfTemplate.propTypes = {
  data: PropTypes.object,
  values: PropTypes.object,
  testSelectedReducer: PropTypes.object,
  diName: PropTypes.string,
};

export default PdfTemplate;
