document.addEventListener("DOMContentLoaded", function() {
    const timetableData = {
        1: {
            "Monday": ["BIO 102", "MTH 101", "PHY 101", "CHM 101", "EES 101", "ECO 101", "PHY 102", "CHE 101", "BIO 101"],
            "Tuesday": ["ECO 101", "PHY 102", "CHE 101", "BIO 101", "CHM 102", "MTH 102", "EES 102", "PHY 103", "CHE 102"],
            "Wednesday": ["MTH 102", "EES 102", "PHY 103", "CHE 102", "BIO 103", "PHY 104", "MTH 103", "CHE 103", "ECO 103"],
            "Thursday": ["PHY 104", "MTH 103", "CHE 103", "ECO 103", "EES 103", "BIO 104", "CHE 104", "MTH 104", "PHY 105"],
            "Friday": ["BIO 104", "CHE 104", "MTH 104", "PHY 105", "CHM 105", "EES 104", "ECO 104", "PHY 106", "BIO 105"]
        }
    };

    for (let i = 2; i <= 6; i++) {
        timetableData[i] = JSON.parse(JSON.stringify(timetableData[1]));
    }

    const subjectColors = {};
    const predefinedColors = ["#f4a3a3", "#b0b7e8", "#d7d3a7", "#9cbde9", "#c7a9d5", "#a7d6c7", "#a1c7e8", "#f7c6b8", "#d2d9ab"];
    let colorIndex = 0;

    window.generateTimetable = function() {
        let semester = document.getElementById("semester").value;
        let timetable = document.getElementById("timetable");
        timetable.innerHTML = "<tr><th>Day</th><th>09:00-09:55</th><th>10:00-10:55</th><th>11:00-11:55</th><th>12:00-12:55</th><th>02:00-02:55</th><th>03:00-03:55</th><th>04:00-04:55</th><th>05:00-05:55</th><th>06:00-06:55</th></tr>";

        if (timetableData[semester]) {
            Object.keys(timetableData[semester]).forEach(day => {
                let row = timetable.insertRow();
                let dayCell = row.insertCell();
                dayCell.innerText = day;
                dayCell.style.fontWeight = "bold";

                timetableData[semester][day].forEach(subject => {
                    let cellElement = row.insertCell();
                    cellElement.innerText = subject;

                    if (!subjectColors[subject]) {
                        subjectColors[subject] = predefinedColors[colorIndex % predefinedColors.length];
                        colorIndex++;
                    }

                    cellElement.style.backgroundColor = subjectColors[subject];
                });
            });
        }
    };
});