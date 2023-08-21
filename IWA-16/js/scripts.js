const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
]
  
const data = {
    response: {
        requestType: "FETCH_ATHLETE_DATA",
        requestBy: "ALL_MATCHING_ATHLETES",
        forDisplay: "BEST_RACES",

        data: {
            NM372: {
                firstName: "Nwabisa",
                surname: "Masiko",
                id: "NM372",
                races: [
                    {
                        date: '2022-11-18T20:00:00.000Z',
                        time: [9, 7, 8, 6],
                    },
                    {
                        date: '2022-12-02T20:00:00.000Z',
                        time: [6, 7, 8, 7],
                    },
                ],
            },

            SV782: {
                firstName: "Schalk",
                surname: "Venter",
                id: "SV782",
                races: [
                    {
                        date: '2022-11-18T20:00:00.000Z',
                        time: [10, 8, 3, 12],
                    },
                    {
                        date: '2022-11-25T20:00:00.000Z',
                        time: [6, 8, 9, 11],
                    },
                    {
                        date: '2022-12-02T20:00:00.000Z',
                        time: [10, 11, 4, 8],
                    },
                    {
                        date: '2022-12-09T20:00:00.000Z',
                        time: [9, 8, 9, 11],
                    },
                ],
            },
        },
    },
};
  

// Only edit below this comment

const {
    NM372: athlete1,
    SV782: athlete2
} = data.response.data;

/**
 * Creates an HTML fragment displaying the information of an athlete's latest
 * race.
 * @param {object} athlete 
 * @returns {DocumentFragment} 
 */
const createHtml = (athlete) => {
    const getLatestRaceInfo = (athlete) => {
        const [latestRace] = athlete.races.reverse().slice(0, 1);
        const { date: raceDate, time: raceTime } = latestRace;
        return {raceDate, raceTime};
    }

    const athleteLatestRace = getLatestRaceInfo(athlete);
 
    const dateOfRace = new Date (athleteLatestRace.raceDate);
    const timeOfRace = athleteLatestRace.raceTime.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    const hours = Math.floor(timeOfRace / 60);
    const minutes = timeOfRace % 60;

    const formattedDate = `${dateOfRace.getDate()} ${MONTHS[dateOfRace.getMonth()]} ${dateOfRace.getFullYear()}`
    const formattedTime = `${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}`

    const totalRaces = athlete.races.length

    const fragment = document.createDocumentFragment();

    const title = document.createElement("h2");
    title.innerText = athlete.id;
    fragment.appendChild(title);

    const list = document.createElement("dl");
    list.innerHTML = `
    <dt> Athlete: </dt> 
    <dd> ${athlete.firstName} ${athlete.surname}</dd>
    <dt>Total Races:</dt>
    <dd> ${totalRaces} </dd>
    <dt>Event Date (Latest):</dt>
    <dd> ${formattedDate} </dd>
    <dt>Total Time (Latest):</dt>
    <dd> ${formattedTime} </dd>
    `

    fragment.appendChild(list);
    
    return fragment;
}

document.querySelector("[data-athlete='NM372']").appendChild(createHtml(athlete1));
document.querySelector("[data-athlete='SV782']").appendChild(createHtml(athlete2));
