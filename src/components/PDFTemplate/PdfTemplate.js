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
      },
    },
  } = props;

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
  diName: PropTypes.string,
};

export default PdfTemplate;
